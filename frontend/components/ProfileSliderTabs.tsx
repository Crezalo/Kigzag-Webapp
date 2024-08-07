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
import { clickEvent } from "../services/analytics";

const drawerWidth = 240;

const useStyles = makeStyles({
  tab: {
    fontSize: "18px",
    fontWeight: 600,
  },

  background: {
    secondary: "black",
  },
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface ProfileSliderTabsProps {
  onCreatorProfile: boolean;
  isCreator: boolean; // used only if onCreatorProfile=false
  creator: string; // used only if onCreatorProfile=true
  tab?: string;
}

const ProfileSliderTabs = ({
  onCreatorProfile,
  creator,
  isCreator,
  tab,
}: ProfileSliderTabsProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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
              if (typeof tab === "string") {
                if (tab == "videos" && res1[0]?.video_on_demand) {
                  setValue(0);
                } else if (tab == "course" && res1[0]?.courses) {
                  setValue(1);
                } else if (tab == "merch" && res1[0]?.merchandise) {
                  setValue(2);
                } else if (tab == "tip" && res1[0]?.tipjar) {
                  setValue(3);
                } else {
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
              } else {
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

  const handleDrawerOpen = () => {
    setOpen(true);
    clickEvent("ProfilesliderOpen");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    clickEvent("ProfilesliderOpen");
  };

  return (
    <>
      {isConnected && (onCreatorProfile || isCreator) ? (
        <>
          <Box sx={{ display: "flex" }}>
            <Drawer variant="permanent" open={open}>
              {!open ? (
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      marginRight: 5,
                      ...(open && { display: "none" }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              ) : (
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronLeftIcon />
                    )}
                  </IconButton>
                </DrawerHeader>
              )}
              <Divider />
              <List>
                {["Videos", "Courses", "Merch", "Tip Jar"].map(
                  (text, index) => (
                    <>
                      {!onCreatorProfile || checkStatus(text) ? (
                        <ListItem
                          key={text}
                          disablePadding
                          sx={{
                            display: "block",
                            color: index == value ? "blue" : "primary",
                          }}
                          onClick={() => {
                            handleChange(event, index);
                            clickEvent("TabChange_" + value + "_To_" + index);
                          }}
                        >
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                                padding: "5px",
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
                            <ListItemText
                              primary={text}
                              sx={{ opacity: open ? 1 : 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ) : (
                        <></>
                      )}
                    </>
                  )
                )}
              </List>
            </Drawer>
          </Box>
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

export default ProfileSliderTabs;
