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
import SocialHandles from "../components/SocialHandles";
import BasicModal from "../components/BasicModal";
import UpdateFeatureStatus from "../components/UpdateFeatureStatus";
import StreetviewIcon from "@mui/icons-material/Streetview";
import ShareIcon from "@mui/icons-material/Share";
import ShareSocialModal from "../components/ShareSocialModal";
import { Button, Tooltip } from "@mui/material";
import SeeFeedbacks from "../components/SeeFeedbacks";

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

export default function AboutUs() {
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
        <title>Crezalo: Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center mt-4">
        <div
          className="relative"
          style={{ width: "100vw", textAlign: "center", marginTop: "10vh" }}
        >
          <h1 className="ml-16 text-lg leading-6 font-medium text-white">
            Contact Us
          </h1>
          <p className="mt-2 ml-16 text-base text-gray-300">
            Please use the information below to get in touch with us.
          </p>
          <br />
          <div>
            <div>
              <h2 className="ml-16 text-lg leading-6 font-medium text-white">
                Email
              </h2>
              <p className="mt-2 ml-16 text-base text-gray-400">
                info@yourcompanyname.com
              </p>
            </div>
            <br />
            <div>
              <h2 className="ml-16 text-lg leading-6 font-medium text-white">
                Mobile/Whatsapp Number
              </h2>
              <p className="mt-2 ml-16 text-base text-gray-400">
                +91-9879013901
              </p>
            </div>
            <br />
            <div>
              <h2 className="ml-16 text-lg leading-6 font-medium text-white">
                Address
              </h2>
              <p className="mt-2 ml-16 text-base text-gray-400">
                1B-Abhilasha, Gangeshwar Mahadev Rd, Adajan, Surat, Gujarat,
                India - 395009
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
