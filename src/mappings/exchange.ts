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
  exchange.buyTrades = exchange.buyTrades.plus(BigInt.fromI32(1))
  exchange.lastTradePrice = exchange.price
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
  exchange.sellTrades = exchange.sellTrades.plus(BigInt.fromI32(1))
  exchange.lastTradePrice = exchange.price
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

// def addLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
// This event must create the exchange, as adding liquidity is the first thing to be done
export function handleAddLiquidity(event: AddLiquidity): void {
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)

  exchange.ethLiquidity = exchange.ethLiquidity.plus(event.params.eth_amount.toBigDecimal())
  exchange.tokenLiquidity = exchange.tokenLiquidity.plus(event.params.token_amount.toBigDecimal())
  if (exchange.ethLiquidity.equals(BigDecimal.fromString("0"))) {
    exchange.price = BigDecimal.fromString("0")
  } else {
    exchange.price = exchange.tokenLiquidity.div(exchange.ethLiquidity).truncate(18)
  }


  // Because 'token' is not a public getter, we need to derive the name based on the event.address being emitted, so an // if else statement
  let contractAddress = event.address.toHex()
  let provider = event.params.provider.toHex()
  let userExchangeID: string
  if (contractAddress == '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914') {
    exchange.tokenSymbol = "BAT"
    exchange.tokenName = "Basic Attention Token"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x2c4bd064b998838076fa341a83d007fc2fa50957') {
    exchange.tokenSymbol = "MKR"
    exchange.tokenName = "Maker"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf') {
    exchange.tokenSymbol = "ZRX"
    exchange.tokenName = "0x"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x09cabec1ead1c0ba254b09efb3ee13841712be14') {
    exchange.tokenSymbol = "DAI"
    exchange.tokenName = "Dai Stablecoin v1.0"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x4e395304655f0796bc3bc63709db72173b9ddf98') {
    exchange.tokenSymbol = "SPANK"
    exchange.tokenName = "Spank Chain"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x077d52b047735976dfda76fef74d4d988ac25196') {
    exchange.tokenSymbol = "ANT"
    exchange.tokenName = "Aragon"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x255e60c9d597dcaa66006a904ed36424f7b26286') {
    exchange.tokenSymbol = "BNB"
    exchange.tokenName = "Binance Coin"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x97dec872013f6b5fb443861090ad931542878126') {
    exchange.tokenSymbol = "USDC"
    exchange.tokenName = "USD Coin"
    exchange.tokenDecimals = 6
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0xddee242662323a3cff3f9aa139ffa496ac3c73b0') {
    exchange.tokenSymbol = "OMG"
    exchange.tokenName = "OmiseGo"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0xd4777e164c6c683e10593e08760b803d58529a8e') {
    exchange.tokenSymbol = "HOT"
    exchange.tokenName = "HoloToken"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0xf173214c720f58e03e194085b1db28b50acdeead') {
    exchange.tokenSymbol = "LINK"
    exchange.tokenName = "ChainLink token"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x48b04d2a05b6b604d8d5223fd1984f191ded51af') {
    exchange.tokenSymbol = "REP"
    exchange.tokenName = "Augur Reputation"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x7dc095a5cf7d6208cc680fa9866f80a53911041a') {
    exchange.tokenSymbol = "ZIL"
    exchange.tokenName = "Zilliqa"
    exchange.tokenDecimals = 12
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0xc040d51b07aea5d94a89bc21e8078b77366fc6c7') {
    exchange.tokenSymbol = "PAX"
    exchange.tokenName = "Paxos Standard"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0xd883264737ed969d2696ee4b4caf529c2fc2a141') {
    exchange.tokenSymbol = "GUSD"
    exchange.tokenName = "Gemini Dollar"
    exchange.tokenDecimals = 2
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab') {
    exchange.tokenSymbol = "THETA"
    exchange.tokenName = "Theta Token"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd') {
    exchange.tokenSymbol = "SNT"
    exchange.tokenName = "StatusNetwork"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else if (contractAddress == '0x7d839eb463b121790c99e0f017c21f0189dcc167') {
    exchange.tokenSymbol = "GNT"
    exchange.tokenName = "Golem"
    exchange.tokenDecimals = 18
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  } else {
    exchange.tokenSymbol = "UNKNOWN"
    userExchangeID = exchange.tokenSymbol.concat('-').concat(provider)
  }

  let userID = event.params.provider.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
  }

  user.save()

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

  exchange.save()

  userExchangeData.ethDeposited = userExchangeData.ethDeposited.plus(event.params.eth_amount.toBigDecimal())
  userExchangeData.tokensDeposited = userExchangeData.tokensDeposited.plus(event.params.token_amount.toBigDecimal())
  userExchangeData.save()

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

// The exchange must exist if you are trying to remove liquidity. same with user and its uniTokenBalance
// def removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  let exchangeID = event.address.toHex()
  let exchange = Exchange.load(exchangeID)

  exchange.ethLiquidity = exchange.ethLiquidity.minus(event.params.eth_amount.toBigDecimal())
  exchange.tokenLiquidity = exchange.tokenLiquidity.minus(event.params.token_amount.toBigDecimal())
  if (exchange.ethLiquidity.equals(BigDecimal.fromString("0"))) {
    exchange.price = BigDecimal.fromString("0")
  } else {
    exchange.price = exchange.tokenLiquidity.div(exchange.ethLiquidity).truncate(18)
  }
  exchange.save()

  let userExchangeID = exchange.tokenSymbol.concat('-').concat(event.params.provider.toHex())

  let userExchangeData = UserExchangeData.load(userExchangeID)
  userExchangeData.ethWithdrawn = userExchangeData.ethWithdrawn.plus(event.params.eth_amount.toBigDecimal())
  userExchangeData.tokensWithdrawn = userExchangeData.tokensWithdrawn.plus(event.params.token_amount.toBigDecimal())
  userExchangeData.save()

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

// Must add 1 so we never divide by 0. makes for a minimal effect of change, since it is like 1 wei
// TODO - when we have ability to check if BigInt is "0", then we can avoid this
function bigInt_b_GT_a(a: BigInt, b: BigInt): boolean {
  let remainder = a.div(b.plus(BigInt.fromI32(1))).toI32()
  if (remainder == 0) { //i.e. b was bigger than a
    return true
  }
  return false
}

function bigDecimal_b_greaterThan_a(a: BigDecimal, b: BigDecimal): boolean {
  // To prevent division by 0
  if (b.equals(BigDecimal.fromString("0"))) {
    return false
  }

  let remainder = a.div(b)

  // need to check if remainders digits is longer than its exponents, indicating a is a number above 1.0, thus return false
  let remainerDigits = remainder.digits.toString().length
  let remainderExp = remainder.exp.toI32()
  let digitsMinusExp = remainerDigits + remainderExp // exp is negative so add
  if (digitsMinusExp >= 0) {
    return false
  } else {
    return true
  }
}