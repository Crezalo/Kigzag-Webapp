import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  createTheme,
  FormControl,
  InputLabel,
  makeStyles,
  Modal,
  TextField,
  Tooltip,
} from "@material-ui/core";
import ConnectToWallet from "../components/ConnectToWallet";
import Head from "next/head";
import AuthService from "../services/auth-services";
import {
  getSpecificUserData,
  getUserData,
  updateUserData,
} from "../services/api-services/user_api";
import { Fade, Label } from "reactstrap";
import Jdenticon from "react-jdenticon";
import Image from "next/image";
import Edit from "@mui/icons-material/Edit";
import Router from "next/router";
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
    // "& .MuiOutlinedInput-root": {
    //   "& fieldset": {
    //     borderColor: "white",
    //   },
    //   "&:hover fieldset": {
    //     borderColor: "white",
    //   },
    //   "&.Mui-focused fieldset": {
    //     borderColor: "#3b82f6",
    //   },
    // },
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

export default function EditProfile() {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [scenario, setScenario] = useState(0);
  // 1: video, 2: meet, 3: stream, 4: discord, 5: community combo
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMsg("");
  };

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

  const [iscreator, setIscreator] = useState(false);

  const GetIsCreator = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getSpecificUserData(username, "iscreator");
          setIscreator(result[0]?.iscreator);
        }
      }
      getData();
    }, [username]);
  };

  GetIsCreator();

  const [creator1msub, setCreator1msub] = useState({
    discord: 0,
    video_on_demand: 0,
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
        }
      }
      getData();
    }, [username]);
  };

  Get1mSub();

  const [creator3msub, setCreator3msub] = useState({
    discord: 0,
    video_on_demand: 0,
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
        }
      }
      getData();
    }, [username]);
  };

  Get3mSub();

  const [creator1ysub, setCreator1ysub] = useState({
    discord: 0,
    video_on_demand: 0,
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
        }
      }
      getData();
    }, [username]);
  };

  Get1ySub();

  const [vod_1m, setVod_1m] = useState(0);
  const [meet_1m, setMeet_1m] = useState(0);
  const [stream_1m, setStream_1m] = useState(0);
  const [discord_1m, setDiscord_1m] = useState(0);
  const [combo_1m, setCombo_1m] = useState(0);
  const [vod_3m, setVod_3m] = useState(0);
  const [meet_3m, setMeet_3m] = useState(0);
  const [stream_3m, setStream_3m] = useState(0);
  const [discord_3m, setDiscord_3m] = useState(0);
  const [combo_3m, setCombo_3m] = useState(0);
  const [vod_1y, setVod_1y] = useState(0);
  const [meet_1y, setMeet_1y] = useState(0);
  const [stream_1y, setStream_1y] = useState(0);
  const [discord_1y, setDiscord_1y] = useState(0);
  const [combo_1y, setCombo_1y] = useState(0);

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
        discord_1m != 0 ? discord_1m : creator1msub.discord,
        vod_1m != 0 ? vod_1m : creator1msub.video_on_demand,
        stream_1m != 0 ? stream_1m : creator1msub.live_streaming,
        meet_1m != 0 ? meet_1m : creator1msub.video_call,
        combo_1m != 0 ? combo_1m : creator1msub.community_combo
      );
      if (result[0]) setCreator1msub(result[0]);
    } else {
      result = await updateCreatorSubscriptionData_1m(
        discord_1m != 0 ? discord_1m : creator1msub.discord,
        vod_1m != 0 ? vod_1m : creator1msub.video_on_demand,
        stream_1m != 0 ? stream_1m : creator1msub.live_streaming,
        meet_1m != 0 ? meet_1m : creator1msub.video_call,
        combo_1m != 0 ? combo_1m : creator1msub.community_combo
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
        discord_3m != 0 ? discord_3m : creator3msub.discord,
        vod_3m != 0 ? vod_3m : creator3msub.video_on_demand,
        stream_3m != 0 ? stream_3m : creator3msub.live_streaming,
        meet_3m != 0 ? meet_3m : creator3msub.video_call,
        combo_3m != 0 ? combo_3m : creator3msub.community_combo
      );
      if (result[0]) setCreator3msub(result[0]);
    } else {
      result = await updateCreatorSubscriptionData_3m(
        discord_3m != 0 ? discord_3m : creator3msub.discord,
        vod_3m != 0 ? vod_3m : creator3msub.video_on_demand,
        stream_3m != 0 ? stream_3m : creator3msub.live_streaming,
        meet_3m != 0 ? meet_3m : creator3msub.video_call,
        combo_3m != 0 ? combo_3m : creator3msub.community_combo
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
        discord_1y != 0 ? discord_1y : creator1ysub.discord,
        vod_1y != 0 ? vod_1y : creator1ysub.video_on_demand,
        stream_1y != 0 ? stream_1y : creator1ysub.live_streaming,
        meet_1y != 0 ? meet_1y : creator1ysub.video_call,
        combo_1y != 0 ? combo_1y : creator1ysub.community_combo
      );
      if (result[0]) setCreator1ysub(result[0]);
    } else {
      result = await updateCreatorSubscriptionData_1y(
        discord_1y != 0 ? discord_1y : creator1ysub.discord,
        vod_1y != 0 ? vod_1y : creator1ysub.video_on_demand,
        stream_1y != 0 ? stream_1y : creator1ysub.live_streaming,
        meet_1y != 0 ? meet_1y : creator1ysub.video_call,
        combo_1y != 0 ? combo_1y : creator1ysub.community_combo
      );
      if (result[0]) setCreator1ysub(result[0]);
    }
    if (result[0]) handleClose();
    else setErrorMsg(result);
  };

  return (
    <div>
      <Head>
        <title>Kigzag: Update Prices</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {isConnected && username ? (
          <>
            {iscreator ? (
              <div
                className="blueTextBlackBackground"
                style={{
                  fontSize: "18px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classesModal.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classesModal.paper}>
                      <div>
                        <Box
                          component="form"
                          sx={{
                            minWidth: 150,
                            margin: "20px 5px 15px 5px",
                          }}
                        >
                          <InputLabel className={classesModal.label}>
                            1 MONTH PLAN
                          </InputLabel>
                          <TextField
                            className={classesModal.textfield}
                            label="Price (in ₹)"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={
                              scenario == 1
                                ? creator1msub.video_on_demand
                                : scenario == 2
                                ? creator1msub.video_call
                                : scenario == 3
                                ? creator1msub.live_streaming
                                : scenario == 4
                                ? creator1msub.discord
                                : creator1msub.community_combo
                            }
                            onChange={(e) => {
                              {
                                scenario == 1
                                  ? setVod_1m(parseInt(e.target.value))
                                  : scenario == 2
                                  ? setMeet_1m(parseInt(e.target.value))
                                  : scenario == 3
                                  ? setStream_1m(parseInt(e.target.value))
                                  : scenario == 4
                                  ? setDiscord_1m(parseInt(e.target.value))
                                  : setCombo_1m(parseInt(e.target.value));
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
                          <InputLabel className={classesModal.label}>
                            3 MONTHS PLAN
                          </InputLabel>
                          <TextField
                            className={classesModal.textfield}
                            label="Price (in ₹)"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={
                              scenario == 1
                                ? creator3msub.video_on_demand
                                : scenario == 2
                                ? creator3msub.video_call
                                : scenario == 3
                                ? creator3msub.live_streaming
                                : scenario == 4
                                ? creator3msub.discord
                                : creator3msub.community_combo
                            }
                            onChange={(e) => {
                              {
                                scenario == 1
                                  ? setVod_3m(parseInt(e.target.value))
                                  : scenario == 2
                                  ? setMeet_3m(parseInt(e.target.value))
                                  : scenario == 3
                                  ? setStream_3m(parseInt(e.target.value))
                                  : scenario == 4
                                  ? setDiscord_3m(parseInt(e.target.value))
                                  : setCombo_3m(parseInt(e.target.value));
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
                          <InputLabel className={classesModal.label}>
                            1 YEAR PLAN
                          </InputLabel>
                          <TextField
                            className={classesModal.textfield}
                            label="Price (in ₹)"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={
                              scenario == 1
                                ? creator1ysub.video_on_demand
                                : scenario == 2
                                ? creator1ysub.video_call
                                : scenario == 3
                                ? creator1ysub.live_streaming
                                : scenario == 4
                                ? creator1ysub.discord
                                : creator1ysub.community_combo
                            }
                            onChange={(e) => {
                              {
                                scenario == 1
                                  ? setVod_1y(parseInt(e.target.value))
                                  : scenario == 2
                                  ? setMeet_1y(parseInt(e.target.value))
                                  : scenario == 3
                                  ? setStream_1y(parseInt(e.target.value))
                                  : scenario == 4
                                  ? setDiscord_1y(parseInt(e.target.value))
                                  : setCombo_1y(parseInt(e.target.value));
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
                      <p className={classesModal.error}>{errorMsg}</p>
                    </div>
                  </Fade>
                </Modal>
                <div className="shoutout_colab_info">
                  <div
                    className="modelButton"
                    style={{ justifyContent: "right" }}
                  >
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px",
                        height: "20px",
                      }}
                      variant="contained"
                      onClick={() => {
                        setScenario(1);
                        handleOpen();
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <p>VIDEOS</p>
                  </div>
                  <div className="shoutout_colab_info_per_platform">
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 month</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1msub?.video_on_demand}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>3 months</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator3msub?.video_on_demand}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 year</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1ysub?.video_on_demand}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="shoutout_colab_info"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="modelButton"
                    style={{ justifyContent: "right" }}
                  >
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px",
                        height: "20px",
                      }}
                      variant="contained"
                      onClick={() => {
                        setScenario(2);
                        handleOpen();
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <p>MEET</p>
                  </div>
                  <div className="shoutout_colab_info_per_platform">
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 month</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1msub?.video_call}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>3 months</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator3msub?.video_call}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 year</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1ysub?.video_call}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="shoutout_colab_info"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="modelButton"
                    style={{ justifyContent: "right" }}
                  >
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px",
                        height: "20px",
                      }}
                      variant="contained"
                      onClick={() => {
                        setScenario(3);
                        handleOpen();
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <p>STREAM</p>
                  </div>
                  <div className="shoutout_colab_info_per_platform">
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 month</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1msub?.live_streaming}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>3 months</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator3msub?.live_streaming}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 year</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1ysub?.live_streaming}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="shoutout_colab_info"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="modelButton"
                    style={{ justifyContent: "right" }}
                  >
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px",
                        height: "20px",
                      }}
                      variant="contained"
                      onClick={() => {
                        setScenario(4);
                        handleOpen();
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <p>DISCORD</p>
                  </div>
                  <div className="shoutout_colab_info_per_platform">
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 month</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1msub?.discord}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>3 months</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator3msub?.discord}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 year</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1ysub?.discord}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="shoutout_colab_info"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="modelButton"
                    style={{ justifyContent: "right" }}
                  >
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px",
                        height: "20px",
                      }}
                      variant="contained"
                      onClick={() => {
                        setScenario(5);
                        handleOpen();
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                  <div
                    style={{
                      color: "white",
                      marginBottom: "20px",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <p>
                      COMMUNITY COMBO<p>( MEET + STREAM + DISCORD )</p>
                    </p>
                  </div>
                  <div className="shoutout_colab_info_per_platform">
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 month</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1msub?.community_combo}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>3 months</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator3msub?.community_combo}
                      </p>
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>1 year</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + creator1ysub?.community_combo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="blueTextBlackBackground"
                style={{
                  fontSize: "18px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  justifyContent: "center",
                  color: "white",
                  paddingTop: "30vh",
                }}
              >
                <div>
                  <p>
                    Go To{" "}
                    <span
                      className="hovergreen viewMore pointer"
                      style={{ color: "#3B82F6" }}
                      onClick={() =>
                        Router.push({
                          pathname: "/",
                        })
                      }
                    >
                      {" "}
                      Home
                    </span>
                    , Click Become a Creator
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
