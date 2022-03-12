import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { createRef, useEffect, useState } from "react";
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

  // const vidplay = document.getElementById("video_player") as HTMLVideoElement;

  // const GetVideoFeed = () => {
  //   useEffect(() => {
  //     const player = flv.createPlayer({
  //       type: "flv",
  //       url: `http://localhost:8000/live/1.flv`,
  //     });
  //     player.attachMediaElement(vidplay);
  //     player.load();
  //   }, [account, chainId]);
  // };

  // GetVideoFeed();

  // console.log("signedURl");
  // console.log(signedURl);

  return (
    <div className="blueTextBlackBackground">
      {/* <video
        id="video_player"
        controls
        autoPlay
        crossOrigin="anonymous"
        controlsList="nodownload"
      /> */}
      <FlvNextPlayer
        url={`http://localhost:8000/live/1.flv`}
        isMuted={false}
        isLive={true}
        showControls={true}
        enableStashBuffer={true}
      />
    </div>
  );
};

export default LiveStream;
