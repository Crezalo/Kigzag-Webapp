import { useWeb3React } from "@web3-react/core";
import Jdenticon from "react-jdenticon";
import Image from "next/image";
import Router from "next/router";
import {
  useCreatorFactoryCreatorSaleFee,
  useCreatorFactoryCreatorToken,
} from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { useTokenName, useTokenSymbol } from "../hooks/ERC20/useTokenContract";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import { currencyName, parseBalance } from "../util";
import { useEffect, useState } from "react";
import { getVideoThumbnail } from "../services/api-service";

interface VideoCardProp {
  vid: {
    videoid: string;
    title: string;
    description: string;
    creator: string;
    duration: number;
  };
}
const VideoCard = ({ vid }: VideoCardProp) => {
  const { account, chainId, library } = useWeb3React();

  const [videoThumb, setVideoThumb] = useState("");

  const getVidThumbnail = () => {
    useEffect(() => {
      async function getData() {
        const res = await getVideoThumbnail(account, library, vid.videoid);
        setVideoThumb(res["signedurl"]);
        console.log(videoThumb);
      }
      getData();
    }, [account]);
  };

  getVidThumbnail();

  function seconds2time(sec) {
    var hours = Math.floor(sec / 3600);
    var minutes = Math.floor((sec - hours * 3600) / 60);
    var seconds = sec - hours * 3600 - minutes * 60;
    var time = "";

    if (hours != 0) {
      time = hours + ":";
    }

    if (minutes != 0 || time !== "") {
      time +=
        minutes < 10 && time !== "" ? "0" + minutes : String(minutes) + ":";
    }
    if (time === "") {
      time = seconds + "s";
    } else {
      time += seconds < 10 ? "0" + seconds : String(seconds);
    }
    return time;
  }

  return (
    <section
      className="videoCard pointer"
      onClick={() =>
        Router.push({
          pathname: "/videoplayer",
          query: { videoid: vid.videoid },
        })
      }
    >
      {vid.videoid != "" && vid.videoid ? (
        <>
          <div className="videoCardImage">
            {videoThumb.includes("https://") ? (
              <Image
                src={videoThumb}
                alt="Loading ..."
                width={300}
                height={225}
                className="videoCardImage"
              />
            ) : (
              <></>
            )}
            {/* <Image
              src={videoThumb}
              alt="Loading ..."
              width={300}
              height={225}
              className="videoCardImage"
            /> */}
            <h3
              className="bottom-right"
              style={{
                fontSize: "13px",
                backgroundColor: "black",
                padding: "1px",
              }}
            >
              {seconds2time(vid.duration)}
            </h3>
          </div>
          <div style={{ padding: "0px 5px 8px 15px" }}>
            <h1 style={{ fontSize: "16px" }}>{vid.title}</h1>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};
export default VideoCard;
