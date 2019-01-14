import {} from '@graphprotocol/graph-ts'
import {
  NewExchange
} from '../types/Factory/Factory'

import {
  Approval,
  ERC20Detailed,
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
  // let tokenContract = ERC20Detailed.bind(event.params.token)
  // exchange.tokenSymbol = tokenContract.symbol()

  exchange.save()

  let factory = Factory.load("1")
  if (factory == null){
    factory = new Factory("1")
    factory.tokenCount = 0
  }
  factory.tokenCount = factory.tokenCount + 1

  factory.save()
}

// 0x2e642b8d59b45a1d8c5aef716a84ff44ea665914 BAT
// 0x2c4bd064b998838076fa341a83d007fc2fa50957 MKR
// 0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf ZRX
// 0x09cabec1ead1c0ba254b09efb3ee13841712be14 DAI
// 0x4e395304655f0796bc3bc63709db72173b9ddf98 SPANK
// 0x077d52b047735976dfda76fef74d4d988ac25196 ANT