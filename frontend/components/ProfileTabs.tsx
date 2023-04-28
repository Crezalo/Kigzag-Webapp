import { CircularProgress, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { useState, useEffect } from "react";
import AuthService from "../services/auth-services";
import VideoMeetTab from "./VideoMeetTab";
import ShoutoutTab from "./ShoutoutTab";
import ColabTab from "./ColabTab";
import MerchandiseTab from "./MerchandiseTab";
import TipsTab from "./TipsTab";
import VideosSeriesGating from "./VideosSeriesGating";
import Image from "next/image";
import loading from "../public/loadingCrezalo.gif";

const useStyles = makeStyles({
  tab: {
    fontSize: "18px",
    fontWeight: 600,
  },
});

interface ProfileTabsProps {
  onCreatorProfile: boolean;
  isCreator: boolean; // used only if onCreatorProfile=false
  creator: string; // used only if onCreatorProfile=true
}

const ProfileTabs = ({
  onCreatorProfile,
  creator,
  isCreator,
}: ProfileTabsProps) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array;

  if (onCreatorProfile) {
    // on creator profile
    tabs_array = [
      <VideosSeriesGating
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        category="Videos"
        key={1}
      />,
      <VideosSeriesGating
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        category="Series"
        key={2}
      />,
      <VideoMeetTab
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={3}
      />,
      <ShoutoutTab
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={4}
      />,
      <ColabTab
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={5}
      />,
      <MerchandiseTab
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={6}
      />,
      <TipsTab creator={creator} onCreatorProfile={onCreatorProfile} key={7} />,
    ];
  } else {
    // on dashboard
    if (isCreator) {
      tabs_array = [
        <VideosSeriesGating
          creator={username}
          onCreatorProfile={false}
          category="Videos"
          key={1}
        />,
        <VideosSeriesGating
          creator={username}
          onCreatorProfile={false}
          category="Series"
          key={2}
        />,
        <VideoMeetTab creator={username} onCreatorProfile={false} key={3} />,
        <ShoutoutTab creator={username} onCreatorProfile={false} key={4} />,
        <ColabTab creator={username} onCreatorProfile={false} key={5} />,
        <MerchandiseTab creator={username} onCreatorProfile={false} key={6} />,
        <TipsTab creator={username} onCreatorProfile={false} key={7} />,
      ];
    } else {
      tabs_array = [];
    }
  }

  return (
    <>
      {isConnected ? (
        <>
          {onCreatorProfile ? ( // on creator profile
            <>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                  style: { backgroundColor: "#3B82F6" },
                }}
              >
                <Tab label="Videos" className={classes.tab} />
                <Tab label="Series" className={classes.tab} />
                <Tab label="Meet" className={classes.tab} />
                <Tab label="Shoutout" className={classes.tab} />
                <Tab label="Collab" className={classes.tab} />
                <Tab label="Merch" className={classes.tab} />
                <Tab label="Tip 💕 Me" className={classes.tab} />
              </Tabs>
              <Paper>{tabs_array[value]}</Paper>
            </>
          ) : (
            // on dashboard
            <>
              {isCreator ? (
                <>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{
                      style: { backgroundColor: "#3B82F6" },
                    }}
                  >
                    <Tab label="Videos" className={classes.tab} />
                    <Tab label="Series" className={classes.tab} />
                    <Tab label="Meets" className={classes.tab} />
                    <Tab label="Shoutout" className={classes.tab} />
                    <Tab label="Collab" className={classes.tab} />
                    <Tab label="Merch" className={classes.tab} />
                    <Tab label="Tip Jar" className={classes.tab} />
                  </Tabs>
                  <Paper>{tabs_array[value]}</Paper>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      ) : (
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
    </>
  );
};

export default ProfileTabs;
