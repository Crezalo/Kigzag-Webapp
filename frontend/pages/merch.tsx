import { useEffect, useState } from "react";
import { useRef } from "react";
import Jdenticon from "react-jdenticon";
import Router, { useRouter } from "next/router";
import queryString from "query-string";
import Head from "next/head";
import AuthService from "../services/auth-services";
import Carousel from "react-material-ui-carousel";
import { getSpecificUserData } from "../services/api-services/user_api";
import { Paper, Button } from "@mui/material";
import Image from "next/image";
import {
  getProductIdMerchData,
  getMerchAllImages,
} from "../services/api-services/creator/merch_api";
import MerchCardGrid from "../components/MerchCardGrid";
import MerchAccordianDetails from "../components/MerchAccordianDetails";
import MerchReviewGrid from "../components/MerchReviewGrid";

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
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: false,
};

export default function Merch() {
  const router = useRouter();
  let { productid } = router.query;

  if (!productid) {
    const url = router.asPath;
    productid = queryString.parseUrl(url).query.productid;
  }

  var [signedURls, setSignedURls] = useState([]);
  var [imageLen, setImageLen] = useState(-1);
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);

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

  const [merchDetails, setMerchDetails] = useState({
    title: "",
    description: "",
    creator: "",
    productid: "",
    inventory: 0,
    return_refund_policy: "",
    country_of_origin: "",
    price: 0,
    variants: 0,
    variantname: "",
    discountpercentage: 0,
    warrantyperiod: 0,
    shippingcharges: 0,
    freeshippingabove: 0,
  });

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        if (productid) {
          const result = await getProductIdMerchData(productid.toString());
          setMerchDetails(result[0]);
        }
      }
      getData();
    }, [productid]);
  };

  GetDetails();

  const GetMerchImagesSignedUrls = () => {
    useEffect(() => {
      async function getData() {
        if (productid) {
          const result = await getMerchAllImages(productid.toString());
          setSignedURls(result[0]["signedurl"]);
        }
      }
      getData();
    }, [productid]);
  };

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

  GetMerchImagesSignedUrls();

  return (
    <div>
      <Head>
        <title>{merchDetails?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="videoDiv">
        {isConnected && productid ? (
          <>
            <div>
              <div className="merchPageImage">
                {updateSignedUrl() ? (
                  <Carousel
                    className="merchCarousel"
                    {...settings}
                    navButtonsProps={{
                      // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                      style: {
                        backgroundColor: "cornflowerblue",
                        borderRadius: 5,
                      },
                    }}
                  >
                    {signedURls.map((item, i) => (
                      <img
                        src={item}
                        alt="Loading ..."
                        width="100%"
                        height="100%"
                        onError={() => (signedURls.length = i)}
                      />
                    ))}
                  </Carousel>
                ) : (
                  <></>
                )}
              </div>
              {merchDetails?.productid && updateSignedUrl() ? (
                <MerchAccordianDetails
                  merchDetails={merchDetails}
                  thumbnail={signedURls[0]}
                />
              ) : (
                <></>
              )}
            </div>
            <div>
              <MerchCardGrid
                creator={merchDetails.creator}
                onCreatorProfile={merchDetails.creator != username}
                ignoreProductId={productid.toString()}
              />
            </div>
            <div>
              <MerchReviewGrid
                creator={merchDetails.creator}
                onCreatorProfile={merchDetails.creator != username}
                ignoreProductId={productid.toString()}
              />
            </div>
          </>
        ) : (
          <>{/* <ConnectToAccount /> */}</>
        )}
      </div>
    </div>
  );
}
