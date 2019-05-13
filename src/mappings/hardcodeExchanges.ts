import {Exchange} from "../types/schema";
import {BigDecimal, BigInt, Address} from "@graphprotocol/graph-ts/index";
import {allExchanges} from "./allExchanges"

export function hardcodeExchange(exchangeAddress: string, tokenAddress: Address, timestamp: i32): void {
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

  for (let i = 0; i < allExchanges.length; i++) {
    if (tokenAddressStringed == allExchanges[i].tokenAddress) {
      exchange.tokenSymbol = allExchanges[i].symbol
      exchange.tokenName = allExchanges[i].name
      exchange.tokenDecimals = allExchanges[i].tokenDecimals
      break
    } else {
      exchange.tokenSymbol = null
      exchange.tokenName = null
      exchange.tokenDecimals = null
    }
  }
  exchange.save()
}
