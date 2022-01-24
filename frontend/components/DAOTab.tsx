import { makeStyles, Grid } from "@material-ui/core";
import Link from "next/link";
import BasicModal from "./BasicModal";
import CreateProposalModal from "./CreateProposalModal";

interface ProposalCardProp {
  proposal: string;
}
export const ProposalCard = ({ proposal }: ProposalCardProp) => {
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
        <h2>Choice 1: 20%</h2>
        <h2>Choice 2: 40%</h2>
        <h2>Choice 3: 30%</h2>
        <h2>Choice 3: 10%</h2>
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
