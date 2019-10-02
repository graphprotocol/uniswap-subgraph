import { BigInt, BigDecimal, Address, log } from '@graphprotocol/graph-ts'
import {
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer
} from '../types/templates/Exchange/Exchange'

import {
  User,
  UserExchangeData,
  Transaction,
  Exchange,
  Uniswap,
  ExchangeHistoricalData,
  ExchangeDayData,
  AddLiquidityEvent,
  RemoveLiquidityEvent,
  TokenPurchaseEvent,
  EthPurchaseEvent
} from '../types/schema'
import { uniswapUSDOracle } from './uniswapOracle'

/************************************
 ********** Helpers ***********
 ************************************/

function exponentToBigDecimal(decimals: i32): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = 0; i < decimals; i++) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

function equalToZero(value: BigDecimal): boolean {
  const formattedVal = parseFloat(value.toString())
  const zero = parseFloat(BigDecimal.fromString('0').toString())
  if (zero == formattedVal) {
    return true
  }
  return false
}

function createUserDataEntity(id: string, user: Address, exchange: Address): void {
  const userExchangeData = new UserExchangeData(id)

  userExchangeData.userAddress = user
  userExchangeData.exchangeAddress = exchange

  userExchangeData.ethDeposited = BigDecimal.fromString('0')
  userExchangeData.tokensDeposited = BigDecimal.fromString('0')
  userExchangeData.ethWithdrawn = BigDecimal.fromString('0')
  userExchangeData.tokensWithdrawn = BigDecimal.fromString('0')
  userExchangeData.uniTokenBalance = BigDecimal.fromString('0')

  userExchangeData.ethBought = BigDecimal.fromString('0')
  userExchangeData.ethSold = BigDecimal.fromString('0')
  userExchangeData.tokensBought = BigDecimal.fromString('0')
  userExchangeData.tokensSold = BigDecimal.fromString('0')
  userExchangeData.ethFeesPaid = BigDecimal.fromString('0')
  userExchangeData.tokenFeesPaid = BigDecimal.fromString('0')
  userExchangeData.ethFeesInUSD = BigDecimal.fromString('0')
  userExchangeData.tokenFeesInUSD = BigDecimal.fromString('0')
  userExchangeData.save()
}

export function handleTokenPurchase(event: TokenPurchase): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  if (exchange == null) {
    const ethAmount = event.params.eth_sold.toBigDecimal().div(exponentToBigDecimal(18))
    let tokenAmount: BigDecimal
    if (exchange.tokenDecimals == null || exchange.tokenDecimals == 0) {
      tokenAmount = event.params.tokens_bought.toBigDecimal()
    } else {
      tokenAmount = event.params.tokens_bought.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
    }
    exchange.ethBalance = exchange.ethBalance.plus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.minus(tokenAmount)
    exchange.buyTokenCount = exchange.buyTokenCount.plus(BigInt.fromI32(1))
    exchange.lastPrice = exchange.price

    // Don't need check to divide by zero here, token is the numerator
    exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
    exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)
    exchange.tradeVolumeToken = exchange.tradeVolumeToken.plus(tokenAmount)
    exchange.tradeVolumeEth = exchange.tradeVolumeEth.plus(ethAmount)
    exchange.totalValue = exchange.totalValue.plus(tokenAmount.times(exchange.price)).truncate(18)
    exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolumeToken).truncate(18)

    /****** Update User ******/
    const userID = event.params.buyer.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.buyer.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)

    // if no userExchangeData yet create new one
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.buyer, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    //update values
    userExchangeData.ethSold = userExchangeData.ethSold.plus(ethAmount)
    userExchangeData.tokensBought = userExchangeData.tokensBought.plus(tokenAmount)

    const originalEthValue = ethAmount.div(BigDecimal.fromString('1').minus(exchange.fee))
    const fee = originalEthValue.minus(ethAmount).truncate(18)
    userExchangeData.ethFeesPaid = userExchangeData.ethFeesPaid.plus(fee)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (equalToZero(oneUSDInEth)) {
      // do nothing, it is one of the first few blocks before dai token traded
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = BigDecimal.fromString('0')
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
          .truncate(18)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth).truncate(18)
      }
      exchange.weightedAvgPriceUSD = BigDecimal.fromString('1000000000000000000')
        .div(oneUSDInEth)
        .div(exchange.weightedAvgPrice)
        .truncate(18)
      userExchangeData.ethFeesInUSD = BigDecimal.fromString('1000000000000000000')
        .times(userExchangeData.ethFeesPaid)
        .div(oneUSDInEth)
        .truncate(18)
    }

    // ROI calculations
    // if (equalToZero(exchange.price)) {
    //   // do nothing. it will cause a div by zero failure
    // } else {
    //   const totalTokensToEth = exchange.tokenBalance.div(exchange.price)
    //   const liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
    //   const totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
    //   const totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
    //   if (equalToZero(totalLiquidityValue)) {
    //     // do nothing. it would cause a div by zero failure
    //   } else {
    //     exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
    //   }
    // }

    exchange.save()
    userExchangeData.save()

    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
    uniswap.totalVolumeUSD = uniswap.totalVolumeInEth.times(exchange.price).times(exchange.priceUSD)
    uniswap.totalTokenBuys = uniswap.totalTokenBuys.plus(BigInt.fromI32(1))
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
    uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
    uniswap.save()

    /******** CREATE TRADE EVENT  ********/
    const eventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
    const tokenPurchaseEvent = new TokenPurchaseEvent(eventID.toString())
    tokenPurchaseEvent.eth = ethAmount
    tokenPurchaseEvent.token = tokenAmount
    tokenPurchaseEvent.tokenFee = BigDecimal.fromString('0')
    tokenPurchaseEvent.ethFee = fee
    tokenPurchaseEvent.save()

    /****** Update Transaction ******/
    // check for existing
    let transaction = Transaction.load(event.transaction.hash.toHexString())
    if (transaction == null) {
      transaction = new Transaction(event.transaction.hash.toHexString())
    }
    const tokenPurchaseEvents = transaction.tokenPurchaseEvents || []
    tokenPurchaseEvents.push(tokenPurchaseEvent.id)
    transaction.tokenPurchaseEvents = tokenPurchaseEvents
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.buyer
    transaction.fee = fee
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/

    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'TokenPurchase'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.ROI = exchange.ROI
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = fee
    eh.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400 // presumably this should be rounded to an int
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = BigDecimal.fromString('0')
      exchangeDayData.tokenBalance = BigDecimal.fromString('0')
      exchangeDayData.marginalEthRate = BigDecimal.fromString('0')
      exchangeDayData.ethVolume = BigDecimal.fromString('0')
      exchangeDayData.ROI = BigDecimal.fromString('0')
      exchangeDayData.totalEvents = BigInt.fromI32(0)
      exchangeDayData.tokenPriceUSD = BigDecimal.fromString('0')
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (equalToZero(exchange.ethBalance)) {
      // do nothing
    } else {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.ethVolume = exchangeDayData.ethVolume.plus(ethAmount)
    exchangeDayData.ROI = exchange.ROI
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(BigInt.fromI32(1))
    exchangeDayData.save()
  }
}

export function handleEthPurchase(event: EthPurchase): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange == null) {
    const ethAmount = event.params.eth_bought.toBigDecimal().div(exponentToBigDecimal(18))
    let tokenAmount: BigDecimal
    if (exchange.tokenDecimals == null) {
      tokenAmount = event.params.tokens_sold.toBigDecimal()
    } else {
      tokenAmount = event.params.tokens_sold.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
    }
    exchange.ethBalance = exchange.ethBalance.minus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.plus(tokenAmount)
    exchange.sellTokenCount = exchange.sellTokenCount.plus(BigInt.fromI32(1))
    exchange.lastPrice = exchange.price

    // Here we must handle div by zero, because someone could have bought all the eth or all the tokens
    if (equalToZero(exchange.ethBalance)) {
      exchange.price = BigDecimal.fromString('0')
    } else {
      exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
      exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)
    }

    exchange.tradeVolumeToken = exchange.tradeVolumeToken.plus(tokenAmount)
    exchange.tradeVolumeEth = exchange.tradeVolumeEth.plus(ethAmount)
    exchange.totalValue = exchange.totalValue.plus(tokenAmount.times(exchange.price)).truncate(18)
    exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolumeToken).truncate(18)

    /****** Update User ******/
    // It is conceivable that user does not exist yet here
    const userID = event.params.buyer.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.buyer.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.buyer, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    userExchangeData.ethBought = userExchangeData.ethBought.plus(ethAmount)
    userExchangeData.tokensSold = userExchangeData.tokensSold.plus(tokenAmount)

    // Fee Calculations
    const originalTokenValue = tokenAmount.div(BigDecimal.fromString('1').minus(exchange.fee))
    const fee = originalTokenValue.minus(tokenAmount).truncate(18)
    userExchangeData.tokenFeesPaid = userExchangeData.tokenFeesPaid.plus(fee)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (equalToZero(oneUSDInEth)) {
      // do nothing, dai price oracle has not been set yet in the compound contract
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = BigDecimal.fromString('0')
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth)
      }
      exchange.weightedAvgPriceUSD = BigDecimal.fromString('1000000000000000000')
        .div(oneUSDInEth)
        .div(exchange.weightedAvgPrice)
      userExchangeData.tokenFeesInUSD = BigDecimal.fromString('1000000000000000000')
        .times(userExchangeData.tokenFeesPaid)
        .div(oneUSDInEth)
        .div(exchange.price)
    }

    // ROI calculations
    if (equalToZero(exchange.price)) {
      // do nothing. it will cause a div by zero failure
    } else {
      const totalTokensToEth = exchange.tokenBalance.div(exchange.price)
      const liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
      const totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
      const totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
      if (equalToZero(totalLiquidityValue)) {
        // do nothing. it would cause a div by zero failure
      } else {
        exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
      }
    }

    exchange.save()
    userExchangeData.save()

    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
    uniswap.totalVolumeUSD = uniswap.totalVolumeInEth.times(exchange.price).times(exchange.priceUSD)
    uniswap.totalTokenSells = uniswap.totalTokenSells.plus(BigInt.fromI32(1))
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
    uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
    uniswap.save()

    /*** Create Trade Event ******/
    const eventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
    const ethPurchaseEvent = new EthPurchaseEvent(eventID.toString())
    ethPurchaseEvent.eth = ethAmount
    ethPurchaseEvent.tokenFee = fee
    ethPurchaseEvent.ethFee = BigDecimal.fromString('0')
    ethPurchaseEvent.token = tokenAmount
    ethPurchaseEvent.save()

    /****** Update Transaction ******/
    let transaction = Transaction.load(event.transaction.hash.toHexString())
    if (transaction == null) {
      transaction = new Transaction(event.transaction.hash.toHexString())
    }
    const ethPurchaseEvents = transaction.ethPurchaseEvents || []
    ethPurchaseEvents.push(ethPurchaseEvent.id)
    transaction.ethPurchaseEvents = ethPurchaseEvents
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.buyer
    transaction.fee = fee
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/

    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'EthPurchase'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.ROI = exchange.ROI
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = fee
    if (equalToZero(exchange.price)) {
      eh.feeInEth = BigDecimal.fromString('0') // Fee isn't actually zero here, but its hard to calculate this value
    } else {
      eh.feeInEth = fee.div(exchange.price).truncate(18)
      eh.save()
    }

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400 // presumably this should be rounded to an int
    const dayStartTimestamp = dayID * 86400
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = BigDecimal.fromString('0')
      exchangeDayData.tokenBalance = BigDecimal.fromString('0')
      exchangeDayData.marginalEthRate = BigDecimal.fromString('0')
      exchangeDayData.ethVolume = BigDecimal.fromString('0')
      exchangeDayData.ROI = BigDecimal.fromString('0')
      exchangeDayData.totalEvents = BigInt.fromI32(0)
      exchangeDayData.tokenPriceUSD = BigDecimal.fromString('0')
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (equalToZero(exchange.ethBalance)) {
      // do nothing
    } else {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.ethVolume = exchangeDayData.ethVolume.plus(ethAmount)
    exchangeDayData.ROI = exchange.ROI
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(BigInt.fromI32(1))
    exchangeDayData.save()
  }
}

// Note - function addLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleAddLiquidity(event: AddLiquidity): void {
  log.info('mybug start of the new handle ----', [])
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  log.info('mybug the exchange is {}', [exchangeID.toString()])
  const exchange = Exchange.load(exchangeID)

  if (exchange == null) {
    const ethAmount = event.params.eth_amount.toBigDecimal().div(exponentToBigDecimal(18))
    log.info('mybug eth amount is {} ', [ethAmount.toString()])
    log.info('mybug token amount is {} ', [event.params.token_amount.toString()])

    let tokenAmount: BigDecimal
    log.info('mybug the token decimals are 0? {}', [exchange.tokenDecimals == 0 ? 'true' : 'false'])

    const eDec = exponentToBigDecimal(exchange.tokenDecimals)

    log.info('mybug eDec is {}', [eDec.toString()])

    log.info('mybug was able to convert', [])

    if (exchange.tokenDecimals == null || exchange.tokenDecimals == 0) {
      tokenAmount = event.params.token_amount.toBigDecimal()
    } else {
      tokenAmount = event.params.token_amount.toBigDecimal().div(eDec)
    }

    log.info('mybug got to here &&&&&&', [])

    exchange.ethBalance = exchange.ethBalance.plus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.plus(tokenAmount)
    exchange.ethLiquidity = exchange.ethLiquidity.plus(ethAmount)
    exchange.tokenLiquidity = exchange.tokenLiquidity.plus(tokenAmount)
    exchange.addLiquidityCount = exchange.addLiquidityCount.plus(BigInt.fromI32(1))
    exchange.lastPrice = exchange.price

    // Don't need check to divide by zero here, adding liquidity would make it impossible
    log.info('mybug the eth balance is {}', [exchange.ethBalance.toString()])
    log.info('mybug the price to truncate is {}', [exchange.tokenBalance.div(exchange.ethBalance).toString()])
    exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
    exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)

    /****** Update User ******/
    const userID = event.params.provider.toHex()
    let user = User.load(userID)
    if (user == null) {
      user = new User(userID)
      user.save()
    }

    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.provider.toHexString())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.provider, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }

    // add liquidity provider to list of token holders
    const holders = exchange.tokenHolders
    holders.push(userExchangeData.id)
    exchange.tokenHolders = holders
    exchange.save()

    userExchangeData.ethDeposited = userExchangeData.ethDeposited.plus(ethAmount)
    userExchangeData.tokensDeposited = userExchangeData.tokensDeposited.plus(tokenAmount)

    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (equalToZero(oneUSDInEth)) {
      // do nothing, dai price oracle has not been set yet in the compound contract
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = BigDecimal.fromString('0')
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth)
      }
    }

    // ROI calculations
    // if (equalToZero(exchange.price)) {
    //   // do nothing. it will cause a div by zero failure
    // } else {
    //   const totalTokensToEth = exchange.tokenBalance.div(exchange.price)
    //   const liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
    //   const totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
    //   const totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
    //   if (equalToZero(totalLiquidityValue)) {
    //     // do nothing. it would cause a div by zero failure
    //   } else {
    //     exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
    //   }
    // }

    exchange.save()
    userExchangeData.save()

    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    // times 2, because equal eth and tokens are always added or removed for liquidity
    uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.plus(ethAmount.times(BigDecimal.fromString('2')))
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD)
    log.info('mybug the total add liquidity is {}', [uniswap.totalAddLiquidity.toString()])
    uniswap.totalAddLiquidity = uniswap.totalAddLiquidity.plus(BigInt.fromI32(1))
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
    uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
    uniswap.save()

    /** Create Liquidity Event */
    log.info('mybug the total remove liquidity is {}', [uniswap.totalRemoveLiquidity.toString()])
    const eventId = uniswap.totalAddLiquidity.plus(uniswap.totalRemoveLiquidity)
    const addLiquidityEvent = new AddLiquidityEvent(eventId.toString())
    addLiquidityEvent.ethAmount = ethAmount
    addLiquidityEvent.tokenAmount = tokenAmount
    addLiquidityEvent.save()

    /****** Update Transaction ******/
    let transaction = Transaction.load(event.transaction.hash.toHexString())
    if (transaction == null) {
      transaction = new Transaction(event.transaction.hash.toHexString())
    }
    const addLiquidityEvents = transaction.addLiquidityEvents || []
    addLiquidityEvents.push(addLiquidityEvent.id)
    transaction.addLiquidityEvents = addLiquidityEvents
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.provider
    transaction.fee = BigDecimal.fromString('0')
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/
    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'AddLiquidity'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.ROI = exchange.ROI
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = BigDecimal.fromString('0')
    eh.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400 // presumably this should be rounded to an int
    const dayStartTimestamp = dayID * 86400

    log.info('mybug the day id is {}', [dayID.toString()])

    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = BigDecimal.fromString('0')
      exchangeDayData.tokenBalance = BigDecimal.fromString('0')
      exchangeDayData.marginalEthRate = BigDecimal.fromString('0')
      exchangeDayData.ethVolume = BigDecimal.fromString('0')
      exchangeDayData.ROI = BigDecimal.fromString('0')
      exchangeDayData.tokenPriceUSD = BigDecimal.fromString('0')
      exchangeDayData.totalEvents = BigInt.fromI32(0)
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (equalToZero(exchange.ethBalance)) {
      // do nothing
    } else {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.ROI = exchange.ROI
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(BigInt.fromI32(1))
    exchangeDayData.save()
  }
}

// Note - function removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  /****** Update Exchange ******/
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)

  if (exchange == null) {
    const ethAmount = event.params.eth_amount.toBigDecimal().div(exponentToBigDecimal(18))
    let tokenAmount: BigDecimal
    if (exchange.tokenDecimals == null || exchange.tokenDecimals == 0) {
      tokenAmount = event.params.token_amount.toBigDecimal()
    } else {
      tokenAmount = event.params.token_amount.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
    }
    exchange.ethBalance = exchange.ethBalance.minus(ethAmount)
    exchange.tokenBalance = exchange.tokenBalance.minus(tokenAmount)
    exchange.ethLiquidity = exchange.ethLiquidity.minus(ethAmount)
    exchange.tokenLiquidity = exchange.tokenLiquidity.minus(tokenAmount)
    exchange.removeLiquidityCount = exchange.removeLiquidityCount.plus(BigInt.fromI32(1))
    exchange.lastPrice = exchange.price
    // Here we must handle div by zero, because someone could have bought all the eth or all the tokens
    if (equalToZero(exchange.ethBalance)) {
      exchange.price = BigDecimal.fromString('0')
      exchange.combinedBalanceInEth = exchange.ethBalance
    } else {
      exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
      if (equalToZero(exchange.price)) {
        exchange.combinedBalanceInEth = exchange.ethBalance
      } else {
        exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)
      }
    }
    /****** Update UserExchangeData ******/
    const userExchangeID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params.provider.toHex())
    let userExchangeData = UserExchangeData.load(userExchangeID)
    if (userExchangeData == null) {
      createUserDataEntity(userExchangeID, event.params.provider, event.address)
      userExchangeData = UserExchangeData.load(userExchangeID) // reload here
    }
    userExchangeData.ethWithdrawn = userExchangeData.ethWithdrawn.plus(ethAmount)
    userExchangeData.tokensWithdrawn = userExchangeData.tokensWithdrawn.plus(tokenAmount)
    /****** Get ETH in USD Uniswap USD Tokens ******/
    const oneUSDInEth = uniswapUSDOracle(event.block.number)
    if (equalToZero(oneUSDInEth)) {
      // do nothing, dai price oracle has not been set yet in the compound contract
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      if (equalToZero(exchange.price)) {
        exchange.priceUSD = BigDecimal.fromString('0')
      } else {
        exchange.priceUSD = BigDecimal.fromString('1')
          .div(oneUSDInEth)
          .div(exchange.price)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth)
      }
    }
    // ROI calculations
    // if (equalToZero(exchange.price)) {
    //   // do nothing. it will cause a div by zero failure
    // } else {
    //   const totalTokensToEth = exchange.tokenBalance.div(exchange.price)
    //   const liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
    //   const totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
    //   const totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
    //   if (equalToZero(totalLiquidityValue)) {
    //     // do nothing. it would cause a div by zero failure
    //   } else {
    //     exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
    //   }
    // }
    exchange.save()
    userExchangeData.save()
    /****** Update Global Values ******/
    const uniswap = Uniswap.load('1')
    // times 2, because equal eth and tokens are always added or removed for liquidity
    uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.minus(ethAmount.times(BigDecimal.fromString('2')))
    uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD)
    uniswap.totalRemoveLiquidity = uniswap.totalRemoveLiquidity.plus(BigInt.fromI32(1))
    uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
    uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
    uniswap.save()

    /** Create Liquidity Event */
    const eventID = uniswap.totalAddLiquidity.plus(uniswap.totalRemoveLiquidity)
    const removeLiquidityEvent = new RemoveLiquidityEvent(eventID.toString())
    removeLiquidityEvent.ethAmount = ethAmount
    removeLiquidityEvent.tokenAmount = tokenAmount
    removeLiquidityEvent.save()

    /****** Update Transaction ******/
    let transaction = Transaction.load(event.transaction.hash.toHexString())
    if (transaction == null) {
      transaction = new Transaction(event.transaction.hash.toHexString())
    }
    const removeLiquidityEvents = transaction.removeLiquidityEvents || []
    removeLiquidityEvents.push(removeLiquidityEvent.id)
    transaction.removeLiquidityEvents = removeLiquidityEvents
    transaction.exchangeAddress = event.address
    transaction.block = event.block.number.toI32()
    transaction.timestamp = event.block.timestamp.toI32()
    transaction.user = event.params.provider
    transaction.fee = BigDecimal.fromString('0')
    transaction.save()

    /************************************
     * Handle the historical data below *
     ************************************/
    const eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
    eh.exchangeAddress = event.address
    eh.timestamp = event.block.timestamp.toI32()
    eh.type = 'RemoveLiquidity'
    eh.ethLiquidity = exchange.ethLiquidity
    eh.tokenLiquidity = exchange.tokenLiquidity
    eh.ethBalance = exchange.ethBalance
    eh.tokenBalance = exchange.tokenBalance
    eh.combinedBalanceInEth = exchange.combinedBalanceInEth
    eh.combinedBalanceInUSD = exchange.combinedBalanceInUSD
    eh.ROI = exchange.ROI
    eh.totalUniToken = exchange.totalUniToken
    eh.tokenPriceUSD = exchange.priceUSD
    eh.price = exchange.price
    eh.tradeVolumeToken = exchange.tradeVolumeToken
    eh.tradeVolumeEth = exchange.tradeVolumeEth
    eh.feeInEth = BigDecimal.fromString('0')
    eh.save()

    // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
    // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
    const timestamp = event.block.timestamp.toI32()
    const dayID = timestamp / 86400 // presumably this should be rounded to an int
    const dayStartTimestamp = dayID * 86400
    log.info('this is the dayid: {}', [dayID.toString()])
    const id = event.address
      .toHexString()
      .concat('-')
      .concat(BigInt.fromI32(dayID).toString())
    let exchangeDayData = ExchangeDayData.load(id)
    if (exchangeDayData == null) {
      exchangeDayData = new ExchangeDayData(id)
      exchangeDayData.date = dayStartTimestamp
      exchangeDayData.exchangeAddress = event.address
      exchangeDayData.ethBalance = BigDecimal.fromString('0')
      exchangeDayData.tokenBalance = BigDecimal.fromString('0')
      exchangeDayData.marginalEthRate = BigDecimal.fromString('0')
      exchangeDayData.ethVolume = BigDecimal.fromString('0')
      exchangeDayData.ROI = BigDecimal.fromString('0')
      exchangeDayData.totalEvents = BigInt.fromI32(0)
      exchangeDayData.tokenPriceUSD = BigDecimal.fromString('0')
    }
    exchangeDayData.ethBalance = exchange.ethBalance
    exchangeDayData.tokenBalance = exchange.tokenBalance
    if (equalToZero(exchange.ethBalance)) {
      // do nothing
    } else {
      exchangeDayData.marginalEthRate = exchange.tokenBalance.div(exchange.ethBalance).truncate(8)
    }
    exchangeDayData.ROI = exchange.ROI
    exchangeDayData.tokenPriceUSD = exchange.priceUSD
    exchangeDayData.totalEvents = exchangeDayData.totalEvents.plus(BigInt.fromI32(1))
    exchangeDayData.save()
  }
}

export function handleTransfer(event: Transfer): void {
  const exchangeID = event.address.toHex()
  const exchange = Exchange.load(exchangeID)
  if (exchange == null) {
    const userToID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params._to.toHex())
    const userFromID = exchange.tokenAddress
      .toHexString()
      .concat('-')
      .concat(event.params._from.toHex())
    const uniTokens = event.params._value.toBigDecimal().div(exponentToBigDecimal(18))

    // Handle Minting Case
    if (event.params._from.toHex() == '0x0000000000000000000000000000000000000000') {
      exchange.totalUniToken = exchange.totalUniToken.plus(uniTokens)
      let userTo = UserExchangeData.load(userToID)
      if (userTo == null) {
        createUserDataEntity(userToID, event.params._to, event.address)
        userTo = UserExchangeData.load(userToID)
      }
      userTo.uniTokenBalance = userTo.uniTokenBalance.plus(uniTokens)
      exchange.save()
      userTo.save()

      // Handle Burning Case
    } else if (event.params._to.toHex() == '0x0000000000000000000000000000000000000000') {
      exchange.totalUniToken = exchange.totalUniToken.minus(uniTokens)
      let userFrom = UserExchangeData.load(userFromID)
      if (userFrom == null) {
        createUserDataEntity(userFromID, event.params._from, event.address)
        userFrom = UserExchangeData.load(userFromID)
      }
      userFrom.uniTokenBalance = userFrom.uniTokenBalance.minus(uniTokens)

      exchange.save()
      userFrom.save()

      // Handle normal transfer cases
    } else {
      if (equalToZero(exchange.totalUniToken)) {
        log.error('exchange.totalUniToken is zero, ignoring transfer', [])
        return
      }
      const ratio = event.params._value.toBigDecimal().div(exchange.totalUniToken)
      const ethTransferred = ratio.times(exchange.ethBalance)
      const tokenTransferred = ratio.times(exchange.tokenBalance)

      let userTo = UserExchangeData.load(userToID)
      if (userTo == null) {
        createUserDataEntity(userToID, event.params._to, event.address)
        userTo = UserExchangeData.load(userToID)
      }

      let userFrom = UserExchangeData.load(userFromID)
      if (userFrom == null) {
        createUserDataEntity(userFromID, event.params._from, event.address)
        userFrom = UserExchangeData.load(userFromID)
      }

      // Note - a transfer is considered a direct buy and sell of eth and tokens from 1 user to another
      userTo.ethBought = userTo.ethBought.plus(ethTransferred)
      userTo.tokensBought = userTo.tokensBought.plus(tokenTransferred)
      userTo.uniTokenBalance = userTo.uniTokenBalance.plus(uniTokens)
      userFrom.ethBought = userTo.ethBought.minus(ethTransferred)
      userFrom.tokensBought = userTo.tokensBought.minus(tokenTransferred)
      userFrom.uniTokenBalance = userTo.uniTokenBalance.minus(uniTokens)
      userTo.save()
      userFrom.save()
    }

    /****** Create User  Entities ******/
    let userFromEntity = User.load(event.params._from.toHex())
    if (userFromEntity == null) {
      userFromEntity = new User(event.params._from.toHex())
      userFromEntity.save()
    }
    let userToEntity = User.load(event.params._to.toHex())
    if (userToEntity == null) {
      userToEntity = new User(event.params._to.toHex())
      userToEntity.save()
    }
  }
}
