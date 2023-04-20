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
        <title>Crezalo: Privacy Policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center mt-4">
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Meet the Team at Crezalo
          </p>
          <p className="mt-2 ml-16 text-base text-gray-300">
            At Crezalo, we are a team of passionate and driven individuals who
            are dedicated to building the best creator monetization platform in
            India.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Ronnie Gandhi - Angel Investor &amp; Advisor
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Ronnie, an industry Veteran, has offered help time and again to help
            us understand market and help connect us with required resources.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Rahul Garg - CEO
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Rahul is the co-founder and CEO of Crezalo. He has a background in
            software engineering and is passionate about building products that
            make a difference. With over 10 years of experience in the tech
            industry, Rahul leads the Crezalo team to success.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Amit Patel - CTO
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Amit is the co-founder and CTO of Crezalo. He has a background in
            computer science and is an expert in backend development. With over
            8 years of experience in the tech industry, Amit leads the
            technology team at Crezalo.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Siddhart Kumar - Frontend Engineer
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Siddharth is a frontend engineer at Crezalo. He has expertise in
            React and React Native, and has worked on a number of projects for
            web and mobile applications. Siddharth is passionate about building
            user-friendly interfaces that enhance the user experience.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Priya Singh - Backend Engineer
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Priya is a backend engineer at Crezalo. She has expertise in Node.js
            and AWS, and has worked on a number of projects for web and mobile
            applications. Priya is passionate about building scalable and
            reliable backend systems that power the Crezalo platform.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Nikhil sharma - UI/UX Designer
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Nikhil is a UI/UX designer at Crezalo. He has expertise in designing
            user interfaces and experiences for web and mobile applications.
            Nikhil is passionate about designing interfaces that are intuitive
            and easy to use.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Anjali Patel - Content Marketer
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Anjali is a content marketer at Crezalo. She has expertise in
            creating and executing content marketing strategies that drive user
            acquisition and engagement. Anjali is passionate about creating
            content that resonates with our users and drives growth.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Roma Gupta - Lead Marketer
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Roma is the head of marketing at Crezalo. She has a background in
            marketing and is passionate about building brand awareness and user
            acquisition strategies. With over 5 years of experience in
            marketing, Roma leads the marketing team at Crezalo.
          </p>
        </div>
        <div className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-white">
            Rubi Singh - HR
          </p>
          <p className="mt-2 ml-16 text-base text-gray-400">
            Rubi is the head of HR at Crezalo. She has a background in human
            resources and is passionate about building a strong and motivated
            team. With over 5 years of experience in HR, Rubi leads the HR team
            at Crezalo.
          </p>
        </div>
        <p className="ml-16 text-base text-gray-400">
          At Crezalo, we are dedicated to building a platform that empowers
          creators to monetize their content and connect with their fans.
        </p>
      </div>
    </div>
  );
}
