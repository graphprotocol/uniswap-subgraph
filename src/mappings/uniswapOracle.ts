import {Exchange} from "../types/schema";
import {BigDecimal, BigInt, Address} from "@graphprotocol/graph-ts/index";

export function uniswapUSDOracle(blockNum: BigInt): BigDecimal {
  let DAI_Exchange = "0x09cabec1ead1c0ba254b09efb3ee13841712be14"
  let DAI_BlockContractCreation = 6629140

  let USDC_Exchange = "0x97dec872013f6b5fb443861090ad931542878126"
  let USDC_BlockContractCreation = 7207038

  let TUSD_Exchange = "0x4f30e682d0541eac91748bd38a648d759261b8f3"
  let TUSD_BlockContractCreation = 7285332

  let oneUSDInEth: BigDecimal
  let blockNumInt = blockNum.toI32()

  if (blockNumInt > TUSD_BlockContractCreation) {
    let daiExchange = Exchange.load(DAI_Exchange)
    let daiPrice = daiExchange.price

    let usdcExchange = Exchange.load(USDC_Exchange)
    let usdcPrice = usdcExchange.price

    let tusdExchange = Exchange.load(TUSD_Exchange)
    let tusdPrice = tusdExchange.price

    let combineThree = daiPrice.plus(usdcPrice).plus(tusdPrice).div(BigDecimal.fromString("3"))
    oneUSDInEth = BigDecimal.fromString("1").div(combineThree)
    return oneUSDInEth

  } else if (blockNumInt > USDC_BlockContractCreation) {
    let daiExchange = Exchange.load(DAI_Exchange)
    let daiPrice = daiExchange.price

    let usdcExchange = Exchange.load(USDC_Exchange)
    let usdcPrice = usdcExchange.price

    let combineTwo = daiPrice.plus(usdcPrice).div(BigDecimal.fromString("2"))
    oneUSDInEth = BigDecimal.fromString("1").div(combineTwo)
    return oneUSDInEth

  } else if (blockNumInt >= DAI_BlockContractCreation) {
    let daiExchange = Exchange.load(DAI_Exchange)
    let daiPrice = daiExchange.price

    oneUSDInEth = BigDecimal.fromString("1").div(daiPrice)
    return oneUSDInEth

  } else {
    // probably only for a few events, before the dai exchange was made
    oneUSDInEth = BigDecimal.fromString("0")
    return oneUSDInEth
  }
}
