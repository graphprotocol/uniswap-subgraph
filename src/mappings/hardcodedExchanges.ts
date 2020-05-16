export class AsExchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export const hardcodedExchanges: Array<AsExchange> = [
  {
    symbol: 'MKR',
    name: 'Maker',
    tokenAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    tokenDecimals: 18,
    exchangeAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin v1.0',
    tokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    tokenDecimals: 18,
    exchangeAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14'
  },
  {
    symbol: 'GNO',
    name: 'Gnosis Token',
    tokenAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96',
    tokenDecimals: 18,
    exchangeAddress: '0xe8e45431b93215566ba923a7e611b7342ea954df'
  },
  {
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    tokenAddress: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    tokenDecimals: 18,
    exchangeAddress: '0x49c4f9bc14884f6210f28342ced592a633801a8b'
  },
  {
    symbol: 'LINK',
    name: 'ChainLink Token',
    tokenAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
    tokenDecimals: 18,
    exchangeAddress: '0xf173214c720f58e03e194085b1db28b50acdeead'
  },
  {
    symbol: 'MANA',
    name: 'Decentraland MANA',
    tokenAddress: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    tokenDecimals: 18,
    exchangeAddress: '0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2'
  },
  {
    symbol: 'LOOM',
    name: 'LoomToken',
    tokenAddress: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
    tokenDecimals: 18,
    exchangeAddress: '0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b'
  },
  {
    symbol: 'REP',
    name: 'Reputation',
    tokenAddress: '0x1985365e9f78359a9b6ad760e32412f4a445e862',
    tokenDecimals: 18,
    exchangeAddress: '0x48b04d2a05b6b604d8d5223fd1984f191ded51af'
  },
  {
    symbol: 'SNT',
    name: 'Status Network Token',
    tokenAddress: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    tokenDecimals: 18,
    exchangeAddress: '0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd'
  },
  {
    symbol: 'SPANK',
    name: 'SPANK',
    tokenAddress: '0x42d6622dece394b54999fbd73d108123806f6a18',
    tokenDecimals: 18,
    exchangeAddress: '0x4e395304655f0796bc3bc63709db72173b9ddf98'
  },
  {
    symbol: 'HAY',
    name: 'HayCoin',
    tokenAddress: '0xfa3e941d1f6b7b10ed84a0c211bfa8aee907965e',
    tokenDecimals: 18,
    exchangeAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682',
    tokenDecimals: 18,
    exchangeAddress: '0x7ad24a41ce760232ba2885a91f846ea86c9baa41'
  },
  {
    symbol: 'BORIS',
    name: 'BorisCoin',
    tokenAddress: '0x919d0131fa5f77d99fbbbbace50bcb6e62332bf2',
    tokenDecimals: 18,
    exchangeAddress: '0x4e0e28d426caf318747b8e05c8b0564a580e39a7'
  },
  {
    symbol: 'JCD',
    name: 'J Chan Dollar',
    tokenAddress: '0x0ed024d39d55e486573ee32e583bc37eb5a6271f',
    tokenDecimals: 18,
    exchangeAddress: '0x657184e418d43a661a91d567182dc3d1a4179ec4'
  },
  {
    symbol: 'GUSD',
    name: 'Gemini dollar',
    tokenAddress: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
    tokenDecimals: 2,
    exchangeAddress: '0xd883264737ed969d2696ee4b4caf529c2fc2a141'
  },
  {
    symbol: 'ADX',
    name: 'AdEx',
    tokenAddress: '0x4470bb87d77b963a013db939be332f927f2b992e',
    tokenDecimals: 4,
    exchangeAddress: '0xb800445dd982c1311523fd465ac44f55093b2b5b'
  },
  {
    symbol: 'NEXO',
    name: 'Nexo',
    tokenAddress: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    tokenDecimals: 18,
    exchangeAddress: '0x069c97dba948175d10af4b2414969e0b88d44669'
  },
  {
    symbol: 'SIM',
    name: 'Simoleon',
    tokenAddress: '0x86c8bf8532aa2601151c9dbbf4e4c4804e042571',
    tokenDecimals: 2,
    exchangeAddress: '0x174dfb6e6e78c95678580b553eee7f282b28c795'
  },
  {
    symbol: 'VERI',
    name: 'Veritaseum',
    tokenAddress: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374',
    tokenDecimals: 18,
    exchangeAddress: '0x17e5bf07d696eaf0d14caa4b44ff8a1e17b34de3'
  },
  {
    symbol: 'DNT',
    name: 'district0x Network Token',
    tokenAddress: '0x0abdace70d3790235af448c88547603b945604ea',
    tokenDecimals: 18,
    exchangeAddress: '0xaa3b3810c8aada6cbd2ce262699903ad7ae6a7ef'
  },
  {
    symbol: 'BTU',
    name: 'BTU Protocol',
    tokenAddress: '0xb683d83a532e2cb7dfa5275eed3698436371cc9f',
    tokenDecimals: 18,
    exchangeAddress: '0xea3a62838477082d8f2106c43796d636dc78d8a4'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x57ab1e02fee23774580c119740129eac7081e9d3',
    tokenDecimals: 18,
    exchangeAddress: '0x69f276abd6456152d519d23086031da7c73f91b8'
  },
  {
    symbol: 'FUN',
    name: 'FunFair',
    tokenAddress: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b',
    tokenDecimals: 8,
    exchangeAddress: '0x60a87cc7fca7e53867facb79da73181b1bb4238b'
  },
  {
    symbol: 'DTH',
    name: 'Dether',
    tokenAddress: '0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190',
    tokenDecimals: 18,
    exchangeAddress: '0xe18256cd23efcdc4f95581e86f61ea1b09afd02a'
  },
  {
    symbol: 'LIF',
    name: 'Lif',
    tokenAddress: '0xeb9951021698b42e4399f9cbb6267aa35f82d59d',
    tokenDecimals: 18,
    exchangeAddress: '0x055bab4bcc17d2ab155fff017fc5e093556c6ad2'
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    tokenAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    tokenDecimals: 18,
    exchangeAddress: '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914'
  },
  {
    symbol: 'TRAC',
    name: 'Trace Token',
    tokenAddress: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
    tokenDecimals: 18,
    exchangeAddress: '0x38577ccec0ceffd178fd3be66e1c6f531bfa410e'
  },
  {
    symbol: 'PNK',
    name: 'Pinakion',
    tokenAddress: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
    tokenDecimals: 18,
    exchangeAddress: '0xf506828b166de88ca2edb2a98d960abba0d2402a'
  },
  {
    symbol: 'BOOTY',
    name: 'BOOTY',
    tokenAddress: '0x6b01c3170ae1efebee1a3159172cb3f7a5ecf9e5',
    tokenDecimals: 18,
    exchangeAddress: '0xef465915f2d6d8183a7d5ee134a53f00c780d3e9'
  },
  {
    symbol: 'CVC',
    name: 'Civic',
    tokenAddress: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
    tokenDecimals: 8,
    exchangeAddress: '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a'
  },
  {
    symbol: 'SAN',
    name: 'SANtiment network token',
    tokenAddress: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098',
    tokenDecimals: 18,
    exchangeAddress: '0x8a8d7ad4b89d91983cd069c58c4aa9f2f4166298'
  },
  {
    symbol: 'LBA',
    name: 'LibraToken',
    tokenAddress: '0xfe5f141bf94fe84bc28ded0ab966c16b17490657',
    tokenDecimals: 18,
    exchangeAddress: '0xe79fe64771d5351b936eeac6222682c3d878063e'
  },
  {
    symbol: 'PRG',
    name: 'PRG',
    tokenAddress: '0x7728dfef5abd468669eb7f9b48a7f70a501ed29d',
    tokenDecimals: 6,
    exchangeAddress: '0x817e391baf312dc5078cd7a98a7a0255ac63ca48'
  },
  {
    symbol: 'AGI',
    name: 'SingularityNET Token',
    tokenAddress: '0x8eb24319393716668d768dcec29356ae9cffe285',
    tokenDecimals: 8,
    exchangeAddress: '0xdf02ffeafdb79e564ae9fdac6545c5f4c2178400'
  },
  {
    symbol: 'ZRX',
    name: '0x Protocol Token',
    tokenAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    tokenDecimals: 18,
    exchangeAddress: '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf'
  },
  {
    symbol: 'ENTRP',
    name: 'Hut34 Entropy Token',
    tokenAddress: '0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3',
    tokenDecimals: 18,
    exchangeAddress: '0xa1c467dc897a36689dbbadcc212b212b4f526e49'
  },
  {
    symbol: 'ICN',
    name: 'ICONOMI',
    tokenAddress: '0x888666ca69e0f178ded6d75b5726cee99a87d698',
    tokenDecimals: 18,
    exchangeAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169'
  },
  {
    symbol: 'PTOY',
    name: 'Patientory',
    tokenAddress: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06',
    tokenDecimals: 8,
    exchangeAddress: '0xe8bc0a210aaf86dab4dd600faca5cfe492e2e084'
  },
  {
    symbol: 'RHOC',
    name: 'RHOC',
    tokenAddress: '0x168296bb09e24a88805cb9c33356536b980d3fc5',
    tokenDecimals: 8,
    exchangeAddress: '0x394e524b47a3ab3d3327f7ff6629dc378c1494a3'
  },
  {
    symbol: 'CND',
    name: 'Cindicator Token',
    tokenAddress: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa',
    tokenDecimals: 18,
    exchangeAddress: '0x21b8a991a203a440c83450564fdefa3db10a5004'
  },
  {
    symbol: 'REN',
    name: 'Republic Token',
    tokenAddress: '0x408e41876cccdc0f92210600ef50372656052a38',
    tokenDecimals: 18,
    exchangeAddress: '0x43892992b0b102459e895b88601bb2c76736942c'
  },
  {
    symbol: 'GRID',
    name: 'GRID Token',
    tokenAddress: '0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd',
    tokenDecimals: 12,
    exchangeAddress: '0x4b17685b330307c751b47f33890c8398df4fe407'
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    tokenAddress: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
    tokenDecimals: 18,
    exchangeAddress: '0x255e60c9d597dcaa66006a904ed36424f7b26286'
  },
  {
    symbol: 'LAToken',
    name: 'LAToken',
    tokenAddress: '0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf',
    tokenDecimals: 18,
    exchangeAddress: '0x28991ac221054bee3a38ae9ad0fb3d0c3e45d0cf'
  },
  {
    symbol: 'MLN',
    name: 'Melon Token',
    tokenAddress: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1',
    tokenDecimals: 18,
    exchangeAddress: '0xaec97872d14ac79e95fff18c169bfd183efc6962'
  },
  {
    symbol: 'e11',
    name: 'Experimental Token',
    tokenAddress: '0x4805f9568bca23bef099c2a317346b42146384a1',
    tokenDecimals: 18,
    exchangeAddress: '0x4785cedbd89c818d60988dc5979b029f3900b54b'
  },
  {
    symbol: '0xBTC',
    name: '0xBitcoin Token',
    tokenAddress: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
    tokenDecimals: 8,
    exchangeAddress: '0x701564aa6e26816147d4fa211a0779f1b774bb9b'
  },
  {
    symbol: 'SALT',
    name: 'Salt',
    tokenAddress: '0x4156d3342d5c385a87d264f90653733592000581',
    tokenDecimals: 8,
    exchangeAddress: '0xc0c59cde851bfcbdddd3377ec10ea54a18efb937'
  },
  {
    symbol: 'KIWI',
    name: 'KIWI Token',
    tokenAddress: '0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d',
    tokenDecimals: 8,
    exchangeAddress: '0x380fdc8bb8722915076a09479d1bbc75e69c8be0'
  },
  {
    symbol: 'BPT',
    name: 'Blockport Token',
    tokenAddress: '0x327682779bab2bf4d1337e8974ab9de8275a7ca8',
    tokenDecimals: 18,
    exchangeAddress: '0xb2744df7bfbb4802f44fd1b1fd9012502d4af704'
  },
  {
    symbol: 'LPT',
    name: 'Livepeer Token',
    tokenAddress: '0x58b6a8a3302369daec383334672404ee733ab239',
    tokenDecimals: 18,
    exchangeAddress: '0xc4a1c45d5546029fd57128483ae65b56124bfa6a'
  },
  {
    symbol: 'BNTY',
    name: 'Bounty0x Token',
    tokenAddress: '0xd2d6158683aee4cc838067727209a0aaf4359de3',
    tokenDecimals: 18,
    exchangeAddress: '0xd1f3e9b413f5c9fd56f044699c64ff710e7e5a9a'
  },
  {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenDecimals: 18,
    exchangeAddress: '0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb'
  },
  {
    symbol: 'ASTRO',
    name: 'AstroTokens',
    tokenAddress: '0x7b22938ca841aa392c93dbb7f4c42178e3d65e88',
    tokenDecimals: 4,
    exchangeAddress: '0xbd4479c98dc21563ba822c3c206d8339698e2dd4'
  },
  {
    symbol: 'HBZ',
    name: 'Helbiz Token',
    tokenAddress: '0xe34e1944e776f39b9252790a0527ebda647ae668',
    tokenDecimals: 18,
    exchangeAddress: '0xd1a8c5ba35752e4b62c71c795a3f6481faa4d36e'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0xecf3958d0f82291ca1ff6c9bda8eb3c50ee41ce3',
    tokenDecimals: 18,
    exchangeAddress: '0x7d31fc38ddd7d6907f820f4268f1d8d5d5797826'
  },
  {
    symbol: 'ZIL',
    name: 'Zilliqa',
    tokenAddress: '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27',
    tokenDecimals: 12,
    exchangeAddress: '0x7dc095a5cf7d6208cc680fa9866f80a53911041a'
  },
  {
    symbol: 'USDC',
    name: 'USD//C',
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    tokenDecimals: 6,
    exchangeAddress: '0x97dec872013f6b5fb443861090ad931542878126'
  },
  {
    symbol: 'ENG',
    name: 'Enigma',
    tokenAddress: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
    tokenDecimals: 8,
    exchangeAddress: '0x884715e2dce8757c9ee19739c366b2c7c65f05b1'
  },
  {
    symbol: 'PITCH',
    name: 'PITCH',
    tokenAddress: '0x87f56ee356b434187105b40f96b230f5283c0ab4',
    tokenDecimals: 9,
    exchangeAddress: '0x329c9642efe33a62161dda6b4eb3821965191441'
  },
  {
    symbol: 'CNUS',
    name: 'CoinUs',
    tokenAddress: '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308',
    tokenDecimals: 18,
    exchangeAddress: '0x30b16fc2b530dbf991e1b15ed953cc4585f0b27c'
  },
  {
    symbol: 'MOR',
    name: 'MoriaToken',
    tokenAddress: '0xa6a7fce4affe059548fc39ebbc74555952a6fb0d',
    tokenDecimals: 18,
    exchangeAddress: '0xbe478403ac906d329fa8ebef1d3f9e0a48067d57'
  },
  {
    symbol: 'REQ',
    name: 'Request Token',
    tokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
    tokenDecimals: 18,
    exchangeAddress: '0xbcdf538581f7167ec8228ec2c9b1cfc2f74788c7'
  },
  {
    symbol: 'DGD',
    name: 'DigixDAO',
    tokenAddress: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
    tokenDecimals: 9,
    exchangeAddress: '0xd55c1ca9f5992a2e5e379dce49abf24294abe055'
  },
  {
    symbol: 'TKN',
    name: 'Monolith TKN',
    tokenAddress: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
    tokenDecimals: 8,
    exchangeAddress: '0xb6cfbf322db47d39331e306005dc7e5e6549942b'
  },
  {
    symbol: 'DGX',
    name: 'Digix Gold Token',
    tokenAddress: '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
    tokenDecimals: 9,
    exchangeAddress: '0xb92de8b30584392af27726d5ce04ef3c4e5c9924'
  },
  {
    symbol: 'TRST',
    name: 'Trustcoin',
    tokenAddress: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b',
    tokenDecimals: 6,
    exchangeAddress: '0x95e4649f5209dd292caf1f087b8f1db3be24927f'
  },
  {
    symbol: 'STX',
    name: 'Stox',
    tokenAddress: '0x006bea43baa3f7a6f765f14f10a1a1b08334ef45',
    tokenDecimals: 18,
    exchangeAddress: '0x2afc64cd5e64a32a363ea84b8cad1ce5239a1a3d'
  },
  {
    symbol: 'SWM',
    name: 'Swarm Fund Token',
    tokenAddress: '0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a',
    tokenDecimals: 18,
    exchangeAddress: '0xc3c028721f854bc75967cbe432fb0e221908baa1'
  },
  {
    symbol: 'GNT',
    name: 'Golem Network Token',
    tokenAddress: '0xa74476443119a942de498590fe1f2454d7d4ac0d',
    tokenDecimals: 18,
    exchangeAddress: '0x7d839eb463b121790c99e0f017c21f0189dcc167'
  },
  {
    symbol: 'MYU',
    name: 'MYUBI Token',
    tokenAddress: '0xf3be20da25b31bd6ee4ce4496985b2064304c125',
    tokenDecimals: 18,
    exchangeAddress: '0xb684f9b231accdef385f06038395e27a4e3aa86b'
  },
  {
    symbol: 'LQD',
    name: 'Liquidity.Network Token',
    tokenAddress: '0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4',
    tokenDecimals: 18,
    exchangeAddress: '0xe3406e7d0155e0a83236ec25d34cd3d903036669'
  },
  {
    symbol: 'ULT',
    name: 'Unblocked Ledger Token',
    tokenAddress: '0x09617f6fd6cf8a71278ec86e23bbab29c04353a7',
    tokenDecimals: 18,
    exchangeAddress: '0x28d9353611c5a0d5a026a648c05e5d6523e41cbf'
  },
  {
    symbol: 'LIRA',
    name: 'Lira Cash',
    tokenAddress: '0x49aaa160506f7e07e6c3f6cd6316b6866025cdcb',
    tokenDecimals: 8,
    exchangeAddress: '0xb580a2b495917b8577d9a612be068f591e8c20f9'
  },
  {
    symbol: 'FOAM',
    name: 'FOAM Token',
    tokenAddress: '0x4946fcea7c692606e8908002e55a582af44ac121',
    tokenDecimals: 18,
    exchangeAddress: '0xf79cb3bea83bd502737586a6e8b133c378fd1ff2'
  },
  {
    symbol: 'XCHF',
    name: 'CryptoFranc',
    tokenAddress: '0xb4272071ecadd69d933adcd19ca99fe80664fc08',
    tokenDecimals: 18,
    exchangeAddress: '0x8de0d002dc83478f479dc31f76cb0a8aa7ccea17'
  },
  {
    symbol: 'BLUE',
    name: 'Ethereum Blue',
    tokenAddress: '0x539efe69bcdd21a83efd9122571a64cc25e0282b',
    tokenDecimals: 8,
    exchangeAddress: '0x7eb81c7a0b322d31c11064105e14dce6e852e8c1'
  },
  {
    symbol: 'SWT',
    name: 'Swarm City Token',
    tokenAddress: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607',
    tokenDecimals: 18,
    exchangeAddress: '0x755160062e3e09d34af0a00ff8cab8500e81e0d7'
  },
  {
    symbol: 'RCN',
    name: 'Ripio Credit Network Token',
    tokenAddress: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6',
    tokenDecimals: 18,
    exchangeAddress: '0xd91ff16ef92568fc27f466c3c5613e43313ab1dc'
  },
  {
    symbol: 'POA20',
    name: 'POA ERC20 on Foundation',
    tokenAddress: '0x6758b7d441a9739b98552b373703d8d3d14f9e62',
    tokenDecimals: 18,
    exchangeAddress: '0xa2e6b3ef205feaee475937c4883b24e6eb717eef'
  },
  {
    symbol: 'QCH',
    name: 'QChi',
    tokenAddress: '0x687bfc3e73f6af55f0ccca8450114d107e781a0e',
    tokenDecimals: 18,
    exchangeAddress: '0x755899f0540c3548b99e68c59adb0f15d2695188'
  },
  {
    symbol: 'SCHAP',
    name: 'AshleighCoin',
    tokenAddress: '0xe503a034a8c288dfa9583c43691a7b8233e27013',
    tokenDecimals: 18,
    exchangeAddress: '0xd202ee9690e3240aff1631d98c99717a2265fa64'
  },
  {
    symbol: 'FAC',
    name: 'Financial Aid Coin',
    tokenAddress: '0x4b4a70cae3f7c84e36ce9aa19abc98f85db7f058',
    tokenDecimals: 7,
    exchangeAddress: '0x32a29c4269dee1a9e87eb75d66da71591a7aee96'
  },
  {
    symbol: 'SCHAP',
    name: 'AshleighCoin',
    tokenAddress: '0x3638c9e50437f00ae53a649697f288ba68888cc1',
    tokenDecimals: 18,
    exchangeAddress: '0xa0513d82f17c491dc6ab34efd89dc372bb180378'
  },
  {
    symbol: 'C20',
    name: 'Crypto20',
    tokenAddress: '0x26e75307fc0c021472feb8f727839531f112f317',
    tokenDecimals: 18,
    exchangeAddress: '0xf7b5a4b934658025390ff69db302bc7f2ac4a542'
  },
  {
    symbol: 'POW',
    name: 'Proof of work',
    tokenAddress: '0x9709907cb2cf9e16df841f7b145b78c230d8205e',
    tokenDecimals: 18,
    exchangeAddress: '0x6fca96a679490ed8a80c7344799f1b090fd4c94d'
  },
  {
    symbol: 'AMIS',
    name: 'AMIS',
    tokenAddress: '0x949bed886c739f1a3273629b3320db0c5024c719',
    tokenDecimals: 9,
    exchangeAddress: '0x164c93580839f40609ce0250dd4c98a25da175de'
  },
  {
    symbol: 'TheDAO',
    name: 'TheDAO',
    tokenAddress: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
    tokenDecimals: 16,
    exchangeAddress: '0xc7c60e9419466939e968db2a88fe64ec41908bb4'
  },
  {
    symbol: 'KIN',
    name: 'Kin',
    tokenAddress: '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5',
    tokenDecimals: 18,
    exchangeAddress: '0xb7520a5f8c832c573d6bd0df955fc5c9b72400f7'
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    tokenAddress: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e',
    tokenDecimals: 18,
    exchangeAddress: '0x4f30e682d0541eac91748bd38a648d759261b8f3'
  },
  {
    symbol: 'ZCN',
    name: '0chain',
    tokenAddress: '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78',
    tokenDecimals: 10,
    exchangeAddress: '0x1c116d67e0bf0cf5cb0ad5a74a041d26e89271e7'
  },
  {
    symbol: 'MCO',
    name: 'Monaco',
    tokenAddress: '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d',
    tokenDecimals: 8,
    exchangeAddress: '0xedc485266aa0ebe9ccbfc1f255bb5ffea1f9e3cc'
  },
  {
    symbol: 'CRO',
    name: 'CRO',
    tokenAddress: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
    tokenDecimals: 8,
    exchangeAddress: '0x2135d193bf81abbead93906166f2be32b2492c04'
  },
  {
    symbol: 'GCB',
    name: 'GuangChangBi',
    tokenAddress: '0x74436ae1db59c62bbb3de88d268f7e058dce6d50',
    tokenDecimals: 18,
    exchangeAddress: '0x62ccb0577aa63b8d72449b9fd13b3cdbcf3787d6'
  },
  {
    symbol: 'CMCT',
    name: 'Crowd Machine Compute Token',
    tokenAddress: '0x47bc01597798dcd7506dcca36ac4302fc93a8cfb',
    tokenDecimals: 8,
    exchangeAddress: '0x53e31a941b76ef1b486e86aa39bcd5ae56829870'
  },
  {
    symbol: 'CNN',
    name: 'CNN Token',
    tokenAddress: '0x8713d26637cf49e1b6b4a7ce57106aabc9325343',
    tokenDecimals: 18,
    exchangeAddress: '0xe31a245102fc1ae72f80c6969f6475e85c897bbe'
  },
  {
    symbol: 'ANT',
    name: 'Aragon Network Token',
    tokenAddress: '0x960b236a07cf122663c4303350609a66a7b288c0',
    tokenDecimals: 18,
    exchangeAddress: '0x077d52b047735976dfda76fef74d4d988ac25196'
  },
  {
    symbol: 'ITT',
    name: 'Intelligent Trading Technologies',
    tokenAddress: '0x0aef06dcccc531e581f0440059e6ffcc206039ee',
    tokenDecimals: 8,
    exchangeAddress: '0x20149f1672175c7118bdbf966bfb6a02bf733810'
  },
  {
    symbol: 'DENT',
    name: 'DENT',
    tokenAddress: '0x3597bfd533a99c9aa083587b074434e61eb0a258',
    tokenDecimals: 8,
    exchangeAddress: '0x9709ef0958b831865a97682d9ec08f897fe3b56f'
  },
  {
    symbol: 'MEDIBIT',
    name: 'MEDIBIT',
    tokenAddress: '0x737fa0372c8d001904ae6acaf0552d4015f9c947',
    tokenDecimals: 18,
    exchangeAddress: '0x68326300df49ec6387e75690857424c2ae111750'
  },
  {
    symbol: 'AWC',
    name: 'Atomic Wallet Token',
    tokenAddress: '0xad22f63404f7305e4713ccbd4f296f34770513f4',
    tokenDecimals: 8,
    exchangeAddress: '0x8aa3cc2bf30cb47f290fd4e9b660bc3a685b9b3e'
  },
  {
    symbol: 'IDT',
    name: 'InvestDigital Token',
    tokenAddress: '0x02c4c78c462e32cca4a90bc499bf411fb7bc6afb',
    tokenDecimals: 18,
    exchangeAddress: '0x3fbc2275de71427aaebbe0e5e6bc13fe8f27fa9e'
  },
  {
    symbol: 'HPT',
    name: 'HuobiPoolToken',
    tokenAddress: '0xa66daa57432024023db65477ba87d4e7f5f95213',
    tokenDecimals: 18,
    exchangeAddress: '0xfe3f05c7da9fe53591fab3f920798a67a95747ed'
  },
  {
    symbol: 'ERC20',
    name: 'ERC20',
    tokenAddress: '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
    tokenDecimals: 18,
    exchangeAddress: '0xf50bac10faf905e95ffdc9f35b75ee67117dad2a'
  },
  {
    symbol: 'EDU',
    name: 'EduCoinToken',
    tokenAddress: '0xa0872ee815b8dd0f6937386fd77134720d953581',
    tokenDecimals: 18,
    exchangeAddress: '0x0045d5d2cac7688f7fc36313e69fb5350958936c'
  },
  {
    symbol: 'CRPHT',
    name: 'Crypthealth',
    tokenAddress: '0xcd7d0042fdb92f3dde312aa61af084953aa914ee',
    tokenDecimals: 18,
    exchangeAddress: '0xe1e005d82922303ca9fb5cb6426c2eb07f8e5c84'
  },
  {
    symbol: 'ROL',
    name: 'DICE',
    tokenAddress: '0x2e071d2966aa7d8decb1005885ba1977d6038a65',
    tokenDecimals: 16,
    exchangeAddress: '0xb7836492f5850d9b61d6b71c73697c5b9676208d'
  },
  {
    symbol: 'PAY',
    name: 'TenX Pay Token',
    tokenAddress: '0xb97048628db6b661d4c2aa833e95dbe1a905b280',
    tokenDecimals: 18,
    exchangeAddress: '0x6f1c46e91ce29d430e31205ead148b0bee46b9fc'
  },
  {
    symbol: 'PAI',
    name: 'PCHAIN',
    tokenAddress: '0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3',
    tokenDecimals: 18,
    exchangeAddress: '0x7174ef6b9cb528e954508264a9912da905977422'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xc011a72400e58ecd99ee497cf89e3775d4bd732f',
    tokenDecimals: 18,
    exchangeAddress: '0x23228ec35e810569495bd0aa4d56e9fad759bb29'
  },
  {
    symbol: 'LOT',
    name: 'lothlor',
    tokenAddress: '0xdcef0710b10ad66bc2194b412fb37c65d4d0a965',
    tokenDecimals: 18,
    exchangeAddress: '0xe69ea0f00b6d399a11030eb6d79e54c486c0e1d1'
  },
  {
    symbol: 'OMG',
    name: 'OMGToken',
    tokenAddress: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
    tokenDecimals: 18,
    exchangeAddress: '0xddee242662323a3cff3f9aa139ffa496ac3c73b0'
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    tokenDecimals: 8,
    exchangeAddress: '0x4d2f5cfba55ae412221182d8475bc85799a5644b'
  },
  {
    symbol: 'DKC',
    name: 'ICO GAZUA TOKEN',
    tokenAddress: '0xb5ce43922eb8e73bd2b1fcec33c2dba43cce7e4c',
    tokenDecimals: 18,
    exchangeAddress: '0x5634de511580536296c6ea2eb8ebec271ca76bc2'
  },
  {
    symbol: 'DKC',
    name: 'ICO GAZUA TOKEN',
    tokenAddress: '0x7365877678c744b435ed03b1cac12ab407cba13a',
    tokenDecimals: 18,
    exchangeAddress: '0xc3b03664126f2f192ec658e1c62798c9ebd0ff08'
  },
  {
    symbol: 'PMA',
    name: 'PumaPay',
    tokenAddress: '0x846c66cf71c43f80403b51fe3906b3599d63336f',
    tokenDecimals: 18,
    exchangeAddress: '0xcc36e05eeffac3eb61b696d0bb328f2b08389fb5'
  },
  {
    symbol: 'EDU',
    name: 'EduCoin',
    tokenAddress: '0xf263292e14d9d8ecd55b58dad1f1df825a874b7c',
    tokenDecimals: 18,
    exchangeAddress: '0xab2da28aa5803c8da0f6603e91e16dab3ba542d2'
  },
  {
    symbol: 'HERC',
    name: 'Hercules',
    tokenAddress: '0x6251583e7d997df3604bc73b9779196e94a090ce',
    tokenDecimals: 18,
    exchangeAddress: '0x059ad96e38f027ccd127567dc09b164762bcd695'
  },
  {
    symbol: 'PATH',
    name: 'Path Network Token',
    tokenAddress: '0x7b94a1281db0335c9efd68aca5c98b494d775c70',
    tokenDecimals: 18,
    exchangeAddress: '0x95efaafe52e89992bfd4f33c96ad971fccdc31f6'
  },
  {
    symbol: 'DATA',
    name: 'Streamr DATAcoin',
    tokenAddress: '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
    tokenDecimals: 18,
    exchangeAddress: '0x4f0d6e2179938828cff93da40a8ba1df7519ca8c'
  },
  {
    symbol: 'RPL',
    name: 'Rocket Pool',
    tokenAddress: '0xb4efd85c19999d84251304bda99e90b92300bd93',
    tokenDecimals: 18,
    exchangeAddress: '0x3fb2f18065926ddb33e7571475c509541d15da0e'
  },
  {
    symbol: 'UFR',
    name: 'Upfiring',
    tokenAddress: '0xea097a2b1db00627b2fa17460ad260c016016977',
    tokenDecimals: 18,
    exchangeAddress: '0x2263fd7c62914ab8ec2b5e7b00bc8371a6c0d221'
  },
  {
    symbol: 'RLC',
    name: 'iEx.ec Network Token',
    tokenAddress: '0x607f4c5bb672230e8672085532f7e901544a7375',
    tokenDecimals: 9,
    exchangeAddress: '0xa825cae02b310e9901b4776806ce25db520c8642'
  },
  {
    symbol: 'PAX',
    name: 'PAX',
    tokenAddress: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
    tokenDecimals: 18,
    exchangeAddress: '0xc040d51b07aea5d94a89bc21e8078b77366fc6c7'
  },
  {
    symbol: 'CNX',
    name: 'Cryptonex (CNX) - Global Blockchain Acquiring',
    tokenAddress: '0x94d6b4fb35fb08cb34aa716ab40049ec88002079',
    tokenDecimals: 8,
    exchangeAddress: '0xbb7cf8a9d6b2aa7d98fb0bf3548a589a68ddb774'
  },
  {
    symbol: 'CAN',
    name: 'CanYaCoin',
    tokenAddress: '0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0',
    tokenDecimals: 6,
    exchangeAddress: '0x066198694b1db74d67007d19a7c4f2fc3a061075'
  },
  {
    symbol: 'MAS',
    name: 'MidasProtocol',
    tokenAddress: '0x23ccc43365d9dd3882eab88f43d515208f832430',
    tokenDecimals: 18,
    exchangeAddress: '0xe2f548a3b898eca923bd61919f2635b071a7f95e'
  },
  {
    symbol: 'DONUT',
    name: 'Donut',
    tokenAddress: '0x23d80c4ee8fb55d4183dd9329296e176dc7464e1',
    tokenDecimals: 18,
    exchangeAddress: '0xed9d5aa6124a3310b80a2468c67763627653887d'
  },
  {
    symbol: 'KRH',
    name: 'KryptoHub',
    tokenAddress: '0x4dadf81edf74e9b1a9ad1f364d51a176be48f0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x08850bd3ce3a8f6b64d724c3dabdbf6f4f8561fc'
  },
  {
    symbol: 'BEE',
    name: 'Bee Token',
    tokenAddress: '0x42237af8b1b3b2063d8377c5de8a4549e7b09ac5',
    tokenDecimals: 18,
    exchangeAddress: '0x356435d47e8f36d5102719704747afb9ddd36747'
  },
  {
    symbol: 'BEE',
    name: 'Bee Token',
    tokenAddress: '0x4d8fc1453a0f359e99c9675954e656d80d996fbf',
    tokenDecimals: 18,
    exchangeAddress: '0xe9078a97eef2bb502a9f792169f9c03626649248'
  },
  {
    symbol: 'ZCI',
    name: '0xchan ICO',
    tokenAddress: '0x236149288602c07b84387d0d75784d73f133142b',
    tokenDecimals: 18,
    exchangeAddress: '0xcfcc608f03c0cee86589e11224f24779212f0fe5'
  },
  {
    symbol: 'BOOTY',
    name: 'BOOTY',
    tokenAddress: '0x824c0659f6940604506aa8fa829d13fde17fb900',
    tokenDecimals: 18,
    exchangeAddress: '0x5a67d8ea5c9bf381fe0da2862cec1ec90a5ca329'
  },
  {
    symbol: 'WPR',
    name: 'WePower Token',
    tokenAddress: '0x4cf488387f035ff08c371515562cba712f9015d4',
    tokenDecimals: 18,
    exchangeAddress: '0x72208a7d8c11cb28c8e6d32e1a070015786c0823'
  },
  {
    symbol: 'EMONT',
    name: 'EtheremonToken',
    tokenAddress: '0x95daaab98046846bf4b2853e23cba236fa394a31',
    tokenDecimals: 8,
    exchangeAddress: '0x2995b7f65cbc1b0ae8095eae314246508c49182a'
  },
  {
    symbol: 'PLAY',
    name: 'Herocoin',
    tokenAddress: '0xe477292f1b3268687a29376116b0ed27a9c76170',
    tokenDecimals: 18,
    exchangeAddress: '0xf43b2329130cfd87b322e49b96681e09f1ef172f'
  },
  {
    symbol: 'BOI',
    name: 'BOI Token',
    tokenAddress: '0x439ce375e3ee4dc203d71958beca3c0f417d65cb',
    tokenDecimals: 18,
    exchangeAddress: '0x262275a4989c96cc6ecde77eb2dda6e13d508c4e'
  },
  {
    symbol: 'HOT',
    name: 'HoloToken',
    tokenAddress: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    tokenDecimals: 18,
    exchangeAddress: '0xd4777e164c6c683e10593e08760b803d58529a8e'
  },
  {
    symbol: 'FT',
    name: 'Fabric Token',
    tokenAddress: '0x78a73b6cbc5d183ce56e786f6e905cadec63547b',
    tokenDecimals: 18,
    exchangeAddress: '0xf5bb20e73c59e0f643ae4bcd89d761ebdec83b73'
  },
  {
    symbol: 'MGN',
    name: 'Magnolia Token',
    tokenAddress: '0xb9625381f086e7b8512e4825f6af1117e9c84d43',
    tokenDecimals: 18,
    exchangeAddress: '0x8809c63af18ec760547426a5c3e122e0a3efbf27'
  },
  {
    symbol: 'AERGO',
    name: 'Aergo',
    tokenAddress: '0xae31b85bfe62747d0836b82608b4830361a3d37a',
    tokenDecimals: 18,
    exchangeAddress: '0x27f99de8a71f09e9e567050192ce3005f0dcd0b3'
  },
  {
    symbol: 'SENT',
    name: 'SENTinel',
    tokenAddress: '0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037',
    tokenDecimals: 8,
    exchangeAddress: '0x0b5ce6f7cbe0627aa8ad2e7e69ed554c0fe79162'
  },
  {
    symbol: 'RDN',
    name: 'Raiden Token',
    tokenAddress: '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',
    tokenDecimals: 18,
    exchangeAddress: '0x7d03cecb36820b4666f45e1b4ca2538724db271c'
  },
  {
    symbol: 'NMR',
    name: 'Numeraire',
    tokenAddress: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
    tokenDecimals: 18,
    exchangeAddress: '0x2bf5a5ba29e60682fc56b2fcf9ce07bef4f6196f'
  },
  {
    symbol: 'GBPP',
    name: 'GBPP',
    tokenAddress: '0xeac034b66aa7538a551a5fcec85e37592233c109',
    tokenDecimals: 16,
    exchangeAddress: '0xf6a0e98be0153e64b34693ba62c10009c697c95a'
  },
  {
    symbol: 'FTM',
    name: 'Fantom Token',
    tokenAddress: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
    tokenDecimals: 18,
    exchangeAddress: '0x060a0d4539623b6aa28d9fc39b9d6622ad495f41'
  },
  {
    symbol: 'QNT',
    name: 'Quant',
    tokenAddress: '0x4a220e6096b25eadb88358cb44068a3248254675',
    tokenDecimals: 18,
    exchangeAddress: '0xc7eb739e2651484daa1717433de1736a6529cfcc'
  },
  {
    symbol: 'BBO',
    name: 'Bigbom',
    tokenAddress: '0x84f7c44b6fed1080f647e354d552595be2cc602f',
    tokenDecimals: 18,
    exchangeAddress: '0x3c3351e44d32b36bf2af97de6f40b548b00cf654'
  },
  {
    symbol: 'IND',
    name: 'Indorse Token',
    tokenAddress: '0xf8e386eda857484f5a12e4b5daa9984e06e73705',
    tokenDecimals: 18,
    exchangeAddress: '0x57c6e18ee62fc660575db273ffaab02436aad222'
  },
  {
    symbol: 'THETA',
    name: 'Theta Token',
    tokenAddress: '0x3883f5e181fccaf8410fa61e12b59bad963fb645',
    tokenDecimals: 18,
    exchangeAddress: '0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab'
  },
  {
    symbol: 'ST',
    name: 'Simple Token',
    tokenAddress: '0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca',
    tokenDecimals: 18,
    exchangeAddress: '0x700520b1e2ccc5bf5fa89a5f7b8fd9beba3f04b0'
  },
  {
    symbol: 'ELEC',
    name: 'ElectrifyAsia',
    tokenAddress: '0xd49ff13661451313ca1553fd6954bd1d9b6e02b9',
    tokenDecimals: 18,
    exchangeAddress: '0x5d40522c20326f2ebcec2d371f250e352e3bed27'
  },
  {
    symbol: 'FGP',
    name: 'FingerPrint',
    tokenAddress: '0xd9a8cfe21c232d485065cb62a96866799d4645f7',
    tokenDecimals: 18,
    exchangeAddress: '0xccd5c9f160379510670f9acd73779dce7e6226b2'
  },
  {
    symbol: 'HOPS',
    name: 'LORDLESS HOPS',
    tokenAddress: '0x471daee6e481b2ab7d2f2f64b8f9b083daae29da',
    tokenDecimals: 18,
    exchangeAddress: '0xe0cce4518ea70d98231c47e5b977ba90cfcec615'
  },
  {
    symbol: 'MFT',
    name: 'Mainframe Token',
    tokenAddress: '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',
    tokenDecimals: 18,
    exchangeAddress: '0x09f448c70c99124024cd9e8dcae6c2f51c0896db'
  },
  {
    symbol: 'GEN',
    name: 'DAOstack',
    tokenAddress: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
    tokenDecimals: 18,
    exchangeAddress: '0x26cc0eab6cb650b0db4d0d0da8cb5bf69f4ad692'
  },
  {
    symbol: 'NAC',
    name: 'Nami ICO',
    tokenAddress: '0x8d80de8a78198396329dfa769ad54d24bf90e7aa',
    tokenDecimals: 18,
    exchangeAddress: '0xaa9c9308bb6ef318bab918d1e4aebf284b02b680'
  },
  {
    symbol: 'BEN',
    name: 'Token of Szczepan Bentyn',
    tokenAddress: '0x108c05cac356d93b351375434101cfd3e14f7e44',
    tokenDecimals: 4,
    exchangeAddress: '0x104f5ac4fdf92fd4668a08ac2e305b5bcf3de215'
  },
  {
    symbol: 'BNT',
    name: 'Bancor Network Token',
    tokenAddress: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    tokenDecimals: 18,
    exchangeAddress: '0x87d80dbd37e551f58680b4217b23af6a752da83f'
  },
  {
    symbol: 'OPEN',
    name: 'OPEN',
    tokenAddress: '0x69c4bb240cf05d51eeab6985bab35527d04a8c64',
    tokenDecimals: 8,
    exchangeAddress: '0x9801d0e88222e9204025117bada94728885d1a28'
  },
  {
    symbol: 'AEUR',
    name: 'Augmint Euro',
    tokenAddress: '0xc994a2deb02543db1f48688438b9903c4b305ce3',
    tokenDecimals: 2,
    exchangeAddress: '0xd4a6ea5eabfd4048640724f62713ffb1e6292271'
  },
  {
    symbol: 'MLN',
    name: 'Melon Token',
    tokenAddress: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
    tokenDecimals: 18,
    exchangeAddress: '0xa931f4eb165ac307fd7431b5ec6eadde53e14b0c'
  },
  {
    symbol: 'EET',
    name: 'Easily Echangeable Token',
    tokenAddress: '0x7c0f856ddb93dfb957eac4513c6a5249c395cae5',
    tokenDecimals: 18,
    exchangeAddress: '0xe4f984870929bb4189ab43def9fc2f339244765e'
  },
  {
    symbol: 'sJPY',
    name: 'Synth sJPY',
    tokenAddress: '0xd9e5a009ec07de76616d7361ed713ef434d71325',
    tokenDecimals: 18,
    exchangeAddress: '0x39b0f27c771ad4236422af5ddc600711eefd93a3'
  },
  {
    symbol: 'ENJ',
    name: 'Enjin Coin',
    tokenAddress: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
    tokenDecimals: 18,
    exchangeAddress: '0xb99a23b1a4585fc56d0ec3b76528c27cad427473'
  },
  {
    symbol: 'SAI',
    name: 'Sai',
    tokenAddress: '0xf5b403abd806eff15b339909943e2c22ecbac54c',
    tokenDecimals: 18,
    exchangeAddress: '0xa809ef80c0abf701bd1b3b15749aa0a4179ec034'
  },
  {
    symbol: 'sXAU',
    name: 'Synth sXAU',
    tokenAddress: '0xe05d803fa0c5832fa2262465290abb25d6c2bfa3',
    tokenDecimals: 18,
    exchangeAddress: '0xaf294be0577dc703bd7f5b96d34bc9cb110f1e2b'
  },
  {
    symbol: 'EUR',
    name: 'MoneyFold Euro',
    tokenAddress: '0x8e3aeb75392ca824d55479cae07f7f0b765743dd',
    tokenDecimals: 2,
    exchangeAddress: '0x526353fbb4a37eddcebf63f96796a078d908f568'
  },
  {
    symbol: 'JSE',
    name: 'JSE Token',
    tokenAddress: '0x2d184014b5658c453443aa87c8e9c4d57285620b',
    tokenDecimals: 18,
    exchangeAddress: '0xa248a46b97204b6f4d5b05ba824fbea46390d978'
  },
  {
    symbol: 'MTL',
    name: 'Metal',
    tokenAddress: '0xf433089366899d83a9f26a773d59ec7ecf30355e',
    tokenDecimals: 8,
    exchangeAddress: '0xc5d192f702cc7ce84355df9d41af14bde5024cc9'
  },
  {
    symbol: 'NOTES',
    name: 'NOTES',
    tokenAddress: '0x5e6364d4534f780ae053b93b45c8b8840e683eb7',
    tokenDecimals: 18,
    exchangeAddress: '0x9b7036f677a6e4832e9983efa0ce384130248398'
  },
  {
    symbol: 'WYV',
    name: 'Project Wyvern Token',
    tokenAddress: '0x056017c55ae7ae32d12aef7c679df83a85ca75ff',
    tokenDecimals: 18,
    exchangeAddress: '0x77e885fbc67b7c6ea2b889c96bbd78f9e647463b'
  },
  {
    symbol: 'LDT',
    name: 'Law Diamond Token',
    tokenAddress: '0x76a6baa20598b6d203d3eae6cc87e326bcb60e43',
    tokenDecimals: 18,
    exchangeAddress: '0xcbfda0aa2e471c02a39e6cec9b7f5cdfd91d83c6'
  },
  {
    symbol: 'BLT',
    name: 'Bloom Token',
    tokenAddress: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
    tokenDecimals: 18,
    exchangeAddress: '0x0e6a53b13688018a3df8c69f99afb19a3068d04f'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x0cbe2df57ca9191b64a7af3baa3f946fa7df2f25',
    tokenDecimals: 18,
    exchangeAddress: '0xa1ecdcca26150cf69090280ee2ee32347c238c7b'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x3772f9716cf6d7a09ede3587738aa2af5577483a',
    tokenDecimals: 18,
    exchangeAddress: '0x5d8888a212d033cff5f2e0ac24ad91a5495bad62'
  },
  {
    symbol: 'LALA',
    name: 'LALA',
    tokenAddress: '0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9',
    tokenDecimals: 18,
    exchangeAddress: '0x6886f9dcbdad3cb8c6684f2fe78de5318c177068'
  },
  {
    symbol: 'DALC',
    name: 'DALECOIN',
    tokenAddress: '0x07d9e49ea402194bf48a8276dafb16e4ed633317',
    tokenDecimals: 8,
    exchangeAddress: '0x4591482d0c9d0af061a42009ff1b3cd070396f87'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
    tokenDecimals: 18,
    exchangeAddress: '0x601c32e0580d3aef9437db52d09f5a5d7e60ec22'
  },
  {
    symbol: 'FND',
    name: 'FundRequest',
    tokenAddress: '0x4df47b4969b2911c966506e3592c41389493953b',
    tokenDecimals: 18,
    exchangeAddress: '0xe52d807ad934953315ccfe56f3b6425fcff04b2b'
  },
  {
    symbol: 'GBP',
    name: 'MoneyFold Pound Sterling',
    tokenAddress: '0xff4f56c14b8b59f7d766988a0e0c582e46b7f8ab',
    tokenDecimals: 2,
    exchangeAddress: '0x23c3041a18a528a57e26623259e5caa9fb160665'
  },
  {
    symbol: 'WOMG',
    name: 'Wrapped OMG',
    tokenAddress: '0x69657e421c993a65e31f571b4ce742fafb318bd4',
    tokenDecimals: 18,
    exchangeAddress: '0xd2bf46ac7cbf595879aaff5967a92ae7e999c308'
  },
  {
    symbol: 'SMX',
    name: 'SaldoMX',
    tokenAddress: '0x8a3cf860eca6d8e4579bfb052488e336e0fd9eae',
    tokenDecimals: 2,
    exchangeAddress: '0x52b9c94031dee81b2c36be736fa7f6b7ca7ad84e'
  },
  {
    symbol: 'EDR',
    name: 'Endor Protocol Token',
    tokenAddress: '0xc528c28fec0a90c083328bc45f587ee215760a0f',
    tokenDecimals: 18,
    exchangeAddress: '0x877104c369bb563f3a893fae861b4baf0cdd9d37'
  },
  {
    symbol: 'CVL',
    name: 'CVL',
    tokenAddress: '0x01fa555c97d7958fa6f771f3bbd5ccd508f81e22',
    tokenDecimals: 18,
    exchangeAddress: '0xd7d070728c947645af47f8cd0731a4100695a503'
  },
  {
    symbol: 'ICH',
    name: 'ICOStart Token',
    tokenAddress: '0x330839ef82d34801bd96e75a4ee778ac56fa1ed8',
    tokenDecimals: 18,
    exchangeAddress: '0xe749f1a9d5f9055f0b784b586818833b9679949c'
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    tokenDecimals: 6,
    exchangeAddress: '0xc8313c965c47d1e0b5cdcd757b210356ad0e400c'
  },
  {
    symbol: 'STORJ',
    name: 'StorjToken',
    tokenAddress: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
    tokenDecimals: 8,
    exchangeAddress: '0xa7298541e52f96d42382ecbe4f242cbcbc534d02'
  },
  {
    symbol: 'SP',
    name: 'SunPower',
    tokenAddress: '0xd26b63194f70e0939393d23d3a5b1ed6bde5f835',
    tokenDecimals: 18,
    exchangeAddress: '0x5982aa08c4d3103a3534055b5fb2aac88d61675c'
  },
  {
    symbol: 'WOMG',
    name: 'Wrapped OMG',
    tokenAddress: '0xc46d19c06defe3adab78712bbbae08ffaaf1402d',
    tokenDecimals: 18,
    exchangeAddress: '0x03f7f874d7e1b131f8c66f1f64b15b645667687f'
  },
  {
    symbol: 'LTO',
    name: 'LTO Network Token',
    tokenAddress: '0x3db6ba6ab6f95efed1a6e794cad492faaabf294d',
    tokenDecimals: 8,
    exchangeAddress: '0x017d2735eb562d0ad9abc2a91801f4ca96f6bfa9'
  },
  {
    symbol: '18C',
    name: 'Block18',
    tokenAddress: '0xb3ce281f0dee8c6f7af19b9664109c4030bec3fa',
    tokenDecimals: 18,
    exchangeAddress: '0x9ad2f1272e775ebec936fef4cfa44bd5b1c7c3a6'
  },
  {
    symbol: 'ZJLT ',
    name: 'ZJLT  Distributed Factoring Network',
    tokenAddress: '0xb2af8d4d286e2087590f085ee7e8ccb05d3c7f29',
    tokenDecimals: 6,
    exchangeAddress: '0x7a05354b796958e439b1780204a89f81094ea4b9'
  },
  {
    symbol: 'ETHOS',
    name: 'Ethos',
    tokenAddress: '0x5af2be193a6abca9c8817001f45744777db30756',
    tokenDecimals: 8,
    exchangeAddress: '0xa55ba5d915a53e3c0514ff4e232eb50af12922ec'
  },
  {
    symbol: 'BIT',
    name: '比特链',
    tokenAddress: '0xf16843c8ab59ae17f9481ec756a1ded049192af4',
    tokenDecimals: 18,
    exchangeAddress: '0xbaf5a8bdf81cfe2d34c0ced89236fe473183f2e8'
  },
  {
    symbol: 'ART',
    name: 'Maecenas ART Token',
    tokenAddress: '0xfec0cf7fe078a500abf15f1284958f22049c2c7e',
    tokenDecimals: 18,
    exchangeAddress: '0x63a91a8b6f6289aa93f18539d245ec49c6169cd7'
  },
  {
    symbol: 'VIT',
    name: 'Vice',
    tokenAddress: '0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c',
    tokenDecimals: 18,
    exchangeAddress: '0x3981932f5e17540d863868c5d7c4e617e1334acd'
  },
  {
    symbol: 'RIYA',
    name: 'Etheriya',
    tokenAddress: '0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3',
    tokenDecimals: 8,
    exchangeAddress: '0xd284aedc33522c85949576eca69414020d15ccb6'
  },
  {
    symbol: 'X8X',
    name: 'X8XToken',
    tokenAddress: '0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c',
    tokenDecimals: 18,
    exchangeAddress: '0x6dd1d97e5817ca376e653a1e7326e0563d13ceeb'
  },
  {
    symbol: 'CH-ZG1235d',
    name: 'CH123456789013',
    tokenAddress: '0xd2cc32cc34b0b975bf9b812061a1a040017972fc',
    tokenDecimals: 18,
    exchangeAddress: '0x80a393b2e1e4aa07862c24ad8ac14511c91bd562'
  },
  {
    symbol: 'LESS',
    name: 'LORDLESS TOKEN',
    tokenAddress: '0x7ca121b093e2fbd4bb9a894bd5ff487d16f1f83b',
    tokenDecimals: 18,
    exchangeAddress: '0x5386c0e6b417138f09236f86aca243e6f5b05dd3'
  },
  {
    symbol: 'SIT',
    name: 'SInitiatives',
    tokenAddress: '0xe5e7d48abbb999880ea0f6533068dfd3944f0e7e',
    tokenDecimals: 4,
    exchangeAddress: '0x85c1ef96960884f802789400160b21d9c7043520'
  },
  {
    symbol: 'DFS',
    name: 'Digital Fantasy Sports',
    tokenAddress: '0x45ed02e374aef2e4b34c04e86ad9d45891d10751',
    tokenDecimals: 18,
    exchangeAddress: '0x70a97ec45d87a37cec6103658527ffb3df7802c7'
  },
  {
    symbol: 'CELR',
    name: 'Celer Network',
    tokenAddress: '0xf56fdae611b734005d71c03b7b8c966e45d1d768',
    tokenDecimals: 18,
    exchangeAddress: '0xd62cc4154a8f865761c5b027ec33b4ab47cfa175'
  },
  {
    symbol: 'AUC',
    name: 'Auctus Token',
    tokenAddress: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
    tokenDecimals: 18,
    exchangeAddress: '0x37134075f5b5a0a94ac891c7b5ec5db5cfcf392c'
  },
  {
    symbol: 'MYST',
    name: 'Mysterium',
    tokenAddress: '0xa645264c5603e96c3b0b078cdab68733794b0a71',
    tokenDecimals: 8,
    exchangeAddress: '0x6380ab7c66df788e30c5762f5884b9129d178b80'
  },
  {
    symbol: 'TAAS',
    name: 'Token-as-a-Service',
    tokenAddress: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c',
    tokenDecimals: 6,
    exchangeAddress: '0x4da5c31ab38a496a2513843dab8721e9aeb876bf'
  },
  {
    symbol: 'SIN',
    name: 'Casino La Crosse',
    tokenAddress: '0xb448846ff602a6cb206ffafc45b93ad6fb7dd716',
    tokenDecimals: 4,
    exchangeAddress: '0xc491dfda6487480dd31b4d5e1bb77bcc9e2543c9'
  },
  {
    symbol: 'MET',
    name: 'Metronome',
    tokenAddress: '0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e',
    tokenDecimals: 18,
    exchangeAddress: '0x006b6e89ee1531cfe5b6d32da0d80cc30506a339'
  },
  {
    symbol: 'NOW',
    name: 'ChangeNOW',
    tokenAddress: '0xe9a95d175a5f4c9369f3b74222402eb1b837693b',
    tokenDecimals: 8,
    exchangeAddress: '0xbe33fdad6efd453594e8ece3c53fd0ae62b7cc74'
  },
  {
    symbol: 'SIN',
    name: 'CasinoLaCrosse',
    tokenAddress: '0x26a6f4a6867a71be998b80eaabf67ff87d1e59d6',
    tokenDecimals: 2,
    exchangeAddress: '0x17edf686c2449ae8dbb52ac3cef105ca50baee53'
  },
  {
    symbol: 'AVO',
    name: 'Avocado',
    tokenAddress: '0xfa6f7881e52fdf912c4a285d78a3141b089ce859',
    tokenDecimals: 18,
    exchangeAddress: '0xe94c4dc3a75fad623391a68b4fbdd4b3c9b3eeb4'
  },
  {
    symbol: 'XES',
    name: 'Proxeus',
    tokenAddress: '0xa017ac5fac5941f95010b12570b812c974469c2c',
    tokenDecimals: 18,
    exchangeAddress: '0x225026d626e45fa662e6a71f679eff0cac3054f1'
  },
  {
    symbol: 'MSP',
    name: 'Mothership Token',
    tokenAddress: '0x68aa3f232da9bdc2343465545794ef3eea5209bd',
    tokenDecimals: 18,
    exchangeAddress: '0x700e7869fa8ffd3117200e248979fef2b78f4a1c'
  },
  {
    symbol: 'KNS',
    name: 'Konsta token',
    tokenAddress: '0x64fab8aff039ed05259d1c2af729b70c8002c661',
    tokenDecimals: 18,
    exchangeAddress: '0x19cb61fe00ea29fc77d79eaeaebc94023bf7c67b'
  },
  {
    symbol: 'BDC',
    name: 'Belden Coin',
    tokenAddress: '0xac4df2d98f14495263b9dfbc47451c46d8ab0a30',
    tokenDecimals: 18,
    exchangeAddress: '0xaf8937f0595c06e1e0cca741a8aedec088aafde0'
  },
  {
    symbol: 'MST',
    name: 'My Super Token',
    tokenAddress: '0x35352a97214942f5c6054923b8dbd5e4ff0434df',
    tokenDecimals: 18,
    exchangeAddress: '0xca5ce4f07e8591b497eb2e22d2b0c19b69173e61'
  },
  {
    symbol: 'CCOIN',
    name: 'CREDITCOIN',
    tokenAddress: '0x5e51f6841d2f188c42c7c33a6a5e77fb05cfbabe',
    tokenDecimals: 2,
    exchangeAddress: '0xba2d17a783533f401d2b5efaac4a5675f46ee36d'
  },
  {
    symbol: 'IAM',
    name: 'iAM',
    tokenAddress: '0x6025fb154b7c30e13657d5304dafdb55b194e5dd',
    tokenDecimals: 18,
    exchangeAddress: '0x9c1a7862f08d19e86714750161f56e7c10a9503e'
  },
  {
    symbol: 'ESTATE',
    name: 'AgentMile Estate Tokens',
    tokenAddress: '0x6671c24dd5b8e4ced34033991418e4bc0cca05af',
    tokenDecimals: 8,
    exchangeAddress: '0x2a98460615481a456a1d763460167514dcd21f2c'
  },
  {
    symbol: 'HOUR',
    name: 'Democracy Earth',
    tokenAddress: '0x00319f722bd546182cb2c701ca254146d3f084fc',
    tokenDecimals: 18,
    exchangeAddress: '0xb7f7269098f36b034c4e2118a40c53482872b87a'
  },
  {
    symbol: 'WINGS',
    name: 'WINGS',
    tokenAddress: '0x667088b212ce3d06a1b553a7221e1fd19000d9af',
    tokenDecimals: 18,
    exchangeAddress: '0x70876eadea28ac268564ad3a8b7313790b471436'
  },
  {
    symbol: 'FIT',
    name: 'Fitness Chain',
    tokenAddress: '0xc98449ef8a017cfd29aed8b21b9b26492978a898',
    tokenDecimals: 18,
    exchangeAddress: '0x99b849a022d60be539d2a130b89ff0bbae097d83'
  },
  {
    symbol: 'ABX',
    name: 'ASOBI COIN',
    tokenAddress: '0x49ceb57714000f18f3749cf2d130e135f9c473a4',
    tokenDecimals: 18,
    exchangeAddress: '0xbe26014bbdbdd3d35f93c80591ffaf08513621ed'
  },
  {
    symbol: 'POWR',
    name: 'PowerLedger',
    tokenAddress: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
    tokenDecimals: 6,
    exchangeAddress: '0xabe1e210f2c97ae4bc7b17f8daa2e8db993337f5'
  },
  {
    symbol: 'SWADER',
    name: 'Bruno Skvorc Token',
    tokenAddress: '0x89f10cead72d1ebf3e08a9378932c6f4f5a4c476',
    tokenDecimals: 4,
    exchangeAddress: '0x32ff139e48c05d636307f61e476bb395bd319b05'
  },
  {
    symbol: 'AURA',
    name: 'Aurora DAO',
    tokenAddress: '0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814',
    tokenDecimals: 18,
    exchangeAddress: '0x8903842469f8790dad072b45bbce96cde9f3d7e6'
  },
  {
    symbol: 'DGTX',
    name: 'DigitexFutures',
    tokenAddress: '0x1c83501478f1320977047008496dacbd60bb15ef',
    tokenDecimals: 18,
    exchangeAddress: '0x24fbcbc276854bd14f0e6e02fb7b740baa52ca26'
  },
  {
    symbol: 'WIND',
    name: 'Oroshi',
    tokenAddress: '0xc9c0ff6344b4bfdee7ace21c4deddd6e43ecb454',
    tokenDecimals: 18,
    exchangeAddress: '0xe2833ad850513faa973747e4495db1d0b0e038a0'
  },
  {
    symbol: 'SML',
    name: '数码链',
    tokenAddress: '0x9138e38a0316e25459b376e987dd270b626709b8',
    tokenDecimals: 18,
    exchangeAddress: '0x041692af7f62906cee089b77fa0e59adb63f750c'
  },
  {
    symbol: 'LEND',
    name: 'EthLend Token',
    tokenAddress: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    tokenDecimals: 18,
    exchangeAddress: '0xcaa7e4656f6a2b59f5f99c745f91ab26d1210dce'
  },
  {
    symbol: 'DRGN',
    name: 'Dragon',
    tokenAddress: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e',
    tokenDecimals: 18,
    exchangeAddress: '0x9881ad0c92d5a908d97df7f86626903ada1bfd29'
  },
  {
    symbol: 'JRT',
    name: 'Jarvis Reward Token',
    tokenAddress: '0xeef338c585ee3cf674f717937f12e6f52accf5e1',
    tokenDecimals: 18,
    exchangeAddress: '0xc932eded711ceb421078bab6b44b558656bd7864'
  },
  {
    symbol: 'OCEAN',
    name: 'The Ocean Token',
    tokenAddress: '0xf5ed2dc77f0d1ea7f106ecbd1850e406adc41b51',
    tokenDecimals: 18,
    exchangeAddress: '0x071002d8f0e5e210e510c68504e435c4a425df8b'
  },
  {
    symbol: 'LAVA',
    name: 'Lava',
    tokenAddress: '0xd89c37fd7c0fa3b107b7e4a8731dd3aaec488954',
    tokenDecimals: 8,
    exchangeAddress: '0x41e48af64f8ebf24194ce323b0760ee09bbb3ac4'
  },
  {
    symbol: 'CRKC',
    name: 'CREEKCOIN CRKC ERC20',
    tokenAddress: '0x2515905dd027cc38f139feda8e7e6945c7f9d07a',
    tokenDecimals: 18,
    exchangeAddress: '0xfaddccf91009c6383bc7b75c7f19a2c8be2f75ef'
  },
  {
    symbol: 'RLC',
    name: 'iEx.ec Network Token',
    tokenAddress: '0xf09209cc5eae846ee2cc4a493e7b962ca7bcfbbb',
    tokenDecimals: 9,
    exchangeAddress: '0x198da2b510e297605641f38b64e668675d778c6f'
  },
  {
    symbol: 'DOS',
    name: 'DOS Network Token',
    tokenAddress: '0x70861e862e1ac0c96f853c8231826e469ead37b1',
    tokenDecimals: 18,
    exchangeAddress: '0xb5e96c3ad1ccc79e7ab13433471baf785bb4977e'
  },
  {
    symbol: 'CEP',
    name: 'Cepheus',
    tokenAddress: '0x4cbdd06fcc050c7e0bd77478ed0fe4ea5eec651c',
    tokenDecimals: 18,
    exchangeAddress: '0xeb765bc156de3249b491d2db7aba3450fbcf9c5b'
  },
  {
    symbol: 'RCN',
    name: 'Readcoin',
    tokenAddress: '0x189c05c3c191015c694032e1b09c190d5db3fb50',
    tokenDecimals: 8,
    exchangeAddress: '0x112558c05b1e7f28daa98e48c8d7e0ced2f496c8'
  },
  {
    symbol: 'MITH',
    name: 'Mithril Token',
    tokenAddress: '0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb',
    tokenDecimals: 18,
    exchangeAddress: '0x6469a4e75f37d9f8f4b1cee6bb3c1a1fe933e2a7'
  },
  {
    symbol: 'DPP',
    name: 'DA Power Play Token',
    tokenAddress: '0x01b3ec4aae1b8729529beb4965f27d008788b0eb',
    tokenDecimals: 18,
    exchangeAddress: '0x7ea7134ed6c41d9e35dae7e7e1ff0fcc406224ca'
  },
  {
    symbol: 'BAL',
    name: 'Balance token',
    tokenAddress: '0xe7049114562c759d5e9d1d25783773ccd61c0a65',
    tokenDecimals: 0,
    exchangeAddress: '0x2afbcc0bb7a78bd4d9a63c24c13042212b37f665'
  },
  {
    symbol: 'PRO',
    name: 'ProChain',
    tokenAddress: '0x8377ee6d3545bc6ff1425ee3015dc648b149c7b2',
    tokenDecimals: 2,
    exchangeAddress: '0x238ff2e978a7fbb59ee2636caad269a440cbd43f'
  },
  {
    symbol: 'DEV',
    name: 'Dev',
    tokenAddress: '0x98626e2c9231f03504273d55f397409defd4a093',
    tokenDecimals: 18,
    exchangeAddress: '0x48b109a5981573d03e5becec76aa805b7640cd58'
  },
  {
    symbol: 'CET',
    name: 'CoinEx Token',
    tokenAddress: '0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f',
    tokenDecimals: 18,
    exchangeAddress: '0x28fe20afbf3450f13b803a639e19a8b0c005a5f3'
  },
  {
    symbol: 'DTOX',
    name: 'DeToxTheWorld',
    tokenAddress: '0x39550dc5919a990a5786fcdc1d5b7c392d362dde',
    tokenDecimals: 8,
    exchangeAddress: '0x7cdff5f7e1886767ae561ea0c2f926db3c25706d'
  },
  {
    symbol: 'ETHBO',
    name: 'EthBo',
    tokenAddress: '0xa120cb0530ea11451b002b7eafac91d8b5b8a499',
    tokenDecimals: 18,
    exchangeAddress: '0xa0834bad199282494763f36e93c4900cc950360e'
  },
  {
    symbol: 'MINDS',
    name: 'Minds',
    tokenAddress: '0xb26631c6dda06ad89b93c71400d25692de89c068',
    tokenDecimals: 18,
    exchangeAddress: '0x0ce13e66bef17801c9f19fb763be2dd2f391d7c2'
  },
  {
    symbol: 'TAU',
    name: 'Lamden Tau',
    tokenAddress: '0xc27a2f05fa577a83ba0fdb4c38443c0718356501',
    tokenDecimals: 18,
    exchangeAddress: '0x72fea1b0bf11c86e461c38d9f73e78dd21000d64'
  },
  {
    symbol: 'NTK',
    name: 'NeuroToken',
    tokenAddress: '0x69beab403438253f13b6e92db91f7fb849258263',
    tokenDecimals: 18,
    exchangeAddress: '0x46c106a6befddd066b202c9763ccc55c6f6c429b'
  },
  {
    symbol: 'USStocks',
    name: 'Major US stock market tracking index, redeemable for DAI at expiration on 15 May, 2019',
    tokenAddress: '0x36774fbca6b17325947cb208f77b4871ac7b6217',
    tokenDecimals: 18,
    exchangeAddress: '0xcdd6e09627d23368b770d9162807f181d061fb3e'
  },
  {
    symbol: 'GST2',
    name: 'Gastoken.io',
    tokenAddress: '0x0000000000b3f879cb30fe243b4dfee438691c04',
    tokenDecimals: 2,
    exchangeAddress: '0x929507cd3d90ab11ec4822e9eb5a48eb3a178f19'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x077d52b047735976dfda76fef74d4d988ac25196',
    tokenDecimals: 18,
    exchangeAddress: '0xb71d0e91b4b0edaea879d74d20632edafe46ef37'
  },
  {
    symbol: 'BITCAR',
    name: 'BitCar',
    tokenAddress: '0x08b4c866ae9d1be56a06e0c302054b4ffe067b43',
    tokenDecimals: 8,
    exchangeAddress: '0x480b971a86736448eb3ce00133008b348905ae5a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169',
    tokenDecimals: 18,
    exchangeAddress: '0xc202026dbfaa80dbb62d90cc645877fad70fd19d'
  },
  {
    symbol: 'WAX',
    name: 'Wax Token',
    tokenAddress: '0x39bb259f66e1c59d5abef88375979b4d20d98022',
    tokenDecimals: 8,
    exchangeAddress: '0xb3d8e9b03a7c5a5f6bea1eadafa3c766316225d3'
  },
  {
    symbol: 'KCS',
    name: 'Kucoin Shares',
    tokenAddress: '0x039b5649a59967e3e936d7471f9c3700100ee1ab',
    tokenDecimals: 6,
    exchangeAddress: '0xc0e77cdd039a3f731ae0f5c6c9f4a91d4bc28880'
  },
  {
    symbol: 'FTX',
    name: 'FintruX Network',
    tokenAddress: '0xd559f20296ff4895da39b5bd9add54b442596a61',
    tokenDecimals: 18,
    exchangeAddress: '0x80f0f3e1482bab7fb6ed70185476f2fcdb596fa9'
  },
  {
    symbol: 'PKTF',
    name: 'Private Katinrun Foundation',
    tokenAddress: '0x7add89f3a7d2530d83b99593c67f56740ec11cc6',
    tokenDecimals: 18,
    exchangeAddress: '0x45ed432a5f3638100cfc7c213e88fc902ac74cd4'
  },
  {
    symbol: 'KKC',
    name: 'KOKOCoin',
    tokenAddress: '0x1fdde7525783c36153a8a6b618e2b5210a23ce37',
    tokenDecimals: 18,
    exchangeAddress: '0x5388857f3607962064d0505201f3faf2d20fa4b9'
  },
  {
    symbol: 'MRPH',
    name: 'Morpheus.Network',
    tokenAddress: '0x7b0c06043468469967dba22d1af33d77d44056c8',
    tokenDecimals: 4,
    exchangeAddress: '0x60298a63804d730bf0fbb79d4010193d5d9b8e5d'
  },
  {
    symbol: 'WETC',
    name: 'WETC',
    tokenAddress: '0x86aabcc646f290b9fc9bd05ce17c3858d1511da1',
    tokenDecimals: 18,
    exchangeAddress: '0x0729d4d5e1956fe977662c8e149adfba561f86e5'
  },
  {
    symbol: 'KTR',
    name: 'KRISTREEDERTOKEN',
    tokenAddress: '0x9a8c04e6166c553dc01dd8f36b78904833baeb57',
    tokenDecimals: 18,
    exchangeAddress: '0x269cac915ef69d9920a48fd2dc3df5dc5941a779'
  },
  {
    symbol: 'AST',
    name: 'AirSwap Token',
    tokenAddress: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
    tokenDecimals: 4,
    exchangeAddress: '0xc462a2fd31c83f6ee220400d1506d9e9f1f4bb01'
  },
  {
    symbol: 'VLD',
    name: 'VALID',
    tokenAddress: '0x922ac473a3cc241fd3a0049ed14536452d58d73c',
    tokenDecimals: 18,
    exchangeAddress: '0x83c50f91c7147d7de832d11b95404ba306b07a69'
  },
  {
    symbol: 'SOV',
    name: 'SoundMoneyCoin',
    tokenAddress: '0x010589b7c33034b802f7dba2c88cc9cec0f46673',
    tokenDecimals: 8,
    exchangeAddress: '0x6ac136ef1856ab1f8c030b72d3b7f96580a975a3'
  },
  {
    symbol: 'TTF',
    name: 'TIMETOFLYTOKEN',
    tokenAddress: '0x92dd20c7da4d004a1a6fc094dc7d0c7169899353',
    tokenDecimals: 18,
    exchangeAddress: '0x9e6d609ca47d524abe086c0862a3b31859fc44f8'
  },
  {
    symbol: 'DREAM',
    name: 'DreamTeam Token',
    tokenAddress: '0x82f4ded9cec9b5750fbff5c2185aee35afc16587',
    tokenDecimals: 6,
    exchangeAddress: '0xbd04c3749506ce30eed93c06f93f18223c3ff5aa'
  },
  {
    symbol: 'MANU',
    name: 'MANUCoin',
    tokenAddress: '0xf7fda1bf4bd0b2b0dea343d1e8e08d8b869d08ef',
    tokenDecimals: 9,
    exchangeAddress: '0x2fee056acc850b614c9161c5e1fd482a93aa896b'
  },
  {
    symbol: 'LIKE',
    name: 'LikeCoin',
    tokenAddress: '0x02f61fd266da6e8b102d4121f5ce7b992640cf98',
    tokenDecimals: 18,
    exchangeAddress: '0x40c2313279a97c9551ae3d06a274de8364d1f3e0'
  },
  {
    symbol: 'P3X',
    name: 'PoWH3D Extended',
    tokenAddress: '0x058a144951e062fc14f310057d2fd9ef0cf5095b',
    tokenDecimals: 18,
    exchangeAddress: '0x315945cd5c5b601643179d2803ab844e19a35fa8'
  },
  {
    symbol: 'IKC',
    name: 'www.internetkeys.net - Multiboard',
    tokenAddress: '0xd64794250393f825e57e0ffccd3c75cad4564be3',
    tokenDecimals: 8,
    exchangeAddress: '0x82df4774a61034381da474dc0b7319b44b520b8d'
  },
  {
    symbol: 'RUBI',
    name: 'Rubin',
    tokenAddress: '0xefde86ec7be1a27dc1ea2a027e5e7c997af5d066',
    tokenDecimals: 8,
    exchangeAddress: '0x2830b513f4ab3971e9a761803785277ba5ee4dab'
  },
  {
    symbol: 'NS7',
    name: 'Najah Safiya',
    tokenAddress: '0xe1a0a311adb89920816b79029484ea9b7d1ef32c',
    tokenDecimals: 8,
    exchangeAddress: '0xf6c7ab80d38588a905cadf1db03d9333cb04d177'
  },
  {
    symbol: 'IHF',
    name: 'Invictus Hyperion',
    tokenAddress: '0xaf1250fa68d7decd34fd75de8742bc03b29bd58e',
    tokenDecimals: 18,
    exchangeAddress: '0xaeb8fb9d0a3f21ab88fc12435cdc4aae13799eb6'
  },
  {
    symbol: 'CEL',
    name: 'Celsius',
    tokenAddress: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
    tokenDecimals: 4,
    exchangeAddress: '0x91debb54de02872a259c17699d9b794bc949fed2'
  },
  {
    symbol: 'NYOT',
    name: 'NotYourOrdinaryToken',
    tokenAddress: '0xea6ab13251aa6ae87475b418f529208eae317250',
    tokenDecimals: 2,
    exchangeAddress: '0x616c0ca2be15d68e00c5dca93e20c5b1f245300e'
  },
  {
    symbol: 'ERBYS',
    name: 'ErrbodysToken',
    tokenAddress: '0x29c8682e6cabd9485413cf81057ffa8fd4c399a4',
    tokenDecimals: 2,
    exchangeAddress: '0x8fae74207942f3a78747740658ab63c90d8400ff'
  },
  {
    symbol: 'CAR',
    name: 'CarBlock.io',
    tokenAddress: '0x4d9e23a3842fe7eb7682b9725cf6c507c424a41b',
    tokenDecimals: 18,
    exchangeAddress: '0xf01b1232af4f94519933dff65041227ff52f11f9'
  },
  {
    symbol: 'HOT',
    name: 'Hydro Protocol Token',
    tokenAddress: '0x9af839687f6c94542ac5ece2e317daae355493a1',
    tokenDecimals: 18,
    exchangeAddress: '0xe123575bf28ab05a65de145061ba747887deeae3'
  },
  {
    symbol: 'T2T',
    name: 'traceto.io',
    tokenAddress: '0xe6824483e279d967ea6f8472ace7585862fa1185',
    tokenDecimals: 18,
    exchangeAddress: '0x429f18e437ed3cf1c095de37c340616842c97d20'
  },
  {
    symbol: 'BTCETH7525',
    name: 'BitEth7525RebalancingSetToken',
    tokenAddress: '0xa35fc5019c4dc509394bd4d74591a0bf8852c195',
    tokenDecimals: 18,
    exchangeAddress: '0xca257d6779b153f5b3f7cffd89e5b37529c70947'
  },
  {
    symbol: 'BTCETH2575',
    name: 'BitEth2575RebalancingSetToken',
    tokenAddress: '0xa6c040045d962e4b8efa00954c7d23ccd0a2b8ad',
    tokenDecimals: 18,
    exchangeAddress: '0x1afc0bb4c1db404493fec6c2ceabd25f1eeb0a65'
  },
  {
    symbol: 'DIP',
    name: 'Decentralized Insurance Protocol',
    tokenAddress: '0xc719d010b63e5bbf2c0551872cd5316ed26acd83',
    tokenDecimals: 18,
    exchangeAddress: '0x61792f290e5100fbbcbb2309f03a1bab869fb850'
  },
  {
    symbol: 'BBW',
    name: 'BBWCoin',
    tokenAddress: '0x27b5b94a7269e175864d2c5e584d8f1414a2d94f',
    tokenDecimals: 8,
    exchangeAddress: '0x7141b573a6fb6c99c97c234c1b65e1c9696d29d1'
  },
  {
    symbol: 'ZMO',
    name: 'ZmeenaOrrCoin',
    tokenAddress: '0xa538cc79644c7522ca3c1f150b4979e06cc71804',
    tokenDecimals: 2,
    exchangeAddress: '0x9129ad3fd905293ffcc22ff7a1ef0406ce7c0c27'
  },
  {
    symbol: 'STETHDai',
    name: 'STETHDaiRebalancingSetToken',
    tokenAddress: '0x585c2cf94c41b528ec7329cbc3cde3c4f8d268db',
    tokenDecimals: 18,
    exchangeAddress: '0x10c4be5806878f78e6179af6d09d035bbdab2ec2'
  },
  {
    symbol: 'RC20',
    name: 'RoboCalls',
    tokenAddress: '0x61b2d3ea9f1c6b387c985c73d40e8fbfb284e5c7',
    tokenDecimals: 18,
    exchangeAddress: '0x9394c20adca4512dfc3d3c184c648e4193462ebb'
  },
  {
    symbol: 'SP',
    name: 'SunPower',
    tokenAddress: '0x33ad8ccd192c2b1782b0d3e557e32a54771e16f1',
    tokenDecimals: 18,
    exchangeAddress: '0x102745b4a019d37bc342850b0c36125f1cb2858d'
  },
  {
    symbol: 'NVT',
    name: 'Nova Token',
    tokenAddress: '0x09d8b66c48424324b25754a873e290cae5dca439',
    tokenDecimals: 18,
    exchangeAddress: '0x2e4d90dc7fd3d9be8fdb6fdd4b98e2ddc2cfa607'
  },
  {
    symbol: 'WaBi',
    name: 'WaBi',
    tokenAddress: '0x286bda1413a2df81731d4930ce2f862a35a609fe',
    tokenDecimals: 18,
    exchangeAddress: '0x65b809f942b3ec5695bbf74670c3a78657168320'
  },
  {
    symbol: 'CRYPTOLAND',
    name: 'CRYPTOLAND',
    tokenAddress: '0xebdc8da065f78048b0b0f3c17c8b5f4348daf219',
    tokenDecimals: 8,
    exchangeAddress: '0x0a7ee2162c0ee6be4a1de9e7f73cff5432309ec0'
  },
  {
    symbol: 'WIB',
    name: 'WIBSON',
    tokenAddress: '0x3f17dd476faf0a4855572f0b6ed5115d9bba22ad',
    tokenDecimals: 9,
    exchangeAddress: '0xad014d0dc396e4333778832d24e3a5e78b3593be'
  },
  {
    symbol: 'PEP',
    name: 'PEP Token',
    tokenAddress: '0xbb0ef9e617faddf54b8d16e29046f72b4d3ec77f',
    tokenDecimals: 18,
    exchangeAddress: '0x579134b2dc4a79746d365aa8097e8dc8b571fed1'
  },
  {
    symbol: '4/26 106-C',
    name: 'Apr 26 106-CALL',
    tokenAddress: '0xb134ec3fe107a190809ae612eec93f3847c1aa4d',
    tokenDecimals: 18,
    exchangeAddress: '0x0a8fb4a411a0fc781d65b19f3b261c858f82ffef'
  },
  {
    symbol: 'RMC',
    name: 'RemiCoin',
    tokenAddress: '0x7dc4f41294697a7903c4027f6ac528c5d14cd7eb',
    tokenDecimals: 8,
    exchangeAddress: '0x779dcfc531d31cd4fd7f4276bf357130dce3cc9b'
  },
  {
    symbol: 'SNGLS',
    name: 'SingularDTV',
    tokenAddress: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
    tokenDecimals: 0,
    exchangeAddress: '0x61061e00a5acda7886ccce2a051539ef2fca1ce6'
  },
  {
    symbol: 'VIB',
    name: 'Vibe',
    tokenAddress: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724',
    tokenDecimals: 18,
    exchangeAddress: '0xcc763e9add17a9d77b5b1b0fb7cb6e51508e3008'
  },
  {
    symbol: 'MPH',
    name: 'CHASYR',
    tokenAddress: '0x957a688d23a00f196b2da8e2531702c67de167cf',
    tokenDecimals: 18,
    exchangeAddress: '0xd4846bc16a6bf859c1253a6f37239ff06a99abe5'
  },
  {
    symbol: 'BLZ',
    name: 'Bluzelle Token',
    tokenAddress: '0x5732046a883704404f284ce41ffadd5b007fd668',
    tokenDecimals: 18,
    exchangeAddress: '0x0310396b59c4d90762398b8c5a24d646701c6f18'
  },
  {
    symbol: 'MFG',
    name: 'SyncFab Smart Manufacturing Blockchain',
    tokenAddress: '0x6710c63432a2de02954fc0f851db07146a6c0312',
    tokenDecimals: 18,
    exchangeAddress: '0x27882bfeabcd4ba886854c03206d12c17be5f001'
  },
  {
    symbol: 'findtherabbit.me',
    name: 'https://findtherabbit.me',
    tokenAddress: '0x713a1c4876673a982a828753166c452ba9721994',
    tokenDecimals: 18,
    exchangeAddress: '0x6b92c982c33e94f25fec6c23dd46403b925a1ae3'
  },
  {
    symbol: 'CC',
    name: 'CartyCion',
    tokenAddress: '0x3d779a7fb80723c6385524d113792d119acd2267',
    tokenDecimals: 18,
    exchangeAddress: '0x89df148b1c76d00b567f91ceeb7d0b3feb905011'
  },
  {
    symbol: 'HUNT',
    name: 'HuntToken',
    tokenAddress: '0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5',
    tokenDecimals: 18,
    exchangeAddress: '0xb8cefb02e4f911c250b27690b72a61d58167d18c'
  },
  {
    symbol: 'MDL',
    name: 'Medilink Coin',
    tokenAddress: '0x8c8d6016344425ddd1d63523411de5eb398cd141',
    tokenDecimals: 18,
    exchangeAddress: '0x505d1fada4967cbc2bf01da31089a1333528f4ab'
  },
  {
    symbol: 'NPXS',
    name: 'Pundi X Token',
    tokenAddress: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
    tokenDecimals: 18,
    exchangeAddress: '0x93ff2c787c140c4ce21f01cc211fbdace274077f'
  },
  {
    symbol: 'IMC',
    name: 'IMCoin',
    tokenAddress: '0x379e5f3eab1b05f3811519907b36b8e04fe3a897',
    tokenDecimals: 18,
    exchangeAddress: '0xa983458a7b5434a89f48198d144151846a8fcc01'
  },
  {
    symbol: 'EDG',
    name: 'Edgeless',
    tokenAddress: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c',
    tokenDecimals: 0,
    exchangeAddress: '0x4ac2ccebac7b96f1e66fbb7049c740a8ca8ef78d'
  },
  {
    symbol: 'GRG',
    name: 'Rigo Token',
    tokenAddress: '0x4fbb350052bca5417566f188eb2ebce5b19bc964',
    tokenDecimals: 18,
    exchangeAddress: '0xee5e8d2357a29f4a85a938679233fe24fbc2cf1d'
  },
  {
    symbol: 'MX',
    name: 'Mythex',
    tokenAddress: '0xf6c868c4f2a48949ff9b01e67acd206543352fcd',
    tokenDecimals: 0,
    exchangeAddress: '0xe3349fd5f3bf3b878ac5444c29c7308bf5992bbb'
  },
  {
    symbol: 'SUB',
    name: 'Substratum',
    tokenAddress: '0x8d75959f1e61ec2571aa72798237101f084de63a',
    tokenDecimals: 18,
    exchangeAddress: '0xc080b284028e37e3b26d85f2c53ad51904471d7a'
  },
  {
    symbol: 'BTDE',
    name: 'Bethon Digital Ecosystem',
    tokenAddress: '0xc9d6382e5abfed97cc856216ced900b64324e502',
    tokenDecimals: 18,
    exchangeAddress: '0xb3d5641170b1b2e4344e62993adbbe54574102e4'
  },
  {
    symbol: 'COLR',
    name: 'Cryptovoxels Color',
    tokenAddress: '0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88',
    tokenDecimals: 0,
    exchangeAddress: '0x3f0c63da66457dedc2677bef6bbdd457ba7a3c0b'
  },
  {
    symbol: 'MOD',
    name: 'Modum Token',
    tokenAddress: '0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e',
    tokenDecimals: 0,
    exchangeAddress: '0xccb98654cd486216fff273dd025246588e77cfc1'
  },
  {
    symbol: 'PLN',
    name: 'MoneyFold Polish Zloty',
    tokenAddress: '0x7880515ed114127bfe1e76462ba5e2725939129e',
    tokenDecimals: 2,
    exchangeAddress: '0x6a4096bf1cb457049502aaaa6303c9cb1469546d'
  },
  {
    symbol: 'IMMO',
    name: 'blockimmo',
    tokenAddress: '0x9c3e7e016389661473ac64f4c37f5f7f2955e499',
    tokenDecimals: 18,
    exchangeAddress: '0x4218710e520e01e3158d9bdb579002e983be176c'
  },
  {
    symbol: 'DST',
    name: 'DragonSeriesToken',
    tokenAddress: '0xc5807256e2e2fe85ca94c3617c4bc5ff2bd9cfb6',
    tokenDecimals: 18,
    exchangeAddress: '0x2f75dc34c4cacd835041dd523b7d36d391b92aa0'
  },
  {
    symbol: 'NEU',
    name: 'Neumark',
    tokenAddress: '0xa823e6722006afe99e91c30ff5295052fe6b8e32',
    tokenDecimals: 18,
    exchangeAddress: '0x34b0b7ba7cd9efa0582dcfbf5f6d4cfe344d8c47'
  },
  {
    symbol: 'HGT',
    name: 'HelloGold Token',
    tokenAddress: '0xba2184520a1cc49a6159c57e61e1844e085615b6',
    tokenDecimals: 8,
    exchangeAddress: '0x658d3a5467e4b90a967530cf73718f453f35b2ac'
  },
  {
    symbol: 'YUN',
    name: 'Yun Planet',
    tokenAddress: '0x02b3c88b805f1c6982e38ea1d40a1d83f159c3d4',
    tokenDecimals: 8,
    exchangeAddress: '0x7b46b7df165e31dcbed54eaf1975b0c780db47e7'
  },
  {
    symbol: 'STORM',
    name: 'Storm Token',
    tokenAddress: '0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433',
    tokenDecimals: 18,
    exchangeAddress: '0xb0b12c05df3237eb6f0ce7312b68c37e140bf69b'
  },
  {
    symbol: 'KBC',
    name: 'KaratBank Coin',
    tokenAddress: '0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a',
    tokenDecimals: 7,
    exchangeAddress: '0x2837ef3e8e0558ce0bfe465cfa4f8ba826683090'
  },
  {
    symbol: 'BTT',
    name: 'Bethon Token',
    tokenAddress: '0x36cd54b05b82156e454d690af1d392a27af41c94',
    tokenDecimals: 18,
    exchangeAddress: '0x9f023605f04a6bab127e0c40c4ddd17b5b5873a0'
  },
  {
    symbol: 'AOA',
    name: 'Aurora',
    tokenAddress: '0x9ab165d795019b6d8b3e971dda91071421305e5a',
    tokenDecimals: 18,
    exchangeAddress: '0x4a5875fc146005f7c3143ab403b9aafa42f9b152'
  },
  {
    symbol: 'TRX',
    name: 'Tronix',
    tokenAddress: '0xf230b790e05390fc8295f4d3f60332c93bed42e2',
    tokenDecimals: 6,
    exchangeAddress: '0x8f0f1fa9257e30d2f6eac262221447d29d33ac8c'
  },
  {
    symbol: 'TST',
    name: 'Touch Smart Token',
    tokenAddress: '0xd9bae39c725a1864b1133ad0ef1640d02f79b78c',
    tokenDecimals: 18,
    exchangeAddress: '0x8ac50b8ad6a856a492741d16e40b812652056483'
  },
  {
    symbol: 'MATIC',
    name: 'Matic Token',
    tokenAddress: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    tokenDecimals: 18,
    exchangeAddress: '0x9a7a75e66b325a3bd46973b2b57c9b8d9d26a621'
  },
  {
    symbol: 'BCDT',
    name: 'Blockchain Certified Data Token',
    tokenAddress: '0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5',
    tokenDecimals: 18,
    exchangeAddress: '0x7acbb9fb0aff7673951ba35963c8fdc370c6017c'
  },
  {
    symbol: 'AD',
    name: 'Asian Dragon',
    tokenAddress: '0xf6dbe88ba55f1793ff0773c9b1275300f830914f',
    tokenDecimals: 8,
    exchangeAddress: '0xd6200e54cd6c064438c6ddb32e3af3ce4f0c5802'
  },
  {
    symbol: 'GOO',
    name: 'Vials of Goo',
    tokenAddress: '0xdf0960778c6e6597f197ed9a25f12f5d971da86c',
    tokenDecimals: 12,
    exchangeAddress: '0xe52dceab9c8892eca29b0a0869257d7ad26268d2'
  },
  {
    symbol: 'TTZ',
    name: 'TestTokenZ',
    tokenAddress: '0xd21ba1c2c0e8fbd236553efa39137165b3a68e75',
    tokenDecimals: 18,
    exchangeAddress: '0x7f3dab432429bf4de09b8ec697fc6d817f483b42'
  },
  {
    symbol: 'RST',
    name: 'REGA Risk Sharing Token',
    tokenAddress: '0xa17d1bf14802e0eec8f84b3b8b638a9402d60e9e',
    tokenDecimals: 10,
    exchangeAddress: '0xd6ed8979455ebed92db3b7afdd1ab200054a88bc'
  },
  {
    symbol: 'MYB',
    name: 'MyBit',
    tokenAddress: '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
    tokenDecimals: 18,
    exchangeAddress: '0x1e0fbdaf60e1195a46e2af40a1c7b84460a13444'
  },
  {
    symbol: 'TEST',
    name: 'Testing Token',
    tokenAddress: '0xf1bbbfe96c5845dd4d5f60e7ce758bbc24f7f5ee',
    tokenDecimals: 18,
    exchangeAddress: '0x90be26ffa3f65d00858f4b2ad15b95e78d402f0f'
  },
  {
    symbol: 'MER',
    name: 'Meritum',
    tokenAddress: '0xf3981e5ff82caaa5d4cb4fba540b06c20c3d3dbe',
    tokenDecimals: 18,
    exchangeAddress: '0x2e9e106ef10613025a43c6afdcf68d6dd9f5d701'
  },
  {
    symbol: 'cETH',
    name: 'Compound Ether',
    tokenAddress: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
    tokenDecimals: 8,
    exchangeAddress: '0x3f3e2cf087b4a818a7c610eb8ef332d894736d7d'
  },
  {
    symbol: 'SOCKS',
    name: 'Unisocks Edition 0',
    tokenAddress: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
    tokenDecimals: 18,
    exchangeAddress: '0x22d8432cc7aa4f8712a655fc4cdfb1baec29fca9'
  },
  {
    symbol: 'VEN',
    name: 'VeChain Token',
    tokenAddress: '0xd850942ef8811f2a866692a623011bde52a462c1',
    tokenDecimals: 18,
    exchangeAddress: '0xb23c1553cf98f7abbc24c94141e5ce48148fa351'
  },
  {
    symbol: 'cDAI',
    name: 'Compound Dai',
    tokenAddress: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
    tokenDecimals: 8,
    exchangeAddress: '0x45a2fdfed7f7a2c791fb1bdf6075b83fad821dde'
  },
  {
    symbol: 'HUM',
    name: 'Humanity',
    tokenAddress: '0xbbd1706d16418bb136e1497a73d3af4164586da0',
    tokenDecimals: 18,
    exchangeAddress: '0xe499657190d515119077af5d64f44b6f850baea5'
  },
  {
    symbol: 'SKAN',
    name: 'LakesCash',
    tokenAddress: '0x9cb79101f795287585843d71c1b0a33a0724c2bb',
    tokenDecimals: 2,
    exchangeAddress: '0x9f1fbbdd2c784025e170c7e636c68ae0de0cc435'
  },
  {
    symbol: 'ARN',
    name: 'Aeron',
    tokenAddress: '0xba5f11b16b155792cf3b2e6880e8706859a8aeb6',
    tokenDecimals: 8,
    exchangeAddress: '0x05d9c70cee7760ff3c7b50c3f7f9c0de24c0d840'
  },
  {
    symbol: 'SXUT',
    name: 'Spectre.ai U-Token',
    tokenAddress: '0x2c82c73d5b34aa015989462b2948cd616a37641f',
    tokenDecimals: 18,
    exchangeAddress: '0x6a69ddbbf936fc343cbefb4e4edbf6dbc4002e04'
  },
  {
    symbol: 'ZXBT',
    name: 'ZerroXBToken Project 0xbt',
    tokenAddress: '0xcd0a53685b594a543181e6203433766648a8cd43',
    tokenDecimals: 3,
    exchangeAddress: '0xce1ccd4668c88d5ea832a33048c41c3eded3b38a'
  },
  {
    symbol: 'DOYLE',
    name: 'DOYLE COIN',
    tokenAddress: '0x9181eef2ea5624c187d1147134b847552302da2a',
    tokenDecimals: 18,
    exchangeAddress: '0xb95eba7ff86e34d7eb8fb91618a6119059908bbb'
  },
  {
    symbol: 'MMTM',
    name: 'Momentum',
    tokenAddress: '0x9f22a13204c09e0f89144b63da0588a836c07931',
    tokenDecimals: 18,
    exchangeAddress: '0xb472682be408335d93d1a9b56fd1f92a8ab55198'
  },
  {
    symbol: 'MTN',
    name: 'MedToken',
    tokenAddress: '0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3',
    tokenDecimals: 18,
    exchangeAddress: '0xc3ee3be4f46cd5ca30406c37f074031cfe3ae181'
  },
  {
    symbol: 'MVT',
    name: 'The Movement',
    tokenAddress: '0x3d46454212c61ecb7b31248047fa033120b88668',
    tokenDecimals: 18,
    exchangeAddress: '0x89a294f122d1cc3696be37d00d113f45c262712a'
  },
  {
    symbol: 'POP',
    name: 'POP Network Token',
    tokenAddress: '0x5d858bcd53e085920620549214a8b27ce2f04670',
    tokenDecimals: 18,
    exchangeAddress: '0xdd60feabc16bbc79ec558fd4b852fe1ed9f030e8'
  },
  {
    symbol: 'Candy',
    name: 'Unicorn Candy Coin',
    tokenAddress: '0xcd3673af09e76c74d889aabab68ca0645566a3a1',
    tokenDecimals: 18,
    exchangeAddress: '0x450afa2c7d86cd4aa024a407e5b391627b013fc7'
  },
  {
    symbol: 'RGS',
    name: 'Rusgas',
    tokenAddress: '0x4c383bdcae52a6e1cb810c76c70d6f31a249ec9b',
    tokenDecimals: 8,
    exchangeAddress: '0xecdd1fc0b1297683330436a99ffecb8a156cb098'
  },
  {
    symbol: 'UBN',
    name: 'Ubricoin',
    tokenAddress: '0xdb13025b219db5e4529f48b65ff009a26b6ae733',
    tokenDecimals: 18,
    exchangeAddress: '0x170cb1c6b6ca03f693c79617001f83a47bedea8c'
  },
  {
    symbol: 'AI',
    name: 'PolyAi',
    tokenAddress: '0x5121e348e897daef1eef23959ab290e5557cf274',
    tokenDecimals: 18,
    exchangeAddress: '0x3ca04f154b30661a84fdcddadc55f66b8ad82221'
  },
  {
    symbol: 'MBGN',
    name: 'Embiggen',
    tokenAddress: '0xdde19c145c1ee51b48f7a28e8df125da0cc440be',
    tokenDecimals: 18,
    exchangeAddress: '0x6af056d9919fab5b046112778340108d5ec3ebbb'
  },
  {
    symbol: 'NMU',
    name: 'NOISEMUSICTOKEN',
    tokenAddress: '0x4abefcd2996073093a06e5a3bd32acda6b3b2235',
    tokenDecimals: 18,
    exchangeAddress: '0xb2ec66d6fcf579af9b8035ec2cf85df0be8bdf82'
  },
  {
    symbol: 'NULS',
    name: 'Nuls',
    tokenAddress: '0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c',
    tokenDecimals: 18,
    exchangeAddress: '0x12dbf069f65dde8443782a92cfc47094754aa0cf'
  },
  {
    symbol: 'MTV',
    name: 'MultiVAC',
    tokenAddress: '0x8aa688ab789d1848d131c65d98ceaa8875d97ef1',
    tokenDecimals: 18,
    exchangeAddress: '0x3acb0e353759645d2c8ae098e2238956ceb681fb'
  },
  {
    symbol: 'PPP',
    name: 'PayPie',
    tokenAddress: '0xc42209accc14029c1012fb5680d95fbd6036e2a0',
    tokenDecimals: 18,
    exchangeAddress: '0x1b810f17eeef12838fe059c926093b30653e7567'
  },
  {
    symbol: 'INB',
    name: 'Insight Chain',
    tokenAddress: '0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482',
    tokenDecimals: 18,
    exchangeAddress: '0x3a891d655c929b22e3d6791238f3a4545e31b81e'
  },
  {
    symbol: 'SWAT',
    name: 'SWTCoin',
    tokenAddress: '0xc0f1728d9513efc316d0e93a0758c992f88b0809',
    tokenDecimals: 8,
    exchangeAddress: '0x6c81a9649c26fc34db64967de6117c8a25e273db'
  },
  {
    symbol: 'PYC',
    name: 'Polycoin',
    tokenAddress: '0x4c3ad93c06a073be57845549914f8833101b58f3',
    tokenDecimals: 0,
    exchangeAddress: '0xf52281071b0563a95c34753fcf615d0d3c2c4de3'
  },
  {
    symbol: 'XD',
    name: 'Data Transaction Token',
    tokenAddress: '0x24dcc881e7dd730546834452f21872d5cb4b5293',
    tokenDecimals: 18,
    exchangeAddress: '0xb7cf1e1ea55572713feeec025d7cf56b3c6c6b6d'
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    tokenAddress: '0x0000000000085d4780b73119b644ae5ecd22b376',
    tokenDecimals: 18,
    exchangeAddress: '0x5048b9d01097498fd72f3f14bc9bc74a5aac8fa7'
  },
  {
    symbol: 'AMB',
    name: 'Amber Token',
    tokenAddress: '0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce',
    tokenDecimals: 18,
    exchangeAddress: '0xca265a7f4c9dc47b259850b696ebeffa8bb18d9d'
  },
  {
    symbol: 'CENNZ',
    name: 'Centrality Token',
    tokenAddress: '0x1122b6a0e00dce0563082b6e2953f3a943855c1f',
    tokenDecimals: 18,
    exchangeAddress: '0xb25b1703b37ae34d405ad9d053aada87967aba92'
  },
  {
    symbol: 'NUTZ',
    name: 'CRYPTONUTZ',
    tokenAddress: '0x46ffe978f4cf28e7135804ff244b6cdc8dc51377',
    tokenDecimals: 18,
    exchangeAddress: '0xcb3091c01bd9502b666a6a0de55bf9df461fde68'
  },
  {
    symbol: 'GST1',
    name: 'Gastoken.io',
    tokenAddress: '0x88d60255f917e3eb94eae199d827dad837fac4cb',
    tokenDecimals: 2,
    exchangeAddress: '0x5b583057dfbc49c67dcd017b75a11148db1168e6'
  },
  {
    symbol: 'FOCT',
    name: 'Forcount',
    tokenAddress: '0x66946bc3e6738c70bbc4e69eb38a507f8eb9bc20',
    tokenDecimals: 18,
    exchangeAddress: '0x20ead976847626004d0120bcd02eb526eb6985c3'
  },
  {
    symbol: 'DANK',
    name: 'Dank Token',
    tokenAddress: '0x0cb8d0b37c7487b11d57f1f33defa2b1d3cfccfe',
    tokenDecimals: 18,
    exchangeAddress: '0x68e83c65629ed0d6e836c1957d304aa2741b240e'
  },
  {
    symbol: 'AAA',
    name: 'Change Your Life',
    tokenAddress: '0xd938137e6d96c72e4a6085412ada2dad78ff89c4',
    tokenDecimals: 8,
    exchangeAddress: '0x4fc96501dc4a33d2ae5d67d844f4434f3eef92d7'
  },
  {
    symbol: 'EVE',
    name: 'Devery.io',
    tokenAddress: '0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c',
    tokenDecimals: 18,
    exchangeAddress: '0x23ffd1d8077b3e3679d48b9002dd11471e2295bc'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xef8a2c1bc94e630463293f71bf5414d13e80f62d',
    tokenDecimals: 18,
    exchangeAddress: '0xd9025ed64baa7b9046e37fe94670c79fccb2b5c8'
  },
  {
    symbol: 'MCH',
    name: 'Meritum Cash',
    tokenAddress: '0x10709ca9adcaa1728ad530be1ed39c0286124883',
    tokenDecimals: 18,
    exchangeAddress: '0xbb6e36aa6121246c056d04f16757933a1052e64c'
  },
  {
    symbol: 'MIM',
    name: 'Moiom',
    tokenAddress: '0x3bea1cb0ea10a35b1995233d6d57b34fb3142b1b',
    tokenDecimals: 18,
    exchangeAddress: '0x88942e83677e89c7bf68fc9e07621b09c33b4d47'
  },
  {
    symbol: 'AFA',
    name: 'Africahead Ipparts',
    tokenAddress: '0xfb48e0dea837f9438309a7e9f0cfe7ee3353a84e',
    tokenDecimals: 2,
    exchangeAddress: '0xfe52450ea8d64bc55c295c6162318ed79bb69df6'
  },
  {
    symbol: 'TELE',
    name: 'MiracleTele',
    tokenAddress: '0xb363a3c584b1f379c79fbf09df015da5529d4dac',
    tokenDecimals: 18,
    exchangeAddress: '0xcf6c25cfe2b2f6951357f0827e06430e1151ffb7'
  },
  {
    symbol: 'MAGK',
    name: 'Wizard Shares',
    tokenAddress: '0x0dba2b5162c4986acb5ddd1b4069de5ad749b47e',
    tokenDecimals: 18,
    exchangeAddress: '0x1ac13316a2c2beb2f701ccd4238dc34c74bb0c12'
  },
  {
    symbol: 'STR',
    name: 'Staker',
    tokenAddress: '0xbae235823d7255d9d48635ced4735227244cd583',
    tokenDecimals: 18,
    exchangeAddress: '0xc99b59ffae2abe1d66c2eb5a517be0f1b813c98b'
  },
  {
    symbol: 'LRC',
    name: 'LoopringCoin V2',
    tokenAddress: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    tokenDecimals: 18,
    exchangeAddress: '0xa539baaa3aca455c986bb1e25301cef936ce1b65'
  },
  {
    symbol: 'RMK',
    name: 'RomikaHungary',
    tokenAddress: '0x1ebda9b505ad2c6ccee86bfc18f58035dcfdc26a',
    tokenDecimals: 2,
    exchangeAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa'
  },
  {
    symbol: 'SHP',
    name: 'Sharpe Platform Token',
    tokenAddress: '0xef2463099360a085f1f10b076ed72ef625497a06',
    tokenDecimals: 18,
    exchangeAddress: '0x25a2273f0654b35c5daf8cd129f44e6bd32146f0'
  },
  {
    symbol: 'NTO',
    name: 'Fujinto',
    tokenAddress: '0x8a99ed8a1b204903ee46e733f2c1286f6d20b177',
    tokenDecimals: 18,
    exchangeAddress: '0xab76c739664681b0d84dc29250d4f71c5c249024'
  },
  {
    symbol: 'BAS',
    name: 'BitAsean',
    tokenAddress: '0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1',
    tokenDecimals: 8,
    exchangeAddress: '0x5b6752dd3c7e68694440ea90124aa8d16e0ba0cd'
  },
  {
    symbol: 'HC',
    name: 'HC',
    tokenAddress: '0x642e48713946ecdb12c0b8830e8cb64425327955',
    tokenDecimals: 0,
    exchangeAddress: '0xdec31635e50acc89eeef6ec079766aaa7703ae3d'
  },
  {
    symbol: 'OCEAN',
    name: 'OceanToken',
    tokenAddress: '0x985dd3d42de1e256d09e1c10f112bccb8015ad41',
    tokenDecimals: 18,
    exchangeAddress: '0xa59cc1618d144ccac2bfb46f61272cebf00d90d5'
  },
  {
    symbol: 'NUSD',
    name: 'Neutral',
    tokenAddress: '0x0c6144c16af288948c8fdb37fd8fec94bff3d1d9',
    tokenDecimals: 6,
    exchangeAddress: '0xce23d871009a52ab5560ba613a042e45e1f33539'
  },
  {
    symbol: 'AMN',
    name: 'Amon',
    tokenAddress: '0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c',
    tokenDecimals: 18,
    exchangeAddress: '0xe6c198d27a5b71144b40cfa2362ae3166728e0c8'
  },
  {
    symbol: 'PRTL',
    name: 'Partial Coin',
    tokenAddress: '0xf01d7939441a3b1b108c70a28dcd99c6a98ad4b4',
    tokenDecimals: 18,
    exchangeAddress: '0xc0a09103c80752e6e7c4265bfad7abecb37d4f06'
  },
  {
    symbol: 'SETH',
    name: 'Sether',
    tokenAddress: '0x78b039921e84e726eb72e7b1212bb35504c645ca',
    tokenDecimals: 18,
    exchangeAddress: '0xb25b24c590c3b92d18d41a9201922eb94ba884d2'
  },
  {
    symbol: 'NUG',
    name: 'Nuggets',
    tokenAddress: '0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1',
    tokenDecimals: 18,
    exchangeAddress: '0x0887f5a22d0f258f11fb1562b6b5504efd5ff021'
  },
  {
    symbol: 'FAITH',
    name: 'FaithCoin',
    tokenAddress: '0xe531642e9bb5d027e9c20e03284287b97919a9a5',
    tokenDecimals: 8,
    exchangeAddress: '0x61c2145f113f5f9bc970476817f990831d60d38c'
  },
  {
    symbol: 'LIT',
    name: 'LITION',
    tokenAddress: '0x763fa6806e1acf68130d2d0f0df754c93cc546b2',
    tokenDecimals: 18,
    exchangeAddress: '0x8f814b4f0c18968a6d7aada420ecee74a33ecd3f'
  },
  {
    symbol: 'WCK',
    name: 'Wrapped CryptoKitties',
    tokenAddress: '0x19d9b17497824081e291115044b567c4722cdaeb',
    tokenDecimals: 18,
    exchangeAddress: '0x92d70317913a2fb013f252b7a139ed1782edc6d6'
  },
  {
    symbol: 'PGF7T',
    name: 'PGF500 Token',
    tokenAddress: '0x9fadea1aff842d407893e21dbd0e2017b4c287b6',
    tokenDecimals: 18,
    exchangeAddress: '0x7232869cc7dc739b95dcdcd2f685f094ffd13811'
  },
  {
    symbol: 'TTZ',
    name: 'TestTokenZ8',
    tokenAddress: '0x5f16c1991dff3f6fc2ea3ca3f3e6da13e1ddcb39',
    tokenDecimals: 8,
    exchangeAddress: '0xfa35e10c144adbc51ddcb5ea2271329df9ad00a3'
  },
  {
    symbol: 'META',
    name: 'MetaCartel',
    tokenAddress: '0x5c437a92e1c60570a43bed78eb3f9e0ea5121b32',
    tokenDecimals: 0,
    exchangeAddress: '0xbe7d47c6f434d60ebb6877c5160a8ca05d83b789'
  },
  {
    symbol: 'TRAT',
    name: 'Tratok',
    tokenAddress: '0x0cbc9b02b8628ae08688b5cc8134dc09e36c443b',
    tokenDecimals: 5,
    exchangeAddress: '0x57a579ac8d28264784d61897b407ee693028a070'
  },
  {
    symbol: 'AWE',
    name: 'AweCoin',
    tokenAddress: '0xfa0f26d2334764ce9f9582d8ad0514b5712589cf',
    tokenDecimals: 0,
    exchangeAddress: '0xcf636d7519e5385816a66cfd0955bc74b4ef6054'
  },
  {
    symbol: 'LAH',
    name: 'LoveArtHate',
    tokenAddress: '0xf5bdb0aa9f0c05ec3fc8a31d7053652401982b4d',
    tokenDecimals: 18,
    exchangeAddress: '0xc022da71557968e0fce96c423699323a7b7c0f99'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x5a4ade4f3e934a0885f42884f7077261c3f4f66f',
    tokenDecimals: 18,
    exchangeAddress: '0x8da198a049426bfcf1522b0dc52f84beda6e38ff'
  },
  {
    symbol: 'LTCD',
    name: 'LitecoinDiamond',
    tokenAddress: '0x100a6e7a8710726bc28d0213da0b4f06702ce349',
    tokenDecimals: 0,
    exchangeAddress: '0xbd3ee2572bb1e4c68e3935d13dd8b121261ccd4e'
  },
  {
    symbol: 'WCK',
    name: 'Wrapped CryptoKitties',
    tokenAddress: '0x09fe5f0236f0ea5d930197dce254d77b04128075',
    tokenDecimals: 18,
    exchangeAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac'
  },
  {
    symbol: 'PIEG',
    name: 'Pi Edutainment Global',
    tokenAddress: '0xc68643bccde12df925469fe45df8a60812e64b36',
    tokenDecimals: 18,
    exchangeAddress: '0xd9ed4b169b897795e678266f9d2e1ace015d79e5'
  },
  {
    symbol: 'cUSDC',
    name: 'Compound USD Coin',
    tokenAddress: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    tokenDecimals: 8,
    exchangeAddress: '0xb791c10824296881f91bdbc16367bbd9743fd99b'
  },
  {
    symbol: 'MGN',
    name: 'Magnolia Token',
    tokenAddress: '0x80f222a749a2e18eb7f676d371f19ad7efeee3b7',
    tokenDecimals: 18,
    exchangeAddress: '0xdd80ca8062c7ef90fca2547e6a2a126c596e611f'
  },
  {
    symbol: 'ETHDai',
    name: 'ETHDaiRebalancingSetToken',
    tokenAddress: '0x8ddc86dba7ad728012efc460b8a168aba60b403b',
    tokenDecimals: 18,
    exchangeAddress: '0x06379be162b7d71fd188a48964978c7f0b56845a'
  },
  {
    symbol: 'BSH',
    name: 'Bullshit',
    tokenAddress: '0x91bc206f0a1ffbc399b4a20a41324ed1dad2b718',
    tokenDecimals: 0,
    exchangeAddress: '0x8f628ae9acdd5566063a39c0980160d60ab33b41'
  },
  {
    symbol: 'HUF',
    name: 'HungaryFiller',
    tokenAddress: '0x092ac353612d41e5ad1c2bb511b51a8619c639af',
    tokenDecimals: 2,
    exchangeAddress: '0x48a3ce9045e350b588af4e8edff81f6335c121fe'
  },
  {
    symbol: 'TESTGLD',
    name: 'TESTGOLD',
    tokenAddress: '0x0fac12df2fc6c2499cca50d7dbdc4d691c3a94f9',
    tokenDecimals: 18,
    exchangeAddress: '0x14db4410da6d1235bb0d6053695e50c1007986ae'
  },
  {
    symbol: 'PLR',
    name: 'PILLAR',
    tokenAddress: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17',
    tokenDecimals: 18,
    exchangeAddress: '0x9631959ba6e2624f004302af262cc5f8c81c9058'
  },
  {
    symbol: 'REAL',
    name: 'Real Estate Asset Ledger',
    tokenAddress: '0x9214ec02cb71cba0ada6896b8da260736a67ab10',
    tokenDecimals: 18,
    exchangeAddress: '0x5a7d213c2ca1b5068b489f8b55a7a1ec87ed9180'
  },
  {
    symbol: 'TM',
    name: 'Tokenmom',
    tokenAddress: '0x554b520b298be389f0d87bf3376eb4d6510456ec',
    tokenDecimals: 18,
    exchangeAddress: '0xc2e27d332d12bde9bac91d535fec25869c4d5794'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa',
    tokenDecimals: 18,
    exchangeAddress: '0xdf4d0de9b4529fcbc3458e4c8653a08745132c53'
  },
  {
    symbol: 'EXU',
    name: 'EXU Protocol',
    tokenAddress: '0xe06af951086ec3c488b50e31be29c07f8a260ca3',
    tokenDecimals: 16,
    exchangeAddress: '0x6ad8501ba523fbd9862e90c7cd39aa1d177cd3e2'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0x8b654789353b0b622667f105eaef9e97d3c33f44',
    tokenDecimals: 18,
    exchangeAddress: '0x86bf391ea35d762e345d6eb603abf1e6f444345d'
  },
  {
    symbol: 'SHT',
    name: 'Shadowlands Token',
    tokenAddress: '0xee91e47cff7ab926b45edce1687020a3748556c3',
    tokenDecimals: 18,
    exchangeAddress: '0x75f6fdfa5cbbd6466d33b013bec78bd92e9014b5'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0x2207bc0aac812fa3e03463d73d65a5fae9b9bf83',
    tokenDecimals: 18,
    exchangeAddress: '0x9cea564ad3a2a45be6a32155a29c49f7db24e48c'
  },
  {
    symbol: '🦄',
    name: 'Unicorns',
    tokenAddress: '0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7',
    tokenDecimals: 0,
    exchangeAddress: '0x737182f561e6aa7bb5618764a9e775ca0bc25572'
  },
  {
    symbol: 'BNTE',
    name: 'Bountie',
    tokenAddress: '0x3ccb1fe6d628444fb1c823a3ee3573ed0a21f338',
    tokenDecimals: 18,
    exchangeAddress: '0xd76eb30a740485f9f9348600bea83b5e8b954bb1'
  },
  {
    symbol: 'PSNT',
    name: 'PeasantCoin',
    tokenAddress: '0xabaab06fd0ba2c3bc22dcb66c2fd84c012a917f8',
    tokenDecimals: 18,
    exchangeAddress: '0xd3879a36df8ad7eeeabaf27623cb6d401c131ae5'
  },
  {
    symbol: 'LEO',
    name: 'Bitfinex LEO Token',
    tokenAddress: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
    tokenDecimals: 18,
    exchangeAddress: '0xb54084ac1ffd5682771cff0432a29110923de100'
  },
  {
    symbol: 'MIN',
    name: 'MINDOL',
    tokenAddress: '0x862da0a691bb0b74038377295f8ff523d0493eb4',
    tokenDecimals: 18,
    exchangeAddress: '0x4a3776c887eb285d9339ee63426a1bec5be3f2dd'
  },
  {
    symbol: 'COT',
    name: 'CoTrader',
    tokenAddress: '0x5c872500c00565505f3624ab435c222e558e9ff8',
    tokenDecimals: 18,
    exchangeAddress: '0xf7e033ab0f295e1e240f2be18a0650b2d2a1a4c3'
  },
  {
    symbol: 'XCN',
    name: 'XCOIN',
    tokenAddress: '0x748bab4b67948196aec77ee76526ce215b5eb63b',
    tokenDecimals: 6,
    exchangeAddress: '0x832d945efa8a9327acdb652d418b746eb6251958'
  },
  {
    symbol: 'BRNT',
    name: 'Burninator Token',
    tokenAddress: '0x2eb1e8fd394222df25638cfa8f0e5e7998a9dc1f',
    tokenDecimals: 18,
    exchangeAddress: '0x4d1aaa65b594fab18b74cd05f45a69aefdc1702a'
  },
  {
    symbol: 'EVTN',
    name: 'everiToken',
    tokenAddress: '0xb364701c2591f3553062cf0a212c0df523572f7c',
    tokenDecimals: 8,
    exchangeAddress: '0xe3f3f0b24a709eff923931775190656807301cc9'
  },
  {
    symbol: 'JL',
    name: 'JiuLove',
    tokenAddress: '0x8e16df6b7631b3d781a94be2260d1d4a96cb565a',
    tokenDecimals: 4,
    exchangeAddress: '0x1820c1c04632d56ac2fb191656e882f007a6ce58'
  },
  {
    symbol: 'STAR',
    name: 'Starbase',
    tokenAddress: '0xf70a642bd387f94380ffb90451c2c81d4eb82cbc',
    tokenDecimals: 18,
    exchangeAddress: '0x26fedc50bd36d2fa9997242b97ad62b87bf7a7b9'
  },
  {
    symbol: 'LEAP',
    name: 'LeapToken',
    tokenAddress: '0x78230e69d6e6449db1e11904e0bd81c018454d7a',
    tokenDecimals: 18,
    exchangeAddress: '0xb5e62826970f6b66ad3084d5f77970626be62a99'
  },
  {
    symbol: 'BOMB',
    name: 'BOMB',
    tokenAddress: '0x1c95b093d6c236d3ef7c796fe33f9cc6b8606714',
    tokenDecimals: 0,
    exchangeAddress: '0x078e8ac023f6457264c96719cbeb94dddeda9dd5'
  },
  {
    symbol: 'ILK',
    name: 'Inlock token',
    tokenAddress: '0xf784682c82526e245f50975190ef0fff4e4fc077',
    tokenDecimals: 8,
    exchangeAddress: '0x75fa9abc14fa165eca10d8fd60c9c0c2c83de124'
  },
  {
    symbol: 'YUP',
    name: 'YUP',
    tokenAddress: '0xd9a12cde03a86e800496469858de8581d3a5353d',
    tokenDecimals: 18,
    exchangeAddress: '0x26a9717f658eeed4ba5dbdba5908fb34149c44db'
  },
  {
    symbol: 'CDZ',
    name: 'Cisco Dollarz',
    tokenAddress: '0xa8f732224456a795061bf3964416c1b69c083dfa',
    tokenDecimals: 18,
    exchangeAddress: '0xb2007899c7148893e4a456574b320bae4bd0bd71'
  },
  {
    symbol: '٨',
    name: 'Dentacoin',
    tokenAddress: '0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6',
    tokenDecimals: 0,
    exchangeAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc'
  },
  {
    symbol: 'EURS',
    name: 'STASIS EURS Token',
    tokenAddress: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
    tokenDecimals: 2,
    exchangeAddress: '0x4b4c63ea99e2835b9d899610c22084513f71ee03'
  },
  {
    symbol: 'DCN',
    name: 'Dentacoin',
    tokenAddress: '0x621f61444a000b38aa467f585dacfadf3f976f75',
    tokenDecimals: 0,
    exchangeAddress: '0x5b7ebc24192955ac576ee074107a11b15e659f02'
  },
  {
    symbol: '0DARCOIN',
    name: '0 DardosHungary',
    tokenAddress: '0x96cd3fa86724f2f15d61b2a7faeb9e6cd0a0a587',
    tokenDecimals: 2,
    exchangeAddress: '0x0637d5e66da105431a1d444ee06e76349ab22ed4'
  },
  {
    symbol: 'QSP',
    name: 'Quantstamp Token',
    tokenAddress: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
    tokenDecimals: 18,
    exchangeAddress: '0x82db9fc4956fa40efe1e35d881004612b5cb2cc2'
  },
  {
    symbol: 'PHU',
    name: 'PenniHungary',
    tokenAddress: '0xd7de455acaff66370f91d90dd0df8f07d3c84fe7',
    tokenDecimals: 2,
    exchangeAddress: '0xfd00fa15894ca24862371a9dda75596ad31af86e'
  },
  {
    symbol: 'GRM',
    name: 'Green Money',
    tokenAddress: '0xc8c6fc3c4f6342c5291e747268625f979a888ebf',
    tokenDecimals: 18,
    exchangeAddress: '0xac432121efb452540ec96f5f0aa922d890c6a588'
  },
  {
    symbol: 'ASR',
    name: 'Astro',
    tokenAddress: '0x89c98f4529a41c7ee25d730d29bc39170ed11c60',
    tokenDecimals: 18,
    exchangeAddress: '0xeda88ddb13888c9a4de7304965e9315e69ea980e'
  },
  {
    symbol: '(333eth.io - https://t.me/Ethereum333/262)',
    name: 'www.pnztrust.com',
    tokenAddress: '0x5d210a4c794fa210c64712f1e395ec1136aaec4c',
    tokenDecimals: 0,
    exchangeAddress: '0x4177a0d8ace5425f463ad155538c5c6f2df187d1'
  },
  {
    symbol: 'findtherabbit.me',
    name: 'https://findtherabbit.me',
    tokenAddress: '0x2ff2b86c156583b1135c584fd940a1996fa4230b',
    tokenDecimals: 18,
    exchangeAddress: '0xaef9b172ac5c7e2d3058de906ec00a4499d2b62c'
  },
  {
    symbol: 'NUKE',
    name: 'HalfLife',
    tokenAddress: '0xc58c0fca06908e66540102356f2e91edcaeb8d81',
    tokenDecimals: 18,
    exchangeAddress: '0x39f70a026e6e2aac3453aeb8e563025afb542f9f'
  },
  {
    symbol: 'LEI',
    name: 'LEIREL',
    tokenAddress: '0x532ba7b9534a31e0898a9a64e0a898d4bb8db34d',
    tokenDecimals: 0,
    exchangeAddress: '0x8baffadc6694b1b00849119e459fda5df8a8e4af'
  },
  {
    symbol: 'NOT',
    name: 'Not',
    tokenAddress: '0x0027449bf0887ca3e431d263ffdefb244d95b555',
    tokenDecimals: 18,
    exchangeAddress: '0xd88958eac44250d46b2a6cc05873663dd1117acf'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x42456d7084eacf4083f1140d3229471bba2949a8',
    tokenDecimals: 18,
    exchangeAddress: '0x4740c758859d4651061cc9cdefdba92bdc3a845d'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc',
    tokenDecimals: 18,
    exchangeAddress: '0x1737f4b853d58785595612aa07c4ca2ffd561b9c'
  },
  {
    symbol: 'STBTCDai',
    name: 'STBTCDaiRebalancingSetToken',
    tokenAddress: '0x20649d97b1393105cf92a5083fd2aff7c99ebe56',
    tokenDecimals: 18,
    exchangeAddress: '0xe2e496e3fc550b68feeeddad7db42d7063e6729e'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe',
    tokenDecimals: 18,
    exchangeAddress: '0xdf788db9789078d631ab7d4e39d52f7a18d91366'
  },
  {
    symbol: 'XS2',
    name: 'XS2 Token',
    tokenAddress: '0x448bd15ac18ce6386c27914c14c18fd9148df75f',
    tokenDecimals: 18,
    exchangeAddress: '0x06f6685eaefa8ece41d2ebbb0c707203f731be01'
  },
  {
    symbol: 'RING',
    name: 'Darwinia Network Native Token',
    tokenAddress: '0x9469d013805bffb7d3debe5e7839237e535ec483',
    tokenDecimals: 18,
    exchangeAddress: '0xebd8aa50b26bfa63007d61eba777a9dde7e43c64'
  },
  {
    symbol: 'XGN',
    name: 'TransGen',
    tokenAddress: '0x9b4e167aea30f94929017f747f5496284141aa96',
    tokenDecimals: 18,
    exchangeAddress: '0x0ee1fcf75535c80163c1bd9f5a127106b8c3c49f'
  },
  {
    symbol: 'DAPP',
    name: '360APP',
    tokenAddress: '0x5d0fa08aeb173ade44b0cf7f31d506d8e04f0ac8',
    tokenDecimals: 18,
    exchangeAddress: '0x68f21a820436d4a43aca3d4e59f814027ecae7ac'
  },
  {
    symbol: 'RSR',
    name: 'Reserve Rights',
    tokenAddress: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
    tokenDecimals: 18,
    exchangeAddress: '0xeeeec06f48656e921b39e30d9a205cb2b08ea465'
  },
  {
    symbol: 'LUNA',
    name: 'Luna',
    tokenAddress: '0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a',
    tokenDecimals: 18,
    exchangeAddress: '0x89c1c0741f1e044a7bd8b8d96d975792ea0dd6d5'
  },
  {
    symbol: 'HOPP',
    name: 'Hopper Token',
    tokenAddress: '0x33b282c88de3e8ed471c24e43f60816dcabe12f4',
    tokenDecimals: 18,
    exchangeAddress: '0xbfb7eddf9d97ddc9e807b903a7d68becda14660e'
  },
  {
    symbol: 'QUAF',
    name: 'Quaffle',
    tokenAddress: '0x4492e10fd69be9ae85d75bdcda2d9d1e68c0eea6',
    tokenDecimals: 18,
    exchangeAddress: '0xdf20b0ec6cd1505a1b2d15ea1a4aaa67ae2c0a3b'
  },
  {
    symbol: 'BTCETH5050',
    name: 'BTC ETH Equal Weight Set',
    tokenAddress: '0xc06aec5191be16b94ffc97b6fc01393527367365',
    tokenDecimals: 18,
    exchangeAddress: '0x539f7952f7b21c48aff332cd5d9cf6e28eba290f'
  },
  {
    symbol: 'PRE',
    name: 'Premine',
    tokenAddress: '0x30765406d51091ed78ff13c107731daf3be5ef16',
    tokenDecimals: 18,
    exchangeAddress: '0x0182865fa09594e4b27496889cbf0bbc818813c6'
  },
  {
    symbol: 'ADS',
    name: 'ADSCASH',
    tokenAddress: '0xec7954f452a6473c21c4078501f0bcf8b266bc99',
    tokenDecimals: 2,
    exchangeAddress: '0x528dd20d7e58e32d33b2e7f2684ce792dfeb44c5'
  },
  {
    symbol: 'BTK',
    name: 'BitcoinToken',
    tokenAddress: '0xdb8646f5b487b5dd979fac618350e85018f557d4',
    tokenDecimals: 18,
    exchangeAddress: '0x85810ea52373a8c5184ea8bf2b3231587fa9ff04'
  },
  {
    symbol: ' OMG',
    name: 'OmiseGO',
    tokenAddress: '0x2392f6abf07b5fce14603d0e28fc952205b8703d',
    tokenDecimals: 0,
    exchangeAddress: '0xb24803f59d661e0b3220aa06ab4a06d9482c9ac4'
  },
  {
    symbol: 'HUG',
    name: 'HungaryGold',
    tokenAddress: '0x858b1f24940e64e08b6941946a29aa352f218ae6',
    tokenDecimals: 2,
    exchangeAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe'
  },
  {
    symbol: 'ACC',
    name: 'Accelerator',
    tokenAddress: '0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2',
    tokenDecimals: 18,
    exchangeAddress: '0xe9025d3da6b90cef5b7b695f45ace93bff76e937'
  },
  {
    symbol: 'HRD',
    name: 'Hoard Token',
    tokenAddress: '0xc617d51e3a1f621da8ae67b2f652d6ac02eb8d95',
    tokenDecimals: 18,
    exchangeAddress: '0x303f47c87b66f53ad06f19a3e3d1764437ac43d6'
  },
  {
    symbol: 'ZUR-D',
    name: 'Zur Drafts by Zurcoin Core',
    tokenAddress: '0x3a4b527dcd618ccea50adb32b3369117e5442a2f',
    tokenDecimals: 0,
    exchangeAddress: '0xddd27201dc2f4a3a0afdcff8a807daf0b84c5dc9'
  },
  {
    symbol: 'HCM',
    name: 'Hcmcoin',
    tokenAddress: '0x6126747b7d21c5860cbffbb7654fbc8d3e63a2bb',
    tokenDecimals: 18,
    exchangeAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9'
  },
  {
    symbol: 'CNY',
    name: 'cnycoin',
    tokenAddress: '0x70da15db5377ac51131c2fd0ade87ec543ca9482',
    tokenDecimals: 18,
    exchangeAddress: '0xb682483ec02fe64f0bcbbfd1cbfa9c480aaa30c3'
  },
  {
    symbol: 'ELITE',
    name: 'Ethereum Lite',
    tokenAddress: '0x0a76aad21948ea1ef447d26dee91a54370e151e0',
    tokenDecimals: 18,
    exchangeAddress: '0x5301a674fdaf0020c9e737b01129a7889c5ff523'
  },
  {
    symbol: 'HAND',
    name: 'ShowHand',
    tokenAddress: '0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7',
    tokenDecimals: 0,
    exchangeAddress: '0xe20bda8c541bda6467d9034319e620e33b969d28'
  },
  {
    symbol: 'DHU',
    name: 'DollarHungary',
    tokenAddress: '0x6773770653c9995f602aa0058349b9b68962db96',
    tokenDecimals: 2,
    exchangeAddress: '0x1f068f775aa7b4b7a5f388e6ce04615492343175'
  },
  {
    symbol: 'LNX',
    name: 'Lunox',
    tokenAddress: '0x72e646b78a2b58cbd9b0282c2e9c812bc8033293',
    tokenDecimals: 18,
    exchangeAddress: '0x1d78ea3bbed15d226dabb9419942aec69c756c8b'
  },
  {
    symbol: 'SUC',
    name: 'sucoin',
    tokenAddress: '0xb8d2d65d4d65124690f8eab76bea5d27cae5cc98',
    tokenDecimals: 18,
    exchangeAddress: '0x1535758f55d879a00774fb27617edc4b968306be'
  },
  {
    symbol: 'XBR',
    name: 'BIT DINERO',
    tokenAddress: '0x86ad632c36425f0e0af2fcd6f55c160e10c04b26',
    tokenDecimals: 18,
    exchangeAddress: '0xce67eb9f9f097afca846483082bdd5ff5f85de6d'
  },
  {
    symbol: 'RLX',
    name: 'Relex',
    tokenAddress: '0x4a42d2c580f83dce404acad18dab26db11a1750e',
    tokenDecimals: 18,
    exchangeAddress: '0x9f8db6f625555230f549a9b1e2e314e0a3aaf68a'
  },
  {
    symbol: 'FEX',
    name: 'Felix',
    tokenAddress: '0xfc664cd8dffdd8fb4d1644e179400d386ca568eb',
    tokenDecimals: 8,
    exchangeAddress: '0xbe2360f4b16c33f11203d982bddb47f1b9197fea'
  },
  {
    symbol: 'FIXED',
    name: 'Example Fixed Supply Token',
    tokenAddress: '0x0b403f3f213e75cd25b700093df79a95d2013357',
    tokenDecimals: 18,
    exchangeAddress: '0x81742f8d52cb86f9223ee6e579a15e104775346b'
  },
  {
    symbol: 'EOS',
    name: '',
    tokenAddress: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
    tokenDecimals: 18,
    exchangeAddress: '0x8cf1b131c8a110458750dfcbb8f0e165d4d024ef'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9',
    tokenDecimals: 18,
    exchangeAddress: '0x21e5133635d0e821a031e3d80b1a3da39c898f3a'
  },
  {
    symbol: 'ZEON',
    name: 'ZEON',
    tokenAddress: '0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532',
    tokenDecimals: 18,
    exchangeAddress: '0x125c074a1d2060cf4ff5632fa0b3edd55918051a'
  },
  {
    symbol: 'FXC',
    name: 'Flexacoin',
    tokenAddress: '0x4a57e687b9126435a9b19e4a802113e266adebde',
    tokenDecimals: 18,
    exchangeAddress: '0xb878876e0627e362fd3d1afeebdf0bd69bba1911'
  },
  {
    symbol: 'VELS',
    name: 'Velareum',
    tokenAddress: '0x30e39d0a38db74ac783f42c13dde1ea06e858992',
    tokenDecimals: 2,
    exchangeAddress: '0x3c37e7c25dc158d7848fbd1c74578d9ad10ef91d'
  },
  {
    symbol: 'FCT',
    name: 'Fibonum Cycling Token',
    tokenAddress: '0x3b820a1e03025d0fe6bc211b2550626b68a3b27c',
    tokenDecimals: 18,
    exchangeAddress: '0x0dbec05cc338244359febf0d9d9c85fc19f6f2db'
  },
  {
    symbol: 'ZCO',
    name: 'Zebi Coin',
    tokenAddress: '0x2008e3057bd734e10ad13c9eae45ff132abc1722',
    tokenDecimals: 8,
    exchangeAddress: '0x30cfcb60496aea8bada3be97e8ca3f71560bf4ef'
  },
  {
    symbol: 'BZN',
    name: 'Benzene',
    tokenAddress: '0x1bd223e638aeb3a943b8f617335e04f3e6b6fffa',
    tokenDecimals: 18,
    exchangeAddress: '0xb28d4a770328e7a6ede7fc51d10f977ba755774e'
  },
  {
    symbol: 'cZRX',
    name: 'Compound 0x',
    tokenAddress: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
    tokenDecimals: 8,
    exchangeAddress: '0x4e700f99bcecc5bad8e6a92ffc6354dda68cbc35'
  },
  {
    symbol: 'KOI',
    name: 'KOI',
    tokenAddress: '0x0be34c15f069663ff05ef5ea1e99ab3dd2d0fdce',
    tokenDecimals: 8,
    exchangeAddress: '0x87e8497a5d3ff985adf13b87992d473b9294970a'
  },
  {
    symbol: 'TBOMB',
    name: 'TBOMB',
    tokenAddress: '0x583a9c440893ed5d563e68a60b12f1cc323d4862',
    tokenDecimals: 0,
    exchangeAddress: '0x79ecb46aa1adbe366824051642aa6de38525e48f'
  },
  {
    symbol: 'FUTC1',
    name: 'Futereum Centurian 1',
    tokenAddress: '0xf880d3c6dcda42a7b2f6640703c5748557865b35',
    tokenDecimals: 0,
    exchangeAddress: '0xa2368e017f3e040228fc5666cef4fc0e29f38af1'
  },
  {
    symbol: 'FREE',
    name: 'Free Coin',
    tokenAddress: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
    tokenDecimals: 18,
    exchangeAddress: '0x17f11fca7a66e8049484ae0a74e0013c5719ec77'
  },
  {
    symbol: 'AVVP',
    name: 'Andrey Voronkov Ventures Promo',
    tokenAddress: '0x783ba0062326861ee76e0e15429594922e9fe2f5',
    tokenDecimals: 18,
    exchangeAddress: '0xc70586daa52d4fbc4db2b20acaf7e1521f0c5854'
  },
  {
    symbol: 'AVVP',
    name: 'Andrey Voronkov Ventures Promo',
    tokenAddress: '0xb0cf07e9a74f214ec799a32fff225ddbc8d04ec8',
    tokenDecimals: 18,
    exchangeAddress: '0x24aae710b58dca6fc2bd18489a5503b2ecc2a094'
  },
  {
    symbol: 'HYDRO',
    name: 'Hydro',
    tokenAddress: '0xebbdf302c940c6bfd49c6b165f457fdb324649bc',
    tokenDecimals: 18,
    exchangeAddress: '0xda28e640d58b4035bf60ba5900cb9a7c6618ec2a'
  },
  {
    symbol: 'WCW',
    name: 'Wrapped CheezeWizards',
    tokenAddress: '0x0ac19d0617af7f95f154ae2cdfaa6f2c9dcec8f3',
    tokenDecimals: 18,
    exchangeAddress: '0xe5c8509b84eb5789e66bdce57927357902212c7a'
  },
  {
    symbol: 'VXV',
    name: 'VectorspaceAI',
    tokenAddress: '0x7d29a64504629172a429e64183d6673b9dacbfce',
    tokenDecimals: 18,
    exchangeAddress: '0x7b9b5084aff35d3e9d87fb1e384853b806120bed'
  },
  {
    symbol: 'HATE',
    name: 'HATE',
    tokenAddress: '0xc2733c372a6cf303551073930799282fefe2b67a',
    tokenDecimals: 0,
    exchangeAddress: '0x9ebedf666dd5bfa7c3016eb2086e349421f994bb'
  },
  {
    symbol: 'DMHCO',
    name: 'DMHCO',
    tokenAddress: '0x5c679a0a79d495affe049c02483519d51e37f32b',
    tokenDecimals: 18,
    exchangeAddress: '0x8138e39124c65d7fe6874b2f5c47d5fad2581060'
  },
  {
    symbol: 'RUSH',
    name: 'HashRush',
    tokenAddress: '0xcfcd43d7ee21416a71c2eb9888587d52716fc77a',
    tokenDecimals: 8,
    exchangeAddress: '0x0114a3b4e4fa4cf9721bd38ad40474e22ea72a16'
  },
  {
    symbol: 'CYFM',
    name: 'CYBERFM',
    tokenAddress: '0x3f06b5d78406cd97bdf10f5c420b241d32759c80',
    tokenDecimals: 18,
    exchangeAddress: '0xbcd5a12038e57f9f2a1c38199663730cc9d7043b'
  },
  {
    symbol: 'ETHPLO',
    name: 'ETHplode',
    tokenAddress: '0xe0c6ce3e73029f201e5c0bedb97f67572a93711c',
    tokenDecimals: 6,
    exchangeAddress: '0x59af19879e9dcd298b9f1ad2b1ee5f5f7ed2d332'
  },
  {
    symbol: 'TKG',
    name: 'TokenGo',
    tokenAddress: '0x48b4a529915d8f19452248c3d2f825786f6c8d2a',
    tokenDecimals: 18,
    exchangeAddress: '0xda6311e9666fa1cf6f5436046a093297840cc21b'
  },
  {
    symbol: 'AMB',
    name: 'Ambitious',
    tokenAddress: '0xcd45962fcd817e8fea6bbe1a4bebdff1bedff232',
    tokenDecimals: 18,
    exchangeAddress: '0xc1bc313c8c6eab4316af2c4c7a3820744edc6188'
  },
  {
    symbol: 'ZBUX',
    name: 'Zuck Bucks',
    tokenAddress: '0x7090a6e22c838469c9e67851d6489ba9c933a43f',
    tokenDecimals: 0,
    exchangeAddress: '0xc2a27366deb7530bd7f812c69d48b0215e397771'
  },
  {
    symbol: 'BEFX',
    name: 'Belifex',
    tokenAddress: '0xb91c2a2b953d72f3ef890490669a0a41b0add5f7',
    tokenDecimals: 8,
    exchangeAddress: '0x9cc45bed4ce6fc354c7cfa8ccf1f28fa7c581a12'
  },
  {
    symbol: 'TECH',
    name: 'FTI NEWS Token',
    tokenAddress: '0xa1ba7186eec1be5114b0cf49b95b23adc4131b51',
    tokenDecimals: 10,
    exchangeAddress: '0x05ddab88b4d6fea1a3a92d8fccc6e594d5aa98f8'
  },
  {
    symbol: 'ETX',
    name: 'Etherneum',
    tokenAddress: '0xb33a7597d65f8d823b71fc6e3b6a5039298ffd23',
    tokenDecimals: 18,
    exchangeAddress: '0x7c77de084425871781eb5f36f25ee0ecf8561b8a'
  },
  {
    symbol: 'TAO',
    name: 'TAOCOIN',
    tokenAddress: '0x155454dd1a347ac93c3a0083871bb8498e50df74',
    tokenDecimals: 8,
    exchangeAddress: '0x4fd9f6bc7fe5f1c105a1f37a07d720d81d22f58a'
  },
  {
    symbol: 'FLYTO',
    name: 'Flyto',
    tokenAddress: '0x313c068f339c6a1fbf7be5a9504b506f728dbc9d',
    tokenDecimals: 18,
    exchangeAddress: '0x656d1150e7872aa23b49c35f96d6fd949d8d44bc'
  },
  {
    symbol: 'sAUD',
    name: 'Synth sAUD',
    tokenAddress: '0xed4699f180a14b5974c26f494483f9c327fd381a',
    tokenDecimals: 18,
    exchangeAddress: '0x972dce6be5f8b03893587f2e51b68f9fb281fc1e'
  },
  {
    symbol: 'SVC',
    name: 'Sport Value Coin',
    tokenAddress: '0x11263b92661fa1fa96800139c9d6b510953a35eb',
    tokenDecimals: 18,
    exchangeAddress: '0xd968eda9303509a529e77a59226f26b99a40a63f'
  },
  {
    symbol: 'FUTB1',
    name: 'Futereum BTC 1',
    tokenAddress: '0x30c6fe3ac0260a855c90cab79aa33e76091d4904',
    tokenDecimals: 18,
    exchangeAddress: '0x541b0a0088d82f19309758454d3a147636fa7dec'
  },
  {
    symbol: 'FUTM1',
    name: 'Futereum Markets 1',
    tokenAddress: '0xee418a19d6620aa478489032c2cb63464dd3e690',
    tokenDecimals: 18,
    exchangeAddress: '0x54ac92df89d04a851163dd63b6b404844cf1caf3'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xb19aae54d4ee672348d749e98cf90c584ef1b1ba',
    tokenDecimals: 18,
    exchangeAddress: '0x0a49bcd767dfee1823b87758fe537a80c2626c18'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x4c858151a41ea6f258e904ef4e2d3c310639cced',
    tokenDecimals: 18,
    exchangeAddress: '0x72a644cac9da1fd09925eaad5d92414e3f91c0ee'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xd982e7d6ebda6102cf2ca8428a4c44c28f2c490a',
    tokenDecimals: 18,
    exchangeAddress: '0x14ad6e9ddaf5cd668acb6ad0ab149ee248f9d712'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x73f46f17b1a9712262dc3410b37eae4233f36ff9',
    tokenDecimals: 18,
    exchangeAddress: '0xf8c5d69311d80d633b5caa147965caa2e576e6d1'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0xd72172f90d5436b9abb3fbcf818d7e05fa1fc189',
    tokenDecimals: 18,
    exchangeAddress: '0xb3dca00babb56c28fb48bea9fdcd12c4bd1bbbb0'
  },
  {
    symbol: 'GA',
    name: 'Generic Altcoin',
    tokenAddress: '0x32c62c965db5fdac0f94e6276d6884070068d4be',
    tokenDecimals: 18,
    exchangeAddress: '0xf15bf23ae81e2ddd7a0e7995b4ab42d2903c9da3'
  },
  {
    symbol: 'BURN',
    name: 'The Burn Token',
    tokenAddress: '0x4f7c5bd3f7d62a9c984e265d73a86f5515f3e92b',
    tokenDecimals: 0,
    exchangeAddress: '0x2f5b009d42917452f4f057b0998dfad4d84c7662'
  },
  {
    symbol: 'VOID',
    name: 'Void Token',
    tokenAddress: '0xb8796542765747ed7f921ff12faff057b5d624d7',
    tokenDecimals: 18,
    exchangeAddress: '0xe8878ddc1e72fb4d14a1ca57fa17a247ca53aec1'
  },
  {
    symbol: 'NEWB',
    name: 'Newb',
    tokenAddress: '0x5a63eb358a751b76e58325eadd86c2473fc40e87',
    tokenDecimals: 18,
    exchangeAddress: '0x382f41a91a049c0e82265d0afa74c92a8bcc160a'
  },
  {
    symbol: 'RNDR',
    name: 'Render Token',
    tokenAddress: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24',
    tokenDecimals: 18,
    exchangeAddress: '0xa117ffe7d3a756f665ef2e95bb770ab20008641a'
  },
  {
    symbol: 'VLTR',
    name: 'VULTUR',
    tokenAddress: '0x657ffc4fb2c4625adbb3452556f7a482b76e5011',
    tokenDecimals: 2,
    exchangeAddress: '0x804682061c0f8c4025c268471a907dce11539187'
  },
  {
    symbol: 'OGO',
    name: 'Origo',
    tokenAddress: '0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e',
    tokenDecimals: 18,
    exchangeAddress: '0xc1a08ea89e5d550d22471159c995d2acaa6e43d0'
  },
  {
    symbol: 'NPTX',
    name: 'NPT',
    tokenAddress: '0x1e00a1bc70de783963c5c9b28b5162aaca7570a2',
    tokenDecimals: 6,
    exchangeAddress: '0x08c11f9c436072f45bb57e4a163989e88e05c883'
  },
  {
    symbol: 'PRIX',
    name: 'Privatix',
    tokenAddress: '0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a',
    tokenDecimals: 8,
    exchangeAddress: '0x7c4ee2b53ea4a7893b2794ba5fcc305ef426be0f'
  },
  {
    symbol: 'FIRE',
    name: 'Fire Token',
    tokenAddress: '0x125f9d5daa039bdb79d36baff667e9e0bbcea998',
    tokenDecimals: 18,
    exchangeAddress: '0xb33122fcded005785c40c18c6871ba15dad4fdcc'
  },
  {
    symbol: 'VIDT',
    name: 'V-ID Token',
    tokenAddress: '0x445f51299ef3307dbd75036dd896565f5b4bf7a5',
    tokenDecimals: 18,
    exchangeAddress: '0x0cfa80b92a082c680e109d66a29c54fb179d21d0'
  },
  {
    symbol: 'CYS',
    name: 'Cycloshield Coin',
    tokenAddress: '0x8c53931237b6360345b01f1cfa27f7b10f89be78',
    tokenDecimals: 18,
    exchangeAddress: '0x14e7b9e818604ab55e8af1e2877fdec2b397b14d'
  },
  {
    symbol: 'DADI',
    name: 'DADI',
    tokenAddress: '0xfb2f26f266fb2805a387230f2aa0a331b4d96fba',
    tokenDecimals: 18,
    exchangeAddress: '0xed06fe62f03b35c7582c9b63b1927eafbcb42a01'
  },
  {
    symbol: 'EVN',
    name: 'Envion',
    tokenAddress: '0xd780ae2bf04cd96e577d3d014762f831d97129d0',
    tokenDecimals: 18,
    exchangeAddress: '0x55fff16e7ac0fe75b2a9598b5685531e27853df1'
  },
  {
    symbol: 'REMCO',
    name: 'Remittance Token',
    tokenAddress: '0xbbc3a290c7d2755b48681c87f25f9d7f480ad42f',
    tokenDecimals: 8,
    exchangeAddress: '0x06bca45ddf2ff3f1155f556cec95c8db86ab8167'
  },
  {
    symbol: 'KHC',
    name: 'KaiHua Coin',
    tokenAddress: '0x6881e457e6b0f14bb48537ae0809c8c016a43c2a',
    tokenDecimals: 3,
    exchangeAddress: '0x79d85477c2565ed9095bf7837fdcad830e9b3c4f'
  },
  {
    symbol: 'CLM',
    name: 'Claymore',
    tokenAddress: '0x0ed8343dfdee32e38b4c4ce15a3b00a59e90f3db',
    tokenDecimals: 18,
    exchangeAddress: '0x2433bd130055dc9df537d431908fbf64782df2f6'
  },
  {
    symbol: 'PHT',
    name: 'PhotochainToken',
    tokenAddress: '0x88652845a5495983b70aebbf25102361552d5e54',
    tokenDecimals: 18,
    exchangeAddress: '0x213988470530c2c098e6f22f15437930cdbcca26'
  },
  {
    symbol: 'COS',
    name: 'COS',
    tokenAddress: '0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f',
    tokenDecimals: 18,
    exchangeAddress: '0x7f9a00bb057424b9b1382591cfb8761d9b08a434'
  },
  {
    symbol: 'INC8',
    name: 'Incinerate Token',
    tokenAddress: '0x072ccd6247e88114590d08d6a80b7a609473c17e',
    tokenDecimals: 2,
    exchangeAddress: '0xda6cb34c6f28e5282db47c0d8f40cdfd776fa004'
  },
  {
    symbol: 'FRECNX',
    name: 'FreldoCoinX',
    tokenAddress: '0xd8b8e1eca89da014e67fdbc2014eaa8e171079bf',
    tokenDecimals: 18,
    exchangeAddress: '0x4aa12c2fb57060c51402af93a1d6f3803f05d453'
  },
  {
    symbol: 'FUTR',
    name: 'Futereum Token',
    tokenAddress: '0xc83355ef25a104938275b46cffd94bf9917d0691',
    tokenDecimals: 18,
    exchangeAddress: '0x12718364abaa8c9947d6009494e15dd8472438f6'
  },
  {
    symbol: 'JIBRA',
    name: 'JIBRAPAY',
    tokenAddress: '0x3d917b9a3cee461870149b4b28556e4e2d112c13',
    tokenDecimals: 18,
    exchangeAddress: '0x833b576ea7c2ff166ad7c624f8d4b14fb371aa30'
  },
  {
    symbol: 'AMPL',
    name: 'Ampleforth',
    tokenAddress: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    tokenDecimals: 9,
    exchangeAddress: '0x042dbbdc27f75d277c3d99efe327db21bc4fde75'
  },
  {
    symbol: 'CER',
    name: 'Cereneum',
    tokenAddress: '0xd9d4a7ca154fe137c808f7eedbe24b639b7af5a6',
    tokenDecimals: 8,
    exchangeAddress: '0xa00d014e48dadea7879d7142bf5bac5207c8ff29'
  },
  {
    symbol: 'DGT',
    name: 'Dogetoken',
    tokenAddress: '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e',
    tokenDecimals: 18,
    exchangeAddress: '0x180b93d88e19bff7abde971408716131ed7e2186'
  },
  {
    symbol: 'CHU',
    name: 'CentHungary',
    tokenAddress: '0x3d9a801720cdbce293edbc7d8dcd82d6ceaabbd3',
    tokenDecimals: 2,
    exchangeAddress: '0xd6c8e96d3cdebabea1a339a34a7e0c76975a504c'
  },
  {
    symbol: 'EOST',
    name: 'EOS TRUST',
    tokenAddress: '0x87210f1d3422ba75b6c40c63c78d79324dabcd55',
    tokenDecimals: 18,
    exchangeAddress: '0x25daa8ef739c741fc136162bf183b58dd249b4f7'
  },
  {
    symbol: 'GOLD',
    name: 'Dragonereum Gold',
    tokenAddress: '0x150b0b96933b75ce27af8b92441f8fb683bf9739',
    tokenDecimals: 18,
    exchangeAddress: '0x7b1c3192efa401ea37951fedc8007bcbec2dbb6d'
  },
  {
    symbol: 'MMR',
    name: 'Make Me Rich Token',
    tokenAddress: '0xfe34099b8a1eb4cac66168f46014340ba425fa8f',
    tokenDecimals: 18,
    exchangeAddress: '0x7ff5079450e672f72801bf82899da5a3b6d464a5'
  },
  {
    symbol: 'AAA',
    name: 'Tripple A',
    tokenAddress: '0x22ac30b3afecbbf1cb69bc697bef0bd3e5bec349',
    tokenDecimals: 18,
    exchangeAddress: '0x42ad257cab68d8c4ed11ed1abdd89713b4fc86db'
  },
  {
    symbol: 'SGM',
    name: 'Sgame Token',
    tokenAddress: '0x72b509b59bbfe847a1d68eae96161adff8675064',
    tokenDecimals: 18,
    exchangeAddress: '0x3eb5c28b84041dd801fc1208a60c8dab63737acc'
  },
  {
    symbol: 'BLO',
    name: 'BLONDCOIN',
    tokenAddress: '0x1c3bb10de15c31d5dbe48fbb7b87735d1b7d8c32',
    tokenDecimals: 18,
    exchangeAddress: '0x950cebfa171428216af64867deb6d13f3a27c54a'
  },
  {
    symbol: 'SUSU',
    name: 'Winsusu Token',
    tokenAddress: '0x7e1d8a8b01374ab1aa26b40e7c6733e6c168568a',
    tokenDecimals: 18,
    exchangeAddress: '0x0a2a5291039c3d9c92fcd892063c25ec0fd240b7'
  },
  {
    symbol: 'WMC',
    name: 'Wrapped MarbleCards',
    tokenAddress: '0x8aedb297fed4b6884b808ee61faf0837713670d0',
    tokenDecimals: 18,
    exchangeAddress: '0xa0db39d28dacec1974f2a1f6bac7d33f37c102ec'
  },
  {
    symbol: 'BAX',
    name: 'BAX',
    tokenAddress: '0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb',
    tokenDecimals: 18,
    exchangeAddress: '0x7a43ce3ef79ad8b7adf23f4c1bdd0446fd7e4d76'
  },
  {
    symbol: 'REDGIL',
    name: 'REDGIL',
    tokenAddress: '0x5457d6324e77de6823c5341b6703cded16422829',
    tokenDecimals: 18,
    exchangeAddress: '0x7d365fa74360a0740d06552e90c7f320097a0fb3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x639977a3a318ecdde675f53a77fbe51716b16bfe'
  },
  {
    symbol: 'FUZE',
    name: 'FUZE Token',
    tokenAddress: '0x187d1018e8ef879be4194d6ed7590987463ead85',
    tokenDecimals: 18,
    exchangeAddress: '0x520e5f50adc6775723e93da5c81c0b075be28dab'
  },
  {
    symbol: 'XENM',
    name: 'Xenium',
    tokenAddress: '0xd69834f67b2f5a760617cc9a9bf5ae3a3bb256c2',
    tokenDecimals: 18,
    exchangeAddress: '0x78eff350b7378e913d3dbc71ae5a3c179b7d70d2'
  },
  {
    symbol: 'FLXA',
    name: 'FLUXCOIN-A',
    tokenAddress: '0x2a4f61ca0e03e260e6be91692e430293d73998f0',
    tokenDecimals: 10,
    exchangeAddress: '0x10dbe7aaedb8d291f4f4da10cbc85c11ca740200'
  },
  {
    symbol: 'TYPE',
    name: 'Typerium',
    tokenAddress: '0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f',
    tokenDecimals: 4,
    exchangeAddress: '0x48d5425c9ed8bf062ea123ac568b42bf8bc02261'
  },
  {
    symbol: 'IDXM',
    name: 'IDEX Membership',
    tokenAddress: '0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea',
    tokenDecimals: 8,
    exchangeAddress: '0xed1af8c036fcaebc5be8fcbf4a85d08f67ce5fa1'
  },
  {
    symbol: 'KEY',
    name: 'SelfKey',
    tokenAddress: '0x4cc19356f2d37338b9802aa8e8fc58b0373296e7',
    tokenDecimals: 18,
    exchangeAddress: '0x4f27a38f33f668ea91fa34ef29d8ff7b444d6327'
  },
  {
    symbol: 'CRED',
    name: 'Verify Token',
    tokenAddress: '0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd',
    tokenDecimals: 18,
    exchangeAddress: '0xb490fb04a938bae28b0d77c3d86faf47c1751485'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0x2dea20405c52fb477ecca8fe622661d316ac5400',
    tokenDecimals: 18,
    exchangeAddress: '0x9faa0cb10912de7ad1d86705c65de291a9088a61'
  },
  {
    symbol: 'AF',
    name: 'Alex',
    tokenAddress: '0xf76d54904e4679f1e583bb0f07a8c58cae1dcf3e',
    tokenDecimals: 18,
    exchangeAddress: '0x6487856187287a660797ed73504e1497d041dc5f'
  },
  {
    symbol: 'XNN',
    name: 'XENON',
    tokenAddress: '0xab95e915c123fded5bdfb6325e35ef5515f1ea69',
    tokenDecimals: 18,
    exchangeAddress: '0x176b6cb18ac2c6d2661826c2883028b63d8f2811'
  },
  {
    symbol: 'CAT',
    name: 'BitClave',
    tokenAddress: '0x1234567461d3f8db7496581774bd869c83d51c93',
    tokenDecimals: 18,
    exchangeAddress: '0xa86d1180a63834dac06ba67ddb777565a80a05ef'
  },
  {
    symbol: 'MKT',
    name: 'MARKET Protocol Token',
    tokenAddress: '0xba23485a04b897c957918fde2dabd4867838140b',
    tokenDecimals: 18,
    exchangeAddress: '0x7d6fa7b0a7dec3c0758f0b57bb446f4cee70d330'
  },
  {
    symbol: 'XCT',
    name: 'xCrypt Token',
    tokenAddress: '0xd2bb16cf38ca086cab5128d5c25de9477ebd596b',
    tokenDecimals: 18,
    exchangeAddress: '0xe5a98448badcc298790485f536914d067417140b'
  },
  {
    symbol: 'LST',
    name: 'Lendroid Support Token',
    tokenAddress: '0x4de2573e27e648607b50e1cfff921a33e4a34405',
    tokenDecimals: 18,
    exchangeAddress: '0x98bdf4e7575319bcd5878c1c7c49a4af618b24cf'
  },
  {
    symbol: 'QAS',
    name: 'Quantitative Analysis System Token',
    tokenAddress: '0xc4b81d8381e02922c9eac0a4ea45977118080f74',
    tokenDecimals: 8,
    exchangeAddress: '0xbd2da2791bd74902a447a09d991c5372c5ad74bb'
  },
  {
    symbol: 'GRC',
    name: 'GROCERYCOIN',
    tokenAddress: '0x5adfaf1b9ccdd15321b7838d8ddf113ce471c3e8',
    tokenDecimals: 18,
    exchangeAddress: '0x41bdb6667ef5669fbc4eb7c826a4763a4545b58f'
  },
  {
    symbol: 'INE',
    name: 'IntelliShare Token',
    tokenAddress: '0x86e6a4f512b1290c043970b04e0b570d4fc98291',
    tokenDecimals: 18,
    exchangeAddress: '0x5840bce111a41b90067dc2d4df423805edad9cce'
  },
  {
    symbol: 'SOUND',
    name: 'Soundly',
    tokenAddress: '0x87e0e17f8edefc42cb3baf1f666f0154ddde76f9',
    tokenDecimals: 18,
    exchangeAddress: '0x86ac46334e5e7b8e4edbab80d23f50c5f76dd97f'
  },
  {
    symbol: 'HAK',
    name: 'Shaka',
    tokenAddress: '0x93a7174dafd31d13400cd9fa01f4e5b5baa00d39',
    tokenDecimals: 18,
    exchangeAddress: '0xa56325c4fdf7ff2d7f7055180f52d898319b118f'
  },
  {
    symbol: 'KAYA',
    name: 'LATTICE80 KAYA TOKEN',
    tokenAddress: '0xfd66c6771d00b5646949086152b7ccdca25e5686',
    tokenDecimals: 18,
    exchangeAddress: '0x5f96dd7c87b3e7a7874cdf20b49ebbe4356b34f9'
  },
  {
    symbol: 'KFC',
    name: 'Kung Fu Coin',
    tokenAddress: '0xfb918f8ab041ff4e2c6d70dba716915865d1bb71',
    tokenDecimals: 18,
    exchangeAddress: '0xe6e60b1c5b3b956e4a55d617e5df34515dd0aab8'
  },
  {
    symbol: '0xBCH',
    name: '0xBitcoinCash',
    tokenAddress: '0xe5b9746dfcc2ef1054d47a451a77bb5f390c468d',
    tokenDecimals: 8,
    exchangeAddress: '0xf91b57cd1faed8b9210d0439106dfd7c50787c16'
  },
  {
    symbol: 'SHOCK',
    name: 'AfterShock',
    tokenAddress: '0x11ded8addda881f700fbda2fe2030656289322a3',
    tokenDecimals: 18,
    exchangeAddress: '0xd52e70dbb7a4a192bbc82685c8beb8d87266f6d4'
  },
  {
    symbol: 'TESTUNDT',
    name: 'TESTUNDT_V1',
    tokenAddress: '0xfa90479a1e17a7a2079c96d9ceb6879e465e24de',
    tokenDecimals: 18,
    exchangeAddress: '0x364eba64744b7835d8b4afb1411c0d3092003b47'
  },
  {
    symbol: 'SMARC',
    name: 'SmarcToken',
    tokenAddress: '0x5ae655088e79fa0ced7b472d3bacd215ef796ccc',
    tokenDecimals: 18,
    exchangeAddress: '0xa810da2f8fca6816795662acfeee754aa528a1a5'
  },
  {
    symbol: 'MBDS',
    name: 'MBDS',
    tokenAddress: '0xc5b98b61fb0fe6427c9a88dbecdfced34eb56ef1',
    tokenDecimals: 2,
    exchangeAddress: '0x7981b7a9431d600dcb723cbcab9ffda94cb16463'
  },
  {
    symbol: 'FLIXX',
    name: 'Flixx',
    tokenAddress: '0xf04a8ac553fcedb5ba99a64799155826c136b0be',
    tokenDecimals: 18,
    exchangeAddress: '0x8355123d4e249c7e7f1543c1728855a2b51061ef'
  },
  {
    symbol: 'BRC',
    name: 'BinaryCoin',
    tokenAddress: '0x7501a4f0b6fcf5ab8d682a57e668214edc3d3ea4',
    tokenDecimals: 8,
    exchangeAddress: '0x35d2c153872166048afc6b52f87b193dbc96082c'
  },
  {
    symbol: 'ADT',
    name: 'Air-Drop Token',
    tokenAddress: '0xb1068836933fce8b92a7f65222ea551061308af4',
    tokenDecimals: 18,
    exchangeAddress: '0x5b24c76684c593f8b070de0ba9a5db4df50450ce'
  },
  {
    symbol: 'CTC',
    name: 'CyberTronChain',
    tokenAddress: '0x1cdca6811e2ef23d6099d09d2754211d3c7b5af1',
    tokenDecimals: 18,
    exchangeAddress: '0xf85e83d42644d982b9a770e7d698d9f233c2248c'
  },
  {
    symbol: 'CBC',
    name: 'CORE BUILDINGS',
    tokenAddress: '0x04b550977fc09ffdac3e13d5d490367eb5ce673c',
    tokenDecimals: 8,
    exchangeAddress: '0xe7264eaf580f833a6daa00662a8dffb83da6aff1'
  },
  {
    symbol: 'TRXC',
    name: 'TRONCLASSIC',
    tokenAddress: '0xad5fe5b0b8ec8ff4565204990e4405b2da117d8e',
    tokenDecimals: 0,
    exchangeAddress: '0x722b75eb9a631b0237ee074e8b74818f2d6911bc'
  },
  {
    symbol: 'BTV',
    name: 'Ben Token Ving',
    tokenAddress: '0xf5b15fefa638849294db2a836433eca4f7429f6f',
    tokenDecimals: 4,
    exchangeAddress: '0x3f6d1766dae068cc557a7bd068ebb9c78e345682'
  },
  {
    symbol: 'BLVD',
    name: 'BULVRD',
    tokenAddress: '0x3afe25a2739b5c2e08cfec439f9621d91ff7fbfb',
    tokenDecimals: 18,
    exchangeAddress: '0xccc88a633929b901ad6e3a9aeb9e23aab6ad9e2d'
  },
  {
    symbol: 'WILD',
    name: 'WILD Token',
    tokenAddress: '0xd3c00772b24d997a812249ca637a921e81357701',
    tokenDecimals: 18,
    exchangeAddress: '0xe93b3d464984ae04a1f9a858801a7b0b1e340660'
  },
  {
    symbol: 'FBU',
    name: 'ForintBudapest',
    tokenAddress: '0x2c7d9a0416d00ff65bd851e8fc3badb1607db582',
    tokenDecimals: 2,
    exchangeAddress: '0xdfcf6c4c82d25597927d06e487053398cfb4a784'
  },
  {
    symbol: 'DGYBN',
    name: 'DoggyBuddyCoin',
    tokenAddress: '0xcc050e357141b968742b23e12f0954c57506a204',
    tokenDecimals: 3,
    exchangeAddress: '0x96efc33eaed23e9f276203196d81915557c0a21f'
  },
  {
    symbol: 'GZE',
    name: 'GazeCoin Metaverse Token',
    tokenAddress: '0x4ac00f287f36a6aad655281fe1ca6798c9cb727b',
    tokenDecimals: 18,
    exchangeAddress: '0x6171aa1829c9f9479206658de3b6df4fa48f82c0'
  },
  {
    symbol: 'YAH',
    name: 'JamaiCoin',
    tokenAddress: '0xc2856a8310af421a2a65de16428c2dec6ceacb36',
    tokenDecimals: 18,
    exchangeAddress: '0x3fc90d031eecc364c620166ee7a791a151a16062'
  },
  {
    symbol: 'STAYK',
    name: 'STAYK.ME',
    tokenAddress: '0xa4fb83907ed6ee8fe476cbdb65fe3304a8898157',
    tokenDecimals: 18,
    exchangeAddress: '0x86bceb2f9a063191806b97d6a87ccc615d8f0ad0'
  },
  {
    symbol: 'MOAB',
    name: 'M.O.A.B',
    tokenAddress: '0xd54e2e7281de8e7d220f9173e33241fbfa881968',
    tokenDecimals: 18,
    exchangeAddress: '0x57cbdde774a989267e68565c361593cf7ccc5792'
  },
  {
    symbol: 'CNR',
    name: 'Cinder',
    tokenAddress: '0xce27a2388d2ba7a9995fa0960fb168568e2a7923',
    tokenDecimals: 18,
    exchangeAddress: '0xf3592d3b21027c5aea86f2398c4b049478d4c3df'
  },
  {
    symbol: 'BOR',
    name: 'BitCollar',
    tokenAddress: '0x1a51fabc97bce2743cd9214b6e8d88040ab1c064',
    tokenDecimals: 18,
    exchangeAddress: '0xae55bf087be880ef820be1d7c54ab5422ec3054c'
  },
  {
    symbol: 'FMF',
    name: 'Formosa Financial Token',
    tokenAddress: '0xb4d0fdfc8497aef97d3c2892ae682ee06064a2bc',
    tokenDecimals: 18,
    exchangeAddress: '0x3ee21d6a7feed509daf5f224f1b23f6602c83fc8'
  },
  {
    symbol: 'BTCH',
    name: 'Bitcoin Hash',
    tokenAddress: '0x94bc760c9b000a82d5325cbd59460a8b840effd1',
    tokenDecimals: 8,
    exchangeAddress: '0x7feb263b9ecc5656c2470ae4c972c995918705dc'
  },
  {
    symbol: 'SHIT',
    name: 'Stupendously High Income Taxes',
    tokenAddress: '0x124df05231383b565280c672eea957557bda51b9',
    tokenDecimals: 18,
    exchangeAddress: '0x7badb76b8a253b3c36d529c74b04223a1898a1e5'
  },
  {
    symbol: 'WED',
    name: 'Wednesday Coin',
    tokenAddress: '0x7848ae8f19671dc05966dafbefbbbb0308bdfabd',
    tokenDecimals: 18,
    exchangeAddress: '0xbaaaaa5e09b123602cc8abb454d0bd5b5d726218'
  },
  {
    symbol: 'ETH20SMACO',
    name: 'ETH 20 SMA Crossover Set',
    tokenAddress: '0x9ea463ec4ce9e9e5bc9cfd0187c4ac3a70dd951d',
    tokenDecimals: 18,
    exchangeAddress: '0xff04bf6e6de885b8d5d7fc0450a463c14021f2fd'
  },
  {
    symbol: 'JS',
    name: 'JavaScript',
    tokenAddress: '0x5046e860ff274fb8c66106b0ffb8155849fb0787',
    tokenDecimals: 8,
    exchangeAddress: '0xa1a73676cf4d50db2a5472f270538cba96482cbe'
  },
  {
    symbol: 'IBTC',
    name: 'IBTC',
    tokenAddress: '0x0784dbabb6c6834bddfb7cfee116ba049e5dafab',
    tokenDecimals: 18,
    exchangeAddress: '0x4eac5deb5b3a5c08077fcde5fa3a3a23670d1165'
  },
  {
    symbol: 'CTRT',
    name: 'Cryptrust',
    tokenAddress: '0x8606a8f28e1e2fd50b9074d65c01548b1f040b32',
    tokenDecimals: 8,
    exchangeAddress: '0x25b7b2dc6551c14af780e86582477b78420f86cd'
  },
  {
    symbol: 'PAS',
    name: 'PASSIVE',
    tokenAddress: '0x34453c84b6d18bc285a80e31f6c6395934434e92',
    tokenDecimals: 18,
    exchangeAddress: '0x0f75ec23c26f6d00d8c12d8d6dfe6633adb224ef'
  },
  {
    symbol: 'FTXT',
    name: 'FUTURAX',
    tokenAddress: '0x41875c2332b0877cdfaa699b641402b7d4642c32',
    tokenDecimals: 8,
    exchangeAddress: '0x0506c1034579265cafa9859a0b598613944b96cc'
  },
  {
    symbol: 'SOCKSCLASSIC',
    name: 'Unisocks Classic Edition 0',
    tokenAddress: '0xf7a5a8a95491ec170738434963b649671b563b88',
    tokenDecimals: 18,
    exchangeAddress: '0x92a5333d966d002181ad86d8588bf6e2f9e53436'
  },
  {
    symbol: 'ELET',
    name: 'Elementeum',
    tokenAddress: '0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43',
    tokenDecimals: 18,
    exchangeAddress: '0x56364d9b65961d014e8fd0f900d6924c845f9498'
  },
  {
    symbol: 'googlier',
    name: 'Googlier Token',
    tokenAddress: '0x600ff15d3cf655d1521c86dddb72c511c785b594',
    tokenDecimals: 18,
    exchangeAddress: '0xeb6d09b0c9550f05b81b04e80527f33fd6116186'
  },
  {
    symbol: 'BELL',
    name: 'ChrisBell',
    tokenAddress: '0xf071a4a5086a71af034ae895288da437e2722469',
    tokenDecimals: 2,
    exchangeAddress: '0x6dbfadb29f9c7400b96f71e354657d89649533f4'
  },
  {
    symbol: 'EMPRG',
    name: 'empowr green',
    tokenAddress: '0xf7a6868ad958b724bc486e10bd3ddc8d63aa16c7',
    tokenDecimals: 18,
    exchangeAddress: '0x3db6585d5e78e93d31868b5c69df0d3284ba2b46'
  },
  {
    symbol: 'IPSX',
    name: 'IPSX',
    tokenAddress: '0x001f0aa5da15585e5b2305dbab2bac425ea71007',
    tokenDecimals: 18,
    exchangeAddress: '0x311aa89ef339db0579f612f5edd592d7774a221f'
  },
  {
    symbol: 'GOOGLIER',
    name: 'Googlier Gold',
    tokenAddress: '0x6d01eed438511d9f694758d3b5cf42ee21d382cf',
    tokenDecimals: 18,
    exchangeAddress: '0xa4afbdd162b105f7333825b1ff66b7ebbba72a9c'
  },
  {
    symbol: 'MVC',
    name: 'MaiVangCity',
    tokenAddress: '0xebfc4fa869a6db3cbd6a849b5b656bae4aba68f0',
    tokenDecimals: 0,
    exchangeAddress: '0x2d2c97c7aa2f6a46653a738b1b673061b0564b2e'
  },
  {
    symbol: 'AVJO',
    name: 'Average Joe',
    tokenAddress: '0x875310f70ede3e5f79b20c2ffd9451dfe48b6730',
    tokenDecimals: 2,
    exchangeAddress: '0x870eef07fe03928f8b861d11e3b23046b9e6fb04'
  },
  {
    symbol: 'cWBTC',
    name: 'Compound Wrapped BTC',
    tokenAddress: '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4',
    tokenDecimals: 8,
    exchangeAddress: '0x62e71abd0d8b88c08090a1290fbb9f51b5ffc966'
  },
  {
    symbol: 'GPL',
    name: 'Gold Pressed Latinum',
    tokenAddress: '0xeeddaa78e0b2de769e969bd049c8faff3280df97',
    tokenDecimals: 18,
    exchangeAddress: '0xe39dfa524cde18f1432a96fec570968a16935cf2'
  },
  {
    symbol: 'cREP',
    name: 'Compound Augur',
    tokenAddress: '0x158079ee67fce2f58472a96584a73c7ab9ac95c1',
    tokenDecimals: 8,
    exchangeAddress: '0xdedd454118001a3904b08954ab2af51603182bff'
  },
  {
    symbol: 'cBAT',
    name: 'Compound Basic Attention Token',
    tokenAddress: '0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e',
    tokenDecimals: 8,
    exchangeAddress: '0x03b054ef0cd799848f157e3033fef4c4cc0e39b5'
  },
  {
    symbol: 'IOTX',
    name: 'IoTeX Network',
    tokenAddress: '0x6fb3e0a217407efff7ca062d46c26e5d60a14d69',
    tokenDecimals: 18,
    exchangeAddress: '0x084f002671a5f03d5498b1e5fb15fc0cfee9a470'
  },
  {
    symbol: 'BELLO',
    name: 'BELLO_TOKEN',
    tokenAddress: '0xd378a2a4e37025f87528c7c1a4224b0a18f761eb',
    tokenDecimals: 18,
    exchangeAddress: '0x8dcd2e05015474735ee04cfa0fcecc207dbb42fd'
  },
  {
    symbol: 'TACO',
    name: 'MetaCartel Tacos',
    tokenAddress: '0x36efe52b14e4d0ca4e3bd492488272e1fb2d7e1b',
    tokenDecimals: 18,
    exchangeAddress: '0xd028660f921c3fc2e58d1ee2ef92a1fa71d09cc8'
  },
  {
    symbol: 'BRAP',
    name: 'BRAPPER',
    tokenAddress: '0xa0cca3cf5c64152883f4c947c404e46996593fa7',
    tokenDecimals: 18,
    exchangeAddress: '0x280fe3edc99eb56d5956587e15dacf1a3d4d7390'
  },
  {
    symbol: 'HERO',
    name: 'Hero Origen Token',
    tokenAddress: '0x02585e4a14da274d02df09b222d4606b10a4e940',
    tokenDecimals: 18,
    exchangeAddress: '0xcef238e953938634cb5fd5fb1e7883cc57723288'
  },
  {
    symbol: 'HL',
    name: 'HotLove',
    tokenAddress: '0xdff991af459d05175b3bb766b950afc697b68df0',
    tokenDecimals: 18,
    exchangeAddress: '0xcaa6b9458c1070bf1fe4b3d68b71d8175aa9c20e'
  },
  {
    symbol: 'MRO',
    name: 'Mero Currency',
    tokenAddress: '0x6ff313fb38d53d7a458860b1bf7512f54a03e968',
    tokenDecimals: 18,
    exchangeAddress: '0xfa7c25b15acfb4e45fbc284090ebbb655e20f1c4'
  },
  {
    symbol: 'UOS',
    name: 'Ultra Token',
    tokenAddress: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
    tokenDecimals: 4,
    exchangeAddress: '0xfade8426c81ba0d84081492277046db735bad433'
  },
  {
    symbol: 'ALP',
    name: 'AlphabetX',
    tokenAddress: '0x11fb25cccc8f25ff993e802f506b530d20e65e12',
    tokenDecimals: 18,
    exchangeAddress: '0xd681c0fddeae5d45b02e75e72431bd26a4efbbeb'
  },
  {
    symbol: 'HDC',
    name: 'Hydrolic',
    tokenAddress: '0x26710d94067b144c2a6970cbbb96a5d08b70ac79',
    tokenDecimals: 18,
    exchangeAddress: '0xeb882a74859c9b6d4f5458076c6509a886e9880b'
  },
  {
    symbol: 'VOD',
    name: 'VoomDex Coin',
    tokenAddress: '0x10307c92c84903dda982151ec01a196517900652',
    tokenDecimals: 18,
    exchangeAddress: '0x515b56619e2b2ec0f8862b8ced417aa1518139db'
  },
  {
    symbol: 'SHEEP',
    name: 'Sheep Coin',
    tokenAddress: '0xc3f1581c94a0c592a99595d2a55ba4b1f3d6e8cc',
    tokenDecimals: 18,
    exchangeAddress: '0xe1b1c8d5236963b607c76fea4b3610f19f4e6d61'
  },
  {
    symbol: 'MRQ',
    name: 'MarsEquity',
    tokenAddress: '0xc651e99f40d908b6a606d54f221b414b5228ff60',
    tokenDecimals: 18,
    exchangeAddress: '0x22f32524a1edf73d192737e869a8881fc95a8c15'
  },
  {
    symbol: 'PRVC',
    name: 'PrivateReserveCoin',
    tokenAddress: '0x780febe2be59cc7e939ffb2fb78797eaf17136c5',
    tokenDecimals: 18,
    exchangeAddress: '0xa2558b1e45dd15d88267504a6853b0049889c850'
  },
  {
    symbol: 'HOWL',
    name: 'HOWL',
    tokenAddress: '0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd',
    tokenDecimals: 18,
    exchangeAddress: '0xf14cfe57427aa29fc957f0454e9a851ad6584d39'
  },
  {
    symbol: 'HYD',
    name: 'Hydra',
    tokenAddress: '0xd233495c48eb0143661ffc8458eafc21b633f97f',
    tokenDecimals: 12,
    exchangeAddress: '0x4f87273fd042f47bf2a8e1f9430efd937182aabd'
  },
  {
    symbol: 'FTH',
    name: 'Fitcash',
    tokenAddress: '0xb414f8ec2d14c64f37b1559cbe43746284514596',
    tokenDecimals: 18,
    exchangeAddress: '0x86394d6dcfa957754eb3b7eb537fa3bb040db22d'
  },
  {
    symbol: 'DOG',
    name: 'DOG: The Anti-Scam Reward Token',
    tokenAddress: '0xeed2b7756e295a9300e53dd049aeb0751899bae3',
    tokenDecimals: 18,
    exchangeAddress: '0xb88ff10ba7c8d572e34bf28a7795558430971600'
  },
  {
    symbol: 'LAIL',
    name: 'lail currency',
    tokenAddress: '0x73d67103ad2bc658632b8a32d40f23001b16a19b',
    tokenDecimals: 6,
    exchangeAddress: '0xf752389480e98f360bdfbd3d30fc3ac0fd240891'
  },
  {
    symbol: 'KMN',
    name: 'Kamun',
    tokenAddress: '0xb18ca875230da1025707fa5abc02bc66ebd6ebd9',
    tokenDecimals: 18,
    exchangeAddress: '0x0a53467ca28b08283e7f7da9fc77b3bea29b2ec5'
  },
  {
    symbol: 'CRNC',
    name: 'CURRENT',
    tokenAddress: '0xc9a1e678c9025f0d4cf129d6de0d80f07d97a36f',
    tokenDecimals: 3,
    exchangeAddress: '0xe012da3c5bb47292fa569a5d5691bb84a4d46dc0'
  },
  {
    symbol: 'YZC',
    name: 'YoozCoin',
    tokenAddress: '0xab71e90c8f38367197bc07fc347df4e012807449',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f0d0e38a219fea5f8cdf4dfbd1cd4389800e36'
  },
  {
    symbol: 'DDG',
    name: 'DD Gold',
    tokenAddress: '0x6999d699a8210d728a9b2c34b4ad89e96ce34df8',
    tokenDecimals: 0,
    exchangeAddress: '0x9a1173a2bac22a4ce30a67b7f66beb64d1b9eb08'
  },
  {
    symbol: 'CCC',
    name: 'Controlled Chaos Coin',
    tokenAddress: '0xb89d6804bef1164c0b76b975cef2907c606b5bbe',
    tokenDecimals: 4,
    exchangeAddress: '0x59ae3464c4a6ac63d2bbece510ed7f4ad9e1bd8a'
  },
  {
    symbol: 'DNR',
    name: 'DENARIO',
    tokenAddress: '0x9f65cfd011233c2193bfeb5088f0e86068b794b0',
    tokenDecimals: 10,
    exchangeAddress: '0xe83d295b48f7785b3d142cf5d47e42aa86f6a0ff'
  },
  {
    symbol: 'REALT',
    name: 'REAL-T',
    tokenAddress: '0x46cc7ec70746f4cbd56ce5fa9bb7d648398eaa5c',
    tokenDecimals: 4,
    exchangeAddress: '0x1935c95bb09d3a298a77ce37c4ba72a51a6a01eb'
  },
  {
    symbol: 'FTX Token',
    name: 'FTT',
    tokenAddress: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
    tokenDecimals: 18,
    exchangeAddress: '0x10e57b7ffb61ae0c2e21e4ec66d6367d730f0db6'
  },
  {
    symbol: 'DDS',
    name: 'DD Silver',
    tokenAddress: '0x9da4cc37379f48960bf946e6a8329df5c2dc2bc8',
    tokenDecimals: 0,
    exchangeAddress: '0x172a6f585e7c2ce46b36e617a94548e3c629ef28'
  },
  {
    symbol: 'FLX',
    name: 'Flexible',
    tokenAddress: '0xb2aa6fb02df17b61f615d078484a081083df9621',
    tokenDecimals: 18,
    exchangeAddress: '0xf86ee716fc3c2ef7b7dfb87d8b3ee9caece206c5'
  },
  {
    symbol: 'DIV',
    name: 'DivVC',
    tokenAddress: '0x093c09f5919742f1cd0996781fee72842fc517b1',
    tokenDecimals: 18,
    exchangeAddress: '0xb08a6e6109c86d6d6069a80530a77013a9016bed'
  },
  {
    symbol: 'CFT',
    name: 'Coffee Token',
    tokenAddress: '0x5bf2390a68ab7db7d27ae81894c4e22e669af236',
    tokenDecimals: 18,
    exchangeAddress: '0x6b90ee5c85791cf9ae43d38591068acce6a5a116'
  },
  {
    symbol: 'RTC',
    name: 'RTCoin',
    tokenAddress: '0xecc043b92834c1ebde65f2181b59597a6588d616',
    tokenDecimals: 18,
    exchangeAddress: '0x438134340e3a72b672cfa58c6a7a1122817a74c9'
  },
  {
    symbol: 'VND',
    name: 'Đồng Việt Nam',
    tokenAddress: '0xfc69e0771bd474e0575763bcb6b87d279e182fe5',
    tokenDecimals: 8,
    exchangeAddress: '0xc2de435f1c210ebff12dd81f4e837e1fc97b420a'
  },
  {
    symbol: 'Libra',
    name: 'LibraNetwork',
    tokenAddress: '0x6f9afee7645ed0f115f39a64346e7cb2cd17b26f',
    tokenDecimals: 18,
    exchangeAddress: '0x52e6d60124143d56245ec2b857fe51254985c2b7'
  },
  {
    symbol: 'BAGS',
    name: 'BAGS',
    tokenAddress: '0xe7bf3aee922367c10c8acec3793fe7d809a38eef',
    tokenDecimals: 18,
    exchangeAddress: '0x29df24f66448b24cd1974cd17acd299695aaf625'
  },
  {
    symbol: 'FFHC',
    name: 'flashflip HC',
    tokenAddress: '0x9645f9cb0af410f170afe062bfbea0fc51e524e8',
    tokenDecimals: 0,
    exchangeAddress: '0xd1e202ccca07dd72f75a5a50a92983e0ba444551'
  },
  {
    symbol: 'RCLE',
    name: 'Ross Campbell Legal Engineering',
    tokenAddress: '0x5a844590c5b8f40ae56190771d06c60b9ab1da1c',
    tokenDecimals: 18,
    exchangeAddress: '0xd994b83f2fca809704d6819935d89f3d0f5de555'
  },
  {
    symbol: 'SATURN',
    name: 'Saturn DAO Token',
    tokenAddress: '0xb9440022a095343b440d590fcd2d7a3794bd76c8',
    tokenDecimals: 4,
    exchangeAddress: '0xe43ab311483a43a6b2ab634fcb5b3261aaa8aa70'
  },
  {
    symbol: 'Shuf',
    name: 'shuffle.monster token',
    tokenAddress: '0xd76c75b9cbbeab4109456fda9f2da73297b795db',
    tokenDecimals: 18,
    exchangeAddress: '0xeb1b47e9bcdd3b81fddd49c9eed75bd095430509'
  },
  {
    symbol: 'LCS',
    name: 'LocalCoinSwap Cryptoshare',
    tokenAddress: '0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8',
    tokenDecimals: 18,
    exchangeAddress: '0xa01e4e09f0ba8a37aa0787ebc764b7be607fa601'
  },
  {
    symbol: 'IPL',
    name: 'InsurePal token',
    tokenAddress: '0x64cdf819d3e75ac8ec217b3496d7ce167be42e80',
    tokenDecimals: 18,
    exchangeAddress: '0x3981a1b7ffe82b3099d922b9021f7a66da2fca06'
  },
  {
    symbol: 'OAX',
    name: 'openANX Token',
    tokenAddress: '0x701c244b988a513c945973defa05de933b23fe1d',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f061557d5cf8ce53f389ddcc4b69fb54115871'
  },
  {
    symbol: 'LION',
    name: 'LION',
    tokenAddress: '0x2167fb82309cf76513e83b25123f8b0559d6b48f',
    tokenDecimals: 18,
    exchangeAddress: '0xb9e91d257751d0fba8a0c279f0faf4b2573bc434'
  },
  {
    symbol: '0xBUTT',
    name: 'ButtCoin',
    tokenAddress: '0x7c1056ac0f7d223c4297e0c683453ee625011b1f',
    tokenDecimals: 8,
    exchangeAddress: '0xee1262668bfca72ca02ef73ed1409c18f0d33926'
  },
  {
    symbol: 'IDRT',
    name: 'Rupiah Token',
    tokenAddress: '0x998ffe1e43facffb941dc337dd0468d52ba5b48a',
    tokenDecimals: 2,
    exchangeAddress: '0x632e120ebeb7869fe0e1ad5dbc5ab3b90a82a827'
  },
  {
    symbol: 'SHUF',
    name: 'shuffle.monster token V2',
    tokenAddress: '0xd9db58c0cd8b93906ec87e353d6b1dbe19f3bfed',
    tokenDecimals: 18,
    exchangeAddress: '0x3ee17307ff3a520e2f1719794998dc67e9b1e616'
  },
  {
    symbol: 'FAU',
    name: 'FaucetToken',
    tokenAddress: '0xfab46e002bbf0b4509813474841e0716e6730136',
    tokenDecimals: 18,
    exchangeAddress: '0x952e1c4340fd0b9e8fdedf5a2a01982ae54868ab'
  },
  {
    symbol: 'EDT',
    name: 'EDT',
    tokenAddress: '0xce53a179047ebed80261689367c093c90a94cc08',
    tokenDecimals: 8,
    exchangeAddress: '0xa650a8e24466613f92d1f448cf21e09bfaf86779'
  },
  {
    symbol: 'SUDWA',
    name: 'SUDWA',
    tokenAddress: '0x700f55ca3cc165b33eb1071d66607a1d4631caa9',
    tokenDecimals: 0,
    exchangeAddress: '0xe1afab533d4f4d821bad57d4e7e41f5e8e29e49c'
  },
  {
    symbol: 'DRJ',
    name: 'JJ At Work',
    tokenAddress: '0xf0990ed3804c4c0b5fd69358626364c9995d1312',
    tokenDecimals: 18,
    exchangeAddress: '0x459dad1a6db8de6f31a71206cd56fec5b5bae912'
  },
  {
    symbol: 'ZAI',
    name: 'Zaigar',
    tokenAddress: '0x4e9095a1b97933bf528b5c2fa1e734f167c3ae12',
    tokenDecimals: 8,
    exchangeAddress: '0x0207098c1286af7af8d6eb1ad9c8a1ed2404e290'
  },
  {
    symbol: 'MXM',
    name: 'Maximine Coin',
    tokenAddress: '0x8e766f57f7d16ca50b4a0b90b88f6468a09b0439',
    tokenDecimals: 18,
    exchangeAddress: '0x8d4bb4a828664fa568825728585fc3556ae7d01a'
  },
  {
    symbol: 'HYPE',
    name: 'HYPE Token',
    tokenAddress: '0x2630997aab62fa1030a8b975e1aa2dc573b18a13',
    tokenDecimals: 18,
    exchangeAddress: '0x72d0621599431202cc24b47646c6c7873b9c3fec'
  },
  {
    symbol: 'PRE',
    name: 'Presearch',
    tokenAddress: '0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa',
    tokenDecimals: 18,
    exchangeAddress: '0x97c6e0159f1c716c3e471de85c2f81f20533df4d'
  },
  {
    symbol: 'ELF',
    name: 'ELF Token',
    tokenAddress: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
    tokenDecimals: 18,
    exchangeAddress: '0x92d49cfaf85f5405882e0916fad9881df491c25b'
  },
  {
    symbol: 'RIC',
    name: 'AURIcoin',
    tokenAddress: '0x08e0faff8bb80eaf8c30a99920355028b5bd6789',
    tokenDecimals: 8,
    exchangeAddress: '0x8e101c4dd4658a23159ee54b30fd7dcda27bd405'
  },
  {
    symbol: 'UNDT',
    name: 'Union Network Dollar Token',
    tokenAddress: '0x7c6c3b4e91923f080d6cc847a68d7330400a95d7',
    tokenDecimals: 18,
    exchangeAddress: '0x32a17ae3d6684105acb39e0c33699fc398a9522e'
  },
  {
    symbol: 'UDAO',
    name: 'UnionDAO',
    tokenAddress: '0x4a32e09c60af50f0a5869bf5c622f4e5d57c3b37',
    tokenDecimals: 18,
    exchangeAddress: '0x6eb93407d116d367893fad239a827235bc0d46fe'
  },
  {
    symbol: 'URING',
    name: 'Uni Ring',
    tokenAddress: '0x8baaabee4e60982b128b5339a998ee748eca4cff',
    tokenDecimals: 18,
    exchangeAddress: '0xba6fc6c51d793cccf54a8581bd7b9a40fe5bb0b8'
  },
  {
    symbol: 'KGT',
    name: 'King Token',
    tokenAddress: '0xfe417d8eef16948ba0301c05f5cba87e2c1c51c8',
    tokenDecimals: 9,
    exchangeAddress: '0xbc9297dba73c72386efb34f75486171dcaf22872'
  },
  {
    symbol: 'ONOT',
    name: 'ONOT',
    tokenAddress: '0xb31c219959e06f9afbeb36b388a4bad13e802725',
    tokenDecimals: 18,
    exchangeAddress: '0x4737ceded868452e0d9b5c4253707501beacb2da'
  },
  {
    symbol: '🕯️',
    name: 'ignis',
    tokenAddress: '0x0dea6dbacaee8a903dec0b1233fec55d10fdf975',
    tokenDecimals: 18,
    exchangeAddress: '0x87f44b439cca55ea63cfb854e8d73e1f12296279'
  },
  {
    symbol: 'MBC',
    name: 'Marblecoin',
    tokenAddress: '0x8888889213dd4da823ebdd1e235b09590633c150',
    tokenDecimals: 18,
    exchangeAddress: '0xe1b7aec3639068b474bfbcb916580fc28a20717b'
  },
  {
    symbol: 'SIM',
    name: 'SIM',
    tokenAddress: '0x8fff600f5c5f0bb03f345fd60f09a3537845de0a',
    tokenDecimals: 0,
    exchangeAddress: '0x22e527afca5a43ad40393231f8048beda98458a9'
  },
  {
    symbol: 'GTO',
    name: 'Gifto',
    tokenAddress: '0xc5bbae50781be1669306b9e001eff57a2957b09d',
    tokenDecimals: 5,
    exchangeAddress: '0x29173574542d0e6baa3ffe58b7111478df86adb3'
  },
  {
    symbol: 'HTX',
    name: 'HOT',
    tokenAddress: '0x46ae264bf6d9dc6dd84c31064551f961c67a755c',
    tokenDecimals: 18,
    exchangeAddress: '0x53efed3efd1deabc59a597cff5ca35b284cd7f5d'
  },
  {
    symbol: 'JDT',
    name: 'Jungle Coin',
    tokenAddress: '0x408865a24f0b02e43409c7c23cd3362da427c122',
    tokenDecimals: 18,
    exchangeAddress: '0xd3bf8a2e1a6501972c450a7abc817fe796fc66f6'
  },
  {
    symbol: 'DAPP',
    name: 'DAPPTOKEN',
    tokenAddress: '0x747c276c9a714c79a6b9b9ea1a995888cc9e35e4',
    tokenDecimals: 18,
    exchangeAddress: '0xbd2f6c29ab8303369067a64b5df5889f055e93bc'
  },
  {
    symbol: 'DYT',
    name: 'Dynamite',
    tokenAddress: '0xad95a3c0fdc9bc4b27fd79e028a0a808d5564aa4',
    tokenDecimals: 18,
    exchangeAddress: '0x5459ed7c3ceebd51eab6f6e36a28e6930116d132'
  },
  {
    symbol: 'C10',
    name: 'CRYPTO10 Hedged',
    tokenAddress: '0x000c100050e98c91f9114fa5dd75ce6869bf4f53',
    tokenDecimals: 18,
    exchangeAddress: '0xc708c0da439ad335862050277dff1bd34155d7f6'
  },
  {
    symbol: 'SNX',
    name: 'Synthetix Network Token',
    tokenAddress: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    tokenDecimals: 18,
    exchangeAddress: '0x3958b4ec427f8fa24eb60f42821760e88d485f7f'
  },
  {
    symbol: 'BSOV',
    name: 'BitcoinSoV',
    tokenAddress: '0x26946ada5ecb57f3a1f91605050ce45c482c9eb1',
    tokenDecimals: 8,
    exchangeAddress: '0x87ccbfd2d46d167d9e7488255680f48c2ad0c5bb'
  },
  {
    symbol: 'PTT',
    name: 'PTT',
    tokenAddress: '0xe4cdd296ac85c7d8477988f582d457e638349947',
    tokenDecimals: 0,
    exchangeAddress: '0xe7c6aef152984dcea3220c6679a3b106092e9c90'
  },
  {
    symbol: 'EEFI',
    name: 'Ethele Fire',
    tokenAddress: '0x241609ad37a5038e459bda70ffb1c052e76a1b8a',
    tokenDecimals: 18,
    exchangeAddress: '0x6a1d1df3fa2b4ee221f0652829c7ad468b8683fd'
  },
  {
    symbol: 'EEEA',
    name: 'Ethele Earth',
    tokenAddress: '0xd6a7027807d42695c49466079101615dafd4b46b',
    tokenDecimals: 18,
    exchangeAddress: '0x1b16938fd0f634f435153d3f840e31eb5f700665'
  },
  {
    symbol: 'EEME',
    name: 'Ethele Metal',
    tokenAddress: '0x4f7ecd8afa3b43e0bfe3820232d04e8d5921cc29',
    tokenDecimals: 18,
    exchangeAddress: '0xb2bef46f099f7e7e751491c5faf857c9f9a2227e'
  },
  {
    symbol: 'EEWA',
    name: 'Ethele Water',
    tokenAddress: '0x9dd58c478c69f1b32c78f477dafa57c43927b19c',
    tokenDecimals: 18,
    exchangeAddress: '0x393819eb3a0a2baec8b412b1c2b0e8dffc949cac'
  },
  {
    symbol: 'EEWO',
    name: 'Ethele Wood',
    tokenAddress: '0xe690c40835cf3717160130e37c46044181cf72dd',
    tokenDecimals: 18,
    exchangeAddress: '0xb2f3a588a912317fd0a3e0537873e87401d4d47d'
  },
  {
    symbol: 'EEYI',
    name: 'Ethele Yin',
    tokenAddress: '0xe784824946ab8d8204eff386d2740fdfbce48c00',
    tokenDecimals: 18,
    exchangeAddress: '0x20f04038ffd72ab739f9674ac399c1d2f08a393d'
  },
  {
    symbol: 'EEYA',
    name: 'Ethele Yang',
    tokenAddress: '0x81a8b50dec71a73463c1d02c80c0cd8883014c59',
    tokenDecimals: 18,
    exchangeAddress: '0x79421a26e318f3ae8a261dab3404dca377169b61'
  },
  {
    symbol: 'ZAP',
    name: 'ZAP TOKEN',
    tokenAddress: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104',
    tokenDecimals: 18,
    exchangeAddress: '0x9c3cf0fe5b5065b344a1b80c6919ade1caabab19'
  },
  {
    symbol: 'BBC',
    name: 'B2BCoin',
    tokenAddress: '0xe7d3e4413e29ae35b0893140f4500965c74365e5',
    tokenDecimals: 18,
    exchangeAddress: '0x10eff783e748a3f4e6782673935464ddeb6d27bf'
  },
  {
    symbol: 'GPMU',
    name: 'GPM Utility Token',
    tokenAddress: '0x72a7d948b23528e421334bcf783db723232d1633',
    tokenDecimals: 2,
    exchangeAddress: '0x3dfdcc6b0c52b5eaaa9ed32de8420cd74fbe73ce'
  },
  {
    symbol: 'LHOMME',
    name: 'LHOMME COIN',
    tokenAddress: '0x116803242736fad67c16239050b5e213972e104f',
    tokenDecimals: 4,
    exchangeAddress: '0x075da3a1483aeadb9ef0f8effe198f15c9414ba3'
  },
  {
    symbol: 'BWS',
    name: 'Bretton Woods system-2.0',
    tokenAddress: '0x55a576e960296d3a327dd0840780625ed662d3a4',
    tokenDecimals: 12,
    exchangeAddress: '0x5fd784d4dcaf59bbc9fd805d45fb8c071342ee8a'
  },
  {
    symbol: 'SHUF',
    name: 'Shuffle.Monster V3',
    tokenAddress: '0x3a9fff453d50d4ac52a6890647b823379ba36b9e',
    tokenDecimals: 18,
    exchangeAddress: '0x536956fab86774fb55cfaacf496bc25e4d2b435c'
  },
  {
    symbol: 'CRUDE',
    name: 'Oil Coin',
    tokenAddress: '0x9622e1b0ac29525441b02d192f20e9bafb1a16b7',
    tokenDecimals: 1,
    exchangeAddress: '0x0a48ebbfed6148f4fb5e4ea72e41bbef57a80572'
  },
  {
    symbol: 'Zrex',
    name: 'Izurex',
    tokenAddress: '0x79fc707552caaadf1e6dec7939af9c41d9ac2bee',
    tokenDecimals: 18,
    exchangeAddress: '0xe79deb0eae29738ff00419edc6310170540cc8e7'
  },
  {
    symbol: 'DTX',
    name: 'Divine Time Coin',
    tokenAddress: '0xf3d0c560a707f088fc15dcf4c30742817929102a',
    tokenDecimals: 1,
    exchangeAddress: '0x21e6980e3b60c73cdbaa614aa28f800581c58f40'
  },
  {
    symbol: 'ZREX',
    name: 'Izurex',
    tokenAddress: '0x0a6b2931a74a2fd058d160dc1d677f401696ca8c',
    tokenDecimals: 18,
    exchangeAddress: '0xc84c0749b7c274e1173fe62b60b503a81eada89f'
  },
  {
    symbol: 'EKIG',
    name: 'ETHERKING',
    tokenAddress: '0x30859d6387cb28e68756be606d6724c7d29da9c3',
    tokenDecimals: 18,
    exchangeAddress: '0x51ec82d8422f4245e539fd035c5aa08986eedb52'
  },
  {
    symbol: 'RENT',
    name: 'Real Estate Networking Token',
    tokenAddress: '0xe17e2c31f480f618be0ed4e46d629862cd05ec64',
    tokenDecimals: 2,
    exchangeAddress: '0xfcfaf1826eded767890c5e8ead104e2302540f94'
  },
  {
    symbol: 'UUN',
    name: 'UUnit Token',
    tokenAddress: '0xce2ac722f8b9349a0bdcbe9ee9f9d877c8cfa7a0',
    tokenDecimals: 18,
    exchangeAddress: '0x04771e1cc3f9df7dd46ead1140dc6527bd833faf'
  },
  {
    symbol: 'GRK',
    name: 'GOLDROCK',
    tokenAddress: '0xeebdec779a6ed3492b59754885016e0259354d06',
    tokenDecimals: 10,
    exchangeAddress: '0x1e0b688d8e1c64c2fb4ca1b42e572c0398caf667'
  },
  {
    symbol: 'RAE',
    name: 'RAE Token',
    tokenAddress: '0xe5a3229ccb22b6484594973a03a3851dcd948756',
    tokenDecimals: 18,
    exchangeAddress: '0x6e2dcfbf8848994b5f600d3c9c113b39da39261a'
  },
  {
    symbol: 'ROBET',
    name: 'RoBET - Truly Decentralized Sportsbetting',
    tokenAddress: '0x2344871f523cbb28a4f60045531184cf1f03ad24',
    tokenDecimals: 18,
    exchangeAddress: '0x8e844feda375404695434d7e3f54bb104f04fdbd'
  },
  {
    symbol: 'ZAR',
    name: 'Digital Rand',
    tokenAddress: '0x26acff19e3adf65e920fd7c33a6b92cda9a50460',
    tokenDecimals: 18,
    exchangeAddress: '0x6f8b289090b5d5fdc4b7f6277f1c60fb5d6a5ff5'
  },
  {
    symbol: 'BURNT',
    name: 'BURNT',
    tokenAddress: '0x33e1089b4b0a456488cfb0a445d090907b5d3e7d',
    tokenDecimals: 0,
    exchangeAddress: '0xfbfcfefea9ba5516281b1d5e792ab30bb933315d'
  },
  {
    symbol: 'BCP',
    name: 'bitcoinplatinums',
    tokenAddress: '0xd26fb114401ec86887cd09f62eccd95fcf20b571',
    tokenDecimals: 8,
    exchangeAddress: '0xe90f5bb01fd32ad53229141bfad9b8902cf0d405'
  },
  {
    symbol: 'HAX',
    name: 'The hacker token',
    tokenAddress: '0xc0be5d2217d85963d391a3f556ff6aba3f53ee7f',
    tokenDecimals: 18,
    exchangeAddress: '0x097c17577cf8f63c6574e7f0d151aa0b9ad59101'
  },
  {
    symbol: 'KXM',
    name: 'KXM Token',
    tokenAddress: '0x63518fa947a0b9c61fc69369015c68630fda910e',
    tokenDecimals: 18,
    exchangeAddress: '0xe722d4d6120956956621a2d5c32eb65d876fa7d3'
  },
  {
    symbol: 'VGW',
    name: 'VegaWallet',
    tokenAddress: '0x94236591125e935f5ac128bb3d5062944c24958c',
    tokenDecimals: 5,
    exchangeAddress: '0xed3207570f377fca5ea5b1fffd771741faf15a9c'
  },
  {
    symbol: 'CTXC',
    name: 'Cortex Coin',
    tokenAddress: '0xea11755ae41d889ceec39a63e6ff75a02bc1c00d',
    tokenDecimals: 18,
    exchangeAddress: '0x9e371ce33547b8ea706c6155bcd834c1e50e0759'
  },
  {
    symbol: 'SPC',
    name: 'SpaceChain',
    tokenAddress: '0x8069080a922834460c3a092fb2c1510224dc066b',
    tokenDecimals: 18,
    exchangeAddress: '0x204e3d643adc1365f569f6cec2e01b89f01a6274'
  },
  {
    symbol: 'MORE',
    name: 'MORE',
    tokenAddress: '0x305de070488c8469dfac957226c9c900c4bfba22',
    tokenDecimals: 8,
    exchangeAddress: '0x36f907deda772aef8f937ae2394a6a5936ed9c27'
  },
  {
    symbol: 'HDC',
    name: 'Hydrolic Token',
    tokenAddress: '0x7b551d679606ee11862b0e9b2d354b53951fda93',
    tokenDecimals: 18,
    exchangeAddress: '0x5d1761173e7244ebb41f44b264fbf9a559e9a9fb'
  },
  {
    symbol: 'TIG',
    name: 'Tigereum',
    tokenAddress: '0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a',
    tokenDecimals: 18,
    exchangeAddress: '0xae0886efdb596dd887ced05f13405f2a1af0c2f7'
  },
  {
    symbol: 'LYCI',
    name: 'LyCI service token',
    tokenAddress: '0xd2ba769293295ffb96cebae56396fc77eca2678d',
    tokenDecimals: 18,
    exchangeAddress: '0x707bed7cabb5d1c30c3bebc5d2a26c8624e8b2dd'
  },
  {
    symbol: 'LYCI',
    name: 'LyCI service token',
    tokenAddress: '0x9794091c4161ae66aa775af0781379d1823016cf',
    tokenDecimals: 18,
    exchangeAddress: '0xa1eafa2df1e86b8dfd4b3079dbbd399ed18c7768'
  },
  {
    symbol: 'TOKN',
    name: 'ToknTrade',
    tokenAddress: '0xff59c6a13b272db7b278f04e5300e53b46faad78',
    tokenDecimals: 18,
    exchangeAddress: '0x7b451174265e28d0dec1a81e3c9b2d3175c02d62'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xe1b7aec3639068b474bfbcb916580fc28a20717b',
    tokenDecimals: 18,
    exchangeAddress: '0xe0153f7bd65dd638f66a4d476bfb1d15aed72cbb'
  },
  {
    symbol: 'ABYSS',
    name: 'ABYSS',
    tokenAddress: '0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6',
    tokenDecimals: 18,
    exchangeAddress: '0xcb780c95fbb295785f93c5266b9ec393aaf8fb41'
  },
  {
    symbol: 'iDAI',
    name: 'bZx DAI iToken',
    tokenAddress: '0x14094949152eddbfcd073717200da82fed8dc960',
    tokenDecimals: 18,
    exchangeAddress: '0x81eed7f1ecbd7fa9978fcc7584296fb0c215dc5c'
  },
  {
    symbol: 'PHTTX',
    name: 'PHTTOKENX',
    tokenAddress: '0x8a64c0bd7146710aa5c2773365bb620faf11bed4',
    tokenDecimals: 18,
    exchangeAddress: '0x9e205124a2041bb9762cf9e6659f785fd956233a'
  },
  {
    symbol: 'AMA',
    name: 'ADAMASCOIN',
    tokenAddress: '0x13a863e9bc99b926ea8e153513b85695ddcf9826',
    tokenDecimals: 18,
    exchangeAddress: '0x8913b00b0142f48780cefa1e770ffae4a4796f1e'
  },
  {
    symbol: 'SIG',
    name: 'Signals',
    tokenAddress: '0x6888a16ea9792c15a4dcf2f6c623d055c8ede792',
    tokenDecimals: 18,
    exchangeAddress: '0x6519bf6ee473d70813e3bca9ab1f5931febefaf1'
  },
  {
    symbol: 'OMT',
    name: 'OgroMagicToken',
    tokenAddress: '0x54e529f3673eb585c1690880186eac3c4dd30b09',
    tokenDecimals: 18,
    exchangeAddress: '0x049277174359d1e93e475484b8e6bdd428414ad7'
  },
  {
    symbol: 'BZT',
    name: 'BIZATCOIN',
    tokenAddress: '0x6ea40d8c8f275c274461bb97e7dc4535f77de6a0',
    tokenDecimals: 18,
    exchangeAddress: '0x0d146302acf3276bc1ca7ca6b804dc029d5eb363'
  },
  {
    symbol: 'CDY',
    name: 'COINDAYRA',
    tokenAddress: '0xac3c27fb6ab4e5af604f8f3b20b0a0c827c96ba9',
    tokenDecimals: 18,
    exchangeAddress: '0xc0fe0278cf6cc07cc0cc8fe458c07cb85da6b7ac'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xc0fe0278cf6cc07cc0cc8fe458c07cb85da6b7ac',
    tokenDecimals: 18,
    exchangeAddress: '0x874d75f7e86aae4f79f450668fb022486ca5ab40'
  },
  {
    symbol: 'KWT',
    name: 'KWT COIN',
    tokenAddress: '0x0500461af1eb8078203bae4886652dce18e7ec20',
    tokenDecimals: 18,
    exchangeAddress: '0xc5ea58a9632e789f1711e624460dd46c622e011d'
  },
  {
    symbol: 'SOUL',
    name: 'CryptoSoul',
    tokenAddress: '0xbb1f24c0c1554b9990222f036b0aad6ee4caec29',
    tokenDecimals: 18,
    exchangeAddress: '0x776f94ae301cf8e3e5085267f1f5a3123007ed9f'
  },
  {
    symbol: 'REV',
    name: 'REVA',
    tokenAddress: '0xd60314496bdd92629dacfb50cc1f6c6c18d98b41',
    tokenDecimals: 18,
    exchangeAddress: '0x4bb0425e1d665da681209933e1a330137af99350'
  },
  {
    symbol: 'STL',
    name: 'Stablecoinswap',
    tokenAddress: '0xc1ad68c43508dd5addb8d0ac0927dbe752d149d6',
    tokenDecimals: 18,
    exchangeAddress: '0xbca710302dcf84098ddae080133a8ff42e5c2379'
  },
  {
    symbol: 'NET',
    name: 'INTERNET',
    tokenAddress: '0x0f0708e479fcdef61ac94dbf015994e54a77d737',
    tokenDecimals: 18,
    exchangeAddress: '0xe23e7208ca2e8691e648456501d4a211e41edadd'
  },
  {
    symbol: 'GCU',
    name: 'Global Currency Unit',
    tokenAddress: '0xa4ec83c8907888d006a37debf755ee39766f38ae',
    tokenDecimals: 18,
    exchangeAddress: '0xac854712ef2baf74dd4afcedb9d5cb87cb4ef93a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4bb0425e1d665da681209933e1a330137af99350',
    tokenDecimals: 18,
    exchangeAddress: '0xabd285a1c6d0d7f6431d005b62e85897c3ca342c'
  },
  {
    symbol: 'iETH',
    name: 'iEthereum',
    tokenAddress: '0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b',
    tokenDecimals: 8,
    exchangeAddress: '0x03cbebb8ce17a0b706e9117c8add82412879ee5c'
  },
  {
    symbol: 'VLDY',
    name: 'Validity',
    tokenAddress: '0x904da022abcf44eba68d4255914141298a7f7307',
    tokenDecimals: 18,
    exchangeAddress: '0xd01590bf566d070d4ce04743705e835f81ff77ca'
  },
  {
    symbol: 'Seppuku!',
    name: 'Seppuku Token',
    tokenAddress: '0xf49c17470ecc377a59de71eab8dcb5e78b5cb670',
    tokenDecimals: 18,
    exchangeAddress: '0x2fa6f6f6534686ef89ad0d0f2a9d26f38c146198'
  },
  {
    symbol: 'FAM',
    name: 'Fame',
    tokenAddress: '0x190e569be071f40c704e15825f285481cb74b6cc',
    tokenDecimals: 12,
    exchangeAddress: '0x117109ad2bef4cfaf50d3fb952edf8f6836d9303'
  },
  {
    symbol: 'FOR',
    name: 'The Force Token',
    tokenAddress: '0x1fcdce58959f536621d76f5b7ffb955baa5a672f',
    tokenDecimals: 18,
    exchangeAddress: '0x6e21d0004be9c4f14dc0745f20c7c66edfbfd533'
  },
  {
    symbol: 'RGF',
    name: 'Royal gulf',
    tokenAddress: '0x951e9d19cadcd6d15e64a2eaa9b3e3d4f460c022',
    tokenDecimals: 18,
    exchangeAddress: '0xfea006c544e23d299b69614a5a66934fef173e9c'
  },
  {
    symbol: 'DNT',
    name: 'DANAT',
    tokenAddress: '0x2bb6e4609d65b8e07f2c9d41d2f12f2fba1960d9',
    tokenDecimals: 18,
    exchangeAddress: '0x1158b9c5c2477307a559913e34edafec8ea0a84f'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0d146302acf3276bc1ca7ca6b804dc029d5eb363',
    tokenDecimals: 18,
    exchangeAddress: '0x88c541370132fdb2a7b61d6baf2095749f82bd7a'
  },
  {
    symbol: 'COBR',
    name: 'CoinBroker',
    tokenAddress: '0x933dfc5622792b41245ab8313416caf0ba885ae7',
    tokenDecimals: 18,
    exchangeAddress: '0x09002d1a3be2f5a80d988fd522c2bf75eb9f69b6'
  },
  {
    symbol: 'FCI',
    name: 'FUTUREGOLDCOIN',
    tokenAddress: '0x050cbff7bff0432b6096dd15cd9499913ddf8e23',
    tokenDecimals: 18,
    exchangeAddress: '0x3bedaaa83aa55431901e8711c45ca2369540414a'
  },
  {
    symbol: 'CLC',
    name: 'CALYCOIN',
    tokenAddress: '0x7b8343ce76ce8e5792599faf7cf60351af9a6de3',
    tokenDecimals: 16,
    exchangeAddress: '0x247385eddae6d3388b6cbbdad265ccd3db51c995'
  },
  {
    symbol: 'HAT',
    name: 'HalfToken',
    tokenAddress: '0x097a0820574a8dfb8035c15d829dc25187fc4129',
    tokenDecimals: 18,
    exchangeAddress: '0xfcab592fdbc18d9b8c823a80fe5d931818156345'
  },
  {
    symbol: 'BNC',
    name: 'Bionic',
    tokenAddress: '0xef51c9377feb29856e61625caf9390bd0b67ea18',
    tokenDecimals: 8,
    exchangeAddress: '0xd9aa4f75373127a2f6ff99cb0d1ab54ce43f1ba8'
  },
  {
    symbol: 'FCQ',
    name: 'Fotrem Capital Token',
    tokenAddress: '0x6710cee627fa3a988200ffd5687cc1c814cef0f6',
    tokenDecimals: 0,
    exchangeAddress: '0x115c89f1fa3c5bb9a3bc1058907c31429d63514e'
  },
  {
    symbol: 'scom',
    name: 'Supercompute',
    tokenAddress: '0x44cf7dcfd023875d75267ba85f14366390daa3e1',
    tokenDecimals: 18,
    exchangeAddress: '0x325c752e7ebcdbbca66ee6690d522f25091d48cb'
  },
  {
    symbol: 'GRT',
    name: 'Genesis Raffle Token',
    tokenAddress: '0x0c8cdc16973e88fab31dd0fcb844ddf0e1056de2',
    tokenDecimals: 0,
    exchangeAddress: '0xa58bd3986d1e84a3a0f2d66cac2b54f17fecb786'
  },
  {
    symbol: 'COOS',
    name: 'COOS',
    tokenAddress: '0x24ebfc20bb2e1daadd98d28341ab37d0c154f4cb',
    tokenDecimals: 18,
    exchangeAddress: '0x384e75ce70ccf0890fb28a4f87ca99450ebab4fe'
  },
  {
    symbol: 'SAKU',
    name: 'SakuraDrops',
    tokenAddress: '0xe202e49088e8391ba4a54914938ca3c8391077bd',
    tokenDecimals: 0,
    exchangeAddress: '0xb57c9736234b3210cf848b9c0f39774ba0bd35a3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xdfcf6c4c82d25597927d06e487053398cfb4a784',
    tokenDecimals: 18,
    exchangeAddress: '0x7fe85b8daaf1f253b137b317fc50aa5ee847794d'
  },
  {
    symbol: 'WLK',
    name: 'WOLK TOKEN',
    tokenAddress: '0xf6b55acbbc49f4524aa48d19281a9a77c54de10f',
    tokenDecimals: 18,
    exchangeAddress: '0x8dca75db53bbe851a634677224278d532042c984'
  },
  {
    symbol: 'ETBS',
    name: 'EthBits ETBS Token',
    tokenAddress: '0x1b9743f556d65e757c4c650b4555baf354cb8bd3',
    tokenDecimals: 12,
    exchangeAddress: '0xe11a8488ee9d697c5426200e5bf39e9beb4c33d0'
  },
  {
    symbol: 'FLS',
    name: 'FLOS',
    tokenAddress: '0x124a7f6d9855f595ab006258f1d5cd5880637b86',
    tokenDecimals: 18,
    exchangeAddress: '0x82b03f9a6444ce8be14a92073fc08fd34601ff99'
  },
  {
    symbol: 'PANT',
    name: 'Panvala pan (test)',
    tokenAddress: '0x10a429b088e1fa159df832097a3fbdb778ba41b7',
    tokenDecimals: 18,
    exchangeAddress: '0xdfa1e41081b84396ef22b4c3c4b39159983cdf32'
  },
  {
    symbol: 'CARAT',
    name: 'Jewel Coin',
    tokenAddress: '0x207b893467904d076add0a44f94ac8c8d92d2e0c',
    tokenDecimals: 4,
    exchangeAddress: '0x8ae89ce25e1b026d6ac880dfeafd90ea9e06fa3e'
  },
  {
    symbol: 'DAV',
    name: 'DAV Token',
    tokenAddress: '0xd82df0abd3f51425eb15ef7580fda55727875f14',
    tokenDecimals: 18,
    exchangeAddress: '0xa89bc4402b94f3569c338fd83cd3a846761b7aea'
  },
  {
    symbol: 'FLS',
    name: 'FILS',
    tokenAddress: '0x7695fe3fc4177bf9591ca8f27a03a54797690347',
    tokenDecimals: 18,
    exchangeAddress: '0xd5d609f68ef9d5be6543945d30985512c0b418ea'
  },
  {
    symbol: 'BLZMT',
    name: 'BlazingMoonToken',
    tokenAddress: '0xf6ff4a4896e98a53e74e24c15f2a51a6abb5964a',
    tokenDecimals: 2,
    exchangeAddress: '0x5f2ce93aa9a3417ae18d882e95f96c4d4153d2b5'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x82b03f9a6444ce8be14a92073fc08fd34601ff99',
    tokenDecimals: 18,
    exchangeAddress: '0x599e9e38cb0d64e6da4f6c59799bfd872683a75f'
  },
  {
    symbol: 'BKN',
    name: 'Blockstate STO Token',
    tokenAddress: '0xbee6edf5fa7e862ed2ea9b9f42cb0849184aae85',
    tokenDecimals: 0,
    exchangeAddress: '0x2ebba2d935b1e1dc996d8f5b463c0a7628fe5880'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xd5d609f68ef9d5be6543945d30985512c0b418ea',
    tokenDecimals: 18,
    exchangeAddress: '0x7ae3a159f7a7c75b7aee8c4c350d5610c270814f'
  },
  {
    symbol: 'TENX',
    name: 'TenX Token',
    tokenAddress: '0x515ba0a2e286af10115284f151cf398688a69170',
    tokenDecimals: 18,
    exchangeAddress: '0xacd8be48b04eb9693128f6070382ee4f3ec39ce4'
  },
  {
    symbol: 'PAN',
    name: 'Panvala pan',
    tokenAddress: '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44',
    tokenDecimals: 18,
    exchangeAddress: '0xf53bbfbff01c50f2d42d542b09637dca97935ff7'
  },
  {
    symbol: 'GAZ',
    name: 'GRADZ',
    tokenAddress: '0x943bd545e019b485514c8474da6032656168fa99',
    tokenDecimals: 18,
    exchangeAddress: '0xc33389c871df5ce7a62b4193063c9f96d43cb23b'
  },
  {
    symbol: 'LOC',
    name: 'LockChain',
    tokenAddress: '0x5e3346444010135322268a4630d2ed5f8d09446c',
    tokenDecimals: 18,
    exchangeAddress: '0x875e249d348db0facd95d6b65d168c60d3ffca3e'
  },
  {
    symbol: 'ALICE',
    name: 'Alice',
    tokenAddress: '0x8aa18921bc476f0a69e6c376e28c34b993e0b106',
    tokenDecimals: 18,
    exchangeAddress: '0xd40494eb60a67f29f19ddceed728599752d41c88'
  },
  {
    symbol: 'STC',
    name: 'Shift Token',
    tokenAddress: '0xef7e0f278b149feab9ba6c98ecebcfc449d47d02',
    tokenDecimals: 8,
    exchangeAddress: '0x533b9a1d0f90354609f0329db0969346459f1691'
  },
  {
    symbol: 'CGC',
    name: 'CGCOINS',
    tokenAddress: '0x2d9765a94ff22e0ca3afc3e3f4b116de2b67582a',
    tokenDecimals: 16,
    exchangeAddress: '0x2cba1cda6e54965d208fd6ffd1fe62d40bcdbb74'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x2b3e6bcc143d82a2aab4f7768a42a57007a3f890',
    tokenDecimals: 18,
    exchangeAddress: '0xd14601fc4af6785c5f3fefb6ed1d5ba85fe64ea4'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0xda108db8739d269ef127b99e5e90a5690a66ae95',
    tokenDecimals: 18,
    exchangeAddress: '0x72fed1883b5a3dd766ed9d2dfe5ecceb91f3edcc'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x9456666c316d13e46687b109fddd536835734607',
    tokenDecimals: 18,
    exchangeAddress: '0xb5237256fd1cd366647cfd7e6d028cba77f06bd3'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0xdde23e00ecf0f4d25a8d73f9558f328bf85a167f',
    tokenDecimals: 18,
    exchangeAddress: '0x41b28aed84990ffc0cdcc96ace6f9ebe03bd5c1e'
  },
  {
    symbol: 'TARIF',
    name: 'TARIFF Coin',
    tokenAddress: '0x2bdd67e35ed0221a7c201863fa3891b619fd9aa3',
    tokenDecimals: 18,
    exchangeAddress: '0xbe4d60422f213bcb57cac22d17c8637ee9a6b970'
  },
  {
    symbol: 'MYM',
    name: 'Moyom',
    tokenAddress: '0xb9892f9a892f3e251fc58b9076c56add528eb8a6',
    tokenDecimals: 18,
    exchangeAddress: '0xa8fb35376907b6d3bf70319975e1aa40f52d68e9'
  },
  {
    symbol: 'ET20',
    name: 'EquityToken',
    tokenAddress: '0x00027d07fd8c14af7e05d335a44aa53e23575691',
    tokenDecimals: 8,
    exchangeAddress: '0xf1ec1c54f6de7d85ad887593bf9f11fe0ece7591'
  },
  {
    symbol: 'MUZK',
    name: 'DIGITRAXX',
    tokenAddress: '0xa94af6eab14d95f8872074c35cbeb7a8f4e1dd7b',
    tokenDecimals: 18,
    exchangeAddress: '0x55169e4e560caf2835d5d3db130aa7e5f1fdf4f6'
  },
  {
    symbol: 'HT',
    name: 'HypeToken',
    tokenAddress: '0x9bf598db8845b3223520f0ba6abe6585f49e2bc5',
    tokenDecimals: 18,
    exchangeAddress: '0x55e51019b831e5d0de4b945abb0dfab1ae8fe7a7'
  },
  {
    symbol: 'SHIT',
    name: 'ShitCoin',
    tokenAddress: '0xaa7fb1c8ce6f18d4fd4aabb61a2193d4d441c54f',
    tokenDecimals: 6,
    exchangeAddress: '0x1a51d113de28ccd5694829045636e6b6b74b4be0'
  },
  {
    symbol: 'B2BX',
    name: 'B2BX',
    tokenAddress: '0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393',
    tokenDecimals: 18,
    exchangeAddress: '0x13ec906827b85dbdbaf63cee92c0488def0306fa'
  },
  {
    symbol: 'PASS',
    name: 'Passive Silver',
    tokenAddress: '0xfe75b71b348165f60b5be7f356b42da9b333b2b7',
    tokenDecimals: 18,
    exchangeAddress: '0x5a1cbd3227277fae4f3abd4d091e058de50e6ac4'
  },
  {
    symbol: 'KOH',
    name: 'Kindness of Humanity',
    tokenAddress: '0x8ee6ec1d1d52b16f7ad0b3029a4ed26e3227e4dd',
    tokenDecimals: 8,
    exchangeAddress: '0xc9eab452757f70b3e6f9e39f7b9ca4ac0f3d1bfe'
  },
  {
    symbol: 'CLC',
    name: 'CloverCoin',
    tokenAddress: '0x1a94656a6245379bc0d9c64c402197528edb2bd1',
    tokenDecimals: 18,
    exchangeAddress: '0x339617707ede2bc3e166a56850fb5a1c6a335e5f'
  },
  {
    symbol: 'MCR',
    name: 'Microcoin',
    tokenAddress: '0x702fbba3084eabf8c070ae54e566d0d0532160b3',
    tokenDecimals: 0,
    exchangeAddress: '0xff3573b26f8cd15e311e2f5e095590e19c2410de'
  },
  {
    symbol: 'GLA',
    name: 'Gladius Token',
    tokenAddress: '0x71d01db8d6a2fbea7f8d434599c237980c234e4c',
    tokenDecimals: 8,
    exchangeAddress: '0xabe20dfe88130bdc0dab18b19203980b26833cf6'
  },
  {
    symbol: 'FXM',
    name: 'FXM',
    tokenAddress: '0xe1c4b784dc65b3dca8fe8f47b9a07cb094e7044f',
    tokenDecimals: 0,
    exchangeAddress: '0xb2394c218d2f36ec0a0b81b08952f00d321da4dc'
  },
  {
    symbol: 'VID',
    name: 'VideoCoin',
    tokenAddress: '0x2c9023bbc572ff8dc1228c7858a280046ea8c9e5',
    tokenDecimals: 18,
    exchangeAddress: '0x407721c86befc7243e041ec78c11152f86c4ace5'
  },
  {
    symbol: 'EMPR',
    name: 'empowr',
    tokenAddress: '0xe7d7b37e72510309db27c460378f957b1b04bd5d',
    tokenDecimals: 18,
    exchangeAddress: '0xdd093c0729fd5d347c7dfd4476ed3ee2fbc05f21'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x9e8534fd246256abc96b3ff24cd47f76eedcfc6f',
    tokenDecimals: 18,
    exchangeAddress: '0x96171cc50d8acc841b083916e9b9d59cc82c84fe'
  },
  {
    symbol: 'WNFT',
    name: 'Wrapped NFT',
    tokenAddress: '0x843e50d75dcc0bb7f7976bff4c5a865074b9694c',
    tokenDecimals: 18,
    exchangeAddress: '0xef9dfbd0f0ad3e9bbf2c99bf1659c1c38bb0a1e3'
  },
  {
    symbol: 'DCT',
    name: 'Dragon City Token',
    tokenAddress: '0x79c4e3d3cd2f6418cb60a1eb777e281b2c8795e6',
    tokenDecimals: 0,
    exchangeAddress: '0x99a3b55cce2a9ddb236900144f1c3f1162ae920f'
  },
  {
    symbol: 'TCC',
    name: 'Terracoin',
    tokenAddress: '0x6558ebe73d92c4bf58195055a5ecca7ab7aa4dc9',
    tokenDecimals: 2,
    exchangeAddress: '0xddb20b0742798aa3a323f37d017ca5f4d76409b3'
  },
  {
    symbol: 'AKJ',
    name: 'AKJ',
    tokenAddress: '0x5ab2d437ec6d8e52b2191efafd985826a73d97de',
    tokenDecimals: 18,
    exchangeAddress: '0x6a93f04d900ca94e5da9ce93a7f8139dcb6e524b'
  },
  {
    symbol: 'Mook',
    name: 'Moonrakers',
    tokenAddress: '0xe8ca1173f3d101cea72f5b4c85f1d2516aa15f51',
    tokenDecimals: 18,
    exchangeAddress: '0x2559d5c379cef05dfd18e97fefd288738d5d3ae6'
  },
  {
    symbol: 'IDEX',
    name: 'IDEX Token',
    tokenAddress: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
    tokenDecimals: 18,
    exchangeAddress: '0xf81521e83369fd9b661b804ba342993b2bcef430'
  },
  {
    symbol: 'SDT',
    name: 'Stardust',
    tokenAddress: '0x5ad1d541584be30ce5c43ab99a788d6461577be4',
    tokenDecimals: 18,
    exchangeAddress: '0x1452760b159644671b5a1077a61ced9308c0515e'
  },
  {
    symbol: 'FHT',
    name: 'FlameHyre Token',
    tokenAddress: '0xebd01df7e1e56e89a52c5de185377d3a2eef9a2b',
    tokenDecimals: 8,
    exchangeAddress: '0x890c0d32b7597a62d2508e4e261f0ac94a3b9059'
  },
  {
    symbol: 'ASH',
    name: 'Ash',
    tokenAddress: '0x71590d4ed14d9cbacb2cff8abf919ac4d22c5b7b',
    tokenDecimals: 18,
    exchangeAddress: '0x9a9a9b371dc9631b2b325f37ff76fa4dabde4a71'
  },
  {
    symbol: 'ALICE',
    name: 'Alice',
    tokenAddress: '0x33dcd369d697132de252884336225de31fb474b2',
    tokenDecimals: 18,
    exchangeAddress: '0x2677bf8489ae9a75f3c987735848366d513e6a2b'
  },
  {
    symbol: 'CELR',
    name: 'CelerToken',
    tokenAddress: '0x4f9254c83eb525f9fcf346490bbb3ed28a81c667',
    tokenDecimals: 18,
    exchangeAddress: '0x1e3740a030af8c755c888a0ee83ac9e79e09f4f1'
  },
  {
    symbol: 'BURNR',
    name: 'Burn Rebalance',
    tokenAddress: '0xce1a728c0a2dfc8e3e01d769ed5efccdd5230f10',
    tokenDecimals: 18,
    exchangeAddress: '0xfab3dfa4188794cd81a5fdc118b6b5ca874b24ab'
  },
  {
    symbol: 'ETH',
    name: 'Etherum',
    tokenAddress: '0xb3f11b7f046e253756106dc4380c096d39b93ea4',
    tokenDecimals: 18,
    exchangeAddress: '0x4924f67370085addb0e6e25ed19f7193688a46ed'
  },
  {
    symbol: 'EGPC',
    name: 'EGP Coin',
    tokenAddress: '0xbcc9fe1b74b2cc5949b129538b8616aa86ead5e9',
    tokenDecimals: 18,
    exchangeAddress: '0x2e874797cf704717cb5f28c523afe21f2f4e5308'
  },
  {
    symbol: 'FETH',
    name: 'FranzToken',
    tokenAddress: '0xd5a7b652d294869814b205a76b638a128d446db5',
    tokenDecimals: 18,
    exchangeAddress: '0x649bca8de37e8c7e9e8ecdb128da0f7fa6b1e296'
  },
  {
    symbol: 'SUX',
    name: 'SudEX',
    tokenAddress: '0x100005bc082d49eefffdc720864984bd7f3f7e5e',
    tokenDecimals: 18,
    exchangeAddress: '0xa78348775ba327302a8f41861bbe3c7bac6d8586'
  },
  {
    symbol: 'PRC',
    name: 'PRINCOIN',
    tokenAddress: '0xb74c5b590398ac63cc5888f7dd0c0b1eb4baabcd',
    tokenDecimals: 8,
    exchangeAddress: '0x0d093569a7bd3449a12d4904515e74938f8ca73c'
  },
  {
    symbol: 'BTB',
    name: 'BitBall',
    tokenAddress: '0x06e0feb0d74106c7ada8497754074d222ec6bcdf',
    tokenDecimals: 18,
    exchangeAddress: '0xd203aa2cbd71f608dfd86f83c742666c14c74615'
  },
  {
    symbol: 'GOOGT',
    name: 'Googlier Tellurium',
    tokenAddress: '0x0e5e5c1b981a20be2bfade0b114e5fe7ba6eff7f',
    tokenDecimals: 18,
    exchangeAddress: '0x60b3fc050d5eae72824624cf410845da71aa4f47'
  },
  {
    symbol: 'NRA',
    name: 'Noura Capital',
    tokenAddress: '0xdae0bd9371b2f14077a0461c92b0e8ade34efa84',
    tokenDecimals: 18,
    exchangeAddress: '0x4c6e26bedba9171639adfd9ffaddee5170625c1c'
  },
  {
    symbol: 'AMGO',
    name: 'AMGO - Arena Match Gold',
    tokenAddress: '0xf1ac7a375429719de0dde33528e2639b9a206eba',
    tokenDecimals: 18,
    exchangeAddress: '0x516075411008a5cc174dd68f5c0d2112b7aa04d7'
  },
  {
    symbol: 'SCOTT',
    name: 'Stop SCOTT',
    tokenAddress: '0xac1d236b6b92c69ad77bab61db605a09d9d8ec40',
    tokenDecimals: 18,
    exchangeAddress: '0x9a5826172f6b2b3fcdfc752f3a4fe835a19fc05b'
  },
  {
    symbol: 'BXV',
    name: 'BlockXV',
    tokenAddress: '0xed35a93b1d52d66d6f9e840d85412730ee206cbc',
    tokenDecimals: 18,
    exchangeAddress: '0x9a4a452aafbe4152fbc3fcbc489525f3c5c2bff4'
  },
  {
    symbol: 'RAYA',
    name: 'RAYA',
    tokenAddress: '0xe0337d875165e21092d0f382e5cf4c1ccaba6809',
    tokenDecimals: 18,
    exchangeAddress: '0xa5420452492ac4d543a6986e356f2288ab663211'
  },
  {
    symbol: 'HYST',
    name: 'Help YourSelf Token',
    tokenAddress: '0x6dc0a2a91d15461e8a0dfc64a387a7c4637b3fdb',
    tokenDecimals: 18,
    exchangeAddress: '0x929eb6662fcbe74de09b6858d3e29f75509da916'
  },
  {
    symbol: 'FRX',
    name: 'FireX',
    tokenAddress: '0x0d4870dfca0101856f5cef969a1df2757ae0a280',
    tokenDecimals: 2,
    exchangeAddress: '0xe477f5d507e6e6ce008c03dcaae2f167ee715b49'
  },
  {
    symbol: 'ZUC',
    name: 'Zeuxcoin',
    tokenAddress: '0x5b7e386b636abff1e83fc7101c33282acba8e1a5',
    tokenDecimals: 18,
    exchangeAddress: '0x23467d55447b5937fe204912aad1280e83286a83'
  },
  {
    symbol: 'RFR',
    name: 'Refereum',
    tokenAddress: '0xd0929d411954c47438dc1d871dd6081f5c5e149c',
    tokenDecimals: 4,
    exchangeAddress: '0xc3ecb5727f2a566b98611368232b1dce3ba9086f'
  },
  {
    symbol: 'AUTO',
    name: 'Luxury Auto Coin',
    tokenAddress: '0x0ed55f31ee2f9875a738c6496842b0e6519d7833',
    tokenDecimals: 4,
    exchangeAddress: '0xe32dadfeada597947b64ee0dc9eecd5c77d8bd9c'
  },
  {
    symbol: 'CRB',
    name: 'CrackB',
    tokenAddress: '0xf2b06cf6391e95b82ec7f5aece3eefa76c291fa9',
    tokenDecimals: 18,
    exchangeAddress: '0xb1f64f8fa64a792620cabac45397f9bb21822f6e'
  },
  {
    symbol: 'STH',
    name: 'Snatch',
    tokenAddress: '0x572e2bf037bf0eff8718dc37aec53c0517b4e5cf',
    tokenDecimals: 18,
    exchangeAddress: '0xfeba66b33d6854df0caefecd89b3c15b2da058b9'
  },
  {
    symbol: 'RBPC',
    name: 'Relax Buddy Token',
    tokenAddress: '0x050508637d2878755cb29b2be4320ac24d5ce4ff',
    tokenDecimals: 18,
    exchangeAddress: '0x7aac96b23b2884cfe8045e7d70b0420b8319f965'
  },
  {
    symbol: 'A',
    name: 'Alpha Coin',
    tokenAddress: '0xb13ece3a08057ba0ca0671ebf8f78adb462d8214',
    tokenDecimals: 12,
    exchangeAddress: '0x584b248c131f56c5e0e6a59ff7c2d21cfac20e35'
  },
  {
    symbol: 'Fab',
    name: 'Fabcoins',
    tokenAddress: '0xdcc3e7cd353dd71a1ca77d423f194995a805d41c',
    tokenDecimals: 0,
    exchangeAddress: '0xd169725b804d14878679f50b04ae7aa11e5fd1a7'
  },
  {
    symbol: 'BIL',
    name: 'BIL Coin',
    tokenAddress: '0x34833001d99851b85729606f241ca872d1a1e461',
    tokenDecimals: 2,
    exchangeAddress: '0xca0a8af352bd6380dc3872cbc0eddf75420a2b59'
  },
  {
    symbol: 'WBNB',
    name: 'Wrapped BNB',
    tokenAddress: '0x24dc3617963e0422c826bc7705b378ab43da517a',
    tokenDecimals: 18,
    exchangeAddress: '0xb75d470d939d052f25cdd0abf4ba680ebad75c45'
  },
  {
    symbol: 'LEX',
    name: 'Lexington',
    tokenAddress: '0x8d063ff3a621718a31892ca7de7704d34e988f0c',
    tokenDecimals: 18,
    exchangeAddress: '0x046a77358dd6c29512486d7ec5604f7fcbc36d3e'
  },
  {
    symbol: 'HBT',
    name: 'Hubiits',
    tokenAddress: '0xdd6c68bb32462e01705011a4e2ad1a60740f217f',
    tokenDecimals: 15,
    exchangeAddress: '0xb6ee174accf61bc9aa570894daed5d71c2473fb9'
  },
  {
    symbol: 'IOST',
    name: 'IOSToken',
    tokenAddress: '0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab',
    tokenDecimals: 18,
    exchangeAddress: '0x16e7036c777bbb1316b340d8123bc6c2e3b193ec'
  },
  {
    symbol: 'CCS',
    name: 'Crypto Credit Swap',
    tokenAddress: '0x049b8a66fe1bf8be509d5c454c83547c4f0c1190',
    tokenDecimals: 18,
    exchangeAddress: '0x356ce7b8b450142af811908a372e3c40801f69bc'
  },
  {
    symbol: 'XSC',
    name: 'CrowdstartCoin',
    tokenAddress: '0x0f513ffb4926ff82d7f60a05069047aca295c413',
    tokenDecimals: 18,
    exchangeAddress: '0x74128a6ab3e22d881661f25a50d48ce4922213e2'
  },
  {
    symbol: 'HT',
    name: 'HuobiToken',
    tokenAddress: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    tokenDecimals: 18,
    exchangeAddress: '0x60058dd4cbab1870d2b8741fab24725a2f110054'
  },
  {
    symbol: 'VIU',
    name: 'Viuly Token',
    tokenAddress: '0x464baddce9bd32581a7d59d9bb8350c7c7764668',
    tokenDecimals: 18,
    exchangeAddress: '0x7fd3b59b85eab3bc61fc552fddce10f1e8485ba1'
  },
  {
    symbol: 'TRO',
    name: 'TROLL',
    tokenAddress: '0x692093032661c2ae1dfa152610784ce8054fc842',
    tokenDecimals: 18,
    exchangeAddress: '0x1ca16f7ec104007fdde1d396742eb9ea5f64d035'
  },
  {
    symbol: 'XGP',
    name: 'AIGO Protocol',
    tokenAddress: '0x37f4ade226a15858d9eee4bb4cbc1e70ccaf290d',
    tokenDecimals: 18,
    exchangeAddress: '0x42b666e126f0339b8d7a11398f7c8560db3e4bcc'
  },
  {
    symbol: 'POD',
    name: 'Podcash',
    tokenAddress: '0x8c971c1954e1ea0e78e1dd9e4c38be68dd66be10',
    tokenDecimals: 18,
    exchangeAddress: '0xe128e66f87390d781f8834fc455fe9f2491657ee'
  },
  {
    symbol: 'FUSE',
    name: 'Fuse Token',
    tokenAddress: '0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d',
    tokenDecimals: 18,
    exchangeAddress: '0xf9a204774ac595216c3c4e4249b7624e34ee52d5'
  },
  {
    symbol: 'STG',
    name: 'Storag Coin',
    tokenAddress: '0x89d3563724c6f0c1a18ddf6427ec43a35ed22e3f',
    tokenDecimals: 8,
    exchangeAddress: '0x3a127c50dc472abc627a3ca59ee8cdc4596e6465'
  },
  {
    symbol: 'CBI',
    name: 'Coin Bank Int',
    tokenAddress: '0x43e5f59247b235449e16ec84c46ba43991ef6093',
    tokenDecimals: 18,
    exchangeAddress: '0xe316a7fe8bf258e48040e55ab7b49950e123e8e7'
  },
  {
    symbol: 'DLO',
    name: 'Delio',
    tokenAddress: '0x8a6284155d31a62c531f70daacff3ada333f9019',
    tokenDecimals: 18,
    exchangeAddress: '0xf145168537885ae5340cf7ce3231782da5b14af1'
  },
  {
    symbol: 'DMSK',
    name: 'Damski',
    tokenAddress: '0xbffd431ba4adac00673c87577a55c192a03821d5',
    tokenDecimals: 2,
    exchangeAddress: '0xc5c6d308863a662b7669dabf71c8ff6dae1f156d'
  },
  {
    symbol: 'TFC',
    name: 'The First Coin',
    tokenAddress: '0x210c203e8f05be72b69624fe08b9a5530d51ee36',
    tokenDecimals: 18,
    exchangeAddress: '0x517c3aafb5a7700dae5f00da65f31046ce964f79'
  },
  {
    symbol: 'URING',
    name: 'Uniring',
    tokenAddress: '0x21647310e9d1ed929eb9ab626d34e4df3b74a0a1',
    tokenDecimals: 0,
    exchangeAddress: '0xad1f9f7a1ba2d594ae6a8577730b9229be5d07d9'
  },
  {
    symbol: 'TCAD',
    name: 'TrueCAD',
    tokenAddress: '0x00000100f2a2bd000715001920eb70d229700085',
    tokenDecimals: 18,
    exchangeAddress: '0xf996d7d9bacb9217ca64bbce1b1cd72e0e886be6'
  },
  {
    symbol: 'DOR',
    name: 'DoradoToken',
    tokenAddress: '0x906b3f8b7845840188eab53c3f5ad348a787752f',
    tokenDecimals: 15,
    exchangeAddress: '0x3eaf588988212a76275d6de06705583426b7f53e'
  },
  {
    symbol: 'DEFI',
    name: 'DEFI-ORG-TUTORIAL',
    tokenAddress: '0x1ba4dd5306528a92906193b070980ccb2322a2e4',
    tokenDecimals: 18,
    exchangeAddress: '0xc410d34951561851536b3f97b47ef4b054dd9a59'
  },
  {
    symbol: 'STZ',
    name: 'STZ',
    tokenAddress: '0xec71a153b29da4821ff1d58eb9c72fff75a1fc48',
    tokenDecimals: 18,
    exchangeAddress: '0x05bb3b925d6f5758cab8f6e7014f01e970fc647a'
  },
  {
    symbol: 'CHL',
    name: 'ChelleCoin',
    tokenAddress: '0x8b8e088c7ad40d70d0a8183a399c8f9c24b5c8d8',
    tokenDecimals: 18,
    exchangeAddress: '0x3a9effa375ba10d579d9fb6a87cd18cef370a155'
  },
  {
    symbol: 'eCell',
    name: 'Ethereum Cell Network',
    tokenAddress: '0x9b62ec1453cea5dde760aaf662048ca6eeb66e7f',
    tokenDecimals: 2,
    exchangeAddress: '0xe6741e67f4ba3e8d74a3ca286a7803482bf37e42'
  },
  {
    symbol: 'SURF',
    name: 'Surf Coin',
    tokenAddress: '0x93f54091e83614ed553b31833cf24dbcd0952428',
    tokenDecimals: 18,
    exchangeAddress: '0xfaac9e66c66fc08a1d27d0b0b375fd44d4c669dc'
  },
  {
    symbol: ' TRIS',
    name: 'TRISKAIDEKAPHOBIA',
    tokenAddress: '0x73aa6b881552451eeba7533a1a58b297ed549f3c',
    tokenDecimals: 18,
    exchangeAddress: '0xe5bb9c609c45ff8d04af1680b16b13227e8f71b0'
  },
  {
    symbol: 'AZ',
    name: 'Azbit',
    tokenAddress: '0x77fe30b2cf39245267c0a5084b66a560f1cf9e1f',
    tokenDecimals: 18,
    exchangeAddress: '0x29fe25a3872d859cb184ffd65f7259cef85de0fb'
  },
  {
    symbol: 'MESH',
    name: 'BlockMesh',
    tokenAddress: '0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f',
    tokenDecimals: 18,
    exchangeAddress: '0x7c5d823284f550ced7ae7093e7325631a69c29da'
  },
  {
    symbol: 'CHZ',
    name: 'chiliZ',
    tokenAddress: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
    tokenDecimals: 18,
    exchangeAddress: '0x00901e311c0f298beaf3445ff8072b8d6c70a205'
  },
  {
    symbol: 'REALTOKEN-9943-MARLOWE-ST-DETROIT-MI',
    name: 'RealToken 9943 Marlowe Street Detroit MI',
    tokenAddress: '0xe5f7ef61443fc36ae040650aa585b0395aef77c8',
    tokenDecimals: 18,
    exchangeAddress: '0x474f8f008f07cd42200bc6dabc1db2206827ee6e'
  },
  {
    symbol: 'ABT',
    name: 'ArcBlock',
    tokenAddress: '0xb98d4c97425d9908e66e53a6fdf673acca0be986',
    tokenDecimals: 18,
    exchangeAddress: '0x450805ef9cbdab907d8b519006010b093da7f8e7'
  },
  {
    symbol: 'XIO',
    name: 'BOMBX',
    tokenAddress: '0x3205df88cf95b5a702f2b6a1cc10e2075f54387c',
    tokenDecimals: 8,
    exchangeAddress: '0x6b6fd86a4797e2fbce26eb6f5b911b72f1d22f06'
  },
  {
    symbol: 'ALIVE',
    name: 'PROOF OF LIFE',
    tokenAddress: '0x1e0c1f1ef51bfc6f9c7e1cca86574c7fc3d3a050',
    tokenDecimals: 18,
    exchangeAddress: '0xbb7f6655c51e7459a2c46986342f6a20039d2ba3'
  },
  {
    symbol: 'KKC',
    name: 'KRYPTOKLUB.com',
    tokenAddress: '0x995876d31451b987d565b42d698939ad8026d72a',
    tokenDecimals: 18,
    exchangeAddress: '0x7d1788fc6b977a56d71e325dc4cf5a4f56d6e815'
  },
  {
    symbol: 'KKO',
    name: 'KRYPTO KLUB OG',
    tokenAddress: '0x1ad16a873dab4be77c26494d659643c87b5e0986',
    tokenDecimals: 18,
    exchangeAddress: '0xa224599e1c928d5b87fc7f4f318cffde422c7a64'
  },
  {
    symbol: 'CPE',
    name: 'Clustersphere',
    tokenAddress: '0x28441ed6ebaad179a2c10a0a5d46bf3f3ace17de',
    tokenDecimals: 18,
    exchangeAddress: '0x8744f3d10563440a321b0b1daff05f7e0f846f48'
  },
  {
    symbol: 'PDC',
    name: 'PLATINUM DIGITAL CORPORATED',
    tokenAddress: '0xaf0336137c2f68e881cea7d95059e6b2ddcf7e57',
    tokenDecimals: 18,
    exchangeAddress: '0xc16ff20c1640ca460ec8418c6f2a8ed96f8acd8c'
  },
  {
    symbol: 'XYO',
    name: 'XY Oracle',
    tokenAddress: '0x55296f69f40ea6d20e478533c15a6b08b654e758',
    tokenDecimals: 18,
    exchangeAddress: '0xae51c1381ae5be0d55231b2c24106fcffd9791a6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x21e6980e3b60c73cdbaa614aa28f800581c58f40',
    tokenDecimals: 18,
    exchangeAddress: '0x78509ef2cf8257c7d2067d9bafd7c5a2a521b3e4'
  },
  {
    symbol: 'UCN',
    name: 'UChain Token',
    tokenAddress: '0xaaf37055188feee4869de63464937e683d61b2a1',
    tokenDecimals: 18,
    exchangeAddress: '0x2b2651f7f56d08a9d2adcd9789c8e707eec54e26'
  },
  {
    symbol: 'sETH',
    name: 'Synth sETH',
    tokenAddress: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
    tokenDecimals: 18,
    exchangeAddress: '0xe9cf7887b93150d4f2da7dfc6d502b216438f244'
  },
  {
    symbol: 'BLM',
    name: 'Blume Token',
    tokenAddress: '0x2722690a68f97e3361b958eb0b1dedf39190f6ad',
    tokenDecimals: 18,
    exchangeAddress: '0xb4d41a54ee7a6ca54368480573463a5195ecbc88'
  },
  {
    symbol: 'SPRK',
    name: 'Sparkle!',
    tokenAddress: '0x286ae10228c274a9396a05a56b9e3b8f42d1ce14',
    tokenDecimals: 18,
    exchangeAddress: '0x22ffcae266f3b4551c42872b852e0d7415fbec1d'
  },
  {
    symbol: 'GMR',
    name: 'GimmerToken',
    tokenAddress: '0x9b8d5f3402f74c7a61d9f09c32d3ca07b45c1466',
    tokenDecimals: 18,
    exchangeAddress: '0x2bc09ebe244a3e972171740c52102888b6726f2d'
  },
  {
    symbol: 'CYBO',
    name: 'Cybone',
    tokenAddress: '0x7a4c9e42f7bdb9868b276223e6cb71b0500c59d2',
    tokenDecimals: 18,
    exchangeAddress: '0xd898112de4a7dfd9a95fd627f14986d9dc6108da'
  },
  {
    symbol: 'SHCH',
    name: 'ShcherbaCoin',
    tokenAddress: '0x1c4c60edba4c8c09ce8d3dc7c09a670a55c57767',
    tokenDecimals: 18,
    exchangeAddress: '0x85f155c4864a90f37ddc9cf71d02e48cd871cf42'
  },
  {
    symbol: 'ETH12EMACO',
    name: 'ETH 12 EMA Crossover Set',
    tokenAddress: '0x2c5a9980b41861d91d30d0e0271d1c093452dca5',
    tokenDecimals: 18,
    exchangeAddress: '0xdb15ec4ce611cdc16223c31fe1643a59b4fa2801'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0x9e7d713d6bceaed3a694459c297a45fc2ab54b19',
    tokenDecimals: 18,
    exchangeAddress: '0xd43f643f237f64c166395e422c952aa7edec91d2'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0xedeead7255299a0e27561546bcc99b6d7a96abe4',
    tokenDecimals: 18,
    exchangeAddress: '0xe2279c174fdf996cef6a97fa3064072f8c0e4149'
  },
  {
    symbol: 'HNY',
    name: 'HoneyCoin',
    tokenAddress: '0x676c6bf67cb4fa1f663aee59fd9ecffcab5daf45',
    tokenDecimals: 18,
    exchangeAddress: '0xefd2add9e09075576d8728d075b38e0c94c77e95'
  },
  {
    symbol: 'ZNA',
    name: 'ZNA Token',
    tokenAddress: '0x59c3ba7a0a4c26955037710654f60d368303b3e1',
    tokenDecimals: 18,
    exchangeAddress: '0x9d7e623e7ca2e3606bae00a346178174dc9a94b3'
  },
  {
    symbol: 'AID',
    name: 'aidus',
    tokenAddress: '0xd178b20c6007572bd1fd01d205cc20d32b4a6015',
    tokenDecimals: 8,
    exchangeAddress: '0x7ec394424250ff4355b7161ce88d767c1153688d'
  },
  {
    symbol: 'NCA',
    name: 'Nuclear',
    tokenAddress: '0x7542013f90df4d24ae1b18641bd9e223f5524320',
    tokenDecimals: 6,
    exchangeAddress: '0x90d99e6478a82a6e6f1d31b3a4742fc8139b38fb'
  },
  {
    symbol: 'LLion',
    name: 'Lydian Lion Token',
    tokenAddress: '0x43e41e7129d46a2b8601d2e4331342609e058357',
    tokenDecimals: 5,
    exchangeAddress: '0xd4a3154f7265fda2202dff7c245f59dac4e8e203'
  },
  {
    symbol: '1UP',
    name: 'Uptrennd',
    tokenAddress: '0x07597255910a51509ca469568b048f2597e72504',
    tokenDecimals: 18,
    exchangeAddress: '0x609c8a0248ad2308a5e58658f204bdbd1fe14a39'
  },
  {
    symbol: 'YPSI',
    name: 'Ypsi Pay',
    tokenAddress: '0x5008cc9796f15c052f68b502ed5ad56f49c3665d',
    tokenDecimals: 18,
    exchangeAddress: '0xffbe1fe0092905ed32d32c94412939d29e9a22f8'
  },
  {
    symbol: 'HFT',
    name: 'Insula IM Token ',
    tokenAddress: '0x8c382d6ebd49a6e3cd6d95b85115e19b881c9c07',
    tokenDecimals: 18,
    exchangeAddress: '0x1f7219e165a1aefe8336c118aeaddf30d1d31d81'
  },
  {
    symbol: 'PROPS',
    name: 'Props Token',
    tokenAddress: '0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41',
    tokenDecimals: 18,
    exchangeAddress: '0x2b3580aa8b39097e2d6df5d65c6f77370e800b75'
  },
  {
    symbol: 'brand',
    name: 'SHUIWW',
    tokenAddress: '0x2a1a7814019fd8adc337179c4009ab69c3794309',
    tokenDecimals: 18,
    exchangeAddress: '0x3c59de11ee93a15d172d35c6c78c245872ef932e'
  },
  {
    symbol: 'REALTOKEN-16200-FULLERTON-AVE-DETROIT-MI',
    name: 'RealToken 16200 Fullerton Ave Detroit MI',
    tokenAddress: '0x22c8ecf727c23422f47093b562ec53c139805301',
    tokenDecimals: 18,
    exchangeAddress: '0xc215ebfe68c15fcafcb848105ef5f5b1158313cb'
  },
  {
    symbol: 'USDx',
    name: 'dForce',
    tokenAddress: '0xeb269732ab75a6fd61ea60b06fe994cd32a83549',
    tokenDecimals: 18,
    exchangeAddress: '0xe5a69d694d0df71a5eea63432ee74f2c4465a56f'
  },
  {
    symbol: 'TAUD',
    name: 'TrueAUD',
    tokenAddress: '0x00006100f7090010005f1bd7ae6122c3c2cf0090',
    tokenDecimals: 18,
    exchangeAddress: '0x88df13889e20efa93ff9a0c08f101f431bd9ddd7'
  },
  {
    symbol: 'THKD',
    name: 'TrueHKD',
    tokenAddress: '0x0000852600ceb001e08e00bc008be620d60031f2',
    tokenDecimals: 18,
    exchangeAddress: '0x505c02b4aa1286375fbdf0c390ac0fe9209dcb05'
  },
  {
    symbol: 'TGBP',
    name: 'TrueGBP',
    tokenAddress: '0x00000000441378008ea67f4284a57932b1c000a5',
    tokenDecimals: 18,
    exchangeAddress: '0x6bfa119a191576ba26bc5e711432aca0cfda04de'
  },
  {
    symbol: '.co.uk',
    name: 'devet',
    tokenAddress: '0x580021753eae14923c17bfa250b0ed49ec3b287d',
    tokenDecimals: 18,
    exchangeAddress: '0x188e6d3a3b51bc007866303bb05a0ca3a259459e'
  },
  {
    symbol: 'GALT',
    name: 'Galt',
    tokenAddress: '0x8b3b9a86d72a68c95a43030710b6abe6a0e413e6',
    tokenDecimals: 18,
    exchangeAddress: '0x397e445a920cc52ed5cf8479ba2e479dfec579c8'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xddd27201dc2f4a3a0afdcff8a807daf0b84c5dc9',
    tokenDecimals: 18,
    exchangeAddress: '0xb3b30571cb6cd73f805e699f635ce3ed0353b2be'
  },
  {
    symbol: 'KNCT',
    name: 'KnoxsterChain',
    tokenAddress: '0xb5e62a10c362a479be1f629f01a7e8146ea7a748',
    tokenDecimals: 18,
    exchangeAddress: '0xb1bf3699775ae50ee2e36ab47ef27daf40f8b55f'
  },
  {
    symbol: 'COINN',
    name: 'Conexao Coin',
    tokenAddress: '0x106f2d734e12545b4d78fc057934905508f1fe24',
    tokenDecimals: 18,
    exchangeAddress: '0x60bd743c253ecf265c50ef9274e353ced295b296'
  },
  {
    symbol: 'TAL',
    name: 'Thaler',
    tokenAddress: '0x375a08ce3a460f20bbafd282be1e3579a2c31f41',
    tokenDecimals: 18,
    exchangeAddress: '0x18175bbd777586746e1894ec97da3f979d0f67d8'
  },
  {
    symbol: 'URING',
    name: 'Uniring',
    tokenAddress: '0xe857581ba3ed180755f65c5403bf06c084987810',
    tokenDecimals: 18,
    exchangeAddress: '0x38dac482874e1c47af774bda592921a8b86f8611'
  },
  {
    symbol: 'AKRO',
    name: 'Akropolis',
    tokenAddress: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    tokenDecimals: 18,
    exchangeAddress: '0x8633c63af13e2e5822c4d074fc665ff55982956f'
  },
  {
    symbol: 'CREDIT',
    name: 'CREDIT',
    tokenAddress: '0x2003140a82c9a0cb32636526a43aaa9f7f88022b',
    tokenDecimals: 18,
    exchangeAddress: '0x837a108cfcfa80a0adadf8c048f163c381f48f7e'
  },
  {
    symbol: 'STC',
    name: 'Stellar Classic',
    tokenAddress: '0xf03ff401d952ba146d025788567a146f96bb81fc',
    tokenDecimals: 2,
    exchangeAddress: '0x24c872bfb44a7d37100bd15bed00d7674bf665c9'
  },
  {
    symbol: 'BIZT',
    name: 'Bizanc ERC20 Token',
    tokenAddress: '0x750eab388d8d2b0be4e6b19ad861458957c37306',
    tokenDecimals: 18,
    exchangeAddress: '0x00c51df25b4e98c8e3c8c14d416d906d4dc002a4'
  },
  {
    symbol: 'DCS',
    name: 'DCS TOKEN',
    tokenAddress: '0xbded3f7537e75d6c38c036a3a788a549afde12b1',
    tokenDecimals: 8,
    exchangeAddress: '0x2fe1992ce4d16445698d217fd0163a4896ab3e34'
  },
  {
    symbol: 'SBK',
    name: 'ShadyBucks',
    tokenAddress: '0x3579e381caf332af7f5f4f3177924308571322d3',
    tokenDecimals: 2,
    exchangeAddress: '0x8f43200eb9a7508f599c3109fd49700d0d43c568'
  },
  {
    symbol: 'THD',
    name: 'Thanks Dollar',
    tokenAddress: '0xc3ed0908d7f588f900648b81414f7de8fc7ce3c4',
    tokenDecimals: 18,
    exchangeAddress: '0x5ef41ba2073bd87c4b8c46b733a87dadfef3258d'
  },
  {
    symbol: 'GEMNET',
    name: 'Gemnet',
    tokenAddress: '0x9e18b959e5eed7989bf4341f911f21128ecf21cd',
    tokenDecimals: 18,
    exchangeAddress: '0x4f686b3e9d2327705b2cfc5abd0f03f494763c96'
  },
  {
    symbol: 'UBT',
    name: 'UniBright',
    tokenAddress: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
    tokenDecimals: 8,
    exchangeAddress: '0xfc96e234d4b31c63051e707105fcc4aba37807fa'
  },
  {
    symbol: 'BUSD',
    name: 'Binance USD',
    tokenAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    tokenDecimals: 18,
    exchangeAddress: '0x25c610eee8f59768c26567c388986aab3467a3e3'
  },
  {
    symbol: 'SEEDS',
    name: 'Seeds',
    tokenAddress: '0x61404d2d3f2100b124d6827d3f2ddf6233cd71c0',
    tokenDecimals: 10,
    exchangeAddress: '0x1dcea7a07579c8f7638e2863e07c682581d3740c'
  },
  {
    symbol: 'RYC',
    name: 'ReyerCoin',
    tokenAddress: '0x1a3111d682a6719992dbefa616541caac29991b8',
    tokenDecimals: 1,
    exchangeAddress: '0xf85abd7d8718efc0a931ce6a46f88481d01cb57d'
  },
  {
    symbol: 'EVT',
    name: 'ElevationToken',
    tokenAddress: '0x5aaa2182459377b6ca18b10712f9f602140764af',
    tokenDecimals: 8,
    exchangeAddress: '0x3d835084063c1d742d764b4c4587fd3e9defa772'
  },
  {
    symbol: 'SDD',
    name: 'Seeded',
    tokenAddress: '0x4cdc1e87fab12d080cd361561d10a420c4e25865',
    tokenDecimals: 4,
    exchangeAddress: '0x10a904ada6029bb50724b5a6fb20e0f523cec917'
  },
  {
    symbol: 'JURM',
    name: 'Juriseum',
    tokenAddress: '0x34dd5edfed51c632d1d4d2502bc901efb5fdfcd4',
    tokenDecimals: 18,
    exchangeAddress: '0x87ba7814c5748b8ecdd136bcc856b1b2322a9613'
  },
  {
    symbol: 'PETH',
    name: 'Pooled Ether',
    tokenAddress: '0xf53ad2c6851052a81b42133467480961b2321c09',
    tokenDecimals: 18,
    exchangeAddress: '0x63a5a3027268a82d3e6034b8a8959cb9e505e3ae'
  },
  {
    symbol: 'SEV',
    name: 'SLEEVES',
    tokenAddress: '0xba32286b0296f0a86111644b74472d8aabae3027',
    tokenDecimals: 8,
    exchangeAddress: '0xc671b5be0a59b51284a346b11334c7264aefdf3c'
  },
  {
    symbol: 'TCHN',
    name: 'Techan',
    tokenAddress: '0xa52db128b8983429cfec2cf28c20041ff6256a23',
    tokenDecimals: 0,
    exchangeAddress: '0x5f765fa32f5316903168adc392d812ca65943545'
  },
  {
    symbol: 'BOOK',
    name: 'BookCoin',
    tokenAddress: '0xe159915f046acb4ebaea811969b54a738350074e',
    tokenDecimals: 0,
    exchangeAddress: '0xce7729024ef3b0dc0baecc68f152f66c21f5cb19'
  },
  {
    symbol: 'Blog',
    name: 'Blogcoin',
    tokenAddress: '0xa72158c0bfd7137f879e3f2b0a05c904c5517b24',
    tokenDecimals: 8,
    exchangeAddress: '0x46d8c001384243e97eb39675fadb2b2208e87915'
  },
  {
    symbol: 'sUSD',
    name: 'Synth sUSD',
    tokenAddress: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    tokenDecimals: 18,
    exchangeAddress: '0xb944d13b2f4047fc7bd3f7013bcf01b115fb260d'
  },
  {
    symbol: 'POC',
    name: 'leibniz',
    tokenAddress: '0x80037ba0b221befe2c578f8c42b7d4dfe463fd96',
    tokenDecimals: 8,
    exchangeAddress: '0xe4f5c46327a705e3ea2ba80c3ee6ba266b06a63b'
  },
  {
    symbol: 'STKN',
    name: 'SToken',
    tokenAddress: '0xcbd185558e2a1ad9dece293aee09a2785c047d92',
    tokenDecimals: 8,
    exchangeAddress: '0xa75c8f6985fe1364009162667bc95c3783ff1ceb'
  },
  {
    symbol: 'AKRO',
    name: 'Akropolis',
    tokenAddress: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
    tokenDecimals: 18,
    exchangeAddress: '0x8633c63af13e2e5822c4d074fc665ff55982956f'
  },
  {
    symbol: 'KLOWN',
    name: 'Ether Clown',
    tokenAddress: '0xc97a5cdf41bafd51c8dbe82270097e704d748b92',
    tokenDecimals: 7,
    exchangeAddress: '0xfade164262e25d9b5c45435307afa7483409cfac'
  },
  {
    symbol: 'ZAR',
    name: 'Digital Rand',
    tokenAddress: '0x2832461dc883d4a376025cf1f4feaa80dd1c68d8',
    tokenDecimals: 6,
    exchangeAddress: '0x712278f28b1e06e42743d21c6cb068ab544dc3c9'
  },
  {
    symbol: 'SNAYL',
    name: 'Snayl Token',
    tokenAddress: '0x7e294dcc20386c17574d9c00386ce608a99aa811',
    tokenDecimals: 0,
    exchangeAddress: '0x2282964928b7f13523c4e8964fa7f4c31725e408'
  },
  {
    symbol: '0xBUTT',
    name: 'ButtCoin v2.0',
    tokenAddress: '0x5556d6a283fd18d71fd0c8b50d1211c5f842dbbc',
    tokenDecimals: 8,
    exchangeAddress: '0x6e3a0c320226049a3f5fc5a96c0f0843b7eda943'
  },
  {
    symbol: 'DPC',
    name: 'Dan Pan Coin',
    tokenAddress: '0xd434e2ec93be12d72934543f68278c2b8e0cb3fc',
    tokenDecimals: 2,
    exchangeAddress: '0xb215b9aea109bdae015bb19b74fae47ce23bddc2'
  },
  {
    symbol: 'AROHN',
    name: 'ArohnToken',
    tokenAddress: '0xc7b39d86d6ee9814a8a312c605584d5cdaea0d27',
    tokenDecimals: 18,
    exchangeAddress: '0xe98fbf67a8ed900c1c37edc37812ef4856a2c83b'
  },
  {
    symbol: 'GOOGN',
    name: 'Googlier Indium',
    tokenAddress: '0xc7514b42453c492fd95d3e2e41685fab4991f28e',
    tokenDecimals: 18,
    exchangeAddress: '0xf7dc6c1d416ddc186d3abb2281ff8a15603606da'
  },
  {
    symbol: 'MAN',
    name: 'MATRIX AI Network',
    tokenAddress: '0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d',
    tokenDecimals: 18,
    exchangeAddress: '0xb7c19a2c2ee3ec5011995356b508391a5d4f09e3'
  },
  {
    symbol: 'SVG',
    name: 'Surge Token',
    tokenAddress: '0xffc97142863e9b2583588e3705e2322ef0369635',
    tokenDecimals: 18,
    exchangeAddress: '0x6b9b209033f7364edb7af9e40da2b791bed77b8d'
  },
  {
    symbol: 'PPI',
    name: 'PiedPiperCoin',
    tokenAddress: '0x5a3c9a1725aa82690ee0959c89abe96fd1b527ee',
    tokenDecimals: 18,
    exchangeAddress: '0xcd6ae8b43a9551f28c91e8dffc20a673f618d73b'
  },
  {
    symbol: 'WALT',
    name: 'WaltCoin',
    tokenAddress: '0xde01d7e88840fe55cb530f5bc950ae943b0ea51b',
    tokenDecimals: 14,
    exchangeAddress: '0x2fe8b084462a5b905521da0a5af9d10c3ef20046'
  },
  {
    symbol: 'ETBOLD',
    name: 'ETHBOLD',
    tokenAddress: '0x9f9a0e0747a18426fd29f4a76820c808da3b140b',
    tokenDecimals: 18,
    exchangeAddress: '0x416a13db975090a28dbc7d6999080ba2609ff9b0'
  },
  {
    symbol: 'TGH',
    name: 'Target Hit',
    tokenAddress: '0xc83d46e4d1e290fa414a5775d90d5d50745c3281',
    tokenDecimals: 8,
    exchangeAddress: '0x639060e05b7a3e2f25238e18872560534416ce4b'
  },
  {
    symbol: 'TOK',
    name: 'TOKEN NAME',
    tokenAddress: '0x1d2a5d15bf491c4c3ac69fba9f7ea193de39fdd6',
    tokenDecimals: 18,
    exchangeAddress: '0x48f01d07442fd543fff45dfe52a4d0c43f57d555'
  },
  {
    symbol: 'TOK2',
    name: 'TOKEN NAME 2',
    tokenAddress: '0x5f9dc61d3e86e0efd63b5cf6ee55dab40830f9a5',
    tokenDecimals: 18,
    exchangeAddress: '0x764c30a2aa72d31f698a3ebdf5f00d539e218bd2'
  },
  {
    symbol: 'WALK',
    name: 'WalkCoin',
    tokenAddress: '0x7e386d8185c546a0944a337902de0818e10105f0',
    tokenDecimals: 0,
    exchangeAddress: '0xec98fe55f95441aa6b064720ae3a3c5c34c487bb'
  },
  {
    symbol: 'DNA',
    name: 'DNA Token',
    tokenAddress: '0x82b0e50478eeafde392d45d1259ed1071b6fda81',
    tokenDecimals: 18,
    exchangeAddress: '0x8a44f682fa486b6de2c0b912b0e5b062e56c0939'
  },
  {
    symbol: 'HXRO',
    name: 'Hxro',
    tokenAddress: '0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3',
    tokenDecimals: 18,
    exchangeAddress: '0x30f37956c78d60eb58b8adbeacbffea6e6639509'
  },
  {
    symbol: 'PMT',
    name: 'Prometeo',
    tokenAddress: '0x36e08e815f26c43dac8957e36c09e664a6b644f9',
    tokenDecimals: 11,
    exchangeAddress: '0x37f4ef3defa893b13b3253810cf0234aa10b62c3'
  },
  {
    symbol: 'PARETO',
    name: 'Pareto Network Token',
    tokenAddress: '0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc',
    tokenDecimals: 18,
    exchangeAddress: '0x2d7c5a8067e2d9ee3f39f3b269bab1962b0137ef'
  },
  {
    symbol: 'ZBR',
    name: 'ZEBRA',
    tokenAddress: '0xdcedd2f5472128c121b219ae89ed4111e16f5922',
    tokenDecimals: 0,
    exchangeAddress: '0x580bd8205f40839c2de7f520b60d5de155220102'
  },
  {
    symbol: 'SST',
    name: 'StarShineToken',
    tokenAddress: '0xacbccbf7494df0b2aa37bd69d45161a3c36423da',
    tokenDecimals: 18,
    exchangeAddress: '0x8b4bbb5e4c2a11f728ab0e112321a8c20b232d7b'
  },
  {
    symbol: 'BAGL',
    name: 'AltinGunleri',
    tokenAddress: '0x2c433f2914729c07be748ad3cf976c688b2a38be',
    tokenDecimals: 8,
    exchangeAddress: '0x7dd103d4af2b79840f57d4af77397a0391f76526'
  },
  {
    symbol: 'TOK',
    name: 'TOKEN',
    tokenAddress: '0xc77849b15ed98e185aae9cf73b8300770d20e6bb',
    tokenDecimals: 18,
    exchangeAddress: '0xcd1b05b3a66fb56f49bcf3b3ce164f48c5c1a418'
  },
  {
    symbol: 'ALIS',
    name: 'AlisToken',
    tokenAddress: '0xea610b1153477720748dc13ed378003941d84fab',
    tokenDecimals: 18,
    exchangeAddress: '0xf458be41ae47290746a31cb960e2c2badccfb4b2'
  },
  {
    symbol: 'CRCN',
    name: 'GrounderCoin',
    tokenAddress: '0xe0502c70e3fec1a33d2e0760a7a35735a3a6bc8f',
    tokenDecimals: 18,
    exchangeAddress: '0x06b52a395ea3d03d38964bb7cd861b0ee2c4bb2a'
  },
  {
    symbol: 'CHR',
    name: 'Chroma',
    tokenAddress: '0x915044526758533dfb918eceb6e44bc21632060d',
    tokenDecimals: 6,
    exchangeAddress: '0xc0885ff709051e8a3cc2c089346b9febf86d96cd'
  },
  {
    symbol: 'EBK',
    name: 'Ebakus',
    tokenAddress: '0xbddab785b306bcd9fb056da189615cc8ece1d823',
    tokenDecimals: 18,
    exchangeAddress: '0x626ae12d3f14cb585c49f549520ea8dc91096f16'
  },
  {
    symbol: 'REAP',
    name: 'The Reaper',
    tokenAddress: '0x22585c163b353510e8fef984c02609302eb5fc62',
    tokenDecimals: 8,
    exchangeAddress: '0x3bd85f4ed8f089ada01c6fb2416115034ae24e75'
  },
  {
    symbol: 'TSHP',
    name: '12Ships',
    tokenAddress: '0x525794473f7ab5715c81d06d10f52d11cc052804',
    tokenDecimals: 18,
    exchangeAddress: '0x480029184e62e2957eb5ab0f0523d194b6628f84'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0207098c1286af7af8d6eb1ad9c8a1ed2404e290',
    tokenDecimals: 18,
    exchangeAddress: '0xe474742fde5e644979e7f3346a24f2cd3ab3db76'
  },
  {
    symbol: 'TONT',
    name: 'Totally normal token',
    tokenAddress: '0x8bd61eec0319c2c6ab364bf7a8a5079be225f343',
    tokenDecimals: 18,
    exchangeAddress: '0xf7553f7354b058ba40958580716830fa5682a736'
  },
  {
    symbol: 'TONS',
    name: 'Totally normal tokenS',
    tokenAddress: '0x92cccef452d956137f9c9bb8954f8235e51949a0',
    tokenDecimals: 18,
    exchangeAddress: '0x9bab5fd06c3f6d61efc982006db8a6c9e6650250'
  },
  {
    symbol: 'XDCE',
    name: 'XinFin XDCE',
    tokenAddress: '0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2',
    tokenDecimals: 18,
    exchangeAddress: '0x1a7c6a16b4667dce0ade1706122c22f1f506a705'
  },
  {
    symbol: 'MLZ',
    name: 'MILLZ TOKEN',
    tokenAddress: '0xccbcdab59762980dd15fb6652ff2bbc7f9cf2a95',
    tokenDecimals: 9,
    exchangeAddress: '0x740ccc8a1eccfbf558201d94a6ae2d5757ab4fa4'
  },
  {
    symbol: 'WEIDAI',
    name: 'WeiDai',
    tokenAddress: '0x99ce8ed851a21f43ef08efb1ec5f307981c758cb',
    tokenDecimals: 18,
    exchangeAddress: '0x6e2727c072fd8036c73b274cd8cef7ec0b059c26'
  },
  {
    symbol: 'BAND',
    name: 'BandToken',
    tokenAddress: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    tokenDecimals: 18,
    exchangeAddress: '0x88616cf228ffb3fb8ba336592a79a53de53d05ef'
  },
  {
    symbol: 'BARG',
    name: 'Bitbarg',
    tokenAddress: '0x36d38e232659dea52f5fdb1a0f90709e6dc6994a',
    tokenDecimals: 2,
    exchangeAddress: '0x18b3eee47756db1a46f16e051b96d8877480f07b'
  },
  {
    symbol: 'IZX',
    name: 'IZX Token',
    tokenAddress: '0x2ad180cbaffbc97237f572148fc1b283b68d8861',
    tokenDecimals: 18,
    exchangeAddress: '0x9a4fa4c32df14affedad639d279425be17d69027'
  },
  {
    symbol: 'COMM',
    name: 'Commodity Coin',
    tokenAddress: '0xc7deb5543cfa97b0af2841418f53b8e554ff566a',
    tokenDecimals: 18,
    exchangeAddress: '0x8f3cd3f3c2e28cea2806ecc37affdcdee0d01fbb'
  },
  {
    symbol: 'HUE',
    name: 'Hue',
    tokenAddress: '0xdcfe18bc46f5a0cd0d3af0c2155d2bcb5ade2fc5',
    tokenDecimals: 4,
    exchangeAddress: '0x3fcb35aada553a888433efc45df1b70937a5942d'
  },
  {
    symbol: 'ARI',
    name: 'ARICOIN',
    tokenAddress: '0x22d45e9ed7a1e97eef14242fa5c9e3b0466b04db',
    tokenDecimals: 18,
    exchangeAddress: '0x3c91997cc2fba87e217721cb85034446f5a6e35a'
  },
  {
    symbol: 'EBASE',
    name: 'EURBASE Stablecoin',
    tokenAddress: '0x86fadb80d8d2cff3c3680819e4da99c10232ba0f',
    tokenDecimals: 18,
    exchangeAddress: '0x376b59b5d35a7cc8c052684842697f102d79d04a'
  },
  {
    symbol: 'XBASE',
    name: 'Eterbase Coin',
    tokenAddress: '0x4d13d624a87baa278733c068a174412afa9ca6c8',
    tokenDecimals: 18,
    exchangeAddress: '0x6f5a3dea184d3c3110b804827fe7fb859d82a79e'
  },
  {
    symbol: 'TNT',
    name: 'Tierion Network Token',
    tokenAddress: '0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8',
    tokenDecimals: 8,
    exchangeAddress: '0x76edc77baf69eca4c06ee2bd480e3b61ea503c00'
  },
  {
    symbol: 'K$G',
    name: 'KGreen',
    tokenAddress: '0xf9d290f3fe0b151f2ebb9321b7b3f5ecc11ea549',
    tokenDecimals: 18,
    exchangeAddress: '0x1d4c809e7594da45700c6178246090c089b3bb7e'
  },
  {
    symbol: 'NOUR',
    name: 'NOUR',
    tokenAddress: '0x5c0669c6718bf35112d4e643fe80bf7fb06dedeb',
    tokenDecimals: 18,
    exchangeAddress: '0x9974734d331225c7e2b509f0cd6573bbc567c27a'
  },
  {
    symbol: 'POSS',
    name: 'Posscoin',
    tokenAddress: '0x6b193e107a773967bd821bcf8218f3548cfa2503',
    tokenDecimals: 18,
    exchangeAddress: '0xa5d7478333d3f923202d269977dcc2565cfa3b58'
  },
  {
    symbol: 'CYBO',
    name: 'Cybone',
    tokenAddress: '0x7a4c9e42f7bdb9868b276223e6cb71b0500c59d2',
    tokenDecimals: 18,
    exchangeAddress: '0xd898112de4a7dfd9a95fd627f14986d9dc6108da'
  },
  {
    symbol: 'SEV',
    name: 'SLEEVES',
    tokenAddress: '0xba32286b0296f0a86111644b74472d8aabae3027',
    tokenDecimals: 8,
    exchangeAddress: '0xc671b5be0a59b51284a346b11334c7264aefdf3c'
  },
  {
    symbol: 'BNN',
    name: 'BrokerNekoNetwork',
    tokenAddress: '0xda80b20038bdf968c7307bb5907a469482cf6251',
    tokenDecimals: 8,
    exchangeAddress: '0xb5425b2b73358bb6a8eaacf5944e7ff166b2a22f'
  },
  {
    symbol: 'CTIC3',
    name: 'Coimatic 3.0',
    tokenAddress: '0x0743392132d1a03a902c477e5a176f256ba3220c',
    tokenDecimals: 18,
    exchangeAddress: '0x41e5c726514ff20c413f3909837ab71d3da36dc1'
  },
  {
    symbol: 'BVT',
    name: 'BeneficentDAO Token',
    tokenAddress: '0x90dbfe6545392a89a45fa880e409696a54abe793',
    tokenDecimals: 18,
    exchangeAddress: '0x210a3638afda90069b3bb22f479e2590ad17bb50'
  },
  {
    symbol: 'PAR',
    name: 'Parachute',
    tokenAddress: '0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06',
    tokenDecimals: 18,
    exchangeAddress: '0xea8e9ea8463604f77323334a4f62b6a72a026b07'
  },
  {
    symbol: 'MWAVS',
    name: 'Massive WAVs',
    tokenAddress: '0x305dbdd7931fb4833f5ce48046a586e30ece683f',
    tokenDecimals: 8,
    exchangeAddress: '0xd7f69554c3239ba358db5366465ddbd441ece210'
  },
  {
    symbol: 'TBT',
    name: 'TBT',
    tokenAddress: '0x62a7da217d6a55a983455e5fd6c4a025ac786879',
    tokenDecimals: 6,
    exchangeAddress: '0xf43135e08b5251630d5a159103f78453760b163d'
  },
  {
    symbol: 'ITIX',
    name: 'iTicket',
    tokenAddress: '0x7e6fdfa3a51a3e05a33894b98832d1b753e7953e',
    tokenDecimals: 0,
    exchangeAddress: '0xf9df4b87eca189f0dd1795ccf94e9ec58ff6e558'
  },
  {
    symbol: 'BTG',
    name: 'Bullion Troy Grain',
    tokenAddress: '0xffee3b942dfdcbc51007bffffc2a735b0483878f',
    tokenDecimals: 8,
    exchangeAddress: '0x56d407f84b04af2b7c659460cb415a40166a6962'
  },
  {
    symbol: 'BC',
    name: '"Bullion Coin" Bullion Troy Grain Coin',
    tokenAddress: '0xeb5d66b16a87cb392de8f8cfa996a5233f8a3ad1',
    tokenDecimals: 18,
    exchangeAddress: '0xb6cc428aa44a64d32ad881bcd773f4cf2dea85b0'
  },
  {
    symbol: 'GOT',
    name: 'GOToken',
    tokenAddress: '0x613fa2a6e6daa70c659060e86ba1443d2679c9d7',
    tokenDecimals: 18,
    exchangeAddress: '0x63ba0cf2856b8f8e72e22b34101d92a6041db878'
  },
  {
    symbol: 'CVS',
    name: 'CoinVisa',
    tokenAddress: '0xdb56448fe2635f7912287cd619e7ed3d93180f25',
    tokenDecimals: 18,
    exchangeAddress: '0xe153ca3438d37b45fe3998a934495603ce89b717'
  },
  {
    symbol: 'ISLA',
    name: 'Insula',
    tokenAddress: '0x697ef32b4a3f5a4c39de1cb7563f24ca7bfc5947',
    tokenDecimals: 18,
    exchangeAddress: '0x3cccaf9826f23fa749a85644f4924e627405f338'
  },
  {
    symbol: 'ESAX',
    name: 'ESAX Token',
    tokenAddress: '0xa7b87611a9577cb8ad3f9b1e85e7884933603405',
    tokenDecimals: 18,
    exchangeAddress: '0x73ac91a767ba100589188a6da1a0221342850cf1'
  },
  {
    symbol: 'BITS',
    name: 'Bitcoinus Token',
    tokenAddress: '0xc38f1fb49acdf2f1213caf3319f6eb3ea2cb7527',
    tokenDecimals: 18,
    exchangeAddress: '0xea67c9952ec650e23983a6bdd4e18a3a4fb5918c'
  },
  {
    symbol: 'APTRO',
    name: 'Aptro Token',
    tokenAddress: '0x700bef66897073c75c037869ae7681f6e42d73f2',
    tokenDecimals: 18,
    exchangeAddress: '0x82e93c97178f142e57537eeb75f2fca99c556492'
  },
  {
    symbol: 'SVC',
    name: 'SectorV Token',
    tokenAddress: '0xde98a16efd225fbfdcaa7ce4b41343af00bdb546',
    tokenDecimals: 18,
    exchangeAddress: '0x78f410ddf081ddd10748af44d3dd495d7ce0f51c'
  },
  {
    symbol: 'SJE',
    name: 'SJ Hybrid Energy',
    tokenAddress: '0xbe1341a080026b18f156f5c02875106e1ae690ef',
    tokenDecimals: 18,
    exchangeAddress: '0xc041913c4e16bd69b516c04e94dd6bb7916c5f97'
  },
  {
    symbol: 'TRYB',
    name: 'BiLira',
    tokenAddress: '0x2c537e5624e4af88a7ae4060c022609376c8d0eb',
    tokenDecimals: 6,
    exchangeAddress: '0x122327fd43b2c66dd9e4b6c91c8f071e217558ef'
  },
  {
    symbol: 'FamGil',
    name: 'Familia Gil',
    tokenAddress: '0x1e171f25254178c0e07ce6a059d3a192574e5714',
    tokenDecimals: 4,
    exchangeAddress: '0x4c0108ce6e3aade0eeee2655a5352105fce5d9db'
  },
  {
    symbol: 'SAL',
    name: 'SalariumCoin',
    tokenAddress: '0x868b0bd0f4fee14bbe0157fe3ed1359e8431ea63',
    tokenDecimals: 18,
    exchangeAddress: '0x7700a1f1801087fd737a5f1b818628a7cb206782'
  },
  {
    symbol: 'DC',
    name: 'DPlay Coin',
    tokenAddress: '0x92c5387ace61f5c505bf2c2d4c84120f0a813d4b',
    tokenDecimals: 18,
    exchangeAddress: '0x4e2b23abdc42e7f62a423300f3577dc6347b6311'
  },
  {
    symbol: 'HTX',
    name: 'Hashtrust',
    tokenAddress: '0xedbcc06b603ea1f512720a4073a62cc4fdefcb86',
    tokenDecimals: 0,
    exchangeAddress: '0xe0344fa8ecbb3ff7ab388a514ff82958e6efda3c'
  },
  {
    symbol: 'OMNIS',
    name: 'OMNIS-BIT',
    tokenAddress: '0x3123ff80cbdfd35577628a41ff50598cefc2d236',
    tokenDecimals: 18,
    exchangeAddress: '0x24359e3be38a8c4ae93e23ca1e5e291923d03d05'
  },
  {
    symbol: 'IMA',
    name: 'IMA',
    tokenAddress: '0x9ff316ed79a36b067217031ab8e0f3f9f82dfacd',
    tokenDecimals: 18,
    exchangeAddress: '0x80bb1e0c7a85e037e8d45c1626eeebac552300cb'
  },
  {
    symbol: 'AEXT',
    name: 'Antique Exchange Token',
    tokenAddress: '0xe12fb71d6fab84680e6794f0718fae3ec59c2c6a',
    tokenDecimals: 18,
    exchangeAddress: '0x3814a71ce2f488aa4936996eb26be34e1a3e2c11'
  },
  {
    symbol: 'TKBTC',
    name: 'TokenBTC',
    tokenAddress: '0x4d8976176276901bcbdd728a0260870379af2034',
    tokenDecimals: 18,
    exchangeAddress: '0x5b901ebb4b83c0b98be5c51bca5a492d72d19ee6'
  },
  {
    symbol: 'FV',
    name: 'FinneyVote',
    tokenAddress: '0x000000002647e16d9bab9e46604d75591d289277',
    tokenDecimals: 1,
    exchangeAddress: '0xcf6c81435edf58804becf01a09a81da9583737dc'
  },
  {
    symbol: 'CBB',
    name: 'Cribbits',
    tokenAddress: '0xc0850b8c36a1ffb3de0923409af0da3485a48957',
    tokenDecimals: 5,
    exchangeAddress: '0xf65c390e1611977c3c3a30d3344f013a1638cc59'
  },
  {
    symbol: 'CBR',
    name: 'Crypto Rewards Global',
    tokenAddress: '0xea4afd1c685ac4d33428fa583c2abe49aaf31aa9',
    tokenDecimals: 18,
    exchangeAddress: '0xf679ce42dfed90a0ebafff592da33d40e6449df7'
  },
  {
    symbol: 'MST',
    name: '民宿通',
    tokenAddress: '0xa68920f6d3c996ac3c232e4e93914e9d76150735',
    tokenDecimals: 18,
    exchangeAddress: '0x01d8e6e2ee103f55a772e3841ef78986f911c025'
  },
  {
    symbol: 'INC8',
    name: 'Incinerate Token v2',
    tokenAddress: '0x38b7014ed2a83bc5801232551344ed928698bd07',
    tokenDecimals: 2,
    exchangeAddress: '0x1eaefaa69316843d7de7e5934911830566570689'
  },
  {
    symbol: 'VYA',
    name: 'VAYLA Token',
    tokenAddress: '0x7b53b2c4b2f495d843a4e92e5c5511034d32bd15',
    tokenDecimals: 8,
    exchangeAddress: '0x5226fb4b4c9a41e2073b5501f5c0f1249b78f18e'
  },
  {
    symbol: 'XNC',
    name: 'EXNCE',
    tokenAddress: '0x2e84df8ba0c87670a7073689aa94e7f1d2d85970',
    tokenDecimals: 6,
    exchangeAddress: '0x6c3e5177bca97b30f257421f9f9495a0d06aa5ee'
  },
  {
    symbol: 'USTD',
    name: 'PR Coin',
    tokenAddress: '0xb4681169017cd0ed61dfbdc6cdbc1c5bb1273255',
    tokenDecimals: 18,
    exchangeAddress: '0x74c8242170c5d6f6964cf617ba33803b9faf85f6'
  },
  {
    symbol: 'COINCEP',
    name: 'COINCEPPP',
    tokenAddress: '0x156bd3133360558f415307cad605c9907c3f1a95',
    tokenDecimals: 18,
    exchangeAddress: '0x278659e190c44d44325174dc20aa67bcf4ac6d20'
  },
  {
    symbol: 'KING',
    name: 'KING Token',
    tokenAddress: '0x13d9f3ddcdf57f73fb5dfdf04847508c1cc6ab1a',
    tokenDecimals: 6,
    exchangeAddress: '0xa28aabac64e0a24c7019b3fd15674742afc02bb2'
  },
  {
    symbol: 'MIA',
    name: 'Miasma',
    tokenAddress: '0x80b1dc852f3aeef243ffdd2d47c7435b21284dcb',
    tokenDecimals: 18,
    exchangeAddress: '0x42147aeb9c8bb300e955968a713b891e5074b368'
  },
  {
    symbol: 'XNC',
    name: 'EXNCE',
    tokenAddress: '0x8317b216d7c3f9a5b8401e4b6814d13a7be390ec',
    tokenDecimals: 8,
    exchangeAddress: '0xe04bc8d7c6e49ae6fb193f0a995046ef63d6526b'
  },
  {
    symbol: 'DON',
    name: 'DONpia',
    tokenAddress: '0xe69968dd1913f135f3b28ed81d9a02368204bd66',
    tokenDecimals: 18,
    exchangeAddress: '0x548c25739c97793530a26c20cdfc4cfda5d02eac'
  },
  {
    symbol: 'NII',
    name: 'Nahmii',
    tokenAddress: '0xac4f2f204b38390b92d0540908447d5ed352799a',
    tokenDecimals: 15,
    exchangeAddress: '0x6ef7285fcc7ccacf6f840581fabfe1da9e15326b'
  },
  {
    symbol: 'EXIO',
    name: 'nETHx10',
    tokenAddress: '0xa41e11fa5338bd68e1dac52fa21d893d025a2ec5',
    tokenDecimals: 4,
    exchangeAddress: '0x233b4a0ef990cc36b7962c2341cb86bcb5ae9b12'
  },
  {
    symbol: 'SNS',
    name: 'SNSTOKEN',
    tokenAddress: '0x0189d31f6629c359007f72b8d5ec8fa1c126f95c',
    tokenDecimals: 18,
    exchangeAddress: '0x053ec22ef56607ecb3c3f353268eae12fd25b360'
  },
  {
    symbol: 'CSAT',
    name: 'CandysAirdrop',
    tokenAddress: '0xdb6192baf0e72ffd88d33508f15caedd5c79d75d',
    tokenDecimals: 18,
    exchangeAddress: '0x2034cc62227d6ba0a280bda62a607001b1c0a4a3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x5048b9d01097498fd72f3f14bc9bc74a5aac8fa7',
    tokenDecimals: 18,
    exchangeAddress: '0x3a63f3cd168a5ed14b72283c3fb53373475fef22'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957',
    tokenDecimals: 18,
    exchangeAddress: '0x2a6c62d8cb2edb7cc900821f38134ef7ab9a8a43'
  },
  {
    symbol: 'GALA',
    name: 'WI Posha Allegro',
    tokenAddress: '0x026ec7b7b657673340912b9e058a4396166fa35d',
    tokenDecimals: 18,
    exchangeAddress: '0x2dc049e93060e182f237ced56f57eb7e75e8936b'
  },
  {
    symbol: 'SNM',
    name: 'SONM Token',
    tokenAddress: '0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63',
    tokenDecimals: 18,
    exchangeAddress: '0x9c283d82ac6ecca86a7b310ea93c2e6914504c5b'
  },
  {
    symbol: 'CUTE',
    name: 'Cute Coin',
    tokenAddress: '0x047686fb287e7263a23873dea66b4501015a2226',
    tokenDecimals: 18,
    exchangeAddress: '0xd0a6e50028f474222414e275be198f914903d69d'
  },
  {
    symbol: 'SCC',
    name: 'SiaCashCoin',
    tokenAddress: '0x74fd51a98a4a1ecbef8cc43be801cce630e260bd',
    tokenDecimals: 18,
    exchangeAddress: '0xb09970ab7ea7fe675399a55683dba11ffcb1e068'
  },
  {
    symbol: 'IG',
    name: 'IG',
    tokenAddress: '0x8a88f04e0c905054d2f33b26bb3a46d7091a039a',
    tokenDecimals: 18,
    exchangeAddress: '0xe561e76d5c04742332bb30e3c6b280cd81827cf7'
  },
  {
    symbol: 'AANT',
    name: 'Add A New Token',
    tokenAddress: '0xbe22ec66710caa72ab690bf816f8bce785fbbac2',
    tokenDecimals: 8,
    exchangeAddress: '0xe600adf95af9f513a04b04cc9b7afc7aa8bc5a9d'
  },
  {
    symbol: 'XGG',
    name: 'Going Gems',
    tokenAddress: '0xf6b6aa0ef0f5edc2c1c5d925477f97eaf66303e7',
    tokenDecimals: 8,
    exchangeAddress: '0x0eff5c427bdc5598dcb63234fe492d7a367cf3f3'
  },
  {
    symbol: 'BRRY',
    name: 'Berries',
    tokenAddress: '0xe0bea98ea93e3b12cf558d2a05ce815b94d2ac8c',
    tokenDecimals: 18,
    exchangeAddress: '0xd62c99f0a292c591f51a6a5a64fa9d4494f79479'
  },
  {
    symbol: 'CEXT',
    name: 'CEXT',
    tokenAddress: '0xb5f1942b7db0cd28dbbcef1e5f8456cb7866b1c4',
    tokenDecimals: 18,
    exchangeAddress: '0xa15f3d3c3d8af1bc421e8d6fba7201895b94efb0'
  },
  {
    symbol: 'LIFE',
    name: 'PureLifeCoin',
    tokenAddress: '0xff18dbc487b4c2e3222d115952babfda8ba52f5f',
    tokenDecimals: 18,
    exchangeAddress: '0x3ed758155d8d7f8ee3ca7c49adb27546b34c6800'
  },
  {
    symbol: 'ADAB',
    name: 'ADAB Token',
    tokenAddress: '0x034b0dd380b5f6f8123b8d0d0e42329b67772792',
    tokenDecimals: 18,
    exchangeAddress: '0xc88757c36475b269f7a4c93b6da3665349b823fe'
  },
  {
    symbol: 'YAT',
    name: 'Yattaqi',
    tokenAddress: '0x5ceb8c7f189e694b326310694ac6df98e5ced66e',
    tokenDecimals: 18,
    exchangeAddress: '0x11019a438cd49e8ab55f2dfc570f1393f4f56f61'
  },
  {
    symbol: 'CBB',
    name: 'CRIBBITS',
    tokenAddress: '0xee4b6fbeba9034d7b307e7eeaa339c0c2c73ab3f',
    tokenDecimals: 6,
    exchangeAddress: '0xd6d45258c9417fbf36f7d9ca7c615714ee585415'
  },
  {
    symbol: 'TER',
    name: 'THERA',
    tokenAddress: '0xa6e0bc809290257b2972a4f9ad9df004a1459ca7',
    tokenDecimals: 2,
    exchangeAddress: '0x5d6f54c0c367f7b111960564e0aa375dd819d5df'
  },
  {
    symbol: 'ZAR',
    name: 'DigitalRand',
    tokenAddress: '0x862204994bb47d426a101958b4ca3550eb4ef2d1',
    tokenDecimals: 6,
    exchangeAddress: '0x2660b7faf291efdc44be20b368f3cdcc23ca5f03'
  },
  {
    symbol: 'CTE',
    name: 'Cloud too chain',
    tokenAddress: '0xac397b0fe4ef28ed11eac6063d9ec3550e94a8cd',
    tokenDecimals: 18,
    exchangeAddress: '0xeeea0faa6eb8a460cf722b9c6f8daf784fbc0ab4'
  },
  {
    symbol: 'JEWEL',
    name: 'Gem Coin',
    tokenAddress: '0x048291a9ba65eaae1882aef68782901d514c645c',
    tokenDecimals: 18,
    exchangeAddress: '0xe6404cba219a5ac1890be7a70bdef813de117a21'
  },
  {
    symbol: 'BTZ',
    name: '健康通证',
    tokenAddress: '0xa085edaf9e9688611d5390046ef28f206dfc1dfe',
    tokenDecimals: 18,
    exchangeAddress: '0xf97f9bcc3cf280106944faa3c597747c08c9ea1b'
  },
  {
    symbol: 'SPAZ',
    name: 'SWAPCOINZ',
    tokenAddress: '0x8f9bfe5b6a5c3fea8c64ad41a5cf6f60ec4aa47c',
    tokenDecimals: 8,
    exchangeAddress: '0x8e42b307e3e9ec96bc96cc52a8762f77b24f9e43'
  },
  {
    symbol: 'SDK',
    name: 'SiDinar Koin',
    tokenAddress: '0xc26b2a2003bb8e907f527f47d92c410c4902510b',
    tokenDecimals: 18,
    exchangeAddress: '0xe3a837e3cda3e911dd7a2bdf5bb9406fd2f92735'
  },
  {
    symbol: 'MIA',
    name: 'Miasma',
    tokenAddress: '0xa52d617149ba4dd280a1d76fe3821c4547a382c9',
    tokenDecimals: 18,
    exchangeAddress: '0xcbc7947bdd2b5c8ca363cee2f02ad17f523b5dde'
  },
  {
    symbol: 'NLYA',
    name: 'Nollya Coin',
    tokenAddress: '0xcee4019fd41ecdc8bae9efdd20510f4b6faa6197',
    tokenDecimals: 18,
    exchangeAddress: '0x8f4283718db176d39e2440f78a2cedb3f1cb4c18'
  },
  {
    symbol: 'PTON',
    name: 'Foresting Token',
    tokenAddress: '0x4946583c5b86e01ccd30c71a05617d06e3e73060',
    tokenDecimals: 18,
    exchangeAddress: '0x15cf6addebb4091109a17e26edfd361210017eb8'
  },
  {
    symbol: 'IBST',
    name: 'Inbest Token',
    tokenAddress: '0x34f49e2ea4fb9b80714f8776932528a79c39de28',
    tokenDecimals: 18,
    exchangeAddress: '0x4b6738e3c7ced43baa232b447a312255c70f52ca'
  },
  {
    symbol: 'AFRID',
    name: 'AFRIDOLLAR',
    tokenAddress: '0x4515dfbf9366369ed8d8bc8f4fc5567b550502f4',
    tokenDecimals: 16,
    exchangeAddress: '0x944994da02facbc992692ea2cd803ffc01e1f40a'
  },
  {
    symbol: 'USDT',
    name: 'V I Coin',
    tokenAddress: '0x3d4d135ed39f23024d93cb2169cfee00fc2428ed',
    tokenDecimals: 18,
    exchangeAddress: '0x1e57692c9498c48c3c24e7df6c19c8210a588e76'
  },
  {
    symbol: 'EMS',
    name: 'Ethereum Message Search',
    tokenAddress: '0x17e6616c45d267bc20a9892b58a01621c592b72d',
    tokenDecimals: 18,
    exchangeAddress: '0x4a636f6e9f7c5c6d9f3cf7fa77479eecef8e8aff'
  },
  {
    symbol: 'CLEAN',
    name: 'Housekeeping Coin',
    tokenAddress: '0x4cc888882eb5bea6e8790db749b558ab38ddcdb6',
    tokenDecimals: 18,
    exchangeAddress: '0x4238d97f044ec7b36d517fb695c612d8d2259bb0'
  },
  {
    symbol: 'TRUE',
    name: 'TRUE Token',
    tokenAddress: '0xa4d17ab1ee0efdd23edc2869e7ba96b89eecf9ab',
    tokenDecimals: 18,
    exchangeAddress: '0x9569e4064bcf03cae9e10c2c7184410374d6cb71'
  },
  {
    symbol: 'TRUE',
    name: 'TrueChain',
    tokenAddress: '0xa8bdc8882987a3ed83d8030f08d64479f1eff731',
    tokenDecimals: 8,
    exchangeAddress: '0xd1f6a67f84d9e1f88e4c92ec68302f91b7509f0a'
  },
  {
    symbol: 'TCOIN',
    name: 'TRUECOIN',
    tokenAddress: '0xabb77f5c1e1c61adc3666b62dc614e64c584be6b',
    tokenDecimals: 8,
    exchangeAddress: '0x9aadd8a56af4e3f799a7e27b8d5b02633448e00b'
  },
  {
    symbol: 'BOXX',
    name: 'Boxx',
    tokenAddress: '0x780116d91e5592e58a3b3c76a351571b39abcec6',
    tokenDecimals: 15,
    exchangeAddress: '0xc8b548300516dd785b07100f961c94a2fa2b05e3'
  },
  {
    symbol: 'DAI',
    name: 'DAI',
    tokenAddress: '0x33fa33aec853b3b072a8b54ceb0dd7f722dd5ec5',
    tokenDecimals: 1,
    exchangeAddress: '0xe5fb1b277f93c85646d9b30d120f082a26dcd034'
  },
  {
    symbol: 'USDB',
    name: 'Bancor USD Token',
    tokenAddress: '0x309627af60f0926daa6041b8279484312f2bf060',
    tokenDecimals: 18,
    exchangeAddress: '0x7d03c8e1232cc2e796dead761c12ca3c68506972'
  },
  {
    symbol: 'CRPT',
    name: 'CrypteriumToken',
    tokenAddress: '0x80a7e048f37a50500351c204cb407766fa3bae7f',
    tokenDecimals: 18,
    exchangeAddress: '0x5e577a6649c2244ab4a229ccd6180fcaf1b364ee'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin v1.0',
    tokenAddress: '0x60ff8aac1bbc42194045772186c7d1ddcf63dd36',
    tokenDecimals: 1,
    exchangeAddress: '0x03698174671cadde2a0a8540b06d625230ed8591'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a',
    tokenDecimals: 18,
    exchangeAddress: '0xf1499cb47a70633d338aef8641ee91448e653d5f'
  },
  {
    symbol: 'TRUE',
    name: 'True Chain',
    tokenAddress: '0xa9b9419fe36004808ab80a3a2b1b1b35e48fedd8',
    tokenDecimals: 18,
    exchangeAddress: '0x97f521d25fd00d5af0b21c3004f2260edfef22f0'
  },
  {
    symbol: 'RDV',
    name: 'Rendezvous',
    tokenAddress: '0xd967d9f941cd316ab238d3ee761f80b7caec7819',
    tokenDecimals: 18,
    exchangeAddress: '0x9d64a2d95b66a848e53cb78dec407146037bb073'
  },
  {
    symbol: 'GOOGA',
    name: 'Googlier Aluminium',
    tokenAddress: '0xbfdaddb93178a4efc99e136891ff44fb98c1f62e',
    tokenDecimals: 18,
    exchangeAddress: '0x55496c666781d80968e4b77fae352ba2c1efc2aa'
  },
  {
    symbol: 'STRX',
    name: 'Streamix',
    tokenAddress: '0xa9d24ec1d08856632ed1847f43760e66bcb91ca7',
    tokenDecimals: 8,
    exchangeAddress: '0xe5ee802a6e6ea94a3b2299874da619a916d396a2'
  },
  {
    symbol: 'IDX',
    name: 'Indonesian eXchange',
    tokenAddress: '0x8427760a577f7f2f91a7ba7a3c7826c92a950727',
    tokenDecimals: 8,
    exchangeAddress: '0x4479bde70aca91e18ee437f1289d096de8180b54'
  },
  {
    symbol: 'BGT',
    name: 'Beneficent Governance Token',
    tokenAddress: '0x66a60d14c73dccd1626a909559a83525612700bc',
    tokenDecimals: 18,
    exchangeAddress: '0xd5b89e446ceebccb98393ebe5691c67595a7840c'
  },
  {
    symbol: 'GOT',
    name: 'GameofThrones token ',
    tokenAddress: '0xca6fc1469b7af2bfccb5cc34b1849bca267f60fe',
    tokenDecimals: 18,
    exchangeAddress: '0xac7a4517114a8f6fae2013d9a48f0d1f8706d2af'
  },
  {
    symbol: 'HZ',
    name: 'Hertz',
    tokenAddress: '0x6a4b6316d1d03d2f2b3a0294502f8faf0f38ca14',
    tokenDecimals: 18,
    exchangeAddress: '0x7e7dc04740604aa27d389ceac9de5bd8c653e612'
  },
  {
    symbol: 'LYM',
    name: 'Lympo tokens',
    tokenAddress: '0x57ad67acf9bf015e4820fbd66ea1a21bed8852ec',
    tokenDecimals: 18,
    exchangeAddress: '0x313dd6a3ece77cee97e85083a8c73a07adb0cd64'
  },
  {
    symbol: 'VID',
    name: 'VID',
    tokenAddress: '0x12d7d45a4b9693b312ede375074a48b9b9f2b6ec',
    tokenDecimals: 5,
    exchangeAddress: '0x02828ddcd39727f2330f702b16cbd24988a2f68d'
  },
  {
    symbol: 'SND',
    name: 'SND Token 1.0',
    tokenAddress: '0xf333b2ace992ac2bbd8798bf57bc65a06184afba',
    tokenDecimals: 0,
    exchangeAddress: '0x534be57a99a4aa5bed39e1dd432fcf187766b655'
  },
  {
    symbol: 'PICTET',
    name: 'PICTET',
    tokenAddress: '0xb95fd9f07f81b2a7d190146f2207e44bad4ed6b9',
    tokenDecimals: 18,
    exchangeAddress: '0x1d0f47b8b9282a07bb9afcc68a9432db647f9711'
  },
  {
    symbol: 'PNT',
    name: 'Painite',
    tokenAddress: '0x1867dbd098bb328a8354682c17c485ef15d12072',
    tokenDecimals: 18,
    exchangeAddress: '0xec4c9f15fb34c9f6c69c300a27345631cb17a47b'
  },
  {
    symbol: 'ZAR',
    name: 'South African Rand',
    tokenAddress: '0x3777487d437b51f2d4c835592b72279da150120c',
    tokenDecimals: 2,
    exchangeAddress: '0x9bc7622e90a8652d27c5e46b00e7c591ba41ff45'
  },
  {
    symbol: 'MMT',
    name: 'MiliTrumNetworkToken',
    tokenAddress: '0xcabaa659f92ba19cad021a8d8cf7a212971ba7ce',
    tokenDecimals: 18,
    exchangeAddress: '0x29189d726c44cde429b5999e2376b9a8e5c276ea'
  },
  {
    symbol: 'REEF',
    name: 'EtherReefer',
    tokenAddress: '0x282a6e0ecf37f15680b1f0f6f506ad4d0b756999',
    tokenDecimals: 18,
    exchangeAddress: '0x492229a7f9d415c1e9328754f1a6e8f59dbb2e1a'
  },
  {
    symbol: 'APX',
    name: 'APEX',
    tokenAddress: '0x1239562abe89ff62016ae23d4e6eef12b915295c',
    tokenDecimals: 18,
    exchangeAddress: '0x81dad92a06b96e24800d74cf112966dc941f994f'
  },
  {
    symbol: 'VAP',
    name: 'Vaporware',
    tokenAddress: '0x9ea085bc45639372e7389e5c5069a86cac5a03bf',
    tokenDecimals: 18,
    exchangeAddress: '0xfaec433ed8414deeb05fe2bdbfe39105bfd97db0'
  },
  {
    symbol: 'DOOM',
    name: 'Doom',
    tokenAddress: '0xa4f9cec920ca520a7feb2c3a63050e08967bc111',
    tokenDecimals: 4,
    exchangeAddress: '0x358570eaf20110a4f28b8000145afcfc441aa494'
  },
  {
    symbol: 'CBC',
    name: 'CraftBeerCoin',
    tokenAddress: '0xb8beb497ff26b57e4c13295f93a42b6a049826f4',
    tokenDecimals: 18,
    exchangeAddress: '0xe1428481be5951f1e817bde36bd8c4c69727b4cf'
  },
  {
    symbol: 'EJJ',
    name: 'Ejiangjun',
    tokenAddress: '0x9113beba84529b43e672e7842054f3e0f0ad0936',
    tokenDecimals: 18,
    exchangeAddress: '0xe0d81693cb035c4fa7a0cc605d5ed81d0f3a6220'
  },
  {
    symbol: 'MedK',
    name: 'MedK',
    tokenAddress: '0xfa109de90a24b3bd5af459c376ebafa75b7c1c5b',
    tokenDecimals: 18,
    exchangeAddress: '0xdf129e41fca8b2ed75f5b1b17ebd1b4f2f173dac'
  },
  {
    symbol: 'CONST',
    name: 'Constant',
    tokenAddress: '0x4983f767b1bc44328e434729ddabea0a064ca1ac',
    tokenDecimals: 2,
    exchangeAddress: '0x1273acb6447f024e71e9e1c37f20b269adfafa18'
  },
  {
    symbol: 'RBC',
    name: 'Rambocoin',
    tokenAddress: '0x398e616b74832f26fb342913e0d81fffef70fb71',
    tokenDecimals: 18,
    exchangeAddress: '0xae9e3c3994bb91bdcf567ee4dd485a175c972384'
  },
  {
    symbol: 'Dai',
    name: 'Dai',
    tokenAddress: '0x897ae96d0b8759ba2c56372bd6316d8dd62e7365',
    tokenDecimals: 18,
    exchangeAddress: '0x2ea789f6097426e6bf8788455d38e185ec99bc3b'
  },
  {
    symbol: 'BRY',
    name: 'Attebery',
    tokenAddress: '0x120b06f17392a9ea9ef848de35eb90f6ad6daa63',
    tokenDecimals: 0,
    exchangeAddress: '0x9155da5b0a3c7a5b1514473a151a0e4cc5c63efb'
  },
  {
    symbol: 'EXMR',
    name: 'EXMR',
    tokenAddress: '0xc98e0639c6d2ec037a615341c369666b110e80e5',
    tokenDecimals: 8,
    exchangeAddress: '0x84b73c739a95878fa85478cf0578f63257f8bc15'
  },
  {
    symbol: 'MDX',
    name: 'MEDIEX',
    tokenAddress: '0xe4ffee3b33360e21ea2aec37a39901cb720eb84c',
    tokenDecimals: 10,
    exchangeAddress: '0xdfa28f5458a430aa4025880227ee86ffd1c81764'
  },
  {
    symbol: 'EDX',
    name: 'Edex',
    tokenAddress: '0xbf8d8f1242b95dfbae532af6b0f4463905415cc1',
    tokenDecimals: 18,
    exchangeAddress: '0xef9b6abd2aa24e49aae1e1437f68d99ccd2af071'
  },
  {
    symbol: 'ETW',
    name: 'Etherwave',
    tokenAddress: '0x14f3f6dbbb919ddabb8d7f279e9b97e6bbfeede6',
    tokenDecimals: 18,
    exchangeAddress: '0xc9908d255ca0d68aec0dcfda41ab127bfcde654b'
  },
  {
    symbol: 'MOTH',
    name: 'Crypto MOTH',
    tokenAddress: '0x935133f60581f244d34e03f0e28ebd956f819bdc',
    tokenDecimals: 8,
    exchangeAddress: '0x998cd059af2a09319181df7e27dedd844d623b32'
  },
  {
    symbol: 'XIO',
    name: 'XIO',
    tokenAddress: '0x0518e5aafbcf2f05731803725d5c2d68e454033c',
    tokenDecimals: 18,
    exchangeAddress: '0x2be44f6280b1fc145c62e66d6f8f84df9fb4b8f6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x55496c666781d80968e4b77fae352ba2c1efc2aa',
    tokenDecimals: 18,
    exchangeAddress: '0xa33db7a5e67c8876558b81a9252ad1da1a8566aa'
  },
  {
    symbol: 'dZAR',
    name: 'Digital Rand',
    tokenAddress: '0x45d918e17e30872d7c1ccbaab4a0813ed0360e46',
    tokenDecimals: 6,
    exchangeAddress: '0x84bbe25610885f928c04aefb920d585b0cdd6e04'
  },
  {
    symbol: 'MATH',
    name: 'Andrew Yang Token',
    tokenAddress: '0xfa57cea2f244c607e2ba7ba258af7cb3d0ebd64f',
    tokenDecimals: 2,
    exchangeAddress: '0x3991220bb3753057f8382930bec361df5dce0795'
  },
  {
    symbol: 'BCT',
    name: 'DESKTOP-RQHA0VM',
    tokenAddress: '0x9642c1b4f9e2d1849a1ab7820f9c18c5cd25fc54',
    tokenDecimals: 18,
    exchangeAddress: '0xcef023f6fe4d08b7069aa74c9acb654ff82c3556'
  },
  {
    symbol: 'KLT',
    name: 'Kringle Liquidity Token',
    tokenAddress: '0xf0e2a09ce1ecefe248bd1ee9ed26afafc23a4869',
    tokenDecimals: 18,
    exchangeAddress: '0xa7ad609a59e09d32dcc8160d91fc46391b6ef07d'
  },
  {
    symbol: 'LXT',
    name: 'LiteXToken',
    tokenAddress: '0xbc46d9961a3932f7d6b64abfdec80c1816c4b835',
    tokenDecimals: 18,
    exchangeAddress: '0xba17b783ee1c1f3d387da2164afe1cae2f375536'
  },
  {
    symbol: 'SXP',
    name: 'Swipe',
    tokenAddress: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
    tokenDecimals: 18,
    exchangeAddress: '0x03c341408d0edf502e702b9b24ec305819357c56'
  },
  {
    symbol: 'CLR',
    name: 'Color Coin',
    tokenAddress: '0x2396fbc0e2e3ae4b7206ebdb5706e2a5920349cb',
    tokenDecimals: 18,
    exchangeAddress: '0x5424bdf67d6a2327a2edc384bf9b33efc0ed9c8e'
  },
  {
    symbol: 'GEN',
    name: 'Genesis',
    tokenAddress: '0x334425ef9a828e31ff27e0754a3198edb714c57b',
    tokenDecimals: 8,
    exchangeAddress: '0x8b1a51d4b1bfbc70f35daa87850a8c903116dc9b'
  },
  {
    symbol: 'TOU',
    name: 'TOURISTOKEN',
    tokenAddress: '0x1e29ca8c874b4dff828297cc2e9856819eea0933',
    tokenDecimals: 18,
    exchangeAddress: '0xf7554f5ea1034dbfd1782d917dd008ac1e1bc6fc'
  },
  {
    symbol: 'WITH',
    name: 'WITH coin',
    tokenAddress: '0x2e954cfc5cb4f089f5f3d7331449861249106d85',
    tokenDecimals: 6,
    exchangeAddress: '0x933f9059bd09d16cf70ba86482a459fb5f3f103b'
  },
  {
    symbol: 'AML19',
    name: 'Alex Masmej Loan 19',
    tokenAddress: '0x234922c6b8e6bae355435d22dfad49ae8f5fadcf',
    tokenDecimals: 18,
    exchangeAddress: '0x97cf746feb3752e4e3ff6b30f323107890362389'
  },
  {
    symbol: 'GET',
    name: 'GET',
    tokenAddress: '0x8a854288a5976036a725879164ca3e91d30c6a1b',
    tokenDecimals: 18,
    exchangeAddress: '0x49e1c66e6def433573fa8feedd3de38dbedd5fd6'
  },
  {
    symbol: 'CWN',
    name: 'CryptoWorldNews Token',
    tokenAddress: '0xab7b6f7beae1f03a6b2a7f94d1ac332fc9be3410',
    tokenDecimals: 18,
    exchangeAddress: '0xa913658619c9b66e2c835aa3b0a243cbb4e67518'
  },
  {
    symbol: 'REM',
    name: 'REMME token',
    tokenAddress: '0x83984d6142934bb535793a82adb0a46ef0f66b6d',
    tokenDecimals: 4,
    exchangeAddress: '0x9e91c3220fe5c91ba125d27b399c64da48d59621'
  },
  {
    symbol: 'TFD',
    name: 'TE-FOOD',
    tokenAddress: '0xe5f166c0d8872b68790061317bb6cca04582c912',
    tokenDecimals: 18,
    exchangeAddress: '0x746b7d5c19b2cdbb14e24a3e438763083253f59e'
  },
  {
    symbol: 'Hth',
    name: 'Heath',
    tokenAddress: '0xa7211022b34a84905dbc54bcf11d9d395ca4155f',
    tokenDecimals: 8,
    exchangeAddress: '0xbcbfb5fc2e5a6b30202f4abb98e93c2cf1bd94eb'
  },
  {
    symbol: 'COD',
    name: 'Colendi Token',
    tokenAddress: '0xf2ccd161f06d88479b50d4bedbad9992dbdaffdd',
    tokenDecimals: 18,
    exchangeAddress: '0x3db809ec27b89e35fcd506db7f95cd2e6864eeca'
  },
  {
    symbol: 'INNBCL',
    name: 'InnovativeBioresearchClassic',
    tokenAddress: '0x8cc3e2bdc17682c622eb789eda23fbd6988c84da',
    tokenDecimals: 10,
    exchangeAddress: '0xf553a86dbd2e3ca2230e299ecacfe86d5651c0c9'
  },
  {
    symbol: 'EvolV',
    name: 'Evolution Token',
    tokenAddress: '0x12528042299e0fca4d44ae4f42359319b8901fa2',
    tokenDecimals: 0,
    exchangeAddress: '0x474005e4ae8d6e89e562741a60c75ebd63e85494'
  },
  {
    symbol: 'GWP',
    name: 'Green World Project',
    tokenAddress: '0x4ffe33e525042cc84c503db5842ecda280f4a805',
    tokenDecimals: 18,
    exchangeAddress: '0x0b8a1d021f27a83b4431d72d2e4ea3f633d7bbf9'
  },
  {
    symbol: 'LIZA',
    name: 'LIZA Token',
    tokenAddress: '0x3b7712b395bc5f7f7fb6976ea4827377e77adab6',
    tokenDecimals: 18,
    exchangeAddress: '0x758f102080eabfdf930a089b1ccf62a03b25a02b'
  },
  {
    symbol: 'WPAY',
    name: 'Wrapped TenX Pay Token',
    tokenAddress: '0x2ca06986040d18d80acd34d0877e66f8e15f12fc',
    tokenDecimals: 18,
    exchangeAddress: '0xde158c2d2000084c502a873a76c4b9a41277d5f5'
  },
  {
    symbol: 'CRWN',
    name: 'CRWNCOIN',
    tokenAddress: '0xba7c7c3e91445f6bd6424c7f3945c3be73fd280d',
    tokenDecimals: 8,
    exchangeAddress: '0xf79280013d4d683de13bc06f15def23ae92759f4'
  },
  {
    symbol: 'BTCN',
    name: 'BITCOIN NEW',
    tokenAddress: '0xc631afea17f2f8520e589a144d116064434f25bc',
    tokenDecimals: 18,
    exchangeAddress: '0x42f7c0cf3ac5b903e62aa5945ee32b0df9b65aa9'
  },
  {
    symbol: 'BITC',
    name: 'BITCLAUDIO',
    tokenAddress: '0x4695e380fec31947b3fe176abeb37ac09d49b9a0',
    tokenDecimals: 18,
    exchangeAddress: '0x02514d5bec320a92db7346672957e93bcf6d0e26'
  },
  {
    symbol: 'NOAH',
    name: 'NOAHCOIN',
    tokenAddress: '0x58a4884182d9e835597f405e5f258290e46ae7c2',
    tokenDecimals: 18,
    exchangeAddress: '0x530f026060aadaa55ae1a0eddef4586093fd3530'
  },
  {
    symbol: 'MRR',
    name: 'Master Resell Rights',
    tokenAddress: '0xe5101f5707f008b1d282b79fb8e1d3fb83cc78ec',
    tokenDecimals: 18,
    exchangeAddress: '0x660e5bc49ff6ebe2e73f33863cd0d11859ab7780'
  },
  {
    symbol: 'NOX',
    name: 'Nitro',
    tokenAddress: '0xec46f8207d766012454c408de210bcbc2243e71c',
    tokenDecimals: 18,
    exchangeAddress: '0xfe764894529eddf77ce0e6f83acf56f50e1e7a31'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4f30e682d0541eac91748bd38a648d759261b8f3',
    tokenDecimals: 18,
    exchangeAddress: '0x0359465d35deb33a7fa5a74322eb73ebd94f8452'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xfe764894529eddf77ce0e6f83acf56f50e1e7a31',
    tokenDecimals: 18,
    exchangeAddress: '0xaf9fd25098bd469a8369c116db47a776de775ca8'
  },
  {
    symbol: 'ZCC',
    name: 'ZeroCarbon',
    tokenAddress: '0x6737fe98389ffb356f64ebb726aa1a92390d94fb',
    tokenDecimals: 18,
    exchangeAddress: '0x0ba1183587f90e1892d60747e0017219c19972f1'
  },
  {
    symbol: 'SGC',
    name: 'SignalCoin',
    tokenAddress: '0x773dcefa15b47e77c7955e5d0383bafecd672734',
    tokenDecimals: 6,
    exchangeAddress: '0x35c3cf8b4075d36d6cd9cc72a24eb5550d11faf3'
  },
  {
    symbol: 'NXM',
    name: 'NXM',
    tokenAddress: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b',
    tokenDecimals: 18,
    exchangeAddress: '0xa3f4965e2a649afb784349354acc16f3b35dfb44'
  },
  {
    symbol: 'EVEN',
    name: 'EVEN',
    tokenAddress: '0x2505a3c035291c05cb78cb43cff39564637e1dd9',
    tokenDecimals: 18,
    exchangeAddress: '0xa4ad0dd3e25c35b43b94cfabac08d3518f3623a5'
  },
  {
    symbol: 'POV',
    name: 'POV Crypto',
    tokenAddress: '0xadd27120b57d9bd0cea29876168a01e3e904131e',
    tokenDecimals: 0,
    exchangeAddress: '0xdec4602170d0aea68e1530f0d4c099ac3c0d6c66'
  },
  {
    symbol: 'XIO',
    name: 'XIO Network',
    tokenAddress: '0x0f7f961648ae6db43c75663ac7e5414eb79b5704',
    tokenDecimals: 18,
    exchangeAddress: '0x7b6e5278a14d5318571d65aced036d09c998c707'
  },
  {
    symbol: 'READ',
    name: '阅读币',
    tokenAddress: '0x13d0bf45e5f319fa0b58900807049f23cae7c40d',
    tokenDecimals: 8,
    exchangeAddress: '0xa4e6bfb20c4fca40bfc0990515c581b69ce47c19'
  },
  {
    symbol: '4XB',
    name: '4xBit',
    tokenAddress: '0xa3ac41fde5f3a569fa79e81ffe6734ee8097ce9d',
    tokenDecimals: 8,
    exchangeAddress: '0x9d443777e79fd3945810fbce150e17527a328052'
  },
  {
    symbol: 'WBTC',
    name: 'WildBitsTakeControl',
    tokenAddress: '0x88c7385a403008b63dc028ba5acbad3edb1d1fa9',
    tokenDecimals: 18,
    exchangeAddress: '0xf3ca03229b9b510952ad7fb277350fdf0079401f'
  },
  {
    symbol: 'SLCR',
    name: 'Slicer',
    tokenAddress: '0xf6e26fd7f9918dd602ff90f7cda96da963d30995',
    tokenDecimals: 18,
    exchangeAddress: '0x07ae96fb605da9b440d76808e98ea999c2bcef2c'
  },
  {
    symbol: 'INFER',
    name: 'INFERNO',
    tokenAddress: '0x3fb907e0d6247accc6374d99604ff1468e110bc3',
    tokenDecimals: 0,
    exchangeAddress: '0xcb4b1ff02e558210d95676bc8fa269f07bef4fab'
  },
  {
    symbol: 'YKN',
    name: 'Yarek Kurgan Token',
    tokenAddress: '0x2eeca16bf8d052da970ac0f43aa6bf5bd019f397',
    tokenDecimals: 4,
    exchangeAddress: '0x34b8b200c0351cb38f16c738a3e8e949ea816359'
  },
  {
    symbol: 'RJNI',
    name: 'Rajni',
    tokenAddress: '0xbb63e3aff15b9061cb036da43ed592c5148b5108',
    tokenDecimals: 18,
    exchangeAddress: '0xbfb397615b0763536ae157f03cfad726b936c35c'
  },
  {
    symbol: 'SRM',
    name: 'SOLARMINING',
    tokenAddress: '0x681724368d052a4e29fc226ed5085082d74fe716',
    tokenDecimals: 18,
    exchangeAddress: '0x395b7c2fdf41ec7bba0e04c20e23feb0aa13b87d'
  },
  {
    symbol: 'LMY',
    name: 'Lunch Money',
    tokenAddress: '0x66fd97a78d8854fec445cd1c80a07896b0b4851f',
    tokenDecimals: 18,
    exchangeAddress: '0xece1d9e03ad03e89a9b0944776551e5b6b23578e'
  },
  {
    symbol: 'SLRM',
    name: 'Solareum',
    tokenAddress: '0x56ee8c9bd1d445a3324ad83e86d8be309db8f85d',
    tokenDecimals: 18,
    exchangeAddress: '0x87a8cd60a542800b30da32ed3fb5e6278a7a5a95'
  },
  {
    symbol: 'PKG',
    name: 'PKG Token',
    tokenAddress: '0x02f2d4a04e6e01ace88bd2cd632875543b2ef577',
    tokenDecimals: 18,
    exchangeAddress: '0x30f231d765e6f1037947168602b5cb8ff7bc270f'
  },
  {
    symbol: 'PRTKN',
    name: 'Pirate Token',
    tokenAddress: '0x4136dd480327e24e0908d829e03b08559e7d9b8d',
    tokenDecimals: 18,
    exchangeAddress: '0xe561dc75a53693fa0bc94931d2f2d20cb5b66051'
  },
  {
    symbol: 'V2X',
    name: 'Vitalik2X',
    tokenAddress: '0xb016eb4bc7146cfea3af2269b4da1a0e7e85745b',
    tokenDecimals: 18,
    exchangeAddress: '0x6b50481e454eed5eabe75fd89a65bc94a0485ec5'
  },
  {
    symbol: 'BZRX',
    name: 'bZx Protocol Token',
    tokenAddress: '0x1c74cff0376fb4031cd7492cd6db2d66c3f2c6b9',
    tokenDecimals: 18,
    exchangeAddress: '0xcacdc342944b812e07296206ef654b8f49046810'
  },
  {
    symbol: 'CBIX7',
    name: 'CBI Index 7',
    tokenAddress: '0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2',
    tokenDecimals: 18,
    exchangeAddress: '0x93a8515d674c3d3235beea0de7ae3099aa34b1a5'
  },
  {
    symbol: 'BTCP',
    name: 'BitcoinPro',
    tokenAddress: '0x723cbfc05e2cfcc71d3d89e770d32801a5eef5ab',
    tokenDecimals: 8,
    exchangeAddress: '0x2116fa15aed105a3010c1f3331c006cfbbe57bb3'
  },
  {
    symbol: 'LYM',
    name: 'Lympo tokens',
    tokenAddress: '0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5',
    tokenDecimals: 18,
    exchangeAddress: '0xb54aff4ad03359fef31b9a036046b3a30144e1c4'
  },
  {
    symbol: 'FKX',
    name: 'Knoxstertoken',
    tokenAddress: '0x009e864923b49263c7f10d19b7f8ab7a9a5aad33',
    tokenDecimals: 18,
    exchangeAddress: '0x91aa9d58d0672e3e4b0dad9abfe41c8849bab571'
  },
  {
    symbol: 'SKT',
    name: 'SpeedKingToken',
    tokenAddress: '0xa7c8d7a1c894e51dbb7c680b5b1dbdc845bfbdab',
    tokenDecimals: 5,
    exchangeAddress: '0x202d7c9046726cd2b5d643577172d5f10f4d5236'
  },
  {
    symbol: 'BTCLT',
    name: 'Bitcoin Liquidity Token',
    tokenAddress: '0x2c4ce444252fbeb762d789d6457d2bd530e292f6',
    tokenDecimals: 8,
    exchangeAddress: '0x19addf9565d1a0a0829e6a7cf965f3c43dad934e'
  },
  {
    symbol: 'GROSH',
    name: 'Grosh',
    tokenAddress: '0xecd8e185782a845bde1bf50f201f250f22fc4213',
    tokenDecimals: 2,
    exchangeAddress: '0x401d90724c411d3c1d3ba097038d88025232cb6f'
  },
  {
    symbol: 'DTR',
    name: 'Dynamic Trading Rights',
    tokenAddress: '0xd234bf2410a0009df9c3c63b610c09738f18ccd7',
    tokenDecimals: 8,
    exchangeAddress: '0x63162be37f0cc6581ebb9403a9d565634c20ba2f'
  },
  {
    symbol: 'BONUS',
    name: 'BitBonus',
    tokenAddress: '0x030c32c1190cbf077e5ee67ed19572c558e43ae4',
    tokenDecimals: 8,
    exchangeAddress: '0x616fcc7eb1511d86330bbef2ce8f3442366af494'
  },
  {
    symbol: 'BTCM',
    name: 'BitcoinMonkey',
    tokenAddress: '0x04c7cd246330288a84d2788e8a323cc41206c2eb',
    tokenDecimals: 18,
    exchangeAddress: '0xc730be0082a8b8cd217660ba7a22353434faafc3'
  },
  {
    symbol: 'KRL',
    name: 'Kryll',
    tokenAddress: '0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0',
    tokenDecimals: 18,
    exchangeAddress: '0xbf8b8d65803c5bdf45c42310a015a4a44e258775'
  },
  {
    symbol: 'ANEX',
    name: 'AnEx',
    tokenAddress: '0xaf93eb3dc2236c32a06d27b1c9bf90ad26c081a7',
    tokenDecimals: 6,
    exchangeAddress: '0xf8d0ceca4070602ba660f744f9ea3dcd3b53a7e1'
  },
  {
    symbol: 'SHOCK',
    name: 'AfterShock V2',
    tokenAddress: '0x62d69910f45b839903effd217559307aec307076',
    tokenDecimals: 18,
    exchangeAddress: '0xd1d038818b0c4d7841e464c806db1fcdb6d6ac5d'
  },
  {
    symbol: 'KAVA',
    name: 'ALAN Protokol',
    tokenAddress: '0x01e9079f38a1586e58218249a664d352494d28aa',
    tokenDecimals: 6,
    exchangeAddress: '0xe67da603c0ce0cc2a2a97b6c7d3bae6ce8b3bb9d'
  },
  {
    symbol: 'KYND',
    name: 'Kyndness',
    tokenAddress: '0x3557cf904f5384d79885bcb93af2aff94c36d8c1',
    tokenDecimals: 8,
    exchangeAddress: '0xda0ac4e95f4cf2ab58849ad7cfa86bd3c7956d17'
  },
  {
    symbol: 'SWM',
    name: 'SWARM',
    tokenAddress: '0x3505f494c3f0fed0b594e01fa41dd3967645ca39',
    tokenDecimals: 18,
    exchangeAddress: '0xbb96bcf62f01d886950b8ebe2a658827ee0acefd'
  },
  {
    symbol: 'PP',
    name: 'Produce Pay',
    tokenAddress: '0xb628919a5456fd746a6b7a9f1003040ca63e6d45',
    tokenDecimals: 18,
    exchangeAddress: '0x9133cdfafb335981434f1533d07b8d2e154f5baa'
  },
  {
    symbol: 'SNOIL',
    name: 'Synthetic Oil Coin',
    tokenAddress: '0xc3f1ea9afe9605c6ab52524159aef389ea7af460',
    tokenDecimals: 18,
    exchangeAddress: '0x7ce151cf7b35feea29f93ae3edca486f9421ef6a'
  },
  {
    symbol: 'SCPT',
    name: 'ScepterCash',
    tokenAddress: '0x790304309388c417ff8aab454b8d27e79cad1df5',
    tokenDecimals: 18,
    exchangeAddress: '0x589b2e05ac188dbb9f83c0ff315f2a9d26bb366c'
  },
  {
    symbol: 'GVT',
    name: 'Givet',
    tokenAddress: '0xfbb9cb6ac0cfe4188fbd6b5f95e6fd190567aea5',
    tokenDecimals: 18,
    exchangeAddress: '0xd9c21f5490835de2f4f593c4f61f80bfd7298917'
  },
  {
    symbol: 'MBDS',
    name: 'MBDS',
    tokenAddress: '0x126e75b128b7733cd2a1db7b9a7b569c31ca964f',
    tokenDecimals: 2,
    exchangeAddress: '0x9f9d8c03bdecfe9d480c1cbb8f80ebfee23f1a08'
  },
  {
    symbol: 'TMT',
    name: 'TBC Mart Token',
    tokenAddress: '0x6f02055e3541dd74a1abd8692116c22ffafadc5d',
    tokenDecimals: 18,
    exchangeAddress: '0x6b214b2cd5e4f6bf31ec0e49449935a48d202f91'
  },
  {
    symbol: 'WWT',
    name: 'WORLD WIDE TRADE',
    tokenAddress: '0x512630dc263fd4c71dbe81fec68cf61156d79e80',
    tokenDecimals: 18,
    exchangeAddress: '0x3f9ccfd1240bf75c4e833f3b08d77ee6fcb0fac3'
  },
  {
    symbol: 'BGST',
    name: 'Bushwick Generator SpaceTime',
    tokenAddress: '0x07f9b3ba425cdb68f96147c7cd6a29dcd02a4b51',
    tokenDecimals: 18,
    exchangeAddress: '0xe95d34e5e511228e3cf77bddd89c5e5a7d7dd02a'
  },
  {
    symbol: 'ONE',
    name: 'Menlo One',
    tokenAddress: '0x4d807509aece24c0fa5a102b6a3b059ec6e14392',
    tokenDecimals: 18,
    exchangeAddress: '0x46cf303f44cc646f941839b81434d8f3246f380a'
  },
  {
    symbol: 'BTZ',
    name: 'Botz Token',
    tokenAddress: '0x55703726a2e82d0f9119d4f0fd3f50736ba18edb',
    tokenDecimals: 18,
    exchangeAddress: '0xb5749581043e1130a11597c8750bedefc12cf00a'
  },
  {
    symbol: 'ATD',
    name: 'Atidium',
    tokenAddress: '0xf69709c4c6f3f2b17978280dce8b7b7a2cbcba8b',
    tokenDecimals: 18,
    exchangeAddress: '0xaa78dae2dd8c18ce3cc25f50ffaf40069e93b6dc'
  },
  {
    symbol: 'FND',
    name: 'Insula',
    tokenAddress: '0xcb60d600160d005845ec999f64266d5608fd8943',
    tokenDecimals: 18,
    exchangeAddress: '0x892d5acc73bb1e1f54a5e340394e70a7ea8e5a1d'
  },
  {
    symbol: 'NCA',
    name: 'Nuclear',
    tokenAddress: '0x3c04ff86492ce16ccb306acb9226a1064cafad07',
    tokenDecimals: 6,
    exchangeAddress: '0x6f00ec2c8278871453e96487ba4cdecd8ff4d50d'
  },
  {
    symbol: 'ANIME',
    name: 'Animeyen',
    tokenAddress: '0xc36e2c02e64585c15794b8e25e826d50b15fd878',
    tokenDecimals: 8,
    exchangeAddress: '0x406bbdfdc82c535e704f274522b4d0ef0c94c949'
  },
  {
    symbol: 'UZS',
    name: 'Uzbek Som',
    tokenAddress: '0x3973b1efce763d0017028bfc3904a4c2185f2e20',
    tokenDecimals: 0,
    exchangeAddress: '0xb87a1981f959b21f2280e3c2f9fb0d750f63fe10'
  },
  {
    symbol: 'ZDC',
    name: 'Zodcoin',
    tokenAddress: '0x7a2810d3d859ed03ede523eb801a3b43b5e8979c',
    tokenDecimals: 18,
    exchangeAddress: '0x0eb1bbda4a33c8876f82de9f443da82c3fd33e07'
  },
  {
    symbol: 'GVT',
    name: 'Givet',
    tokenAddress: '0xf5d99b06a813231265b5786a48e58b1fee0baf84',
    tokenDecimals: 18,
    exchangeAddress: '0xe56545336a240ccfd682b5cc332f8abb31ffa9cf'
  },
  {
    symbol: 'ISLAUSDB',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x20e5745fc02d667d9a57dede8acb22b96e9ac45d',
    tokenDecimals: 18,
    exchangeAddress: '0x0d2feac0d6df561f7b8499bdea8c3fd7acec9585'
  },
  {
    symbol: 'ISLABNT',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x2b9c212884f731ea3a402617baf6adff7709dd7c',
    tokenDecimals: 18,
    exchangeAddress: '0x30de9aef2ed5e1a11db9579e5319e8da5262993e'
  },
  {
    symbol: 'YSC',
    name: 'YACHT.SOCIAL',
    tokenAddress: '0x627b9057549ce79ca1de9de5019ee5cfa1eadc86',
    tokenDecimals: 18,
    exchangeAddress: '0xfcfdd5a45a1d6f86c192a0cd0fba656020588e7e'
  },
  {
    symbol: 'ISLAUSDB',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x8f2250045cc366786b84ac65a66b394c48a85b0f',
    tokenDecimals: 18,
    exchangeAddress: '0x58195d6e6a4b721b09bf1300ac93561dd1d4fb5e'
  },
  {
    symbol: 'NBE',
    name: 'NUBEE',
    tokenAddress: '0xdff3d1347187a0a1f225707b710010b10e6f3084',
    tokenDecimals: 8,
    exchangeAddress: '0x6a1515816eb57b3924f1c2a9b53703b91b126b8b'
  },
  {
    symbol: 'IDN',
    name: 'Indonesian Project',
    tokenAddress: '0x70ec7702ada8530d8f7332f7f3700099553d772d',
    tokenDecimals: 8,
    exchangeAddress: '0x023d17f49c10d3042d03281faa7b68404d4e2390'
  },
  {
    symbol: 'EBATo',
    name: 'EBA',
    tokenAddress: '0x27fbdd15fb0820b50b9c3683ea628bb6ab9b2d70',
    tokenDecimals: 18,
    exchangeAddress: '0x494d82667c3ed3ac859cca94b1be65b0540ee3bb'
  },
  {
    symbol: 'CMME',
    name: 'CMMEToken',
    tokenAddress: '0x9f949124e2a23492005a9bb937acb29bda2cab9e',
    tokenDecimals: 8,
    exchangeAddress: '0x82fd596dac2619ece5732d767590183cbf877367'
  },
  {
    symbol: 'AFDLT',
    name: 'AfroDex Labs Token',
    tokenAddress: '0xd8a8843b0a5aba6b030e92b3f4d669fad8a5be50',
    tokenDecimals: 4,
    exchangeAddress: '0x6d1d56927144f38cc3d80bc20ccf15f0d703ac66'
  },
  {
    symbol: 'YLC',
    name: 'YoloCash',
    tokenAddress: '0x21d5678a62dfe63a47062469ebb2fac2817d8832',
    tokenDecimals: 8,
    exchangeAddress: '0x4a9862d0d1e12fa2c4577f57826edcd203a42e88'
  },
  {
    symbol: 'SIM',
    name: 'Simmitri',
    tokenAddress: '0x7528e3040376edd5db8263db2f5bd1bed91467fb',
    tokenDecimals: 18,
    exchangeAddress: '0x87919a0c49c14fcdbfc509774e9cf4df00ae276a'
  },
  {
    symbol: 'OFFER',
    name: 'Offer for Goods',
    tokenAddress: '0x51954e7045fc33413f5fe55d0bff4a7b71dba6c7',
    tokenDecimals: 18,
    exchangeAddress: '0xcff842ef3b3723592f82b5d71ca794298b95b6f4'
  },
  {
    symbol: 'GC',
    name: 'Gric Coin',
    tokenAddress: '0x720c2c93f5f9a6b82226e84095558b10f399b0fa',
    tokenDecimals: 18,
    exchangeAddress: '0x6ff224f433b1d6a79a4b4bea4bfa223c279f5b5e'
  },
  {
    symbol: 'INR',
    name: 'Indian Rupee',
    tokenAddress: '0xa51972f41daa0bde4b18a374459147bd3cdad8f0',
    tokenDecimals: 6,
    exchangeAddress: '0xd7a50a888af98b2ee9403c450a97b42b0d9b12f0'
  },
  {
    symbol: 'LUA',
    name: 'LUA',
    tokenAddress: '0x8b5b1ee2a9aa34c3f497e1eb89646310d31d56ba',
    tokenDecimals: 18,
    exchangeAddress: '0xcdb3f850b58076deb724492eaaa898aa44c6c9b8'
  },
  {
    symbol: 'WIPH',
    name: 'Wiphala',
    tokenAddress: '0x7329f01e471692f022fcd5c6ef515ddfc5875a30',
    tokenDecimals: 18,
    exchangeAddress: '0x9223c93d86f8c9cff3e2d366c13f82065248ca13'
  },
  {
    symbol: 'CLSK',
    name: 'CloudStack',
    tokenAddress: '0xbf3c268e7c7698882d1b8538d2c61c9c0077915c',
    tokenDecimals: 18,
    exchangeAddress: '0x30a6d41612b4f4e48d536c3eae7b851facbf78cd'
  },
  {
    symbol: 'TTV',
    name: 'Token for Television',
    tokenAddress: '0xa838be6e4b760e6061d4732d6b9f11bf578f9a76',
    tokenDecimals: 18,
    exchangeAddress: '0xa4a24d83fa14e27aed3b266ce842ca06034dc9b6'
  },
  {
    symbol: 'USDS',
    name: 'StableUSD',
    tokenAddress: '0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe',
    tokenDecimals: 6,
    exchangeAddress: '0x7ef7191ab91ddb4d7cc347fbfa170355acbaf02d'
  },
  {
    symbol: 'EOPT',
    name: 'EasyOption.io Token',
    tokenAddress: '0x9a2681935c2775b7abf0649ec5c306eea7561930',
    tokenDecimals: 18,
    exchangeAddress: '0x7f0296a5277a14904e9527de27c19fc17fd47c20'
  },
  {
    symbol: 'COD',
    name: 'Cash on Delivery',
    tokenAddress: '0xe7da4034d6bf12909e5d0198c3784f55a06e0210',
    tokenDecimals: 18,
    exchangeAddress: '0xcc70dce9cdc690a2bd633669133bd5e8bb165c1b'
  },
  {
    symbol: 'PAXUSDB',
    name: 'PAX Smart Relay Token',
    tokenAddress: '0x573c97e9fb924c22d41127481eedf4a177394988',
    tokenDecimals: 18,
    exchangeAddress: '0xcca512453e3ec44ceef89aa5bc7e4844748ea9d0'
  },
  {
    symbol: 'BNX',
    name: 'Bitnordex',
    tokenAddress: '0x60ce1dd8f8bffd69994170ae66bc50be8bd6b839',
    tokenDecimals: 18,
    exchangeAddress: '0xf5135825534a3b090565ad3e60803d920732ee41'
  },
  {
    symbol: 'HOLE',
    name: 'Black Hole',
    tokenAddress: '0x03fb52d4ee633ab0d06c833e32efdd8d388f3e6a',
    tokenDecimals: 18,
    exchangeAddress: '0xd697c50488f5d063c75cf1fae1f66f6cedfea448'
  },
  {
    symbol: 'LEX',
    name: 'Lexington',
    tokenAddress: '0x17042fca22f10220037ee4bdaf3ccef781f46b47',
    tokenDecimals: 18,
    exchangeAddress: '0x755d2f151dd5c91389beffc3757cb1ab9a30b380'
  },
  {
    symbol: 'ID',
    name: 'Everest ID',
    tokenAddress: '0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83',
    tokenDecimals: 18,
    exchangeAddress: '0x5950a97bf9864b1b4c0d4cb5f2094cfe59abcb51'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x494d82667c3ed3ac859cca94b1be65b0540ee3bb',
    tokenDecimals: 18,
    exchangeAddress: '0xb3e2e293b844c3a80169952ea6a66eb92688e65c'
  },
  {
    symbol: 'BAZR',
    name: 'Bazeries',
    tokenAddress: '0x8dbebdca0f66b3532f7613e9606faee19030d3f9',
    tokenDecimals: 18,
    exchangeAddress: '0x5999b53b526ed45a104ae41e3c4af9bb33ace3ae'
  },
  {
    symbol: 'FET',
    name: 'Fetch',
    tokenAddress: '0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd',
    tokenDecimals: 18,
    exchangeAddress: '0x57a128958d41a5fa7bfa455be45b12f197a1969c'
  },
  {
    symbol: 'MANTIS',
    name: 'MANTIS',
    tokenAddress: '0x3d79f5abf58619f0a70f69c094d99e25d6f2126b',
    tokenDecimals: 18,
    exchangeAddress: '0xefb716398bf9164ece5ae61ae9c53bf16c0bd01f'
  },
  {
    symbol: '',
    name: '',
    tokenAddress: '0xae345a936b4573e70fdcd852d4505496e95f3a6b',
    tokenDecimals: 0,
    exchangeAddress: '0xc91b2418bafcae9b02c1a616e6386cb4ecccf365'
  },
  {
    symbol: 'PK',
    name: 'Pak Token',
    tokenAddress: '0x63057c7d97d99c485c534bbd0d40c5b3eec0b4fc',
    tokenDecimals: 18,
    exchangeAddress: '0xd7538ab0f562b592080e6509fd6bce21730b9305'
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    tokenDecimals: 18,
    exchangeAddress: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667'
  },
  {
    symbol: 'MIN',
    name: 'Minerals',
    tokenAddress: '0x0d31444c3f3cd583f30ca1b7cedc973db4bf5abf',
    tokenDecimals: 18,
    exchangeAddress: '0x0b9122c0d43f2051d7ff12350c4d890ec8965d21'
  },
  {
    symbol: 'ECP',
    name: 'ECP Token',
    tokenAddress: '0x945f171de4ea81a213dcc7a1e8c4f6feb3b4b806',
    tokenDecimals: 18,
    exchangeAddress: '0x06360a0d29885e835700367f72665919fed11856'
  },
  {
    symbol: 'AMB',
    name: 'AMC Blue',
    tokenAddress: '0xd6c7576b735def0d8ea12d6a21332d8c37fc0fbb',
    tokenDecimals: 18,
    exchangeAddress: '0x07c64a61db22035b0b97bea54badfa99561a474d'
  },
  {
    symbol: 'REAL',
    name: '747cd2304424f89e39fa2bd1419eee3213ca557d1b829540714065a13f7407e9',
    tokenAddress: '0xe96d6f202eca0ec9ebcb2f8af054556cf8f9cf65',
    tokenDecimals: 18,
    exchangeAddress: '0x35cf52b8ae941d14c7572a672510cc750f411222'
  },
  {
    symbol: 'PAY',
    name: 'PAYDAY LOAN COIN',
    tokenAddress: '0x3952cd3335d313e0bdc7028c8dd7cad6a9905f89',
    tokenDecimals: 18,
    exchangeAddress: '0x1edc041a37ecfc6a9c3bac049ea4879bb1a2943b'
  },
  {
    symbol: 'BRX',
    name: 'Brex Coin',
    tokenAddress: '0x7f383463279dacc75cc3ffa39e85e78f548df4a1',
    tokenDecimals: 18,
    exchangeAddress: '0xd606e1ef3c5e1a07d17131a4a1cceaf9cd973396'
  },
  {
    symbol: 'CCCN',
    name: 'Century Crypto Coin',
    tokenAddress: '0xd11aa2d9342c2b48259f8aa9061c7541d6ba018c',
    tokenDecimals: 18,
    exchangeAddress: '0x83f7b6e957747be4dc95c85f252d27c40b820319'
  },
  {
    symbol: 'Ort',
    name: 'Ortier',
    tokenAddress: '0x44c5c863fc9082887c1ba507fea3e19039a72186',
    tokenDecimals: 18,
    exchangeAddress: '0xc50211d28f62d37d34c206130af4927d3fc1e6bd'
  },
  {
    symbol: 'RCO',
    name: 'Ricoin',
    tokenAddress: '0x1600c5502e7e94cacf73c124331cfa3e20add40e',
    tokenDecimals: 8,
    exchangeAddress: '0x2932ac0edc8b440d6efe6fe549f4c7b02810ccbb'
  },
  {
    symbol: 'LDR',
    name: 'lexDAO Research',
    tokenAddress: '0x180819c2a7d12d0b24fb7a3a4e001fcde32d95de',
    tokenDecimals: 18,
    exchangeAddress: '0x538e93bedae0d17831979296233ce6bbc83e96b2'
  },
  {
    symbol: 'NEC',
    name: 'Ethfinex Nectar Token',
    tokenAddress: '0xcc80c051057b774cd75067dc48f8987c4eb97a5e',
    tokenDecimals: 18,
    exchangeAddress: '0x4d6ef41be615d2e74fafe2162fb5aa1267f9081e'
  },
  {
    symbol: 'JCB',
    name: 'GJC',
    tokenAddress: '0x7420cdf53b7864317e1f07443ba413e933f00906',
    tokenDecimals: 4,
    exchangeAddress: '0xf94a92119bba2e918d0ef0805e42c0df9653799b'
  },
  {
    symbol: 'eWOO',
    name: 'eWoolong',
    tokenAddress: '0x5a96629f9e589ad676380f35ec6798d578d7fc6d',
    tokenDecimals: 4,
    exchangeAddress: '0xb9c16048649a871a93d99915ff571c793130cc94'
  },
  {
    symbol: 'FRD',
    name: 'FARAD',
    tokenAddress: '0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4',
    tokenDecimals: 18,
    exchangeAddress: '0x18f5bd3a17ff5464a93574c23bccb4aa5d4566c9'
  },
  {
    symbol: 'MIND',
    name: 'MIND Token',
    tokenAddress: '0x222728c202e7164dfbd127181d46409338c4328e',
    tokenDecimals: 18,
    exchangeAddress: '0xc00e1570fbbcfc37100cc48386b2649ca0101019'
  },
  {
    symbol: 'Y0Ct0',
    name: 'Y0Ct0',
    tokenAddress: '0x1a915888faab504c0afcec5d4041922fb3630812',
    tokenDecimals: 18,
    exchangeAddress: '0x1c395a25e839b2ef0592c896421dccd9438cdef8'
  },
  {
    symbol: 'GLDE',
    name: 'GOLDENEYE Fixed Supply Token',
    tokenAddress: '0x90b199690284b75220ce016be1fc5f31c0a6d171',
    tokenDecimals: 18,
    exchangeAddress: '0x4e904f8acfefca73c9075e3adb8670d9374ec056'
  },
  {
    symbol: 'FRT',
    name: 'Fortuna',
    tokenAddress: '0x9eca8e7fd201f13520ddac794268a90cf8597bed',
    tokenDecimals: 18,
    exchangeAddress: '0xfad031a458687cf309222b4f658a88a12e164350'
  },
  {
    symbol: 'AAJ',
    name: 'AAJ',
    tokenAddress: '0x0dcfd6d0a85cc8f35fe507fed1dba4318bae8df3',
    tokenDecimals: 18,
    exchangeAddress: '0xad67fdd56921a51d64acea6cb2f36955c70b2068'
  },
  {
    symbol: 'TRIZ',
    name: 'Tribezcoin',
    tokenAddress: '0x2f8a2c9328cb0955ee363c4a7ea65974e1f55b03',
    tokenDecimals: 6,
    exchangeAddress: '0x5a93a1b8dd7d42889ae00164637e87d2bda6aa81'
  },
  {
    symbol: 'BAT',
    name: 'BasicAttention Token',
    tokenAddress: '0x9e5675b91cd1f60be361adadf2dcc53885e910d1',
    tokenDecimals: 4,
    exchangeAddress: '0x6992b9cf70eee28d3eba3e2fa806fa513679ad91'
  },
  {
    symbol: 'MOLC',
    name: 'Mol Coin',
    tokenAddress: '0x4770b2f7ac9490bcec13622526fa714ccbf1a752',
    tokenDecimals: 18,
    exchangeAddress: '0x388b9305684dcc5a3a2f44447e03019d9ca704ed'
  },
  {
    symbol: 'DAI-HRD',
    name: 'DAI-HRD',
    tokenAddress: '0x9b869c2eaae08136c43d824ea75a2f376f1aa983',
    tokenDecimals: 18,
    exchangeAddress: '0x918af0fb5517ac5b8b34240203408cedbba09bd9'
  },
  {
    symbol: 'NUK',
    name: 'NUKlear',
    tokenAddress: '0x9e12c837159dedc233719edf5a4ec2405644e8a7',
    tokenDecimals: 3,
    exchangeAddress: '0x276638b3c3eb0dc94ee8f6c321f5f1c69909b21e'
  },
  {
    symbol: 'AGRO',
    name: 'AGRONEUM',
    tokenAddress: '0x4fce19caa366f69ed6cc2793b83050e24d2c82e2',
    tokenDecimals: 18,
    exchangeAddress: '0x4815976a384299e1e9b803676f11310dd231efac'
  },
  {
    symbol: 'BMT',
    name: 'BitMinutes',
    tokenAddress: '0x86c2752f8fe2c6679a942c8ee6c785c28f42cd55',
    tokenDecimals: 18,
    exchangeAddress: '0x73eef310ccc2774fdc61bcad30c58d160568fe58'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667',
    tokenDecimals: 18,
    exchangeAddress: '0xd2eaa9434b7789bdad7650a32ed5637566e7e705'
  },
  {
    symbol: 'UCN',
    name: 'SaveUNICOINs',
    tokenAddress: '0x37aa63c4cbd06a57f1ea35bceee4e46f0a7ce924',
    tokenDecimals: 0,
    exchangeAddress: '0xefaa9a5dbd2c9e6073dc7320f3556f902234a805'
  },
  {
    symbol: 'TIME',
    name: 'TIMECOIN',
    tokenAddress: '0x5f0452bf45c2ad560a4ac6d663033c50bc04d044',
    tokenDecimals: 18,
    exchangeAddress: '0xfa7ac3addc92c5e1b18eb0a74920b59c3505f83d'
  },
  {
    symbol: 'VEE',
    name: 'BLOCKv Token',
    tokenAddress: '0x340d2bde5eb28c1eed91b2f790723e3b160613b7',
    tokenDecimals: 18,
    exchangeAddress: '0xefaa7f81c5397a73b43f340fe3397281c07a4057'
  },
  {
    symbol: 'LEV',
    name: 'Leverj',
    tokenAddress: '0x0f4ca92660efad97a9a70cb0fe969c755439772c',
    tokenDecimals: 9,
    exchangeAddress: '0xda91447a55e28d413f8112dc329c1c2fda8c181d'
  },
  {
    symbol: 'ISA',
    name: 'c02fb23cba3ad98dce99d515da424b7ac7d8cc774b30507ad69e0329531d0c76',
    tokenAddress: '0x3e82efc3817677dc82e588548dbe3746b6682c03',
    tokenDecimals: 18,
    exchangeAddress: '0xcff28149a22c3cc0e604f8e3f409b9efd565fdcb'
  },
  {
    symbol: 'HUNK',
    name: 'Hunk of unpasteurized cheeze',
    tokenAddress: '0x521871fe28ab18d7564611e3021e139f37452a43',
    tokenDecimals: 18,
    exchangeAddress: '0x1b60fa317dcff0148e7b841ac47bd56cb26bcc6f'
  },
  {
    symbol: 'GWIT',
    name: 'Global Women Investment Token',
    tokenAddress: '0x55d0bb8d7e7fbf5b863c7923c4645ff83c3d0033',
    tokenDecimals: 18,
    exchangeAddress: '0x4dfe4a0b1404183f3604a63a51006fbdc41bbb00'
  },
  {
    symbol: 'REMI',
    name: 'RemiChain',
    tokenAddress: '0x2dbe823bbb134274b463b7ae001961f36d2bbcad',
    tokenDecimals: 8,
    exchangeAddress: '0xa3c9f1ce4bc02b9ce32b44277f741eae96acd01e'
  },
  {
    symbol: 'PAY',
    name: 'PAYDAY LOAN COIN',
    tokenAddress: '0x3952cd3335d313e0bdc7028c8dd7cad6a9905f89',
    tokenDecimals: 18,
    exchangeAddress: '0x1edc041a37ecfc6a9c3bac049ea4879bb1a2943b'
  },
  {
    symbol: 'TTV',
    name: 'Token for Television',
    tokenAddress: '0xa838be6e4b760e6061d4732d6b9f11bf578f9a76',
    tokenDecimals: 18,
    exchangeAddress: '0xa4a24d83fa14e27aed3b266ce842ca06034dc9b6'
  },
  {
    symbol: 'JB',
    name: 'Jack block',
    tokenAddress: '0xea9557b1fbc765419c7dc6b4e6a9a3d8a6463f32',
    tokenDecimals: 18,
    exchangeAddress: '0xbda857ff04e451e5f835e2b8fd799e59f465ee26'
  },
  {
    symbol: 'GCASH',
    name: 'Gcash',
    tokenAddress: '0xc53f6c2ac35d30cc47ddf3c320874b21dfa38791',
    tokenDecimals: 4,
    exchangeAddress: '0x3e3fd9230518ba8644df5b48423e2be5e6016540'
  },
  {
    symbol: 'OHDAIUSDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0x6fc19f348322b1edbbf903b10f3cad67c50048bd',
    tokenDecimals: 6,
    exchangeAddress: '0xda22ab0eca61f101d53eb700875a8226e6e4b8de'
  },
  {
    symbol: 'LUA',
    name: 'LUA',
    tokenAddress: '0x8b5b1ee2a9aa34c3f497e1eb89646310d31d56ba',
    tokenDecimals: 18,
    exchangeAddress: '0xcdb3f850b58076deb724492eaaa898aa44c6c9b8'
  },
  {
    symbol: 'ODEX',
    name: 'One DEX',
    tokenAddress: '0xa960d2ba7000d58773e7fa5754dec3bb40a069d5',
    tokenDecimals: 18,
    exchangeAddress: '0xc39a4762c7b095c74611acbf869f4cf7d68c56ca'
  },
  {
    symbol: 'FOX',
    name: 'FOX',
    tokenAddress: '0xc770eefad204b5180df6a14ee197d99d808ee52d',
    tokenDecimals: 18,
    exchangeAddress: '0x9dd44d019b3f992cb56a19d15daccca7edf3e584'
  },
  {
    symbol: 'BZN',
    name: 'Benzene',
    tokenAddress: '0x6524b87960c2d573ae514fd4181777e7842435d4',
    tokenDecimals: 18,
    exchangeAddress: '0x2871ef639e4b0a628749508dd9d95745fe95637f'
  },
  {
    symbol: 'CYFM',
    name: 'CyberFM',
    tokenAddress: '0x32b87fb81674aa79214e51ae42d571136e29d385',
    tokenDecimals: 18,
    exchangeAddress: '0x0f88a6cbeb3bd153c0584c7136fbcc86c2dd657f'
  },
  {
    symbol: 'OHDAI:USDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0xdde0ba4afc244b8c4992888482940eb40cc92023',
    tokenDecimals: 0,
    exchangeAddress: '0xf7731cfca78032e766893f403cf38d98008415c3'
  },
  {
    symbol: 'BEL',
    name: 'Belance Blockchain',
    tokenAddress: '0x7ce31d775ee8ae8058ed7e599e5f14bb1535f223',
    tokenDecimals: 18,
    exchangeAddress: '0x5577f97ca9653453baa844ed9e478d3f61f2900d'
  },
  {
    symbol: 'DZAR',
    name: 'Digital Rand',
    tokenAddress: '0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c',
    tokenDecimals: 6,
    exchangeAddress: '0x80324ec8d64425b37f8603a97097da7d493dbc79'
  },
  {
    symbol: 'MBC',
    name: 'myBcert',
    tokenAddress: '0x0b1683b742976a46603453a918773e46e666b12c',
    tokenDecimals: 8,
    exchangeAddress: '0x583705b392f76e27b5299640e74a6cca4c19dc1c'
  },
  {
    symbol: 'OHDAI:USDC:1.01',
    name: 'ohDAI 1.01:1 USDC',
    tokenAddress: '0x8860b076bdd6640f2fe5c9157e5b5c87561b268f',
    tokenDecimals: 6,
    exchangeAddress: '0x598bf42fa129e981b8f08f6211ce6736e0711c4c'
  },
  {
    symbol: 'iDAI',
    name: 'Fulcrum DAI iToken',
    tokenAddress: '0x493c57c4763932315a328269e1adad09653b9081',
    tokenDecimals: 18,
    exchangeAddress: '0x3e0349f5d38414008b9bb1907ea422739be7cd4c'
  },
  {
    symbol: 'YDT',
    name: 'DevonToken',
    tokenAddress: '0xa28bb880d056a6a6e0d7da4ffb2d67225c23f008',
    tokenDecimals: 16,
    exchangeAddress: '0x00dbe4b9e0da43656b2a76b6124d134d49b0aabb'
  },
  {
    symbol: 'OHDAI:USDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0x00a4d48c94aa205e90f635aba5e7e8f968b2608d',
    tokenDecimals: 0,
    exchangeAddress: '0xbdc589b1c00c04fe9d56ccafc793ebf0e82d77a3'
  },
  {
    symbol: 'WTE',
    name: 'Washington Trust Estate',
    tokenAddress: '0xccee121e2f303283c5eef616f92295a33be5a25f',
    tokenDecimals: 18,
    exchangeAddress: '0xd1a0ffe6167a35e3933f43318bfc6e387edac490'
  },
  {
    symbol: 'PROPS',
    name: 'Props Token',
    tokenAddress: '0x155e7e9ab193aa37c87d22f66002e3db64c9e0ce',
    tokenDecimals: 18,
    exchangeAddress: '0x653921f3faafcc8851a8f570b7185b04ce47dad5'
  },
  {
    symbol: 'EGR',
    name: 'EGORAS',
    tokenAddress: '0x73cee8348b9bdd48c64e13452b8a6fbc81630573',
    tokenDecimals: 18,
    exchangeAddress: '0x442f585cc64e45586de7c936d225ec0612f95705'
  },
  {
    symbol: 'OHDAI:USDC:A',
    name: 'ohDAI 1:1 USDC A',
    tokenAddress: '0x66117f59814dc7f2aaa7a2f90f6ef16f7e2b363d',
    tokenDecimals: 18,
    exchangeAddress: '0x779f2c0a4b6576c86eb2fd8a8b56cd57885af95f'
  },
  {
    symbol: 'SELF',
    name: 'SELF TOKEN',
    tokenAddress: '0x67ab11058ef23d0a19178f61a050d3c38f81ae21',
    tokenDecimals: 18,
    exchangeAddress: '0x478a745884ae481c8d34e4586f508e90332e6ba6'
  },
  {
    symbol: 'WAND',
    name: 'Wand Token',
    tokenAddress: '0x27f610bf36eca0939093343ac28b1534a721dbb4',
    tokenDecimals: 18,
    exchangeAddress: '0x0a935b8a0ae84bfb5801b2a5ab11e49bc9d70810'
  },
  {
    symbol: 'YUSDT',
    name: 'Yellow Tether',
    tokenAddress: '0x0622769d566b3c4c1c58ca4fabee8e60bb3163e5',
    tokenDecimals: 6,
    exchangeAddress: '0xf3056654471570c1385b69ef6a08e76661a341a4'
  },
  {
    symbol: 'eWGR',
    name: 'eWagerr',
    tokenAddress: '0xba96b16d569b62d2803f165ab652499921c1fe7a',
    tokenDecimals: 18,
    exchangeAddress: '0x01f15ba73b9a4ca91b8614291884889657322f13'
  },
  {
    symbol: 'CXO',
    name: 'CometX',
    tokenAddress: '0xd776291ec1ae42d57642b9c512832d880edc668b',
    tokenDecimals: 18,
    exchangeAddress: '0x2ae4bdab051a958603d97da264125279c175e571'
  },
  {
    symbol: 'NBCH',
    name: 'NewBItcash',
    tokenAddress: '0xb8efd711ea26f236f9e49afebd2fe9d55f79b8bd',
    tokenDecimals: 18,
    exchangeAddress: '0x65135b1d79c1a8ffbbd77d8a50a3f3e8af40207c'
  },
  {
    symbol: 'MOTEL',
    name: 'M Coin',
    tokenAddress: '0x6543d695289eb29838252d55cb20606c3e3d4c9d',
    tokenDecimals: 18,
    exchangeAddress: '0xfba9f147282174692e9fec6a37173fd4a90ab5a4'
  },
  {
    symbol: 'HOTEL',
    name: 'H Coin',
    tokenAddress: '0xf8a2ed21fea517665b35ac824387bf9b41c71919',
    tokenDecimals: 18,
    exchangeAddress: '0x101d65a9ddce80110b142c915f6f0d4e9c723ec0'
  },
  {
    symbol: 'XDB',
    name: 'digitalbits',
    tokenAddress: '0xb9eefc4b0d472a44be93970254df4f4016569d27',
    tokenDecimals: 7,
    exchangeAddress: '0x841d0f2d8cc340d2a8ee8f217456fbc2816b284c'
  },
  {
    symbol: 'DAN',
    name: 'Daneel',
    tokenAddress: '0x9b70740e708a083c6ff38df52297020f5dfaa5ee',
    tokenDecimals: 10,
    exchangeAddress: '0xa666233c44fd62ef1608fd9535e83271bc4a8bbb'
  },
  {
    symbol: 'sBTC',
    name: 'Synth sBTC',
    tokenAddress: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
    tokenDecimals: 18,
    exchangeAddress: '0xbc6456b81ea7383e5361425c88f201dcd0b5b669'
  },
  {
    symbol: 'TIPS',
    name: 'Waitstaff Coin',
    tokenAddress: '0x4e17c88842c8b4e4e79ab74f851df790c23944e7',
    tokenDecimals: 18,
    exchangeAddress: '0xdc7920e5dc356991233cf97e03d08ee345cdfbfc'
  },
  {
    symbol: 'JWEL',
    name: 'Crwn Jwel',
    tokenAddress: '0x5cffc0b73df80144f0f3f5bf75672777af2bbbfe',
    tokenDecimals: 18,
    exchangeAddress: '0x8e8384c3e05ca3f7d658a4e2b568a520cc7316da'
  },
  {
    symbol: 'CEXD',
    name: 'CEXDollar',
    tokenAddress: '0x92c4f18c851592b4a2ab9bcd22d308f0e1c94399',
    tokenDecimals: 18,
    exchangeAddress: '0xc412bc2e7e40eeca9562c7a65a5d572bafd1de6a'
  },
  {
    symbol: 'KAPP',
    name: 'Kappi Token',
    tokenAddress: '0xf39f19565b8d937ec30f1db5bd42f558d1e312a6',
    tokenDecimals: 18,
    exchangeAddress: '0x9191b556bec5b59b0c94be52946a9e96584756b5'
  },
  {
    symbol: 'PAXG',
    name: 'Paxos Gold',
    tokenAddress: '0x45804880de22913dafe09f4980848ece6ecbaf78',
    tokenDecimals: 18,
    exchangeAddress: '0x0d2e1a84638bd1b6c0c260c758c39451d4587be1'
  },
  {
    symbol: 'KCB',
    name: 'KaratCoin Bank',
    tokenAddress: '0x2c04a9469eff3adeb1b46898f89d358abea8274e',
    tokenDecimals: 7,
    exchangeAddress: '0xae5e76e0ed148378fd6ee45494b438411812e70c'
  },
  {
    symbol: 'KCB',
    name: 'KaratCoin Bank',
    tokenAddress: '0xe01dd5ee7dfbb48baf94b1c885faaa5bc6bbd70a',
    tokenDecimals: 7,
    exchangeAddress: '0x6fe0cedeec366f680c725814824df4549df4670e'
  },
  {
    symbol: 'MBAS',
    name: 'MBAS',
    tokenAddress: '0x1a37ab7420c3b9beacdd8329656061c685ffea15',
    tokenDecimals: 18,
    exchangeAddress: '0xf747ce84a4f9793c812f52d36850e288f1eae215'
  },
  {
    symbol: 'cDAI',
    name: 'Compound Dai',
    tokenAddress: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    tokenDecimals: 8,
    exchangeAddress: '0x34e89740adf97c3a9d3f63cc2ce4a914382c230b'
  },
  {
    symbol: 'ALMG',
    name: 'ALMEEGRAM',
    tokenAddress: '0xa2b14f0e0986d2733b01808491536f923554c903',
    tokenDecimals: 18,
    exchangeAddress: '0xba5e44bd331ef557f057b5611f6e560bf11678dc'
  },
  {
    symbol: 'SHR-CORP',
    name: 'Shinra-Corp',
    tokenAddress: '0x1ff4f9ae17c706afcaa5e96ca7f04a92dd9aa7a6',
    tokenDecimals: 18,
    exchangeAddress: '0x3082db38eaec253002a95fb414afed294b1bbea7'
  },
  {
    symbol: 'HEX',
    name: 'HollaEx',
    tokenAddress: '0x96006f60b452526481a26eab55265ecdf82e7361',
    tokenDecimals: 18,
    exchangeAddress: '0xaf5fe14c6b3e1001204216a8f10214fbc75c1b81'
  },
  {
    symbol: 'SSYOD',
    name: 'SSYODD',
    tokenAddress: '0xeaf498ddf8b087891460ddc0c6612162f604c1f3',
    tokenDecimals: 18,
    exchangeAddress: '0x46d5351e3069fd9162e8396b478976bd51902e60'
  },
  {
    symbol: 'KHAS',
    name: 'Kadir Has Token',
    tokenAddress: '0x6af4429a10e14098da1f8839c9bd88a83bf84a2f',
    tokenDecimals: 2,
    exchangeAddress: '0x1f3c06acf7fb2a8a903e70a03e62a7a505a2c31c'
  },
  {
    symbol: 'PGPAY',
    name: 'PGPAY',
    tokenAddress: '0xc949fc82a15964fb5b97e5cf8f9ffed139086821',
    tokenDecimals: 18,
    exchangeAddress: '0xf03ca06a4d0851363638c0fec390cea2c4611ad3'
  },
  {
    symbol: 'NTK',
    name: 'Netkoin',
    tokenAddress: '0x5d4d57cd06fa7fe99e26fdc481b468f77f05073c',
    tokenDecimals: 18,
    exchangeAddress: '0x64b1ad7bc6eab69ec0b2f5e263272af01c36aa25'
  },
  {
    symbol: 'GMAT',
    name: 'GoWithMi',
    tokenAddress: '0xa110eeebc0751407bdcaea4cd230f04a2b82a33a',
    tokenDecimals: 18,
    exchangeAddress: '0xc8a2c9cca7efd5073c6d558ebf10680b6bb730fe'
  },
  {
    symbol: 'BFFI',
    name: 'BFFI OPTIONS',
    tokenAddress: '0x479a315bdafda5e7e66c7aeef228477a0535a2ef',
    tokenDecimals: 18,
    exchangeAddress: '0x0d334a9214e8aa1c2a294b521becce3b88cc52a5'
  },
  {
    symbol: 'LACRS',
    name: 'Perigrine Lacrosse',
    tokenAddress: '0x46edaa477b313a77d51564dda448e385116d3f36',
    tokenDecimals: 18,
    exchangeAddress: '0xca909fc24f0fbde99d66aa6f569afea0ae523837'
  },
  {
    symbol: 'POLO',
    name: 'Las Vegas Polo Assn',
    tokenAddress: '0xa8c5bd47da1abc3f4c0c1c86ddf0ef24114c9970',
    tokenDecimals: 18,
    exchangeAddress: '0x518f0cc1efef48cabeb6e90f0973a98c8da6a26a'
  },
  {
    symbol: 'SOLVE',
    name: 'Healthcare Administration Token',
    tokenAddress: '0x446c9033e7516d820cc9a2ce2d0b7328b579406f',
    tokenDecimals: 8,
    exchangeAddress: '0x1a76d429b86e94e80eec4304bc526c5393cfb4d0'
  },
  {
    symbol: 'PLG',
    name: 'PLGToken',
    tokenAddress: '0x85ca6710d0f1d511d130f6935edda88acbd921bd',
    tokenDecimals: 18,
    exchangeAddress: '0x7599081a2164e75ac07e7b4350da4e4836a80e9b'
  },
  {
    symbol: 'LIQUID',
    name: 'Netkoin Liquid',
    tokenAddress: '0xac2385e183d9301dd5e2bb08da932cbf9800dc9c',
    tokenDecimals: 18,
    exchangeAddress: '0xbffdb9056228071568dce2cbacd342adc214030e'
  },
  {
    symbol: 'KICK',
    name: 'KickToken',
    tokenAddress: '0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e',
    tokenDecimals: 8,
    exchangeAddress: '0x39bc7c31a835a1dfeeca150ff01abdd58c1676f9'
  },
  {
    symbol: 'SU1',
    name: 'Soviet War Bonds - Stakewar.com Round 1',
    tokenAddress: '0x07e38769e25630b2d433176495cdf627ec42b472',
    tokenDecimals: 18,
    exchangeAddress: '0xcfb063a2fe64b877f361b4914b3a1e95f4e2916e'
  },
  {
    symbol: 'US1',
    name: 'US War Bonds - Stakewar.com Round 1',
    tokenAddress: '0x9a472e3fc54939baf028eda41d8a1929830a7eef',
    tokenDecimals: 18,
    exchangeAddress: '0xea52a72ba18f96984ea62cabb7fe41182db584b1'
  },
  {
    symbol: 'CHESS',
    name: 'Chess Coin',
    tokenAddress: '0x5f75112bbb4e1af516fbe3e21528c63da2b6a1a5',
    tokenDecimals: 18,
    exchangeAddress: '0x08a829dda4abc3bddd2e72eecb1ca076220c4a63'
  },
  {
    symbol: 'ARGO',
    name: 'Argo Token',
    tokenAddress: '0x555ce61d7eac3f772f60b2e8dc6c272ca65d9323',
    tokenDecimals: 18,
    exchangeAddress: '0xcb2497ced3ab740b70339bb36d2899cc92fc2140'
  },
  {
    symbol: 'LSHRT',
    name: 'Law Shirt',
    tokenAddress: '0x65b3e0cf1d965c8ae1aae48d35848ddc62e7f7d7',
    tokenDecimals: 18,
    exchangeAddress: '0xec456b44a2c4e93fc9e68c24844286dd4191c2a0'
  },
  {
    symbol: 'USDB / BNT',
    name: 'USDB / BNT Relay Token',
    tokenAddress: '0xd1146b08e8104eedba44a73b7bda1d102c6cedc9',
    tokenDecimals: 18,
    exchangeAddress: '0x091091074a6f23f1dd198254784c779b1456b1a9'
  },
  {
    symbol: 'TRUST',
    name: 'Trust Coin',
    tokenAddress: '0x24c9586b762bd6005ee89d5ca442761b5a3830ac',
    tokenDecimals: 18,
    exchangeAddress: '0x99f7898814741fc0b87668f5fb21c39f27ae75f9'
  },
  {
    symbol: 'zBTC',
    name: 'Shifted BTC',
    tokenAddress: '0x88c64a7d2ecc882d558dd16abc1537515a78bb7d',
    tokenDecimals: 8,
    exchangeAddress: '0x8eeaa8278a318b0293760a04ca0c1af92e55c974'
  },
  {
    symbol: 'SKAM',
    name: 'ScamCoin',
    tokenAddress: '0x594a7a4bdb7417b656be60a13f41d29d3eb9029e',
    tokenDecimals: 18,
    exchangeAddress: '0x9f0d06339e08bfaf9d44095c88cf43c52b31a0f6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xb3e2e293b844c3a80169952ea6a66eb92688e65c',
    tokenDecimals: 18,
    exchangeAddress: '0x3a98f07e7a009f648646d316f134193db942fde8'
  },
  {
    symbol: 'MRQ',
    name: 'MarsDAOEquity',
    tokenAddress: '0x47be00042af431016fb5561b6b47d457ebafcb6e',
    tokenDecimals: 18,
    exchangeAddress: '0x81a40d2361a8861f357ed31a0afb68625bf97ac8'
  },
  {
    symbol: 'HTX',
    name: 'Huptex',
    tokenAddress: '0x8b847669b2e5dd5101736e41da8ec38653065aeb',
    tokenDecimals: 2,
    exchangeAddress: '0x0f7ba7793dd2ae2a6d10cc369689942c4c96a77a'
  },
  {
    symbol: 'XNS',
    name: 'Xeonbit Token',
    tokenAddress: '0x79c71d3436f39ce382d0f58f1b011d88100b9d91',
    tokenDecimals: 18,
    exchangeAddress: '0xee43f6d410dda90effcc9ca315fc14001dab1a30'
  },
  {
    symbol: 'GOT',
    name: 'GoToken',
    tokenAddress: '0x423b5f62b328d0d6d44870f4eee316befa0b2df5',
    tokenDecimals: 18,
    exchangeAddress: '0xdaa597fc1fabd41cfb434553c97639b693ee5259'
  },
  {
    symbol: 'CMDX',
    name: 'CMDX',
    tokenAddress: '0x8a6ed334b561842b7bf3f8130be02afaf69832af',
    tokenDecimals: 18,
    exchangeAddress: '0x30ef324752c8d000be01175487eb97f3ebecb5cc'
  },
  {
    symbol: 'NMI',
    name: 'NMIToken',
    tokenAddress: '0xc772aa1ae7c2fa5aedea02bcf37d13e17fa50062',
    tokenDecimals: 18,
    exchangeAddress: '0x710ed8406d04d3d22d707a4c9649bba2ede053ff'
  },
  {
    symbol: 'ZIPT',
    name: 'Zippie',
    tokenAddress: '0xedd7c94fd7b4971b916d15067bc454b9e1bad980',
    tokenDecimals: 18,
    exchangeAddress: '0x1a8d94b0cabeb345e846ecb34e4ca37b2d220aca'
  },
  {
    symbol: 'NOMO',
    name: 'Bitnomo',
    tokenAddress: '0xe44061f043682ff77c1d51d4e0f93ab2bb5b2ae0',
    tokenDecimals: 8,
    exchangeAddress: '0xf197348e947faf8d87963cbe36a1f37bf2dd1126'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0x2c6d2274bba280e7e4e394d36fee4f2c3b83eefd',
    tokenDecimals: 18,
    exchangeAddress: '0xffdf13e9645c7ebeff556d5c487cbcb8f0cbadef'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0x8fc366cf4ea4f77db065af282955ab8e09ed3690',
    tokenDecimals: 18,
    exchangeAddress: '0xf2e0339ca7a72ac7db1885e73b4303a33e26b46b'
  },
  {
    symbol: 'FXV',
    name: 'FXT Victory',
    tokenAddress: '0xab689100ad5bc9fde7267da1299265fe740d243c',
    tokenDecimals: 0,
    exchangeAddress: '0xbfa8a0ebd2b709201c18d82c3e429f39c6d28345'
  },
  {
    symbol: 'EXRN',
    name: 'EXRP Network',
    tokenAddress: '0xe469c4473af82217b30cf17b10bcdb6c8c796e75',
    tokenDecimals: 0,
    exchangeAddress: '0x0c36d0d3c66131f7c5edae68aad38929e59580fe'
  },
  {
    symbol: 'EXRT',
    name: 'EXRT',
    tokenAddress: '0xb20043f149817bff5322f1b928e89abfc65a9925',
    tokenDecimals: 8,
    exchangeAddress: '0xa9e8c7beabffd05745e29acb939c00d5cb3c8ff8'
  },
  {
    symbol: 'USDNT',
    name: 'USDNT',
    tokenAddress: '0x80bf9169f4c7bc84344fbc75b026dd57252d9a0c',
    tokenDecimals: 18,
    exchangeAddress: '0xbf61a0ce9df13d93f5c09231da69475f7549c456'
  },
  {
    symbol: 'CXC',
    name: 'CruxCoin',
    tokenAddress: '0x5ca2754fc2d4d09cf95fd81fdf12a5c74efa9088',
    tokenDecimals: 18,
    exchangeAddress: '0x2ebd527d88deb7f93b93d146db9600e8aa736b33'
  },
  {
    symbol: 'NOW',
    name: 'Now',
    tokenAddress: '0x09f7e85973c81f8df7668a3c187f6b1bed71a1b7',
    tokenDecimals: 18,
    exchangeAddress: '0xc7b512cb4280624992513310426cad19a5a0777c'
  },
  {
    symbol: 'NDW',
    name: 'Nodewaste',
    tokenAddress: '0x0d3c6fc650ba00d0757b0a418ecb5a027dac2f42',
    tokenDecimals: 0,
    exchangeAddress: '0x71640311e6540fb32bad53d5ad3e8a8dcb2f9006'
  },
  {
    symbol: 'CHAI',
    name: 'Chai',
    tokenAddress: '0x06af07097c9eeb7fd685c692751d5c66db49c215',
    tokenDecimals: 18,
    exchangeAddress: '0x6c3942b383bc3d0efd3f36efa1cbe7c8e12c8a2b'
  },
  {
    symbol: 'CRM',
    name: 'CRAM',
    tokenAddress: '0x173d62725713053b2c53fd2e59093098ed9e9e7e',
    tokenDecimals: 18,
    exchangeAddress: '0xcffceae742815b30c0285c4ace3428667a17ef04'
  },
  {
    symbol: 'METM',
    name: ' MetaMorph ',
    tokenAddress: '0xfef3884b603c33ef8ed4183346e093a173c94da6',
    tokenDecimals: 18,
    exchangeAddress: '0x21d091235fe69f59a438f34b6e77cb0e450054ec'
  },
  {
    symbol: 'SWAP',
    name: 'SimpleSwap Coin',
    tokenAddress: '0x163c649ac276c5fdcc27db30a1c1f070cb731c04',
    tokenDecimals: 8,
    exchangeAddress: '0x50e70e28c5a695921c335095fabcd21b1d97eb2e'
  },
  {
    symbol: 'YHTS',
    name: 'Luxury Yacht Coin',
    tokenAddress: '0xcf33eb02227255c45f595727dbb24ce16afc36a2',
    tokenDecimals: 18,
    exchangeAddress: '0x179cf45788fc0bc876e30449d6114b01dd1b57f0'
  },
  {
    symbol: 'THR',
    name: 'ThoreCoin',
    tokenAddress: '0x1cb3209d45b2a60b7fbca1ccdbf87f674237a4aa',
    tokenDecimals: 4,
    exchangeAddress: '0xc80b37b716cb70503853612954c639f5a898b289'
  },
  {
    symbol: 'rDAI',
    name: 'Redeemable DAI',
    tokenAddress: '0xea8b224edd3e342deb514c4176c2e72bcce6fff9',
    tokenDecimals: 18,
    exchangeAddress: '0x1179252f0c8e88548e5b1f07e41f8480457715c2'
  },
  {
    symbol: 'SPRK',
    name: 'Sparkster',
    tokenAddress: '0x80a740c8ffa28c8c2c3f1fc8b6c1a0a442212e71',
    tokenDecimals: 18,
    exchangeAddress: '0x9d5195ee85285ffe0894b2a0e3dd5a6f5184fbe7'
  },
  {
    symbol: 'EMAS',
    name: 'Emas Logam Mulia Token',
    tokenAddress: '0x29bd0827941b8e3b03758880127dd2aa2a115f4b',
    tokenDecimals: 18,
    exchangeAddress: '0x39a8883ec3a790c40693f1f31468376a30652a85'
  },
  {
    symbol: 'WUSDT',
    name: 'Wrapped Tether',
    tokenAddress: '0x5750a2117c14cadd1cc523fd8a600559c89c83bb',
    tokenDecimals: 6,
    exchangeAddress: '0xbb4e898b2fbee432cde5bb681be325b7e13440ff'
  },
  {
    symbol: 'WUSDT',
    name: 'Wrapped Tether',
    tokenAddress: '0x47b2223eb33ba465abd6d4f9f2883c0932bc4b20',
    tokenDecimals: 6,
    exchangeAddress: '0x310b3fc05c2be8c3bef33071fbf89871260ab5ff'
  },
  {
    symbol: 'DF',
    name: 'dForce',
    tokenAddress: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
    tokenDecimals: 18,
    exchangeAddress: '0xbd9905009c2bf1fa292547e5899d2191723c6a16'
  },
  {
    symbol: 'OPENC',
    name: 'OPEN Chain',
    tokenAddress: '0x9d86b1b2554ec410eccffbf111a6994910111340',
    tokenDecimals: 8,
    exchangeAddress: '0x6543088d0972a74e5cf6ed07fd87115391d0b643'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0x0e1ca6c9278d425f22b92c048ad47af182b098e7',
    tokenDecimals: 18,
    exchangeAddress: '0x7d089fff8c80291d06f184b1c41baac8c636b2f3'
  },
  {
    symbol: 'SFC',
    name: 'SFC',
    tokenAddress: '0x8367322d7ad9917aeb1c8ebedf322f7125a204e2',
    tokenDecimals: 18,
    exchangeAddress: '0x02241bc01c85dabc4b03927e2e5daf44136f1812'
  },
  {
    symbol: 'STC',
    name: 'STC',
    tokenAddress: '0xc202f0d1f79736b0ae14a0578f18b84f5c671d20',
    tokenDecimals: 18,
    exchangeAddress: '0x700fedd59564451a1712ac99c8ed977b7005e86a'
  },
  {
    symbol: 'SEC',
    name: 'SEC',
    tokenAddress: '0x581a7b11056d5daf2af6fc1fa6896a7a6d4c4dc6',
    tokenDecimals: 18,
    exchangeAddress: '0x16d14946320b5994525046a1ac2cf8b16d30b7b6'
  },
  {
    symbol: 'XNK',
    name: 'Ink Protocol',
    tokenAddress: '0xbc86727e770de68b1060c91f6bb6945c73e10388',
    tokenDecimals: 18,
    exchangeAddress: '0xddf7db619f58ceacdea61385a7757278e5006d83'
  },
  {
    symbol: 'SOMETHING',
    name: 'LORD UNKNOWN: END PANTS',
    tokenAddress: '0xa550a3489765a9db8cc688c4007d8650a8563fae',
    tokenDecimals: 18,
    exchangeAddress: '0x648ed8ff098e04c3df28270688abdff6b690a5bf'
  },
  {
    symbol: 'HRD',
    name: 'HRD',
    tokenAddress: '0xd1a7166eb7daea0e0e15160d87c2657a988374f1',
    tokenDecimals: 18,
    exchangeAddress: '0x4546c52df68e58523f2676a65315bfe33aaf49b4'
  },
  {
    symbol: 'LN',
    name: 'LN',
    tokenAddress: '0x406963ad7aeac48b95777dd41f154fe6d20bf886',
    tokenDecimals: 18,
    exchangeAddress: '0x20d82b7cd5d2a5fa03b511f16e7018ae248c6dcf'
  },
  {
    symbol: '1',
    name: 'ONESIE',
    tokenAddress: '0x880bcd7a5c8434fd964ec9020963adf3bc2413de',
    tokenDecimals: 18,
    exchangeAddress: '0x3d38c34790183812f50274c54d50f44afad1ec3d'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0xa3d711aa4ba7f5a59c790a0db1731d03b33fe512',
    tokenDecimals: 18,
    exchangeAddress: '0xba7dc4016f1488c3cfabe10ed86f7542d829ccf3'
  },
  {
    symbol: 'AYLA',
    name: 'Ayla',
    tokenAddress: '0xfaf9263bca469244cc10b6b7729367284eeef770',
    tokenDecimals: 0,
    exchangeAddress: '0x6a880bc98e65f7b41942d0e14708ec88c9a93509'
  },
  {
    symbol: 'TYT',
    name: 'TYT',
    tokenAddress: '0x614fd8f06ce4d93aa2361b342c86554eb5cb39f1',
    tokenDecimals: 6,
    exchangeAddress: '0xe7c347d0d9cf4eb90f7b9582c409bf1e52620a83'
  },
  {
    symbol: 'HEX',
    name: 'HEX',
    tokenAddress: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
    tokenDecimals: 8,
    exchangeAddress: '0x05cde89ccfa0ada8c88d5a23caaa79ef129e7883'
  },
  {
    symbol: 'ULT',
    name: 'Ultiledger',
    tokenAddress: '0xe884cc2795b9c45beeac0607da9539fd571ccf85',
    tokenDecimals: 18,
    exchangeAddress: '0x4458f1f4269a079a8a3dd8b14817ca15e8034574'
  },
  {
    symbol: 'REL',
    name: 'Relevant',
    tokenAddress: '0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec',
    tokenDecimals: 18,
    exchangeAddress: '0x3e4ef00b7c7c8b8f913ecd0f66023c3948d152db'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0xe120bebc75c4fb28e581e7b24a18de9b492e0a02',
    tokenDecimals: 18,
    exchangeAddress: '0x35e106ee82f84a170bf7d47d252741f5e8959f2c'
  },
  {
    symbol: 'CPTL',
    name: 'Capital Coin',
    tokenAddress: '0xda605fd5e003e6de0f33f6474080623fa6483e3e',
    tokenDecimals: 8,
    exchangeAddress: '0xd86230363d1d8182d716306e7dc0bb31288342f9'
  },
  {
    symbol: 'STAGE',
    name: 'Concert Coin',
    tokenAddress: '0x1db2804a750fded073bd5497c775cf8f1ef75ec3',
    tokenDecimals: 18,
    exchangeAddress: '0x6eea6cbfc714c364643b3ba5bcb581856806f4f1'
  },
  {
    symbol: 'DDCH',
    name: 'DINDICASH',
    tokenAddress: '0xfa9f74d6ef265ae866992cfd2dccb0f677227280',
    tokenDecimals: 18,
    exchangeAddress: '0x7575cf5703aa7187f0968a72f559529cbc1c80e1'
  },
  {
    symbol: 'PLA',
    name: 'PLA Token',
    tokenAddress: '0x5f5b176553e51171826d1a62e540bc30422c7717',
    tokenDecimals: 18,
    exchangeAddress: '0xe852e0e34994b8e77f5128dc848efb2923ef4956'
  },
  {
    symbol: 'GOODS',
    name: '8e5333c4d71e0b11b3e5e5e42a733bad0b07d53123c15386e445571867d86a8a',
    tokenAddress: '0xc7178ae1696c3702846340d4a1631223446d3733',
    tokenDecimals: 0,
    exchangeAddress: '0xdf9530157a88fe4be63a62f5f616944d2ff447b7'
  },
  {
    symbol: 'DONUT',
    name: 'Donut',
    tokenAddress: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',
    tokenDecimals: 18,
    exchangeAddress: '0xd552119ed44ec8fa8f87c568769c67bd02b5b3fb'
  },
  {
    symbol: 'TMV',
    name: 'TimviToken',
    tokenAddress: '0x5abfd418adb35e89c68313574eb16bdffc15e607',
    tokenDecimals: 18,
    exchangeAddress: '0xee4f6b06b6931730fe977597a4a8987af80d5938'
  },
  {
    symbol: 'OSPVS',
    name: 'Onyx S&P 500 Short',
    tokenAddress: '0xffa52dce6eb5695436be96ca9b7df63382e4c34d',
    tokenDecimals: 18,
    exchangeAddress: '0x8286075013f5433982fc2c8b6e6da9ba18f5ef4b'
  },
  {
    symbol: 'OSPV',
    name: 'Onyx S&P 500',
    tokenAddress: '0x3a1343a3ca3c32a69b79ae82e8a9a71c1293c566',
    tokenDecimals: 18,
    exchangeAddress: '0xd1d0edb79e80cadd4c59e3bfbf80820cd451534e'
  },
  {
    symbol: 'RFX',
    name: 'REFLEX',
    tokenAddress: '0x7d2e0263c59530d45c1491b8971596e440b78d20',
    tokenDecimals: 18,
    exchangeAddress: '0x96e6752be34485b90feefb5dc116b5468d5c198a'
  },
  {
    symbol: 'SBY',
    name: 'Swingby Token (ERC20)',
    tokenAddress: '0xff48643575fc19cf51fe247c0b2a7ddf0fd7181a',
    tokenDecimals: 18,
    exchangeAddress: '0x81af7851bf507a021806547408f990b29fa70526'
  },
  {
    symbol: 'TXH',
    name: 'TradeX Token',
    tokenAddress: '0x8dc9947b6662485252e49b04f2e445100ab5804a',
    tokenDecimals: 18,
    exchangeAddress: '0xae458d8b7cb596976bfcea738bcfe7ea5a328e40'
  },
  {
    symbol: 'MRB',
    name: 'mrblock',
    tokenAddress: '0x96a093025637c0376e322a0ea91f823dde52b0ac',
    tokenDecimals: 18,
    exchangeAddress: '0x711c90dc2867209228f893a1cc046336ab393182'
  },
  {
    symbol: 'PPC',
    name: 'PurpleCoin',
    tokenAddress: '0x809faaf63ee61b9133102b4fbe560219b534b6e4',
    tokenDecimals: 18,
    exchangeAddress: '0x49152b2c5646ac4029195ac923026dbdf06d636b'
  },
  {
    symbol: 'GOAL',
    name: 'GOAL Bonanza',
    tokenAddress: '0x7b69b78cc7fee48202c208609ae6d1f78ce42e13',
    tokenDecimals: 18,
    exchangeAddress: '0x4fa86a9cff5bbbb5913112500390e7553b7c9abc'
  },
  {
    symbol: 'GETH',
    name: 'Golden Ethereum',
    tokenAddress: '0xfa2c0229600e24e0c44e70acd5ca73071ff5593e',
    tokenDecimals: 2,
    exchangeAddress: '0x1f5e55626795af1949b79cc2336807028ccee70d'
  },
  {
    symbol: 'OUSD',
    name: 'Onyx USD',
    tokenAddress: '0x7c0afd49d40ec308d49e2926e5c99b037d54ee7e',
    tokenDecimals: 18,
    exchangeAddress: '0xd9a1476a57dcf02b57ec87ac7b66568485b8b108'
  },
  {
    symbol: 'imBTC',
    name: 'The Tokenized Bitcoin',
    tokenAddress: '0x3212b29e33587a00fb1c83346f5dbfa69a458923',
    tokenDecimals: 8,
    exchangeAddress: '0xffcf45b540e6c9f094ae656d2e34ad11cdfdb187'
  },
  {
    symbol: 'GUESS',
    name: 'GUESS',
    tokenAddress: '0xbdcfbf5c4d91abc0bc9709c7286d00063c0e6f22',
    tokenDecimals: 2,
    exchangeAddress: '0xacf4cdc4f7845c709e3eb9b9cbacb37cc849b340'
  },
  {
    symbol: 'SML',
    name: '数码链',
    tokenAddress: '0x13d82b5ab85ffa33bc952913d7e2de686f13e676',
    tokenDecimals: 18,
    exchangeAddress: '0xe3476aca6a058294660634e977f0c43e1db13a4c'
  },
  {
    symbol: 'BEB',
    name: 'betbeb.com Mining 0.75 ETH day',
    tokenAddress: '0xe71cebd38ce2186e01eb6c8a232ec16e8906ed69',
    tokenDecimals: 18,
    exchangeAddress: '0x24439a128e93c7711b59561aff1d945bace0e45b'
  },
  {
    symbol: ' BEB',
    name: 'bitbeb',
    tokenAddress: '0x995ff3562692349e78001c9e37414919e65ff04b',
    tokenDecimals: 18,
    exchangeAddress: '0x3b2f503d4f6968d98cba74a6bde3e720dd5fa374'
  },
  {
    symbol: 'NOIA',
    name: 'NOIA Token',
    tokenAddress: '0xfc858154c0b2c4a3323046fb505811f110ebda57',
    tokenDecimals: 18,
    exchangeAddress: '0xf6623c0d42a7bfcfac33aed597a7d4c0bc87e747'
  },
  {
    symbol: 'BEB',
    name: 'bitbeb',
    tokenAddress: '0x6798cc8ad079a7e663536f83ee26d63aabe03da9',
    tokenDecimals: 18,
    exchangeAddress: '0x5074405c97d5d8c97d12bb52ab2f938eebd0492d'
  },
  {
    symbol: 'ISL',
    name: 'Peninsula Coin',
    tokenAddress: '0xc39976f60185257cc2da55f5bb2c9db84732fc3b',
    tokenDecimals: 18,
    exchangeAddress: '0xbcc39ede77a9f39058abc6319d0049dffea93e16'
  },
  {
    symbol: 'TIME',
    name: 'Timeshare Coin',
    tokenAddress: '0x28c5db1e4ce4edb0b1b7aeae9d7be542ee3eeee5',
    tokenDecimals: 18,
    exchangeAddress: '0x8d0db28c55dc23fa975a7475a5686bc666c58b04'
  },
  {
    symbol: 'CH13',
    name: 'BK Coin',
    tokenAddress: '0xb428a7bfd2dc43ce51cf5e6524e9a3a4df3e536b',
    tokenDecimals: 18,
    exchangeAddress: '0xffe641ce4bb158b287cb5f2c2f5a35c92412cff6'
  },
  {
    symbol: 'CH7',
    name: 'BK Coin',
    tokenAddress: '0xb069def42294288402156484c9b18639d1bc2bce',
    tokenDecimals: 18,
    exchangeAddress: '0x1ee5c13f5e796609b0c706a6b39df173472f4101'
  },
  {
    symbol: 'ARPA',
    name: 'ARPA Token',
    tokenAddress: '0xba50933c268f567bdc86e1ac131be072c6b0b71a',
    tokenDecimals: 18,
    exchangeAddress: '0x60c42458fc49b1dcce87e3ca71a4c2f1ca994a9e'
  },
  {
    symbol: 'SHOE',
    name: 'WHAT: SHOES',
    tokenAddress: '0xc3fc76dbf20c40751dffbcdd69eaf379d2a96d07',
    tokenDecimals: 18,
    exchangeAddress: '0xc10d4cc080caa1ff6d6f1d9c763a49de65f7626f'
  },
  {
    symbol: 'IEX',
    name: 'International Exchange',
    tokenAddress: '0xa581b8dac454842ff92ca92ff4e2544e1b36e6ab',
    tokenDecimals: 18,
    exchangeAddress: '0x4388bc8e48bbf5031e3cfe992f98bad9e48e9ab6'
  },
  {
    symbol: 'IBIT',
    name: 'INDOBIT',
    tokenAddress: '0xc398891b43f1b91158dca87c63a88b80d000c248',
    tokenDecimals: 8,
    exchangeAddress: '0x711545ec48e855eeac19187ead5677d0a9741e89'
  },
  {
    symbol: 'GLDA',
    name: 'Glendara',
    tokenAddress: '0xa9baa8401d4bd5907d1c2c007c7f3c6fe6ebda02',
    tokenDecimals: 18,
    exchangeAddress: '0x94e1f9a33aac6e9c7d68e8940ef5eac69ba20787'
  },
  {
    symbol: 'MGT',
    name: 'Mystery Ghost Token',
    tokenAddress: '0x0cb20b77adbe5cd58fcecc4f4069d04b327862e5',
    tokenDecimals: 8,
    exchangeAddress: '0x6337ad2f1c268a759f3ea6b0e4a1ab8494d3a7bf'
  },
  {
    symbol: 'KCB',
    name: 'KaratCoin Bank',
    tokenAddress: '0x329a18a927dc23c21fa4e7c4684914a7f52b7011',
    tokenDecimals: 7,
    exchangeAddress: '0x35d72ec6d8287527816dd19ab6e7bd6414872cc6'
  },
  {
    symbol: 'WPT',
    name: 'Worldopoly',
    tokenAddress: '0x921a5dce3dfed5cccfbb2e593f2978533bc66110',
    tokenDecimals: 18,
    exchangeAddress: '0xd9296c6005d3cdc70927781c964aa29c22e3257e'
  },
  {
    symbol: 'ETR',
    name: 'EthorToken',
    tokenAddress: '0x5cd71a6c4e57bbeec527c32be2802cabb5b2bb4c',
    tokenDecimals: 18,
    exchangeAddress: '0x2b3dba88fba971aa37b2542abfe8e226552b9615'
  },
  {
    symbol: 'BLA',
    name: 'Blazing Token',
    tokenAddress: '0xfe51a13cc3058a2edb77c96d18bdf622d78b1279',
    tokenDecimals: 6,
    exchangeAddress: '0x5ce0eb862cdf9be5978acff3f2028ffd9eeadca6'
  },
  {
    symbol: 'SNTR',
    name: 'Silent Notary Token',
    tokenAddress: '0x2859021ee7f2cb10162e67f33af2d22764b31aff',
    tokenDecimals: 4,
    exchangeAddress: '0x7b7dc399b2ed268aaaab5d96e0d720eb01af4a71'
  },
  {
    symbol: 'FAME',
    name: 'SAINT FAME: Genesis Shirt',
    tokenAddress: '0x06f65b8cfcb13a9fe37d836fe9708da38ecb29b2',
    tokenDecimals: 18,
    exchangeAddress: '0x5e7907ac70b9a781365c72f2acee96710bda042e'
  },
  {
    symbol: 'SRN',
    name: 'SIRIN',
    tokenAddress: '0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25',
    tokenDecimals: 18,
    exchangeAddress: '0xa02174eb11453af3a22a7e1d2a70ed49a5126837'
  },
  {
    symbol: 'MESG',
    name: 'MESG',
    tokenAddress: '0x420167d87d35c3a249b32ef6225872fbd9ab85d2',
    tokenDecimals: 18,
    exchangeAddress: '0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2'
  },
  {
    symbol: 'BOOM',
    name: 'BOOM',
    tokenAddress: '0xdb7eab9ba6be88b869f738f6deeba96d49fe13fd',
    tokenDecimals: 18,
    exchangeAddress: '0x4fc1e5b73118f731955372b14f77e729d24bd128'
  },
  {
    symbol: 'BCT',
    name: 'Bitcratic',
    tokenAddress: '0x9ec251401eafb7e98f37a1d911c0aea02cb63a80',
    tokenDecimals: 18,
    exchangeAddress: '0x4f45b0780f1d1e5f97d3031c57a0634dc6fe5856'
  },
  {
    symbol: 'SHM',
    name: 'SexHackMe',
    tokenAddress: '0x3294c1d03faec27c131b93e8051de8ee684439b9',
    tokenDecimals: 18,
    exchangeAddress: '0xd6556f2f799d826b1640cb6531270a5af36827e7'
  },
  {
    symbol: 'VEN',
    name: 'DUCATO',
    tokenAddress: '0xf02123509a08632339102ee5fdd41b638592e495',
    tokenDecimals: 18,
    exchangeAddress: '0xfec9215befa12f7b3d73a36aed1589037ddfc758'
  },
  {
    symbol: 'CRAFT',
    name: 'Crafts Coin',
    tokenAddress: '0xc594dcb6a3b40c9ee519a18fdb79079d1fdf864b',
    tokenDecimals: 18,
    exchangeAddress: '0x29bc5430129dfe3ee095ed3747a0a55f3b34876e'
  },
  {
    symbol: 'TOKENFACTORY',
    name: 'Token Factory Switzerland Ltd | 7H3M-9XPG-T',
    tokenAddress: '0xd194e4f96d102d834b617226e90f89b83b17ba9d',
    tokenDecimals: 18,
    exchangeAddress: '0xc1e7668288586db10fe4ace799dc428d3677f2ff'
  },
  {
    symbol: 'TOY',
    name: 'TRU Coin',
    tokenAddress: '0x5057ac62795ee5ba6975fe412a41669abbc84b8a',
    tokenDecimals: 18,
    exchangeAddress: '0xf0347d5ef8f56919419c31926f2f4bbb11a77a50'
  },
  {
    symbol: 'FUSD',
    name: 'Foton USD',
    tokenAddress: '0x7f20f6e68bd14dbdb95244dbee6c316999a2d4c1',
    tokenDecimals: 8,
    exchangeAddress: '0x05d5b3bf75c22de23ff028c13bc0fd8d4bd7e29d'
  },
  {
    symbol: 'KZE',
    name: 'ALMEELA',
    tokenAddress: '0x71944c7953c93dbc0cd977e0ee1bbd9c2494b7b1',
    tokenDecimals: 8,
    exchangeAddress: '0x66d96565c1c90de1ae4a56b20f78182c9e3fe629'
  },
  {
    symbol: 'ZETH',
    name: 'Zethereum',
    tokenAddress: '0xd55e5ea9e6c055708ec01c881cb12907d33b21d4',
    tokenDecimals: 18,
    exchangeAddress: '0x7d1acac59bba7b752413c1b8b9439585f47ea6d3'
  },
  {
    symbol: 'MORTG',
    name: 'Mortgage S.I. Coin',
    tokenAddress: '0x0fb4cd45b77273c3b51b361dc94bc736176fcda6',
    tokenDecimals: 18,
    exchangeAddress: '0x9e232a58932897658c596f7f1b65a45d868c4ea2'
  },
  {
    symbol: 'USDC',
    name: 'USD CLASSIC',
    tokenAddress: '0xc93a59888e7e6f2849ba94acf767266299c4c415',
    tokenDecimals: 8,
    exchangeAddress: '0x6894a87c7039f3fffa37a02b91eab3c580fd81f0'
  },
  {
    symbol: 'YOO',
    name: 'Yooba token',
    tokenAddress: '0x1d4105534da120da243281cfc3f26aaf038e2d6f',
    tokenDecimals: 18,
    exchangeAddress: '0x3dcf4889811c7c639afb7a5959f84600b1ead4f9'
  },
  {
    symbol: 'BLA',
    name: 'Blazing Token',
    tokenAddress: '0x6903003d96da868c144ad1c59ddd4c7b72ea077f',
    tokenDecimals: 6,
    exchangeAddress: '0xb86f736a0c50583123c44fc43bf56d9aeee040f8'
  },
  {
    symbol: 'SET',
    name: 'Simple ERC20 Token',
    tokenAddress: '0x07600a1ad0a5512786d4295d986417a6def1611f',
    tokenDecimals: 18,
    exchangeAddress: '0xb8aa52b194874427165917d2e123cef28ce0b509'
  },
  {
    symbol: 'MTCX',
    name: 'MYTHIC',
    tokenAddress: '0x74658fb5f7ff3bc7d70f7f792d53fd74f89dc055',
    tokenDecimals: 18,
    exchangeAddress: '0x417e5a1d001c975aab68e7a9a0700bf7f8217bb1'
  },
  {
    symbol: 'EMRX',
    name: 'Emirex Token',
    tokenAddress: '0xbdbc2a5b32f3a5141acd18c39883066e4dab9774',
    tokenDecimals: 8,
    exchangeAddress: '0xfdc99e574c56e784820c4733a95349146cbc1c03'
  },
  {
    symbol: 'OXT',
    name: 'Orchid',
    tokenAddress: '0x4575f41308ec1483f3d399aa9a2826d74da13deb',
    tokenDecimals: 18,
    exchangeAddress: '0xe9a5bbe41dc63d555e06746b047d624e3343ea52'
  },
  {
    symbol: 'MNR',
    name: 'Mnoer',
    tokenAddress: '0xe4e2daf5f7f0c1c35df922c5d9340913edecc8e8',
    tokenDecimals: 18,
    exchangeAddress: '0x73dc463c66062746853e2e28c1146d35b3ff8667'
  },
  {
    symbol: 'NACRE',
    name: 'Nacreous',
    tokenAddress: '0x2774b5771f607938d4e9197b3a5ca9f21110cf11',
    tokenDecimals: 18,
    exchangeAddress: '0x6702dfd4377d9e1a4feb3dcced5d54ff337424e4'
  },
  {
    symbol: 'FFXT',
    name: 'FORTUNEFX',
    tokenAddress: '0xcc2661d5b68a02bed6508377c499e1144b97200c',
    tokenDecimals: 18,
    exchangeAddress: '0xeff60b5ef0f6bdb316202a452173d34e35aeecb6'
  },
  {
    symbol: 'EDC',
    name: 'educca',
    tokenAddress: '0xa5ffa1e05b1c3c1fcd24cffa2ac77b311cb2cf37',
    tokenDecimals: 18,
    exchangeAddress: '0x996a6e9941cd737e80affefc9c77792abee94515'
  },
  {
    symbol: 'CryptoFun',
    name: 'CryptoFun',
    tokenAddress: '0xce52d7727fb77ca7b084f50bbbf335997fcb0dd3',
    tokenDecimals: 16,
    exchangeAddress: '0xe743acdb36c8e1d8ea1cb430e9a1579b4e6a1be5'
  },
  {
    symbol: 'CPF',
    name: 'CryptoFun',
    tokenAddress: '0x2027abda20165d5dd495c1ee56c8da80a9730a97',
    tokenDecimals: 18,
    exchangeAddress: '0xf4a5470c8a921791b7d82ea7133e5732fccf2501'
  },
  {
    symbol: 'TGO',
    name: 'TetherGo',
    tokenAddress: '0xfcf3740dee50e5c4afa16730baff0e84e2f34ac3',
    tokenDecimals: 18,
    exchangeAddress: '0xa75efb8d201bcb9518f797e140d5ac119499b59e'
  },
  {
    symbol: 'KAVA',
    name: 'KavaToken',
    tokenAddress: '0x6143df904a70bcbd9b52c7b61fdaf270a4f0516e',
    tokenDecimals: 18,
    exchangeAddress: '0xd9d3884bab5d9b3a12714a034c329e1af9de5e49'
  },
  {
    symbol: 'KAVA',
    name: 'Kava',
    tokenAddress: '0x08d1e0a7fbd4edbf56d81da21d1b0c9c95fb507f',
    tokenDecimals: 18,
    exchangeAddress: '0x492741057643e1645dabea5f84c58e58b97a1732'
  },
  {
    symbol: 'MWAT',
    name: 'RED MWAT',
    tokenAddress: '0x6425c6be902d692ae2db752b3c268afadb099d3b',
    tokenDecimals: 18,
    exchangeAddress: '0x5ac986c32a0e2a215a6d88a9d5853ec13b4ec70a'
  },
  {
    symbol: 'EVX',
    name: 'Everex',
    tokenAddress: '0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8',
    tokenDecimals: 4,
    exchangeAddress: '0x8acc2a8ee942dd8717ad30b23acbbe31cf4cba2f'
  },
  {
    symbol: 'EDUC',
    name: 'educca',
    tokenAddress: '0x4e4f2cf7c828e277b9a997261165fa7074ec66bf',
    tokenDecimals: 18,
    exchangeAddress: '0x8a7c6b76f7389b7cc5394702f25077d58854c5f5'
  },
  {
    symbol: 'BTCF',
    name: 'Bitcoin Fast',
    tokenAddress: '0x225927f8fa71d16ee07968b8746364d1d9f839bd',
    tokenDecimals: 8,
    exchangeAddress: '0xf30daf46f0af644937ce2d17f2c00e375c2901c3'
  },
  {
    symbol: 'CMA',
    name: 'CryptoMarketAdsToken',
    tokenAddress: '0xe968ad47b1c071ea3905ef982833552a495d6213',
    tokenDecimals: 18,
    exchangeAddress: '0x40853691c48fa53b89094b1724a8fc22a56bd9d6'
  },
  {
    symbol: 'OGN',
    name: 'OriginToken',
    tokenAddress: '0x8207c1ffc5b6804f6024322ccf34f29c3541ae26',
    tokenDecimals: 18,
    exchangeAddress: '0x48dc4d621c1b9f7ad919daab69100b3a8834458f'
  },
  {
    symbol: 'OHDAIUSDC:B',
    name: 'ohDAI 1:1 USDC B',
    tokenAddress: '0x64a03ce1e52b4e579f0a1cf44cf95c0d7898b5a3',
    tokenDecimals: 18,
    exchangeAddress: '0x9dd808f0c10582855a95265f2acba0d4680a7920'
  },
  {
    symbol: 'EUSD',
    name: 'Electronic USD',
    tokenAddress: '0x97b05317de8b867c9f810692f6c6f7b10e57a258',
    tokenDecimals: 18,
    exchangeAddress: '0x95e8e0b638a8d6ceb70e3271b1b8791423bedc2f'
  },
  {
    symbol: 'BENT',
    name: 'BENT',
    tokenAddress: '0x4cda1f2e5c9b32be8420afdcd3ce84ee4d3d5ebb',
    tokenDecimals: 2,
    exchangeAddress: '0x94bed9aa7e9a06acf057df9fcbbece63b831283d'
  },
  {
    symbol: 'PTN',
    name: 'PalletOneToken',
    tokenAddress: '0xfe76be9cec465ed3219a9972c21655d57d21aec6',
    tokenDecimals: 18,
    exchangeAddress: '0x3925dc4e40561490645eb44594edbe9096ddc650'
  },
  {
    symbol: 'Drink',
    name: 'DrinkChain',
    tokenAddress: '0xb8105b0d4a9ae55658b418065fea4282a8d2e968',
    tokenDecimals: 18,
    exchangeAddress: '0x11f7a3dac9193a4bce50b3d0c57a8a0bd9c41d33'
  },
  {
    symbol: 'DIVX',
    name: 'Divi Exchange Token',
    tokenAddress: '0x13f11c9905a08ca76e3e853be63d4f0944326c72',
    tokenDecimals: 18,
    exchangeAddress: '0xc87c0a272afbd164c8f2c30a82e28133600487fa'
  },
  {
    symbol: 'AVA',
    name: 'Alpha Fund',
    tokenAddress: '0xa16001dd47f505b7b7c5639c710a52209e4e8904',
    tokenDecimals: 18,
    exchangeAddress: '0x98a52f16bcf540dfc7c10e0e682ad1161ed07802'
  },
  {
    symbol: 'XAC',
    name: 'XACToken',
    tokenAddress: '0xde4c5a791913838027a2185709e98c5c6027ea63',
    tokenDecimals: 8,
    exchangeAddress: '0xd615f4de2767d8d457b1693a490c122e36f08a63'
  },
  {
    symbol: 'NPX',
    name: 'NapoleonX Token',
    tokenAddress: '0x28b5e12cce51f15594b0b91d5b5adaa70f684a02',
    tokenDecimals: 2,
    exchangeAddress: '0xedac00f1ad1263c49ded877609383417177c6f7d'
  },
  {
    symbol: '1MT',
    name: '1Million Token',
    tokenAddress: '0xf0bc1ae4ef7ffb126a8347d06ac6f8add770e1ce',
    tokenDecimals: 7,
    exchangeAddress: '0x904a4cd5b4a22f77ce2e1cb5d37f8523497f9663'
  },
  {
    symbol: 'MYFIE',
    name: 'Monetize Your Selfie',
    tokenAddress: '0xcb529ae44941500ded968baf9617ddecacc6fb87',
    tokenDecimals: 8,
    exchangeAddress: '0xb8c04ea45c2996a65b4b31cb6547cabfbc6ec45d'
  },
  {
    symbol: 'H-C',
    name: 'Hotmedia Coin',
    tokenAddress: '0x86225c165b61472c83599270b4c916566a784861',
    tokenDecimals: 18,
    exchangeAddress: '0x99ac38d6d46cbd7e76a51b6d378179d2c2837a72'
  },
  {
    symbol: 'ECPN',
    name: 'ECPN Token',
    tokenAddress: '0xb55732a15b3dc5d6e8d4adf40634f37470da71fa',
    tokenDecimals: 8,
    exchangeAddress: '0x9dc8733cca7a18d04ed87a4c0f34190a96258fc6'
  },
  {
    symbol: 'JSH',
    name: 'Hours',
    tokenAddress: '0xd24d520eb55ea010998303110fa188673122416a',
    tokenDecimals: 18,
    exchangeAddress: '0x60421edd5be917bb24640e5274300517f28708ac'
  },
  {
    symbol: 'SKJ',
    name: 'SKJ',
    tokenAddress: '0xc11f001615d8679cb502531d3b3831c2183106bb',
    tokenDecimals: 18,
    exchangeAddress: '0x450d7003e96e2a956be63fb08bac59ac5103df24'
  },
  {
    symbol: 'MTB18',
    name: 'MIKETANGOBRAVO18',
    tokenAddress: '0x1bcfd19f541eb62c8cfebe53fe72bf2afc35a255',
    tokenDecimals: 18,
    exchangeAddress: '0x5237ce499b168ea2baa10dfc3b5b41dd8fe602ed'
  },
  {
    symbol: 'BABA',
    name: 'Synthetic Alibaba Equity Tokens',
    tokenAddress: '0xb89a981a6bb48bbb723c524463d75ab166eca035',
    tokenDecimals: 3,
    exchangeAddress: '0x5b23163c6f730bf377ee6e5dfc82bd234efd157d'
  },
  {
    symbol: 'EGCI',
    name: 'Eggs Crypto Invest',
    tokenAddress: '0xb15d9b7c2f10a50dda6d88f40fb338ce514af551',
    tokenDecimals: 6,
    exchangeAddress: '0x03cb320f2d993cc04df9452ccc8f6e88e32b82f1'
  },
  {
    symbol: 'MTB19',
    name: 'MikeTangoBravo19',
    tokenAddress: '0x87ab739464881af0011052d4ca0b0d657e8c3b48',
    tokenDecimals: 18,
    exchangeAddress: '0xffb632b1789eddc0118473759fab59a80824de4e'
  },
  {
    symbol: 'OWL',
    name: 'OWL Token',
    tokenAddress: '0x1a5f9352af8af974bfc03399e3767df6370d82e4',
    tokenDecimals: 18,
    exchangeAddress: '0x11179c3cb11cd08ca22afb91e515257d5e7bf03c'
  },
  {
    symbol: 'REALTOKEN-18483-MANSFIELD-ST-DETROIT-MI',
    name: 'RealToken 18483 Mansfield Street Detroit MI',
    tokenAddress: '0xb1d42642c6da784a5498180fdc64df8f8f2bb773',
    tokenDecimals: 18,
    exchangeAddress: '0xa25550e58ad5871b1490f0046280bc4ca5637b8f'
  },
  {
    symbol: 'MCVWP',
    name: 'MCV Whitepaper v1',
    tokenAddress: '0x13606094649143ae6c2e4f6b8f37726aae37f9d5',
    tokenDecimals: 18,
    exchangeAddress: '0xead0f53caa5f8d8d060edad297d8ef3758339406'
  },
  {
    symbol: 'Subs',
    name: 'Subscriptions',
    tokenAddress: '0x61ceac48136d6782dbd83c09f51e23514d12470a',
    tokenDecimals: 0,
    exchangeAddress: '0x30414a46d9c13df388c6ae53ae53e714a8eaf59d'
  },
  {
    symbol: 'QURA',
    name: 'QURA GLOBAL',
    tokenAddress: '0x4ee6e959d460de47dfe58e5e6fbab330ce8484b6',
    tokenDecimals: 18,
    exchangeAddress: '0x3cf50889bc7874492781d9ee5dc5ff4ab2a52333'
  },
  {
    symbol: 'ZHT',
    name: 'Zapaygo Holding Token',
    tokenAddress: '0x4a61988e2d412a0d1983f1685a0ddc9356be3751',
    tokenDecimals: 18,
    exchangeAddress: '0x97e30807473f08a2ad55448e63f3eee0c7431302'
  },
  {
    symbol: 'ETHMNY',
    name: 'Ethereum Money',
    tokenAddress: '0xbf4a2ddaa16148a9d0fa2093ffac450adb7cd4aa',
    tokenDecimals: 2,
    exchangeAddress: '0x4cdfd08c4128c48987425846763b01f1570dc825'
  },
  {
    symbol: 'JZC',
    name: 'DaJinZhuCoin',
    tokenAddress: '0x4f6bf962f8e16aa761b48e674f9034063c2b2d7f',
    tokenDecimals: 18,
    exchangeAddress: '0xb71cc76b91da3069152f2eb28367a7da7a346874'
  },
  {
    symbol: 'sEUR',
    name: 'Synth sEUR',
    tokenAddress: '0xd71ecff9342a5ced620049e616c5035f1db98620',
    tokenDecimals: 18,
    exchangeAddress: '0x11cd30774b9cd972be12e1da2b096f2761462cdb'
  },
  {
    symbol: 'GZPT',
    name: 'GozePayToken',
    tokenAddress: '0x13a399fe6c5b38b247e1477016f5fc7c3f6b3ccb',
    tokenDecimals: 0,
    exchangeAddress: '0xb48d6ea7ea5ab5ac1e67eb1476a36281de550d16'
  },
  {
    symbol: 'TEK',
    name: 'Tek Token',
    tokenAddress: '0xf9a14f42653880cb26f1e1768317f51f632a0265',
    tokenDecimals: 0,
    exchangeAddress: '0x026e86380dc95bca4928a57fdced543ade3ade60'
  },
  {
    symbol: 'DIME',
    name: 'Dimple',
    tokenAddress: '0xaf0dba1d4f9107c59c317b4388c0a54b70ea0acd',
    tokenDecimals: 8,
    exchangeAddress: '0xd877be7c080eeaca5bc2859bb62a72122a3d3864'
  },
  {
    symbol: 'ALXO',
    name: 'Alxocity',
    tokenAddress: '0x4317ea4820f8d9ea6a103553a89cb261b6ea7f2a',
    tokenDecimals: 4,
    exchangeAddress: '0xcf66ecd1b425b5c3e34bdfb2c0cde3434cb64771'
  },
  {
    symbol: 'TRAT',
    name: 'Tratok',
    tokenAddress: '0xe225aca29524bb65fd82c79a9602f3b4f9c6fe3f',
    tokenDecimals: 5,
    exchangeAddress: '0xc402a53895bf17cf3fe9b656bfadc386ed00e22b'
  },
  {
    symbol: 'UNIS',
    name: 'Universe Coin',
    tokenAddress: '0xedc87cab8bd12ca39088deaf9fdfb63503f19f85',
    tokenDecimals: 18,
    exchangeAddress: '0xf4efa741bb5650970f93bfe43a140fad293faefc'
  },
  {
    symbol: 'iBTC',
    name: 'Synth iBTC',
    tokenAddress: '0xd6014ea05bde904448b743833ddf07c3c7837481',
    tokenDecimals: 18,
    exchangeAddress: '0x90c6099bc6b3ffe6a091d83f4a55498093968079'
  },
  {
    symbol: 'USC',
    name: 'upscaleeth',
    tokenAddress: '0x01522e6c543ff04e74842abd0f2afecc5ef5c281',
    tokenDecimals: 18,
    exchangeAddress: '0xeaab41d1bff2daf0ac601f0617b668a35fadee8d'
  },
  {
    symbol: 'SXDT',
    name: 'Spectre.ai D-Token',
    tokenAddress: '0x12b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf',
    tokenDecimals: 18,
    exchangeAddress: '0x89d56d03aa58aa50a2569edef3dba6b9d483fc27'
  },
  {
    symbol: 'CNCC',
    name: 'Complete New Commerce Chain',
    tokenAddress: '0xbe15c4ebb73a67ddd94b83b237d2bdde5a5079ba',
    tokenDecimals: 18,
    exchangeAddress: '0x0fc809dd1475cd6056b6d36a832cb53bcb2e8786'
  },
  {
    symbol: 'CURIO',
    name: 'ExtraCurio',
    tokenAddress: '0x4b46636afcb2bc4dd20c3d0424c4e1e6d296fabe',
    tokenDecimals: 4,
    exchangeAddress: '0xc65595d89376601c69b7292d466ee83d73dc4850'
  },
  {
    symbol: 'IHT',
    name: 'I-HSIN Token',
    tokenAddress: '0x635d136b99976d98c1588b49c4304b98c5bbf2d1',
    tokenDecimals: 18,
    exchangeAddress: '0x2f842eb3d35a0774576c3b4efedc9f69e5f1a47d'
  },
  {
    symbol: 'CAFE',
    name: 'Single Coffee Token',
    tokenAddress: '0x0f7f08a1b784d2a51357efcfb5f4874cbf5dee28',
    tokenDecimals: 18,
    exchangeAddress: '0xcf5455ff548115a5b6750b14f21e065ccc307c12'
  },
  {
    symbol: 'JNN',
    name: 'JeyennCoin',
    tokenAddress: '0x36bf67c9aa1d67a06bfec145f08e20112a54c0f7',
    tokenDecimals: 18,
    exchangeAddress: '0x049fb6ae7bb98bb9b020c0c97ecbbe37bc2d0a19'
  },
  {
    symbol: 'IHT',
    name: 'I HOUSE TOKEN',
    tokenAddress: '0xeda8b016efa8b1161208cf041cd86972eee0f31e',
    tokenDecimals: 18,
    exchangeAddress: '0x45ae2168fdbe97526aee4d9f03f270b194f66fa6'
  },
  {
    symbol: 'IDCN',
    name: 'ID Crypto Net',
    tokenAddress: '0x5acdc58a2ddf7832a6494b6d8b8cb9bfe1c9f460',
    tokenDecimals: 6,
    exchangeAddress: '0xa6f1337dbb1ac82f9fa356b24287cf1e1b936681'
  },
  {
    symbol: 'TH',
    name: 'Tobiasz Horodko Token',
    tokenAddress: '0x447345145207e06075e264ac8f7862560f33742c',
    tokenDecimals: 4,
    exchangeAddress: '0xd7cc0d9440c8d544f5cd6fa86f16dc5f94012381'
  },
  {
    symbol: 'VRX',
    name: 'Verixeum',
    tokenAddress: '0x6d5ceb96307691e697623e08be57bcb4312402d3',
    tokenDecimals: 8,
    exchangeAddress: '0x4eedec8e70864801dde4a8d18c09efbd83015788'
  },
  {
    symbol: 'BBD',
    name: 'Blockchain Board Of Derivatives Token',
    tokenAddress: '0xb79fc5505ea4f3b920ee7e3349de064226692717',
    tokenDecimals: 18,
    exchangeAddress: '0x8aa94e4f656e5284a15be6e1c93214266430121e'
  },
  {
    symbol: 'H2O',
    name: 'H2O Token',
    tokenAddress: '0xfeed1a53bd53ffe453d265fc6e70dd85f8e993b6',
    tokenDecimals: 18,
    exchangeAddress: '0xc008fe94ae71970e2b304a11328fa7ff3a444903'
  },
  {
    symbol: 'STDEX',
    name: 'stableDEX',
    tokenAddress: '0xdf44a80c17813789f60090638827aeb23698b122',
    tokenDecimals: 18,
    exchangeAddress: '0x6bdfa1b7c77b1c4fb0b3623fbac354dc76c7f164'
  },
  {
    symbol: 'CRYPL',
    name: 'Cryptolandy',
    tokenAddress: '0x1062fdf250b44697216d07e41df93824519f47aa',
    tokenDecimals: 8,
    exchangeAddress: '0x7cd9d66ac131169ecb9e55439d89b137a380d4db'
  },
  {
    symbol: 'QTC',
    name: 'Qitcoin',
    tokenAddress: '0x923c90b98ee834d118c85ddf44906ee1769df648',
    tokenDecimals: 6,
    exchangeAddress: '0x2391e2d2064f46db0d104c4165a37f84cb1629ff'
  },
  {
    symbol: 'BYT',
    name: 'Bityond Token',
    tokenAddress: '0x5afae3243d6b6b76e1ab483f68e01f2fb55ff425',
    tokenDecimals: 18,
    exchangeAddress: '0x428964de947305b837b39befadffccb445538d13'
  },
  {
    symbol: 'DEMIN',
    name: 'Demintiger',
    tokenAddress: '0x90ccc1097a9646e8b12b51c52b4fd298f014cd0c',
    tokenDecimals: 4,
    exchangeAddress: '0x2e613291c4566acc337bdc752b467ac4f9d65b94'
  },
  {
    symbol: 'SHT',
    name: 'Sibbay Health Token',
    tokenAddress: '0x3d9c6c5a7b2b2744870166eac237bd6e366fa3ef',
    tokenDecimals: 18,
    exchangeAddress: '0x9a04902c55d42cfda8cefe58daf954b7d76791ec'
  },
  {
    symbol: 'sBTC',
    name: 'Synth sBTC',
    tokenAddress: '0x9073ee83b6ce96c444547ddcaf777b9352163581',
    tokenDecimals: 18,
    exchangeAddress: '0x38cac8567fd62fdca758a072ff7dc2ea3db37f50'
  },
  {
    symbol: 'CPG',
    name: 'CryptoGambler ',
    tokenAddress: '0xf6290e6a5ff844a54108297224ecae59f2325d22',
    tokenDecimals: 18,
    exchangeAddress: '0xa7d936d79dfd06a791d8330ef301073ee2b3dc35'
  },
  {
    symbol: 'WG0',
    name: 'Wrapped Gen 0',
    tokenAddress: '0xa10740ff9ff6852eac84cdcff9184e1d6d27c057',
    tokenDecimals: 18,
    exchangeAddress: '0x7290260070c78ae718d025f8950af5532fdf0252'
  },
  {
    symbol: 'BONZ',
    name: 'LovelyBonz Token',
    tokenAddress: '0x69d3b9c3d795e0200c4a0774721aeb0e12cadb1a',
    tokenDecimals: 18,
    exchangeAddress: '0x4256d0fc4748ade7effbf3800abf666f4cb0801b'
  },
  {
    symbol: 'BTC2S',
    name: 'Bitcoin2Secure',
    tokenAddress: '0x58e8a6c0e0b58bca809f1faee01f1662c9fc460e',
    tokenDecimals: 18,
    exchangeAddress: '0x6c4dd25849f2e8cd2d2caa48304667106eb418f7'
  },
  {
    symbol: 'TILY',
    name: 'Instantily',
    tokenAddress: '0x834625f5d8b006d70a6caaeef73c29442f156daf',
    tokenDecimals: 18,
    exchangeAddress: '0x22859a79d5a71c8427ba0c5428f9434ce1ea96b7'
  },
  {
    symbol: 'LGO',
    name: 'LGO Token',
    tokenAddress: '0x0a50c93c762fdd6e56d86215c24aaad43ab629aa',
    tokenDecimals: 8,
    exchangeAddress: '0x3165fb3cbc8371424b9d3ff737e9e33ffd5147ce'
  },
  {
    symbol: 'xEUR',
    name: 'xEuro',
    tokenAddress: '0xe577e0b200d00ebdecbfc1cd3f7e8e04c70476be',
    tokenDecimals: 0,
    exchangeAddress: '0x1c751c4244686e22cd005ba80a8d3453bf41e4b7'
  },
  {
    symbol: 'ExC',
    name: 'ExCash for ExMind',
    tokenAddress: '0xd46c213b00d3ea63e9efd50e2a873937dc635da5',
    tokenDecimals: 8,
    exchangeAddress: '0xc889eb7ac79b7a41e8715a3ffd35664dcfa9c56e'
  },
  {
    symbol: 'WEB',
    name: 'Webcoin',
    tokenAddress: '0x840fe75abfadc0f2d54037829571b2782e919ce4',
    tokenDecimals: 18,
    exchangeAddress: '0x9c495737fbd91ba4052ac6781c3e0b040f02b6b1'
  },
  {
    symbol: 'RKFL',
    name: 'RocketFuel',
    tokenAddress: '0xdbf0fac1499a931ed6e5f6122dbbcd3b80f66c7e',
    tokenDecimals: 8,
    exchangeAddress: '0x010e2558eab0639edadc9f83c81cc87df66f8029'
  },
  {
    symbol: 'BFZ',
    name: 'BetaFunds Token',
    tokenAddress: '0xcfabaff3bb057ba878f43ce027c9266d2f900561',
    tokenDecimals: 18,
    exchangeAddress: '0x0227e756843185e338be01e82b99c298b2869da5'
  },
  {
    symbol: 'ISLABNT',
    name: 'Insula Smart Relay Token',
    tokenAddress: '0x6b90562ed23b3e0a775e981cd63c8b78c8ade2f7',
    tokenDecimals: 18,
    exchangeAddress: '0x9d1f5468df01bb50f17b88a439f39e986e9accbe'
  },
  {
    symbol: 'CDR',
    name: 'Depositary Receipt',
    tokenAddress: '0x3feb48a94abc87b79e32bd213625405876dafb1c',
    tokenDecimals: 18,
    exchangeAddress: '0xff2743c4da7aeca66511dcc9b2e57e9aa5082264'
  },
  {
    symbol: 'STRM',
    name: 'Music Stream',
    tokenAddress: '0x57d86c0a6f5888a92204b459d7f7669488aa9b7e',
    tokenDecimals: 18,
    exchangeAddress: '0x2a73413dc7df227eb7c1075923dc92dc860af664'
  },
  {
    symbol: '0GOLD',
    name: 'ZeroGold',
    tokenAddress: '0x6ef5bca539a4a01157af842b4823f54f9f7e9968',
    tokenDecimals: 8,
    exchangeAddress: '0x32adc686c167a986b3de8b632dd30ad120074935'
  },
  {
    symbol: 'EST',
    name: 'Estate Coin',
    tokenAddress: '0x0efc2390c79c47452898a234a27f2b9c39a7a725',
    tokenDecimals: 18,
    exchangeAddress: '0xfd63e9d72547861d0b74fb59df13feb562b12d8b'
  },
  {
    symbol: 'BTCMINVOL',
    name: 'BTC Min Volatility Set',
    tokenAddress: '0x81c55017f7ce6e72451ced49ff7bab1e3df64d0c',
    tokenDecimals: 18,
    exchangeAddress: '0x80984e147cf31d1351710f556135e4329bb5788d'
  },
  {
    symbol: 'KICK',
    name: 'KickCoin',
    tokenAddress: '0x27695e09149adc738a978e9a678f99e4c39e9eb9',
    tokenDecimals: 8,
    exchangeAddress: '0x82fa916aca99a74684e051777e47ac5c45b139cd'
  },
  {
    symbol: 'PTRv',
    name: 'PETRO Venezolano',
    tokenAddress: '0x25a21c7be48fad500169ed688f070a96ae8e08f1',
    tokenDecimals: 8,
    exchangeAddress: '0xe7105c32ddbaa65736afe0dfc48056fe1f729fa1'
  },
  {
    symbol: 'TT',
    name: 'TOKTOK TOKEN',
    tokenAddress: '0xfdb6514d4b1600c5c3fb96d76cf11c0358679578',
    tokenDecimals: 18,
    exchangeAddress: '0x5a1b4e62bf7bd7da87f4e17ca6707daa2b80b8ff'
  },
  {
    symbol: 'ARC',
    name: 'ARTCHAINCOIN',
    tokenAddress: '0x2b0cc10247359b1faf46345dbb94b439e2a83143',
    tokenDecimals: 8,
    exchangeAddress: '0x6de5cb2c119755733bccde53c987ae9936c1f23f'
  },
  {
    symbol: 'sDEFI',
    name: 'Synth sDEFI',
    tokenAddress: '0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b',
    tokenDecimals: 18,
    exchangeAddress: '0x33191d4981e86b498f3fdba9bc8f6ae7d5a72774'
  },
  {
    symbol: 'CNCC',
    name: 'Complete New Commerce Chain',
    tokenAddress: '0x747c453f1825a86598de6c0de62db7d6d15893f0',
    tokenDecimals: 18,
    exchangeAddress: '0xade6aaa2998f010464f133e441764a5fa94130cd'
  },
  {
    symbol: 'RAISE',
    name: 'Raise',
    tokenAddress: '0x10ba8c420e912bf07bedac03aa6908720db04e0c',
    tokenDecimals: 18,
    exchangeAddress: '0x5c15be94476f4433303873be5d3ff8a03817107e'
  },
  {
    symbol: 'ODE',
    name: 'ODE',
    tokenAddress: '0x6f6d15e2dabd182c7c0830db1bdff1f920b57ffa',
    tokenDecimals: 2,
    exchangeAddress: '0x70f7acfd9f5ad60bbf6cb51e671b99eab43605fa'
  },
  {
    symbol: 'LUN',
    name: 'Lunyr Token',
    tokenAddress: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9',
    tokenDecimals: 18,
    exchangeAddress: '0x0db76ffe23a954b046a0667cff540111df2862a7'
  },
  {
    symbol: 'LBGT',
    name: 'Landing Block Governance Token',
    tokenAddress: '0xc402cb25477215a957f2045273461ad51cf1230b',
    tokenDecimals: 18,
    exchangeAddress: '0xc830fd29e3f5a92d2ad693b894ae238e8616c0ba'
  },
  {
    symbol: 'SLP',
    name: 'Small Love Potion',
    tokenAddress: '0x37236cd05b34cc79d3715af2383e96dd7443dcf1',
    tokenDecimals: 0,
    exchangeAddress: '0xf4158e282f2317597e31c028978c7fb7275d6fb4'
  },
  {
    symbol: '0316',
    name: '三月既望',
    tokenAddress: '0x206b1ff0f479a422f5916ff1f0fd294346b907f3',
    tokenDecimals: 18,
    exchangeAddress: '0x71958b7013085b8169640e37cdcefc7a193ed74c'
  },
  {
    symbol: 'CUI',
    name: 'CuiToken',
    tokenAddress: '0x873642b734ed748bf4088617d7fc3002f7e9a0ad',
    tokenDecimals: 18,
    exchangeAddress: '0xe22382185998c69de2571f38d6a379cd8e32d662'
  },
  {
    symbol: 'QUIT',
    name: 'Quitcoin',
    tokenAddress: '0x7b937131b8d1761fc0722b632517ff46e5349496',
    tokenDecimals: 10,
    exchangeAddress: '0xc70650cdae9a7da2c2203bafc4acb89a84509862'
  },
  {
    symbol: 'SS',
    name: 'SS Token',
    tokenAddress: '0x336e467aa97e8bab88a8dd88de3e230046488a24',
    tokenDecimals: 0,
    exchangeAddress: '0xc31e68f7ad6832fa3850dbaa1fba04c52f36a13a'
  },
  {
    symbol: 'ERD',
    name: 'ELDORADO TOKEN',
    tokenAddress: '0x12dc767728105aa415dd720dfbd0ea1d85841172',
    tokenDecimals: 2,
    exchangeAddress: '0xdb08c19336e041061103d71745488c690f4a0535'
  },
  {
    symbol: 'CHA',
    name: 'Chateau Coin',
    tokenAddress: '0xaf0619feb09a791bb842ada234ae6ba8033d3490',
    tokenDecimals: 18,
    exchangeAddress: '0xc8dcd65635a6e26775eba53b9d5d76a99c3ce858'
  },
  {
    symbol: 'XMD',
    name: 'XMD Token',
    tokenAddress: '0xea2524bb0773de6a5f641aa97294401f116572e7',
    tokenDecimals: 8,
    exchangeAddress: '0xc736205ce28d3c6e854aa191661670d02b542e1d'
  },
  {
    symbol: 'RM',
    name: 'Reichsmark',
    tokenAddress: '0xe6796e5e1ff3052b71e76bb5958d4841c9e9ddf1',
    tokenDecimals: 2,
    exchangeAddress: '0x8271e233466ff21c38b30b3079554e33f8931fdb'
  },
  {
    symbol: '$$',
    name: 'SS Token',
    tokenAddress: '0x4d84729ab970546c54549b53438c641d9beec1c5',
    tokenDecimals: 2,
    exchangeAddress: '0xb244911ed2cd5ef0ad1b8249fd7632febc8211c5'
  },
  {
    symbol: 'FM',
    name: 'Famous Masterpiece',
    tokenAddress: '0x1a772225766aedf025a64a5e7e893c5067de0698',
    tokenDecimals: 6,
    exchangeAddress: '0x718e1346499e43e2fec6f2248f21b25031a4d007'
  },
  {
    symbol: 'ART',
    name: 'CryptoArt',
    tokenAddress: '0x23f0772f32508bc02bed26ef8bc29acafbdf39a6',
    tokenDecimals: 18,
    exchangeAddress: '0xccdef90aa3a4c3d7b814052c16d4e55f70f18b2a'
  },
  {
    symbol: 'YMB',
    name: 'Yuamble',
    tokenAddress: '0x17a8f6ead7256e6620109bb02cb21a29b6bd7d3e',
    tokenDecimals: 6,
    exchangeAddress: '0xe6d4e92df180c092db9cb7d371e6ce84de5903c5'
  },
  {
    symbol: 'ric',
    name: 'auricoin',
    tokenAddress: '0xe610e04a9d8120afc2730d21cd71564cddd3d9b7',
    tokenDecimals: 8,
    exchangeAddress: '0x65425cfb85fca0bad3d7c23b18a14bd3c36ad263'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x70f7acfd9f5ad60bbf6cb51e671b99eab43605fa',
    tokenDecimals: 18,
    exchangeAddress: '0xf610ce2f724de65c35e10beba05c14d059387749'
  },
  {
    symbol: 'ACD',
    name: 'Apple Card Token',
    tokenAddress: '0xea6d4d7b36c00b3611de0b0e1982b12e9e736c66',
    tokenDecimals: 18,
    exchangeAddress: '0x20ce044d33623eef55c197a761314d2ff49ba02b'
  },
  {
    symbol: 'LND',
    name: 'Lendingblock',
    tokenAddress: '0x0947b0e6d821378805c9598291385ce7c791a6b2',
    tokenDecimals: 18,
    exchangeAddress: '0x3e788682063349ede21f07ff749d9a3b8ffcad67'
  },
  {
    symbol: 'XTZ',
    name: 'Tezos',
    tokenAddress: '0x23693431de4cccae05d0caf63be0f1dcfcdf4906',
    tokenDecimals: 8,
    exchangeAddress: '0x9227894cebf543e4618c0d5ad3282d919a6c04c6'
  },
  {
    symbol: 'NEXXO',
    name: 'NEXXO',
    tokenAddress: '0x2c7fa71e31c0c6bb9f21fc3c098ac2c53f8598cc',
    tokenDecimals: 18,
    exchangeAddress: '0xd8df47a0e818fc168664b9964409ab620942c4a0'
  },
  {
    symbol: 'MNG',
    name: 'MassNergy',
    tokenAddress: '0xc6da78dadfe7b8c681ec62bceb4b7d3009d66fce',
    tokenDecimals: 9,
    exchangeAddress: '0x2f5a1de9149f74a9401676d74428c6a3d7cc70e6'
  },
  {
    symbol: 'MNG',
    name: 'MassNergyxl',
    tokenAddress: '0x805af0680f76f913cd7f67ce57236a56dacb7215',
    tokenDecimals: 2,
    exchangeAddress: '0xa2f13cfb1a6ad280cfee5b3e41728768a9350d8b'
  },
  {
    symbol: 'FTT',
    name: 'FarmaTrust Token',
    tokenAddress: '0x2aec18c5500f21359ce1bea5dc1777344df4c0dc',
    tokenDecimals: 18,
    exchangeAddress: '0x422455a4ba2427e8f3ae3af756e141e9401744e8'
  },
  {
    symbol: 'SPND',
    name: 'Spendcoin',
    tokenAddress: '0xddd460bbd9f79847ea08681563e8a9696867210c',
    tokenDecimals: 18,
    exchangeAddress: '0x5a015fea3d1083246c6c23afcd4920281ac29eec'
  },
  {
    symbol: '110',
    name: '110 coin',
    tokenAddress: '0x659be486869ca69ecff2a80c28c2879c46828979',
    tokenDecimals: 18,
    exchangeAddress: '0x8fb16c97b1f702cdbf1c4125cf3cf074ff5bef4e'
  },
  {
    symbol: 'DTX',
    name: 'DaTa eXchange Token',
    tokenAddress: '0x765f0c16d1ddc279295c1a7c24b0883f62d33f75',
    tokenDecimals: 18,
    exchangeAddress: '0x31047f1bda3657398b81f28f86422211725857ea'
  },
  {
    symbol: 'CSNO',
    name: 'BitDice',
    tokenAddress: '0x29d75277ac7f0335b2165d0895e8725cbf658d73',
    tokenDecimals: 8,
    exchangeAddress: '0x2c42e1271cfb425df7b0c45756f911c896c69fd6'
  },
  {
    symbol: 'CAT',
    name: 'BlockCAT Token',
    tokenAddress: '0x56ba2ee7890461f463f7be02aac3099f6d5811a8',
    tokenDecimals: 18,
    exchangeAddress: '0xe9fb1d6df1eb611d917b1efbc4f3456e05a5314c'
  },
  {
    symbol: 'SPD',
    name: 'SPINDLE',
    tokenAddress: '0x1dea979ae76f26071870f824088da78979eb91c8',
    tokenDecimals: 18,
    exchangeAddress: '0x93656eefb2ba2decba4aa5eae0ca444f2692ad14'
  },
  {
    symbol: 'GBC',
    name: 'GBCoin',
    tokenAddress: '0xd895a50d3ccda14751167ea2c586ee8df3f0fa94',
    tokenDecimals: 18,
    exchangeAddress: '0xd8c1fa5f424d5513394f72cae505aa3cd42db160'
  },
  {
    symbol: 'ETM',
    name: 'Ethermoney',
    tokenAddress: '0x28926c46bc5c0aeab39c72f7c1201bfb8056d509',
    tokenDecimals: 18,
    exchangeAddress: '0xdc1fcb2659c49fe1726692594d5f9afbe6fd1883'
  },
  {
    symbol: 'GBC',
    name: 'GBCoin',
    tokenAddress: '0x638abd6f39ff141b2117e40c0b928659d76d2d08',
    tokenDecimals: 18,
    exchangeAddress: '0x0113081134c5d0047623914758ce595ac869aa9c'
  },
  {
    symbol: 'DGPT',
    name: 'DigiPulse Token',
    tokenAddress: '0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1',
    tokenDecimals: 18,
    exchangeAddress: '0x28888e8ddd54dbab2b0587444517373a0e5b1bea'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x3fcb35aada553a888433efc45df1b70937a5942d',
    tokenDecimals: 18,
    exchangeAddress: '0x3becabd992b92e0c9e37bff36ec5bb4d469816f4'
  },
  {
    symbol: 'GOLD',
    name: 'GoldChain',
    tokenAddress: '0x58f83cd5030abfba14b9603021661ca1fd09b9a2',
    tokenDecimals: 18,
    exchangeAddress: '0x039b1f81025093159f371b98a6043118b2cab603'
  },
  {
    symbol: 'LSD',
    name: 'Liquidity StakeD',
    tokenAddress: '0x694d6ab8b31bba22ccb670889e63c08193b837c7',
    tokenDecimals: 18,
    exchangeAddress: '0x3c2c07e925f8d7c8c38840a4678575fecd64d279'
  },
  {
    symbol: 'LcDAI',
    name: 'MARKET Protocol Long Position Token',
    tokenAddress: '0xd8478b227229ada963ad1618ca306e80bbd5c7fe',
    tokenDecimals: 5,
    exchangeAddress: '0x1e673caf81dee574ed34d3de2d0efeaa9b1ebe98'
  },
  {
    symbol: 'AE',
    name: 'Aeternity',
    tokenAddress: '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d',
    tokenDecimals: 18,
    exchangeAddress: '0xf50cffc9ed41f268602b76b991adf62a11873b1b'
  },
  {
    symbol: 'ScDAI',
    name: 'MARKET Protocol Short Position Token',
    tokenAddress: '0x3e2e9c56b372b412e46c47ca3eb66b6b3e5b9c5b',
    tokenDecimals: 5,
    exchangeAddress: '0x0a933633a1057ae80a8df17dd2dac7c934cc701f'
  },
  {
    symbol: 'ETHBNT',
    name: 'BNT Smart Token Relay',
    tokenAddress: '0xb1cd6e4153b2a390cf00a6556b0fc1458c4a5533',
    tokenDecimals: 18,
    exchangeAddress: '0xa187cd32e738de06b6a75edf5e32f0313597d5ba'
  },
  {
    symbol: 'ETM',
    name: 'ETHERMONEY',
    tokenAddress: '0xfb0753106a5c16eeb0ee61ad688ede7bbb7a2f6c',
    tokenDecimals: 4,
    exchangeAddress: '0x8bfcbee458e5649a34efd6d9a0818e7a77349dfe'
  },
  {
    symbol: 'TRB',
    name: 'Tellor',
    tokenAddress: '0x870cbbd204d5e2317c60374888e4b6be3bfa092b',
    tokenDecimals: 1,
    exchangeAddress: '0x8c04639bfa17720fe5eca159354005e15f13c550'
  },
  {
    symbol: 'GAD',
    name: 'Garuda Token',
    tokenAddress: '0x610740af3f25b72892ba21b98bfb8595f2cde386',
    tokenDecimals: 8,
    exchangeAddress: '0x602bc76a0990d7576b989b165e1685ce74ec8211'
  },
  {
    symbol: 'SPONT',
    name: 'SPONT',
    tokenAddress: '0x3a4282b8ffbae5de5ab6e29bad3d08d83902ebd2',
    tokenDecimals: 4,
    exchangeAddress: '0x245d8350eeadbf5f5e68362fd976b1b6778dfacd'
  },
  {
    symbol: 'GLC',
    name: 'Legendary Chest',
    tokenAddress: '0x20d4cec36528e1c4563c1bfbe3de06aba70b22b4',
    tokenDecimals: 0,
    exchangeAddress: '0x738a94c5ffd57a7bba7fbc58c0c4a9913925e700'
  },
  {
    symbol: 'MM',
    name: 'Moose',
    tokenAddress: '0xcf0425a35f1fa900bb347cb996d3094d1df3cd48',
    tokenDecimals: 4,
    exchangeAddress: '0x391d74c67301d77ff9634d03b4a94778b44acb64'
  },
  {
    symbol: 'BONZ',
    name: 'LovelyBonz',
    tokenAddress: '0x1a89d5ad11e565bcdb3cfae70b2cd6571725a3ef',
    tokenDecimals: 18,
    exchangeAddress: '0x7c90f44ce2e60a1d07b94392f1e867677846b522'
  },
  {
    symbol: 'LSD',
    name: 'Liquidity StakeD',
    tokenAddress: '0x433d2a8080ec43fc04ce7f11d2039ccc23098a98',
    tokenDecimals: 18,
    exchangeAddress: '0x4ffce366e00fda59629b1ab69e70afcec754e0df'
  },
  {
    symbol: 'CNB',
    name: 'Coinsbit Token',
    tokenAddress: '0xc538143202f3b11382d8606aae90a96b042a19db',
    tokenDecimals: 18,
    exchangeAddress: '0x93fc1ac91aabba493ccc307ffb753c94f4edc680'
  },
  {
    symbol: 'BONZ',
    name: 'LovelyBonz',
    tokenAddress: '0xaa0bb78c2ac8cfc98bddba7c82bde6247fbd1b73',
    tokenDecimals: 18,
    exchangeAddress: '0x1ff36c72c234e84ee5f47cf4f117d54dfb0b262f'
  },
  {
    symbol: 'ODEM',
    name: 'ODEM Token',
    tokenAddress: '0xbf52f2ab39e26e0951d2a02b49b7702abe30406a',
    tokenDecimals: 18,
    exchangeAddress: '0xa9c2d0edae3c6ce3f23b8a49bdcdd5f33be53614'
  },
  {
    symbol: 'LTK',
    name: 'Litecoin Token',
    tokenAddress: '0x9eb05a7f953ec18a39ea3adbe5a819fd5ac0bad1',
    tokenDecimals: 8,
    exchangeAddress: '0x05b712572d762f212eeb21d99522e548fc57071d'
  },
  {
    symbol: 'XLMC',
    name: 'STELLAR CLASSIC',
    tokenAddress: '0xa5aa4e921d268e8be14be8167d5f3e2b8f13cc75',
    tokenDecimals: 8,
    exchangeAddress: '0x90a200ad720d90d61619d4b8108e2a799a1d16b0'
  },
  {
    symbol: 'JRT',
    name: 'Jarvis Reward Token',
    tokenAddress: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
    tokenDecimals: 18,
    exchangeAddress: '0x634e27269a029edb2b70b5ef43273f5eed9ebcc2'
  },
  {
    symbol: 'REALTOKEN-5942-AUDUBON-RD-DETROIT-MI',
    name: 'RealToken 5942 Audubon Road Detroit MI',
    tokenAddress: '0x43688910273f199b8ae2ca018c13918fb3d37b58',
    tokenDecimals: 18,
    exchangeAddress: '0x7671f9c37bfcee829f54d4bdd2a226930c91df7b'
  },
  {
    symbol: 'USDG',
    name: 'USDG',
    tokenAddress: '0xaf4421f0d43c5c1d54380736e3f738b159417744',
    tokenDecimals: 3,
    exchangeAddress: '0x5b92bba98cf0c6b473cef943424c17d98bf615f2'
  },
  {
    symbol: 'BBK',
    name: 'BrickblockToken',
    tokenAddress: '0x4a6058666cf1057eac3cd3a5a614620547559fc9',
    tokenDecimals: 18,
    exchangeAddress: '0x15d904eb6456966d135cef6af65c8a999634077d'
  },
  {
    symbol: 'STT',
    name: 'Scatter.cx',
    tokenAddress: '0xac9bb427953ac7fddc562adca86cf42d988047fd',
    tokenDecimals: 18,
    exchangeAddress: '0x9bf7805f5deb58dbb881e05b1af09819f8e90eaa'
  },
  {
    symbol: 'NEXXO',
    name: 'Nexxo Tokens',
    tokenAddress: '0x278a83b64c3e3e1139f8e8a52d96360ca3c69a3d',
    tokenDecimals: 18,
    exchangeAddress: '0x49c722e12c4642e2d13795a6422e355755fe7b6d'
  },
  {
    symbol: 'GZPT',
    name: 'GozePayToken',
    tokenAddress: '0x2e320fe846581f2ddc73ca391cbbe01d9968d5fb',
    tokenDecimals: 0,
    exchangeAddress: '0xd5ab3b8bb2e4ae0750957a49e52e3e1fba1eb751'
  },
  {
    symbol: 'AQRS',
    name: 'Aquarius',
    tokenAddress: '0x8b049b6e6117d4a758df5e247817516bb56395ec',
    tokenDecimals: 6,
    exchangeAddress: '0x45487365ef63a257ce6c38c39e9e3c5541bfba86'
  },
  {
    symbol: 'KUBR',
    name: 'KUBERA',
    tokenAddress: '0x8669f39469abe717a567d2a7243b6379b5fb8ae0',
    tokenDecimals: 7,
    exchangeAddress: '0x88cc4e8eff91c70ea7a731a152e1df9e826df081'
  },
  {
    symbol: 'XAU',
    name: 'Goldneum',
    tokenAddress: '0xdd32c6a39a06d079e467687a0252b02a36ee2b33',
    tokenDecimals: 18,
    exchangeAddress: '0x4839f54eb79a4d2f984d8769805facacdd017e80'
  },
  {
    symbol: 'ETM',
    name: 'ETHERMONEY',
    tokenAddress: '0xfb0753106a5c16eeb0ee61ad688ede7bbb7a2f6c',
    tokenDecimals: 4,
    exchangeAddress: '0x8bfcbee458e5649a34efd6d9a0818e7a77349dfe'
  },
  {
    symbol: 'DDN',
    name: 'Daily Divs Network',
    tokenAddress: '0xdd17d00c4bba48008d49bb4cc292819f5a4282d4',
    tokenDecimals: 18,
    exchangeAddress: '0xa59cd8c474ea32b041ebe4a6e0563bd6e8cd91f4'
  },
  {
    symbol: '$PEW',
    name: 'PEW PEW PEW',
    tokenAddress: '0x892091bdd49fe955859d4bbb8a9a2b7685ccec82',
    tokenDecimals: 18,
    exchangeAddress: '0x5489ccd5f398332c7e0bf30d1fae6eee7f9b565e'
  },
  {
    symbol: 'INO',
    name: 'Ino Coin',
    tokenAddress: '0xc9859fccc876e6b4b3c749c5d29ea04f48acb74f',
    tokenDecimals: 0,
    exchangeAddress: '0xe3f2f02d3ff2e0d1df768d0256ae1e36b7213fb5'
  },
  {
    symbol: 'RRC',
    name: 'RenRenCoin',
    tokenAddress: '0xdc7836bc6c84c51275365e337fd147db2dc7b3c3',
    tokenDecimals: 18,
    exchangeAddress: '0x0d33b109bcc04ee9996dd5ff76278cac1560c885'
  },
  {
    symbol: 'KOWAL',
    name: 'Kowalski Token',
    tokenAddress: '0xde06a39dd3b682338878c4fbab12c38d5e684f69',
    tokenDecimals: 2,
    exchangeAddress: '0x39bf5669440e7d6275945a643981c5d55b193415'
  },
  {
    symbol: 'HUSD',
    name: 'HUSD',
    tokenAddress: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
    tokenDecimals: 8,
    exchangeAddress: '0x15f09d56bf4d6a1aa2bfeea9bb0d3f0bdd6f80ac'
  },
  {
    symbol: 'DAPS',
    name: 'DAPSTOKEN',
    tokenAddress: '0x93190dbce9b9bd4aa546270a8d1d65905b5fdd28',
    tokenDecimals: 18,
    exchangeAddress: '0x38fc384f31ace471e96c60e42b1dc6e769b518f5'
  },
  {
    symbol: 'GRD',
    name: 'GRIND+',
    tokenAddress: '0x859beb8615977263ee2e702f06c283f7ab990b5a',
    tokenDecimals: 18,
    exchangeAddress: '0x099bb9590e331e3501c564c77c59c654c60174d1'
  },
  {
    symbol: 'DLE',
    name: 'DLF EURO',
    tokenAddress: '0x95bbb17f8f69d31f1465b819b45d0c3df8820988',
    tokenDecimals: 6,
    exchangeAddress: '0xac23f8645752470dce18151539b82daf5e51a863'
  },
  {
    symbol: 'TBC',
    name: 'ThunderBoltCoin',
    tokenAddress: '0x627974847450c45b60b3fe3598f4e6e4cf945b9a',
    tokenDecimals: 18,
    exchangeAddress: '0x2b7b3dd16488f906d190e241156984bb4274d269'
  },
  {
    symbol: 'TBCBNT',
    name: 'ThunderBoltCoin Smart Relay Token',
    tokenAddress: '0xb13819374575be7ced2b0896c645612164ebe772',
    tokenDecimals: 18,
    exchangeAddress: '0x17ee274931954d070c89805d0b4580562c521b51'
  },
  {
    symbol: 'SCUDO',
    name: 'ScudoCash',
    tokenAddress: '0xb0cc5610e590eb7215bf4d69eca2ca26b6a9bc87',
    tokenDecimals: 18,
    exchangeAddress: '0x864b64f13778a02e61b891a135150684ca1fe6a9'
  },
  {
    symbol: 'HEX3D',
    name: 'HEX3D.WIN',
    tokenAddress: '0x69c70ef84637e7584c6b20b41ed4665806d9f85c',
    tokenDecimals: 18,
    exchangeAddress: '0xe9b06e1e9cfb5d7523918bd8f145907f6f4e8836'
  },
  {
    symbol: 'BNK',
    name: 'Banker Token',
    tokenAddress: '0xc80c5e40220172b36adee2c951f26f2a577810c5',
    tokenDecimals: 8,
    exchangeAddress: '0xf09acb86dbb19e85d52439c2682d5267c3c5e71a'
  },
  {
    symbol: 'SKULL',
    name: 'Skull',
    tokenAddress: '0xbcc66ed2ab491e9ae7bf8386541fb17421fa9d35',
    tokenDecimals: 4,
    exchangeAddress: '0xae33701b6b48267db4bb51e472e4e7ab5aad2e3e'
  },
  {
    symbol: 'LSD',
    name: 'Liquidity StakeD',
    tokenAddress: '0x694d6ab8b31bba22ccb670889e63c08193b837c7',
    tokenDecimals: 18,
    exchangeAddress: '0x3c2c07e925f8d7c8c38840a4678575fecd64d279'
  },
  {
    symbol: 'OPA',
    name: 'Opta Token',
    tokenAddress: '0x3fe2ef1dfb1595195768627d16751d552586dce8',
    tokenDecimals: 10,
    exchangeAddress: '0x5aafb35defe9502dfdd58c59e5e62866103d5585'
  },
  {
    symbol: 'STRX',
    name: 'Storex',
    tokenAddress: '0x12c8b0914e6dee22c7557a0a8b928ae6cacfbcf7',
    tokenDecimals: 18,
    exchangeAddress: '0xf55d5cfa2b4ecff567cf02608391fec40232c8f4'
  },
  {
    symbol: 'TLN',
    name: 'Trustlines Network Token',
    tokenAddress: '0x679131f591b4f369acb8cd8c51e68596806c3916',
    tokenDecimals: 18,
    exchangeAddress: '0x61f8676cb335403836607be179f1f61e1dbbc44d'
  },
  {
    symbol: 'RLCP',
    name: 'RLC Points Token',
    tokenAddress: '0x25168b494408a63b1394b6ecd2a93934590cfd03',
    tokenDecimals: 4,
    exchangeAddress: '0x111dae04e4178fd3ce02e7c1c98eea1c1604d64e'
  },
  {
    symbol: 'TKZ',
    name: 'Tokenization',
    tokenAddress: '0xdd84745acbe5143e6656d3603d59aca20dd0b0c5',
    tokenDecimals: 18,
    exchangeAddress: '0xf145ae561724128901957d4579ead90e1b6a173b'
  },
  {
    symbol: 'GDN',
    name: 'Golden',
    tokenAddress: '0xa955c0e38a64f07b751a18ffb99f59f4af87aa3a',
    tokenDecimals: 18,
    exchangeAddress: '0x77672bf6ac0a1ec1d5b3fb45cfc32b830245ece4'
  },
  {
    symbol: 'USDG',
    name: 'USDG',
    tokenAddress: '0xf906997808f73b09c1007b98ab539b189282b192',
    tokenDecimals: 3,
    exchangeAddress: '0x620976394aeda437e7862e3471fec89de9809a34'
  },
  {
    symbol: 'BCR',
    name: 'BITCOREA',
    tokenAddress: '0x41bd6892e3a1aa2f62fce3b609483b72cf2d1cc7',
    tokenDecimals: 18,
    exchangeAddress: '0xed1067b588c449669d289a87f92375c9f21085b8'
  },
  {
    symbol: 'PLBT',
    name: 'Polybius Token',
    tokenAddress: '0x0affa06e7fbe5bc9a764c979aa66e8256a631f02',
    tokenDecimals: 6,
    exchangeAddress: '0x1b643f0f476aa6c33c76473ecb161b5e4a7e113b'
  },
  {
    symbol: 'DOGE',
    name: 'DOGE Token',
    tokenAddress: '0x0bc0a7b096504704e10bb19b0c6ce46232f22eda',
    tokenDecimals: 8,
    exchangeAddress: '0x91227d48b86cf338ace672290277bba2eb5d370e'
  },
  {
    symbol: 'CTC',
    name: 'Crypto Trade Coin',
    tokenAddress: '0x918c97179370e92a7346d8aeb2758e8b30301723',
    tokenDecimals: 18,
    exchangeAddress: '0xc84ef6b3ae18c99c432f15ae89e70894d8135eec'
  },
  {
    symbol: 'POHC',
    name: 'POH COIN',
    tokenAddress: '0x9ffc0287aa2083431a8f202a4eb65193359529b9',
    tokenDecimals: 8,
    exchangeAddress: '0x3d27b540150ba34eb788024fd15f48a956fe9e16'
  },
  {
    symbol: 'DET',
    name: 'Dragon Exchange',
    tokenAddress: '0x7d49eaac4c70abc1a659122f08c0806ae44703ef',
    tokenDecimals: 18,
    exchangeAddress: '0x921bfbd0df75c55353564c7fd0ce30829aaaaf26'
  },
  {
    symbol: 'PASG',
    name: 'Passive Gold',
    tokenAddress: '0x083a96c390c942def68b6343d1c651eeae604b50',
    tokenDecimals: 18,
    exchangeAddress: '0x8f193b443f05aad921f262da36d3dde6c7adfe9a'
  },
  {
    symbol: 'COIN',
    name: 'Coinvest COIN V3 Token',
    tokenAddress: '0xeb547ed1d8a3ff1461abaa7f0022fed4836e00a4',
    tokenDecimals: 18,
    exchangeAddress: '0x13e737c0eb32f1c77b48bb0cc319edceb260d6bc'
  },
  {
    symbol: 'NKN',
    name: 'NKN',
    tokenAddress: '0x5cf04716ba20127f1e2297addcf4b5035000c9eb',
    tokenDecimals: 18,
    exchangeAddress: '0x49e0a4dbddb0c2889ccc6ce7ad51654dbb65123d'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2f5b009d42917452f4f057b0998dfad4d84c7662',
    tokenDecimals: 18,
    exchangeAddress: '0x7d14b002809c6ddc961d815c0ac3bee426ce8ade'
  },
  {
    symbol: 'KAT',
    name: 'Kambria Token',
    tokenAddress: '0xa858bc1b71a895ee83b92f149616f9b3f6afa0fb',
    tokenDecimals: 18,
    exchangeAddress: '0xfc7e5dd2cb55fd0aa9140445620eeb8b3cca8251'
  },
  {
    symbol: 'KGG',
    name: 'KingsGold',
    tokenAddress: '0x9bf8a52ed07c795f85dc822897e13dec476c2363',
    tokenDecimals: 18,
    exchangeAddress: '0xd8b0efadd140980b9df65eb889ad6cb0ff78dc74'
  },
  {
    symbol: 'KAASO',
    name: 'Kaaso',
    tokenAddress: '0xf6bf74a97d78f2242376769ef1e79885cf1f0c1c',
    tokenDecimals: 18,
    exchangeAddress: '0x6deb055120522429f936b1b1987d4e1a4c349f15'
  },
  {
    symbol: 'VNS',
    name: 'HerCoin',
    tokenAddress: '0x098af16554f87546b35beccded6a5adad7b315e9',
    tokenDecimals: 18,
    exchangeAddress: '0xfe514c553f7d80415ef6a613c0f36c28b726dfea'
  },
  {
    symbol: 'HGH',
    name: 'HGH Token',
    tokenAddress: '0x40c6f861a08f97dfbc3c0931485bff4921975a56',
    tokenDecimals: 18,
    exchangeAddress: '0xcaf799a65effa5651d5ba9bfa95c057ec90dc151'
  },
  {
    symbol: 'XAU',
    name: 'Goldneum',
    tokenAddress: '0xdd32c6a39a06d079e467687a0252b02a36ee2b33',
    tokenDecimals: 18,
    exchangeAddress: '0x4839f54eb79a4d2f984d8769805facacdd017e80'
  },
  {
    symbol: 'CXO',
    name: 'CargoX Token',
    tokenAddress: '0xb6ee9668771a79be7967ee29a63d4184f8097143',
    tokenDecimals: 18,
    exchangeAddress: '0x885d7c61ca9865e33f6bbefec081ee4cdf42844a'
  },
  {
    symbol: 'CHP',
    name: 'Poker Chips',
    tokenAddress: '0xf3db7560e820834658b590c96234c333cd3d5e5e',
    tokenDecimals: 18,
    exchangeAddress: '0xeece8a4e30b46e5b456083e474b89c931248f588'
  },
  {
    symbol: 'ETO',
    name: 'Engage Token',
    tokenAddress: '0x4b50e6f7050f184a3657b8c5f0ef8a48596f5c8a',
    tokenDecimals: 18,
    exchangeAddress: '0xdd5168dc064efc79d632dbb2c5b66558a2d85654'
  },
  {
    symbol: 'VSF',
    name: 'VeriSafe',
    tokenAddress: '0xac9ce326e95f51b5005e9fe1dd8085a01f18450c',
    tokenDecimals: 18,
    exchangeAddress: '0x1e0056b00a9a2162ed314243f041d51e27d37837'
  },
  {
    symbol: 'INSTAR',
    name: 'Insights Network',
    tokenAddress: '0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d',
    tokenDecimals: 18,
    exchangeAddress: '0x1f89c1281c60d8ef6b78005241321bbe3bddbf40'
  },
  {
    symbol: 'STX',
    name: 'Suptex STX',
    tokenAddress: '0x9c6452092abacac981736bdf384740cf0e37901a',
    tokenDecimals: 18,
    exchangeAddress: '0xdb7dcf6f408708ee6b90ec0a6b1e7b9f408291d7'
  },
  {
    symbol: 'KAV',
    name: 'KAVAL',
    tokenAddress: '0x781fc0bcfc20f5d395779724c8698c6442d65e59',
    tokenDecimals: 8,
    exchangeAddress: '0x08ee8d105f401a6bdd1b1a7f8fca541a08bd13ca'
  },
  {
    symbol: 'NXC',
    name: 'Nixma Coin',
    tokenAddress: '0x93ec2b9d85a7f4b0abc66abf4ca8d5e50c355516',
    tokenDecimals: 18,
    exchangeAddress: '0xf623d64ae122a0539536a04fba32cabeb2a303df'
  },
  {
    symbol: 'STRAW',
    name: 'STRAW Coin',
    tokenAddress: '0xb92179b36794e169a2e5582ece92936480754da9',
    tokenDecimals: 18,
    exchangeAddress: '0x009593513eba0b19766a779e94ee3f432b633237'
  },
  {
    symbol: 'MUXE',
    name: 'MUXE Token',
    tokenAddress: '0x515669d308f887fd83a471c7764f5d084886d34d',
    tokenDecimals: 18,
    exchangeAddress: '0x5796383bc0b02076ae0798fcbb9761478fd97603'
  },
  {
    symbol: 'JRT',
    name: 'Jarvis Reward Token',
    tokenAddress: '0x082582c4271f3f6dd5f4306cbcac822076516c53',
    tokenDecimals: 18,
    exchangeAddress: '0x475481f46da08727fff0ca69e339be87d732031d'
  },
  {
    symbol: 'TEO',
    name: 'Tokeneo',
    tokenAddress: '0x70f414b2bcc447f8e41a57c357c20e3ad1bb864d',
    tokenDecimals: 18,
    exchangeAddress: '0x4957a4338b05dfaa95c001a549fbf26662cf4db7'
  },
  {
    symbol: 'DANK',
    name: 'Dank Signals',
    tokenAddress: '0xc354dde9ac078ed9572df94063c300d1d92468fd',
    tokenDecimals: 18,
    exchangeAddress: '0x761b53593d6959dab73b68c216b735a404fee59b'
  },
  {
    symbol: 'ECOM',
    name: 'Omnitude Token',
    tokenAddress: '0x171d750d42d661b62c277a6b486adb82348c3eca',
    tokenDecimals: 18,
    exchangeAddress: '0x17988c2d019e954be15128631fe9f6cdde05aa5e'
  },
  {
    symbol: 'INFT',
    name: 'Infinito Token',
    tokenAddress: '0x83d60e7aed59c6829fb251229061a55f35432c4d',
    tokenDecimals: 6,
    exchangeAddress: '0xe32f1d8795458c049d226bce1f0675870a6a9476'
  },
  {
    symbol: 'PLY',
    name: 'PLAY',
    tokenAddress: '0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61',
    tokenDecimals: 18,
    exchangeAddress: '0x8fc12e88a8dfddd65c6cb6c3ff1f08c26e5bcf24'
  },
  {
    symbol: 'ECT',
    name: 'SuperEdge',
    tokenAddress: '0x4ccc3759eb48faf1c6cfadad2619e7038db6b212',
    tokenDecimals: 8,
    exchangeAddress: '0x8f565323634fd9949860d6ae1031df459429efc1'
  },
  {
    symbol: 'QUAD',
    name: 'QuadCore Chain',
    tokenAddress: '0xe0e705c9bff67188a79dc5f59f0b2675031a6055',
    tokenDecimals: 8,
    exchangeAddress: '0x1cb48621a6e0f04442cd3e8b95fd6ee49921a7d9'
  },
  {
    symbol: 'SCB',
    name: 'SCB',
    tokenAddress: '0x8aaa0d43cc86ed98b7aa9c8e1f87a319cd873dc4',
    tokenDecimals: 4,
    exchangeAddress: '0x51083be1c8ffbedcec56f28aa41b6707310ac489'
  },
  {
    symbol: 'BTCA',
    name: 'BitAir',
    tokenAddress: '0x02725836ebf3ecdb1cdf1c7b02fcbbfaa2736af8',
    tokenDecimals: 8,
    exchangeAddress: '0xcf54672b4d3a4477a5ef3031206d06f54fef654a'
  },
  {
    symbol: 'PYGOZ',
    name: 'PYGOZ',
    tokenAddress: '0xbb98fc1fd1080d2b8bdad75c51d30b50c6f59b62',
    tokenDecimals: 4,
    exchangeAddress: '0xa8566d5ad1ba44cd763d8ba8846310a7b12e5647'
  },
  {
    symbol: 'WGM',
    name: 'WGM',
    tokenAddress: '0x219803d17f3067eb53d521ba8948d2734f402f7d',
    tokenDecimals: 4,
    exchangeAddress: '0x4ee32485431b366bb7e8a3a200954265c5f7cd57'
  },
  {
    symbol: 'FACE',
    name: 'Faceter Token',
    tokenAddress: '0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672',
    tokenDecimals: 18,
    exchangeAddress: '0xd5544bf3a1e9b364fb81c6f541c35602e91becf3'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x93ff2c787c140c4ce21f01cc211fbdace274077f',
    tokenDecimals: 18,
    exchangeAddress: '0x7a3ecac09316e3c10b9158887704422e2469f141'
  },
  {
    symbol: 'TRUST',
    name: 'Harmony Block Capital',
    tokenAddress: '0x0ee815f8be0b0259e2657c8b8d1e57bd3d60f26b',
    tokenDecimals: 6,
    exchangeAddress: '0xabf6fbb379f8fb359b74c341d849d64816894e76'
  },
  {
    symbol: 'aDAI',
    name: 'Aave Interest bearing DAI',
    tokenAddress: '0x363edc62b8236a0079c00320340485ee0e7b17ae',
    tokenDecimals: 18,
    exchangeAddress: '0x302c7a502524179768ee47d04d43f0cad0f5724e'
  },
  {
    symbol: 'EMR',
    name: 'Emaar Utility Token',
    tokenAddress: '0x745d62d3b23344ca200beb83effecc8f762057ed',
    tokenDecimals: 18,
    exchangeAddress: '0xfb3e8f087ad7e732741989de0afc3bfcd39ca346'
  },
  {
    symbol: 'LSNX_20200114',
    name: 'MARKET Protocol Long Position Token',
    tokenAddress: '0x5bcf04986e164edb7ea45f6e5fb8976b7fcdb3d8',
    tokenDecimals: 5,
    exchangeAddress: '0xfb234ad911eb1e4b52121591668ff9c5ce72feb2'
  },
  {
    symbol: 'SSNX_20200114',
    name: 'MARKET Protocol Short Position Token',
    tokenAddress: '0x72cdfdc0f6dfd6e1805c8714766bf8d0a2b88038',
    tokenDecimals: 5,
    exchangeAddress: '0x33c9a6925044905f861e3da62b0737a44f92146a'
  },
  {
    symbol: 'RONC',
    name: 'RONCoin',
    tokenAddress: '0xf1b819fdb689f43afc161db789800ed799f18388',
    tokenDecimals: 18,
    exchangeAddress: '0x9567e37fedd6fd60186d4829a70dfac7c9907714'
  },
  {
    symbol: 'CMS',
    name: 'COMSA',
    tokenAddress: '0xf83301c5cd1ccbb86f466a6b3c53316ed2f8465a',
    tokenDecimals: 6,
    exchangeAddress: '0x87d4cc18b2ee0fb2d46f369128eb6afc0278196d'
  },
  {
    symbol: 'Sp',
    name: 'Sponsorships',
    tokenAddress: '0x0ab346a16cea1b1363b20430c414eab7bc179324',
    tokenDecimals: 0,
    exchangeAddress: '0x15ea569369b48b1dcc4571beb35142ee14331356'
  },
  {
    symbol: 'ANJ',
    name: 'Aragon Network Juror',
    tokenAddress: '0xcd62b1c403fa761baadfc74c525ce2b51780b184',
    tokenDecimals: 18,
    exchangeAddress: '0x64a9edd3f5fce0252cd708e26c8dd11205742826'
  },
  {
    symbol: 'PYRA',
    name: 'PYRAHEX.NETWORK',
    tokenAddress: '0x3f83c5f5e89f604883ac2454edd287abea343ec2',
    tokenDecimals: 8,
    exchangeAddress: '0x35ec0972457aef3944dafe020a39477d4e3af1a3'
  },
  {
    symbol: 'EECO',
    name: 'E Coin',
    tokenAddress: '0x5ad432ad3ccf0239dc56d3540a1e5e5cbafb37c3',
    tokenDecimals: 18,
    exchangeAddress: '0x6f103b55de3ed6ecd5b8c99ac5eccf2821db965a'
  },
  {
    symbol: 'OD',
    name: 'Origin D',
    tokenAddress: '0x3c2cf21b9d4b543b93a9bcfe637f673d8bd944d8',
    tokenDecimals: 18,
    exchangeAddress: '0x1d9fbf656b1a5d441038a4b63709909ce6961203'
  },
  {
    symbol: 'KEY',
    name: 'KEY',
    tokenAddress: '0x4cd988afbad37289baaf53c13e98e2bd46aaea8c',
    tokenDecimals: 18,
    exchangeAddress: '0x5780bcd22e3c08c4b6b5c47c406ea6dc53e278be'
  },
  {
    symbol: 'CIEX',
    name: 'ChinaInvestmentExchangeToken',
    tokenAddress: '0x195336ffb6792b8e268d206e985e931e236539d6',
    tokenDecimals: 18,
    exchangeAddress: '0x31ba13a00b2d7d7e3ae6740e7485b883f3c8d1f4'
  },
  {
    symbol: 'MANA',
    name: 'Decentraland',
    tokenAddress: '0xc51c4405aab4dd716c2f2873ff7565eb68fdb36f',
    tokenDecimals: 18,
    exchangeAddress: '0x60af3d8212d20db13486388ef7129a3de312ceb9'
  },
  {
    symbol: '💲PC',
    name: 'Star Pacific Coin',
    tokenAddress: '0xcf7d119bcb6822283003adc7c1a40e9ae7097b75',
    tokenDecimals: 1,
    exchangeAddress: '0xd1fd7bef3074fda1cc6abd19630a16d7e7dd9efc'
  },
  {
    symbol: 'NGNT',
    name: 'Naira Token',
    tokenAddress: '0x05bbed16620b352a7f889e23e3cf427d1d379ffe',
    tokenDecimals: 2,
    exchangeAddress: '0x1de44c32e2c4866c6f873b2dafa8d0acc45842e8'
  },
  {
    symbol: 'ETR',
    name: 'Ethereum Rush',
    tokenAddress: '0x6f371ca338bbddd0baf719e1d5d0797cce20774f',
    tokenDecimals: 18,
    exchangeAddress: '0x713458ad4751d6980c5a9eb097b9fab8b2d7d5b8'
  },
  {
    symbol: 'CELC',
    name: 'CelCoin',
    tokenAddress: '0x19b58d95929586ad750893caad43e77aa6e8ce9e',
    tokenDecimals: 8,
    exchangeAddress: '0x5b0d9e4099bf629387a842ed6bff4dab70573f31'
  },
  {
    symbol: 'GMT',
    name: 'Global Messaging Token',
    tokenAddress: '0xb3bd49e28f8f832b8d1e246106991e546c323502',
    tokenDecimals: 18,
    exchangeAddress: '0xab0b841641fd546837a5e6ad98f796f66fd3ea2d'
  },
  {
    symbol: 'FORCER',
    name: 'Forcer',
    tokenAddress: '0xc1fb6c015fc535abd331d3029de76a62e412fb23',
    tokenDecimals: 4,
    exchangeAddress: '0x8dc13e59ad8bbe4424ba8c65ff1361543c195395'
  },
  {
    symbol: 'ERC',
    name: 'ERC20',
    tokenAddress: '0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb',
    tokenDecimals: 18,
    exchangeAddress: '0x728ad96d9db76339411131f4e533c9c7419210b0'
  },
  {
    symbol: 'ADT',
    name: 'AdToken',
    tokenAddress: '0xd0d6d6c5fe4a677d343cc433536bb717bae167dd',
    tokenDecimals: 9,
    exchangeAddress: '0x042f17156da0e2d7ee58f9f138f0e1c9880344c3'
  },
  {
    symbol: 'GOLD',
    name: 'Ethernet Gold',
    tokenAddress: '0xc9c7ba7618419e6dc57389358a0836ed75079315',
    tokenDecimals: 0,
    exchangeAddress: '0xf75338e853cd3cf1732cc6705cfcc7c9c634c94c'
  },
  {
    symbol: 'SUPER',
    name: 'Super Human',
    tokenAddress: '0x19686a8058adc1ce23c1a5fdd515ecd493b69e10',
    tokenDecimals: 0,
    exchangeAddress: '0x6542f8cdafcdb147bfdf3e8a78518eb92567df01'
  },
  {
    symbol: 'ETM',
    name: 'Ethermoney',
    tokenAddress: '0x28926c46bc5c0aeab39c72f7c1201bfb8056d509',
    tokenDecimals: 18,
    exchangeAddress: '0xdc1fcb2659c49fe1726692594d5f9afbe6fd1883'
  },
  {
    symbol: 'GOD',
    name: 'Nike GOD',
    tokenAddress: '0xf4b9dce551fc370593605ad91c5aa31f76b7b16b',
    tokenDecimals: 0,
    exchangeAddress: '0x2bda0887989bc0b4b2a2f530bcce45a61975e237'
  },
  {
    symbol: 'JAMIE',
    name: 'Jamie Bitcoin',
    tokenAddress: '0x417d2562603b7d3bae74ad3b03557e2f2e026cb2',
    tokenDecimals: 0,
    exchangeAddress: '0x6d4c200106b7fe27cbc643c18358f37646122385'
  },
  {
    symbol: 'NDC',
    name: 'NEVERDIE',
    tokenAddress: '0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970',
    tokenDecimals: 18,
    exchangeAddress: '0x4492b94cb6272ced76ae7c27b834e8e36e39fa74'
  },
  {
    symbol: 'DFB',
    name: 'DeFiBurn',
    tokenAddress: '0x939cafa8630b3876b092ec2b71772db183c11758',
    tokenDecimals: 18,
    exchangeAddress: '0x62b39dfc4b507ee771b7d2179a28add6adb5ed5e'
  },
  {
    symbol: 'HOLO',
    name: 'Hologram',
    tokenAddress: '0x80b02cac429730081571a9e5513635da7e8f76c0',
    tokenDecimals: 0,
    exchangeAddress: '0x9ed6d616d5ce50b0b489dab7769c108d426fbaf3'
  },
  {
    symbol: 'aDAI',
    name: 'Aave Interest bearing DAI',
    tokenAddress: '0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d',
    tokenDecimals: 18,
    exchangeAddress: '0x7cfab87aac0899c093235b342ac0e5b1acf159eb'
  },
  {
    symbol: 'BITS',
    name: 'Ethereum Bits',
    tokenAddress: '0x890196c13906ccbcc604ccb0ba48938c1217db5c',
    tokenDecimals: 0,
    exchangeAddress: '0x4355fdeac69301db38493a5c65f41fd4e4f06184'
  },
  {
    symbol: 'MNFT',
    name: 'MNFT',
    tokenAddress: '0xdb7eb3ede973665b1bb9f3016861e3255062e4ed',
    tokenDecimals: 4,
    exchangeAddress: '0x6ad2fb782ff5feba6acc6321bfd24e14d6db4f5e'
  },
  {
    symbol: 'PYRO',
    name: 'PYRO Network',
    tokenAddress: '0x14409b0fc5c7f87b5dad20754fe22d29a3de8217',
    tokenDecimals: 18,
    exchangeAddress: '0xf9a489e82cf4a090fd1fc766eb21edec249d7e71'
  },
  {
    symbol: 'VOKE',
    name: 'Voke',
    tokenAddress: '0xd858c11a1e990d7d02e0897b9b19dadef8171832',
    tokenDecimals: 4,
    exchangeAddress: '0x488e9d8195a08acabb30c14fddd35bab3a15be0f'
  },
  {
    symbol: 'BERT',
    name: 'Bertbit',
    tokenAddress: '0x6e9de2e85a8c1188995fecea289b3f22e489bb12',
    tokenDecimals: 4,
    exchangeAddress: '0x0476ceda88b20b5e0af1a598530db64667b03507'
  },
  {
    symbol: 'PUBLX',
    name: 'PUBLX',
    tokenAddress: '0x1a6658f40e51b372e593b7d2144c1402d5cf33e8',
    tokenDecimals: 18,
    exchangeAddress: '0x51178a657a183ac593c58e9b961eefd8e20bc9c2'
  },
  {
    symbol: '$PEW:DAI',
    name: 'PEW PEW PUT',
    tokenAddress: '0x51c5faedc00b0649918d2f26b6237646eeca1951',
    tokenDecimals: 18,
    exchangeAddress: '0xbcdf3d061bbcd6591e9fed1ad46c3f07d43654dc'
  },
  {
    symbol: 'WYS',
    name: 'wys Token',
    tokenAddress: '0xd8950fdeaa10304b7a7fd03a2fc66bc39f3c711a',
    tokenDecimals: 18,
    exchangeAddress: '0xb69f24efa39eace10055984c8f25bcfea1a94baa'
  },
  {
    symbol: 'aETH',
    name: 'Aave Interest bearing ETH',
    tokenAddress: '0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04',
    tokenDecimals: 18,
    exchangeAddress: '0xdf9da8616d462985f3207aebbc2fe1500087f1b6'
  },
  {
    symbol: 'STO',
    name: 'storeum',
    tokenAddress: '0xcb39c3502415152b2ec90ff07ee18cc94f681a72',
    tokenDecimals: 18,
    exchangeAddress: '0xc3e7d05555afcb36fac93fd42fe8692129074720'
  },
  {
    symbol: 'MAGIC',
    name: 'PET3R USES THE FORCE',
    tokenAddress: '0x51876a15aff97a68ed7df051ce11fade0b91b384',
    tokenDecimals: 1,
    exchangeAddress: '0x26b7ea8b1c8c5709c0852bf8fd8136afda4e9ed3'
  },
  {
    symbol: 'TSD',
    name: 'TimesDollar',
    tokenAddress: '0xe9865ee5fb3b9c4c99cfe865beb5c303ab4d9539',
    tokenDecimals: 5,
    exchangeAddress: '0x4565e521ec1ca1c32786e51c8062a94fcdf06581'
  },
  {
    symbol: 'CYMT',
    name: 'CyberMusic',
    tokenAddress: '0x78c292d1445e6b9558bf42e8bc369271ded062ea',
    tokenDecimals: 8,
    exchangeAddress: '0x1ed0fa36e0c411c2052a81702cbbfce772675729'
  },
  {
    symbol: 'MGC',
    name: 'More Gold Coin',
    tokenAddress: '0x174bfa6600bf90c885c7c01c7031389ed1461ab9',
    tokenDecimals: 18,
    exchangeAddress: '0x385eb222c05e9251a6979a076c54cd5a3b199ded'
  },
  {
    symbol: 'NANA',
    name: 'nana token',
    tokenAddress: '0x00fb4ce3f7edb8dd1a0ec5c6b2e6a656219e2ced',
    tokenDecimals: 2,
    exchangeAddress: '0x06f52a0a0620bc9ee5a6229d99a8c98336e1b19d'
  },
  {
    symbol: 'iBBT',
    name: 'iBBT Utility Token',
    tokenAddress: '0x691c25c461dafc47792b6e4d674fbb637bca1c6f',
    tokenDecimals: 18,
    exchangeAddress: '0xfc3155e9789c6ada9078e96c9fbf812b521f4087'
  },
  {
    symbol: 'MDT',
    name: 'MillionDollarToken',
    tokenAddress: '0x37f014c64d186eaf879c0033846b51924ce42584',
    tokenDecimals: 0,
    exchangeAddress: '0x35e0b74a6828afe72972a35ecc19305a7837fd2c'
  },
  {
    symbol: 'DEC',
    name: 'DarkEnergyCrystals',
    tokenAddress: '0x9393fdc77090f31c7db989390d43f454b1a6e7f3',
    tokenDecimals: 3,
    exchangeAddress: '0x32a40bf367bbf528c1b5605003cd2e33e00d6ad4'
  },
  {
    symbol: 'ZAPH',
    name: 'ZAPH Token',
    tokenAddress: '0x9f675e2c53ed88168e5928747caf31062da24f21',
    tokenDecimals: 4,
    exchangeAddress: '0xe042cb321e2fdb520ccc047337b7298f4972e7cb'
  },
  {
    symbol: 'AMIR',
    name: 'Amir',
    tokenAddress: '0xe8ed6fe37def6d06d8f3b7af06aafb5da6541094',
    tokenDecimals: 6,
    exchangeAddress: '0xa4cc94a1d23564da127d87d5602f0ab00539fafd'
  },
  {
    symbol: 'BOO',
    name: 'Bamboo Token',
    tokenAddress: '0x4336a5629bf30bee8bf571a6243cf50487b0de21',
    tokenDecimals: 10,
    exchangeAddress: '0x9afbdf81a5e6d00b1d04c915998a5aea88ab71f4'
  },
  {
    symbol: 'HBC',
    name: 'HOPE BILLION COIN',
    tokenAddress: '0xc7c9f20a6268cfe4b3f28f279c2da273f7ec189a',
    tokenDecimals: 18,
    exchangeAddress: '0xadf852e0ce8b611a38b2d15b946f33ec646c444b'
  },
  {
    symbol: 'YGG',
    name: 'YGG',
    tokenAddress: '0xc254664c7408dde413969fbcd593328f6099e32f',
    tokenDecimals: 4,
    exchangeAddress: '0xda556c0c74e66039ca9fe257ce3ddeb72f77a2e3'
  },
  {
    symbol: 'LIB',
    name: 'BankLife',
    tokenAddress: '0x3fd2e747cea0e8a78f1827ea2ffd3334628a600b',
    tokenDecimals: 18,
    exchangeAddress: '0x197155ec827864075f3c83e9597d005c69e63b80'
  },
  {
    symbol: 'SWL',
    name: 'Swiftlance token',
    tokenAddress: '0x8cd480260a47f04589670a313d27a15b321ad266',
    tokenDecimals: 8,
    exchangeAddress: '0xe1048f6b00565b2e575b6f4f0c26ff3ac25e98f8'
  },
  {
    symbol: 'BFF',
    name: 'BffDoom',
    tokenAddress: '0xcabf96a41a4d98ee91d4fb1004dc4b3b8548cb53',
    tokenDecimals: 8,
    exchangeAddress: '0xffaa84a2c03e7ac86626d0b0e37f0e3fe1b78e00'
  },
  {
    symbol: 'TMB',
    name: 'TemboCoin',
    tokenAddress: '0x1de09690e0d3c75c22cd19acc1aebde46bbc7d25',
    tokenDecimals: 0,
    exchangeAddress: '0x64d80812093be374e014406b73caf60994b2be96'
  },
  {
    symbol: 'coby',
    name: 'coby Token',
    tokenAddress: '0xd3b5c0d63475309201ef9acd0f6a4542db119335',
    tokenDecimals: 1,
    exchangeAddress: '0xa0619040bc67668c27e10b6dbb5f132815fd5575'
  },
  {
    symbol: 'SIM',
    name: 'SimpleToken',
    tokenAddress: '0x8f1b950d4eed71fa5f7d16e01e7905a518fbed4a',
    tokenDecimals: 18,
    exchangeAddress: '0x0d0d9fef65f845551f50b9c12bdea611507d1569'
  },
  {
    symbol: 'JULIEN',
    name: 'Julien',
    tokenAddress: '0xe6710e0cda178f3d921f456902707b0d4c4a332b',
    tokenDecimals: 4,
    exchangeAddress: '0x4ce8d670c0ccea741829551b347e2ebabdba638f'
  },
  {
    symbol: 'PLAT',
    name: 'BitGuild PLAT',
    tokenAddress: '0x7e43581b19ab509bcf9397a2efd1ab10233f27de',
    tokenDecimals: 18,
    exchangeAddress: '0x9b40c045cc0e2e8ed958cb79f8b7c403bf960f2f'
  },
  {
    symbol: 'ZXC',
    name: '0xcert Protocol Token',
    tokenAddress: '0x83e2be8d114f9661221384b3a50d24b96a5653f5',
    tokenDecimals: 18,
    exchangeAddress: '0xb263893655286dafc58c1d1ee0670ef296c2488c'
  },
  {
    symbol: 'IAN',
    name: 'Ian Coin',
    tokenAddress: '0x19c506211a26a67ad7e6d45cd274bad1863f8667',
    tokenDecimals: 18,
    exchangeAddress: '0x649281c5ae2134cab9834cca30653e5c63424051'
  },
  {
    symbol: 'MARS',
    name: 'Mars',
    tokenAddress: '0x5d3a4b00db536f7e2be988bc84d92598ed116217',
    tokenDecimals: 18,
    exchangeAddress: '0x8debd17284a21865819d1ce1fb2dbcef2a86a616'
  },
  {
    symbol: 'LAW',
    name: 'Plutocracy',
    tokenAddress: '0x9b03f09d259fba1ad3111729bdb8ffa55f49190f',
    tokenDecimals: 0,
    exchangeAddress: '0x33e0a5a6727ebd1b0c6874e1332c557916d0b047'
  },
  {
    symbol: 'YOT',
    name: 'Yo Token',
    tokenAddress: '0xa817a9bcccb3cc79a588879214357e0b4a1a2e28',
    tokenDecimals: 18,
    exchangeAddress: '0x529744fd99f9684c9bfa73dc0adb873238dcd1b4'
  },
  {
    symbol: 'YUNG',
    name: 'YUNG',
    tokenAddress: '0xbe47f50c85d9f3da055bc8cddaa33dea16926d9d',
    tokenDecimals: 18,
    exchangeAddress: '0xbb51faef044941f996f2db81cf7270845a76156d'
  },
  {
    symbol: 'YGG',
    name: 'YGG',
    tokenAddress: '0x4ff2b0f58bc8f24e5cfb2a3ef4500162ada1f6da',
    tokenDecimals: 4,
    exchangeAddress: '0xaae7426b8d24cda480329609379cea29f76c2cb3'
  },
  {
    symbol: 'TRUSD',
    name: 'TrustUSD',
    tokenAddress: '0xdd436a0dce9244b36599ae7b22f0373b4e33992d',
    tokenDecimals: 18,
    exchangeAddress: '0x041ac4e52e8e83f3f389fe7e419fa4eecd4dfb2b'
  },
  {
    symbol: 'WEEBS',
    name: 'Weebs',
    tokenAddress: '0x1074608e45b42eb25d1e97382e8a1d151987eaba',
    tokenDecimals: 4,
    exchangeAddress: '0x4d11123334ac820862162bfbc010fffc2a73ee57'
  },
  {
    symbol: 'CALVIN',
    name: 'Calvin',
    tokenAddress: '0xdc8092aaf83e00ebf9b01a2e90b7b7ef867ba503',
    tokenDecimals: 4,
    exchangeAddress: '0x657de502ee9fed80d5496a1da0007fe72b2bd18b'
  },
  {
    symbol: 'DRPU',
    name: 'DRP Utility',
    tokenAddress: '0xe30e02f049957e2a5907589e06ba646fb2c321ba',
    tokenDecimals: 8,
    exchangeAddress: '0x0fee4ac8f7e8239e02dc1c6cdc02b78e1b289839'
  },
  {
    symbol: 'ZERO',
    name: 'Zero Coin',
    tokenAddress: '0xc975ebf130ad3ded5545216aaf23191aba69f291',
    tokenDecimals: 0,
    exchangeAddress: '0x901cb3a323221fe4a2b392c0a5c59027cec08ae6'
  },
  {
    symbol: 'XAI',
    name: 'AICoin',
    tokenAddress: '0x268b7976e94e84a48bf8b2b57ba34b59ed836a74',
    tokenDecimals: 8,
    exchangeAddress: '0x0573cd872ff6b6efd20f00e7a9fb02fcd7cd9faf'
  },
  {
    symbol: 'BLAQ',
    name: 'BLAQUE',
    tokenAddress: '0x7a7f8d1a19e9a9547035e494d204448bb1388fb5',
    tokenDecimals: 18,
    exchangeAddress: '0xaa3eed5178d3239a8d9faf11f16ae3adbbc7ea7e'
  },
  {
    symbol: 'BRC',
    name: 'Brettcoin',
    tokenAddress: '0x4777819cccf1a8d1964a27963b7341c3aa653051',
    tokenDecimals: 18,
    exchangeAddress: '0x868c87253a02c48ea3c3b1364587620cbc680627'
  },
  {
    symbol: 'TRD',
    name: 'Thirdhalf.com Token',
    tokenAddress: '0x4a479bc7330719bf843634f8fb1c53ea88884e8f',
    tokenDecimals: 18,
    exchangeAddress: '0x5a463b374b486c2055e6f392c8895dd3e1b2e656'
  },
  {
    symbol: 'DM',
    name: 'Digitale Mark',
    tokenAddress: '0xbd5dd4d4c51137ee47d080d19cd13670c90df2e9',
    tokenDecimals: 2,
    exchangeAddress: '0xa150f7e63e3f2053fc493153b7a43d14d9698ff8'
  },
  {
    symbol: 'AIRDROP',
    name: 'AirdropToken',
    tokenAddress: '0xba7435a4b4c747e0101780073eeda872a69bdcd4',
    tokenDecimals: 18,
    exchangeAddress: '0x6acb64fc1e111c47ac9a7c2767459d9d3ed062d9'
  },
  {
    symbol: 'DGO',
    name: 'Dinngo',
    tokenAddress: '0x6d38574be6c230272daad16fa5f291f825bd0da1',
    tokenDecimals: 18,
    exchangeAddress: '0xf04f5df7e9754482cf9dd76b52bc3693e231e399'
  },
  {
    symbol: 'CTO',
    name: 'CotteToken',
    tokenAddress: '0x7fd483c9f72cf1bf9be2852810e50def29ff2f7f',
    tokenDecimals: 18,
    exchangeAddress: '0xcb4c79e50da5aa01d8016218bcdb8b2e1c3f191f'
  },
  {
    symbol: 'SLI',
    name: 'Sleipnirwallet',
    tokenAddress: '0x625ce07842a307f190c93316e8215073ce6bd4c4',
    tokenDecimals: 6,
    exchangeAddress: '0x1ac7f6257710c788631ec4e35fda7bdd27f82e0b'
  },
  {
    symbol: 'CAMO',
    name: 'CAMO',
    tokenAddress: '0xe86a746330b0b691323d2cbb5c140f77d7f198a4',
    tokenDecimals: 4,
    exchangeAddress: '0xe5f208b9f709d42c0e43658f34b9b6d6f531e39f'
  },
  {
    symbol: 'HLS',
    name: 'Hungry of Loves',
    tokenAddress: '0x3a32a83b1a0a6f266bc54069e8677fefc4059da9',
    tokenDecimals: 18,
    exchangeAddress: '0x406153404823e61003d6f302089621c264bdb728'
  },
  {
    symbol: 'FDAI',
    name: 'Fake DAI',
    tokenAddress: '0x69215a5c0cf2e69b0803ca283a5ad6dcc0a105bc',
    tokenDecimals: 18,
    exchangeAddress: '0x97a5df8bcc5c297067fb807409139b5038684111'
  },
  {
    symbol: 'MP',
    name: 'Mark Powell',
    tokenAddress: '0x344c00d6ef1eaf1c0d592915ca976a71a7a95715',
    tokenDecimals: 18,
    exchangeAddress: '0x6445075bbf02c597a5a2ab29c73292e64fc7ede9'
  },
  {
    symbol: 'MTX',
    name: 'Matrix',
    tokenAddress: '0x3154bf7cbb077e1a46eadf4c1ed019157e8e0687',
    tokenDecimals: 18,
    exchangeAddress: '0x8313d98f9ed87e37341c72d47271c6a197d878cf'
  },
  {
    symbol: 'MCX',
    name: 'MachiX Token',
    tokenAddress: '0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8',
    tokenDecimals: 18,
    exchangeAddress: '0xc4c18dec88a6576a8e345887fb1a229e97ba55e7'
  },
  {
    symbol: 'BOL',
    name: 'Freight Trust Protocol',
    tokenAddress: '0xefe98765da3824ef4a5358ba798cec87c13d8c62',
    tokenDecimals: 18,
    exchangeAddress: '0xe0759863816a0fa5ece145336ae8b72ad2fc3d2f'
  },
  {
    symbol: 'AS1',
    name: 'Andy Simon',
    tokenAddress: '0xe3dc650b0054c5fd4aea05cb110c1c19733bfe05',
    tokenDecimals: 18,
    exchangeAddress: '0xd78ef5938ffbec6edde49d2524bde929cf47ec8a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x9bf7805f5deb58dbb881e05b1af09819f8e90eaa',
    tokenDecimals: 18,
    exchangeAddress: '0x6e48a8c8a0407652261564e49ed2a6915a48f028'
  },
  {
    symbol: 'ROOBEE',
    name: 'ROOBEE',
    tokenAddress: '0xa31b1767e09f842ecfd4bc471fe44f830e3891aa',
    tokenDecimals: 18,
    exchangeAddress: '0xc48ded68b38efb8f9f221d17d7820ba99c58b7cb'
  },
  {
    symbol: 'LBRTY',
    name: 'LIBERTY',
    tokenAddress: '0xb1f2b122139dacd2ad29840e92cbc38716568994',
    tokenDecimals: 18,
    exchangeAddress: '0xc86b9736d32eefa307282e7da92d6b734bb345ef'
  },
  {
    symbol: 'NINA',
    name: 'Christina',
    tokenAddress: '0x17b76cc75d3e2d8e2d3e595e5b20b8b1d83fcbde',
    tokenDecimals: 18,
    exchangeAddress: '0x1418f2134ed80dc06c0159f5ab4e235fa2a03f94'
  },
  {
    symbol: 'DMEX',
    name: 'DMEX Token',
    tokenAddress: '0x45fcf164baffbefaee70a368c96de6f33bdccab0',
    tokenDecimals: 18,
    exchangeAddress: '0x6ca505899b49533d23a26737c2efbefc3e5e7350'
  },
  {
    symbol: 'SEM',
    name: 'Sem',
    tokenAddress: '0xd129364a82eb0d901ac7ee1998f39b4419f7721c',
    tokenDecimals: 18,
    exchangeAddress: '0xd8f656799bb28608beb168709199913c1ffcdd63'
  },
  {
    symbol: 'ELIX',
    name: 'elixir',
    tokenAddress: '0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8',
    tokenDecimals: 18,
    exchangeAddress: '0x1bafbe8963131289f466638b8b948a25236c893a'
  },
  {
    symbol: 'UQn',
    name: 'Uqinzen',
    tokenAddress: '0xac298353ab790e668986ac9e2d3a9ddfc600ff78',
    tokenDecimals: 2,
    exchangeAddress: '0x2298a208c509a7ab0879b8d37100cd1474b136ca'
  },
  {
    symbol: 'CALLIL',
    name: 'CALLIL',
    tokenAddress: '0x92c5fb8031d6d0caaf053e88b099c5e1701c1116',
    tokenDecimals: 18,
    exchangeAddress: '0xb3899d8b45ac320ffd07d8e3cf1a26086faaddde'
  },
  {
    symbol: 'JJJ',
    name: 'Jonathan Joseph',
    tokenAddress: '0x3c35132d0b129f068fdfa65b2c4d265fa5d8cea6',
    tokenDecimals: 4,
    exchangeAddress: '0xb94ca1547e01376b1fbae749928b3db4bd22d2cc'
  },
  {
    symbol: 'UKI',
    name: 'UK Investments',
    tokenAddress: '0xbdf46502dd5001ed841ad741c8aac4b4e322b320',
    tokenDecimals: 10,
    exchangeAddress: '0x08f38eaa40c7089960591baa2b3aa912c6b7a98a'
  },
  {
    symbol: 'EAI',
    name: 'ethereumAI Token',
    tokenAddress: '0x2f102963f61acf1ca4badfe82057b440f2fc722c',
    tokenDecimals: 6,
    exchangeAddress: '0x390f0c2bd0fbf2e876a2269a14700f0183ce9b28'
  },
  {
    symbol: 'GST',
    name: 'GAMESTARS TOKEN',
    tokenAddress: '0x67a9099f0008c35c61c00042cd9fb03684451097',
    tokenDecimals: 18,
    exchangeAddress: '0xd8c676ee01d6429b94d1b4b6b328907dbc613f3b'
  },
  {
    symbol: 'SRH',
    name: 'SRH',
    tokenAddress: '0xc350e846e2c57f9eece90febc253d14c8080871b',
    tokenDecimals: 18,
    exchangeAddress: '0x685a4a592bfac11a91c8c940bf34f7cd7be6f6f8'
  },
  {
    symbol: 'BNANA',
    name: 'Chimpion',
    tokenAddress: '0x07ef9e82721ac16809d24dafbe1792ce01654db4',
    tokenDecimals: 18,
    exchangeAddress: '0xab9488f145aaa84d57f2b7b595e14ff6cb810674'
  },
  {
    symbol: 'CRAD',
    name: 'CRAD CASH',
    tokenAddress: '0x608f006b6813f97097372d0d31fb0f11d1ca3e4e',
    tokenDecimals: 18,
    exchangeAddress: '0xd883926830cc566f8ecc415ae6513d2829422574'
  },
  {
    symbol: 'WOPS',
    name: 'Westerops',
    tokenAddress: '0x87ee5f6fa770311842c007a748260ddbe2ca930f',
    tokenDecimals: 6,
    exchangeAddress: '0x237c8060b3c5a63cc3080ad8f4aabca03ecf4d11'
  },
  {
    symbol: 'STS',
    name: 'Status Security',
    tokenAddress: '0x2193b9f2b5e5051e41c32c71b25587d6a6f045c8',
    tokenDecimals: 18,
    exchangeAddress: '0xa192439e9510cb9198b11132cd823842b13f7839'
  },
  {
    symbol: 'TEN',
    name: 'Tithe',
    tokenAddress: '0xb45cecdf04a0cd7dc30181572e2352b510ef7b93',
    tokenDecimals: 18,
    exchangeAddress: '0x6914e8e0179d6dca70b2c3c76f5ff502a2d8b023'
  },
  {
    symbol: 'EDO',
    name: 'Eidoo Token',
    tokenAddress: '0xced4e93198734ddaff8492d525bd258d49eb388e',
    tokenDecimals: 18,
    exchangeAddress: '0x1e8f3b01ceb7544db5d47a251c2d7942ac257fa4'
  },
  {
    symbol: 'MGO',
    name: 'MobileGo Token',
    tokenAddress: '0x40395044ac3c0c57051906da938b54bd6557f212',
    tokenDecimals: 8,
    exchangeAddress: '0x145a085a1432b86207e2d3844ea14a3679cf6112'
  },
  {
    symbol: 'DMEX',
    name: 'DMEX Token',
    tokenAddress: '0x13bfb9164746afecdd0d5db71d037328661fc49f',
    tokenDecimals: 18,
    exchangeAddress: '0x6089e4a1ae7754334aa5a91cf5ab16a34029b518'
  },
  {
    symbol: 'MNE',
    name: 'minereum',
    tokenAddress: '0x1a95b271b0535d15fa49932daba31ba612b52946',
    tokenDecimals: 8,
    exchangeAddress: '0xd6a1271f0ea94217bb73ca813b72404c08475682'
  },
  {
    symbol: 'NOKU',
    name: 'NOKU',
    tokenAddress: '0x1fc52f1abade452dd4674477d4711951700b3d27',
    tokenDecimals: 18,
    exchangeAddress: '0x9a20550f841e930131bf8528c6c87f3afa191629'
  },
  {
    symbol: 'IKTK',
    name: 'IKTkroner',
    tokenAddress: '0x8af44e92c0236422934e4224e7e252ce0e21735b',
    tokenDecimals: 0,
    exchangeAddress: '0xf291dfe9d6533a7305bebc3e7a2d47f25e4123fe'
  },
  {
    symbol: 'SCOTT',
    name: 'SCOTT',
    tokenAddress: '0x27fd686db10e0ae047fe8fe1de9830c0e0dc3cfa',
    tokenDecimals: 4,
    exchangeAddress: '0x76f455c38ab1fef84cf27f51065ee1374fa400e5'
  },
  {
    symbol: 'USD',
    name: 'USD',
    tokenAddress: '0x22a39c2dd54b71ac884657bb3e37308abe2d02e1',
    tokenDecimals: 0,
    exchangeAddress: '0x8085d4f288d36c20a632f27361ccc74e9b4bb725'
  },
  {
    symbol: 'HGBT',
    name: 'CrazyBoxToken',
    tokenAddress: '0x00471ae525110087bbc6847cb6e9691bacd13c89',
    tokenDecimals: 8,
    exchangeAddress: '0xe9008308f4401bde01fd55b8722fe0f7eec128ac'
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    tokenAddress: '0x390bf02a7e842ed3ffd22be931ec87430428f1d8',
    tokenDecimals: 18,
    exchangeAddress: '0xb8aae1eeac9485953ce7ae84a25dc992bc55feca'
  },
  {
    symbol: 'CARD',
    name: 'Cardstack',
    tokenAddress: '0x954b890704693af242613edef1b603825afcd708',
    tokenDecimals: 18,
    exchangeAddress: '0x93d2ce3df3f79f5accadabd7647a42ffd1fe6f78'
  },
  {
    symbol: 'eUSD',
    name: 'Eurodollar',
    tokenAddress: '0x8c4f045c35288f899fe7b034dbe13bab2bb454ab',
    tokenDecimals: 18,
    exchangeAddress: '0x91b7fd1f4d6a28d782299fabd00a6c7adff77564'
  },
  {
    symbol: 'B0T',
    name: 'The Emperial Currency',
    tokenAddress: '0xdd60f9dd5b891b728955149bd59f42c6513c8dc6',
    tokenDecimals: 18,
    exchangeAddress: '0x1b399e4052d715997659d3a6a6507c5b22ed66b6'
  },
  {
    symbol: 'PLA',
    name: 'PlayChip',
    tokenAddress: '0x0198f46f520f33cd4329bd4be380a25a90536cd5',
    tokenDecimals: 18,
    exchangeAddress: '0xdf28084119560321bbbd45d1da4aa83d3112e153'
  },
  {
    symbol: 'UTNP',
    name: 'UTN-P: Universa Token',
    tokenAddress: '0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7',
    tokenDecimals: 18,
    exchangeAddress: '0x020049960ca05a7e76aefe8a7dba2b557bfc3259'
  },
  {
    symbol: 'SKATE',
    name: 'Sk8coin',
    tokenAddress: '0x8f01ebcdc9972cf3c7ea61ddf57d124846896db8',
    tokenDecimals: 18,
    exchangeAddress: '0xd7f67c9340dda558905b9f773e97e4fe86e2e3dd'
  },
  {
    symbol: 'USDCUSDB',
    name: 'USD//C Smart Relay Token',
    tokenAddress: '0x976a003d2e8ba230e9c7fb65da5de448a4bc2d0d',
    tokenDecimals: 6,
    exchangeAddress: '0xf161855f78e71838ade1cf9ca90566220758b534'
  },
  {
    symbol: 'BDP',
    name: 'BidiPass',
    tokenAddress: '0x593114f03a0a575aece9ed675e52ed68d2172b8c',
    tokenDecimals: 18,
    exchangeAddress: '0xa6391e46e686976cd2101c1353919211e8c00705'
  },
  {
    symbol: 'CURA',
    name: 'CuraDAI',
    tokenAddress: '0x0a4b2d4b48a63088e0897a3f147ba37f81a27722',
    tokenDecimals: 18,
    exchangeAddress: '0xc07b2fba5ec3cb810244f8499943564455322dc9'
  },
  {
    symbol: 'CHSB',
    name: 'SwissBorg Token',
    tokenAddress: '0xba9d4199fab4f26efe3551d490e3821486f135ba',
    tokenDecimals: 8,
    exchangeAddress: '0x897ee0b6c3ef0168052a3f599b1a74b5a02f4366'
  },
  {
    symbol: 'RPAI',
    name: 'Painthereum RED',
    tokenAddress: '0x96f4c85e7830c755981c12fb7c702ef580047b2a',
    tokenDecimals: 18,
    exchangeAddress: '0xdb4b2df12487acf6d7a2bc8600e9a65c9ee4e60c'
  },
  {
    symbol: 'GPAI',
    name: 'Painthereum GREEN',
    tokenAddress: '0x3865cb3cb00041d7e1b4f8189aa73a8cc590c28c',
    tokenDecimals: 18,
    exchangeAddress: '0x0d61a26bc6a7e5e9ae4f4759c5e3e5c5f1b0c69b'
  },
  {
    symbol: 'BPAI',
    name: 'Painthereum BLUE',
    tokenAddress: '0x3c023a75da4635ce931778ce24a36b041e503eff',
    tokenDecimals: 18,
    exchangeAddress: '0xb63935e23dc8f6f7410a5d253aecd474cc3ec19a'
  },
  {
    symbol: 'BBSC',
    name: 'BaoBoShiCoin',
    tokenAddress: '0xf89ba2862dfae69bc2546568d56b087d7454c9c9',
    tokenDecimals: 18,
    exchangeAddress: '0x7247326e46cfb46bbe704e36ff9bdf40866aeff0'
  },
  {
    symbol: 'PSC',
    name: 'PRODATA SHARES COIN',
    tokenAddress: '0x6744ebb5214d06ec62a310f72a2e8e0770180fc7',
    tokenDecimals: 18,
    exchangeAddress: '0x6947d6b18db1a2468a3aa888a5a2d64b0f8b6dbb'
  },
  {
    symbol: 'HCC',
    name: 'HOPE COLLATERAL COIN',
    tokenAddress: '0x3193271d8cb966234ca9bd1eda066fdc2dddae30',
    tokenDecimals: 18,
    exchangeAddress: '0xaa87891bd4c16b8cb35532a379ab40ad343375d2'
  },
  {
    symbol: 'PEW',
    name: 'BroFistCoin',
    tokenAddress: '0xa701122c1b67220a8b6883d03c8ad67896b12466',
    tokenDecimals: 8,
    exchangeAddress: '0x80eba0fd9438b38486ca83206fc4a12951cb6cf3'
  },
  {
    symbol: 'BKMcoffee',
    name: '书影币',
    tokenAddress: '0x1ce167d0e32f05af1d7ec02769161c70bdf84609',
    tokenDecimals: 3,
    exchangeAddress: '0xcea1b0209ad24a10ca2b350459c358a1590693f7'
  },
  {
    symbol: 'CNAC',
    name: 'Crypto is not a Crime',
    tokenAddress: '0xfb17aada497f76cae49326f9c19d6e661888d70b',
    tokenDecimals: 18,
    exchangeAddress: '0x5909e61cafcc8fa307ce0ba5812cd602c01ad093'
  },
  {
    symbol: 'real',
    name: 'realcoin',
    tokenAddress: '0x8e656797a8c494ab9148b21e30250ced0afd9f17',
    tokenDecimals: 3,
    exchangeAddress: '0xff28aec0850738010cfafdeafeb388c2ac648c2d'
  },
  {
    symbol: 'TJL',
    name: 'Timo Lehes',
    tokenAddress: '0xd190167c333069ba4f92f6336b884045b1160a54',
    tokenDecimals: 18,
    exchangeAddress: '0x5f9a13df22c691e7880e8864ce84675b3cfa8971'
  },
  {
    symbol: 'CNSL',
    name: 'Counsel',
    tokenAddress: '0xea0bea4d852687c45fdc57f6b06a8a92302baabc',
    tokenDecimals: 18,
    exchangeAddress: '0x4389d757fa071fd714fd74afdcc7da384c9a7ede'
  },
  {
    symbol: 'OHFF',
    name: 'OHFF',
    tokenAddress: '0xf0aabeacbc2d91baf21bda0006c9d65de736053a',
    tokenDecimals: 4,
    exchangeAddress: '0x1ea22dfec6f1022d053e7fe0909e3a42fe4167dd'
  },
  {
    symbol: 'null',
    name: 'HEXTEWKEN',
    tokenAddress: '0xd495cc8c7c29c7fa3e027a5759561ab68c363609',
    tokenDecimals: 8,
    exchangeAddress: '0xdd1f46dbc88ba7ebcb0edcaf023643d2c5098850'
  },
  {
    symbol: 'JT',
    name: 'JungleToken',
    tokenAddress: '0x285ce65705d26c28f7a720cf3bfe8b868c82a48f',
    tokenDecimals: 18,
    exchangeAddress: '0xa31a0b8e8a73f0cdc625436d516c9bed91529ace'
  },
  {
    symbol: 'BLK',
    name: 'BLANK',
    tokenAddress: '0x6fbf4e57ec93cdd33c74762f7d99694228a68cd2',
    tokenDecimals: 2,
    exchangeAddress: '0xacbd1201ca450f646ff2f04bc7d73d5252fd5de5'
  },
  {
    symbol: 'DCO',
    name: 'Decentralized chain offer',
    tokenAddress: '0x65668f5d2b4ec78e31eb4db47d2258320761de72',
    tokenDecimals: 18,
    exchangeAddress: '0x3fc9c3ad3853c54109f9ff6b262127e234d2a1df'
  },
  {
    symbol: 'JOB',
    name: 'Jobchain',
    tokenAddress: '0x17280da053596e097604839c61a2ef5efb7d493f',
    tokenDecimals: 8,
    exchangeAddress: '0xf3311aa6c9aa3b4663343ef68aa884561afa73ef'
  },
  {
    symbol: 'SCS',
    name: 'Smart Contract Service',
    tokenAddress: '0xa662e2fa780c4cdaa5134435824dc2f16ad6f329',
    tokenDecimals: 18,
    exchangeAddress: '0xcc788a4db4f1781eed07650ad17de90f979b7af0'
  },
  {
    symbol: 'FENIX',
    name: 'fenix',
    tokenAddress: '0x0b0d58ac4ad856c4600a233c8169dba39d7326ab',
    tokenDecimals: 18,
    exchangeAddress: '0xd2537136e12dc2c3a89194258f8401844e2db87c'
  },
  {
    symbol: 'RV',
    name: 'Herve',
    tokenAddress: '0xe97d2d78c51c277eddc110cf3869861359968b99',
    tokenDecimals: 18,
    exchangeAddress: '0x31c7a4fa09dfaaf0a6d595f4a0161f43da775b3d'
  },
  {
    symbol: 'LCX',
    name: 'LCX',
    tokenAddress: '0x037a54aab062628c9bbae1fdb1583c195585fe41',
    tokenDecimals: 18,
    exchangeAddress: '0xade1a79d149aee8536cb6c422571c4bf7ec62a11'
  },
  {
    symbol: 'CTW',
    name: 'CTWorld Token',
    tokenAddress: '0x29d82a45143569e02a0566f94f94b38f946858db',
    tokenDecimals: 18,
    exchangeAddress: '0x26a021133d1686476966f9882cae832508e3c083'
  },
  {
    symbol: 'CB',
    name: 'Chris Blec',
    tokenAddress: '0x2043f5f3e44c76e6fb9266c7247cef569172d664',
    tokenDecimals: 18,
    exchangeAddress: '0x1fe2ee65e684c246099001751f01cd17736a8490'
  },
  {
    symbol: 'SREUR',
    name: 'EURO TOKEN',
    tokenAddress: '0x7a0e91c4204355e0a6bbf746dc0b7e32dfefdecf',
    tokenDecimals: 8,
    exchangeAddress: '0x09212cbfcd3d2aeefb6c605de6c1a497d71f0e63'
  },
  {
    symbol: 'ZAM',
    name: 'Zamrud',
    tokenAddress: '0x9d3571f685e0fec61925b248977a09f8da047f48',
    tokenDecimals: 18,
    exchangeAddress: '0xa301e30b899e9d8c51e71435ae472566df34c26e'
  },
  {
    symbol: 'CRF',
    name: 'CRYPTOFRIDGE',
    tokenAddress: '0xdb399d5d44cfb9cb7cbbdc64be1dc3b978ca1f06',
    tokenDecimals: 18,
    exchangeAddress: '0x541eb6e395f2bbb5ae8deeb93af7750a252fdae7'
  },
  {
    symbol: 'TRON',
    name: 'Bitcoin Tron',
    tokenAddress: '0x9693dded163393f18810c7a799c662998bf8bf3e',
    tokenDecimals: 18,
    exchangeAddress: '0x0b684f0755c261b027c0258bf1ff077f7b33aa0c'
  },
  {
    symbol: 'EVC',
    name: 'Evcoin',
    tokenAddress: '0x6957cbcf451fd1b1dc04dc67b7682d62fba9e2ad',
    tokenDecimals: 3,
    exchangeAddress: '0xd4291adf8982cf9fd1aaab8fe12f398c1f10530d'
  },
  {
    symbol: 'ALEX',
    name: 'AlexMasmej',
    tokenAddress: '0x8ba6dcc667d3ff64c1a2123ce72ff5f0199e5315',
    tokenDecimals: 4,
    exchangeAddress: '0xb49c53f2e459ce96b04318610abd77f4e83113db'
  },
  {
    symbol: 'SNC',
    name: 'SunContract',
    tokenAddress: '0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404',
    tokenDecimals: 18,
    exchangeAddress: '0x0f0c85fc12ac26059f2e991716d6ce9a9437e121'
  },
  {
    symbol: 'ART',
    name: 'ART Token',
    tokenAddress: '0x33e1b26d699d923e4cdba286cc5783d3c04831c3',
    tokenDecimals: 0,
    exchangeAddress: '0x468188c85df476d0c4037318de0d38162d0c3786'
  },
  {
    symbol: 'TBCUSDB',
    name: 'ThunderBoltCoin Smart Relay Token',
    tokenAddress: '0x323e4d8097b0a58ab8210ac6efcc4a89285cfc6b',
    tokenDecimals: 18,
    exchangeAddress: '0x3d3f82c19774bff701420244091bc14a75fb07da'
  },
  {
    symbol: 'LIT',
    name: 'LITonium',
    tokenAddress: '0x2e3c062e16c1a3a04ddc5003c62e294305d83684',
    tokenDecimals: 2,
    exchangeAddress: '0x2f31baa72804ce5a32968646a1e44806162e7954'
  },
  {
    symbol: 'cDAIUSDC',
    name: 'Stablecoins.exchange cDAI/cUSDC',
    tokenAddress: '0x3740fb63ab7a09891d7c0d4299442a551d06f5fd',
    tokenDecimals: 18,
    exchangeAddress: '0x8174c73908e5c61d7158dc291729778ea99e078a'
  },
  {
    symbol: 'REAK',
    name: 'Reakoin',
    tokenAddress: '0xa5b2dbba9a3c04ec4f56cbe16520debecbf35545',
    tokenDecimals: 18,
    exchangeAddress: '0x6d74b580df8829f20ba570c1cde4468ddec35b7c'
  },
  {
    symbol: 'NMP',
    name: 'Neuromorphic',
    tokenAddress: '0x4d6b9f281af31916a0f16d1cea2ec7384851eaab',
    tokenDecimals: 18,
    exchangeAddress: '0xdf6f8fdde0965862a7da5db0649e7c523b719f78'
  },
  {
    symbol: 'SCRO',
    name: 'JustEscrowCoin',
    tokenAddress: '0x0a133dfa1f65ff6f834205ed43d66344306fa02c',
    tokenDecimals: 18,
    exchangeAddress: '0x6bbcae545a4b26e64883deaee14dab5a17b9d127'
  },
  {
    symbol: 'RMBC',
    name: 'RMBC',
    tokenAddress: '0x4ad280a2f38404ce1fd75556f3b9951e63acaf03',
    tokenDecimals: 6,
    exchangeAddress: '0xcae4f1407ee7f129ce5f06d010260c3570bcfe28'
  },
  {
    symbol: '0xETH',
    name: '0xEthereum Token',
    tokenAddress: '0x36d06ccc92cefd9ec38fe759d957da0b0ecc249f',
    tokenDecimals: 8,
    exchangeAddress: '0x918e7dcb95226f9ed937f7a05b93c1e29aeaa74b'
  },
  {
    symbol: 'UNI',
    name: 'Unipot',
    tokenAddress: '0x97c795a8028b96e5e2a508468b1c132fca5caa19',
    tokenDecimals: 8,
    exchangeAddress: '0xb3e22422398aad8c7b12ae25766ad37e56fb8715'
  },
  {
    symbol: 'VTX',
    name: 'VorteX Network',
    tokenAddress: '0xd957e08ac5421e2c28510586b57d095e5094836a',
    tokenDecimals: 18,
    exchangeAddress: '0x0085146bd3b67f9b80c54640cb25185d685a2d7e'
  },
  {
    symbol: 'DLH',
    name: 'DELHUMEAU',
    tokenAddress: '0x0651e4a1de38691677f2c82bd89793a8d42e7293',
    tokenDecimals: 18,
    exchangeAddress: '0x685e22b182e4766fc28ba87eccc480cf871dd432'
  },
  {
    symbol: 'HD',
    name: 'Herve Delhumeau',
    tokenAddress: '0x667e1a2f05f15897fb74331031b9f829d5d3d7e5',
    tokenDecimals: 18,
    exchangeAddress: '0x0f85e8ceb45bc5281834b1a80deef05ecfc7e003'
  },
  {
    symbol: 'FICO',
    name: 'FIND Coin',
    tokenAddress: '0xe0132738036603760c0e9cb8aeb502a32c1b3348',
    tokenDecimals: 18,
    exchangeAddress: '0x44f1e90ff2a3575137810f6cfea2dc84385e9d40'
  },
  {
    symbol: 'HOWL',
    name: 'Howl',
    tokenAddress: '0xd1dc64b4bdaab103a72bf4778a33740704aff380',
    tokenDecimals: 4,
    exchangeAddress: '0xaf1785b6f83ba096d311543f72951e040a417da2'
  },
  {
    symbol: 'SCT',
    name: 'SatoshiCrypto',
    tokenAddress: '0x3f012e0ab3ff4797231faf20eb71f682240d1b1f',
    tokenDecimals: 18,
    exchangeAddress: '0x1a565ddf5dcbe96dc94371a814793cf9ac9d63fa'
  },
  {
    symbol: 'YATX',
    name: 'Yattaqi Pro',
    tokenAddress: '0x39043aae9c48a628f5184af7a5bb925137757b15',
    tokenDecimals: 8,
    exchangeAddress: '0x736e8cdc62c59fcd47ad26a8e3a7d7071fbe7bb8'
  },
  {
    symbol: 'PSK',
    name: 'Pool of Stake Master Token',
    tokenAddress: '0x1c5f43710a1776b0ea7191b7ead75d4b98d69858',
    tokenDecimals: 18,
    exchangeAddress: '0x9ad4f22817d35c645e7ae825a6b8678d2237bf21'
  },
  {
    symbol: 'CUBE',
    name: 'Somnium Space Cubes',
    tokenAddress: '0xdf801468a808a32656d2ed2d2d80b72a129739f4',
    tokenDecimals: 8,
    exchangeAddress: '0x21e7259f42b68bd89fd85f33584eda9bdf5b7004'
  },
  {
    symbol: 'TXH',
    name: 'TradeX Token',
    tokenAddress: '0x5432c580e34f590f4dd901b825ddeb92e905e826',
    tokenDecimals: 18,
    exchangeAddress: '0x721517009639fff86759a889d890f77f27514cbb'
  },
  {
    symbol: 'BRZE',
    name: 'Breeze',
    tokenAddress: '0x77c07555af5ffdc946fb47ce15ea68620e4e7170',
    tokenDecimals: 18,
    exchangeAddress: '0xd164626d50983fefadce6edf934148a4fe29097f'
  },
  {
    symbol: 'WCF',
    name: 'Wrapped ChainFaces',
    tokenAddress: '0x659046522c5c246a34a7eb17a814ca648436644a',
    tokenDecimals: 18,
    exchangeAddress: '0x8f29e4ffdeb4515e3c6ff1195a449f1fba950a6c'
  },
  {
    symbol: 'SPDG',
    name: 'SpeedGas',
    tokenAddress: '0x16bc9068f98557609dc0300cd22aa627ee7f4e62',
    tokenDecimals: 8,
    exchangeAddress: '0xab48b8e31e6acb3e4e823d7c2b37fca48829d329'
  },
  {
    symbol: 'HEDG',
    name: 'HedgeTrade',
    tokenAddress: '0xf1290473e210b2108a85237fbcd7b6eb42cc654f',
    tokenDecimals: 18,
    exchangeAddress: '0xb5b46a2521048d7f2f9d9603eeb1b7abf7d18886'
  },
  {
    symbol: 'GOU',
    name: 'Gou',
    tokenAddress: '0xb19977b23b40d59254b8f5a0bdb67076b4fa0bc6',
    tokenDecimals: 4,
    exchangeAddress: '0x9845bc0f87585944207526976d83be8129d612ce'
  },
  {
    symbol: 'BLC',
    name: 'Black Lion Coin',
    tokenAddress: '0x42dbc00e14f711260e606edbd4f14394ab4780d8',
    tokenDecimals: 18,
    exchangeAddress: '0x136a635440822482e8ccaef38760d9234328612e'
  },
  {
    symbol: 'ARO',
    name: 'Aeronia',
    tokenAddress: '0x8b0b3526b414ed5019049326544c07725a30da92',
    tokenDecimals: 18,
    exchangeAddress: '0x7979d646644a2ff37228740dfbc8e0567856cb48'
  },
  {
    symbol: 'WHEN',
    name: 'WHEN Token',
    tokenAddress: '0xf4fe95603881d0e07954fd7605e0e9a916e42c44',
    tokenDecimals: 18,
    exchangeAddress: '0x9e6f8d8189ac409e2d9fe4a441d673ec8b611d78'
  },
  {
    symbol: 'PTR',
    name: 'Petro',
    tokenAddress: '0xe964de82b9b83915ab8591bbebf1bfc4c65bb1dc',
    tokenDecimals: 8,
    exchangeAddress: '0xd4125bf96b48d7efcb23fdcfd782c0cb18449de3'
  },
  {
    symbol: 'AETH',
    name: 'Atomic Ethereum',
    tokenAddress: '0xb7742216e874c7c33f608c41e625b01a6f323570',
    tokenDecimals: 1,
    exchangeAddress: '0x1029d1ff7862fbe8fa6358dc1313488ed6885fc6'
  },
  {
    symbol: 'STMX',
    name: 'Crypterio Coin',
    tokenAddress: '0xe5fe68179c71d9fb4c1fed2035f4bbff9dc7b967',
    tokenDecimals: 18,
    exchangeAddress: '0x3e626492cf0a1dd58b6ba4542b47134e3b64e431'
  },
  {
    symbol: 'aUSDT',
    name: 'Aave Interest bearing USDT',
    tokenAddress: '0x71fc860f7d3a592a4a98740e39db31d25db65ae8',
    tokenDecimals: 6,
    exchangeAddress: '0x967735eb617ad99e86dfe5e13b7dd85df19ea5b1'
  },
  {
    symbol: 'ZDR',
    name: 'Zloadr Token',
    tokenAddress: '0xbdfa65533074b0b23ebc18c7190be79fa74b30c2',
    tokenDecimals: 18,
    exchangeAddress: '0xc1a7765bdbe7cb90b8e7ac89b9a2c07a2a111880'
  },
  {
    symbol: 'SATURN',
    name: 'Saturn',
    tokenAddress: '0x73dd6e972b4fce8ca611747b40006bcc8ee38e27',
    tokenDecimals: 18,
    exchangeAddress: '0x901f55986b1ec595d48595d57001827c98160af3'
  },
  {
    symbol: '㏕₧',
    name: 'TALEGO',
    tokenAddress: '0xfab890ed2907e860038f67b257e7f3cc75683369',
    tokenDecimals: 18,
    exchangeAddress: '0xc0556e0cd21ac31a98a65e572bc64c41d73892dd'
  },
  {
    symbol: 'DINK',
    name: 'DINKY',
    tokenAddress: '0xec1721e6fb745217c108e6d99d7115fc251ab88b',
    tokenDecimals: 8,
    exchangeAddress: '0x8ea71b38759c869a1e4ce94e8e51e631b294490f'
  },
  {
    symbol: 'DXT',
    name: 'DataWallet Token',
    tokenAddress: '0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6',
    tokenDecimals: 8,
    exchangeAddress: '0x39bd9a3c5af0dd9592d0eaef2ddf34b22ec5cd10'
  },
  {
    symbol: 'NEOG',
    name: 'null',
    tokenAddress: '0x449574c69f3a658794829ed81639a7a9ece041e1',
    tokenDecimals: 0,
    exchangeAddress: '0xa4433596eeeab8329cc6725ca266025472230c11'
  },
  {
    symbol: 'ETG',
    name: 'null',
    tokenAddress: '0x28c8d01ff633ea9cd8fc6a451d7457889e698de6',
    tokenDecimals: 0,
    exchangeAddress: '0x69738470f8f73539fee0f6867cbd24b8c0a7e50a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x17f11fca7a66e8049484ae0a74e0013c5719ec77',
    tokenDecimals: 18,
    exchangeAddress: '0x75121e3a693f8720a9cb1bf8138c85eff37665ea'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4cdfd08c4128c48987425846763b01f1570dc825',
    tokenDecimals: 18,
    exchangeAddress: '0xa0b519e9026dfdf5b46eb254584397b2bf38a4c6'
  },
  {
    symbol: 'W0xETH',
    name: 'Wrapped 0xEthereum Token',
    tokenAddress: '0x716523231368d43bdfe1f06afe1c62930731ab13',
    tokenDecimals: 8,
    exchangeAddress: '0xc1a1090c262b02b1ff26ec5d8868c78e9324a348'
  },
  {
    symbol: 'ARCG',
    name: 'Arch Crypton Game',
    tokenAddress: '0xf5774f42b28f35429aac35f8eb57541c511fdd49',
    tokenDecimals: 18,
    exchangeAddress: '0xbfb13b8bc14ffe736e13cd3ff8c54e7c8496e596'
  },
  {
    symbol: 'EH2',
    name: 'EnergonX Hydrogen H₂',
    tokenAddress: '0xa7d768ebd9915793393f117f8ab10f4a206875d8',
    tokenDecimals: 18,
    exchangeAddress: '0xf2ba17e87770fc2b3f5892eef234d9e5a45206a8'
  },
  {
    symbol: 'XMRG',
    name: 'Monero Gold',
    tokenAddress: '0x0f598112679b78e17a4a9febc83703710d33489c',
    tokenDecimals: 8,
    exchangeAddress: '0xceda48d2d41a6b725c2be17ae306474db5193027'
  },
  {
    symbol: 'APX',
    name: 'Apex',
    tokenAddress: '0x2b69f7c421f7b5dbda8c0c637b0f15186df50b59',
    tokenDecimals: 18,
    exchangeAddress: '0x0d9e04ad1f4873ce8210f26f8f1686d9d973889f'
  },
  {
    symbol: 'XLM',
    name: 'Stellar',
    tokenAddress: '0xd37f6655a53d907858efb65de16a561a1c3be751',
    tokenDecimals: 18,
    exchangeAddress: '0x889ffb451d55d0832b54264dea17b4f5ac1a49e4'
  },
  {
    symbol: 'ETC',
    name: 'Ethereum',
    tokenAddress: '0xa1621d5ceb743bbd4c9b9e65b6ff79cc661908e9',
    tokenDecimals: 18,
    exchangeAddress: '0xcbf2caa4e86f380139469d6dc97048a108e11d48'
  },
  {
    symbol: 'CC coinslot.com',
    name: 'Coin-coin coinslot.com',
    tokenAddress: '0x7f3eab3491ed282197038f1b89ca33d7e5adffba',
    tokenDecimals: 8,
    exchangeAddress: '0x7a651d199019f1a2e737978d354106d6dd0644e1'
  },
  {
    symbol: 'Spark',
    name: 'Sparkles Light',
    tokenAddress: '0x4c4c62a08eb49404ab85f3b4a0d6560488f2e216',
    tokenDecimals: 6,
    exchangeAddress: '0xa9b3794a48554d7008875b4e9d9b8961f5605d50'
  },
  {
    symbol: 'RES',
    name: 'Resfinex',
    tokenAddress: '0x0a9f693fce6f00a51a8e0db4351b5a8078b4242e',
    tokenDecimals: 5,
    exchangeAddress: '0xa9a666ec585bcc8551ac7648258bbfaf936c2c25'
  },
  {
    symbol: 'ALU',
    name: 'ALUCHAIN',
    tokenAddress: '0x3b2f94c251c2cccb7ad16a68f040a220cc2bdd72',
    tokenDecimals: 8,
    exchangeAddress: '0xd8c324c801aee42a83657887ff37ce859e6e60c6'
  },
  {
    symbol: 'STQ',
    name: 'Storiqa Token',
    tokenAddress: '0x5c3a228510d246b78a3765c20221cbf3082b44a4',
    tokenDecimals: 18,
    exchangeAddress: '0x39a0b1cafcf65abd0df4c8d20f36391ab6a90b6a'
  },
  {
    symbol: 'TTT',
    name: 'Tapcoin',
    tokenAddress: '0x9f599410d207f3d2828a8712e5e543ac2e040382',
    tokenDecimals: 18,
    exchangeAddress: '0x0f5d5579547b3fdc99da897135b0ff66cdb95387'
  },
  {
    symbol: 'ETHUSDADL4',
    name: 'ETHUSD ADL 4H Set',
    tokenAddress: '0xb8243b4eeca27a4191e879760b88fe2270561796',
    tokenDecimals: 18,
    exchangeAddress: '0xa995056b1730a2c4493707dd901c17cc8b9d610c'
  },
  {
    symbol: 'BTCS',
    name: 'Bitcoin Solar',
    tokenAddress: '0x5f51a196ed91fb14e3b3650c30743675c9a429be',
    tokenDecimals: 18,
    exchangeAddress: '0x07de855ee319d35e603e5d25d247adf3fbb44cb1'
  },
  {
    symbol: 'DNN',
    name: 'DNN',
    tokenAddress: '0x9d9832d1beb29cc949d75d61415fd00279f84dc2',
    tokenDecimals: 18,
    exchangeAddress: '0x53109f32c4d68e0d728a541b9d7726d50a97ddbf'
  },
  {
    symbol: 'BRD',
    name: 'Bread Token',
    tokenAddress: '0x558ec3152e2eb2174905cd19aea4e34a23de9ad6',
    tokenDecimals: 18,
    exchangeAddress: '0xb2360c3263ee0c97d5937ad4e598e57ef9923a1e'
  },
  {
    symbol: 'FLUZ',
    name: 'FluzFluz',
    tokenAddress: '0x954b5de09a55e59755acbda29e1eb74a45d30175',
    tokenDecimals: 18,
    exchangeAddress: '0xd1028b8af0e4e54812f0d0dd726de687cd361e96'
  },
  {
    symbol: 'PHM',
    name: 'Phoneum',
    tokenAddress: '0x8b6dd2144a3cc6677600735d0e62134839bb85d0',
    tokenDecimals: 2,
    exchangeAddress: '0xe7e2ec57aa0fe59b55e23288bc9a6d748fa4f713'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2b7b3dd16488f906d190e241156984bb4274d269',
    tokenDecimals: 18,
    exchangeAddress: '0xe8a90f4a47b54988fe031bceede1449284f1de67'
  },
  {
    symbol: 'CBD',
    name: 'TheCBDcoin',
    tokenAddress: '0xd02a1ed82fa5091a5639dc507f2f6130e5bc61be',
    tokenDecimals: 18,
    exchangeAddress: '0xf5941b6cd3c2c25c8066a14a946d41902e7efcdc'
  },
  {
    symbol: 'UVU',
    name: 'Comunion UVU Token',
    tokenAddress: '0xc163eade1a642d8ccef1046bae2569a00cb647ed',
    tokenDecimals: 8,
    exchangeAddress: '0x696725bbf41283cad29ef421b427464a8d87dc37'
  },
  {
    symbol: 'STON',
    name: 'Mainston',
    tokenAddress: '0xe31cbf04019fb9a859f9dfce6389efeb45170380',
    tokenDecimals: 18,
    exchangeAddress: '0xc9528eaa5f47b994df042fc623648cb07cc0e83e'
  },
  {
    symbol: 'XLIC',
    name: 'Lico',
    tokenAddress: '0xe17607302cff3a5b246916e6bfd0eda7bbd2c4b0',
    tokenDecimals: 18,
    exchangeAddress: '0xe3412f2155fe1d49febc6f8ed605773682c502d1'
  },
  {
    symbol: 'BRZ',
    name: 'BRZ',
    tokenAddress: '0x420412e765bfa6d85aaac94b4f7b708c89be2e2b',
    tokenDecimals: 4,
    exchangeAddress: '0xcc7662060ff05ea3ab68c8eb39653c1e52708adf'
  },
  {
    symbol: 'UNI',
    name: 'Unipot',
    tokenAddress: '0x3e370a6c8255b065bd42bc0ac9255b269cfcc172',
    tokenDecimals: 8,
    exchangeAddress: '0x8c871606331caff597ef08f59d6fd6b97d70ba7b'
  },
  {
    symbol: 'DIO',
    name: 'Decimated Token',
    tokenAddress: '0x35a5cb585d51d836922b78a9bb1f5c04635c39b6',
    tokenDecimals: 8,
    exchangeAddress: '0xbba5ac05ed924e27347f49bded2b7b323e3b2eb3'
  },
  {
    symbol: 'KAPP',
    name: 'Kappi Token',
    tokenAddress: '0x2439c0549f1616dab533c8af5d42a77331173b3a',
    tokenDecimals: 18,
    exchangeAddress: '0x5f6bd82aedfc9d8e037269e65e930cdda3ade103'
  },
  {
    symbol: 'YGG',
    name: 'YGG',
    tokenAddress: '0x0b686de16d57b4d2d0384d06bec6ef5d5d7dce5f',
    tokenDecimals: 18,
    exchangeAddress: '0x3d4b054dacd9a78dc7bb9508045ea353acc3901b'
  },
  {
    symbol: 'PHT',
    name: 'Phoneum Token',
    tokenAddress: '0xbbd227e805b90b8fe8f4c01a3f4e48bdae0599af',
    tokenDecimals: 2,
    exchangeAddress: '0x0865f2656819f08d38d26e1e134be5e519951526'
  },
  {
    symbol: 'KPT',
    name: 'krypital',
    tokenAddress: '0x814d76b36a7d34df364f4fc6b075ba47f9ba1f47',
    tokenDecimals: 18,
    exchangeAddress: '0xd30ebbbb823fe8f14ce3d0e1c1ed383cb8b71708'
  },
  {
    symbol: 'TAPS',
    name: 'TAPSPAY',
    tokenAddress: '0x56bb6f961f2cb9947fea063df1a42c2233487903',
    tokenDecimals: 8,
    exchangeAddress: '0x65b88e9eae685c178c08ef9c9ebf5999b860866b'
  },
  {
    symbol: 'BTCN',
    name: 'Bitcoin Neo',
    tokenAddress: '0x2976ac3d0bb67c6307a73df852c61c14cdda9863',
    tokenDecimals: 18,
    exchangeAddress: '0xa9c91e55dcbc0c4c7db567f752506620e44a8ba2'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xe04bc8d7c6e49ae6fb193f0a995046ef63d6526b',
    tokenDecimals: 18,
    exchangeAddress: '0xd180eb4f6ed4fec49916d1538446875713737fe0'
  },
  {
    symbol: 'CBU',
    name: 'BANQUEUNIVERSAL',
    tokenAddress: '0xcef46305d096fa876dd23048bf80f9345282e3fc',
    tokenDecimals: 0,
    exchangeAddress: '0x446097f12eb3aaaf0c068827633cb516aeb5e53f'
  },
  {
    symbol: 'FON',
    name: 'fonetones',
    tokenAddress: '0x5666bdc5c4f54f6ef65956e315e1a674932b68d5',
    tokenDecimals: 6,
    exchangeAddress: '0xb5300fa43c9cf6f3b1240b2dbc28fb155c8c5926'
  },
  {
    symbol: 'DiP',
    name: 'Divided Party',
    tokenAddress: '0xa27be88ad1dce22609a4a7f4c395f861bbabeae2',
    tokenDecimals: 8,
    exchangeAddress: '0xd8703d9b785308174f3d6adfaf9bfa6179642f22'
  },
  {
    symbol: 'rDAI',
    name: 'Redeemable DAI',
    tokenAddress: '0x261b45d85ccfeabb11f022eba346ee8d1cd488c0',
    tokenDecimals: 18,
    exchangeAddress: '0xbffcd1abd9c05b2b9b9a9a52768a36cfbd3a1d39'
  },
  {
    symbol: 'HYM',
    name: 'HYMAG Token',
    tokenAddress: '0x9488885f5c49c86f35f9ff8fd9e3ec6eb33534fc',
    tokenDecimals: 18,
    exchangeAddress: '0x5c8c805e407a3b38359add3d777d0dbe0dcbda69'
  },
  {
    symbol: 'HAPI',
    name: 'HAPI',
    tokenAddress: '0x1d0f1b6833f0ad4f363b5460e336bc129f204a76',
    tokenDecimals: 18,
    exchangeAddress: '0x0a638d29c7c9cd0f5e7a330b6438b27c3bda976a'
  },
  {
    symbol: 'JOB',
    name: 'Jobchain',
    tokenAddress: '0xdfbc9050f5b01df53512dcc39b4f2b2bbacd517a',
    tokenDecimals: 8,
    exchangeAddress: '0xb8e1a547787c20231adab691dcc2f7b01efd6552'
  },

  {
    symbol: 'CGN',
    name: 'KölschCoin',
    tokenAddress: '0x76877187924f1ece53e1a7fdcbd964491a747d0f',
    tokenDecimals: 0,
    exchangeAddress: '0x3feb2c81d0ef1a0d7bf9f7ccd93f5149da8c0523'
  },
  {
    symbol: 'KAE',
    name: 'Kaeuoi',
    tokenAddress: '0x4fe671f75febe114dbea88bb8266c177cb5e466a',
    tokenDecimals: 7,
    exchangeAddress: '0x878f7a03ecd2884556b039af6944b2320cad4cf2'
  },
  {
    symbol: 'BPC',
    name: 'BloodyPercent',
    tokenAddress: '0xf21d65979bd89b28f05ef19f3c65dd2a1d02946d',
    tokenDecimals: 4,
    exchangeAddress: '0x06372d3f478534c07ea0eb9b7ec4b72ca8548ffd'
  },
  {
    symbol: 'INVOX',
    name: 'Invox Finance Token',
    tokenAddress: '0x4485561db76614ff727f8e0a3ea95690b8b16022',
    tokenDecimals: 18,
    exchangeAddress: '0xbb800b86e226be487e4054ad5db687546ecf7a42'
  },
  {
    symbol: 'CBU',
    name: 'BANQUEUNIVERSAL',
    tokenAddress: '0xcef46305d096fa876dd23048bf80f9345282e3fc',
    tokenDecimals: 0,
    exchangeAddress: '0x446097f12eb3aaaf0c068827633cb516aeb5e53f'
  },
  {
    symbol: 'MSDZAR',
    name: 'Multi Stable DZAR MultiToken V1',
    tokenAddress: '0xec9ee41b316b7f335274c37ef17f8e34b1171df8',
    tokenDecimals: 18,
    exchangeAddress: '0x706d590a91166554d8bbb3caafb4c70418af7144'
  },
  {
    symbol: 'OLT',
    name: 'Oneledger Token',
    tokenAddress: '0x64a60493d888728cf42616e034a0dfeae38efcf0',
    tokenDecimals: 18,
    exchangeAddress: '0x3e38efadde169a816912ea2e481295b3392842e7'
  },
  {
    symbol: 'TAPS',
    name: 'TAPSPAY',
    tokenAddress: '0x56bb6f961f2cb9947fea063df1a42c2233487903',
    tokenDecimals: 8,
    exchangeAddress: '0x65b88e9eae685c178c08ef9c9ebf5999b860866b'
  },
  {
    symbol: 'BTCC',
    name: 'BitcoinCrown',
    tokenAddress: '0xc0c05862cca68b0b4c806796a6e7d965a6f18095',
    tokenDecimals: 18,
    exchangeAddress: '0x84e6f8604cb4d7768ccb428b34a853a6f2a33507'
  },
  {
    symbol: 'STASH',
    name: 'BitStash',
    tokenAddress: '0x965f109d31ccb77005858defae0ebaf7b4381652',
    tokenDecimals: 18,
    exchangeAddress: '0x810557057970c44e8c77dc9a1f2088ac1ba97dc9'
  },
  {
    symbol: 'AiFC',
    name: 'AiFChain',
    tokenAddress: '0x10fb4ad704871b6880776666c61d14aa075a5992',
    tokenDecimals: 18,
    exchangeAddress: '0x76bdc937ffb920f0e0542bb5857a37620735a1df'
  },
  {
    symbol: 'BTGN',
    name: 'Bitre Mining',
    tokenAddress: '0x956cdac781389d259de92e427ecd86e1cc273f7f',
    tokenDecimals: 8,
    exchangeAddress: '0x0e7288fe7e019864b3b3528a8c89fa691cb802da'
  },
  {
    symbol: 'ECR',
    name: 'Eastads Credits',
    tokenAddress: '0xc6c9db23d0dd0469b0bf97f365ae816274baa19a',
    tokenDecimals: 18,
    exchangeAddress: '0x76c0ba9aa256064c5e9e03193909ce18f8745fcb'
  },
  {
    symbol: 'MCHI',
    name: 'Mochi Coin',
    tokenAddress: '0x23befbcb388c3d71efa20f34cb2f7eb23953f909',
    tokenDecimals: 18,
    exchangeAddress: '0x98e0d32af21bb49d63f36f1ea3e6efebb3194b88'
  },
  {
    symbol: 'MP',
    name: 'MularPay',
    tokenAddress: '0x4a48a334906f1a323628ee3eec33e8cce7bd2cfc',
    tokenDecimals: 18,
    exchangeAddress: '0xb23c17ddfc6f0f87f490384edb82525efd77a508'
  },
  {
    symbol: 'REV',
    name: 'Revelation Coin',
    tokenAddress: '0xe6be436df1ff96956dfe0b2b77fab84ede30236f',
    tokenDecimals: 18,
    exchangeAddress: '0xa1a55be31cdde461475c68bb46811fc1e9efe3e5'
  },
  {
    symbol: 'ECR',
    name: 'Eastads Credits',
    tokenAddress: '0x99b09a9b9e9c26b3e65d84fcc9a1cd8acb289e25',
    tokenDecimals: 18,
    exchangeAddress: '0x4ef7831ba0320dd89b483a9935d209ccf5fab6ae'
  },
  {
    symbol: '$HEXA',
    name: '$HEXA',
    tokenAddress: '0x90752ece85adcc6da7bd109019e620eb0c583c99',
    tokenDecimals: 18,
    exchangeAddress: '0x3b238a50f71ffe4265f8c0e6288bec22fef7d6f1'
  },
  {
    symbol: 'ETH',
    name: 'Ether',
    tokenAddress: '0x5bfe6ece3bf81cf6c0128ef54b7b57d02d4243e9',
    tokenDecimals: 18,
    exchangeAddress: '0x4aa1475544de284a215f9345253e758830bb81fe'
  },
  {
    symbol: 'CDT',
    name: 'CoinDash Token',
    tokenAddress: '0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af',
    tokenDecimals: 18,
    exchangeAddress: '0xf945c8965e5b6a5c4d824ed7252c7ab8d01e4d15'
  },
  {
    symbol: 'INT',
    name: 'INTEGER',
    tokenAddress: '0x2fceb9fd4d64f4cc9a16eeabc097186e1170c09f',
    tokenDecimals: 0,
    exchangeAddress: '0x81d32f6f9f512b29e34a4790df6144e0d35f6767'
  },
  {
    symbol: 'THX',
    name: 'ThoreNext',
    tokenAddress: '0xf08c68bd5f4194d994fd70726746bf529ee5a617',
    tokenDecimals: 0,
    exchangeAddress: '0xd9b140a6515c3a0c74c4a40cdb8ab7d6fb4f7dec'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x601c32e0580d3aef9437db52d09f5a5d7e60ec22',
    tokenDecimals: 18,
    exchangeAddress: '0x91478d6de81128a75e6e4bcd1a1168a6767753a3'
  },
  {
    symbol: 'PAMM',
    name: 'PAMMCOIN',
    tokenAddress: '0x30a9dab82f8fa64fdfea43665546e24aba7280db',
    tokenDecimals: 8,
    exchangeAddress: '0x1ee7ba2c7a2ac01de15ec2916686468ac0a560e0'
  },
  {
    symbol: 'aMKR',
    name: 'Aave Interest bearing MKR',
    tokenAddress: '0x7deb5e830be29f91e298ba5ff1356bb7f8146998',
    tokenDecimals: 18,
    exchangeAddress: '0x62e08396d0c05159e97f9d1d4039f5487c8cefac'
  },
  {
    symbol: '†‡†',
    name: 'Republica Citizenship Token',
    tokenAddress: '0x6f0f9b631ca3eba75d42daee75e599bd5553c863',
    tokenDecimals: 18,
    exchangeAddress: '0x8fd5551e2b68a043957b6a0e15355ae212e135c6'
  },
  {
    symbol: 'BTCN',
    name: 'Bitcoin Neo',
    tokenAddress: '0x2976ac3d0bb67c6307a73df852c61c14cdda9863',
    tokenDecimals: 18,
    exchangeAddress: '0xa9c91e55dcbc0c4c7db567f752506620e44a8ba2'
  },
  {
    symbol: 'MYFI',
    name: 'MYFICHAIN',
    tokenAddress: '0x8aff1a0fec91cfa690fe79c1c140f5b59c56a181',
    tokenDecimals: 18,
    exchangeAddress: '0x659773277659846945bf74ad8a526bb2cc4dcc0c'
  },
  {
    symbol: 'SRK',
    name: 'SparkPoint',
    tokenAddress: '0x0488401c3f535193fa8df029d9ffe615a06e74e6',
    tokenDecimals: 18,
    exchangeAddress: '0x0df5be89756b2873044a16f8feca710f703324f8'
  },
  {
    symbol: 'CBT',
    name: 'CommerceBlock Token',
    tokenAddress: '0x076c97e1c869072ee22f8c91978c99b4bcb02591',
    tokenDecimals: 18,
    exchangeAddress: '0x68a2a9bce325301dab3244a74a3693d995eed1b0'
  },
  {
    symbol: 'CCT',
    name: 'Clap Clap Token',
    tokenAddress: '0x0f00c8dd21da51bc6a6ac07f491a7dbe69746f16',
    tokenDecimals: 18,
    exchangeAddress: '0xff8981fdb16962b736e6ee71c2d063b008a24539'
  },
  {
    symbol: 'AMRC',
    name: 'Americoin',
    tokenAddress: '0xe6326104f9bf98c3a26a18fa976c781395441829',
    tokenDecimals: 18,
    exchangeAddress: '0x434d98c854fd80e049b8fc6842abff0082d4c4d5'
  },
  {
    symbol: '0xETC',
    name: '0xETH Classic',
    tokenAddress: '0x71e4b8de109428f999391eb3424d2cc87192e8ba',
    tokenDecimals: 8,
    exchangeAddress: '0xda3b2d33ea27cd6e2b1d3e4821f3c64bf045c2d5'
  },
  {
    symbol: 'CRE',
    name: 'CarryToken',
    tokenAddress: '0x115ec79f1de567ec68b7ae7eda501b406626478e',
    tokenDecimals: 18,
    exchangeAddress: '0x72ddc243b2858f1f673a067faaab3210fdc69f36'
  },
  {
    symbol: 'ABC',
    name: 'ABC - Anti Bureaucracy Coin',
    tokenAddress: '0xafd75caff5c1d402cbf3692e289775438df6a9f0',
    tokenDecimals: 8,
    exchangeAddress: '0xb4db92a7fd67c96f64b5c59cc45e62ad520db11d'
  },
  {
    symbol: 'HOUR',
    name: '365DAYSWTF Rewards',
    tokenAddress: '0xd48cf65488486fa0d45b806aa51ca35727d70880',
    tokenDecimals: 18,
    exchangeAddress: '0x31f8c12498402b41787acd74021b6483e4b793f3'
  },
  {
    symbol: 'XRPG',
    name: 'Ripple Gold Token',
    tokenAddress: '0x961549769241f1354c695f69fe33db8f94a692fa',
    tokenDecimals: 8,
    exchangeAddress: '0x970f59ee186cc34f8ce83f2bc72d78d46f19fd20'
  },
  {
    symbol: 'ETHMOON',
    name: '10X Long Ethereum Token',
    tokenAddress: '0x5dcfa62f81b43ce7a3632454d327dee1f1d93b28',
    tokenDecimals: 18,
    exchangeAddress: '0x0d4b73d58869f5c33f267d3401204489874f8968'
  },
  {
    symbol: 'BitC',
    name: 'BitCash',
    tokenAddress: '0xf88bd1ba6f1e0e7e11686778954d0654e43e8e7d',
    tokenDecimals: 18,
    exchangeAddress: '0xb06b1a03082d3adf86bddf9271db6db2e2365db7'
  },
  {
    symbol: 'NAT',
    name: 'Natmin',
    tokenAddress: '0x90d46a9636b973f18186541d1b04ed3621a49cb0',
    tokenDecimals: 18,
    exchangeAddress: '0x6c470b0a008d8e83161243d80b3165034828e0a8'
  },
  {
    symbol: 'XAK',
    name: 'Xamatek',
    tokenAddress: '0x767ee3150ac31f982190ef41728cf9a969355286',
    tokenDecimals: 18,
    exchangeAddress: '0xf0e894168eabc4af904747f20d087614e07e6b08'
  },
  {
    symbol: 'CPLX',
    name: 'Coinoplex',
    tokenAddress: '0x567f4f0b0b5209644c0390f7860c7859b0f82a90',
    tokenDecimals: 18,
    exchangeAddress: '0x9c941dae8b4e6a756851d1a3a277db3c89927a7c'
  },
  {
    symbol: 'AGVC',
    name: 'AgaveCoin',
    tokenAddress: '0x8b79656fc38a04044e495e22fad747126ca305c4',
    tokenDecimals: 18,
    exchangeAddress: '0x2fccee43814c114f63de28d3c7be963ccb94bdaf'
  },
  {
    symbol: 'TWOB',
    name: 'The Whale of Blockchain',
    tokenAddress: '0x975ce667d59318e13da8acd3d2f534be5a64087b',
    tokenDecimals: 18,
    exchangeAddress: '0x568c09d7b1eebb47826ccccdece21d431ca783ee'
  },
  {
    symbol: 'BTCL',
    name: 'BTC LITE',
    tokenAddress: '0x5acd19b9c91e596b1f062f18e3d02da7ed8d1e50',
    tokenDecimals: 8,
    exchangeAddress: '0x1c86abf4f08b293909f083b288679242f6ec84e1'
  },
  {
    symbol: '300',
    name: '300 Token',
    tokenAddress: '0xaec98a708810414878c3bcdf46aad31ded4a4557',
    tokenDecimals: 18,
    exchangeAddress: '0x3308b73c1c5b6b51b74c233cad59f9b1b8530f05'
  },
  {
    symbol: 'OCN',
    name: 'OCoin',
    tokenAddress: '0x4092678e4e78230f46a1534c0fbc8fa39780892b',
    tokenDecimals: 18,
    exchangeAddress: '0x438406f3314eacffdea9f7fca4b1ccdee84a9a5f'
  },
  {
    symbol: 'MYC',
    name: 'Mycion',
    tokenAddress: '0xe1ac9eb7cddabfd9e5ca49c23bd521afcdf8be49',
    tokenDecimals: 18,
    exchangeAddress: '0x2b051e0651e86156eb7567fab92413289861f793'
  },
  {
    symbol: 'BOBx',
    name: 'Free BOB Tokens - BobsRepair.com',
    tokenAddress: '0xd3ace836e47f7cf4948dffd8ca2937494c52580c',
    tokenDecimals: 18,
    exchangeAddress: '0x0ccdcaae1480025636386508a8d2f7bbf0faace7'
  },
  {
    symbol: 'TRB',
    name: 'Tellor Tributes',
    tokenAddress: '0x4cadcb47216d7bb63ee0a2c7147ac46161ff3e3c',
    tokenDecimals: 18,
    exchangeAddress: '0x363c1087d4f205850449b11c663b8a19bc50c3b0'
  },
  {
    symbol: 'PMOD',
    name: 'Promodl',
    tokenAddress: '0xaf47ebbd460f21c2b3262726572ca8812d7143b0',
    tokenDecimals: 0,
    exchangeAddress: '0x5040420651d7109360374a94dd365a3e9927ebfb'
  },
  {
    symbol: 'CRC',
    name: 'CryCash Token',
    tokenAddress: '0xf41e5fbc2f6aac200dd8619e121ce1f05d150077',
    tokenDecimals: 18,
    exchangeAddress: '0xae1c77ee3ab639d1f3cf554567b82f61c0ddc160'
  },
  {
    symbol: 'RXC',
    name: 'RadiKaL  XChaNgE',
    tokenAddress: '0x3215bf0bffed4a6406881fcff42c9d43c774615a',
    tokenDecimals: 18,
    exchangeAddress: '0xc76124d4f8256fb96171bf102b5702ed9d655462'
  },
  {
    symbol: 'BITX',
    name: 'BITIFEX',
    tokenAddress: '0xa0ed4c4acbf07c03365d6bbe28150a819aff700f',
    tokenDecimals: 18,
    exchangeAddress: '0x0aea13985e6cc5b1665200efa96a90c4a145239e'
  },
  {
    symbol: 'BITX',
    name: 'BITIFEX',
    tokenAddress: '0x87f84ec5c9ba8ab334807171d65faa86cf67f149',
    tokenDecimals: 18,
    exchangeAddress: '0x8cfb0d5baa5d13dd00eab5651b2501b68c7bc16f'
  },
  {
    symbol: 'HORSE',
    name: 'Horse',
    tokenAddress: '0x5b0751713b2527d7f002c0c4e2a37e1219610a6b',
    tokenDecimals: 18,
    exchangeAddress: '0xff250fa4ec02d242f00287066bb8a7062033910a'
  },
  {
    symbol: 'FAB',
    name: 'FAB Token',
    tokenAddress: '0x12683dc9eec95a5f742d40206e73319e6b9d8a91',
    tokenDecimals: 18,
    exchangeAddress: '0xb54374cabe59a64418b1eb5058d1bc1506b4be3a'
  },
  {
    symbol: 'HEALP',
    name: 'An Etheal Promo',
    tokenAddress: '0x7b2f9706cd8473b4f5b7758b0171a9933fc6c4d6',
    tokenDecimals: 0,
    exchangeAddress: '0xf7bc4b3d1fc04d73585f217bca06920ca0a71d95'
  },
  {
    symbol: 'TBAR',
    name: 'TitaniumBlockchain',
    tokenAddress: '0xd2d121383187d4ed9cb4d40e7ce5d676f5994e0d',
    tokenDecimals: 0,
    exchangeAddress: '0xbaed8adf9e58e353ba26f19018c4680ee8e6e7fe'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0d4b73d58869f5c33f267d3401204489874f8968',
    tokenDecimals: 18,
    exchangeAddress: '0x600f38d90c1055297d097dbaf9180acb12eb91f0'
  },
  {
    symbol: '0xETD',
    name: '0xETH Diamond',
    tokenAddress: '0x91f5f9c36b093907b0f99d1dbcf41aaf1db28916',
    tokenDecimals: 8,
    exchangeAddress: '0x09b30ae6a7a71e4ccc972989f336ddfc8b90c1f4'
  },
  {
    symbol: 'PAS',
    name: 'Passive',
    tokenAddress: '0xe25db4baa49ea3b8627986ffc22c7bd5e0c88d49',
    tokenDecimals: 18,
    exchangeAddress: '0xadfa51248ae5f82008c188ca3f329d4caddad1ec'
  },
  {
    symbol: 'BLOX',
    name: 'BlockSpace',
    tokenAddress: '0xebd254a8ab9a5f6f26602bbad85e30d144454e94',
    tokenDecimals: 18,
    exchangeAddress: '0x8a80504a9a3ddf6a5620bf141bcee3fafd6de52f'
  },
  {
    symbol: 'MOON',
    name: '10X Long Bitcoin Token',
    tokenAddress: '0xba7cdd0953e8f950317dda347a716f162713b226',
    tokenDecimals: 18,
    exchangeAddress: '0xf39d034c7040bf266f05fe46b8d45a98f7456038'
  },
  {
    symbol: 'AZRE',
    name: 'AZARETHER',
    tokenAddress: '0x91c0651bcadf7b6a231a505e552c12058f5dafb4',
    tokenDecimals: 1,
    exchangeAddress: '0x88c0a9cce487f7ac927f4f289a6e55ab037a8388'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0f88a6cbeb3bd153c0584c7136fbcc86c2dd657f',
    tokenDecimals: 18,
    exchangeAddress: '0xa5a36b613030ee69e8cd2c78b2c2ad93662b77db'
  },
  {
    symbol: '0xESV',
    name: '0xETH SV',
    tokenAddress: '0x8e9c3d1f30904e91764b7b8bbfda3a429b886874',
    tokenDecimals: 8,
    exchangeAddress: '0x14aaa76ae91641c3837f5f0ddbcd60dcc24284c4'
  },
  {
    symbol: 'XWO',
    name: 'WooshCoin',
    tokenAddress: '0x5cc00cca0692b9b34af816e5439cdb47d3b63691',
    tokenDecimals: 18,
    exchangeAddress: '0xef0f0750d2d57167c29688e8fb11d0eab23d008b'
  },
  {
    symbol: 'ESH',
    name: 'Switch',
    tokenAddress: '0xd6a55c63865affd67e2fb9f284f87b7a9e5ff3bd',
    tokenDecimals: 18,
    exchangeAddress: '0x5e342e9d0ebb3861863a6aae1840f39a023b98e9'
  },
  {
    symbol: 'GEX',
    name: 'GLOBEX',
    tokenAddress: '0x66142b81db17d7c0bd91f502d00382e326a24c2a',
    tokenDecimals: 8,
    exchangeAddress: '0x113247c657cd806c0b76ea94d6b33d1a73843a26'
  },
  {
    symbol: 'REALTOKEN-10024-10028-APPOLINE-ST-DETROIT-MI',
    name: 'RealToken 10024-10028 Appoline Street Detroit MI',
    tokenAddress: '0x5807ca447851c98569c567963b25b1c83d41bebc',
    tokenDecimals: 18,
    exchangeAddress: '0x0620e472ea092adaffd70e928d706b4a53adf6c8'
  },
  {
    symbol: 'REALTOKEN-9336-PATTON-ST-DETROIT-MI',
    name: 'RealToken 9336 Patton Street Detroit MI',
    tokenAddress: '0xed42cedcadbfbcaa3e6f411b09567c2c0b5ad28f',
    tokenDecimals: 18,
    exchangeAddress: '0x9016aa99b98128ba990097ea3f3d60b5e40775e4'
  },
  {
    symbol: 'SNGX',
    name: 'SingularX',
    tokenAddress: '0x78774d1c3277b83459c730921bff11019017b233',
    tokenDecimals: 18,
    exchangeAddress: '0x6e04c36ea43567fdca1624dc510404ee8c0320bb'
  },
  {
    symbol: 'FOUR',
    name: 'The 4th Pillar Token',
    tokenAddress: '0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0',
    tokenDecimals: 18,
    exchangeAddress: '0xc0ed2870b0086394b7feaa012985c12dc99e4841'
  },
  {
    symbol: 'GNJ',
    name: 'Ganja Token',
    tokenAddress: '0xed0f59d483977b2bde55fecc81e7534fe7e605e7',
    tokenDecimals: 18,
    exchangeAddress: '0x7a6486000acedd20e393586313a59fba146be8d2'
  },
  {
    symbol: 'GEN',
    name: 'Genesis',
    tokenAddress: '0x9dfe4643c04078a46803edcc30a3291b76d4c20c',
    tokenDecimals: 18,
    exchangeAddress: '0x8010495d67e41d434e517f79e9a55ceaaa6018b9'
  },
  {
    symbol: 'LibraF',
    name: 'LibraFace',
    tokenAddress: '0x062e1ab8cb801fa51e5c12ec8c79089e9cfebae1',
    tokenDecimals: 18,
    exchangeAddress: '0x2a78359ef076d975a081872f2dd9a18f5c868ad1'
  },
  {
    symbol: 'MFTU',
    name: 'MFTU',
    tokenAddress: '0x05d412ce18f24040bb3fa45cf2c69e506586d8e8',
    tokenDecimals: 18,
    exchangeAddress: '0x6d72cb1e0079acfca31ae966fd6caea1d8cc7387'
  },
  {
    symbol: 'DYX',
    name: 'DYXToken',
    tokenAddress: '0x042f972ac93404f0fcbe4e3a0729f0b395232106',
    tokenDecimals: 8,
    exchangeAddress: '0xe8354e16f6bc76ee38b4ae641297fa45815095a3'
  },
  {
    symbol: 'KEVIN',
    name: 'KEVIN',
    tokenAddress: '0x8f464bfe2292748a0fed58bb53d3838b4ce018b0',
    tokenDecimals: 4,
    exchangeAddress: '0xc3118801f8ba84c4ab9aedc10c5403a377519729'
  },
  {
    symbol: 'LTB',
    name: 'Litbinex Coin',
    tokenAddress: '0xa105c740bc012a43a342ab4a0ef40143452c8e89',
    tokenDecimals: 18,
    exchangeAddress: '0x63f159caa45c02054fa502c35c43398c3524c567'
  },
  {
    symbol: 'BB',
    name: 'barry',
    tokenAddress: '0x525e58c45f8ab1dceabedeb3fae75040c21132cc',
    tokenDecimals: 18,
    exchangeAddress: '0x2dea18ff7444a10979fa559e7e1db12c200dd5c6'
  },
  {
    symbol: 'BTCH',
    name: 'Botchcoin',
    tokenAddress: '0x995ecb39c06b25ccf520d1c4ae9f4111d1c9a752',
    tokenDecimals: 18,
    exchangeAddress: '0x8d2e329e9a96832ee25e215522a29673b8924805'
  },
  {
    symbol: 'TP',
    name: 'Perry Token',
    tokenAddress: '0x64c2e1ea1d1a2c02902f15181e163ecfcf59de8c',
    tokenDecimals: 18,
    exchangeAddress: '0x0bba6f6f032305be42828011089926af4d597a46'
  },
  {
    symbol: 'JD',
    name: 'James Deus',
    tokenAddress: '0xdaf67599b8fa7328758881f862f171629381f221',
    tokenDecimals: 18,
    exchangeAddress: '0xf8153a198a60155f6f2a1b7fc6fc8facbe5ddb13'
  },
  {
    symbol: 'CRY',
    name: 'Cryto',
    tokenAddress: '0x6abc8b6365f02cd920afa0f0529ac1ae2d0ad72f',
    tokenDecimals: 18,
    exchangeAddress: '0xacc56f297e4563d7546382b40ec21273cec8c5f7'
  },
  {
    symbol: 'YEET',
    name: 'Yeet Coin',
    tokenAddress: '0x1b04110215e3833f72810aa74548a60688fea71e',
    tokenDecimals: 18,
    exchangeAddress: '0xe7f6582af1acbf8a7d0e70e525a4fff2d1dcb64c'
  },
  {
    symbol: 'MTBX',
    name: 'MY TOKΞN BOX',
    tokenAddress: '0x9ae869c48d8a8eb7cd0a861226c28834da7e83d9',
    tokenDecimals: 18,
    exchangeAddress: '0xa3b55a56b12465f5ca5b03114252723e00da23b8'
  },
  {
    symbol: 'LOLBIN',
    name: 'Presoz Token',
    tokenAddress: '0x66364619df268baa1f5fddc54f810d152af4e67c',
    tokenDecimals: 18,
    exchangeAddress: '0xda898208c79f15d50a4356bf42c2174b2a2e8df7'
  },
  {
    symbol: 'SDBL',
    name: 'SD Blockchain',
    tokenAddress: '0x85843d445784307ced60bf351a2fe0416d0a266b',
    tokenDecimals: 18,
    exchangeAddress: '0x71bf98dbff21b4d1580337f4aa017e785e5fda48'
  },
  {
    symbol: 'KPT',
    name: 'krypital',
    tokenAddress: '0x814d76b36a7d34df364f4fc6b075ba47f9ba1f47',
    tokenDecimals: 18,
    exchangeAddress: '0xd30ebbbb823fe8f14ce3d0e1c1ed383cb8b71708'
  },
  {
    symbol: 'TXL',
    name: 'Textil',
    tokenAddress: '0x8711cf7764d23d32092c0dcedfdac63ece1e6cf3',
    tokenDecimals: 18,
    exchangeAddress: '0xe6a74851b6dcaabf074ceaed72f23979417d3db5'
  },
  {
    symbol: 'EGG',
    name: 'Egg Token',
    tokenAddress: '0x999aa6488f076e6765448f090aba83fbb470fc99',
    tokenDecimals: 18,
    exchangeAddress: '0x858c96b832d0e671664f0040d6e36cd49d809161'
  },
  {
    symbol: 'PLU',
    name: 'Pluton',
    tokenAddress: '0xd8912c10681d8b21fd3742244f44658dba12264e',
    tokenDecimals: 18,
    exchangeAddress: '0x0e70840ed7ad77d61cdd91c443afacba25befe95'
  },
  {
    symbol: 'DEV',
    name: 'Dev',
    tokenAddress: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26',
    tokenDecimals: 18,
    exchangeAddress: '0x07541e453da49e948c63fe3a78e96ec8cfa3ba45'
  },
  {
    symbol: 'GVT',
    name: 'Genesis Vision Token',
    tokenAddress: '0x103c3a209da59d3e7c4a89307e66521e081cfdf0',
    tokenDecimals: 18,
    exchangeAddress: '0xcb4496f9ba213f390fa9106dafdd49145db0bf19'
  },
  {
    symbol: 'TOM',
    name: 'Memes by Tom',
    tokenAddress: '0x9cda02b2a43f16f11c6860a8630672de9854d6f7',
    tokenDecimals: 18,
    exchangeAddress: '0xad0bfed28c522f7143a3e842ba1f552481d22b44'
  },
  {
    symbol: 'bDAI',
    name: 'BTU Incentivized DAI',
    tokenAddress: '0x6a4ffaafa8dd400676df8076ad6c724867b0e2e8',
    tokenDecimals: 18,
    exchangeAddress: '0xbbf511d2232dfc6d22213b5a02b27139b1ea2fef'
  },
  {
    symbol: 'BCIO',
    name: 'Blockchain.io',
    tokenAddress: '0xcdc412f306e0c51e3249b88c65423cd16b322673',
    tokenDecimals: 18,
    exchangeAddress: '0x29a20b7489898db4022623f719212cb66ebfa468'
  },
  {
    symbol: 'AIR',
    name: 'AIRWALLET',
    tokenAddress: '0x1bc0bd5f8bec6cedaaf817d64ec0a84acbbb09aa',
    tokenDecimals: 18,
    exchangeAddress: '0xb0ac3c451f22ec0c9ba6e861527aa2a41efba627'
  },
  {
    symbol: 'DOM',
    name: 'DomToken',
    tokenAddress: '0x5a096c19470379f3e66f1e6d664a2112fb285287',
    tokenDecimals: 9,
    exchangeAddress: '0x9f2709930310fe05b2df29a718d4fcbeb7b8169e'
  },
  {
    symbol: 'SHIT',
    name: 'ShitCoin',
    tokenAddress: '0xdef08628195dbd1b54cd8aa1d7fd5dac99f79c19',
    tokenDecimals: 18,
    exchangeAddress: '0x936ad5a77ddf9d60ad00eeb960f879206e57cee4'
  },
  {
    symbol: 'GD',
    name: 'Gold Diamond',
    tokenAddress: '0x13b7d2bf5e1a72938facf660e0d0b270b0e1fe16',
    tokenDecimals: 10,
    exchangeAddress: '0x0ded2ea132a365c20c7178abdb375425b001a790'
  },
  {
    symbol: 'KITT',
    name: 'Kitty Token',
    tokenAddress: '0xbd9515ff22188ecebaac76946cc9c7afcb52b6b3',
    tokenDecimals: 0,
    exchangeAddress: '0x9e53b75ae3141213f1231b9306782e863cef14d6'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x26cc0eab6cb650b0db4d0d0da8cb5bf69f4ad692',
    tokenDecimals: 18,
    exchangeAddress: '0xc67bf268b8f59303b97da7016e050f183bf25a47'
  },
  {
    symbol: 'TALE',
    name: 'TALE',
    tokenAddress: '0x444fb48856adba02edb16582f89e82b210cfb416',
    tokenDecimals: 18,
    exchangeAddress: '0x9ec27187ec17db3b962391e7d3884ed5322122c3'
  },
  {
    symbol: 'XRPGSW',
    name: 'Ripple Gold Token SW',
    tokenAddress: '0x45526c392009cf7020ac10a10c1979e340a8a9dc',
    tokenDecimals: 8,
    exchangeAddress: '0x6b731453d6418a53e391926f0d082fb39c575387'
  },
  {
    symbol: 'DFT',
    name: 'DFT',
    tokenAddress: '0xa2a54f1ec1f09316ef12c1770d32ed8f21b1fb6a',
    tokenDecimals: 8,
    exchangeAddress: '0xfa8112cb01099389f688fef4c5f526acc7273c84'
  },
  {
    symbol: 'VIKKY',
    name: 'Vikky Token',
    tokenAddress: '0xd2946be786f35c3cc402c29b323647abda799071',
    tokenDecimals: 8,
    exchangeAddress: '0x0d93ea00212ebc7f406f23c200904e6ba3679929'
  },
  {
    symbol: '7BA',
    name: 'Seven Art Token',
    tokenAddress: '0x7ae6378c1b794763dc33e06d0b83dd01a698b2b0',
    tokenDecimals: 0,
    exchangeAddress: '0x5ea48b74c34ac6a8cd355184856f0d2f1d0b506c'
  },
  {
    symbol: 'ZOM',
    name: 'ZOM',
    tokenAddress: '0x42382f39e7c9f1add5fa5f0c6e24aa62f50be3b3',
    tokenDecimals: 18,
    exchangeAddress: '0xb3e0804006d270fd243f5799871f73dd9a1312e3'
  },
  {
    symbol: 'SHR',
    name: 'ShareToken',
    tokenAddress: '0xee5fe244406f35d9b4ddb488a64d51456630befc',
    tokenDecimals: 2,
    exchangeAddress: '0xc978ba96a1453dc74daa5def8fa0c38e75a959b4'
  },
  {
    symbol: '0xECH',
    name: '0xETH Cash',
    tokenAddress: '0xac8491258d2d93228e8b49aac2e332a96f04e56c',
    tokenDecimals: 8,
    exchangeAddress: '0xef0c41b0fddd6d4979016818278aa6f03854c887'
  },
  {
    symbol: 'tBRL',
    name: 'Brasil token coin',
    tokenAddress: '0xe6536e317af33986e4f341849e78d5f0916936ef',
    tokenDecimals: 18,
    exchangeAddress: '0xb9e63577e371ccf6cc4928d138877175d6b8dd6c'
  },
  {
    symbol: 'DECENT',
    name: 'Decentribe governance token',
    tokenAddress: '0x900b1998a226cfe238ba1a14f03eb934c513c20b',
    tokenDecimals: 18,
    exchangeAddress: '0x5e9c12cdbc352835a78caf6e8b386a67ab0d8376'
  },
  {
    symbol: 'SNTVT',
    name: 'Sentivate',
    tokenAddress: '0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8',
    tokenDecimals: 18,
    exchangeAddress: '0x27e3fd3ff2320c5247b141668ef0cc953396ca11'
  },
  {
    symbol: 'NCOV',
    name: 'CoronaCoin',
    tokenAddress: '0x10ef64cb79fd4d75d4aa7e8502d95c42124e434b',
    tokenDecimals: 18,
    exchangeAddress: '0x5cdc4f8b2e8f9dc4ea31d0915fa454a552cbecd1'
  },
  {
    symbol: 'KNEE',
    name: 'KneePads',
    tokenAddress: '0x1b8967fc1051b15672474c042f05d1f6734e49e9',
    tokenDecimals: 18,
    exchangeAddress: '0x210a64999826dc93369950145a2fb3bfa4ad2a53'
  },
  {
    symbol: 'EBTC',
    name: 'eBTC',
    tokenAddress: '0xeb7c20027172e5d143fb030d50f91cece2d1485d',
    tokenDecimals: 8,
    exchangeAddress: '0xc82c8c4f61462c20da29cf164124a435129bb7b2'
  },
  {
    symbol: 'CCDE',
    name: 'CCDE Token',
    tokenAddress: '0x67be98298c4445aa08d370120059f491c5396901',
    tokenDecimals: 18,
    exchangeAddress: '0x0647df237861403f176ead2a53dd2d2c39dfbd6d'
  },
  {
    symbol: 'VIX',
    name: 'VianeX',
    tokenAddress: '0x86c31e6da2190a1ffd39a36990a44174d0a8be15',
    tokenDecimals: 18,
    exchangeAddress: '0x3119276fc737e692dafd40b88286e7e23528cf74'
  },
  {
    symbol: 'PTH',
    name: 'Prether',
    tokenAddress: '0xb17694da33c2ac8b911850d823b32087a61bc9d2',
    tokenDecimals: 0,
    exchangeAddress: '0x98a6d27318a0841c981f6e38f16cefde4ea2b49c'
  },
  {
    symbol: 'SHIP',
    name: 'ShipChain SHIP',
    tokenAddress: '0xe25b0bba01dc5630312b6a21927e578061a13f55',
    tokenDecimals: 18,
    exchangeAddress: '0x75681c9603957022657d9a79cd643b03d46d5d99'
  },
  {
    symbol: 'MTC',
    name: 'Medical Token Currency',
    tokenAddress: '0x905e337c6c8645263d3521205aa37bf4d034e745',
    tokenDecimals: 18,
    exchangeAddress: '0xf339df4a5752a6fb63e47a91c1a3cd27789de303'
  },
  {
    symbol: 'null',
    name: 'null',
    tokenAddress: '0x5408cf4c018be910b7e1a12681a04097d1638532',
    tokenDecimals: null,
    exchangeAddress: '0x044205ad879049a41796a8b5026d050ff5124b91'
  },
  {
    symbol: 'null',
    name: 'null',
    tokenAddress: '0x6e8205e831392a775749112cfc9bc94c8d8cce56',
    tokenDecimals: null,
    exchangeAddress: '0x035049a35a4fd93fa3b425d74ac408623bccb4f0'
  },
  {
    symbol: 'CEC',
    name: 'CECI',
    tokenAddress: '0xe03f415c0e69d3f06953d70bb27f5441a16e6c9d',
    tokenDecimals: 2,
    exchangeAddress: '0x5f852ea868a72697ae5057a848efaaf447df6166'
  },
  {
    symbol: 'WEED',
    name: 'WidCoin',
    tokenAddress: '0x38ac393da4765a94e96998b556bf463876375662',
    tokenDecimals: 10,
    exchangeAddress: '0xebc09ab62a74872a164b371384936a4eb3052ca1'
  },
  {
    symbol: 'DX',
    name: 'DxChain Token',
    tokenAddress: '0x973e52691176d36453868d9d86572788d27041a9',
    tokenDecimals: 18,
    exchangeAddress: '0x624aab1e03827043c6c5ef2a9c0afdf3a7a21b93'
  },
  {
    symbol: 'UNC',
    name: 'Uncloak',
    tokenAddress: '0x25bceaf96191d34c6a135a26ae8d7281dacf8ff0',
    tokenDecimals: 18,
    exchangeAddress: '0x2a9d9051cc3ab6e87b7758c0da0bbc9e238b17be'
  },
  {
    symbol: 'UUU',
    name: 'UNetworkToken',
    tokenAddress: '0x3543638ed4a9006e4840b105944271bcea15605d',
    tokenDecimals: 18,
    exchangeAddress: '0x51b159831ca99ea0c2efffddee108a7ba8f83d9a'
  },
  {
    symbol: 'ULTRA',
    name: 'Ultrachain',
    tokenAddress: '0x87f2a5d243c6683a6ba0686b2fb3e38b31c6e1da',
    tokenDecimals: 18,
    exchangeAddress: '0xe71341a529a92d53c9a3d8bc452af3a3e8039289'
  },
  {
    symbol: 'FOX',
    name: 'Fox Token',
    tokenAddress: '0xf8db8ad0aa9b8b435ff3ab5aaa3b8db77b0b7c0b',
    tokenDecimals: 7,
    exchangeAddress: '0xf4073f8f5661762a69bdb3ce946356b37d03188b'
  },
  {
    symbol: 'RGA',
    name: 'Royal Gold Academy Token',
    tokenAddress: '0xa62a3fab2dc0359f26410d078e76c7200d91501d',
    tokenDecimals: 8,
    exchangeAddress: '0xe9e0823bd64f5af200a83db17bf9b423dd2f1ef9'
  },
  {
    symbol: 'TEL',
    name: 'Telcoin',
    tokenAddress: '0x85e076361cc813a908ff672f9bad1541474402b2',
    tokenDecimals: 2,
    exchangeAddress: '0x6d3b64703631c47b45afb62dee9b7b97d1324e2e'
  },
  {
    symbol: 'SEDO',
    name: 'SEDO PoW Token',
    tokenAddress: '0x0f00f1696218eaefa2d2330df3d6d1f94813b38f',
    tokenDecimals: 8,
    exchangeAddress: '0xfc1b37de8313d4659527628aa682e24ed0907a68'
  },
  {
    symbol: 'GUP',
    name: 'Guppy',
    tokenAddress: '0xf7b098298f7c69fc14610bf71d5e02c60792894c',
    tokenDecimals: 3,
    exchangeAddress: '0x64f3f36a7b7c0acc04d516d8f01df78723477b82'
  },
  {
    symbol: 'BNEX',
    name: 'HashingAds',
    tokenAddress: '0xcb8251636b24ea85284b72b0fee3a51359d0f296',
    tokenDecimals: 18,
    exchangeAddress: '0xda8e957e4de8488012db83b9ed981fdfff90005e'
  },
  {
    symbol: 'acc',
    name: 'acc',
    tokenAddress: '0xcd32c2d1fdbf9208c0833cb3f5fc9543c3d85f62',
    tokenDecimals: 12,
    exchangeAddress: '0xd46ef52b5acaa12517ba8611cb475d71c833d212'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x05cde89ccfa0ada8c88d5a23caaa79ef129e7883',
    tokenDecimals: 18,
    exchangeAddress: '0x9cc5a926b0a6f7719ff089f8b13838f3aa6f5b78'
  },
  {
    symbol: 'SWAGG',
    name: 'SWAGG',
    tokenAddress: '0xa19a40fbd7375431fab013a4b08f00871b9a2791',
    tokenDecimals: 4,
    exchangeAddress: '0x0be5be4f1999e5a4f955d32cc42ea8990af49d2b'
  },
  {
    symbol: 'COB',
    name: 'Cobinhood Token',
    tokenAddress: '0xb2f7eb1f2c37645be61d73953035360e768d81e6',
    tokenDecimals: 18,
    exchangeAddress: '0x1d704dc0cebc7f8ffbfe531e06a3c7c39bdc6ea8'
  },
  {
    symbol: 'PAUL',
    name: 'Paul Razvan Berg',
    tokenAddress: '0x8db6da2120b346faa7f206841f2fb005bbe0dfd8',
    tokenDecimals: 4,
    exchangeAddress: '0xf5498595586b0a83223ea3a369b88e11b9cc1f13'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x4d2f5cfba55ae412221182d8475bc85799a5644b',
    tokenDecimals: 18,
    exchangeAddress: '0x7fed0786b3706a5f1ed03949af3565bb3cbd1567'
  },
  {
    symbol: 'RODZ',
    name: 'RODZ',
    tokenAddress: '0xa685d6f87e3be27d72ce216842147c4149e0ce9a',
    tokenDecimals: 4,
    exchangeAddress: '0x1b78dea5092bba25e73ecd5997c81bb1f81eb1aa'
  },
  {
    symbol: 'GQ',
    name: 'Goose Queue',
    tokenAddress: '0x2dae7da77d3ea6f83e1ea81ca2604c30d0b1cb00',
    tokenDecimals: 18,
    exchangeAddress: '0x997bb3e4629cadc94d4b8b678ba3e5489e2d1024'
  },
  {
    symbol: 'EOZ',
    name: 'Ethinoz Coin',
    tokenAddress: '0x0c0be494b95ededcd25ebd4dd74b3ac670ef74d1',
    tokenDecimals: 18,
    exchangeAddress: '0x1479a35e9a8ae5c741512f24a162969e3b3543dc'
  },
  {
    symbol: 'VIBE',
    name: 'Vibe Coin',
    tokenAddress: '0xe8ff5c9c75deb346acac493c463c8950be03dfba',
    tokenDecimals: 18,
    exchangeAddress: '0x061e80245f7d5294147751207264498cdde3d788'
  },
  {
    symbol: 'MTH',
    name: 'Monetha',
    tokenAddress: '0xaf4dce16da2877f8c9e00544c93b62ac40631f16',
    tokenDecimals: 5,
    exchangeAddress: '0x541ee05ca33ab058e73f15ade9baab6ca2470d99'
  },
  {
    symbol: 'QKC',
    name: 'QuarkChain Token',
    tokenAddress: '0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664',
    tokenDecimals: 18,
    exchangeAddress: '0x704696a53d4b55c07412e03d1b43a470c102f1db'
  },
  {
    symbol: 'BIGO',
    name: 'BIGO Token',
    tokenAddress: '0x2ab23c59a621607349d00458a29682c9dcfe1f64',
    tokenDecimals: 0,
    exchangeAddress: '0x8c0837118e72fe2eb875d143803c35b52392917a'
  },
  {
    symbol: 'EXMR',
    name: 'EXMR FDN.',
    tokenAddress: '0x331fa6c97c64e47475164b9fc8143b533c5ef529',
    tokenDecimals: 18,
    exchangeAddress: '0x80620d4bc2a5127ace9194c33e4812a1a6492afe'
  },
  {
    symbol: 'ELTCOIN',
    name: 'ELTCOIN',
    tokenAddress: '0x44197a4c44d6a059297caf6be4f7e172bd56caaf',
    tokenDecimals: 8,
    exchangeAddress: '0xd5cde2c55d1db6ca8202f790a7b4880f90bb73ec'
  },
  {
    symbol: 'BTCM',
    name: 'BTCMoon',
    tokenAddress: '0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd',
    tokenDecimals: 18,
    exchangeAddress: '0x11cf8911f08b1a36bd0c458e8933a7a1ccd40f73'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xe9cf7887b93150d4f2da7dfc6d502b216438f244',
    tokenDecimals: 18,
    exchangeAddress: '0xa0cdabf1fed8ea8352fa2a2b438d5ffd9742ff0e'
  },
  {
    symbol: 'DACC',
    name: 'Decentralized Accessible Content Chain',
    tokenAddress: '0xf8c595d070d104377f58715ce2e6c93e49a87f3c',
    tokenDecimals: 6,
    exchangeAddress: '0x48a4cb0b34e8fbfff210ccf54dc4fbcc7ca0c9f0'
  },
  {
    symbol: 'WORTH',
    name: 'Worthy',
    tokenAddress: '0xb94d7eb7b3e993c59e6084623b5debe09ad45611',
    tokenDecimals: 4,
    exchangeAddress: '0xa1dd55eebc8c7994ac94c591384c293d0bc8ad6c'
  },
  {
    symbol: 'Newco Token',
    name: 'NEWC',
    tokenAddress: '0x5642a6665d9af993fb3b02d272d4a214cd5c52e4',
    tokenDecimals: 18,
    exchangeAddress: '0x417511ca57f7aec22f020ba843dda451326b2453'
  },
  {
    symbol: 'XVZ',
    name: 'Verza',
    tokenAddress: '0xee2d318462fdb587b96f7e69606c6afd0e2ff633',
    tokenDecimals: 18,
    exchangeAddress: '0x70bcd0cc9870200bf3c3321e65c4a6b2d0917d8b'
  },
  {
    symbol: 'ocDai',
    name: 'Opyn Compound Dai',
    tokenAddress: '0x9ac585788c6a52caac0f8ccdc1df77eb62f8acc8',
    tokenDecimals: 8,
    exchangeAddress: '0x8cebc976b1e881ba0b7bd81a6b751411ecb1eb26'
  },
  {
    symbol: 'ocUSDC',
    name: 'Opyn Compound USDC',
    tokenAddress: '0x8413fc80ac9a43a85bddde99710f522fa30b005b',
    tokenDecimals: 8,
    exchangeAddress: '0x40e7337f1e06658cac8b087a397db16aba846a41'
  },
  {
    symbol: 'RLSS',
    name: 'Relentless',
    tokenAddress: '0xdbde8e7739cb273ce5b32cb5a28d1440e77b00a5',
    tokenDecimals: 0,
    exchangeAddress: '0x1dbcdf97d1a85687a9f32a7d91b29457ec89afe4'
  },
  {
    symbol: 'FUEL',
    name: 'Fuel Token',
    tokenAddress: '0xea38eaa3c86c8f9b751533ba2e562deb9acded40',
    tokenDecimals: 18,
    exchangeAddress: '0xda674f8929ae00d50e3aecb17567f645ff898756'
  },
  {
    symbol: 'PLC',
    name: 'PlusCoin',
    tokenAddress: '0x0835ecd15ddf08d4786304d71b4672dc5c40f011',
    tokenDecimals: 18,
    exchangeAddress: '0x79c472a7a8b0ce3a459903eabb3e680a226af7dc'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x7cfab87aac0899c093235b342ac0e5b1acf159eb',
    tokenDecimals: 18,
    exchangeAddress: '0xc0a56e98eef3235a8898d6a3e86a04fc1cc11427'
  },
  {
    symbol: 'MANA',
    name: 'Mana',
    tokenAddress: '0x35a9b440da4410dd63df8c54672b728970560328',
    tokenDecimals: 18,
    exchangeAddress: '0xd20b9c7644d3c4760a355c5a87244043542cbe2e'
  },
  {
    symbol: 'FLC',
    name: 'FlowchainCoin',
    tokenAddress: '0x5b53f9755f82439cba66007ec7073c59e0da4a7d',
    tokenDecimals: 18,
    exchangeAddress: '0x30f07ed7605d2a295051ce2ec33fb7efce72e580'
  },
  {
    symbol: 'TAD',
    name: 'Tantum Digital',
    tokenAddress: '0xc9aee96bcc6d545d09d353573867dcc47ead18b3',
    tokenDecimals: 0,
    exchangeAddress: '0x441863620579af688319d6caf6023f6654809b54'
  },
  {
    symbol: 'RDR',
    name: 'RADAR',
    tokenAddress: '0x3c9ca73d5309d38c6f2c21b78b9ae1f4b2441188',
    tokenDecimals: 4,
    exchangeAddress: '0x0385619bbeaed92ac451806a7ab79905973ce806'
  },
  {
    symbol: 'cUSD',
    name: 'cUSD Currency',
    tokenAddress: '0x5c406d99e04b8494dc253fcc52943ef82bca7d75',
    tokenDecimals: 6,
    exchangeAddress: '0x6dd417d7f277adb70e93e97b04ebf7d8a812cf98'
  },
  {
    symbol: 'ocDai',
    name: 'Opyn cDai Insurance',
    tokenAddress: '0xddac4aed7c8f73032b388efe2c778fc194bc81ed',
    tokenDecimals: 8,
    exchangeAddress: '0x8a0976500eed661202810bab030a057df15c4cc9'
  },
  {
    symbol: 'PDC',
    name: 'Project Decorum Coin',
    tokenAddress: '0x059d44edd2c15fd0050feb8cc97b3e93e5837506',
    tokenDecimals: 8,
    exchangeAddress: '0x890055b5f02204097c17fd47b9e8518e07891534'
  },
  {
    symbol: 'ocUSDC',
    name: 'Opyn cUSDC Insurance',
    tokenAddress: '0x8ed9f862363ffdfd3a07546e618214b6d59f03d4',
    tokenDecimals: 8,
    exchangeAddress: '0xe3a0a2431a093fed99037987ed0a88550e5e79aa'
  },
  {
    symbol: 'BSTRP',
    name: 'Bootstrap Fund',
    tokenAddress: '0x34e92adc107a565ae6cb10fd126132d9f3f72092',
    tokenDecimals: 18,
    exchangeAddress: '0x269b91a489128c7d9ae47d7ef321743cb649c66c'
  },
  {
    symbol: 'GST',
    name: 'Gastoken.io',
    tokenAddress: '0xa29c1c9a36e4d5abe72f8478fa16a10b35087d1b',
    tokenDecimals: 2,
    exchangeAddress: '0x12b9ec8dcc8474a908ac0cdbc23c638c36d7065d'
  },
  {
    symbol: 'ETHA1D1',
    name: 'Attractor Shell',
    tokenAddress: '0x093182e3d3eebc9257480da2045bdd5e7951de18',
    tokenDecimals: 18,
    exchangeAddress: '0xa0a72afd2c587aa3c4d364f8ba8cd577797fdb04'
  },
  {
    symbol: 'XMX',
    name: 'XMAX',
    tokenAddress: '0x0f8c45b896784a1e408526b9300519ef8660209c',
    tokenDecimals: 8,
    exchangeAddress: '0xaa282363bcf796b8e396978cb36dc741a0cc49e9'
  },
  {
    symbol: 'EOST',
    name: 'EOS TRUST',
    tokenAddress: '0x10923806eb6acbe01cd91fb616e7f0325e48c67b',
    tokenDecimals: 18,
    exchangeAddress: '0x39e0e3d01e34fca871f4a0e76e44a99357a13cd6'
  },
  {
    symbol: 'AVINOC',
    name: 'AVINOC Token',
    tokenAddress: '0xf1ca9cb74685755965c7458528a36934df52a3ef',
    tokenDecimals: 18,
    exchangeAddress: '0x09d4c0be8f80e3c99c69dac04987a93d690bad3e'
  },
  {
    symbol: 'FVR',
    name: 'Favor Token',
    tokenAddress: '0xd7362318a19bee70d1dad79fabe1d2b9f5ea722a',
    tokenDecimals: 3,
    exchangeAddress: '0x1495eda011a9dbbd77d0f5a949e04403e6bc2698'
  },
  {
    symbol: 'HERC',
    name: 'Hercules',
    tokenAddress: '0x2e91e3e54c5788e9fdd6a181497fdcea1de1bcc1',
    tokenDecimals: 18,
    exchangeAddress: '0x75e62639cad23116b26d462db05a76faa4f2e51d'
  },
  {
    symbol: 'CAMI',
    name: 'CAMI',
    tokenAddress: '0xa809cedee9b61956c768eaa10272dd5e0fd1a985',
    tokenDecimals: 4,
    exchangeAddress: '0x36bfbedc15f822a78940965ebb772a55b6a38a81'
  },
  {
    symbol: 'USDA',
    name: 'USDA',
    tokenAddress: '0x3c7b464376db7c9927930cf50eefdea2eff3a66a',
    tokenDecimals: 8,
    exchangeAddress: '0xc04c321d69d7162bf56461a998f8094942ca44b6'
  },
  {
    symbol: 'CBD',
    name: 'CBDCoin',
    tokenAddress: '0x0d73759437562a66c56da633bb948cc50291e157',
    tokenDecimals: 18,
    exchangeAddress: '0x05d16f95cf2777d6974babdd5a7df7c6cdb3300c'
  },
  {
    symbol: 'CPR',
    name: 'Cipher',
    tokenAddress: '0x20ae0ca9d42e6ffeb1188f341a7d63450452def6',
    tokenDecimals: 18,
    exchangeAddress: '0x41787157689ff0d16042f1f0f31fda57abad234d'
  },
  {
    symbol: 'Dane Token',
    name: 'DANE',
    tokenAddress: '0xfad09fca05d00cde1c038fe9a72b58659c78a157',
    tokenDecimals: 18,
    exchangeAddress: '0x18a8c0381735d102178110b3c72d42553d68d099'
  },
  {
    symbol: 'BTM',
    name: 'Bytom',
    tokenAddress: '0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750',
    tokenDecimals: 8,
    exchangeAddress: '0x7a48f9a2cfb0cb74d85866ded24e48b73dd243cb'
  },
  {
    symbol: 'URBEN',
    name: 'UrBen',
    tokenAddress: '0xd0bf154768b0f1f8cba50daa8960c285ce4c67f2',
    tokenDecimals: 4,
    exchangeAddress: '0x036697e1576f6f6c5d94620eadcde1969407314a'
  },
  {
    symbol: 'VIXLBC',
    name: 'VIX LBRY Credits',
    tokenAddress: '0xe7ee20bc30cc2564decb071ecee1b15ed71e3e6b',
    tokenDecimals: 18,
    exchangeAddress: '0xf166afb17a07027631088b7f143bdd3d0303ec42'
  },
  {
    symbol: 'WGU',
    name: 'Wrapped Gods Unchained Cards',
    tokenAddress: '0x22086294a7de92dfb492ab223658a3349cb756eb',
    tokenDecimals: 18,
    exchangeAddress: '0xe125a0434bc8f56b7da941e15fecbea671a89ab3'
  },
  {
    symbol: 'BURN',
    name: 'BURNI',
    tokenAddress: '0x64d56f087d87cdaeac8119c69c48d0d440d560a7',
    tokenDecimals: 18,
    exchangeAddress: '0x6614a8b47247bd63849c73aaaf60c939a991b3f9'
  },
  {
    symbol: 'BBY',
    name: 'BlocBuy',
    tokenAddress: '0xaf5e6afa14a5de9a48395869f4f887a63f7f755f',
    tokenDecimals: 18,
    exchangeAddress: '0x439e209d3cd7c20f5730e93d7a4acf0b6ab2b602'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xd6c8e96d3cdebabea1a339a34a7e0c76975a504c',
    tokenDecimals: 18,
    exchangeAddress: '0x42f51a3eb586dff7267d4651d7575feb73f5a4f9'
  },
  {
    symbol: 'FND',
    name: 'Insula Elba',
    tokenAddress: '0x9f73d7874aa731a6e3185e2fdc201a07c736f45b',
    tokenDecimals: 18,
    exchangeAddress: '0xb47500d62cf7e8d5f0fb52dd11df33d6b566e7e8'
  },
  {
    symbol: 'BTV',
    name: 'Bitcoin EVO',
    tokenAddress: '0x3917e933bd430c08304cae2aa6d9746b806406c2',
    tokenDecimals: 8,
    exchangeAddress: '0xcb8b6e1373f86f2563d5b34522768b63cf35920d'
  },
  {
    symbol: 'WTC',
    name: 'Walton Token',
    tokenAddress: '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74',
    tokenDecimals: 18,
    exchangeAddress: '0xb4467f6ed20f5bdfced03337bf1e9b524396d50d'
  },
  {
    symbol: 'FND',
    name: 'Insula Sark',
    tokenAddress: '0x10603633e9a021b8dbc1f0ccb172178b07dfb1f4',
    tokenDecimals: 18,
    exchangeAddress: '0x01a700dc924d837740b2cf5ea8c9fc46a5a76a3a'
  },
  {
    symbol: 'COV',
    name: 'Covesting',
    tokenAddress: '0xe2fb6529ef566a080e6d23de0bd351311087d567',
    tokenDecimals: 18,
    exchangeAddress: '0x77857c0c945d951f95ac18c9f5dcaf4df9bbec32'
  },
  {
    symbol: 'RESQ',
    name: 'Rescue Education Sanctuary & Quarantine',
    tokenAddress: '0x82b5590ecc9231b3a3f518b907557b5961f14242',
    tokenDecimals: 18,
    exchangeAddress: '0x1fd92be6317f01568059e310659d410f26780c5c'
  },
  {
    symbol: 'DOOM',
    name: 'DOOMER TOKEN',
    tokenAddress: '0xf4a96aa4daa6428d5b0849ef876646c03486ee53',
    tokenDecimals: 18,
    exchangeAddress: '0xe0dd02a435a3b5e44fb326aa7490d11dc2884209'
  },
  {
    symbol: 'HYPE',
    name: 'Hyper Token',
    tokenAddress: '0xf438e3a0c1bb9dc0ef6da672c97a282236d3f233',
    tokenDecimals: 18,
    exchangeAddress: '0x52f67623e3cbf0166fbd8bc560ab83e8970f800c'
  },
  {
    symbol: 'EXY',
    name: 'Experty Token',
    tokenAddress: '0x5c743a35e903f6c584514ec617acee0611cf44f3',
    tokenDecimals: 18,
    exchangeAddress: '0x659fc13990316de24706d99a143b18b9f45d0e0b'
  },
  {
    symbol: 'mETH',
    name: 'Mini Ethereum',
    tokenAddress: '0x6c158864d3b06113bfd9f5f2c219725fd5bc3923',
    tokenDecimals: 0,
    exchangeAddress: '0xb9cb15e17dd9b8b99b86d87a62627cd96dad30f6'
  },
  {
    symbol: 'GTX',
    name: 'GoalTime N',
    tokenAddress: '0x916885426255235da7a0bd90447986c00675f9ec',
    tokenDecimals: 18,
    exchangeAddress: '0xf6c2fc4147b321c9823548289d5320f23f32baeb'
  },
  {
    symbol: 'WST',
    name: 'Winsor token',
    tokenAddress: '0x2cf2f4e07ecc54740293df6d6fb4150d725a919f',
    tokenDecimals: 18,
    exchangeAddress: '0x364d93cfdd3ef09c1485c901a8bd06585cff5a60'
  },
  {
    symbol: 'BTF',
    name: 'BIT FOODIE',
    tokenAddress: '0x819860c8e60ac7a0e8b62e31e084568a430fedaf',
    tokenDecimals: 18,
    exchangeAddress: '0xf6f018ceab243c08e403b5c4e9c60c43c6b19ad3'
  },
  {
    symbol: '999',
    name: '999',
    tokenAddress: '0xbf05571988daab22d33c28bbb13566eae9dee626',
    tokenDecimals: 3,
    exchangeAddress: '0x7fe4c3e048a657ea2ccb146861318301e9d36ff9'
  },
  {
    symbol: 'xx',
    name: 'xx coin',
    tokenAddress: '0x89dd0a221a9ff138b4182826038605d7d3ffacc8',
    tokenDecimals: 0,
    exchangeAddress: '0x75b3e186e800ed21d62d9a7eafa2dcd301bacb07'
  },
  {
    symbol: 'POE',
    name: 'Po.et',
    tokenAddress: '0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195',
    tokenDecimals: 8,
    exchangeAddress: '0xef5fe5ffd7dcd0182886f3356eee2e82cb79883e'
  },
  {
    symbol: 'LIT',
    name: 'LIUM',
    tokenAddress: '0xf525cc44ba797d91413a490a3a7bf5532c8fd378',
    tokenDecimals: 18,
    exchangeAddress: '0xd98755c56d7806f155db12b24282e96a6ff00071'
  },
  {
    symbol: 'RIDE',
    name: 'RideNode',
    tokenAddress: '0x1d6364000dcae6c800aff1a7086a2cd7c56f88c1',
    tokenDecimals: 18,
    exchangeAddress: '0x02619126d2f0fd5ec06619e22db4c2ee81194971'
  },
  {
    symbol: 'NBC',
    name: 'Niobium',
    tokenAddress: '0x9f195617fa8fbad9540c5d113a99a0a0172aaedc',
    tokenDecimals: 18,
    exchangeAddress: '0xf758eef8711df5a95aa435506c86b8b722e35de8'
  },
  {
    symbol: 'SCOTT',
    name: 'Scott Shapiro',
    tokenAddress: '0xdf5ce35bf71bf78e8d2233f7ac8b73c34d6735f4',
    tokenDecimals: 18,
    exchangeAddress: '0x7216579c34f257ae86137cfb7f8fa8c4d5b9af6e'
  },
  {
    symbol: 'BRI',
    name: 'Britency',
    tokenAddress: '0x2f6f9ae909c1279f4281d0a7cd6fa146c949fc93',
    tokenDecimals: 18,
    exchangeAddress: '0x3416535051c57ebc67157d8e62141a3bac208dbe'
  },
  {
    symbol: 'STRU',
    name: 'UniStrudel',
    tokenAddress: '0x2882173e5afff3740a3615ede79ce81f357c44e6',
    tokenDecimals: 18,
    exchangeAddress: '0x6212d4358c9402ca6ca22f7d8798323de55c3ac8'
  },
  {
    symbol: 'KH',
    name: 'KH Token',
    tokenAddress: '0xcb182bcfbc6e3b71dc11ca7e5a3273842ae71421',
    tokenDecimals: 18,
    exchangeAddress: '0x6b099e9ac8dc9f3c0fbb56087a90768e8c801364'
  },
  {
    symbol: 'ELAMA',
    name: 'ELA Coin',
    tokenAddress: '0xfb444c1f2b718ddfc385cb8fd9f2d1d776b24668',
    tokenDecimals: 18,
    exchangeAddress: '0x054596f340e0aba794e924b19f7fddcd283fbce6'
  },
  {
    symbol: 'FXT',
    name: 'FuzeX Token',
    tokenAddress: '0x1829aa045e21e0d59580024a951db48096e01782',
    tokenDecimals: 18,
    exchangeAddress: '0xee78e75ccf5d4de03a94ec127f23764be3f7a870'
  },
  {
    symbol: 'QCAD',
    name: 'QCAD',
    tokenAddress: '0x4a16baf414b8e637ed12019fad5dd705735db2e0',
    tokenDecimals: 2,
    exchangeAddress: '0xf2cb7c71bfaeeb09d45dda8d31ed82fb09e596e3'
  },
  {
    symbol: 'XUC',
    name: 'Exchange Union Coin',
    tokenAddress: '0xc324a2f6b05880503444451b8b27e6f9e63287cb',
    tokenDecimals: 18,
    exchangeAddress: '0x86a644453afe3401a243c0d994e77937c75d3023'
  },
  {
    symbol: 'MBL',
    name: 'MovieBloc',
    tokenAddress: '0xb879da8b24c9b8685de8526cf492e954f165d74b',
    tokenDecimals: 18,
    exchangeAddress: '0x9946a4227d53d6b75165c5f9b7fd01d952b6d7e2'
  },
  {
    symbol: 'IDH',
    name: 'indaHash Coin',
    tokenAddress: '0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0',
    tokenDecimals: 6,
    exchangeAddress: '0x08444a961f9d5bfef8954bd665dd9b2d5e047f23'
  },
  {
    symbol: 'ENK',
    name: 'EnkronosToken',
    tokenAddress: '0x92b914f1ddcbb1d117a718e83c9ed7eb32fc44d1',
    tokenDecimals: 18,
    exchangeAddress: '0x9eff0f159e2d62cc00303f5588cf5bb359b9fbdc'
  },
  {
    symbol: 'GREEN',
    name: 'Green',
    tokenAddress: '0xb2089a7069861c8d90c8da3aacab8e9188c0c531',
    tokenDecimals: 8,
    exchangeAddress: '0xbfd3283102ce21dd2977e5d432e78e4523f7647e'
  },
  {
    symbol: 'AQU',
    name: 'Aquest Token',
    tokenAddress: '0x7756edf05ef3c2b321a85d77b5cbf7c8a9a7c247',
    tokenDecimals: 18,
    exchangeAddress: '0x45fae25fb18f26c91d306c135254bb3ce35e26ca'
  },
  {
    symbol: 'UGT',
    name: 'UG Token',
    tokenAddress: '0x43ee79e379e7b78d871100ed696e803e7893b644',
    tokenDecimals: 18,
    exchangeAddress: '0x109739630dd14f1430da59800b3b3e3a9f7ed835'
  },
  {
    symbol: 'ATCT',
    name: 'Atomic Core Token',
    tokenAddress: '0xfe01807f119d77c0c11bbe26b7a7bacfa391f8e4',
    tokenDecimals: 18,
    exchangeAddress: '0x54eebce18f37b34de860140e39b5261db2714777'
  },
  {
    symbol: 'ALN',
    name: 'AlunaToken',
    tokenAddress: '0x1b7b723e66a0dd33e8f5e8ec039b51acafcd66a5',
    tokenDecimals: 18,
    exchangeAddress: '0xcf33b8b2fe77ce4f47fd40ae6f8a1140cbd3d17d'
  },
  {
    symbol: 'FRM',
    name: 'Ferrum Network Token',
    tokenAddress: '0xe5caef4af8780e59df925470b050fb23c43ca68c',
    tokenDecimals: 6,
    exchangeAddress: '0xc4fc6d02db8283ef0006775025c71a08241d330d'
  },
  {
    symbol: 'DICK',
    name: 'DickheadCash',
    tokenAddress: '0x4310f1c214bd170e5ab0832534997689453c9a43',
    tokenDecimals: 0,
    exchangeAddress: '0x0b8216214953429116278e6bc734af7c731c3454'
  },
  {
    symbol: '∞',
    name: 'Good Karma',
    tokenAddress: '0xae616e72d3d89e847f74e8ace41ca68bbf56af79',
    tokenDecimals: 6,
    exchangeAddress: '0x77e622027b37e08a3745129da7e350cb64b70034'
  },
  {
    symbol: 'DAG',
    name: 'Constellation',
    tokenAddress: '0xa8258abc8f2811dd48eccd209db68f25e3e34667',
    tokenDecimals: 8,
    exchangeAddress: '0xdc67b478442a1acaa1c659dd41cdefbabe2eda4b'
  },
  {
    symbol: 'BND',
    name: 'FUNGIBLEBOND',
    tokenAddress: '0x5aa562496a59984980db181e581da1729b37dba2',
    tokenDecimals: 18,
    exchangeAddress: '0xc3e06fa778ccbccf7b303d8f92b3a28c01d2be1e'
  },
  {
    symbol: 'EAE',
    name: 'selfdrop.eu',
    tokenAddress: '0x7012f2a25840c7ece77d737f360fa0b8da89b65b',
    tokenDecimals: 0,
    exchangeAddress: '0x43c652474132dd1aa9750de7cf5444bbab350fa1'
  },
  {
    symbol: 'PPL',
    name: 'Qripplex',
    tokenAddress: '0x36dd88a0a0f53c90555087e57f758383978e64b5',
    tokenDecimals: 18,
    exchangeAddress: '0xca53e1e7fd42f8a70e667aeac170db7dfd089534'
  },
  {
    symbol: 'FORK',
    name: 'GastroAdvisorToken',
    tokenAddress: '0x5bb1632fa0023e1aa76a1ae92b4635c8dba49fa2',
    tokenDecimals: 18,
    exchangeAddress: '0x58c2b4313be743e228d7f89733233239a1046a97'
  },
  {
    symbol: 'UNIT',
    name: 'UNIT',
    tokenAddress: '0xa6121f235e68fcfb55ef1fc2de88b60f6dfc2699',
    tokenDecimals: 18,
    exchangeAddress: '0x111604ad5f8f6a4ad22b92772b42b03523c9b1d2'
  },
  {
    symbol: 'GOAT',
    name: 'GoatCash',
    tokenAddress: '0x9f452e458b024e82d6e3ff50a07b8de74c988523',
    tokenDecimals: 18,
    exchangeAddress: '0x8f489294a8dbffac155080a1ea8c5ec9db702936'
  },
  {
    symbol: 'DOWNDAI',
    name: 'Down Dai',
    tokenAddress: '0xef51576000b972569154e4372e8f636caf810784',
    tokenDecimals: 18,
    exchangeAddress: '0xcb34bb3bea8e133a4a1b33c33c94224abdec93c8'
  },
  {
    symbol: 'RIC',
    name: 'RIC',
    tokenAddress: '0xe2247cd82e431131f15b8c310547b92e6f89e7bb',
    tokenDecimals: 0,
    exchangeAddress: '0x79a4328b04038ec3029af5df45d3a0c9c43b22b2'
  },
  {
    symbol: 'BENJA',
    name: 'benjaCoin',
    tokenAddress: '0x38968746147bbaeb882f356ad9a57594bb158235',
    tokenDecimals: 8,
    exchangeAddress: '0x9d21dc709ad0951f25a9c5f1af4119de2d31c30f'
  },
  {
    symbol: 'UPDAI',
    name: 'Up Dai',
    tokenAddress: '0x78ff871ecdbc2dab4212772192b48cae1ec74b8e',
    tokenDecimals: 18,
    exchangeAddress: '0x1f4488e2569b78c5df38c0eefdbc25a205931305'
  },
  {
    symbol: 'BCAP',
    name: 'BCAP',
    tokenAddress: '0x1f41e42d0a9e3c0dd3ba15b527342783b43200a9',
    tokenDecimals: 0,
    exchangeAddress: '0x773518be6a946d634de27a44daabbc624b689b54'
  },
  {
    symbol: 'eBTG',
    name: 'eBGOLD',
    tokenAddress: '0xc51c938c4d513780c66c722a41c197d3a89fa9a8',
    tokenDecimals: 8,
    exchangeAddress: '0xa49ff527004adac0018643f596b4c4e3e0a8396c'
  },
  {
    symbol: 'DOWNDAI',
    name: 'Down Dai',
    tokenAddress: '0xbc95fd0847e5982052f246402c9ca07d6b147139',
    tokenDecimals: 18,
    exchangeAddress: '0x70e76de7a90a77f2bdaa3a6fe7950c247591c5ba'
  },
  {
    symbol: 'COHETH:DAI',
    name: 'cohETH 270:1 DAI',
    tokenAddress: '0x3d291c0f8cc7ec762ed70264e076252ba41731ba',
    tokenDecimals: 18,
    exchangeAddress: '0x025c1413da2db00cf66f566206d6d9cc1667efc4'
  },
  {
    symbol: 'BURN',
    name: 'Burni',
    tokenAddress: '0x076a7c93343579355626f1426de63f8827c9b9b2',
    tokenDecimals: 18,
    exchangeAddress: '0xf162becaf8be6a2aa5d050e35e3489d1b440e5bb'
  },
  {
    symbol: 'PEG',
    name: 'PegNet Token',
    tokenAddress: '0x996b396b88cc4a1d8df3dbd1c088cdfaee17e6d4',
    tokenDecimals: 8,
    exchangeAddress: '0xfcaf3b46118024e5fb46fcf2daab8356bed7bb1f'
  },
  {
    symbol: 'SSLE',
    name: 'Scott Stevenson Legal Engineering',
    tokenAddress: '0xbdbf67d9bcb35e2bb7e4951002c6d70013196972',
    tokenDecimals: 18,
    exchangeAddress: '0x42d0239c1a20e66bd92735189e5cdd92f64e8b7a'
  },
  {
    symbol: 'DOWNDAI',
    name: 'Down Dai',
    tokenAddress: '0xa1845c1bb4f76e8dfab032a0f2f6b237c114ecc2',
    tokenDecimals: 18,
    exchangeAddress: '0xb3ab20695cb498698da938a7bab828f5ebd5ae48'
  },
  {
    symbol: 'ECO',
    name: 'ZeroWaste',
    tokenAddress: '0xae3d5e21ffe1a13529e6dc0a428d5fc351580363',
    tokenDecimals: 8,
    exchangeAddress: '0xe7b5116729856bd6d33c149b04b360278c379c47'
  },
  {
    symbol: 'FORM',
    name: 'ContactForm',
    tokenAddress: '0x4f64d8ed0b0acbb5a24bfc4bf22ff5011469bbdd',
    tokenDecimals: 10,
    exchangeAddress: '0x8dbd301cc67b41a19587ce3416a4664672e37c5b'
  },
  {
    symbol: 'SPACE',
    name: 'Space Bucks',
    tokenAddress: '0x965714ad80bc87c2ebcb83fcea19d24543db6174',
    tokenDecimals: 18,
    exchangeAddress: '0x0364256c46019c2a0d492ca729d7100992a18d4f'
  },
  {
    symbol: 'CCC',
    name: 'Coinect core coin',
    tokenAddress: '0x9950ca72131f82884ff6513367aacce69ba18a81',
    tokenDecimals: 18,
    exchangeAddress: '0x05ab2dd0af6796553a2921dd2d0d7262fc02c9e3'
  },
  {
    symbol: 'DOGEX',
    name: 'DOGEX',
    tokenAddress: '0xf8d47138161c8175538ea1300e7bf7afc073445a',
    tokenDecimals: 0,
    exchangeAddress: '0x4612bb20d8a73cf616b78b1841a4451228619e11'
  },
  {
    symbol: 'DOGEX',
    name: 'DogeX',
    tokenAddress: '0x2b6237d6ff66d4af737a1491841fe7cad6602bea',
    tokenDecimals: 18,
    exchangeAddress: '0x5f192d8f4348cf76e1be0bfdc0a2b31ded0f4d08'
  },
  {
    symbol: 'KEE',
    name: 'Kee Dollars',
    tokenAddress: '0x43c5bccb0233fcb6a9f5c6720fb7a195f15895e0',
    tokenDecimals: 18,
    exchangeAddress: '0x12f81b9e47770478f76e304526e45b7ebda3629a'
  },
  {
    symbol: 'LEO',
    name: 'LEO Token',
    tokenAddress: '0x3cca052c998e0fd76d67892cff43b462ada9dedf',
    tokenDecimals: 18,
    exchangeAddress: '0xee4b44e3a8bdbb19aaf6439983f2d5adffe7c3f7'
  },
  {
    symbol: 'OXY',
    name: 'OXY',
    tokenAddress: '0xd83a162d4808c370a1445646e64cc4861eb60b92',
    tokenDecimals: 8,
    exchangeAddress: '0x3324051c9a8f131bd4e883ae178ea0ffe3b7a51c'
  },
  {
    symbol: 'VGTN',
    name: 'Video Games Token',
    tokenAddress: '0xb52fc0f17df38ad76f290467aab57cabaeeada14',
    tokenDecimals: 18,
    exchangeAddress: '0xd37bbd1daa4540bfd24145663c0b1010502fc80c'
  },
  {
    symbol: 'XPAYPro',
    name: 'XPAY Pro Token',
    tokenAddress: '0x565ac8639e53a4bff4afb34ac63a49d7bf01500e',
    tokenDecimals: 18,
    exchangeAddress: '0x6d0f127f96473e77416c5b6d68b32bc6945a1211'
  },
  {
    symbol: 'BTHR',
    name: 'Bethereum',
    tokenAddress: '0xa02e3bb9cebc03952601b3724b4940e0845bebcf',
    tokenDecimals: 18,
    exchangeAddress: '0xaf7c3dc8721b286ea89c8bda79f16b77fe08b31e'
  },
  {
    symbol: 'FETH',
    name: 'Flash Ether v0.1',
    tokenAddress: '0x659d82b4f4c23c40feff2e3d65e4e1c7a38e20fd',
    tokenDecimals: 18,
    exchangeAddress: '0x0be9b33670f1ce97fe49aa3729905c3fec8cc969'
  },
  {
    symbol: 'iETH',
    name: 'Fulcrum ETH iToken',
    tokenAddress: '0x77f973fcaf871459aa58cd81881ce453759281bc',
    tokenDecimals: 18,
    exchangeAddress: '0x8994f572d84c51a7c38acdba8a5490579b919ddc'
  },
  {
    symbol: 'SLV',
    name: 'Silverway',
    tokenAddress: '0x4c1c4957d22d8f373aed54d0853b090666f6f9de',
    tokenDecimals: 18,
    exchangeAddress: '0x7cccbe696a89015980e1b6ff3262c534a519a4ed'
  },
  {
    symbol: 'Only',
    name: 'OnlyChain',
    tokenAddress: '0x9eec65e5b998db6845321baa915ec3338b1a469b',
    tokenDecimals: 18,
    exchangeAddress: '0xfa4bc27eae86b39c9259338cdd543c29c58d8ddb'
  },
  {
    symbol: 'A',
    name: 'Alpha',
    tokenAddress: '0xffc63b9146967a1ba33066fb057ee3722221acf0',
    tokenDecimals: 18,
    exchangeAddress: '0x63854180bf254bf6a25e273d878135938116564a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914',
    tokenDecimals: 18,
    exchangeAddress: '0x049116640a05944113a6fb466812aaf3abab9052'
  },
  {
    symbol: 'SYB7',
    name: 'SYB7ERC20',
    tokenAddress: '0x86a49f08ab6531a3e0e814c75f36de661b986ca1',
    tokenDecimals: 18,
    exchangeAddress: '0x985c3a340366d1f681d7d07a4dcf5a8732a18dc3'
  },
  {
    symbol: 'AXPR',
    name: 'aXpire',
    tokenAddress: '0xc39e626a04c5971d770e319760d7926502975e47',
    tokenDecimals: 18,
    exchangeAddress: '0xc02c04456c71ffb70086ce5582f4784bed111718'
  },
  {
    symbol: 'KCR',
    name: 'KreditCrown',
    tokenAddress: '0x71cd2663787acc816716c565d4facc443dd933f7',
    tokenDecimals: 10,
    exchangeAddress: '0xbdecd7b4650d54cf9b1b1c356cdb13e2eb1d2e68'
  },
  {
    symbol: 'PAT',
    name: 'PATRON',
    tokenAddress: '0xf3b3cad094b89392fce5fafd40bc03b80f2bc624',
    tokenDecimals: 18,
    exchangeAddress: '0xe9c282690358f9e6366fd7c61e2aa74443dda96e'
  },
  {
    symbol: 'MANU',
    name: 'ManuCoin',
    tokenAddress: '0x7cad0ed5a0b71c726353a6bad37ba7cfa4ce0e60',
    tokenDecimals: 18,
    exchangeAddress: '0xcd7f46d27d51a7101574b445b42a61bc1a99a612'
  },
  {
    symbol: 'SHOP',
    name: 'Shopin Token',
    tokenAddress: '0x91edfc9e48a6f9a2da28a3dcdad310fb928641db',
    tokenDecimals: 18,
    exchangeAddress: '0xa67ca08d5605f8a3c6624dbdc46f38fd1c1ff36f'
  },
  {
    symbol: 'TP3',
    name: 'Token Play',
    tokenAddress: '0x9f76ff3336597feab30f5a66a053ae4a4a7ebe13',
    tokenDecimals: 18,
    exchangeAddress: '0x0df6a571b25d6ae6a66ba87cbe8ce4bddc0fbd63'
  },
  {
    symbol: 'BXC',
    name: 'BtcEX Coin',
    tokenAddress: '0x1bbe0d2d0a284ef9118ee69d356fcdd5948bacf4',
    tokenDecimals: 18,
    exchangeAddress: '0x50a521982f6665d71b82a7adef0af247fcfaac0f'
  },
  {
    symbol: 'ARX',
    name: 'ARXToken',
    tokenAddress: '0x9b7d9aaef003c0cba76a6556e0ebbc117144e9f9',
    tokenDecimals: 6,
    exchangeAddress: '0x18fd2536f936c77f50554924db3dd741929641bf'
  },
  {
    symbol: 'RET',
    name: 'Reearn Token',
    tokenAddress: '0xd68515dbb439ac30befaedaff7487b3a00b57659',
    tokenDecimals: 18,
    exchangeAddress: '0x395bd29a994d2528c1161543b2f7858a735aa9e7'
  },
  {
    symbol: 'PAN',
    name: 'Pantos Token',
    tokenAddress: '0x536381a8628dbcc8c70ac9a30a7258442eab4c92',
    tokenDecimals: 8,
    exchangeAddress: '0x4991c918f9658a3a4f0af0a1d77d7799da5e3ad8'
  },
  {
    symbol: 'XRT',
    name: 'Robonomics',
    tokenAddress: '0x7de91b204c1c737bcee6f000aaa6569cf7061cb7',
    tokenDecimals: 9,
    exchangeAddress: '0x76cc30859542dbba23c83b2582e09c5212a84f70'
  },
  {
    symbol: 'RDL',
    name: 'Rob Leonhard',
    tokenAddress: '0x16aa3823ba0702b209874dff0a123221880b2214',
    tokenDecimals: 18,
    exchangeAddress: '0xef8f7453dc9c6d0233b3b56d6e6110cc5021b97c'
  },
  {
    symbol: 'Pesino',
    name: 'PESOANDINO',
    tokenAddress: '0x36d1ce91941ce0690dd0ea593b0f0472003742e3',
    tokenDecimals: 4,
    exchangeAddress: '0x38b62de296447c520011705f919cb26e1549a08d'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb',
    tokenDecimals: 18,
    exchangeAddress: '0x683f0f9c89cef1aeeae612244147e421b5759767'
  },
  {
    symbol: 'RORY',
    name: 'Rorys',
    tokenAddress: '0x5a03a6f0a8ce6c29088979a6e0cf1ccd9ba985a3',
    tokenDecimals: 18,
    exchangeAddress: '0xa57a6a8b00dd29271deffa7ae5b8571ec787459d'
  },
  {
    symbol: 'ETHTC',
    name: 'ETHTC',
    tokenAddress: '0xb6fdd8a5b6069de409288bc30c69c5856dc67ac8',
    tokenDecimals: 2,
    exchangeAddress: '0x3e469f2257768b98f98501781137dbbe214ed7b1'
  },
  {
    symbol: 'TCH',
    name: 'Teacher Coin',
    tokenAddress: '0x3b4b29c4c1872a60d09937686bd2b358db9dee8a',
    tokenDecimals: 18,
    exchangeAddress: '0x5abcc0f3c82d9d6326f87712a29d30cbe3a04140'
  },
  {
    symbol: 'BKC',
    name: 'Bankcoin Cash',
    tokenAddress: '0xc88be04c809856b75e3dfe19eb4dcf0a3b15317a',
    tokenDecimals: 8,
    exchangeAddress: '0xc2ab6fa66e5adaf31bd84407cfa0928b550da6f6'
  },
  {
    symbol: 'TOKEN',
    name: 'Free Token',
    tokenAddress: '0x0f5adb011abd9d2802d422971e992854abf47e7c',
    tokenDecimals: 18,
    exchangeAddress: '0xeb260b39199a79ca9f7959ca2062abc64feb773c'
  },
  {
    symbol: 'ocDai',
    name: 'Opyn cDai Insurance',
    tokenAddress: '0x98cc3bd6af1880fcfda17ac477b2f612980e5e33',
    tokenDecimals: 8,
    exchangeAddress: '0xa6923533a6362008e9b536271c2bdc0ff1467d3c'
  },
  {
    symbol: 'VER',
    name: 'Versus',
    tokenAddress: '0x8354954c51d77b26fe7cd03c93ed075d0c2deba7',
    tokenDecimals: 18,
    exchangeAddress: '0x48ce7d1d2a26e3b7c3f5233fcd31f9691d56be9b'
  },
  {
    symbol: 'ATL',
    name: 'ATLANT Token',
    tokenAddress: '0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05',
    tokenDecimals: 18,
    exchangeAddress: '0xe20c242133e8f24d45cfef2114c3a1568a4264ef'
  },
  {
    symbol: 'PSC',
    name: 'Polar Stern Capital',
    tokenAddress: '0x3936f0968a576e112b3cbbc439855c353158b0e5',
    tokenDecimals: 8,
    exchangeAddress: '0x2bdb24c1cdcd22da0bad2dc1fa431dc242034ce8'
  },
  {
    symbol: 'PWZ',
    name: 'Powerlight',
    tokenAddress: '0x86b9018bd65629e047d4bee2a96cbea8931d6ea1',
    tokenDecimals: 18,
    exchangeAddress: '0x1ad2e00ee484eb3c1fe4a0da69a481a681a7c229'
  },
  {
    symbol: 'INS',
    name: 'INS Token',
    tokenAddress: '0x5b2e4a700dfbc560061e957edec8f6eeeb74a320',
    tokenDecimals: 10,
    exchangeAddress: '0x4b6c78ca78776255628bd514ff23db13aea39e89'
  },
  {
    symbol: 'POLY',
    name: 'Polymath',
    tokenAddress: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
    tokenDecimals: 18,
    exchangeAddress: '0x3645bf7cbf0a0bbb182cf2672477d6558419fda0'
  },
  {
    symbol: 'UND',
    name: 'United Network Distribution',
    tokenAddress: '0xbe6ac6b50f577205c9d107f37b6e205aa6acc5d4',
    tokenDecimals: 18,
    exchangeAddress: '0x5fe46d0031993b600b79003cfcd41aae729b162c'
  },
  {
    symbol: 'fmETH',
    name: 'Flash-Mintable ETH',
    tokenAddress: '0xd1528d08bf8e14e5573b487b6cfbdbfc0f0bd2aa',
    tokenDecimals: 18,
    exchangeAddress: '0xfb015575c4503765d960aab8480c0bfa171ef307'
  },
  {
    symbol: 'FlashNMR',
    name: 'FlashNumeraire',
    tokenAddress: '0xc909b390bf33422d1ea2e23086d08b54b6047128',
    tokenDecimals: 18,
    exchangeAddress: '0xfd8ee010dedc91393ecc531c9f30321026830752'
  },
  {
    symbol: 'FlashDAI',
    name: 'FlashDai Stablecoin',
    tokenAddress: '0x1b7d409afc87b330aa52ca87892cddab50e47cf7',
    tokenDecimals: 18,
    exchangeAddress: '0xbd6187f376879476bf7eeeb1148316eda1c9a8d5'
  },
  {
    symbol: 'FlashUSDT',
    name: 'FlashTether USD',
    tokenAddress: '0x433faefc9c56757b79ace724632525d024a2b5a1',
    tokenDecimals: 6,
    exchangeAddress: '0x68f7fa6bef2df37804a2693c10601e7000b173d1'
  },
  {
    symbol: 'FlashUSDC',
    name: 'FlashUSDC',
    tokenAddress: '0x0a867b1ba154a641a6cf4d9c8ba994f590793150',
    tokenDecimals: 6,
    exchangeAddress: '0x75bc266c750ef8467f84ef8aac75c26d9c6cd40b'
  },
  {
    symbol: 'UTK',
    name: 'UTRUST Token',
    tokenAddress: '0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38',
    tokenDecimals: 18,
    exchangeAddress: '0x94d81fbd070138905de0d861bff97fc76a630099'
  },
  {
    symbol: 'FlashFlashDAI',
    name: 'FlashFlashDai Stablecoin',
    tokenAddress: '0xaa8e7c65a895408f9a6944b07a6f83d1871e6fd6',
    tokenDecimals: 18,
    exchangeAddress: '0xd8dba165cde1e09aa49fcf084d09fa3dc4b9c020'
  },
  {
    symbol: 'XEN',
    name: 'XENIACOIN',
    tokenAddress: '0x4bb98d82fd0058e1ce97b71dc5c54b6d98c8c531',
    tokenDecimals: 13,
    exchangeAddress: '0x4f8b891552f4932f1071412bba64a2b1620f2c9e'
  },
  {
    symbol: 'DMEX',
    name: 'DMEX',
    tokenAddress: '0x6263e260ff6597180c9538c69af8284edeacec80',
    tokenDecimals: 18,
    exchangeAddress: '0xb79bd0217737d240a075ad7275746f386a453e45'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x929507cd3d90ab11ec4822e9eb5a48eb3a178f19',
    tokenDecimals: 18,
    exchangeAddress: '0x9b5592c034dff5241d36821edc8378753c98094e'
  },
  {
    symbol: 'BOX',
    name: 'BOX Token',
    tokenAddress: '0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f',
    tokenDecimals: 18,
    exchangeAddress: '0x1ed8e2e5ce43da4e3aa1d6e4070af996985bcdf1'
  },
  {
    symbol: 'Suter',
    name: 'Suterusu',
    tokenAddress: '0xba8c0244fbdeb10f19f6738750daeedf7a5081eb',
    tokenDecimals: 18,
    exchangeAddress: '0xbb2f842bccb1450b2526f36e03cd780f5dc4e140'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x9b5592c034dff5241d36821edc8378753c98094e',
    tokenDecimals: 18,
    exchangeAddress: '0x49d31c03980d8d41b7f60889af9e73f4d7dd2caf'
  },
  {
    symbol: 'ZLA',
    name: 'Zilla Token',
    tokenAddress: '0xfd8971d5e8e1740ce2d0a84095fca4de729d0c16',
    tokenDecimals: 18,
    exchangeAddress: '0xf38803116e94d8ad19ba421b5039e3f435b79179'
  },
  {
    symbol: 'XMOO',
    name: 'MOO token',
    tokenAddress: '0x221535cbced4c264e53373d81b73c29d010832a5',
    tokenDecimals: 18,
    exchangeAddress: '0x6a6ae1e7a865e00f7d94be16263ab86ec2085817'
  },
  {
    symbol: 'ICNQ',
    name: 'Iconiq Lab Token',
    tokenAddress: '0xb3e2cb7cccfe139f8ff84013823bf22da6b6390a',
    tokenDecimals: 18,
    exchangeAddress: '0xc000fd75e5572d419b231c2e42e5d000408b4d22'
  },
  {
    symbol: 'NLINK',
    name: 'NuLink',
    tokenAddress: '0x493c8d6a973246a7b26aa8ef4b1494867a825de5',
    tokenDecimals: 3,
    exchangeAddress: '0xc31e9177e6a6967b6265f83c4593658c8e2e4cb2'
  },
  {
    symbol: 'OBTC',
    name: 'ObitanChain',
    tokenAddress: '0x8fc01e6cbdffaf09b54f423f9bb1f856b22e47b2',
    tokenDecimals: 8,
    exchangeAddress: '0x52b20714ecd98776d6c878bdda5245d7b126cb11'
  },
  {
    symbol: 'oyDai',
    name: 'Opyn iearnDai insurance',
    tokenAddress: '0xc714cea4daaed7fbc66f936b69e79ec0ee998d93',
    tokenDecimals: 15,
    exchangeAddress: '0xa61f4069b9a4be178254e79cdd7269c58c93708b'
  },
  {
    symbol: 'fmETH',
    name: 'Flash-Mintable ETH',
    tokenAddress: '0x09b4c8200f0cb51e6d44a1974a1bc07336b9f47f',
    tokenDecimals: 18,
    exchangeAddress: '0xe04c5b953c2b2f48e4826b1da0e468073995fb98'
  },
  {
    symbol: 'FlashcDAI',
    name: 'FlashCompound Dai',
    tokenAddress: '0x7813f2de421ac374dffdef2b20ed32770a1ed6ce',
    tokenDecimals: 8,
    exchangeAddress: '0x57ef0897bf35604d87d7939cb7fa1b1433184fbd'
  },
  {
    symbol: 'KERN',
    name: 'KernCoin',
    tokenAddress: '0x46621967eff9ac56b4c12d39548a96aad99e4966',
    tokenDecimals: 2,
    exchangeAddress: '0x7035e6159e1c1503e39589e2fa465ce1ac7178e7'
  },
  {
    symbol: 'HMQ',
    name: 'Humaniq',
    tokenAddress: '0xcbcc0f036ed4788f63fc0fee32873d6a7487b908',
    tokenDecimals: 8,
    exchangeAddress: '0x1edf95301078902e1a983dc26726c810549a91a3'
  },
  {
    symbol: 'OMX',
    name: 'Omix',
    tokenAddress: '0xb5dbc6d3cf380079df3b27135664b6bcf45d1869',
    tokenDecimals: 8,
    exchangeAddress: '0xdc73cb3138dc4a2f4db1b55c4f55207f87511174'
  },
  {
    symbol: 'NCT',
    name: 'Nectar',
    tokenAddress: '0x9e46a38f5daabe8683e10793b06749eef7d733d1',
    tokenDecimals: 18,
    exchangeAddress: '0x0d3a89dd6013fa16f5826195b12b0d4c64b3cf40'
  },
  {
    symbol: 'PASS',
    name: 'Blockpass',
    tokenAddress: '0xee4458e052b533b1aabd493b5f8c4d85d7b263dc',
    tokenDecimals: 6,
    exchangeAddress: '0x67949696c8ab677333e6eb7da6c8e7062f5eac4f'
  },
  {
    symbol: 'OSPV',
    name: 'Onyx S&P 500',
    tokenAddress: '0xfcce9526e030f1691966d5a651f5ebe1a5b4c8e4',
    tokenDecimals: 18,
    exchangeAddress: '0xa977a299ec60ae113e2bc79534bc4f788dfb3752'
  },
  {
    symbol: 'EUM',
    name: 'Elitium',
    tokenAddress: '0x6ab4a7d75b0a42b6bc83e852dab9e121f9c610aa',
    tokenDecimals: 18,
    exchangeAddress: '0xc6ed5e59f75220b3eabcbfa20a7805db015353de'
  },
  {
    symbol: '0xLTC',
    name: '0xLitecoin Token',
    tokenAddress: '0x33d99efc0c3cc4f93da6931ec2cccf19ca874b6d',
    tokenDecimals: 8,
    exchangeAddress: '0x6eecc267c9aeb3f6199926487e30f3cb370032f8'
  },
  {
    symbol: 'OSPVS',
    name: 'Onyx S&P 500 Short',
    tokenAddress: '0xf7d1f35518950e78c18e5a442097ca07962f4d8a',
    tokenDecimals: 18,
    exchangeAddress: '0xb7cb61870dacc9f643c9825a0b9b5b63f3ad89f8'
  },
  {
    symbol: 'Seele',
    name: 'SeeleToken',
    tokenAddress: '0xb1eef147028e9f480dbc5ccaa3277d417d1b85f0',
    tokenDecimals: 18,
    exchangeAddress: '0x305b72523891ca145e1ae7eb3fb917f8d2ac72c5'
  },
  {
    symbol: 'NKL',
    name: 'Nickel Token',
    tokenAddress: '0x3bd85455ac58cd787e327ed993f8d92225f08f68',
    tokenDecimals: 18,
    exchangeAddress: '0x450e41832a0ca6bd8bb69695c30eed43ccf96282'
  },
  {
    symbol: 'MITx',
    name: 'Morpheus Infrastructure Token',
    tokenAddress: '0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6',
    tokenDecimals: 18,
    exchangeAddress: '0x65c70b31425d3547fb132813b56634bb261238d2'
  },
  {
    symbol: 'oCRV',
    name: 'Opyn y.curve.fi Insurance',
    tokenAddress: '0x4ba8c6ce0e855c051e65dfc37883360efaf7c82b',
    tokenDecimals: 15,
    exchangeAddress: '0x21f5e9d4ec20571402a5396084b1634314a68c97'
  },
  {
    symbol: 'TING',
    name: 'Tingles',
    tokenAddress: '0xd1b183f425f7e6a0c83ab1cd84cfde2d84ba049d',
    tokenDecimals: 4,
    exchangeAddress: '0x2682867c58a18342cef4f57493a93c6e9799a4e9'
  },
  {
    symbol: 'CSO',
    name: 'COINSTO',
    tokenAddress: '0x2a469a22101f1f672b745d729d13ab8dbd203c9b',
    tokenDecimals: 8,
    exchangeAddress: '0x72f0b15771e45953589668a266f6cd489e7285e9'
  },
  {
    symbol: 'TIME',
    name: 'James McCall',
    tokenAddress: '0xaba2b920db501dbeb8651bcec8660cb871cecac1',
    tokenDecimals: 18,
    exchangeAddress: '0x0122fc49393761e0cd8feea831125b80ffaf4c52'
  },
  {
    symbol: 'BFT',
    name: 'BF Token',
    tokenAddress: '0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f',
    tokenDecimals: 18,
    exchangeAddress: '0xb4d6568271c96304fb246182bb8abcb2db4735f0'
  },
  {
    symbol: 'MAL',
    name: 'marble',
    tokenAddress: '0xe583844f643577a1fcad644ca1b925ad1742f9cf',
    tokenDecimals: 18,
    exchangeAddress: '0x45be020931314205636b801bc98f4954b558b964'
  },
  {
    symbol: 'NOME',
    name: 'Nome',
    tokenAddress: '0x04dec15e5178153997013c075e80cd0132840736',
    tokenDecimals: 18,
    exchangeAddress: '0x6642ec01da6d149324c8688d7e7666dfad2a12de'
  },
  {
    symbol: 'BCPT',
    name: 'BLOCKMASON CREDIT PROTOCOL TOKEN',
    tokenAddress: '0x1c4481750daa5ff521a2a7490d9981ed46465dbd',
    tokenDecimals: 18,
    exchangeAddress: '0x0e1f41f9a835c6cdd7d0e974d32b08482ad08202'
  },
  {
    symbol: 'MAX',
    name: 'Max',
    tokenAddress: '0x110cb817090c363b66f548bed8db74bedeafebb7',
    tokenDecimals: 18,
    exchangeAddress: '0x096659a001e8e13778d741634fdbc3ac976b0700'
  },
  {
    symbol: 'Tive',
    name: 'Tidal Wave',
    tokenAddress: '0x0df0a47a100ca5c1dab64da49b0950a6139f36cd',
    tokenDecimals: 18,
    exchangeAddress: '0xfe7ba5add67e7698a195069c9c758b18d2d95b7b'
  },
  {
    symbol: 'NET',
    name: 'Nordic Energy Token',
    tokenAddress: '0x4d0a4c762bd7f742096daaf5911dcf9c94b9ea95',
    tokenDecimals: 8,
    exchangeAddress: '0x7b0f43be88432b4d3c2258b5e31be7e2fa02434a'
  },
  {
    symbol: 'WHALE',
    name: 'WhaleCoin',
    tokenAddress: '0x804e26c4eff0bb196b805bdfb5b29ab828cf0b1f',
    tokenDecimals: 18,
    exchangeAddress: '0xd5af8eec29b73fd3f95df25c67d4e5fd7251fd40'
  },
  {
    symbol: 'OUSD',
    name: 'Onyx USD',
    tokenAddress: '0xd2d01dd6aa7a2f5228c7c17298905a7c7e1dfe81',
    tokenDecimals: 18,
    exchangeAddress: '0x06cabd84c20fdd327142fbca1ff5a02f82576dd4'
  },
  {
    symbol: 'Nlink',
    name: 'New Link coin',
    tokenAddress: '0xf1252560e9bf579550622f25c533fea1279e10a1',
    tokenDecimals: 8,
    exchangeAddress: '0x6ab4035a97508ee9627d8ace430a713f7e60dd58'
  },
  {
    symbol: 'DEng',
    name: 'DEng Coin',
    tokenAddress: '0x6957cfb6f6400279aa56f6de9b172ab5462034ff',
    tokenDecimals: 3,
    exchangeAddress: '0x1910b8a9e335161d62bf9f1454dbb753f2ab413d'
  },
  {
    symbol: 'ABE',
    name: 'Abes',
    tokenAddress: '0x5cb2b272b2d83e8ccc140a4441d45464af6d9f9a',
    tokenDecimals: 18,
    exchangeAddress: '0xf152d7c042ff3dc406603a5a6a76ab3f044d24c0'
  },
  {
    symbol: 'ATH',
    name: 'Athencoin',
    tokenAddress: '0xd8b28668bba84cf48e19805c9f58758b01844b41',
    tokenDecimals: 8,
    exchangeAddress: '0x5346dfccadcf60d8013e6431a9cab4dac77e475a'
  },
  {
    symbol: 'ATH',
    name: 'Athencoin',
    tokenAddress: '0xe15ae1cf8bc11cd3c7e43f6422279cd23e679338',
    tokenDecimals: 8,
    exchangeAddress: '0xf47178efbae7a28d6eaaf24f7c5df93f5b5531fd'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xd7f69554c3239ba358db5366465ddbd441ece210',
    tokenDecimals: 18,
    exchangeAddress: '0xdf2607f04a0d60bdeacddf53bd96e1f18d1bb53d'
  },
  {
    symbol: 'ETHM',
    name: 'Ethereum Meta',
    tokenAddress: '0xd5dad1db7f112037c0c6cf0792dc2a7866bfd136',
    tokenDecimals: 18,
    exchangeAddress: '0x3fa0133c31a479c9d482ab0963db7d0012fc007c'
  },
  {
    symbol: 'TGRM',
    name: 'MWAVS',
    tokenAddress: '0x587b6e61f7c7b1173eb283205d03cafab7cc57e1',
    tokenDecimals: 18,
    exchangeAddress: '0xd2b40ff04aecc42bd2b9402e1cd591782582072d'
  },
  {
    symbol: 'AKT',
    name: 'Akropolis',
    tokenAddress: '0x395f47e890cd81307c5fa8814771b93100283daa',
    tokenDecimals: 18,
    exchangeAddress: '0xe79b18611d4af9d31eb531b1c2f97fbd1a4c5cdd'
  },
  {
    symbol: 'BETHER',
    name: 'Bethereum',
    tokenAddress: '0x14c926f2290044b647e1bf2072e67b495eff1905',
    tokenDecimals: 18,
    exchangeAddress: '0xb4614615092d4a924f066f35c5dc7753e2d131c3'
  },
  {
    symbol: 'CDA.ONE',
    name: 'CommunityDigitalAsset',
    tokenAddress: '0x3a24bd487e9459f8eb2334e466510cd55ff3197c',
    tokenDecimals: 18,
    exchangeAddress: '0x54fb1444f6a81b5050144172114447755d20db63'
  },
  {
    symbol: 'CANDY',
    name: 'CandyHCoin',
    tokenAddress: '0x45555629aabfea138ead1c1e5f2ac3cce2add830',
    tokenDecimals: 8,
    exchangeAddress: '0x103953f7e2d3931ceccf416da0c2a25bb69e58fa'
  },
  {
    symbol: 'AMGCASH',
    name: 'AMGCASH',
    tokenAddress: '0xf104c21e2fb98ed486147ac0cecdcbc2ab813d6c',
    tokenDecimals: 18,
    exchangeAddress: '0xbe8d7b0c31875a6757ee82a38262c98ffd900e39'
  },
  {
    symbol: 'TRB',
    name: 'Tellor',
    tokenAddress: '0x508e3534bbc393e8bc55286a089f42d2b89e4fd5',
    tokenDecimals: 18,
    exchangeAddress: '0x066b8b936412ec57d2549801138f3b58e0225d57'
  },
  {
    symbol: 'FLL',
    name: 'Feellike',
    tokenAddress: '0x9235bda06b8807161b8fbb1e102cb654555b212f',
    tokenDecimals: 3,
    exchangeAddress: '0x1d7a1ec79fd43a7b45be2e7bdac6fed50b6baba1'
  },
  {
    symbol: 'NOME',
    name: 'Nome',
    tokenAddress: '0xe3af86083c19d92290104cbf4f8099cce6048a2f',
    tokenDecimals: 18,
    exchangeAddress: '0xcc798ecbbdf3370729a237f8b02486fcd08565b5'
  },
  {
    symbol: 'CTA',
    name: 'cryptomania.',
    tokenAddress: '0x04ab12236af35736e2124ac0eff1944bd5e82633',
    tokenDecimals: 18,
    exchangeAddress: '0xf1b699b6405826543000cdf366bb2feba9ccfe75'
  },
  {
    symbol: 'DROP',
    name: 'Dropil',
    tokenAddress: '0x4672bad527107471cb5067a887f4656d585a8a31',
    tokenDecimals: 18,
    exchangeAddress: '0x10811d1dba4cf9505755570a780cc25bab637e80'
  },
  {
    symbol: 'DYT',
    name: 'DoYourTip',
    tokenAddress: '0x740623d2c797b7d8d1ecb98e9b4afcf99ec31e14',
    tokenDecimals: 18,
    exchangeAddress: '0x095ca83bbdc0671ee09f8c57a8254ea539c0d2c6'
  },
  {
    symbol: 'COVA',
    name: 'Covalent Token',
    tokenAddress: '0xb37a769b37224449d92aac57de379e1267cd3b00',
    tokenDecimals: 18,
    exchangeAddress: '0xde70937d291f2a09b2ab40e6f42ac9f35c99bcc7'
  },
  {
    symbol: 'FOOD',
    name: 'Biolokio',
    tokenAddress: '0xd448898c884e4e8357c17c790a6d1bef8db1a08b',
    tokenDecimals: 18,
    exchangeAddress: '0x7ab598e4159b0dc453250925b635073a3a368435'
  },
  {
    symbol: 'KRWb',
    name: 'KRWb Token',
    tokenAddress: '0xf9fd7a89bfb8a07a225080236e5ca570ee2a76a1',
    tokenDecimals: 2,
    exchangeAddress: '0x88fa8e4c2558e4a99265638983d373e0b4fe29b2'
  },
  {
    symbol: '2GB',
    name: '2GetherBounty',
    tokenAddress: '0x0bd344cade9a06d1798140023f56fb0f56d48afe',
    tokenDecimals: 18,
    exchangeAddress: '0x35b52aeb020429ecd18374e6c69328c527bd92d7'
  },
  {
    symbol: 'GALO',
    name: 'GalboCoin',
    tokenAddress: '0xf90f1c360077e05fe3b5dcdd1420ac3c0b47d088',
    tokenDecimals: 18,
    exchangeAddress: '0xaee49fc70da1cf7fbbae33b0dfbfa641684e3f56'
  },
  {
    symbol: 'CMT',
    name: 'CyberMiles Token',
    tokenAddress: '0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f',
    tokenDecimals: 18,
    exchangeAddress: '0x2dd675adac06a14b291abbe2095ba86b430e8e8a'
  },
  {
    symbol: 'NLC',
    name: 'NLC Token',
    tokenAddress: '0x05007434b72a5e99348186f45fcd3660917da683',
    tokenDecimals: 18,
    exchangeAddress: '0xe809c1fb30bb59d50b079ecafea0795020618676'
  },
  {
    symbol: 'G4D',
    name: 'Give4Dream',
    tokenAddress: '0x639cff3936ba73fced75f9ace328b7e72d85d933',
    tokenDecimals: 18,
    exchangeAddress: '0x27c3106a5e864430f59daa6efb5ae81a78d6fcd2'
  },
  {
    symbol: 'CANDY',
    name: 'CANDY',
    tokenAddress: '0x4d88238468e70673133090e3893b8770457361e1',
    tokenDecimals: 18,
    exchangeAddress: '0x6c34e26cc6df9c03ac92d05d7fc269c09e00ea88'
  },
  {
    symbol: 'FRFT',
    name: 'Firefly Token',
    tokenAddress: '0xec29851be2af7350f0a8f8998b88a22586dda717',
    tokenDecimals: 18,
    exchangeAddress: '0x8c8e9cd122af539d86c109ab8f0d6a6faaeba018'
  },
  {
    symbol: 'aUSDC',
    name: 'Aave Interest bearing USDC',
    tokenAddress: '0x9ba00d6856a4edf4665bca2c2309936572473b7e',
    tokenDecimals: 6,
    exchangeAddress: '0x053319a375b464cd72de8bbcf45eb6d2efa6f6d3'
  },
  {
    symbol: 'aSUSD',
    name: 'Aave Interest bearing SUSD',
    tokenAddress: '0x625ae63000f46200499120b906716420bd059240',
    tokenDecimals: 18,
    exchangeAddress: '0x30d731beb921912b55d00b6427df32fa9a475833'
  },
  {
    symbol: 'aTUSD',
    name: 'Aave Interest bearing TUSD',
    tokenAddress: '0x4da9b813057d04baef4e5800e36083717b4a0341',
    tokenDecimals: 18,
    exchangeAddress: '0xa45937d10aee52bfde8eb6025ef0c863ae5bec87'
  },
  {
    symbol: 'aBAT',
    name: 'Aave Interest bearing BAT',
    tokenAddress: '0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00',
    tokenDecimals: 18,
    exchangeAddress: '0xc91fea7bc9b809be3179567707f64c0479a7e29a'
  },
  {
    symbol: 'UP',
    name: 'UpToken',
    tokenAddress: '0x6ba460ab75cd2c56343b3517ffeba60748654d26',
    tokenDecimals: 8,
    exchangeAddress: '0xe510c65269e8d326db175243add3e0f439d848f3'
  },
  {
    symbol: 'pUSD',
    name: 'US Dollar',
    tokenAddress: '0x93d3296cac208422bf587c3597d116e809870f2b',
    tokenDecimals: 8,
    exchangeAddress: '0x266019f122bc9f939bb714a12ff68ff83aae06b5'
  },
  {
    symbol: 'ING',
    name: 'IUNGO token',
    tokenAddress: '0x24ddff6d8b8a42d835af3b440de91f3386554aa4',
    tokenDecimals: 18,
    exchangeAddress: '0x9f1a5f36c9ba2358b915bcc864ebccddcf8e7b30'
  },
  {
    symbol: 'aLINK',
    name: 'Aave Interest bearing LINK',
    tokenAddress: '0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84',
    tokenDecimals: 18,
    exchangeAddress: '0xe51bdcd0aefd9f4c512dd7abdaa6ad94a35fb470'
  },
  {
    symbol: 'aSNX',
    name: 'Aave Interest bearing SNX',
    tokenAddress: '0x328c4c80bc7aca0834db37e6600a6c49e12da4de',
    tokenDecimals: 18,
    exchangeAddress: '0x0c0804b314fd3a32667a9624d2f94d31ef86e768'
  },
  {
    symbol: 'aMANA',
    name: 'Aave Interest bearing MANA',
    tokenAddress: '0x6fce4a401b6b80ace52baaefe4421bd188e76f6f',
    tokenDecimals: 18,
    exchangeAddress: '0x1203498b1e59822b6e45f8f96bea55eacca214fc'
  },
  {
    symbol: 'aREP',
    name: 'Aave Interest bearing REP',
    tokenAddress: '0x71010a9d003445ac60c4e6a7017c1e89a477b438',
    tokenDecimals: 18,
    exchangeAddress: '0xfa7d563f150b8276e3e6c39ed2a61e2dd3b6782c'
  },
  {
    symbol: 'aZRX',
    name: 'Aave Interest bearing ZRX',
    tokenAddress: '0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f',
    tokenDecimals: 18,
    exchangeAddress: '0xf3b1e2fcdc54601280ca98e550ff9874bd6b5d47'
  },
  {
    symbol: 'iUSDC',
    name: 'Fulcrum USDC iToken',
    tokenAddress: '0xf013406a0b1d544238083df0b93ad0d2cbe0f65f',
    tokenDecimals: 6,
    exchangeAddress: '0xaed32f3df396aec2c1e7203ffcb540475124926d'
  },
  {
    symbol: 'iSUSD',
    name: 'Fulcrum sUSD iToken',
    tokenAddress: '0x49f4592e641820e928f9919ef4abd92a719b4b49',
    tokenDecimals: 18,
    exchangeAddress: '0x860f7c6bd5e962810fb291b4e0d585466062b510'
  },
  {
    symbol: 'iKNC',
    name: 'Fulcrum KNC iToken',
    tokenAddress: '0x1cc9567ea2eb740824a45f8026ccf8e46973234d',
    tokenDecimals: 18,
    exchangeAddress: '0xf7cc3f0c1153f95808105b81729d3d709d575c47'
  },
  {
    symbol: 'aWBTC',
    name: 'Aave Interest bearing WBTC',
    tokenAddress: '0xfc4b8ed459e00e5400be803a9bb3954234fd50e3',
    tokenDecimals: 8,
    exchangeAddress: '0xb6191f5f595e5580ce9c7273925df4a20ddcc27b'
  },
  {
    symbol: 'iREP',
    name: 'Fulcrum REP iToken',
    tokenAddress: '0xbd56e9477fc6997609cf45f84795efbdac642ff1',
    tokenDecimals: 18,
    exchangeAddress: '0x3cb6b8f13c4bb0f6d64f2c5a0917008c150235e3'
  },
  {
    symbol: 'iZRX',
    name: 'Fulcrum ZRX iToken',
    tokenAddress: '0xa7eb2bc82df18013ecc2a6c533fc29446442edee',
    tokenDecimals: 18,
    exchangeAddress: '0x55bcc801208e9c6febf36a6305e30e3a80245de1'
  },
  {
    symbol: 'iLINK',
    name: 'Fulcrum LINK iToken',
    tokenAddress: '0x1d496da96caf6b518b133736beca85d5c4f9cbc5',
    tokenDecimals: 18,
    exchangeAddress: '0x76c40b3c47d8e9fb8573cae4cee612cbb0f38c5c'
  },
  {
    symbol: 'iWBTC',
    name: 'Fulcrum WBTC iToken',
    tokenAddress: '0xba9262578efef8b3aff7f60cd629d6cc8859c8b5',
    tokenDecimals: 8,
    exchangeAddress: '0xc6b93b71d3254598933b2f498dd8bc93a93b41e0'
  },
  {
    symbol: 'FRFY',
    name: 'Firefly Token',
    tokenAddress: '0x4ed040f2896761d1688af5d772cc9138722ab9ec',
    tokenDecimals: 18,
    exchangeAddress: '0x47e830a8f58e601864aab0742b2423f6089ffa93'
  },
  {
    symbol: 'LOST',
    name: 'lost',
    tokenAddress: '0x799bab17caa7bec45c9e0e2d5d600125c13eabe1',
    tokenDecimals: 6,
    exchangeAddress: '0x69ea67d2e064cbc09693cf582afa22b42cef461b'
  },
  {
    symbol: 'AHT',
    name: 'AHA',
    tokenAddress: '0xdff06a2ab3208087652ca87e30ff0825b39d2465',
    tokenDecimals: 18,
    exchangeAddress: '0xbcf6b28999f5a9485c12d7dba571797e92e480b9'
  },
  {
    symbol: 'RSR',
    name: 'Reserve Rights',
    tokenAddress: '0x0c226d8dae08cf021f2f03afc2eff5c9c0b24671',
    tokenDecimals: 18,
    exchangeAddress: '0x36228370d9bc3532742190c91a040a6b2217e41d'
  },
  {
    symbol: 'TLX',
    name: 'Tracklish',
    tokenAddress: '0x64872e4a1f21a16eacad8840d0f13ef256625cf6',
    tokenDecimals: 18,
    exchangeAddress: '0x81078deb40995d2991f5b3538346932e5a5063d0'
  },
  {
    symbol: 'AC',
    name: 'AIRDROP COIN',
    tokenAddress: '0x9e115f7d5625b111fee987dbecb35de2257157b4',
    tokenDecimals: 8,
    exchangeAddress: '0x7ace512c5e16caed36a30fb7543547acdd293546'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x3cccaf9826f23fa749a85644f4924e627405f338',
    tokenDecimals: 18,
    exchangeAddress: '0x1df85c89d479679b4cc8a99ca4bf7a237775d064'
  },
  {
    symbol: 'NL Token',
    name: 'NL',
    tokenAddress: '0x0360b415b56bd77def7ffd64ab9c0a9f63a84e4f',
    tokenDecimals: 18,
    exchangeAddress: '0x8e1eeaa8090e14cd5cd70012504834480bcf109a'
  },
  {
    symbol: 'LNKF',
    name: 'Link Fire',
    tokenAddress: '0xe885593892baa73d9639fbc798002f5b226adbf4',
    tokenDecimals: 18,
    exchangeAddress: '0x3c23cab21db98249879ea473a27bbd88a3152658'
  },
  {
    symbol: 'OVX',
    name: 'ZEROVIIIX',
    tokenAddress: '0x863682ec5a934c308174dda9634cca095ad4f4fc',
    tokenDecimals: 3,
    exchangeAddress: '0xc64c80adde0e8e3e491d0b3253265359f1b30882'
  },
  {
    symbol: 'SPeso',
    name: 'Super Peso',
    tokenAddress: '0x7209d0330ffe84d5f669b8f83192aa2030778450',
    tokenDecimals: 8,
    exchangeAddress: '0x85be96057e5abc984078f72e7424e97c120ee7e2'
  },
  {
    symbol: 'IND',
    name: 'LinkIndia',
    tokenAddress: '0xe42386262691083ed90c7a07836695f9c0f5b6b6',
    tokenDecimals: 18,
    exchangeAddress: '0xedadb7cca75a13be4247bfda512aed39d1246538'
  },
  {
    symbol: 'DIASPORA',
    name: 'Diaspora',
    tokenAddress: '0xd3de2cfbd3f8b7d9364a02b5c103530cae870d82',
    tokenDecimals: 8,
    exchangeAddress: '0xfa12724bb85dd04c4c0e696e0740983cec711e61'
  },
  {
    symbol: 'KLAY',
    name: 'Klaytn',
    tokenAddress: '0x089fa00784cca541409947e9bd098ae816d00822',
    tokenDecimals: 18,
    exchangeAddress: '0xae449de1aa3869167fa0c65857952d43beff4a5a'
  },
  {
    symbol: 'iXRP',
    name: 'Synth iXRP',
    tokenAddress: '0x9f63a4d498bfb6591145fc8494e7ad82afe28de5',
    tokenDecimals: 18,
    exchangeAddress: '0x31acf53378010d907e0a2c65ef90da2cbf48d9b4'
  },
  {
    symbol: 'BACK',
    name: 'BlockAid',
    tokenAddress: '0x4120030e090dae5aefd9ed1c01e55031fdd1a113',
    tokenDecimals: 18,
    exchangeAddress: '0x783e92ab7d31d358ed1fdd4a65b095dcc1574c89'
  },
  {
    symbol: 'RPT',
    name: 'RealPropToken',
    tokenAddress: '0xb7d1628141985015f6b71a88906121827b620acc',
    tokenDecimals: 4,
    exchangeAddress: '0xeaab309b080136f9fe092bfec076b1924eee534c'
  },
  {
    symbol: 'VOCO',
    name: 'Provoco Token',
    tokenAddress: '0xb5ca46cf1da09248126682a7bd72401fd7a6b151',
    tokenDecimals: 18,
    exchangeAddress: '0x46144a869aa487a5584e05e5141f235127430c1d'
  },
  {
    symbol: 'CRU',
    name: 'CRU',
    tokenAddress: '0x527b9715d99acfb7e1b01c6c864dc8402f2a3c3b',
    tokenDecimals: 8,
    exchangeAddress: '0xa6bd8bc654482ea09fc02465b15ae31eb6390b2d'
  },
  {
    symbol: 'MTT',
    name: 'MyTestToken',
    tokenAddress: '0x58455560832b8da11fe2746fb5e1cc3894b5efb7',
    tokenDecimals: 18,
    exchangeAddress: '0x46c7c065326f7fac23fe5deb12e1cb7e9ac84422'
  },
  {
    symbol: 'LOO',
    name: 'Loops',
    tokenAddress: '0x7336a2f392d14cc5b1fa324c3610434a490be862',
    tokenDecimals: 18,
    exchangeAddress: '0xf8d2f5fcd11a7d15d5edc80ac8be309534dd3e9c'
  },
  {
    symbol: 'NuLINK',
    name: 'NuChainLink Token',
    tokenAddress: '0x44a718ac1bbff570b8a0d9a25a0ba8f317e049b7',
    tokenDecimals: 18,
    exchangeAddress: '0x4a6e6e609cb5d6d8b396c41e32bdcbde513563e2'
  },
  {
    symbol: 'LCR',
    name: 'LUCRE',
    tokenAddress: '0x4ac583bb9c55658ebb17805f1cc8c1fa75c210d8',
    tokenDecimals: 18,
    exchangeAddress: '0xa2e3db305f6768cdd27939be3b7cd9314261f951'
  },
  {
    symbol: 'GGBE',
    name: 'azaa',
    tokenAddress: '0x0935ebfca49ff1652cae5b299ff2cc9b4e79adeb',
    tokenDecimals: 18,
    exchangeAddress: '0x40da57bea00afe1c01b50775f5124c3c008b7163'
  },
  {
    symbol: 'WIN',
    name: 'WINSTEX',
    tokenAddress: '0x4cac2515716ab2531402ca8f992e235189f29c5a',
    tokenDecimals: 18,
    exchangeAddress: '0x0b3c9ced88a4974c962d959a8535d77f81796787'
  },
  {
    symbol: 'B2W',
    name: 'Bit2Win',
    tokenAddress: '0xd13a51b8cd275f0ed865c1b3ea87e3c3b615cc4e',
    tokenDecimals: 18,
    exchangeAddress: '0x898ca970f37fa9f3c0868ecc1f8287b683718ef7'
  },
  {
    symbol: 'WCM',
    name: 'WCM token',
    tokenAddress: '0x5a2b6f0c3a5f9189ff318d8ce34c386ec4d56801',
    tokenDecimals: 18,
    exchangeAddress: '0xdaaef86d66ecf6f0f0eddd8b255b188868bd0477'
  },
  {
    symbol: 'EVOT',
    name: 'EVOAI',
    tokenAddress: '0x5de805154a24cb824ea70f9025527f35facd73a1',
    tokenDecimals: 18,
    exchangeAddress: '0xd056fd97705983c261a58fbc55647adda5eb3d88'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xa1ecdcca26150cf69090280ee2ee32347c238c7b',
    tokenDecimals: 18,
    exchangeAddress: '0x3974b0a9b2e4349b4b215429a670f243c423b637'
  },
  {
    symbol: 'CRC',
    name: 'CR Coin',
    tokenAddress: '0xfb19c03a02a519a44542343803f3d42578cbc243',
    tokenDecimals: 8,
    exchangeAddress: '0xac224694ff8f6bfe35ad85e17697b90684601f31'
  },
  {
    symbol: 'RPT',
    name: 'RealPropToken',
    tokenAddress: '0x1f5fa1a25a17e6562cd634df2be9109d43c87372',
    tokenDecimals: 4,
    exchangeAddress: '0xe03ae39782fcc21b3bad26b04706f2346378664a'
  },
  {
    symbol: 'PTF',
    name: 'Portfolio',
    tokenAddress: '0x5a024226ba64860a1927552d23d6c4184abae4c7',
    tokenDecimals: 16,
    exchangeAddress: '0x920272f1892a251316c82fad50419cb3ce15ada1'
  },
  {
    symbol: 'XPS',
    name: 'Payshares',
    tokenAddress: '0x32eab29aa859e40365873c8a7562710e2250f640',
    tokenDecimals: 8,
    exchangeAddress: '0x200d263f91f3acdcc572893ac31bb1c1dd329441'
  },
  {
    symbol: 'NEST',
    name: 'NEST',
    tokenAddress: '0x04abeda201850ac0124161f037efd70c74ddc74c',
    tokenDecimals: 18,
    exchangeAddress: '0x27113587cc9e5524f932be331f7fd4e160d55ff8'
  },
  {
    symbol: 'FYS',
    name: 'Fysical',
    tokenAddress: '0x587e276dc7f2c97d986e8adf9b82d3f14d6cd8d2',
    tokenDecimals: 9,
    exchangeAddress: '0x703d249d7d1dad3405f058db9ff2a4d1619e2f69'
  },
  {
    symbol: 'RDG',
    name: 'RotasDoGarimpo',
    tokenAddress: '0x47740a5ac376f6e95464a1faffb0d980944cf4bf',
    tokenDecimals: 8,
    exchangeAddress: '0x43d696d992e40536ba24cf779d3f4c07f9f43156'
  },
  {
    symbol: 'ERD',
    name: 'Elrond',
    tokenAddress: '0xf9986d445ced31882377b5d6a5f58eaea72288c3',
    tokenDecimals: 18,
    exchangeAddress: '0x2655bc9f2d67f47d10b0bfb5bc385e4e64ef204f'
  },
  {
    symbol: 'YUMI',
    name: 'Yumi',
    tokenAddress: '0x25859743ed0861665611b81e47682e889b48313b',
    tokenDecimals: 4,
    exchangeAddress: '0xd608ba0e93805b2b860794ecaeb1ed9b905e4f95'
  },
  {
    symbol: 'ETHBULL',
    name: ' 3X Long Ethereum Token',
    tokenAddress: '0x871baed4088b863fd6407159f3672d70cd34837d',
    tokenDecimals: 18,
    exchangeAddress: '0x017a0510c54884aca164e2d3431f1441b9984da9'
  },
  {
    symbol: 'KAU',
    name: 'Kauri',
    tokenAddress: '0xe172f366678ec7b559f6c2913a437baadfd4e6c8',
    tokenDecimals: 8,
    exchangeAddress: '0x5402ed190aa5fa3001b0155841f6c78c8c803ad7'
  },
  {
    symbol: 'TUNE',
    name: 'TuneToken',
    tokenAddress: '0x6b4e0684806fe53902469b6286024db9c6271f53',
    tokenDecimals: 18,
    exchangeAddress: '0x35490cc5dbded3c9e1806198aa334aeb3a41dd1d'
  },
  {
    symbol: 'NFTP',
    name: 'NFTPromotion',
    tokenAddress: '0x3c6990841a137caafefa2b2e10397acec445087c',
    tokenDecimals: 18,
    exchangeAddress: '0x8f267171e85c34e69c856c377b0a78247369c28c'
  },
  {
    symbol: 'ADA',
    name: 'ADA',
    tokenAddress: '0x43110d4f2113d50574412e852ebd96f1593179e4',
    tokenDecimals: 4,
    exchangeAddress: '0x7a9846e3ec583e8ce6a6374d0e91d6abfd9a6150'
  },
  {
    symbol: 'TSH',
    name: 'TASOHA',
    tokenAddress: '0x4c5e9c0c0bf644cd265c9500e1aad0bae0977b78',
    tokenDecimals: 18,
    exchangeAddress: '0xe240876372c2dcc6534c2136d068c513641b7b9a'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x0d3a89dd6013fa16f5826195b12b0d4c64b3cf40',
    tokenDecimals: 18,
    exchangeAddress: '0x346829a7224850b79193ec355d52107ff576b451'
  },
  {
    symbol: 'STPT',
    name: 'STPT',
    tokenAddress: '0xde7d85157d9714eadf595045cc12ca4a5f3e2adb',
    tokenDecimals: 18,
    exchangeAddress: '0xc1310677e746a7cf810949fdc29727900bb33c47'
  },
  {
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x97dec872013f6b5fb443861090ad931542878126',
    tokenDecimals: 18,
    exchangeAddress: '0xbe7a5f13178680089c4b997076affcacb6741249'
  },
  {
    symbol: 'TRS',
    name: 'TREASURE',
    tokenAddress: '0xd962d9c7fef2638a83a28f72e291ecf3d13c208e',
    tokenDecimals: 18,
    exchangeAddress: '0xd214a4b97484a62b2675f9326a52237b02850ad3'
  },
  {
    symbol: 'BEE',
    name: 'BEE TOKEN',
    tokenAddress: '0x48294aef8d2c9c109196ab3067c0b72e9b0f79ce',
    tokenDecimals: 18,
    exchangeAddress: '0xbcdd33865534c4edb153365d503b0e81de1a132c'
  },
  {
    symbol: 'MM',
    name: 'Moon Money Chain',
    tokenAddress: '0xcd23ef2cba177a1b5f5d3818d055868e4b599d18',
    tokenDecimals: 18,
    exchangeAddress: '0x253e1d477c653725c5b3731d20d6fddda5523257'
  },
  {
    symbol: 'JBG',
    name: 'JBG',
    tokenAddress: '0xe85d69d5e7b91b1a0d2e93a3678315e6915197b2',
    tokenDecimals: 4,
    exchangeAddress: '0x55e97572c9625ed0eef523f696c3b01eb90511ed'
  },
  {
    symbol: 'TLBC',
    name: 'TuoLuoblockchain',
    tokenAddress: '0xdd460be411f2c00fa4a497904e978af7e66010af',
    tokenDecimals: 18,
    exchangeAddress: '0xb0a7becad3ea29a96cd1d979bc11dc62c5f1cb08'
  },
  {
    symbol: 'CRU',
    name: 'Crypto Unit Token',
    tokenAddress: '0xfbc1473e245b8afbba3b46116e0b01f91a026633',
    tokenDecimals: 0,
    exchangeAddress: '0xd03c0d81257af20f3cf79b3dd4f0ae3633695573'
  },
  {
    symbol: 'DFGB',
    name: 'DeFiGroup.ch Bond',
    tokenAddress: '0xb6c28a66b131d7ecc5406769653653c4f108115e',
    tokenDecimals: 6,
    exchangeAddress: '0x19a52588e125ed1efa5815ea013e74bcf3782605'
  },
  {
    symbol: 'DIGI',
    name: 'Digiverse',
    tokenAddress: '0xe03b4386b75e121e04d580d6b8376ceee0615ca8',
    tokenDecimals: 18,
    exchangeAddress: '0x3fba8d3e180c45de250e70e75e6b96d451f3b3e5'
  },
  {
    symbol: 'BNG',
    name: 'BUNGEE TOKEN',
    tokenAddress: '0x1a744afb814d97f4519fb8c8720b47c92037adb5',
    tokenDecimals: 4,
    exchangeAddress: '0x38a5f47cafac1bcd56fd53b6fac2ca50560ca2cc'
  },
  {
    symbol: 'CAN',
    name: 'Content and Ad Network',
    tokenAddress: '0x5f3789907b35dce5605b00c0be0a7ecdbfa8a841',
    tokenDecimals: 18,
    exchangeAddress: '0x164d59e4ba623310eaf7ec61a3e5f8de0350638f'
  },
  {
    symbol: 'IZI',
    name: 'IZIChain',
    tokenAddress: '0xdf59c8ba19b4d1437d80836b45f1319d9a429eed',
    tokenDecimals: 4,
    exchangeAddress: '0xbaa2a9ef548e942f49d6348e110fc21c006b7ce6'
  },
  {
    symbol: 'yDAI',
    name: 'iearn DAI',
    tokenAddress: '0x16de59092dae5ccf4a1e6439d611fd0653f0bd01',
    tokenDecimals: 18,
    exchangeAddress: '0x12d0771d3c1f83a8d0ff9ba13371e9d8cc500ef4'
  },
  {
    symbol: 'C',
    name: 'Carbon',
    tokenAddress: '0x00209c82709aa78b91e073002e5f2d3455c0e96d',
    tokenDecimals: 18,
    exchangeAddress: '0x62e5c832a277a3d4fb6204233351eb04222b123e'
  },
  {
    symbol: 'LEX',
    name: 'TLDR',
    tokenAddress: '0x8cede32bbbce5854992e151fe215f2887e522553',
    tokenDecimals: 18,
    exchangeAddress: '0xb51a747845ae0e3e2c6e76665fab5c9fc73f906f'
  },
  {
    symbol: 'TBL',
    name: 'Blotto',
    tokenAddress: '0x9f7b5f851f26a34e510979901579a352c92a5d0c',
    tokenDecimals: 1,
    exchangeAddress: '0xc64670fb3362f805d6a768a979790daa142f893c'
  },
  {
    symbol: 'TIKTOK',
    name: 'TIKTOK COIN',
    tokenAddress: '0xf4eda77f0b455a12f3eb44f8653835f377e36b76',
    tokenDecimals: 0,
    exchangeAddress: '0x1b627230df2ee5c181e3f729b443f4cf96b21375'
  },
  {
    symbol: 'BTCS',
    name: 'Bitcoin Silver',
    tokenAddress: '0xd96b9fd7586d9ea24c950d24399be4fb65372fdd',
    tokenDecimals: 18,
    exchangeAddress: '0x452f7809b5f8a986829f7b5d24b289fef464cf95'
  },
  {
    symbol: 'ETHERA',
    name: 'ETHERA',
    tokenAddress: '0xf377745e14bc6963a7e28acb23675081be81dc44',
    tokenDecimals: 18,
    exchangeAddress: '0x5d5aada17883c506e7383852df3a5f7481da09e1'
  },
  {
    symbol: 'GTX',
    name: 'GoalTime X',
    tokenAddress: '0x4f2f4fda29450d5c33842bf964525132c6baf877',
    tokenDecimals: 18,
    exchangeAddress: '0x1885ab9a72a6113b9a678d2404fc5768ce8f3d64'
  },
  {
    symbol: 'GIIP',
    name: 'giip Token',
    tokenAddress: '0x33be026eff080859eb9dfff6029232b094732c52',
    tokenDecimals: 18,
    exchangeAddress: '0xc4a7dec7455cf795940f75a2b35d55352f0c3057'
  },
  {
    symbol: 'BNG',
    name: 'Bravenge',
    tokenAddress: '0x925044c51db653459a23dcd7ac3e30afea51e54a',
    tokenDecimals: 18,
    exchangeAddress: '0x9e9655289044f8083168df3ad9c775911735a1c2'
  },
  {
    symbol: 'XTRD',
    name: 'XTRD',
    tokenAddress: '0x9c794f933b4dd8b49031a79b0f924d68bef43992',
    tokenDecimals: 18,
    exchangeAddress: '0xbbf441014115a97820a08489cac93e0e40971424'
  },
  {
    symbol: 'DIKO',
    name: 'Diko',
    tokenAddress: '0x841c40f0ad007c44c7193ab705f8032d4ec07b0b',
    tokenDecimals: 0,
    exchangeAddress: '0x42ca92ffa594e2c3b3f82ae3a81365833dc920ad'
  },
  {
    symbol: 'BTE',
    name: 'Bitcoineum',
    tokenAddress: '0x73dd069c299a5d691e9836243bcaec9c8c1d8734',
    tokenDecimals: 8,
    exchangeAddress: '0xd37394b642ed752851898820621d9d4c95d507e1'
  },
  {
    symbol: 'ONG',
    name: 'onG',
    tokenAddress: '0xd341d1680eeee3255b8c4c75bcce7eb57f144dae',
    tokenDecimals: 18,
    exchangeAddress: '0x95070fd01646653dcf6598e8dafce8570f7a58cb'
  },
  {
    symbol: 'BRT',
    name: 'Bankroll Token v01',
    tokenAddress: '0x22ccf4ee20b0bd4d02795bf70dfe6d74567cc9c8',
    tokenDecimals: 18,
    exchangeAddress: '0xa81b10c34a7f8780d655257d94d966c7df92c3bc'
  },
  {
    symbol: 'ANG',
    name: 'Aureus Nummus Gold',
    tokenAddress: '0x130914e1b240a7f4c5d460b7d3a2fd3846b576fa',
    tokenDecimals: 18,
    exchangeAddress: '0xa056320c8de334a272718f85ae23e3608b064c1b'
  },
  {
    symbol: 'TST',
    name: 'TBC Shopping Token',
    tokenAddress: '0xf67041758d3b6e56d6fdafa5b32038302c3634da',
    tokenDecimals: 18,
    exchangeAddress: '0x7889645db7bb60c927a4b16c3993c832c56b2193'
  },
  {
    symbol: 'SAB',
    name: 'Sabiha Coin',
    tokenAddress: '0x911a158850e34e5ffaa2431a28a159db5730e67a',
    tokenDecimals: 8,
    exchangeAddress: '0x492ba02fc81de37a089f89f2af8da52a1b9ae8c2'
  },
  {
    symbol: 'SFT',
    name: 'Soft Token',
    tokenAddress: '0x2d476a9126d2d4135fb310acf029f9aacd4f85a2',
    tokenDecimals: 18,
    exchangeAddress: '0x21080da6f5fef92c178af388de2d586f1c2dee62'
  },
  {
    symbol: 'dema',
    name: 'demetracoin',
    tokenAddress: '0x229d1ed07310a9aaaf7bda570825b0c4089b88ad',
    tokenDecimals: 18,
    exchangeAddress: '0xc0ea8272c0a0200a4da787378e460c6d5859c5be'
  },
  {
    symbol: 'null',
    name: 'null',
    tokenAddress: '0x4b125f8d8c2a1a7da43c48534bd16c7874c783db',
    tokenDecimals: null,
    exchangeAddress: '0x093a83e12eb0e016c78df190bf7217b4380b4ae8'
  },
  {
    symbol: 'APM',
    name: 'APM Coin',
    tokenAddress: '0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c',
    tokenDecimals: 18,
    exchangeAddress: '0x7f04c59aa9fd2dabf1f5352b79061582a2682306'
  },
  {
    symbol: 'DEF',
    name: 'DeFlash',
    tokenAddress: '0xe870bd7c40c1f1227637ded7b60456501d25a7b8',
    tokenDecimals: 18,
    exchangeAddress: '0x0353495a34eaddd0da71dad5c085ab6a938bd875'
  },
  {
    symbol: 'QLP',
    name: 'QLP',
    tokenAddress: '0x0b150524707e66a3d85f15de9ab3865572e4e5f4',
    tokenDecimals: 8,
    exchangeAddress: '0x6cf8f2f078f3f99c929ffd28380ad1298fabf88d'
  },
  {
    symbol: 'RHC',
    name: 'Rich Human Crypto',
    tokenAddress: '0x435d4183ae0aeb1babc31bd25a815d6244fc3562',
    tokenDecimals: 2,
    exchangeAddress: '0xce7784ebc2152c720022efcd1ec9f63b6beaf47c'
  },
  {
    symbol: 'sBTC',
    name: 'Siambitcoin',
    tokenAddress: '0xb8e103b60a33597136ea9511f46b6dbeb643a3a5',
    tokenDecimals: 18,
    exchangeAddress: '0x566c633a01e5b1dc45ee8886aa3ee1e4783bb644'
  },
  {
    symbol: 'ETHS',
    name: 'EtherStone',
    tokenAddress: '0xf5ba8a8c87f976b79b17ccd25ee8dc2f8e82fb59',
    tokenDecimals: 18,
    exchangeAddress: '0x9354d836159a8277bce122c1be8d7fb9d89ef403'
  },
  {
    symbol: 'CYBR',
    name: 'CYBR - Cyber Security Ecosystem Token',
    tokenAddress: '0xaeaabb69dcb0fe926b1979f0b032fcd17fd7b2e0',
    tokenDecimals: 18,
    exchangeAddress: '0x7348bc5c6adc314020b65d73e407623f4e7e5577'
  },
  {
    symbol: 'PXT',
    name: 'Populous XBRL token',
    tokenAddress: '0xc14830e53aa344e8c14603a91229a0b925b0b262',
    tokenDecimals: 8,
    exchangeAddress: '0xa69f6e2e981ce9f0a772485d95503ac478440dee'
  },
  {
    symbol: 'TOM',
    name: 'The Orion Mint',
    tokenAddress: '0x731c8c257c94d938cb45931e2be4ad54e5d15611',
    tokenDecimals: 18,
    exchangeAddress: '0x0b31f410403821790a0fed543ed1fa1af35d032a'
  },
  {
    symbol: 'SUBS',
    name: 'SubSudio',
    tokenAddress: '0xd7d7e034b5a9037a88659f734bc216e7df56e6fd',
    tokenDecimals: 8,
    exchangeAddress: '0x5b4b1c30fbad403a4b61802b3115825179c6a1ed'
  },
  {
    symbol: 'ECD',
    name: 'Easy Coin DF',
    tokenAddress: '0x37b73a244bbe53ade2cc4824e34aebe8f418ba3b',
    tokenDecimals: 18,
    exchangeAddress: '0x21a52a62e1d85a4fab2c3c9db5ac7d703a97d918'
  },
  {
    symbol: 'B1P',
    name: 'B One Payment',
    tokenAddress: '0x4b742b5bdb1d252907ae7f399a891d4a178dbc24',
    tokenDecimals: 18,
    exchangeAddress: '0x044d8d8e76ad40a27d0f34b509c6554665c069fb'
  },
  {
    symbol: 'WEENUS',
    name: 'Weenus 💪',
    tokenAddress: '0x2823589ae095d99bd64deea80b4690313e2fb519',
    tokenDecimals: 18,
    exchangeAddress: '0x622d56bfea4c98a9b40e6f488af043d7e48c5aaf'
  },
  {
    symbol: 'ADR',
    name: 'ANDREA',
    tokenAddress: '0x44cca682df6fbb95cbec3ddd6c40554b065980b4',
    tokenDecimals: 18,
    exchangeAddress: '0x4428f22cc70b28863b7bc8e9d9fcb659c1005e7c'
  },
  {
    symbol: 'ISP',
    name: 'iShop Plus',
    tokenAddress: '0x3db1678170418d1014012f855e2dda492f35c289',
    tokenDecimals: 18,
    exchangeAddress: '0xaaa8ce8811f0f0c423df8e3d8b6466d77b07ae04'
  },
  {
    symbol: 'IST',
    name: 'iShop Token',
    tokenAddress: '0x7a4d70528c0b8d376c206b0fb2c9db1d26315c2d',
    tokenDecimals: 18,
    exchangeAddress: '0x472701c91fb79c7b293db4ea3a7fee6516252731'
  },
  {
    symbol: 'RVT',
    name: 'RvT',
    tokenAddress: '0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244',
    tokenDecimals: 18,
    exchangeAddress: '0x99714bbe39fbcac445748f41ba5353b39b8a0def'
  },
  {
    symbol: 'BITS',
    name: 'Bitsoko Community',
    tokenAddress: '0xb72627650f1149ea5e54834b2f468e5d430e67bf',
    tokenDecimals: 8,
    exchangeAddress: '0xca2e92d3cc5db5248ea21704bce749f330c389ad'
  },
  {
    symbol: 'LVLY',
    name: 'LovelyBonz',
    tokenAddress: '0xf8b8ba4bcb4f7175e35d4a74a63cf79f03d7cd26',
    tokenDecimals: 4,
    exchangeAddress: '0x45c0e4891a99953cc93e869c8e342b5f82de34ea'
  },
  {
    symbol: 'TRENK',
    name: 'TRENK',
    tokenAddress: '0x87328eea472bf8a3792ba3208c2ef699455ba212',
    tokenDecimals: 18,
    exchangeAddress: '0x5c3e8b633b7400d55e0d60b0f68e62130249e78d'
  },
  {
    symbol: 'sXTZ',
    name: 'Synth sXTZ',
    tokenAddress: '0xf45b14ddabf0f0e275e215b94dd24ae013a27f12',
    tokenDecimals: 18,
    exchangeAddress: '0x512fdd40b8712336bbfd44a4c8646aaa032ef109'
  },
  {
    symbol: 'BUZZ',
    name: 'BUZZ',
    tokenAddress: '0x00d270d9a41886a8e6e433911ae2f7d257b60051',
    tokenDecimals: 4,
    exchangeAddress: '0x6c340363da8785d451ab2e4e6a6aa3debb93afe5'
  },
  {
    symbol: 'FAZR',
    name: 'Fazer',
    tokenAddress: '0x6e4d93efc2beac20992197278ad41f8d10b3efaa',
    tokenDecimals: 18,
    exchangeAddress: '0x1e7f38debc0c78298e9ce2f0f52fc5b003321002'
  },
  {
    symbol: 'PRIVATE',
    name: 'Buccaneer',
    tokenAddress: '0x17540494ad5e39aefd49901774528e9ff17fe40b',
    tokenDecimals: 3,
    exchangeAddress: '0x9ff9af11c58756c8f49a5878001bea9acbbc971d'
  },
  {
    symbol: 'HODL',
    name: 'HodlToken',
    tokenAddress: '0x95012835d927235d8bdfb653e2d425bffeaa7fa2',
    tokenDecimals: 18,
    exchangeAddress: '0x5cbde2c854376d3db0194c44ac26a240bb457f74'
  },
  {
    symbol: 'COMP',
    name: 'Compound',
    tokenAddress: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    tokenDecimals: 18,
    exchangeAddress: '0xdaf005507e257d34cf5b9d52d01e7e1c0876cf5f'
  },
  {
    symbol: 'KOZ',
    name: 'KozKoin',
    tokenAddress: '0xe9d8a9fe2966db75c98fcb3829159daa31ceae64',
    tokenDecimals: 0,
    exchangeAddress: '0x4506d1da2e8851054c48e17017260643f76aa365'
  },
  {
    symbol: 'ZYBE',
    name: 'Zyberos',
    tokenAddress: '0x9e1e92a02abadc9bc71bce83a94d5c8cd3151676',
    tokenDecimals: 18,
    exchangeAddress: '0xcaa217c5b6020ac9033a0b1262d445ad604cd9d8'
  },
  {
    symbol: 'EPLUS',
    name: 'EuroPlus',
    tokenAddress: '0xec78d8485a878aa677f6aea1603a43d3cc970636',
    tokenDecimals: 18,
    exchangeAddress: '0x112faf002f18dd1a4470c9241344221233a14631'
  },
  {
    symbol: 'INXT',
    name: 'Internxt',
    tokenAddress: '0xa8006c4ca56f24d6836727d106349320db7fef82',
    tokenDecimals: 8,
    exchangeAddress: '0x05c95072e94d57c0d76eed9392b7cb657b238ecc'
  },
  {
    symbol: 'eINV',
    name: 'eINV',
    tokenAddress: '0x09a8f2041be23e8ec3c72790c9a92089bc70fbca',
    tokenDecimals: 18,
    exchangeAddress: '0x009211344ee05ff3f69d9aadf0d3a0ab099c5363'
  },
  {
    symbol: 'BTE',
    name: 'Bit Energy',
    tokenAddress: '0x267ba09fe3a8a16c7dc8a9b07b5f2c4ac0adf1c0',
    tokenDecimals: 8,
    exchangeAddress: '0x410e90263f06d99d5b2410b37e9a0e16c4b79d1d'
  },
  {
    symbol: 'MGT',
    name: 'Meme Gift Token',
    tokenAddress: '0xac4b0f55624e405f60c21316b6eba7a3a0c67eb2',
    tokenDecimals: 18,
    exchangeAddress: '0x72e3292732331dacc7525c484f3544a1ca393800'
  },
  {
    symbol: 'BIFC',
    name: 'BIFcoin',
    tokenAddress: '0xd2dfc2f9d3ab26356a05898540bb9180c6f806a5',
    tokenDecimals: 18,
    exchangeAddress: '0x93eb88f2a07a601b9c8c28955f3beaa3d1c7b0c8'
  },
  {
    symbol: 'iXTZ',
    name: 'Synth iXTZ',
    tokenAddress: '0x8deef89058090ac5655a99eeb451a4f9183d1678',
    tokenDecimals: 18,
    exchangeAddress: '0x1fbc5c961c5f9eb5ebf28fefc16e1864a12cfe47'
  },
  {
    symbol: 'NASA',
    name: 'OG NASA Rap',
    tokenAddress: '0x4bdb811696ede769848d873bae7ba770fa0993d1',
    tokenDecimals: 7,
    exchangeAddress: '0x59df405a94577f4b0273f307f4699bc47fb63e36'
  },
  {
    symbol: 'STK',
    name: 'STK Token',
    tokenAddress: '0xae73b38d1c9a8b274127ec30160a4927c4d71824',
    tokenDecimals: 18,
    exchangeAddress: '0x5bbd235a4d663ee585bbada8684b822a618adc1c'
  },
  {
    symbol: 'BSC',
    name: 'Benscoin',
    tokenAddress: '0xab418c5a8a85f9cc0fba1802a57a30bf7db34d7c',
    tokenDecimals: 8,
    exchangeAddress: '0x45fca98fc0e2b1d79f3f3df500185d01b548ede2'
  },
  {
    symbol: 'pBTC',
    name: 'pTokens BTC',
    tokenAddress: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
    tokenDecimals: 18,
    exchangeAddress: '0x5a6aefc503df1be6559d1e9850b5ce44f0aa7c4e'
  },
  {
    symbol: 'ABTK',
    name: 'Air Basic',
    tokenAddress: '0xd1ccc390f181a38faab2c818d19c5a68ba9251b7',
    tokenDecimals: 18,
    exchangeAddress: '0xfe5b5534d155a1dc3930dc9a2cd31bc6848ca7a7'
  },
  {
    symbol: 'PODDY',
    name: 'Poddy',
    tokenAddress: '0xafbce36c2a2401b5765a066a2e2090eb3b8413ff',
    tokenDecimals: 18,
    exchangeAddress: '0x27df97eb5f7f8a7b673af9b55bc047226efb29a9'
  },
  {
    symbol: 'DY',
    name: 'DouYin',
    tokenAddress: '0x9b3502df03d20beddf429b205db26e74e62e32b3',
    tokenDecimals: 18,
    exchangeAddress: '0xe935c6841748080094b187b5bde93e77204386cb'
  },
  {
    symbol: 'TIP',
    name: 'Tippi',
    tokenAddress: '0x1aeb67a023c6dd6fca4c78a83eed6ef60fc9e837',
    tokenDecimals: 18,
    exchangeAddress: '0x26d01a43c46d3d75582c3a9a5aaad01198238c5e'
  },
  {
    symbol: 'BUZZ',
    name: 'BUZZ Token',
    tokenAddress: '0xa4e0f0bc5fe93cf8951c7dd2c276e1fc07a32bea',
    tokenDecimals: 18,
    exchangeAddress: '0x91538ff62a0504996417443fc7607f6e3a679a94'
  },
  {
    symbol: 'XOR',
    name: 'Sora Token',
    tokenAddress: '0x40fd72257597aa14c7231a7b1aaa29fce868f677',
    tokenDecimals: 18,
    exchangeAddress: '0x43fd5530789ce64a6569d882cfdfa07c7ed33be6'
  },
  {
    symbol: 'WON',
    name: 'WONCOIN',
    tokenAddress: '0xBe68b4645Ab798ED4dB88192a444898ff4FDa5Ae',
    tokenDecimals: 8,
    exchangeAddress: '0xfB2383Bd327C3D7E72c3A27D69593Aa3431232F0'
  },{
    symbol: 'CSX',
    name: 'CentaSaveX',
    tokenAddress: '0x091B0172f8F13d69fA2B7Cc0DF520bd69CE92f55',
    tokenDecimals: 8,
    exchangeAddress: '0xdA8063811146f98ecf5949661D6706ea8deF58e7'
  },{
    symbol: 'RICH',
    name: 'RICH Token',
    tokenAddress: '0x025daf950C6e814dEe4c96e13c98D3196D22E60C',
    tokenDecimals: 0,
    exchangeAddress: '0xA457B7F41A052F93201a1D1398d134f190759e94'
  },{
    symbol: 'oETH',
    name: 'Opyn ETH Insurance',
    tokenAddress: '0x1bc76312a8549204B23C19ad82bab8079C64C265',
    tokenDecimals: 18,
    exchangeAddress: '0xBe3E3cc0Ede85cE6573e2683b9313D8081927fDe'
  },{
    symbol: 'WUS',
    name: 'Webusdt STO',
    tokenAddress: '0xf9040b10179029ba56D3e9Cb27ef052Df774c744',
    tokenDecimals: 6,
    exchangeAddress: '0x699A7f86702c88E66A195B55527f26A183166262'
  },{
    symbol: 'BTB',
    name: 'BitBall',
    tokenAddress: '0x382117315856a533549eA621542Ccce13E54aE82',
    tokenDecimals: 18,
    exchangeAddress: '0xbD05488975583bC5386D67a9F5728fB902C65041'
  },{
    symbol: 'BMC',
    name: 'Blackmoon Crypto Token',
    tokenAddress: '0xDf6Ef343350780BF8C3410BF062e0C015B1DD671',
    tokenDecimals: 8,
    exchangeAddress: '0x894d04AD9d6644c06fc61ff1E46400D4CbFc1e18'
  },{
    symbol: 'BANKER',
    name: 'Banker.onl',
    tokenAddress: '0x594a1ADb17dEbF2842584D34d0a803490cE9d306',
    tokenDecimals: 18,
    exchangeAddress: '0x89cDd402c0051F3D1243CAF70b4DCC6a5E6A7d6f'
  },{
    symbol: 'CDK',
    name: 'CertDocKits Token',
    tokenAddress: '0x5a86dE868f7b8beD45dcc64854b3713B294802A6',
    tokenDecimals: 18,
    exchangeAddress: '0xc975D88541A5aF9898f211Fb642f3816BFE77eF5'
  },{
    symbol: 'NCOV',
    name: 'CoronaCoin',
    tokenAddress: '0x695f99E8eb35851B37ac07b7b3e491C2416b6B64',
    tokenDecimals: 18,
    exchangeAddress: '0xb87D6Fe88333D3Ef4D2B098d1278c27BaCFB223F'
  },{
    symbol: 'AzerChain',
    name: 'AZC',
    tokenAddress: '0xC8591f36697922377261e12592C9370f2456169b',
    tokenDecimals: 2,
    exchangeAddress: '0xf53Ff364E7b854bc77C9EAD3B380e1d93dBfCDc7'
  },{
    symbol: 'DOUGH',
    name: 'DOUGH Gov v1',
    tokenAddress: '0x5F5e9ed11344DadC3a08688E5f17E23f6A99bf81',
    tokenDecimals: 18,
    exchangeAddress: '0x6bb8F1cCBf3792d28CB105458C3d733efd1eDaF3'
  },{
    symbol: 'MASQ',
    name: 'MASQ',
    tokenAddress: '0x02ba9B528425f9de08F961B88A10b03Be8B8B998',
    tokenDecimals: 18,
    exchangeAddress: '0x4C03eFdbCcB6F04DEFF548278D3f2AC6F5F5A1F7'
  },{
    symbol: 'HKN',
    name: 'Hacken',
    tokenAddress: '0x9e6B2B11542f2BC52f3029077acE37E8fD838D7F',
    tokenDecimals: 8,
    exchangeAddress: '0xCB264a0A52edCF711D076a5a2712DFf6e2F0a705'
  },{
    symbol: 'WHACKD',
    name: 'Whackd',
    tokenAddress: '0xCF8335727B776d190f9D15a54E6B9B9348439eEE',
    tokenDecimals: 18,
    exchangeAddress: '0xC6F2b488CBf1EDEfE2A77BCc624cc89E4618dA31'
  },{
    symbol: 'ALS',
    name: 'Altruis Token',
    tokenAddress: '0x85EFFd6E815c6e267e7D063b54Ff9120634A0A4A',
    tokenDecimals: 18,
    exchangeAddress: '0x65F41914487a45843D46047335EE0555E01DE19F'
  },{
    symbol: 'TESLA',
    name: 'TESLA',
    tokenAddress: '0x8C29a80b69996959FFBf819C1750CD5126DfF246',
    tokenDecimals: 18,
    exchangeAddress: '0x2834E7c5f92efDf7ad98dBd451E0bAc5355A09eF'
  },{
    symbol: 'WRCO',
    name: 'World Reality Coin',
    tokenAddress: '0x1cfaC8036ed2db5F217846c6fa4F3f2aAF7a8Bb3',
    tokenDecimals: 18,
    exchangeAddress: '0x9906ffc3C4567A19397e1dae4f8EBFDA39A8BC99'
  },{
    symbol: 'JAN',
    name: 'CoinJanitor',
    tokenAddress: '0xAf80e6612D9C2E883122e7F2292Ee6C34176ad4F',
    tokenDecimals: 18,
    exchangeAddress: '0x6bd0b8c84Ae54EB7AB77069B33588934adb97064'
  },{
    symbol: 'PCL',
    name: 'Peculium',
    tokenAddress: '0x0F02e27745e3b6e9e1310d19469e2b5D7B5eC99A',
    tokenDecimals: 8,
    exchangeAddress: '0x9EAbE790919Cb96dA3F6F5F879aebe7042b13A3E'
  },{
    symbol: 'HNG',
    name: 'ESTATERO',
    tokenAddress: '0xa773dF60AE1f2eaaD9a5D668320454343697F128',
    tokenDecimals: 8,
    exchangeAddress: '0x817Eb5EE53A5F77a20BFa327214F0025456452Aa'
  },{
    symbol: 'LBA',
    name: 'Libra Facebook',
    tokenAddress: '0x9f87AA8f97259012AD32453D569776028f25fe25',
    tokenDecimals: 8,
    exchangeAddress: '0x3f341a9b54BAc2569AFF3A8cD740c3FC444A42a3'
  },{
    symbol: 'nCash',
    name: 'NucleusVision',
    tokenAddress: '0x809826cceAb68c387726af962713b64Cb5Cb3CCA',
    tokenDecimals: 18,
    exchangeAddress: '0xD995674aF12c9bA1fd245411178663da6Daabf59'
  },{
    symbol: 'PNT',
    name: 'Penta Network Token',
    tokenAddress: '0x53066cdDBc0099eb6c96785d9b3DF2AAeEDE5DA3',
    tokenDecimals: 18,
    exchangeAddress: '0xe9AA5292cE4eA0Bf473a7c2560200AeF58e25A8A'
  },{
    symbol: 'PERL',
    name: 'Perlin',
    tokenAddress: '0xb5A73f5Fc8BbdbcE59bfD01CA8d35062e0dad801',
    tokenDecimals: 9,
    exchangeAddress: '0x5D39D9E905eCA7224bA5Cb7535a1A7D597701b67'
  },{
    symbol: 'GRT',
    name: 'Global Rental Token',
    tokenAddress: '0x1fB6bccc7Da51aa32e96118B8A33226d2Ae16517',
    tokenDecimals: 8,
    exchangeAddress: '0x589A420bd11113d91E8f42e5b3FC8C741e97826b'
  },{
    symbol: 'MYTV',
    name: 'MyTV Token',
    tokenAddress: '0x45Af324F53a8D7DA1752DAd74ADc1748126D7978',
    tokenDecimals: 18,
    exchangeAddress: '0x3f0dC845BED2010DC97C97400874D809E040E7cf'
  },{
    symbol: 'BIS',
    name: '/biz/ Inc. Shares',
    tokenAddress: '0x14382c9440cC36697EE5EF4d653A263Ffb9F49A0',
    tokenDecimals: 18,
    exchangeAddress: '0xE3a9EE132E8cF3280c1893D1592cCE504D05A722'
  },{
    symbol: 'FND',
    name: 'vision',
    tokenAddress: '0x7a03f853D489468910478C71dF9f6Fd1aE7dDcDe',
    tokenDecimals: 18,
    exchangeAddress: '0x533859E411e3Ca83D47E763dd5a8c1D11E13f79c'
  },{
    symbol: 'NCOV',
    name: 'corona coin',
    tokenAddress: '0x816254181824Ec93aF1a5A2dce24755Beb86Eaef',
    tokenDecimals: 18,
    exchangeAddress: '0xD1Cd9B2325A24a12D2FB02B28B44D68D965EA6E6'
  },{
    symbol: 'ORBS',
    name: 'Orbs',
    tokenAddress: '0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA',
    tokenDecimals: 18,
    exchangeAddress: '0xB361cEBA7727Ec985Ac3ef96DE87d70eb5D52DBe'
  },{
    symbol: 'BRX',
    name: 'BerryXToken',
    tokenAddress: '0x3A4A0D5b8dfAcd651EE28ed4fFEBf91500345489',
    tokenDecimals: 18,
    exchangeAddress: '0x086CD9bC5c9e7efBF2F63056ACF705bDc5c2dD3c'
  },{
    symbol: 'KWAK',
    name: 'KwaKGWIYANNE',
    tokenAddress: '0x8370F3376Ff1bD12e2dA7f021C74A2D2353Be76F',
    tokenDecimals: 18,
    exchangeAddress: '0x13FE45BA9481b9b61fF20385279C5e686388c680'
  },{
    symbol: 'XCET',
    name: 'CEstates Token',
    tokenAddress: '0x39c99B436a2d003D55543f93Dd8f11DF77a4F055',
    tokenDecimals: 18,
    exchangeAddress: '0xA9869479A9581C0d95D54AE18D0610BcA282b227'
  },{
    symbol: 'WVG0',
    name: 'Wrapped Virgin Gen 0',
    tokenAddress: '0x25C7b64A93Eb1261E130eC21a3e9918CaA38b611',
    tokenDecimals: 18,
    exchangeAddress: '0x26Fc0dd0aBec481f525749af43a4fcddF3b56C99'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x13FE45BA9481b9b61fF20385279C5e686388c680',
    tokenDecimals: 18,
    exchangeAddress: '0xA06f7568B33327d5b7234b624e00e6fEE2847Fc9'
  },{
    symbol: 'With ☕️',
    name: 'With ☕️',
    tokenAddress: '0x4C6F4d435A939FB85Dd946baE4eeC9D52587F451',
    tokenDecimals: 18,
    exchangeAddress: '0x1d5A70c15e9322470F0442f84c045a9f2adB271F'
  },{
    symbol: 'FASTPAY',
    name: 'FASTPAY',
    tokenAddress: '0x6302EB80a6BcFa97160b6F931BbaAcDFe5a923D1',
    tokenDecimals: 18,
    exchangeAddress: '0x4FFB5bDa9F342b7be3C7705a10A70A41c1bA3941'
  },{
    symbol: '0XE',
    name: '0xUniverse Energy',
    tokenAddress: '0x865a0a385b805cC4146c0F4061586a3da25e5C1f',
    tokenDecimals: 9,
    exchangeAddress: '0xeE8EA3e9EF03ea7e5BFf6eA650CCd126fb32Fe5F'
  },{
    symbol: 'SOCA',
    name: 'Social Capital',
    tokenAddress: '0x48aEAbBb1b45e36CAa44F3F795bd6c2267B65Ad3',
    tokenDecimals: 18,
    exchangeAddress: '0x1248e37dAC63B8bC03a6274E718357EE348EBC40'
  },{
    symbol: 'BNX',
    name: 'BinMax',
    tokenAddress: '0xCC78a22ed609A94c7a168883E879265061d8605f',
    tokenDecimals: 18,
    exchangeAddress: '0x48456dF57D5fd3D24Ee95e2f7103C7a7561A91C0'
  },{
    symbol: 'XGame',
    name: 'XGame',
    tokenAddress: '0xa1157AFE0ceb053BeC64c65Dee3B4Ae14624E137',
    tokenDecimals: 8,
    exchangeAddress: '0xB8F52516Bf22a863C2ae1db2cF78936c4cBEE67B'
  },{
    symbol: 'DUST',
    name: 'Distant Universe Stardust Token',
    tokenAddress: '0xbCa3C97837A39099eC3082DF97e28CE91BE14472',
    tokenDecimals: 8,
    exchangeAddress: '0x2C2f4e9483e751d4854425513366B201ee1B1069'
  },{
    symbol: 'ART',
    name: 'ArtDAO token',
    tokenAddress: '0xc979C9F1e43C302948507756A186fB08bB489097',
    tokenDecimals: 18,
    exchangeAddress: '0x265Da28808bC1b6B01b56cc8d9Bc050eF2Cf7Ee6'
  },{
    symbol: 'REALTOKEN-20200-LESURE-ST-DETROIT-MI',
    name: 'RealToken 20200 Lesure Street Detroit MI',
    tokenAddress: '0x395C47a421C254AE42253764A7f56e0Ee0CDDac5',
    tokenDecimals: 18,
    exchangeAddress: '0x1Bdc18d53CA882B97196828E131548700ea81a88'
  },{
    symbol: 'CRX',
    name: 'Core',
    tokenAddress: '0x80aCB802869F7B825cdBdaCb504cF95b595BB930',
    tokenDecimals: 18,
    exchangeAddress: '0x00B5EE04923C2f5D4F9fD6C9122C3a4b013ca633'
  },{
    symbol: 'ASR',
    name: 'Asure',
    tokenAddress: '0x15DfC197E7ac7D81a07250B5bdebAa96Fc1C5dfA',
    tokenDecimals: 18,
    exchangeAddress: '0x57266360aeB0433a98Eef70Bb414A84beB34d8dB'
  },{
    symbol: 'VRS',
    name: 'Veros',
    tokenAddress: '0xAbC430136A4dE71c9998242de8c1b4B97D2b9045',
    tokenDecimals: 6,
    exchangeAddress: '0xFA51A6809B3DaBc1525f135424F4350f8B0B6B12'
  },{
    symbol: 'APIX',
    name: 'APIX',
    tokenAddress: '0xf51EBf9a26DbC02B13F8B3a9110dac47a4d62D78',
    tokenDecimals: 18,
    exchangeAddress: '0x8c2875d0aF82f92D98D62533908f0aC7000E03fF'
  },{
    symbol: 'ZINC',
    name: 'ZINC',
    tokenAddress: '0x4AaC461C86aBfA71e9d00d9a2cde8d74E4E1aeEa',
    tokenDecimals: 18,
    exchangeAddress: '0xbC1784663d7c3cF6E007BaAc5C0bd9E018816242'
  },{
    symbol: 'DEN',
    name: 'DenCoin',
    tokenAddress: '0x8ACc61A19dB1e31C4354d2CA77d9aa3CcB506e93',
    tokenDecimals: 18,
    exchangeAddress: '0xE78283E8389b9D4b1A3d3Ba645042Ff9d94a966F'
  },{
    symbol: 'HBTC',
    name: 'Huobi BTC',
    tokenAddress: '0x0316EB71485b0Ab14103307bf65a021042c6d380',
    tokenDecimals: 18,
    exchangeAddress: '0x207e027257544d3706CE87C98B751ABd89Dcae38'
  },{
    symbol: 'RKK',
    name: 'RokokToken',
    tokenAddress: '0x2cdbc0952CB444faaced712AC6d09eA61a238102',
    tokenDecimals: 2,
    exchangeAddress: '0xe3ef05BFe2008164129c430aF057caA494B35128'
  },{
    symbol: 'MCM cash',
    name: 'Mercurium cash',
    tokenAddress: '0xe968608915831DeA44C0E506309b11fF43626dB5',
    tokenDecimals: 16,
    exchangeAddress: '0xb584e094730A327645ae60c8BC39F57c1119c87D'
  },{
    symbol: 'MCC',
    name: 'Music Chian Coin',
    tokenAddress: '0x3C80FCaA58ebFA3Cc1Ed27b559BB20b002E1a608',
    tokenDecimals: 2,
    exchangeAddress: '0xce16252488e5387A93BA5C38d21Ae03bEdd8ed22'
  },{
    symbol: 'BIFc',
    name: 'Bet in Fight Coin',
    tokenAddress: '0xd558aE1A74955035a030Bb9C145412a101F23f3c',
    tokenDecimals: 18,
    exchangeAddress: '0x2FF4805e85136fd1057bC73175F7A6C8bC1f1F07'
  },{
    symbol: 'Dap',
    name: 'Bloc',
    tokenAddress: '0x78a685E0762096ed0F98107212e98F8C35A9D1D8',
    tokenDecimals: 10,
    exchangeAddress: '0x7bc6fD7C839c7F726C937B5Bd185F19AF8988E59'
  },{
    symbol: 'RSV',
    name: 'Reserve',
    tokenAddress: '0x1C5857e110CD8411054660F60B5De6a6958CfAE2',
    tokenDecimals: 18,
    exchangeAddress: '0x87c77b0Ea454F0e9E04ab82f6E9F9a89cFa4d20a'
  },{
    symbol: 'HELL',
    name: 'HELL',
    tokenAddress: '0x1bdcFe02C54362cE935D13D5314ac76e0Af20AB7',
    tokenDecimals: 18,
    exchangeAddress: '0xe2C8E83bBfff302626420cF6c3C7B3170b389a1E'
  },{
    symbol: 'VBX',
    name: 'vibrant',
    tokenAddress: '0x6DCcF9C0aB71dAc26b7F7886E43a2B433806c590',
    tokenDecimals: 18,
    exchangeAddress: '0xE6ef73c104a08e2Ca859De0F15210c3319a2633B'
  },{
    symbol: 'AGN',
    name: 'Agricoin',
    tokenAddress: '0x25d9Bef26b6F7018D24d18144fe3C8bFD0d48a53',
    tokenDecimals: 18,
    exchangeAddress: '0x4cb385043722a3AC0DE5bdF4c1B3E58dA62ed341'
  },{
    symbol: 'MLGC',
    name: 'Marshal Lion Group Coin',
    tokenAddress: '0x4534492034a2cd3EAb34C8F357cD139c95b09F52',
    tokenDecimals: 0,
    exchangeAddress: '0x9ffe8c5aBc9A22E3520ba78Ce7423eFD2b6Bb9fa'
  },{
    symbol: 'RGST',
    name: 'Rusgas Technology',
    tokenAddress: '0xbea3E895034365547644744A7d725EaF451578e6',
    tokenDecimals: 8,
    exchangeAddress: '0x006ea0d095fc73328a19b70F92Bdf31E07D5edb4'
  },{
    symbol: 'KBC',
    name: 'KaratBank Coin',
    tokenAddress: '0xd67b1Db49801b6F4c96a01a4F7964233150dc58b',
    tokenDecimals: 7,
    exchangeAddress: '0x2006599e3BFfa45Ed2C9Cf3f67B978917A3071bb'
  },{
    symbol: 'YOK',
    name: 'YOKcoin',
    tokenAddress: '0x05Fcc72CFb4150AbAE415c885f7a433Ff523296F',
    tokenDecimals: 18,
    exchangeAddress: '0x9a2E3cFcFEa2AaA5E2Eb8784e23388FFeB1201ee'
  },{
    symbol: 'VEDX',
    name: 'VEDX TOKEN',
    tokenAddress: '0xd64904232b4674c24fA59170D12fC7df20f5880e',
    tokenDecimals: 18,
    exchangeAddress: '0xCE8CADb6E6D241409b29bFF1fCACc2d670347BAa'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2FF4805e85136fd1057bC73175F7A6C8bC1f1F07',
    tokenDecimals: 18,
    exchangeAddress: '0x27C5798e40320C49578991821E18C46060925cC5'
  },{
    symbol: 'ETS',
    name: 'EtherSpace',
    tokenAddress: '0x79e3476b31CE53C8981Fe22B9c204Bee45EE3405',
    tokenDecimals: 18,
    exchangeAddress: '0x498DbF731D6afF14f69B11B54f7e0358F589De1e'
  },{
    symbol: 'BEST',
    name: 'Bitpanda Ecosystem Token',
    tokenAddress: '0x1B073382E63411E3BcfFE90aC1B9A43feFa1Ec6F',
    tokenDecimals: 8,
    exchangeAddress: '0x4283657253Ac996B51b1B5f1EE73556Bc27e8596'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x27C5798e40320C49578991821E18C46060925cC5',
    tokenDecimals: 18,
    exchangeAddress: '0xbb5362A5cDa345aC5b7815967b327e66b5190f21'
  },{
    symbol: 'MENY',
    name: 'Meny Network Token',
    tokenAddress: '0xb03e81eb0c49A96b66ecEC96CA489D3802278110',
    tokenDecimals: 18,
    exchangeAddress: '0xCE8FfF2061c7E6fACaA6a7922FC1e2f8981cAFDE'
  },{
    symbol: 'ARUK',
    name: 'ARUKU COIN',
    tokenAddress: '0x81AADA684F4Bd51252c8184148A78e7E4B44dc2c',
    tokenDecimals: 18,
    exchangeAddress: '0x553DA8f304A6C213010825d89029A270eb2bF36A'
  },{
    symbol: 'XSAT',
    name: 'Saturn',
    tokenAddress: '0x0d9E614937A308438337A2999Acf64Fc86bF098a',
    tokenDecimals: 18,
    exchangeAddress: '0x63ea692547a5245a5FD9c627b53ee07B668aDF38'
  },{
    symbol: '"oAparna"',
    name: '"oAparna"',
    tokenAddress: '0x809ee624ad558cFf769e6077088EB3dC2357aaEA',
    tokenDecimals: 8,
    exchangeAddress: '0xc1D8F405B8Ff403933189D5333D4a60dC35b7a22'
  },{
    symbol: 'PQT',
    name: 'Prediqt',
    tokenAddress: '0xF8c17C840549974eC17C6573B3963f1E3046c0eb',
    tokenDecimals: 18,
    exchangeAddress: '0xc739789F57F34146Af7773DB6d905b999194F9bF'
  },{
    symbol: 'MEJ',
    name: 'Mejicoin',
    tokenAddress: '0x4503aB2d699C2F4A1aE37586f57154a1196739E7',
    tokenDecimals: 18,
    exchangeAddress: '0x112B0FF67B0C42bc30b87cc2eF0f4Be06221c5c2'
  },{
    symbol: 'ESM',
    name: 'Esmeralda coin',
    tokenAddress: '0xe6FF67e001EF6623C23Ac234922F67EEfE048DfF',
    tokenDecimals: 18,
    exchangeAddress: '0xc0E3e69eBa7172fE3230Ba29C45890e4A4282ADF'
  },{
    symbol: 'CTBU',
    name: 'CryptoTribuzz',
    tokenAddress: '0xB61127135fe00CfDA810497fEA6f1EBD32085840',
    tokenDecimals: 18,
    exchangeAddress: '0xBdfd5291c620b150E3EC6e62e07FEbbab3696031'
  },{
    symbol: 'THV2',
    name: 'ThonksV2',
    tokenAddress: '0x9acA16066C85F12f36CdDB3898F3E14D0bDF76C8',
    tokenDecimals: 18,
    exchangeAddress: '0x1Fb21f537424B1be2487053c49d6dcaBE1231886'
  },{
    symbol: 'CPAY',
    name: 'CPAY Token',
    tokenAddress: '0x0Ebb614204E47c09B6C3FeB9AAeCad8EE060E23E',
    tokenDecimals: 0,
    exchangeAddress: '0xfF189E9E6B9431F05Bc44A939d9E136b79a5e111'
  },{
    symbol: '$TP',
    name: '🧻',
    tokenAddress: '0x34361A568cc3352D3c64a34e4CEe3de604c93fc3',
    tokenDecimals: 18,
    exchangeAddress: '0xBe17B4497c2e081426B9E0EE65027756c42910c0'
  },{
    symbol: 'UQC',
    name: 'Uquid Coin',
    tokenAddress: '0xD01DB73E047855Efb414e6202098C4Be4Cd2423B',
    tokenDecimals: 18,
    exchangeAddress: '0x00B50BB8B88672A0c108731E8181618c6151373e'
  },{
    symbol: 'plDai',
    name: 'Pool Dai',
    tokenAddress: '0x49d716DFe60b37379010A75329ae09428f17118d',
    tokenDecimals: 18,
    exchangeAddress: '0x4d4966e3F88c86b5813f186db4592184A72847f9'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xfc96e234d4B31C63051E707105fCC4aba37807Fa',
    tokenDecimals: 18,
    exchangeAddress: '0x5f9275AcC0de2C8e65Bb340e3D9Edbf5D1F00a25'
  },{
    symbol: 'ECDF',
    name: 'EasyCoinDigitalFreedom',
    tokenAddress: '0x406ab55C0bAB2D4a3361f87F251211c3090d80Bc',
    tokenDecimals: 18,
    exchangeAddress: '0xf97F15901b6f0ff681B6F454F0f541a46E266af7'
  },{
    symbol: 'RBYTE',
    name: 'RicByte',
    tokenAddress: '0x2bcABAf45Ab41019DEA42005Ee0ca71c29eCCBE3',
    tokenDecimals: 18,
    exchangeAddress: '0x4C5d6faa976D95b3Cd719F27f7DE7624C004D9e3'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x22d8432cc7aA4f8712a655fC4cdfB1baEC29FCA9',
    tokenDecimals: 18,
    exchangeAddress: '0x8fD77f9b69c94399319fD84d6903E35e6054F20b'
  },{
    symbol: 'M',
    name: 'MToken',
    tokenAddress: '0x516334aA920C5AE3897b8208952b4b35143904c3',
    tokenDecimals: 0,
    exchangeAddress: '0xc55E552eA1A1bDf4Dd79346bfb1dd32aDAf80Aff'
  },{
    symbol: 'TOILET',
    name: 'Toilet Paper',
    tokenAddress: '0xC778197261bBD95a9687BB8eb592180E97CA7652',
    tokenDecimals: 3,
    exchangeAddress: '0x975a8C895a4B3559082F4B645B439CFE3785578f'
  },{
    symbol: 'DANIMESQ',
    name: 'Daniell Mesquita Token',
    tokenAddress: '0x84d7FC44e4121adb74ef8D00a0F94Cee7880d473',
    tokenDecimals: 4,
    exchangeAddress: '0x43fd2c4B590838B49e2282CC33D218b19872ac51'
  },{
    symbol: 'XAUt',
    name: 'Gold Tether',
    tokenAddress: '0x4922a015c4407F87432B179bb209e125432E4a2A',
    tokenDecimals: 6,
    exchangeAddress: '0xF583F0ea29C2d2259eA0AD8038783D79bd126909'
  },{
    symbol: 'SBUY',
    name: 'SbuyMining',
    tokenAddress: '0x9B273C17fB10651A6B62b2ca66219A900Ee8b9f4',
    tokenDecimals: 0,
    exchangeAddress: '0xCd12474c71E3a6a4ed934d7dd9241CFCc01f3d87'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x3958B4eC427F8fa24eB60F42821760e88d485f7F',
    tokenDecimals: 18,
    exchangeAddress: '0x5B4Cda6F7ba72ED8B1D91f1bFC7A40661461646e'
  },{
    symbol: 'OUSDT',
    name: 'Oxy Tether',
    tokenAddress: '0xfef20276999c47fD9AC93F664dd41c6575e2C2c3',
    tokenDecimals: 18,
    exchangeAddress: '0x67314890D6128ad755714fa5238aBc27Bf8e070c'
  },{
    symbol: 'SHT',
    name: 'Shit Ticket',
    tokenAddress: '0x71ad45dC8C40a9c31cE2026EB81c1547dCFd69a6',
    tokenDecimals: 0,
    exchangeAddress: '0x2a2Df10a018504376DA17B05A5c035415bf5C0D6'
  },{
    symbol: 'GGC',
    name: 'GGCOIN',
    tokenAddress: '0x7F969C4D388Ca0AE39A4FdDB1A6f89878CA2fBf8',
    tokenDecimals: 18,
    exchangeAddress: '0x5524764844DC62D1d2970b44b00e1bE44499A4d0'
  },{
    symbol: 'NOC',
    name: 'Nomocracy Affection',
    tokenAddress: '0xe7C12a3702220D0131f579127D2a552E824BE8f7',
    tokenDecimals: 18,
    exchangeAddress: '0x2F147ECB1e183A622C5653a2E0cBbC27920155CE'
  },{
    symbol: 'SERUM',
    name: 'VaccinaCoin',
    tokenAddress: '0x567d297D0cBB66195B268162a4547F220EF49c51',
    tokenDecimals: 18,
    exchangeAddress: '0xB6199DafFFdd640eE84EC427d74b6bDe11092e72'
  },{
    symbol: 'NXM',
    name: 'NXM',
    tokenAddress: '0xE3A08D0162Ae03655074251fc9B2456C541732a9',
    tokenDecimals: 18,
    exchangeAddress: '0xACC18808065478857b0684a9c6e52342dacB8749'
  },{
    symbol: 'ICK',
    name: 'Saint Fame: $ICK Mask',
    tokenAddress: '0x793e2602A8396468f3CE6E34C1B6C6Fd6D985bAD',
    tokenDecimals: 18,
    exchangeAddress: '0x3b4167B4d86b696ef7710Ee9306CD303786F0A0b'
  },{
    symbol: 'REA',
    name: 'Real Estate Asset Token',
    tokenAddress: '0x34B4D949554fc3e7CB4e708e09C9bBC549b6eC1B',
    tokenDecimals: 18,
    exchangeAddress: '0x8946aE184FaBb0F72B2A43100F48AA0af8866188'
  },{
    symbol: 'SCT',
    name: 'SatoshiCrypto',
    tokenAddress: '0x9A77B53d8a3c262a8571f755c93F7B74e7138624',
    tokenDecimals: 18,
    exchangeAddress: '0xa9A3430A436f2E1EFfbB7a7bC506Df7EF460300F'
  },{
    symbol: 'OZR',
    name: 'OZRealestates',
    tokenAddress: '0x7338809D1a2c6fbb6E755470Ab2A28e8C5DAc63C',
    tokenDecimals: 18,
    exchangeAddress: '0xD0774429775E2CC576A4c648281B0b02cc0D5576'
  },{
    symbol: 'DGC',
    name: 'Dogecoin Gold Classic',
    tokenAddress: '0x7Be3E4849AA2658C91B2D6fCf16Ea88CfCb8B41e',
    tokenDecimals: 0,
    exchangeAddress: '0xf2E86c5CB256b4EE6BeD92D01d9B937D0548cdBc'
  },{
    symbol: 'COV19',
    name: 'COV19',
    tokenAddress: '0xdEd1333e2a518F2aa9415Fd31E027Ffe9A50AB69',
    tokenDecimals: 18,
    exchangeAddress: '0x90cE27342e9F469d976ed5c6340b9D7A47909338'
  },{
    symbol: 'C19',
    name: 'Collab-19',
    tokenAddress: '0x87d7b6CfAaeC5988FB17AbAEe4C16C3a79ceceB0',
    tokenDecimals: 18,
    exchangeAddress: '0xB998Fe0398Fd6D688eddBD1897F87d6131D7DDF7'
  },{
    symbol: 'WARA',
    name: 'Awara',
    tokenAddress: '0xb396431C76b0CdC68A24BC946c71408a6a2bae28',
    tokenDecimals: 18,
    exchangeAddress: '0x3202a9f22A109E728ffc44c03B5cCba0437E39e5'
  },{
    symbol: 'oETH $100 Put',
    name: 'Opyn ETH Put $100 03/30/20',
    tokenAddress: '0x87Fe8eBa753076a943BD2A5f6c3556188064797E',
    tokenDecimals: 8,
    exchangeAddress: '0xA680B19749672A632e1E493Be7807638A57c952F'
  },{
    symbol: 'BTCDai',
    name: 'BTCDaiRebalancingSetToken',
    tokenAddress: '0x6123A0CBC95Cb157995A0795187A60995B85e0A9',
    tokenDecimals: 18,
    exchangeAddress: '0xF7567E0A2B7440a1a73b28750514674b3516EDb7'
  },{
    symbol: 'sXAU',
    name: 'Synth sXAU',
    tokenAddress: '0x261EfCdD24CeA98652B9700800a13DfBca4103fF',
    tokenDecimals: 18,
    exchangeAddress: '0xfD182bf9c2D72d24607Ea47D65CfD8791eF66229'
  },{
    symbol: 'HIVED',
    name: 'HiveMind',
    tokenAddress: '0x24eBA89651aa88810924D4669256Bb56832902fe',
    tokenDecimals: 4,
    exchangeAddress: '0x0d0765D6056b1E1643A72433e529a89cfA64fBc9'
  },{
    symbol: 'FZC',
    name: 'Fazhan  Chain',
    tokenAddress: '0x04423d360B5F2A65266a150AC109534c47830E66',
    tokenDecimals: 18,
    exchangeAddress: '0xc5D3cD28968302a8e8C980BF2120C683d86858a0'
  },{
    symbol: 'ZXL',
    name: '质信链',
    tokenAddress: '0x19c5A48eBa1F50d63054144C62Ff11665c91E805',
    tokenDecimals: 18,
    exchangeAddress: '0x2FCe5BC1Fa63149297509aEfE0BFFA4b31f985FC'
  },{
    symbol: 'BCT',
    name: 'Bool Compensation Token',
    tokenAddress: '0xAd8d44c7B11003f3834766B8ec68f316C3ad3848',
    tokenDecimals: 18,
    exchangeAddress: '0xfe58697E938c647Cd8be00bC56ea39b0583479ac'
  },{
    symbol: 'TIMSON',
    name: 'TimsonCoin',
    tokenAddress: '0x2C08Fe6F7716188c08272B32d881dcec9d3990BB',
    tokenDecimals: 8,
    exchangeAddress: '0x5Ad88Cb9437E8AFA073E64B2c97389f6e5eCcc99'
  },{
    symbol: 'CRS',
    name: 'Curious',
    tokenAddress: '0xF47C14628b93F4f6e79003d5236770d54aEF75E4',
    tokenDecimals: 5,
    exchangeAddress: '0x63c4029C7d8fF5E657433FB720c5e5BcD8D769d9'
  },{
    symbol: 'AMU',
    name: 'Amazing Unit',
    tokenAddress: '0x1E9421331F19E6c4Ba79BCE22582e3F34c4CF506',
    tokenDecimals: 18,
    exchangeAddress: '0xAa08b2F22e26a10267Fd3D19EF9082F4cA00236b'
  },{
    symbol: 'ESME',
    name: 'Esmeraldacoin',
    tokenAddress: '0x726a5aABAc1Ce2B901b8A81576Dc4BBB2A8f152C',
    tokenDecimals: 18,
    exchangeAddress: '0x199b07669d328b15AfFDBC0B33fbaD355998d9b0'
  },{
    symbol: 'ZXTH',
    name: 'ZXTH',
    tokenAddress: '0xF9933cb5f0397bf020Bb950C307e30dd8f62080f',
    tokenDecimals: 18,
    exchangeAddress: '0x851E54d222FB87DcBEE3F8eED0ebe2eAB4E38d79'
  },{
    symbol: 'EBX',
    name: 'Ebliex',
    tokenAddress: '0xE4821A861D66e5fcE17Ce397905067E72C4B494E',
    tokenDecimals: 6,
    exchangeAddress: '0x4497DfEa13E992B6563eb77b072bFBFDf539659D'
  },{
    symbol: 'BZH',
    name: 'BZH TOKEN',
    tokenAddress: '0x3685ee91777e3eD4Ba4122C429C504dF833C3b26',
    tokenDecimals: 8,
    exchangeAddress: '0xCac4bFe2Fd44F527aA943322CfA02E834f5cd1DC'
  },{
    symbol: 'UPP',
    name: 'SENTINEL PROTOCOL',
    tokenAddress: '0xC86D054809623432210c107af2e3F619DcFbf652',
    tokenDecimals: 18,
    exchangeAddress: '0x3381CeBe4f76f4E9db29cd0835A5585e11bcc99d'
  },{
    symbol: 'FRT',
    name: 'Fortitude',
    tokenAddress: '0xe85e5C05886b821f9075e1e29b1E347bf4e6B4b7',
    tokenDecimals: 18,
    exchangeAddress: '0x8000Ee6F65a21741dc8086C68455DA6529fc35Bd'
  },{
    symbol: 'APBT',
    name: 'Airdoph Bazar Token',
    tokenAddress: '0x199B743F1E91446307098f3d1babF6909c5A52f0',
    tokenDecimals: 18,
    exchangeAddress: '0x9c225fa1Df6C94833798743C09A1d0AEc15E9775'
  },{
    symbol: 'yUSDC',
    name: 'iearn USDC',
    tokenAddress: '0xd6aD7a6750A7593E092a9B218d66C0A814a3436e',
    tokenDecimals: 6,
    exchangeAddress: '0xF572Db9f32c8D6Ea646F60855E549809344479A5'
  },{
    symbol: 'CC19',
    name: 'CureCorona',
    tokenAddress: '0x76540b005587b6146B3F23A6Bc97A6e620A3E639',
    tokenDecimals: 18,
    exchangeAddress: '0x564200E3141f536208635104B8CdE35E59Ab39Ea'
  },{
    symbol: 'CTOX',
    name: 'Cloud 2.0',
    tokenAddress: '0xBB472d0D8C573a8B81C29498B9585f8Ba2A77DfB',
    tokenDecimals: 18,
    exchangeAddress: '0xFa3db37e38E504b5E27135C8514792D768614552'
  },{
    symbol: 'ATS',
    name: 'Authorship Token',
    tokenAddress: '0x2dAEE1AA61D60A252DC80564499A69802853583A',
    tokenDecimals: 4,
    exchangeAddress: '0x60a2e27abFc6ad143eb4Afbca3c3f820557fDc91'
  },{
    symbol: 'CMIT',
    name: 'COMIKETCOIN',
    tokenAddress: '0xe11609b9a51CAF7d32A55896386aC52ED90e66F1',
    tokenDecimals: 8,
    exchangeAddress: '0xaE46A96B8b3461AFf58832866EbeC851C7f6d25A'
  },{
    symbol: 'META',
    name: 'GeekMeta',
    tokenAddress: '0xBeaD54f50231444EEB05822D0c02FE178CFecCB5',
    tokenDecimals: 18,
    exchangeAddress: '0x75f862e649CA4CB93bB8e8d960151d8AE93807F6'
  },{
    symbol: 'APOS',
    name: 'Abby Pos Coupon',
    tokenAddress: '0x2d0cA23D4FE6E1E36F78acd4cED264110B3c6DDe',
    tokenDecimals: 18,
    exchangeAddress: '0x912FD2e8C4039Ee0eb11176999bEA053cd3E6123'
  },{
    symbol: 'KUE',
    name: 'Kuende Token',
    tokenAddress: '0xdf1338FbAfe7aF1789151627B886781ba556eF9a',
    tokenDecimals: 18,
    exchangeAddress: '0x6d87C375B1f5b419E6c901E3C86FE8eb816b77Fc'
  },{
    symbol: 'PSCL',
    name: 'Pascal',
    tokenAddress: '0x76Ede2C928D30c59F6155Ff8F40BfCfAeE8242c3',
    tokenDecimals: 4,
    exchangeAddress: '0x85D6B8920c9038327031181d8E9309489fd87a60'
  },{
    symbol: 'OBIT',
    name: 'OBIT Coin',
    tokenAddress: '0xc3DbBD550199Cd4E8F54737d0B05697609B12fb5',
    tokenDecimals: 18,
    exchangeAddress: '0xAA44D84645754c66eA5c91c794056C886b406595'
  },{
    symbol: 'yUSDT',
    name: 'iearn USDT',
    tokenAddress: '0x83f798e925BcD4017Eb265844FDDAbb448f1707D',
    tokenDecimals: 6,
    exchangeAddress: '0x4F8476e540D11502a3D27B674Ce2328186049FCF'
  },{
    symbol: 'yUSDT',
    name: 'iearn USDT',
    tokenAddress: '0xE6354ed5bC4b393a5Aad09f21c46E101e692d447',
    tokenDecimals: 6,
    exchangeAddress: '0x4c1ac226e3eAE84d03FABfF39e57dE855b1371da'
  },{
    symbol: 'yTUSD',
    name: 'iearn TUSD',
    tokenAddress: '0x73a052500105205d34Daf004eAb301916DA8190f',
    tokenDecimals: 18,
    exchangeAddress: '0x104ca300B8d755a5b50aE752036885B0497fD3ae'
  },{
    symbol: 'yDAI',
    name: 'iearn DAI',
    tokenAddress: '0xC2cB1040220768554cf699b0d863A3cd4324ce32',
    tokenDecimals: 18,
    exchangeAddress: '0xc2928FCd3551bcB04E08c2375c5F00F788F3B181'
  },{
    symbol: 'yUSDC',
    name: 'iearn USDC',
    tokenAddress: '0x26EA744E5B887E5205727f55dFBE8685e3b21951',
    tokenDecimals: 6,
    exchangeAddress: '0xBdDb590D89182E9687eC6a3D3FFba544DDBA97af'
  },{
    symbol: 'yBUSD',
    name: 'iearn BUSD',
    tokenAddress: '0x04bC0Ab673d88aE9dbC9DA2380cB6B79C4BCa9aE',
    tokenDecimals: 18,
    exchangeAddress: '0xF4DFa5521632AA8f79a920CCcBbA27dF45Fe303B'
  },{
    symbol: 'RLT',
    name: 'Roulette Token',
    tokenAddress: '0xcCeD5B8288086BE8c38E23567e684C3740be4D48',
    tokenDecimals: 10,
    exchangeAddress: '0xE373e273791d0BF9b31265FBd76d056F08b48B14'
  },{
    symbol: 'HETH',
    name: 'Ethash',
    tokenAddress: '0x90F08Cc8ddc43f5C01224F67fDf4640995139e8F',
    tokenDecimals: 8,
    exchangeAddress: '0x80EE95bfd3512dA695d0F6bF1700DD6cf7d05626'
  },{
    symbol: 'AZUM',
    name: 'Azuma coin',
    tokenAddress: '0xd26a9C3437f7D121098c8C05C7413F5Cc70BB070',
    tokenDecimals: 18,
    exchangeAddress: '0xD3F865C32dFF8194B82192A871aa1f05DaA291c8'
  },{
    symbol: 'CABC',
    name: 'Cashback coin',
    tokenAddress: '0x9e07a24E7Ba530270668D5CC1958a6ed1153C8ea',
    tokenDecimals: 8,
    exchangeAddress: '0xF21aD28d5904fBa8C6ce065B5C5e3F10463d4D5f'
  },{
    symbol: 'InBit',
    name: 'InBit Token',
    tokenAddress: '0x9c12d9b1223130B641154d8d3DB35F91D81c8dfd',
    tokenDecimals: 18,
    exchangeAddress: '0x6630350B33647DB9A9Eb47514189c0ded64AA28a'
  },{
    symbol: 'MATH',
    name: 'MATH Token',
    tokenAddress: '0x08d967bb0134F2d07f7cfb6E246680c53927DD30',
    tokenDecimals: 18,
    exchangeAddress: '0xD1936858F31A12F5eCeEda571Fc27BBCb587167E'
  },{
    symbol: 'HTX',
    name: 'Huptex',
    tokenAddress: '0x38A0df9a08d18dc06CD91Fc7Ec94a0AcdF28D994',
    tokenDecimals: 2,
    exchangeAddress: '0xa546CbEDd5F856CDCE63aA1EE6e43c3746CF6ca0'
  },{
    symbol: 'CODO',
    name: 'CoronaDollar',
    tokenAddress: '0x8301B6220eed034BC18e8406241E98fd306322f1',
    tokenDecimals: 8,
    exchangeAddress: '0x8CF6240A096E3a84938b6Ff22949311aA3BD6d65'
  },{
    symbol: 'FSN',
    name: 'Fusion Token',
    tokenAddress: '0xD0352a019e9AB9d757776F532377aAEbd36Fd541',
    tokenDecimals: 18,
    exchangeAddress: '0x5Da4Ac6551cDa93209912b1E28E05B51B1a967ED'
  },{
    symbol: 'oETH $100 Put 04/03/20',
    name: 'Opyn ETH Put $100 04/03/20',
    tokenAddress: '0x48AB8A7d3Bf2EB942e153e4275Ae1a8988238dC7',
    tokenDecimals: 8,
    exchangeAddress: '0x30651Fc7F912f5E40AB22F3D34C2159431Fb1c4F'
  },{
    symbol: 'ZBLT',
    name: 'ZEBELLION',
    tokenAddress: '0x98a1208A9287e378d329225836b823481D890409',
    tokenDecimals: 18,
    exchangeAddress: '0xC24308AACBe693C5bF162B3a5FC58Aaa4EA6EA25'
  },{
    symbol: 'BWC',
    name: 'Bill Warren',
    tokenAddress: '0xeF8A5A4105194271804033a6bd11E36A4acC6499',
    tokenDecimals: 18,
    exchangeAddress: '0xd3BE1F4cE988d605Bf9eC5466Ac76E9430Ad848E'
  },{
    symbol: 'USDDS',
    name: 'U. S. Dollar Digital Safe',
    tokenAddress: '0x203Ba630BFC57E3BD9f0DD8EA38B30e972d0E050',
    tokenDecimals: 18,
    exchangeAddress: '0x05C8FA370c192f40b24433686fD593b5822495B4'
  },{
    symbol: 'CNV',
    name: 'Coronavirus Coin',
    tokenAddress: '0x02Cc786304ec4D6758cB16a962139870B4d960Ce',
    tokenDecimals: 18,
    exchangeAddress: '0x0eDf7932EDc4d059403deEDd2C43C524F0897a5c'
  },{
    symbol: 'SPRKL',
    name: 'Sparkle',
    tokenAddress: '0x4b7aD3a56810032782Afce12d7d27122bDb96efF',
    tokenDecimals: 8,
    exchangeAddress: '0x22CAbDA17F8801233B3a83350270E834091f1d2B'
  },{
    symbol: 'DEXT',
    name: 'Dex Delta Token',
    tokenAddress: '0x72D530016E9E0fc23DE6C1f7f487992c879518Dc',
    tokenDecimals: 1,
    exchangeAddress: '0xD40f523F6eD6cdA85a84fC5b999a0Df1aB22c406'
  },{
    symbol: 'ITALIA',
    name: 'ITALIA',
    tokenAddress: '0x25B63bcA43914b7d7CcD59892b762c06493a04E6',
    tokenDecimals: 4,
    exchangeAddress: '0x33137E1056bc24EC005b7F61b19f881d19706d82'
  },{
    symbol: 'YTB',
    name: 'Youtube',
    tokenAddress: '0x293B75f71daD33465771d58B584014059455b97B',
    tokenDecimals: 18,
    exchangeAddress: '0xfa168D709f6ed78A0485EDb89759046bDFdBFbCa'
  },{
    symbol: 'CRTS',
    name: 'Cryptotipsfr',
    tokenAddress: '0x825a64810e3EE35bD64c940140eA91a609608ABE',
    tokenDecimals: 18,
    exchangeAddress: '0x4Aa6220D51765D5D68a4Bfec9A28d02cbDFC4Af4'
  },{
    symbol: 'LOM',
    name: 'Ltconlinemarkets',
    tokenAddress: '0x2516ac5Db37DF788f8f6Ef69EcaA7Cd76652eAe2',
    tokenDecimals: 18,
    exchangeAddress: '0xC000BcEb39F2B8e438bA3aeFC9A25e629ACc5a00'
  },{
    symbol: 'CBET',
    name: 'CryptoBet',
    tokenAddress: '0xEa4D68E7108DD8aED0E1EB34fa67E6B2c6F7ca92',
    tokenDecimals: 18,
    exchangeAddress: '0x3c499299951790Ff6ff35C46c35D11F92bB99A23'
  },{
    symbol: 'DANK',
    name: 'DanKoin',
    tokenAddress: '0x4057950247E4Ec8Dc7fe399ec19Ea43E80b931c8',
    tokenDecimals: 18,
    exchangeAddress: '0xD529c8Ae85989d556550B8be2720d7059d3f07cA'
  },{
    symbol: 'PoN',
    name: 'Proof of Nature Token',
    tokenAddress: '0x19ddC3605052554A1aC2b174aE745c911456841f',
    tokenDecimals: 18,
    exchangeAddress: '0x34729BFA29a081e0ff0265FF895296870E8c4e62'
  },{
    symbol: 'LAT',
    name: 'Luxury Auto Coin',
    tokenAddress: '0x42123673C24ef89fDfAcc51ceFCaa87FE8E8c8DE',
    tokenDecimals: 18,
    exchangeAddress: '0x71d6509Be726C4795E4f07561c4A17BCE995ED06'
  },{
    symbol: 'TNX',
    name: 'TNX Bet',
    tokenAddress: '0xC9E243d662e630702b014B06C0b6a77ad4302Db2',
    tokenDecimals: 18,
    exchangeAddress: '0xea202ebBFe71C422BD67b7D6dCFCf38B3d7b9a12'
  },{
    symbol: 'STO',
    name: 'storeum',
    tokenAddress: '0xD1410a4fc39Be5ff5CD328e3a23F382423936Ebd',
    tokenDecimals: 18,
    exchangeAddress: '0xc8Efea4A307fA1C58804e690f0F714759a6cfef1'
  },{
    symbol: 'ETL',
    name: 'ElectroLite Network',
    tokenAddress: '0x2C351B6350975F64e45354c842D9F2F7A2508C1F',
    tokenDecimals: 8,
    exchangeAddress: '0x2057b4b230641E2DF41444C7F9E1f17d4974160E'
  },{
    symbol: 'RAIN',
    name: 'Rain Token',
    tokenAddress: '0xCF69d5BE94c7570838b90e3c13247641BA5C521B',
    tokenDecimals: 8,
    exchangeAddress: '0x4C1CBE889b7441a174cD2Fd9D33dc14213A77f67'
  },{
    symbol: 'ROLL',
    name: 'TOILET ROLL COIN',
    tokenAddress: '0x3549AFC75ce099a1bAd84557aC8D09C8eFe20d49',
    tokenDecimals: 18,
    exchangeAddress: '0x7CbA8De1DeD0eedB08549883A67D57e66C2Fc56f'
  },{
    symbol: 'COVID',
    name: 'COVID19',
    tokenAddress: '0xdCa0DD3166Ee36F60Ae0b28970c49DC0B43DD83c',
    tokenDecimals: 18,
    exchangeAddress: '0xFd4aB9814A56eD11C29E8688aA0bECB68449166a'
  },{
    symbol: 'AAJ',
    name: 'Above Average Joe',
    tokenAddress: '0xdA7935B1e9c4EAF89b47A4ef3e6A181120719A31',
    tokenDecimals: 18,
    exchangeAddress: '0x5550f9fAbB75BFbD42e2e818459ee9ff9F9B165A'
  },{
    symbol: 'ETM',
    name: 'ethersmart',
    tokenAddress: '0xF3eb8B90C763b8B2B53E7819ac27eca8f94C8Ec2',
    tokenDecimals: 18,
    exchangeAddress: '0x0545Ee6f2D16eFc2DA8951fCB0b1a3988C66709C'
  },{
    symbol: '7E',
    name: '7ELEVEN',
    tokenAddress: '0x186a33d4dBcd700086A26188DcB74E69bE463665',
    tokenDecimals: 8,
    exchangeAddress: '0x4F6c5907a8E3739C49389ACfDE73213e95775177'
  },{
    symbol: 'RM',
    name: 'RiverMount',
    tokenAddress: '0x5AB55ec290BeacAE98f54c3eB70860460B167C3C',
    tokenDecimals: 18,
    exchangeAddress: '0x120503C489827489CEe7dd79b2D6a4250cD3b75b'
  },{
    symbol: 'zZEC',
    name: 'Shifted ZEC',
    tokenAddress: '0x8dD8944320Eb76F8e39C58E7A30d34E7fbA9D719',
    tokenDecimals: 8,
    exchangeAddress: '0x3B64Dec2C487F413DBd6E4A0F1Eb1E693CF60012'
  },{
    symbol: 'zBCH',
    name: 'Shifted BCH',
    tokenAddress: '0x466Dd97F83b18aC23dDF16931f8171A817953fF1',
    tokenDecimals: 8,
    exchangeAddress: '0x3ABa42Cf8996304AE5063cA3a868e91D68600201'
  },{
    symbol: 'GST2',
    name: 'Gastoken.io',
    tokenAddress: '0xCA847ec09DfBFf38d679eecb03F59c69FdB152A9',
    tokenDecimals: 2,
    exchangeAddress: '0xDdFA240447f2D63a000AA2bA1587740007D03bBE'
  },{
    symbol: 'LCT',
    name: 'LuckycloverTrx',
    tokenAddress: '0xc51561C44b87961212FF1166909134fB3CbB9fd8',
    tokenDecimals: 6,
    exchangeAddress: '0x89af45B4178589151999ccEA727e9A985f0A1EE1'
  },{
    symbol: 'DRMA',
    name: 'Drama Token',
    tokenAddress: '0x18006860425DAd84D2b185ADB65FFcfdaF8C4C03',
    tokenDecimals: 18,
    exchangeAddress: '0x45F573D49F131F057d91DE6e2E789692E0054898'
  },{
    symbol: 'YCC',
    name: 'Yuan Chain New',
    tokenAddress: '0x37E1160184F7dD29f00b78C050Bf13224780b0B0',
    tokenDecimals: 8,
    exchangeAddress: '0xadE7a460E7c5f22E601CfB1261BE722708e1c2ab'
  },{
    symbol: 'CER',
    name: 'Christian Cerullo Time',
    tokenAddress: '0x64795dB64Dc318c0E68CFB38EEb0b8E30B139B3E',
    tokenDecimals: 18,
    exchangeAddress: '0x53b7c901349791D152248fCda86be11745bE0805'
  },{
    symbol: 'MPS',
    name: 'MtPelerin Shares',
    tokenAddress: '0x96c645D3D3706f793Ef52C19bBACe441900eD47D',
    tokenDecimals: 0,
    exchangeAddress: '0x3282A5508C2C033746Fa4977b82e8FbFFd2bAf02'
  },{
    symbol: 'SYCO',
    name: 'Syariahcoin',
    tokenAddress: '0x0598C2Fdd3a0564970A86B69C72a6C57077c84bb',
    tokenDecimals: 8,
    exchangeAddress: '0xdd531bbB9d061E2333dfBa167Fc30A89ADdb8996'
  },{
    symbol: 'WIS',
    name: 'Wish Coin',
    tokenAddress: '0xFA12040497bC7B6077Ea125Bad27dAA8b74E7eDC',
    tokenDecimals: 18,
    exchangeAddress: '0xb50C7AC55601A21648F33A83020C1F57f5A9b1Dc'
  },{
    symbol: 'BNC',
    name: 'BnoinCoin',
    tokenAddress: '0x49B862113C3a4D0eB22b711678836408af3fD013',
    tokenDecimals: 18,
    exchangeAddress: '0x422D8c6698F4e364E559D1430F1762764D31df1C'
  },{
    symbol: 'RAC',
    name: 'Redefining Music Art & Culture',
    tokenAddress: '0xDFD26F13029FBD89A5db1cCD08Ce9434B697BC73',
    tokenDecimals: 18,
    exchangeAddress: '0x0b671fFC92eB2e9b376b6786c3085146A4021D9c'
  },{
    symbol: 'XET',
    name: 'ETERNAL TOKEN',
    tokenAddress: '0x054C64741dBafDC19784505494029823D89c3b13',
    tokenDecimals: 8,
    exchangeAddress: '0x83853511E7cCDa3A9c0ddE9bC06e89c661effDaA'
  },{
    symbol: 'SNOV',
    name: 'Snovio',
    tokenAddress: '0xBDC5bAC39Dbe132B1E030e898aE3830017D7d969',
    tokenDecimals: 18,
    exchangeAddress: '0x2A731aFb13458375c9012FCcED45b76fFBfBC201'
  },{
    symbol: 'ZCC',
    name: 'ZuCoinChain',
    tokenAddress: '0x26548041e3a78fDc60f3ccE21977E1F5e46561B7',
    tokenDecimals: 18,
    exchangeAddress: '0xF1ce973729047Cb18fc06A6178f4e094a569Ac42'
  },{
    symbol: 'GMC',
    name: 'Gamma Coin',
    tokenAddress: '0xa311856B777Df090D2D3D8C306CaAf6e4DfD9AE9',
    tokenDecimals: 18,
    exchangeAddress: '0x14b2455A4C066E68eE13AF47021a4A536B5138Ff'
  },{
    symbol: 'CIAO',
    name: 'Ciaone Token (Ciao.one)',
    tokenAddress: '0x171664573e3969874DBa31c35082151Ea4f181F3',
    tokenDecimals: 18,
    exchangeAddress: '0x1062a672bF38E83D2B2517f3756b926908EA450d'
  },{
    symbol: 'FYP',
    name: 'Flyp.me Token',
    tokenAddress: '0x8F0921f30555624143d427b340b1156914882C10',
    tokenDecimals: 18,
    exchangeAddress: '0x55d8aFe2343BDFfd4F97C201632527f7BEf0abe8'
  },{
    symbol: 'PPC',
    name: 'Persepolis Coin',
    tokenAddress: '0xF2139Ebfd1532564a74F6836ecB0080355264768',
    tokenDecimals: 18,
    exchangeAddress: '0x7D24d90DbA3bf38985f6Aa8837158b15A8e75C76'
  },{
    symbol: 'YSH',
    name: 'Angel',
    tokenAddress: '0x3D99c2CECb98137bdB473d86106F5E6d7A3F8041',
    tokenDecimals: 18,
    exchangeAddress: '0x0A4FBD507887C07978a6B948822452c85AD786e5'
  },{
    symbol: 'PHY',
    name: 'prohesychain',
    tokenAddress: '0x26c2117969a3a1172b08b3654f44aBC33589ef32',
    tokenDecimals: 18,
    exchangeAddress: '0x3966bDE05de2173f0d647A00Dd4cc50A1854E21b'
  },{
    symbol: 'BNT',
    name: 'bNet Token',
    tokenAddress: '0xCe5FeB53e8aA2Eaea42693F8cd756488F32bFCC7',
    tokenDecimals: 0,
    exchangeAddress: '0x3dd166fB79DC7d0a51F97b579cBDd3969eC50Cfb'
  },{
    symbol: 'mDAI',
    name: 'DMM: DAI',
    tokenAddress: '0x06301057D77D54B6e14c7FafFB11Ffc7Cab4eaa7',
    tokenDecimals: 18,
    exchangeAddress: '0xaA6c225642E7c37e178FfEBB2cbc850B28C33f24'
  },{
    symbol: 'XOR',
    name: 'Sora Token',
    tokenAddress: '0x40FD72257597aA14C7231A7B1aaa29Fce868F677',
    tokenDecimals: 18,
    exchangeAddress: '0x43Fd5530789Ce64a6569D882CFdfa07c7ED33be6'
  },{
    symbol: 'UBETS',
    name: 'Ubet Coins',
    tokenAddress: '0x7475E268B2f72f7974Cac38d45011c277dAf5d90',
    tokenDecimals: 18,
    exchangeAddress: '0xb99A94C18cC352A7bC17bd3E722338889D3A6179'
  },{
    symbol: 'FMT',
    name: 'Freddie Mercury Token',
    tokenAddress: '0xA60477a77fb4714dFab6a7A9cC6ED589A8bbFc82',
    tokenDecimals: 18,
    exchangeAddress: '0x5Edc3643daf44d53875FA5f86227fB36d1ddcfe1'
  },{
    symbol: 'USDX',
    name: 'USDX',
    tokenAddress: '0xBec4A69D6A5fbCb2303c13D24ea1A51a6F19bd12',
    tokenDecimals: 0,
    exchangeAddress: '0xb4517e693e19B22d26317ed7eC7fd3c7519DbaE5'
  },{
    symbol: '1WO',
    name: '1World',
    tokenAddress: '0xfDBc1aDc26F0F8f8606a5d63b7D3a3CD21c22B23',
    tokenDecimals: 8,
    exchangeAddress: '0xae848adAf0E0B723DFA94Ff6960833eE3b46a3E7'
  },{
    symbol: 'COMBO',
    name: 'COMBO',
    tokenAddress: '0xF10d9664828e80EeA2F8bf139C3cC6041aE0cBA0',
    tokenDecimals: 8,
    exchangeAddress: '0x6DAecAb3d94709E003198eAEE332BA3A58bad4c8'
  },{
    symbol: 'LIB',
    name: 'LIBRA',
    tokenAddress: '0x39DB6C877E91a204f434177F0dD4bd9634DB9e11',
    tokenDecimals: 8,
    exchangeAddress: '0x16b1aA0Da59af7FD6946D62Fbf6CF88baAABfd80'
  },{
    symbol: 'ATN',
    name: 'ATN',
    tokenAddress: '0x461733c17b0755CA5649B6DB08B3E213FCf22546',
    tokenDecimals: 18,
    exchangeAddress: '0xB4E8a672A1A3C11d8828b7903cDeB1BB81A1E7Cd'
  },{
    symbol: 'DC',
    name: 'dylanc',
    tokenAddress: '0x74EA9DBD3b0138Fc0145Ea9B9f9594A9bF18D9b6',
    tokenDecimals: 4,
    exchangeAddress: '0x02c92ea9f57FAA81312c9dC61AFC5661FA666C91'
  },{
    symbol: 'ZTC',
    name: 'Zetscoin',
    tokenAddress: '0x2F6f7A8657121991e0b0eac3F563eBFD9e2E8800',
    tokenDecimals: 18,
    exchangeAddress: '0x6706dd90698bCDEd09110C1D64CD7D0ff25A3a65'
  },{
    symbol: 'BRC',
    name: 'Baer Chain',
    tokenAddress: '0xb2A6701A6e2a22088320e5507AD8C064D0D45F9a',
    tokenDecimals: 3,
    exchangeAddress: '0xFB41C83A9b641876DBeF1a6364Fb1A74051476cC'
  },{
    symbol: 'ZCRT',
    name: 'ZCore Token',
    tokenAddress: '0xC7e43A1c8E118aA2965F5EAbe0e718D83DB7A63C',
    tokenDecimals: 18,
    exchangeAddress: '0x40860E34983C383B920779E4DB4E35dd585541de'
  },{
    symbol: 'BET',
    name: 'Dao.Casino',
    tokenAddress: '0x8aA33A7899FCC8eA5fBe6A608A109c3893A1B8b2',
    tokenDecimals: 18,
    exchangeAddress: '0x397EACf1F8a36E7642B7979b2432071053B9CA49'
  },{
    symbol: 'APL',
    name: 'APL',
    tokenAddress: '0x5aae533C69c1a376cf46220c6604118158891E82',
    tokenDecimals: 18,
    exchangeAddress: '0x6DF7100a287a76721F279C627ff498E27c9fF6f2'
  },{
    symbol: 'PAZ',
    name: 'Paz Coins',
    tokenAddress: '0x9d84D56eda451FF4192e17B5A9f2cA9677Ce34d6',
    tokenDecimals: 18,
    exchangeAddress: '0xB321882a522DE05e8dC6B25d0EE4aDCcfB6f553d'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x9016aA99b98128ba990097eA3F3D60b5e40775e4',
    tokenDecimals: 18,
    exchangeAddress: '0xfb99Ba7A2FB8599997F027821086F6d833DB2ea8'
  },{
    symbol: 'GST',
    name: 'Global Scan Token',
    tokenAddress: '0x382f5DfE9eE6e309D1B9D622735e789aFde6BADe',
    tokenDecimals: 18,
    exchangeAddress: '0x24022Ca98b9Fd818C02e8Fd68852179F88Cf112A'
  },{
    symbol: 'LIMO',
    name: 'Stellas Limo',
    tokenAddress: '0xC7ac23AA559e975548ac959e4D1c926830093554',
    tokenDecimals: 1,
    exchangeAddress: '0xbBBe54b62B432B1c8F68Db2B8fc64900D0FFdE55'
  },{
    symbol: 'SAON',
    name: 'Saon',
    tokenAddress: '0xC1f92E4753d206678e2ff0B4b860FA06618Cd899',
    tokenDecimals: 4,
    exchangeAddress: '0x6afA6E14a014c93662A9edCA5baB07B098d15F15'
  },{
    symbol: 'LOM',
    name: 'Ltconlinemarkets',
    tokenAddress: '0x64f64A26873ffbD11188679fB85FE00b6a2DdE27',
    tokenDecimals: 18,
    exchangeAddress: '0x2d22cf7b517507941841a60aCa46682Df3e49Ed5'
  },{
    symbol: 'LCM',
    name: 'LCM',
    tokenAddress: '0x1f8C584824606D006b3A295B5b696617725521D5',
    tokenDecimals: 18,
    exchangeAddress: '0x95E811AA4a1153eBFD8fff542aB1D62013f74245'
  },{
    symbol: 'SETH',
    name: 'Smart Ethereum',
    tokenAddress: '0x57f68838836c2266768A92370f52c5d89de4C92B',
    tokenDecimals: 3,
    exchangeAddress: '0x246a3c2d7Bf6881884708F86Df4b7687B18FB32e'
  },{
    symbol: 'ZTC',
    name: 'Zetcoin',
    tokenAddress: '0x30e0c58c5670E0bdEc98F29F66B092E43E98d699',
    tokenDecimals: 18,
    exchangeAddress: '0x21A6Ba1704B9e2e11763e88C71dE41D50c8Faa3e'
  },{
    symbol: 'LONS',
    name: 'Melons',
    tokenAddress: '0xd6E1B90a97eA3689f67c54682b3940E2eDD2f34F',
    tokenDecimals: 18,
    exchangeAddress: '0x7DA59b366F9d83D874B30Af36031050d08EEC182'
  },{
    symbol: 'BKX',
    name: '"BANKEX" project utility token',
    tokenAddress: '0x45245bc59219eeaAF6cD3f382e078A461FF9De7B',
    tokenDecimals: 18,
    exchangeAddress: '0x8c2f4546891CFDBfb6ce47D546a1f26AD7A0963B'
  },{
    symbol: 'ITO',
    name: 'InTime',
    tokenAddress: '0x5E5Bc236D024Cd26BE780802aaf1E0dC118fc484',
    tokenDecimals: 18,
    exchangeAddress: '0x401eB87dcFf08750508D7af7946aa5db01b1390C'
  },{
    symbol: 'OTO',
    name: 'OnTime',
    tokenAddress: '0xC52b11283f4CA6bD20cbC4AdDD2C136a193F6aF1',
    tokenDecimals: 18,
    exchangeAddress: '0x8c1D4833354dACAbecc087B1E84349A9d10dECB3'
  },{
    symbol: 'MTI',
    name: 'MIRROR TRADING INTERNATIONAL',
    tokenAddress: '0x2e0E350710547df2F6d1035a492Ee95A36b55C9A',
    tokenDecimals: 18,
    exchangeAddress: '0x6E0328021E983fA2117D6940C3e12BFb30F1DDFC'
  },{
    symbol: 'SGA',
    name: 'Saga',
    tokenAddress: '0xed0849BF46CfB9845a2d900A0A4E593F2dD3673c',
    tokenDecimals: 18,
    exchangeAddress: '0x71F3611fCb35112B21e7Ed89E4FdE190F6F900B1'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xc8313c965C47D1E0B5cDCD757B210356AD0e400C',
    tokenDecimals: 18,
    exchangeAddress: '0x76073374E5aBab34Fd0a18190C6448E317c035F0'
  },{
    symbol: 'CARDS',
    name: 'Cards',
    tokenAddress: '0x8BF1e80806F3c72E43152525c7617696be2FCeEe',
    tokenDecimals: 0,
    exchangeAddress: '0x8A9FA3391204bcFda2186C9aC1ab535097dC651d'
  },{
    symbol: 'BAM',
    name: 'Bamboo',
    tokenAddress: '0x22B3FAaa8DF978F6bAFe18aaDe18DC2e3dfA0e0C',
    tokenDecimals: 18,
    exchangeAddress: '0xEe237299d1E1ECB4662ac4B842E8277D089dB6c4'
  },{
    symbol: 'ERC223',
    name: 'ERC223',
    tokenAddress: '0xF8F237D074F637D777bcD2A4712bde793f94272B',
    tokenDecimals: 10,
    exchangeAddress: '0xaE3538007e6B8E2cebD4Fe298763692510Be61a9'
  },{
    symbol: 'BST',
    name: 'Black Sun Token',
    tokenAddress: '0x9B3a0aB8a2A1cfED0e1edEc1745077B7C3838AE4',
    tokenDecimals: 8,
    exchangeAddress: '0x5ed68E36AD345d6C9Ea98Fc5662FD0D57701d958'
  },{
    symbol: 'HEX',
    name: 'HEXCOIN',
    tokenAddress: '0xf5d6399Be91467fA9504ef01c4Fc1ca40242A132',
    tokenDecimals: 18,
    exchangeAddress: '0x4d660c438A11862c37DE639E6357E2d59A364ffc'
  },{
    symbol: 'GBK',
    name: 'GoldBlock',
    tokenAddress: '0x3e522D144814BD6149C1F3e0c6cD19d0941372AC',
    tokenDecimals: 18,
    exchangeAddress: '0x86ac766904363698b26fD4A4Ce82166e54Fc301c'
  },{
    symbol: 'BULL',
    name: ' 3X Long Bitcoin Token',
    tokenAddress: '0x68eb95Dc9934E19B86687A10DF8e364423240E94',
    tokenDecimals: 18,
    exchangeAddress: '0x29b1dc340190419105c423fdffaF42F2B54c80C8'
  },{
    symbol: 'HETM',
    name: 'Ethash Miner',
    tokenAddress: '0x7A5E6ca9d335e343D1Ed12239F67248E056AFE2f',
    tokenDecimals: 6,
    exchangeAddress: '0xA85Df34b8200B970B7dAC57bE34eBB4FFf89F0ee'
  },{
    symbol: 'WWW',
    name: 'World Wide Web Coin',
    tokenAddress: '0x6A0ae448Da83d73B291A199b798D13bB2e7d664d',
    tokenDecimals: 18,
    exchangeAddress: '0x0090B9D1746211d7f03B181fbd53DDa8dA370CB7'
  },{
    symbol: 'nCoV',
    name: 'CoronaCoin',
    tokenAddress: '0xb80112E516DAbcaC6Ab4665f1BD650996403156C',
    tokenDecimals: 18,
    exchangeAddress: '0x6623DA8cCEFff83A068BF4d9d2075CEaC9417109'
  },{
    symbol: 'USDD',
    name: 'Tether DeFi',
    tokenAddress: '0x861d899E74eC0e84fa8A15Ba58088Bb3BACcb6FA',
    tokenDecimals: 10,
    exchangeAddress: '0xCb89Db306eD53D68Ae2dE118e44B96697238cc07'
  },{
    symbol: 'ARES',
    name: 'ARES',
    tokenAddress: '0x86C3676F082a6872De9aa204c634feA5A70fE5C6',
    tokenDecimals: 18,
    exchangeAddress: '0x8ef9ef87061037BcC116548758a0c3FB213230Db'
  },{
    symbol: 'WAR',
    name: 'WAR TOKEN',
    tokenAddress: '0x4DF47b73D0eDAa2fCb454bF133E7f590033Aa560',
    tokenDecimals: 8,
    exchangeAddress: '0xfd53D22d88d2B00aCD33b91A313038217416713c'
  },{
    symbol: 'TBUX',
    name: 'TrumpBux',
    tokenAddress: '0xEDBdaFaF3428FAeef3CD3d61cDa8D14fD0DdEC71',
    tokenDecimals: 18,
    exchangeAddress: '0x7234758f76A95641bab7Aa118861f305A6939c6c'
  },{
    symbol: 'HLX',
    name: 'HELEX',
    tokenAddress: '0x8F8e787989BC652eeA01A6C88a19f0f379BDF4FD',
    tokenDecimals: 5,
    exchangeAddress: '0x58cdf5B903685075BE5940a7a3EFec76A7FD8B3E'
  },{
    symbol: 'NCOV',
    name: '2019-nCoV',
    tokenAddress: '0x28daBA123ad0e90CE6ec88D3E8806391898f4B5d',
    tokenDecimals: 2,
    exchangeAddress: '0xEE8da90fd2A4Cf9460C5B8d2e1C0068D7aa63506'
  },{
    symbol: 'SWCC',
    name: 'SWCCF',
    tokenAddress: '0x33A9Ebd082e071b0A200AE459A6Dd2eA9ecc67B5',
    tokenDecimals: 18,
    exchangeAddress: '0x360B5050F41CBD45Cd6b8F25360A0dBA8C3c011A'
  },{
    symbol: 'CREDO',
    name: 'Credo Token',
    tokenAddress: '0x4E0603e2A27A30480E5e3a4Fe548e29EF12F64bE',
    tokenDecimals: 18,
    exchangeAddress: '0xC467A458B9ae223DfE4E378cD55A6B64C82B4433'
  },{
    symbol: 'BNC',
    name: 'BNC TOKEN',
    tokenAddress: '0xbe5b336eF62D1626940363Cf34bE079e0AB89F20',
    tokenDecimals: 18,
    exchangeAddress: '0xF31a44EB31e8Af22361C9fdD0df3c9C119bB62d7'
  },{
    symbol: 'TPT',
    name: 'Toilet Paper Token',
    tokenAddress: '0x809e3B9d5bbBFcf106aFAC4658d72d72c32E4100',
    tokenDecimals: 18,
    exchangeAddress: '0x5A5B3f36f21A97e25f3c9B70A84E3E77188b9E93'
  },{
    symbol: 'VIEW',
    name: 'View Token',
    tokenAddress: '0xF03f8D65BaFA598611C3495124093c56e8F638f0',
    tokenDecimals: 18,
    exchangeAddress: '0x9f966f62e8295D5BE66F9c48D0F976366a2860e3'
  },{
    symbol: 'CLOG',
    name: 'CLO Gold',
    tokenAddress: '0xBA36676Acd9709AC84A2864f05C0a3F820Aa223e',
    tokenDecimals: 18,
    exchangeAddress: '0xb50b70158eCe4ce0DdbC09af075E6097b800583B'
  },{
    symbol: 'CLO',
    name: 'Cryptlo',
    tokenAddress: '0xe4707Dac5f8a942F98B2181129346ef37d075A69',
    tokenDecimals: 18,
    exchangeAddress: '0x4599D9a448C5847851B15337344959A57866401b'
  },{
    symbol: 'oETH $100 Put 04/24/20',
    name: 'Opyn ETH Put $100 04/24/20',
    tokenAddress: '0x6C79F10543C7886c6946B8A996F824E474bAC8f2',
    tokenDecimals: 8,
    exchangeAddress: '0x5734a78b1985B47dF3fbf1736c278F57c2C30983'
  },{
    symbol: 'CYC',
    name: 'CryptoYC',
    tokenAddress: '0x40ffceE57806Eb419d7F5C59b37e4fa410C943C2',
    tokenDecimals: 18,
    exchangeAddress: '0xE09e38991fF0c7eCe5d152a3e1425E0Bafe05934'
  },{
    symbol: 'CBET',
    name: 'CryptoBet',
    tokenAddress: '0x35dd2ebf20746C6e658fac75cd80D4722fae62f6',
    tokenDecimals: 18,
    exchangeAddress: '0xACf4E28eE298561a728809eC89A0a5bf9F05c9e5'
  },{
    symbol: 'VOLC',
    name: 'Volcanoes',
    tokenAddress: '0xD5E38d2Ef4aD5e38942E6234e2CEC0dac38E124A',
    tokenDecimals: 18,
    exchangeAddress: '0x9927b660e37E73670012047E2306f10fdE2b2451'
  },{
    symbol: 'COVC',
    name: 'COVIDCoin',
    tokenAddress: '0x9947A675Cb4D4A19e020E1DD035955c0150b1e5e',
    tokenDecimals: 18,
    exchangeAddress: '0xA27dBA65061fB157b46FF95868b1186A3fcF75f6'
  },{
    symbol: 'ONE',
    name: 'Harmony',
    tokenAddress: '0x68Ac1AfFe00cf64EbC71e7E835A6871A379C5587',
    tokenDecimals: 18,
    exchangeAddress: '0x0f0cdDa32575072a76fEE18B9668A7eC21a6A4F6'
  },{
    symbol: 'FST',
    name: '1irst',
    tokenAddress: '0x310c93dfc1C5E34CDF51678103f63C41762089CD',
    tokenDecimals: 6,
    exchangeAddress: '0x79E5E7dE1D540ab087221270df9816aB61182b77'
  },{
    symbol: 'FLY',
    name: 'AVIATION',
    tokenAddress: '0x573DF789C2558EB20e62A037A893C92C9f474059',
    tokenDecimals: 18,
    exchangeAddress: '0xab2d02A4c5B2990cC8E49AB66386f7de8175D8b5'
  },{
    symbol: 'DTC',
    name: 'DAATTY COIN',
    tokenAddress: '0xAD8B556174bff978c6a6Ea022871C3E26eA9dDb2',
    tokenDecimals: 18,
    exchangeAddress: '0x317DD0278a332B24be79dE6B8004AF3d58344d4d'
  },{
    symbol: 'HEM7',
    name: 'HEMI',
    tokenAddress: '0x786d07ca47946F177CBA868E64e7F5CE70608a95',
    tokenDecimals: 18,
    exchangeAddress: '0x08dAD58EDAaf34BAA850fDCEbc39d7ff40d4F6E7'
  },{
    symbol: 'GMA',
    name: 'Gamma Coin',
    tokenAddress: '0xEF36B13a97dCE1B96feCBe545686C8C7cda9608e',
    tokenDecimals: 8,
    exchangeAddress: '0x83A62642F75d45f52deF09158a495e0f73Df234E'
  },{
    symbol: 'ITT',
    name: 'ITT',
    tokenAddress: '0x6f9Bd7116f13cdaC750FD26dD37240Ae6F29185d',
    tokenDecimals: 6,
    exchangeAddress: '0x8ec502aF242406399c08d62B0B4F6755bc97e8bf'
  },{
    symbol: '0101',
    name: '0101',
    tokenAddress: '0x35e19821118C7D79A18C33cdE630c186ADB57a91',
    tokenDecimals: 18,
    exchangeAddress: '0x29a9702A34aF52BDb317ff30bC8685468272d6b4'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x5734a78b1985B47dF3fbf1736c278F57c2C30983',
    tokenDecimals: 18,
    exchangeAddress: '0x3730c9F5CD16Bf77b249149c706B241c38D94A6c'
  },{
    symbol: 'BUIDL',
    name: 'DFOHub',
    tokenAddress: '0xD6F0Bb2A45110f819e908a915237D652Ac7c5AA8',
    tokenDecimals: 18,
    exchangeAddress: '0xFE3eB37C105800842001F759d295eCFb2158A4Cb'
  },{
    symbol: 'JAT',
    name: 'JAY TOKEN',
    tokenAddress: '0xa699Fee300bdC34D830564ac2E6cA3e0D3CBB27b',
    tokenDecimals: 18,
    exchangeAddress: '0x5b4EA889c19C4f7946891a6dd3452A95112Dc404'
  },{
    symbol: 'XKW',
    name: 'KWDCOIN',
    tokenAddress: '0xD8C9528deb8FD9F51bFB5142f8223821220f0e3D',
    tokenDecimals: 8,
    exchangeAddress: '0xeb4B27314Ea29D454B1E5f13A3a4657B1b6d22b0'
  },{
    symbol: 'TDAT',
    name: 'TokenPesa DAO Token',
    tokenAddress: '0xc8D700712B4a670a54aAb50A99ff1b040BDA8534',
    tokenDecimals: 18,
    exchangeAddress: '0xb7c8d34B3CAc90AE6D69F14ce25caD1Ae5A94acE'
  },{
    symbol: 'XPR',
    name: 'Proton',
    tokenAddress: '0xD7EFB00d12C2c13131FD319336Fdf952525dA2af',
    tokenDecimals: 4,
    exchangeAddress: '0x0701b9c4128746C1263a1012c67e4fE428C6221c'
  },{
    symbol: 'BTH',
    name: 'BitCash',
    tokenAddress: '0x2F495d5E53aC8e2bdcc83568E874489650D17Bb0',
    tokenDecimals: 18,
    exchangeAddress: '0xe2490Cc5De4ACA3a174021242f476634436F7af7'
  },{
    symbol: 'MTC',
    name: 'Mitacoin',
    tokenAddress: '0x7a222dA5383bD38e3cBA987a19F03d576b4cb21f',
    tokenDecimals: 18,
    exchangeAddress: '0x00B578faB0f6B7EA59527c3B7064a1c66199C760'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x21A6Ba1704B9e2e11763e88C71dE41D50c8Faa3e',
    tokenDecimals: 18,
    exchangeAddress: '0xFC8cF69Bf4055a318cCaF31F8d0A8D1Ce2D135ab'
  },{
    symbol: 'JGJ',
    name: 'JGJ INVESTMENTS',
    tokenAddress: '0x76b4d705f05422E049A07623E5B478DBcFeb3Bb9',
    tokenDecimals: 2,
    exchangeAddress: '0x584CCAd0092587e2f936152d34dc5c6c3664434C'
  },{
    symbol: 'BDG',
    name: 'BitDegree Token',
    tokenAddress: '0x1961B3331969eD52770751fC718ef530838b6dEE',
    tokenDecimals: 18,
    exchangeAddress: '0x27cc1faf426b7cd88cf31d20c3C789920f4D6aE2'
  },{
    symbol: 'ANON',
    name: 'Anonymous Token',
    tokenAddress: '0x8C854F37d8c74848a6684e62fbF4FEF5Fd32772d',
    tokenDecimals: 3,
    exchangeAddress: '0x1Bc2D4cf2Fb8649630EE20DfEEF52A0382FC7f57'
  },{
    symbol: 'CVD',
    name: 'COVID19',
    tokenAddress: '0x6B466B0232640382950c45440Ea5b630744eCa99',
    tokenDecimals: 0,
    exchangeAddress: '0x0Ac367bB1D5ef67A76aA4b4d0FfEF5F4DE41d242'
  },{
    symbol: 'BTCX',
    name: 'Bitscoin',
    tokenAddress: '0x9388F54FA978Aa9e24395a8b69033304ECcea4df',
    tokenDecimals: 4,
    exchangeAddress: '0x5d44f70A5Ba03D7F8116e9E7715Bc8Aa1169461D'
  },{
    symbol: 'DXC',
    name: 'Doge X Coin',
    tokenAddress: '0xaa72eb4B2d6BBad154cB8acB598da9824bad8308',
    tokenDecimals: 18,
    exchangeAddress: '0xfA5d14FEB0775c766C3af2cd9572e79a63Bd0437'
  },{
    symbol: 'KT1',
    name: 'KhanhTest01',
    tokenAddress: '0x5149fFdf642D551539f7B68Bd75fA37b16371eb9',
    tokenDecimals: 8,
    exchangeAddress: '0x57CA887515fd661317d13fA4760A2d3d88B8ccDb'
  },{
    symbol: 'WRLD',
    name: 'TheWorldsAMine',
    tokenAddress: '0xB2Cf3a438aCf46275839a38dB7594065f64151d3',
    tokenDecimals: 18,
    exchangeAddress: '0xCB09a4f1FE78e0C252B0C64a6C64Fcd7AB28A32A'
  },{
    symbol: 'FAVE',
    name: 'Favin Token',
    tokenAddress: '0x45bD9a077C8857dbbf72063692Cc58600199DEdB',
    tokenDecimals: 8,
    exchangeAddress: '0x745DF712f1Cb4acc2B5303BC4B2bAc9ef6Ded948'
  },{
    symbol: 'TIOx',
    name: 'Trade Token X',
    tokenAddress: '0xd947b0ceab2A8885866B9A04A06AE99DE852a3d4',
    tokenDecimals: 18,
    exchangeAddress: '0x2fD0BA744bB7420aE96e787fF0642d797179e848'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xaE51c1381aE5Be0d55231B2C24106fCfFd9791A6',
    tokenDecimals: 18,
    exchangeAddress: '0x72B75FA9d107216f02Ff9ff3d52c7882eC9fe90A'
  },{
    symbol: 'ETHBEAR',
    name: ' 3X Short Ethereum Token',
    tokenAddress: '0x2f5e2c9002C058c063d21A06B6cabb50950130c8',
    tokenDecimals: 18,
    exchangeAddress: '0x005fc49F2CF5A40A8bb41F1c4c64936A063F4dBC'
  },{
    symbol: 'CD19',
    name: 'COVID19',
    tokenAddress: '0x26ADdc98fF2321A91a776E52be171a963720A42C',
    tokenDecimals: 18,
    exchangeAddress: '0xD0154D8d13ddDf1CC25F0536b4289cd2086E187F'
  },{
    symbol: 'ANOT',
    name: 'Anonymous Token',
    tokenAddress: '0x6Dd3eddBDD8D5f330D6C48f41b960Beb5ddCE1E4',
    tokenDecimals: 3,
    exchangeAddress: '0xBC7cf4E682481b0d46057d6872A9b10ceF726Abc'
  },{
    symbol: 'BKC',
    name: 'BanksCoin',
    tokenAddress: '0xe8900F60B301Fc12C776746bBDcb36AF0bfe2A12',
    tokenDecimals: 8,
    exchangeAddress: '0x0e21d27e5dA317D8dc86295d3F5821F354FE113f'
  },{
    symbol: 'PMP',
    name: 'Peer Mindset Pound',
    tokenAddress: '0xE8fE7074999Dd7087ABC77A83659891ec3a67C42',
    tokenDecimals: 2,
    exchangeAddress: '0xE8b9EDf36bd1FeF917C8c44284eE9958E080846D'
  },{
    symbol: 'SCRTG',
    name: 'ScreenTag Inc Common',
    tokenAddress: '0xE8895EDdb26B952A2FaAFcAa45AF59B564ED2a59',
    tokenDecimals: 2,
    exchangeAddress: '0xBDd291C1723C7e4D985D8871675988AE97B52357'
  },{
    symbol: 'USDC',
    name: 'USDC',
    tokenAddress: '0x73DaBAff2d1A1fD00cd11998D3cb8D3Ae2d2FE8a',
    tokenDecimals: 6,
    exchangeAddress: '0xd25699A062f3Ae4D8cDA9AE72b1d929c35B1Bb85'
  },{
    symbol: 'TUG',
    name: 'TRUSTGRID',
    tokenAddress: '0x45088E0838D1d55491ebEa1b2648f6f5F378aaF1',
    tokenDecimals: 8,
    exchangeAddress: '0x5fF9945b2b67B74E4167Ed67d2929E7d9c98B0d4'
  },{
    symbol: 'GL',
    name: 'Green Light ERC20',
    tokenAddress: '0x70FaDBE1F2CCCbaF98ac88FDCf94A0509A48E46d',
    tokenDecimals: 8,
    exchangeAddress: '0x9B2D41C595e1542e6567f61D898D86155E6B86C6'
  },{
    symbol: 'COVID',
    name: 'COVID19',
    tokenAddress: '0xb61a41d6D24776C526f0429321510A59543d8e1F',
    tokenDecimals: 18,
    exchangeAddress: '0x6962DEC3a4F9A8519689a5e28C4Ec0e64A6E24fB'
  },{
    symbol: 'OWN',
    name: 'OWN',
    tokenAddress: '0xcC6F15Be8573cB8243C42d300565566D328213Dd',
    tokenDecimals: 18,
    exchangeAddress: '0x94B96b324b467D3cB49ab91F5cD8527cFbD2e8F4'
  },{
    symbol: 'KODI',
    name: 'KODi',
    tokenAddress: '0xbD399AbC6088408d755583d8aDbBF19a38747DF5',
    tokenDecimals: 18,
    exchangeAddress: '0x42A9eD911Fd7C480D57C39F2404192F9C44dC0A4'
  },{
    symbol: 'COVID',
    name: 'CoronaCoin',
    tokenAddress: '0x0c2c5E2b677dEa43025B5DA5061fEcE445f0295B',
    tokenDecimals: 18,
    exchangeAddress: '0x182f0879a62119E28E40b202954F21D19B217722'
  },{
    symbol: 'BIT',
    name: 'BitLite',
    tokenAddress: '0x1101249a7eBda185e7B8e7B58610b903cf046594',
    tokenDecimals: 18,
    exchangeAddress: '0xcA302fBAF037cA9bf091D0bCbA5999D546C8EAE0'
  },{
    symbol: 'BSC',
    name: 'BsaiCoin',
    tokenAddress: '0x4d46335Fe05EBf9D220382AE014328C0f62EB12D',
    tokenDecimals: 18,
    exchangeAddress: '0x4e5ad9B72Fc6AEBd8BAd28E3Db06BF451a315aB5'
  },{
    symbol: 'PMC',
    name: 'PrimeMax',
    tokenAddress: '0x97f78F697E9b8233CC93729ACE5fbF3Ef26897EE',
    tokenDecimals: 18,
    exchangeAddress: '0xd4f2E3b6882d7bf8a3185351cEdd68cD242ce44d'
  },{
    symbol: 'CE',
    name: 'Cryptoearnings',
    tokenAddress: '0x1F389Fb58691429f301Eb43A435961f2ce1A0252',
    tokenDecimals: 2,
    exchangeAddress: '0x5BDD156B37be1E732E09f51f1388B38A2ef26c36'
  },{
    symbol: 'KODI',
    name: 'KODI',
    tokenAddress: '0x8bD519409f5C7B00Dd04B778f13D5fED588733b1',
    tokenDecimals: 18,
    exchangeAddress: '0xcd39589A4B29DbEcEBD955C214aB5ed33B32e29c'
  },{
    symbol: 'JEWS',
    name: 'The HoloCoin',
    tokenAddress: '0x203393105FEFE0192998070dd63005c2a4e9999D',
    tokenDecimals: 18,
    exchangeAddress: '0xd47C02e0265f470022A35A9dE175a7c15845dbaF'
  },{
    symbol: 'BULL',
    name: '3X Long Bitcointoken',
    tokenAddress: '0xBB669c245C913eD647062aC52356eb899a8e501a',
    tokenDecimals: 18,
    exchangeAddress: '0xc333A790cca1E4e3193E7C6677E36005f7A8B027'
  },{
    symbol: 'CAI',
    name: 'CAIAH',
    tokenAddress: '0xdFa285D6e5919079e5dCcD449509436ca8A9Ca3E',
    tokenDecimals: 18,
    exchangeAddress: '0x7bF0db196005671d8b3Af8F788245663c7d3C6F4'
  },{
    symbol: 'HEM',
    name: 'Hemelios',
    tokenAddress: '0x19747816A030fECDa3394C6062CDF6b9B4dB0E0b',
    tokenDecimals: 8,
    exchangeAddress: '0x0b6a05E71C4b6661c837eF76bD97d54059034b40'
  },{
    symbol: 'PRIMAL',
    name: 'Primal ETH, Inc.',
    tokenAddress: '0xC800C56Db86FEBE893De1a267D0ca3eb1a9F974B',
    tokenDecimals: 18,
    exchangeAddress: '0x29a1dbaBa9af0ec4c1b4E394964787A7d6D66DaE'
  },{
    symbol: 'JIH',
    name: 'Jicoin',
    tokenAddress: '0x81e091299D14024956723aEf6681F3B39692746c',
    tokenDecimals: 18,
    exchangeAddress: '0xc86316E61620ABb0a47A4697Aff214bA4E6841D4'
  },{
    symbol: 'BTP',
    name: 'Bitcoin Protocol',
    tokenAddress: '0x747d3780E8a78e644E20b2d1D4DF51C42814B34e',
    tokenDecimals: 8,
    exchangeAddress: '0xA88c7A5A98ab7607496874270117609603eDB50d'
  },{
    symbol: 'HTB',
    name: 'Hotbit Token',
    tokenAddress: '0x6be61833FC4381990e82D7D4a9F4c9B3F67eA941',
    tokenDecimals: 18,
    exchangeAddress: '0x0aa740eDcd8A24aE30668D10a447EB12B236D8Ad'
  },{
    symbol: 'CMRA',
    name: 'Chimera',
    tokenAddress: '0x6719c6D781CA9a87eEf9cA6959431a7da5f5301A',
    tokenDecimals: 3,
    exchangeAddress: '0xe865713A0b0513BfF98edc6dc2B009322080d9eA'
  },{
    symbol: 'XID',
    name: 'XI Dollars',
    tokenAddress: '0xe6f3465d86690a4595EADFCAE74B5FB79e91ab70',
    tokenDecimals: 16,
    exchangeAddress: '0x574f0599B19A715fe08dECcD1cEd77A0c66be09a'
  },{
    symbol: 'XNON',
    name: 'XNON Chain',
    tokenAddress: '0x2110A4756Fa75d9f608160ce8e7655299716c24D',
    tokenDecimals: 18,
    exchangeAddress: '0xa1C649483e5e14837e656301BAe7DbE89C2A1C59'
  },{
    symbol: 'VRO',
    name: 'veraone',
    tokenAddress: '0x10BC518c32fbAE5e38Ecb50A612160571bD81e44',
    tokenDecimals: 8,
    exchangeAddress: '0x135E3B955761A1bB2Ced530858422565511Bf777'
  },{
    symbol: 'betc',
    name: 'betcoin',
    tokenAddress: '0x08892A2933384D97893F92C7792A1a228c9F5CD5',
    tokenDecimals: 4,
    exchangeAddress: '0x274b9cfb064a520885F29B7c534BC32401c624a9'
  },{
    symbol: 'BEC',
    name: 'BeautyChain',
    tokenAddress: '0xC5d105E63711398aF9bbff092d4B6769C82F793D',
    tokenDecimals: 18,
    exchangeAddress: '0xD0A66650d0Fb562BB104618cC2a3990248A8dCCc'
  },{
    symbol: 'SATURN',
    name: 'Saturn DAO token (ERC20)',
    tokenAddress: '0xAF350211414C5DC176421Ea05423F0cC494261fB',
    tokenDecimals: 4,
    exchangeAddress: '0x7f1D061C5c489dE4C22035C7732B7d4dd0c3570c'
  },{
    symbol: 'MT',
    name: 'Monarch Token',
    tokenAddress: '0x4442556a08a841227bEf04C67A7Ba7acf01b6Fc8',
    tokenDecimals: 18,
    exchangeAddress: '0x82e7cFa3240E7A554dAdDb1EB6F98266621597Be'
  },{
    symbol: 'WETH',
    name: 'Wrapped Ether',
    tokenAddress: '0xde6E515cAd9e8c0A5C1c9010ee7A6375FD2926E0',
    tokenDecimals: 18,
    exchangeAddress: '0x206127cAfe4F02D6B5A89500Ed011B660c1e6F1d'
  },{
    symbol: 'NAYA',
    name: 'NAYA',
    tokenAddress: '0x3Aaaa3EFA4A51705d94b280cbB0Ab9235b91c0Ec',
    tokenDecimals: 1,
    exchangeAddress: '0xAA5816A07615b7a123Bcdd24D34604fBf34D6306'
  },{
    symbol: 'NDIA',
    name: 'NEWDIA',
    tokenAddress: '0x51fcc029E8DeA8dCbDF84e11B7fF69c5F3561136',
    tokenDecimals: 18,
    exchangeAddress: '0x5c7fF0C4366A60c03C78257638BF9461B6cc9B8c'
  },{
    symbol: 'KASH',
    name: 'PeopleKash',
    tokenAddress: '0x81346760092D52f2b7678FD798E0cC0202163d7C',
    tokenDecimals: 18,
    exchangeAddress: '0x2aFDCd75e945Af1972dfC20fd3ffa349395bE804'
  },{
    symbol: 'BTC++',
    name: 'PieDAO BTC++',
    tokenAddress: '0x0327112423F3A68efdF1fcF402F6c5CB9f7C33fd',
    tokenDecimals: 18,
    exchangeAddress: '0x0b5e26829B72654620cD431E685FD71ad956E58E'
  },{
    symbol: 'TBFM',
    name: 'ThibaudFamily',
    tokenAddress: '0x916927C4FD38c1655Adf4F62D3aa7a53099027cb',
    tokenDecimals: 18,
    exchangeAddress: '0xD38D7A35f1B65695D884319294e992D25373c015'
  },{
    symbol: 'CMRA',
    name: 'Chimera',
    tokenAddress: '0x37737ad7E32ED440c312910CFc4A2e4D52867Caf',
    tokenDecimals: 3,
    exchangeAddress: '0xe95A2c4DdC135E8852D8D67339AB56a88806d905'
  },{
    symbol: 'PBL',
    name: 'Pebbles',
    tokenAddress: '0x55648De19836338549130B1af587F16beA46F66B',
    tokenDecimals: 18,
    exchangeAddress: '0xeF66F811d9928d97611C917dc545499faF114Ec6'
  },{
    symbol: 'WPAC',
    name: 'WC Paper Coin',
    tokenAddress: '0x9752BA8748e7b02D577caD0fb398C894715c2C36',
    tokenDecimals: 3,
    exchangeAddress: '0xA0E0e8C08c99B37586A069c9EdF76b37EECDc4B4'
  },{
    symbol: 'VINX',
    name: 'VINX COINS STO',
    tokenAddress: '0x010c282118aA76174CE5952572BA715CF60A0c9B',
    tokenDecimals: 18,
    exchangeAddress: '0x77178233033001CBC35A24a8B6F3260069E1c237'
  },{
    symbol: 'BAZ',
    name: 'Bazooka TOKEN',
    tokenAddress: '0xE4f81cCaB9FC644409342eB5D19432b7522d7012',
    tokenDecimals: 18,
    exchangeAddress: '0x0EDbd4Ea777Fb5b77339c98906ef63f78753a784'
  },{
    symbol: 'BTCT',
    name: 'Bitcoin Token',
    tokenAddress: '0x19bE53BF8BecaF5f4098efe21C3A404066994217',
    tokenDecimals: 8,
    exchangeAddress: '0x28Ea360F63e80F8166f2D134C083B2268826d68e'
  },{
    symbol: 'eBLX',
    name: 'BullionExchangeToken ',
    tokenAddress: '0x84e8a50CA43e8f26094799bA60705475cF2B9832',
    tokenDecimals: 8,
    exchangeAddress: '0x8eaF877474A1cD505D595a8234B34034e16B6C3D'
  },{
    symbol: 'HUEBR',
    name: 'HUEHUEHUEBR',
    tokenAddress: '0xFA8e3582D22667177e3e697750DC8cC8640CA0F4',
    tokenDecimals: 4,
    exchangeAddress: '0x9090229F65806F59ED553f9E371e5F6D058B616c'
  },{
    symbol: 'X5T',
    name: 'X5Token',
    tokenAddress: '0x579b5201f1fd40a2084f162A51339126FB0E88c1',
    tokenDecimals: 0,
    exchangeAddress: '0xDecEEEA2305f9eF9Cb372867d4a9A4a1bC3a15aD'
  },{
    symbol: 'POHETH:DAI',
    name: 'pohETH 100:1 DAI',
    tokenAddress: '0xDfcE67dFb4d1ad17E72454A11376ea5bBE423826',
    tokenDecimals: 18,
    exchangeAddress: '0x64E2C423F92A7acA165285e1C09163b9Edc046b6'
  },{
    symbol: 'BTCW',
    name: 'EWORLD BITCOIN',
    tokenAddress: '0xeeD22cCEbc87667686D17D4a5F30C0704C4e22Be',
    tokenDecimals: 18,
    exchangeAddress: '0xC0C51Ff2E704B12D0333fC464a3d6989D8f90246'
  },{
    symbol: 'COHETH:DAI',
    name: 'cohETH 100:1 DAI',
    tokenAddress: '0x4a58E3079b7Bcc464881F19f667c50B002675020',
    tokenDecimals: 18,
    exchangeAddress: '0x64E8BA25BA11Bd5a38FE111C94ca45b27e7c4489'
  },{
    symbol: 'oETH $150 Put 04/24/20',
    name: 'Opyn ETH Put $150 04/24/20',
    tokenAddress: '0xaeFc7B368F7b536C9E5e3F342BF534931cE58584',
    tokenDecimals: 7,
    exchangeAddress: '0xD2840757B0DeF8fBC2A7DC990CEF75975C2d3F0e'
  },{
    symbol: 'CUM',
    name: 'Cryptographic Ultra Money',
    tokenAddress: '0x32f140b9cDAf07a3766c4539556143575a98a372',
    tokenDecimals: 18,
    exchangeAddress: '0xbEF6b37a845d15bB09f11922c41406f7bE92090a'
  },{
    symbol: 'NMN',
    name: 'NUMINOUS',
    tokenAddress: '0x21981702D92659C10ea691C29fE9eF0444c5F54B',
    tokenDecimals: 18,
    exchangeAddress: '0xe7F7C8AD5B311B22331d28A351B5A1444502d0cE'
  },{
    symbol: 'CAFN',
    name: 'Caffeine Token',
    tokenAddress: '0x1e251a1F1F81918D1D902970b19024AF6B53Aaf0',
    tokenDecimals: 8,
    exchangeAddress: '0xe9ea3F5531EC46b0880362e6Ad902Fe2712f5632'
  },{
    symbol: 'CDX',
    name: 'Coindex',
    tokenAddress: '0xC9544d741316C5F3E02B3CEe5D818c18Be064758',
    tokenDecimals: 18,
    exchangeAddress: '0x5bEB7436814fcc446aAF826ea83c305C4a95ADd9'
  },{
    symbol: 'TPT',
    name: 'Toilet Paper Token',
    tokenAddress: '0xC8a8f0A25723CFACFcDab7570e70E90fc9f9Af1a',
    tokenDecimals: 18,
    exchangeAddress: '0x46C0D35cf02a74f5a407d8aaE5C585075A04D67c'
  },{
    symbol: 'ANKR',
    name: 'Ankr Network',
    tokenAddress: '0x06D4dA27beFCd5714c2F6353bB2E178A4d20Dcd0',
    tokenDecimals: 18,
    exchangeAddress: '0x0212744234B4F1dc43505EBa91b6FF5c4454eA6f'
  },{
    symbol: 'TOL',
    name: 'Tolar Token',
    tokenAddress: '0xd07D9Fe2d2cc067015E2b4917D24933804f42cFA',
    tokenDecimals: 18,
    exchangeAddress: '0x750b6039e984ffFc839bb7B20180821129b826AD'
  },{
    symbol: 'ANKR',
    name: 'Ankr Network',
    tokenAddress: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
    tokenDecimals: 18,
    exchangeAddress: '0xc29e794e9E4B49AE3C79829534f1E1ca500C18eD'
  },{
    symbol: 'BDX',
    name: 'Bright Dream X',
    tokenAddress: '0xC87412535beC14FE79497914Dc5886fb0a163123',
    tokenDecimals: 18,
    exchangeAddress: '0x267774aAbF8DdF3049F2D3F9FC2df4aF5d5FB2f8'
  },{
    symbol: 'RUFF',
    name: 'RUFF',
    tokenAddress: '0xf278c1CA969095ffddDED020290cf8B5C424AcE2',
    tokenDecimals: 18,
    exchangeAddress: '0x131DD8dD9ED091cE8c7E2f18c7D626565d0F1946'
  },{
    symbol: 'LZR',
    name: 'LaserCoin',
    tokenAddress: '0x3453769b660b7EE4261AaA043479Aa3CA02243bf',
    tokenDecimals: 18,
    exchangeAddress: '0x1899F671644471124D3D2232BC699128BF1c678c'
  },{
    symbol: 'CVT',
    name: 'CyberVeinToken',
    tokenAddress: '0xBe428c3867F05deA2A89Fc76a102b544eaC7f772',
    tokenDecimals: 18,
    exchangeAddress: '0x5E3E0227497eD2cAD0eF3C2725c625208e0f86b7'
  },{
    symbol: 'MYTH',
    name: 'Mythical Token',
    tokenAddress: '0x79Ef5b79dC1E6B99fA9d896779E94aE659B494F2',
    tokenDecimals: 9,
    exchangeAddress: '0x782e1AdC4E47A745f5cCaB8EC52871cb27f5628b'
  },{
    symbol: 'DRT',
    name: 'DAO Research Token',
    tokenAddress: '0xaB88d08F5b47B685b046BA89A4981D0E17e406cE',
    tokenDecimals: 18,
    exchangeAddress: '0xeecB20FefE0Ef112eb3341884F3870E61856eb57'
  },{
    symbol: 'CUSDT',
    name: 'CTether USD',
    tokenAddress: '0x39AB32006Afe65A0B4D6A9A89877c2c33ad19EB5',
    tokenDecimals: 6,
    exchangeAddress: '0x01E27B66EC6EBCC9007f392698651863BCe8109f'
  },{
    symbol: 'TBTC',
    name: 'Titaniumbtc',
    tokenAddress: '0x78b3F053B236e7F2e1307353Bd46E1B2B79230eb',
    tokenDecimals: 8,
    exchangeAddress: '0x26FDafA6e292f04Bbae1927d6DD3b16De4396016'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xD2840757B0DeF8fBC2A7DC990CEF75975C2d3F0e',
    tokenDecimals: 18,
    exchangeAddress: '0xc514D32b1626df2B53603ff5e3296c147781DE4A'
  },{
    symbol: 'MIG',
    name: 'Migranet Token',
    tokenAddress: '0x05A78FfEa2b35AA1Af438c21cf06668CF118df0A',
    tokenDecimals: 18,
    exchangeAddress: '0x4bf2bB989C4F4a20f57996db1ACd6876A6dFd36D'
  },{
    symbol: 'HBAR',
    name: 'Hedera Hashgraph Token',
    tokenAddress: '0xa43C7F27E36279645Bd1620070414e564ec291a9',
    tokenDecimals: 18,
    exchangeAddress: '0x54CB903d2b34Db1c0fA034C01f447ACada90Fa59'
  },{
    symbol: 'AXTR',
    name: 'Axetrade Coin',
    tokenAddress: '0x147fDf641173f2Db3Ea318EB16Ed8357f8a8a31C',
    tokenDecimals: 8,
    exchangeAddress: '0xc7E7dDA197F4Bcdd5C1F387F7FB54b41C542bA80'
  },{
    symbol: 'IP$',
    name: 'InternetCash',
    tokenAddress: '0x553BB0A90ECC3877881388B421F7eb9b00492c9A',
    tokenDecimals: 0,
    exchangeAddress: '0xEbd5c413ba9038c008FA199AB8533D18Ec510b2B'
  },{
    symbol: 'UNY',
    name: 'Unity',
    tokenAddress: '0x42b1050E6Ba748D9aCb999D1d14aBbdF659456Cd',
    tokenDecimals: 2,
    exchangeAddress: '0xb111BE60DbA6D0508C871000aAda5E4D7487362E'
  },{
    symbol: 'AIRPOP',
    name: 'AIRPOP Token',
    tokenAddress: '0xbc96B740DbDD3d3220f9b455088E006c7a1C1839',
    tokenDecimals: 2,
    exchangeAddress: '0xaF53572aC722ca3f081e2680c25F1Eb5eDC1AD94'
  },{
    symbol: 'NWF',
    name: 'Network Foundation',
    tokenAddress: '0x1534a5715278163687D4F4d4cF27E345b4de1803',
    tokenDecimals: 2,
    exchangeAddress: '0xF63718FB41E75756F7eb8ca288c86687a3de8001'
  },{
    symbol: 'MNE',
    name: 'Minereum',
    tokenAddress: '0xc92e74b131D7b1D46E60e07F3FaE5d8877Dd03F0',
    tokenDecimals: 8,
    exchangeAddress: '0x285cF40bdbbf433b800843849D817fbDb0A42b29'
  },{
    symbol: 'WEIDAI',
    name: 'WeiDai',
    tokenAddress: '0xaFEf0965576070D1608F374cb14049EefaD218Ec',
    tokenDecimals: 18,
    exchangeAddress: '0xFC9e641F4F0E94AddcA2F267cA21b89285485138'
  },{
    symbol: 'MKCN',
    name: 'Mkoin',
    tokenAddress: '0xa6F8fc3E20C1336e2354c4C01d3721E49396D8CD',
    tokenDecimals: 18,
    exchangeAddress: '0x7203721B828c40dca17151D7F86f9e3B8E738130'
  },{
    symbol: 'LMC',
    name: 'Lord Money Coin',
    tokenAddress: '0x46Fb2D7d09DE30335eD2Ad963f72315ACa9935fb',
    tokenDecimals: 6,
    exchangeAddress: '0x8080498f961D0522073d301a4d0B14345cDc2F87'
  },{
    symbol: 'WTL',
    name: 'Welltrado token',
    tokenAddress: '0x9a0587EaE7eF64b2B38A10442a44CfA43EDd7D2A',
    tokenDecimals: 18,
    exchangeAddress: '0x8e4252594dC43D9Dd6b69Bd1e60B99931b956C1f'
  },{
    symbol: 'TPT',
    name: 'Toilet Paper Token',
    tokenAddress: '0x159bbc3A28B8D5EF69eF68EDe48262134d73C967',
    tokenDecimals: 18,
    exchangeAddress: '0x5C013DC0dC5169277eD3549b7E0Df6fD7e96886B'
  },{
    symbol: 'MEXP',
    name: 'MOJI Experience Points',
    tokenAddress: '0xDe201dAec04ba73166d9917Fdf08e1728E270F06',
    tokenDecimals: 18,
    exchangeAddress: '0x3a19Bd9bfD152E4DBFc393c6aB9980E988f0eDDf'
  },{
    symbol: 'FUCO',
    name: 'Futbol Coin',
    tokenAddress: '0xa9f2C8EF5Eeb27dC7819cD1712f02e816dB02056',
    tokenDecimals: 0,
    exchangeAddress: '0x0847c2c470286a85816aBfeDF808AcD9C619EF64'
  },{
    symbol: 'XLMX',
    name: 'STELLAR CLASSIC',
    tokenAddress: '0xaB2282E27533749d7883E24F82dc8DFa2B3e3C85',
    tokenDecimals: 18,
    exchangeAddress: '0xd5466a3625BdC20f3EAACA23256329d8222E7Aa5'
  },{
    symbol: 'PYD',
    name: 'PayPDM Coin',
    tokenAddress: '0xE8f8378f02DD54153aA21d93673F291322222714',
    tokenDecimals: 18,
    exchangeAddress: '0xfEd117B9eC7bF9Aedb42891Cb29e664AAD1f7FEA'
  },{
    symbol: 'ova',
    name: 'ovatel',
    tokenAddress: '0x22581e0198eD6Ea34d438148a106903f5fB846c0',
    tokenDecimals: 8,
    exchangeAddress: '0x394af7CdE3e159b9e1794C32B33c2929DbA88De1'
  },{
    symbol: 'HBIT',
    name: 'HEARTBEAT',
    tokenAddress: '0x8A5aD873A1A615001aCc1757214F67E1Ba145cC9',
    tokenDecimals: 18,
    exchangeAddress: '0xa8C488905098fB246A5c1F2A1A4bEA9619141491'
  },{
    symbol: 'tac',
    name: 'asean community coin',
    tokenAddress: '0x49f4A535c6091815268D130a1Eb89611f8F54fb8',
    tokenDecimals: 10,
    exchangeAddress: '0x7CeC7Be386a6953D38Debdb90f4bBE2574eb3628'
  },{
    symbol: 'DLTX',
    name: 'DeltaExCoin',
    tokenAddress: '0x0435316B3aB4B999856085c98c3B1ab21d85CD4D',
    tokenDecimals: 18,
    exchangeAddress: '0x1b5F03D79477b0B7A46ACD4964c0c65C571CECE8'
  },{
    symbol: 'GRD',
    name: 'GateRoad',
    tokenAddress: '0x1F5CF487d0D3A4d83058D2841FE060d7fbd06856',
    tokenDecimals: 18,
    exchangeAddress: '0x6E32D7f1F627d05B12D02cceEe883C3F05be77cA'
  },{
    symbol: 'ETN',
    name: 'Electroneum',
    tokenAddress: '0xb9aB56Bd9476d38ea08cf4B8a41158CdDd582dA3',
    tokenDecimals: 18,
    exchangeAddress: '0x878ba654033cCE2BA263a0AB64C355200ed618a9'
  },{
    symbol: 'JBX',
    name: 'JBlock',
    tokenAddress: '0x63F0266aAb580c8A04825f2C6b80Fc74B7ADA0C6',
    tokenDecimals: 18,
    exchangeAddress: '0x6892cA9ba3607E0886663640dD29dbdF0955A0f1'
  },{
    symbol: 'XLMX',
    name: 'STELLAR CLASSIC',
    tokenAddress: '0x1e66008a24a486456A796E0c771fdc0cDf43cAD9',
    tokenDecimals: 18,
    exchangeAddress: '0xaDDF3EEe5F722AD425D5E6FA675bB44d792161f7'
  },{
    symbol: 'LSC',
    name: 'Lex Scripts Co.',
    tokenAddress: '0x71dd1b1ac58e386C3f8d79e4faF830c622352b6b',
    tokenDecimals: 18,
    exchangeAddress: '0x6625C3BA1E857A1B4974Aa5c0F61Bb822ECfd95a'
  },{
    symbol: 'BBB',
    name: 'BitByBit',
    tokenAddress: '0x85C5E28c1f4612FacE2Fb41bb1886824Cd5dCd02',
    tokenDecimals: 4,
    exchangeAddress: '0x3b983dEaA1eEB1DD7681fC13772110219C50eee9'
  },{
    symbol: 'CADC',
    name: 'CanCoin',
    tokenAddress: '0x3D8582111468Ad78A4794b071A3524FA05056F18',
    tokenDecimals: 2,
    exchangeAddress: '0x2016779AC54Bf2647B455B821C2E5da5C7988E3e'
  },{
    symbol: 'TIME',
    name: 'Chronobank TIME',
    tokenAddress: '0x6531f133e6DeeBe7F2dcE5A0441aA7ef330B4e53',
    tokenDecimals: 8,
    exchangeAddress: '0xF96E7ACC056Acd6056dcC85F58FCd23297B1a7ea'
  },{
    symbol: 'EVY',
    name: 'EveryCoin',
    tokenAddress: '0xEEd3aE7b0F8b5B9BB8C035A9941382B1822671CD',
    tokenDecimals: 12,
    exchangeAddress: '0x8EAB357FBEd5a03c0BE495e69c23F00BcFd7293d'
  },{
    symbol: 'ESC',
    name: 'ESC',
    tokenAddress: '0x8B61d80786a1746E98C747ae43DEFebF07bBAD84',
    tokenDecimals: 18,
    exchangeAddress: '0xEb8626e2D6F6F63f72a0d44aF78603215c44Cf5f'
  },{
    symbol: 'XAL',
    name: 'ALTIN LIRA',
    tokenAddress: '0x61561529350276B2D44227a078b248d52c67b1dC',
    tokenDecimals: 18,
    exchangeAddress: '0x738849AFf219a8a8f19f362c4124bE0F4F3cC54F'
  },{
    symbol: 'GOL',
    name: 'GOL',
    tokenAddress: '0xF4ecdBa8ba4144Ff3a2d8792Cad9051431Aa4F64',
    tokenDecimals: 0,
    exchangeAddress: '0xcA36ba2995d9f9C3146E7d8FcaE89836a8906992'
  },{
    symbol: 'KRL',
    name: 'Krill',
    tokenAddress: '0x093f23dB019554Feb8A70d3522b9f4E970a609Da',
    tokenDecimals: 8,
    exchangeAddress: '0x0A0a4Ff31F506ec6387301FE1E898Bf82D163712'
  },{
    symbol: 'STR',
    name: 'StarCoin',
    tokenAddress: '0x9d29C933beF93090905d662fbFBE240DF73C1A3a',
    tokenDecimals: 18,
    exchangeAddress: '0xDDA37225ab1A82b9428633fC8A33499E3b77c636'
  },{
    symbol: 'ECP',
    name: 'Encropy',
    tokenAddress: '0xac2178DD4AcE3b94Bf442239074384Ebb9EF1301',
    tokenDecimals: 8,
    exchangeAddress: '0x4C9E5Bf950997d1358BAaCf38D15904c925c4501'
  },{
    symbol: 'TOIS',
    name: 'Thopi Services',
    tokenAddress: '0xc1C1E14e862197174616e4Bc8F9290D40A2D2d75',
    tokenDecimals: 18,
    exchangeAddress: '0xC6350bF0eC96212b18c5FE825FeC0075114dCf68'
  },{
    symbol: 'FCO',
    name: 'FutureCarbon1',
    tokenAddress: '0x4cbdaea41E4C864477E1430a896d9E3Bac11f593',
    tokenDecimals: 0,
    exchangeAddress: '0xA095b3Ca34142Ff49d5f1B7A698c567Ff6d96196'
  },{
    symbol: 'BTC1',
    name: 'Bitcoin1',
    tokenAddress: '0x2151288dfdBd547e071d8c6DC7fE3301235ae87C',
    tokenDecimals: 8,
    exchangeAddress: '0x2ca9Ac5434326029D5b1A24D33bE2625cF60BaCD'
  },{
    symbol: 'USW',
    name: 'USW',
    tokenAddress: '0x2e502E92d460Ac84c04981598C47e31a2abEc606',
    tokenDecimals: 18,
    exchangeAddress: '0xa61059dC3B2d17913A7D167bf48AC4f0eab238Ed'
  },{
    symbol: 'TU',
    name: 'testUNI',
    tokenAddress: '0x821fd9bA56aeA05CA59300600CD4BB00d6ee305f',
    tokenDecimals: 0,
    exchangeAddress: '0xEBE02d4307c6f4C1712C5A11a8760dd98934c3c0'
  },{
    symbol: 'TWT',
    name: 'Trust Wallet',
    tokenAddress: '0x7527B2319131285Ece4106c0Ba95C71113403c66',
    tokenDecimals: 18,
    exchangeAddress: '0x1E064fff70322e5d012EECcAaCAC13A54491F1E4'
  },{
    symbol: 'JETH',
    name: 'JETH',
    tokenAddress: '0x0aC48b4d2468f335877Fe58639A538994C0ABAC0',
    tokenDecimals: 18,
    exchangeAddress: '0xBCd0dE00f0A9bF426467c1DEe9804987B2A53448'
  },{
    symbol: 'UNITS',
    name: 'Imperial',
    tokenAddress: '0x25cef4fB106E76080E88135a0e4059276FA9BE87',
    tokenDecimals: 5,
    exchangeAddress: '0xd257E0947D0bB29E3AE6fe167c73920F89F1ACEf'
  },{
    symbol: 'BTCT',
    name: 'Bitcoin Turbo',
    tokenAddress: '0xbc859003e6215995537651D712093C67b6a3587c',
    tokenDecimals: 8,
    exchangeAddress: '0xCE3387cbfC18360762d9fc724e0708e18B765349'
  },{
    symbol: 'L3X',
    name: 'L3XT0K3N',
    tokenAddress: '0x3698C454F5CC63CAc084b7aaeF9b3d077b264aE8',
    tokenDecimals: 0,
    exchangeAddress: '0xade39113F6C9373C14Ea6BdD506a084FB4F9E0fA'
  },{
    symbol: 'L3X',
    name: 'L3X',
    tokenAddress: '0x7A057C31b19EFC74FdaDA81Da3B4Cc110284e5AA',
    tokenDecimals: 0,
    exchangeAddress: '0xAbE0c0Dc8aeF7954aBF5f7fA1263d484771D0B9a'
  },{
    symbol: 'FTHR',
    name: 'Feathers',
    tokenAddress: '0x7C918dF91f8F4e8D707a7A4013b8e7247C0293B1',
    tokenDecimals: 4,
    exchangeAddress: '0x0bBe7c9bA80e8CBDd12D089A32092Fa93cd783f3'
  },{
    symbol: '0z0n3',
    name: '0z0n3',
    tokenAddress: '0x5F68B3720b468fF1A3321EFd0557355093D54664',
    tokenDecimals: 0,
    exchangeAddress: '0xcCd86113f90F6E6b52A64e8C80d38F2dc0741331'
  },{
    symbol: '0xL3X',
    name: '0xL3X',
    tokenAddress: '0x44ebeCF76cc77D4dd7Caa9cF0CFA85b069762C0f',
    tokenDecimals: 0,
    exchangeAddress: '0x0241A3814bF2531DD8A553bF39e9b6670D755368'
  },{
    symbol: 'RAKU',
    name: 'RAKUN',
    tokenAddress: '0x51BC0DeaF7bBE82bC9006b0c3531668a4206D27F',
    tokenDecimals: 18,
    exchangeAddress: '0x7bA5aEeDEb9611f274D2B9a2C3DFE8fe2E518224'
  },{
    symbol: 'RTC',
    name: 'Realtrade Coin',
    tokenAddress: '0x0E5d22C0CAbcB15BC75C3F5050ba56dFF2B3Cd6F',
    tokenDecimals: 18,
    exchangeAddress: '0xB031404ACf9980B9E0B5b39657DeDA39cc7ba280'
  },{
    symbol: 'DEFL',
    name: 'Deflacoin',
    tokenAddress: '0x4eC2eFb9cBd374786A03261E46ffce1a67756f3B',
    tokenDecimals: 18,
    exchangeAddress: '0x6fA6849bc139aAb1877aa57dddf058B7353cE0EE'
  },{
    symbol: 'CODX',
    name: 'Codex Protocol',
    tokenAddress: '0xb0aC3aA8E166004f763E2b2615ec88f908360Da4',
    tokenDecimals: 18,
    exchangeAddress: '0x304435e961910bb257e0C77388456F56dFA0fFf3'
  },{
    symbol: 'UNWRITE',
    name: 'UNWRITE',
    tokenAddress: '0x77661393709B50Bb1f8174acFc2861497A43f555',
    tokenDecimals: 0,
    exchangeAddress: '0x5c7B6849ede9D26c394Ef5377c10c515A1a6458e'
  },{
    symbol: 'TLP',
    name: 'TokenLoop',
    tokenAddress: '0x4d9BF8f078B2B9B16d19741f7656c683ACcDE8EC',
    tokenDecimals: 18,
    exchangeAddress: '0x56eA845BD0b6503b638d56c72555904F1aD4541C'
  },{
    symbol: 'LXS',
    name: 'LexDAO Skunkworks ',
    tokenAddress: '0x3690d0a994DE4fF2067d032d6F5b18661b2e8f26',
    tokenDecimals: 18,
    exchangeAddress: '0x4a8A7B3a2aA6Cb04491dE67e01751f05430b8A42'
  },{
    symbol: 'FIAT',
    name: 'FIAT',
    tokenAddress: '0x0AcA1A719e8e93B084e496eF4d9fC33e3fe3eE62',
    tokenDecimals: 18,
    exchangeAddress: '0xBee9DF929A39AD3FE43aCc12688C4aCcf46D7768'
  },{
    symbol: 'LXK',
    name: 'LexDAO Legal Engineering Kudo',
    tokenAddress: '0x4D9D9a22458dD84dB8B0D074470f5d9536116eC5',
    tokenDecimals: 18,
    exchangeAddress: '0xBc79729B6BDeF7A3D71157FD30f73270Bb5a8aFE'
  },{
    symbol: 'C2XT',
    name: 'C2X',
    tokenAddress: '0x80510E56e3F2Ef63c07468be6Cfb8FFe2468dcC8',
    tokenDecimals: 8,
    exchangeAddress: '0xfE1a3eE360FD0e733106b87F183AB339F1E651C8'
  },{
    symbol: 'CPT',
    name: 'Crypto Projects Token',
    tokenAddress: '0xfC86c646d2c90E38E0F0aF6D0baEe4ea95aA4893',
    tokenDecimals: 8,
    exchangeAddress: '0xF3B4b652A97bf71779057a3280550f8AD3506983'
  },{
    symbol: 'HETH',
    name: 'Hashthereum',
    tokenAddress: '0x500d15aA5b01E7eb77e4D4C8283Df3E6c49Da754',
    tokenDecimals: 18,
    exchangeAddress: '0xB05Af692Ba7F7F8F3989B2ae656b9388D4005bbc'
  },{
    symbol: 'NEWS',
    name: 'CryptoNewsNet',
    tokenAddress: '0x130Da3E198f092Fe2a6e6c21893dc77746d7e406',
    tokenDecimals: 8,
    exchangeAddress: '0xf36Df759Dcf2CBe8Ab5581B5E0803fAE61226667'
  },{
    symbol: '808TA',
    name: '808TA',
    tokenAddress: '0x5b535EDfA75d7CB706044Da0171204E1c48D00e8',
    tokenDecimals: 18,
    exchangeAddress: '0x8667Ad33c573475d80A76F440AdaA3Cd4562F97f'
  },{
    symbol: 'oETH $160 Put 05/01/20',
    name: 'Opyn ETH Put $160 05/01/20',
    tokenAddress: '0x461Cd647aDd2159E85aD57141cB5371566fCeeD3',
    tokenDecimals: 7,
    exchangeAddress: '0xd03f7298aE74a8618711Ec43F45Ad2225F141aa4'
  },{
    symbol: 'PIXBY',
    name: 'PIXBY',
    tokenAddress: '0xB53e08B97724126Bda6d237B94F766c0b81C90fE',
    tokenDecimals: 18,
    exchangeAddress: '0x62269FA526e55Dec17b10ab4aAE3E9410f9526d4'
  },{
    symbol: 'RDIV',
    name: 'Real Div Coin',
    tokenAddress: '0xB34F15d826164b55CcC226486053819F55A6De2d',
    tokenDecimals: 18,
    exchangeAddress: '0x0CF3800Cf7c93f12b5b4bC4E7C4d8f98047C48a2'
  },{
    symbol: 'NHT',
    name: 'NATARAL HEALTH TOKEN',
    tokenAddress: '0x5E03370283887409B1309E46AFC9A79d0aA1EC9C',
    tokenDecimals: 18,
    exchangeAddress: '0x1728e6b0Cf59dfAd93FDD45eF1b7a3418a2b4461'
  },{
    symbol: 'LDMT',
    name: 'LexDAO Maintainer Token',
    tokenAddress: '0x397bCf94f08dA84f8A036d18107d08F361428ed5',
    tokenDecimals: 0,
    exchangeAddress: '0x806373CD220c46196a80Eb21A54d4de83c4c2aF6'
  },{
    symbol: 'ANNC',
    name: 'Annual Coin',
    tokenAddress: '0xBEcD1101ca01005227Db7954D7609845f19d36B4',
    tokenDecimals: 8,
    exchangeAddress: '0xcA5598B722819b24699689629813d90702733FBb'
  },{
    symbol: 'ISA',
    name: 'Income Share Agreement Token',
    tokenAddress: '0x538a199D5621AB333D64069ebb90EBa437A9a059',
    tokenDecimals: 18,
    exchangeAddress: '0x301CbfDC3c98643aD02C9687b845a71713E77490'
  },{
    symbol: 'BR',
    name: 'Bob Ross',
    tokenAddress: '0xF52939c19157257500C3Ae81065B59C896fB2Cf8',
    tokenDecimals: 18,
    exchangeAddress: '0xAAdA3D8d2D493dEAae0Cf0CbC60751800fFbb4E3'
  },{
    symbol: 'WAXO',
    name: 'WAXO',
    tokenAddress: '0xe690e40D4b80628F42548c35d45637c3180C9c07',
    tokenDecimals: 8,
    exchangeAddress: '0x954f8F100528E6B817e4231130fED8E5038dB344'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2016779AC54Bf2647B455B821C2E5da5C7988E3e',
    tokenDecimals: 18,
    exchangeAddress: '0x6fD545D3Eb14F7403370f431e9aCEFF2bB282b3f'
  },{
    symbol: 'FRNK',
    name: 'Frinkcoin',
    tokenAddress: '0xf938c9A22C6Fc9e6b81b24b68dB94B92dc4a7976',
    tokenDecimals: 8,
    exchangeAddress: '0x326129D10d393EAadB3e820fF38Abb28Fd5bD80f'
  },{
    symbol: 'XRPC',
    name: 'XRP CLASSIC',
    tokenAddress: '0xd4cA5c2AFf1eeFb0BeA9e9Eab16f88DB2990C183',
    tokenDecimals: 8,
    exchangeAddress: '0x1Da26BAD03b7738005eB6e2abb32DE867930D555'
  },{
    symbol: 'EMI',
    name: 'EMIN',
    tokenAddress: '0x6B40D614DfC1819f5F6F2432Be48D258f56a713F',
    tokenDecimals: 18,
    exchangeAddress: '0x8c957bea8Cb9bCF1F8935720B6f795191734B8F9'
  },{
    symbol: 'EAN',
    name: 'EANTO Token',
    tokenAddress: '0xB4742e2013f96850a5CeF850A3bB74cF63B9a5D5',
    tokenDecimals: 18,
    exchangeAddress: '0x5cEFD56db8992D680c3E7e243Bb1EbA12C411033'
  },{
    symbol: 'ICT',
    name: 'ICOCalendar.Today',
    tokenAddress: '0x2d71983E810B9e95258966B9c164C4d61a829bA9',
    tokenDecimals: 6,
    exchangeAddress: '0x82c1F86Be30c3AB4cE7e665D218df887E3110C97'
  },{
    symbol: 'CTC',
    name: 'Cryptopolitain Token',
    tokenAddress: '0xeA8f5D815A482Cc752F89Faa9da6B2d6A55D9B47',
    tokenDecimals: 18,
    exchangeAddress: '0xa5c5A3Ad3a29D5EE35b1b82A3D7e7bdC0c78c422'
  },{
    symbol: 'EKG',
    name: 'Ekon Gold',
    tokenAddress: '0x6A9b3E36436B7abde8C4E2E2a98Ea40455E615cf',
    tokenDecimals: 18,
    exchangeAddress: '0x6482E16F3188A9c1b44314B6Beee63A85119eA47'
  },{
    symbol: 'RnT',
    name: 'RedditNation',
    tokenAddress: '0x3eEf8724724E884B5Fe3ec644843FbFeBA74FE4B',
    tokenDecimals: 18,
    exchangeAddress: '0x75C0eBdD41274557e238677A478F93d39de5Cb01'
  },{
    symbol: 'BLX',
    name: 'Blockchain Index',
    tokenAddress: '0xE5a7c12972f3bbFe70ed29521C8949b8Af6a0970',
    tokenDecimals: 18,
    exchangeAddress: '0xAF5BF5F4EF8807eeDc20Fa003581fDC2937585c1'
  },{
    symbol: 'OTFC',
    name: 'FiveCoin',
    tokenAddress: '0xe8A8196A3dF2f0e79186C04A4d1dC7D37eA2bAd0',
    tokenDecimals: 0,
    exchangeAddress: '0xDA496E09C8c7195bde3d607f2eE4B0376e7607E2'
  },{
    symbol: 'STON',
    name: 'STON',
    tokenAddress: '0x660E78E77B0a4eeF978eF198C7229259f0Eff8ac',
    tokenDecimals: 8,
    exchangeAddress: '0x770282165CD3246B7ECea9979258a98b5A6394Ae'
  },{
    symbol: 'AZBI',
    name: 'AZBI core',
    tokenAddress: '0x21Efe20be784aC5dA569f72070e64525f95CCAb6',
    tokenDecimals: 18,
    exchangeAddress: '0xd649d5e4feF4cAEC6760557b6Ef09E0db6FcFC74'
  },{
    symbol: 'BCDN',
    name: 'BCDN',
    tokenAddress: '0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40',
    tokenDecimals: 15,
    exchangeAddress: '0xA95031F55a13Cd5FD998C07304443f1CB8a8058a'
  },{
    symbol: 'GMX',
    name: 'Gemx',
    tokenAddress: '0xA67C912303b5227D6D4Dc7d16088342718a05bdf',
    tokenDecimals: 4,
    exchangeAddress: '0x1bC08B2e6537166Ad57c2dD1Ab27241FEa9A14cB'
  },{
    symbol: 'BLCC',
    name: 'Bullers Coin',
    tokenAddress: '0x3F2d8861e8Ca9A7649d211dbaA3f3d998C6a254a',
    tokenDecimals: 18,
    exchangeAddress: '0x176D0A223843738f89DE16137092Bce2eE45BBAf'
  },{
    symbol: 'FET(Fetch.AI)',
    name: 'Fetch.ai tokens',
    tokenAddress: '0x85117168851e99b6FA06bc8A58E035Dc50587541',
    tokenDecimals: 18,
    exchangeAddress: '0x4f35eECEe8E61642b2cBAe6C38adC760A9f51aE0'
  },{
    symbol: 'UAX',
    name: 'UAX',
    tokenAddress: '0x1Fc31488f28ac846588FFA201cDe0669168471bD',
    tokenDecimals: 2,
    exchangeAddress: '0xFDf73a423a7c6f7E3921e66C84f4b7339319aD96'
  },{
    symbol: 'CID',
    name: 'Cryptid',
    tokenAddress: '0xb9c39DBCAdC3497895497554A62A12458E4fed23',
    tokenDecimals: 18,
    exchangeAddress: '0xEF55868EEf0af0127A106b4cCEc16807340CDCbE'
  },{
    symbol: 'LXC',
    name: 'LexCoder',
    tokenAddress: '0xcc834a2d56994b90Bd754E34555E39f89953e8fE',
    tokenDecimals: 18,
    exchangeAddress: '0x90580897ff5aD8B6D5F1DD47Ec9c3bb785dE9d37'
  },{
    symbol: 'LXDC',
    name: 'LexDAO Coder',
    tokenAddress: '0x611FE161F207306aC53d058EDfFAD9d34bce0bda',
    tokenDecimals: 18,
    exchangeAddress: '0x6D662426F0A4A2F1E002315840Ce5712A6E6b222'
  },{
    symbol: 'PATS',
    name: 'PatexShares',
    tokenAddress: '0x3310f5Acb5df71DA3b15A27230122bFbF3f7B9A0',
    tokenDecimals: 18,
    exchangeAddress: '0x78AE4eC5c95f8ed8EdD470a2bcc29518B363c618'
  },{
    symbol: 'ANTS',
    name: 'FireAnts',
    tokenAddress: '0xa9fBB83a2689F4fF86339a4b96874d718673b627',
    tokenDecimals: 18,
    exchangeAddress: '0xe919532FCcA93D9DdA988ae52196149E70c5D7E9'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xC24308AACBe693C5bF162B3a5FC58Aaa4EA6EA25',
    tokenDecimals: 18,
    exchangeAddress: '0x12Dc03763585301173E83c9C326275529C459e4C'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x2157A7894439191e520825fe9399aB8655E0f708',
    tokenDecimals: 18,
    exchangeAddress: '0xa8643d9c2F8ec488935769AE00BbEd04b34d6db5'
  },{
    symbol: 'JBX',
    name: 'Jbox',
    tokenAddress: '0x884e3902C4d5cFA86de4aCE7A96AA91EbC25C0Ff',
    tokenDecimals: 18,
    exchangeAddress: '0x301916b7DF76c43D7bf0b80Ab86626ecAB3f96A3'
  },{
    symbol: 'BEPRO',
    name: 'BetProtocolToken',
    tokenAddress: '0x786001c9c5CA6E502dEB8a8a72480d2147891f32',
    tokenDecimals: 18,
    exchangeAddress: '0x6Aae58a6841e422A19d46f5fb917aca569194415'
  },{
    symbol: 'CBD',
    name: 'Blockcannan',
    tokenAddress: '0x676f3714BB4a6E17fb471391c05c99F32EC24567',
    tokenDecimals: 4,
    exchangeAddress: '0x6Ef62824AC6061a046fa7B818De5809b54384Ba6'
  },{
    symbol: 'MDC',
    name: 'MopedCoin',
    tokenAddress: '0x155FE94928f5bA6fA4AD93FA82b8D59D668305dd',
    tokenDecimals: 8,
    exchangeAddress: '0x3297BF7668816750742a66984a51d8aB9033F38C'
  },{
    symbol: 'FLX',
    name: 'FLX Coin',
    tokenAddress: '0xaE7EAB72FEa25A8073D14E6F159568b67572878A',
    tokenDecimals: 2,
    exchangeAddress: '0x26612ca187777a2a515AEA688F34Ad96e80b8fd3'
  },{
    symbol: 'ITO',
    name: 'InTime',
    tokenAddress: '0x293B0Cd0991DB07c8529fEBb01bc7D052315C5Ab',
    tokenDecimals: 18,
    exchangeAddress: '0x8D1B4b9794F29fE230931c4854E9381b95195343'
  },{
    symbol: 'OTO',
    name: 'OnTime',
    tokenAddress: '0x028CE5EA3298a50c0D8a27b937b1F48Cf0d68b56',
    tokenDecimals: 18,
    exchangeAddress: '0x97BdEA57dAB8c3ed4C14645FB7c4C608273B25D2'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x634e27269A029EdB2b70b5EF43273F5eEd9Ebcc2',
    tokenDecimals: 18,
    exchangeAddress: '0x5be5dd0e6764B29970307294385f58564b4ea811'
  },{
    symbol: 'MTK',
    name: 'MitonToken',
    tokenAddress: '0x0489f5924d29312620B2DB11318F099Cf807F27F',
    tokenDecimals: 18,
    exchangeAddress: '0x041d686E0256d763cd15609076E834dCD75AA79F'
  },{
    symbol: 'CBX',
    name: 'Cybitex',
    tokenAddress: '0x8DE0f21eaa95f589A8a2fE69c5752fFdADA83EaD',
    tokenDecimals: 18,
    exchangeAddress: '0xc0A501408Cef7e0d99a2673BD871f8193fFc1bE2'
  },{
    symbol: 'BCY',
    name: 'BitCrystals',
    tokenAddress: '0xAdbBB02E20C44779e87F7eA90C47c9A7a8A93fee',
    tokenDecimals: 8,
    exchangeAddress: '0x2A7e6c9B192bA7140f4BF645eb2eF57d6b415Bc4'
  },{
    symbol: 'MK€TH',
    name: 'Markka €thereum',
    tokenAddress: '0xd73D4CF565d9BE46d5EEBC2A338E22a3B61095DA',
    tokenDecimals: 1,
    exchangeAddress: '0x12Cf62Bd23AE779cd36587A4E21825A6254338b2'
  },{
    symbol: 'G¢',
    name: 'Gerrit Coin',
    tokenAddress: '0x81250f81AEba148ceb25E016BC4ed378133CbbE0',
    tokenDecimals: 1,
    exchangeAddress: '0x1B16f16F71900196B2acc510ED93b10075adb574'
  },{
    symbol: 'AEN',
    name: 'ZenFoundation',
    tokenAddress: '0x74874D2bECbbDCDD59C31F2a344873CE782ba354',
    tokenDecimals: 6,
    exchangeAddress: '0x99461e73d703D3A7beD591D3573d00162eD7DD6C'
  },{
    symbol: 'KON',
    name: 'Konios',
    tokenAddress: '0x9c10B6D9a92e8CdA1179F20a637F748E965F64E7',
    tokenDecimals: 18,
    exchangeAddress: '0x26fb887AAfbE1549Aa5764f2B368537a787729E4'
  },{
    symbol: 'AE86',
    name: 'HACHIROKU',
    tokenAddress: '0x3e4BA4163D718D9dCc9E97c6e1cCA31D290c47b1',
    tokenDecimals: 18,
    exchangeAddress: '0xFa73F609a07ba71B750FA5c0b193380d9762180c'
  },{
    symbol: 'VNDC',
    name: 'VNDC',
    tokenAddress: '0x1F3F677Ecc58F6A1F9e2CF410dF4776a8546b5DE',
    tokenDecimals: 0,
    exchangeAddress: '0xd4A037E7c7685A1Bb636f76004082978EaEFC18c'
  },{
    symbol: 'CTSI',
    name: 'Cartesi Token',
    tokenAddress: '0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D',
    tokenDecimals: 18,
    exchangeAddress: '0xC1b4Beab153305Bd13A394E5beFefFC450BE7C2D'
  },{
    symbol: 'PPT',
    name: 'Populous Platform',
    tokenAddress: '0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a',
    tokenDecimals: 8,
    exchangeAddress: '0x13fb6682681BB096c93f703057ef29295ce45E63'
  },{
    symbol: 'TRUTH',
    name: 'TruthSECURITYtoken',
    tokenAddress: '0x2c497506593B1df1c05269dBa8224fE8E8708241',
    tokenDecimals: 2,
    exchangeAddress: '0x31554D1f65fe6f4204fe2917355e1C69ac8aF8A1'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x2B40Bd590b3F1b7AC0d3855ADDEaBd13f944758E',
    tokenDecimals: 8,
    exchangeAddress: '0xF1187F630c12dE550eca2490cB35Cb3a0ae8C7C2'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0xBBF09abeAEe3BD54C990f1fcE56D2BE61EC4CE2E',
    tokenDecimals: 8,
    exchangeAddress: '0xE229d3d78c2B934A3908813f12f9CB603146766e'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x2Cee389A5eFae6B7E96bf6f558cBD110d029F850',
    tokenDecimals: 8,
    exchangeAddress: '0xf9e38b737e1E19A709780595934216931656375D'
  },{
    symbol: 'XLM',
    name: 'STELLAR CLASSIC',
    tokenAddress: '0x65815700C9c4b382a6E8Ae09F8Fe9458Af0B4f8a',
    tokenDecimals: 18,
    exchangeAddress: '0x75418906207D68C4bDAD19180e72FcC7161E813d'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0xD7Fb8ce96e8A6e95c35998Ae9a2cbA9D98579717',
    tokenDecimals: 8,
    exchangeAddress: '0x630F14c714F507Aa56B6b02DfE585a605bE72BF7'
  },{
    symbol: 'LSI',
    name: 'LSI COIN',
    tokenAddress: '0x391A156b4357E5A6C3F63294961c9e6F3Dd99A52',
    tokenDecimals: 8,
    exchangeAddress: '0x3fCC6ee9b5a1F1970df9076E1A10a7908b2fe3C5'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x89cfbf13d1d64D0CbAA26D377f3576ACc03eAa77',
    tokenDecimals: 8,
    exchangeAddress: '0x0d67Fb20AD8bA94E354e34f5755859Af71641592'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x5f896e0Bf4AdAFcCDCF33a3C38bcBFCCB793D44f',
    tokenDecimals: 8,
    exchangeAddress: '0x66f46565769f3fF3eA87AbBef1dbd80A810380Fb'
  },{
    symbol: 'UMA',
    name: 'UMA Voting Token v1',
    tokenAddress: '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',
    tokenDecimals: 18,
    exchangeAddress: '0x6264C8d158F32Bd8C01B8A0102b57dfcFCfb8561'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0xa168A63030843568f0F30Aa226647082BD0123cC',
    tokenDecimals: 8,
    exchangeAddress: '0x919C2250DA944AEFA9086769d40B46D29eab4b96'
  },{
    symbol: 'ZAI',
    name: 'ZAI Stablecoin',
    tokenAddress: '0x6a90445976B4a9ad09DE0C1621048483d2f5589F',
    tokenDecimals: 0,
    exchangeAddress: '0x5f792a2cF5D03D69E0FF71Fb07964B314e4E730f'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x5a61deaec3f3ABBcA5E2f1e5c2a6E4d06D6b1308',
    tokenDecimals: 8,
    exchangeAddress: '0xe24D428E4A19069Fa12aD0709E4bB3496B55F8bA'
  },{
    symbol: 'ZTC',
    name: 'Zetscoin',
    tokenAddress: '0x9D9d3c9772EF260eF0775fCFa8191D75620E21e7',
    tokenDecimals: 18,
    exchangeAddress: '0xb4b55A1749159DA20ddB55a356804E10427AAa13'
  },{
    symbol: 'JAKE',
    name: 'meToken',
    tokenAddress: '0x423EED0Ce576faC2969661e2fd6376eCaC28b8Bc',
    tokenDecimals: 18,
    exchangeAddress: '0x0A7BEC19ABe7f55d4978Cd0450b1F890A325209d'
  },{
    symbol: 'MNT',
    name: 'Money Token',
    tokenAddress: '0x310DA5e1E61cD9d6ECed092F085941089267E71E',
    tokenDecimals: 18,
    exchangeAddress: '0x9be991F89794fD6279CB99DD2D5A0755e2Ecf990'
  },{
    symbol: 'CVRL',
    name: 'Comando Vermelho',
    tokenAddress: '0x448C0a7fb16D8CA04D1142D4D12D61672697B173',
    tokenDecimals: 18,
    exchangeAddress: '0x102637cCeDea0434b6881EEe19eD8f2Ba2761163'
  },{
    symbol: 'PUP',
    name: 'CryptoPuppyToken',
    tokenAddress: '0x7d952579e9936B1B31e6f5C177313Fe0D1629635',
    tokenDecimals: 18,
    exchangeAddress: '0x412c6ab8121Be6Ca4AfA8eFcb6b317f2244ea474'
  },{
    symbol: 'oETH $250 Call 05/29/20',
    name: 'Opyn ETH Call $250 05/29/20 ',
    tokenAddress: '0xbcAE1dB14f1b366cd4611C75Aab2031492b136e9',
    tokenDecimals: 6,
    exchangeAddress: '0xb1C9e4d652259467e4556BA627B00b284481744E'
  },{
    symbol: 'oETH $150 Put 05/29/20',
    name: 'Opyn ETH Put $150 05/29/20',
    tokenAddress: '0xECf6F2fD8D2A8E17397066348d449566d5407174',
    tokenDecimals: 7,
    exchangeAddress: '0x75B865EA22a2b6633038E15647357268C7F9Ac54'
  },{
    symbol: 'DAINE',
    name: 'DAIN ERC-20',
    tokenAddress: '0x1620e2A57cBa54B33877572E89A1dEA3cD8Bfbf7',
    tokenDecimals: 8,
    exchangeAddress: '0x8F27d5297875a16e3bF7F90F12b699e6452714e6'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x6C3942B383bc3d0efd3F36eFa1CBE7C8E12C8A2B',
    tokenDecimals: 18,
    exchangeAddress: '0x1b852d1B794638E521C52DD8eBa70f9D431514e8'
  },{
    symbol: 'MTC',
    name: 'Mitscoin',
    tokenAddress: '0x7E339Aa7C2f840302f3e73C22A9886F7de766e1C',
    tokenDecimals: 18,
    exchangeAddress: '0x2dF54bcC662c7F7C1A4feEe5eE821356B4B99e97'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x3eE100d5559c3D058D1eC5936084D37D360ED008',
    tokenDecimals: 8,
    exchangeAddress: '0x332699dA86A80D6e500E4F2687F8cA9c38Fcce1c'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x1214C67a00aeBd71aE2146105d2c39fc86beFb9f',
    tokenDecimals: 8,
    exchangeAddress: '0x08C2A8169d28EB7473d338B9ad26Ee0BF0d6cB66'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x756a38cb9AFc235860985402b9A97e7eCbD8Ad22',
    tokenDecimals: 8,
    exchangeAddress: '0x6382b12629CC6881f5d06CB325134a3cC579B270'
  },{
    symbol: 'HEVI',
    name: 'Hevi Token',
    tokenAddress: '0xe79Be9DE3Ff6cc353799Ce03E7F46e09c02321FD',
    tokenDecimals: 0,
    exchangeAddress: '0xf604d73B0E0EbED6B26bA8193c6074A335AD2891'
  },{
    symbol: 'CDASH',
    name: 'CryptoDash Token',
    tokenAddress: '0x86b300EF935284A99fa5d148A9a6Ccc5103B21A8',
    tokenDecimals: 18,
    exchangeAddress: '0xc31617E16af9fcE18607209F46334447197615af'
  },{
    symbol: 'GELD',
    name: 'SGelderGER',
    tokenAddress: '0x24083Bb30072643C3bB90B44B7285860a755e687',
    tokenDecimals: 18,
    exchangeAddress: '0xC9d34B2441Db219a3A63f7b8040a48C7C90790CF'
  },{
    symbol: 'CRD',
    name: 'CryptalDash',
    tokenAddress: '0xcAaa93712BDAc37f736C323C93D4D5fDEFCc31CC',
    tokenDecimals: 18,
    exchangeAddress: '0x97dd9068C9e367C4E156F95AFF1fEB4a2083aCdE'
  },{
    symbol: 'SOME',
    name: 'Somerset 7 Tokens',
    tokenAddress: '0xF62CAe057ce7Bc671e79a951e0f2b8b7869626a5',
    tokenDecimals: 18,
    exchangeAddress: '0xBFb6F4A6B0d8345387987494406335D1B41453e2'
  },{
    symbol: 'ASETH',
    name: 'Advanced Smart Ethereum',
    tokenAddress: '0x7702Dc872F6ebd93e6dB4d725eefbeA34841B48F',
    tokenDecimals: 18,
    exchangeAddress: '0x36Fec0d857b887c11F3Ae90D891b8BbB125118eA'
  },{
    symbol: 'LSN',
    name: 'LS1 Nova',
    tokenAddress: '0xBc8d4e3a1a5f69CEA8e9C9316766806b4746Fc7d',
    tokenDecimals: 18,
    exchangeAddress: '0x6A807F2E76Cb96f966E894BEDbF972c0B85B7282'
  },{
    symbol: 'REALTOKEN-8342-SCHAEFER-HWY-DETROIT-MI',
    name: 'RealToken 8342 Schaefer Hwy Detroit MI',
    tokenAddress: '0x6Fd016CCc4611F7BAB1DD3267334cB0216Ef47f9',
    tokenDecimals: 18,
    exchangeAddress: '0x2E66ED26258C186e931a7dd2AedbF944c9a0d2FF'
  },{
    symbol: 'ELK',
    name: 'Andrew Elkins',
    tokenAddress: '0x4F502574100651DD4cAba198767dE48D0D8e10Df',
    tokenDecimals: 18,
    exchangeAddress: '0xEb914e5CE04333fD430995E01881961A259cd255'
  },{
    symbol: 'LOM',
    name: 'Ltconlinemarkets',
    tokenAddress: '0xE2e9e0402916C3e9CE3DcF817316d1253e53Ef45',
    tokenDecimals: 18,
    exchangeAddress: '0x8448eED4726F3AcC7f98A977E35E51a7e15eF9DA'
  },{
    symbol: 'oETH $160 Put 05/08/20',
    name: 'Opyn ETH Put $160 05/08/20',
    tokenAddress: '0xc8F95E13Eff0165e5e381ea1878C56D93562D7D7',
    tokenDecimals: 7,
    exchangeAddress: '0x572040e32c69b29a262392Ba7967B9f25724da39'
  },{
    symbol: 'FSE',
    name: 'First Shards Ever',
    tokenAddress: '0xD607376d92Adfe49CFDD96A7B553CB6586A67a43',
    tokenDecimals: 18,
    exchangeAddress: '0x2959805b31FcCae20a4Ea5684f0C556baF73203a'
  },{
    symbol: 'CRO',
    name: 'Cronos Coin',
    tokenAddress: '0xDdF993BEbbd397f2a42de7c39F09F9C8e34Ef322',
    tokenDecimals: 18,
    exchangeAddress: '0x94f728374064FbA033b8648Aa5B8493Afc7fDE65'
  },{
    symbol: 'MKCC',
    name: 'mkoinC',
    tokenAddress: '0x8Dce79B1FCAecB56380BC4DEDEaF28236343A7ec',
    tokenDecimals: 18,
    exchangeAddress: '0xccF2d114dF3400dd03A5873ef0928161721924b9'
  },{
    symbol: 'OKB',
    name: 'OKB',
    tokenAddress: '0x75231F58b43240C9718Dd58B4967c5114342a86c',
    tokenDecimals: 18,
    exchangeAddress: '0xF52d48F4707Bb434BC67f92d94B39d8f324A4c36'
  },{
    symbol: 'USDM',
    name: 'Crypto dollar Monolith',
    tokenAddress: '0x3FCCE645D31774f34bC0DF9E4257D3d680104937',
    tokenDecimals: 2,
    exchangeAddress: '0x498EEc1CA78265bADAe8f665fD8E6D647bfE70A6'
  },{
    symbol: 'GHC',
    name: 'Go Home Corona',
    tokenAddress: '0x5e8CBC221159494a0E750733148fCA7eB320bD3E',
    tokenDecimals: 2,
    exchangeAddress: '0x0726118cF77C87fb6fDd2e0A9Fa19E6D40E8751C'
  },{
    symbol: 'VIRUS',
    name: 'Virus Token',
    tokenAddress: '0x88f400F6a26465c9ac6AE5c1C8C14Cf12B515C96',
    tokenDecimals: 9,
    exchangeAddress: '0xA8aA45853B1DB011c2fA5b37dc0b5e12e68999d1'
  },{
    symbol: 'RUBM',
    name: 'Cryptoruble Monolith',
    tokenAddress: '0xcf55D22b0C6F4D783f8593741dEd453c804ea12F',
    tokenDecimals: 2,
    exchangeAddress: '0xdF41928af266b87F55266542Db5DB0BE8bC21381'
  },{
    symbol: 'SURE',
    name: 'inSure',
    tokenAddress: '0xb5a4ac5b04E777230bA3381195EfF6a60c3934F2',
    tokenDecimals: 18,
    exchangeAddress: '0xa64299641255E1b569DE57B11B9599ABd0dcfe65'
  },{
    symbol: 'CGT',
    name: 'CACHE Gold',
    tokenAddress: '0xF5238462E7235c7B62811567E63Dd17d12C2EAA0',
    tokenDecimals: 8,
    exchangeAddress: '0x24bdEc4a06E02C84E3787401c9cb8C6817A5063E'
  },{
    symbol: 'Jayfield',
    name: 'meToken',
    tokenAddress: '0x6e916f23B0aBEB6cf8E6cD065d975BE2B289B31a',
    tokenDecimals: 18,
    exchangeAddress: '0x4015B9c4465bE67bD887aC1b8F27ec5F272bbc0D'
  },{
    symbol: 'ULLU',
    name: 'ullu',
    tokenAddress: '0x5313E18463Cf2F4b68b392a5b11f94dE5528D01d',
    tokenDecimals: 18,
    exchangeAddress: '0x7850e047e568E553cf295E6F6BB96D1615f9820C'
  },{
    symbol: 'IMVR',
    name: 'ImmVRse Token',
    tokenAddress: '0x7878424E994D8a2B8E329D31096922B7CeAbe660',
    tokenDecimals: 18,
    exchangeAddress: '0x9908b3E9C074c707Eb1864f2343DB8dbFE5E36c9'
  },{
    symbol: 'SCOM',
    name: 'Supercompute',
    tokenAddress: '0x73718B72d0292d4F1Fa6b2e838C2b4013d16787c',
    tokenDecimals: 4,
    exchangeAddress: '0xBbBC98c598525AD73b4033ec6a498527Fc46A5Da'
  },{
    symbol: 'MUSD',
    name: 'MASTER USD',
    tokenAddress: '0xA52383B665b91DCe42dD4b6d1E0Fb37d3EFFe489',
    tokenDecimals: 18,
    exchangeAddress: '0x09E9c053AdE783473ac7cC8DbE9CA72D9453A9F2'
  },{
    symbol: '0xMR',
    name: '0xMonero',
    tokenAddress: '0x035dF12E0F3ac6671126525f1015E47D79dFEDDF',
    tokenDecimals: 18,
    exchangeAddress: '0x72C86cE3D8F0DC1D66928A7E384DB3d60289E48f'
  },{
    symbol: 'PGOLD',
    name: 'Pyrrhos Gold',
    tokenAddress: '0xF02DAB52205aFf6Bb3d47Cc7B21624a5064F9FBA',
    tokenDecimals: 4,
    exchangeAddress: '0x79e4Df02cD890d32cbdc1C09B601e33A58DaEA5A'
  },{
    symbol: 'STO',
    name: 'Nise Chain',
    tokenAddress: '0x72a8e0B56ae249537A2636C5eCac0F03b60D7DC5',
    tokenDecimals: 18,
    exchangeAddress: '0xf39444474064C9c488F45aeA6bC4Bf232759C5c4'
  },{
    symbol: 'NEX',
    name: 'Nairotex',
    tokenAddress: '0x37AdECFC8f9f8977B6C82422E6A7fB63d139A0d3',
    tokenDecimals: 18,
    exchangeAddress: '0xE9cdAB327cC8E7e14AE2C2eAb943aA717FBF7003'
  },{
    symbol: 'BYU',
    name: 'BeYou',
    tokenAddress: '0x15578f0cd22F57E16a0D0DCEdF78bc9bA0aABE3d',
    tokenDecimals: 0,
    exchangeAddress: '0xf47cd01974a90cC23B744e00DBAb7Cc1C97011AF'
  },{
    symbol: 'MKCD',
    name: 'mkoind',
    tokenAddress: '0x43807a8E9aC0A6Db983D0950e210712D2794900D',
    tokenDecimals: 18,
    exchangeAddress: '0xC63E5f35cB58eb67814F8A813B3cB7e4908E7a38'
  },{
    symbol: 'TEST',
    name: 'Test Token',
    tokenAddress: '0x3a5Df276a6D2B2b19271F649742a539D5c3946BC',
    tokenDecimals: 18,
    exchangeAddress: '0x730dA6e3b948CDA993a4BBd58FDEd7CCC8e820CA'
  },{
    symbol: 'COTI',
    name: 'COTI Token',
    tokenAddress: '0xDDB3422497E61e13543BeA06989C0789117555c5',
    tokenDecimals: 18,
    exchangeAddress: '0x09738723b1A5297374c4Df1e99757F3D6A3332be'
  },{
    symbol: 'SWYFTT',
    name: 'SWYFT Token',
    tokenAddress: '0xA1248c718d52752b2cC257eeb0eBa900408dAeB8',
    tokenDecimals: 18,
    exchangeAddress: '0xd03966AF51F352D62f1E85FC07221d18c567EE59'
  },{
    symbol: 'TRIM',
    name: 'Trilliam',
    tokenAddress: '0x9F103cD6fB907928351353e6f339c3fdCd5ee05c',
    tokenDecimals: 18,
    exchangeAddress: '0x2f9A291c72c45Bf15a8fEBe1b7cC29800bd3a056'
  },{
    symbol: 'SMART',
    name: 'Ethereum Smart',
    tokenAddress: '0xdeB5ea7b10e852D037F6C6517583e19a7078b9b2',
    tokenDecimals: 18,
    exchangeAddress: '0xB0b0D3090400aBdF40062f2a5EDB3c5806D72181'
  },{
    symbol: 'IRC',
    name: 'IRONCOIN',
    tokenAddress: '0x1F21d8395655fb262251897df7CB3c9358BEc6a2',
    tokenDecimals: 8,
    exchangeAddress: '0xbf3Bb4d84D5186392e1586cD50EDEF4Fc72F0db3'
  },{
    symbol: 'EDOGE',
    name: 'EtherDoge',
    tokenAddress: '0x8a7b7B9B2f7d0c63F66171721339705A6188a7D5',
    tokenDecimals: 18,
    exchangeAddress: '0x75b5B3Aa380603375Dbb1e8389Fa273387A59f96'
  },{
    symbol: 'HUGS',
    name: 'HUGS',
    tokenAddress: '0x76B57e60b6C01361103f1053AA1F7118bD209dec',
    tokenDecimals: 4,
    exchangeAddress: '0x44268Cb816b584aFc3e1d75E6536626dc2ce95DA'
  },{
    symbol: 'CHARGE',
    name: 'Charge',
    tokenAddress: '0x17491ae8B359E73ca06F0ABb52223daA878140a9',
    tokenDecimals: 4,
    exchangeAddress: '0x411619F0445739380C444aeE2f38796ee345754e'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xFD00Fa15894CA24862371A9DdA75596aD31aF86E',
    tokenDecimals: 18,
    exchangeAddress: '0xE44969ea79D7af552B93950687BC923315D5C632'
  },{
    symbol: 'XXX',
    name: 'XXX Token',
    tokenAddress: '0xb3c7A46a37bF7691140BB8296Ba6a86c08E90308',
    tokenDecimals: 18,
    exchangeAddress: '0x1AEB1655318aA9a6E5713Fbd7740243023517a5e'
  },{
    symbol: 'UBEX',
    name: 'UBEX Token',
    tokenAddress: '0x6704B673c70dE9bF74C8fBa4b4bd748F0e2190E1',
    tokenDecimals: 18,
    exchangeAddress: '0x2d02Fdc7cc9978D159f531f65513380fd97E4B59'
  },{
    symbol: 'VENT',
    name: 'VentToken',
    tokenAddress: '0x2b0C1B7f43e129249FD42F3aAf0AD375735e77dD',
    tokenDecimals: 18,
    exchangeAddress: '0x3987E22E2714b70167404013715905fBc9F5Eb7D'
  },{
    symbol: 'XTEM',
    name: 'Tweet Empire',
    tokenAddress: '0x2d2501dCc897ad69a12090Ca6b59Ab33018eAb97',
    tokenDecimals: 18,
    exchangeAddress: '0x1aBD661C743db6397F2600658576bd7183Ab73a1'
  },{
    symbol: 'KOT',
    name: 'KORONA',
    tokenAddress: '0xa0B32eDE6d6b3fA7b0B496863Ed66e9AB9F55765',
    tokenDecimals: 9,
    exchangeAddress: '0x313D008dc64D28ce318d2637267dd27227EE7D06'
  },{
    symbol: 'TST',
    name: 'TST Token',
    tokenAddress: '0x424Eee506F88DD596275258B294E12e913675E89',
    tokenDecimals: 18,
    exchangeAddress: '0xAb9B8e5C731D9fC92d21FD3f175E58a639a98b5d'
  },{
    symbol: 'BBN',
    name: 'BBNToken',
    tokenAddress: '0x35a69642857083BA2F30bfaB735dacC7F0bac969',
    tokenDecimals: 18,
    exchangeAddress: '0x7a95A4f948E5173A6d7932601cf8454A75aD0e94'
  },{
    symbol: 'IRR',
    name: 'eRial.org',
    tokenAddress: '0x3D2F50874591d0EeAa811fb58Cc4716758280885',
    tokenDecimals: 0,
    exchangeAddress: '0xFaC8bF9eF7A2f2E241c78cA6Cc0F6FE345e1F8D4'
  },{
    symbol: 'RSHM',
    name: 'Ross Shaves His Mustache',
    tokenAddress: '0x6bcbDE53B9bD2487B8D42142813ac893625CB460',
    tokenDecimals: 18,
    exchangeAddress: '0x479017E754452Fe3ba349b242892dd1BfECb0e29'
  },{
    symbol: 'CANADA',
    name: 'CANADACOIN',
    tokenAddress: '0x7EA4c29d3d37F9b259Be610b67B3125c4d095d02',
    tokenDecimals: 18,
    exchangeAddress: '0x8be37Ab080470F4b83D19a59ec6557bA6faEE17f'
  },{
    symbol: 'LXT',
    name: 'LexToken',
    tokenAddress: '0xDe87FBDC5dAe04557e375E02Aa0962937706000A',
    tokenDecimals: 0,
    exchangeAddress: '0x9AD617Ec41662393e36b8e6cAF21b18E71e6647F'
  },{
    symbol: 'LXKM',
    name: 'LexDAO Karma',
    tokenAddress: '0x5b8E815CEF16edD8e459f3dc462D05dB19687c93',
    tokenDecimals: 18,
    exchangeAddress: '0x08680fB0ffc009bdab11E7eB1012994205475659'
  },{
    symbol: 'SST',
    name: 'Second Shards Test',
    tokenAddress: '0x0C83d52140fF0FDB1a46FBE7a7f15216cbe70896',
    tokenDecimals: 18,
    exchangeAddress: '0x0b3f7a7bD5341513fA5ad51B670BD46308f634E9'
  },{
    symbol: 'ITL',
    name: 'ITL (Italian Lira)',
    tokenAddress: '0x122A86b5DFF2D085AfB49600b4cd7375D0d94A5f',
    tokenDecimals: 8,
    exchangeAddress: '0x4C5DB435ad2C0bAD651c778A667607fCbf01778D'
  },{
    symbol: 'ZSC',
    name: 'Zeus Shield Coin',
    tokenAddress: '0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63',
    tokenDecimals: 18,
    exchangeAddress: '0x8A69e52C7F869cfa8116F7fEd6a8B777dCF1D6Fe'
  },{
    symbol: 'VIET',
    name: 'VietCoin',
    tokenAddress: '0x162383a7628761FeBE4e5D9cA1e63e39e983d685',
    tokenDecimals: 18,
    exchangeAddress: '0x0F2C4F94c09797D9E5E254800Ea52a42CDb807Cd'
  },{
    symbol: 'TST',
    name: 'Test',
    tokenAddress: '0x99CAdC8C2f240a5D50a531Cb3c4a9D10B7DA0995',
    tokenDecimals: 0,
    exchangeAddress: '0x5e4dF6903e13F8F8A42970314e6fEFDbCC01B997'
  },{
    symbol: 'STA',
    name: 'Statera',
    tokenAddress: '0xd809AAE1e66e540D19834deE4301f6DcCE367f97',
    tokenDecimals: 18,
    exchangeAddress: '0x9c40340A632Bc865525209fB65Dce65b27dffed5'
  },{
    symbol: 'APC',
    name: 'Alpha Coin',
    tokenAddress: '0x15bdA08c3afbf5955D6e9B235Fd55a1FD0DbC829',
    tokenDecimals: 6,
    exchangeAddress: '0xAe7D97767a9286a8e8699405CC4b7423D34B3060'
  },{
    symbol: 'USDT',
    name: 'Tether USD',
    tokenAddress: '0x3D8bAbf3Afd0e1bfC843F9638f650fA50ae6C22B',
    tokenDecimals: 6,
    exchangeAddress: '0x0FA58beF33c3dEfF75bf6D69b42E6E5E0B097DF9'
  },{
    symbol: 'MLR',
    name: 'MLR Token - Mega Lottery Services Global',
    tokenAddress: '0xF26893f89B23084C4C6216038D6eBDBE9e96C5cb',
    tokenDecimals: 18,
    exchangeAddress: '0xC324eD180dD52268CB803C0c6767ee19CB2743f7'
  },{
    symbol: 'FST',
    name: 'Futureswap',
    tokenAddress: '0xC06F8DB8b8a23AfDe358aAD26E07a87Ed7478d9a',
    tokenDecimals: 18,
    exchangeAddress: '0xE43cAC6d94f1B66038045fb348E7D329Fea4d628'
  },{
    symbol: 'AMA',
    name: 'AmaCoin',
    tokenAddress: '0x1dd0Df760eB950083c1925da19fC7ac1356a190B',
    tokenDecimals: 18,
    exchangeAddress: '0xd88bf752436E92AaB05524d7F2B5746178dff74b'
  },{
    symbol: 'ELK',
    name: 'Andrew Elkins',
    tokenAddress: '0x27DEC891a44a0d7340023E58531449e6A28ec7A2',
    tokenDecimals: 18,
    exchangeAddress: '0x763D13c12bEdEa19E765d2B0640243Ac9BBb48B2'
  },{
    symbol: 'USDL',
    name: 'LiveUSD',
    tokenAddress: '0x89c08383442efe6a88a87a095a37FeE274B9d9a7',
    tokenDecimals: 18,
    exchangeAddress: '0x9661e39f9c9728C379BEc2bC1b700fa2705C3371'
  },{
    symbol: 'TXB',
    name: 'TestLxBill',
    tokenAddress: '0xA267E447Af6fc15482EdE1673d3B3A256A1291FA',
    tokenDecimals: 18,
    exchangeAddress: '0xBaF17D06A30fa92733263093f04Ee5B7c1Bc41bb'
  },{
    symbol: 'KEA',
    name: 'KEA Coin',
    tokenAddress: '0x390D6673c1FA9DBb8000dB1AE89252b7d531Ab75',
    tokenDecimals: 8,
    exchangeAddress: '0x088f1bd304E300F6c0647054E5795b9B09252753'
  },{
    symbol: 'MOVIE',
    name: 'MoviePass',
    tokenAddress: '0x7a54Fae94B6960D9f7316612EEC179078e911769',
    tokenDecimals: 18,
    exchangeAddress: '0x0080dc160bAf765aB9f6Fd495ce0c8ac488d0163'
  },{
    symbol: 'NODE',
    name: 'Node Token',
    tokenAddress: '0x435d664F72D6F194ef67d63B5f3936650187b131',
    tokenDecimals: 18,
    exchangeAddress: '0x156eAdF35e313BaeD075F55cc59dD70767dfA6BE'
  },{
    symbol: 'PETER',
    name: 'meToken',
    tokenAddress: '0xc9B2EF3974c0b743624c4952F2663ea1C4e52C28',
    tokenDecimals: 18,
    exchangeAddress: '0x9dc84500109510730a77fB07266BD00df76D5D45'
  },{
    symbol: 'ITB',
    name: 'InterbitToken',
    tokenAddress: '0xd7CEe74893C363AFA35f85aA00f4ad7796770ee5',
    tokenDecimals: 18,
    exchangeAddress: '0xCb6Ccd7B81247c9cEe3b2BC4123d2EaC761345b1'
  },{
    symbol: 'EtLyteT',
    name: 'EthLyteToken',
    tokenAddress: '0x1d8cA7baf0895Da8afcf153657bE064b5092a274',
    tokenDecimals: 18,
    exchangeAddress: '0x4Bb71fDBaB9022ace68227de10CbCd05Cb768ef7'
  },{
    symbol: 'JAKE',
    name: 'meToken',
    tokenAddress: '0x277697FA7C134A7Fcc2AAAf812Bdf1FD8b68B818',
    tokenDecimals: 18,
    exchangeAddress: '0x1B3373017616138C7f3D75450dDab35519043218'
  },{
    symbol: 'STA',
    name: 'Statera',
    tokenAddress: '0xe343245DE92181bc06ba5Cd1152C705A2C5F3E2F',
    tokenDecimals: 18,
    exchangeAddress: '0x6aD0f063a0dbDEAded193F51a145113082F4904B'
  },{
    symbol: 'Inst',
    name: 'Marketing Inst',
    tokenAddress: '0x645Fe04d8a8C4d79AC09ECc1088AeB0201B11Ce5',
    tokenDecimals: 18,
    exchangeAddress: '0x5b4eDc7C7fec1cb7b9Df1DA8Ab2009cFC86E5a1d'
  },{
    symbol: 'MDZA',
    name: 'MEDOOZA Ecosystem v2.0',
    tokenAddress: '0x0eCDd783dc7bF820614044B51862ED29714d2BA5',
    tokenDecimals: 18,
    exchangeAddress: '0xC71a3d5bDC920892247a9E64A1941BFb9F0EE54F'
  },{
    symbol: 'HYDRO',
    name: 'Hydro',
    tokenAddress: '0x12FB5d5802C3B284761d76C3e723EA913877afBa',
    tokenDecimals: 18,
    exchangeAddress: '0x17Fe5AC2E77E1c7a2a136098BD2018F1DbfF984D'
  },{
    symbol: 'ICO',
    name: 'Token Crowdfunding-ico',
    tokenAddress: '0x99E090d956aF4081720F5a438fB455cE231B04d8',
    tokenDecimals: 18,
    exchangeAddress: '0xf97C3A865Bd2Bbc7EEf21f5C7F66cdA13A601b4d'
  },{
    symbol: 'SONYK',
    name: 'Sonyk RC',
    tokenAddress: '0x7FdAF7e0efF6eD6665B6683267Ac43866E30d44c',
    tokenDecimals: 18,
    exchangeAddress: '0x00586b2696554658b2d9D9CB9b20459Bf373e401'
  },{
    symbol: 'NUK',
    name: 'NukeCoin',
    tokenAddress: '0x01B2233d9094F01C6d961e710383aADaBDB5fA0B',
    tokenDecimals: 18,
    exchangeAddress: '0xEb4a03D30DC8b4396375BD9Bdf566F10Eeb9f9Da'
  },{
    symbol: 'UMA',
    name: 'UMA Token',
    tokenAddress: '0x7f08962d948C5c59Cac284035748BE21134ebC2B',
    tokenDecimals: 18,
    exchangeAddress: '0x463b0E9abAE1eD0Cf7cdEaF79Bb7B3A2CE2ab6d0'
  },{
    symbol: 'RUS',
    name: 'RUS',
    tokenAddress: '0x66Dd59Fc174aDDC0f3a37a2016A04a55f7B4B6cc',
    tokenDecimals: 18,
    exchangeAddress: '0x23E259bd675e109f5b0054341330c941e8a8AA3f'
  },{
    symbol: 'AMM',
    name: 'MicroMoney',
    tokenAddress: '0x8B1F49491477e0fB46a29fef53F1EA320D13c349',
    tokenDecimals: 6,
    exchangeAddress: '0xB88A85551FBf9fDc3E6f0c2A26B446c3207e262E'
  },{
    symbol: 'CPPQS',
    name: '乒乓球银币',
    tokenAddress: '0xB3124aa036224F49a578efc62A714763f18EeBc4',
    tokenDecimals: 8,
    exchangeAddress: '0xA199D7414F0ea040C4b05eA762C90F357e562Dab'
  },{
    symbol: 'MCW',
    name: 'MOCROW',
    tokenAddress: '0x33B919F54692dDbf702065763EA2b50Ca02e6bfF',
    tokenDecimals: 18,
    exchangeAddress: '0x0f9F35ebE7e2Ec9b549328bb1EDDF89449e24c81'
  },{
    symbol: 'APECoin',
    name: 'Asia Pacific Electronic Coin',
    tokenAddress: '0x1E7fDe66aCC959fE02FBE7F830d6dcf4567cfd40',
    tokenDecimals: 8,
    exchangeAddress: '0x7d220fCaC2DD43e7704D00b0FbC610d2D45d82C8'
  },{
    symbol: 'JLT',
    name: 'JILT ',
    tokenAddress: '0xB59D606888F867C11a4c4458e022c2ccc5cBE8DB',
    tokenDecimals: 18,
    exchangeAddress: '0xCD50397812F43d30C717A543D1f0b87DB818C185'
  },{
    symbol: 'PEXB',
    name: 'PEXB TOKEN',
    tokenAddress: '0x0BB2B6281091d0F212E0362a3D056539C7adf9FC',
    tokenDecimals: 2,
    exchangeAddress: '0x5233dC8F5F536dCAe486ab7af6Ade4D103DAC14c'
  },{
    symbol: 'HE',
    name: 'House Edge',
    tokenAddress: '0x398656D0bdb435D1032DECFC2d2D87852262BB19',
    tokenDecimals: 5,
    exchangeAddress: '0x7A84cfe1B3275dbb374FD22966fe70C14ba349b3'
  },{
    symbol: 'oETH $200 Put 05/08/20',
    name: 'Opyn ETH Put $200 05/08/20',
    tokenAddress: '0xD79aB5a71FA2099eF30Df0E8a81f8C200aac36F1',
    tokenDecimals: 7,
    exchangeAddress: '0x05c0Fd229017b40CaDbffeDEd73ceaeac68Fa4C2'
  },{
    symbol: 'USDEQ',
    name: 'USD Equalizer',
    tokenAddress: '0xb0399c2fb7958d8d0Fde93EC58c4efA1ba501375',
    tokenDecimals: 255,
    exchangeAddress: '0xA66a143BA5d7cd30ff3226f5bd29FaeCf25b9BF2'
  },{
    symbol: 'SUNI',
    name: 'Suni',
    tokenAddress: '0x48a57FDF37EAD873F472Bb257508Ea38989FcA57',
    tokenDecimals: 18,
    exchangeAddress: '0x18A3db3e9ffac3f4C1FE12F5631c469561b958B6'
  },{
    symbol: 'MB',
    name: 'MineBee',
    tokenAddress: '0x8D8129963291740dDDd917ab01af18c7aed4BA58',
    tokenDecimals: 18,
    exchangeAddress: '0x0B6F750E07F1C74575Cf649Fe50b5a42CB5E6d0F'
  },{
    symbol: 'UNI',
    name: 'UNICORN',
    tokenAddress: '0x2730d6FdC86C95a74253BefFaA8306B40feDecbb',
    tokenDecimals: 8,
    exchangeAddress: '0xF045822A5c426c520196453dB978Afc829dfEEad'
  },{
    symbol: 'WCHT',
    name: 'WeCharge Network',
    tokenAddress: '0x9fFC7e09e2494cA2577cBa6c5D2d8F26ec7E2F48',
    tokenDecimals: 8,
    exchangeAddress: '0xEAF1D7A479826BDB4a72Ac2f5Ab627CC1A261cE1'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x48A3CE9045e350B588aF4E8eDFF81F6335c121fE',
    tokenDecimals: 18,
    exchangeAddress: '0x40dF888054AC9E1b3435F5B3488bF8Bc5Fb3a007'
  },{
    symbol: 'STAKE',
    name: 'STAKE',
    tokenAddress: '0x0Ae055097C6d159879521C384F1D2123D1f195e6',
    tokenDecimals: 18,
    exchangeAddress: '0xd35BbF810f3822154628161d2CD5d3dD0734Edc8'
  },{
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    tokenAddress: '0x34FD655d914349Ef58D8ee332B75c249c77Bd496',
    tokenDecimals: 18,
    exchangeAddress: '0xBb19CB28dA9ce1A71c0ea9E910A5479b1AB9A885'
  },{
    symbol: 'ETGP',
    name: 'Ethereum Gold Project',
    tokenAddress: '0xa96F31F1C187c28980176C3A27ba7069f48abDE4',
    tokenDecimals: 8,
    exchangeAddress: '0xc49c951406e7308Ea83A49505C93624DF68A23dB'
  },{
    symbol: 'POL',
    name: 'Polesino',
    tokenAddress: '0x7a5b6651008108a49e07f4D601215c4374005C90',
    tokenDecimals: 18,
    exchangeAddress: '0xcAD21E8f3d85A326EA6e42ED0707BE83Da524740'
  },{
    symbol: 'HXY',
    name: 'HEX Money',
    tokenAddress: '0x44F00918A540774b422a1A340B75e055fF816d83',
    tokenDecimals: 8,
    exchangeAddress: '0x604d4F69e121178f6a91262eDeB54c19C5e3b539'
  },{
    symbol: 'XHT',
    name: 'Hypercubes Token',
    tokenAddress: '0xa0DDAa9779a3F237095338b6546aABaAD7AbeaeE',
    tokenDecimals: 4,
    exchangeAddress: '0x0E1BD9fc95bfe0C72275d5BF71427F9d2EB3F4C2'
  },{
    symbol: 'HYN',
    name: 'Hyperion Token',
    tokenAddress: '0xE99A894a69d7c2e3C92E61B64C505A6a57d2bC07',
    tokenDecimals: 18,
    exchangeAddress: '0xd4402A04e749107708533033F0251e348AF7DDDE'
  },{
    symbol: 'MNMC',
    name: 'MNMCoin',
    tokenAddress: '0xF45091f25d374BbE956c0bb64bB85e02D07Aa741',
    tokenDecimals: 8,
    exchangeAddress: '0x8AeD139a52A320E1DF812CC51f18363204b87aC2'
  },{
    symbol: 'GUX',
    name: 'Gacrux Coin',
    tokenAddress: '0xBdB66929001E0a4930bd0B96D3D594acc5185Eb1',
    tokenDecimals: 8,
    exchangeAddress: '0xb2B50843674d69b85B6FF77f850698eb396CE331'
  },{
    symbol: 'JAYFIELD',
    name: 'meToken',
    tokenAddress: '0x70Dc4bE70c1fa435B0D1Dc8B11548165dA795B9f',
    tokenDecimals: 18,
    exchangeAddress: '0x7f1925Bce15822Bfa9af905C3240D46734d51Da0'
  },{
    symbol: 'DPTS',
    name: 'DCL Parcel Test ',
    tokenAddress: '0xd6C5934DFC75eaD4F095be83091eb12E455175fD',
    tokenDecimals: 18,
    exchangeAddress: '0x94F67515CA2fe6076fF3507f41c2119Fa575dE6A'
  },{
    symbol: 'oETH $200 Put 05/15/20',
    name: 'Opyn ETH Put $200 05/15/20',
    tokenAddress: '0x684a1d736e934a45f6F5D00C62Ddf7a0B7d2064B',
    tokenDecimals: 7,
    exchangeAddress: '0xA7f55C14200136343450B93067d587D112EB7c54'
  },{
    symbol: 'BLACK',
    name: 'Bitcoin Black',
    tokenAddress: '0xF7Ae0DAa230Bf3Fb3c0E5E01E7A6e0A142c6cf7E',
    tokenDecimals: 18,
    exchangeAddress: '0x71C2F3DD4D4C825851D709245B99a08CD766E541'
  },{
    symbol: 'AUTO',
    name: 'CUBE',
    tokenAddress: '0x622dFfCc4e83C64ba959530A5a5580687a57581b',
    tokenDecimals: 18,
    exchangeAddress: '0x45c6825149E0CafB691a320933619Cd24B785E3f'
  },{
    symbol: 'KZL',
    name: 'Kliqzillion',
    tokenAddress: '0x846ef53Fe27D2C1677c53772DCD2479EA0270677',
    tokenDecimals: 18,
    exchangeAddress: '0x8D7B0e560A11D42aE38C24e2A6eB4056CF25490D'
  },{
    symbol: 'FLC',
    name: 'FairLot Coin',
    tokenAddress: '0x6d91DF740338d0f4C9a2224dB866313bb2Be1A94',
    tokenDecimals: 18,
    exchangeAddress: '0xec251f15bD4B69f0c0032C0E4260a9004171761E'
  },{
    symbol: 'ASOS',
    name: 'Asos Token',
    tokenAddress: '0x6B24c06C21a3f933a7fB3FbEE67e0d7D50281545',
    tokenDecimals: 6,
    exchangeAddress: '0x220d8f370F12018C4e4349e01FB1723D905194dd'
  },{
    symbol: 'TUNAC',
    name: 'TUNA Coin',
    tokenAddress: '0x6f1B939D751b5C347867d7797209acB52e84A2e5',
    tokenDecimals: 18,
    exchangeAddress: '0xD5E956AF5b5F12cE003C401B0fF6F7De3516bFAE'
  },{
    symbol: 'XLC',
    name: 'Ethereum Lite Cash',
    tokenAddress: '0x8FAF0be1465B9bE70eE73d9123B2A1fDD9F2AAe4',
    tokenDecimals: 8,
    exchangeAddress: '0x5B9Ce592E53eE96Ea6f891D5cfaB6FBCaa0dCD1C'
  },{
    symbol: 'HARP',
    name: 'Harpoon',
    tokenAddress: '0x0e536b7831c7A7527FaD55da433986853d21A0c7',
    tokenDecimals: 8,
    exchangeAddress: '0x92295806ff6eDCd32817C5E20322fc5a887710F7'
  },{
    symbol: 'BIT',
    name: 'BitRewards Token',
    tokenAddress: '0x47da42696A866CDC61A4C809A515500a242909C1',
    tokenDecimals: 18,
    exchangeAddress: '0xF185C998DAd0d8566AC9CDCE4d043514707F05d2'
  },{
    symbol: 'T50',
    name: 'Tripterium T50',
    tokenAddress: '0x064ED8b48483b37C7A52b0167127057c1157EA15',
    tokenDecimals: 18,
    exchangeAddress: '0xD56FF6861119BE35fB723fB14bF10fb40A3D92d2'
  },{
    symbol: 'YIN',
    name: 'CaoYin',
    tokenAddress: '0x8A4eE36B7AC021Ea1Ac780858da54B0711Ae0D13',
    tokenDecimals: 4,
    exchangeAddress: '0xe2f1c689711618B6B89034b6324F5e789769DA66'
  },{
    symbol: 'HEX4',
    name: 'HEXMAX',
    tokenAddress: '0xd52dca990CFC3760e0Cb0A60D96BE0da43fEbf19',
    tokenDecimals: 8,
    exchangeAddress: '0x2108ee6d28e5C2213313A1061231Fe086F5614F7'
  },{
    symbol: 'FAB',
    name: 'fabspace',
    tokenAddress: '0x63f456407f7298f88eDfe4760C764F003F752689',
    tokenDecimals: 18,
    exchangeAddress: '0xAde05DDCC06B246CbdabEc957bEe5242C224D592'
  },{
    symbol: 'XBL',
    name: 'Billionaire Token',
    tokenAddress: '0x49AeC0752E68D0282Db544C677f6BA407BA17ED7',
    tokenDecimals: 18,
    exchangeAddress: '0xBEB138d863F9d801dc61138cd15814A2FFFdAd15'
  },{
    symbol: 'FBN',
    name: 'FiveBalance',
    tokenAddress: '0x568F9F32969E29B5cE1a4545bE5398e8Cc7C4401',
    tokenDecimals: 8,
    exchangeAddress: '0x408f030ff3DC4EeeE8F42A60a668A774b88a160F'
  },{
    symbol: 'SSN',
    name: 'SuperSkyNet',
    tokenAddress: '0xA5b46FF9a887180C8FB2d97146398Ddfc5FEF1Cd',
    tokenDecimals: 18,
    exchangeAddress: '0x6dB892BEfAA3697bA338D49ECC2b42647ca99Ee2'
  },{
    symbol: 'COSM',
    name: 'CosmoCoin',
    tokenAddress: '0xD1E10C37A27d95D95720291b1Dc6f12F74C71443',
    tokenDecimals: 18,
    exchangeAddress: '0x96Ab489a73Bd184F94799EF138597528F640b1c2'
  },{
    symbol: 'LTF',
    name: 'Longtail Financial Corp.',
    tokenAddress: '0xA65c268dBF4bf7945752f0c6595Aea56811A7494',
    tokenDecimals: 0,
    exchangeAddress: '0x74b29d468a9BCE7b2B7157FcFF4047D86d309f45'
  },{
    symbol: 'BURNIE',
    name: 'BURNIE',
    tokenAddress: '0x79e8053ebdf41DC37fCB6823caa25F028f81f2C7',
    tokenDecimals: 2,
    exchangeAddress: '0x5F325dba6dfAABDa8a3670c6797E1Bb82f4B5e7A'
  },{
    symbol: 'ZTH',
    name: 'Zenith',
    tokenAddress: '0xa49DEd8B4607F958003E0d87d7f2d2f69bCADD41',
    tokenDecimals: 18,
    exchangeAddress: '0xe2EE5ac68BDFE8Cb0f4c3FD06D2f146502648Fcd'
  },{
    symbol: 'BTL',
    name: 'BuurtTesla',
    tokenAddress: '0x8222177B21E063eA4ce1cdB21619F77Aae0D9D8e',
    tokenDecimals: 0,
    exchangeAddress: '0x8EBBEc41A7B8C97dBD1979E698637b275608cF6D'
  },{
    symbol: 'BDX',
    name: 'Bright Dream X Token',
    tokenAddress: '0x17226E548daff815D45b8316a6aF43244CC6C322',
    tokenDecimals: 18,
    exchangeAddress: '0x5a3C62BAac9dFB69133C51dAAF3363fA93AE22d3'
  },{
    symbol: 'TEL',
    name: 'Telcoin',
    tokenAddress: '0x467Bccd9d29f223BcE8043b84E8C8B282827790F',
    tokenDecimals: 2,
    exchangeAddress: '0x8a12f0cdE1d14dcedc77b733138A461c6cecF994'
  },{
    symbol: 'KTT',
    name: 'Kringle Trade Token',
    tokenAddress: '0xA1d1aAcB35004c89CE52D04d38Bf6EB5E007761c',
    tokenDecimals: 18,
    exchangeAddress: '0x0718DAA035490248f1639a66FbEC63bdFB9Ec59d'
  },{
    symbol: 'HROI',
    name: 'HIGH-ROI',
    tokenAddress: '0x8b73f7Ac6B831Dbc7dEd283554d1D39EBbaaD28C',
    tokenDecimals: 18,
    exchangeAddress: '0xb00BB06b99fBaEA5729d812089CDF994bE3E06B8'
  },{
    symbol: 'VIXG',
    name: 'VianeXGold ',
    tokenAddress: '0x566fF8D8bD6dE69d2af4e3cf9153E2Cc77c7972f',
    tokenDecimals: 18,
    exchangeAddress: '0x1Bb5Ac302b26cc90eBbED641180E0030228554Fe'
  },{
    symbol: 'MNE',
    name: 'Minereum',
    tokenAddress: '0x7eE48259C4A894065d4a5282f230D00908Fd6D96',
    tokenDecimals: 8,
    exchangeAddress: '0xE9fd8350F31d2Dd388A227514c4A6f60b5dDA719'
  },{
    symbol: 'GECON',
    name: 'GraspEcon',
    tokenAddress: '0xF5A3CdA84E411b3531218Ab078f0Ee236384d9Fe',
    tokenDecimals: 18,
    exchangeAddress: '0x0095C180E60343441Bb3BbbE577c9dd4d9c936bc'
  },{
    symbol: 'OMS',
    name: 'OMS Token',
    tokenAddress: '0xcaFA95fe1a5a05A0dbbc4E682A80aD16C860C63f',
    tokenDecimals: 4,
    exchangeAddress: '0x538946D2b650c904138aBC45b27A2cef412A3F01'
  },{
    symbol: 'LVC',
    name: 'Leverage Coin',
    tokenAddress: '0x9730428Ba283194B5559C1c4906D9DF1a7c97b32',
    tokenDecimals: 8,
    exchangeAddress: '0xD4d7E1c37C6D39E51d1d8366588220e5Bd2c3c09'
  },{
    symbol: 'HPAY',
    name: 'HappyPay',
    tokenAddress: '0xEeE690AAA67d1eE33365c02C3Bf477A93867052f',
    tokenDecimals: 18,
    exchangeAddress: '0x9981ddF2e1ea406b0bF89404E615DB99c92AEBc6'
  },{
    symbol: '$SAIMANO',
    name: 'meToken',
    tokenAddress: '0xB3C6AbB23189B5767E397f288dD62E7938acC972',
    tokenDecimals: 18,
    exchangeAddress: '0x3E1c8a60287680f2d57F702e9DdA873AaF5cF99d'
  },{
    symbol: 'X',
    name: 'X',
    tokenAddress: '0xF38529F436a1f02C175cA57fA15991263a524bCD',
    tokenDecimals: 2,
    exchangeAddress: '0xa9D8AaE1Fa7b454586f2e07c87aB434801ceBE4D'
  },{
    symbol: 'FICO',
    name: 'FRENCH ICO COIN',
    tokenAddress: '0x7e442206dA059905050bA02BE63CBB85c559EB04',
    tokenDecimals: 18,
    exchangeAddress: '0xE13833e6220051BD18A0747c2C325233b1dF766C'
  },{
    symbol: 'LME',
    name: 'Lime',
    tokenAddress: '0x836C9D71e3373324A97cb17aa07BdB73111d0DE9',
    tokenDecimals: 18,
    exchangeAddress: '0x1B53810654f658bE6bfC33999B7917D3332b7bd0'
  },{
    symbol: 'IART',
    name: 'i4 Art token',
    tokenAddress: '0x4d78e98a763011E4184bee04d9b73441866653ef',
    tokenDecimals: 18,
    exchangeAddress: '0x17E1f73fa9cbb293D3Dcb0f45D86A1d9001f5128'
  },{
    symbol: 'GVE',
    name: 'Globalvillage ecosystem',
    tokenAddress: '0x81705082eF9f0D660f07BE80093D46d826d48b25',
    tokenDecimals: 18,
    exchangeAddress: '0x5F93D91f040518467cAcE6A97C29131AbdaF7536'
  },{
    symbol: 'DAX',
    name: 'DAEX Token',
    tokenAddress: '0x0B4BdC478791897274652DC15eF5C135cae61E60',
    tokenDecimals: 18,
    exchangeAddress: '0xF352c3D49784A652dAd07bC52beA3178ffE9fe10'
  },{
    symbol: 'BWST',
    name: 'Black Wall St ',
    tokenAddress: '0xC0434552b9C01Ba7CDAF623829E735f5AF11fb37',
    tokenDecimals: 18,
    exchangeAddress: '0xc7dED516ee0b1124c8Af368658788B502220CDCB'
  },{
    symbol: 'AXE',
    name: 'AXE',
    tokenAddress: '0x43030Fe232ff28b628c58c1466e9238487f2D670',
    tokenDecimals: 18,
    exchangeAddress: '0x49A37beA30dCc34dbfE07bF20B542769D649eA26'
  },{
    symbol: 'ARDAT',
    name: 'ARDAT',
    tokenAddress: '0x0a63CdCE75c04aA76D2B5effF6550940115cE20c',
    tokenDecimals: 18,
    exchangeAddress: '0xecF22d972C80fb85ff64C6D1AF0a3A561f753cA8'
  },{
    symbol: 'SNGJ',
    name: 'Singular Japan',
    tokenAddress: '0x249f71F8D9dA86c60f485E021b509A206667A079',
    tokenDecimals: 18,
    exchangeAddress: '0x09B35eEc4DF3053782f86D3E5153E8cA87b34F19'
  },{
    symbol: 'LTCX',
    name: 'Lotus Coin',
    tokenAddress: '0x8989174e58758A29a8eDeFcdDf808C8CFB63E5ab',
    tokenDecimals: 18,
    exchangeAddress: '0x3945568A7649715eC82f9D0b6069EA300449F2BA'
  },{
    symbol: 'BTH',
    name: 'Bitherum',
    tokenAddress: '0xDCD03c274982b15341b570F39e0F72E730d11f32',
    tokenDecimals: 18,
    exchangeAddress: '0x613f7a85f4105116BfFf2805d181668B2C9a8dFF'
  },{
    symbol: 'KEEP',
    name: 'KEEP Token',
    tokenAddress: '0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC',
    tokenDecimals: 18,
    exchangeAddress: '0x8705045C732165B67e53152E736f0a9e5f42d042'
  },{
    symbol: 'DREM',
    name: 'Beycoin',
    tokenAddress: '0x96a590e07eB673b4616386c66214E1A036a027BC',
    tokenDecimals: 18,
    exchangeAddress: '0x39Ba1DF0817Ec7ab81cD9B99AfA17EB863376e4F'
  },{
    symbol: 'BIC',
    name: 'BitxEarn Club',
    tokenAddress: '0x807c4a9a1b6A9EA38f3298B7408C1B2Eb9CC290a',
    tokenDecimals: 18,
    exchangeAddress: '0x339691ae70Cba7bA61CE7449C57029eB3Ec45b02'
  },{
    symbol: 'mos',
    name: 'moscoin',
    tokenAddress: '0x1E40160c017f40E9506ea04aa6DF1e1b8BD4e5Ae',
    tokenDecimals: 3,
    exchangeAddress: '0x45dbf0DD5C31bBb6057977E4A48A35c8Ba8d0B92'
  },{
    symbol: 'Honey',
    name: 'Honey',
    tokenAddress: '0x62f920675BaE292D2b14B4F754A2e5724B9BCc54',
    tokenDecimals: 18,
    exchangeAddress: '0x0F88981B285caCAfbB19B5375276Ad8BF65F59Ab'
  },{
    symbol: 'RAS',
    name: 'Real Asset Service',
    tokenAddress: '0x2E34e2B60690d1a1A3e9Fd6AD6D3D553b792B1f4',
    tokenDecimals: 4,
    exchangeAddress: '0xd5a8fF4F46F41122290F3185CE0AC678E2A39fc9'
  },{
    symbol: 'REW',
    name: 'rewardiqa',
    tokenAddress: '0x3FFfFA8F3cc943e43f9f17a83Cbb18f4Bbb9f4AC',
    tokenDecimals: 18,
    exchangeAddress: '0x2b97eBD6023B6A3bC929bb0d5a29A7A7Bfd37187'
  },{
    symbol: 'ERD',
    name: 'Elrond Network',
    tokenAddress: '0xd358f58B5745a5940B7bCD40EB501e056c0DCe5C',
    tokenDecimals: 2,
    exchangeAddress: '0x1641Ea14e0a5A71707d116f8BEb0B1778DA8Ba0B'
  },{
    symbol: 'SKRT',
    name: 'StakingTest',
    tokenAddress: '0x4698B7F6984706405607938EF42735C20DDd8757',
    tokenDecimals: 8,
    exchangeAddress: '0x9621B9DD28cEd0B61f785437B1483325A7EE58E2'
  },{
    symbol: 'LXDT',
    name: 'LEXDAO TORCH',
    tokenAddress: '0x3D495d70329e7A1E47656724dC19C3A3DDbb9003',
    tokenDecimals: 0,
    exchangeAddress: '0xd46e1c906C5E09E6e544932D78Bbf2c4bc0aBfBd'
  },{
    symbol: 'SYLO',
    name: 'Sylo',
    tokenAddress: '0xf293d23BF2CDc05411Ca0edDD588eb1977e8dcd4',
    tokenDecimals: 18,
    exchangeAddress: '0x9B7e70D76fC6BaA1D5297E93409065276d45cd13'
  },{
    symbol: 'LXDB',
    name: 'LexDAO Magick Baton',
    tokenAddress: '0x027fa7C653fBfD1Fe49Bcf930a0E40fc429bCC72',
    tokenDecimals: 0,
    exchangeAddress: '0x6eb0dbF567d9DFc5f3BA9D12f01353a47BE30D2D'
  },{
    symbol: 'VITE',
    name: 'ViteToken',
    tokenAddress: '0x1b793E49237758dBD8b752AFC9Eb4b329d5Da016',
    tokenDecimals: 18,
    exchangeAddress: '0x5dC7a45ad2Bf885A1658ACf5B1Ad50FD9B652cF2'
  },{
    symbol: 'OPLC',
    name: 'OPULENCE',
    tokenAddress: '0xB868636A18c9935D9B259228851cC49245ae68A2',
    tokenDecimals: 18,
    exchangeAddress: '0xbF5c38E45aFE9840cd85792a86C4f01F66F16cEF'
  },{
    symbol: 'MTB20',
    name: 'MikeTangoBravo20',
    tokenAddress: '0x6a2f414E1298264ecD446D6Bb9Da012760336A4f',
    tokenDecimals: 18,
    exchangeAddress: '0xA30dC34B4Eb83F357FcFA8339E0567252870a491'
  },{
    symbol: 'LNCX',
    name: 'LUNA NUSA COIN',
    tokenAddress: '0x7a28bfF8fAE1b31711E1D0c0F484eC61F1adee30',
    tokenDecimals: 18,
    exchangeAddress: '0x948Bf6AFBd61A351740362669Cc4040bea02AF7B'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x5cEFD56db8992D680c3E7e243Bb1EbA12C411033',
    tokenDecimals: 18,
    exchangeAddress: '0xa3F635520D47280b84b20130Da4A9E2F378f4D73'
  },{
    symbol: 'DDD',
    name: 'ScryDddToken',
    tokenAddress: '0x9F5F3CFD7a32700C93F971637407ff17b91c7342',
    tokenDecimals: 18,
    exchangeAddress: '0xDEf7Cb3b28d1185cE243B63B03231FfB8BAEAeDB'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0x48B04d2A05B6B604d8d5223Fd1984f191DED51af',
    tokenDecimals: 18,
    exchangeAddress: '0xaeD7C7BD85be86F2267D1F95f6e9435e54883527'
  },{
    symbol: 'TBO',
    name: 'TBO Coin',
    tokenAddress: '0xCa4B28B4cAbdD1B45dc859443E466dd98d3cD2C2',
    tokenDecimals: 18,
    exchangeAddress: '0x4155dBbb98B4492aA88Dd28f40D520ae2328b73F'
  },{
    symbol: 'SWFTC',
    name: 'SwftCoin',
    tokenAddress: '0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e',
    tokenDecimals: 8,
    exchangeAddress: '0x8A90403FA3f363Af1499dB9893846265cc030EFB'
  },{
    symbol: 'G4B',
    name: 'Game4Bitcoin',
    tokenAddress: '0x54672394026d16F223FdCD912973218AdB4b0E6d',
    tokenDecimals: 2,
    exchangeAddress: '0xe147eBcBb6251018b7f4b771a461A387f14f2537'
  },{
    symbol: 'BBTS',
    name: 'BEEBYTES',
    tokenAddress: '0x57AE85A9e501ce8B6A39761b6363925F0697dAcC',
    tokenDecimals: 18,
    exchangeAddress: '0xd5ff923dD5865a63aaB6D04BED80e646B280787e'
  },{
    symbol: 'RCR',
    name: 'Ross Campbell Retweets',
    tokenAddress: '0xec0dF7bbBC4618790F99Ae69398e2574f5645bB5',
    tokenDecimals: 18,
    exchangeAddress: '0x6A7DBed468C3570c44E797617b7DbdCe701F5496'
  },{
    symbol: 'AfroX',
    name: 'AfroDex',
    tokenAddress: '0x08130635368AA28b217a4dfb68E1bF8dC525621C',
    tokenDecimals: 4,
    exchangeAddress: '0x36b837682a24b49ef03bB5faAf83e300e65b4C85'
  },{
    symbol: 'GLX',
    name: 'Glare',
    tokenAddress: '0x39731Cb7727250bc42b7b72055934e8b3eeAc3b4',
    tokenDecimals: 18,
    exchangeAddress: '0xa0a6bF845edd1a4fe62F95BAf3A5959419843031'
  },{
    symbol: 'USDT',
    name: 'Tether USD',
    tokenAddress: '0xcA210df6FD892168977a2F84D061F8F8b945a505',
    tokenDecimals: 6,
    exchangeAddress: '0x04045481B044534ed3cb1e24254b471CFaDDEB3d'
  },{
    symbol: 'TAGZ5',
    name: 'TAGZ5',
    tokenAddress: '0x4D0425e47Ee2D16b94c036715dfcb52a0cebC4Dc',
    tokenDecimals: 8,
    exchangeAddress: '0x06AF055D439e9E2a0923fD4693b1adcaB16adE44'
  },{
    symbol: 'PMT',
    name: 'DAO PlayMarket 2.0 ',
    tokenAddress: '0xC1322D8aE3B0e2E437e0AE36388D0CFD2C02f1c9',
    tokenDecimals: 4,
    exchangeAddress: '0x58FA689cfbEbbd809AADD7d8e4c1A27743cAe38c'
  },{
    symbol: 'XUSD',
    name: 'BURN USD',
    tokenAddress: '0x41c75975C8aD0F9b9C250278f05c140647958921',
    tokenDecimals: 2,
    exchangeAddress: '0x5Ae1d4aC8Cf88e465E10918173997c0877Be9198'
  },{
    symbol: 'VRG',
    name: 'Victor Ginelli',
    tokenAddress: '0x46C3Aa9817F4CB31028B7ab0023dBcfBC7D1ec8f',
    tokenDecimals: 18,
    exchangeAddress: '0x3747055295b06F5eAefD9012E364e0D4D3212909'
  },{
    symbol: 'BCD',
    name: 'Bitcoin Diamond Token',
    tokenAddress: '0x31126416F0dbC1283DC5295EE6ea04Ff83eE3531',
    tokenDecimals: 0,
    exchangeAddress: '0xDeAC49d7B5DBEa053fB0db31Ce5f06260D61A606'
  },{
    symbol: 'MNE',
    name: 'Minereum',
    tokenAddress: '0x426CA1eA2406c07d75Db9585F22781c096e3d0E0',
    tokenDecimals: 8,
    exchangeAddress: '0x9aa6Fe510be8D233EA288F55DCA6E570f114817B'
  },{
    symbol: 'XUSD',
    name: 'XUSD',
    tokenAddress: '0x9c0cc9a22857b5d7a080A17fcF989583D5b9Ac2d',
    tokenDecimals: 2,
    exchangeAddress: '0x68774CBBaA0df912b0e139014EFd6234253e80De'
  },{
    symbol: 'PDC',
    name: 'PrivateDigitalCoin',
    tokenAddress: '0x3868C9f231bb703eE728FAA4c51A87D395290d75',
    tokenDecimals: 18,
    exchangeAddress: '0xe561Cc830f1Ab1F07F0e90C509c069a1939Ce77A'
  },{
    symbol: 'oETH $200 Put 05/22/20',
    name: 'Opyn ETH Put $200 05/22/20',
    tokenAddress: '0xB036f902FF0E7847a6f2be49045A10cE55A9Aa87',
    tokenDecimals: 7,
    exchangeAddress: '0x1D8D9FF60C8C2a579215CA4a8b44a72D01F15B3e'
  },{
    symbol: 'oETH $180 Put 05/15/20',
    name: 'Opyn ETH Put $180 05/15/20',
    tokenAddress: '0x750AEA5FBCD4986F1390ef4d2B98EcCe690061Fa',
    tokenDecimals: 7,
    exchangeAddress: '0x98686D724cC49DC58Ac5366fA268CCC968B1227d'
  },{
    symbol: 'PCI',
    name: 'Pay Protocol',
    tokenAddress: '0x97B69C3dD9aa00b068021bcbcFe9F7D0F59343aa',
    tokenDecimals: 18,
    exchangeAddress: '0x3eA689a314e1ee051fd082095f9363Ba099cc7Ff'
  },{
    symbol: 'HST',
    name: 'Decision Token',
    tokenAddress: '0x554C20B7c486beeE439277b4540A434566dC4C02',
    tokenDecimals: 18,
    exchangeAddress: '0x0f264f63bb0D1A3F721749Ee82aE5aae67640B45'
  },{
    symbol: 'JDHD-1',
    name: 'Jarett Dunn Hacks Deribit 1',
    tokenAddress: '0x7c60D7BA07cd224a8acE15bbbdd71194c31D045c',
    tokenDecimals: 18,
    exchangeAddress: '0x31bc146Ce5bDa1AfeeFb35D4e6B86D7b8c758ce2'
  },{
    symbol: 'cZAI',
    name: 'Compound Zai',
    tokenAddress: '0xd09B4a4Cc6F092959478C693F3933cD27dA75244',
    tokenDecimals: 0,
    exchangeAddress: '0x3210BD54743E8CA0a26C319586C6CC0E9a18747A'
  },{
    symbol: 'LTT001',
    name: 'Stamford Hwang',
    tokenAddress: '0x8FF157985d8cE9F84310A80d734dAEaf5809133F',
    tokenDecimals: 6,
    exchangeAddress: '0xbE0e1a5B2378914f932E0EE0796B030821A53c72'
  },{
    symbol: 'LEX001',
    name: 'Stamford Hwang',
    tokenAddress: '0x39BEC4e10b67Da4C99B7D06b84A8138e6054Fbd4',
    tokenDecimals: 6,
    exchangeAddress: '0xb7c494a61D119e4f288fB3B9091f20AD0978d400'
  },{
    symbol: '(LIBRA)',
    name: 'Facebook Libra',
    tokenAddress: '0x5BD7392C6567c2E577c5f82F5368fEA09533c18F',
    tokenDecimals: 18,
    exchangeAddress: '0xA7591D61c2710E59596a91Cb17703D6f3A120F61'
  },{
    symbol: 'LXCHAT',
    name: 'LexDAO Legal Engineering Chatroom Ticket',
    tokenAddress: '0xAF0348b2A3818BD6Bc1f12bd2a9f73F1B725448F',
    tokenDecimals: 18,
    exchangeAddress: '0xC7F9E5C6301aFDAA02f9CbB0937e4B233ED53001'
  },{
    symbol: 'METP',
    name: 'MetaPrediction',
    tokenAddress: '0x108D27F9c4b2A98C025c94c76Ca78c6Ce6C7A4eB',
    tokenDecimals: 18,
    exchangeAddress: '0x62Bf35a2f628E75bc74bD3c102DC4B462666f1aF'
  },{
    symbol: 'FLC',
    name: 'Flowchain',
    tokenAddress: '0x32C4ADB9cF57f972bc375129de91C897b4F364F1',
    tokenDecimals: 18,
    exchangeAddress: '0xDF46787fDB5566B64F57D68FfF3C0D2dcd2Bcf83'
  },{
    symbol: 'DREX',
    name: 'DREXDREX',
    tokenAddress: '0xE0A3796FAD195951d13407d63fAEC771Fa4F49D5',
    tokenDecimals: 8,
    exchangeAddress: '0x4C4Cc44c11Fd1B928113587344338878012Bbe61'
  },{
    symbol: 'WZBLT',
    name: 'Wrapped ZEBELLION',
    tokenAddress: '0x7a58da7C0568557eC65cd53c0DBE5B134a022a14',
    tokenDecimals: 18,
    exchangeAddress: '0x8A255Ce2Da2a28ED7C945Da456189036cE44D3F2'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xC7F9E5C6301aFDAA02f9CbB0937e4B233ED53001',
    tokenDecimals: 18,
    exchangeAddress: '0x5B3de2BeC646E2318cAab8260F89A7B65079F28B'
  },{
    symbol: 'KUDOS',
    name: 'Kudos',
    tokenAddress: '0x234F17c83817F1B6157efc63d97A986A493f5363',
    tokenDecimals: 18,
    exchangeAddress: '0x3215D311B34Fcd8F2c7E972dbEA587be02a680a0'
  },{
    symbol: 'AMLT',
    name: 'AMLT',
    tokenAddress: '0xCA0e7269600d353F70b14Ad118A49575455C0f2f',
    tokenDecimals: 18,
    exchangeAddress: '0x7850bd95b22Eb03fB0b0C6F74272A40EFF9579E5'
  },{
    symbol: 'DXD',
    name: 'DXdao',
    tokenAddress: '0xa1d65E8fB6e87b60FECCBc582F7f97804B725521',
    tokenDecimals: 18,
    exchangeAddress: '0x745c1E2417455814C9359366d281b4A650A6AC61'
  },{
    symbol: 'EDI',
    name: 'Freight Trust Network',
    tokenAddress: '0x79C5a1Ae586322A07BfB60be36E1b31CE8C84A1e',
    tokenDecimals: 18,
    exchangeAddress: '0x4e8DB9A28f7FBf2D6F72F1494552fbB8aF37108B'
  },{
    symbol: 'QBIT',
    name: 'Qubitica',
    tokenAddress: '0x1602af2C782cC03F9241992E243290Fccf73Bb13',
    tokenDecimals: 18,
    exchangeAddress: '0x3d064a66F08b9151796b525D52f6350541EA474D'
  },{
    symbol: 'QCC',
    name: 'Q Crypto Community',
    tokenAddress: '0xbf927263DDaDd407F2182aCBcFA943c5546F81D5',
    tokenDecimals: 18,
    exchangeAddress: '0x80D02F4911E9aE364319Fdb55CEE32E44f1Ae90A'
  },{
    symbol: 'val',
    name: 'value-test',
    tokenAddress: '0x7f9a54f864877b70b8fb4FA1A1d7bd145befcdB7',
    tokenDecimals: 18,
    exchangeAddress: '0xF51D7Dc6fB6Dd59A66F0837C60eBC68d98fc1d02'
  },{
    symbol: 'SFSC',
    name: 'SAFE-FS Coins',
    tokenAddress: '0x6204F04dc9a0A7c1A5E9eb8736fC8EA28484fA9c',
    tokenDecimals: 18,
    exchangeAddress: '0xab518ee81E3e0180457fe7E44164271822E938E6'
  },{
    symbol: 'valt',
    name: 'valuetest',
    tokenAddress: '0xe6B7068B4893BE8980961b7a722FC92813931b56',
    tokenDecimals: 18,
    exchangeAddress: '0xdaf5A74EfC673D3F237E41063E448Ab5c37c2E8e'
  },{
    symbol: 'valt2',
    name: 'Value2',
    tokenAddress: '0x519734EC8854B749BA48bE4073dfd71E110ceadb',
    tokenDecimals: 18,
    exchangeAddress: '0x8717fC83Ca24288Ec6f1730a7f574B7FF5E885B2'
  },{
    symbol: 'Byt',
    name: 'Byzbit',
    tokenAddress: '0xb089db4CeBBF0618b295D9DEFC7FEB00f56DA033',
    tokenDecimals: 18,
    exchangeAddress: '0x82086993Ac5E4919559E5Fa14bbCaDC605791E1c'
  },{
    symbol: 'DGF',
    name: 'Daniel Fortuyn',
    tokenAddress: '0xdb9A9Fe6732919A8c7d41a8dFb4c16449D90191a',
    tokenDecimals: 18,
    exchangeAddress: '0xD409f99BD4163490224E05553E82e5953D8694d9'
  },{
    symbol: 'Tecn',
    name: 'Teccoin',
    tokenAddress: '0x7dEe371A788f9BD6c546dF83F0d74fBe37cbf006',
    tokenDecimals: 18,
    exchangeAddress: '0x9EDe20966e67bE8264DB4934CDAA3e674cb33208'
  },{
    symbol: 'BOF',
    name: 'BestOne',
    tokenAddress: '0x5c4E325d2c570443f4ea3Ed5623c58dE221E9475',
    tokenDecimals: 18,
    exchangeAddress: '0x90627d8C56899dDECce5807E2F8Ef216a5B052EB'
  },{
    symbol: 'BYCC',
    name: 'ByteCashCoin',
    tokenAddress: '0x515DEA727d31cb64946c2139D04d91b8781D671a',
    tokenDecimals: 18,
    exchangeAddress: '0x89b58Ce4Fed9759a1FAf96fc50301ac2f3B282ed'
  },{
    symbol: 'INEX',
    name: 'Internet Exchange Token',
    tokenAddress: '0x6a93AE6147ADa96a7459167c4d18e6613eFE2994',
    tokenDecimals: 8,
    exchangeAddress: '0xFFf379891E647647E63802f9992d95a889E637F2'
  },{
    symbol: 'cUSDT',
    name: 'Compound USDT',
    tokenAddress: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
    tokenDecimals: 8,
    exchangeAddress: '0xbCdA6F57329D1f378Afdd8b0e5b156D721cB5A91'
  },{
    symbol: 'really',
    name: 'really',
    tokenAddress: '0x7D1Ae1C74050289AEc70506D17E02048AADCef79',
    tokenDecimals: 18,
    exchangeAddress: '0xF0dfE33c56f87fc155f2EE3ac54E245DB07B1949'
  },{
    symbol: 'NRG',
    name: 'Energis',
    tokenAddress: '0x14121EEe7995FFDF47ED23cfFD0B5da49cbD6EB3',
    tokenDecimals: 18,
    exchangeAddress: '0xfA264608e10fA161c042B9D0332DA45Ab7f5f2af'
  },{
    symbol: 'SKRP',
    name: 'Skraps',
    tokenAddress: '0xfdFE8b7aB6CF1bD1E3d14538Ef40686296C42052',
    tokenDecimals: 18,
    exchangeAddress: '0xCd1c630915E9064bbC0e03AbA5e3424F3C9c1BF0'
  },{
    symbol: 'DREAM',
    name: 'DAO? Trap Card',
    tokenAddress: '0x49BA19f6d571308Bc067A7A4A90Ae66011DaDa8C',
    tokenDecimals: 18,
    exchangeAddress: '0xe322C54D7bE528B00dDd26984Ba3BB506318C0DF'
  },{
    symbol: 'TAPE',
    name: 'BOY Cassette Tape by RAC',
    tokenAddress: '0x9Bfb088C9f311415E3F9B507DA73081c52a49d8c',
    tokenDecimals: 18,
    exchangeAddress: '0xa50d0f016B4820699Eb6Bd90449e8129bBe31d49'
  },{
    symbol: 'PBK',
    name: 'PlasmaBank token',
    tokenAddress: '0x560a20EDdeDDf84217221AeF0d5Ca7d7aE7aE798',
    tokenDecimals: 2,
    exchangeAddress: '0x96cFA71c7c0103b4A3bc8c70972789bf007c03eE'
  },{
    symbol: 'WLT',
    name: 'Wildcards Loyalty Token',
    tokenAddress: '0x773c75c2277eD3e402BDEfd28Ec3b51A3AfbD8a4',
    tokenDecimals: 18,
    exchangeAddress: '0xFbF4d68e5149f4CcaeFad2B4741a06E8440E680c'
  },{
    symbol: 'EPS',
    name: 'EsistemPowerSun',
    tokenAddress: '0xD6AF0E7E66d627E02f7E5241fee2fcc8a3D745bE',
    tokenDecimals: 18,
    exchangeAddress: '0x4b7AB6dDC8AeDBF421588142Dad4387a35577927'
  },{
    symbol: 'ZEY',
    name: 'Zey Station Token',
    tokenAddress: '0x40C1991dcE79eEC9c49a07A6146D58482a608aC4',
    tokenDecimals: 18,
    exchangeAddress: '0x729629ec78155b6e6249D62369A648C285261a5d'
  },{
    symbol: 'WRC',
    name: 'Worldcore',
    tokenAddress: '0x72aDadb447784dd7AB1F472467750fC485e4cb2d',
    tokenDecimals: 6,
    exchangeAddress: '0x9De9013ad309ab9b479F420819335a4548447A09'
  },{
    symbol: 'BPF',
    name: 'BITPIF',
    tokenAddress: '0x5197FBE1a86679FF1360E27862BF88B0c5119BD8',
    tokenDecimals: 18,
    exchangeAddress: '0x80EBe7560DD4CB6e10fDB5f88c7f4Ed157020e22'
  },{
    symbol: 'TEST',
    name: 'Test',
    tokenAddress: '0x697BE1ceDcd3daEEa9d38369bF9e5Bc4A99A1e74',
    tokenDecimals: 18,
    exchangeAddress: '0x1997932b6173D8b4bC11A9D4F493A8dca9e37553'
  },{
    symbol: 'TFB',
    name: 'TrueFeedBack',
    tokenAddress: '0x79cdFa04e3c4EB58C4f49DAE78b322E5b0D38788',
    tokenDecimals: 18,
    exchangeAddress: '0x9ea6378A8Cf3C1BbA2f44De2FB121b51D211AE16'
  },{
    symbol: 'FLEx',
    name: 'FLEx token',
    tokenAddress: '0x6D45640F5D0B75280647f2F37CCD19c1167f833c',
    tokenDecimals: 4,
    exchangeAddress: '0x3d5055E05036e795AE41A81DfaBAAb8aab16bD2d'
  },{
    symbol: 'LXDM',
    name: 'LexDAO Magick',
    tokenAddress: '0x39B62c0Cb59DB1C4D62efBF62bb3c1BfB0cFFdBc',
    tokenDecimals: 18,
    exchangeAddress: '0x84e92aEbf0C6Ad613c702997C65DD6C7F1FD9709'
  },{
    symbol: 'ABST',
    name: 'abitshadow Token',
    tokenAddress: '0xa0B207103F764A920b4AF9e691F5bd956DE14DED',
    tokenDecimals: 8,
    exchangeAddress: '0x9395B9859EAe712ac5E206D9e3f353384C4b5BA2'
  },{
    symbol: 'LXCH',
    name: 'LexDAO Cheese - Not Your Lawyer',
    tokenAddress: '0xF27d4785d7Eb818CA000A843957a1E19a6F95a19',
    tokenDecimals: 6,
    exchangeAddress: '0xd21fE5913C2317B00D26e66d3840B29370113cf2'
  },{
    symbol: 'VAL2',
    name: 'VALUE2',
    tokenAddress: '0x767f7DadAa0398Ae75646A5fa48ce5AE95fdebeF',
    tokenDecimals: 18,
    exchangeAddress: '0x122312c81B20b5e50b0ad1d0E566337Ab05c0678'
  },{
    symbol: 'SDEX',
    name: 'SwitchDex',
    tokenAddress: '0x77678CFD0f2B55152aDC6599DB9F988AB28D72F2',
    tokenDecimals: 18,
    exchangeAddress: '0x56d7bCddE8708803F841312c9E13fA3841Add4E1'
  },{
    symbol: 'MCV01',
    name: 'MCV MetaCoin Investment Claims Token',
    tokenAddress: '0xF364A2f16d3E29059f0dc46563De2CaAAb84311C',
    tokenDecimals: 18,
    exchangeAddress: '0x6DE9932eBb7f55D96DDd1368b0b1435D7140ED77'
  },{
    symbol: '2KEY',
    name: 'TwoKeyEconomy',
    tokenAddress: '0xE48972fCd82a274411c01834e2f031D4377Fa2c0',
    tokenDecimals: 18,
    exchangeAddress: '0x3487D9228Be914dD7ebAABddDA4Ba92832B23aae'
  },{
    symbol: 'SET',
    name: 'SetoCoin',
    tokenAddress: '0xc1a29a42876ff31D6c30341f5CF400dD8e766d91',
    tokenDecimals: 8,
    exchangeAddress: '0x2D24f95866863Bd9c86E7cBbE8BfF01E3697dA7F'
  },{
    symbol: 'UNI-V1',
    name: 'Uniswap V1',
    tokenAddress: '0xa50d0f016B4820699Eb6Bd90449e8129bBe31d49',
    tokenDecimals: 18,
    exchangeAddress: '0xff3a20EAc0d15B51b2bB37D307Fb6c1a0E42C7A0'
  },{
    symbol: 'PYLNT',
    name: 'Pylon Token',
    tokenAddress: '0x7703C35CfFdC5CDa8D27aa3df2F9ba6964544b6e',
    tokenDecimals: 18,
    exchangeAddress: '0x1dD92A820134249ECE4059DD6c41DB8439C53041'
  },{
    symbol: 'Emp',
    name: 'Empower',
    tokenAddress: '0x9aff64aE01B5Fc6D679892895AABB8760471EE2e',
    tokenDecimals: 18,
    exchangeAddress: '0x856418B21022065f700D83823822667D72404707'
  },{
    symbol: 'GOL',
    name: 'GOL',
    tokenAddress: '0x48094EBE2266CB1CBE5D3ec81933784E2E9561d8',
    tokenDecimals: 8,
    exchangeAddress: '0x237c34860Ba0112790e75eF56DDA1295630D90E1'
  },{
    symbol: 'AGS',
    name: 'AGROSUCCOR',
    tokenAddress: '0x857179A98f4bFDBeB022601285437bf5f9F1Aee7',
    tokenDecimals: 18,
    exchangeAddress: '0xAF7D306156bB727861C549D2AAe32173397CeB3c'
  },{
    symbol: 'USDS',
    name: 'USDS',
    tokenAddress: '0xF2c2dE4aca1562450B3E7872b3D5D2D185D3e7dE',
    tokenDecimals: 18,
    exchangeAddress: '0x4CD81292d91e6E183Ade7EC002aB2fbBc69E93Cc'
  },{
    symbol: 'JREX',
    name: 'Jurasaur',
    tokenAddress: '0x638155F4BD8F85d401Da32498D8866eE39A150B8',
    tokenDecimals: 8,
    exchangeAddress: '0x84bcbeFf43d808cf419B0106A2A48259490C11D9'
  },{
    symbol: 'SLVX',
    name: 'eToro Silver',
    tokenAddress: '0x8E4d222dBD4f8F9E7c175e77d6e71715C3dA78E0',
    tokenDecimals: 18,
    exchangeAddress: '0x6f7474856345cFb6Fc06b8BC1a4AE51c11Ac5A5E'
  },{
    symbol: 'SRA',
    name: 'SERA Token',
    tokenAddress: '0x07BA7D3bF57ac6FbAA817Ab698C710c8Bf5A6F08',
    tokenDecimals: 18,
    exchangeAddress: '0x55345FABE3d2D010D7bF3aaB249058B9aE1ffe82'
  },{
    symbol: 'VETH',
    name: 'Vether',
    tokenAddress: '0x31Bb711de2e457066c6281f231fb473FC5c2afd3',
    tokenDecimals: 18,
    exchangeAddress: '0x506D07722744E4A390CD7506a2Ba1A8157E63745'
  },{
    symbol: 'EVG',
    name: 'Evergreen',
    tokenAddress: '0x5eA523Ed1Ccc876b64ffD63130b77d99766ae05e',
    tokenDecimals: 2,
    exchangeAddress: '0x1eF4CaAb35866ABce5d3045476B195678F9F2287'
  },{
    symbol: 'YNEF',
    name: 'Ynef Coin',
    tokenAddress: '0x1DaE0680f6b8059C8945DE6A8a93009e054417b4',
    tokenDecimals: 18,
    exchangeAddress: '0xE7586D474c29F0537C7f51926C6D490350671598'
  },{
    symbol: 'RWRD',
    name: 'Example Rewards Token',
    tokenAddress: '0xc2E105971528da56684C0e01a682f009d261E499',
    tokenDecimals: 18,
    exchangeAddress: '0x7CC5fB92a636a5AD49C3fdaE42bEDD50C4729a2D'
  },{
    symbol: 'TFN',
    name: 'T4 Network',
    tokenAddress: '0xb21378050c493a79970Cae87Ed0dd5653dC67340',
    tokenDecimals: 4,
    exchangeAddress: '0x729402cCbe89D2b36B86EDCb3452888aA6427B17'
  },{
    symbol: 'UPT',
    name: 'Universal Protocol Token',
    tokenAddress: '0x6CA88Cc8D9288f5cAD825053B6A1B179B05c76fC',
    tokenDecimals: 18,
    exchangeAddress: '0x296ac94e7546C8AC1454dB13eaC99222f2F040Eb'
  },{
    symbol: 'AVT',
    name: '',
    tokenAddress: '0x0d88eD6E74bbFD96B831231638b66C05571e824F',
    tokenDecimals: 18,
    exchangeAddress: '0xD0589EE703B0465D240EB36EAFE76227A3473eeA'
  },{
    symbol: 'CUR',
    name: 'CurToken',
    tokenAddress: '0x13339fD07934CD674269726EdF3B5ccEE9DD93de',
    tokenDecimals: 18,
    exchangeAddress: '0x43d577a2A5A815873BF7C654c2678845CAEb579C'
  },{
    symbol: 'PMGT',
    name: 'Perth Mint Gold Token',
    tokenAddress: '0xAFFCDd96531bCd66faED95FC61e443D08F79eFEf',
    tokenDecimals: 5,
    exchangeAddress: '0x48473618dC724180BA284D9D59E7e6D1BD9BCA8F'
  },{
    symbol: 'HLC',
    name: 'HalalChain',
    tokenAddress: '0x58c69ed6cd6887c0225D1FcCEcC055127843c69b',
    tokenDecimals: 9,
    exchangeAddress: '0x4Eaf601e5639F2442666E9eD345fb2F156A43cD7'
  },{
    symbol: 'ESH',
    name: 'Ethershift',
    tokenAddress: '0xDf329603BD378021698f9833cD5205b52F9E370e',
    tokenDecimals: 18,
    exchangeAddress: '0x187f960302485ef56124E5A74f9976076cb00779'
  },{
    symbol: 'VLM',
    name: 'Valireum',
    tokenAddress: '0x3989F36540052668c340a53aaeAcB46D6cF0Dd6C',
    tokenDecimals: 18,
    exchangeAddress: '0xB4e4264437E2A77D4dF6d54256480b4F17D8a2e5'
  }
]
