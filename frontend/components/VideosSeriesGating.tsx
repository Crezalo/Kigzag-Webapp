import { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  createTheme,
  FormControl,
  InputLabel,
  makeStyles,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import {
  Modal,
  Box,
  Fade,
  Grid,
  Container,
  Link,
  CardActions,
  Card,
  CardContent,
  GlobalStyles,
} from "@mui/material";
import AuthService from "../services/auth-services";
import ContentCardGrid from "./ContentCardGrid";
import { getSpecificCreatorUserVODData } from "../services/api-services/user/vod_api";
import { getSpecificCreatorSeriesIdUserVideoSeriesData } from "../services/api-services/user/video_series_api";
import { useRouter } from "next/router";
import Router from "next/router";
import Image from "next/image";
import Jdenticon from "react-jdenticon";
import { Spinner } from "reactstrap";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import StarIcon from "@mui/icons-material/Star";
import {
  getCreatorSpecificPlanSubscriptionData_1m,
  getCreatorSpecificPlanSubscriptionData_1y,
  getCreatorSpecificPlanSubscriptionData_3m,
  getCreatorSubscriptionData_Series,
} from "../services/api-services/creator/subscriptions_api";
import BasicModal from "./BasicModal";
import AddToCart from "./AddToCart";

const toolTipTheme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "15px",
      },
    },
  },
});

interface VideosSeriesGatingProp {
  creator: string;
  seriesid?: string;
  onCreatorProfile: boolean;
  category: "Videos" | "Series" | "SeriesVideoGrid";
  ignoreVideoId?: string;
  onVideoPlayer?: boolean;
  onCoursePage?: boolean;
}

interface userVodDataI {
  id: number;
  username: string;
  creator: string;
  expiry_date: string;
  type: number;
}

interface userSeriedDataI {
  id: number;
  username: string;
  creator: string;
  seriesid: string;
  expiry_date: string;
  type: number;
}

interface pricingI {
  onemonth: number;
  threemonths: number;
  oneyear: number;
}

const VideosSeriesGating = ({
  creator,
  seriesid,
  onCreatorProfile,
  category,
  ignoreVideoId,
  onVideoPlayer,
  onCoursePage,
}: VideosSeriesGatingProp) => {
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [userVODData, setUserVODData] = useState<userVodDataI>();
  const [userSeriesData, setUserSeriesData] = useState<userSeriedDataI>();
  const [pricing, setPricing] = useState<pricingI>({
    onemonth: 0,
    threemonths: 0,
    oneyear: 0,
  });
  const [userValidatePurchase, setUserValidatePurchase] = useState(true);

  const GetPrices = () => {
    useEffect(() => {
      async function getData() {
        var temp = {
          onemonth: 0,
          threemonths: 0,
          oneyear: 0,
        };
        if (category === "Videos") {
          const result = await getCreatorSpecificPlanSubscriptionData_1m(
            creator,
            "video_on_demand"
          );
          const result1 = await getCreatorSpecificPlanSubscriptionData_3m(
            creator,
            "video_on_demand"
          );
          const result2 = await getCreatorSpecificPlanSubscriptionData_1y(
            creator,
            "video_on_demand"
          );
          if (result[0]) {
            temp.onemonth = result[0].video_on_demand;
          }
          if (result1[0]) {
            temp.threemonths = result1[0].video_on_demand;
          }
          if (result2[0]) {
            temp.oneyear = result2[0].video_on_demand;
          }
          if (temp.onemonth != 0) setPricing(temp);
        }

        if (category === "SeriesVideoGrid") {
          const result = await getCreatorSubscriptionData_Series(seriesid);
          if (result && result[0]) {
            temp.onemonth = result[0].onemonth;
            temp.threemonths = result[0].threemonths;
            temp.oneyear = result[0].oneyear;
          }
          if (temp.onemonth != 0) setPricing(temp);
        }
      }
      getData();
    }, [username]);
    return true;
  };

  GetPrices();

  const tiers = [
    {
      title: "1 Month",
      price: pricing.onemonth,
      description: [
        // "1 month access to Premium Videos by " + creator
      ],
      buttonText: "Buy Now",
      buttonVariant: "outlined",
    },
    {
      title: "3 Months",
      subheader: "Most popular",
      price: pricing.threemonths,
      description: [
        // "3 months access to Premium Videos by " + creator
      ],
      buttonText: "Buy Now",
      buttonVariant: "outlined",
    },
    {
      title: "1 Year",
      price: pricing.oneyear,
      description: [
        // "1 year access to Premium Videos by " + creator
      ],
      buttonText: "Buy Now",
      buttonVariant: "outlined",
      onCoursePage,
    },
  ];

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

  const GetAllItems = () => {
    useEffect(() => {
      async function getData() {
        var isValidated =
          (!onCreatorProfile && !onVideoPlayer && !onCoursePage) ||
          category === "Series" ||
          (category === "Videos" && !onCoursePage && !onVideoPlayer);
        setUserValidatePurchase(isValidated);
        if (creator === username) {
          setUserValidatePurchase(true);
        } else if (category === "Videos") {
          const result = await getSpecificCreatorUserVODData(creator);
          if (result[0]) {
            setUserVODData(result[0]);

            if (Date.parse(result[0].expiry_date) > Date.now()) {
              setUserValidatePurchase(true);
            }
          }
        } else if (category === "SeriesVideoGrid") {
          const result = await getSpecificCreatorSeriesIdUserVideoSeriesData(
            creator,
            seriesid
          );

          if (result && result[0]) {
            setUserSeriesData(result[0]);
            if (Date.parse(result[0].expiry_date) > Date.now()) {
              setUserValidatePurchase(true);
            }
          } else {
          }
        }
      }
      getData();
    }, [username]);
    return true;
  };

  GetAllItems();

  return (
    <>
      {userValidatePurchase ? (
        <ContentCardGrid
          creator={creator}
          onCreatorProfile={onCreatorProfile}
          category={category}
          seriesid={seriesid}
          ignoreVideoId={ignoreVideoId}
          onVideoPlayer={onVideoPlayer}
        />
      ) : (
        <div className="blueTextBlackBackground">
          <Typography style={{ fontSize: "20px", textAlign: "center" }}>
            {category === "Videos"
              ? "Access Premium Videos from " + creator
              : "Access This Course from " + creator}
          </Typography>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "20px 5px 15px 5px",
            }}
          >
            <React.Fragment>
              <GlobalStyles
                styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
              />
              <CssBaseline />
              <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                  {tiers.map((tier, i) => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid
                      item
                      key={tier.title}
                      xs={12}
                      sm={tier.title === "1 Year" ? 12 : 6}
                      md={4}
                    >
                      <Card>
                        <CardHeader
                          title={tier.title}
                          subheader={
                            <Typography
                              style={{ color: "white", padding: "5px" }}
                            >
                              {tier.subheader}
                            </Typography>
                          }
                          titleTypographyProps={{ align: "center" }}
                          action={
                            tier.title === "3 Months" ? (
                              <StarIcon style={{ color: "lightgreen" }} />
                            ) : null
                          }
                          subheaderTypographyProps={{
                            align: "center",
                          }}
                          sx={{
                            backgroundColor:
                              tier.title === "3 Months" ? "#3b82f6" : "white",
                          }}
                        />
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "baseline",
                              mb: 2,
                            }}
                          >
                            <Typography
                              component="h2"
                              variant="h3"
                              style={{ color: "#3b82f6" }}
                            >
                              {tier.price == 0 ? (
                                <span className="shimmer">{"    "}</span>
                              ) : (
                                <>₹{tier.price}</>
                              )}
                            </Typography>
                          </Box>
                          <ul>
                            {tier.description.map((line) => (
                              <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                                key={line}
                              >
                                {line}
                              </Typography>
                            ))}
                          </ul>
                        </CardContent>
                        <CardActions>
                          <BasicModal
                            modalButtonText={tier.buttonText}
                            modalBody={
                              <AddToCart
                                creator={creator}
                                feature={category === "Videos" ? 0 : 1}
                                productid={""}
                                seriesid={seriesid ? seriesid : ""}
                                qty={i == 0 ? 1 : i == 1 ? 3 : 12}
                                showContinueToCheckoutButton={true}
                              />
                            }
                          />
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </React.Fragment>
          </Box>
        </div>
      )}
    </>
  );
};
export default VideosSeriesGating;
