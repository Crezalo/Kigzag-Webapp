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

export function useDAOBaseToken(creatorDAOAddress: string, suspense = false) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOBaseToken", creatorDAOAddress] : null,
    getDAOBaseToken(contract),
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

export function useDAOTokenBalance(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOTokenBalance", creatorDAOAddress] : null,
    getDAOTokenBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOBaseTokenBalance(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOBaseTokenBalance", creatorDAOAddress] : null,
    getDAOBaseTokenBalance(contract),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

export function useDAOAllowances(
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
    shouldFetch ? ["DAOAllowances", of, creatorDAOAddress] : null,
    getDAOAllowances(contract, of),
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

export function useDAOTotalAllowances(
  creatorDAOAddress: string,
  suspense = false
) {
  const contract = useCreatorDAOContract(creatorDAOAddress);

  const shouldFetch = typeof creatorDAOAddress === "string" && !!contract;

  const result = useSWR(
    shouldFetch ? ["DAOTotalAllowances", creatorDAOAddress] : null,
    getDAOTotalAllowances(contract),
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

function getDAOBaseToken(contract: CreatorDAOLT) {
  return async (_: string) => {
    const basetoken = await contract.basetoken();

    return basetoken;
  };
}

function getDAOProposals(contract: CreatorDAOLT) {
  return async (_: string) => {
    const proposals = await contract.proposals();

    return proposals;
  };
}

function getDAOTokenBalance(contract: CreatorDAOLT) {
  return async (_: string) => {
    const tokenBalance = await contract.tokenBalance();

    return tokenBalance;
  };
}

function getDAOBaseTokenBalance(contract: CreatorDAOLT) {
  return async (_: string) => {
    const baseTokenBalance = await contract.baseTokenBalance();

    return baseTokenBalance;
  };
}

function getDAOAllowances(contract: CreatorDAOLT, of: string) {
  return async (_: string) => {
    const allowances = await contract.allowances(of);

    return allowances;
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

function getDAOTotalAllowances(contract: CreatorDAOLT) {
  return async (_: string) => {
    const TotalAllowances = await contract.TotalAllowances();

    return TotalAllowances;
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
    const [manager, proposedAllowance] =
      await contract.proposalManagerAllowanesInfo(proposalId, index);

    return { manager, proposedAllowance };
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
