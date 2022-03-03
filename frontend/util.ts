import type { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";
import { hexStripZeros } from "@ethersproject/bytes";
import { Web3Provider } from "@ethersproject/providers";
import { CHAIN_INFO } from "./constants/chaininfo";
import {
  SupportedChainId,
  BLOCK_EXPLORER,
  CURRENCY_LIST,
  NETWORK_NAME_LIST,
  LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST,
  KIGZAG_TOKEN_ADDRESS_LIST,
  NATIVE_TOKEN_SUPPORTED_ADDRESS,
  USDC_SUPPORTED_ADDRESS,
  DAI_SUPPORTED_ADDRESS,
} from "./constants/chains";

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

export function formatBlockExplorerLink(
  type: "Account" | "Transaction" | "Owner",
  data: [number, string, string]
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
    case "Owner": {
      const [chainId, contract, owner] = data;
      // return `https://${ETHERSCAN_PREFIXES[chainId]}etherscan.io/tx/${hash}`;
      return `https://${BLOCK_EXPLORER[chainId]}/token/${contract}?a=${owner}`;
    }
  }
}

export function currencyName(chainId: number) {
  return CURRENCY_LIST[chainId];
}

export function chainIdSupported(chainId: number) {
  return CURRENCY_LIST[chainId] != undefined;
}

export function networkName(chainId: number) {
  return NETWORK_NAME_LIST[chainId];
}

export function creatorFactoryLT(chainId: number) {
  return LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId];
}

export function exchangeTokenLT(chainId: number) {
  return KIGZAG_TOKEN_ADDRESS_LIST[chainId];
}

export function nativeTokenLT(chainId: number) {
  return NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId];
}

export function usdcLT(chainId: number) {
  return USDC_SUPPORTED_ADDRESS[chainId];
}

export function daiLT(chainId: number) {
  return DAI_SUPPORTED_ADDRESS[chainId];
}

interface SwitchNetworkArguments {
  library: Web3Provider;
  chainId: SupportedChainId;
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function switchToNetwork({
  library,
  chainId,
}: SwitchNetworkArguments): Promise<null | void> {
  if (!library?.provider?.request) {
    return;
  }
  const formattedChainId = hexStripZeros(BigNumber.from(chainId).toHexString());
  try {
    await library.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: formattedChainId }],
    });
  } catch (error) {
    // 4902 is the error code for attempting to switch to an unrecognized chainId
    if (error.code === 4902) {
      const info = CHAIN_INFO[chainId];

      await library.provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: formattedChainId,
            chainName: info.label,
            rpcUrls: [info.addNetworkInfo.rpcUrl],
            nativeCurrency: info.addNetworkInfo.nativeCurrency,
            blockExplorerUrls: [info.explorer],
          },
        ],
      });
      // metamask (only known implementer) automatically switches after a network is added
      // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
      // metamask's behavior when switching to the current network is just to return null (a no-op)
      try {
        await library.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: formattedChainId }],
        });
      } catch (error) {
        console.debug("Added network but could not switch chains", error);
      }
    } else {
      throw error;
    }
  }
}

export const parsePercent = (
  value: BigNumberish,
  decimals = 2,
  decimalsToDisplay = 2
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitRandom(min: number, max: number): Promise<void> {
  return wait(min + Math.round(Math.random() * Math.max(0, max - min)));
}

/**
 * This error is thrown if the function is cancelled before completing
 */
class CancelledError extends Error {
  public isCancelledError: true = true;
  constructor() {
    super("Cancelled");
  }
}

/**
 * Throw this error if the function should retry
 */
export class RetryableError extends Error {
  public isRetryableError: true = true;
}

export interface RetryOptions {
  n: number;
  minWait: number;
  maxWait: number;
}

/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param n how many times to retry
 * @param minWait min wait between retries in ms
 * @param maxWait max wait between retries in ms
 */
export function retry<T>(
  fn: () => Promise<T>,
  { n, minWait, maxWait }: RetryOptions
): { promise: Promise<T>; cancel: () => void } {
  let completed = false;
  let rejectCancelled: (error: Error) => void;
  const promise = new Promise<T>(async (resolve, reject) => {
    rejectCancelled = reject;
    while (true) {
      let result: T;
      try {
        result = await fn();
        if (!completed) {
          resolve(result);
          completed = true;
        }
        break;
      } catch (error) {
        if (completed) {
          break;
        }
        if (n <= 0 || !error.isRetryableError) {
          reject(error);
          completed = true;
          break;
        }
        n--;
      }
      await waitRandom(minWait, maxWait);
    }
  });
  return {
    promise,
    cancel: () => {
      if (completed) return;
      completed = true;
      rejectCancelled(new CancelledError());
    },
  };
}

export const RETRY_OPTIONS_BY_CHAIN_ID: { [chainId: number]: RetryOptions } = {
  [SupportedChainId.AVALANCE_MAINNET]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.AVALANCHE_FUJI]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.BSC]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.BSC_TESTNET]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.FANTOM_OPERA]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.FANTOM_TESTNET]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.MOONRIVER]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.MOONBASE_ALPHA]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.POLYGON_MAINNET]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.POLYGON_MUMBAI]: { n: 10, minWait: 250, maxWait: 1000 },
};
export const DEFAULT_RETRY_OPTIONS: RetryOptions = {
  n: 1,
  minWait: 0,
  maxWait: 0,
};
