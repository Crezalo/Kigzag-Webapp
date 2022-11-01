import AuthService from "../services/auth-services";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import { getVideoThumbnail } from "../services/api-services/creator/video_api";
import { getVideoThumbnail as getSeriesVideoThumbnail } from "../services/api-services/creator/series_api";

interface VideoCardProp {
  videoDetails: {
    videoid: string;
    title: string;
    description: string;
    creator: string;
    duration: number;
  };
  category: "Videos" | "Series";
}
const VideoCard = ({ videoDetails, category }: VideoCardProp) => {
  const username = AuthService.getUsername();

  const [videoThumb, setVideoThumb] = useState("");

  const GetVidThumbnail = () => {
    useEffect(() => {
      async function getData() {
        const result = await getVideoThumbnail(videoDetails.videoid);
        console.log(result[0].signedurl);
        console.log(result[0]["signedurl"]);
        setVideoThumb(result[0]["signedurl"]);
        console.log(videoThumb);
      }
      getData();
    }, [username]);
  };

  const GetSeriedVidThumbnail = () => {
    useEffect(() => {
      async function getData() {
        const result = await getSeriesVideoThumbnail(videoDetails.videoid);
        console.log(result[0]["signedurl"]);
        setVideoThumb(result[0]["signedurl"]);
        console.log(videoThumb);
      }
      getData();
    }, [username]);
  };
  if (category == "Videos") GetVidThumbnail();
  else GetSeriedVidThumbnail();

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
          query: { videoid: videoDetails.videoid },
        })
      }
    >
      {videoDetails.videoid != "" && videoDetails.videoid ? (
        <>
          <div className="videoCardImage">
            {videoThumb?.includes("https://") ? (
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
            <h3
              className="bottom-right"
              style={{
                fontSize: "13px",
                backgroundColor: "black",
                padding: "1px",
              }}
            >
              {seconds2time(videoDetails.duration)}
            </h3>
          </div>
          <div style={{ padding: "0px 5px 8px 15px" }}>
            <h1 style={{ fontSize: "16px" }}>{videoDetails.title}</h1>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};
export default VideoCard;
