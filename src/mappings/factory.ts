import { BigDecimal, BigInt, Address, log, ByteArray } from '@graphprotocol/graph-ts'
import { NewExchange } from '../types/Factory/Factory'
import { ERC20 } from '../types/Factory/ERC20'
import { ERC20SymbolBytes } from '../types/Factory/ERC20SymbolBytes'
import { ERC20NameBytes } from '../types/Factory/ERC20NameBytes'
import { Uniswap, Exchange } from '../types/schema'
import { Exchange as ExchangeContract } from '../types/templates'
import { zeroBD, zeroBigInt, oneBigInt, isNullEthValue } from '../helpers'

function hardcodeExchange(exchangeAddress: string, tokenAddress: Address, timestamp: i32): void {
  const exchange = new Exchange(exchangeAddress) as Exchange
  exchange.tokenAddress = tokenAddress

  exchange.fee = BigDecimal.fromString('0.003')
  exchange.version = 1
  exchange.startTime = timestamp

  exchange.ethLiquidity = zeroBD()
  exchange.tokenLiquidity = zeroBD()
  exchange.ethBalance = zeroBD()
  exchange.tokenBalance = zeroBD()
  exchange.combinedBalanceInEth = zeroBD()
  exchange.combinedBalanceInUSD = zeroBD()
  exchange.totalUniToken = zeroBD()

  exchange.addLiquidityCount = zeroBigInt()
  exchange.removeLiquidityCount = zeroBigInt()
  exchange.sellTokenCount = zeroBigInt()
  exchange.buyTokenCount = zeroBigInt()

  exchange.lastPrice = zeroBD()
  exchange.price = zeroBD()
  exchange.tradeVolumeToken = zeroBD()
  exchange.tradeVolumeEth = zeroBD()
  exchange.tradeVolumeUSD = zeroBD()
  exchange.totalValue = zeroBD()
  exchange.weightedAvgPrice = zeroBD()
  exchange.totalTxsCount = oneBigInt()

  exchange.priceUSD = zeroBD()
  exchange.lastPriceUSD = zeroBD()
  exchange.weightedAvgPriceUSD = zeroBD()
  exchange.tokenHolders = []

  // bind to the exchange address
  const contract = ERC20.bind(tokenAddress)
  const contractSymbolBytes = ERC20SymbolBytes.bind(tokenAddress)
  const contractNameBytes = ERC20NameBytes.bind(tokenAddress)

  // try types string and bytes32 for symbol
  let symbolValue = 'unknown'
  const symbolResult = contract.try_symbol()
  if (symbolResult.reverted) {
    const symbolResultBytes = contractSymbolBytes.try_symbol()
    if (!symbolResultBytes.reverted) {
      // for broken exchanges that have no symbol function exposed
      if (!isNullEthValue(symbolResultBytes.value.toHexString())) {
        symbolValue = symbolResultBytes.value.toString()
      }
    }
  } else {
    symbolValue = symbolResult.value
  }
  exchange.tokenSymbol = symbolValue

  // try types string and bytes32 for name
  let nameValue = 'unknown'
  const nameResult = contract.try_name()
  if (nameResult.reverted) {
    const nameResultBytes = contractNameBytes.try_name()
    if (!nameResultBytes.reverted) {
      // for broken exchanges that have no name function exposed
      if (!isNullEthValue(nameResultBytes.value.toHexString())) {
        nameValue = nameResultBytes.value.toString()
      }
    }
  } else {
    nameValue = nameResult.value
  }
  exchange.tokenName = nameValue

  // try types uint8 for decimals
  let decimalValue = null
  const decimalResult = contract.try_decimals()
  if (!decimalResult.reverted) {
    decimalValue = decimalResult.value
  }
  exchange.tokenDecimals = decimalValue

  // only save for tokens with non-null decimals
  if (exchange.tokenDecimals !== null) {
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
    factory.totalVolumeInEth = zeroBD()
    factory.totalLiquidityInEth = zeroBD()
    factory.totalVolumeUSD = zeroBD()
    factory.totalLiquidityUSD = zeroBD()
    factory.totalTokenSells = zeroBigInt()
    factory.totalTokenBuys = zeroBigInt()
    factory.totalAddLiquidity = zeroBigInt()
    factory.totalRemoveLiquidity = zeroBigInt()
    factory.exchangeHistoryEntityCount = zeroBigInt()
    factory.uniswapHistoryEntityCount = zeroBigInt()
    factory.txCount = zeroBigInt()
  }
  factory.exchangeCount = factory.exchangeCount + 1
  factory.save()

  hardcodeExchange(event.params.exchange.toHexString(), event.params.token, event.block.timestamp.toI32()) // TODO - don't hard code, after we have the fix
  ExchangeContract.create(event.params.exchange)
}
