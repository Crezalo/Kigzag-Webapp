import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import AuthService from "../services/auth-services";
import queryString from "query-string";
import ShoutoutColabPageTabs from "../components/ShoutoutColabPageTabs";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

export default function CollabPage() {
  const router = useRouter();

  let { type, platform, creator } = router.query;
  const url = router.asPath;

  if (!type) type = queryString.parseUrl(url)?.query?.type;
  if (!platform) platform = queryString.parseUrl(url)?.query?.platform;
  if (!creator) creator = queryString.parseUrl(url)?.query?.creator;

  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const classes = useStyles();

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

  if (!type) type = "user";
  if (!platform) platform = "0";
  if (!creator) creator = username;

  const [value, setValue] = React.useState(parseInt(platform?.toString()));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array;

  if (type == "creator" || type == "user") {
    tabs_array = [
      <ShoutoutColabPageTabs
        type={type}
        category="collab"
        platform="0"
        creator={creator?.toString()}
        key={1}
      />,
      <ShoutoutColabPageTabs
        type={type}
        category="collab"
        platform="1"
        creator={creator?.toString()}
        key={2}
      />,
      <ShoutoutColabPageTabs
        type={type}
        category="collab"
        platform="2"
        creator={creator?.toString()}
        key={3}
      />,
    ];
  }

  return (
    <div>
      <Head>
        <title>Kigzag: Shoutout Requests</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="blueTextBlackBackground">
        {isConnected &&
        (platform == "0" || platform == "1" || platform == "2") ? (
          <div
            style={{
              backgroundColor: "black",
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                  style: { backgroundColor: "#3B82F6" },
                }}
                className="nftTabs"
                orientation="vertical"
              >
                <Tab label="Instagram" className={classes.tab} />
                <Tab label="Youtube" className={classes.tab} />
                <Tab label="Twitter" className={classes.tab} />
              </Tabs>
            </div>
            <div style={{ width: "100%" }}>
              <Paper>{tabs_array[value]}</Paper>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
