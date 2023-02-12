import { useEffect, useState } from "react";
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

export default function Course() {
  const router = useRouter();
  let { courseid } = router.query;

  if (!courseid) {
    const url = router.asPath;
    courseid = queryString.parseUrl(url).query.courseid;
  }

  var [signedURl, setSignedURl] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [displayPicture, setDisplayPicture] = useState("");

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
        if (courseid) {
          const result = await getVideoSignedUrl(courseid.toString());
          setSignedURl(result[0]["signedurl"]);
        }
      }
      getData();
    }, [username]);
  };

  GetVideoUrl();

  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    creator: "",
  });

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        if (courseid) {
          const result = await getVideoDetails(courseid.toString());
          setVideoDetails(result[0]);
        }
      }
      getData();
    }, [username]);
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

  // console.log("videoDetails");
  // console.log(videoDetails);
  // console.log("signedURl");
  // console.log(signedURl);

  return (
    <div>
      <Head>
        <title>{videoDetails.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isConnected && signedURl ? (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="videoDiv" id="DemoVideoAndCourseInfo">
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div>
                  <video
                    controls
                    autoPlay
                    crossOrigin="anonymous"
                    controlsList="nodownload"
                    style={{
                      width: "35vw",
                      height: "35vh",
                      borderRadius: "5%",
                    }}
                  >
                    <source src={signedURl} type="video/mp4" />
                    {/* <track
              label="English"
              kind="captions"
              srcLang="en"
              src={VIDEO_API_URL + "captions/" + courseid}
              default
            /> */}
                  </video>
                </div>
                <div
                  style={{
                    margin: "2vh 10vw 10vh 10vw",
                    maxWidth: "50vw",
                  }}
                >
                  <h1 className="videoDiv h1">{videoDetails.title}</h1>
                  <div
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
                  </div>
                  <h1 className="VideoDiv p">{videoDetails.description}</h1>
                </div>
              </div>
              <VideosSeriesGating
                creator={videoDetails.creator}
                onCreatorProfile={true}
                category="SeriesVideoGrid"
                seriesid={courseid.toString()}
              />
            </div>
          </div>
        </>
      ) : (
        <>{/* <ConnectToAccount /> */}</>
      )}
    </div>
  );
}
