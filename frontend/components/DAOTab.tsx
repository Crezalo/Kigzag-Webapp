import { makeStyles, Grid, LinearProgress } from "@material-ui/core";
import Link from "next/link";
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
  proposal: string;
}

export const ProposalCard = ({ proposal }: ProposalCardProp) => {
  const classes = useProgressBarstyles();
  return (
    <section className="proposalCard">
      <div className="proposalDetails">
        <h2>
          Link: &nbsp;
          <Link href={proposal}>
            <a target="_blank" className="proposalLink">
              {proposal}
            </a>
          </Link>
        </h2>
      </div>
      <div className="proposalDetails">
        <p className="choiceVote">
          <button className="outline text-green-500 px-2 rounded choiceButton" >Choice 1</button>
          <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px' }} variant="determinate" value={20} />
          <h2>20%</h2>
        </p>
        <p className="choiceVote">
          <button className="outline text-green-500 px-2 rounded choiceButton" >Choice 2</button>
          <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px'}} variant="determinate" value={30} />
          <h2>30%</h2>
        </p>
        <p className="choiceVote">
          <button className="outline text-green-500 px-2 rounded choiceButton" >Choice 3</button>
          <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px'}} variant="determinate" value={40} />
          <h2>40%</h2>
        </p>
        <p className="choiceVote">
          <button className="outline text-green-500 px-2 rounded choiceButton" >Choice 4</button>
          <LinearProgress classes={classes} style={{width: '50%', margin: '10px', padding: '10px'}} variant="determinate" value={10} />
          <h2>10%</h2>
        </p>
      </div>
    </section>
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
  proposal: string;
  classes: any;
}
const GridItem = ({ proposal, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={12} md={12}>
      <ProposalCard proposal={proposal} />
    </Grid>
  );
};

interface ProposalCardGridProp {
  proposals: string[];
}
const DAOTab = ({ proposals }: ProposalCardGridProp) => {
  const classes = useStyles();
  return (
    <div className="greenTextBlackBackground">
      <BasicModal modalBody={<CreateProposalModal />} />
      <Grid container spacing={1}>
        {proposals.map((proposal) => (
          <GridItem proposal={proposal} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};
export default DAOTab;
