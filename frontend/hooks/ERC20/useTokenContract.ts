import ERC20_ABI from "../../contracts/ERC20.json";
import type { ERC20 } from "../../contracts/types";
import useContract from "../useContract";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";
import { BigNumber, BigNumberish } from "ethers";

export function useTokenContract(tokenAddress?: string) {
  return useContract<ERC20>(tokenAddress, ERC20_ABI);
}

export function useTokenName(
  tokenAddress: string,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenName", tokenAddress] : null,
    getTokenName(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useTokenSymbol(
  tokenAddress: string,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenSymbol", tokenAddress] : null,
    getTokenSymbol(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useTokenTotalSupply(
  tokenAddress: string,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenTotalSupply", tokenAddress] : null,
    getTokenTotalSupply(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useTokenBalance(
  address: string,
  tokenAddress: string,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    typeof address === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenBalance", address, tokenAddress] : null,
    getTokenBalanceOf(contract,address),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useTokenAllowance(
  owner: string,
  spender: string,
  tokenAddress: string,
  suspense = false
) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    typeof owner === "string" &&
    typeof spender === "string" &&
    typeof tokenAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["TokenAllowance", owner, spender, tokenAddress] : null,
    getTokenAllowance(contract,owner,spender),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

// Read functions
export function getTokenName(contract: ERC20) {
  return async (_: string) => {
    const name = await contract.name();

    return name;
  };
}

export function getTokenSymbol(contract: ERC20) {
  return async (_: string) => {
    const symbol = await contract.symbol();

    return symbol;
  };
}

export function getTokenTotalSupply(contract: ERC20) {
  return async (_: string) => {
    const totalSupply = await contract.totalSupply();

    return totalSupply;
  };
}

export function getTokenBalanceOf(contract: ERC20, address: string) {
  return async (_: string) => {
    const balance = await contract.balanceOf(address);

    return balance;
  };
}

function getTokenAllowance(contract: ERC20, owner: string | null | undefined, spender: string | null | undefined) {
  return async (_: string) => {
    const allowance = await contract.allowance(owner,spender);

    return allowance;
  };
}
