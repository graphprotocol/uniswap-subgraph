import {BigInt, BigDecimal, Address} from '@graphprotocol/graph-ts'
import {
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer,
  Approval,
  Exchange as ExchangeContract,
} from '../types/Exchange-BAT/Exchange' // Although imported from BAT, these can be used for all exchanges

import {Oracle} from "../types/Exchange-BAT/Oracle";

import {
  User,
  UserExchangeData,
  Transaction,
  Exchange,
  Uniswap
} from '../types/schema'

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

  userExchangeData.ethSold = userExchangeData.ethSold.plus(ethAmount)
  userExchangeData.tokensBought = userExchangeData.tokensBought.plus(tokenAmount)

  let originalEthValue = ethAmount.div(BigDecimal.fromString("1").minus(exchange.fee))
  let fee = originalEthValue.minus(ethAmount).truncate(18)
  userExchangeData.ethFeesPaid = userExchangeData.ethFeesPaid.plus(fee)

  // /****** Get ETH in USD from Compound Oracle ******/ // TODO - update to MKR price oracle when we can handle BigInts in bytes format
  if (event.block.number.toI32() > 6747538) {
    let oracle = Oracle.bind(Address.fromString("0x02557a5e05defeffd4cae6d83ea3d173b272c904"))
    let oneDaiInEth = (oracle.getPrice(Address.fromString("0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"))).toBigDecimal()
    if (oneDaiInEth.equals(BigDecimal.fromString("0"))) {
      // do nothing, dai price oracle has not been set yet in the compound contract
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      exchange.priceUSD = BigDecimal.fromString("1000000000000000000").div(oneDaiInEth).div(exchange.price).truncate(4)
      exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneDaiInEth).times(BigDecimal.fromString("1000000000000000000")).truncate(4)
      exchange.weightedAvgPriceUSD = BigDecimal.fromString("1000000000000000000").div(oneDaiInEth).div(exchange.weightedAvgPrice).truncate(4)

      userExchangeData.ethFeesInUSD = BigDecimal.fromString("1000000000000000000").times(userExchangeData.ethFeesPaid).div(oneDaiInEth).truncate(4)
    }
  }

  // ROI calculations
  // let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
  // let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
  // let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
  // let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
  // exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
  uniswap.totalVolumeUSD = uniswap.totalVolumeInEth.times(exchange.price).times(exchange.priceUSD)
  uniswap.totalTokenBuys = uniswap.totalTokenBuys.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "TokenPurchase"
  transaction.block = event.block.number.toI32()
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.userAddress = event.params.buyer
  transaction.ethAmount = event.params.eth_sold
  transaction.tokenAmount = event.params.tokens_bought
  transaction.fee = fee
  transaction.save()
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


  /****** Get ETH in USD from Compound Oracle ******/
  if (event.block.number.toI32() > 6747538) {
    let oracle = Oracle.bind(Address.fromString("0x02557a5e05defeffd4cae6d83ea3d173b272c904"))
    let oneDaiInEth = (oracle.getPrice(Address.fromString("0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"))).toBigDecimal()
    if (oneDaiInEth.equals(BigDecimal.fromString("0"))) {
      // do nothing, dai price oracle has not been set yet in the compound contract
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      if (exchange.price.equals(BigDecimal.fromString("0"))) {
        exchange.priceUSD = BigDecimal.fromString("0")
      } else {
        exchange.priceUSD = BigDecimal.fromString("1000000000000000000").div(oneDaiInEth).div(exchange.price).truncate(4)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneDaiInEth).times(BigDecimal.fromString("1000000000000000000")).truncate(4)
      }
      exchange.weightedAvgPriceUSD = BigDecimal.fromString("1000000000000000000").div(oneDaiInEth).div(exchange.weightedAvgPrice).truncate(4)

      userExchangeData.tokenFeesInUSD = BigDecimal.fromString("1000000000000000000").times(userExchangeData.tokenFeesPaid).div(oneDaiInEth).div(exchange.price).truncate(4)
    }
  }

  // ROI calculations
  // let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
  // let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
  // let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
  // let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
  // exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  uniswap.totalVolumeInEth = uniswap.totalVolumeInEth.plus(ethAmount)
  uniswap.totalVolumeUSD = uniswap.totalVolumeInEth.times(exchange.price).times(exchange.priceUSD)
  uniswap.totalTokenSells = uniswap.totalTokenSells.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "EthPurchase"
  transaction.block = event.block.number.toI32()
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.userAddress = event.params.buyer
  transaction.ethAmount = event.params.eth_bought
  transaction.tokenAmount = event.params.tokens_sold
  transaction.fee = fee
  transaction.save()
}

// note - function addLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
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

  /****** Get ETH in USD from Compound Oracle ******/
  if (event.block.number.toI32() > 6747538) {
    let oracle = Oracle.bind(Address.fromString("0x02557a5e05defeffd4cae6d83ea3d173b272c904"))
    let oneDaiInEth = oracle.getPrice(Address.fromString("0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359")).toBigDecimal()
    if (oneDaiInEth.equals(BigDecimal.fromString("0"))) {
      // do nothing, dai price oracle has not been set yet in the compound contract
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      exchange.priceUSD = BigDecimal.fromString("1000000000000000000").div(oneDaiInEth).div(exchange.price).truncate(4)
      exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneDaiInEth).times(BigDecimal.fromString("1000000000000000000")).truncate(4)
    }
  }

  //  ROI calculations
  // let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
  // let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
  // let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
  // let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
  // exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  // times 2, because equal eth and tokens are always added or removed for liquidity
  uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.plus(ethAmount.times(BigDecimal.fromString("2")))
  // uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD)
  uniswap.totalAddLiquidity = uniswap.totalAddLiquidity.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "AddLiquidity"
  transaction.block = event.block.number.toI32()
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.userAddress = event.params.provider
  transaction.ethAmount = event.params.eth_amount
  transaction.tokenAmount = event.params.token_amount
  transaction.fee = BigDecimal.fromString("0")
  transaction.save()
}

// note - function removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
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

  /****** Get ETH in USD from Compound Oracle ******/
  if (event.block.number.toI32() > 6747538) {
    let oracle = Oracle.bind(Address.fromString("0x02557a5e05defeffd4cae6d83ea3d173b272c904"))
    let oneDaiInEth = oracle.getPrice(Address.fromString("0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359")).toBigDecimal()
    if (oneDaiInEth.equals(BigDecimal.fromString("0"))) {
      // do nothing, dai price oracle has not been set yet in the compound contract
    } else {
      exchange.lastPriceUSD = exchange.priceUSD
      if (exchange.price.equals(BigDecimal.fromString("0"))) {
        exchange.priceUSD = BigDecimal.fromString("0")
      } else {
        exchange.priceUSD = BigDecimal.fromString("1000000000000000000").div(oneDaiInEth).div(exchange.price).truncate(4)
        exchange.combinedBalanceInUSD = exchange.combinedBalanceInEth.div(oneDaiInEth).times(BigDecimal.fromString("1000000000000000000")).truncate(4)
      }
    }
  }

  // ROI calculations
  // let totalTokensToEth = exchange.tokenBalance.div(exchange.price)
  // let liquidityTokensToEth = exchange.tokenLiquidity.div(exchange.price)
  // let totalBalanceValue = totalTokensToEth.plus(exchange.ethBalance)
  // let totalLiquidityValue = liquidityTokensToEth.plus(exchange.ethLiquidity)
  // exchange.ROI = totalBalanceValue.div(totalLiquidityValue).truncate(6)

  exchange.save()
  userExchangeData.save()

  /****** Update Global Values ******/
  let uniswap = Uniswap.load('1')
  // times 2, because equal eth and tokens are always added or removed for liquidity
  uniswap.totalLiquidityInEth = uniswap.totalLiquidityInEth.minus(ethAmount.times(BigDecimal.fromString("2")))
  uniswap.totalLiquidityUSD = uniswap.totalLiquidityInEth.times(exchange.price).times(exchange.priceUSD)
  uniswap.totalRemoveLiquidity = uniswap.totalRemoveLiquidity.plus(BigInt.fromI32(1))
  uniswap.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "RemoveLiquidity"
  transaction.block = event.block.number.toI32()
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenAddress = exchange.tokenAddress
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.userAddress = event.params.provider
  transaction.ethAmount = event.params.eth_amount.times(BigInt.fromI32(-1))
  transaction.tokenAmount = event.params.token_amount.times(BigInt.fromI32(-1))
  transaction.fee = BigDecimal.fromString("0")
  transaction.save()
}


export function handleTransfer(event: Transfer): void {
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  let userToID = exchange.tokenAddress.toHexString().concat('-').concat(event.params._to.toHex())
  let userFromID = exchange.tokenAddress.toHexString().concat('-').concat(event.params._from.toHex())
  let uniTokens = event.params._value.toBigDecimal().div(exponentToBigDecimal(18))

  if (event.params._from.toHex() == '0x0000000000000000000000000000000000000000') {
    exchange.totalUniToken = exchange.totalUniToken.plus(uniTokens)
    let userTo = UserExchangeData.load(userToID)
    if (userTo == null) {
      createUserDataEntity(userToID, event.params._to, event.address)
      userTo = UserExchangeData.load(userToID)
    }
    userTo.uniTokensMinted = userTo.uniTokensMinted.plus(uniTokens)
    exchange.save()
    userTo.save()
  } else if (event.params._to.toHex() == '0x0000000000000000000000000000000000000000') {
    exchange.totalUniToken = exchange.totalUniToken.minus(uniTokens)
    let userFrom = UserExchangeData.load(userFromID)
    if (userFrom == null) {
      createUserDataEntity(userFromID, event.params._from, event.address)
      userFrom = UserExchangeData.load(userFromID)
    }
    userFrom.uniTokensBurned = userFrom.uniTokensBurned.plus(uniTokens)

    exchange.save()
    userFrom.save()

    // The else case is a normal transfer of uni tokens (i.e. not a mint or burn), so work with both users
  } else {

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
    userTo.uniTokensMinted = userTo.uniTokensMinted.plus(uniTokens)
    userFrom.uniTokensMinted = userTo.uniTokensMinted.minus(uniTokens)
    userTo.save()
    userFrom.save()
  }

  /****** Create User  Entities ******/
  let userFromEntity = User.load(event.params._from.toHex())
  // possible this entity also doesn't exist
  if (userFromEntity == null) {
    userFromEntity = new User(event.params._from.toHex())
    userFromEntity.save()
  }
  let userToEntity = User.load(event.params._to.toHex())
  // possible this entity also doesn't exist
  if (userToEntity == null) {
    userToEntity = new User(event.params._to.toHex())
    userToEntity.save()
  }
}

// eventually emitted on mainnet TODO - decide if we should implement
export function handleApproval(event: Approval): void {

}

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
  userExchangeData.uniTokensMinted = BigDecimal.fromString("0")
  userExchangeData.uniTokensBurned = BigDecimal.fromString("0")

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