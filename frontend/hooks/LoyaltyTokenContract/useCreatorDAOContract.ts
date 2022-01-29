import useSWR from "swr";
import CreatorDAOLT_ABI from "../../contracts/CreatorDAO_LT.json";
import type { CreatorDAOLT } from "../../contracts/types";
import useContract from "../useContract";
import useKeepSWRDataLiveAsBlocksArrive from "../useKeepSWRDataLiveAsBlocksArrive";

export function useCreatorDAOContract(creatorDAOAddress?: string) {
  return useContract<CreatorDAOLT>(creatorDAOAddress, CreatorDAOLT_ABI);
}

export function useDAOCreator(creatorDAOAddress: string, suspense = false) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOCreator", creatorDAOAddress] : null,
    getDAOCreator(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOToken(creatorDAOAddress: string, suspense = false) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOToken", creatorDAOAddress] : null,
    getDAOToken(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOProposals(creatorDAOAddress: string, suspense = false) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOProposals", creatorDAOAddress] : null,
    getDAOProposals(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAONativeTokenBalance(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAONativeTokenBalance", creatorDAOAddress] : null,
    getDAONativeTokenBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOUSDBalance(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOUSDBalance", creatorDAOAddress] : null,
    getDAOUSDBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAONativeTokenAllowances(
  creatorDAOAddress: string,
  of: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch =
    typeof of === "string" &&
    typeof creatorDAOAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["DAONativeTokenAllowances", of, creatorDAOAddress] : null,
    getDAONativeTokenAllowances(contract, of),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOUSDAllowances(
  creatorDAOAddress: string,
  of: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch =
    typeof of === "string" &&
    typeof creatorDAOAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOUSDAllowances", of, creatorDAOAddress] : null,
    getDAOUSDAllowances(contract, of),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOVotingDuration(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOVotingDuration", creatorDAOAddress] : null,
    getDAOVotingDuration(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOCommunityManagers(
  creatorDAOAddress: string,
  index: number,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOCommunityManagers", index, creatorDAOAddress] : null,
    getDAOCommunityManagers(contract, index),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOAllowancesProposalIds(
  creatorDAOAddress: string,
  index: number,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOAllowancesProposalIds", index, creatorDAOAddress] : null,
    getDAOAllowancesProposalIds(contract, index),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAONativeTotalAllowances(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAONativeTotalAllowances", creatorDAOAddress] : null,
    getDAONativeTotalAllowances(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOUSDTotalAllowances(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOUSDTotalAllowances", creatorDAOAddress] : null,
    getDAOUSDTotalAllowances(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOProposal(
  creatorDAOAddress: string,
  proposalId: number,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOProposal", proposalId, creatorDAOAddress] : null,
    getDAOProposal(contract, proposalId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOProposalManagerAllowancesInfoLength(
  creatorDAOAddress: string,
  proposalId: number,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch
      ? [
          "DAOProposalManagerAllowancesInfoLength",
          proposalId,
          creatorDAOAddress,
        ]
      : null,
    getDAOProposalManagerAllowancesInfoLength(contract, proposalId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOProposalManagerAllowanesInfo(
  creatorDAOAddress: string,
  proposalId: number,
  index: number,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch
      ? [
          "DAOProposalManagerAllowanesInfo",
          proposalId,
          index,
          creatorDAOAddress,
        ]
      : null,
    getDAOProposalManagerAllowanesInfo(contract, proposalId, index),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOProposalVoteDataInfo(
  creatorDAOAddress: string,
  proposalId: number,
  choice: number,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch
      ? ["DAOProposalVoteDataInfo", proposalId, choice, creatorDAOAddress]
      : null,
    getDAOProposalVoteDataInfo(contract, proposalId, choice),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOProposalStatus(
  creatorDAOAddress: string,
  proposalId: number,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOProposalStatus", proposalId, creatorDAOAddress] : null,
    getDAOProposalStatus(contract, proposalId),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOCommunityManagerExists(
  creatorDAOAddress: string,
  manager: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch =
    typeof manager === "string" &&
    typeof creatorDAOAddress === "string" &&
    !!contract;

  const result = useSWR(
    shouldFetch
      ? ["DAOCommunityManagerExists", manager, creatorDAOAddress]
      : null,
    getDAOCommunityManagerExists(contract, manager),
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

function getDAOCreator(contract: CreatorDAOLT) {
  return async (_: string) => {
    const creator = await contract.creator();

    return creator;
  };
}

function getDAOToken(contract: CreatorDAOLT) {
  return async (_: string) => {
    const token = await contract.token();

    return token;
  };
}

function getDAOProposals(contract: CreatorDAOLT) {
  return async (_: string) => {
    const proposals = await contract.proposals();

    return proposals;
  };
}

function getDAONativeTokenBalance(contract: CreatorDAOLT) {
  return async (_: string) => {
    const nativeTokenBalance = await contract.nativeTokenBalance();

    return nativeTokenBalance;
  };
}

function getDAOUSDBalance(contract: CreatorDAOLT) {
  return async (_: string) => {
    const usdBalance = await contract.usdBalance();

    return usdBalance;
  };
}

function getDAONativeTokenAllowances(contract: CreatorDAOLT, of: string) {
  return async (_: string) => {
    const nativeTokenAllowances = await contract.nativeTokenAllowances(of);

    return nativeTokenAllowances;
  };
}

function getDAOUSDAllowances(contract: CreatorDAOLT, of: string) {
  return async (_: string) => {
    const usdAllowances = await contract.usdAllowances(of);

    return usdAllowances;
  };
}

function getDAOVotingDuration(contract: CreatorDAOLT) {
  return async (_: string) => {
    const votingDuration = await contract.votingDuration();

    return votingDuration;
  };
}

function getDAOCommunityManagers(contract: CreatorDAOLT, index: number) {
  return async (_: string) => {
    const communityManager = await contract.communityManagers(index);

    return communityManager;
  };
}

function getDAOAllowancesProposalIds(contract: CreatorDAOLT, index: number) {
  return async (_: string) => {
    const allowancesProposalId = await contract.allowancesProposalIds(index);

    return allowancesProposalId;
  };
}

function getDAONativeTotalAllowances(contract: CreatorDAOLT) {
  return async (_: string) => {
    const nativeTotalAllowances = await contract.nativeTotalAllowances();

    return nativeTotalAllowances;
  };
}

function getDAOUSDTotalAllowances(contract: CreatorDAOLT) {
  return async (_: string) => {
    const usdTotalAllowances = await contract.usdTotalAllowances();

    return usdTotalAllowances;
  };
}

function getDAOProposal(contract: CreatorDAOLT, proposalId: number) {
  return async (_: string) => {
    const [proposer, link, category, choices] = await contract.proposal(
      proposalId
    );

    return { proposer, link, category, choices };
  };
}

function getDAOProposalManagerAllowancesInfoLength(
  contract: CreatorDAOLT,
  proposalId: number
) {
  return async (_: string) => {
    const proposalManagerAllowancesInfoLength =
      await contract.proposalManagerAllowancesInfoLength(proposalId);

    return proposalManagerAllowancesInfoLength;
  };
}

function getDAOProposalManagerAllowanesInfo(
  contract: CreatorDAOLT,
  proposalId: number,
  index: number
) {
  return async (_: string) => {
    const [manager, proposedAllowance, isNative] =
      await contract.proposalManagerAllowanesInfo(proposalId, index);

    return { manager, proposedAllowance, isNative };
  };
}

function getDAOProposalVoteDataInfo(
  contract: CreatorDAOLT,
  proposalId: number,
  choice: number
) {
  return async (_: string) => {
    const [voteCount, votersTokenCount] = await contract.proposalVoteDataInfo(
      proposalId,
      choice
    );

    return { voteCount, votersTokenCount };
  };
}

function getDAOProposalStatus(contract: CreatorDAOLT, proposalId: number) {
  return async (_: string) => {
    const winningChoice = await contract.proposalStatus(proposalId);

    return winningChoice;
  };
}

function getDAOCommunityManagerExists(contract: CreatorDAOLT, manager: string) {
  return async (_: string) => {
    const communityManagerExists = await contract.CommunityManagerExists(
      manager
    );

    return communityManagerExists;
  };
}
