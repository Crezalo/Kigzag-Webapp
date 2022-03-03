import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { atom } from "jotai";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import useSWR from "swr";

function getBlockNumber(library: Web3Provider) {
  return async () => {
    return library.getBlockNumber();
  };
}

export default function useBlockNumber() {
  const { library } = useWeb3React<Web3Provider>();
  const shouldFetch = !!library;

  return useSWR(shouldFetch ? ["BlockNumber"] : null, getBlockNumber(library), {
    refreshInterval: 10 * 1000,
  });
}

const blockAtom = atom<number | undefined>(undefined);

// export function useFastForwardBlockNumber(): (block: number) => void {
//   return useUpdateAtom(blockAtom);
// }
