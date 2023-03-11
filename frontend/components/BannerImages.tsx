import { useEffect, useState } from "react";
import AuthService from "../services/auth-services";
import twitter from "../public/twitter.png";
import instagram from "../public/instagram.png";
import youtube from "../public/youtube.png";
import website from "../public/website.png";
import { getCreatorInfoImages } from "../services/api-services/content_api";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useScreenSize } from "../services/utility";

interface SettingsT {
  autoPlay: boolean;
  animation: "fade" | "slide";
  indicators: boolean;
  duration: number;
  navButtonsAlwaysVisible: boolean;
  navButtonsAlwaysInvisible: boolean;
  fullHeightHover: boolean;
  cycleNavigation: boolean;
  swipe: boolean;
  [key: string]: any;
}

const DefaultSettingsT: SettingsT = {
  autoPlay: true,
  animation: "fade",
  indicators: false,
  duration: 500,
  navButtonsAlwaysVisible: false,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: false,
};

interface BannerImagesProp {
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

const BannerImages = ({ creator }: BannerImagesProp) => {
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  var [signedURls, setSignedURls] = useState([]);
  var [imageLen, setImageLen] = useState(-1);
  const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);
  // const ismobile=isMobile;
  const ismobile = useScreenSize().width * 1.2 < useScreenSize().height;

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

  const GetImages = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const res1 = await getCreatorInfoImages(
            "oimages",
            creator ? creator.username : username
          );
          if (res1[0]) {
            setSignedURls(res1[0]["signedurls"]);
            setImageLen(res1[0]["signedurls"].length);
          }
        }
      }
      getData();
    }, [username]);
  };

  GetImages();

  function updateSignedUrl() {
    if (signedURls?.length > 0) {
      for (let i = 0; i < signedURls.length; i++) {
        var http = new XMLHttpRequest();
        http.open("HEAD", signedURls[i]);
        http.onreadystatechange = function () {
          if (this.readyState == this.DONE) {
            if (this.status == 403) if (imageLen == -1) setImageLen(i);
          }
        };
        http.send();
      }
      if (imageLen != -1) signedURls.length = imageLen;
      return true;
    }
    return false;
  }

  updateSignedUrl();

  return (
    <>
      {creator && creator.iscreator ? (
        <div>
          {updateSignedUrl() ? (
            <Carousel
              className="editPageCarousel"
              {...settings}
              navButtonsProps={{
                // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                  backgroundColor: "cornflowerblue",
                  borderRadius: 5,
                },
              }}
              sx={{ marginLeft: ismobile ? "0px" : "20px" }}
            >
              {Array.from(signedURls).map((item, i) => (
                <img
                  src={item}
                  alt="Loading ..."
                  style={{
                    width: "100%",
                    height: "24vh",
                    objectFit: "cover",
                  }}
                  onError={() => setImageLen(i)}
                />
              ))}
            </Carousel>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default BannerImages;
