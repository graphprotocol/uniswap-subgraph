export class ASExchange {
  public tokenAddress: string
  public name: string
  public symbol: string
  public decimals: i32
  public exchangeAddress: string
}

// Tokens are sorted in id order up to 565 (as of now)
// The following changes were made manually:
// 0xeb9951021698b42e4399f9cbb6267aa35f82d59d (LIF) has 18 decimals
// 0xe0b7927c4af23765cb51314a0e0521a9645f0e2a (DGD) has 9 decimals
// 0xbb9bc244d798123fde783fcc1c72d3bb8c189413 (TheDAO) has 16 decimals
// 0xc0a47dfe034b400b47bdad5fecda2621de6c4d95 deleted
// 0x6000eca38b8b5bba64986182fe2a69c57f6b5414 deleted

export let hardcodedExchanges: ASExchange[] = [
  {
    tokenAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    name: 'Maker',
    symbol: 'MKR',
    decimals: 18,
    exchangeAddress: '0x2c4bd064b998838076fa341a83d007fc2fa50957'
  },
  {
    tokenAddress: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
    name: 'OMGToken',
    symbol: 'OMG',
    decimals: 18,
    exchangeAddress: '0xddee242662323a3cff3f9aa139ffa496ac3c73b0'
  },
  {
    tokenAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    name: '0x Protocol Token',
    symbol: 'ZRX',
    decimals: 18,
    exchangeAddress: '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf'
  },
  {
    tokenAddress: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    exchangeAddress: '0x255e60c9d597dcaa66006a904ed36424f7b26286'
  },
  {
    tokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
    name: 'Dai Stablecoin v1.0',
    symbol: 'DAI',
    decimals: 18,
    exchangeAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14'
  },
  {
    tokenAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96',
    name: 'Gnosis Token',
    symbol: 'GNO',
    decimals: 18,
    exchangeAddress: '0xe8e45431b93215566ba923a7e611b7342ea954df'
  },
  {
    tokenAddress: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    name: 'Kyber Network Crystal',
    symbol: 'KNC',
    decimals: 18,
    exchangeAddress: '0x49c4f9bc14884f6210f28342ced592a633801a8b'
  },
  {
    tokenAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
    name: 'ChainLink Token',
    symbol: 'LINK',
    decimals: 18,
    exchangeAddress: '0xf173214c720f58e03e194085b1db28b50acdeead'
  },
  {
    tokenAddress: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
    name: 'LoomToken',
    symbol: 'LOOM',
    decimals: 18,
    exchangeAddress: '0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b'
  },
  {
    tokenAddress: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    name: 'Decentraland MANA',
    symbol: 'MANA',
    decimals: 18,
    exchangeAddress: '0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2'
  },
  {
    tokenAddress: '0x1985365e9f78359a9b6ad760e32412f4a445e862',
    name: 'Reputation',
    symbol: 'REP',
    decimals: 18,
    exchangeAddress: '0x48b04d2a05b6b604d8d5223fd1984f191ded51af'
  },
  {
    tokenAddress: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    name: 'Status Network Token',
    symbol: 'SNT',
    decimals: 18,
    exchangeAddress: '0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd'
  },
  {
    tokenAddress: '0x42d6622dece394b54999fbd73d108123806f6a18',
    name: 'SPANK',
    symbol: 'SPANK',
    decimals: 18,
    exchangeAddress: '0x4e395304655f0796bc3bc63709db72173b9ddf98'
  },
  {
    tokenAddress: '0xfa3e941d1f6b7b10ed84a0c211bfa8aee907965e',
    name: 'HayCoin',
    symbol: 'HAY',
    decimals: 18,
    exchangeAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682'
  },
  {
    tokenAddress: '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0x7ad24a41ce760232ba2885a91f846ea86c9baa41'
  },
  {
    tokenAddress: '0x0ed024d39d55e486573ee32e583bc37eb5a6271f',
    name: 'J Chan Dollar',
    symbol: 'JCD',
    decimals: 18,
    exchangeAddress: '0x657184e418d43a661a91d567182dc3d1a4179ec4'
  },
  {
    tokenAddress: '0x919d0131fa5f77d99fbbbbace50bcb6e62332bf2',
    name: 'BorisCoin',
    symbol: 'BORIS',
    decimals: 18,
    exchangeAddress: '0x4e0e28d426caf318747b8e05c8b0564a580e39a7'
  },
  {
    tokenAddress: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
    name: 'Gemini dollar',
    symbol: 'GUSD',
    decimals: 2,
    exchangeAddress: '0xd883264737ed969d2696ee4b4caf529c2fc2a141'
  },
  {
    tokenAddress: '0x4470bb87d77b963a013db939be332f927f2b992e',
    name: 'AdEx',
    symbol: 'ADX',
    decimals: 4,
    exchangeAddress: '0xb800445dd982c1311523fd465ac44f55093b2b5b'
  },
  {
    tokenAddress: '0x86c8bf8532aa2601151c9dbbf4e4c4804e042571',
    name: 'Simoleon',
    symbol: 'SIM',
    decimals: 2,
    exchangeAddress: '0x174dfb6e6e78c95678580b553eee7f282b28c795'
  },
  {
    tokenAddress: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
    name: 'Nexo',
    symbol: 'NEXO',
    decimals: 18,
    exchangeAddress: '0x069c97dba948175d10af4b2414969e0b88d44669'
  },
  {
    tokenAddress: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374',
    name: 'Veritaseum',
    symbol: 'VERI',
    decimals: 18,
    exchangeAddress: '0x17e5bf07d696eaf0d14caa4b44ff8a1e17b34de3'
  },
  {
    tokenAddress: '0x0abdace70d3790235af448c88547603b945604ea',
    name: 'district0x Network Token',
    symbol: 'DNT',
    decimals: 18,
    exchangeAddress: '0xaa3b3810c8aada6cbd2ce262699903ad7ae6a7ef'
  },
  {
    tokenAddress: '0xb683d83a532e2cb7dfa5275eed3698436371cc9f',
    name: 'BTU Protocol',
    symbol: 'BTU',
    decimals: 18,
    exchangeAddress: '0xea3a62838477082d8f2106c43796d636dc78d8a4'
  },
  {
    tokenAddress: '0x57ab1e02fee23774580c119740129eac7081e9d3',
    name: 'Synth sUSD',
    symbol: 'sUSD',
    decimals: 18,
    exchangeAddress: '0x69f276abd6456152d519d23086031da7c73f91b8'
  },
  {
    tokenAddress: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b',
    name: 'FunFair',
    symbol: 'FUN',
    decimals: 8,
    exchangeAddress: '0x60a87cc7fca7e53867facb79da73181b1bb4238b'
  },
  {
    tokenAddress: '0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190',
    name: 'Dether',
    symbol: 'DTH',
    decimals: 18,
    exchangeAddress: '0xe18256cd23efcdc4f95581e86f61ea1b09afd02a'
  },
  {
    tokenAddress: '0xeb9951021698b42e4399f9cbb6267aa35f82d59d',
    name: '',
    symbol: '',
    decimals: 18,
    exchangeAddress: '0x055bab4bcc17d2ab155fff017fc5e093556c6ad2'
  },
  {
    tokenAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    name: 'Basic Attention Token',
    symbol: 'BAT',
    decimals: 18,
    exchangeAddress: '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914'
  },
  {
    tokenAddress: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
    name: 'Trace Token',
    symbol: 'TRAC',
    decimals: 18,
    exchangeAddress: '0x38577ccec0ceffd178fd3be66e1c6f531bfa410e'
  },
  {
    tokenAddress: '0x6b01c3170ae1efebee1a3159172cb3f7a5ecf9e5',
    name: 'BOOTY',
    symbol: 'BOOTY',
    decimals: 18,
    exchangeAddress: '0xef465915f2d6d8183a7d5ee134a53f00c780d3e9'
  },
  {
    tokenAddress: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
    name: 'Pinakion',
    symbol: 'PNK',
    decimals: 18,
    exchangeAddress: '0xf506828b166de88ca2edb2a98d960abba0d2402a'
  },
  {
    tokenAddress: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
    name: 'Civic',
    symbol: 'CVC',
    decimals: 8,
    exchangeAddress: '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a'
  },
  {
    tokenAddress: '0xfe5f141bf94fe84bc28ded0ab966c16b17490657',
    name: 'LibraToken',
    symbol: 'LBA',
    decimals: 18,
    exchangeAddress: '0xe79fe64771d5351b936eeac6222682c3d878063e'
  },
  {
    tokenAddress: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098',
    name: 'SANtiment network token',
    symbol: 'SAN',
    decimals: 18,
    exchangeAddress: '0x8a8d7ad4b89d91983cd069c58c4aa9f2f4166298'
  },
  {
    tokenAddress: '0x7728dfef5abd468669eb7f9b48a7f70a501ed29d',
    name: 'PRG',
    symbol: 'PRG',
    decimals: 6,
    exchangeAddress: '0x817e391baf312dc5078cd7a98a7a0255ac63ca48'
  },
  {
    tokenAddress: '0x8eb24319393716668d768dcec29356ae9cffe285',
    name: 'SingularityNET Token',
    symbol: 'AGI',
    decimals: 8,
    exchangeAddress: '0xdf02ffeafdb79e564ae9fdac6545c5f4c2178400'
  },
  {
    tokenAddress: '0x5bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3',
    name: 'Hut34 Entropy Token',
    symbol: 'ENTRP',
    decimals: 18,
    exchangeAddress: '0xa1c467dc897a36689dbbadcc212b212b4f526e49'
  },
  {
    tokenAddress: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06',
    name: 'Patientory',
    symbol: 'PTOY',
    decimals: 8,
    exchangeAddress: '0xe8bc0a210aaf86dab4dd600faca5cfe492e2e084'
  },
  {
    tokenAddress: '0x888666ca69e0f178ded6d75b5726cee99a87d698',
    name: 'ICONOMI',
    symbol: 'ICN',
    decimals: 18,
    exchangeAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169'
  },
  {
    tokenAddress: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
    name: 'Numeraire',
    symbol: 'NMR',
    decimals: 18,
    exchangeAddress: '0x2bf5a5ba29e60682fc56b2fcf9ce07bef4f6196f'
  },
  {
    tokenAddress: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa',
    name: 'Cindicator Token',
    symbol: 'CND',
    decimals: 18,
    exchangeAddress: '0x21b8a991a203a440c83450564fdefa3db10a5004'
  },
  {
    tokenAddress: '0x168296bb09e24a88805cb9c33356536b980d3fc5',
    name: 'RHOC',
    symbol: 'RHOC',
    decimals: 8,
    exchangeAddress: '0x394e524b47a3ab3d3327f7ff6629dc378c1494a3'
  },
  {
    tokenAddress: '0x408e41876cccdc0f92210600ef50372656052a38',
    name: 'Republic Token',
    symbol: 'REN',
    decimals: 18,
    exchangeAddress: '0x43892992b0b102459e895b88601bb2c76736942c'
  },
  {
    tokenAddress: '0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd',
    name: 'GRID Token',
    symbol: 'GRID',
    decimals: 12,
    exchangeAddress: '0x4b17685b330307c751b47f33890c8398df4fe407'
  },
  {
    tokenAddress: '0x960b236a07cf122663c4303350609a66a7b288c0',
    name: 'Aragon Network Token',
    symbol: 'ANT',
    decimals: 18,
    exchangeAddress: '0x077d52b047735976dfda76fef74d4d988ac25196'
  },
  {
    tokenAddress: '0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf',
    name: 'LAToken',
    symbol: 'LAToken',
    decimals: 18,
    exchangeAddress: '0x28991ac221054bee3a38ae9ad0fb3d0c3e45d0cf'
  },
  {
    tokenAddress: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1',
    name: 'Melon Token',
    symbol: 'MLN',
    decimals: 18,
    exchangeAddress: '0xaec97872d14ac79e95fff18c169bfd183efc6962'
  },
  {
    tokenAddress: '0x4805f9568bca23bef099c2a317346b42146384a1',
    name: 'Experimental Token',
    symbol: 'e11',
    decimals: 18,
    exchangeAddress: '0x4785cedbd89c818d60988dc5979b029f3900b54b'
  },
  {
    tokenAddress: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
    name: '0xBitcoin Token',
    symbol: '0xBTC',
    decimals: 8,
    exchangeAddress: '0x701564aa6e26816147d4fa211a0779f1b774bb9b'
  },
  {
    tokenAddress: '0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d',
    name: 'KIWI Token',
    symbol: 'KIWI',
    decimals: 8,
    exchangeAddress: '0x380fdc8bb8722915076a09479d1bbc75e69c8be0'
  },
  {
    tokenAddress: '0x4156d3342d5c385a87d264f90653733592000581',
    name: 'Salt',
    symbol: 'SALT',
    decimals: 8,
    exchangeAddress: '0xc0c59cde851bfcbdddd3377ec10ea54a18efb937'
  },
  {
    tokenAddress: '0x327682779bab2bf4d1337e8974ab9de8275a7ca8',
    name: 'Blockport Token',
    symbol: 'BPT',
    decimals: 18,
    exchangeAddress: '0xb2744df7bfbb4802f44fd1b1fd9012502d4af704'
  },
  {
    tokenAddress: '0x58b6a8a3302369daec383334672404ee733ab239',
    name: 'Livepeer Token',
    symbol: 'LPT',
    decimals: 18,
    exchangeAddress: '0xc4a1c45d5546029fd57128483ae65b56124bfa6a'
  },
  {
    tokenAddress: '0xd2d6158683aee4cc838067727209a0aaf4359de3',
    name: 'Bounty0x Token',
    symbol: 'BNTY',
    decimals: 18,
    exchangeAddress: '0xd1f3e9b413f5c9fd56f044699c64ff710e7e5a9a'
  },
  {
    tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    name: 'Wrapped Ether',
    symbol: 'WETH',
    decimals: 18,
    exchangeAddress: '0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb'
  },
  {
    tokenAddress: '0x7b22938ca841aa392c93dbb7f4c42178e3d65e88',
    name: 'AstroTokens',
    symbol: 'ASTRO',
    decimals: 4,
    exchangeAddress: '0xbd4479c98dc21563ba822c3c206d8339698e2dd4'
  },
  {
    tokenAddress: '0xe34e1944e776f39b9252790a0527ebda647ae668',
    name: 'Helbiz Token',
    symbol: 'HBZ',
    decimals: 18,
    exchangeAddress: '0xd1a8c5ba35752e4b62c71c795a3f6481faa4d36e'
  },
  {
    tokenAddress: '0xecf3958d0f82291ca1ff6c9bda8eb3c50ee41ce3',
    name: 'Humanity',
    symbol: 'HUM',
    decimals: 18,
    exchangeAddress: '0x7d31fc38ddd7d6907f820f4268f1d8d5d5797826'
  },
  {
    tokenAddress: '0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27',
    name: 'Zilliqa',
    symbol: 'ZIL',
    decimals: 12,
    exchangeAddress: '0x7dc095a5cf7d6208cc680fa9866f80a53911041a'
  },
  {
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    name: 'USD//C',
    symbol: 'USDC',
    decimals: 6,
    exchangeAddress: '0x97dec872013f6b5fb443861090ad931542878126'
  },
  {
    tokenAddress: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
    name: 'Enigma',
    symbol: 'ENG',
    decimals: 8,
    exchangeAddress: '0x884715e2dce8757c9ee19739c366b2c7c65f05b1'
  },
  {
    tokenAddress: '0x87f56ee356b434187105b40f96b230f5283c0ab4',
    name: 'PITCH',
    symbol: 'PITCH',
    decimals: 9,
    exchangeAddress: '0x329c9642efe33a62161dda6b4eb3821965191441'
  },
  {
    tokenAddress: '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308',
    name: 'CoinUs',
    symbol: 'CNUS',
    decimals: 18,
    exchangeAddress: '0x30b16fc2b530dbf991e1b15ed953cc4585f0b27c'
  },
  {
    tokenAddress: '0xa6a7fce4affe059548fc39ebbc74555952a6fb0d',
    name: 'MoriaToken',
    symbol: 'MOR',
    decimals: 18,
    exchangeAddress: '0xbe478403ac906d329fa8ebef1d3f9e0a48067d57'
  },
  {
    tokenAddress: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
    name: 'Request Token',
    symbol: 'REQ',
    decimals: 18,
    exchangeAddress: '0xbcdf538581f7167ec8228ec2c9b1cfc2f74788c7'
  },
  {
    tokenAddress: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
    name: '',
    symbol: '',
    decimals: 9,
    exchangeAddress: '0xd55c1ca9f5992a2e5e379dce49abf24294abe055'
  },
  {
    tokenAddress: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
    name: 'Monolith TKN',
    symbol: 'TKN',
    decimals: 8,
    exchangeAddress: '0xb6cfbf322db47d39331e306005dc7e5e6549942b'
  },
  {
    tokenAddress: '0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf',
    name: 'Digix Gold Token',
    symbol: 'DGX',
    decimals: 9,
    exchangeAddress: '0xb92de8b30584392af27726d5ce04ef3c4e5c9924'
  },
  {
    tokenAddress: '0x006bea43baa3f7a6f765f14f10a1a1b08334ef45',
    name: 'Stox',
    symbol: 'STX',
    decimals: 18,
    exchangeAddress: '0x2afc64cd5e64a32a363ea84b8cad1ce5239a1a3d'
  },
  {
    tokenAddress: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b',
    name: 'Trustcoin',
    symbol: 'TRST',
    decimals: 6,
    exchangeAddress: '0x95e4649f5209dd292caf1f087b8f1db3be24927f'
  },
  {
    tokenAddress: '0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a',
    name: 'Swarm Fund Token',
    symbol: 'SWM',
    decimals: 18,
    exchangeAddress: '0xc3c028721f854bc75967cbe432fb0e221908baa1'
  },
  {
    tokenAddress: '0xa74476443119a942de498590fe1f2454d7d4ac0d',
    name: 'Golem Network Token',
    symbol: 'GNT',
    decimals: 18,
    exchangeAddress: '0x7d839eb463b121790c99e0f017c21f0189dcc167'
  },
  {
    tokenAddress: '0xf3be20da25b31bd6ee4ce4496985b2064304c125',
    name: 'MYUBI Token',
    symbol: 'MYU',
    decimals: 18,
    exchangeAddress: '0xb684f9b231accdef385f06038395e27a4e3aa86b'
  },
  {
    tokenAddress: '0xd29f0b5b3f50b07fe9a9511f7d86f4f4bac3f8c4',
    name: 'Liquidity.Network Token',
    symbol: 'LQD',
    decimals: 18,
    exchangeAddress: '0xe3406e7d0155e0a83236ec25d34cd3d903036669'
  },
  {
    tokenAddress: '0x09617f6fd6cf8a71278ec86e23bbab29c04353a7',
    name: 'Unblocked Ledger Token',
    symbol: 'ULT',
    decimals: 18,
    exchangeAddress: '0x28d9353611c5a0d5a026a648c05e5d6523e41cbf'
  },
  {
    tokenAddress: '0x49aaa160506f7e07e6c3f6cd6316b6866025cdcb',
    name: 'Lira Cash',
    symbol: 'LIRA',
    decimals: 8,
    exchangeAddress: '0xb580a2b495917b8577d9a612be068f591e8c20f9'
  },
  {
    tokenAddress: '0x4946fcea7c692606e8908002e55a582af44ac121',
    name: 'FOAM Token',
    symbol: 'FOAM',
    decimals: 18,
    exchangeAddress: '0xf79cb3bea83bd502737586a6e8b133c378fd1ff2'
  },
  {
    tokenAddress: '0xb4272071ecadd69d933adcd19ca99fe80664fc08',
    name: 'CryptoFranc',
    symbol: 'XCHF',
    decimals: 18,
    exchangeAddress: '0x8de0d002dc83478f479dc31f76cb0a8aa7ccea17'
  },
  {
    tokenAddress: '0x539efe69bcdd21a83efd9122571a64cc25e0282b',
    name: 'Ethereum Blue',
    symbol: 'BLUE',
    decimals: 8,
    exchangeAddress: '0x7eb81c7a0b322d31c11064105e14dce6e852e8c1'
  },
  {
    tokenAddress: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607',
    name: 'Swarm City Token',
    symbol: 'SWT',
    decimals: 18,
    exchangeAddress: '0x755160062e3e09d34af0a00ff8cab8500e81e0d7'
  },
  {
    tokenAddress: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6',
    name: 'Ripio Credit Network Token',
    symbol: 'RCN',
    decimals: 18,
    exchangeAddress: '0xd91ff16ef92568fc27f466c3c5613e43313ab1dc'
  },
  {
    tokenAddress: '0x6758b7d441a9739b98552b373703d8d3d14f9e62',
    name: 'POA ERC20 on Foundation',
    symbol: 'POA20',
    decimals: 18,
    exchangeAddress: '0xa2e6b3ef205feaee475937c4883b24e6eb717eef'
  },
  {
    tokenAddress: '0x687bfc3e73f6af55f0ccca8450114d107e781a0e',
    name: 'QChi',
    symbol: 'QCH',
    decimals: 18,
    exchangeAddress: '0x755899f0540c3548b99e68c59adb0f15d2695188'
  },
  {
    tokenAddress: '0x4b4a70cae3f7c84e36ce9aa19abc98f85db7f058',
    name: 'Financial Aid Coin',
    symbol: 'FAC',
    decimals: 7,
    exchangeAddress: '0x32a29c4269dee1a9e87eb75d66da71591a7aee96'
  },
  {
    tokenAddress: '0xe503a034a8c288dfa9583c43691a7b8233e27013',
    name: 'AshleighCoin',
    symbol: 'SCHAP',
    decimals: 18,
    exchangeAddress: '0xd202ee9690e3240aff1631d98c99717a2265fa64'
  },
  {
    tokenAddress: '0x3638c9e50437f00ae53a649697f288ba68888cc1',
    name: 'AshleighCoin',
    symbol: 'SCHAP',
    decimals: 18,
    exchangeAddress: '0xa0513d82f17c491dc6ab34efd89dc372bb180378'
  },
  {
    tokenAddress: '0x26e75307fc0c021472feb8f727839531f112f317',
    name: 'Crypto20',
    symbol: 'C20',
    decimals: 18,
    exchangeAddress: '0xf7b5a4b934658025390ff69db302bc7f2ac4a542'
  },
  {
    tokenAddress: '0x9709907cb2cf9e16df841f7b145b78c230d8205e',
    name: 'Proof of work',
    symbol: 'POW',
    decimals: 18,
    exchangeAddress: '0x6fca96a679490ed8a80c7344799f1b090fd4c94d'
  },
  {
    tokenAddress: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
    name: '',
    symbol: '',
    decimals: 16,
    exchangeAddress: '0xc7c60e9419466939e968db2a88fe64ec41908bb4'
  },
  {
    tokenAddress: '0x949bed886c739f1a3273629b3320db0c5024c719',
    name: 'AMIS',
    symbol: 'AMIS',
    decimals: 9,
    exchangeAddress: '0x164c93580839f40609ce0250dd4c98a25da175de'
  },
  {
    tokenAddress: '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5',
    name: 'Kin',
    symbol: 'KIN',
    decimals: 18,
    exchangeAddress: '0xb7520a5f8c832c573d6bd0df955fc5c9b72400f7'
  },
  {
    tokenAddress: '0x8dd5fbce2f6a956c3022ba3663759011dd51e73e',
    name: 'TrueUSD',
    symbol: 'TUSD',
    decimals: 18,
    exchangeAddress: '0x4f30e682d0541eac91748bd38a648d759261b8f3'
  },
  {
    tokenAddress: '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78',
    name: '0chain',
    symbol: 'ZCN',
    decimals: 10,
    exchangeAddress: '0x1c116d67e0bf0cf5cb0ad5a74a041d26e89271e7'
  },
  {
    tokenAddress: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
    name: 'CRO',
    symbol: 'CRO',
    decimals: 8,
    exchangeAddress: '0x2135d193bf81abbead93906166f2be32b2492c04'
  },
  {
    tokenAddress: '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d',
    name: 'Monaco',
    symbol: 'MCO',
    decimals: 8,
    exchangeAddress: '0xedc485266aa0ebe9ccbfc1f255bb5ffea1f9e3cc'
  },
  {
    tokenAddress: '0x74436ae1db59c62bbb3de88d268f7e058dce6d50',
    name: 'GuangChangBi',
    symbol: 'GCB',
    decimals: 18,
    exchangeAddress: '0x62ccb0577aa63b8d72449b9fd13b3cdbcf3787d6'
  },
  {
    tokenAddress: '0x8713d26637cf49e1b6b4a7ce57106aabc9325343',
    name: 'CNN Token',
    symbol: 'CNN',
    decimals: 18,
    exchangeAddress: '0xe31a245102fc1ae72f80c6969f6475e85c897bbe'
  },
  {
    tokenAddress: '0x47bc01597798dcd7506dcca36ac4302fc93a8cfb',
    name: 'Crowd Machine Compute Token',
    symbol: 'CMCT',
    decimals: 8,
    exchangeAddress: '0x53e31a941b76ef1b486e86aa39bcd5ae56829870'
  },
  {
    tokenAddress: '0xf263292e14d9d8ecd55b58dad1f1df825a874b7c',
    name: 'EduCoin',
    symbol: 'EDU',
    decimals: 18,
    exchangeAddress: '0xab2da28aa5803c8da0f6603e91e16dab3ba542d2'
  },
  {
    tokenAddress: '0x0aef06dcccc531e581f0440059e6ffcc206039ee',
    name: 'Intelligent Trading Technologies',
    symbol: 'ITT',
    decimals: 8,
    exchangeAddress: '0x20149f1672175c7118bdbf966bfb6a02bf733810'
  },
  {
    tokenAddress: '0x3597bfd533a99c9aa083587b074434e61eb0a258',
    name: 'DENT',
    symbol: 'DENT',
    decimals: 8,
    exchangeAddress: '0x9709ef0958b831865a97682d9ec08f897fe3b56f'
  },
  {
    tokenAddress: '0x737fa0372c8d001904ae6acaf0552d4015f9c947',
    name: 'MEDIBIT',
    symbol: 'MEDIBIT',
    decimals: 18,
    exchangeAddress: '0x68326300df49ec6387e75690857424c2ae111750'
  },
  {
    tokenAddress: '0xad22f63404f7305e4713ccbd4f296f34770513f4',
    name: 'Atomic Wallet Token',
    symbol: 'AWC',
    decimals: 8,
    exchangeAddress: '0x8aa3cc2bf30cb47f290fd4e9b660bc3a685b9b3e'
  },
  {
    tokenAddress: '0x02c4c78c462e32cca4a90bc499bf411fb7bc6afb',
    name: 'InvestDigital Token',
    symbol: 'IDT',
    decimals: 18,
    exchangeAddress: '0x3fbc2275de71427aaebbe0e5e6bc13fe8f27fa9e'
  },
  {
    tokenAddress: '0xa66daa57432024023db65477ba87d4e7f5f95213',
    name: 'HuobiPoolToken',
    symbol: 'HPT',
    decimals: 18,
    exchangeAddress: '0xfe3f05c7da9fe53591fab3f920798a67a95747ed'
  },
  {
    tokenAddress: '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
    name: 'ERC20',
    symbol: 'ERC20',
    decimals: 18,
    exchangeAddress: '0xf50bac10faf905e95ffdc9f35b75ee67117dad2a'
  },
  {
    tokenAddress: '0xa0872ee815b8dd0f6937386fd77134720d953581',
    name: 'EduCoinToken',
    symbol: 'EDU',
    decimals: 18,
    exchangeAddress: '0x0045d5d2cac7688f7fc36313e69fb5350958936c'
  },
  {
    tokenAddress: '0xcd7d0042fdb92f3dde312aa61af084953aa914ee',
    name: 'Crypthealth',
    symbol: 'CRPHT',
    decimals: 18,
    exchangeAddress: '0xe1e005d82922303ca9fb5cb6426c2eb07f8e5c84'
  },
  {
    tokenAddress: '0x2e071d2966aa7d8decb1005885ba1977d6038a65',
    name: 'DICE',
    symbol: 'ROL',
    decimals: 16,
    exchangeAddress: '0xb7836492f5850d9b61d6b71c73697c5b9676208d'
  },
  {
    tokenAddress: '0xb97048628db6b661d4c2aa833e95dbe1a905b280',
    name: 'TenX Pay Token',
    symbol: 'PAY',
    decimals: 18,
    exchangeAddress: '0x6f1c46e91ce29d430e31205ead148b0bee46b9fc'
  },
  {
    tokenAddress: '0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3',
    name: 'PCHAIN',
    symbol: 'PAI',
    decimals: 18,
    exchangeAddress: '0x7174ef6b9cb528e954508264a9912da905977422'
  },
  {
    tokenAddress: '0xc011a72400e58ecd99ee497cf89e3775d4bd732f',
    name: 'Synthetix Network Token',
    symbol: 'SNX',
    decimals: 18,
    exchangeAddress: '0x23228ec35e810569495bd0aa4d56e9fad759bb29'
  },
  {
    tokenAddress: '0xdcef0710b10ad66bc2194b412fb37c65d4d0a965',
    name: 'lothlor',
    symbol: 'LOT',
    decimals: 18,
    exchangeAddress: '0xe69ea0f00b6d399a11030eb6d79e54c486c0e1d1'
  },
  {
    tokenAddress: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
    name: 'PAX',
    symbol: 'PAX',
    decimals: 18,
    exchangeAddress: '0xc040d51b07aea5d94a89bc21e8078b77366fc6c7'
  },
  {
    tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    decimals: 8,
    exchangeAddress: '0x4d2f5cfba55ae412221182d8475bc85799a5644b'
  },
  {
    tokenAddress: '0xb5ce43922eb8e73bd2b1fcec33c2dba43cce7e4c',
    name: 'ICO GAZUA TOKEN',
    symbol: 'DKC',
    decimals: 18,
    exchangeAddress: '0x5634de511580536296c6ea2eb8ebec271ca76bc2'
  },
  {
    tokenAddress: '0x7365877678c744b435ed03b1cac12ab407cba13a',
    name: 'ICO GAZUA TOKEN',
    symbol: 'DKC',
    decimals: 18,
    exchangeAddress: '0xc3b03664126f2f192ec658e1c62798c9ebd0ff08'
  },
  {
    tokenAddress: '0x6251583e7d997df3604bc73b9779196e94a090ce',
    name: 'Hercules',
    symbol: 'HERC',
    decimals: 18,
    exchangeAddress: '0x059ad96e38f027ccd127567dc09b164762bcd695'
  },
  {
    tokenAddress: '0x846c66cf71c43f80403b51fe3906b3599d63336f',
    name: 'PumaPay',
    symbol: 'PMA',
    decimals: 18,
    exchangeAddress: '0xcc36e05eeffac3eb61b696d0bb328f2b08389fb5'
  },
  {
    tokenAddress: '0x84f7c44b6fed1080f647e354d552595be2cc602f',
    name: 'Bigbom',
    symbol: 'BBO',
    decimals: 18,
    exchangeAddress: '0x3c3351e44d32b36bf2af97de6f40b548b00cf654'
  },
  {
    tokenAddress: '0x7b94a1281db0335c9efd68aca5c98b494d775c70',
    name: 'Path Network Token',
    symbol: 'PATH',
    decimals: 18,
    exchangeAddress: '0x95efaafe52e89992bfd4f33c96ad971fccdc31f6'
  },
  {
    tokenAddress: '0x0cf0ee63788a0849fe5297f3407f701e122cc023',
    name: 'Streamr DATAcoin',
    symbol: 'DATA',
    decimals: 18,
    exchangeAddress: '0x4f0d6e2179938828cff93da40a8ba1df7519ca8c'
  },
  {
    tokenAddress: '0xb4efd85c19999d84251304bda99e90b92300bd93',
    name: 'Rocket Pool',
    symbol: 'RPL',
    decimals: 18,
    exchangeAddress: '0x3fb2f18065926ddb33e7571475c509541d15da0e'
  },
  {
    tokenAddress: '0xea097a2b1db00627b2fa17460ad260c016016977',
    name: 'Upfiring',
    symbol: 'UFR',
    decimals: 18,
    exchangeAddress: '0x2263fd7c62914ab8ec2b5e7b00bc8371a6c0d221'
  },
  {
    tokenAddress: '0x607f4c5bb672230e8672085532f7e901544a7375',
    name: 'iEx.ec Network Token',
    symbol: 'RLC',
    decimals: 9,
    exchangeAddress: '0xa825cae02b310e9901b4776806ce25db520c8642'
  },
  {
    tokenAddress: '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0x601c32e0580d3aef9437db52d09f5a5d7e60ec22'
  },
  {
    tokenAddress: '0x94d6b4fb35fb08cb34aa716ab40049ec88002079',
    name: 'Cryptonex (CNX) - Global Blockchain Acquiring',
    symbol: 'CNX',
    decimals: 8,
    exchangeAddress: '0xbb7cf8a9d6b2aa7d98fb0bf3548a589a68ddb774'
  },
  {
    tokenAddress: '0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0',
    name: 'CanYaCoin',
    symbol: 'CAN',
    decimals: 6,
    exchangeAddress: '0x066198694b1db74d67007d19a7c4f2fc3a061075'
  },
  {
    tokenAddress: '0x23ccc43365d9dd3882eab88f43d515208f832430',
    name: 'MidasProtocol',
    symbol: 'MAS',
    decimals: 18,
    exchangeAddress: '0xe2f548a3b898eca923bd61919f2635b071a7f95e'
  },
  {
    tokenAddress: '0x23d80c4ee8fb55d4183dd9329296e176dc7464e1',
    name: 'Donut',
    symbol: 'DONUT',
    decimals: 18,
    exchangeAddress: '0xed9d5aa6124a3310b80a2468c67763627653887d'
  },
  {
    tokenAddress: '0x4dadf81edf74e9b1a9ad1f364d51a176be48f0ac',
    name: 'KryptoHub',
    symbol: 'KRH',
    decimals: 18,
    exchangeAddress: '0x08850bd3ce3a8f6b64d724c3dabdbf6f4f8561fc'
  },
  {
    tokenAddress: '0x42237af8b1b3b2063d8377c5de8a4549e7b09ac5',
    name: 'Bee Token',
    symbol: 'BEE',
    decimals: 18,
    exchangeAddress: '0x356435d47e8f36d5102719704747afb9ddd36747'
  },
  {
    tokenAddress: '0x4d8fc1453a0f359e99c9675954e656d80d996fbf',
    name: 'Bee Token',
    symbol: 'BEE',
    decimals: 18,
    exchangeAddress: '0xe9078a97eef2bb502a9f792169f9c03626649248'
  },
  {
    tokenAddress: '0x824c0659f6940604506aa8fa829d13fde17fb900',
    name: 'BOOTY',
    symbol: 'BOOTY',
    decimals: 18,
    exchangeAddress: '0x5a67d8ea5c9bf381fe0da2862cec1ec90a5ca329'
  },
  {
    tokenAddress: '0x236149288602c07b84387d0d75784d73f133142b',
    name: '0xchan ICO',
    symbol: 'ZCI',
    decimals: 18,
    exchangeAddress: '0xcfcc608f03c0cee86589e11224f24779212f0fe5'
  },
  {
    tokenAddress: '0x4cf488387f035ff08c371515562cba712f9015d4',
    name: 'WePower Token',
    symbol: 'WPR',
    decimals: 18,
    exchangeAddress: '0x72208a7d8c11cb28c8e6d32e1a070015786c0823'
  },
  {
    tokenAddress: '0x95daaab98046846bf4b2853e23cba236fa394a31',
    name: 'EtheremonToken',
    symbol: 'EMONT',
    decimals: 8,
    exchangeAddress: '0x2995b7f65cbc1b0ae8095eae314246508c49182a'
  },
  {
    tokenAddress: '0xe477292f1b3268687a29376116b0ed27a9c76170',
    name: 'Herocoin',
    symbol: 'PLAY',
    decimals: 18,
    exchangeAddress: '0xf43b2329130cfd87b322e49b96681e09f1ef172f'
  },
  {
    tokenAddress: '0x439ce375e3ee4dc203d71958beca3c0f417d65cb',
    name: 'BOI Token',
    symbol: 'BOI',
    decimals: 18,
    exchangeAddress: '0x262275a4989c96cc6ecde77eb2dda6e13d508c4e'
  },
  {
    tokenAddress: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
    name: 'HoloToken',
    symbol: 'HOT',
    decimals: 18,
    exchangeAddress: '0xd4777e164c6c683e10593e08760b803d58529a8e'
  },
  {
    tokenAddress: '0x78a73b6cbc5d183ce56e786f6e905cadec63547b',
    name: 'Fabric Token',
    symbol: 'FT',
    decimals: 18,
    exchangeAddress: '0xf5bb20e73c59e0f643ae4bcd89d761ebdec83b73'
  },
  {
    tokenAddress: '0xb9625381f086e7b8512e4825f6af1117e9c84d43',
    name: 'Magnolia Token',
    symbol: 'MGN',
    decimals: 18,
    exchangeAddress: '0x8809c63af18ec760547426a5c3e122e0a3efbf27'
  },
  {
    tokenAddress: '0xae31b85bfe62747d0836b82608b4830361a3d37a',
    name: 'Aergo',
    symbol: 'AERGO',
    decimals: 18,
    exchangeAddress: '0x27f99de8a71f09e9e567050192ce3005f0dcd0b3'
  },
  {
    tokenAddress: '0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037',
    name: 'SENTinel',
    symbol: 'SENT',
    decimals: 8,
    exchangeAddress: '0x0b5ce6f7cbe0627aa8ad2e7e69ed554c0fe79162'
  },
  {
    tokenAddress: '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',
    name: 'Raiden Token',
    symbol: 'RDN',
    decimals: 18,
    exchangeAddress: '0x7d03cecb36820b4666f45e1b4ca2538724db271c'
  },
  {
    tokenAddress: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    name: 'Bancor Network Token',
    symbol: 'BNT',
    decimals: 18,
    exchangeAddress: '0x87d80dbd37e551f58680b4217b23af6a752da83f'
  },
  {
    tokenAddress: '0xeac034b66aa7538a551a5fcec85e37592233c109',
    name: 'GBPP',
    symbol: 'GBPP',
    decimals: 16,
    exchangeAddress: '0xf6a0e98be0153e64b34693ba62c10009c697c95a'
  },
  {
    tokenAddress: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
    name: 'Fantom Token',
    symbol: 'FTM',
    decimals: 18,
    exchangeAddress: '0x060a0d4539623b6aa28d9fc39b9d6622ad495f41'
  },
  {
    tokenAddress: '0x4a220e6096b25eadb88358cb44068a3248254675',
    name: 'Quant',
    symbol: 'QNT',
    decimals: 18,
    exchangeAddress: '0xc7eb739e2651484daa1717433de1736a6529cfcc'
  },
  {
    tokenAddress: '0x69c4bb240cf05d51eeab6985bab35527d04a8c64',
    name: 'OPEN',
    symbol: 'OPEN',
    decimals: 8,
    exchangeAddress: '0x9801d0e88222e9204025117bada94728885d1a28'
  },
  {
    tokenAddress: '0xf8e386eda857484f5a12e4b5daa9984e06e73705',
    name: 'Indorse Token',
    symbol: 'IND',
    decimals: 18,
    exchangeAddress: '0x57c6e18ee62fc660575db273ffaab02436aad222'
  },
  {
    tokenAddress: '0x3883f5e181fccaf8410fa61e12b59bad963fb645',
    name: 'Theta Token',
    symbol: 'THETA',
    decimals: 18,
    exchangeAddress: '0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab'
  },
  {
    tokenAddress: '0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca',
    name: 'Simple Token',
    symbol: 'ST',
    decimals: 18,
    exchangeAddress: '0x700520b1e2ccc5bf5fa89a5f7b8fd9beba3f04b0'
  },
  {
    tokenAddress: '0xd49ff13661451313ca1553fd6954bd1d9b6e02b9',
    name: 'ElectrifyAsia',
    symbol: 'ELEC',
    decimals: 18,
    exchangeAddress: '0x5d40522c20326f2ebcec2d371f250e352e3bed27'
  },
  {
    tokenAddress: '0xd9a8cfe21c232d485065cb62a96866799d4645f7',
    name: 'FingerPrint',
    symbol: 'FGP',
    decimals: 18,
    exchangeAddress: '0xccd5c9f160379510670f9acd73779dce7e6226b2'
  },
  {
    tokenAddress: '0x471daee6e481b2ab7d2f2f64b8f9b083daae29da',
    name: 'LORDLESS HOPS',
    symbol: 'HOPS',
    decimals: 18,
    exchangeAddress: '0xe0cce4518ea70d98231c47e5b977ba90cfcec615'
  },
  {
    tokenAddress: '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',
    name: 'Mainframe Token',
    symbol: 'MFT',
    decimals: 18,
    exchangeAddress: '0x09f448c70c99124024cd9e8dcae6c2f51c0896db'
  },
  {
    tokenAddress: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
    name: 'DAOstack',
    symbol: 'GEN',
    decimals: 18,
    exchangeAddress: '0x26cc0eab6cb650b0db4d0d0da8cb5bf69f4ad692'
  },
  {
    tokenAddress: '0x8d80de8a78198396329dfa769ad54d24bf90e7aa',
    name: 'Nami ICO',
    symbol: 'NAC',
    decimals: 18,
    exchangeAddress: '0xaa9c9308bb6ef318bab918d1e4aebf284b02b680'
  },
  {
    tokenAddress: '0x108c05cac356d93b351375434101cfd3e14f7e44',
    name: 'Token of Szczepan Bentyn',
    symbol: 'BEN',
    decimals: 4,
    exchangeAddress: '0x104f5ac4fdf92fd4668a08ac2e305b5bcf3de215'
  },
  {
    tokenAddress: '0x7c0f856ddb93dfb957eac4513c6a5249c395cae5',
    name: 'Easily Echangeable Token',
    symbol: 'EET',
    decimals: 18,
    exchangeAddress: '0xe4f984870929bb4189ab43def9fc2f339244765e'
  },
  {
    tokenAddress: '0xc994a2deb02543db1f48688438b9903c4b305ce3',
    name: 'Augmint Euro',
    symbol: 'AEUR',
    decimals: 2,
    exchangeAddress: '0xd4a6ea5eabfd4048640724f62713ffb1e6292271'
  },
  {
    tokenAddress: '0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9',
    name: 'LALA',
    symbol: 'LALA',
    decimals: 18,
    exchangeAddress: '0x6886f9dcbdad3cb8c6684f2fe78de5318c177068'
  },
  {
    tokenAddress: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
    name: 'Melon Token',
    symbol: 'MLN',
    decimals: 18,
    exchangeAddress: '0xa931f4eb165ac307fd7431b5ec6eadde53e14b0c'
  },
  {
    tokenAddress: '0xe05d803fa0c5832fa2262465290abb25d6c2bfa3',
    name: 'Synth sXAU',
    symbol: 'sXAU',
    decimals: 18,
    exchangeAddress: '0xaf294be0577dc703bd7f5b96d34bc9cb110f1e2b'
  },
  {
    tokenAddress: '0xd9e5a009ec07de76616d7361ed713ef434d71325',
    name: 'Synth sJPY',
    symbol: 'sJPY',
    decimals: 18,
    exchangeAddress: '0x39b0f27c771ad4236422af5ddc600711eefd93a3'
  },
  {
    tokenAddress: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
    name: 'Enjin Coin',
    symbol: 'ENJ',
    decimals: 18,
    exchangeAddress: '0xb99a23b1a4585fc56d0ec3b76528c27cad427473'
  },
  {
    tokenAddress: '0xf5b403abd806eff15b339909943e2c22ecbac54c',
    name: 'Sai',
    symbol: 'SAI',
    decimals: 18,
    exchangeAddress: '0xa809ef80c0abf701bd1b3b15749aa0a4179ec034'
  },
  {
    tokenAddress: '0xff4f56c14b8b59f7d766988a0e0c582e46b7f8ab',
    name: 'MoneyFold Pound Sterling',
    symbol: 'GBP',
    decimals: 2,
    exchangeAddress: '0x23c3041a18a528a57e26623259e5caa9fb160665'
  },
  {
    tokenAddress: '0x8e3aeb75392ca824d55479cae07f7f0b765743dd',
    name: 'MoneyFold Euro',
    symbol: 'EUR',
    decimals: 2,
    exchangeAddress: '0x526353fbb4a37eddcebf63f96796a078d908f568'
  },
  {
    tokenAddress: '0x2d184014b5658c453443aa87c8e9c4d57285620b',
    name: 'JSE Token',
    symbol: 'JSE',
    decimals: 18,
    exchangeAddress: '0xa248a46b97204b6f4d5b05ba824fbea46390d978'
  },
  {
    tokenAddress: '0x5e6364d4534f780ae053b93b45c8b8840e683eb7',
    name: 'NOTES',
    symbol: 'NOTES',
    decimals: 18,
    exchangeAddress: '0x9b7036f677a6e4832e9983efa0ce384130248398'
  },
  {
    tokenAddress: '0xf433089366899d83a9f26a773d59ec7ecf30355e',
    name: 'Metal',
    symbol: 'MTL',
    decimals: 8,
    exchangeAddress: '0xc5d192f702cc7ce84355df9d41af14bde5024cc9'
  },
  {
    tokenAddress: '0x056017c55ae7ae32d12aef7c679df83a85ca75ff',
    name: 'Project Wyvern Token',
    symbol: 'WYV',
    decimals: 18,
    exchangeAddress: '0x77e885fbc67b7c6ea2b889c96bbd78f9e647463b'
  },
  {
    tokenAddress: '0x76a6baa20598b6d203d3eae6cc87e326bcb60e43',
    name: 'Law Diamond Token',
    symbol: 'LDT',
    decimals: 18,
    exchangeAddress: '0xcbfda0aa2e471c02a39e6cec9b7f5cdfd91d83c6'
  },
  {
    tokenAddress: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
    name: 'Bloom Token',
    symbol: 'BLT',
    decimals: 18,
    exchangeAddress: '0x0e6a53b13688018a3df8c69f99afb19a3068d04f'
  },
  {
    tokenAddress: '0x3772f9716cf6d7a09ede3587738aa2af5577483a',
    name: 'Synthetix Network Token',
    symbol: 'SNX',
    decimals: 18,
    exchangeAddress: '0x5d8888a212d033cff5f2e0ac24ad91a5495bad62'
  },
  {
    tokenAddress: '0x0cbe2df57ca9191b64a7af3baa3f946fa7df2f25',
    name: 'Synth sUSD',
    symbol: 'sUSD',
    decimals: 18,
    exchangeAddress: '0xa1ecdcca26150cf69090280ee2ee32347c238c7b'
  },
  {
    tokenAddress: '0x4df47b4969b2911c966506e3592c41389493953b',
    name: 'FundRequest',
    symbol: 'FND',
    decimals: 18,
    exchangeAddress: '0xe52d807ad934953315ccfe56f3b6425fcff04b2b'
  },
  {
    tokenAddress: '0x07d9e49ea402194bf48a8276dafb16e4ed633317',
    name: 'DALECOIN',
    symbol: 'DALC',
    decimals: 8,
    exchangeAddress: '0x4591482d0c9d0af061a42009ff1b3cd070396f87'
  },
  {
    tokenAddress: '0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814',
    name: 'Aurora DAO',
    symbol: 'AURA',
    decimals: 18,
    exchangeAddress: '0x8903842469f8790dad072b45bbce96cde9f3d7e6'
  },
  {
    tokenAddress: '0x3db6ba6ab6f95efed1a6e794cad492faaabf294d',
    name: 'LTO Network Token',
    symbol: 'LTO',
    decimals: 8,
    exchangeAddress: '0x017d2735eb562d0ad9abc2a91801f4ca96f6bfa9'
  },
  {
    tokenAddress: '0xc46d19c06defe3adab78712bbbae08ffaaf1402d',
    name: 'Wrapped OMG',
    symbol: 'WOMG',
    decimals: 18,
    exchangeAddress: '0x03f7f874d7e1b131f8c66f1f64b15b645667687f'
  },
  {
    tokenAddress: '0x69657e421c993a65e31f571b4ce742fafb318bd4',
    name: 'Wrapped OMG',
    symbol: 'WOMG',
    decimals: 18,
    exchangeAddress: '0xd2bf46ac7cbf595879aaff5967a92ae7e999c308'
  },
  {
    tokenAddress: '0x8a3cf860eca6d8e4579bfb052488e336e0fd9eae',
    name: 'SaldoMX',
    symbol: 'SMX',
    decimals: 2,
    exchangeAddress: '0x52b9c94031dee81b2c36be736fa7f6b7ca7ad84e'
  },
  {
    tokenAddress: '0xc528c28fec0a90c083328bc45f587ee215760a0f',
    name: 'Endor Protocol Token',
    symbol: 'EDR',
    decimals: 18,
    exchangeAddress: '0x877104c369bb563f3a893fae861b4baf0cdd9d37'
  },
  {
    tokenAddress: '0x01fa555c97d7958fa6f771f3bbd5ccd508f81e22',
    name: 'CVL',
    symbol: 'CVL',
    decimals: 18,
    exchangeAddress: '0xd7d070728c947645af47f8cd0731a4100695a503'
  },
  {
    tokenAddress: '0x330839ef82d34801bd96e75a4ee778ac56fa1ed8',
    name: 'ICOStart Token',
    symbol: 'ICH',
    decimals: 18,
    exchangeAddress: '0xe749f1a9d5f9055f0b784b586818833b9679949c'
  },
  {
    tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    exchangeAddress: '0xc8313c965c47d1e0b5cdcd757b210356ad0e400c'
  },
  {
    tokenAddress: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
    name: 'StorjToken',
    symbol: 'STORJ',
    decimals: 8,
    exchangeAddress: '0xa7298541e52f96d42382ecbe4f242cbcbc534d02'
  },
  {
    tokenAddress: '0xd26b63194f70e0939393d23d3a5b1ed6bde5f835',
    name: 'SunPower',
    symbol: 'SP',
    decimals: 18,
    exchangeAddress: '0x5982aa08c4d3103a3534055b5fb2aac88d61675c'
  },
  {
    tokenAddress: '0xf16843c8ab59ae17f9481ec756a1ded049192af4',
    name: '比特链',
    symbol: 'BIT',
    decimals: 18,
    exchangeAddress: '0xbaf5a8bdf81cfe2d34c0ced89236fe473183f2e8'
  },
  {
    tokenAddress: '0xd2cc32cc34b0b975bf9b812061a1a040017972fc',
    name: 'CH123456789013',
    symbol: 'CH-ZG1235d',
    decimals: 18,
    exchangeAddress: '0x80a393b2e1e4aa07862c24ad8ac14511c91bd562'
  },
  {
    tokenAddress: '0xb3ce281f0dee8c6f7af19b9664109c4030bec3fa',
    name: 'Block18',
    symbol: '18C',
    decimals: 18,
    exchangeAddress: '0x9ad2f1272e775ebec936fef4cfa44bd5b1c7c3a6'
  },
  {
    tokenAddress: '0xb2af8d4d286e2087590f085ee7e8ccb05d3c7f29',
    name: 'ZJLT  Distributed Factoring Network',
    symbol: 'ZJLT ',
    decimals: 6,
    exchangeAddress: '0x7a05354b796958e439b1780204a89f81094ea4b9'
  },
  {
    tokenAddress: '0x5af2be193a6abca9c8817001f45744777db30756',
    name: 'Ethos',
    symbol: 'ETHOS',
    decimals: 8,
    exchangeAddress: '0xa55ba5d915a53e3c0514ff4e232eb50af12922ec'
  },
  {
    tokenAddress: '0xf56fdae611b734005d71c03b7b8c966e45d1d768',
    name: 'Celer Network',
    symbol: 'CELR',
    decimals: 18,
    exchangeAddress: '0xd62cc4154a8f865761c5b027ec33b4ab47cfa175'
  },
  {
    tokenAddress: '0xfec0cf7fe078a500abf15f1284958f22049c2c7e',
    name: 'Maecenas ART Token',
    symbol: 'ART',
    decimals: 18,
    exchangeAddress: '0x63a91a8b6f6289aa93f18539d245ec49c6169cd7'
  },
  {
    tokenAddress: '0x23b75bc7aaf28e2d6628c3f424b3882f8f072a3c',
    name: 'Vice',
    symbol: 'VIT',
    decimals: 18,
    exchangeAddress: '0x3981932f5e17540d863868c5d7c4e617e1334acd'
  },
  {
    tokenAddress: '0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3',
    name: 'Etheriya',
    symbol: 'RIYA',
    decimals: 8,
    exchangeAddress: '0xd284aedc33522c85949576eca69414020d15ccb6'
  },
  {
    tokenAddress: '0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c',
    name: 'X8XToken',
    symbol: 'X8X',
    decimals: 18,
    exchangeAddress: '0x6dd1d97e5817ca376e653a1e7326e0563d13ceeb'
  },
  {
    tokenAddress: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c',
    name: 'Token-as-a-Service',
    symbol: 'TAAS',
    decimals: 6,
    exchangeAddress: '0x4da5c31ab38a496a2513843dab8721e9aeb876bf'
  },
  {
    tokenAddress: '0x7ca121b093e2fbd4bb9a894bd5ff487d16f1f83b',
    name: 'LORDLESS TOKEN',
    symbol: 'LESS',
    decimals: 18,
    exchangeAddress: '0x5386c0e6b417138f09236f86aca243e6f5b05dd3'
  },
  {
    tokenAddress: '0xe5e7d48abbb999880ea0f6533068dfd3944f0e7e',
    name: 'SInitiatives',
    symbol: 'SIT',
    decimals: 4,
    exchangeAddress: '0x85c1ef96960884f802789400160b21d9c7043520'
  },
  {
    tokenAddress: '0x45ed02e374aef2e4b34c04e86ad9d45891d10751',
    name: 'Digital Fantasy Sports',
    symbol: 'DFS',
    decimals: 18,
    exchangeAddress: '0x70a97ec45d87a37cec6103658527ffb3df7802c7'
  },
  {
    tokenAddress: '0xa017ac5fac5941f95010b12570b812c974469c2c',
    name: 'Proxeus',
    symbol: 'XES',
    decimals: 18,
    exchangeAddress: '0x225026d626e45fa662e6a71f679eff0cac3054f1'
  },
  {
    tokenAddress: '0xa645264c5603e96c3b0b078cdab68733794b0a71',
    name: 'Mysterium',
    symbol: 'MYST',
    decimals: 8,
    exchangeAddress: '0x6380ab7c66df788e30c5762f5884b9129d178b80'
  },
  {
    tokenAddress: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
    name: 'Auctus Token',
    symbol: 'AUC',
    decimals: 18,
    exchangeAddress: '0x37134075f5b5a0a94ac891c7b5ec5db5cfcf392c'
  },
  {
    tokenAddress: '0x49ceb57714000f18f3749cf2d130e135f9c473a4',
    name: 'ASOBI COIN',
    symbol: 'ABX',
    decimals: 18,
    exchangeAddress: '0xbe26014bbdbdd3d35f93c80591ffaf08513621ed'
  },
  {
    tokenAddress: '0xb448846ff602a6cb206ffafc45b93ad6fb7dd716',
    name: 'Casino La Crosse',
    symbol: 'SIN',
    decimals: 4,
    exchangeAddress: '0xc491dfda6487480dd31b4d5e1bb77bcc9e2543c9'
  },
  {
    tokenAddress: '0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e',
    name: 'Metronome',
    symbol: 'MET',
    decimals: 18,
    exchangeAddress: '0x006b6e89ee1531cfe5b6d32da0d80cc30506a339'
  },
  {
    tokenAddress: '0xe9a95d175a5f4c9369f3b74222402eb1b837693b',
    name: 'ChangeNOW',
    symbol: 'NOW',
    decimals: 8,
    exchangeAddress: '0xbe33fdad6efd453594e8ece3c53fd0ae62b7cc74'
  },
  {
    tokenAddress: '0x26a6f4a6867a71be998b80eaabf67ff87d1e59d6',
    name: 'CasinoLaCrosse',
    symbol: 'SIN',
    decimals: 2,
    exchangeAddress: '0x17edf686c2449ae8dbb52ac3cef105ca50baee53'
  },
  {
    tokenAddress: '0xfa6f7881e52fdf912c4a285d78a3141b089ce859',
    name: 'Avocado',
    symbol: 'AVO',
    decimals: 18,
    exchangeAddress: '0xe94c4dc3a75fad623391a68b4fbdd4b3c9b3eeb4'
  },
  {
    tokenAddress: '0xac4df2d98f14495263b9dfbc47451c46d8ab0a30',
    name: 'Belden Coin',
    symbol: 'BDC',
    decimals: 18,
    exchangeAddress: '0xaf8937f0595c06e1e0cca741a8aedec088aafde0'
  },
  {
    tokenAddress: '0x68aa3f232da9bdc2343465545794ef3eea5209bd',
    name: 'Mothership Token',
    symbol: 'MSP',
    decimals: 18,
    exchangeAddress: '0x700e7869fa8ffd3117200e248979fef2b78f4a1c'
  },
  {
    tokenAddress: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    name: 'EthLend Token',
    symbol: 'LEND',
    decimals: 18,
    exchangeAddress: '0xcaa7e4656f6a2b59f5f99c745f91ab26d1210dce'
  },
  {
    tokenAddress: '0x64fab8aff039ed05259d1c2af729b70c8002c661',
    name: 'Konsta token',
    symbol: 'KNS',
    decimals: 18,
    exchangeAddress: '0x19cb61fe00ea29fc77d79eaeaebc94023bf7c67b'
  },
  {
    tokenAddress: '0x35352a97214942f5c6054923b8dbd5e4ff0434df',
    name: 'My Super Token',
    symbol: 'MST',
    decimals: 18,
    exchangeAddress: '0xca5ce4f07e8591b497eb2e22d2b0c19b69173e61'
  },
  {
    tokenAddress: '0x5e51f6841d2f188c42c7c33a6a5e77fb05cfbabe',
    name: 'CREDITCOIN',
    symbol: 'CCOIN',
    decimals: 2,
    exchangeAddress: '0xba2d17a783533f401d2b5efaac4a5675f46ee36d'
  },
  {
    tokenAddress: '0x6025fb154b7c30e13657d5304dafdb55b194e5dd',
    name: 'iAM',
    symbol: 'IAM',
    decimals: 18,
    exchangeAddress: '0x9c1a7862f08d19e86714750161f56e7c10a9503e'
  },
  {
    tokenAddress: '0x6671c24dd5b8e4ced34033991418e4bc0cca05af',
    name: 'AgentMile Estate Tokens',
    symbol: 'ESTATE',
    decimals: 8,
    exchangeAddress: '0x2a98460615481a456a1d763460167514dcd21f2c'
  },
  {
    tokenAddress: '0x00319f722bd546182cb2c701ca254146d3f084fc',
    name: 'Democracy Earth',
    symbol: 'HOUR',
    decimals: 18,
    exchangeAddress: '0xb7f7269098f36b034c4e2118a40c53482872b87a'
  },
  {
    tokenAddress: '0x667088b212ce3d06a1b553a7221e1fd19000d9af',
    name: 'WINGS',
    symbol: 'WINGS',
    decimals: 18,
    exchangeAddress: '0x70876eadea28ac268564ad3a8b7313790b471436'
  },
  {
    tokenAddress: '0xc98449ef8a017cfd29aed8b21b9b26492978a898',
    name: 'Fitness Chain',
    symbol: 'FIT',
    decimals: 18,
    exchangeAddress: '0x99b849a022d60be539d2a130b89ff0bbae097d83'
  },
  {
    tokenAddress: '0x82f4ded9cec9b5750fbff5c2185aee35afc16587',
    name: 'DreamTeam Token',
    symbol: 'DREAM',
    decimals: 6,
    exchangeAddress: '0xbd04c3749506ce30eed93c06f93f18223c3ff5aa'
  },
  {
    tokenAddress: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
    name: 'PowerLedger',
    symbol: 'POWR',
    decimals: 6,
    exchangeAddress: '0xabe1e210f2c97ae4bc7b17f8daa2e8db993337f5'
  },
  {
    tokenAddress: '0x89f10cead72d1ebf3e08a9378932c6f4f5a4c476',
    name: 'Bruno Skvorc Token',
    symbol: 'SWADER',
    decimals: 4,
    exchangeAddress: '0x32ff139e48c05d636307f61e476bb395bd319b05'
  },
  {
    tokenAddress: '0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e',
    name: 'Dragon',
    symbol: 'DRGN',
    decimals: 18,
    exchangeAddress: '0x9881ad0c92d5a908d97df7f86626903ada1bfd29'
  },
  {
    tokenAddress: '0x1c83501478f1320977047008496dacbd60bb15ef',
    name: 'DigitexFutures',
    symbol: 'DGTX',
    decimals: 18,
    exchangeAddress: '0x24fbcbc276854bd14f0e6e02fb7b740baa52ca26'
  },
  {
    tokenAddress: '0xc9c0ff6344b4bfdee7ace21c4deddd6e43ecb454',
    name: 'Oroshi',
    symbol: 'WIND',
    decimals: 18,
    exchangeAddress: '0xe2833ad850513faa973747e4495db1d0b0e038a0'
  },
  {
    tokenAddress: '0x9138e38a0316e25459b376e987dd270b626709b8',
    name: '数码链',
    symbol: 'SML',
    decimals: 18,
    exchangeAddress: '0x041692af7f62906cee089b77fa0e59adb63f750c'
  },
  {
    tokenAddress: '0xf5ed2dc77f0d1ea7f106ecbd1850e406adc41b51',
    name: 'The Ocean Token',
    symbol: 'OCEAN',
    decimals: 18,
    exchangeAddress: '0x071002d8f0e5e210e510c68504e435c4a425df8b'
  },
  {
    tokenAddress: '0xd89c37fd7c0fa3b107b7e4a8731dd3aaec488954',
    name: 'Lava',
    symbol: 'LAVA',
    decimals: 8,
    exchangeAddress: '0x41e48af64f8ebf24194ce323b0760ee09bbb3ac4'
  },
  {
    tokenAddress: '0xeef338c585ee3cf674f717937f12e6f52accf5e1',
    name: 'Jarvis Reward Token',
    symbol: 'JRT',
    decimals: 18,
    exchangeAddress: '0xc932eded711ceb421078bab6b44b558656bd7864'
  },
  {
    tokenAddress: '0x8377ee6d3545bc6ff1425ee3015dc648b149c7b2',
    name: 'ProChain',
    symbol: 'PRO',
    decimals: 2,
    exchangeAddress: '0x238ff2e978a7fbb59ee2636caad269a440cbd43f'
  },
  {
    tokenAddress: '0xb26631c6dda06ad89b93c71400d25692de89c068',
    name: 'Minds',
    symbol: 'MINDS',
    decimals: 18,
    exchangeAddress: '0x0ce13e66bef17801c9f19fb763be2dd2f391d7c2'
  },
  {
    tokenAddress: '0x2515905dd027cc38f139feda8e7e6945c7f9d07a',
    name: 'CREEKCOIN CRKC ERC20',
    symbol: 'CRKC',
    decimals: 18,
    exchangeAddress: '0xfaddccf91009c6383bc7b75c7f19a2c8be2f75ef'
  },
  {
    tokenAddress: '0xf09209cc5eae846ee2cc4a493e7b962ca7bcfbbb',
    name: 'iEx.ec Network Token',
    symbol: 'RLC',
    decimals: 9,
    exchangeAddress: '0x198da2b510e297605641f38b64e668675d778c6f'
  },
  {
    tokenAddress: '0x70861e862e1ac0c96f853c8231826e469ead37b1',
    name: 'DOS Network Token',
    symbol: 'DOS',
    decimals: 18,
    exchangeAddress: '0xb5e96c3ad1ccc79e7ab13433471baf785bb4977e'
  },
  {
    tokenAddress: '0x4cbdd06fcc050c7e0bd77478ed0fe4ea5eec651c',
    name: 'Cepheus',
    symbol: 'CEP',
    decimals: 18,
    exchangeAddress: '0xeb765bc156de3249b491d2db7aba3450fbcf9c5b'
  },
  {
    tokenAddress: '0x189c05c3c191015c694032e1b09c190d5db3fb50',
    name: 'Readcoin',
    symbol: 'RCN',
    decimals: 8,
    exchangeAddress: '0x112558c05b1e7f28daa98e48c8d7e0ced2f496c8'
  },
  {
    tokenAddress: '0x3893b9422cd5d70a81edeffe3d5a1c6a978310bb',
    name: 'Mithril Token',
    symbol: 'MITH',
    decimals: 18,
    exchangeAddress: '0x6469a4e75f37d9f8f4b1cee6bb3c1a1fe933e2a7'
  },
  {
    tokenAddress: '0x01b3ec4aae1b8729529beb4965f27d008788b0eb',
    name: 'DA Power Play Token',
    symbol: 'DPP',
    decimals: 18,
    exchangeAddress: '0x7ea7134ed6c41d9e35dae7e7e1ff0fcc406224ca'
  },
  {
    tokenAddress: '0xe7049114562c759d5e9d1d25783773ccd61c0a65',
    name: 'Balance token',
    symbol: 'BAL',
    decimals: 0,
    exchangeAddress: '0x2afbcc0bb7a78bd4d9a63c24c13042212b37f665'
  },
  {
    tokenAddress: '0x36774fbca6b17325947cb208f77b4871ac7b6217',
    name: 'Major US stock market tracking index, redeemable for DAI at expiration on 15 May, 2019',
    symbol: 'USStocks',
    decimals: 18,
    exchangeAddress: '0xcdd6e09627d23368b770d9162807f181d061fb3e'
  },
  {
    tokenAddress: '0x98626e2c9231f03504273d55f397409defd4a093',
    name: 'Dev',
    symbol: 'DEV',
    decimals: 18,
    exchangeAddress: '0x48b109a5981573d03e5becec76aa805b7640cd58'
  },
  {
    tokenAddress: '0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f',
    name: 'CoinEx Token',
    symbol: 'CET',
    decimals: 18,
    exchangeAddress: '0x28fe20afbf3450f13b803a639e19a8b0c005a5f3'
  },
  {
    tokenAddress: '0x39550dc5919a990a5786fcdc1d5b7c392d362dde',
    name: 'DeToxTheWorld',
    symbol: 'DTOX',
    decimals: 8,
    exchangeAddress: '0x7cdff5f7e1886767ae561ea0c2f926db3c25706d'
  },
  {
    tokenAddress: '0xa120cb0530ea11451b002b7eafac91d8b5b8a499',
    name: 'EthBo',
    symbol: 'ETHBO',
    decimals: 18,
    exchangeAddress: '0xa0834bad199282494763f36e93c4900cc950360e'
  },
  {
    tokenAddress: '0xba5f11b16b155792cf3b2e6880e8706859a8aeb6',
    name: 'Aeron',
    symbol: 'ARN',
    decimals: 8,
    exchangeAddress: '0x05d9c70cee7760ff3c7b50c3f7f9c0de24c0d840'
  },
  {
    tokenAddress: '0xc27a2f05fa577a83ba0fdb4c38443c0718356501',
    name: 'Lamden Tau',
    symbol: 'TAU',
    decimals: 18,
    exchangeAddress: '0x72fea1b0bf11c86e461c38d9f73e78dd21000d64'
  },
  {
    tokenAddress: '0x69beab403438253f13b6e92db91f7fb849258263',
    name: 'NeuroToken',
    symbol: 'NTK',
    decimals: 18,
    exchangeAddress: '0x46c106a6befddd066b202c9763ccc55c6f6c429b'
  },
  {
    tokenAddress: '0x7add89f3a7d2530d83b99593c67f56740ec11cc6',
    name: 'Private Katinrun Foundation',
    symbol: 'PKTF',
    decimals: 18,
    exchangeAddress: '0x45ed432a5f3638100cfc7c213e88fc902ac74cd4'
  },
  {
    tokenAddress: '0x0000000000b3f879cb30fe243b4dfee438691c04',
    name: 'Gastoken.io',
    symbol: 'GST2',
    decimals: 2,
    exchangeAddress: '0x929507cd3d90ab11ec4822e9eb5a48eb3a178f19'
  },
  {
    tokenAddress: '0x077d52b047735976dfda76fef74d4d988ac25196',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0xb71d0e91b4b0edaea879d74d20632edafe46ef37'
  },
  {
    tokenAddress: '0x08b4c866ae9d1be56a06e0c302054b4ffe067b43',
    name: 'BitCar',
    symbol: 'BITCAR',
    decimals: 8,
    exchangeAddress: '0x480b971a86736448eb3ce00133008b348905ae5a'
  },
  {
    tokenAddress: '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0xc202026dbfaa80dbb62d90cc645877fad70fd19d'
  },
  {
    tokenAddress: '0x39bb259f66e1c59d5abef88375979b4d20d98022',
    name: 'Wax Token',
    symbol: 'WAX',
    decimals: 8,
    exchangeAddress: '0xb3d8e9b03a7c5a5f6bea1eadafa3c766316225d3'
  },
  {
    tokenAddress: '0x039b5649a59967e3e936d7471f9c3700100ee1ab',
    name: 'Kucoin Shares',
    symbol: 'KCS',
    decimals: 6,
    exchangeAddress: '0xc0e77cdd039a3f731ae0f5c6c9f4a91d4bc28880'
  },
  {
    tokenAddress: '0xd559f20296ff4895da39b5bd9add54b442596a61',
    name: 'FintruX Network',
    symbol: 'FTX',
    decimals: 18,
    exchangeAddress: '0x80f0f3e1482bab7fb6ed70185476f2fcdb596fa9'
  },
  {
    tokenAddress: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
    name: 'AirSwap Token',
    symbol: 'AST',
    decimals: 4,
    exchangeAddress: '0xc462a2fd31c83f6ee220400d1506d9e9f1f4bb01'
  },
  {
    tokenAddress: '0x1fdde7525783c36153a8a6b618e2b5210a23ce37',
    name: 'KOKOCoin',
    symbol: 'KKC',
    decimals: 18,
    exchangeAddress: '0x5388857f3607962064d0505201f3faf2d20fa4b9'
  },
  {
    tokenAddress: '0x7b0c06043468469967dba22d1af33d77d44056c8',
    name: 'Morpheus.Network',
    symbol: 'MRPH',
    decimals: 4,
    exchangeAddress: '0x60298a63804d730bf0fbb79d4010193d5d9b8e5d'
  },
  {
    tokenAddress: '0x86aabcc646f290b9fc9bd05ce17c3858d1511da1',
    name: 'WETC',
    symbol: 'WETC',
    decimals: 18,
    exchangeAddress: '0x0729d4d5e1956fe977662c8e149adfba561f86e5'
  },
  {
    tokenAddress: '0x9a8c04e6166c553dc01dd8f36b78904833baeb57',
    name: 'KRISTREEDERTOKEN',
    symbol: 'KTR',
    decimals: 18,
    exchangeAddress: '0x269cac915ef69d9920a48fd2dc3df5dc5941a779'
  },
  {
    tokenAddress: '0x058a144951e062fc14f310057d2fd9ef0cf5095b',
    name: 'PoWH3D Extended',
    symbol: 'P3X',
    decimals: 18,
    exchangeAddress: '0x315945cd5c5b601643179d2803ab844e19a35fa8'
  },
  {
    tokenAddress: '0x922ac473a3cc241fd3a0049ed14536452d58d73c',
    name: 'VALID',
    symbol: 'VLD',
    decimals: 18,
    exchangeAddress: '0x83c50f91c7147d7de832d11b95404ba306b07a69'
  },
  {
    tokenAddress: '0x010589b7c33034b802f7dba2c88cc9cec0f46673',
    name: 'SoundMoneyCoin',
    symbol: 'SOV',
    decimals: 8,
    exchangeAddress: '0x6ac136ef1856ab1f8c030b72d3b7f96580a975a3'
  },
  {
    tokenAddress: '0x92dd20c7da4d004a1a6fc094dc7d0c7169899353',
    name: 'TIMETOFLYTOKEN',
    symbol: 'TTF',
    decimals: 18,
    exchangeAddress: '0x9e6d609ca47d524abe086c0862a3b31859fc44f8'
  },
  {
    tokenAddress: '0x4abefcd2996073093a06e5a3bd32acda6b3b2235',
    name: 'NOISEMUSICTOKEN',
    symbol: 'NMU',
    decimals: 18,
    exchangeAddress: '0xb2ec66d6fcf579af9b8035ec2cf85df0be8bdf82'
  },
  {
    tokenAddress: '0xf7fda1bf4bd0b2b0dea343d1e8e08d8b869d08ef',
    name: 'MANUCoin',
    symbol: 'MANU',
    decimals: 9,
    exchangeAddress: '0x2fee056acc850b614c9161c5e1fd482a93aa896b'
  },
  {
    tokenAddress: '0x02f61fd266da6e8b102d4121f5ce7b992640cf98',
    name: 'LikeCoin',
    symbol: 'LIKE',
    decimals: 18,
    exchangeAddress: '0x40c2313279a97c9551ae3d06a274de8364d1f3e0'
  },
  {
    tokenAddress: '0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3',
    name: 'MedToken',
    symbol: 'MTN',
    decimals: 18,
    exchangeAddress: '0xc3ee3be4f46cd5ca30406c37f074031cfe3ae181'
  },
  {
    tokenAddress: '0xd64794250393f825e57e0ffccd3c75cad4564be3',
    name: 'www.internetkeys.net - Multiboard',
    symbol: 'IKC',
    decimals: 8,
    exchangeAddress: '0x82df4774a61034381da474dc0b7319b44b520b8d'
  },
  {
    tokenAddress: '0xefde86ec7be1a27dc1ea2a027e5e7c997af5d066',
    name: 'Rubin',
    symbol: 'RUBI',
    decimals: 8,
    exchangeAddress: '0x2830b513f4ab3971e9a761803785277ba5ee4dab'
  },
  {
    tokenAddress: '0xe1a0a311adb89920816b79029484ea9b7d1ef32c',
    name: 'Najah Safiya',
    symbol: 'NS7',
    decimals: 8,
    exchangeAddress: '0xf6c7ab80d38588a905cadf1db03d9333cb04d177'
  },
  {
    tokenAddress: '0xaf1250fa68d7decd34fd75de8742bc03b29bd58e',
    name: 'Invictus Hyperion',
    symbol: 'IHF',
    decimals: 18,
    exchangeAddress: '0xaeb8fb9d0a3f21ab88fc12435cdc4aae13799eb6'
  },
  {
    tokenAddress: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
    name: 'Celsius',
    symbol: 'CEL',
    decimals: 4,
    exchangeAddress: '0x91debb54de02872a259c17699d9b794bc949fed2'
  },
  {
    tokenAddress: '0xea6ab13251aa6ae87475b418f529208eae317250',
    name: 'NotYourOrdinaryToken',
    symbol: 'NYOT',
    decimals: 2,
    exchangeAddress: '0x616c0ca2be15d68e00c5dca93e20c5b1f245300e'
  },
  {
    tokenAddress: '0x29c8682e6cabd9485413cf81057ffa8fd4c399a4',
    name: 'ErrbodysToken',
    symbol: 'ERBYS',
    decimals: 2,
    exchangeAddress: '0x8fae74207942f3a78747740658ab63c90d8400ff'
  },
  {
    tokenAddress: '0x4d9e23a3842fe7eb7682b9725cf6c507c424a41b',
    name: 'CarBlock.io',
    symbol: 'CAR',
    decimals: 18,
    exchangeAddress: '0xf01b1232af4f94519933dff65041227ff52f11f9'
  },
  {
    tokenAddress: '0x9af839687f6c94542ac5ece2e317daae355493a1',
    name: 'Hydro Protocol Token',
    symbol: 'HOT',
    decimals: 18,
    exchangeAddress: '0xe123575bf28ab05a65de145061ba747887deeae3'
  },
  {
    tokenAddress: '0xe6824483e279d967ea6f8472ace7585862fa1185',
    name: 'traceto.io',
    symbol: 'T2T',
    decimals: 18,
    exchangeAddress: '0x429f18e437ed3cf1c095de37c340616842c97d20'
  },
  {
    tokenAddress: '0xa35fc5019c4dc509394bd4d74591a0bf8852c195',
    name: 'BitEth7525RebalancingSetToken',
    symbol: 'BTCETH7525',
    decimals: 18,
    exchangeAddress: '0xca257d6779b153f5b3f7cffd89e5b37529c70947'
  },
  {
    tokenAddress: '0xa6c040045d962e4b8efa00954c7d23ccd0a2b8ad',
    name: 'BitEth2575RebalancingSetToken',
    symbol: 'BTCETH2575',
    decimals: 18,
    exchangeAddress: '0x1afc0bb4c1db404493fec6c2ceabd25f1eeb0a65'
  },
  {
    tokenAddress: '0xc719d010b63e5bbf2c0551872cd5316ed26acd83',
    name: 'Decentralized Insurance Protocol',
    symbol: 'DIP',
    decimals: 18,
    exchangeAddress: '0x61792f290e5100fbbcbb2309f03a1bab869fb850'
  },
  {
    tokenAddress: '0x27b5b94a7269e175864d2c5e584d8f1414a2d94f',
    name: 'BBWCoin',
    symbol: 'BBW',
    decimals: 8,
    exchangeAddress: '0x7141b573a6fb6c99c97c234c1b65e1c9696d29d1'
  },
  {
    tokenAddress: '0xa538cc79644c7522ca3c1f150b4979e06cc71804',
    name: 'ZmeenaOrrCoin',
    symbol: 'ZMO',
    decimals: 2,
    exchangeAddress: '0x9129ad3fd905293ffcc22ff7a1ef0406ce7c0c27'
  },
  {
    tokenAddress: '0x585c2cf94c41b528ec7329cbc3cde3c4f8d268db',
    name: 'STETHDaiRebalancingSetToken',
    symbol: 'STETHDai',
    decimals: 18,
    exchangeAddress: '0x10c4be5806878f78e6179af6d09d035bbdab2ec2'
  },
  {
    tokenAddress: '0x61b2d3ea9f1c6b387c985c73d40e8fbfb284e5c7',
    name: 'RoboCalls',
    symbol: 'RC20',
    decimals: 18,
    exchangeAddress: '0x9394c20adca4512dfc3d3c184c648e4193462ebb'
  },
  {
    tokenAddress: '0x33ad8ccd192c2b1782b0d3e557e32a54771e16f1',
    name: 'SunPower',
    symbol: 'SP',
    decimals: 18,
    exchangeAddress: '0x102745b4a019d37bc342850b0c36125f1cb2858d'
  },
  {
    tokenAddress: '0x09d8b66c48424324b25754a873e290cae5dca439',
    name: 'Nova Token',
    symbol: 'NVT',
    decimals: 18,
    exchangeAddress: '0x2e4d90dc7fd3d9be8fdb6fdd4b98e2ddc2cfa607'
  },
  {
    tokenAddress: '0x286bda1413a2df81731d4930ce2f862a35a609fe',
    name: 'WaBi',
    symbol: 'WaBi',
    decimals: 18,
    exchangeAddress: '0x65b809f942b3ec5695bbf74670c3a78657168320'
  },
  {
    tokenAddress: '0xebdc8da065f78048b0b0f3c17c8b5f4348daf219',
    name: 'CRYPTOLAND',
    symbol: 'CRYPTOLAND',
    decimals: 8,
    exchangeAddress: '0x0a7ee2162c0ee6be4a1de9e7f73cff5432309ec0'
  },
  {
    tokenAddress: '0x3f17dd476faf0a4855572f0b6ed5115d9bba22ad',
    name: 'WIBSON',
    symbol: 'WIB',
    decimals: 9,
    exchangeAddress: '0xad014d0dc396e4333778832d24e3a5e78b3593be'
  },
  {
    tokenAddress: '0xbb0ef9e617faddf54b8d16e29046f72b4d3ec77f',
    name: 'PEP Token',
    symbol: 'PEP',
    decimals: 18,
    exchangeAddress: '0x579134b2dc4a79746d365aa8097e8dc8b571fed1'
  },
  {
    tokenAddress: '0xb134ec3fe107a190809ae612eec93f3847c1aa4d',
    name: 'Apr 26 106-CALL',
    symbol: '4/26 106-C',
    decimals: 18,
    exchangeAddress: '0x0a8fb4a411a0fc781d65b19f3b261c858f82ffef'
  },
  {
    tokenAddress: '0x7dc4f41294697a7903c4027f6ac528c5d14cd7eb',
    name: 'RemiCoin',
    symbol: 'RMC',
    decimals: 8,
    exchangeAddress: '0x779dcfc531d31cd4fd7f4276bf357130dce3cc9b'
  },
  {
    tokenAddress: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
    name: 'SingularDTV',
    symbol: 'SNGLS',
    decimals: 0,
    exchangeAddress: '0x61061e00a5acda7886ccce2a051539ef2fca1ce6'
  },
  {
    tokenAddress: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724',
    name: 'Vibe',
    symbol: 'VIB',
    decimals: 18,
    exchangeAddress: '0xcc763e9add17a9d77b5b1b0fb7cb6e51508e3008'
  },
  {
    tokenAddress: '0x957a688d23a00f196b2da8e2531702c67de167cf',
    name: 'CHASYR',
    symbol: 'MPH',
    decimals: 18,
    exchangeAddress: '0xd4846bc16a6bf859c1253a6f37239ff06a99abe5'
  },
  {
    tokenAddress: '0x7107f8d12caac33f1c326337378e72ae1eac460a',
    name: 'PTK Swansons Vision',
    symbol: 'PTK:SV',
    decimals: 36,
    exchangeAddress: '0xfce183635d8bd990348599aabbd0057184d5c490'
  },
  {
    tokenAddress: '0x5732046a883704404f284ce41ffadd5b007fd668',
    name: 'Bluzelle Token',
    symbol: 'BLZ',
    decimals: 18,
    exchangeAddress: '0x0310396b59c4d90762398b8c5a24d646701c6f18'
  },
  {
    tokenAddress: '0x6710c63432a2de02954fc0f851db07146a6c0312',
    name: 'SyncFab Smart Manufacturing Blockchain',
    symbol: 'MFG',
    decimals: 18,
    exchangeAddress: '0x27882bfeabcd4ba886854c03206d12c17be5f001'
  },
  {
    tokenAddress: '0x713a1c4876673a982a828753166c452ba9721994',
    name: 'https://findtherabbit.me',
    symbol: 'findtherabbit.me',
    decimals: 18,
    exchangeAddress: '0x6b92c982c33e94f25fec6c23dd46403b925a1ae3'
  },
  {
    tokenAddress: '0x3d779a7fb80723c6385524d113792d119acd2267',
    name: 'CartyCion',
    symbol: 'CC',
    decimals: 18,
    exchangeAddress: '0x89df148b1c76d00b567f91ceeb7d0b3feb905011'
  },
  {
    tokenAddress: '0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5',
    name: 'HuntToken',
    symbol: 'HUNT',
    decimals: 18,
    exchangeAddress: '0xb8cefb02e4f911c250b27690b72a61d58167d18c'
  },
  {
    tokenAddress: '0x8c8d6016344425ddd1d63523411de5eb398cd141',
    name: 'Medilink Coin',
    symbol: 'MDL',
    decimals: 18,
    exchangeAddress: '0x505d1fada4967cbc2bf01da31089a1333528f4ab'
  },
  {
    tokenAddress: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
    name: 'Pundi X Token',
    symbol: 'NPXS',
    decimals: 18,
    exchangeAddress: '0x93ff2c787c140c4ce21f01cc211fbdace274077f'
  },
  {
    tokenAddress: '0x379e5f3eab1b05f3811519907b36b8e04fe3a897',
    name: 'IMCoin',
    symbol: 'IMC',
    decimals: 18,
    exchangeAddress: '0xa983458a7b5434a89f48198d144151846a8fcc01'
  },
  {
    tokenAddress: '0x8d75959f1e61ec2571aa72798237101f084de63a',
    name: 'Substratum',
    symbol: 'SUB',
    decimals: 18,
    exchangeAddress: '0xc080b284028e37e3b26d85f2c53ad51904471d7a'
  },
  {
    tokenAddress: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c',
    name: 'Edgeless',
    symbol: 'EDG',
    decimals: 0,
    exchangeAddress: '0x4ac2ccebac7b96f1e66fbb7049c740a8ca8ef78d'
  },
  {
    tokenAddress: '0x4fbb350052bca5417566f188eb2ebce5b19bc964',
    name: 'Rigo Token',
    symbol: 'GRG',
    decimals: 18,
    exchangeAddress: '0xee5e8d2357a29f4a85a938679233fe24fbc2cf1d'
  },
  {
    tokenAddress: '0xf6c868c4f2a48949ff9b01e67acd206543352fcd',
    name: 'Mythex',
    symbol: 'MX',
    decimals: 0,
    exchangeAddress: '0xe3349fd5f3bf3b878ac5444c29c7308bf5992bbb'
  },
  {
    tokenAddress: '0xc9d6382e5abfed97cc856216ced900b64324e502',
    name: 'Bethon Digital Ecosystem',
    symbol: 'BTDE',
    decimals: 18,
    exchangeAddress: '0xb3d5641170b1b2e4344e62993adbbe54574102e4'
  },
  {
    tokenAddress: '0x3867ef780a3afcf1201ef4f2acc6a46e3bd1eb88',
    name: 'Cryptovoxels Color',
    symbol: 'COLR',
    decimals: 0,
    exchangeAddress: '0x3f0c63da66457dedc2677bef6bbdd457ba7a3c0b'
  },
  {
    tokenAddress: '0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e',
    name: 'Modum Token',
    symbol: 'MOD',
    decimals: 0,
    exchangeAddress: '0xccb98654cd486216fff273dd025246588e77cfc1'
  },
  {
    tokenAddress: '0x7880515ed114127bfe1e76462ba5e2725939129e',
    name: 'MoneyFold Polish Zloty',
    symbol: 'PLN',
    decimals: 2,
    exchangeAddress: '0x6a4096bf1cb457049502aaaa6303c9cb1469546d'
  },
  {
    tokenAddress: '0x9c3e7e016389661473ac64f4c37f5f7f2955e499',
    name: 'blockimmo',
    symbol: 'IMMO',
    decimals: 18,
    exchangeAddress: '0x4218710e520e01e3158d9bdb579002e983be176c'
  },
  {
    tokenAddress: '0xc5807256e2e2fe85ca94c3617c4bc5ff2bd9cfb6',
    name: 'DragonSeriesToken',
    symbol: 'DST',
    decimals: 18,
    exchangeAddress: '0x2f75dc34c4cacd835041dd523b7d36d391b92aa0'
  },
  {
    tokenAddress: '0xa823e6722006afe99e91c30ff5295052fe6b8e32',
    name: 'Neumark',
    symbol: 'NEU',
    decimals: 18,
    exchangeAddress: '0x34b0b7ba7cd9efa0582dcfbf5f6d4cfe344d8c47'
  },
  {
    tokenAddress: '0xba2184520a1cc49a6159c57e61e1844e085615b6',
    name: 'HelloGold Token',
    symbol: 'HGT',
    decimals: 8,
    exchangeAddress: '0x658d3a5467e4b90a967530cf73718f453f35b2ac'
  },
  {
    tokenAddress: '0x02b3c88b805f1c6982e38ea1d40a1d83f159c3d4',
    name: 'Yun Planet',
    symbol: 'YUN',
    decimals: 8,
    exchangeAddress: '0x7b46b7df165e31dcbed54eaf1975b0c780db47e7'
  },
  {
    tokenAddress: '0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433',
    name: 'Storm Token',
    symbol: 'STORM',
    decimals: 18,
    exchangeAddress: '0xb0b12c05df3237eb6f0ce7312b68c37e140bf69b'
  },
  {
    tokenAddress: '0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a',
    name: 'KaratBank Coin',
    symbol: 'KBC',
    decimals: 7,
    exchangeAddress: '0x2837ef3e8e0558ce0bfe465cfa4f8ba826683090'
  },
  {
    tokenAddress: '0x36cd54b05b82156e454d690af1d392a27af41c94',
    name: 'Bethon Token',
    symbol: 'BTT',
    decimals: 18,
    exchangeAddress: '0x9f023605f04a6bab127e0c40c4ddd17b5b5873a0'
  },
  {
    tokenAddress: '0x9ab165d795019b6d8b3e971dda91071421305e5a',
    name: 'Aurora',
    symbol: 'AOA',
    decimals: 18,
    exchangeAddress: '0x4a5875fc146005f7c3143ab403b9aafa42f9b152'
  },
  {
    tokenAddress: '0xf230b790e05390fc8295f4d3f60332c93bed42e2',
    name: 'Tronix',
    symbol: 'TRX',
    decimals: 6,
    exchangeAddress: '0x8f0f1fa9257e30d2f6eac262221447d29d33ac8c'
  },
  {
    tokenAddress: '0xdf0960778c6e6597f197ed9a25f12f5d971da86c',
    name: 'Vials of Goo',
    symbol: 'GOO',
    decimals: 12,
    exchangeAddress: '0xe52dceab9c8892eca29b0a0869257d7ad26268d2'
  },
  {
    tokenAddress: '0xd9bae39c725a1864b1133ad0ef1640d02f79b78c',
    name: 'Touch Smart Token',
    symbol: 'TST',
    decimals: 18,
    exchangeAddress: '0x8ac50b8ad6a856a492741d16e40b812652056483'
  },
  {
    tokenAddress: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    name: 'Matic Token',
    symbol: 'MATIC',
    decimals: 18,
    exchangeAddress: '0x9a7a75e66b325a3bd46973b2b57c9b8d9d26a621'
  },
  {
    tokenAddress: '0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5',
    name: 'Blockchain Certified Data Token',
    symbol: 'BCDT',
    decimals: 18,
    exchangeAddress: '0x7acbb9fb0aff7673951ba35963c8fdc370c6017c'
  },
  {
    tokenAddress: '0xf6dbe88ba55f1793ff0773c9b1275300f830914f',
    name: 'Asian Dragon',
    symbol: 'AD',
    decimals: 8,
    exchangeAddress: '0xd6200e54cd6c064438c6ddb32e3af3ce4f0c5802'
  },
  {
    tokenAddress: '0xd21ba1c2c0e8fbd236553efa39137165b3a68e75',
    name: 'TestTokenZ',
    symbol: 'TTZ',
    decimals: 18,
    exchangeAddress: '0x7f3dab432429bf4de09b8ec697fc6d817f483b42'
  },
  {
    tokenAddress: '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
    name: 'MyBit',
    symbol: 'MYB',
    decimals: 18,
    exchangeAddress: '0x1e0fbdaf60e1195a46e2af40a1c7b84460a13444'
  },
  {
    tokenAddress: '0xa17d1bf14802e0eec8f84b3b8b638a9402d60e9e',
    name: 'REGA Risk Sharing Token',
    symbol: 'RST',
    decimals: 10,
    exchangeAddress: '0xd6ed8979455ebed92db3b7afdd1ab200054a88bc'
  },
  {
    tokenAddress: '0xf1bbbfe96c5845dd4d5f60e7ce758bbc24f7f5ee',
    name: 'Testing Token',
    symbol: 'TEST',
    decimals: 18,
    exchangeAddress: '0x90be26ffa3f65d00858f4b2ad15b95e78d402f0f'
  },
  {
    tokenAddress: '0xf3981e5ff82caaa5d4cb4fba540b06c20c3d3dbe',
    name: 'Meritum',
    symbol: 'MER',
    decimals: 18,
    exchangeAddress: '0x2e9e106ef10613025a43c6afdcf68d6dd9f5d701'
  },
  {
    tokenAddress: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
    name: 'Compound Ether',
    symbol: 'cETH',
    decimals: 8,
    exchangeAddress: '0x3f3e2cf087b4a818a7c610eb8ef332d894736d7d'
  },
  {
    tokenAddress: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
    name: 'Unisocks Edition 0',
    symbol: 'SOCKS',
    decimals: 18,
    exchangeAddress: '0x22d8432cc7aa4f8712a655fc4cdfb1baec29fca9'
  },
  {
    tokenAddress: '0xd850942ef8811f2a866692a623011bde52a462c1',
    name: 'VeChain Token',
    symbol: 'VEN',
    decimals: 18,
    exchangeAddress: '0xb23c1553cf98f7abbc24c94141e5ce48148fa351'
  },
  {
    tokenAddress: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
    name: 'Compound Dai',
    symbol: 'cDAI',
    decimals: 8,
    exchangeAddress: '0x45a2fdfed7f7a2c791fb1bdf6075b83fad821dde'
  },
  {
    tokenAddress: '0xbbd1706d16418bb136e1497a73d3af4164586da0',
    name: 'Humanity',
    symbol: 'HUM',
    decimals: 18,
    exchangeAddress: '0xe499657190d515119077af5d64f44b6f850baea5'
  },
  {
    tokenAddress: '0x9cb79101f795287585843d71c1b0a33a0724c2bb',
    name: 'LakesCash',
    symbol: 'SKAN',
    decimals: 2,
    exchangeAddress: '0x9f1fbbdd2c784025e170c7e636c68ae0de0cc435'
  },
  {
    tokenAddress: '0x10709ca9adcaa1728ad530be1ed39c0286124883',
    name: 'Meritum Cash',
    symbol: 'MCH',
    decimals: 18,
    exchangeAddress: '0xbb6e36aa6121246c056d04f16757933a1052e64c'
  },
  {
    tokenAddress: '0x2c82c73d5b34aa015989462b2948cd616a37641f',
    name: 'Spectre.ai U-Token',
    symbol: 'SXUT',
    decimals: 18,
    exchangeAddress: '0x6a69ddbbf936fc343cbefb4e4edbf6dbc4002e04'
  },
  {
    tokenAddress: '0xcd0a53685b594a543181e6203433766648a8cd43',
    name: 'ZerroXBToken Project 0xbt',
    symbol: 'ZXBT',
    decimals: 3,
    exchangeAddress: '0xce1ccd4668c88d5ea832a33048c41c3eded3b38a'
  },
  {
    tokenAddress: '0x9181eef2ea5624c187d1147134b847552302da2a',
    name: 'DOYLE COIN',
    symbol: 'DOYLE',
    decimals: 18,
    exchangeAddress: '0xb95eba7ff86e34d7eb8fb91618a6119059908bbb'
  },
  {
    tokenAddress: '0x91bc206f0a1ffbc399b4a20a41324ed1dad2b718',
    name: 'Bullshit',
    symbol: 'BSH',
    decimals: 0,
    exchangeAddress: '0x8f628ae9acdd5566063a39c0980160d60ab33b41'
  },
  {
    tokenAddress: '0x9f22a13204c09e0f89144b63da0588a836c07931',
    name: 'Momentum',
    symbol: 'MMTM',
    decimals: 18,
    exchangeAddress: '0xb472682be408335d93d1a9b56fd1f92a8ab55198'
  },
  {
    tokenAddress: '0x3d46454212c61ecb7b31248047fa033120b88668',
    name: 'The Movement',
    symbol: 'MVT',
    decimals: 18,
    exchangeAddress: '0x89a294f122d1cc3696be37d00d113f45c262712a'
  },
  {
    tokenAddress: '0x5d858bcd53e085920620549214a8b27ce2f04670',
    name: 'POP Network Token',
    symbol: 'POP',
    decimals: 18,
    exchangeAddress: '0xdd60feabc16bbc79ec558fd4b852fe1ed9f030e8'
  },
  {
    tokenAddress: '0xcd3673af09e76c74d889aabab68ca0645566a3a1',
    name: 'Unicorn Candy Coin',
    symbol: 'Candy',
    decimals: 18,
    exchangeAddress: '0x450afa2c7d86cd4aa024a407e5b391627b013fc7'
  },
  {
    tokenAddress: '0x4c383bdcae52a6e1cb810c76c70d6f31a249ec9b',
    name: 'Rusgas',
    symbol: 'RGS',
    decimals: 8,
    exchangeAddress: '0xecdd1fc0b1297683330436a99ffecb8a156cb098'
  },
  {
    tokenAddress: '0x5121e348e897daef1eef23959ab290e5557cf274',
    name: 'PolyAi',
    symbol: 'AI',
    decimals: 18,
    exchangeAddress: '0x3ca04f154b30661a84fdcddadc55f66b8ad82221'
  },
  {
    tokenAddress: '0xdb13025b219db5e4529f48b65ff009a26b6ae733',
    name: 'Ubricoin',
    symbol: 'UBN',
    decimals: 18,
    exchangeAddress: '0x170cb1c6b6ca03f693c79617001f83a47bedea8c'
  },
  {
    tokenAddress: '0xdde19c145c1ee51b48f7a28e8df125da0cc440be',
    name: 'Embiggen',
    symbol: 'MBGN',
    decimals: 18,
    exchangeAddress: '0x6af056d9919fab5b046112778340108d5ec3ebbb'
  },
  {
    tokenAddress: '0xd938137e6d96c72e4a6085412ada2dad78ff89c4',
    name: 'Change Your Life',
    symbol: 'AAA',
    decimals: 8,
    exchangeAddress: '0x4fc96501dc4a33d2ae5d67d844f4434f3eef92d7'
  },
  {
    tokenAddress: '0x8aa688ab789d1848d131c65d98ceaa8875d97ef1',
    name: 'MultiVAC',
    symbol: 'MTV',
    decimals: 18,
    exchangeAddress: '0x3acb0e353759645d2c8ae098e2238956ceb681fb'
  },
  {
    tokenAddress: '0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c',
    name: 'Nuls',
    symbol: 'NULS',
    decimals: 18,
    exchangeAddress: '0x12dbf069f65dde8443782a92cfc47094754aa0cf'
  },
  {
    tokenAddress: '0xc42209accc14029c1012fb5680d95fbd6036e2a0',
    name: 'PayPie',
    symbol: 'PPP',
    decimals: 18,
    exchangeAddress: '0x1b810f17eeef12838fe059c926093b30653e7567'
  },
  {
    tokenAddress: '0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482',
    name: 'Insight Chain',
    symbol: 'INB',
    decimals: 18,
    exchangeAddress: '0x3a891d655c929b22e3d6791238f3a4545e31b81e'
  },
  {
    tokenAddress: '0xc0f1728d9513efc316d0e93a0758c992f88b0809',
    name: 'SWTCoin',
    symbol: 'SWAT',
    decimals: 8,
    exchangeAddress: '0x6c81a9649c26fc34db64967de6117c8a25e273db'
  },
  {
    tokenAddress: '0x4c3ad93c06a073be57845549914f8833101b58f3',
    name: 'Polycoin',
    symbol: 'PYC',
    decimals: 0,
    exchangeAddress: '0xf52281071b0563a95c34753fcf615d0d3c2c4de3'
  },
  {
    tokenAddress: '0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce',
    name: 'Amber Token',
    symbol: 'AMB',
    decimals: 18,
    exchangeAddress: '0xca265a7f4c9dc47b259850b696ebeffa8bb18d9d'
  },
  {
    tokenAddress: '0x24dcc881e7dd730546834452f21872d5cb4b5293',
    name: 'Data Transaction Token',
    symbol: 'XD',
    decimals: 18,
    exchangeAddress: '0xb7cf1e1ea55572713feeec025d7cf56b3c6c6b6d'
  },
  {
    tokenAddress: '0x0000000000085d4780b73119b644ae5ecd22b376',
    name: 'TrueUSD',
    symbol: 'TUSD',
    decimals: 18,
    exchangeAddress: '0x5048b9d01097498fd72f3f14bc9bc74a5aac8fa7'
  },
  {
    tokenAddress: '0x1122b6a0e00dce0563082b6e2953f3a943855c1f',
    name: 'Centrality Token',
    symbol: 'CENNZ',
    decimals: 18,
    exchangeAddress: '0xb25b1703b37ae34d405ad9d053aada87967aba92'
  },
  {
    tokenAddress: '0x46ffe978f4cf28e7135804ff244b6cdc8dc51377',
    name: 'CRYPTONUTZ',
    symbol: 'NUTZ',
    decimals: 18,
    exchangeAddress: '0xcb3091c01bd9502b666a6a0de55bf9df461fde68'
  },
  {
    tokenAddress: '0x88d60255f917e3eb94eae199d827dad837fac4cb',
    name: 'Gastoken.io',
    symbol: 'GST1',
    decimals: 2,
    exchangeAddress: '0x5b583057dfbc49c67dcd017b75a11148db1168e6'
  },
  {
    tokenAddress: '0x66946bc3e6738c70bbc4e69eb38a507f8eb9bc20',
    name: 'Forcount',
    symbol: 'FOCT',
    decimals: 18,
    exchangeAddress: '0x20ead976847626004d0120bcd02eb526eb6985c3'
  },
  {
    tokenAddress: '0x0cb8d0b37c7487b11d57f1f33defa2b1d3cfccfe',
    name: 'Dank Token',
    symbol: 'DANK',
    decimals: 18,
    exchangeAddress: '0x68e83c65629ed0d6e836c1957d304aa2741b240e'
  },
  {
    tokenAddress: '0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1',
    name: 'Nuggets',
    symbol: 'NUG',
    decimals: 18,
    exchangeAddress: '0x0887f5a22d0f258f11fb1562b6b5504efd5ff021'
  },
  {
    tokenAddress: '0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c',
    name: 'Devery.io',
    symbol: 'EVE',
    decimals: 18,
    exchangeAddress: '0x23ffd1d8077b3e3679d48b9002dd11471e2295bc'
  },
  {
    tokenAddress: '0xef8a2c1bc94e630463293f71bf5414d13e80f62d',
    name: 'Synthetix Network Token',
    symbol: 'SNX',
    decimals: 18,
    exchangeAddress: '0xd9025ed64baa7b9046e37fe94670c79fccb2b5c8'
  },
  {
    tokenAddress: '0xb363a3c584b1f379c79fbf09df015da5529d4dac',
    name: 'MiracleTele',
    symbol: 'TELE',
    decimals: 18,
    exchangeAddress: '0xcf6c25cfe2b2f6951357f0827e06430e1151ffb7'
  },
  {
    tokenAddress: '0x3bea1cb0ea10a35b1995233d6d57b34fb3142b1b',
    name: 'Moiom',
    symbol: 'MIM',
    decimals: 18,
    exchangeAddress: '0x88942e83677e89c7bf68fc9e07621b09c33b4d47'
  },
  {
    tokenAddress: '0xfb48e0dea837f9438309a7e9f0cfe7ee3353a84e',
    name: 'Africahead Ipparts',
    symbol: 'AFA',
    decimals: 2,
    exchangeAddress: '0xfe52450ea8d64bc55c295c6162318ed79bb69df6'
  },
  {
    tokenAddress: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    name: 'LoopringCoin V2',
    symbol: 'LRC',
    decimals: 18,
    exchangeAddress: '0xa539baaa3aca455c986bb1e25301cef936ce1b65'
  },
  {
    tokenAddress: '0x0dba2b5162c4986acb5ddd1b4069de5ad749b47e',
    name: 'Wizard Shares',
    symbol: 'MAGK',
    decimals: 18,
    exchangeAddress: '0x1ac13316a2c2beb2f701ccd4238dc34c74bb0c12'
  },
  {
    tokenAddress: '0xbae235823d7255d9d48635ced4735227244cd583',
    name: 'Staker',
    symbol: 'STR',
    decimals: 18,
    exchangeAddress: '0xc99b59ffae2abe1d66c2eb5a517be0f1b813c98b'
  },
  {
    tokenAddress: '0xe531642e9bb5d027e9c20e03284287b97919a9a5',
    name: 'FaithCoin',
    symbol: 'FAITH',
    decimals: 8,
    exchangeAddress: '0x61c2145f113f5f9bc970476817f990831d60d38c'
  },
  {
    tokenAddress: '0x1ebda9b505ad2c6ccee86bfc18f58035dcfdc26a',
    name: 'RomikaHungary',
    symbol: 'RMK',
    decimals: 2,
    exchangeAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa'
  },
  {
    tokenAddress: '0x8a99ed8a1b204903ee46e733f2c1286f6d20b177',
    name: 'Fujinto',
    symbol: 'NTO',
    decimals: 18,
    exchangeAddress: '0xab76c739664681b0d84dc29250d4f71c5c249024'
  },
  {
    tokenAddress: '0xef2463099360a085f1f10b076ed72ef625497a06',
    name: 'Sharpe Platform Token',
    symbol: 'SHP',
    decimals: 18,
    exchangeAddress: '0x25a2273f0654b35c5daf8cd129f44e6bd32146f0'
  },
  {
    tokenAddress: '0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1',
    name: 'BitAsean',
    symbol: 'BAS',
    decimals: 8,
    exchangeAddress: '0x5b6752dd3c7e68694440ea90124aa8d16e0ba0cd'
  },
  {
    tokenAddress: '0x642e48713946ecdb12c0b8830e8cb64425327955',
    name: 'HC',
    symbol: 'HC',
    decimals: 0,
    exchangeAddress: '0xdec31635e50acc89eeef6ec079766aaa7703ae3d'
  },
  {
    tokenAddress: '0x985dd3d42de1e256d09e1c10f112bccb8015ad41',
    name: 'OceanToken',
    symbol: 'OCEAN',
    decimals: 18,
    exchangeAddress: '0xa59cc1618d144ccac2bfb46f61272cebf00d90d5'
  },
  {
    tokenAddress: '0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c',
    name: 'Amon',
    symbol: 'AMN',
    decimals: 18,
    exchangeAddress: '0xe6c198d27a5b71144b40cfa2362ae3166728e0c8'
  },
  {
    tokenAddress: '0x0c6144c16af288948c8fdb37fd8fec94bff3d1d9',
    name: 'Neutral',
    symbol: 'NUSD',
    decimals: 6,
    exchangeAddress: '0xce23d871009a52ab5560ba613a042e45e1f33539'
  },
  {
    tokenAddress: '0xf01d7939441a3b1b108c70a28dcd99c6a98ad4b4',
    name: 'Partial Coin',
    symbol: 'PRTL',
    decimals: 18,
    exchangeAddress: '0xc0a09103c80752e6e7c4265bfad7abecb37d4f06'
  },
  {
    tokenAddress: '0x78b039921e84e726eb72e7b1212bb35504c645ca',
    name: 'Sether',
    symbol: 'SETH',
    decimals: 18,
    exchangeAddress: '0xb25b24c590c3b92d18d41a9201922eb94ba884d2'
  },
  {
    tokenAddress: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
    name: 'Bitfinex LEO Token',
    symbol: 'LEO',
    decimals: 18,
    exchangeAddress: '0xb54084ac1ffd5682771cff0432a29110923de100'
  },
  {
    tokenAddress: '0x1c95b093d6c236d3ef7c796fe33f9cc6b8606714',
    name: 'BOMB',
    symbol: 'BOMB',
    decimals: 0,
    exchangeAddress: '0x078e8ac023f6457264c96719cbeb94dddeda9dd5'
  },
  {
    tokenAddress: '0x763fa6806e1acf68130d2d0f0df754c93cc546b2',
    name: 'LITION',
    symbol: 'LIT',
    decimals: 18,
    exchangeAddress: '0x8f814b4f0c18968a6d7aada420ecee74a33ecd3f'
  },
  {
    tokenAddress: '0x19d9b17497824081e291115044b567c4722cdaeb',
    name: 'Wrapped CryptoKitties',
    symbol: 'WCK',
    decimals: 18,
    exchangeAddress: '0x92d70317913a2fb013f252b7a139ed1782edc6d6'
  },
  {
    tokenAddress: '0x9fadea1aff842d407893e21dbd0e2017b4c287b6',
    name: 'PGF500 Token',
    symbol: 'PGF7T',
    decimals: 18,
    exchangeAddress: '0x7232869cc7dc739b95dcdcd2f685f094ffd13811'
  },
  {
    tokenAddress: '0x5f16c1991dff3f6fc2ea3ca3f3e6da13e1ddcb39',
    name: 'TestTokenZ8',
    symbol: 'TTZ',
    decimals: 8,
    exchangeAddress: '0xfa35e10c144adbc51ddcb5ea2271329df9ad00a3'
  },
  {
    tokenAddress: '0x5c437a92e1c60570a43bed78eb3f9e0ea5121b32',
    name: 'MetaCartel',
    symbol: 'META',
    decimals: 0,
    exchangeAddress: '0xbe7d47c6f434d60ebb6877c5160a8ca05d83b789'
  },
  {
    tokenAddress: '0x0cbc9b02b8628ae08688b5cc8134dc09e36c443b',
    name: 'Tratok',
    symbol: 'TRAT',
    decimals: 5,
    exchangeAddress: '0x57a579ac8d28264784d61897b407ee693028a070'
  },
  {
    tokenAddress: '0xfa0f26d2334764ce9f9582d8ad0514b5712589cf',
    name: 'AweCoin',
    symbol: 'AWE',
    decimals: 0,
    exchangeAddress: '0xcf636d7519e5385816a66cfd0955bc74b4ef6054'
  },
  {
    tokenAddress: '0xf5bdb0aa9f0c05ec3fc8a31d7053652401982b4d',
    name: 'LoveArtHate',
    symbol: 'LAH',
    decimals: 18,
    exchangeAddress: '0xc022da71557968e0fce96c423699323a7b7c0f99'
  },
  {
    tokenAddress: '0x5a4ade4f3e934a0885f42884f7077261c3f4f66f',
    name: 'Synthetix Network Token',
    symbol: 'SNX',
    decimals: 18,
    exchangeAddress: '0x8da198a049426bfcf1522b0dc52f84beda6e38ff'
  },
  {
    tokenAddress: '0x100a6e7a8710726bc28d0213da0b4f06702ce349',
    name: 'LitecoinDiamond',
    symbol: 'LTCD',
    decimals: 0,
    exchangeAddress: '0xbd3ee2572bb1e4c68e3935d13dd8b121261ccd4e'
  },
  {
    tokenAddress: '0x09fe5f0236f0ea5d930197dce254d77b04128075',
    name: 'Wrapped CryptoKitties',
    symbol: 'WCK',
    decimals: 18,
    exchangeAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac'
  },
  {
    tokenAddress: '0xc68643bccde12df925469fe45df8a60812e64b36',
    name: 'Pi Edutainment Global',
    symbol: 'PIEG',
    decimals: 18,
    exchangeAddress: '0xd9ed4b169b897795e678266f9d2e1ace015d79e5'
  },
  {
    tokenAddress: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
    name: 'Compound USD Coin',
    symbol: 'cUSDC',
    decimals: 8,
    exchangeAddress: '0xb791c10824296881f91bdbc16367bbd9743fd99b'
  },
  {
    tokenAddress: '0x80f222a749a2e18eb7f676d371f19ad7efeee3b7',
    name: 'Magnolia Token',
    symbol: 'MGN',
    decimals: 18,
    exchangeAddress: '0xdd80ca8062c7ef90fca2547e6a2a126c596e611f'
  },
  {
    tokenAddress: '0x8ddc86dba7ad728012efc460b8a168aba60b403b',
    name: 'ETHDaiRebalancingSetToken',
    symbol: 'ETHDai',
    decimals: 18,
    exchangeAddress: '0x06379be162b7d71fd188a48964978c7f0b56845a'
  },
  {
    tokenAddress: '0x917d8f35a10985add5d7d95770af8cabefb05eaa',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0xdf4d0de9b4529fcbc3458e4c8653a08745132c53'
  },
  {
    tokenAddress: '0x092ac353612d41e5ad1c2bb511b51a8619c639af',
    name: 'HungaryFiller',
    symbol: 'HUF',
    decimals: 2,
    exchangeAddress: '0x48a3ce9045e350b588af4e8edff81f6335c121fe'
  },
  {
    tokenAddress: '0x0fac12df2fc6c2499cca50d7dbdc4d691c3a94f9',
    name: 'TESTGOLD',
    symbol: 'TESTGLD',
    decimals: 18,
    exchangeAddress: '0x14db4410da6d1235bb0d6053695e50c1007986ae'
  },
  {
    tokenAddress: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17',
    name: 'PILLAR',
    symbol: 'PLR',
    decimals: 18,
    exchangeAddress: '0x9631959ba6e2624f004302af262cc5f8c81c9058'
  },
  {
    tokenAddress: '0x9214ec02cb71cba0ada6896b8da260736a67ab10',
    name: 'Real Estate Asset Ledger',
    symbol: 'REAL',
    decimals: 18,
    exchangeAddress: '0x5a7d213c2ca1b5068b489f8b55a7a1ec87ed9180'
  },
  {
    tokenAddress: '0x554b520b298be389f0d87bf3376eb4d6510456ec',
    name: 'Tokenmom',
    symbol: 'TM',
    decimals: 18,
    exchangeAddress: '0xc2e27d332d12bde9bac91d535fec25869c4d5794'
  },
  {
    tokenAddress: '0xfb2f26f266fb2805a387230f2aa0a331b4d96fba',
    name: 'DADI',
    symbol: 'DADI',
    decimals: 18,
    exchangeAddress: '0xed06fe62f03b35c7582c9b63b1927eafbcb42a01'
  },
  {
    tokenAddress: '0xe06af951086ec3c488b50e31be29c07f8a260ca3',
    name: 'EXU Protocol',
    symbol: 'EXU',
    decimals: 16,
    exchangeAddress: '0x6ad8501ba523fbd9862e90c7cd39aa1d177cd3e2'
  },
  {
    tokenAddress: '0x8b654789353b0b622667f105eaef9e97d3c33f44',
    name: 'PeasantCoin',
    symbol: 'PSNT',
    decimals: 18,
    exchangeAddress: '0x86bf391ea35d762e345d6eb603abf1e6f444345d'
  },
  {
    tokenAddress: '0xee91e47cff7ab926b45edce1687020a3748556c3',
    name: 'Shadowlands Token',
    symbol: 'SHT',
    decimals: 18,
    exchangeAddress: '0x75f6fdfa5cbbd6466d33b013bec78bd92e9014b5'
  },
  {
    tokenAddress: '0x2207bc0aac812fa3e03463d73d65a5fae9b9bf83',
    name: 'PeasantCoin',
    symbol: 'PSNT',
    decimals: 18,
    exchangeAddress: '0x9cea564ad3a2a45be6a32155a29c49f7db24e48c'
  },
  {
    tokenAddress: '0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7',
    name: 'Unicorns',
    symbol: '🦄',
    decimals: 0,
    exchangeAddress: '0x737182f561e6aa7bb5618764a9e775ca0bc25572'
  },
  {
    tokenAddress: '0x3ccb1fe6d628444fb1c823a3ee3573ed0a21f338',
    name: 'Bountie',
    symbol: 'BNTE',
    decimals: 18,
    exchangeAddress: '0xd76eb30a740485f9f9348600bea83b5e8b954bb1'
  },
  {
    tokenAddress: '0xabaab06fd0ba2c3bc22dcb66c2fd84c012a917f8',
    name: 'PeasantCoin',
    symbol: 'PSNT',
    decimals: 18,
    exchangeAddress: '0xd3879a36df8ad7eeeabaf27623cb6d401c131ae5'
  },
  {
    tokenAddress: '0x858b1f24940e64e08b6941946a29aa352f218ae6',
    name: 'HungaryGold',
    symbol: 'HUG',
    decimals: 2,
    exchangeAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe'
  },
  {
    tokenAddress: '0x862da0a691bb0b74038377295f8ff523d0493eb4',
    name: 'MINDOL',
    symbol: 'MIN',
    decimals: 18,
    exchangeAddress: '0x4a3776c887eb285d9339ee63426a1bec5be3f2dd'
  },
  {
    tokenAddress: '0x5c872500c00565505f3624ab435c222e558e9ff8',
    name: 'CoTrader',
    symbol: 'COT',
    decimals: 18,
    exchangeAddress: '0xf7e033ab0f295e1e240f2be18a0650b2d2a1a4c3'
  },
  {
    tokenAddress: '0x748bab4b67948196aec77ee76526ce215b5eb63b',
    name: 'XCOIN',
    symbol: 'XCN',
    decimals: 6,
    exchangeAddress: '0x832d945efa8a9327acdb652d418b746eb6251958'
  },
  {
    tokenAddress: '0x2eb1e8fd394222df25638cfa8f0e5e7998a9dc1f',
    name: 'Burninator Token',
    symbol: 'BRNT',
    decimals: 18,
    exchangeAddress: '0x4d1aaa65b594fab18b74cd05f45a69aefdc1702a'
  },
  {
    tokenAddress: '0xb364701c2591f3553062cf0a212c0df523572f7c',
    name: 'everiToken',
    symbol: 'EVTN',
    decimals: 8,
    exchangeAddress: '0xe3f3f0b24a709eff923931775190656807301cc9'
  },
  {
    tokenAddress: '0x8e16df6b7631b3d781a94be2260d1d4a96cb565a',
    name: 'JiuLove',
    symbol: 'JL',
    decimals: 4,
    exchangeAddress: '0x1820c1c04632d56ac2fb191656e882f007a6ce58'
  },
  {
    tokenAddress: '0x78230e69d6e6449db1e11904e0bd81c018454d7a',
    name: 'LeapToken',
    symbol: 'LEAP',
    decimals: 18,
    exchangeAddress: '0xb5e62826970f6b66ad3084d5f77970626be62a99'
  },
  {
    tokenAddress: '0xf70a642bd387f94380ffb90451c2c81d4eb82cbc',
    name: 'Starbase',
    symbol: 'STAR',
    decimals: 18,
    exchangeAddress: '0x26fedc50bd36d2fa9997242b97ad62b87bf7a7b9'
  },
  {
    tokenAddress: '0xf784682c82526e245f50975190ef0fff4e4fc077',
    name: 'Inlock token',
    symbol: 'ILK',
    decimals: 8,
    exchangeAddress: '0x75fa9abc14fa165eca10d8fd60c9c0c2c83de124'
  },
  {
    tokenAddress: '0xa8f732224456a795061bf3964416c1b69c083dfa',
    name: 'Cisco Dollarz',
    symbol: 'CDZ',
    decimals: 18,
    exchangeAddress: '0xb2007899c7148893e4a456574b320bae4bd0bd71'
  },
  {
    tokenAddress: '0xd9a12cde03a86e800496469858de8581d3a5353d',
    name: 'YUP',
    symbol: 'YUP',
    decimals: 18,
    exchangeAddress: '0x26a9717f658eeed4ba5dbdba5908fb34149c44db'
  },
  {
    tokenAddress: '0x621f61444a000b38aa467f585dacfadf3f976f75',
    name: 'Dentacoin',
    symbol: 'DCN',
    decimals: 0,
    exchangeAddress: '0x5b7ebc24192955ac576ee074107a11b15e659f02'
  },
  {
    tokenAddress: '0x08d32b0da63e2c3bcf8019c9c5d849d7a9d791e6',
    name: 'Dentacoin',
    symbol: '٨',
    decimals: 0,
    exchangeAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc'
  },
  {
    tokenAddress: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
    name: 'STASIS EURS Token',
    symbol: 'EURS',
    decimals: 2,
    exchangeAddress: '0x4b4c63ea99e2835b9d899610c22084513f71ee03'
  },
  {
    tokenAddress: '0x448bd15ac18ce6386c27914c14c18fd9148df75f',
    name: 'XS2 Token',
    symbol: 'XS2',
    decimals: 18,
    exchangeAddress: '0x06f6685eaefa8ece41d2ebbb0c707203f731be01'
  },
  {
    tokenAddress: '0x96cd3fa86724f2f15d61b2a7faeb9e6cd0a0a587',
    name: '0 DardosHungary',
    symbol: '0DARCOIN',
    decimals: 2,
    exchangeAddress: '0x0637d5e66da105431a1d444ee06e76349ab22ed4'
  },
  {
    tokenAddress: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
    name: 'Quantstamp Token',
    symbol: 'QSP',
    decimals: 18,
    exchangeAddress: '0x82db9fc4956fa40efe1e35d881004612b5cb2cc2'
  },
  {
    tokenAddress: '0xd7de455acaff66370f91d90dd0df8f07d3c84fe7',
    name: 'PenniHungary',
    symbol: 'PHU',
    decimals: 2,
    exchangeAddress: '0xfd00fa15894ca24862371a9dda75596ad31af86e'
  },
  {
    tokenAddress: '0xc8c6fc3c4f6342c5291e747268625f979a888ebf',
    name: 'Green Money',
    symbol: 'GRM',
    decimals: 18,
    exchangeAddress: '0xac432121efb452540ec96f5f0aa922d890c6a588'
  },
  {
    tokenAddress: '0x89c98f4529a41c7ee25d730d29bc39170ed11c60',
    name: 'Astro',
    symbol: 'ASR',
    decimals: 18,
    exchangeAddress: '0xeda88ddb13888c9a4de7304965e9315e69ea980e'
  },
  {
    tokenAddress: '0x5d210a4c794fa210c64712f1e395ec1136aaec4c',
    name: 'www.pnztrust.com',
    symbol: '(333eth.io - https://t.me/Ethereum333/262)',
    decimals: 0,
    exchangeAddress: '0x4177a0d8ace5425f463ad155538c5c6f2df187d1'
  },
  {
    tokenAddress: '0x2ff2b86c156583b1135c584fd940a1996fa4230b',
    name: 'https://findtherabbit.me',
    symbol: 'findtherabbit.me',
    decimals: 18,
    exchangeAddress: '0xaef9b172ac5c7e2d3058de906ec00a4499d2b62c'
  },
  {
    tokenAddress: '0xc58c0fca06908e66540102356f2e91edcaeb8d81',
    name: 'HalfLife',
    symbol: 'NUKE',
    decimals: 18,
    exchangeAddress: '0x39f70a026e6e2aac3453aeb8e563025afb542f9f'
  },
  {
    tokenAddress: '0x0027449bf0887ca3e431d263ffdefb244d95b555',
    name: 'Not',
    symbol: 'NOT',
    decimals: 18,
    exchangeAddress: '0xd88958eac44250d46b2a6cc05873663dd1117acf'
  },
  {
    tokenAddress: '0x532ba7b9534a31e0898a9a64e0a898d4bb8db34d',
    name: 'LEIREL',
    symbol: 'LEI',
    decimals: 0,
    exchangeAddress: '0x8baffadc6694b1b00849119e459fda5df8a8e4af'
  },
  {
    tokenAddress: '0x42456d7084eacf4083f1140d3229471bba2949a8',
    name: 'Synth sETH',
    symbol: 'sETH',
    decimals: 18,
    exchangeAddress: '0x4740c758859d4651061cc9cdefdba92bdc3a845d'
  },
  {
    tokenAddress: '0xf73848b04c6315bb8db6492c04ba20828c0c7bdc',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0x1737f4b853d58785595612aa07c4ca2ffd561b9c'
  },
  {
    tokenAddress: '0x20649d97b1393105cf92a5083fd2aff7c99ebe56',
    name: 'STBTCDaiRebalancingSetToken',
    symbol: 'STBTCDai',
    decimals: 18,
    exchangeAddress: '0xe2e496e3fc550b68feeeddad7db42d7063e6729e'
  },
  {
    tokenAddress: '0x768be41feb0216a8e2a8daa30567fc3e40226cbe',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0xdf788db9789078d631ab7d4e39d52f7a18d91366'
  },
  {
    tokenAddress: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
    name: 'Reserve Rights',
    symbol: 'RSR',
    decimals: 18,
    exchangeAddress: '0xeeeec06f48656e921b39e30d9a205cb2b08ea465'
  },
  {
    tokenAddress: '0x9469d013805bffb7d3debe5e7839237e535ec483',
    name: 'Evolution Land Global Token',
    symbol: 'RING',
    decimals: 18,
    exchangeAddress: '0xebd8aa50b26bfa63007d61eba777a9dde7e43c64'
  },
  {
    tokenAddress: '0x9b4e167aea30f94929017f747f5496284141aa96',
    name: 'TransGen',
    symbol: 'XGN',
    decimals: 18,
    exchangeAddress: '0x0ee1fcf75535c80163c1bd9f5a127106b8c3c49f'
  },
  {
    tokenAddress: '0x5d0fa08aeb173ade44b0cf7f31d506d8e04f0ac8',
    name: '360APP',
    symbol: 'DAPP',
    decimals: 18,
    exchangeAddress: '0x68f21a820436d4a43aca3d4e59f814027ecae7ac'
  },
  {
    tokenAddress: '0x6773770653c9995f602aa0058349b9b68962db96',
    name: 'DollarHungary',
    symbol: 'DHU',
    decimals: 2,
    exchangeAddress: '0x1f068f775aa7b4b7a5f388e6ce04615492343175'
  },
  {
    tokenAddress: '0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a',
    name: 'Luna',
    symbol: 'LUNA',
    decimals: 18,
    exchangeAddress: '0x89c1c0741f1e044a7bd8b8d96d975792ea0dd6d5'
  },
  {
    tokenAddress: '0x33b282c88de3e8ed471c24e43f60816dcabe12f4',
    name: 'Hopper Token',
    symbol: 'HOPP',
    decimals: 18,
    exchangeAddress: '0xbfb7eddf9d97ddc9e807b903a7d68becda14660e'
  },
  {
    tokenAddress: '0x4492e10fd69be9ae85d75bdcda2d9d1e68c0eea6',
    name: 'Quaffle',
    symbol: 'QUAF',
    decimals: 18,
    exchangeAddress: '0xdf20b0ec6cd1505a1b2d15ea1a4aaa67ae2c0a3b'
  },
  {
    tokenAddress: '0x30765406d51091ed78ff13c107731daf3be5ef16',
    name: 'Premine',
    symbol: 'PRE',
    decimals: 18,
    exchangeAddress: '0x0182865fa09594e4b27496889cbf0bbc818813c6'
  },
  {
    tokenAddress: '0xc06aec5191be16b94ffc97b6fc01393527367365',
    name: 'BTC ETH Equal Weight Set',
    symbol: 'BTCETH5050',
    decimals: 18,
    exchangeAddress: '0x539f7952f7b21c48aff332cd5d9cf6e28eba290f'
  },
  {
    tokenAddress: '0xec7954f452a6473c21c4078501f0bcf8b266bc99',
    name: 'ADSCASH',
    symbol: 'ADS',
    decimals: 2,
    exchangeAddress: '0x528dd20d7e58e32d33b2e7f2684ce792dfeb44c5'
  },
  {
    tokenAddress: '0xdb8646f5b487b5dd979fac618350e85018f557d4',
    name: 'BitcoinToken',
    symbol: 'BTK',
    decimals: 18,
    exchangeAddress: '0x85810ea52373a8c5184ea8bf2b3231587fa9ff04'
  },
  {
    tokenAddress: '0x2392f6abf07b5fce14603d0e28fc952205b8703d',
    name: 'OmiseGO',
    symbol: ' OMG',
    decimals: 0,
    exchangeAddress: '0xb24803f59d661e0b3220aa06ab4a06d9482c9ac4'
  },
  {
    tokenAddress: '0xebbdf302c940c6bfd49c6b165f457fdb324649bc',
    name: 'Hydro',
    symbol: 'HYDRO',
    decimals: 18,
    exchangeAddress: '0xda28e640d58b4035bf60ba5900cb9a7c6618ec2a'
  },
  {
    tokenAddress: '0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2',
    name: 'Accelerator',
    symbol: 'ACC',
    decimals: 18,
    exchangeAddress: '0xe9025d3da6b90cef5b7b695f45ace93bff76e937'
  },
  {
    tokenAddress: '0xc617d51e3a1f621da8ae67b2f652d6ac02eb8d95',
    name: 'Hoard Token',
    symbol: 'HRD',
    decimals: 18,
    exchangeAddress: '0x303f47c87b66f53ad06f19a3e3d1764437ac43d6'
  },
  {
    tokenAddress: '0x3a4b527dcd618ccea50adb32b3369117e5442a2f',
    name: 'Zur Drafts by Zurcoin Core',
    symbol: 'ZUR-D',
    decimals: 0,
    exchangeAddress: '0xddd27201dc2f4a3a0afdcff8a807daf0b84c5dc9'
  },
  {
    tokenAddress: '0x6126747b7d21c5860cbffbb7654fbc8d3e63a2bb',
    name: 'Hcmcoin',
    symbol: 'HCM',
    decimals: 18,
    exchangeAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9'
  },
  {
    tokenAddress: '0x70da15db5377ac51131c2fd0ade87ec543ca9482',
    name: 'cnycoin',
    symbol: 'CNY',
    decimals: 18,
    exchangeAddress: '0xb682483ec02fe64f0bcbbfd1cbfa9c480aaa30c3'
  },
  {
    tokenAddress: '0x0a76aad21948ea1ef447d26dee91a54370e151e0',
    name: 'Ethereum Lite',
    symbol: 'ELITE',
    decimals: 18,
    exchangeAddress: '0x5301a674fdaf0020c9e737b01129a7889c5ff523'
  },
  {
    tokenAddress: '0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7',
    name: 'ShowHand',
    symbol: 'HAND',
    decimals: 0,
    exchangeAddress: '0xe20bda8c541bda6467d9034319e620e33b969d28'
  },
  {
    tokenAddress: '0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532',
    name: 'ZEON',
    symbol: 'ZEON',
    decimals: 18,
    exchangeAddress: '0x125c074a1d2060cf4ff5632fa0b3edd55918051a'
  },
  {
    tokenAddress: '0x72e646b78a2b58cbd9b0282c2e9c812bc8033293',
    name: 'Lunox',
    symbol: 'LNX',
    decimals: 18,
    exchangeAddress: '0x1d78ea3bbed15d226dabb9419942aec69c756c8b'
  },
  {
    tokenAddress: '0xb8d2d65d4d65124690f8eab76bea5d27cae5cc98',
    name: 'sucoin',
    symbol: 'SUC',
    decimals: 18,
    exchangeAddress: '0x1535758f55d879a00774fb27617edc4b968306be'
  },
  {
    tokenAddress: '0x86ad632c36425f0e0af2fcd6f55c160e10c04b26',
    name: 'BIT DINERO',
    symbol: 'XBR',
    decimals: 18,
    exchangeAddress: '0xce67eb9f9f097afca846483082bdd5ff5f85de6d'
  },
  {
    tokenAddress: '0x4a42d2c580f83dce404acad18dab26db11a1750e',
    name: 'Relex',
    symbol: 'RLX',
    decimals: 18,
    exchangeAddress: '0x9f8db6f625555230f549a9b1e2e314e0a3aaf68a'
  },
  {
    tokenAddress: '0xfc664cd8dffdd8fb4d1644e179400d386ca568eb',
    name: 'Felix',
    symbol: 'FEX',
    decimals: 8,
    exchangeAddress: '0xbe2360f4b16c33f11203d982bddb47f1b9197fea'
  },
  {
    tokenAddress: '0x0b403f3f213e75cd25b700093df79a95d2013357',
    name: 'Example Fixed Supply Token',
    symbol: 'FIXED',
    decimals: 18,
    exchangeAddress: '0x81742f8d52cb86f9223ee6e579a15e104775346b'
  },
  {
    tokenAddress: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0',
    name: '',
    symbol: 'EOS',
    decimals: 18,
    exchangeAddress: '0x8cf1b131c8a110458750dfcbb8f0e165d4d024ef'
  },
  {
    tokenAddress: '0x9ee0f1ae7ef59327b7618c1e07f3c2f903d9f2f9',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0x21e5133635d0e821a031e3d80b1a3da39c898f3a'
  },
  {
    tokenAddress: '0x3b820a1e03025d0fe6bc211b2550626b68a3b27c',
    name: 'Fibonum Cycling Token',
    symbol: 'FCT',
    decimals: 18,
    exchangeAddress: '0x0dbec05cc338244359febf0d9d9c85fc19f6f2db'
  },
  {
    tokenAddress: '0x4a57e687b9126435a9b19e4a802113e266adebde',
    name: 'Flexacoin',
    symbol: 'FXC',
    decimals: 18,
    exchangeAddress: '0xb878876e0627e362fd3d1afeebdf0bd69bba1911'
  },
  {
    tokenAddress: '0x30e39d0a38db74ac783f42c13dde1ea06e858992',
    name: 'Velareum',
    symbol: 'VELS',
    decimals: 2,
    exchangeAddress: '0x3c37e7c25dc158d7848fbd1c74578d9ad10ef91d'
  },
  {
    tokenAddress: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
    name: 'Compound 0x',
    symbol: 'cZRX',
    decimals: 8,
    exchangeAddress: '0x4e700f99bcecc5bad8e6a92ffc6354dda68cbc35'
  },
  {
    tokenAddress: '0x2008e3057bd734e10ad13c9eae45ff132abc1722',
    name: 'Zebi Coin',
    symbol: 'ZCO',
    decimals: 8,
    exchangeAddress: '0x30cfcb60496aea8bada3be97e8ca3f71560bf4ef'
  },
  {
    tokenAddress: '0x1bd223e638aeb3a943b8f617335e04f3e6b6fffa',
    name: 'Benzene',
    symbol: 'BZN',
    decimals: 18,
    exchangeAddress: '0xb28d4a770328e7a6ede7fc51d10f977ba755774e'
  },
  {
    tokenAddress: '0xcfcd43d7ee21416a71c2eb9888587d52716fc77a',
    name: 'HashRush',
    symbol: 'RUSH',
    decimals: 8,
    exchangeAddress: '0x0114a3b4e4fa4cf9721bd38ad40474e22ea72a16'
  },
  {
    tokenAddress: '0x583a9c440893ed5d563e68a60b12f1cc323d4862',
    name: 'TBOMB',
    symbol: 'TBOMB',
    decimals: 0,
    exchangeAddress: '0x79ecb46aa1adbe366824051642aa6de38525e48f'
  },
  {
    tokenAddress: '0x0be34c15f069663ff05ef5ea1e99ab3dd2d0fdce',
    name: 'KOI',
    symbol: 'KOI',
    decimals: 8,
    exchangeAddress: '0x87e8497a5d3ff985adf13b87992d473b9294970a'
  },
  {
    tokenAddress: '0xf880d3c6dcda42a7b2f6640703c5748557865b35',
    name: 'Futereum Centurian 1',
    symbol: 'FUTC1',
    decimals: 0,
    exchangeAddress: '0xa2368e017f3e040228fc5666cef4fc0e29f38af1'
  },
  {
    tokenAddress: '0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd',
    name: 'Free Coin',
    symbol: 'FREE',
    decimals: 18,
    exchangeAddress: '0x17f11fca7a66e8049484ae0a74e0013c5719ec77'
  },
  {
    tokenAddress: '0x783ba0062326861ee76e0e15429594922e9fe2f5',
    name: 'Andrey Voronkov Ventures Promo',
    symbol: 'AVVP',
    decimals: 18,
    exchangeAddress: '0xc70586daa52d4fbc4db2b20acaf7e1521f0c5854'
  },
  {
    tokenAddress: '0xb0cf07e9a74f214ec799a32fff225ddbc8d04ec8',
    name: 'Andrey Voronkov Ventures Promo',
    symbol: 'AVVP',
    decimals: 18,
    exchangeAddress: '0x24aae710b58dca6fc2bd18489a5503b2ecc2a094'
  },
  {
    tokenAddress: '0x150b0b96933b75ce27af8b92441f8fb683bf9739',
    name: 'Dragonereum Gold',
    symbol: 'GOLD',
    decimals: 18,
    exchangeAddress: '0x7b1c3192efa401ea37951fedc8007bcbec2dbb6d'
  },
  {
    tokenAddress: '0x0ac19d0617af7f95f154ae2cdfaa6f2c9dcec8f3',
    name: 'Wrapped CheezeWizards',
    symbol: 'WCW',
    decimals: 18,
    exchangeAddress: '0xe5c8509b84eb5789e66bdce57927357902212c7a'
  },
  {
    tokenAddress: '0x7d29a64504629172a429e64183d6673b9dacbfce',
    name: 'VectorspaceAI',
    symbol: 'VXV',
    decimals: 18,
    exchangeAddress: '0x7b9b5084aff35d3e9d87fb1e384853b806120bed'
  },
  {
    tokenAddress: '0xc2733c372a6cf303551073930799282fefe2b67a',
    name: 'HATE',
    symbol: 'HATE',
    decimals: 0,
    exchangeAddress: '0x9ebedf666dd5bfa7c3016eb2086e349421f994bb'
  },
  {
    tokenAddress: '0x5c679a0a79d495affe049c02483519d51e37f32b',
    name: 'DMHCO',
    symbol: 'DMHCO',
    decimals: 18,
    exchangeAddress: '0x8138e39124c65d7fe6874b2f5c47d5fad2581060'
  },
  {
    tokenAddress: '0x0ed8343dfdee32e38b4c4ce15a3b00a59e90f3db',
    name: 'Claymore',
    symbol: 'CLM',
    decimals: 18,
    exchangeAddress: '0x2433bd130055dc9df537d431908fbf64782df2f6'
  },
  {
    tokenAddress: '0x3f06b5d78406cd97bdf10f5c420b241d32759c80',
    name: 'CYBERFM',
    symbol: 'CYFM',
    decimals: 18,
    exchangeAddress: '0xbcd5a12038e57f9f2a1c38199663730cc9d7043b'
  },
  {
    tokenAddress: '0xe0c6ce3e73029f201e5c0bedb97f67572a93711c',
    name: 'ETHplode',
    symbol: 'ETHPLO',
    decimals: 6,
    exchangeAddress: '0x59af19879e9dcd298b9f1ad2b1ee5f5f7ed2d332'
  },
  {
    tokenAddress: '0x48b4a529915d8f19452248c3d2f825786f6c8d2a',
    name: 'TokenGo',
    symbol: 'TKG',
    decimals: 18,
    exchangeAddress: '0xda6311e9666fa1cf6f5436046a093297840cc21b'
  },
  {
    tokenAddress: '0xcd45962fcd817e8fea6bbe1a4bebdff1bedff232',
    name: 'Ambitious',
    symbol: 'AMB',
    decimals: 18,
    exchangeAddress: '0xc1bc313c8c6eab4316af2c4c7a3820744edc6188'
  },
  {
    tokenAddress: '0x7090a6e22c838469c9e67851d6489ba9c933a43f',
    name: 'Zuck Bucks',
    symbol: 'ZBUX',
    decimals: 0,
    exchangeAddress: '0xc2a27366deb7530bd7f812c69d48b0215e397771'
  },
  {
    tokenAddress: '0xb91c2a2b953d72f3ef890490669a0a41b0add5f7',
    name: 'Belifex',
    symbol: 'BEFX',
    decimals: 8,
    exchangeAddress: '0x9cc45bed4ce6fc354c7cfa8ccf1f28fa7c581a12'
  },
  {
    tokenAddress: '0xa1ba7186eec1be5114b0cf49b95b23adc4131b51',
    name: 'FTI NEWS Token',
    symbol: 'TECH',
    decimals: 10,
    exchangeAddress: '0x05ddab88b4d6fea1a3a92d8fccc6e594d5aa98f8'
  },
  {
    tokenAddress: '0xb33a7597d65f8d823b71fc6e3b6a5039298ffd23',
    name: 'Etherneum',
    symbol: 'ETX',
    decimals: 18,
    exchangeAddress: '0x7c77de084425871781eb5f36f25ee0ecf8561b8a'
  },
  {
    tokenAddress: '0x155454dd1a347ac93c3a0083871bb8498e50df74',
    name: 'TAOCOIN',
    symbol: 'TAO',
    decimals: 8,
    exchangeAddress: '0x4fd9f6bc7fe5f1c105a1f37a07d720d81d22f58a'
  },
  {
    tokenAddress: '0x313c068f339c6a1fbf7be5a9504b506f728dbc9d',
    name: 'Flyto',
    symbol: 'FLYTO',
    decimals: 18,
    exchangeAddress: '0x656d1150e7872aa23b49c35f96d6fd949d8d44bc'
  },
  {
    tokenAddress: '0xed4699f180a14b5974c26f494483f9c327fd381a',
    name: 'Synth sAUD',
    symbol: 'sAUD',
    decimals: 18,
    exchangeAddress: '0x972dce6be5f8b03893587f2e51b68f9fb281fc1e'
  },
  {
    tokenAddress: '0x11263b92661fa1fa96800139c9d6b510953a35eb',
    name: 'Sport Value Coin',
    symbol: 'SVC',
    decimals: 18,
    exchangeAddress: '0xd968eda9303509a529e77a59226f26b99a40a63f'
  },
  {
    tokenAddress: '0x30c6fe3ac0260a855c90cab79aa33e76091d4904',
    name: 'Futereum BTC 1',
    symbol: 'FUTB1',
    decimals: 18,
    exchangeAddress: '0x541b0a0088d82f19309758454d3a147636fa7dec'
  },
  {
    tokenAddress: '0xee418a19d6620aa478489032c2cb63464dd3e690',
    name: 'Futereum Markets 1',
    symbol: 'FUTM1',
    decimals: 18,
    exchangeAddress: '0x54ac92df89d04a851163dd63b6b404844cf1caf3'
  },
  {
    tokenAddress: '0xb19aae54d4ee672348d749e98cf90c584ef1b1ba',
    name: 'Generic Altcoin',
    symbol: 'GA',
    decimals: 18,
    exchangeAddress: '0x0a49bcd767dfee1823b87758fe537a80c2626c18'
  },
  {
    tokenAddress: '0x4c858151a41ea6f258e904ef4e2d3c310639cced',
    name: 'Generic Altcoin',
    symbol: 'GA',
    decimals: 18,
    exchangeAddress: '0x72a644cac9da1fd09925eaad5d92414e3f91c0ee'
  },
  {
    tokenAddress: '0xd982e7d6ebda6102cf2ca8428a4c44c28f2c490a',
    name: 'Generic Altcoin',
    symbol: 'GA',
    decimals: 18,
    exchangeAddress: '0x14ad6e9ddaf5cd668acb6ad0ab149ee248f9d712'
  },
  {
    tokenAddress: '0x73f46f17b1a9712262dc3410b37eae4233f36ff9',
    name: 'Generic Altcoin',
    symbol: 'GA',
    decimals: 18,
    exchangeAddress: '0xf8c5d69311d80d633b5caa147965caa2e576e6d1'
  },
  {
    tokenAddress: '0xd72172f90d5436b9abb3fbcf818d7e05fa1fc189',
    name: 'Generic Altcoin',
    symbol: 'GA',
    decimals: 18,
    exchangeAddress: '0xb3dca00babb56c28fb48bea9fdcd12c4bd1bbbb0'
  },
  {
    tokenAddress: '0x32c62c965db5fdac0f94e6276d6884070068d4be',
    name: 'Generic Altcoin',
    symbol: 'GA',
    decimals: 18,
    exchangeAddress: '0xf15bf23ae81e2ddd7a0e7995b4ab42d2903c9da3'
  },
  {
    tokenAddress: '0x4f7c5bd3f7d62a9c984e265d73a86f5515f3e92b',
    name: 'The Burn Token',
    symbol: 'BURN',
    decimals: 0,
    exchangeAddress: '0x2f5b009d42917452f4f057b0998dfad4d84c7662'
  },
  {
    tokenAddress: '0xb8796542765747ed7f921ff12faff057b5d624d7',
    name: 'Void Token',
    symbol: 'VOID',
    decimals: 18,
    exchangeAddress: '0xe8878ddc1e72fb4d14a1ca57fa17a247ca53aec1'
  },
  {
    tokenAddress: '0x5a63eb358a751b76e58325eadd86c2473fc40e87',
    name: 'Newb',
    symbol: 'NEWB',
    decimals: 18,
    exchangeAddress: '0x382f41a91a049c0e82265d0afa74c92a8bcc160a'
  },
  {
    tokenAddress: '0x657ffc4fb2c4625adbb3452556f7a482b76e5011',
    name: 'VULTUR',
    symbol: 'VLTR',
    decimals: 2,
    exchangeAddress: '0x804682061c0f8c4025c268471a907dce11539187'
  },
  {
    tokenAddress: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24',
    name: 'Render Token',
    symbol: 'RNDR',
    decimals: 18,
    exchangeAddress: '0xa117ffe7d3a756f665ef2e95bb770ab20008641a'
  },
  {
    tokenAddress: '0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e',
    name: 'Origo',
    symbol: 'OGO',
    decimals: 18,
    exchangeAddress: '0xc1a08ea89e5d550d22471159c995d2acaa6e43d0'
  },
  {
    tokenAddress: '0x1e00a1bc70de783963c5c9b28b5162aaca7570a2',
    name: 'NPT',
    symbol: 'NPTX',
    decimals: 6,
    exchangeAddress: '0x08c11f9c436072f45bb57e4a163989e88e05c883'
  },
  {
    tokenAddress: '0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a',
    name: 'Privatix',
    symbol: 'PRIX',
    decimals: 8,
    exchangeAddress: '0x7c4ee2b53ea4a7893b2794ba5fcc305ef426be0f'
  },
  {
    tokenAddress: '0x125f9d5daa039bdb79d36baff667e9e0bbcea998',
    name: 'Fire Token',
    symbol: 'FIRE',
    decimals: 18,
    exchangeAddress: '0xb33122fcded005785c40c18c6871ba15dad4fdcc'
  },
  {
    tokenAddress: '0x445f51299ef3307dbd75036dd896565f5b4bf7a5',
    name: 'V-ID Token',
    symbol: 'VIDT',
    decimals: 18,
    exchangeAddress: '0x0cfa80b92a082c680e109d66a29c54fb179d21d0'
  },
  {
    tokenAddress: '0x8c53931237b6360345b01f1cfa27f7b10f89be78',
    name: 'Cycloshield Coin',
    symbol: 'CYS',
    decimals: 18,
    exchangeAddress: '0x14e7b9e818604ab55e8af1e2877fdec2b397b14d'
  },
  {
    tokenAddress: '0x87210f1d3422ba75b6c40c63c78d79324dabcd55',
    name: 'EOS TRUST',
    symbol: 'EOST',
    decimals: 18,
    exchangeAddress: '0x25daa8ef739c741fc136162bf183b58dd249b4f7'
  },
  {
    tokenAddress: '0xd780ae2bf04cd96e577d3d014762f831d97129d0',
    name: 'Envion',
    symbol: 'EVN',
    decimals: 18,
    exchangeAddress: '0x55fff16e7ac0fe75b2a9598b5685531e27853df1'
  },
  {
    tokenAddress: '0xbbc3a290c7d2755b48681c87f25f9d7f480ad42f',
    name: 'Remittance Token',
    symbol: 'REMCO',
    decimals: 8,
    exchangeAddress: '0x06bca45ddf2ff3f1155f556cec95c8db86ab8167'
  },
  {
    tokenAddress: '0x6881e457e6b0f14bb48537ae0809c8c016a43c2a',
    name: 'KaiHua Coin',
    symbol: 'KHC',
    decimals: 3,
    exchangeAddress: '0x79d85477c2565ed9095bf7837fdcad830e9b3c4f'
  },
  {
    tokenAddress: '0xba23485a04b897c957918fde2dabd4867838140b',
    name: 'MARKET Protocol Token',
    symbol: 'MKT',
    decimals: 18,
    exchangeAddress: '0x7d6fa7b0a7dec3c0758f0b57bb446f4cee70d330'
  },
  {
    tokenAddress: '0x88652845a5495983b70aebbf25102361552d5e54',
    name: 'PhotochainToken',
    symbol: 'PHT',
    decimals: 18,
    exchangeAddress: '0x213988470530c2c098e6f22f15437930cdbcca26'
  },
  {
    tokenAddress: '0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f',
    name: 'COS',
    symbol: 'COS',
    decimals: 18,
    exchangeAddress: '0x7f9a00bb057424b9b1382591cfb8761d9b08a434'
  },
  {
    tokenAddress: '0xd8b8e1eca89da014e67fdbc2014eaa8e171079bf',
    name: 'FreldoCoinX',
    symbol: 'FRECNX',
    decimals: 18,
    exchangeAddress: '0x4aa12c2fb57060c51402af93a1d6f3803f05d453'
  },
  {
    tokenAddress: '0x072ccd6247e88114590d08d6a80b7a609473c17e',
    name: 'Incinerate Token',
    symbol: 'INC8',
    decimals: 2,
    exchangeAddress: '0xda6cb34c6f28e5282db47c0d8f40cdfd776fa004'
  },
  {
    tokenAddress: '0xc83355ef25a104938275b46cffd94bf9917d0691',
    name: 'Futereum Token',
    symbol: 'FUTR',
    decimals: 18,
    exchangeAddress: '0x12718364abaa8c9947d6009494e15dd8472438f6'
  },
  {
    tokenAddress: '0x3d917b9a3cee461870149b4b28556e4e2d112c13',
    name: 'JIBRAPAY',
    symbol: 'JIBRA',
    decimals: 18,
    exchangeAddress: '0x833b576ea7c2ff166ad7c624f8d4b14fb371aa30'
  },
  {
    tokenAddress: '0xd9d4a7ca154fe137c808f7eedbe24b639b7af5a6',
    name: 'Cereneum',
    symbol: 'CER',
    decimals: 8,
    exchangeAddress: '0xa00d014e48dadea7879d7142bf5bac5207c8ff29'
  },
  {
    tokenAddress: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    name: 'Ampleforth',
    symbol: 'AMPL',
    decimals: 9,
    exchangeAddress: '0x042dbbdc27f75d277c3d99efe327db21bc4fde75'
  },
  {
    tokenAddress: '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e',
    name: 'Dogetoken',
    symbol: 'DGT',
    decimals: 18,
    exchangeAddress: '0x180b93d88e19bff7abde971408716131ed7e2186'
  },
  {
    tokenAddress: '0x3d9a801720cdbce293edbc7d8dcd82d6ceaabbd3',
    name: 'CentHungary',
    symbol: 'CHU',
    decimals: 2,
    exchangeAddress: '0xd6c8e96d3cdebabea1a339a34a7e0c76975a504c'
  },
  {
    tokenAddress: '0xd69834f67b2f5a760617cc9a9bf5ae3a3bb256c2',
    name: 'Xenium',
    symbol: 'XENM',
    decimals: 18,
    exchangeAddress: '0x78eff350b7378e913d3dbc71ae5a3c179b7d70d2'
  },
  {
    tokenAddress: '0x1c3bb10de15c31d5dbe48fbb7b87735d1b7d8c32',
    name: 'BLONDCOIN',
    symbol: 'BLO',
    decimals: 18,
    exchangeAddress: '0x950cebfa171428216af64867deb6d13f3a27c54a'
  },
  {
    tokenAddress: '0xfe34099b8a1eb4cac66168f46014340ba425fa8f',
    name: 'Make Me Rich Token',
    symbol: 'MMR',
    decimals: 18,
    exchangeAddress: '0x7ff5079450e672f72801bf82899da5a3b6d464a5'
  },
  {
    tokenAddress: '0x22ac30b3afecbbf1cb69bc697bef0bd3e5bec349',
    name: 'Tripple A',
    symbol: 'AAA',
    decimals: 18,
    exchangeAddress: '0x42ad257cab68d8c4ed11ed1abdd89713b4fc86db'
  },
  {
    tokenAddress: '0x72b509b59bbfe847a1d68eae96161adff8675064',
    name: 'Sgame Token',
    symbol: 'SGM',
    decimals: 18,
    exchangeAddress: '0x3eb5c28b84041dd801fc1208a60c8dab63737acc'
  },
  {
    tokenAddress: '0x5ae655088e79fa0ced7b472d3bacd215ef796ccc',
    name: 'SmarcToken',
    symbol: 'SMARC',
    decimals: 18,
    exchangeAddress: '0xa810da2f8fca6816795662acfeee754aa528a1a5'
  },
  {
    tokenAddress: '0x7e1d8a8b01374ab1aa26b40e7c6733e6c168568a',
    name: 'Winsusu Token',
    symbol: 'SUSU',
    decimals: 18,
    exchangeAddress: '0x0a2a5291039c3d9c92fcd892063c25ec0fd240b7'
  },
  {
    tokenAddress: '0x8aedb297fed4b6884b808ee61faf0837713670d0',
    name: 'Wrapped MarbleCards',
    symbol: 'WMC',
    decimals: 18,
    exchangeAddress: '0xa0db39d28dacec1974f2a1f6bac7d33f37c102ec'
  },
  {
    tokenAddress: '0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb',
    name: 'BAX',
    symbol: 'BAX',
    decimals: 18,
    exchangeAddress: '0x7a43ce3ef79ad8b7adf23f4c1bdd0446fd7e4d76'
  },
  {
    tokenAddress: '0x5457d6324e77de6823c5341b6703cded16422829',
    name: 'REDGIL',
    symbol: 'REDGIL',
    decimals: 18,
    exchangeAddress: '0x7d365fa74360a0740d06552e90c7f320097a0fb3'
  },
  {
    tokenAddress: '0x4ff7fa493559c40abd6d157a0bfc35df68d8d0ac',
    name: 'Uniswap V1',
    symbol: 'UNI-V1',
    decimals: 18,
    exchangeAddress: '0x639977a3a318ecdde675f53a77fbe51716b16bfe'
  },
  {
    tokenAddress: '0x187d1018e8ef879be4194d6ed7590987463ead85',
    name: 'FUZE Token',
    symbol: 'FUZE',
    decimals: 18,
    exchangeAddress: '0x520e5f50adc6775723e93da5c81c0b075be28dab'
  },
  {
    tokenAddress: '0x4de2573e27e648607b50e1cfff921a33e4a34405',
    name: 'Lendroid Support Token',
    symbol: 'LST',
    decimals: 18,
    exchangeAddress: '0x98bdf4e7575319bcd5878c1c7c49a4af618b24cf'
  }
]
