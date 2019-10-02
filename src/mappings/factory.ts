import { BigInt, BigDecimal, Address, log } from '@graphprotocol/graph-ts'
import { NewExchange } from '../types/Factory/Factory'
import { Uniswap, Exchange } from '../types/schema'
import { Exchange as ExchangeContract } from '../types/templates'
import { hardcodedExchanges } from './hardcodedExchanges'

function hardcodeExchange(exchangeAddress: string, tokenAddress: Address, timestamp: i32): void {
  const exchange = new Exchange(exchangeAddress) as Exchange
  exchange.tokenAddress = tokenAddress

  const tokenAddressStringed = tokenAddress.toHexString()

  exchange.fee = BigDecimal.fromString('0.003')
  exchange.version = 1
  exchange.startTime = timestamp

  exchange.ethLiquidity = BigDecimal.fromString('0')
  exchange.tokenLiquidity = BigDecimal.fromString('0')
  exchange.ethBalance = BigDecimal.fromString('0')
  exchange.tokenBalance = BigDecimal.fromString('0')
  exchange.combinedBalanceInEth = BigDecimal.fromString('0')
  exchange.combinedBalanceInUSD = BigDecimal.fromString('0')
  exchange.ROI = BigDecimal.fromString('0')
  exchange.totalUniToken = BigDecimal.fromString('0')

  exchange.addLiquidityCount = BigInt.fromI32(0)
  exchange.removeLiquidityCount = BigInt.fromI32(0)
  exchange.sellTokenCount = BigInt.fromI32(0)
  exchange.buyTokenCount = BigInt.fromI32(0)

  exchange.lastPrice = BigDecimal.fromString('0')
  exchange.price = BigDecimal.fromString('0')
  exchange.tradeVolumeToken = BigDecimal.fromString('0')
  exchange.tradeVolumeEth = BigDecimal.fromString('0')
  exchange.totalValue = BigDecimal.fromString('0')
  exchange.weightedAvgPrice = BigDecimal.fromString('0')

  exchange.priceUSD = BigDecimal.fromString('0')
  exchange.lastPriceUSD = BigDecimal.fromString('0')
  exchange.weightedAvgPriceUSD = BigDecimal.fromString('0')

  exchange.tokenHolders = []

  for (let i = 0; i < hardcodedExchanges.length; i++) {
    if (tokenAddressStringed.toString() == hardcodedExchanges[i].tokenAddress.toString()) {
      exchange.tokenSymbol = hardcodedExchanges[i].symbol
      exchange.tokenName = hardcodedExchanges[i].name
      exchange.tokenDecimals = hardcodedExchanges[i].tokenDecimals
      break
    } else {
      exchange.tokenSymbol = 'unknown'
      exchange.tokenName = 'unknown'
      exchange.tokenDecimals = null
    }
  }

  // only save for tokens with non null decimals
  if (exchange.tokenDecimals !== null) {
    // add the exchange for the derived relationship
    const uniswap = Uniswap.load('1')
    const currentExchanges = uniswap.exchanges
    currentExchanges.push(exchange.id)
    uniswap.exchanges = currentExchanges
    uniswap.save()
    exchange.save()
  }
}

export function handleNewExchange(event: NewExchange): void {
  let factory = Uniswap.load('1')

  // if no factory yet, set up blank initial
  if (factory == null) {
    factory = new Uniswap('1')
    factory.exchangeCount = 0
    factory.exchanges = []
    factory.totalVolumeInEth = BigDecimal.fromString('0')
    factory.totalLiquidityInEth = BigDecimal.fromString('0')
    factory.totalVolumeUSD = BigDecimal.fromString('0')
    factory.totalLiquidityUSD = BigDecimal.fromString('0')
    factory.totalTokenSells = BigInt.fromI32(0)
    factory.totalTokenBuys = BigInt.fromI32(0)
    factory.totalAddLiquidity = BigInt.fromI32(0)
    factory.totalRemoveLiquidity = BigInt.fromI32(0)
    factory.exchangeHistoryEntityCount = BigInt.fromI32(0)
    factory.txCount = BigInt.fromI32(0)
  }
  factory.exchangeCount = factory.exchangeCount + 1
  factory.save()

  // create new exchange with data from our hard coded list
  hardcodeExchange(event.params.exchange.toHexString(), event.params.token, event.block.timestamp.toI32()) // TODO - don't hard code, after we have the fix

  ExchangeContract.create(event.params.exchange)
}
