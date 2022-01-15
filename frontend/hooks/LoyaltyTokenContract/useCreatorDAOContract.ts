import CreatorDAOLT_ABI from "../../contracts/CreatorDAO_LT.json";
import type { CreatorDAOLT } from "../../contracts/types";
import useContract from "../useContract";

export default function useCreatorDAOContract(creatorDAOAddress?: string) {
  return useContract<CreatorDAOLT>(creatorDAOAddress, CreatorDAOLT_ABI);
}

// Read functions
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
    const [proposer, link, category, choices] = await contract.proposal(proposalId);

    return {proposer, link, category, choices};
  };
}

function getDAOProposalManagerAllowancesInfoLength(contract: CreatorDAOLT, proposalId: number) {
  return async (_: string) => {
    const proposalManagerAllowancesInfoLength = await contract.proposalManagerAllowancesInfoLength(proposalId);

    return proposalManagerAllowancesInfoLength;
  };
}

function getDAOProposalManagerAllowanesInfo(contract: CreatorDAOLT, proposalId: number, index: number) {
  return async (_: string) => {
    const [manager, proposedAllowance] = await contract.proposalManagerAllowanesInfo(proposalId, index);

    return {manager, proposedAllowance};
  };
}

function getDAOProposalVoteDataInfo(contract: CreatorDAOLT, proposalId: number, choice: number) {
  return async (_: string) => {
    const [voteCount, votersTokenCount] = await contract.proposalVoteDataInfo(proposalId, choice);

    return {voteCount, votersTokenCount};
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
    const communityManagerExists = await contract.CommunityManagerExists(manager);

    return communityManagerExists;
  };
}