import {BigInt} from '@graphprotocol/graph-ts'
import {
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer,
  Approval,
} from '../types/Exchange-BAT/Exchange'


import {
  TrackedExchange,
  User,
  UserExchangeTokenBalance,
} from '../types/schema'


// It is conceivable that user does not exist yet here
export function handleTokenPurchase(event: TokenPurchase): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  trackedExchange.totalEth = trackedExchange.totalEth.minus(event.params.eth_sold)
  trackedExchange.totalToken = trackedExchange.totalToken.plus(event.params.tokens_bought)
  trackedExchange.tokenAddress = event.address

  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null){
    user = new User(userID)
  }

  user.save()
  let userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(event.address.toHex())

  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)
  if (userExchangeTokenBalance == null){
    userExchangeTokenBalance = new UserExchangeTokenBalance(userUniTokenID)
    userExchangeTokenBalance.ethsDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.tokensDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.uniTokensOwned = BigInt.fromI32(0)
    userExchangeTokenBalance.userAddress = event.params.buyer
    userExchangeTokenBalance.tokenAddress = event.address
    trackedExchange.totalUsers = trackedExchange.totalUsers + 1
  }

  trackedExchange.save()

  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.minus(event.params.eth_sold)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.plus(event.params.tokens_bought)

  userExchangeTokenBalance.save()
}

// It is conceivable that user does not exist yet here
export function handleEthPurchase(event: EthPurchase): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  trackedExchange.totalEth = trackedExchange.totalEth.plus(event.params.eth_bought)
  trackedExchange.totalToken = trackedExchange.totalToken.minus(event.params.tokens_sold)
  trackedExchange.tokenAddress = event.address

  let userID = event.params.buyer.toHex()
  let user = User.load(userID)
  if (user == null){
    user = new User(userID)
  }

  user.save()

  let userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(event.address.toHex())

  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)
  if (userExchangeTokenBalance == null){
    userExchangeTokenBalance = new UserExchangeTokenBalance(userUniTokenID)
    userExchangeTokenBalance.ethsDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.tokensDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.uniTokensOwned = BigInt.fromI32(0)
    userExchangeTokenBalance.userAddress = event.params.buyer
    userExchangeTokenBalance.tokenAddress = event.address
    trackedExchange.totalUsers = trackedExchange.totalUsers + 1
  }

  trackedExchange.save()


  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.plus(event.params.eth_bought)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.minus(event.params.tokens_sold)

  userExchangeTokenBalance.save()
}

// Will be handled First, so user , and its token balance may not exist
// def addLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
// This event must create the trackedExchange, as adding liquidity is the first thing to be done
export function handleAddLiquidity(event: AddLiquidity): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  if (trackedExchange == null){
    trackedExchange = new TrackedExchange(exchangeID)
    trackedExchange.totalEth = BigInt.fromI32(0)
    trackedExchange.totalToken = BigInt.fromI32(0)
    trackedExchange.totalUniToken = BigInt.fromI32(0)
    trackedExchange.totalUsers = 0
  }

  trackedExchange.totalEth = trackedExchange.totalEth.plus(event.params.eth_amount)
  trackedExchange.totalToken = trackedExchange.totalToken.plus(event.params.token_amount)
  trackedExchange.tokenAddress = event.address

  // Because 'token' is not a public getter, we need to derive the name based on the event.address being emitted, so an // if else statement
  let contractAddress = event.address.toHex()
  let userUniTokenID: string
  if (contractAddress == '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914'){
    trackedExchange.tokenTicker = "BAT"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(contractAddress)
  } else if (contractAddress == '0x2c4bd064b998838076fa341a83d007fc2fa50957'){
    trackedExchange.tokenTicker = "MKR"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(contractAddress)
  } else if (contractAddress == '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf'){
    trackedExchange.tokenTicker = "ZRX"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(contractAddress)
  } else if (contractAddress == '0x09cabec1ead1c0ba254b09efb3ee13841712be14'){
    trackedExchange.tokenTicker = "DAI"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(contractAddress)
  } else if (contractAddress == '0x4e395304655f0796bc3bc63709db72173b9ddf98'){
    trackedExchange.tokenTicker = "SPANK"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(contractAddress)
  } else if (contractAddress == '0x077d52b047735976dfda76fef74d4d988ac25196'){
    trackedExchange.tokenTicker = "ANT"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(contractAddress)
  } else {
    trackedExchange.tokenTicker = "UNKNOWN"
    userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(contractAddress)
  }

  let userID = event.params.provider.toHex()
  let user = User.load(userID)
  if (user == null){
    user = new User(userID)
  }

  user.save()

  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)
  if (userExchangeTokenBalance == null){
    userExchangeTokenBalance = new UserExchangeTokenBalance(userUniTokenID)
    userExchangeTokenBalance.ethsDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.tokensDeposited = BigInt.fromI32(0)
    userExchangeTokenBalance.uniTokensOwned = BigInt.fromI32(0)
    userExchangeTokenBalance.userAddress = event.params.provider
    userExchangeTokenBalance.tokenAddress = event.address
    trackedExchange.totalUsers = trackedExchange.totalUsers + 1

  }

  trackedExchange.save()

  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.plus(event.params.eth_amount)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.plus(event.params.token_amount)

  userExchangeTokenBalance.save()
}

// the exchange must exist if you are trying to remove liquidity. same with user and its uniToenBalance
// def removeLiquidity() will emit events log.AddLiquidity and log.Transfer back to back
export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  let exchangeID = event.address.toHex()
  let trackedExchange = TrackedExchange.load(exchangeID)

  trackedExchange.totalEth = trackedExchange.totalEth.minus(event.params.eth_amount)
  trackedExchange.totalToken = trackedExchange.totalToken.minus(event.params.token_amount)
  trackedExchange.tokenAddress = event.address
  trackedExchange.save()


  // not needed, user must have existed before if they are withdrawing
  // let userID = event.params.provider.toHex()
  // let user = User.load(userID)
  // if (user == null){
  //   user = new User(userID)
  // }

  // user.save()
  let userUniTokenID = trackedExchange.tokenTicker.concat('-').concat(event.address.toHex())

  let userExchangeTokenBalance = UserExchangeTokenBalance.load(userUniTokenID)

  //not needed, user musthave existed before
  // if (userExchangeTokenBalance == null){
  //   userExchangeTokenBalance = new UserExchangeTokenBalance(userUniTokenID)
  //   userExchangeTokenBalance.ethsDeposited = BigInt.fromI32(0)
  //   userExchangeTokenBalance.tokensDeposited = BigInt.fromI32(0)
  //   userExchangeTokenBalance.uniTokensOwned = BigInt.fromI32(0)
  //   userExchangeTokenBalance.userAddress = event.params.provider
  //   userExchangeTokenBalance.tokenAddress = event.address
  //   trackedExchange.totalUsers = trackedExchange.totalUsers + 1
  //
  // }


  userExchangeTokenBalance.ethsDeposited = userExchangeTokenBalance.ethsDeposited.plus(event.params.eth_amount)
  userExchangeTokenBalance.tokensDeposited = userExchangeTokenBalance.tokensDeposited.plus(event.params.token_amount)

  userExchangeTokenBalance.save()
}


export function handleTransfer(event: Transfer): void {

}

export function handleApprove(event: Approval): void {

}
