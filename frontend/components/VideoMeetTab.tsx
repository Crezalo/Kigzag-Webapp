import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Button, Paper } from "@material-ui/core";
import { socket } from "../services/socket";
import VideoChatRoom from "./VideoChatRoom";
import AuthService from "../services/auth-services";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface VideoMeetTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const VideoMeetTab = ({ creator, onCreatorProfile }: VideoMeetTabProp) => {
  const classes = useStyles();
  const username = AuthService.getUsername();

  useEffect(() => {
    socket.on("FE-error-user-exist", ({ error }) => {
      if (!error) {
        const roomName = onCreatorProfile ? creator : username;
        const userName = username;
      } else {
        console.log(error);
        console.log("User name already exist");
      }
    });
  }, [username]);

  const [meetingJoined, setMeetingJoined] = useState(false);

  const leaveRoomFunc = () => {
    setMeetingJoined(false);
  };

  return (
    <div className="blueTextBlackBackground">
      {!meetingJoined ? (
        <div
          className="modelButton"
          style={{
            marginTop: "20vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={() => {
              socket.emit("BE-check-user", { roomId: creator, username });
              setMeetingJoined(true);
            }}
          >
            {onCreatorProfile ? "Join Meet" : "Start Meet"}
          </Button>
          {onCreatorProfile ? (
            <></>
          ) : (
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
          )}
        </div>
      ) : (
        <VideoChatRoom roomId={creator} leaveRoomFunc={leaveRoomFunc} />
      )}
    </div>
  );
};
export default VideoMeetTab;
