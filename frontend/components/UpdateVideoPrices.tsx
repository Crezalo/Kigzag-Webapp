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
  addCreatorSubscriptionData_1m,
  addCreatorSubscriptionData_1y,
  addCreatorSubscriptionData_3m,
  getCreatorSubscriptionData_1m,
  getCreatorSubscriptionData_1y,
  getCreatorSubscriptionData_3m,
  updateCreatorSubscriptionData_1m,
  updateCreatorSubscriptionData_1y,
  updateCreatorSubscriptionData_3m,
} from "../services/api-services/creator/subscriptions_api";
import AuthService from "../services/auth-services";

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

const UpdateVideoPrices = () => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const [creator1msub, setCreator1msub] = useState({
    discord: 0,
    video_on_demand: -1,
    live_streaming: 0,
    video_call: 0,
    community_combo: 0,
  });

  const Get1mSub = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getCreatorSubscriptionData_1m(username);
          if (result[0]) setCreator1msub(result[0]);
          else
            setCreator1msub({
              discord: 0,
              video_on_demand: 0,
              live_streaming: 0,
              video_call: 0,
              community_combo: 0,
            });
        }
      }
      getData();
    }, [username]);
  };

  Get1mSub();

  const [creator3msub, setCreator3msub] = useState({
    discord: 0,
    video_on_demand: -1,
    live_streaming: 0,
    video_call: 0,
    community_combo: 0,
  });

  const Get3mSub = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getCreatorSubscriptionData_3m(username);
          if (result[0]) setCreator3msub(result[0]);
          else
            setCreator3msub({
              discord: 0,
              video_on_demand: 0,
              live_streaming: 0,
              video_call: 0,
              community_combo: 0,
            });
        }
      }
      getData();
    }, [username]);
  };

  Get3mSub();

  const [creator1ysub, setCreator1ysub] = useState({
    discord: 0,
    video_on_demand: -1,
    live_streaming: 0,
    video_call: 0,
    community_combo: 0,
  });

  const Get1ySub = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getCreatorSubscriptionData_1y(username);
          if (result[0]) setCreator1ysub(result[0]);
          else
            setCreator1ysub({
              discord: 0,
              video_on_demand: 0,
              live_streaming: 0,
              video_call: 0,
              community_combo: 0,
            });
        }
      }
      getData();
    }, [username]);
  };

  Get1ySub();

  const [vod_1m, setVod_1m] = useState(0);
  const [vod_3m, setVod_3m] = useState(0);
  const [vod_1y, setVod_1y] = useState(0);

  const updatePrice = async () => {
    let result;
    if (
      creator1msub.video_on_demand == 0 &&
      creator1msub.video_call == 0 &&
      creator1msub.live_streaming == 0 &&
      creator1msub.discord == 0 &&
      creator1msub.community_combo == 0
    ) {
      result = await addCreatorSubscriptionData_1m(
        creator1msub.discord,
        vod_1m != 0 ? vod_1m : creator1msub.video_on_demand,
        creator1msub.live_streaming,
        creator1msub.video_call,
        creator1msub.community_combo
      );
      if (result[0]) setCreator1msub(result[0]);
    } else {
      result = await updateCreatorSubscriptionData_1m(
        creator1msub.discord,
        vod_1m != 0 ? vod_1m : creator1msub.video_on_demand,
        creator1msub.live_streaming,
        creator1msub.video_call,
        creator1msub.community_combo
      );
      if (result[0]) setCreator1msub(result[0]);
    }
    if (
      creator3msub.video_on_demand == 0 &&
      creator3msub.video_call == 0 &&
      creator3msub.live_streaming == 0 &&
      creator3msub.discord == 0 &&
      creator3msub.community_combo == 0
    ) {
      result = await addCreatorSubscriptionData_3m(
        creator3msub.discord,
        vod_3m != 0 ? vod_3m : creator3msub.video_on_demand,
        creator3msub.live_streaming,
        creator3msub.video_call,
        creator3msub.community_combo
      );
      if (result[0]) setCreator3msub(result[0]);
    } else {
      result = await updateCreatorSubscriptionData_3m(
        creator3msub.discord,
        vod_3m != 0 ? vod_3m : creator3msub.video_on_demand,
        creator3msub.live_streaming,
        creator3msub.video_call,
        creator3msub.community_combo
      );
      if (result[0]) setCreator3msub(result[0]);
    }
    if (
      creator1ysub.video_on_demand == 0 &&
      creator1ysub.video_call == 0 &&
      creator1ysub.live_streaming == 0 &&
      creator1ysub.discord == 0 &&
      creator1ysub.community_combo == 0
    ) {
      result = await addCreatorSubscriptionData_1y(
        creator1ysub.discord,
        vod_1y != 0 ? vod_1y : creator1ysub.video_on_demand,
        creator1ysub.live_streaming,
        creator1ysub.video_call,
        creator1ysub.community_combo
      );
      if (result[0]) setCreator1ysub(result[0]);
    } else {
      result = await updateCreatorSubscriptionData_1y(
        creator1ysub.discord,
        vod_1y != 0 ? vod_1y : creator1ysub.video_on_demand,
        creator1ysub.live_streaming,
        creator1ysub.video_call,
        creator1ysub.community_combo
      );
      if (result[0]) setCreator1ysub(result[0]);
    }
    if (!result[0]) setErrorMsg(result);
  };

  console.log("creator1msub");
  console.log(creator1msub);
  console.log("creator3msub");
  console.log(creator3msub);
  console.log("creator1ysub");
  console.log(creator1ysub);

  return (
    <div className={classesModal.paper}>
      {creator1ysub.video_on_demand != -1 &&
      creator3msub.video_on_demand != -1 &&
      creator1msub.video_on_demand != -1 ? (
        <div>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "20px 5px 15px 5px",
            }}
          >
            <InputLabel className={classesModal.title}>
              VIDEO MEMBERSHIP PLANS
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
              defaultValue={creator1msub?.video_on_demand}
              onChange={(e) => {
                {
                  setVod_1m(parseInt(e.target.value));
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
              defaultValue={creator3msub?.video_on_demand}
              onChange={(e) => {
                {
                  setVod_3m(parseInt(e.target.value));
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
              defaultValue={creator1ysub?.video_on_demand}
              onChange={(e) => {
                {
                  setVod_1y(parseInt(e.target.value));
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
    </div>
  );
};
export default UpdateVideoPrices;
