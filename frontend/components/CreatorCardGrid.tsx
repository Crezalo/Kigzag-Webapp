import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import CreatorCard from "./CreatorCard";
import { useScreenSize } from "../services/utility";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  creator: {
    username: string;
    fname: string;
    lname: string;
    displaypicture: string;
    bio: string;
  };
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
  creatorsList: {
    username: string;
    fname: string;
    lname: string;
    displaypicture: string;
    bio: string;
  }[];
}
const CreatorCardGrid = ({ creatorsList }: CreatorCardGridProp) => {
  const classes = useStyles();
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;
  return (
    <div
      className={
        ismobile ? "blueTextBlackBackgroundMobile" : "blueTextBlackBackground"
      }
    >
      <Grid container spacing={1}>
        {creatorsList?.map((creator) => (
          <GridItem
            creator={creator}
            classes={classes}
            key={creator.username}
          />
        ))}
      </Grid>
    </div>
  );
};
export default CreatorCardGrid;
