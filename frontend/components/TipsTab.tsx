import React, { useEffect, useState } from "react";
import tipjar from "../public/tipjar.png";
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
  const [tipJarMsg, setTipJarMsg] = useState(
    "Hello there!!! Thanks a lot for this tip!!!"
  );
  const [tipPrice, setTipPrice] = useState(100);
  const min = 0;

  return (
    <div
      className="blueTextBlackBackground"
      style={{
        justifyContent: "center",
        display: "flex",
        paddingTop: "5vh",
        flexDirection: "row",
      }}
    >
      <Image src={tipjar} alt="tipjar" width={250} height={250} />
      <div
        className="blueTextBlackBackground"
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
                <span style={{ color: "#3B82F6", marginBottom: "20px" }}>
                  {tipJarMsg}
                </span>
                <TextField
                  className={classesModal.textfieldPrice}
                  label="Price (in ₹)"
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
                <Button
                  style={{
                    background: "rgb(76, 175, 80)",
                    color: "white",
                    marginTop: "20px",
                    maxWidth: "60px",
                  }}
                  variant="contained"
                  onClick={() => {}}
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
                  rows={5}
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
                  onClick={() => {}}
                >
                  Submit
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
