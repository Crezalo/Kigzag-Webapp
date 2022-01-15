import CreatorVaultLT_ABI from "../../contracts/XeldoradoVault_LT.json";
import type { XeldoradoVaultLT } from "../../contracts/types";
import useContract from "../useContract";

export default function useCreatorVaultContract(creatorVaultAddress?: string) {
  return useContract<XeldoradoVaultLT>(creatorVaultAddress, CreatorVaultLT_ABI);
}

// Read functions
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

function getCreatorVaultIdToTokenId(contract: XeldoradoVaultLT, vaultId: string) {
  return async (_: string) => {
    const tokenId = await contract.vaultIdToTokenId(vaultId);

    return tokenId;
  };
}

function getCreatorVaultIdTonftContract(contract: XeldoradoVaultLT, vaultId: string) {
  return async (_: string) => {
    const vaultIdTonftContract = await contract.vaultIdTonftContract(vaultId);

    return vaultIdTonftContract;
  };
}

function getCreatorVaultIdTonftPrice(contract: XeldoradoVaultLT, vaultId: string) {
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