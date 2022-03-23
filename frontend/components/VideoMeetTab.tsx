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
import socket from "../services/socket";
import VideoChatRoom from "./VideoChatRoom";

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

interface VideoMeetTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const VideoMeetTab = ({ creator, onCreatorProfile }: VideoMeetTabProp) => {
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

  useEffect(() => {
    socket.on("FE-error-user-exist", ({ error }) => {
      if (!error) {
        const roomName = creator;
        const userName = account;
      } else {
        console.log(error);
        console.log("User name already exist");
      }
    });
  }, [account]);

  const [meetingJoined, setMeetingJoined] = useState(false);

  const leaveRoomFunc = () => {
    setMeetingJoined(false);
  }

  return (
    <div className="blueTextBlackBackground">
      {!meetingJoined ? (
        <div className="modelButton" style={{ marginTop: "20vh" }}>
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={() => {
              socket.emit("BE-check-user", { roomId: creator, account });
              setMeetingJoined(true);
            }}
          >
            {onCreatorProfile ? "Join Meet" : "Start Meet"}
          </Button>
        </div>
      ) : (
        <VideoChatRoom roomId={creator} leaveRoomFunc={leaveRoomFunc} />
      )}
    </div>
  );
};
export default VideoMeetTab;
