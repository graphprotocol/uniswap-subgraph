import { Exchange } from '../types/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

const DAIExchange = '0x09cabec1ead1c0ba254b09efb3ee13841712be14'
const DAIBlockContractCreation = 6629139

const USDCExchange = '0x97dec872013f6b5fb443861090ad931542878126'
const USDCBlockContractCreation = 7207017 // first block after a non-trivial amount of liquidity was added

const TUSDExchange = '0x4f30e682d0541eac91748bd38a648d759261b8f3'
const TUSDBlockContractCreation = 7281293

export function uniswapUSDOracle(_blockNum: BigInt): BigDecimal {
  let blockNum = _blockNum.toI32()

  let oneUSDInEth: BigDecimal

  if (blockNum > TUSDBlockContractCreation) {
    let daiExchange = Exchange.load(DAIExchange) as Exchange
    let daiPrice = daiExchange.price

    let usdcExchange = Exchange.load(USDCExchange) as Exchange
    let usdcPrice = usdcExchange.price

    let tusdExchange = Exchange.load(TUSDExchange) as Exchange
    let tusdPrice = tusdExchange.price

    let averagePrice = daiPrice
      .plus(usdcPrice)
      .plus(tusdPrice)
      .div(BigDecimal.fromString('3'))
    oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
  } else if (blockNum > USDCBlockContractCreation) {
    let daiExchange = Exchange.load(DAIExchange) as Exchange
    let daiPrice = daiExchange.price

    let usdcExchange = Exchange.load(USDCExchange) as Exchange
    let usdcPrice = usdcExchange.price

    let averagePrice = daiPrice.plus(usdcPrice).div(BigDecimal.fromString('2'))
    oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
  } else if (blockNum > DAIBlockContractCreation) {
    let daiExchange = Exchange.load(DAIExchange) as Exchange

    let averagePrice = daiExchange.price
    oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
  } else {
    oneUSDInEth = BigDecimal.fromString('0')
  }

  return oneUSDInEth
}
