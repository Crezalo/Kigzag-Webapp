import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import VideoCard from "./VideoCard";
import BasicModal from "./BasicModal";
import UploadVideoModal from "./UploadVideoModal";
import UpdateVideoPrices from "./UpdateVideoPrices";
import {
  getCreatorAllSeriesDemoVideoDetails,
  getCreatorAllVideoDetails,
  getSeriesAllVideoDetails,
} from "../services/api-services/creator/video_api";
import UpdateSeriesPrices from "./UpdateSeriesPrices";

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
    createdat: string;
    seriesid: string;
  };
  classes: any;
  category: "Videos" | "Series" | "SeriesVideoGrid";
}
const GridItem = ({ vid, category, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <VideoCard videoDetails={vid} category={category} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface ContentCardGridProp {
  creator: string;
  seriesid?: string;
  onCreatorProfile: boolean;
  category: "Videos" | "Series" | "SeriesVideoGrid";
  ignoreVideoId?: string;
}
const ContentCardGrid = ({
  creator,
  seriesid,
  onCreatorProfile,
  category,
  ignoreVideoId,
}: ContentCardGridProp) => {
  const classes = useStyles();

  const [videoDetails, setVideoDetails] = useState([
    {
      title: "",
      description: "",
      creator: "",
      duration: 0,
      videoid: "",
      createdat: "",
      seriesid: "",
    },
  ]);

  function compare(a: any, b: any) {
    if (a.createdat < b.createdat) {
      return -1;
    }
    if (a.createdat > b.createdat) {
      return 1;
    }
    return 0;
  }

  const GetVidDetails = () => {
    useEffect(() => {
      async function getData() {
        if (category === "Videos") {
          const res = await getCreatorAllVideoDetails(creator);
          if (res && typeof res !== "string")
            setVideoDetails(res.sort(compare));
        }

        if (category === "Series") {
          const res = await getCreatorAllSeriesDemoVideoDetails(creator);
          if (res && typeof res !== "string")
            setVideoDetails(res.sort(compare));
        }

        if (category === "SeriesVideoGrid") {
          const res = await getSeriesAllVideoDetails(seriesid);
          if (res && typeof res !== "string")
            setVideoDetails(res.sort(compare));
        }
      }
      getData();
    }, [creator]);
  };

  GetVidDetails();

  return (
    <div className="blueTextBlackBackground">
      {!onCreatorProfile ? (
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <BasicModal
              modalButtonText={
                category === "Series" ? "Launch New Course" : "New Video"
              }
              modalBody={
                category === "SeriesVideoGrid" ? (
                  <UploadVideoModal category={category} seriesid={seriesid} />
                ) : (
                  <UploadVideoModal category={category} />
                )
              }
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            {category === "Videos" || category === "SeriesVideoGrid" ? (
              <BasicModal
                modalButtonText="Update Prices"
                modalBody={
                  category === "Videos" ? (
                    <UpdateVideoPrices />
                  ) : (
                    <UpdateSeriesPrices seriesid={seriesid} />
                  )
                }
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      {category === "Series" ? (
        <h1 style={{ textAlign: "center" }}>Courses</h1>
      ) : (
        <></>
      )}
      <Grid container spacing={1}>
        {videoDetails?.map((vid) => (
          <>
            {vid.videoid &&
            category === "Series" &&
            vid.videoid != ignoreVideoId ? (
              <GridItem
                vid={vid}
                classes={classes}
                key={vid.videoid}
                category={category}
              />
            ) : (
              <></>
            )}
            {vid.videoid &&
            vid.videoid != vid.seriesid &&
            vid.videoid != ignoreVideoId ? (
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
