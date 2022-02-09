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
  137: "polygonscan.com",
  80001: "mumbai.polygonscan.com",
  43114: "snowtrace.io",
  43113: "testnet.snowtrace.io",
  56: "bscscan.com",
  97: "testnet.bscscan.com",
  250: "ftmscan.com",
  4002: "testnet.ftmscan.com",
  1285: "moonriver.moonscan.io",
  1287: "moonbase.moonscan.io",
};

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
  1287: "MOVR",
};

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
  1287: "Moonbase Alpha",
};

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

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
] as const;

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number];

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS = [] as const;

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number];

// Creator Factory Address for Loyalty Tokens across different chains
export const LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST = {
  80001: "0x61e3Ded4d59c219A2b05eaC1699E5b4b6C636EBD", // Polygon Mumbai
  43113: "0x0fB91CD72ac2b8AFD95b4b4D779536F57daa41F8", // Avalanche FUJI
  97: "0x00eb20674CD2039B524CC74ed7F23A355D9B3861", // BSC Testnet
  4002: "0x00eb20674CD2039B524CC74ed7F23A355D9B3861", // Fantom Testnet
  1287: "0x00eb20674CD2039B524CC74ed7F23A355D9B3861", // Moonbase Alpha
};

export const KIGZAG_TOKEN_ADDRESS_LIST = {
  80001: "0xeF69C329feaCA9E262C8D1A99C11A64CfB725fbB", // Polygon Mumbai
  43113: "0x6Eb1DFCc5ea8Fd3aC8d7DA2916429C6c2ddD1c7D", // Avalanche FUJI
  97: "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF", // BSC Testnet
  4002: "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF", // Fantom Testnet
  1287: "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF", // Moonbase Alpha
};

export const NATIVE_TOKEN_SUPPORTED_ADDRESS = {
  80001: ["0xEb94821A0157662018a6c7F3d446A545032724A3"], // Polygon Mumbai
  43113: ["0xda3F18aB34fE60DE440eEd7263ED13cF933Ca8Cc"], // Avalanche FUJI
  97: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // BSC Testnet
  4002: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // Fantom Testnet
  1287: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // Moonbase Alpha
};

export const USDC_SUPPORTED_ADDRESS = {
  80001: ["0x2142800b4b5a624C0f6eF2E698dB547d55bD247d"], // Polygon Mumbai
  43113: ["0xEFdC2E27fdB8072bF8E7A096f1A8dB6CC451509E"], // Avalanche FUJI
  97: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // BSC Testnet
  4002: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // Fantom Testnet
  1287: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // Moonbase Alpha
};

export const DAI_SUPPORTED_ADDRESS = {
  80001: ["0x260e8975BCC4EFfe391ADedAD0D96F696879F2e8"], // Polygon Mumbai
  43113: ["0x5e21Ee6cD77BAC58A9dC3F6887A512Bd57004040"], // Avalanche FUJI
  97: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // BSC Testnet
  4002: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // Fantom Testnet
  1287: ["0xDC2C2A8d4F7fe3081995bCc1fA6d39edDCDe8B0D"], // Moonbase Alpha
};
