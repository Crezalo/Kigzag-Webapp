import XeldoradoCreatorFactoryLT_ABI from "../../contracts/XeldoradoCreatorFactory_LT.json";
import type { XeldoradoCreatorFactoryLT } from "../../contracts/types";
import useContract from "../useContract";
import useSWR from "swr";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";

export function useCreatorFactoryContract(creatorFactoryAddress?: string) {
  return useContract<XeldoradoCreatorFactoryLT>(creatorFactoryAddress, XeldoradoCreatorFactoryLT_ABI);
}

export function useCreatorFactoryCreatorToken(creatorFactoryAddress: string, creator: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creator === "string" && 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryCreatorToken", creator, creatorFactoryAddress] : null,
    getCreatorFactoryCreatorToken(contract, creator),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactoryCreatorVault(creatorFactoryAddress: string, creator: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creator === "string" && 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryCreatorVault", creator, creatorFactoryAddress] : null,
    getCreatorFactoryCreatorVault(contract, creator),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactoryCreatorDAO(creatorFactoryAddress: string, creator: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creator === "string" && 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryCreatorDAO", creator, creatorFactoryAddress] : null,
    getCreatorFactoryCreatorDAO(contract, creator),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactoryCreatorSaleFee(creatorFactoryAddress: string, creator: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creator === "string" && 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryCreatorSaleFee", creator, creatorFactoryAddress] : null,
    getCreatorFactoryCreatorSaleFee(contract, creator),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactoryAllCreators(creatorFactoryAddress: string, index: number, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryAllCreators", index, creatorFactoryAddress] : null,
    getCreatorFactoryAllCreators(contract, index),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactoryExchangeAdmin(creatorFactoryAddress: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryExchangeAdmin", creatorFactoryAddress] : null,
    getCreatorFactoryExchangeAdmin(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorFee(creatorFactoryAddress: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryFee", creatorFactoryAddress] : null,
    getCreatorFactoryFee(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorDiscount(creatorFactoryAddress: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryDiscount", creatorFactoryAddress] : null,
    getCreatorFactoryDiscount(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorNoOFTokensForDiscount(creatorFactoryAddress: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryNoOFTokensForDiscount", creatorFactoryAddress] : null,
    getCreatorFactoryNoOFTokensForDiscount(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorFeeTo(creatorFactoryAddress: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryFeeTo", creatorFactoryAddress] : null,
    getCreatorFactoryFeeTo(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorFeeToSetter(creatorFactoryAddress: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryFeeToSetter", creatorFactoryAddress] : null,
    getCreatorFactoryFeeToSetter(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorExchangeToken(creatorFactoryAddress: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryExchangeToken", creatorFactoryAddress] : null,
    getCreatorFactoryExchangeToken(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorGetCreatorAdmins(creatorFactoryAddress: string, creator: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creator === "string" && 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryGetCreatorAdmins", creator, creatorFactoryAddress] : null,
    getCreatorFactoryGetCreatorAdmins(contract, creator),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useCreatorFactorGetIsCreatorAdmin(creatorFactoryAddress: string, creator: string, admin: string, suspense = false) {
  const contract = useCreatorFactoryContract(creatorFactoryAddress);

  const shouldFetch = 
    typeof creator === "string" && 
    typeof admin === "string" && 
    typeof creatorFactoryAddress === "string" && 
    !!contract;

  const result = useSWR(
    shouldFetch ? ["CreatorFactoryGetIsCreatorAdmin", creator, admin, creatorFactoryAddress] : null,
    getCreatorFactoryGetIsCreatorAdmin(contract, creator, admin),
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
  index: number
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
