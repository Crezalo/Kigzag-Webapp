/**
 * List of all the networks supported by the Uniswap Interface
 */
export enum SupportedChainId {
  POLYGON_MAINNET = 137,
  POLYGON_MUMBAI = 80001,

  AVALANCE_MAINNET = 43114,
  AVALANCHE_FUJI = 43113,

  BSC = 56,
  BSC_TESTNET = 97,

  FANTOM_OPERA = 250,
  FANTOM_TESTNET = 4002,

  MOONRIVER = 1285,
  MOONBASE_ALPHA = 1287,
}

export const BLOCK_EXPLORER = {
  137: "polygonscan.com/", 
  80001: "mumbai.polygonscan.com/", 
  43114: "snowtrace.io/", 
  43113: "testnet.snowtrace.io/", 
  56: "bscscan.com", 
  97: "testnet.bscscan.com", 
  250: "ftmscan.com/", 
  4002: "testnet.ftmscan.com/", 
  1285: "moonriver.moonscan.io/", 
  1287: "moonbase.moonscan.io/"
}

export const CURRENCY_LIST = {
  137: "MATIC", 
  80001: "MATIC", 
  43114: "AVAX", 
  43113: "AVAX", 
  56: "BNB", 
  97: "BNB", 
  250: "FTM", 
  4002: "FTM", 
  1285: "MOVR", 
  1287: "MOVR"
}

export const NETWORK_NAME_LIST = {
  137: "Polygon Mainnet", 
  80001: " Polygon Mumbai", 
  43114: "Avalance Mainnet", 
  43113: "Avalance FUJI", 
  56: "BSC", 
  97: "BSC - Testnet", 
  250: "Fantom Opera", 
  4002: "Fantom Testnet", 
  1285: "Moonriver", 
  1287: "Moonbase Alpha"
}
  
/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]


/**
 * All the chain IDs that are running the Ethereum protocol.
 */
 export const L1_CHAIN_IDS = [
  SupportedChainId.AVALANCE_MAINNET,
  SupportedChainId.AVALANCHE_FUJI,
  SupportedChainId.BSC,
  SupportedChainId.BSC_TESTNET,
  SupportedChainId.FANTOM_OPERA,
  SupportedChainId.FANTOM_TESTNET,
  SupportedChainId.MOONRIVER,
  SupportedChainId.MOONBASE_ALPHA,
  SupportedChainId.POLYGON_MAINNET,
  SupportedChainId.POLYGON_MUMBAI,
] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS = [
] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]
