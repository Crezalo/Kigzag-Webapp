const polygonLogo = '../assets/polygonLogo.png'
const bscLogo = '../assets/binanceLogo.png'
const avalancheLogo = '../assets/avalancheLogo.png'
const fantomLogo = '../assets/fantomLogo.png'
const moonriverLogo = '../assets/moonriverLogo.png'

// import ms from 'ms.macro'

import { SupportedChainId, SupportedL1ChainId, SupportedL2ChainId } from './chains'

// const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
// if (typeof INFURA_KEY === 'undefined') {
//   throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
// }

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
// export const INFURA_NETWORK_URLS: { [key in SupportedChainId]: string } = {
//   [SupportedChainId.POLYGON_MAINNET]: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.POLYGON_MUMBAI]: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.POLYGON_MAINNET]: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
//   [SupportedChainId.POLYGON_MUMBAI]: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
// }

/**
 * This is used to call the add network RPC
 */
interface AddNetworkInfo {
  readonly rpcUrl: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
}

export enum NetworkType {
  L1,
  L2,
}

interface BaseChainInfo {
  readonly networkType: NetworkType
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly bridge?: string
  readonly explorer: string
  // readonly infoLink: string
  readonly logoUrl: string
  readonly label: string
  readonly helpCenterUrl?: string
  readonly addNetworkInfo: AddNetworkInfo
}

export interface L1ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L1
}

export interface L2ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L2
  readonly bridge: string
  readonly statusPage?: string
  readonly defaultListUrl: string
}

export type ChainInfoMap = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} &
  { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

export const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.AVALANCE_MAINNET]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://bridge.avax.network/',
    docs: 'https://docs.avax.network/',
    explorer: 'https://snowtrace.io/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Avalanche Mainnet',
    logoUrl: avalancheLogo,
    addNetworkInfo: {
      rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
      nativeCurrency: { name: 'Avalanche Mainnet', symbol: 'AVAX', decimals: 18 },
    },
  },
  [SupportedChainId.AVALANCHE_FUJI]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://bridge.avax.network/',
    docs: 'https://docs.avax.network/',
    explorer: 'https://testnet.snowtrace.io/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Avalanche FUJI',
    logoUrl: avalancheLogo,
    addNetworkInfo: {
      rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
      nativeCurrency: { name: 'Avalanche FUJI', symbol: 'AVAX', decimals: 18 },
    },
  },

  [SupportedChainId.BSC]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://www.binance.org/en/bridge',
    docs: 'https://docs.binance.org/',
    explorer: 'https://bscscan.com/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'BSC',
    logoUrl: bscLogo,
    addNetworkInfo: {
      rpcUrl: 'https://bsc-dataseed.binance.org/',
      nativeCurrency: { name: 'BSC', symbol: 'BNB', decimals: 18 },
    },
  },
  [SupportedChainId.BSC_TESTNET]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://www.binance.org/en/bridge',
    docs: 'https://docs.binance.org/',
    explorer: 'https://testnet.bscscan.com',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'BSC Testnet',
    logoUrl: bscLogo,
    addNetworkInfo: {
      rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      nativeCurrency: { name: 'BSC Testnet', symbol: 'BNB', decimals: 18 },
    },
  },

  [SupportedChainId.FANTOM_OPERA]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://fantom.foundation/',
    docs: 'https://docs.fantom.foundation/',
    explorer: 'https://ftmscan.com/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Fantom Opera',
    logoUrl: fantomLogo,
    addNetworkInfo: {
      rpcUrl: 'https://rpc.ftm.tools/',
      nativeCurrency: { name: 'Fantom Opera', symbol: 'FTM', decimals: 18 },
    },
  },

  [SupportedChainId.FANTOM_TESTNET]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://fantom.foundation/',
    docs: 'https://docs.fantom.foundation/',
    explorer: 'https://testnet.ftmscan.com/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Fantom Testnet',
    logoUrl: fantomLogo,
    addNetworkInfo: {
      rpcUrl: 'https://rpc.testnet.fantom.network/',
      nativeCurrency: { name: 'Fantom Testnet', symbol: 'FTM', decimals: 18 },
    },
  },

  [SupportedChainId.MOONRIVER]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://passport.meter.io/transfer#/',
    docs: 'https://docs.moonbeam.network/',
    explorer: 'https://moonriver.moonscan.io/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Moonriver',
    logoUrl: moonriverLogo,
    addNetworkInfo: {
      rpcUrl: 'https://rpc.moonriver.moonbeam.network',
      nativeCurrency: { name: 'Moonriver', symbol: 'MOVR', decimals: 18 },
    },
  },

  [SupportedChainId.MOONBASE_ALPHA]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://passport.meter.io/transfer#/',
    docs: 'https://docs.moonbeam.network/',
    explorer: 'https://moonbase.moonscan.io/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Moonbase Alpha',
    logoUrl: moonriverLogo,
    addNetworkInfo: {
      rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
      nativeCurrency: { name: 'Moonbase Alpha', symbol: 'MOVR', decimals: 18 },
    },
  },

  [SupportedChainId.POLYGON_MAINNET]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://wallet.polygon.technology/bridge',
    docs: 'https://polygon.io/',
    explorer: 'https://polygonscan.com/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Polygon Mainnet',
    logoUrl: polygonLogo,
    addNetworkInfo: {
      rpcUrl: 'https://polygon-rpc.com/',
      nativeCurrency: { name: 'Polygon Mainnet', symbol: 'MATIC', decimals: 18 },
    },
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: 600000,
    bridge: 'https://wallet.polygon.technology/bridge',
    docs: 'https://polygon.io/',
    explorer: 'https://mumbai.polygonscan.com/',
    // infoLink: 'https://info.uniswap.org/#/polygon/',
    label: 'Polygon Mumbai',
    logoUrl: polygonLogo,
    addNetworkInfo: {
      nativeCurrency: { name: 'Polygon Mumbai', symbol: 'MATIC', decimals: 18 },
      rpcUrl: 'https://rpc-endpoints.superfluid.dev/mumbai',
    },
  },
}
