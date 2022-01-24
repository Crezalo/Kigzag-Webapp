import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import CreatorCard from "./CreatorCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  note: string;
  classes: any;
}
const GridItem = ({ note, classes }: GridItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <CreatorCard note={note} />
    </Grid>
  );
};

interface CreatorCardGridProp {
  notes: string[];
}
const CreatorCardGrid = ({ notes }: CreatorCardGridProp) => {
  const classes = useStyles();
  return (
    <div className="greenTextBlackBackground">
      <Grid container spacing={1}>
        {notes.map((note) => (
          <GridItem note={note} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};
export default CreatorCardGrid;
