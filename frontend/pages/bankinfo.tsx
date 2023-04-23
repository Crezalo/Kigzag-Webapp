import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  createTheme,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Head from "next/head";
import AuthService from "../services/auth-services";
import {
  getCreatorFinInfoData,
  updateCreatorFinInfoData,
} from "../services/api-services/creator/fininfo_api";
import banks from "../consts/banks";
import { useScreenSize } from "../services/utility";
import { type } from "os";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    justifyContent: "center",
    margin: "0 20px 20px 20px",
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(0, 4, 3),
    // "&:hover": {
    //   boxShadow: "0 10px 18px 8px #173464",
    //   borderRadius: "2%",
    // },
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    margin: "20px 20px 10px 0px",
  },
  edit: {
    margin: "10px",
    "&:hover": {
      color: "rgb(76, 175, 80)",
    },
  },
  error: {
    color: "red",
    fontSize: "16px",
    borderRadius: "5px",
    textAlign: "center",
  },
  successful: {
    color: "green",
    fontSize: "16px",
    borderRadius: "5px",
    textAlign: "center",
  },
  textfield: {
    width: "80%",
    margin: "10px 0 10px 0",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3b82f6",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3b82f6",
      },
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
interface SettingsT {
  autoPlay: boolean;
  animation: "fade" | "slide";
  indicators: boolean;
  duration: number;
  navButtonsAlwaysVisible: boolean;
  navButtonsAlwaysInvisible: boolean;
  fullHeightHover: boolean;
  cycleNavigation: boolean;
  swipe: boolean;
  [key: string]: any;
}

const DefaultSettingsT: SettingsT = {
  autoPlay: true,
  animation: "fade",
  indicators: false,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: false,
};

export default function BankInfo() {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [bank_name, setBank_name] = useState("");
  const [ifsc_code, setIfsc_code] = useState("");
  const [acc_number, setAcc_number] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
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

  const [fininfo, setfininfo] = useState({
    bank_name: "",
    ifsc_code: "",
    acc_number: "",
  });

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getCreatorFinInfoData();
          console.log(result);
          setfininfo(result[0]);
        }
      }
      getData();
    }, [username]);
  };

  GetUser();

  const UpdateUserData = async () => {
    setSuccessMsg("");
    setErrorMsg("");
    const result = await updateCreatorFinInfoData(
      bank_name,
      ifsc_code,
      acc_number
    );
    if (typeof result !== "string") setSuccessMsg("Successful");
    else setErrorMsg(result);
  };

  return (
    <div>
      <Head>
        <title>Crezalo: Bank Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ backgroundColor: "black" }}>
        {isConnected && username && fininfo?.bank_name ? (
          <div
            className={
              ismobile
                ? "blueTextBlackBackgroundMobile"
                : "blueTextBlackBackground"
            }
            style={{
              color: "white",
              fontSize: "18px",
              // textAlign: "center",
              // float: "right",
            }}
          >
            <div
              className="form"
              style={{
                padding: ismobile ? "5vh 0vw 0vh 5vw" : "5vh 0vw 0vh 35vw",
              }}
            >
              <label>Bank Name</label>
              <select
                id="bank_name"
                name="bank_name"
                className="mb-4 border-b-2 form inputSingleLineText"
                defaultValue={fininfo.bank_name}
                style={{
                  color: "black",
                  resize: "both",
                  width: ismobile ? "80vw" : "20vw",

                  overflow: "none",
                }}
                onChange={(e) => {
                  setBank_name(e.target.value);
                }}
              >
                {banks.map((bank) => (
                  <option value={bank}>{bank}</option>
                ))}
              </select>
              <label>IFSC Code</label>
              <input
                className="mb-4 border-b-2 form inputSingleLineText"
                type="text"
                id="ifsccode"
                name="ifsccode"
                minLength={11}
                maxLength={11}
                defaultValue={fininfo.ifsc_code}
                style={{
                  color: "black",
                  resize: "both",
                  width: ismobile ? "80vw" : "20vw",

                  overflow: "none",
                }}
                onChange={(e) => {
                  setIfsc_code(e.target.value);
                }}
              />
              <label>Account Number</label>
              <input
                className="mb-4 border-b-2 form inputSingleLineText"
                type="text"
                id="aacnumber"
                name="aacnumber"
                minLength={18}
                maxLength={18}
                defaultValue={fininfo.acc_number}
                onChange={(e) => {
                  {
                    e.target.value = e.target.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/(\..*?)\..*/g, "$1");
                    setAcc_number(e.target.value);
                  }
                }}
                style={{
                  color: "black",
                  resize: "both",
                  width: ismobile ? "80vw" : "20vw",

                  overflow: "none",
                }}
                required
              />
              <Button
                style={{
                  background: "#3B82F6",
                  color: "white",
                  marginBottom: "2px",
                  width: ismobile ? "80vw" : "20vw",
                  textAlign: ismobile ? "center" : "left",
                  justifyContent: "center",
                }}
                className={classesModal.button}
                variant="contained"
                onClick={() => {
                  UpdateUserData();
                }}
              >
                Update
              </Button>
            </div>
            <p className={classesModal.error}>{errorMsg}</p>
            <p className={classesModal.successful}>{successMsg}</p>
          </div>
        ) : (
          <CircularProgress
            style={{
              display: "flex",
              margin: "auto",
              height: "80vh",
            }}
          />
        )}
      </div>
    </div>
  );
}
