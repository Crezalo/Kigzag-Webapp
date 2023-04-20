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

export default function PrivacyPolicy() {
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
        <title>Crezalo: Privacy Policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center mt-4">
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Privacy Policy for all services offered by Crezalo
          </p>
          <p className="mt-2 ml-16 text-base text-gray-200">10 January 2023</p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Thank you for choosing Crezalo, a creator monetization platform that
            enables creators to sell access to premium videos, courses,
            merchandise, and receive tips in India. We understand that privacy
            is important to our users, and we are committed to protecting their
            personal information. This Privacy Policy explains how we collect,
            use, and disclose information from users of the Crezalo platform
            ("Users").
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            1. Collection of Personal Information
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            When you sign up for Crezalo, we collect personal information such
            as your name, email address, phone number, and bank account details.
            We also collect information about your usage of our platform, such
            as your browsing history and purchase history.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            2. Use of Personal Information
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We use your personal information to provide our services to you,
            including processing payments on behalf of creators and sending the
            money to their bank accounts once in 30 days. We may also use your
            information to improve our services, communicate with you about
            updates or promotions, and personalize your experience on our
            platform.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            3. Sharing of Personal Information
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We do not share your personal information with third parties except
            as necessary to provide our services to you. For example, we may
            share your information with our payment processing partners to
            facilitate transactions. We may also share your information with law
            enforcement agencies or government officials as required by law.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            4. Security of Personal Information
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. We use encryption and
            secure socket layer (SSL) technology to protect your data during
            transmission. We also maintain physical, technical, and
            administrative safeguards to protect your information.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            5. Payment Information
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We collect payment information from creators, such as bank account
            details, in order to transfer the collected amount once after every
            30 days. We do not store credit card information on our servers, but
            use a third-party payment processor to securely process payments.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            6. Changes to this Privacy Policy
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or to comply with legal requirements. We
            encourage you to review this Privacy Policy periodically.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            7. Contact Us
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            If you have any questions or concerns about this Privacy Policy or
            our practices, please contact us at customer@crezalo.com
          </p>
        </div>
      </div>
    </div>
  );
}
