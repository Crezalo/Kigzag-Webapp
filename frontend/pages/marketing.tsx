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
import SocialHandles from "../components/SocialHandles";
import BasicModal from "../components/BasicModal";
import UpdateFeatureStatus from "../components/UpdateFeatureStatus";
import StreetviewIcon from "@mui/icons-material/Streetview";
import ShareIcon from "@mui/icons-material/Share";
import ShareSocialModal from "../components/ShareSocialModal";
import { Button, CircularProgress, Tooltip } from "@mui/material";
import SeeFeedbacks from "../components/SeeFeedbacks";
import Marketing from "../components/Marketing";
import Image from "next/image";
import loading from "../public/loadingCrezalo.gif";

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

export default function MarketinG() {
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

  return (
    <div>
      <Head>
        <title>Crezalo: Marketing [Admin only]</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ backgroundColor: "black" }}>
        {isConnected ? (
          <Marketing />
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
