import {BigInt, BigDecimal} from '@graphprotocol/graph-ts'
import {
  NewExchange
} from '../types/Factory/Factory'

import {
  Uniswap,
  Exchange,
} from '../types/schema'

export function handleNewExchange(event: NewExchange): void {

  // Instantiate them all with 1, to avoid divide by zero
  let id = event.params.exchange.toHex()
  let exchange = new Exchange(id)
  exchange.tokenAddress = event.params.token
  exchange.factoryID = '1'
  exchange.ethLiquidity = BigDecimal.fromString("1")
  exchange.tokenLiquidity = BigDecimal.fromString("1")
  exchange.startTime = event.block.timestamp
  exchange.tradeVolume = BigDecimal.fromString("1")
  exchange.tradeCount = 0
  exchange.totalUniToken = BigInt.fromI32(0)
  exchange.lastTradePrice = BigDecimal.fromString("1")
  exchange.priceChange = BigDecimal.fromString("1")
  // exchange.priceChangePercent = BigInt.fromI32(0) - TODO - add this back in V2
  exchange.price = BigDecimal.fromString("1")
  exchange.lastTradeErc20Qty = BigDecimal.fromString("1")
  exchange.lastTradeEthQty = BigDecimal.fromString("1")
  exchange.weightedAvgPrice = BigDecimal.fromString("1")
  exchange.totalValue = BigDecimal.fromString("1")

  // hardcoded, but technically could change with upgrades to uniswap protocol
  exchange.version = 1
  exchange.fee = BigDecimal.fromString("0.3")

  exchange.save()

  let factory = Uniswap.load("1")
  if (factory == null){
    factory = new Uniswap("1")
    factory.exchangeCount = 0
  }
  factory.exchangeCount = factory.exchangeCount + 1

  factory.save()
}

