import {BigInt, BigDecimal, Address} from '@graphprotocol/graph-ts'
import {
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer,
} from '../types/Factory/templates/Exchange/Exchange'

import {
  User,
  UserExchangeData,
  Transaction,
  Exchange,
  Uniswap,
  TradeEvent,
  LiquidityEvent,
  ExchangeHistoricalData, ExchangeDayData
} from '../types/schema'
import {uniswapUSDOracle} from "./uniswapOracle";

export function handleTokenPurchase(event: TokenPurchase): void {
  /****** Update Exchange ******/
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  let ethAmount = event.params.eth_sold.toBigDecimal().div(exponentToBigDecimal(18))
  let tokenAmount: BigDecimal
  if (exchange.tokenDecimals == null) {
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
  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
    user.save()
  }

  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenAddress.toHexString().concat('-').concat(event.params.buyer.toHex())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  if (userExchangeData == null) {
    createUserDataEntity(userExchangeID, event.params.buyer, event.address)
    userExchangeData = UserExchangeData.load(userExchangeID) // reload here
  }
  userExchangeData.ethSold = userExchangeData.ethSold.plus(ethAmount)
  userExchangeData.tokensBought = userExchangeData.tokensBought.plus(tokenAmount)

  let originalEthValue = ethAmount.div(BigDecimal.fromString("1").minus(exchange.fee))
  let fee = originalEthValue.minus(ethAmount).truncate(18)
  userExchangeData.ethFeesPaid = userExchangeData.ethFeesPaid.plus(fee)

  /****** Get ETH in USD Uniswap USD Tokens ******/
  let oneUSDInEth = uniswapUSDOracle(event.block.number)
  if (oneUSDInEth.equals(BigDecimal.fromString("0"))) {
    // do nothing, it is one of the first few blocks before dai token traded
  } else {
    exchange.lastPriceUSD = exchange.priceUSD
    if (exchange.price.equals(BigDecimal.fromString("0"))) {
      exchange.priceUSD = BigDecimal.fromString("0")
    } else {
      exchange.priceUSD = BigDecimal.fromString("1").div(oneUSDInEth).div(exchange.price).truncate(4)
      exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth).truncate(4)
    }
    exchange.weightedAvgPriceUSD = BigDecimal.fromString("1000000000000000000").div(oneUSDInEth).div(exchange.weightedAvgPrice).truncate(4)
    userExchangeData.ethFeesInUSD = BigDecimal.fromString("1000000000000000000").times(userExchangeData.ethFeesPaid).div(oneUSDInEth).truncate(4)
  }

// ROI calculations
  if (exchange.price.equals(BigDecimal.fromString("0"))) {
    // do nothing. it will cause a div by zero failure
  } else {
    let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
    let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
    let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
    let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
    if (totalLiquidityValue.equals(BigDecimal.fromString("0"))) {
      // do nothing. it would cause a div by zero failure
    } else {
      exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
    }
  }

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
  uniswap.totalVolumeUSD = uniswap.totalVolumeInEth.times(exchange.price).times(exchange.priceUSD).truncate(4)
  uniswap.totalTokenBuys = uniswap.totalTokenBuys.plus(BigInt.fromI32(1))
  uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
  uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(uniswap.txCount.toString())
  transaction.tx = event.transaction.hash
  transaction.event = "TokenPurchase"
  transaction.block = event.block.number.toI32()
  transaction.timestamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.user = event.params.buyer
  transaction.ethAmount = event.params.eth_sold.toBigDecimal().div(exponentToBigDecimal(18))
  if (exchange.tokenDecimals == null || 0) {
    transaction.tokenAmount = event.params.tokens_bought.toBigDecimal()
  } else {
    transaction.tokenAmount = event.params.tokens_bought.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
  }
  transaction.fee = fee
  transaction.save()

  /************************************
   * Handle the historical data below *
   ************************************/

  let tradeEventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
  let tradeEvent = new TradeEvent(tradeEventID.toString())
  tradeEvent.type = "TokenPurchase"
  tradeEvent.buyer = event.params.buyer
  tradeEvent.eth = ethAmount
  tradeEvent.tokenAddress = exchange.tokenAddress
  tradeEvent.exchangeAddress = event.address
  tradeEvent.timestamp = event.block.timestamp.toI32()
  tradeEvent.txhash = event.transaction.hash
  tradeEvent.block = event.block.number.toI32()
  tradeEvent.tokenFee = BigDecimal.fromString("0")
  tradeEvent.ethFee = fee
  tradeEvent.token = tokenAmount
  tradeEvent.decimals = exchange.tokenDecimals
  tradeEvent.symbol = exchange.tokenSymbol
  tradeEvent.name = exchange.tokenName
  tradeEvent.save()

  let eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
  eh.exchangeAddress = event.address
  eh.tokenSymbol = exchange.tokenSymbol
  eh.tokenAddress = exchange.tokenAddress
  eh.timestamp = event.block.timestamp.toI32()
  eh.type = "TokenPurchase"
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
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400 // presumably this should be rounded to an int
  let dayStartTimestamp = dayID * 86400
  let id = event.address.toHexString().concat('-').concat(BigInt.fromI32(dayID).toString())
  let exchangeDayData = ExchangeDayData.load(id)
  if (exchangeDayData == null) {
    exchangeDayData = new ExchangeDayData(id)
    exchangeDayData.date = dayStartTimestamp
    exchangeDayData.exchangeAddress = event.address
    exchangeDayData.ethBalance = BigDecimal.fromString("0")
    exchangeDayData.tokenBalance = BigDecimal.fromString("0")
    exchangeDayData.marginalEthRate = BigDecimal.fromString("0")
    exchangeDayData.ethVolume = BigDecimal.fromString("0")
    exchangeDayData.ROI = BigDecimal.fromString("0")
    exchangeDayData.totalEvents = BigInt.fromI32(0)
    exchangeDayData.tokenPriceUSD = BigDecimal.fromString("0")
  }
  exchangeDayData.ethBalance = exchange.ethBalance
  exchangeDayData.tokenBalance = exchange.tokenBalance
  if (exchange.ethBalance.equals(BigDecimal.fromString("0"))) {
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

export function handleEthPurchase(event: EthPurchase): void {
  /****** Update Exchange ******/
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  let ethAmount = event.params.eth_bought.toBigDecimal().div(exponentToBigDecimal(18))
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
  if (exchange.ethBalance.equals(BigDecimal.fromString("0"))) {
    exchange.price = BigDecimal.fromString("0")
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
  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
    user.save()
  }

  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenAddress.toHexString().concat('-').concat(event.params.buyer.toHex())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  if (userExchangeData == null) {
    createUserDataEntity(userExchangeID, event.params.buyer, event.address)
    userExchangeData = UserExchangeData.load(userExchangeID) // reload here
  }

  userExchangeData.ethBought = userExchangeData.ethBought.plus(ethAmount)
  userExchangeData.tokensSold = userExchangeData.tokensSold.plus(tokenAmount)

  // Fee Calculations
  let originalTokenValue = tokenAmount.div(BigDecimal.fromString("1").minus(exchange.fee))
  let fee = originalTokenValue.minus(tokenAmount).truncate(18)
  userExchangeData.tokenFeesPaid = userExchangeData.tokenFeesPaid.plus(fee)


  /****** Get ETH in USD Uniswap USD Tokens ******/
  let oneUSDInEth = uniswapUSDOracle(event.block.number)
  if (oneUSDInEth.equals(BigDecimal.fromString("0"))) {
    // do nothing, dai price oracle has not been set yet in the compound contract
  } else {
    exchange.lastPriceUSD = exchange.priceUSD
    if (exchange.price.equals(BigDecimal.fromString("0"))) {
      exchange.priceUSD = BigDecimal.fromString("0")
    } else {
      exchange.priceUSD = BigDecimal.fromString("1").div(oneUSDInEth).div(exchange.price).truncate(4)
      exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth).truncate(4)
    }
    exchange.weightedAvgPriceUSD = BigDecimal.fromString("1000000000000000000").div(oneUSDInEth).div(exchange.weightedAvgPrice).truncate(4)
    userExchangeData.tokenFeesInUSD = BigDecimal.fromString("1000000000000000000").times(userExchangeData.tokenFeesPaid).div(oneUSDInEth).div(exchange.price).truncate(4)
  }

  // ROI calculations
  if (exchange.price.equals(BigDecimal.fromString("0"))) {
    // do nothing. it will cause a div by zero failure
  } else {
    let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
    let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
    let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
    let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
    if (totalLiquidityValue.equals(BigDecimal.fromString("0"))) {
      // do nothing. it would cause a div by zero failure
    } else {
      exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
    }
  }

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
  uniswap.totalVolumeUSD = uniswap.totalVolumeInEth.times(exchange.price).times(exchange.priceUSD).truncate(4)
  uniswap.totalTokenSells = uniswap.totalTokenSells.plus(BigInt.fromI32(1))
  uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
  uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(uniswap.txCount.toString())
  transaction.tx = event.transaction.hash
  transaction.event = "EthPurchase"
  transaction.block = event.block.number.toI32()
  transaction.timestamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.user = event.params.buyer
  transaction.ethAmount = event.params.eth_bought.toBigDecimal().div(exponentToBigDecimal(18))
  if (exchange.tokenDecimals == null || 0) {
    transaction.tokenAmount = event.params.tokens_sold.toBigDecimal()
  } else {
    transaction.tokenAmount = event.params.tokens_sold.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
  }
  transaction.fee = fee
  transaction.save()

  /************************************
   * Handle the historical data below *
   ************************************/

  let tradeEventID = uniswap.totalTokenBuys.plus(uniswap.totalTokenSells)
  let tradeEvent = new TradeEvent(tradeEventID.toString())
  tradeEvent.type = "EthPurchase"
  tradeEvent.buyer = event.params.buyer
  tradeEvent.eth = ethAmount
  tradeEvent.exchangeAddress = event.address
  tradeEvent.tokenAddress = exchange.tokenAddress
  tradeEvent.timestamp = event.block.timestamp.toI32()
  tradeEvent.txhash = event.transaction.hash
  tradeEvent.block = event.block.number.toI32()
  tradeEvent.tokenFee = fee
  tradeEvent.ethFee = BigDecimal.fromString("0")
  tradeEvent.token = tokenAmount
  tradeEvent.decimals = exchange.tokenDecimals
  tradeEvent.symbol = exchange.tokenSymbol
  tradeEvent.name = exchange.tokenName
  tradeEvent.save()

  let eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
  eh.exchangeAddress = event.address
  eh.tokenSymbol = exchange.tokenSymbol
  eh.tokenAddress = exchange.tokenAddress
  eh.timestamp = event.block.timestamp.toI32()
  eh.type = "EthPurchase"
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
  if (exchange.price.equals(BigDecimal.fromString("0"))) {
    eh.feeInEth = BigDecimal.fromString("0") // Fee isn't actually zero here, but its hard to calculate this value
  } else {
    eh.feeInEth = fee.div(exchange.price).truncate(18)
    eh.save()
  }

  // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
  // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400 // presumably this should be rounded to an int
  let dayStartTimestamp = dayID * 86400
  let id = event.address.toHexString().concat('-').concat(BigInt.fromI32(dayID).toString())
  let exchangeDayData = ExchangeDayData.load(id)
  if (exchangeDayData == null) {
    exchangeDayData = new ExchangeDayData(id)
    exchangeDayData.date = dayStartTimestamp
    exchangeDayData.exchangeAddress = event.address
    exchangeDayData.ethBalance = BigDecimal.fromString("0")
    exchangeDayData.tokenBalance = BigDecimal.fromString("0")
    exchangeDayData.marginalEthRate = BigDecimal.fromString("0")
    exchangeDayData.ethVolume = BigDecimal.fromString("0")
    exchangeDayData.ROI = BigDecimal.fromString("0")
    exchangeDayData.totalEvents = BigInt.fromI32(0)
    exchangeDayData.tokenPriceUSD = BigDecimal.fromString("0")
  }
  exchangeDayData.ethBalance = exchange.ethBalance
  exchangeDayData.tokenBalance = exchange.tokenBalance
  if (exchange.ethBalance.equals(BigDecimal.fromString("0"))) {
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

// Note - function addLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleAddLiquidity(event: AddLiquidity): void {
  /****** Update Exchange ******/
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  let ethAmount = event.params.eth_amount.toBigDecimal().div(exponentToBigDecimal(18))
  let tokenAmount: BigDecimal
  if (exchange.tokenDecimals == null) {
    tokenAmount = event.params.token_amount.toBigDecimal()
  } else {
    tokenAmount = event.params.token_amount.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
  }
  exchange.ethBalance = exchange.ethBalance.plus(ethAmount)
  exchange.tokenBalance = exchange.tokenBalance.plus(tokenAmount)
  exchange.ethLiquidity = exchange.ethLiquidity.plus(ethAmount)
  exchange.tokenLiquidity = exchange.tokenLiquidity.plus(tokenAmount)
  exchange.addLiquidityCount = exchange.addLiquidityCount.plus(BigInt.fromI32(1))
  exchange.lastPrice = exchange.price

  // Don't need check to divide by zero here, adding liquidity would make it impossible
  exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
  exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)

  /****** Update User ******/
  let userID = event.params.provider.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
    user.save()
  }

  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenAddress.toHexString().concat('-').concat(event.params.provider.toHexString())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  if (userExchangeData == null) {
    createUserDataEntity(userExchangeID, event.params.provider, event.address)
    userExchangeData = UserExchangeData.load(userExchangeID) // reload here
  }
  userExchangeData.ethDeposited = userExchangeData.ethDeposited.plus(ethAmount)
  userExchangeData.tokensDeposited = userExchangeData.tokensDeposited.plus(tokenAmount)


  /****** Get ETH in USD Uniswap USD Tokens ******/
  let oneUSDInEth = uniswapUSDOracle(event.block.number)
  if (oneUSDInEth.equals(BigDecimal.fromString("0"))) {
    // do nothing, dai price oracle has not been set yet in the compound contract
  } else {
    exchange.lastPriceUSD = exchange.priceUSD
    if (exchange.price.equals(BigDecimal.fromString("0"))) {
      exchange.priceUSD = BigDecimal.fromString("0")
    } else {
      exchange.priceUSD = BigDecimal.fromString("1").div(oneUSDInEth).div(exchange.price).truncate(4)
      exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth).truncate(4)
    }
  }

  // ROI calculations
  if (exchange.price.equals(BigDecimal.fromString("0"))) {
    // do nothing. it will cause a div by zero failure
  } else {
    let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
    let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
    let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
    let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
    if (totalLiquidityValue.equals(BigDecimal.fromString("0"))) {
      // do nothing. it would cause a div by zero failure
    } else {
      exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
    }
  }

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  // times 2, because equal eth and tokens are always added or removed for liquidity
  uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.plus(ethAmount.times(BigDecimal.fromString("2")))
  uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD).truncate(4)
  uniswap.totalAddLiquidity = uniswap.totalAddLiquidity.plus(BigInt.fromI32(1))
  uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
  uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(uniswap.txCount.toString())
  transaction.tx = event.transaction.hash
  transaction.event = "AddLiquidity"
  transaction.block = event.block.number.toI32()
  transaction.timestamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.user = event.params.provider
  transaction.ethAmount = event.params.eth_amount.toBigDecimal().div(exponentToBigDecimal(18))
  if (exchange.tokenDecimals == null || 0) {
    transaction.tokenAmount = event.params.token_amount.toBigDecimal()
  } else {
    transaction.tokenAmount = event.params.token_amount.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
  }
  transaction.fee = BigDecimal.fromString("0")
  transaction.save()

  /************************************
   * Handle the historical data below *
   ************************************/

  let liquidityEventID = uniswap.totalAddLiquidity.plus(uniswap.totalRemoveLiquidity)
  let liquidityEvent = new LiquidityEvent(liquidityEventID.toString())
  liquidityEvent.type = "AddLiquidity"
  liquidityEvent.provider = event.params.provider
  liquidityEvent.ethAmount = ethAmount
  liquidityEvent.exchangeAddress = event.address
  liquidityEvent.tokenAddress = exchange.tokenAddress
  liquidityEvent.timestamp = event.block.timestamp.toI32()
  liquidityEvent.txhash = event.transaction.hash
  liquidityEvent.block = event.block.number.toI32()
  liquidityEvent.tokenAmount = tokenAmount
  liquidityEvent.decimals = exchange.tokenDecimals
  liquidityEvent.symbol = exchange.tokenSymbol
  liquidityEvent.name = exchange.tokenName
  liquidityEvent.save()

  let eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
  eh.exchangeAddress = event.address
  eh.tokenSymbol = exchange.tokenSymbol
  eh.tokenAddress = exchange.tokenAddress
  eh.timestamp = event.block.timestamp.toI32()
  eh.type = "AddLiquidity"
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
  eh.feeInEth = BigDecimal.fromString("0")
  eh.save()

  // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
  // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400 // presumably this should be rounded to an int
  let dayStartTimestamp = dayID * 86400
  let id = event.address.toHexString().concat('-').concat(BigInt.fromI32(dayID).toString())
  let exchangeDayData = ExchangeDayData.load(id)
  if (exchangeDayData == null) {
    exchangeDayData = new ExchangeDayData(id)
    exchangeDayData.date = dayStartTimestamp
    exchangeDayData.exchangeAddress = event.address
    exchangeDayData.ethBalance = BigDecimal.fromString("0")
    exchangeDayData.tokenBalance = BigDecimal.fromString("0")
    exchangeDayData.marginalEthRate = BigDecimal.fromString("0")
    exchangeDayData.ethVolume = BigDecimal.fromString("0")
    exchangeDayData.ROI = BigDecimal.fromString("0")
    exchangeDayData.tokenPriceUSD = BigDecimal.fromString("0")
    exchangeDayData.totalEvents = BigInt.fromI32(0)
  }
  exchangeDayData.ethBalance = exchange.ethBalance
  exchangeDayData.tokenBalance = exchange.tokenBalance
  if (exchange.ethBalance.equals(BigDecimal.fromString("0"))){
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

// Note - function removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  /****** Update Exchange ******/
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  let ethAmount = event.params.eth_amount.toBigDecimal().div(exponentToBigDecimal(18))
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
  if (exchange.ethBalance.equals(BigDecimal.fromString("0"))) {
    exchange.price = BigDecimal.fromString("0")
  } else {
    exchange.price = exchange.tokenBalance.div(exchange.ethBalance).truncate(18)
    exchange.combinedBalanceInEth = exchange.ethBalance.plus(exchange.tokenBalance.div(exchange.price)).truncate(18)
  }

  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenAddress.toHexString().concat('-').concat(event.params.provider.toHex())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  if (userExchangeData == null) {
    createUserDataEntity(userExchangeID, event.params.provider, event.address)
    userExchangeData = UserExchangeData.load(userExchangeID) // reload here
  }

  userExchangeData.ethWithdrawn = userExchangeData.ethWithdrawn.plus(ethAmount)
  userExchangeData.tokensWithdrawn = userExchangeData.tokensWithdrawn.plus(tokenAmount)

  /****** Get ETH in USD Uniswap USD Tokens ******/
  let oneUSDInEth = uniswapUSDOracle(event.block.number)
  if (oneUSDInEth.equals(BigDecimal.fromString("0"))) {
    // do nothing, dai price oracle has not been set yet in the compound contract
  } else {
    exchange.lastPriceUSD = exchange.priceUSD
    if (exchange.price.equals(BigDecimal.fromString("0"))) {
      exchange.priceUSD = BigDecimal.fromString("0")
    } else {
      exchange.priceUSD = BigDecimal.fromString("1").div(oneUSDInEth).div(exchange.price).truncate(4)
      exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneUSDInEth).truncate(4)
    }
  }


  // ROI calculations
  if (exchange.price.equals(BigDecimal.fromString("0"))) {
    // do nothing. it will cause a div by zero failure
  } else {
    let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
    let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
    let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
    let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
    if (totalLiquidityValue.equals(BigDecimal.fromString("0"))) {
      // do nothing. it would cause a div by zero failure
    } else {
      exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)
    }
  }

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  // times 2, because equal eth and tokens are always added or removed for liquidity
  uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.minus(ethAmount.times(BigDecimal.fromString("2")))
  uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD).truncate(4)
  uniswap.totalRemoveLiquidity = uniswap.totalRemoveLiquidity.plus(BigInt.fromI32(1))
  uniswap.exchangeHistoryEntityCount = uniswap.exchangeHistoryEntityCount.plus(BigInt.fromI32(1))
  uniswap.txCount = uniswap.txCount.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(uniswap.txCount.toString())
  transaction.tx = event.transaction.hash
  transaction.event = "RemoveLiquidity"
  transaction.block = event.block.number.toI32()
  transaction.timestamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.user = event.params.provider
  transaction.ethAmount = event.params.eth_amount.toBigDecimal().div(exponentToBigDecimal(18))
  if (exchange.tokenDecimals == null || 0) {
    transaction.tokenAmount = event.params.token_amount.toBigDecimal()
  } else {
    transaction.tokenAmount = event.params.token_amount.toBigDecimal().div(exponentToBigDecimal(exchange.tokenDecimals))
  }
  transaction.fee = BigDecimal.fromString("0")
  transaction.save()

  /************************************
   * Handle the historical data below *
   ************************************/

  let liquidityEventID = uniswap.totalAddLiquidity.plus(uniswap.totalRemoveLiquidity)
  let liquidityEvent = new LiquidityEvent(liquidityEventID.toString())
  liquidityEvent.type = "RemoveLiquidity"
  liquidityEvent.provider = event.params.provider
  liquidityEvent.ethAmount = ethAmount
  liquidityEvent.exchangeAddress = event.address
  liquidityEvent.tokenAddress = exchange.tokenAddress
  liquidityEvent.timestamp = event.block.timestamp.toI32()
  liquidityEvent.txhash = event.transaction.hash
  liquidityEvent.block = event.block.number.toI32()
  liquidityEvent.tokenAmount = tokenAmount
  liquidityEvent.decimals = exchange.tokenDecimals
  liquidityEvent.symbol = exchange.tokenSymbol
  liquidityEvent.name = exchange.tokenName
  liquidityEvent.save()

  let eh = new ExchangeHistoricalData(uniswap.exchangeHistoryEntityCount.toString())
  eh.exchangeAddress = event.address
  eh.tokenSymbol = exchange.tokenSymbol
  eh.tokenAddress = exchange.tokenAddress
  eh.timestamp = event.block.timestamp.toI32()
  eh.type = "RemoveLiquidity"
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
  eh.feeInEth = BigDecimal.fromString("0")
  eh.save()

  // Nov 2 2018 is 1541116800 for dayStartTimestamp and 17837 for dayID
  // Nov 3 2018 would be 1541116800 + 86400 and 17838. And so on, for each exchange
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400 // presumably this should be rounded to an int
  let dayStartTimestamp = dayID * 86400
  let id = event.address.toHexString().concat('-').concat(BigInt.fromI32(dayID).toString())
  let exchangeDayData = ExchangeDayData.load(id)
  if (exchangeDayData == null) {
    exchangeDayData = new ExchangeDayData(id)
    exchangeDayData.date = dayStartTimestamp
    exchangeDayData.exchangeAddress = event.address
    exchangeDayData.ethBalance = BigDecimal.fromString("0")
    exchangeDayData.tokenBalance = BigDecimal.fromString("0")
    exchangeDayData.marginalEthRate = BigDecimal.fromString("0")
    exchangeDayData.ethVolume = BigDecimal.fromString("0")
    exchangeDayData.ROI = BigDecimal.fromString("0")
    exchangeDayData.totalEvents = BigInt.fromI32(0)
    exchangeDayData.tokenPriceUSD = BigDecimal.fromString("0")
  }
  exchangeDayData.ethBalance = exchange.ethBalance
  exchangeDayData.tokenBalance = exchange.tokenBalance
  if (exchange.ethBalance.equals(BigDecimal.fromString("0"))) {
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


export function handleTransfer(event: Transfer): void {
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  let userToID = exchange.tokenAddress.toHexString().concat('-').concat(event.params._to.toHex())
  let userFromID = exchange.tokenAddress.toHexString().concat('-').concat(event.params._from.toHex())
  let uniTokens = event.params._value.toBigDecimal().div(exponentToBigDecimal(18))

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
    let ratio = event.params._value.toBigDecimal().div(exchange.totalUniToken)
    let ethTransferred = ratio.times(exchange.ethBalance)
    let tokenTransferred = ratio.times(exchange.tokenBalance)


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


/************************************
 ********** Helpers below ***********
 ************************************/

function exponentToBigDecimal(decimals: i32): BigDecimal {
  let bd = BigDecimal.fromString("1")
  for (let i = 0; i < decimals; i++) {
    bd = bd.times(BigDecimal.fromString("10"))
  }
  return bd
}

function createUserDataEntity(id: string, user: Address, exchange: Address): void {
  let userExchangeData = new UserExchangeData(id)
  userExchangeData.userAddress = user
  userExchangeData.exchangeAddress = exchange

  userExchangeData.ethDeposited = BigDecimal.fromString("0")
  userExchangeData.tokensDeposited = BigDecimal.fromString("0")
  userExchangeData.ethWithdrawn = BigDecimal.fromString("0")
  userExchangeData.tokensWithdrawn = BigDecimal.fromString("0")
  userExchangeData.uniTokenBalance = BigDecimal.fromString("0")

  userExchangeData.ethBought = BigDecimal.fromString("0")
  userExchangeData.ethSold = BigDecimal.fromString("0")
  userExchangeData.tokensBought = BigDecimal.fromString("0")
  userExchangeData.tokensSold = BigDecimal.fromString("0")
  userExchangeData.ethFeesPaid = BigDecimal.fromString("0")
  userExchangeData.tokenFeesPaid = BigDecimal.fromString("0")
  userExchangeData.ethFeesInUSD = BigDecimal.fromString("0")
  userExchangeData.tokenFeesInUSD = BigDecimal.fromString("0")
  userExchangeData.save()
}