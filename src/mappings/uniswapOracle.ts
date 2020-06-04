import { Exchange } from '../types/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'
import { equalToZero, zeroBD } from '../helpers'

export function uniswapUSDOracle(blockNum: BigInt): BigDecimal {
  const SAI_EXCHANGE = '0x09cabec1ead1c0ba254b09efb3ee13841712be14'
  const SAI_BLOCK_CONTRACT_CREATION = 6629140

  const USDC_EXCHANGE = '0x97dec872013f6b5fb443861090ad931542878126'
  const USDC_BLOCK_CONTRACT_CREATION = 7207017 // first block after a non-trivial amount of liquidity was added

  const TUSD_EXCHANGE = '0x4f30e682d0541eac91748bd38a648d759261b8f3'
  const TUSD_BLOCK_CONTRACT_CREATION = 7285332

  const DAI_EXCHANGE = '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667'
  const DAI_BLOCK_CONTRACT_CREATION = 8939330

  let oneUSDInEth: BigDecimal
  const blockNumInt = blockNum.toI32()

  if (blockNumInt > DAI_BLOCK_CONTRACT_CREATION) {
    const daiExchange = Exchange.load(DAI_EXCHANGE)
    const daiPrice = daiExchange.price

    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const tusdExchange = Exchange.load(TUSD_EXCHANGE)
    const tusdPrice = tusdExchange.price

    const averagePrice = daiPrice
      .plus(usdcPrice)
      .plus(tusdPrice)
      .div(BigDecimal.fromString('3'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else if (blockNumInt > TUSD_BLOCK_CONTRACT_CREATION) {
    const saiExchange = Exchange.load(SAI_EXCHANGE)
    const saiPrice = saiExchange.price

    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const tusdExchange = Exchange.load(TUSD_EXCHANGE)
    const tusdPrice = tusdExchange.price

    const averagePrice = saiPrice
      .plus(usdcPrice)
      .plus(tusdPrice)
      .div(BigDecimal.fromString('3'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else if (blockNumInt > USDC_BLOCK_CONTRACT_CREATION) {
    const saiExchange = Exchange.load(SAI_EXCHANGE)
    const saiPrice = saiExchange.price

    const usdcExchange = Exchange.load(USDC_EXCHANGE)
    const usdcPrice = usdcExchange.price

    const averagePrice = saiPrice.plus(usdcPrice).div(BigDecimal.fromString('2'))
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else if (blockNumInt >= SAI_BLOCK_CONTRACT_CREATION) {
    const saiExchange = Exchange.load(SAI_EXCHANGE)
    const saiPrice = saiExchange.price

    if (!equalToZero(saiPrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(saiPrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else {
    // probably only for a few events, before the dai exchange was made
    oneUSDInEth = BigDecimal.fromString('0')
    return oneUSDInEth
  }
}
