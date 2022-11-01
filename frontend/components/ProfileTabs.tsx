import { CircularProgress, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { useState, useEffect } from "react";
import SubscriptionTab from "./SubscriptionTab";
import ContentTab from "./ContentTab";
import CommunityTab from "./CommunityTab";
import StoreTab from "./StoreTab";
import AuthService from "../services/auth-services";

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
      <ContentTab
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={1}
      />,
      <CommunityTab
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={2}
      />,
      <StoreTab
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={3}
      />,
    ];
  } else {
    // on dashboard
    if (isCreator) {
      tabs_array = [
        <ContentTab creator={username} onCreatorProfile={false} key={1} />,
        <CommunityTab creator={username} onCreatorProfile={false} key={2} />,
        <StoreTab creator={username} onCreatorProfile={false} key={3} />,
        <SubscriptionTab key={4} />,
      ];
    } else {
      tabs_array = [<SubscriptionTab key={1} />];
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
                <Tab label="Content" className={classes.tab} />
                <Tab label="Community" className={classes.tab} />
                <Tab label="Store" className={classes.tab} />
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
                    <Tab label="Content" className={classes.tab} />
                    <Tab label="Community" className={classes.tab} />
                    <Tab label="Store" className={classes.tab} />
                    <Tab label="Purchases" className={classes.tab} />
                  </Tabs>
                  <Paper>{tabs_array[value]}</Paper>
                </>
              ) : (
                <>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{
                      style: { backgroundColor: "#3B82F6" },
                    }}
                  >
                    <Tab label="Purchases" className={classes.tab} />
                  </Tabs>
                  <Paper>{tabs_array[value]}</Paper>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <CircularProgress
          style={{ display: "flex", margin: "auto", height: "80vh" }}
        />
      )}
    </>
  );
};

export default ProfileTabs;
