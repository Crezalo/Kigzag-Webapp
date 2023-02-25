import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
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
import AuthService from "../services/auth-services";
import React, { useEffect, useState } from "react";
import SubsCardGrid from "../components/OrderCardGrid";
import OneTimePurchaseTab from "../components/OneTimePurchaseTab";
import Head from "next/head";
import OrderCardGrid from "../components/OrderCardGrid";

const drawerWidth = 240;

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

export default function Orders() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [offset, setOffset] = useState(0);

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

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array = [
    <OrderCardGrid category="Videos" key={1} />,
    <OrderCardGrid category="Courses" key={2} />,
    <OrderCardGrid category="Merch" key={3} />,
    <OrderCardGrid category="Perq" key={4} />,
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Head>
        <title>Kigzag: My Purchases</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {username != "" && isConnected ? (
          <>
            <div
              style={{
                paddingTop: "10vh",
              }}
            >
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
                        <ListItem
                          key={text}
                          disablePadding
                          sx={{
                            display: "block",
                            color: index == value ? "blue" : "primary",
                          }}
                          onClick={() => handleChange(event, index)}
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
                      )
                    )}
                  </List>
                </Drawer>
              </Box>
            </div>
            <div style={{ width: "90vw" }}>
              <Paper>{tabs_array[value]}</Paper>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}