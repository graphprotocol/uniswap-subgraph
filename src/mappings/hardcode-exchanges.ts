// 17 hardcoded exchanges. these make up at least 99% of the volume, if not 99.9%, on uniswap
// NOTE - can't use plain JS objects, so it was if else chained into exchange.ts


// export let exchanges = {
//   "0xb8c77482e45f1f44de1745f52c74426c631bdd52": {
//     "exchangeAddress": "0x255e60c9d597dcaa66006a904ed36424f7b26286",
//     "tokenDecimals": 18,
//     "tokenName": "Binance Coin",
//     "tokenSymbol": "BNB"
//   },
//   "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": {
//     "exchangeAddress": "0x2c4bd064b998838076fa341a83d007fc2fa50957",
//     "tokenDecimals": 18,
//     "tokenName": "Maker",
//     "tokenSymbol": "BNB"
//   },
//   "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": {
//     "exchangeAddress": "0x97dec872013f6b5fb443861090ad931542878126",
//     "tokenDecimals": 6,
//     "tokenName": "USD Coin",
//     "tokenSymbol": "USDC"
//   },
//   "0xd26114cd6ee289accf82350c8d8487fedb8a0c07": {
//     "exchangeAddress": "0xddee242662323a3cff3f9aa139ffa496ac3c73b0",
//     "tokenDecimals": 18,
//     "tokenName": "OmiseGo",
//     "tokenSymbol": "OMG"
//   },
//   "0x6c6ee5e31d828de241282b9606c8e98ea48526e2": {
//     "exchangeAddress": "0xd4777e164c6c683e10593e08760b803d58529a8e",
//     "tokenDecimals": 18,
//     "tokenName": "HoloToken",
//     "tokenSymbol": "HOT"
//   },
//   "0x0d8775f648430679a709e98d2b0cb6250d2887ef": {
//     "exchangeAddress": "0x2e642b8d59b45a1d8c5aef716a84ff44ea665914",
//     "tokenDecimals": 18,
//     "tokenName": "Basic Attention Token",
//     "tokenSymbol": "BAT"
//   },
//   "0x514910771af9ca656af840dff83e8264ecf986ca": {
//     "exchangeAddress": "0xf173214c720f58e03e194085b1db28b50acdeead",
//     "tokenDecimals": 18,
//     "tokenName": "ChainLink Token",
//     "tokenSymbol": "LINK"
//   },
//   "0x1985365e9f78359a9B6AD760e32412f4a445E862": {
//     "exchangeAddress": "0x48b04d2a05b6b604d8d5223fd1984f191ded51af",
//     "tokenDecimals": 18,
//     "tokenName": "Reputation",
//     "tokenSymbol": "REP"
//   },
//   "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27": {
//     "exchangeAddress": "0x7dc095a5cf7d6208cc680fa9866f80a53911041a",
//     "tokenDecimals": 12,
//     "tokenName": "Zilliqa",
//     "tokenSymbol": "ZIL"
//   },
//   "0xe41d2489571d322189246dafa5ebde1f4699f498": {
//     "exchangeAddress": "0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf",
//     "tokenDecimals": 18,
//     "tokenName": "0x",
//     "tokenSymbol": "ZRX"
//   },
//   "0x8e870d67f660d95d5be530380d0ec0bd388289e1": {
//     "exchangeAddress": "0xc040d51b07aea5d94a89bc21e8078b77366fc6c7",
//     "tokenDecimals": 18,
//     "tokenName": "Paxos Standard",
//     "tokenSymbol": "PAX"
//   },
//   "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd": {
//     "exchangeAddress": "0xd883264737ed969d2696ee4b4caf529c2fc2a141",
//     "tokenDecimals": 2,
//     "tokenName": "Gemini Dollar",
//     "tokenSymbol": "GUSD"
//   },
//   "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": {
//     "exchangeAddress": "0x09cabec1ead1c0ba254b09efb3ee13841712be14",
//     "tokenDecimals": 18,
//     "tokenName": "Dai Stablecoin v1.0",
//     "tokenSymbol": "DAI"
//   },
//   "0x3883f5e181fccaf8410fa61e12b59bad963fb645": {
//     "exchangeAddress": "0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab",
//     "tokenDecimals": 18,
//     "tokenName": "Theta Token",
//     "tokenSymbol": "THETA"
//   },
//   "0x744d70fdbe2ba4cf95131626614a1763df805b9e": {
//     "exchangeAddress": "0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd",
//     "tokenDecimals": 18,
//     "tokenName": "StatusNetwork",
//     "tokenSymbol": "SNT"
//   },
//   "0xa74476443119a942de498590fe1f2454d7d4ac0d": {
//     "exchangeAddress": "0x7d839eb463b121790c99e0f017c21f0189dcc167",
//     "tokenDecimals": 18,
//     "tokenName": "Golem",
//     "tokenSymbol": "GNT"
//   },
//   "0x42d6622dece394b54999fbd73d108123806f6a18": {
//     "exchangeAddress": "0x4e395304655f0796bc3bc63709db72173b9ddf98",
//     "tokenDecimals": 18,
//     "tokenName": "Spank",
//     "tokenSymbol": "SPANK"
//   },
// }
