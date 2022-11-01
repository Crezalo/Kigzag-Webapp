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
        if (videoid) {
          const result = await getVideoDetails(videoid.toString());
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
        <title>Profile</title>
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
              {displayPicture != "" ? (
                <div className="creatorImageMinor">
                  <Image
                    src={displayPicture}
                    alt=""
                    width={50}
                    height={50}
                    className="creatorDP"
                  />
                </div>
              ) : (
                <Jdenticon size={100} value={videoDetails.creator} />
              )}
              <h2 className="VideoDiv h2">{videoDetails.creator}</h2>
            </section>
            <h1 className="VideoDiv p">{videoDetails.description}</h1>
          </>
        ) : (
          <>{/* <ConnectToWallet /> */}</>
        )}
      </div>
    </div>
  );
}
