import { NewExchange } from '../types/Factory/Factory'
import { Uniswap, Exchange } from '../types/schema'
import {BigInt, BigDecimal, Address} from '@graphprotocol/graph-ts'
import {Exchange as ExchangeContract} from "../types/Factory/templates"
import {hardcodedExchanges} from "./hardcodedExchanges"



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
    factory.exchangeHistoryEntityCount = BigInt.fromI32(0)
    factory.txCount = BigInt.fromI32(0)
  }
  factory.exchangeCount = factory.exchangeCount + 1
  factory.save()

  hardcodeExchange(event.params.exchange.toHexString(), event.params.token, event.block.timestamp.toI32())   // TODO - don't hard code, after we have the fix

  ExchangeContract.create(event.params.exchange)
}

function hardcodeExchange(exchangeAddress: string, tokenAddress: Address, timestamp: i32): void {
  let exchange = new Exchange(exchangeAddress)
  exchange.tokenAddress = tokenAddress

  exchange.fee = BigDecimal.fromString("0.003")
  exchange.version = 1
  exchange.startTime = timestamp

  exchange.ethLiquidity = BigDecimal.fromString("0")
  exchange.tokenLiquidity = BigDecimal.fromString("0")
  exchange.ethBalance = BigDecimal.fromString("0")
  exchange.tokenBalance = BigDecimal.fromString("0")
  exchange.combinedBalanceInEth = BigDecimal.fromString("0")
  exchange.combinedBalanceInUSD = BigDecimal.fromString("0")
  exchange.ROI = BigDecimal.fromString("0")
  exchange.totalUniToken = BigDecimal.fromString("0")

  exchange.addLiquidityCount = BigInt.fromI32(0)
  exchange.removeLiquidityCount = BigInt.fromI32(0)
  exchange.sellTokenCount = BigInt.fromI32(0)
  exchange.buyTokenCount = BigInt.fromI32(0)

  exchange.lastPrice = BigDecimal.fromString("0")
  exchange.price = BigDecimal.fromString("0")
  exchange.tradeVolumeToken = BigDecimal.fromString("0")
  exchange.tradeVolumeEth = BigDecimal.fromString("0")
  exchange.totalValue = BigDecimal.fromString("0")
  exchange.weightedAvgPrice = BigDecimal.fromString("0")

  exchange.priceUSD = BigDecimal.fromString("0")
  exchange.lastPriceUSD = BigDecimal.fromString("0")
  exchange.weightedAvgPriceUSD = BigDecimal.fromString("0")

  exchange.factoryID = "1"
  exchange.tokenHolders = []
  exchange.txs = []

  let tokenAddressStringed = tokenAddress.toHexString()

  for (let i = 0; i < hardcodedExchanges.length; i++) {
    if (tokenAddressStringed == hardcodedExchanges[i].tokenAddress) {
      exchange.tokenSymbol = hardcodedExchanges[i].symbol
      exchange.tokenName = hardcodedExchanges[i].name
      exchange.tokenDecimals = hardcodedExchanges[i].tokenDecimals
      break
    } else {
      exchange.tokenSymbol = null
      exchange.tokenName = null
      exchange.tokenDecimals = null
    }
  }
  exchange.save()
}
