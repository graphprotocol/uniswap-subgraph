import {} from '@graphprotocol/graph-ts'
import {
  NewExchange
} from '../types/Factory/Factory'

import {
  Directory,
  Exchange,
} from '../types/schema'

export function handleNewExchange(event: NewExchange): void {
  let id = event.params.exchange.toHex()
  let exchange = new Exchange(id)
  exchange.tokenAddress = event.params.token
  exchange.factoryID = '1'
  exchange.save()

  let factory = Directory.load("1")
  if (factory == null){
    factory = new Directory("1")
    factory.tokenCount = 0
  }
  factory.tokenCount = factory.tokenCount + 1

  factory.save()
}