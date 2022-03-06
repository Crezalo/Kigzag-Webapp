import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Button, Paper } from "@material-ui/core";
import NFTCard from "./NFTCard";
import { useWeb3React } from "@web3-react/core";
import { useCreatorNFTOwnerOf } from "../hooks/ERC721/useCreatorNFTContract";
import {
  getCreatorAllVideoDetails,
  getNFTsOfCreator,
} from "../services/api-service";
import VideoCard from "./VideoCard";
import BasicModal from "./BasicModal";
import CreateProposalModal from "./CreateProposalModal";
import UploadVideoModal from "./UploadVideoModal";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
}
const GridItem = ({ vid, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <VideoCard vid={vid} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface ContentCardGridProp {
  creator: string;
  onCreatorProfile: boolean;
}
const ContentCardGrid = ({
  creator,
  onCreatorProfile,
}: ContentCardGridProp) => {
  const classes = useStyles();
  const { account, library } = useWeb3React();

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
        const res = await getCreatorAllVideoDetails(account, library, creator);
        setVideoDetails(res);
      }
      getData();
    }, [creator]);
  };

  GetVidDetails();

  return (
    <div className="blueTextBlackBackground">
      {/* {!onCreatorProfile ? (
        <div style={{margin: "10px"}}>
          <BasicModal
            modalButtonText="Add Video"
            modalBody={<UploadVideoModal />}
          />
        </div>
      ) : (
        <></>
      )}
      <Grid container spacing={1}>
        {videoDetails.map((vid) => (
          <>{vid.videoid ? <GridItem vid={vid} classes={classes} key={vid.videoid}/> : <></>}</>
        ))}
      </Grid> */}
      <div className="modelButton" style={{ marginTop: "20vh" }}>
        <a
          href={"https://discord.gg/bfDgHYw7"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
          >
            Discord Server
          </Button>
        </a>
      </div>
    </div>
  );
};
export default ContentCardGrid;
