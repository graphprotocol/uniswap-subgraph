import {BigInt, BigDecimal} from '@graphprotocol/graph-ts'
import {
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer,
  Approval,
  Exchange as ExchangeContract,
} from '../types/Exchange-BAT/Exchange' // Although imported from BAT, these can be used for all exchanges

import {
  User,
  UserExchangeData,
  Transaction,
  Exchange
} from '../types/schema'

export function handleTokenPurchase(event: TokenPurchase): void {
  /****** Update Exchange ******/
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  exchange.ethLiquidity = exchange.ethLiquidity.plus(event.params.eth_sold.toBigDecimal())
  exchange.tokenLiquidity = exchange.tokenLiquidity.minus(event.params.tokens_bought.toBigDecimal())
  exchange.buyTokenCount = exchange.buyTokenCount.plus(BigInt.fromI32(1))
  exchange.lastPrice = exchange.price
  exchange.price = exchange.tokenLiquidity.div(exchange.ethLiquidity).truncate(18)
  exchange.tradeVolume = exchange.tradeVolume.plus(event.params.tokens_bought.toBigDecimal())
  exchange.totalValue = exchange.totalValue.plus(event.params.tokens_bought.toBigDecimal().times(exchange.price))
  exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolume).truncate(18)
  exchange.save()

  /****** Update User ******/
  // It is conceivable that user does not exist yet here
  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
    user.save()
  }

  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenSymbol.concat('-').concat(event.params.buyer.toHex())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  if (userExchangeData == null) {
    userExchangeData = new UserExchangeData(userExchangeID)
    userExchangeData.userAddress = event.params.buyer
    userExchangeData.exchangeAddress = event.address
    userExchangeData.ethDeposited = BigDecimal.fromString("0")
    userExchangeData.tokensDeposited = BigDecimal.fromString("0")
    userExchangeData.uniTokensMinted = BigInt.fromI32(0)
    userExchangeData.uniTokensBurned = BigInt.fromI32(0)
    userExchangeData.ethWithdrawn = BigDecimal.fromString("0")
    userExchangeData.tokensWithdrawn = BigDecimal.fromString("0")
    // userExchangeData.currentEthProfit = BigInt.fromI32(0)
    // userExchangeData.currentTokenProfit = BigInt.fromI32(0)
    userExchangeData.ethBought = BigDecimal.fromString("0")
    userExchangeData.tokensBought = BigDecimal.fromString("0")
    userExchangeData.totalEthFeesPaid = BigDecimal.fromString("0")
    userExchangeData.totalTokenFeesPaid = BigDecimal.fromString("0")
  }

  userExchangeData.ethBought = userExchangeData.ethBought.minus(event.params.eth_sold.toBigDecimal())
  userExchangeData.tokensBought = userExchangeData.tokensBought.plus(event.params.tokens_bought.toBigDecimal())
  let fee = event.params.eth_sold.toBigDecimal().times(exchange.fee)
  userExchangeData.totalEthFeesPaid = userExchangeData.totalEthFeesPaid.plus(fee)
  userExchangeData.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "TokenPurchase"
  transaction.block = event.block.number
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
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
  exchange.ethLiquidity = exchange.ethLiquidity.minus(event.params.eth_bought.toBigDecimal())
  exchange.tokenLiquidity = exchange.tokenLiquidity.plus(event.params.tokens_sold.toBigDecimal())
  exchange.sellTokenCount = exchange.sellTokenCount.plus(BigInt.fromI32(1))
  exchange.lastPrice = exchange.price
  exchange.price = exchange.tokenLiquidity.div(exchange.ethLiquidity).truncate(18)
  exchange.tradeVolume = exchange.tradeVolume.plus(event.params.tokens_sold.toBigDecimal())
  exchange.totalValue = exchange.totalValue.plus(event.params.tokens_sold.toBigDecimal().times(exchange.price))
  exchange.weightedAvgPrice = exchange.totalValue.div(exchange.tradeVolume).truncate(18)
  exchange.save()

  /****** Update User ******/
  // It is conceivable that user does not exist yet here
  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
    user.save()
  }

  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenSymbol.concat('-').concat(event.params.buyer.toHex())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  if (userExchangeData == null) {
    userExchangeData = new UserExchangeData(userExchangeID)
    userExchangeData.userAddress = event.params.buyer
    userExchangeData.exchangeAddress = event.address
    userExchangeData.ethDeposited = BigDecimal.fromString("0")
    userExchangeData.tokensDeposited = BigDecimal.fromString("0")
    userExchangeData.uniTokensMinted = BigInt.fromI32(0)
    userExchangeData.uniTokensBurned = BigInt.fromI32(0)
    userExchangeData.ethWithdrawn = BigDecimal.fromString("0")
    userExchangeData.tokensWithdrawn = BigDecimal.fromString("0")
    // userExchangeData.currentEthProfit = BigInt.fromI32(0)
    // userExchangeData.currentTokenProfit = BigInt.fromI32(0)
    userExchangeData.ethBought = BigDecimal.fromString("0")
    userExchangeData.tokensBought = BigDecimal.fromString("0")
    userExchangeData.totalEthFeesPaid = BigDecimal.fromString("0")
    userExchangeData.totalTokenFeesPaid = BigDecimal.fromString("0")
  }

  userExchangeData.ethBought = userExchangeData.ethBought.plus(event.params.eth_bought.toBigDecimal())
  userExchangeData.tokensBought = userExchangeData.tokensBought.minus(event.params.tokens_sold.toBigDecimal())
  let fee = event.params.tokens_sold.toBigDecimal().times(exchange.fee)
  userExchangeData.totalTokenFeesPaid = userExchangeData.totalTokenFeesPaid.plus(fee)
  userExchangeData.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "EthPurchase"
  transaction.block = event.block.number
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
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
  exchange.ethLiquidity = exchange.ethLiquidity.plus(event.params.eth_amount.toBigDecimal())
  exchange.tokenLiquidity = exchange.tokenLiquidity.plus(event.params.token_amount.toBigDecimal())
  exchange.addLiquidityCount = exchange.addLiquidityCount.plus(BigInt.fromI32(1))
  // // if (exchange.ethLiquidity.equals(BigDecimal.fromString("0"))) {
  //   exchange.price = BigDecimal.fromString("0")
  // } else {
  exchange.price = exchange.tokenLiquidity.div(exchange.ethLiquidity).truncate(18)
  // }
  exchange.save()

  /****** Update User ******/
  let userID = event.params.provider.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
    user.save()
  }

  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenSymbol.concat('-').concat(event.params.provider.toHexString())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  if (userExchangeData == null) {
    userExchangeData = new UserExchangeData(userExchangeID)
    userExchangeData.userAddress = event.params.provider
    userExchangeData.exchangeAddress = event.address
    userExchangeData.ethDeposited = BigDecimal.fromString("0")
    userExchangeData.tokensDeposited = BigDecimal.fromString("0")
    userExchangeData.uniTokensMinted = BigInt.fromI32(0)
    userExchangeData.uniTokensBurned = BigInt.fromI32(0)
    userExchangeData.ethWithdrawn = BigDecimal.fromString("0")
    userExchangeData.tokensWithdrawn = BigDecimal.fromString("0")
    // userExchangeData.currentEthProfit = BigInt.fromI32(0)
    // userExchangeData.currentTokenProfit = BigInt.fromI32(0)
    userExchangeData.ethBought = BigDecimal.fromString("0")
    userExchangeData.tokensBought = BigDecimal.fromString("0")
    userExchangeData.totalEthFeesPaid = BigDecimal.fromString("0")
    userExchangeData.totalTokenFeesPaid = BigDecimal.fromString("0")
  }

  userExchangeData.ethDeposited = userExchangeData.ethDeposited.plus(event.params.eth_amount.toBigDecimal())
  userExchangeData.tokensDeposited = userExchangeData.tokensDeposited.plus(event.params.token_amount.toBigDecimal())
  userExchangeData.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "AddLiquidity"
  transaction.block = event.block.number
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.userAddress = event.params.provider
  transaction.ethAmount = event.params.eth_amount
  transaction.tokenAmount = event.params.token_amount
  transaction.save()
}

// note - function removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  /****** Update Exchange ******/
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  exchange.ethLiquidity = exchange.ethLiquidity.minus(event.params.eth_amount.toBigDecimal())
  exchange.tokenLiquidity = exchange.tokenLiquidity.minus(event.params.token_amount.toBigDecimal())
  exchange.removeLiquidityCount = exchange.removeLiquidityCount.plus(BigInt.fromI32(1))

  // if (exchange.ethLiquidity.equals(BigDecimal.fromString("0"))) {
  //   exchange.price = BigDecimal.fromString("0")
  // } else {
  exchange.price = exchange.tokenLiquidity.div(exchange.ethLiquidity).truncate(18)
  // }
  exchange.save()


  /****** Update UserExchangeData ******/
  let userExchangeID = exchange.tokenSymbol.concat('-').concat(event.params.provider.toHex())
  let userExchangeData = UserExchangeData.load(userExchangeID)
  userExchangeData.ethWithdrawn = userExchangeData.ethWithdrawn.plus(event.params.eth_amount.toBigDecimal())
  userExchangeData.tokensWithdrawn = userExchangeData.tokensWithdrawn.plus(event.params.token_amount.toBigDecimal())
  userExchangeData.save()

  /****** Update Transaction ******/
  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.event = "RemoveLiquidity"
  transaction.block = event.block.number
  transaction.timeStamp = event.block.timestamp.toI32()
  transaction.exchangeAddress = event.address
  transaction.tokenSymbol = exchange.tokenSymbol
  transaction.userAddress = event.params.provider
  transaction.ethAmount = event.params.eth_amount.times(BigInt.fromI32(-1))
  transaction.tokenAmount = event.params.token_amount.times(BigInt.fromI32(-1))
  transaction.save()
}


export function handleTransfer(event: Transfer): void {
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)
  let userToID = exchange.tokenSymbol.concat('-').concat(event.params._to.toHex())
  let userFromID = exchange.tokenSymbol.concat('-').concat(event.params._from.toHex())

  if (event.params._from.toHex() == '0x0000000000000000000000000000000000000000') {
    exchange.totalUniToken = exchange.totalUniToken.plus(event.params._value)
    let userTo = UserExchangeData.load(userToID)
    userTo.uniTokensMinted = userTo.uniTokensMinted.plus(event.params._value)
    exchange.save()
    userTo.save()
  } else if (event.params._to.toHex() == '0x0000000000000000000000000000000000000000') {
    exchange.totalUniToken = exchange.totalUniToken.minus(event.params._value)
    let userFrom = UserExchangeData.load(userFromID)
    userFrom.uniTokensBurned = userFrom.uniTokensBurned.plus(event.params._value)

    // TODO - these two lines need BigInt division to return fractions, then it will work
    // This handle always gets ran after liquidity handlers, which is required, since we use deposited and withdrawn values
    // userFrom.currentEthProfit = userFrom.ethWithdrawn.minus((userFrom.uniTokensBurned.div(userFrom.uniTokensMinted).times(userFrom.ethDeposited)))
    // userFrom.currentTokenProfit = userFrom.tokensWithdrawn.minus(userFrom.uniTokensBurned.div(userFrom.uniTokensMinted).times(userFrom.tokensDeposited))

    exchange.save()
    userFrom.save()

    // The else case is a normal transfer of uni tokens (i.e. not a mint or burn)
  } else {
    let userTo = UserExchangeData.load(userToID)
    // It is possible the user doesn't exist, since it is just being sent through a transfer
    if (userTo == null) {
      userTo = new UserExchangeData(userToID)
      userTo.userAddress = event.params._from
      userTo.exchangeAddress = event.address
      userTo.ethDeposited = BigDecimal.fromString("0")
      userTo.tokensDeposited = BigDecimal.fromString("0")
      userTo.uniTokensMinted = BigInt.fromI32(0)
      userTo.uniTokensBurned = BigInt.fromI32(0)
      userTo.ethWithdrawn = BigDecimal.fromString("0")
      userTo.tokensWithdrawn = BigDecimal.fromString("0")
      // userTo.currentEthProfit = BigInt.fromI32(0)
      // userTo.currentTokenProfit = BigInt.fromI32(0)
      userTo.totalTokenFeesPaid = BigDecimal.fromString("0")
      userTo.totalEthFeesPaid = BigDecimal.fromString("0")
      userTo.ethBought = BigDecimal.fromString("0")
      userTo.tokensBought = BigDecimal.fromString("0")
      userTo.save()
    }

    let user = User.load(event.params._from.toHex())
    // possible this entity also doesn't exist
    if (user == null) {
      user = new User(event.params._from.toHex())
      user.save()
    }

    // Will be hard to calculate this users profit / loss, since they never deposited
    // And only got UNI from a transfer
    let userFrom = UserExchangeData.load(userFromID)
    userTo.uniTokensMinted = userTo.uniTokensMinted.plus(event.params._value)
    userFrom.uniTokensMinted = userTo.uniTokensMinted.minus(event.params._value)
    userTo.save()
    userFrom.save()
  }
}

// eventually emitted on mainnet TODO - decide if we should implement
export function handleApproval(event: Approval): void {

}

// // Must add 1 so we never divide by 0. makes for a minimal effect of change, since it is like 1 wei
// // TODO - when we have ability to check if BigInt is "0", then we can avoid this
// function bigInt_b_GT_a(a: BigInt, b: BigInt): boolean {
//   let remainder = a.div(b.plus(BigInt.fromI32(1))).toI32()
//   if (remainder == 0) { //i.e. b was bigger than a
//     return true
//   }
//   return false
// }
//
// function bigDecimal_b_greaterThan_a(a: BigDecimal, b: BigDecimal): boolean {
//   // To prevent division by 0
//   if (b.equals(BigDecimal.fromString("0"))) {
//     return false
//   }
//
//   let remainder = a.div(b)
//
//   // need to check if remainders digits is longer than its exponents, indicating a is a number above 1.0, thus return false
//   let remainerDigits = remainder.digits.toString().length
//   let remainderExp = remainder.exp.toI32()
//   let digitsMinusExp = remainerDigits + remainderExp // exp is negative so add
//   if (digitsMinusExp >= 0) {
//     return false
//   } else {
//     return true
//   }
// }