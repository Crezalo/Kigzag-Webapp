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
  creator: string;
  classes: any;
}
const GridItem = ({ creator, classes }: GridItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <CreatorCard creator={creator} />
    </Grid>
  );
};

interface CreatorCardGridProp {
  creators: string[];
}
const CreatorCardGrid = ({ creators }: CreatorCardGridProp) => {
  const classes = useStyles();
  console.log("creators");
  console.log(creators);
  return (
    <div className="blueTextBlackBackground">
      <Grid container spacing={1}>
        {creators.map((creator) => (
          <GridItem creator={creator} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};
export default CreatorCardGrid;
