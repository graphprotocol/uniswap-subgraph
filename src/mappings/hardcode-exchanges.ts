import {Exchange} from "../types/schema";
import {BigDecimal, BigInt, Address} from "@graphprotocol/graph-ts/index";

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
  exchange.tradeVolume = BigDecimal.fromString("0")
  exchange.totalValue = BigDecimal.fromString("0")
  exchange.weightedAvgPrice = BigDecimal.fromString("0")

  exchange.priceUSD = BigDecimal.fromString("0")
  exchange.lastPriceUSD = BigDecimal.fromString("0")
  exchange.weightedAvgPriceUSD = BigDecimal.fromString("0")

  exchange.factoryID = "1"
  exchange.tokenHolders = []
  exchange.txs = []

  let tokenAddressStringed = tokenAddress.toHexString()
  if (tokenAddressStringed == '0x0d8775f648430679a709e98d2b0cb6250d2887ef') {
    exchange.tokenSymbol = "BAT"
    exchange.tokenName = "Basic Attention Token"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2') {
    exchange.tokenSymbol = "MKR"
    exchange.tokenName = "Maker"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xe41d2489571d322189246dafa5ebde1f4699f498') {
    exchange.tokenSymbol = "ZRX"
    exchange.tokenName = "0x"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359') {
    exchange.tokenSymbol = "DAI"
    exchange.tokenName = "Dai Stablecoin v1.0"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x42d6622dece394b54999fbd73d108123806f6a18') {
    exchange.tokenSymbol = "SPANK"
    exchange.tokenName = "Spank Chain"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x960b236a07cf122663c4303350609a66a7b288c0') {
    exchange.tokenSymbol = "ANT"
    exchange.tokenName = "Aragon"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xb8c77482e45f1f44de1745f52c74426c631bdd52') {
    exchange.tokenSymbol = "BNB"
    exchange.tokenName = "Binance Coin"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') {
    exchange.tokenSymbol = "USDC"
    exchange.tokenName = "USD Coin"
    exchange.tokenDecimals = 6
  } else if (tokenAddressStringed == '0xd26114cd6ee289accf82350c8d8487fedb8a0c07') {
    exchange.tokenSymbol = "OMG"
    exchange.tokenName = "OmiseGo"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x78b2a99c5b7dff22c4bebd2919fe561dafcde07c') {
    exchange.tokenSymbol = "HOT"
    exchange.tokenName = "HoloToken"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x514910771af9ca656af840dff83e8264ecf986ca') {
    exchange.tokenSymbol = "LINK"
    exchange.tokenName = "ChainLink token"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x1985365e9f78359a9b6ad760e32412f4a445e862') {
    exchange.tokenSymbol = "REP"
    exchange.tokenName = "Augur Reputation"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27') {
    exchange.tokenSymbol = "ZIL"
    exchange.tokenName = "Zilliqa"
    exchange.tokenDecimals = 12
  } else if (tokenAddressStringed == '0x8e870d67f660d95d5be530380d0ec0bd388289e1') {
    exchange.tokenSymbol = "PAX"
    exchange.tokenName = "Paxos Standard"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd') {
    exchange.tokenSymbol = "GUSD"
    exchange.tokenName = "Gemini Dollar"
    exchange.tokenDecimals = 2
  } else if (tokenAddressStringed == '0x80f2328e7a771fcded9320b6545a1253315b50c5') {
    exchange.tokenSymbol = "THETA"
    exchange.tokenName = "Theta Token"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x744d70fdbe2ba4cf95131626614a1763df805b9e') {
    exchange.tokenSymbol = "SNT"
    exchange.tokenName = "StatusNetwork"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xa74476443119a942de498590fe1f2454d7d4ac0d') {
    exchange.tokenSymbol = "GNT"
    exchange.tokenName = "Golem"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x0000000000085d4780b73119b644ae5ecd22b376') {
    exchange.tokenSymbol = "TUSD"
    exchange.tokenName = "TrueUSD"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xaaaf91d9b90df800df4f55c205fd6989c977e73a') {
    exchange.tokenSymbol = "TKN"
    exchange.tokenName = "TokenCard"
    exchange.tokenDecimals = 8
  } else if (tokenAddressStringed == '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206') {
    exchange.tokenSymbol = "NEXO"
    exchange.tokenName = "Nexo"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
    exchange.tokenSymbol = "WETH"
    exchange.tokenName = "Wrapped Ether"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x3772f9716cf6d7a09ede3587738aa2af5577483a') {
    exchange.tokenSymbol = "SNX"
    exchange.tokenName = "Synthetix Network Token"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0') {
    exchange.tokenSymbol = "LOOM"
    exchange.tokenName = "Loom"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x607f4c5bb672230e8672085532f7e901544a7375') {
    exchange.tokenSymbol = "RLC"
    exchange.tokenName = "iExec"
    exchange.tokenDecimals = 9
  } else if (tokenAddressStringed == '0xdd974d5c2e2928dea5f71b9825b8b646686bd200') {
    exchange.tokenSymbol = "KNC"
    exchange.tokenName = "KyberNetwork"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e') {
    exchange.tokenSymbol = "BLT"
    exchange.tokenName = "Bloom"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd') {
    exchange.tokenSymbol = "GRID"
    exchange.tokenName = "Grid"
    exchange.tokenDecimals = 12
  } else if (tokenAddressStringed == '0x419d0d8bdd9af5e606ae2232ed285aff190e711b') {
    exchange.tokenSymbol = "FUN"
    exchange.tokenName = "FunFair"
    exchange.tokenDecimals = 8
  } else if (tokenAddressStringed == '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6') {
    exchange.tokenSymbol = "RDN"
    exchange.tokenName = "Raiden"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x09617f6fd6cf8a71278ec86e23bbab29c04353a7') {
    exchange.tokenSymbol = "ULT"
    exchange.tokenName = "Unblocked Ledger Token"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf') {
    exchange.tokenSymbol = "DGX"
    exchange.tokenName = "Digix Gold Token"
    exchange.tokenDecimals = 9
  } else if (tokenAddressStringed == '0x687bfc3e73f6af55f0ccca8450114d107e781a0e') {
    exchange.tokenSymbol = "QCH"
    exchange.tokenName = "QChi"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xb4272071ecadd69d933adcd19ca99fe80664fc08') {
    exchange.tokenSymbol = "XCHF"
    exchange.tokenName = "CryptoFranc"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x57ab1e02fee23774580c119740129eac7081e9d3') {
    exchange.tokenSymbol = "sUSD"
    exchange.tokenName = "Synth sUSD"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c') {
    exchange.tokenSymbol = "BNT"
    exchange.tokenName = "Bancor"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d') {
    exchange.tokenSymbol = "PNK"
    exchange.tokenName = "Pinakion"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671') {
    exchange.tokenSymbol = "18"
    exchange.tokenName = "Numeraire"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x0f5d2fb29fb7d3cfee444a200298f468908cc942') {
    exchange.tokenSymbol = "MANA"
    exchange.tokenName = "Decentraland"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c') {
    exchange.tokenSymbol = "ENJ"
    exchange.tokenName = "EnjinCoin"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x4946fcea7c692606e8908002e55a582af44ac121') {
    exchange.tokenSymbol = "FOAM"
    exchange.tokenName = "FOAM Token"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a') {
    exchange.tokenSymbol = "DGD"
    exchange.tokenName = "Digix DAO"
    exchange.tokenDecimals = 9
  } else if (tokenAddressStringed == '0x23d80c4ee8fb55d4183dd9329296e176dc7464e1') {
    exchange.tokenSymbol = "DONUT"
    exchange.tokenName = "Donut "
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b') {
    exchange.tokenSymbol = "TRST"
    exchange.tokenName = "Trustcoin"
    exchange.tokenDecimals = 6
  } else if (tokenAddressStringed == '0x58b6a8a3302369daec383334672404ee733ab239') {
    exchange.tokenSymbol = "LPT"
    exchange.tokenName = "Livepeer Token"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5') {
    exchange.tokenSymbol = "KIN"
    exchange.tokenName = "Kin"
    exchange.tokenDecimals = 18
  } else if (tokenAddressStringed == '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599') {
    exchange.tokenSymbol = "WBTC"
    exchange.tokenName = "Wrapped BTC"
    exchange.tokenDecimals = 8
  } else {
    exchange.tokenSymbol = null
    exchange.tokenName = null
    exchange.tokenDecimals = null
  }
  exchange.save()
}
