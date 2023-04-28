import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2TwoTone";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

import { CircularProgress, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { useState, useEffect } from "react";
import AuthService from "../services/auth-services";
import ShoutoutTab from "./ShoutoutTab";
import ColabTab from "./ColabTab";
import MerchandiseTab from "./MerchandiseTab";
import TipsTab from "./TipsTab";
import VideosSeriesGating from "./VideosSeriesGating";
import { getCreatorFeatureStatusData } from "../services/api-services/creator/features_api";
import { BottomNavigation, Grid } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles({
  tab: {
    fontSize: "18px",
    fontWeight: 600,
  },

  background: {
    secondary: "black",
  },
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    zIndex: 999,
    borderRadius: "5px",
  },
});

interface ProfileSliderTabsMobileProps {
  onCreatorProfile: boolean;
  isCreator: boolean; // used only if onCreatorProfile=false
  creator: string; // used only if onCreatorProfile=true
}

const ProfileSliderTabsMobile = ({
  onCreatorProfile,
  creator,
  isCreator,
}: ProfileSliderTabsMobileProps) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState({
    video_on_demand: null,
    courses: null,
    merchandise: null,
    tipjar: null,
  });

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

  const GetStatus = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const res1 = await getCreatorFeatureStatusData(creator);
          if (typeof res1 !== "string") {
            setStatus(res1[0]);
            if (onCreatorProfile) {
              setValue(
                res1[0]?.video_on_demand
                  ? 0
                  : res1[0]?.courses
                  ? 1
                  : res1[0]?.merchandise
                  ? 2
                  : 3
              );
            }
          }
        }
      }
      getData();
    }, [username]);
  };

  GetStatus();

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
        <MerchandiseTab creator={username} onCreatorProfile={false} key={6} />,
        <TipsTab creator={username} onCreatorProfile={false} key={7} />,
      ];
    } else {
      tabs_array = [];
    }
  }

  const checkStatus = (text: string) => {
    if (text === "Videos") {
      return status?.video_on_demand;
    } else if (text === "Courses") {
      return status?.courses;
    } else if (text === "Merch") {
      return status?.merchandise;
    } else if (text === "Tip Jar") {
      return status?.tipjar;
    } else {
      return false;
    }
  };

  const checkStatusValue = (value: number) => {
    if (value === 0) {
      return status?.video_on_demand;
    } else if (value === 1) {
      return status?.courses;
    } else if (value === 2) {
      return status?.merchandise;
    } else if (value === 3) {
      return status?.tipjar;
    } else {
      return false;
    }
  };

  return (
    <>
      {isConnected && (onCreatorProfile || isCreator) ? (
        <>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            {["Videos", "Courses", "Merch", "Tip Jar"].map((text, index) => (
              <>
                {!onCreatorProfile || checkStatus(text) ? (
                  <div
                    key={text}
                    style={{
                      display: "flex",
                      color: index == value ? "blue" : "primary",
                      justifyContent: "space-around",
                    }}
                    onClick={() => handleChange(event, index)}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          justifyContent: "space-around",
                          padding: "5px 2vw 5px 2vw",
                          color: index == value ? "#3b82f6" : "primary",
                        }}
                      >
                        {index === 0 ? (
                          <OndemandVideoIcon fontSize="large" />
                        ) : (
                          <></>
                        )}
                        {index === 1 ? (
                          <CastForEducationIcon fontSize="large" />
                        ) : (
                          <></>
                        )}
                        {index === 2 ? (
                          <StorefrontOutlinedIcon fontSize="large" />
                        ) : (
                          <></>
                        )}
                        {index === 3 ? (
                          <SavingsOutlinedIcon fontSize="large" />
                        ) : (
                          <></>
                        )}
                      </ListItemIcon>
                    </ListItemButton>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </BottomNavigation>
          {!onCreatorProfile || checkStatusValue(value) ? (
            <Paper>{tabs_array[value]}</Paper>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileSliderTabsMobile;
