export class AS_Exchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export let allExchanges: Array<AS_Exchange> = [
  {
    "symbol": "MKR",
    "name": "Maker",
    "tokenAddress": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2c4bd064b998838076fa341a83d007fc2fa50957"
  },
  {
    "symbol": "OMG",
    "name": "OMGToken",
    "tokenAddress": "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
    "tokenDecimals": 18,
    "exchangeAddress": "0xddee242662323a3cff3f9aa139ffa496ac3c73b0"
  },
  {
    "symbol": "ZRX",
    "name": "0x Protocol Token",
    "tokenAddress": "0xe41d2489571d322189246dafa5ebde1f4699f498",
    "tokenDecimals": 18,
    "exchangeAddress": "0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf"
  },
  {
    "symbol": "BNB",
    "name": "BNB",
    "tokenAddress": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    "tokenDecimals": 18,
    "exchangeAddress": "0x255e60c9d597dcaa66006a904ed36424f7b26286"
  },
  {
    "symbol": "DAI",
    "name": "Dai Stablecoin v1.0",
    "tokenAddress": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    "tokenDecimals": 18,
    "exchangeAddress": "0x09cabec1ead1c0ba254b09efb3ee13841712be14"
  },
  {
    "symbol": "GNO",
    "name": "Gnosis Token",
    "tokenAddress": "0x6810e776880c02933d47db1b9fc05908e5386b96",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe8e45431b93215566ba923a7e611b7342ea954df"
  },
  {
    "symbol": "KNC",
    "name": "Kyber Network Crystal",
    "tokenAddress": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    "tokenDecimals": 18,
    "exchangeAddress": "0x49c4f9bc14884f6210f28342ced592a633801a8b"
  },
  {
    "symbol": "LINK",
    "name": "ChainLink Token",
    "tokenAddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf173214c720f58e03e194085b1db28b50acdeead"
  },
  {
    "symbol": "LOOM",
    "name": "LoomToken",
    "tokenAddress": "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    "tokenDecimals": 18,
    "exchangeAddress": "0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b"
  },
  {
    "symbol": "MANA",
    "name": "Decentraland MANA",
    "tokenAddress": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2"
  },
  {
    "symbol": "REP",
    "name": "Reputation",
    "tokenAddress": "0x1985365e9f78359a9b6ad760e32412f4a445e862",
    "tokenDecimals": 18,
    "exchangeAddress": "0x48b04d2a05b6b604d8d5223fd1984f191ded51af"
  },
  {
    "symbol": "SNT",
    "name": "Status Network Token",
    "tokenAddress": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd"
  },
  {
    "symbol": "SPANK",
    "name": "SPANK",
    "tokenAddress": "0x42d6622dece394b54999fbd73d108123806f6a18",
    "tokenDecimals": 18,
    "exchangeAddress": "0x4e395304655f0796bc3bc63709db72173b9ddf98"
  },
  {
    "symbol": "HAY",
    "name": "HayCoin",
    "tokenAddress": "0xfa3e941d1f6b7b10ed84a0c211bfa8aee907965e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x78bac62f2a4cd3a7cb7da2991affc7b11590f682"
  },
  {
    "symbol": "UNI-V1",
    "name": "Uniswap V1",
    "tokenAddress": "0x78bac62f2a4cd3a7cb7da2991affc7b11590f682",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7ad24a41ce760232ba2885a91f846ea86c9baa41"
  },
  {
    "symbol": "JCD",
    "name": "J Chan Dollar",
    "tokenAddress": "0x0ed024d39d55e486573ee32e583bc37eb5a6271f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x657184e418d43a661a91d567182dc3d1a4179ec4"
  },
  {
    "symbol": "BORIS",
    "name": "BorisCoin",
    "tokenAddress": "0x919d0131fa5f77d99fbbbbace50bcb6e62332bf2",
    "tokenDecimals": 18,
    "exchangeAddress": "0x4e0e28d426caf318747b8e05c8b0564a580e39a7"
  },
  {
    "symbol": "GUSD",
    "name": "Gemini dollar",
    "tokenAddress": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    "tokenDecimals": 2,
    "exchangeAddress": "0xd883264737ed969d2696ee4b4caf529c2fc2a141"
  },
  {
    "symbol": "ADX",
    "name": "AdEx",
    "tokenAddress": "0x4470bb87d77b963a013db939be332f927f2b992e",
    "tokenDecimals": 4,
    "exchangeAddress": "0xb800445dd982c1311523fd465ac44f55093b2b5b"
  },
  {
    "symbol": "SIM",
    "name": "Simoleon",
    "tokenAddress": "0x86c8bf8532aa2601151c9dbbf4e4c4804e042571",
    "tokenDecimals": 2,
    "exchangeAddress": "0x174dfb6e6e78c95678580b553eee7f282b28c795"
  },
  {
    "symbol": "NEXO",
    "name": "Nexo",
    "tokenAddress": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
    "tokenDecimals": 18,
    "exchangeAddress": "0x069c97dba948175d10af4b2414969e0b88d44669"
  },
  {
    "symbol": "VERI",
    "name": "Veritaseum",
    "tokenAddress": "0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374",
    "tokenDecimals": 18,
    "exchangeAddress": "0x17e5bf07d696eaf0d14caa4b44ff8a1e17b34de3"
  },
  {
    "symbol": "DNT",
    "name": "district0x Network Token",
    "tokenAddress": "0x0abdace70d3790235af448c88547603b945604ea",
    "tokenDecimals": 18,
    "exchangeAddress": "0xaa3b3810c8aada6cbd2ce262699903ad7ae6a7ef"
  },
  {
    "symbol": "BTU",
    "name": "BTU Protocol",
    "tokenAddress": "0xb683d83a532e2cb7dfa5275eed3698436371cc9f",
    "tokenDecimals": 18,
    "exchangeAddress": "0xea3a62838477082d8f2106c43796d636dc78d8a4"
  },
  {
    "symbol": "sUSD",
    "name": "Synth sUSD",
    "tokenAddress": "0x57ab1e02fee23774580c119740129eac7081e9d3",
    "tokenDecimals": 18,
    "exchangeAddress": "0x69f276abd6456152d519d23086031da7c73f91b8"
  },
  {
    "symbol": "FUN",
    "name": "FunFair",
    "tokenAddress": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    "tokenDecimals": 8,
    "exchangeAddress": "0x60a87cc7fca7e53867facb79da73181b1bb4238b"
  },
  {
    "symbol": "DTH",
    "name": "Dether",
    "tokenAddress": "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe18256cd23efcdc4f95581e86f61ea1b09afd02a"
  },
  {
    "symbol": "unknown",
    "name": "unknown",
    "tokenAddress": "0xeb9951021698b42e4399f9cbb6267aa35f82d59d",
    "tokenDecimals": 18,
    "exchangeAddress": "0x055bab4bcc17d2ab155fff017fc5e093556c6ad2"
  },
  {
    "symbol": "BAT",
    "name": "Basic Attention Token",
    "tokenAddress": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2e642b8d59b45a1d8c5aef716a84ff44ea665914"
  },
  {
    "symbol": "TRAC",
    "name": "Trace Token",
    "tokenAddress": "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x38577ccec0ceffd178fd3be66e1c6f531bfa410e"
  },
  {
    "symbol": "BOOTY",
    "name": "BOOTY",
    "tokenAddress": "0x6b01c3170ae1efebee1a3159172cb3f7a5ecf9e5",
    "tokenDecimals": 18,
    "exchangeAddress": "0xef465915f2d6d8183a7d5ee134a53f00c780d3e9"
  },
  {
    "symbol": "PNK",
    "name": "Pinakion",
    "tokenAddress": "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf506828b166de88ca2edb2a98d960abba0d2402a"
  },
  {
    "symbol": "CVC",
    "name": "Civic",
    "tokenAddress": "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    "tokenDecimals": 8,
    "exchangeAddress": "0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a"
  },
  {
    "symbol": "LBA",
    "name": "LibraToken",
    "tokenAddress": "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe79fe64771d5351b936eeac6222682c3d878063e"
  },
  {
    "symbol": "SAN",
    "name": "SANtiment network token",
    "tokenAddress": "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
    "tokenDecimals": 18,
    "exchangeAddress": "0x8a8d7ad4b89d91983cd069c58c4aa9f2f4166298"
  },
  {
    "symbol": "PRG",
    "name": "PRG",
    "tokenAddress": "0x7728dfef5abd468669eb7f9b48a7f70a501ed29d",
    "tokenDecimals": 6,
    "exchangeAddress": "0x817e391baf312dc5078cd7a98a7a0255ac63ca48"
  },
  {
    "symbol": "AGI",
    "name": "SingularityNET Token",
    "tokenAddress": "0x8eb24319393716668d768dcec29356ae9cffe285",
    "tokenDecimals": 8,
    "exchangeAddress": "0xdf02ffeafdb79e564ae9fdac6545c5f4c2178400"
  },
  {
    "symbol": "ENTRP",
    "name": "Hut34 Entropy Token",
    "tokenAddress": "0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa1c467dc897a36689dbbadcc212b212b4f526e49"
  },
  {
    "symbol": "PTOY",
    "name": "Patientory",
    "tokenAddress": "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06",
    "tokenDecimals": 8,
    "exchangeAddress": "0xe8bc0a210aaf86dab4dd600faca5cfe492e2e084"
  },
  {
    "symbol": "ICN",
    "name": "ICONOMI",
    "tokenAddress": "0x888666ca69e0f178ded6d75b5726cee99a87d698",
    "tokenDecimals": 18,
    "exchangeAddress": "0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169"
  },
  {
    "symbol": "NMR",
    "name": "Numeraire",
    "tokenAddress": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2bf5a5ba29e60682fc56b2fcf9ce07bef4f6196f"
  },
  {
    "symbol": "CND",
    "name": "Cindicator Token",
    "tokenAddress": "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    "tokenDecimals": 18,
    "exchangeAddress": "0x21b8a991a203a440c83450564fdefa3db10a5004"
  },
  {
    "symbol": "RHOC",
    "name": "RHOC",
    "tokenAddress": "0x168296bb09e24a88805cb9c33356536b980d3fc5",
    "tokenDecimals": 8,
    "exchangeAddress": "0x394e524b47a3ab3d3327f7ff6629dc378c1494a3"
  },
  {
    "symbol": "REN",
    "name": "Republic Token",
    "tokenAddress": "0x408e41876cccdc0f92210600ef50372656052a38",
    "tokenDecimals": 18,
    "exchangeAddress": "0x43892992b0b102459e895b88601bb2c76736942c"
  },
  {
    "symbol": "GRID",
    "name": "GRID Token",
    "tokenAddress": "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
    "tokenDecimals": 12,
    "exchangeAddress": "0x4b17685b330307c751b47f33890c8398df4fe407"
  },
  {
    "symbol": "ANT",
    "name": "Aragon Network Token",
    "tokenAddress": "0x960b236a07cf122663c4303350609a66a7b288c0",
    "tokenDecimals": 18,
    "exchangeAddress": "0x077d52b047735976dfda76fef74d4d988ac25196"
  },
  {
    "symbol": "LAToken",
    "name": "LAToken",
    "tokenAddress": "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf",
    "tokenDecimals": 18,
    "exchangeAddress": "0x28991ac221054bee3a38ae9ad0fb3d0c3e45d0cf"
  },
  {
    "symbol": "MLN",
    "name": "Melon Token",
    "tokenAddress": "0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xaec97872d14ac79e95fff18c169bfd183efc6962"
  },
  {
    "symbol": "e11",
    "name": "Experimental Token",
    "tokenAddress": "0x4805f9568bca23bef099c2a317346b42146384a1",
    "tokenDecimals": 18,
    "exchangeAddress": "0x4785cedbd89c818d60988dc5979b029f3900b54b"
  },
  {
    "symbol": "0xBTC",
    "name": "0xBitcoin Token",
    "tokenAddress": "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
    "tokenDecimals": 8,
    "exchangeAddress": "0x701564aa6e26816147d4fa211a0779f1b774bb9b"
  },
  {
    "symbol": "KIWI",
    "name": "KIWI Token",
    "tokenAddress": "0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d",
    "tokenDecimals": 8,
    "exchangeAddress": "0x380fdc8bb8722915076a09479d1bbc75e69c8be0"
  },
  {
    "symbol": "SALT",
    "name": "Salt",
    "tokenAddress": "0x4156d3342d5c385a87d264f90653733592000581",
    "tokenDecimals": 8,
    "exchangeAddress": "0xc0c59cde851bfcbdddd3377ec10ea54a18efb937"
  },
  {
    "symbol": "BPT",
    "name": "Blockport Token",
    "tokenAddress": "0x327682779bab2bf4d1337e8974ab9de8275a7ca8",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb2744df7bfbb4802f44fd1b1fd9012502d4af704"
  },
  {
    "symbol": "LPT",
    "name": "Livepeer Token",
    "tokenAddress": "0x58b6a8a3302369daec383334672404ee733ab239",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc4a1c45d5546029fd57128483ae65b56124bfa6a"
  },
  {
    "symbol": "BNTY",
    "name": "Bounty0x Token",
    "tokenAddress": "0xd2d6158683aee4cc838067727209a0aaf4359de3",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd1f3e9b413f5c9fd56f044699c64ff710e7e5a9a"
  },
  {
    "symbol": "WETH",
    "name": "Wrapped Ether",
    "tokenAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb"
  },
  {
    "symbol": "ASTRO",
    "name": "AstroTokens",
    "tokenAddress": "0x7b22938ca841aa392c93dbb7f4c42178e3d65e88",
    "tokenDecimals": 4,
    "exchangeAddress": "0xbd4479c98dc21563ba822c3c206d8339698e2dd4"
  },
  {
    "symbol": "HBZ",
    "name": "Helbiz Token",
    "tokenAddress": "0xe34e1944e776f39b9252790a0527ebda647ae668",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd1a8c5ba35752e4b62c71c795a3f6481faa4d36e"
  },
  {
    "symbol": "HUM",
    "name": "Humanity",
    "tokenAddress": "0xecf3958d0f82291ca1ff6c9bda8eb3c50ee41ce3",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7d31fc38ddd7d6907f820f4268f1d8d5d5797826"
  },
  {
    "symbol": "ZIL",
    "name": "Zilliqa",
    "tokenAddress": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
    "tokenDecimals": 12,
    "exchangeAddress": "0x7dc095a5cf7d6208cc680fa9866f80a53911041a"
  },
  {
    "symbol": "USDC",
    "name": "USD//C",
    "tokenAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "tokenDecimals": 6,
    "exchangeAddress": "0x97dec872013f6b5fb443861090ad931542878126"
  },
  {
    "symbol": "ENG",
    "name": "Enigma",
    "tokenAddress": "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
    "tokenDecimals": 8,
    "exchangeAddress": "0x884715e2dce8757c9ee19739c366b2c7c65f05b1"
  },
  {
    "symbol": "PITCH",
    "name": "PITCH",
    "tokenAddress": "0x87f56ee356b434187105b40f96b230f5283c0ab4",
    "tokenDecimals": 9,
    "exchangeAddress": "0x329c9642efe33a62161dda6b4eb3821965191441"
  },
  {
    "symbol": "CNUS",
    "name": "CoinUs",
    "tokenAddress": "0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308",
    "tokenDecimals": 18,
    "exchangeAddress": "0x30b16fc2b530dbf991e1b15ed953cc4585f0b27c"
  },
  {
    "symbol": "MOR",
    "name": "MoriaToken",
    "tokenAddress": "0xa6a7fce4affe059548fc39ebbc74555952a6fb0d",
    "tokenDecimals": 18,
    "exchangeAddress": "0xbe478403ac906d329fa8ebef1d3f9e0a48067d57"
  },
  {
    "symbol": "REQ",
    "name": "Request Token",
    "tokenAddress": "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    "tokenDecimals": 18,
    "exchangeAddress": "0xbcdf538581f7167ec8228ec2c9b1cfc2f74788c7"
  },
  {
    "symbol": "unknown",
    "name": "unknown",
    "tokenAddress": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd55c1ca9f5992a2e5e379dce49abf24294abe055"
  },
  {
    "symbol": "TKN",
    "name": "Monolith TKN",
    "tokenAddress": "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
    "tokenDecimals": 8,
    "exchangeAddress": "0xb6cfbf322db47d39331e306005dc7e5e6549942b"
  },
  {
    "symbol": "DGX",
    "name": "Digix Gold Token",
    "tokenAddress": "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
    "tokenDecimals": 9,
    "exchangeAddress": "0xb92de8b30584392af27726d5ce04ef3c4e5c9924"
  },
  {
    "symbol": "STX",
    "name": "Stox",
    "tokenAddress": "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2afc64cd5e64a32a363ea84b8cad1ce5239a1a3d"
  },
  {
    "symbol": "TRST",
    "name": "Trustcoin",
    "tokenAddress": "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
    "tokenDecimals": 6,
    "exchangeAddress": "0x95e4649f5209dd292caf1f087b8f1db3be24927f"
  },
  {
    "symbol": "SWM",
    "name": "Swarm Fund Token",
    "tokenAddress": "0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc3c028721f854bc75967cbe432fb0e221908baa1"
  },
  {
    "symbol": "GNT",
    "name": "Golem Network Token",
    "tokenAddress": "0xa74476443119a942de498590fe1f2454d7d4ac0d",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7d839eb463b121790c99e0f017c21f0189dcc167"
  },
  {
    "symbol": "MYU",
    "name": "MYUBI Token",
    "tokenAddress": "0xf3be20da25b31bd6ee4ce4496985b2064304c125",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb684f9b231accdef385f06038395e27a4e3aa86b"
  },
  {
    "symbol": "LQD",
    "name": "Liquidity.Network Token",
    "tokenAddress": "0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe3406e7d0155e0a83236ec25d34cd3d903036669"
  },
  {
    "symbol": "ULT",
    "name": "Unblocked Ledger Token",
    "tokenAddress": "0x09617f6fd6cf8a71278ec86e23bbab29c04353a7",
    "tokenDecimals": 18,
    "exchangeAddress": "0x28d9353611c5a0d5a026a648c05e5d6523e41cbf"
  },
  {
    "symbol": "LIRA",
    "name": "Lira Cash",
    "tokenAddress": "0x49aaa160506f7e07e6c3f6cd6316b6866025cdcb",
    "tokenDecimals": 8,
    "exchangeAddress": "0xb580a2b495917b8577d9a612be068f591e8c20f9"
  },
  {
    "symbol": "FOAM",
    "name": "FOAM Token",
    "tokenAddress": "0x4946fcea7c692606e8908002e55a582af44ac121",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf79cb3bea83bd502737586a6e8b133c378fd1ff2"
  },
  {
    "symbol": "XCHF",
    "name": "CryptoFranc",
    "tokenAddress": "0xb4272071ecadd69d933adcd19ca99fe80664fc08",
    "tokenDecimals": 18,
    "exchangeAddress": "0x8de0d002dc83478f479dc31f76cb0a8aa7ccea17"
  },
  {
    "symbol": "BLUE",
    "name": "Ethereum Blue",
    "tokenAddress": "0x539efe69bcdd21a83efd9122571a64cc25e0282b",
    "tokenDecimals": 8,
    "exchangeAddress": "0x7eb81c7a0b322d31c11064105e14dce6e852e8c1"
  },
  {
    "symbol": "SWT",
    "name": "Swarm City Token",
    "tokenAddress": "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607",
    "tokenDecimals": 18,
    "exchangeAddress": "0x755160062e3e09d34af0a00ff8cab8500e81e0d7"
  },
  {
    "symbol": "RCN",
    "name": "Ripio Credit Network Token",
    "tokenAddress": "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd91ff16ef92568fc27f466c3c5613e43313ab1dc"
  },
  {
    "symbol": "POA20",
    "name": "POA ERC20 on Foundation",
    "tokenAddress": "0x6758b7d441a9739b98552b373703d8d3d14f9e62",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa2e6b3ef205feaee475937c4883b24e6eb717eef"
  },
  {
    "symbol": "QCH",
    "name": "QChi",
    "tokenAddress": "0x687bfc3e73f6af55f0ccca8450114d107e781a0e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x755899f0540c3548b99e68c59adb0f15d2695188"
  },
  {
    "symbol": "FAC",
    "name": "Financial Aid Coin",
    "tokenAddress": "0x4b4a70cae3f7c84e36ce9aa19abc98f85db7f058",
    "tokenDecimals": 7,
    "exchangeAddress": "0x32a29c4269dee1a9e87eb75d66da71591a7aee96"
  },
  {
    "symbol": "SCHAP",
    "name": "AshleighCoin",
    "tokenAddress": "0xe503a034a8c288dfa9583c43691a7b8233e27013",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd202ee9690e3240aff1631d98c99717a2265fa64"
  },
  {
    "symbol": "SCHAP",
    "name": "AshleighCoin",
    "tokenAddress": "0x3638c9e50437f00ae53a649697f288ba68888cc1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa0513d82f17c491dc6ab34efd89dc372bb180378"
  },
  {
    "symbol": "C20",
    "name": "Crypto20",
    "tokenAddress": "0x26e75307fc0c021472feb8f727839531f112f317",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf7b5a4b934658025390ff69db302bc7f2ac4a542"
  },
  {
    "symbol": "POW",
    "name": "Proof of work",
    "tokenAddress": "0x9709907cb2cf9e16df841f7b145b78c230d8205e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6fca96a679490ed8a80c7344799f1b090fd4c94d"
  },
  {
    "symbol": "\u0001",
    "name": "\u0001",
    "tokenAddress": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
    "tokenDecimals": 1,
    "exchangeAddress": "0xc7c60e9419466939e968db2a88fe64ec41908bb4"
  },
  {
    "symbol": "AMIS",
    "name": "AMIS",
    "tokenAddress": "0x949bed886c739f1a3273629b3320db0c5024c719",
    "tokenDecimals": 9,
    "exchangeAddress": "0x164c93580839f40609ce0250dd4c98a25da175de"
  },
  {
    "symbol": "KIN",
    "name": "Kin",
    "tokenAddress": "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb7520a5f8c832c573d6bd0df955fc5c9b72400f7"
  },
  {
    "symbol": "TUSD",
    "name": "TrueUSD",
    "tokenAddress": "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x4f30e682d0541eac91748bd38a648d759261b8f3"
  },
  {
    "symbol": "ZCN",
    "name": "0chain",
    "tokenAddress": "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78",
    "tokenDecimals": 10,
    "exchangeAddress": "0x1c116d67e0bf0cf5cb0ad5a74a041d26e89271e7"
  },
  {
    "symbol": "CRO",
    "name": "CRO",
    "tokenAddress": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    "tokenDecimals": 8,
    "exchangeAddress": "0x2135d193bf81abbead93906166f2be32b2492c04"
  },
  {
    "symbol": "MCO",
    "name": "Monaco",
    "tokenAddress": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
    "tokenDecimals": 8,
    "exchangeAddress": "0xedc485266aa0ebe9ccbfc1f255bb5ffea1f9e3cc"
  },
  {
    "symbol": "GCB",
    "name": "GuangChangBi",
    "tokenAddress": "0x74436ae1db59c62bbb3de88d268f7e058dce6d50",
    "tokenDecimals": 18,
    "exchangeAddress": "0x62ccb0577aa63b8d72449b9fd13b3cdbcf3787d6"
  },
  {
    "symbol": "CNN",
    "name": "CNN Token",
    "tokenAddress": "0x8713d26637cf49e1b6b4a7ce57106aabc9325343",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe31a245102fc1ae72f80c6969f6475e85c897bbe"
  },
  {
    "symbol": "CMCT",
    "name": "Crowd Machine Compute Token",
    "tokenAddress": "0x47bc01597798dcd7506dcca36ac4302fc93a8cfb",
    "tokenDecimals": 8,
    "exchangeAddress": "0x53e31a941b76ef1b486e86aa39bcd5ae56829870"
  },
  {
    "symbol": "EDU",
    "name": "EduCoin",
    "tokenAddress": "0xf263292e14d9d8ecd55b58dad1f1df825a874b7c",
    "tokenDecimals": 18,
    "exchangeAddress": "0xab2da28aa5803c8da0f6603e91e16dab3ba542d2"
  },
  {
    "symbol": "ITT",
    "name": "Intelligent Trading Technologies",
    "tokenAddress": "0x0aef06dcccc531e581f0440059e6ffcc206039ee",
    "tokenDecimals": 8,
    "exchangeAddress": "0x20149f1672175c7118bdbf966bfb6a02bf733810"
  },
  {
    "symbol": "DENT",
    "name": "DENT",
    "tokenAddress": "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    "tokenDecimals": 8,
    "exchangeAddress": "0x9709ef0958b831865a97682d9ec08f897fe3b56f"
  },
  {
    "symbol": "MEDIBIT",
    "name": "MEDIBIT",
    "tokenAddress": "0x737fa0372c8d001904ae6acaf0552d4015f9c947",
    "tokenDecimals": 18,
    "exchangeAddress": "0x68326300df49ec6387e75690857424c2ae111750"
  },
  {
    "symbol": "AWC",
    "name": "Atomic Wallet Token",
    "tokenAddress": "0xad22f63404f7305e4713ccbd4f296f34770513f4",
    "tokenDecimals": 8,
    "exchangeAddress": "0x8aa3cc2bf30cb47f290fd4e9b660bc3a685b9b3e"
  },
  {
    "symbol": "IDT",
    "name": "InvestDigital Token",
    "tokenAddress": "0x02c4c78c462e32cca4a90bc499bf411fb7bc6afb",
    "tokenDecimals": 18,
    "exchangeAddress": "0x3fbc2275de71427aaebbe0e5e6bc13fe8f27fa9e"
  },
  {
    "symbol": "HPT",
    "name": "HuobiPoolToken",
    "tokenAddress": "0xa66daa57432024023db65477ba87d4e7f5f95213",
    "tokenDecimals": 18,
    "exchangeAddress": "0xfe3f05c7da9fe53591fab3f920798a67a95747ed"
  },
  {
    "symbol": "ERC20",
    "name": "ERC20",
    "tokenAddress": "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf50bac10faf905e95ffdc9f35b75ee67117dad2a"
  },
  {
    "symbol": "EDU",
    "name": "EduCoinToken",
    "tokenAddress": "0xa0872ee815b8dd0f6937386fd77134720d953581",
    "tokenDecimals": 18,
    "exchangeAddress": "0x0045d5d2cac7688f7fc36313e69fb5350958936c"
  },
  {
    "symbol": "CRPHT",
    "name": "Crypthealth",
    "tokenAddress": "0xcd7d0042fdb92f3dde312aa61af084953aa914ee",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe1e005d82922303ca9fb5cb6426c2eb07f8e5c84"
  },
  {
    "symbol": "ROL",
    "name": "DICE",
    "tokenAddress": "0x2e071d2966aa7d8decb1005885ba1977d6038a65",
    "tokenDecimals": 16,
    "exchangeAddress": "0xb7836492f5850d9b61d6b71c73697c5b9676208d"
  },
  {
    "symbol": "PAY",
    "name": "TenX Pay Token",
    "tokenAddress": "0xb97048628db6b661d4c2aa833e95dbe1a905b280",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6f1c46e91ce29d430e31205ead148b0bee46b9fc"
  },
  {
    "symbol": "PAI",
    "name": "PCHAIN",
    "tokenAddress": "0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7174ef6b9cb528e954508264a9912da905977422"
  },
  {
    "symbol": "SNX",
    "name": "Synthetix Network Token",
    "tokenAddress": "0xc011a72400e58ecd99ee497cf89e3775d4bd732f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x23228ec35e810569495bd0aa4d56e9fad759bb29"
  },
  {
    "symbol": "LOT",
    "name": "lothlor",
    "tokenAddress": "0xdcef0710b10ad66bc2194b412fb37c65d4d0a965",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe69ea0f00b6d399a11030eb6d79e54c486c0e1d1"
  },
  {
    "symbol": "PAX",
    "name": "PAX",
    "tokenAddress": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc040d51b07aea5d94a89bc21e8078b77366fc6c7"
  },
  {
    "symbol": "WBTC",
    "name": "Wrapped BTC",
    "tokenAddress": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "tokenDecimals": 8,
    "exchangeAddress": "0x4d2f5cfba55ae412221182d8475bc85799a5644b"
  },
  {
    "symbol": "DKC",
    "name": "ICO GAZUA TOKEN",
    "tokenAddress": "0xb5ce43922eb8e73bd2b1fcec33c2dba43cce7e4c",
    "tokenDecimals": 18,
    "exchangeAddress": "0x5634de511580536296c6ea2eb8ebec271ca76bc2"
  },
  {
    "symbol": "DKC",
    "name": "ICO GAZUA TOKEN",
    "tokenAddress": "0x7365877678c744b435ed03b1cac12ab407cba13a",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc3b03664126f2f192ec658e1c62798c9ebd0ff08"
  },
  {
    "symbol": "HERC",
    "name": "Hercules",
    "tokenAddress": "0x6251583e7d997df3604bc73b9779196e94a090ce",
    "tokenDecimals": 18,
    "exchangeAddress": "0x059ad96e38f027ccd127567dc09b164762bcd695"
  },
  {
    "symbol": "PMA",
    "name": "PumaPay",
    "tokenAddress": "0x846c66cf71c43f80403b51fe3906b3599d63336f",
    "tokenDecimals": 18,
    "exchangeAddress": "0xcc36e05eeffac3eb61b696d0bb328f2b08389fb5"
  },
  {
    "symbol": "BBO",
    "name": "Bigbom",
    "tokenAddress": "0x84f7c44b6fed1080f647e354d552595be2cc602f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x3c3351e44d32b36bf2af97de6f40b548b00cf654"
  },
  {
    "symbol": "PATH",
    "name": "Path Network Token",
    "tokenAddress": "0x7b94a1281db0335c9efd68aca5c98b494d775c70",
    "tokenDecimals": 18,
    "exchangeAddress": "0x95efaafe52e89992bfd4f33c96ad971fccdc31f6"
  },
  {
    "symbol": "DATA",
    "name": "Streamr DATAcoin",
    "tokenAddress": "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
    "tokenDecimals": 18,
    "exchangeAddress": "0x4f0d6e2179938828cff93da40a8ba1df7519ca8c"
  },
  {
    "symbol": "RPL",
    "name": "Rocket Pool",
    "tokenAddress": "0xb4efd85c19999d84251304bda99e90b92300bd93",
    "tokenDecimals": 18,
    "exchangeAddress": "0x3fb2f18065926ddb33e7571475c509541d15da0e"
  },
  {
    "symbol": "UFR",
    "name": "Upfiring",
    "tokenAddress": "0xea097a2b1db00627b2fa17460ad260c016016977",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2263fd7c62914ab8ec2b5e7b00bc8371a6c0d221"
  },
  {
    "symbol": "RLC",
    "name": "iEx.ec Network Token",
    "tokenAddress": "0x607f4c5bb672230e8672085532f7e901544a7375",
    "tokenDecimals": 9,
    "exchangeAddress": "0xa825cae02b310e9901b4776806ce25db520c8642"
  },
  {
    "symbol": "UNI-V1",
    "name": "Uniswap V1",
    "tokenAddress": "0x09cabec1ead1c0ba254b09efb3ee13841712be14",
    "tokenDecimals": 18,
    "exchangeAddress": "0x601c32e0580d3aef9437db52d09f5a5d7e60ec22"
  },
  {
    "symbol": "CNX",
    "name": "Cryptonex (CNX) - Global Blockchain Acquiring",
    "tokenAddress": "0x94d6b4fb35fb08cb34aa716ab40049ec88002079",
    "tokenDecimals": 8,
    "exchangeAddress": "0xbb7cf8a9d6b2aa7d98fb0bf3548a589a68ddb774"
  },
  {
    "symbol": "CAN",
    "name": "CanYaCoin",
    "tokenAddress": "0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0",
    "tokenDecimals": 6,
    "exchangeAddress": "0x066198694b1db74d67007d19a7c4f2fc3a061075"
  },
  {
    "symbol": "MAS",
    "name": "MidasProtocol",
    "tokenAddress": "0x23ccc43365d9dd3882eab88f43d515208f832430",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe2f548a3b898eca923bd61919f2635b071a7f95e"
  },
  {
    "symbol": "DONUT",
    "name": "Donut",
    "tokenAddress": "0x23d80c4ee8fb55d4183dd9329296e176dc7464e1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xed9d5aa6124a3310b80a2468c67763627653887d"
  },
  {
    "symbol": "KRH",
    "name": "KryptoHub",
    "tokenAddress": "0x4dadf81edf74e9b1a9ad1f364d51a176be48f0ac",
    "tokenDecimals": 18,
    "exchangeAddress": "0x08850bd3ce3a8f6b64d724c3dabdbf6f4f8561fc"
  },
  {
    "symbol": "BEE",
    "name": "Bee Token",
    "tokenAddress": "0x42237af8b1b3b2063d8377c5de8a4549e7b09ac5",
    "tokenDecimals": 18,
    "exchangeAddress": "0x356435d47e8f36d5102719704747afb9ddd36747"
  },
  {
    "symbol": "BEE",
    "name": "Bee Token",
    "tokenAddress": "0x4d8fc1453a0f359e99c9675954e656d80d996fbf",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe9078a97eef2bb502a9f792169f9c03626649248"
  },
  {
    "symbol": "BOOTY",
    "name": "BOOTY",
    "tokenAddress": "0x824c0659f6940604506aa8fa829d13fde17fb900",
    "tokenDecimals": 18,
    "exchangeAddress": "0x5a67d8ea5c9bf381fe0da2862cec1ec90a5ca329"
  },
  {
    "symbol": "ZCI",
    "name": "0xchan ICO",
    "tokenAddress": "0x236149288602c07b84387d0d75784d73f133142b",
    "tokenDecimals": 18,
    "exchangeAddress": "0xcfcc608f03c0cee86589e11224f24779212f0fe5"
  },
  {
    "symbol": "WPR",
    "name": "WePower Token",
    "tokenAddress": "0x4cf488387f035ff08c371515562cba712f9015d4",
    "tokenDecimals": 18,
    "exchangeAddress": "0x72208a7d8c11cb28c8e6d32e1a070015786c0823"
  },
  {
    "symbol": "EMONT",
    "name": "EtheremonToken",
    "tokenAddress": "0x95daaab98046846bf4b2853e23cba236fa394a31",
    "tokenDecimals": 8,
    "exchangeAddress": "0x2995b7f65cbc1b0ae8095eae314246508c49182a"
  },
  {
    "symbol": "PLAY",
    "name": "Herocoin",
    "tokenAddress": "0xe477292f1b3268687a29376116b0ed27a9c76170",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf43b2329130cfd87b322e49b96681e09f1ef172f"
  },
  {
    "symbol": "BOI",
    "name": "BOI Token",
    "tokenAddress": "0x439ce375e3ee4dc203d71958beca3c0f417d65cb",
    "tokenDecimals": 18,
    "exchangeAddress": "0x262275a4989c96cc6ecde77eb2dda6e13d508c4e"
  },
  {
    "symbol": "HOT",
    "name": "HoloToken",
    "tokenAddress": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd4777e164c6c683e10593e08760b803d58529a8e"
  },
  {
    "symbol": "FT",
    "name": "Fabric Token",
    "tokenAddress": "0x78a73b6cbc5d183ce56e786f6e905cadec63547b",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf5bb20e73c59e0f643ae4bcd89d761ebdec83b73"
  },
  {
    "symbol": "unknown",
    "name": "unknown",
    "tokenAddress": "0xc0a47dfe034b400b47bdad5fecda2621de6c4d95",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd00530cf4e0b6b5e8f4efa25fd57a85ced8d60c5"
  },
  {
    "symbol": "MGN",
    "name": "Magnolia Token",
    "tokenAddress": "0xb9625381f086e7b8512e4825f6af1117e9c84d43",
    "tokenDecimals": 18,
    "exchangeAddress": "0x8809c63af18ec760547426a5c3e122e0a3efbf27"
  },
  {
    "symbol": "AERGO",
    "name": "Aergo",
    "tokenAddress": "0xae31b85bfe62747d0836b82608b4830361a3d37a",
    "tokenDecimals": 18,
    "exchangeAddress": "0x27f99de8a71f09e9e567050192ce3005f0dcd0b3"
  },
  {
    "symbol": "SENT",
    "name": "SENTinel",
    "tokenAddress": "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037",
    "tokenDecimals": 8,
    "exchangeAddress": "0x0b5ce6f7cbe0627aa8ad2e7e69ed554c0fe79162"
  },
  {
    "symbol": "RDN",
    "name": "Raiden Token",
    "tokenAddress": "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7d03cecb36820b4666f45e1b4ca2538724db271c"
  },
  {
    "symbol": "BNT",
    "name": "Bancor Network Token",
    "tokenAddress": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    "tokenDecimals": 18,
    "exchangeAddress": "0x87d80dbd37e551f58680b4217b23af6a752da83f"
  },
  {
    "symbol": "GBPP",
    "name": "GBPP",
    "tokenAddress": "0xeac034b66aa7538a551a5fcec85e37592233c109",
    "tokenDecimals": 16,
    "exchangeAddress": "0xf6a0e98be0153e64b34693ba62c10009c697c95a"
  },
  {
    "symbol": "FTM",
    "name": "Fantom Token",
    "tokenAddress": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    "tokenDecimals": 18,
    "exchangeAddress": "0x060a0d4539623b6aa28d9fc39b9d6622ad495f41"
  },
  {
    "symbol": "QNT",
    "name": "Quant",
    "tokenAddress": "0x4a220e6096b25eadb88358cb44068a3248254675",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc7eb739e2651484daa1717433de1736a6529cfcc"
  },
  {
    "symbol": "OPEN",
    "name": "OPEN",
    "tokenAddress": "0x69c4bb240cf05d51eeab6985bab35527d04a8c64",
    "tokenDecimals": 8,
    "exchangeAddress": "0x9801d0e88222e9204025117bada94728885d1a28"
  },
  {
    "symbol": "IND",
    "name": "Indorse Token",
    "tokenAddress": "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
    "tokenDecimals": 18,
    "exchangeAddress": "0x57c6e18ee62fc660575db273ffaab02436aad222"
  },
  {
    "symbol": "THETA",
    "name": "Theta Token",
    "tokenAddress": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab"
  },
  {
    "symbol": "ST",
    "name": "Simple Token",
    "tokenAddress": "0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca",
    "tokenDecimals": 18,
    "exchangeAddress": "0x700520b1e2ccc5bf5fa89a5f7b8fd9beba3f04b0"
  },
  {
    "symbol": "ELEC",
    "name": "ElectrifyAsia",
    "tokenAddress": "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
    "tokenDecimals": 18,
    "exchangeAddress": "0x5d40522c20326f2ebcec2d371f250e352e3bed27"
  },
  {
    "symbol": "FGP",
    "name": "FingerPrint",
    "tokenAddress": "0xd9a8cfe21c232d485065cb62a96866799d4645f7",
    "tokenDecimals": 18,
    "exchangeAddress": "0xccd5c9f160379510670f9acd73779dce7e6226b2"
  },
  {
    "symbol": "HOPS",
    "name": "LORDLESS HOPS",
    "tokenAddress": "0x471daee6e481b2ab7d2f2f64b8f9b083daae29da",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe0cce4518ea70d98231c47e5b977ba90cfcec615"
  },
  {
    "symbol": "MFT",
    "name": "Mainframe Token",
    "tokenAddress": "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    "tokenDecimals": 18,
    "exchangeAddress": "0x09f448c70c99124024cd9e8dcae6c2f51c0896db"
  },
  {
    "symbol": "GEN",
    "name": "DAOstack",
    "tokenAddress": "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
    "tokenDecimals": 18,
    "exchangeAddress": "0x26cc0eab6cb650b0db4d0d0da8cb5bf69f4ad692"
  },
  {
    "symbol": "NAC",
    "name": "Nami ICO",
    "tokenAddress": "0x8d80de8a78198396329dfa769ad54d24bf90e7aa",
    "tokenDecimals": 18,
    "exchangeAddress": "0xaa9c9308bb6ef318bab918d1e4aebf284b02b680"
  },
  {
    "symbol": "BEN",
    "name": "Token of Szczepan Bentyn",
    "tokenAddress": "0x108c05cac356d93b351375434101cfd3e14f7e44",
    "tokenDecimals": 4,
    "exchangeAddress": "0x104f5ac4fdf92fd4668a08ac2e305b5bcf3de215"
  },
  {
    "symbol": "EET",
    "name": "Easily Echangeable Token",
    "tokenAddress": "0x7c0f856ddb93dfb957eac4513c6a5249c395cae5",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe4f984870929bb4189ab43def9fc2f339244765e"
  },
  {
    "symbol": "AEUR",
    "name": "Augmint Euro",
    "tokenAddress": "0xc994a2deb02543db1f48688438b9903c4b305ce3",
    "tokenDecimals": 2,
    "exchangeAddress": "0xd4a6ea5eabfd4048640724f62713ffb1e6292271"
  },
  {
    "symbol": "LALA",
    "name": "LALA",
    "tokenAddress": "0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6886f9dcbdad3cb8c6684f2fe78de5318c177068"
  },
  {
    "symbol": "MLN",
    "name": "Melon Token",
    "tokenAddress": "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa931f4eb165ac307fd7431b5ec6eadde53e14b0c"
  },
  {
    "symbol": "sXAU",
    "name": "Synth sXAU",
    "tokenAddress": "0xe05d803fa0c5832fa2262465290abb25d6c2bfa3",
    "tokenDecimals": 18,
    "exchangeAddress": "0xaf294be0577dc703bd7f5b96d34bc9cb110f1e2b"
  },
  {
    "symbol": "sJPY",
    "name": "Synth sJPY",
    "tokenAddress": "0xd9e5a009ec07de76616d7361ed713ef434d71325",
    "tokenDecimals": 18,
    "exchangeAddress": "0x39b0f27c771ad4236422af5ddc600711eefd93a3"
  },
  {
    "symbol": "ENJ",
    "name": "Enjin Coin",
    "tokenAddress": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb99a23b1a4585fc56d0ec3b76528c27cad427473"
  },
  {
    "symbol": "SAI",
    "name": "Sai",
    "tokenAddress": "0xf5b403abd806eff15b339909943e2c22ecbac54c",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa809ef80c0abf701bd1b3b15749aa0a4179ec034"
  },
  {
    "symbol": "GBP",
    "name": "MoneyFold Pound Sterling",
    "tokenAddress": "0xff4f56c14b8b59f7d766988a0e0c582e46b7f8ab",
    "tokenDecimals": 2,
    "exchangeAddress": "0x23c3041a18a528a57e26623259e5caa9fb160665"
  },
  {
    "symbol": "EUR",
    "name": "MoneyFold Euro",
    "tokenAddress": "0x8e3aeb75392ca824d55479cae07f7f0b765743dd",
    "tokenDecimals": 2,
    "exchangeAddress": "0x526353fbb4a37eddcebf63f96796a078d908f568"
  },
  {
    "symbol": "JSE",
    "name": "JSE Token",
    "tokenAddress": "0x2d184014b5658c453443aa87c8e9c4d57285620b",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa248a46b97204b6f4d5b05ba824fbea46390d978"
  },
  {
    "symbol": "NOTES",
    "name": "NOTES",
    "tokenAddress": "0x5e6364d4534f780ae053b93b45c8b8840e683eb7",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9b7036f677a6e4832e9983efa0ce384130248398"
  },
  {
    "symbol": "MTL",
    "name": "Metal",
    "tokenAddress": "0xf433089366899d83a9f26a773d59ec7ecf30355e",
    "tokenDecimals": 8,
    "exchangeAddress": "0xc5d192f702cc7ce84355df9d41af14bde5024cc9"
  },
  {
    "symbol": "WYV",
    "name": "Project Wyvern Token",
    "tokenAddress": "0x056017c55ae7ae32d12aef7c679df83a85ca75ff",
    "tokenDecimals": 18,
    "exchangeAddress": "0x77e885fbc67b7c6ea2b889c96bbd78f9e647463b"
  },
  {
    "symbol": "LDT",
    "name": "Law Diamond Token",
    "tokenAddress": "0x76a6baa20598b6d203d3eae6cc87e326bcb60e43",
    "tokenDecimals": 18,
    "exchangeAddress": "0xcbfda0aa2e471c02a39e6cec9b7f5cdfd91d83c6"
  },
  {
    "symbol": "BLT",
    "name": "Bloom Token",
    "tokenAddress": "0x107c4504cd79c5d2696ea0030a8dd4e92601b82e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x0e6a53b13688018a3df8c69f99afb19a3068d04f"
  },
  {
    "symbol": "SNX",
    "name": "Synthetix Network Token",
    "tokenAddress": "0x3772f9716cf6d7a09ede3587738aa2af5577483a",
    "tokenDecimals": 18,
    "exchangeAddress": "0x5d8888a212d033cff5f2e0ac24ad91a5495bad62"
  },
  {
    "symbol": "sUSD",
    "name": "Synth sUSD",
    "tokenAddress": "0x0cbe2df57ca9191b64a7af3baa3f946fa7df2f25",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa1ecdcca26150cf69090280ee2ee32347c238c7b"
  },
  {
    "symbol": "FND",
    "name": "FundRequest",
    "tokenAddress": "0x4df47b4969b2911c966506e3592c41389493953b",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe52d807ad934953315ccfe56f3b6425fcff04b2b"
  },
  {
    "symbol": "DALC",
    "name": "DALECOIN",
    "tokenAddress": "0x07d9e49ea402194bf48a8276dafb16e4ed633317",
    "tokenDecimals": 8,
    "exchangeAddress": "0x4591482d0c9d0af061a42009ff1b3cd070396f87"
  },
  {
    "symbol": "AURA",
    "name": "Aurora DAO",
    "tokenAddress": "0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814",
    "tokenDecimals": 18,
    "exchangeAddress": "0x8903842469f8790dad072b45bbce96cde9f3d7e6"
  },
  {
    "symbol": "LTO",
    "name": "LTO Network Token",
    "tokenAddress": "0x3db6ba6ab6f95efed1a6e794cad492faaabf294d",
    "tokenDecimals": 8,
    "exchangeAddress": "0x017d2735eb562d0ad9abc2a91801f4ca96f6bfa9"
  },
  {
    "symbol": "WOMG",
    "name": "Wrapped OMG",
    "tokenAddress": "0xc46d19c06defe3adab78712bbbae08ffaaf1402d",
    "tokenDecimals": 18,
    "exchangeAddress": "0x03f7f874d7e1b131f8c66f1f64b15b645667687f"
  },
  {
    "symbol": "WOMG",
    "name": "Wrapped OMG",
    "tokenAddress": "0x69657e421c993a65e31f571b4ce742fafb318bd4",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd2bf46ac7cbf595879aaff5967a92ae7e999c308"
  },
  {
    "symbol": "SMX",
    "name": "SaldoMX",
    "tokenAddress": "0x8a3cf860eca6d8e4579bfb052488e336e0fd9eae",
    "tokenDecimals": 2,
    "exchangeAddress": "0x52b9c94031dee81b2c36be736fa7f6b7ca7ad84e"
  },
  {
    "symbol": "EDR",
    "name": "Endor Protocol Token",
    "tokenAddress": "0xc528c28fec0a90c083328bc45f587ee215760a0f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x877104c369bb563f3a893fae861b4baf0cdd9d37"
  },
  {
    "symbol": "CVL",
    "name": "CVL",
    "tokenAddress": "0x01fa555c97d7958fa6f771f3bbd5ccd508f81e22",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd7d070728c947645af47f8cd0731a4100695a503"
  },
  {
    "symbol": "ICH",
    "name": "ICOStart Token",
    "tokenAddress": "0x330839ef82d34801bd96e75a4ee778ac56fa1ed8",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe749f1a9d5f9055f0b784b586818833b9679949c"
  },
  {
    "symbol": "USDT",
    "name": "Tether USD",
    "tokenAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "tokenDecimals": 6,
    "exchangeAddress": "0xc8313c965c47d1e0b5cdcd757b210356ad0e400c"
  },
  {
    "symbol": "STORJ",
    "name": "StorjToken",
    "tokenAddress": "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    "tokenDecimals": 8,
    "exchangeAddress": "0xa7298541e52f96d42382ecbe4f242cbcbc534d02"
  },
  {
    "symbol": "SP",
    "name": "SunPower",
    "tokenAddress": "0xd26b63194f70e0939393d23d3a5b1ed6bde5f835",
    "tokenDecimals": 18,
    "exchangeAddress": "0x5982aa08c4d3103a3534055b5fb2aac88d61675c"
  },
  {
    "symbol": "BIT",
    "name": "比特链",
    "tokenAddress": "0xf16843c8ab59ae17f9481ec756a1ded049192af4",
    "tokenDecimals": 18,
    "exchangeAddress": "0xbaf5a8bdf81cfe2d34c0ced89236fe473183f2e8"
  },
  {
    "symbol": "CH-ZG1235d",
    "name": "CH123456789013",
    "tokenAddress": "0xd2cc32cc34b0b975bf9b812061a1a040017972fc",
    "tokenDecimals": 18,
    "exchangeAddress": "0x80a393b2e1e4aa07862c24ad8ac14511c91bd562"
  },
  {
    "symbol": "18C",
    "name": "Block18",
    "tokenAddress": "0xb3ce281f0dee8c6f7af19b9664109c4030bec3fa",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9ad2f1272e775ebec936fef4cfa44bd5b1c7c3a6"
  },
  {
    "symbol": "ZJLT ",
    "name": "ZJLT  Distributed Factoring Network",
    "tokenAddress": "0xb2af8d4d286e2087590f085ee7e8ccb05d3c7f29",
    "tokenDecimals": 6,
    "exchangeAddress": "0x7a05354b796958e439b1780204a89f81094ea4b9"
  },
  {
    "symbol": "ETHOS",
    "name": "Ethos",
    "tokenAddress": "0x5af2be193a6abca9c8817001f45744777db30756",
    "tokenDecimals": 8,
    "exchangeAddress": "0xa55ba5d915a53e3c0514ff4e232eb50af12922ec"
  },
  {
    "symbol": "CELR",
    "name": "Celer Network",
    "tokenAddress": "0xf56fdae611b734005d71c03b7b8c966e45d1d768",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd62cc4154a8f865761c5b027ec33b4ab47cfa175"
  },
  {
    "symbol": "ART",
    "name": "Maecenas ART Token",
    "tokenAddress": "0xfec0cf7fe078a500abf15f1284958f22049c2c7e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x63a91a8b6f6289aa93f18539d245ec49c6169cd7"
  },
  {
    "symbol": "VIT",
    "name": "Vice",
    "tokenAddress": "0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c",
    "tokenDecimals": 18,
    "exchangeAddress": "0x3981932f5e17540d863868c5d7c4e617e1334acd"
  },
  {
    "symbol": "RIYA",
    "name": "Etheriya",
    "tokenAddress": "0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3",
    "tokenDecimals": 8,
    "exchangeAddress": "0xd284aedc33522c85949576eca69414020d15ccb6"
  },
  {
    "symbol": "X8X",
    "name": "X8XToken",
    "tokenAddress": "0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6dd1d97e5817ca376e653a1e7326e0563d13ceeb"
  },
  {
    "symbol": "TAAS",
    "name": "Token-as-a-Service",
    "tokenAddress": "0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c",
    "tokenDecimals": 6,
    "exchangeAddress": "0x4da5c31ab38a496a2513843dab8721e9aeb876bf"
  },
  {
    "symbol": "LESS",
    "name": "LORDLESS TOKEN",
    "tokenAddress": "0x7ca121b093e2fbd4bb9a894bd5ff487d16f1f83b",
    "tokenDecimals": 18,
    "exchangeAddress": "0x5386c0e6b417138f09236f86aca243e6f5b05dd3"
  },
  {
    "symbol": "SIT",
    "name": "SInitiatives",
    "tokenAddress": "0xe5e7d48abbb999880ea0f6533068dfd3944f0e7e",
    "tokenDecimals": 4,
    "exchangeAddress": "0x85c1ef96960884f802789400160b21d9c7043520"
  },
  {
    "symbol": "DFS",
    "name": "Digital Fantasy Sports",
    "tokenAddress": "0x45ed02e374aef2e4b34c04e86ad9d45891d10751",
    "tokenDecimals": 18,
    "exchangeAddress": "0x70a97ec45d87a37cec6103658527ffb3df7802c7"
  },
  {
    "symbol": "XES",
    "name": "Proxeus",
    "tokenAddress": "0xa017ac5fac5941f95010b12570b812c974469c2c",
    "tokenDecimals": 18,
    "exchangeAddress": "0x225026d626e45fa662e6a71f679eff0cac3054f1"
  },
  {
    "symbol": "MYST",
    "name": "Mysterium",
    "tokenAddress": "0xa645264c5603e96c3b0b078cdab68733794b0a71",
    "tokenDecimals": 8,
    "exchangeAddress": "0x6380ab7c66df788e30c5762f5884b9129d178b80"
  },
  {
    "symbol": "AUC",
    "name": "Auctus Token",
    "tokenAddress": "0xc12d099be31567add4e4e4d0d45691c3f58f5663",
    "tokenDecimals": 18,
    "exchangeAddress": "0x37134075f5b5a0a94ac891c7b5ec5db5cfcf392c"
  },
  {
    "symbol": "ABX",
    "name": "ASOBI COIN",
    "tokenAddress": "0x49ceb57714000f18f3749cf2d130e135f9c473a4",
    "tokenDecimals": 18,
    "exchangeAddress": "0xbe26014bbdbdd3d35f93c80591ffaf08513621ed"
  },
  {
    "symbol": "SIN",
    "name": "Casino La Crosse",
    "tokenAddress": "0xb448846ff602a6cb206ffafc45b93ad6fb7dd716",
    "tokenDecimals": 4,
    "exchangeAddress": "0xc491dfda6487480dd31b4d5e1bb77bcc9e2543c9"
  },
  {
    "symbol": "MET",
    "name": "Metronome",
    "tokenAddress": "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x006b6e89ee1531cfe5b6d32da0d80cc30506a339"
  },
  {
    "symbol": "NOW",
    "name": "ChangeNOW",
    "tokenAddress": "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
    "tokenDecimals": 8,
    "exchangeAddress": "0xbe33fdad6efd453594e8ece3c53fd0ae62b7cc74"
  },
  {
    "symbol": "SIN",
    "name": "CasinoLaCrosse",
    "tokenAddress": "0x26a6f4a6867a71be998b80eaabf67ff87d1e59d6",
    "tokenDecimals": 2,
    "exchangeAddress": "0x17edf686c2449ae8dbb52ac3cef105ca50baee53"
  },
  {
    "symbol": "AVO",
    "name": "Avocado",
    "tokenAddress": "0xfa6f7881e52fdf912c4a285d78a3141b089ce859",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe94c4dc3a75fad623391a68b4fbdd4b3c9b3eeb4"
  },
  {
    "symbol": "BDC",
    "name": "Belden Coin",
    "tokenAddress": "0xac4df2d98f14495263b9dfbc47451c46d8ab0a30",
    "tokenDecimals": 18,
    "exchangeAddress": "0xaf8937f0595c06e1e0cca741a8aedec088aafde0"
  },
  {
    "symbol": "MSP",
    "name": "Mothership Token",
    "tokenAddress": "0x68aa3f232da9bdc2343465545794ef3eea5209bd",
    "tokenDecimals": 18,
    "exchangeAddress": "0x700e7869fa8ffd3117200e248979fef2b78f4a1c"
  },
  {
    "symbol": "LEND",
    "name": "EthLend Token",
    "tokenAddress": "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
    "tokenDecimals": 18,
    "exchangeAddress": "0xcaa7e4656f6a2b59f5f99c745f91ab26d1210dce"
  },
  {
    "symbol": "KNS",
    "name": "Konsta token",
    "tokenAddress": "0x64fab8aff039ed05259d1c2af729b70c8002c661",
    "tokenDecimals": 18,
    "exchangeAddress": "0x19cb61fe00ea29fc77d79eaeaebc94023bf7c67b"
  },
  {
    "symbol": "MST",
    "name": "My Super Token",
    "tokenAddress": "0x35352a97214942f5c6054923b8dbd5e4ff0434df",
    "tokenDecimals": 18,
    "exchangeAddress": "0xca5ce4f07e8591b497eb2e22d2b0c19b69173e61"
  },
  {
    "symbol": "CCOIN",
    "name": "CREDITCOIN",
    "tokenAddress": "0x5e51f6841d2f188c42c7c33a6a5e77fb05cfbabe",
    "tokenDecimals": 2,
    "exchangeAddress": "0xba2d17a783533f401d2b5efaac4a5675f46ee36d"
  },
  {
    "symbol": "IAM",
    "name": "iAM",
    "tokenAddress": "0x6025fb154b7c30e13657d5304dafdb55b194e5dd",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9c1a7862f08d19e86714750161f56e7c10a9503e"
  },
  {
    "symbol": "ESTATE",
    "name": "AgentMile Estate Tokens",
    "tokenAddress": "0x6671c24dd5b8e4ced34033991418e4bc0cca05af",
    "tokenDecimals": 8,
    "exchangeAddress": "0x2a98460615481a456a1d763460167514dcd21f2c"
  },
  {
    "symbol": "HOUR",
    "name": "Democracy Earth",
    "tokenAddress": "0x00319f722bd546182cb2c701ca254146d3f084fc",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb7f7269098f36b034c4e2118a40c53482872b87a"
  },
  {
    "symbol": "WINGS",
    "name": "WINGS",
    "tokenAddress": "0x667088b212ce3d06a1b553a7221e1fd19000d9af",
    "tokenDecimals": 18,
    "exchangeAddress": "0x70876eadea28ac268564ad3a8b7313790b471436"
  },
  {
    "symbol": "FIT",
    "name": "Fitness Chain",
    "tokenAddress": "0xc98449ef8a017cfd29aed8b21b9b26492978a898",
    "tokenDecimals": 18,
    "exchangeAddress": "0x99b849a022d60be539d2a130b89ff0bbae097d83"
  },
  {
    "symbol": "DREAM",
    "name": "DreamTeam Token",
    "tokenAddress": "0x82f4ded9cec9b5750fbff5c2185aee35afc16587",
    "tokenDecimals": 6,
    "exchangeAddress": "0xbd04c3749506ce30eed93c06f93f18223c3ff5aa"
  },
  {
    "symbol": "POWR",
    "name": "PowerLedger",
    "tokenAddress": "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    "tokenDecimals": 6,
    "exchangeAddress": "0xabe1e210f2c97ae4bc7b17f8daa2e8db993337f5"
  },
  {
    "symbol": "SWADER",
    "name": "Bruno Skvorc Token",
    "tokenAddress": "0x89f10cead72d1ebf3e08a9378932c6f4f5a4c476",
    "tokenDecimals": 4,
    "exchangeAddress": "0x32ff139e48c05d636307f61e476bb395bd319b05"
  },
  {
    "symbol": "DRGN",
    "name": "Dragon",
    "tokenAddress": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9881ad0c92d5a908d97df7f86626903ada1bfd29"
  },
  {
    "symbol": "DGTX",
    "name": "DigitexFutures",
    "tokenAddress": "0x1c83501478f1320977047008496dacbd60bb15ef",
    "tokenDecimals": 18,
    "exchangeAddress": "0x24fbcbc276854bd14f0e6e02fb7b740baa52ca26"
  },
  {
    "symbol": "WIND",
    "name": "Oroshi",
    "tokenAddress": "0xc9c0ff6344b4bfdee7ace21c4deddd6e43ecb454",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe2833ad850513faa973747e4495db1d0b0e038a0"
  },
  {
    "symbol": "SML",
    "name": "数码链",
    "tokenAddress": "0x9138e38a0316e25459b376e987dd270b626709b8",
    "tokenDecimals": 18,
    "exchangeAddress": "0x041692af7f62906cee089b77fa0e59adb63f750c"
  },
  {
    "symbol": "OCEAN",
    "name": "The Ocean Token",
    "tokenAddress": "0xf5ed2dc77f0d1ea7f106ecbd1850e406adc41b51",
    "tokenDecimals": 18,
    "exchangeAddress": "0x071002d8f0e5e210e510c68504e435c4a425df8b"
  },
  {
    "symbol": "LAVA",
    "name": "Lava",
    "tokenAddress": "0xd89c37fd7c0fa3b107b7e4a8731dd3aaec488954",
    "tokenDecimals": 8,
    "exchangeAddress": "0x41e48af64f8ebf24194ce323b0760ee09bbb3ac4"
  },
  {
    "symbol": "JRT",
    "name": "Jarvis Reward Token",
    "tokenAddress": "0xeef338c585ee3cf674f717937f12e6f52accf5e1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc932eded711ceb421078bab6b44b558656bd7864"
  },
  {
    "symbol": "PRO",
    "name": "ProChain",
    "tokenAddress": "0x8377ee6d3545bc6ff1425ee3015dc648b149c7b2",
    "tokenDecimals": 2,
    "exchangeAddress": "0x238ff2e978a7fbb59ee2636caad269a440cbd43f"
  },
  {
    "symbol": "MINDS",
    "name": "Minds",
    "tokenAddress": "0xb26631c6dda06ad89b93c71400d25692de89c068",
    "tokenDecimals": 18,
    "exchangeAddress": "0x0ce13e66bef17801c9f19fb763be2dd2f391d7c2"
  },
  {
    "symbol": "CRKC",
    "name": "CREEKCOIN CRKC ERC20",
    "tokenAddress": "0x2515905dd027cc38f139feda8e7e6945c7f9d07a",
    "tokenDecimals": 18,
    "exchangeAddress": "0xfaddccf91009c6383bc7b75c7f19a2c8be2f75ef"
  },
  {
    "symbol": "RLC",
    "name": "iEx.ec Network Token",
    "tokenAddress": "0xf09209cc5eae846ee2cc4a493e7b962ca7bcfbbb",
    "tokenDecimals": 9,
    "exchangeAddress": "0x198da2b510e297605641f38b64e668675d778c6f"
  },
  {
    "symbol": "DOS",
    "name": "DOS Network Token",
    "tokenAddress": "0x70861e862e1ac0c96f853c8231826e469ead37b1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb5e96c3ad1ccc79e7ab13433471baf785bb4977e"
  },
  {
    "symbol": "CEP",
    "name": "Cepheus",
    "tokenAddress": "0x4cbdd06fcc050c7e0bd77478ed0fe4ea5eec651c",
    "tokenDecimals": 18,
    "exchangeAddress": "0xeb765bc156de3249b491d2db7aba3450fbcf9c5b"
  },
  {
    "symbol": "RCN",
    "name": "Readcoin",
    "tokenAddress": "0x189c05c3c191015c694032e1b09c190d5db3fb50",
    "tokenDecimals": 8,
    "exchangeAddress": "0x112558c05b1e7f28daa98e48c8d7e0ced2f496c8"
  },
  {
    "symbol": "MITH",
    "name": "Mithril Token",
    "tokenAddress": "0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6469a4e75f37d9f8f4b1cee6bb3c1a1fe933e2a7"
  },
  {
    "symbol": "DPP",
    "name": "DA Power Play Token",
    "tokenAddress": "0x01b3ec4aae1b8729529beb4965f27d008788b0eb",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7ea7134ed6c41d9e35dae7e7e1ff0fcc406224ca"
  },
  {
    "symbol": "BAL",
    "name": "Balance token",
    "tokenAddress": "0xe7049114562c759d5e9d1d25783773ccd61c0a65",
    "tokenDecimals": 0,
    "exchangeAddress": "0x2afbcc0bb7a78bd4d9a63c24c13042212b37f665"
  },
  {
    "symbol": "USStocks",
    "name": "Major US stock market tracking index, redeemable for DAI at expiration on 15 May, 2019",
    "tokenAddress": "0x36774fbca6b17325947cb208f77b4871ac7b6217",
    "tokenDecimals": 18,
    "exchangeAddress": "0xcdd6e09627d23368b770d9162807f181d061fb3e"
  },
  {
    "symbol": "DEV",
    "name": "Dev",
    "tokenAddress": "0x98626e2c9231f03504273d55f397409defd4a093",
    "tokenDecimals": 18,
    "exchangeAddress": "0x48b109a5981573d03e5becec76aa805b7640cd58"
  },
  {
    "symbol": "CET",
    "name": "CoinEx Token",
    "tokenAddress": "0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x28fe20afbf3450f13b803a639e19a8b0c005a5f3"
  },
  {
    "symbol": "DTOX",
    "name": "DeToxTheWorld",
    "tokenAddress": "0x39550dc5919a990a5786fcdc1d5b7c392d362dde",
    "tokenDecimals": 8,
    "exchangeAddress": "0x7cdff5f7e1886767ae561ea0c2f926db3c25706d"
  },
  {
    "symbol": "ETHBO",
    "name": "EthBo",
    "tokenAddress": "0xa120cb0530ea11451b002b7eafac91d8b5b8a499",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa0834bad199282494763f36e93c4900cc950360e"
  },
  {
    "symbol": "ARN",
    "name": "Aeron",
    "tokenAddress": "0xba5f11b16b155792cf3b2e6880e8706859a8aeb6",
    "tokenDecimals": 8,
    "exchangeAddress": "0x05d9c70cee7760ff3c7b50c3f7f9c0de24c0d840"
  },
  {
    "symbol": "TAU",
    "name": "Lamden Tau",
    "tokenAddress": "0xc27a2f05fa577a83ba0fdb4c38443c0718356501",
    "tokenDecimals": 18,
    "exchangeAddress": "0x72fea1b0bf11c86e461c38d9f73e78dd21000d64"
  },
  {
    "symbol": "NTK",
    "name": "NeuroToken",
    "tokenAddress": "0x69beab403438253f13b6e92db91f7fb849258263",
    "tokenDecimals": 18,
    "exchangeAddress": "0x46c106a6befddd066b202c9763ccc55c6f6c429b"
  },
  {
    "symbol": "PKTF",
    "name": "Private Katinrun Foundation",
    "tokenAddress": "0x7add89f3a7d2530d83b99593c67f56740ec11cc6",
    "tokenDecimals": 18,
    "exchangeAddress": "0x45ed432a5f3638100cfc7c213e88fc902ac74cd4"
  },
  {
    "symbol": "GST2",
    "name": "Gastoken.io",
    "tokenAddress": "0x0000000000b3f879cb30fe243b4dfee438691c04",
    "tokenDecimals": 2,
    "exchangeAddress": "0x929507cd3d90ab11ec4822e9eb5a48eb3a178f19"
  },
  {
    "symbol": "UNI-V1",
    "name": "Uniswap V1",
    "tokenAddress": "0x077d52b047735976dfda76fef74d4d988ac25196",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb71d0e91b4b0edaea879d74d20632edafe46ef37"
  },
  {
    "symbol": "BITCAR",
    "name": "BitCar",
    "tokenAddress": "0x08b4c866ae9d1be56a06e0c302054b4ffe067b43",
    "tokenDecimals": 8,
    "exchangeAddress": "0x480b971a86736448eb3ce00133008b348905ae5a"
  },
  {
    "symbol": "UNI-V1",
    "name": "Uniswap V1",
    "tokenAddress": "0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc202026dbfaa80dbb62d90cc645877fad70fd19d"
  },
  {
    "symbol": "WAX",
    "name": "Wax Token",
    "tokenAddress": "0x39bb259f66e1c59d5abef88375979b4d20d98022",
    "tokenDecimals": 8,
    "exchangeAddress": "0xb3d8e9b03a7c5a5f6bea1eadafa3c766316225d3"
  },
  {
    "symbol": "KCS",
    "name": "Kucoin Shares",
    "tokenAddress": "0x039b5649a59967e3e936d7471f9c3700100ee1ab",
    "tokenDecimals": 6,
    "exchangeAddress": "0xc0e77cdd039a3f731ae0f5c6c9f4a91d4bc28880"
  },
  {
    "symbol": "FTX",
    "name": "FintruX Network",
    "tokenAddress": "0xd559f20296ff4895da39b5bd9add54b442596a61",
    "tokenDecimals": 18,
    "exchangeAddress": "0x80f0f3e1482bab7fb6ed70185476f2fcdb596fa9"
  },
  {
    "symbol": "AST",
    "name": "AirSwap Token",
    "tokenAddress": "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    "tokenDecimals": 4,
    "exchangeAddress": "0xc462a2fd31c83f6ee220400d1506d9e9f1f4bb01"
  },
  {
    "symbol": "KKC",
    "name": "KOKOCoin",
    "tokenAddress": "0x1fdde7525783c36153a8a6b618e2b5210a23ce37",
    "tokenDecimals": 18,
    "exchangeAddress": "0x5388857f3607962064d0505201f3faf2d20fa4b9"
  },
  {
    "symbol": "MRPH",
    "name": "Morpheus.Network",
    "tokenAddress": "0x7b0c06043468469967dba22d1af33d77d44056c8",
    "tokenDecimals": 4,
    "exchangeAddress": "0x60298a63804d730bf0fbb79d4010193d5d9b8e5d"
  },
  {
    "symbol": "WETC",
    "name": "WETC",
    "tokenAddress": "0x86aabcc646f290b9fc9bd05ce17c3858d1511da1",
    "tokenDecimals": 18,
    "exchangeAddress": "0x0729d4d5e1956fe977662c8e149adfba561f86e5"
  },
  {
    "symbol": "KTR",
    "name": "KRISTREEDERTOKEN",
    "tokenAddress": "0x9a8c04e6166c553dc01dd8f36b78904833baeb57",
    "tokenDecimals": 18,
    "exchangeAddress": "0x269cac915ef69d9920a48fd2dc3df5dc5941a779"
  },
  {
    "symbol": "P3X",
    "name": "PoWH3D Extended",
    "tokenAddress": "0x058a144951e062fc14f310057d2fd9ef0cf5095b",
    "tokenDecimals": 18,
    "exchangeAddress": "0x315945cd5c5b601643179d2803ab844e19a35fa8"
  },
  {
    "symbol": "VLD",
    "name": "VALID",
    "tokenAddress": "0x922ac473a3cc241fd3a0049ed14536452d58d73c",
    "tokenDecimals": 18,
    "exchangeAddress": "0x83c50f91c7147d7de832d11b95404ba306b07a69"
  },
  {
    "symbol": "SOV",
    "name": "SoundMoneyCoin",
    "tokenAddress": "0x010589b7c33034b802f7dba2c88cc9cec0f46673",
    "tokenDecimals": 8,
    "exchangeAddress": "0x6ac136ef1856ab1f8c030b72d3b7f96580a975a3"
  },
  {
    "symbol": "TTF",
    "name": "TIMETOFLYTOKEN",
    "tokenAddress": "0x92dd20c7da4d004a1a6fc094dc7d0c7169899353",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9e6d609ca47d524abe086c0862a3b31859fc44f8"
  },
  {
    "symbol": "NMU",
    "name": "NOISEMUSICTOKEN",
    "tokenAddress": "0x4abefcd2996073093a06e5a3bd32acda6b3b2235",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb2ec66d6fcf579af9b8035ec2cf85df0be8bdf82"
  },
  {
    "symbol": "MANU",
    "name": "MANUCoin",
    "tokenAddress": "0xf7fda1bf4bd0b2b0dea343d1e8e08d8b869d08ef",
    "tokenDecimals": 9,
    "exchangeAddress": "0x2fee056acc850b614c9161c5e1fd482a93aa896b"
  },
  {
    "symbol": "LIKE",
    "name": "LikeCoin",
    "tokenAddress": "0x02f61fd266da6e8b102d4121f5ce7b992640cf98",
    "tokenDecimals": 18,
    "exchangeAddress": "0x40c2313279a97c9551ae3d06a274de8364d1f3e0"
  },
  {
    "symbol": "MTN",
    "name": "MedToken",
    "tokenAddress": "0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc3ee3be4f46cd5ca30406c37f074031cfe3ae181"
  },
  {
    "symbol": "IKC",
    "name": "www.internetkeys.net - Multiboard",
    "tokenAddress": "0xd64794250393f825e57e0ffccd3c75cad4564be3",
    "tokenDecimals": 8,
    "exchangeAddress": "0x82df4774a61034381da474dc0b7319b44b520b8d"
  },
  {
    "symbol": "RUBI",
    "name": "Rubin",
    "tokenAddress": "0xefde86ec7be1a27dc1ea2a027e5e7c997af5d066",
    "tokenDecimals": 8,
    "exchangeAddress": "0x2830b513f4ab3971e9a761803785277ba5ee4dab"
  },
  {
    "symbol": "NS7",
    "name": "Najah Safiya",
    "tokenAddress": "0xe1a0a311adb89920816b79029484ea9b7d1ef32c",
    "tokenDecimals": 8,
    "exchangeAddress": "0xf6c7ab80d38588a905cadf1db03d9333cb04d177"
  },
  {
    "symbol": "IHF",
    "name": "Invictus Hyperion",
    "tokenAddress": "0xaf1250fa68d7decd34fd75de8742bc03b29bd58e",
    "tokenDecimals": 18,
    "exchangeAddress": "0xaeb8fb9d0a3f21ab88fc12435cdc4aae13799eb6"
  },
  {
    "symbol": "CEL",
    "name": "Celsius",
    "tokenAddress": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
    "tokenDecimals": 4,
    "exchangeAddress": "0x91debb54de02872a259c17699d9b794bc949fed2"
  },
  {
    "symbol": "NYOT",
    "name": "NotYourOrdinaryToken",
    "tokenAddress": "0xea6ab13251aa6ae87475b418f529208eae317250",
    "tokenDecimals": 2,
    "exchangeAddress": "0x616c0ca2be15d68e00c5dca93e20c5b1f245300e"
  },
  {
    "symbol": "ERBYS",
    "name": "ErrbodysToken",
    "tokenAddress": "0x29c8682e6cabd9485413cf81057ffa8fd4c399a4",
    "tokenDecimals": 2,
    "exchangeAddress": "0x8fae74207942f3a78747740658ab63c90d8400ff"
  },
  {
    "symbol": "CAR",
    "name": "CarBlock.io",
    "tokenAddress": "0x4d9e23a3842fe7eb7682b9725cf6c507c424a41b",
    "tokenDecimals": 18,
    "exchangeAddress": "0xf01b1232af4f94519933dff65041227ff52f11f9"
  },
  {
    "symbol": "HOT",
    "name": "Hydro Protocol Token",
    "tokenAddress": "0x9af839687f6c94542ac5ece2e317daae355493a1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe123575bf28ab05a65de145061ba747887deeae3"
  },
  {
    "symbol": "T2T",
    "name": "traceto.io",
    "tokenAddress": "0xe6824483e279d967ea6f8472ace7585862fa1185",
    "tokenDecimals": 18,
    "exchangeAddress": "0x429f18e437ed3cf1c095de37c340616842c97d20"
  },
  {
    "symbol": "BTCETH7525",
    "name": "BitEth7525RebalancingSetToken",
    "tokenAddress": "0xa35fc5019c4dc509394bd4d74591a0bf8852c195",
    "tokenDecimals": 18,
    "exchangeAddress": "0xca257d6779b153f5b3f7cffd89e5b37529c70947"
  },
  {
    "symbol": "BTCETH2575",
    "name": "BitEth2575RebalancingSetToken",
    "tokenAddress": "0xa6c040045d962e4b8efa00954c7d23ccd0a2b8ad",
    "tokenDecimals": 18,
    "exchangeAddress": "0x1afc0bb4c1db404493fec6c2ceabd25f1eeb0a65"
  },
  {
    "symbol": "DIP",
    "name": "Decentralized Insurance Protocol",
    "tokenAddress": "0xc719d010b63e5bbf2c0551872cd5316ed26acd83",
    "tokenDecimals": 18,
    "exchangeAddress": "0x61792f290e5100fbbcbb2309f03a1bab869fb850"
  },
  {
    "symbol": "BBW",
    "name": "BBWCoin",
    "tokenAddress": "0x27b5b94a7269e175864d2c5e584d8f1414a2d94f",
    "tokenDecimals": 8,
    "exchangeAddress": "0x7141b573a6fb6c99c97c234c1b65e1c9696d29d1"
  },
  {
    "symbol": "ZMO",
    "name": "ZmeenaOrrCoin",
    "tokenAddress": "0xa538cc79644c7522ca3c1f150b4979e06cc71804",
    "tokenDecimals": 2,
    "exchangeAddress": "0x9129ad3fd905293ffcc22ff7a1ef0406ce7c0c27"
  },
  {
    "symbol": "STETHDai",
    "name": "STETHDaiRebalancingSetToken",
    "tokenAddress": "0x585c2cf94c41b528ec7329cbc3cde3c4f8d268db",
    "tokenDecimals": 18,
    "exchangeAddress": "0x10c4be5806878f78e6179af6d09d035bbdab2ec2"
  },
  {
    "symbol": "RC20",
    "name": "RoboCalls",
    "tokenAddress": "0x61b2d3ea9f1c6b387c985c73d40e8fbfb284e5c7",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9394c20adca4512dfc3d3c184c648e4193462ebb"
  },
  {
    "symbol": "SP",
    "name": "SunPower",
    "tokenAddress": "0x33ad8ccd192c2b1782b0d3e557e32a54771e16f1",
    "tokenDecimals": 18,
    "exchangeAddress": "0x102745b4a019d37bc342850b0c36125f1cb2858d"
  },
  {
    "symbol": "NVT",
    "name": "Nova Token",
    "tokenAddress": "0x09d8b66c48424324b25754a873e290cae5dca439",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2e4d90dc7fd3d9be8fdb6fdd4b98e2ddc2cfa607"
  },
  {
    "symbol": "WaBi",
    "name": "WaBi",
    "tokenAddress": "0x286bda1413a2df81731d4930ce2f862a35a609fe",
    "tokenDecimals": 18,
    "exchangeAddress": "0x65b809f942b3ec5695bbf74670c3a78657168320"
  },
  {
    "symbol": "CRYPTOLAND",
    "name": "CRYPTOLAND",
    "tokenAddress": "0xebdc8da065f78048b0b0f3c17c8b5f4348daf219",
    "tokenDecimals": 8,
    "exchangeAddress": "0x0a7ee2162c0ee6be4a1de9e7f73cff5432309ec0"
  },
  {
    "symbol": "WIB",
    "name": "WIBSON",
    "tokenAddress": "0x3f17dd476faf0a4855572f0b6ed5115d9bba22ad",
    "tokenDecimals": 9,
    "exchangeAddress": "0xad014d0dc396e4333778832d24e3a5e78b3593be"
  },
  {
    "symbol": "PEP",
    "name": "PEP Token",
    "tokenAddress": "0xbb0ef9e617faddf54b8d16e29046f72b4d3ec77f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x579134b2dc4a79746d365aa8097e8dc8b571fed1"
  },
  {
    "symbol": "4/26 106-C",
    "name": "Apr 26 106-CALL",
    "tokenAddress": "0xb134ec3fe107a190809ae612eec93f3847c1aa4d",
    "tokenDecimals": 18,
    "exchangeAddress": "0x0a8fb4a411a0fc781d65b19f3b261c858f82ffef"
  },
  {
    "symbol": "RMC",
    "name": "RemiCoin",
    "tokenAddress": "0x7dc4f41294697a7903c4027f6ac528c5d14cd7eb",
    "tokenDecimals": 8,
    "exchangeAddress": "0x779dcfc531d31cd4fd7f4276bf357130dce3cc9b"
  },
  {
    "symbol": "SNGLS",
    "name": "SingularDTV",
    "tokenAddress": "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
    "tokenDecimals": 0,
    "exchangeAddress": "0x61061e00a5acda7886ccce2a051539ef2fca1ce6"
  },
  {
    "symbol": "VIB",
    "name": "Vibe",
    "tokenAddress": "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
    "tokenDecimals": 18,
    "exchangeAddress": "0xcc763e9add17a9d77b5b1b0fb7cb6e51508e3008"
  },
  {
    "symbol": "MPH",
    "name": "CHASYR",
    "tokenAddress": "0x957a688d23a00f196b2da8e2531702c67de167cf",
    "tokenDecimals": 18,
    "exchangeAddress": "0xd4846bc16a6bf859c1253a6f37239ff06a99abe5"
  },
  {
    "symbol": "PTK:SV",
    "name": "PTK Swansons Vision",
    "tokenAddress": "0x7107f8d12caac33f1c326337378e72ae1eac460a",
    "tokenDecimals": 36,
    "exchangeAddress": "0xfce183635d8bd990348599aabbd0057184d5c490"
  },
  {
    "symbol": "BLZ",
    "name": "Bluzelle Token",
    "tokenAddress": "0x5732046a883704404f284ce41ffadd5b007fd668",
    "tokenDecimals": 18,
    "exchangeAddress": "0x0310396b59c4d90762398b8c5a24d646701c6f18"
  },
  {
    "symbol": "MFG",
    "name": "SyncFab Smart Manufacturing Blockchain",
    "tokenAddress": "0x6710c63432a2de02954fc0f851db07146a6c0312",
    "tokenDecimals": 18,
    "exchangeAddress": "0x27882bfeabcd4ba886854c03206d12c17be5f001"
  },
  {
    "symbol": "findtherabbit.me",
    "name": "https://findtherabbit.me",
    "tokenAddress": "0x713a1c4876673a982a828753166c452ba9721994",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6b92c982c33e94f25fec6c23dd46403b925a1ae3"
  },
  {
    "symbol": "CC",
    "name": "CartyCion",
    "tokenAddress": "0x3d779a7fb80723c6385524d113792d119acd2267",
    "tokenDecimals": 18,
    "exchangeAddress": "0x89df148b1c76d00b567f91ceeb7d0b3feb905011"
  },
  {
    "symbol": "HUNT",
    "name": "HuntToken",
    "tokenAddress": "0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb8cefb02e4f911c250b27690b72a61d58167d18c"
  },
  {
    "symbol": "MDL",
    "name": "Medilink Coin",
    "tokenAddress": "0x8c8d6016344425ddd1d63523411de5eb398cd141",
    "tokenDecimals": 18,
    "exchangeAddress": "0x505d1fada4967cbc2bf01da31089a1333528f4ab"
  },
  {
    "symbol": "NPXS",
    "name": "Pundi X Token",
    "tokenAddress": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
    "tokenDecimals": 18,
    "exchangeAddress": "0x93ff2c787c140c4ce21f01cc211fbdace274077f"
  },
  {
    "symbol": "IMC",
    "name": "IMCoin",
    "tokenAddress": "0x379e5f3eab1b05f3811519907b36b8e04fe3a897",
    "tokenDecimals": 18,
    "exchangeAddress": "0xa983458a7b5434a89f48198d144151846a8fcc01"
  },
  {
    "symbol": "SUB",
    "name": "Substratum",
    "tokenAddress": "0x8d75959f1e61ec2571aa72798237101f084de63a",
    "tokenDecimals": 18,
    "exchangeAddress": "0xc080b284028e37e3b26d85f2c53ad51904471d7a"
  },
  {
    "symbol": "EDG",
    "name": "Edgeless",
    "tokenAddress": "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c",
    "tokenDecimals": 0,
    "exchangeAddress": "0x4ac2ccebac7b96f1e66fbb7049c740a8ca8ef78d"
  },
  {
    "symbol": "GRG",
    "name": "Rigo Token",
    "tokenAddress": "0x4fbb350052bca5417566f188eb2ebce5b19bc964",
    "tokenDecimals": 18,
    "exchangeAddress": "0xee5e8d2357a29f4a85a938679233fe24fbc2cf1d"
  },
  {
    "symbol": "MX",
    "name": "Mythex",
    "tokenAddress": "0xf6c868c4f2a48949ff9b01e67acd206543352fcd",
    "tokenDecimals": 0,
    "exchangeAddress": "0xe3349fd5f3bf3b878ac5444c29c7308bf5992bbb"
  },
  {
    "symbol": "BTDE",
    "name": "Bethon Digital Ecosystem",
    "tokenAddress": "0xc9d6382e5abfed97cc856216ced900b64324e502",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb3d5641170b1b2e4344e62993adbbe54574102e4"
  },
  {
    "symbol": "COLR",
    "name": "Cryptovoxels Color",
    "tokenAddress": "0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88",
    "tokenDecimals": 0,
    "exchangeAddress": "0x3f0c63da66457dedc2677bef6bbdd457ba7a3c0b"
  },
  {
    "symbol": "MOD",
    "name": "Modum Token",
    "tokenAddress": "0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e",
    "tokenDecimals": 0,
    "exchangeAddress": "0xccb98654cd486216fff273dd025246588e77cfc1"
  },
  {
    "symbol": "PLN",
    "name": "MoneyFold Polish Zloty",
    "tokenAddress": "0x7880515ed114127bfe1e76462ba5e2725939129e",
    "tokenDecimals": 2,
    "exchangeAddress": "0x6a4096bf1cb457049502aaaa6303c9cb1469546d"
  },
  {
    "symbol": "IMMO",
    "name": "blockimmo",
    "tokenAddress": "0x9c3e7e016389661473ac64f4c37f5f7f2955e499",
    "tokenDecimals": 18,
    "exchangeAddress": "0x4218710e520e01e3158d9bdb579002e983be176c"
  },
  {
    "symbol": "DST",
    "name": "DragonSeriesToken",
    "tokenAddress": "0xc5807256e2e2fe85ca94c3617c4bc5ff2bd9cfb6",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2f75dc34c4cacd835041dd523b7d36d391b92aa0"
  },
  {
    "symbol": "NEU",
    "name": "Neumark",
    "tokenAddress": "0xa823e6722006afe99e91c30ff5295052fe6b8e32",
    "tokenDecimals": 18,
    "exchangeAddress": "0x34b0b7ba7cd9efa0582dcfbf5f6d4cfe344d8c47"
  },
  {
    "symbol": "HGT",
    "name": "HelloGold Token",
    "tokenAddress": "0xba2184520a1cc49a6159c57e61e1844e085615b6",
    "tokenDecimals": 8,
    "exchangeAddress": "0x658d3a5467e4b90a967530cf73718f453f35b2ac"
  },
  {
    "symbol": "YUN",
    "name": "Yun Planet",
    "tokenAddress": "0x02b3c88b805f1c6982e38ea1d40a1d83f159c3d4",
    "tokenDecimals": 8,
    "exchangeAddress": "0x7b46b7df165e31dcbed54eaf1975b0c780db47e7"
  },
  {
    "symbol": "STORM",
    "name": "Storm Token",
    "tokenAddress": "0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb0b12c05df3237eb6f0ce7312b68c37e140bf69b"
  },
  {
    "symbol": "KBC",
    "name": "KaratBank Coin",
    "tokenAddress": "0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a",
    "tokenDecimals": 7,
    "exchangeAddress": "0x2837ef3e8e0558ce0bfe465cfa4f8ba826683090"
  },
  {
    "symbol": "BTT",
    "name": "Bethon Token",
    "tokenAddress": "0x36cd54b05b82156e454d690af1d392a27af41c94",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9f023605f04a6bab127e0c40c4ddd17b5b5873a0"
  },
  {
    "symbol": "AOA",
    "name": "Aurora",
    "tokenAddress": "0x9ab165d795019b6d8b3e971dda91071421305e5a",
    "tokenDecimals": 18,
    "exchangeAddress": "0x4a5875fc146005f7c3143ab403b9aafa42f9b152"
  },
  {
    "symbol": "TRX",
    "name": "Tronix",
    "tokenAddress": "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
    "tokenDecimals": 6,
    "exchangeAddress": "0x8f0f1fa9257e30d2f6eac262221447d29d33ac8c"
  },
  {
    "symbol": "GOO",
    "name": "Vials of Goo",
    "tokenAddress": "0xdf0960778c6e6597f197ed9a25f12f5d971da86c",
    "tokenDecimals": 12,
    "exchangeAddress": "0xe52dceab9c8892eca29b0a0869257d7ad26268d2"
  },
  {
    "symbol": "TST",
    "name": "Touch Smart Token",
    "tokenAddress": "0xd9bae39c725a1864b1133ad0ef1640d02f79b78c",
    "tokenDecimals": 18,
    "exchangeAddress": "0x8ac50b8ad6a856a492741d16e40b812652056483"
  },
  {
    "symbol": "MATIC",
    "name": "Matic Token",
    "tokenAddress": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    "tokenDecimals": 18,
    "exchangeAddress": "0x9a7a75e66b325a3bd46973b2b57c9b8d9d26a621"
  },
  {
    "symbol": "BCDT",
    "name": "Blockchain Certified Data Token",
    "tokenAddress": "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7acbb9fb0aff7673951ba35963c8fdc370c6017c"
  },
  {
    "symbol": "AD",
    "name": "Asian Dragon",
    "tokenAddress": "0xf6dbe88ba55f1793ff0773c9b1275300f830914f",
    "tokenDecimals": 8,
    "exchangeAddress": "0xd6200e54cd6c064438c6ddb32e3af3ce4f0c5802"
  },
  {
    "symbol": "TTZ",
    "name": "TestTokenZ",
    "tokenAddress": "0xd21ba1c2c0e8fbd236553efa39137165b3a68e75",
    "tokenDecimals": 18,
    "exchangeAddress": "0x7f3dab432429bf4de09b8ec697fc6d817f483b42"
  },
  {
    "symbol": "MYB",
    "name": "MyBit",
    "tokenAddress": "0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc",
    "tokenDecimals": 18,
    "exchangeAddress": "0x1e0fbdaf60e1195a46e2af40a1c7b84460a13444"
  },
  {
    "symbol": "RST",
    "name": "REGA Risk Sharing Token",
    "tokenAddress": "0xa17d1bf14802e0eec8f84b3b8b638a9402d60e9e",
    "tokenDecimals": 10,
    "exchangeAddress": "0xd6ed8979455ebed92db3b7afdd1ab200054a88bc"
  },
  {
    "symbol": "TEST",
    "name": "Testing Token",
    "tokenAddress": "0xf1bbbfe96c5845dd4d5f60e7ce758bbc24f7f5ee",
    "tokenDecimals": 18,
    "exchangeAddress": "0x90be26ffa3f65d00858f4b2ad15b95e78d402f0f"
  },
  {
    "symbol": "unknown",
    "name": "unknown",
    "tokenAddress": "0x6000eca38b8b5bba64986182fe2a69c57f6b5414",
    "tokenDecimals": 18,
    "exchangeAddress": "0x238d01229d586d1e9b9667a5c9e4330d97889dfb"
  },
  {
    "symbol": "MER",
    "name": "Meritum",
    "tokenAddress": "0xf3981e5ff82caaa5d4cb4fba540b06c20c3d3dbe",
    "tokenDecimals": 18,
    "exchangeAddress": "0x2e9e106ef10613025a43c6afdcf68d6dd9f5d701"
  },
  {
    "symbol": "cETH",
    "name": "Compound Ether",
    "tokenAddress": "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
    "tokenDecimals": 8,
    "exchangeAddress": "0x3f3e2cf087b4a818a7c610eb8ef332d894736d7d"
  },
  {
    "symbol": "SOCKS",
    "name": "Unisocks Edition 0",
    "tokenAddress": "0x23b608675a2b2fb1890d3abbd85c5775c51691d5",
    "tokenDecimals": 18,
    "exchangeAddress": "0x22d8432cc7aa4f8712a655fc4cdfb1baec29fca9"
  },
  {
    "symbol": "VEN",
    "name": "VeChain Token",
    "tokenAddress": "0xd850942ef8811f2a866692a623011bde52a462c1",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb23c1553cf98f7abbc24c94141e5ce48148fa351"
  },
  {
    "symbol": "cDAI",
    "name": "Compound Dai",
    "tokenAddress": "0xf5dce57282a584d2746faf1593d3121fcac444dc",
    "tokenDecimals": 8,
    "exchangeAddress": "0x45a2fdfed7f7a2c791fb1bdf6075b83fad821dde"
  },
  {
    "symbol": "HUM",
    "name": "Humanity",
    "tokenAddress": "0xbbd1706d16418bb136e1497a73d3af4164586da0",
    "tokenDecimals": 18,
    "exchangeAddress": "0xe499657190d515119077af5d64f44b6f850baea5"
  },
  {
    "symbol": "SKAN",
    "name": "LakesCash",
    "tokenAddress": "0x9cb79101f795287585843d71c1b0a33a0724c2bb",
    "tokenDecimals": 2,
    "exchangeAddress": "0x9f1fbbdd2c784025e170c7e636c68ae0de0cc435"
  },
  {
    "symbol": "MCH",
    "name": "Meritum Cash",
    "tokenAddress": "0x10709ca9adcaa1728ad530be1ed39c0286124883",
    "tokenDecimals": 18,
    "exchangeAddress": "0xbb6e36aa6121246c056d04f16757933a1052e64c"
  },
  {
    "symbol": "SXUT",
    "name": "Spectre.ai U-Token",
    "tokenAddress": "0x2c82c73d5b34aa015989462b2948cd616a37641f",
    "tokenDecimals": 18,
    "exchangeAddress": "0x6a69ddbbf936fc343cbefb4e4edbf6dbc4002e04"
  },
  {
    "symbol": "ZXBT",
    "name": "ZerroXBToken Project 0xbt",
    "tokenAddress": "0xcd0a53685b594a543181e6203433766648a8cd43",
    "tokenDecimals": 3,
    "exchangeAddress": "0xce1ccd4668c88d5ea832a33048c41c3eded3b38a"
  },
  {
    "symbol": "DOYLE",
    "name": "DOYLE COIN",
    "tokenAddress": "0x9181eef2ea5624c187d1147134b847552302da2a",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb95eba7ff86e34d7eb8fb91618a6119059908bbb"
  },
  {
    "symbol": "BSH",
    "name": "Bullshit",
    "tokenAddress": "0x91bc206f0a1ffbc399b4a20a41324ed1dad2b718",
    "tokenDecimals": 0,
    "exchangeAddress": "0x8f628ae9acdd5566063a39c0980160d60ab33b41"
  },
  {
    "symbol": "MMTM",
    "name": "Momentum",
    "tokenAddress": "0x9f22a13204c09e0f89144b63da0588a836c07931",
    "tokenDecimals": 18,
    "exchangeAddress": "0xb472682be408335d93d1a9b56fd1f92a8ab55198"
  },
  {
    "symbol": "MVT",
    "name": "The Movement",
    "tokenAddress": "0x3d46454212c61ecb7b31248047fa033120b88668",
    "tokenDecimals": 18,
    "exchangeAddress": "0x89a294f122d1cc3696be37d00d113f45c262712a"
  },
  {
    "symbol": "POP",
    "name": "POP Network Token",
    "tokenAddress": "0x5d858bcd53e085920620549214a8b27ce2f04670",
    "tokenDecimals": 18,
    "exchangeAddress": "0xdd60feabc16bbc79ec558fd4b852fe1ed9f030e8"
  },
  {
    "symbol": "Candy",
    "name": "Unicorn Candy Coin",
    "tokenAddress": "0xcd3673af09e76c74d889aabab68ca0645566a3a1",
    "tokenDecimals": 18,
    "exchangeAddress": "0x450afa2c7d86cd4aa024a407e5b391627b013fc7"
  }
]