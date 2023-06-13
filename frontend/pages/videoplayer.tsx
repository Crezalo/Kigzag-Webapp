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
import { getSpecificCreatorUserVODData } from "../services/api-services/user/vod_api";
import {
  checkUserValidSub,
  getSpecificCreatorSeriesIdUserVideoSeriesData,
} from "../services/api-services/user/video_series_api";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useScreenSize } from "../services/utility";
import { CircularProgress } from "@mui/material";
import loading from "../public/loadingCrezalo.gif";

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
  const [isValidated, setIsValidated] = useState(false);
  const videoRef = useRef(null);
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

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

  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    creator: "",
    seriesid: "",
    type: -1,
    createdat: "",
    chronology: -1,
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
    Date.parse(videoDetails?.createdat)
  );

  const CheckIsValidated = () => {
    useEffect(() => {
      async function getData() {
        if (videoid) {
          const result = await checkUserValidSub(videoid.toString());
          console.log("result");
          console.log(result);
          if (typeof result !== "string" && result) {
            setIsValidated(result);
          }
        }
      }
      getData();
    }, [username, videoid]);
    return true;
  };

  CheckIsValidated();

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

  console.log("videoDetails");
  console.log(videoDetails);
  console.log("signedURl");
  console.log(signedURl);
  // console.log("isValidated");
  // console.log(isValidated);

  return (
    <div>
      <Head>
        <title>
          {videoDetails?.chronology > 0 ? videoDetails?.chronology + ". " : ""}
          {videoDetails?.title ? videoDetails?.title : "Crezalo: Player"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="videoDiv" style={{ backgroundColor: "black" }}>
        {isConnected && signedURl ? (
          <>
            {isValidated ? (
              <>
                {videoDetails?.type == 0 ? (
                  <video
                    controls
                    autoPlay
                    crossOrigin="anonymous"
                    controlsList="nodownload"
                    ref={videoRef}
                    style={{
                      height: ismobile ? "60vw" : "80vh",
                      width: ismobile ? "90vw" : "90vw",
                    }}
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
                ) : (
                  <DocViewer
                    documents={[
                      {
                        uri: signedURl.replace(".mp4", ".pdf"),
                      },
                    ]}
                    theme={{
                      primary: "#5296d8",
                      secondary: "#ffffff",
                      tertiary: "#5296d899",
                      textPrimary: "#ffffff",
                      textSecondary: "#5296d8",
                      textTertiary: "#00000099",
                      disableThemeScrollbar: false,
                    }}
                    pluginRenderers={DocViewerRenderers}
                    style={{
                      height: ismobile ? "80vh" : "90vh",
                      width: "100vw",
                    }}
                  />
                )}
                <h1 className="videoDiv h1">
                  {videoDetails?.chronology > 0
                    ? videoDetails?.chronology + ". "
                    : ""}
                  {videoDetails?.title}
                </h1>
                <section
                  onClick={() => {
                    Router.push({
                      pathname: "/creatorprofile",
                      query: {
                        address: videoDetails?.creator,
                      },
                    });
                  }}
                  className="creatorIdent pointer"
                >
                  <div className="creatorImageMinor">
                    <CreatorDP
                      creator={videoDetails?.creator}
                      height={50}
                      width={50}
                    />
                  </div>
                  <h2 className="VideoDiv h2">{videoDetails?.creator}</h2>
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
                <h1 className="VideoDiv p">{videoDetails?.description}</h1>
              </>
            ) : (
              <></>
            )}
            <div style={{ marginTop: "5vh" }}>
              {videoDetails?.seriesid === "vod_" + videoDetails?.creator ? (
                <>
                  {isValidated ? (
                    <h1 className="videoDiv h1" style={{ color: "#3B82F6" }}>
                      Other Videos
                    </h1>
                  ) : (
                    <></>
                  )}
                  <VideosSeriesGating
                    creator={videoDetails?.creator}
                    onCreatorProfile={false}
                    category="Videos"
                    ignoreVideoId={videoid.toString()}
                    onVideoPlayer={true}
                  />
                </>
              ) : (
                <>
                  <h1 className="videoDiv h1" style={{ color: "#3B82F6" }}>
                    Other lectures from course
                  </h1>
                  <VideosSeriesGating
                    creator={videoDetails?.creator}
                    onCreatorProfile={false}
                    category="SeriesVideoGrid"
                    seriesid={videoDetails?.seriesid}
                    ignoreVideoId={videoid.toString()}
                    onVideoPlayer={true}
                  />
                </>
              )}
            </div>
          </>
        ) : (
          // <CircularProgress
          //   style={{
          //     display: "flex",
          //     margin: "auto",
          //     height: "80vh",
          //   }}
          // />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "30vh",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Image
              src={loading}
              height="150"
              width="150"
              alt={""}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
