import {} from '@graphprotocol/graph-ts'
import {
  NewExchange
} from '../types/Factory/Factory'

import {
  ERC20Detailed
} from '../types/ERC20Detailed/ERC20Detailed'

import {
  Factory,
  Exchange,
} from '../types/schema'



export function handleNewExchange(event: NewExchange): void {
  let id = event.params.exchange.toHex()
  let exchange = new Exchange(id)
  exchange.tokenAddress = event.params.token

  // Get the token ticker from calling into the contract,
  // (token must share ERC20 interface that supports the symbol as public getter)
  let tokenContract = ERC20Detailed.bind(event.params.token)
  exchange.tokenSymbol = tokenContract.symbol()

  exchange.save()
}

