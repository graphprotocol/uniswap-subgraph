import {hardcodeExchange} from "./hardcode-exchanges";
import { NewExchange } from '../types/Factory/Factory'
import { Uniswap } from '../types/schema'

export function handleNewExchange(event: NewExchange): void {
  let factory = Uniswap.load("1")
  if (factory == null){
    factory = new Uniswap("1")
    factory.exchangeCount = 0
  }
  factory.exchangeCount = factory.exchangeCount + 1
  factory.save()

  hardcodeExchange(event.params.exchange.toHexString(), event.params.token, event.block.timestamp.toI32())   // TODO - don't hard code, after we have the fix
}

