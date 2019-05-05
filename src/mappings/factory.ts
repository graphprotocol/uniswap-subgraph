import {hardcodeExchange} from "./hardcode-exchanges";
import { NewExchange } from '../types/Factory/Factory'
import { Uniswap } from '../types/schema'
import {BigInt, BigDecimal} from '@graphprotocol/graph-ts'
import {Exchange} from "../types/Factory/templates"

export function handleNewExchange(event: NewExchange): void {
  let factory = Uniswap.load("1")
  if (factory == null){
    factory = new Uniswap("1")
    factory.exchangeCount = 0
    factory.totalVolumeInEth = BigDecimal.fromString("0")
    factory.totalLiquidityInEth = BigDecimal.fromString("0")
    factory.totalVolumeUSD = BigDecimal.fromString("0")
    factory.totalLiquidityUSD = BigDecimal.fromString("0")
    factory.totalTokenSells = BigInt.fromI32(0)
    factory.totalTokenBuys = BigInt.fromI32(0)
    factory.totalAddLiquidity = BigInt.fromI32(0)
    factory.totalRemoveLiquidity = BigInt.fromI32(0)
  }
  factory.exchangeCount = factory.exchangeCount + 1
  factory.save()

  hardcodeExchange(event.params.exchange.toHexString(), event.params.token, event.block.timestamp.toI32())   // TODO - don't hard code, after we have the fix

  Exchange.create(event.params.exchange)
}

