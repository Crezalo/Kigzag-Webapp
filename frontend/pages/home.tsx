import { CSSProperties } from "react";
import Jdenticon from "react-jdenticon";
import AuthService from "../services/auth-services";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserData } from "../services/api-services/user_api";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileSliderTabs from "../components/ProfileSliderTabs";
import BannerImages from "../components/BannerImages";
import SocialHandles from "../components/SocialHandles";
import CreatorDP from "../components/CreatorDP";

const buttonStyle: CSSProperties = {
  fontSize: "15px",
  fontWeight: "bold",
  textAlign: "center",
  width: "auto",
  marginTop: "20px",
};

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "black",
    backgroundColor: "blue",
    padding: theme.spacing(2, 4, 3),
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "80vh",
    margin: "20px",
  },
}));

export default function Home() {
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

  const [user, setUser] = useState({
    emailaddress: "",
    signuptype: 1,
    username: "",
    fname: "",
    lname: "",
    bio: "",
    iscreator: false,
    displaypicture: "",
    twitterhandle: "",
    instagram: "",
    youtube: "",
    website: "",
  });

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getUserData(username);
          setUser(result[0]);
        }
      }
      getData();
    }, [username]);
  };

  GetUser();

  return (
    <div>
      <Head>
        <title>Kigzag: Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {isConnected && username && user.fname ? (
          <div className="blueTextBlackBackground" style={{ fontSize: 25 }}>
            <BannerImages creator={user} />
            <div style={{ display: "flex" }}>
              <div className="creatorImageDiv">
                <CreatorDP creator={user?.username} height={125} width={125} />
              </div>
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
                      fontSize: "16.5px",
                      color: "white",
                      // margin: "5px 0 5px 0",
                      fontWeight: "bold",
                    }}
                  >
                    {user.fname + " " + user.lname}
                  </div>
                  {user.bio != "" ? (
                    <div style={{ fontSize: "16px", color: "white" }}>
                      {user.bio}
                    </div>
                  ) : (
                    <></>
                  )}
                  {!user.iscreator ? (
                    <button
                      className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
                      style={buttonStyle}
                      onClick={() => {
                        Router.push({
                          pathname: "/becomeacreator",
                        });
                      }}
                    >
                      Monetize
                    </button>
                  ) : (
                    <SocialHandles creator={user} />
                  )}
                </div>
              </div>
            </div>
            {user.iscreator ? (
              <ProfileSliderTabs
                onCreatorProfile={false}
                creator=""
                isCreator={user.iscreator}
              />
            ) : (
              <></>
            )}
          </div>
        ) : (
          // <ConnectToAccount />
          <></>
        )}
      </div>
    </div>
  );
}
