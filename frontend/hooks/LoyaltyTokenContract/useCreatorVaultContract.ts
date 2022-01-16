import CreatorVaultLT_ABI from "../../contracts/XeldoradoVault_LT.json";
import type { XeldoradoVaultLT } from "../../contracts/types";
import useContract from "../useContract";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";
import useSWR from "swr";

export function useCreatorVaultContract(creatorVaultAddress?: string) {
  return useContract<XeldoradoVaultLT>(creatorVaultAddress, CreatorVaultLT_ABI);
}

export function useCreatorVaultCreator(creatorVaultAddress: string, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultCreator", creatorVaultAddress] : null,
    getCreatorVaultCreator(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultDAO(creatorVaultAddress: string, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultDAO", creatorVaultAddress] : null,
    getCreatorVaultDAO(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultToken(creatorVaultAddress: string, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultToken", creatorVaultAddress] : null,
    getCreatorVaultToken(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultIdToTokenId(creatorVaultAddress: string, vaultId: number, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultIdToTokenId", vaultId, creatorVaultAddress] : null,
    getCreatorVaultIdToTokenId(contract, vaultId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultIdTonftContract(creatorVaultAddress: string, vaultId: number, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultIdTonftContract", vaultId, creatorVaultAddress] : null,
    getCreatorVaultIdTonftContract(contract, vaultId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultIdTonftPrice(creatorVaultAddress: string, vaultId: number, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultIdTonftPrice", vaultId, creatorVaultAddress] : null,
    getCreatorVaultIdTonftPrice(contract, vaultId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultAllNFTs(creatorVaultAddress: string, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultAllNFTs", creatorVaultAddress] : null,
    getCreatorVaultAllNFTs(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultAllOnSaleNFTs(creatorVaultAddress: string, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultAllOnSaleNFTs", creatorVaultAddress] : null,
    getCreatorVaultAllOnSaleNFTs(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultAllSoldNFTs(creatorVaultAddress: string, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultAllSoldNFTs", creatorVaultAddress] : null,
    getCreatorVaultAllSoldNFTs(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorVaultNftContract(creatorVaultAddress: string, suspense = false) {
  const contract = useCreatorVaultContract(creatorVaultAddress);

  const shouldFetch = 
    typeof creatorVaultAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorVaultNftContract", creatorVaultAddress] : null,
    getCreatorVaultNftContract(contract),
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

function getCreatorVaultCreator(contract: XeldoradoVaultLT) {
  return async (_: string) => {
    const creator = await contract.creator();

    return creator;
  };
}

function getCreatorVaultDAO(contract: XeldoradoVaultLT) {
  return async (_: string) => {
    const dao = await contract.dao();

    return dao;
  };
}

function getCreatorVaultToken(contract: XeldoradoVaultLT) {
  return async (_: string) => {
    const token = await contract.token();

    return token;
  };
}

function getCreatorVaultIdToTokenId(
  contract: XeldoradoVaultLT,
  vaultId: number
) {
  return async (_: string) => {
    const tokenId = await contract.vaultIdToTokenId(vaultId);

    return tokenId;
  };
}

function getCreatorVaultIdTonftContract(
  contract: XeldoradoVaultLT,
  vaultId: number
) {
  return async (_: string) => {
    const vaultIdTonftContract = await contract.vaultIdTonftContract(vaultId);

    return vaultIdTonftContract;
  };
}

function getCreatorVaultIdTonftPrice(
  contract: XeldoradoVaultLT,
  vaultId: number
) {
  return async (_: string) => {
    const vaultIdTonftPrice = await contract.vaultIdTonftPrice(vaultId);

    return vaultIdTonftPrice;
  };
}

function getCreatorVaultAllNFTs(contract: XeldoradoVaultLT) {
  return async (_: string) => {
    const allNFTs = await contract.allNFTs();

    return allNFTs;
  };
}

function getCreatorVaultAllOnSaleNFTs(contract: XeldoradoVaultLT) {
  return async (_: string) => {
    const allOnSaleNFTs = await contract.allOnSaleNFTs();

    return allOnSaleNFTs;
  };
}

function getCreatorVaultAllSoldNFTs(contract: XeldoradoVaultLT) {
  return async (_: string) => {
    const allSoldNFTs = await contract.allSoldNFTs();

    return allSoldNFTs;
  };
}

function getCreatorVaultNftContract(contract: XeldoradoVaultLT) {
  return async (_: string) => {
    const nftContract = await contract.nftContract();

    return nftContract;
  };
}
