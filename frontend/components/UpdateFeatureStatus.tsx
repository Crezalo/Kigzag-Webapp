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
import {
  Modal,
  Box,
  Fade,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AuthService from "../services/auth-services";
import {
  getCreatorFeatureStatusData,
  updateFeatureStatusData,
} from "../services/api-services/creator/features_api";
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

const UpdateFeatureStatus = () => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [status, setStatus] = useState({
    video_on_demand: null,
    courses: null,
    merchandise: null,
    tipjar: null,
  });
  const [video_on_demand, setVideo_on_demand] = useState(null);
  const [courses, setCourses] = useState(null);
  const [merchandise, setMerchandise] = useState(null);
  const [tipjar, setTipJar] = useState(null);

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
          const res1 = await getCreatorFeatureStatusData(username);
          if (typeof res1 !== "string") {
            setStatus(res1[0]);
          }
        }
      }
      getData();
    }, [username]);
  };

  GetStatus();

  const updateStatus = async () => {
    let result;

    setSuccessMsg("");
    setErrorMsg("");
    result = await updateFeatureStatusData(
      video_on_demand,
      courses,
      merchandise,
      tipjar
    );
    if (typeof result !== "string") {
      setStatus(result[0]);
      setSuccessMsg("Successful");
    } else setErrorMsg(result);
    clickEvent("FeatureUpdate");
  };

  return (
    <div className={classesModal.paper}>
      {status?.video_on_demand != null ? (
        <div style={{ color: "#3B82F6" }}>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "20px 5px 15px 5px",
            }}
          >
            <InputLabel className={classesModal.title}>
              SELECT FEATURES
            </InputLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={status.video_on_demand}
                    onChange={(e) => {
                      setVideo_on_demand(e.target.checked);
                      var temp = status;
                      temp.video_on_demand = e.target.checked;
                      setStatus(temp);
                    }}
                    name="Videos"
                  />
                }
                label="Premium Videos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={status.courses}
                    onChange={(e) => {
                      setCourses(e.target.checked);
                      var temp = status;
                      temp.courses = e.target.checked;
                      setStatus(temp);
                    }}
                    name="Courses"
                  />
                }
                label="Courses"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={status.merchandise}
                    onChange={(e) => {
                      setMerchandise(e.target.checked);
                      var temp = status;
                      temp.merchandise = e.target.checked;
                      setStatus(temp);
                    }}
                    name="Merch"
                  />
                }
                label="Merch"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={status.tipjar}
                    onChange={(e) => {
                      setTipJar(e.target.checked);
                      var temp = status;
                      temp.tipjar = e.target.checked;
                      setStatus(temp);
                    }}
                    name="Tip Jar"
                  />
                }
                label="Tip Jar"
              />
            </FormGroup>
          </Box>

          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={updateStatus}
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
export default UpdateFeatureStatus;
