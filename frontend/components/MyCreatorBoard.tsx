import React, { useEffect, useState } from "react";
import tipjar from "../public/tipjar.png";
import tipjar1 from "../public/creatorEconomy.png";
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

const MyCreatorBoard = () => {
  const classesModal = useStylesModal();
  // const ismobile = isMobile;
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  return <div></div>;
};

export default MyCreatorBoard;
