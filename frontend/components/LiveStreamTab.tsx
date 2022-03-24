import React, { useEffect, useState } from "react";
import VideoChat from "./VideoChat";
import { useWeb3React } from "@web3-react/core";
import { socket } from "../services/socket";
import {
  getIsVideoStreamAvailable,
  getVideoStreamKey,
} from "../services/api-service";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const LiveStream = ({ creator, onCreatorProfile }: LiveStreamProp) => {
  const { chainId, account, library } = useWeb3React();

  var [isStreamAvailable, setIsStreamAvailable] = useState(false);
  var [isLoading, setIsLoading] = useState(true);
  var [viewerStream, setViewerStream] = useState("");
  var [videoUrl, setVideoUrl] = useState("");
  var [streamKey, setStreamKey] = useState("");
  const [displayChat, setDisplayChat] = useState(false);

  // console.log("socket");
  // console.log(socket);

  const GetKeyDetails = () => {
    useEffect(() => {
      async function getData() {
        if (!onCreatorProfile) {
          const res = await getVideoStreamKey(
            account,
            onCreatorProfile ? creator.toLowerCase() : account.toLowerCase(),
            library
          );
          setStreamKey(res[0].streamkey);
        }
      }
      getData();
    }, [account, creator]);
  };

  GetKeyDetails();

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        const res = await getIsVideoStreamAvailable(
          account,
          onCreatorProfile ? creator.toLowerCase() : account.toLowerCase(),
          library
        );
        setIsStreamAvailable(res.isStreamAvailable);
        setViewerStream(res.streamkey);
        if (isLoading) {
          setIsLoading(false);
        }
        socket.emit("BE-check-user", { roomId: creator, account });
        socket.emit("BE-join-room", { roomId: res.streamkey , userName: account });
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

      const intervalId = setInterval(() => {
        getData();
      }, 2000);
      return () => clearInterval(intervalId);
    }, []);
  };

  GetDetails();

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
      {isStreamAvailable &&
      viewerStream != "" &&
      viewerStream != "undefined" &&
      viewerStream ? (
        <>
          <RoomContainer>
            <VideoAndBarContainer>
              <VideoContainer>
                {/* Current User Video */}
                <VideoBox className={`width-ls`}>
                  <FlvNextPlayer
                    url={`${
                      process.env.NEXT_STATIC_lIVE_STREAM_API_URL + viewerStream
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
            <VideoChat display={displayChat} roomId={viewerStream} />
          </RoomContainer>
        </>
      ) : (
        <>
          {onCreatorProfile ? (
            <div style={{ margin: "100px", color: "white" }}>
              {isLoading ? (
                <>Loading ...</>
              ) : (
                <>Creator currently not streaming!</>
              )}
            </div>
          ) : (
            <div style={{ margin: "50px", color: "white" }}>
              {isLoading ? (
                <>Loading ...</>
              ) : (
                <>
                  Use the following in OBS Studio to start streaming:
                  <p style={{ marginTop: "20px" }}>
                    URL{" "}
                    <p style={{ color: "blue" }}>
                      {process.env.NEXT_STATIC_lIVE_STREAM_RTMP_URL}
                    </p>
                  </p>
                  <p>
                    Stream Key
                    <p style={{ color: "blue" }}>{streamKey}</p>
                  </p>
                </>
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
