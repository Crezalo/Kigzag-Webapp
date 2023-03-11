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
import BasicModal from "../components/BasicModal";
import UpdateFeatureStatus from "../components/UpdateFeatureStatus";
import StreetviewIcon from "@mui/icons-material/Streetview";
import ShareIcon from "@mui/icons-material/Share";
import ShareSocialModal from "../components/ShareSocialModal";
import { Button, Tooltip } from "@mui/material";
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
  // const ismobile = isMobile;
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
        <title>Crezalo: Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {isConnected && username && user?.username != "" ? (
          <div
            className={
              ismobile
                ? "blueTextBlackBackgroundMobile"
                : "blueTextBlackBackground"
            }
            style={{ fontSize: 25 }}
          >
            <BannerImages creator={user} />
            <div style={{ display: "flex" }}>
              <div className="creatorImageDiv">
                <CreatorDP creator={user?.username} height={125} width={125} />
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
                        fontSize: "16.5px",
                        color: "white",
                        // margin: "5px 0 5px 0",
                        fontWeight: "bold",
                      }}
                    >
                      {user?.fname != ""
                        ? user.fname + " " + user.lname
                        : user.username}
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
                      <>
                        <SocialHandles creator={user} />
                        <div style={{ float: "left" }}>
                          <BasicModal
                            modalButtonText={
                              <Button
                                style={{
                                  // background: "#3B82F6",
                                  color: "white",
                                  marginBottom: "2px",
                                  borderRadius: "40%",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                                variant="contained"
                                className="btn btn-1"
                              >
                                Features
                              </Button>
                            }
                            modalBody={<UpdateFeatureStatus />}
                            formatting={true}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
              {user.iscreator ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div style={{ marginRight: "15px" }}>
                    <Tooltip title="Public View">
                      <StreetviewIcon
                        className="pointer"
                        style={{ fontSize: "30px", color: "lightgrey" }}
                        onClick={() => {
                          Router.push({
                            pathname: "/creatorprofile",
                            query: { address: user.username },
                          });
                        }}
                      />
                    </Tooltip>
                  </div>
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
                        title={"Share " + user.fname + "'s Kigzag"}
                        url={
                          process.env.NEXT_STATIC_WEBSITE_URL +
                          "@" +
                          user.username
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
              ) : (
                <></>
              )}
            </div>
            {ismobile ? (
              <div className="descriptionMobile">
                <div
                  style={{
                    // minWidth: "25vw",
                    width: "100vw",
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
                    {user?.fname != ""
                      ? user.fname + " " + user.lname
                      : user.username}
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
                    <>
                      <SocialHandles creator={user} />
                      <div style={{ float: "left" }}>
                        <BasicModal
                          modalButtonText={
                            <Button
                              style={{
                                // background: "#3B82F6",
                                color: "white",
                                marginBottom: "2px",
                                borderRadius: "40%",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                              variant="contained"
                              className="btn btn-1"
                            >
                              Features
                            </Button>
                          }
                          modalBody={<UpdateFeatureStatus />}
                          formatting={true}
                        />
                      </div>
                      <br />
                      <br />
                    </>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
            {user.iscreator ? (
              <>
                {!ismobile ? (
                  <ProfileSliderTabs
                    onCreatorProfile={false}
                    creator=""
                    isCreator={user.iscreator}
                  />
                ) : (
                  <ProfileSliderTabsMobile
                    onCreatorProfile={false}
                    creator=""
                    isCreator={user.iscreator}
                  />
                )}
              </>
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
