import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import SubCard from "./SubCard";
import { getUserVODData } from "../services/api-services/user/vod_api";
import { getUserVideoSeriesData } from "../services/api-services/user/video_series_api";
import { getUserLivestreamData } from "../services/api-services/user/livestream_api";
import { getUserVideoCallData } from "../services/api-services/user/video_call_api";
import { getUserDiscordData } from "../services/api-services/user/discord_api";
import { getUserCommunityComboData } from "../services/api-services/user/community_combo_api";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  subscription: {
    creator: string;
    expiry_date: string;
    type: number;
  };
  classes: any;
}
const GridItem = ({ subscription, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <SubCard subscription={subscription} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface SubsCardGridProp {
  category:
    | "Videos"
    | "Series"
    | "Stream"
    | "Meet"
    | "Discord"
    | "Community Combo";
}

const SubsCardGrid = ({ category }: SubsCardGridProp) => {
  const classes = useStyles();

  const [subData, setSubData] = useState([
    {
      creator: "",
      expiry_date: "",
      type: 0,
    },
  ]);

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        let result = [];
        if (category == "Videos") result = await getUserVODData();
        else if (category == "Series") result = await getUserVideoSeriesData();
        else if (category == "Stream") result = await getUserLivestreamData();
        else if (category == "Meet") result = await getUserVideoCallData();
        else if (category == "Discord") result = await getUserDiscordData();
        else result = await getUserCommunityComboData();
        setSubData(result);
      }
      getData();
    }, []);
  };

  GetDetails();

  console.log(subData[0]?.expiry_date);

  return (
    <div className="blueTextBlackBackground">
      <Grid container spacing={1}>
        {subData.map((sub, index) => (
          <>
            <GridItem subscription={sub} classes={classes} key={index} />
            {/* <GridItem subscription={sub} classes={classes} key={index} />
            <GridItem subscription={sub} classes={classes} key={index} /> */}
          </>
        ))}
      </Grid>
    </div>
  );
};
export default SubsCardGrid;
