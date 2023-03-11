import { CSSProperties } from "react";
import Jdenticon from "react-jdenticon";
import AuthService from "../services/auth-services";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserData } from "../services/api-services/user_api";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import * as React from "react";
import queryString from "query-string";
import ProfileSliderTabs from "../components/ProfileSliderTabs";
import BannerImages from "../components/BannerImages";
import SocialHandles from "../components/SocialHandles";
import CreatorDP from "../components/CreatorDP";
import ShareIcon from "@mui/icons-material/Share";
import { Tooltip } from "@mui/material";
import ShareSocialModal from "../components/ShareSocialModal";
import BasicModal from "../components/BasicModal";
import { isMobile } from "react-device-detect";
import ProfileSliderTabsMobile from "../components/ProfileSliderTabsMobile";
import { useScreenSize } from "../services/utility";

const style = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  copyContainer: {
    border: "1px solid blue",
    background: "rgb(0,0,0,0.7)",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontStyle: "italic",
  },
};

export default function CreatorProfile() {
  const router = useRouter();

  let { address } = router.query;

  if (!address) {
    const url = router.asPath;
    address = queryString.parseUrl(url).query.address;
  }
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  // const ismobile = isMobile;
  const ismobile = useScreenSize()?.width * 1.2 < useScreenSize()?.height;

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
    iscreator: true,
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
        <title>
          {creator ? creator?.fname + " " + creator?.lname : "Profile"}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {isConnected && username && creator.fname ? (
          <div
            className={
              ismobile
                ? "blueTextBlackBackgroundMobile"
                : "blueTextBlackBackground"
            }
            style={{ fontSize: 25 }}
          >
            <BannerImages creator={creator} />
            <div style={{ display: "flex" }}>
              <div className="creatorImageDiv">
                <CreatorDP
                  creator={creator.username}
                  height={125}
                  width={125}
                />
              </div>
              {ismobile ? (
                <div className="description">
                  <div
                    style={{
                      minWidth: "25vw",
                      // width: "30vw",
                      justifyContent: "center",
                    }}
                  ></div>
                </div>
              ) : (
                <div className="description">
                  <div
                    style={{
                      minWidth: "25vw",
                      // width: "30vw",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "white",
                        // margin: "5px 0 5px 0",
                      }}
                    >
                      {creator.username}
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        color: "white",
                        // margin: "5px 0 5px 0",
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
                    <SocialHandles creator={creator} />
                  </div>
                </div>
              )}
              <BasicModal
                modalButtonText={
                  <Tooltip title="Share Kigzag">
                    <ShareIcon
                      className="pointer"
                      style={{ fontSize: "30px", color: "lightgrey" }}
                    />
                  </Tooltip>
                }
                modalBody={
                  <ShareSocialModal
                    title={"Share " + creator.fname + "'s Kigzag"}
                    url={
                      process.env.NEXT_STATIC_WEBSITE_URL +
                      "@" +
                      creator.username
                    }
                    socialTypes={[
                      "whatsapp",
                      "telegram",
                      "twitter",
                      "linkedin",
                      "facebook",
                      "reddit",
                    ]}
                    onSocialButtonClicked={(data) => console.log(data)}
                    style={style}
                  />
                }
                formatting={true}
              />
            </div>
            {ismobile ? (
              <div className="descriptionMobile">
                <div
                  style={{
                    minWidth: "25vw",
                    // width: "30vw",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "white",
                      // margin: "5px 0 5px 0",
                    }}
                  >
                    {creator.username}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "white",
                      // margin: "5px 0 5px 0",
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
                  <SocialHandles creator={creator} />
                  <br />
                </div>
              </div>
            ) : (
              <></>
            )}
            {!ismobile ? (
              <ProfileSliderTabs
                onCreatorProfile={true}
                creator={creator.username}
                isCreator={true}
              />
            ) : (
              <ProfileSliderTabsMobile
                onCreatorProfile={true}
                creator={creator.username}
                isCreator={true}
              />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
