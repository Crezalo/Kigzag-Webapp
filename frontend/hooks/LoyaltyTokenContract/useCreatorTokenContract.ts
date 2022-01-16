import useSWR from "swr";
import CreatorTokenLT_ABI from "../../contracts/CreatorToken_LT.json";
import type { CreatorTokenLT } from "../../contracts/types";
import useContract from "../useContract";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";

export function useCreatorTokenContract(creatorTokenAddress?: string) {
  return useContract<CreatorTokenLT>(creatorTokenAddress, CreatorTokenLT_ABI);
}

export function useCreatorTokenCreator(creatorTokenAddress: string, suspense = false) {
  const contract = useCreatorTokenContract(creatorTokenAddress);

  const shouldFetch = 
    typeof creatorTokenAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorTokenCreator", creatorTokenAddress] : null,
    getCreatorTokenCreator(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorTokenBaseToken(creatorTokenAddress: string, suspense = false) {
  const contract = useCreatorTokenContract(creatorTokenAddress);

  const shouldFetch = 
    typeof creatorTokenAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorTokenBaseToken", creatorTokenAddress] : null,
    getCreatorTokenBaseToken(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorTokenDAO(creatorTokenAddress: string, suspense = false) {
  const contract = useCreatorTokenContract(creatorTokenAddress);

  const shouldFetch = 
    typeof creatorTokenAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorTokenDAO", creatorTokenAddress] : null,
    getCreatorTokenDAO(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

////////////////////////////////////////////////////
///////////// Read functions ///////////////////////
////////////////////////////////////////////////////

// For General ERC20 functions use useTokenContract.ts

function getCreatorTokenCreator(contract: CreatorTokenLT) {
  return async (_: string) => {
    const creator = await contract.creator();

    return creator;
  };
}

function getCreatorTokenBaseToken(contract: CreatorTokenLT) {
  return async (_: string) => {
    const basetoken = await contract.basetoken();

    return basetoken;
  };
}

function getCreatorTokenDAO(contract: CreatorTokenLT) {
  return async (_: string) => {
    const dao = await contract.dao();

    return dao;
  };
}
