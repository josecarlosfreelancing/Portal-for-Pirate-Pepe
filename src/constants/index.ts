export const example = "example"
export const categories = [
 
  {
    title: 'Messari',
    categoryId: '02',
    router: '/messari',
    children: [{
      title: 'Reseach',
      categoryId: '0201',
      router: '/messari/research',
      children: [
      //   {
      //   title: 'All Research',
      //   categoryId: '020101',
      //   router: '/messari/research/all',
      // },
      {
        title: 'Pro Research',
        categoryId: '020102',
        router: '/messari/research/proresearch',
      },{
        title: 'Enterprise Research',
        categoryId: '020103',
        router: '/messari/research/enterprise',
      },{
        title: 'Protocol Research',
        categoryId: '020104',
        router: '/messari/research/protocol',
      }]
    }, {
      title: 'Intel',
      categoryId: '0202',
      router: '/messari/intel',
      children: [{
        title: 'Events List',
        categoryId: '020201',
        router: '/messari/intel/list',
      }, {
        title: 'Events Grid',
        categoryId: '020202',
        router: '/messari/intel/grid'
      }, {
        title: 'Events Calendar',
        categoryId: '020203',
        router: '/messari/intel/calendar'
      }]
    },
    //  {
    //   title: 'News',
    //   categoryId: '0203',
    //   router: '/messari/news',
    // }
  ]
  },
  {
    title: 'Nansen', 
    categoryId: '03',
    router: 'nansen',
    children: [{
      title: 'Wallet & Token Watchlists',
      categoryId: '0301',
      router: '/nansen/wallet'
    }, {
      title: 'Research',
      categoryId: '0302',
      router: '/nansen/research',
      children: [{
        title: 'NFTs',
        categoryId: '030201',
        router: '/nansen/research/nfts'
      },{
        title: 'Ecosystem',
        categoryId: '030202',
        router: '/nansen/research/ecosystem'
      },{
        title: 'Industry',
        categoryId: '030203',
        router: '/nansen/research/industry'
      },{
        title: 'Infrastructure',
        categoryId: '030204',
        router: '/nansen/research/infrastructure'
      },{
        title: 'Institutional',
        categoryId: '030205',
        router: '/nansen/research/institutional'
      },{
        title: 'Alpha',
        categoryId: '030206',
        router: '/nansen/research/alpha'
      }, ]
    }, {
      title: 'War Room Notes',
      categoryId: '0303',
      router: '/nansen/war'
    }]
  },
  {
  title: 'Delphi Digital',
  categoryId: '04',
  router: 'delphi',
  children: [{
    title: 'Research',
    categoryId: '0401',
    router: '/delphi/research/',
    children: [{
      title: 'Daily Newsletter',
      categoryId: '040101',
      router: '/delphi/research/newsletter',
    },{
      title: 'Market Updates',
      categoryId: '040102',
      router: '/delphi/research/market',
    },{
      title: 'Protocol Dives',
      categoryId: '040103',
      router: '/delphi/research/protocol',
    },{
      title: 'Yield Insights',
      categoryId: '040104',
      router: '/delphi/research/yield',
    },{
      title: 'DAO Insights',
      categoryId: '040105',
      router: '/delphi/research/dao',
    },{
      title: 'NFT Insights',
      categoryId: '040106',
      router: '/delphi/research/nft',
    },{
      title: 'Market Insights',
      categoryId: '040107',
      router: '/delphi/research/insight',
    },{
      title: 'Deep Dives',
      categoryId: '040108',
      router: '/delphi/research/dive',
    },]
  }, {
    title: 'Media',
    categoryId: '0402',
    router: '/delphi/media',
    children: [{
      title: 'Office Hours Q&A Recordings',
      categoryId: '040201',
      router: '/delphi/media/office',
    },{
      title: 'Premium Video',
      categoryId: '040202',
      router: '/delphi/media/premium',
    }]
  }, {
    title: 'Library',
    categoryId: '0403',
    router: '/delphi/library'
  }, {
    title: 'Analysis',
    categoryId: '0404',
    router: '/delphi/analysis/',
    children: [{
      title: 'NFT Sector',
      categoryId: '040401',
      router: '/delphi/analysis/nft'
    },{
      title: 'Gaming Sector',
      categoryId: '040402',
      router: '/delphi/analysis/gaming'
    },{
      title: 'DAO Activity&Coverage',
      categoryId: '040403',
      router: '/delphi/analysis/dao'
    }]
  }]
},  {
  title: 'Real Vision Crypto',
  categoryId: '01',
  router: 'vision',
  children: [{
      title: 'Make or Break Show',
      categoryId: '0101',
      router: '/vision/break',
    }, {
      title: 'The Knitting Show',
      categoryId: '0102',
      router: '/vision/knitting',
    }, {
      title: 'Investors Tutorials',
      categoryId: '0103',
      router: '/vision/tutorials',
    }, {
      title: 'The Distillery',
      categoryId: '0104',
      router: '/vision/distillery',
    }, {
      title: 'Community Q&A',
      categoryId: '0105',
      router: '/vision/community',
    }, {
      title: 'Live Q&A',
      categoryId: '0106',
      router: '/vision/live',
    }, {
      title: 'The Essential Conversation',
      categoryId: '0107',
      router: '/vision/essential',
    }, {
      title: 'Actionable Ideas',
      categoryId: '0108',
      router: '/vision/actionable',
    }, {
      title: 'The Real Investing Course',
      categoryId: '0109',
      router: '/vision/investing',
    }, {
      title: 'Short Courses',
      categoryId: '0110',
      router: '/vision/short',
    }, {
      title: 'Investor Masterclass',
      categoryId: '0111',
      router: '/vision/masterclass',
    }, {
      title: 'Macro Insiders',
      categoryId: '0112',
      router: '/vision/macro',
    }, {
      title: 'Deep Dive',
      categoryId: '0113',
      router: '/vision/dive',
    }, {
      title: 'Trade Portfolio',
      categoryId: '0114',
      router: '/vision/trade',
    }, {
      title: 'Flash Updates',
      categoryId: '0115',
      router: '/vision/flash',
    }, {
      title: 'Insider Talks',
      categoryId: '0116',
      router: '/vision/talks',
    }, {
      title: 'Inside the Episode',
      categoryId: '0117',
      router: '/vision/episode',
    }, {
      title: 'Institutional Research',
      categoryId: '0118',
      router: '/vision/institutional',
    }, {
      title: 'Insiders Chartbook',
      categoryId: '0119',
      router: '/vision/chartbook',
    }, {
      title: 'Miscellaneous',
      categoryId: '0120',
      router: '/vision/miscellaneous',
    }
  ]
},]

export const ChainId = {
  MAINNET : 1,
  ROPSTEN : 3,
  RINKEBY : 4,
  GOERLI : 5,
  KOVAN : 42,
  MATIC : 137,
  MATIC_TESTNET : 80001,
  FANTOM : 250,
  FANTOM_TESTNET : 4002,
  XDAI : 100,
  BSC : 56,
  BSC_TESTNET : 97,
  ARBITRUM : 79377087078960,
  MOONBASE : 1287,
  AVALANCHE : 43114,
  FUJI : 43113,
  HECO : 128,
  HECO_TESTNET : 256,
  HARMONY : 1666600000,
  HARMONY_TESTNET : 1666700000
}

export const mainNetworkChainId = ChainId.MAINNET
export const goerliNetworkChainId = ChainId.GOERLI
