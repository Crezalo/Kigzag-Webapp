import { useEffect, useState } from "react";
import AuthService from "../services/auth-services";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import { getCreatorInfoImages } from "../services/api-services/content_api";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Grid } from "@mui/material";

interface SocialHandlesProp {
  creator: {
    username: string;
    fname: string;
    lname: string;
    bio: string;
    iscreator: boolean;
    displaypicture: string;
    twitterhandle: string;
    instagram: string;
    youtube: string;
    website: string;
  };
}

const SocialHandles = ({ creator }: SocialHandlesProp) => {
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
    <>
      {creator && creator.iscreator ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid container spacing={1}>
            <Grid item>
              {creator && creator.twitterhandle ? (
                <a
                  href={"https://twitter.com/" + creator.twitterhandle}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item>
              {creator && creator.instagram ? (
                <a
                  href={"https://instagram.com/" + creator.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item>
              {creator && creator.youtube ? (
                <a
                  href={creator.youtube
                    .toString()
                    .toLowerCase()
                    .replace(" ", "")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <YouTubeIcon />
                </a>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item>
              {creator && creator.website ? (
                <a href={creator.website} target="_blank" rel="noreferrer">
                  <LanguageIcon />
                </a>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default SocialHandles;
