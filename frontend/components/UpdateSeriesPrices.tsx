import { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  createTheme,
  FormControl,
  InputLabel,
  makeStyles,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Modal, Box, Fade } from "@mui/material";
import {
  getCreatorSubscriptionData_Series,
  updateCreatorSubscriptionData_Series,
  addCreatorSubscriptionData_Series,
} from "../services/api-services/creator/subscriptions_api";
import AuthService from "../services/auth-services";
import { clickEvent } from "../services/analytics";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    display: "flex",
    flexDirection: "column",
    // width: "50%",
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
  title: {
    fontWeight: "bold",
    margin: "10px 0 20px 0",
    color: "#3B82F6",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    margin: "5px 0 5px 0",
    color: "#3B82F6",
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
    backgroundColor: "white",
    borderRadius: "5px",
  },
  successful: {
    color: "green",
    fontSize: "16px",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  textfield: {
    // width: "80%",
    margin: "5px 0 5px 0",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
    // "& label.Mui-focused": {
    //   color: "white",
    // },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3b82f6",
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

interface UpdateSeriesPricesProp {
  seriesid: string;
}

const UpdateSeriesPrices = ({ seriesid }: UpdateSeriesPricesProp) => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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

  const [seriesSub, setSeriesSub] = useState({
    seriesid: "",
    onemonth: -1,
    threemonths: -1,
    oneyear: -1,
  });

  const GetSeriesSub = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getCreatorSubscriptionData_Series(seriesid);
          console.log("result");
          console.log(result);
          if (result[0]) setSeriesSub(result[0]);
        }
      }
      getData();
    }, [username]);
  };

  GetSeriesSub();

  const [series_1m, setSeries_1m] = useState(0);
  const [series_3m, setSeries_3m] = useState(0);
  const [series_1y, setSeries_1y] = useState(0);

  const updatePrice = async () => {
    let result;
    setSuccessMsg("");
    setErrorMsg("");
    if (
      seriesSub.onemonth == 0 &&
      seriesSub.threemonths == 0 &&
      seriesSub.oneyear == 0
    ) {
      result = await addCreatorSubscriptionData_Series(
        seriesid,
        series_1m != 0 ? series_1m : seriesSub.onemonth,
        series_3m != 0 ? series_3m : seriesSub.threemonths,
        series_1y != 0 ? series_1y : seriesSub.oneyear
      );
      if (result[0]) setSeriesSub(result[0]);
    } else {
      result = await updateCreatorSubscriptionData_Series(
        seriesid,
        series_1m != 0 ? series_1m : seriesSub.onemonth,
        series_3m != 0 ? series_3m : seriesSub.threemonths,
        series_1y != 0 ? series_1y : seriesSub.oneyear
      );
      if (result[0]) setSeriesSub(result[0]);
    }
    if (!result[0]) setErrorMsg(result);
    else setSuccessMsg("Successful");
    clickEvent("CoursePriceUpdated");
  };

  return (
    <div className={classesModal.paper}>
      {seriesSub.onemonth != -1 &&
      seriesSub.threemonths != -1 &&
      seriesSub.oneyear != -1 ? (
        <div>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "20px 5px 15px 5px",
            }}
          >
            <InputLabel className={classesModal.title}>
              COURSE MEMBERSHIP PLANS
            </InputLabel>
            <InputLabel className={classesModal.label}>1 month</InputLabel>
            <TextField
              className={classesModal.textfield}
              label="Price (in ₹)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={seriesSub?.onemonth}
              onChange={(e) => {
                {
                  setSeries_1m(parseInt(e.target.value));
                }
              }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "20px 5px 15px 5px",
            }}
          >
            <InputLabel className={classesModal.label}>3 month</InputLabel>
            <TextField
              className={classesModal.textfield}
              label="Price (in ₹)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={seriesSub?.threemonths}
              onChange={(e) => {
                {
                  setSeries_3m(parseInt(e.target.value));
                }
              }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "20px 5px 15px 5px",
            }}
          >
            <InputLabel className={classesModal.label}>1 year</InputLabel>
            <TextField
              className={classesModal.textfield}
              label="Price (in ₹)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={seriesSub?.oneyear}
              onChange={(e) => {
                {
                  setSeries_1y(parseInt(e.target.value));
                }
              }}
            />
          </Box>
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={updatePrice}
          >
            Update
          </Button>
        </div>
      ) : (
        <></>
      )}
      <p className={classesModal.error}>{errorMsg}</p>
      <p className={classesModal.successful}>{successMsg}</p>
    </div>
  );
};
export default UpdateSeriesPrices;
