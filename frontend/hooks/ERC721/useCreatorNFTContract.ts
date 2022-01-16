import useSWR from "swr";
import CreatorNFTLT_ABI from "../../contracts/CreatorNFT_LT.json";
import type { CreatorNFTLT } from "../../contracts/types";
import useContract from "../useContract";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";

export function useCreatorNFTContract(creatorNFTAddress?: string) {
  return useContract<CreatorNFTLT>(creatorNFTAddress, CreatorNFTLT_ABI);
}

export function useCreatorNFTCreator(
  creatorNFTAddress: string,
  suspense = false
) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorNFTCreator", creatorNFTAddress] : null,
    getCreatorNFTCreator(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorNFTName(creatorNFTAddress: string, suspense = false) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorNFTName", creatorNFTAddress] : null,
    getCreatorNFTName(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorNFTSymbol(
  creatorNFTAddress: string,
  suspense = false
) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorNFTSymbol", creatorNFTAddress] : null,
    getCreatorNFTSymbol(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorNFTBalanceOf(
  creatorNFTAddress: string,
  address: string,
  suspense = false
) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch =
    typeof address === "string" &&
    typeof creatorNFTAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorNFTBalanceOf", address, creatorNFTAddress] : null,
    getCreatorNFTBalanceOf(contract, address),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorNFTGetApproved(
  creatorNFTAddress: string,
  tokenId: number,
  suspense = false
) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorNFTGetApproved", tokenId, creatorNFTAddress] : null,
    getCreatorNFTGetApproved(contract, tokenId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorNFTIsApprovedForAll(
  creatorNFTAddress: string,
  owner: string,
  operator: string,
  suspense = false
) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch =
    typeof owner === "string" &&
    typeof operator === "string" &&
    typeof creatorNFTAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch
      ? ["CreatorNFTIsApprovedForAll", owner, operator, creatorNFTAddress]
      : null,
    getCreatorNFTIsApprovedForAll(contract, owner, operator),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorNFTOwnerOf(
  creatorNFTAddress: string,
  tokenId: number,
  suspense = false
) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorNFTOwnerOf", tokenId, creatorNFTAddress] : null,
    getCreatorNFTOwnerOf(contract, tokenId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorNFTTokenURI(
  creatorNFTAddress: string,
  tokenId: number,
  suspense = false
) {
  const contract = useCreatorNFTContract(creatorNFTAddress);

  const shouldFetch = typeof creatorNFTAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorNFTTokenURI", tokenId, creatorNFTAddress] : null,
    getCreatorNFTTokenURI(contract, tokenId),
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

function getCreatorNFTCreator(contract: CreatorNFTLT) {
  return async (_: string) => {
    const creator = await contract.creator();

    return creator;
  };
}

function getCreatorNFTName(contract: CreatorNFTLT) {
  return async (_: string) => {
    const name = await contract.name();

    return name;
  };
}

function getCreatorNFTSymbol(contract: CreatorNFTLT) {
  return async (_: string) => {
    const symbol = await contract.symbol();

    return symbol;
  };
}

function getCreatorNFTBalanceOf(contract: CreatorNFTLT, address: string) {
  return async (_: string) => {
    const balanceOf = await contract.balanceOf(address);

    return balanceOf;
  };
}

function getCreatorNFTGetApproved(contract: CreatorNFTLT, tokenId: number) {
  return async (_: string) => {
    const getApproved = await contract.getApproved(tokenId);

    return getApproved;
  };
}

function getCreatorNFTIsApprovedForAll(
  contract: CreatorNFTLT,
  owner: string,
  operator: string
) {
  return async (_: string) => {
    const isApprovedForAll = await contract.isApprovedForAll(owner, operator);

    return isApprovedForAll;
  };
}

function getCreatorNFTOwnerOf(contract: CreatorNFTLT, tokenId: number) {
  return async (_: string) => {
    const ownerOf = await contract.ownerOf(tokenId);

    return ownerOf;
  };
}

function getCreatorNFTTokenURI(contract: CreatorNFTLT, tokenId: number) {
  return async (_: string) => {
    const tokenURI = await contract.tokenURI(tokenId);

    return tokenURI;
  };
}
