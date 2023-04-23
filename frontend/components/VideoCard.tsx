import AuthService from "../services/auth-services";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import { getVideoThumbnail } from "../services/api-services/creator/video_api";
import { getCreatorSubscriptionData_Series } from "../services/api-services/creator/subscriptions_api";
import { isMobile } from "react-device-detect";
import { truncateString, useScreenSize } from "../services/utility";

interface VideoCardProp {
  videoDetails: {
    videoid: string;
    title: string;
    description: string;
    creator: string;
    duration: number;
    createdat: string;
    seriesid: string;
    chronology: number;
  };
  category: "Videos" | "Series" | "SeriesVideoGrid";
}
const VideoCard = ({ videoDetails, category }: VideoCardProp) => {
  const username = AuthService.getUsername();

  const [videoThumb, setVideoThumb] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  // const ismobile = isMobile;
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const GetVidThumbnail = () => {
    useEffect(() => {
      async function getData() {
        const result = await getVideoThumbnail(videoDetails.videoid);
        setVideoThumb(result[0]["signedurl"]);
      }
      getData();
    }, [username]);
  };

  GetVidThumbnail();

  const GetSeries1MPrice = () => {
    useEffect(() => {
      async function getData() {
        const result = await getCreatorSubscriptionData_Series(
          videoDetails.videoid
        );

        console.log(result);
        setMinPrice(result[0]["onemonth"]);
      }
      getData();
    }, [videoDetails.videoid]);
  };

  if (category === "Series") {
    GetSeries1MPrice();
  }

  function timeDifference(current, previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  }

  const timeDiff = timeDifference(
    Date.now(),
    Date.parse(videoDetails.createdat)
  );

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
    <div
      className="videoCardTitle pointer"
      onClick={() => {
        Router.push({
          pathname: category === "Series" ? "/course" : "/videoplayer",
          query:
            category === "Series"
              ? { courseid: videoDetails.videoid }
              : { videoid: videoDetails.videoid },
        });
      }}
    >
      <section
        className={
          !ismobile
            ? "videoCard videoCardImageElement pointer"
            : "videoCard videoCardImageElementMobile pointer"
        }
      >
        {videoDetails.videoid != "" && videoDetails.videoid ? (
          <>
            <div className="videoCardImage">
              {videoThumb?.includes("https://") ? (
                <img
                  src={videoThumb}
                  alt="Loading ..."
                  className={
                    !ismobile
                      ? "videoCardImageElement"
                      : "videoCardImageElementMobile"
                  }
                />
              ) : (
                <div
                  className={
                    !ismobile
                      ? "videoCardImageElement shimmer"
                      : "videoCardImageElementMobile shimmer"
                  }
                ></div>
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
          </>
        ) : (
          <div className="videoCardImage shimmer"></div>
        )}
      </section>
      <div
        style={{ padding: "0px 5px 8px 15px" }}
      >
        <div style={{ height: "85px" }}>
          <h1 style={{ fontSize: "16px" }}>
            {videoDetails?.chronology > 0
              ? videoDetails?.chronology + ". "
              : ""}
            {truncateString(videoDetails.title, 70)}
          </h1>
          <h1
            style={{
              fontSize: "13px",
              color: "grey",
              // paddingLeft: "10px",
            }}
          >
            {timeDiff.startsWith("1 ")
              ? timeDiff.replace("s", "").replace("econd", "second")
              : timeDiff}
          </h1>
        </div>
        {category === "Series" ? (
          <div>
            <h1
              style={{ fontSize: "18px", fontWeight: "bold", color: "#3b82f6" }}
            >
              ₹ {minPrice} only
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default VideoCard;
