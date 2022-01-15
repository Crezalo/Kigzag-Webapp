import CreatorNFTLT_ABI from "../../contracts/CreatorNFT_LT.json";
import type { CreatorNFTLT } from "../../contracts/types";
import useContract from "../useContract";

export default function useCreatorNFTContract(creatorNFTAddress?: string) {
  return useContract<CreatorNFTLT>(creatorNFTAddress, CreatorNFTLT_ABI);
}

// Read Functions
function getCreatorNFTCreator(contract: CreatorNFTLT) {
  return async (_: string) => {
    const creator = await contract.creator();

    return creator;
  };
}

function getCreatorName(contract: CreatorNFTLT) {
  return async (_: string) => {
    const name = await contract.name();

    return name;
  };
}

function getCreatorSymbol(contract: CreatorNFTLT) {
  return async (_: string) => {
    const symbol = await contract.symbol();

    return symbol;
  };
}

function getCreatorBalanceOf(contract: CreatorNFTLT, address: string) {
  return async (_: string) => {
    const balanceOf = await contract.balanceOf(address);

    return balanceOf;
  };
}

function getCreatorGetApproved(contract: CreatorNFTLT, tokenId: number) {
  return async (_: string) => {
    const getApproved = await contract.getApproved(tokenId);

    return getApproved;
  };
}

function getCreatorIsApprovedForAll(contract: CreatorNFTLT, owner: string, operator: string) {
  return async (_: string) => {
    const isApprovedForAll = await contract.isApprovedForAll(owner, operator);

    return isApprovedForAll;
  };
}

function getCreatorOwnerOf(contract: CreatorNFTLT, tokenId: string) {
  return async (_: string) => {
    const ownerOf = await contract.ownerOf(tokenId);

    return ownerOf;
  };
}

function getCreatorTokenURI(contract: CreatorNFTLT, tokenId: string) {
  return async (_: string) => {
    const tokenURI = await contract.tokenURI(tokenId);

    return tokenURI;
  };
}