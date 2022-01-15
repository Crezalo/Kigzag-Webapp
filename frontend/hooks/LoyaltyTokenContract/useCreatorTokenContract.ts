import CreatorTokenLT_ABI from "../../contracts/CreatorToken_LT.json";
import type { CreatorTokenLT } from "../../contracts/types";
import useContract from "../useContract";

export default function useCreatorTokenContract(creatorTokenAddress?: string) {
  return useContract<CreatorTokenLT>(creatorTokenAddress, CreatorTokenLT_ABI);
}

// For General ERC20 functions use useTokenContract.ts

// Read Functions
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
