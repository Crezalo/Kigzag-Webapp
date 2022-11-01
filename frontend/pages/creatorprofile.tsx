import { CSSProperties } from "react";
import Jdenticon from "react-jdenticon";
import AuthService from "../services/auth-services";
import ProfileTabs from "../components/ProfileTabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserData } from "../services/api-services/user_api";
import Router, { useRouter } from "next/router";
import twitter from "../public/twitter.png";
import instagram from "../public/instagram.png";
import youtube from "../public/youtube.png";
import website from "../public/website.png";
import Head from "next/head";
import * as React from "react";
import Link from "@mui/material/Link";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import waitingGif from "../public/waiting.gif";
import greenTick from "../public/green-tick.gif";
import queryString from "query-string";

export default function CreatorProfile() {
  const router = useRouter();

  let { address } = router.query;

  if (!address) {
    const url = router.asPath;
    address = queryString.parseUrl(url).query.address;
  }
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);

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

  const [creator, setCreator] = useState({
    username: "",
    fname: "",
    lname: "",
    bio: "",
    displaypicture: "",
    twitterhandle: "",
    instagram: "",
    youtube: "",
    website: "",
  });

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (address != "") {
          const result = await getUserData(address?.toString());
          setCreator(result[0]);
        }
      }
      getData();
    }, [address]);
  };

  GetUser();

  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {isConnected && username && creator.fname ? (
          <div className="blueTextBlackBackground" style={{ fontSize: 25 }}>
            <div style={{ display: "flex" }}>
              <div className="creatorImageDiv">
                {creator.displaypicture != "" ? (
                  <Image
                    src={creator.displaypicture}
                    alt=""
                    width={150}
                    height={150}
                    className="creatorDP"
                  />
                ) : (
                  <Jdenticon size={100} value={address} />
                )}
                {/* <Jdenticon size={100} value={address} /> */}
              </div>
              <div className="description">
                <div
                  style={{
                    minWidth: "25vw",
                    width: "30vw",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "white",
                      margin: "5px 0 5px 0",
                    }}
                  >
                    {creator.username}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "white",
                      margin: "5px 0 5px 0",
                    }}
                  >
                    {creator.fname + " " + creator.lname}
                  </div>
                  {creator.bio != "" ? (
                    <div style={{ fontSize: "16px", color: "white" }}>
                      {creator.bio}
                    </div>
                  ) : (
                    <></>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "15px",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      {creator && creator.twitterhandle ? (
                        <a
                          href={"https://twitter.com/" + creator.twitterhandle}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="" width={25} height={20} />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div style={{ marginRight: "10px" }}>
                      {creator && creator.instagram ? (
                        <a
                          href={"https://instagram.com/" + creator.instagram}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={instagram}
                            alt=""
                            width={25}
                            height={25}
                          />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div style={{ marginRight: "10px" }}>
                      {creator && creator.youtube ? (
                        <a
                          href={creator.youtube
                            .toString()
                            .toLowerCase()
                            .replace(" ", "")}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="" width={25} height={20} />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div style={{ marginRight: "10px" }}>
                      {creator && creator.website ? (
                        <a
                          href={creator.website}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={website} alt="" width={25} height={20} />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProfileTabs
              onCreatorProfile={true}
              creator={creator.username}
              isCreator={true}
            />
          </div>
        ) : (
          // <ConnectToWallet />
          <></>
        )}
      </div>
    </div>
  );
}
