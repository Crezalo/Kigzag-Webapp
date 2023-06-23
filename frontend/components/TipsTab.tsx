import React, { useEffect, useState } from "react";
import tipjar from "../public/tipjar.png";
import tipjar1 from "../public/tipjar1.png";
import tipjar2 from "../public/tipjar2.png";
import tipjar3 from "../public/tipjar3.png";
import AuthService from "../services/auth-services";
import Image from "next/image";
import { Box, InputLabel, TextField } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  Backdrop,
  Button,
  createTheme,
  Fade,
  IconButton,
  InputAdornment,
  makeStyles,
  ThemeProvider,
  Tooltip,
} from "@material-ui/core";
import {
  getCreatorTipJarMsgData,
  updateTipJarMsgData,
} from "../services/api-services/creator/tipjar_api";
import { isMobile } from "react-device-detect";
import { useScreenSize } from "../services/utility";
import { clickEvent } from "../services/analytics";

const useStylesModal = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(2, 4, 3),
  },
  textfieldMsg: {
    minWidth: "50vw",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
  },
  textfieldPrice: {
    minWidth: "10vw",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
  },
}));

const toolTipTheme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "15px",
      },
    },
  },
});

interface TipsTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const TipsTab = ({ creator, onCreatorProfile }: TipsTabProp) => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [tipJarMsg, setTipJarMsg] = useState("");
  const [tipJarUserMsg, setTipJarUserMsg] = useState("");
  const [tipPrice, setTipPrice] = useState(100);
  const min = 0;
  // const ismobile = isMobile;
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

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

  const GetMessage = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const res1 = await getCreatorTipJarMsgData(creator);
          console.log(res1);
          if (typeof res1 !== "string" && res1[0]) {
            setTipJarMsg(res1[0].message);
          }
        }
      }
      getData();
    }, [username]);
  };

  GetMessage();

  const updateMessage = async () => {
    let result = await updateTipJarMsgData(tipJarMsg);
    clickEvent("TipMessageUpdateByCreator");
  };

  return (
    <div
      className={
        ismobile ? "blueTextBlackBackgroundMobile" : "blueTextBlackBackground"
      }
      style={{
        justifyContent: "center",
        display: "flex",
        paddingTop: "5vh",
        flexDirection: ismobile ? "column" : "row",
      }}
    >
      <div
        className={
          ismobile ? "blueTextBlackBackgroundMobile" : "blueTextBlackBackground"
        }
      >
        {onCreatorProfile ? (
          <span style={{ color: "#3B82F6", marginBottom: "20px" }}>
            {tipJarMsg}
          </span>
        ) : (
          <></>
        )}
        <Image
          src={onCreatorProfile ? tipjar1 : tipjar2}
          alt="tipjar"
          width={onCreatorProfile ? 350 : 250}
          height={onCreatorProfile ? 350 : 250}
        />
      </div>
      <div
        className={
          ismobile ? "blueTextBlackBackgroundMobile" : "blueTextBlackBackground"
        }
        style={{
          justifyContent: "center",
          textAlign: "center",
          paddingLeft: "5vw",
        }}
      >
        <div className={classesModal.paper}>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "10px 5px 20px 5px",
              justifyContent: "space-between",
            }}
            noValidate
            autoComplete="off"
          >
            {onCreatorProfile ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <TextField
                  className={classesModal.textfieldPrice}
                  label="Tip (in ₹)"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={tipPrice}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setTipPrice(0);
                      return;
                    }
                    const value = +e.target.value;
                    if (value < min) {
                      setTipPrice(min);
                    } else {
                      setTipPrice(value);
                    }
                  }}
                />
                <br />
                <TextField
                  className={classesModal.textfieldMsg}
                  label="Message"
                  placeholder={
                    "Type your special message for " + creator + " here..."
                  }
                  type="text"
                  multiline
                  rows={3}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={tipJarUserMsg}
                  onChange={(e) => {
                    setTipJarUserMsg(e.target.value);
                  }}
                />
                <Button
                  style={{
                    background: "rgb(76, 175, 80)",
                    color: "white",
                    marginTop: "20px",
                    maxWidth: "60px",
                  }}
                  variant="contained"
                  onClick={() => {
                    clickEvent("TippingTriggered");
                  }}
                >
                  <CurrencyRupeeIcon />
                  Tip
                </Button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <InputLabel sx={{ color: "#3B82F6" }}>
                  Write a greeting message for your followers.
                </InputLabel>
                <TextField
                  className={classesModal.textfieldMsg}
                  placeholder="Type your special message for your fans and followers here..."
                  type="text"
                  multiline
                  rows={3}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={tipJarMsg}
                  onChange={(e) => {
                    setTipJarMsg(e.target.value);
                  }}
                />
                <Button
                  style={{
                    background: "#3B82F6",
                    color: "white",
                    marginTop: "20px",
                  }}
                  variant="contained"
                  onClick={updateMessage}
                >
                  Update
                </Button>
              </div>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TipsTab;
