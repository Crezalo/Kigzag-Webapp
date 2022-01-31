import { BigNumber } from "@ethersproject/bignumber";
import { makeStyles, Grid, LinearProgress } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import { ZERO_ADDRESS } from "../constants/misc";
import { useDAOProposal, useDAOProposals } from "../hooks/LoyaltyTokenContract/useCreatorDAOContract";
import BasicModal from "./BasicModal";
import CreateProposalModal from "./CreateProposalModal";

const useProgressBarstyles = makeStyles((theme) => ({
  colorPrimary: {
    backgroundColor: 'white',
  },
  barColorPrimary: {
    backgroundColor: '#4EC660',
  }
}));

interface ProposalCardProp {
  proposal: {
    proposer: string;
    link: string;
    category: BigNumber;
    choices: BigNumber;
  };
  dao: string;
}

export const ProposalCard = ({ proposal, dao }: ProposalCardProp) => {
  
  const classes = useProgressBarstyles();
  const {proposer, link, category, choices} = proposal;

  return (
    <>
      {proposer===ZERO_ADDRESS? (
        <></>
      ):(
        <div>
          {link? (
            <section className="proposalCard">
              <div className="proposalDetails">
                <h2>
                  <Link href={link}>
                    <a target="_blank" className="proposalLink">
                      General Proposal Link
                    </a>
                  </Link>
                </h2>
              </div>
              <div className="proposalDetails">
                <p className="choiceVote">
                  <BasicModal modalButtonText="Choice 1" modalBody={<CreateProposalModal />} />
                  <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px' }} variant="determinate" value={20} />
                  <h2>20%</h2>
                </p>
                <p className="choiceVote">
                  <BasicModal modalButtonText="Choice 2" modalBody={<CreateProposalModal />} />
                  <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px'}} variant="determinate" value={30} />
                  <h2>30%</h2>
                </p>
                <p className="choiceVote">
                  <BasicModal modalButtonText="Choice 3" modalBody={<CreateProposalModal />} />
                  <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px'}} variant="determinate" value={40} />
                  <h2>40%</h2>
                </p>
                <p className="choiceVote">
                  <BasicModal modalButtonText="Choice 4" modalBody={<CreateProposalModal />} />
                  <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px'}} variant="determinate" value={10} />
                  <h2>10%</h2>
                </p>
              </div>
            </section>
          ) : (
            <section className="proposalCard">
              <div className="proposalDetails">
                <h2>Allowances Proposal</h2>
              </div>
              <div className="proposalDetails">
                <p className="choiceVote">
                  <BasicModal modalButtonText="Choice 1" modalBody={<CreateProposalModal />} />
                  <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px' }} variant="determinate" value={20} />
                  <h2>20%</h2>
                </p>
                <p className="choiceVote">
                  <BasicModal modalButtonText="Choice 2" modalBody={<CreateProposalModal />} />
                  <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px'}} variant="determinate" value={30} />
                  <h2>30%</h2>
                </p>
              </div>
            </section>
          )}
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
    proposer: string;
    link: string;
    category: BigNumber;
    choices: BigNumber;
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
  
  const proposalCount = useDAOProposals(dao).data?? "";

  console.log("proposalCount: "+proposalCount);

  const proposer = "";
  const link = "";
  const category = BigNumber.from(0);
  const choices = BigNumber.from(0);

  const nullProposal = {proposer, link, category, choices};

  const proposal1 = useDAOProposal(dao,0).data ?? nullProposal;
  const proposal2 = useDAOProposal(dao,1).data ?? nullProposal;
  const proposal3 = useDAOProposal(dao,2).data ?? nullProposal;
  const proposal4 = useDAOProposal(dao,3).data ?? nullProposal;
  const proposal5 = useDAOProposal(dao,4).data ?? nullProposal;
  const proposal6 = useDAOProposal(dao,5).data ?? nullProposal;
  const proposal7 = useDAOProposal(dao,6).data ?? nullProposal;
  const proposal8 = useDAOProposal(dao,7).data ?? nullProposal;
  const proposal9 = useDAOProposal(dao,8).data ?? nullProposal;
  const proposal10 = useDAOProposal(dao,9).data ?? nullProposal;

  console.log("proposal10: " + proposal10.proposer);

  const proposals = [proposal1, proposal2, proposal3, proposal4, proposal5, proposal6, proposal7, proposal8, proposal9, proposal10];

  return (
    <div className="greenTextBlackBackground">
      <BasicModal modalButtonText="Create Proposal" modalBody={<CreateProposalModal />} />
      <Grid container spacing={1}>
        {proposals.map((proposal) => (
          <GridItem proposal={proposal} dao={dao} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};
export default DAOProposalGridCard;
