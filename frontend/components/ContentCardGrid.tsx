import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import VideoCard from "./VideoCard";
import BasicModal from "./BasicModal";
import UploadVideoModal from "./UploadVideoModal";
import { Button } from "@material-ui/core";
import { getCreatorAllVideoDetails } from "../services/api-services/creator/video_api";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    margin: "20px 20px 10px 0px",
  },
}));

interface GridItemProps {
  vid: {
    videoid: string;
    title: string;
    description: string;
    creator: string;
    duration: number;
  };
  classes: any;
  category: "Videos" | "Series";
}
const GridItem = ({ vid, category, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={4}>
      <VideoCard videoDetails={vid} category={category} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface ContentCardGridProp {
  creator: string;
  onCreatorProfile: boolean;
  category: "Videos" | "Series";
}
const ContentCardGrid = ({
  creator,
  onCreatorProfile,
  category,
}: ContentCardGridProp) => {
  const classes = useStyles();

  const [videoDetails, setVideoDetails] = useState([
    {
      title: "",
      description: "",
      creator: "",
      duration: 0,
      videoid: "",
    },
  ]);

  const GetVidDetails = () => {
    useEffect(() => {
      async function getData() {
        const res = await getCreatorAllVideoDetails(creator);
        setVideoDetails(res);
      }
      getData();
    }, [creator]);
  };

  GetVidDetails();

  return (
    <div className="blueTextBlackBackground">
      {!onCreatorProfile ? (
        <div style={{ margin: "10px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <BasicModal
            modalButtonText="Add Video"
            modalBody={<UploadVideoModal />}
          />
          <div className="modelButton" style={{ marginLeft: "20px" }}>
            <Button
              style={{
                background: "#3B82F6",
                color: "white",
                marginBottom: "2px",
              }}
              variant="contained"
              onClick={() =>
                Router.push({
                  pathname: "/updateprices",
                })
              }
            >
              Update Prices
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Grid container spacing={1}>
        {videoDetails?.map((vid) => (
          <>
            {vid.videoid ? (
              <GridItem
                vid={vid}
                classes={classes}
                key={vid.videoid}
                category={category}
              />
            ) : (
              <></>
            )}
          </>
        ))}
      </Grid>
    </div>
  );
};
export default ContentCardGrid;
