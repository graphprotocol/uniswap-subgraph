import {BigInt} from '@graphprotocol/graph-ts'
import {
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer,
  Approval,
} from '../types/Exchange-BAT/Exchange' // Although imported from BAT, these can be used for all exchanges


import {
  TrackedExchange,
  User,
  UserExchangeTokenBalance,
  Transaction
} from '../types/schema'


// It is conceivable that user does not exist yet here
export function handleTokenPurchase(event: TokenPurchase): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  trackedExchange.totalEth = trackedExchange.totalEth.plus(event.params.eth_sold)
  trackedExchange.totalToken = trackedExchange.totalToken.minus(event.params.tokens_bought)
  trackedExchange.rate = trackedExchange.totalToken.div(trackedExchange.totalEth) // TODO: this returns 0 when we have a fractional rate. we need BigInt fraction functionality
  trackedExchange.tokenAddress = event.address

  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
  }

  user.save()
  let userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(event.params.buyer.toHex())
  let fee = event.params.eth_sold.times(BigInt.fromI32(3)).div(BigInt.fromI32(1000)) // should always equal 0.3%


  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)
  if (userExchangeTokenBalance == null) {
    userExchangeTokenBalance = new UserExchangeTokenBalance(userUniTokenID)
    userExchangeTokenBalance.ethsDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.tokensDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.uniTokensOwned = BigInt.fromI32(0)
    userExchangeTokenBalance.userAddress = event.params.buyer
    userExchangeTokenBalance.exchangeAddress = event.address
    userExchangeTokenBalance.totalEthFees = BigInt.fromI32(0)
    userExchangeTokenBalance.totalTokenFees = BigInt.fromI32(0)
    trackedExchange.totalUsers = trackedExchange.totalUsers + 1
  }

  trackedExchange.save()

  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.plus(event.params.eth_sold)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.minus(event.params.tokens_bought)
  userExchangeTokenBalance.totalEthFees = userExchangeTokenBalance.totalEthFees.plus(fee)

  userExchangeTokenBalance.save()

  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.eventType = "Token Purchase"
  transaction.block = event.block.number
  transaction.userAddress = event.params.buyer
  transaction.ethMoved = event.params.eth_sold
  transaction.tokenMoved = event.params.tokens_bought
  transaction.providerFee = event.params.eth_sold.times(BigInt.fromI32(3)).div(BigInt.fromI32(1000)) // should always equal 0.3%
  transaction.save()
}

// It is conceivable that user does not exist yet here
export function handleEthPurchase(event: EthPurchase): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  trackedExchange.totalEth = trackedExchange.totalEth.minus(event.params.eth_bought)
  trackedExchange.totalToken = trackedExchange.totalToken.plus(event.params.tokens_sold)
  trackedExchange.rate = trackedExchange.totalToken.div(trackedExchange.totalEth)
  trackedExchange.tokenAddress = event.address

  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
  }

  user.save()

  let userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(event.params.buyer.toHex())
  let fee = event.params.tokens_sold.times(BigInt.fromI32(3)).div(BigInt.fromI32(1000)) // should always equal 0.3%

  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)
  if (userExchangeTokenBalance == null) {
    userExchangeTokenBalance = new UserExchangeTokenBalance(userUniTokenID)
    userExchangeTokenBalance.ethsDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.tokensDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.uniTokensOwned = BigInt.fromI32(0)
    userExchangeTokenBalance.userAddress = event.params.buyer
    userExchangeTokenBalance.exchangeAddress = event.address
    userExchangeTokenBalance.totalEthFees = BigInt.fromI32(0)
    userExchangeTokenBalance.totalTokenFees = BigInt.fromI32(0)
    trackedExchange.totalUsers = trackedExchange.totalUsers + 1
  }

  trackedExchange.save()


  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.minus(event.params.eth_bought)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.plus(event.params.tokens_sold)
  userExchangeTokenBalance.totalTokenFees = userExchangeTokenBalance.totalTokenFees.plus(fee)

  userExchangeTokenBalance.save()

  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.eventType = "Eth Purchase"
  transaction.block = event.block.number
  transaction.userAddress = event.params.buyer
  transaction.ethMoved = event.params.eth_bought
  transaction.tokenMoved = event.params.tokens_sold
  transaction.providerFee = fee
  transaction.save()

}

// Will be handled First, so user , and its token balance may not exist
// def addLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
// This event must create the trackedExchange, as adding liquidity is the first thing to be done
export function handleAddLiquidity(event: AddLiquidity): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  if (trackedExchange == null) {
    trackedExchange = new TrackedExchange(exchangeID)
    trackedExchange.totalEth = BigInt.fromI32(0)
    trackedExchange.totalToken = BigInt.fromI32(0)
    trackedExchange.totalUniToken = BigInt.fromI32(0)
    trackedExchange.totalUsers = 0
    trackedExchange.rate = BigInt.fromI32(0)
  }

  trackedExchange.totalEth = trackedExchange.totalEth.plus(event.params.eth_amount)
  trackedExchange.totalToken = trackedExchange.totalToken.plus(event.params.token_amount)
  trackedExchange.tokenAddress = event.address
  trackedExchange.rate = trackedExchange.totalToken.div(trackedExchange.totalEth)

  // Because 'token' is not a public getter, we need to derive the name based on the event.address being emitted, so an // if else statement
  let contractAddress = event.address.toHex()
  let provider = event.params.provider.toHex()
  let userUniTokenID: string
  if (contractAddress == '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914') {
    trackedExchange.tokenTicker = "BAT"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(provider)
  } else if (contractAddress == '0x2c4bd064b998838076fa341a83d007fc2fa50957') {
    trackedExchange.tokenTicker = "MKR"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(provider)
  } else if (contractAddress == '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf') {
    trackedExchange.tokenTicker = "ZRX"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(provider)
  } else if (contractAddress == '0x09cabec1ead1c0ba254b09efb3ee13841712be14') {
    trackedExchange.tokenTicker = "DAI"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(provider)
  } else if (contractAddress == '0x4e395304655f0796bc3bc63709db72173b9ddf98') {
    trackedExchange.tokenTicker = "SPANK"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(provider)
  } else if (contractAddress == '0x077d52b047735976dfda76fef74d4d988ac25196') {
    trackedExchange.tokenTicker = "ANT"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(provider)
  } else {
    trackedExchange.tokenTicker = "UNKNOWN"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(provider)
  }

  let userID = event.params.provider.toHex()
  let user = User.load(userID)
  if (user == null) {
    user = new User(userID)
  }

  user.save()

  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)
  if (userExchangeTokenBalance == null) {
    userExchangeTokenBalance = new UserExchangeTokenBalance(userUniTokenID)
    userExchangeTokenBalance.ethsDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.tokensDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.uniTokensOwned = BigInt.fromI32(0)
    userExchangeTokenBalance.userAddress = event.params.provider
    userExchangeTokenBalance.exchangeAddress = event.address
    userExchangeTokenBalance.totalEthFees = BigInt.fromI32(0)
    userExchangeTokenBalance.totalTokenFees = BigInt.fromI32(0)
    trackedExchange.totalUsers = trackedExchange.totalUsers + 1

  }

  trackedExchange.save()

  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.plus(event.params.eth_amount)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.plus(event.params.token_amount)

  userExchangeTokenBalance.save()

  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.eventType = "Add Liquidity"
  transaction.block = event.block.number
  transaction.userAddress = event.params.provider
  transaction.ethMoved = event.params.eth_amount
  transaction.tokenMoved = event.params.token_amount
  transaction.save()
}

// the exchange must exist if you are trying to remove liquidity. same with user and its uniTokenBalance
// def removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  trackedExchange.totalEth = trackedExchange.totalEth.minus(event.params.eth_amount)
  trackedExchange.totalToken = trackedExchange.totalToken.minus(event.params.token_amount)
  trackedExchange.rate = trackedExchange.totalToken.div(trackedExchange.totalEth)
  trackedExchange.tokenAddress = event.address
  trackedExchange.save()

  let userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(event.params.provider.toHex())

  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)


  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.minus(event.params.eth_amount)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.minus(event.params.token_amount)

  userExchangeTokenBalance.save()

  let transaction = new Transaction(event.transaction.hash.toHex())
  transaction.eventType = "Remove Liquidity"
  transaction.block = event.block.number
  transaction.userAddress = event.params.provider
  transaction.ethMoved = event.params.eth_amount.times(BigInt.fromI32(-1))
  transaction.tokenMoved = event.params.token_amount.times(BigInt.fromI32(-1))
  transaction.save()
}


export function handleTransfer(event: Transfer): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)
  let userToID = trackedExchange.tokenTicker.concat('-').concat(event.params._to.toHex())
  let userFromID = trackedExchange.tokenTicker.concat('-').concat(event.params._from.toHex())

  if (event.params._from.toHex() == '0x0000000000000000000000000000000000000000') {
    trackedExchange.totalUniToken = trackedExchange.totalUniToken.plus(event.params._value)
    let userTo = UserExchangeTokenBalance.load(userToID)
    userTo.uniTokensOwned = userTo.uniTokensOwned.plus(event.params._value)
    trackedExchange.save()
    userTo.save()
  } else if (event.params._to.toHex() == '0x0000000000000000000000000000000000000000') {
    trackedExchange.totalUniToken = trackedExchange.totalUniToken.minus(event.params._value)
    let userFrom = UserExchangeTokenBalance.load(userFromID)
    userFrom.uniTokensOwned = userFrom.uniTokensOwned.minus(event.params._value)
    trackedExchange.save()
    userFrom.save()
  } else {
    let userTo = UserExchangeTokenBalance.load(userToID)
    // It is possible the user doesn't exist, since it is just being sent through a transfer
    if (userTo == null) {
      userTo = new UserExchangeTokenBalance(userToID)
      userTo.ethsDeposited = BigInt.fromI32(0)
      userTo.tokensDeposited = BigInt.fromI32(0)
      userTo.uniTokensOwned = BigInt.fromI32(0)
      userTo.totalTokenFees = BigInt.fromI32(0)
      userTo.totalEthFees = BigInt.fromI32(0)
      userTo.userAddress = event.params._from
      userTo.exchangeAddress = event.address
      trackedExchange.totalUsers = trackedExchange.totalUsers + 1
      trackedExchange.save()
    }

    let user = User.load(event.params._from.toHex())
    // possible this entity also doesn't exist
    if (user == null) {
      user = new User(event.params._from.toHex())
      user.save()
    }

    let userFrom = UserExchangeTokenBalance.load(userFromID)
    userTo.uniTokensOwned = userTo.uniTokensOwned.plus(event.params._value)
    userFrom.uniTokensOwned = userTo.uniTokensOwned.minus(event.params._value)
    userTo.save()
    userFrom.save()
  }
}

// NEVER EMITTED ON MAINNET YET (not much real use for it when you think about it)
export function handleApprove(event: Approval): void {

}
