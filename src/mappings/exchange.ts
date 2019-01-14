import {} from '@graphprotocol/graph-ts'
import {
  Transfer,
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Approval,
} from '../types/Exchange-BAT/Exchange'


import {
  TrackedExchange,
} from '../types/schema'



export function handleTransfer(event: Transfer): void {
  // let id = event.params.exchange.toHex()
  // let exchange = new TrackedExchange(id)
//   exchange.tokenAddress = event.params.token
//
//   // Get the token ticker from calling into the contract,
//   // (token must share ERC20 interface that supports the symbol as public getter)
//   // let tokenContract = ERC20Detailed.bind(event.params.token)
//   // exchange.tokenSymbol = tokenContract.symbol()
//
//   exchange.save()
//
//   let factory = Factory.load("1")
//   if (factory == null){
//     factory = new Factory("1")
//     factory.tokenCount = 0
//   }
//   factory.tokenCount = factory.tokenCount + 1
//
//   factory.save()
}

export function handleTransfer(event: Transfer): void {
