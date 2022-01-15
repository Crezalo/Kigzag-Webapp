import XeldoradoCreatorFactoryLT_ABI from "../../contracts/XeldoradoCreatorFactory_LT.json";
import type { XeldoradoCreatorFactoryLT } from "../../contracts/types";
import useContract from "../useContract";

export default function useCreatorFactoryContract(
  creatorFactoryAddress?: string
) {
  return useContract<XeldoradoCreatorFactoryLT>(
    creatorFactoryAddress,
    XeldoradoCreatorFactoryLT_ABI
  );
}

// Read functions
function getCreatorFactoryCreatorToken(
  contract: XeldoradoCreatorFactoryLT,
  creator: string
) {
  return async (_: string) => {
    const token = await contract.creatorToken(creator);

    return token;
  };
}

function getCreatorFactoryCreatorVault(
  contract: XeldoradoCreatorFactoryLT,
  creator: string
) {
  return async (_: string) => {
    const vault = await contract.creatorVault(creator);

    return vault;
  };
}

function getCreatorFactoryCreatorDAO(
  contract: XeldoradoCreatorFactoryLT,
  creator: string
) {
  return async (_: string) => {
    const dao = await contract.creatorDAO(creator);

    return dao;
  };
}

function getCreatorFactoryCreatorSaleFee(
  contract: XeldoradoCreatorFactoryLT,
  creator: string
) {
  return async (_: string) => {
    const tokenPrice = await contract.creatorSaleFee(creator);

    return tokenPrice;
  };
}

function getCreatorFactoryAllCreators(
  contract: XeldoradoCreatorFactoryLT,
  index: string
) {
  return async (_: string) => {
    const creator = await contract.allCreators(index);

    return creator;
  };
}

function getCreatorFactoryExchangeAdmin(contract: XeldoradoCreatorFactoryLT) {
  return async (_: string) => {
    const exchangeAdmin = await contract.exchangeAdmin();

    return exchangeAdmin;
  };
}

function getCreatorFactoryFee(contract: XeldoradoCreatorFactoryLT) {
  return async (_: string) => {
    const fee = await contract.fee();

    return fee;
  };
}

function getCreatorFactoryDiscount(contract: XeldoradoCreatorFactoryLT) {
  return async (_: string) => {
    const discount = await contract.discount();

    return discount;
  };
}

function getCreatorFactoryNoOFTokensForDiscount(
  contract: XeldoradoCreatorFactoryLT
) {
  return async (_: string) => {
    const noOFTokensForDiscount = await contract.noOFTokensForDiscount();

    return noOFTokensForDiscount;
  };
}

function getCreatorFactoryFeeTo(contract: XeldoradoCreatorFactoryLT) {
  return async (_: string) => {
    const feeTo = await contract.feeTo();

    return feeTo;
  };
}

function getCreatorFactoryFeeToSetter(contract: XeldoradoCreatorFactoryLT) {
  return async (_: string) => {
    const feeToSetter = await contract.feeToSetter();

    return feeToSetter;
  };
}

function getCreatorFactoryExchangeToken(contract: XeldoradoCreatorFactoryLT) {
  return async (_: string) => {
    const exchangeToken = await contract.exchangeToken();

    return exchangeToken;
  };
}

function getCreatorFactoryGetCreatorAdmins(
  contract: XeldoradoCreatorFactoryLT,
  creator: string
) {
  return async (_: string) => {
    const getCreatorAdmins = await contract.getCreatorAdmins(creator);

    return getCreatorAdmins;
  };
}

function getCreatorFactoryGetIsCreatorAdmin(
  contract: XeldoradoCreatorFactoryLT,
  creator: string,
  admin: string
) {
  return async (_: string) => {
    const isCreatorAdmin = await contract.isCreatorAdmin(creator, admin);

    return isCreatorAdmin;
  };
}
