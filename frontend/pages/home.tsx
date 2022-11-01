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

  const classesModal = useStylesModal();
  const [open_becomeCreator, setOpen_becomeCreator] = useState(false);
  const handleOpen_becomeCreator = () => setOpen_becomeCreator(true);
  const handleClose_becomeCreator = () => setOpen_becomeCreator(false);

  return (
    <div>
      <Head>
        <title>Kigzag: Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {isConnected && username && user.fname ? (
          <div className="blueTextBlackBackground" style={{ fontSize: 25 }}>
            <div style={{ display: "flex" }}>
              <div className="creatorImageDiv">
                {user.displaypicture != "" ? (
                  <div>
                    <Image
                      src={user.displaypicture}
                      alt=""
                      width={125}
                      height={125}
                      className="creatorDP"
                    />
                  </div>
                ) : (
                  <Jdenticon size={100} value={username} />
                )}
                {/* <Jdenticon size={100} value={username} /> */}
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
                      fontSize: "16.5px",
                      color: "white",
                      margin: "5px 0 5px 0",
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
                      onClick={async () => {
                        handleOpen_becomeCreator();
                      }}
                    >
                      Become A Creator
                    </button>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ marginRight: "10px" }}>
                        {user && user.twitterhandle ? (
                          <a
                            href={"https://twitter.com/" + user.twitterhandle}
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={twitter}
                              alt=""
                              width={25}
                              height={20}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        {user && user.instagram ? (
                          <a
                            href={"https://instagram.com/" + user.instagram}
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
                        {user && user.youtube ? (
                          <a
                            href={user.youtube
                              .toString()
                              .toLowerCase()
                              .replace(" ", "")}
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={youtube}
                              alt=""
                              width={25}
                              height={20}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        {user && user.website ? (
                          <a
                            href={user.website}
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={website}
                              alt=""
                              width={25}
                              height={20}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <ProfileTabs
              onCreatorProfile={false}
              creator=""
              isCreator={user.iscreator}
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
