import { useEffect, useState } from "react";
import { useRef } from "react";
import Jdenticon from "react-jdenticon";
import {
  getVideoDetails,
  getVideoSignedUrl,
} from "../services/api-services/creator/video_api";
import Router, { useRouter } from "next/router";
import queryString from "query-string";
import Head from "next/head";
import AuthService from "../services/auth-services";
import { getSpecificUserData } from "../services/api-services/user_api";
import Image from "next/image";
import VideosSeriesGating from "../components/VideosSeriesGating";
import CreatorDP from "../components/CreatorDP";

export default function VideoPlayer() {
  const router = useRouter();
  let { videoid } = router.query;

  if (!videoid) {
    const url = router.asPath;
    videoid = queryString.parseUrl(url).query.videoid;
  }

  var [signedURl, setSignedURl] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [displayPicture, setDisplayPicture] = useState("");
  const videoRef = useRef(null);

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const updateUsername = () => {
    useEffect(() => {
      setUsername(AuthService.getUsername());
    }, [isConnected]);
  };

  updateUsername();

  const GetVideoUrl = () => {
    useEffect(() => {
      async function getData() {
        if (videoid) {
          const result = await getVideoSignedUrl(videoid.toString());
          setSignedURl(result[0]["signedurl"]);
          videoRef.current?.pause();
          videoRef.current?.load();
          videoRef.current?.play();
        }
      }
      getData();
    }, [videoid]);
  };

  GetVideoUrl();

  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    creator: "",
    seriesid: "",
    createdat: "",
  });

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

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        if (videoid) {
          const result = await getVideoDetails(videoid.toString());
          setVideoDetails(result[0]);
        }
      }
      getData();
    }, [videoid]);
  };

  GetDetails();

  const GetDisplatPicture = () => {
    useEffect(() => {
      async function getData() {
        if (videoDetails.creator != "") {
          const result = await getSpecificUserData(
            videoDetails.creator,
            "displaypicture"
          );
          setDisplayPicture(result[0]?.displaypicture);
        }
      }
      getData();
    }, [videoDetails.creator]);
  };

  GetDisplatPicture();

  console.log("videoDetails");
  console.log(videoDetails);
  console.log("signedURl");
  console.log(signedURl);

  return (
    <div>
      <Head>
        <title>{videoDetails.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="videoDiv">
        {isConnected && signedURl ? (
          <>
            <video
              controls
              autoPlay
              crossOrigin="anonymous"
              controlsList="nodownload"
              ref={videoRef}
            >
              <source src={signedURl} type="video/mp4" />
              {/* <track
              label="English"
              kind="captions"
              srcLang="en"
              src={VIDEO_API_URL + "captions/" + videoid}
              default
            /> */}
            </video>
            <h1 className="videoDiv h1">{videoDetails.title}</h1>
            <section
              onClick={() => {
                Router.push({
                  pathname: "/creatorprofile",
                  query: {
                    address: videoDetails.creator,
                  },
                });
              }}
              className="creatorIdent pointer"
            >
              <div className="creatorImageMinor">
                <CreatorDP
                  creator={videoDetails.creator}
                  height={50}
                  width={50}
                />
              </div>
              <h2 className="VideoDiv h2">{videoDetails.creator}</h2>
            </section>
            <h1
              className="VideoDiv h1"
              style={{
                fontSize: "13px",
                color: "grey",
              }}
            >
              {timeDiff.startsWith("1 ")
                ? timeDiff.replace("s", "").replace("econd", "second")
                : timeDiff}
            </h1>
            <h1 className="VideoDiv p">{videoDetails.description}</h1>
            <div style={{ marginTop: "5vh" }}>
              {videoDetails?.seriesid === "vod_" + videoDetails?.creator ? (
                <>
                  <h1 className="videoDiv h1" style={{ color: "#3B82F6" }}>
                    Other Videos
                  </h1>
                  <VideosSeriesGating
                    creator={videoDetails.creator}
                    onCreatorProfile={true}
                    category="Videos"
                    ignoreVideoId={videoid.toString()}
                  />
                </>
              ) : (
                <>
                  <h1 className="videoDiv h1" style={{ color: "#3B82F6" }}>
                    Other lectures from course
                  </h1>
                  <VideosSeriesGating
                    creator={videoDetails.creator}
                    onCreatorProfile={true}
                    category="SeriesVideoGrid"
                    seriesid={videoDetails.seriesid}
                    ignoreVideoId={videoid.toString()}
                  />
                </>
              )}
            </div>
          </>
        ) : (
          <>{/* <ConnectToAccount /> */}</>
        )}
      </div>
    </div>
  );
}
