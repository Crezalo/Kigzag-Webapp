import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { createRef, useEffect, useState } from "react";
import { Button, Paper } from "@material-ui/core";
import NFTCard from "./NFTCard";
import { useWeb3React } from "@web3-react/core";
import { useCreatorNFTOwnerOf } from "../hooks/ERC721/useCreatorNFTContract";
import {
  getCreatorAllVideoDetails,
  getIsVideoStreamAvailable,
  getNFTsOfCreator,
  getVideoStreamKey,
} from "../services/api-service";
import VideoCard from "./VideoCard";
import BasicModal from "./BasicModal";
import CreateProposalModal from "./CreateProposalModal";
import UploadVideoModal from "./UploadVideoModal";
import Jdenticon from "react-jdenticon";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  getVideoDetails,
  getVideoSignedUrl,
  VIDEO_API_URL,
} from "../services/api-service";
import { shortenHex } from "../util";
import { ZERO_ADDRESS } from "../constants/misc";
import useENSName from "../hooks/useENSName";
import Router, { useRouter } from "next/router";
import ConnectToWallet from "../components/ConnectToWallet";
import queryString from "query-string";
import Head from "next/head";
// import { ReactFlvPlayer } from "@asurraa/react-ts-flv-player";
import dynamic from "next/dynamic";

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
          console.log("res");
          console.log(res);
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
        console.log(res);
        setIsStreamAvailable(res.isStreamAvailable);
        setViewerStream(res.streamkey);
        if (isLoading) {
          setIsLoading(false);
        }
      }

      const intervalId = setInterval(() => {
        getData();
      }, 2000);
      return () => clearInterval(intervalId);
    }, []);
  };

  GetDetails();

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
          {console.log(
            `${process.env.NEXT_STATIC_lIVE_STREAM_API_URL + viewerStream}.flv`
          )}
          <FlvNextPlayer
            url={`${
              process.env.NEXT_STATIC_lIVE_STREAM_API_URL + viewerStream
            }.flv`}
            isMuted={false}
            isLive={true}
            showControls={true}
            enableStashBuffer={true}
          />
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

export default LiveStream;
