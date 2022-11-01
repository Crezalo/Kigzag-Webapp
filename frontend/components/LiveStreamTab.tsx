import React, { useEffect, useState } from "react";
import VideoChat from "./VideoChat";
import { socket } from "../services/socket";
import styled from "styled-components";
import dynamic from "next/dynamic";
import AuthService from "../services/auth-services";
import { Button, Paper } from "@material-ui/core";
import {
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import ContentCopy from "@mui/icons-material/ContentCopy";
import Warning from "@mui/icons-material/Warning";
import LockReset from "@mui/icons-material/LockReset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addCreatorLiveStreamData,
  getCreatorLiveStreamData,
  updateCreatorLiveStreamData,
} from "../services/api-services/creator/livestream_api";
import CircularProgress from "@mui/material/CircularProgress";
import Router from "next/router";

const FlvNextPlayer = dynamic(
  () => import("@asurraa/react-ts-flv-player/dist/NextReactFlvPlayer"),
  {
    ssr: false,
  }
);

interface LiveStreamProp {
  creator: string;
  onCreatorProfile: boolean;
}
const toolTipTheme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "15px",
      },
    },
  },
});

const LiveStream = ({ creator, onCreatorProfile }: LiveStreamProp) => {
  const username = AuthService.getUsername();
  var [isStreamAvailable, setIsStreamAvailable] = useState(false);
  var [isLoading, setIsLoading] = useState(true);
  var [streamKey, setStreamKey] = useState("");
  var [viewKey, setViewKey] = useState("");
  const [displayChat, setDisplayChat] = useState(false);
  const [showStreamKey, setShowStreamKey] = useState(false);
  const handleClickShowPassword = () => setShowStreamKey(!showStreamKey);
  const handleMouseDownPassword = () => setShowStreamKey(!showStreamKey);

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        if (!onCreatorProfile) {
          const result = await addCreatorLiveStreamData();
          setStreamKey(result[0].streamkey);
        }
        const result = await getCreatorLiveStreamData(creator);
        setViewKey(result[0].viewkey);
        setIsStreamAvailable(result[0].isStreamAvailable);
        if (isLoading) {
          setIsLoading(false);
        }
      }
      // getData();

      const intervalId = setInterval(() => {
        getData();
      }, 2000);
      return () => clearInterval(intervalId);
    }, []);
  };

  GetDetails();

  const GetSocket = () => {
    useEffect(() => {
      async function getData() {
        socket.emit("BE-check-user", { roomId: viewKey, username });
        socket.emit("BE-join-room", {
          roomId: viewKey,
          userName: username,
        });
        socket.on("FE-user-join", (users) => {
          console.log("FE-user-join");
          console.log(users);
          // all users
          users.forEach(({ userId, info }) => {
            let { userName, video, audio } = info;
          });

          socket.on("FE-receive-call", ({ signal, from, info }) => {
            let { userName, video, audio } = info;
          });

          socket.on("FE-call-accepted", ({ signal, answerId }) => {});

          socket.on("FE-user-leave", ({ userId, userName }) => {});
        });
      }
      getData();
    }, []);
  };

  GetSocket();

  const RotateStreamKey = async () => {
    const result = await updateCreatorLiveStreamData();
    setStreamKey(result[0].streamkey);
  };

  // Open Chat
  const clickChat = (e) => {
    e.stopPropagation();
    setDisplayChat(!displayChat);
  };
  return (
    <div
      className="blueTextBlackBackground"
      style={{ justifyContent: "center", textAlign: "center" }}
    >
      {isStreamAvailable && viewKey != "" ? (
        <>
          <RoomContainer>
            <VideoAndBarContainer>
              <VideoContainer>
                {/* Current User Video */}
                <VideoBox className={`width-ls`}>
                  <FlvNextPlayer
                    url={`${
                      process.env.NEXT_STATIC_lIVE_STREAM_API_URL + viewKey
                    }.flv`}
                    isMuted={false}
                    isLive={true}
                    showControls={true}
                    enableStashBuffer={true}
                  />
                </VideoBox>
              </VideoContainer>
              <Bar>
                <Center>
                  <ChatButton onClick={clickChat}>
                    <div>
                      <FontAwesomeIcon className="fas" icon="comments" />
                    </div>
                  </ChatButton>
                </Center>
              </Bar>
            </VideoAndBarContainer>
            <VideoChat display={displayChat} roomId={viewKey} />
          </RoomContainer>
        </>
      ) : (
        <>
          {onCreatorProfile ? (
            <div style={{ margin: "100px", color: "white" }}>
              {isLoading ? (
                <div>
                  <p style={{ marginBottom: "20px" }}>
                    Checking if the stream is on !!!
                  </p>
                  <CircularProgress
                    style={{ display: "flex", margin: "auto" }}
                  />
                </div>
              ) : (
                <>Creator currently not streaming!</>
              )}
            </div>
          ) : (
            <div
              className="blueTextBlackBackground"
              style={{
                margin: "20px",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              {isLoading ? (
                <div>
                  <p style={{ marginBottom: "20px" }}>
                    Checking if the stream is on !!!
                  </p>
                  <CircularProgress
                    style={{ display: "flex", margin: "auto" }}
                  />
                </div>
              ) : (
                <div
                  id="discordInfo"
                  style={{
                    // margin: "50px",
                    justifyContent: "center",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <div className="modelButton" style={{ marginBottom: "20px" }}>
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
                  <ThemeProvider theme={toolTipTheme}>
                    Use the following in OBS Studio to start streaming:
                    <p
                      style={{
                        fontSize: "20px",
                        margin: "15px",
                        color: "#3b82f6",
                      }}
                    >
                      URL
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      {process.env.NEXT_STATIC_lIVE_STREAM_RTMP_URL}
                    </p>
                    <p
                      style={{
                        fontSize: "20px",
                        margin: "25px 15px 25px 15px",
                        color: "#3b82f6",
                      }}
                    >
                      Stream Key{" "}
                      <Tooltip
                        title="Do NOT share your stream key with anyone"
                        placement="right-start"
                        style={{ marginLeft: "10px" }}
                      >
                        <Warning />
                      </Tooltip>
                    </p>
                    <div style={{ justifyContent: "center" }}>
                      <TextField
                        value={streamKey}
                        type={showStreamKey ? "text" : "password"} // <-- This is where the magic happens
                        // onChange={someChangeHandler}
                        InputProps={{
                          // <-- This is where the toggle button is added.
                          endAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                  RotateStreamKey();
                                }}
                                style={{ color: "white" }}
                              >
                                <Tooltip
                                  title="Rotate Stream Key, in case it is compromised"
                                  placement="bottom-start"
                                >
                                  <LockReset />
                                </Tooltip>
                              </IconButton>
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                  navigator.clipboard.writeText(streamKey);
                                }}
                                style={{ color: "white" }}
                              >
                                <Tooltip title="Copy" placement="bottom-start">
                                  <ContentCopy />
                                </Tooltip>
                              </IconButton>
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                style={{ color: "white" }}
                              >
                                {showStreamKey ? (
                                  <Tooltip
                                    title="Hide"
                                    placement="bottom-start"
                                  >
                                    <Visibility />
                                  </Tooltip>
                                ) : (
                                  <Tooltip
                                    title="Show"
                                    placement="bottom-start"
                                  >
                                    <VisibilityOff />
                                  </Tooltip>
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                          style: { color: "white" },
                        }}
                        disabled
                      />
                    </div>
                  </ThemeProvider>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const VideoContainer = styled.div`
  max-width: 100%;
  height: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  gap: 10px;
`;

const VideoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  > video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :hover {
    > i {
      display: block;
    }
  }
`;

const Bar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  // background-color: #4ea1d3;
  color: white;
  border-radius: 0.5rem;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ChatButton = styled.div`
  width: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;

const RoomContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 100vh;
  flex-direction: row;
`;

const VideoAndBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export default LiveStream;
