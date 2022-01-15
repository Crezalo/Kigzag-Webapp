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

export function currencyName(chainId: number) {
  return CURRENCY_LIST[chainId];
}

export function chainIdSupported(chainId: number) {
  return CURRENCY_LIST[chainId] != undefined;
}

export function networkName(chainId: number) {
  return NETWORK_NAME_LIST[chainId];
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

export const parseBalance = (
  value: BigNumberish,
  decimals = 18,
  decimalsToDisplay = 3
) => parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);
