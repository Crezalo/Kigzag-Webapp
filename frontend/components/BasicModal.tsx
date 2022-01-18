import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Link from "next/link";

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
        <h2>
          Choice 1: 20%
        </h2>
        <h2>
          Choice 2: 40%
        </h2>
        <h2>
          Choice 3: 30%
        </h2>
        <h2>
          Choice 3: 10%
        </h2>
      </div>
    </section>
  );
};

interface ProposalCardGridProp {
  proposals: string[];
}

const useStylesGrid = makeStyles((theme) => ({
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
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BasicModal = ({ proposals }: ProposalCardGridProp) => {
  const classesModal = useStylesModal();
  const classesGrid = useStylesGrid();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="createProposal">
        <Button
          style={{ background: "rgb(34 197 94)" }}
          variant="contained"
          onClick={handleOpen}
        >
          Create Proposal
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classesModal.paper}>
            <h2>Animated React Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              accumsan odio enim.
            </p>
          </div>
        </Fade>
      </Modal>
      <div className="text-green-500 font-bold py-2 px-2">
        <Grid container spacing={1}>
          {proposals.map((proposal) => (
            <GridItem proposal={proposal} classes={classesGrid} />
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default BasicModal;
