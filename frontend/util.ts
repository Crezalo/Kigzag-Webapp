import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

// const ETHERSCAN_PREFIXES = {
//   1: "",
//   3: "ropsten.",
//   4: "rinkeby.",
//   5: "goerli.",
//   42: "kovan.",
// };

const BLOCK_EXPLORER = {
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

const CURRENCY_LIST = {
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

export function formatBlockExplorerLink(
  type: "Account" | "Transaction",
  data: [number, string]
) {
  switch (type) {
    case "Account": {
      const [chainId, address] = data;
      // return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/address/${address}`;
      return `https://${BLOCK_EXPLORER[chainId]}/address/${address}`;
    }
    case "Transaction": {
      const [chainId, hash] = data;
      // return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
      return `https://${BLOCK_EXPLORER[chainId]}/tx/${hash}`;
    }
  }
}

export function currencyName(chainId: number){
  return CURRENCY_LIST[chainId];
}

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);
