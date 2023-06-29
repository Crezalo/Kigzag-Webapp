import { CSSProperties } from "react";
import Jdenticon from "react-jdenticon";
import AuthService from "../services/auth-services";
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
import { Button, CircularProgress, Tooltip } from "@mui/material";
import { isMobile } from "react-device-detect";
import ProfileSliderTabsMobile from "../components/ProfileSliderTabsMobile";
import { reloadWithQueryParams, useScreenSize } from "../services/utility";
import CreatorOnboardIllustrate from "../components/CreatorOnboardIllustrate";
import MyCreatorBoard from "../components/MyCreatorBoard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Image from "next/image";
import loading from "../public/loadingCrezalo.gif";
import PricingPlanModal from "../components/PricingPlanModal";
import guestCred from "../consts/guestcred";
import CreatorLoginIllustrate from "../components/CreatorLoginIllustrate";
import { clickEvent } from "../services/analytics";

const style = {
  root: {
    background: "linear-gradient(45deg, #FF8E53 20%, #FE6B8B 50%)",
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

const stylePricing = {
  root: {
    background: "linear-gradient(45deg, #7F00FF 20%, #E100FF 50%)",
    borderRadius: 3,
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  pricingContainer: {
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
  const router = useRouter();
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

  const checkGuestUser = async () => {
    if (username == guestCred[0]) {
      AuthService.logout();
      reloadWithQueryParams(router);
    }
  };

  return (
    <div>
      <Head>
        <title>
          Crezalo: One Link To Sell Premium Videos, Courses, Merch, and Receive
          Tips
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ backgroundColor: "black" }}>
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
                        marginTop: username == guestCred[0] ? "20px" : 0,
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
                      <>
                        {username == guestCred[0] ? (
                          <button
                            className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
                            style={buttonStyle}
                            onClick={() => {
                              checkGuestUser();
                              clickEvent("GuestUserSignIn");
                            }}
                          >
                            Login
                          </button>
                        ) : (
                          <>
                            {username == guestCred[0] ? (
                              <button
                                className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
                                style={buttonStyle}
                                onClick={() => {
                                  checkGuestUser();
                                  clickEvent("GuestUserSignIn");
                                }}
                              >
                                Login
                              </button>
                            ) : (
                              <button
                                className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
                                style={buttonStyle}
                                onClick={() => {
                                  Router.push({
                                    pathname: "/becomeacreator",
                                  });
                                  clickEvent("Monetize");
                                }}
                              >
                                Monetize
                              </button>
                            )}
                          </>
                        )}
                      </>
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
                          clickEvent("RedirectToCreatorProfile");
                        }}
                      />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "15px" }}>
                    <BasicModal
                      modalButtonText={
                        <Tooltip title="Pricing Plan">
                          <CurrencyRupeeIcon
                            className="pointer"
                            style={{ fontSize: "30px", color: "lightgrey" }}
                          />
                        </Tooltip>
                      }
                      modalBody={<PricingPlanModal style={stylePricing} />}
                      formatting={true}
                    />
                  </div>
                  <BasicModal
                    modalButtonText={
                      <Tooltip title="Share Crezalo">
                        <ShareIcon
                          className="pointer"
                          style={{ fontSize: "30px", color: "lightgrey" }}
                        />
                      </Tooltip>
                    }
                    modalBody={
                      <ShareSocialModal
                        title={"Share " + user.fname + "'s Crezalo"}
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
                        linkTypes={[
                          "normal",
                          "videos",
                          "course",
                          "merch",
                          "tip",
                        ]}
                        onSocialButtonClicked={(data) => console.log(data)}
                        style={style}
                        onCreatorProfile={false}
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
                    width: "auto",
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
                        clickEvent("Monetize");
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
              <>
                {username == guestCred[0] ? (
                  <CreatorLoginIllustrate />
                ) : (
                  <div>
                    <MyCreatorBoard />
                    <CreatorOnboardIllustrate />
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          // <CircularProgress
          //   style={{
          //     display: "flex",
          //     margin: "auto",
          //     height: "80vh",
          //   }}
          //
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
