import { BigNumber } from "@ethersproject/bignumber";
import { makeStyles, Grid, LinearProgress } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import { ZERO_ADDRESS } from "../constants/misc";
import {
  useDAOProposal,
  useDAOProposals,
  useDAOProposalVoteDataInfo,
} from "../hooks/LoyaltyTokenContract/useCreatorDAOContract";
import useENSName from "../hooks/useENSName";
import { getDAOAllProposals } from "../services/api-service";
import { currencyName, formatBlockExplorerLink, parseBalance, shortenHex } from "../util";
import BasicModal from "./BasicModal";
import CreateProposalModal from "./CreateProposalModal";

const useProgressBarstyles = makeStyles((theme) => ({
  colorPrimary: {
    backgroundColor: "white",
  },
  barColorPrimary: {
    backgroundColor: "#3B82F6",
  },
}));

interface ProposalCardProp {
  proposal: {
    author: string;
    chainid: number;
    choices: string;
    creator: string;
    daoaddress: string;
    duration: number;
    id: string;
    isallowancesproposal: true;
    managers: string;
    allowances: string;
    isnative: boolean;
    proposaldescription: string;
    proposalid: number;
    proposallink: string;
    proposaltitle: string;
    starttime: string;
  };
  dao: string;
}

export const ProposalCard = ({ proposal, dao }: ProposalCardProp) => {
  const classes = useProgressBarstyles();
  const { chainId, account } = useWeb3React();
  const choices = proposal.choices.split("\t");
  var totalVoterTokenCount = 0;
  var choiceData = [];

  for (var i = 0; i < choices.length; i++) {
    try {
      var voterTokenCount = parseFloat(
        parseBalance(
          useDAOProposalVoteDataInfo(dao, proposal.proposalid, i).data
            .votersTokenCount ?? 0
        )
      );
    } catch (error) {
      var voterTokenCount = 0.0;
    }
    totalVoterTokenCount += voterTokenCount;
    choiceData.push({
      choice: choices[i],
      voterTokenCount: voterTokenCount,
    });
  }
  const votingTimeLeft =
    Date.now() - Date.parse(proposal.starttime) < proposal.duration * 1000 ? (
      Date.parse(proposal.starttime) + proposal.duration * 1000 - Date.now() >
      1000 * 3600 ? (
        Math.round(
          (Date.parse(proposal.starttime) +
            proposal.duration * 1000 -
            Date.now()) /
            (1000 * 3600)
        ).toString() + "h left"
      ) : Date.parse(proposal.starttime) +
          proposal.duration * 1000 -
          Date.now() >
        1000 * 60 ? (
        Math.round(
          (Date.parse(proposal.starttime) +
            proposal.duration * 1000 -
            Date.now()) /
            (1000 * 60)
        ).toString() + "m left"
      ) : (
        Math.round(
          (Date.parse(proposal.starttime) +
            proposal.duration * 1000 -
            Date.now()) /
            (1000 * 60)
        ).toString() + "s left"
      )
    ) : (
      <p style={{ color: "red" }}>Voting Closed</p>
    );

  try {
    var managers = proposal.managers.split("\t");
    var allowances = proposal.allowances.split("\t");
    var isnative = proposal.isnative;
  } catch (error) {
    var managers = [""];
    var allowances = [""];
    var isnative = false;
  }

  var allowanceData = [];

  for (var i = 0; i < managers.length; i++) {
    if (managers[i] !== "") {
      allowanceData.push({
        manager: managers[i],
        allowance: allowances[i],
      });
    }
  }

  console.log(allowanceData);

  return (
    <>
      {proposal.author === ZERO_ADDRESS ? (
        <></>
      ) : (
        <div>
          <section className="proposalCard">
            {!proposal.isallowancesproposal ? (
              <div className="proposalDetails">
                <h2>{proposal.proposaltitle}</h2>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <p style={{ color: "grey" }}>Author</p>&nbsp;
                  <a
                    {...{
                      href: formatBlockExplorerLink("Account", [
                        chainId,
                        proposal.author,
                        "",
                      ]),
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "30%",
                    }}
                  >
                    (
                    {useENSName(proposal.author) ||
                      shortenHex(proposal.author, 2)}
                    )
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17px"
                      height="17px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C3C5CB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      style={{ marginLeft: "12px" }}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {votingTimeLeft}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    margin: "10px",
                    textAlign: "left",
                  }}
                >
                  {proposal.proposaldescription}
                </p>
              </div>
            ) : (
              <div className="proposalDetails">
                <h2>Allowances Proposal</h2>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <p style={{ color: "grey" }}>Author</p>&nbsp;
                  <a
                    {...{
                      href: formatBlockExplorerLink("Account", [
                        chainId,
                        proposal.author,
                        "",
                      ]),
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "30%",
                    }}
                  >
                    (
                    {useENSName(proposal.author) ||
                      shortenHex(proposal.author, 2)}
                    )
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17px"
                      height="17px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C3C5CB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      style={{ marginLeft: "12px" }}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    marginLeft: "10px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {votingTimeLeft}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ color: "grey" }}>Managers</p>
                  {allowanceData.map((adata) => (
                    <p
                      style={{
                        fontSize: "18px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <a
                        {...{
                          href: formatBlockExplorerLink("Account", [
                            chainId,
                            adata.manager,
                            "",
                          ]),
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "30%",
                        }}
                      >
                        (
                        {useENSName(adata.manager) ||
                          shortenHex(adata.manager, 4)}
                        )
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17px"
                          height="17px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C3C5CB"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          style={{ marginLeft: "12px" }}
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                      <p>
                        {parseBalance(adata.allowance)} {isnative ? currencyName(chainId) : "USD"}
                      </p>
                    </p>
                  ))}
                </p>
              </div>
            )}
            <div className="proposalVoting">
              {choiceData.map((choiceDataPoint, index) => (
                <p className="choiceVote">
                  <BasicModal
                    modalButtonText={choiceDataPoint.choice}
                    modalBody={<CreateProposalModal />}
                  />
                  <LinearProgress
                    classes={classes}
                    style={{
                      width: "30%",
                      margin: "10px 10px 10px 150px",
                      padding: "10px",
                    }}
                    variant="determinate"
                    value={
                      totalVoterTokenCount > 0
                        ? Math.round(
                            (choiceDataPoint.voterTokenCount * 10000) /
                              totalVoterTokenCount
                          ) / 100
                        : 0
                    }
                  />
                  <h2>
                    {totalVoterTokenCount > 0
                      ? Math.round(
                          (choiceDataPoint.voterTokenCount * 10000) /
                            totalVoterTokenCount
                        ) / 100
                      : 0}
                    %
                  </h2>
                </p>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  proposal: {
    author: string;
    chainid: number;
    choices: string;
    creator: string;
    daoaddress: string;
    duration: number;
    id: string;
    isallowancesproposal: true;
    managers: string;
    allowances: string;
    isnative: boolean;
    proposaldescription: string;
    proposalid: number;
    proposallink: string;
    proposaltitle: string;
    starttime: string;
  };
  dao: string;
  classes: any;
}
const GridItem = ({ proposal, dao, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={12} md={12}>
      <ProposalCard proposal={proposal} dao={dao} />
    </Grid>
  );
};

interface ProposalCardGridProp {
  dao: string;
}
const DAOProposalGridCard = ({ dao }: ProposalCardGridProp) => {
  const classes = useStyles();

  const { chainId, account, library } = useWeb3React();

  const [proposalsList, setProposalsList] = useState([]);

  const getProposalList = () => {
    useEffect(() => {
      async function getData() {
        const res = await getDAOAllProposals(account, library, chainId, dao);
        setProposalsList(res);
      }
      getData();
    }, [account, chainId]);
  };

  getProposalList();

  const proposals = [];

  if (proposalsList) {
    for (const x of proposalsList) {
      proposals.push(x);
    }
  }

  return (
    <div className="greenTextBlackBackground">
      <BasicModal
        modalButtonText="Create Proposal"
        modalBody={<CreateProposalModal />}
      />
      <Grid container spacing={1}>
        {proposals.map((proposal) => (
          <GridItem proposal={proposal} dao={dao} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};
export default DAOProposalGridCard;
