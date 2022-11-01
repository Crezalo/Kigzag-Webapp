import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  createTheme,
  makeStyles,
  TextField,
} from "@material-ui/core";
import ConnectToWallet from "../components/ConnectToWallet";
import Head from "next/head";
import AuthService from "../services/auth-services";
import { getUserData, updateUserData } from "../services/api-services/user_api";
import { Label } from "reactstrap";
import Jdenticon from "react-jdenticon";
import Image from "next/image";

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
    backgroundColor: "white",
    borderRadius: "5px",
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

export default function EditProfile() {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);

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

  const [user, setUser] = useState({
    emailaddress: "",
    signuptype: 1,
    username: "",
    fname: "",
    lname: "",
    bio: "",
    iscreator: null,
    displaypicture: "",
    twitterhandle: "",
    instagram: "",
    youtube: "",
    website: "",
  });

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const result = await getUserData(username);
          setUser(result[0]);
        }
      }
      getData();
    }, [username]);
  };

  GetUser();

  const [emailaddress, setEmailaddress] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [bio, setBio] = useState("");
  const [displaypicture, setDisplaypicture] = useState("");
  const [twitterhandle, setTwitterhandle] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [website, setWebsite] = useState("");

  const UpdateUserData = async () => {
    const result = await updateUserData(
      emailaddress,
      "",
      fname,
      lname,
      bio,
      user.iscreator,
      displaypicture,
      twitterhandle,
      instagram,
      youtube,
      website
    );
    console.log(result);
  };

  return (
    <div>
      <Head>
        <title>Kigzag: Edit Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {isConnected && username && user.fname ? (
          <div
            className="blueTextBlackBackground"
            style={{ fontSize: "18px", display: "flex", flexDirection: "row" }}
          >
            <div className={classesModal.paper}>
              <Label style={{ margin: "10px 0 0 10px" }}>Bio</Label>
              <TextField
                className={classesModal.textfield}
                placeholder="Bio Here ..."
                type="text"
                multiline
                rows={3}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                defaultValue={user.bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
              <Label style={{ margin: "10px 0 0 10px" }}>Twitter</Label>
              <TextField
                className={classesModal.textfield}
                placeholder="@YourTwitterHandle"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                defaultValue={user.twitterhandle}
                onChange={(e) => {
                  setTwitterhandle(e.target.value);
                }}
              />
              <Label style={{ margin: "10px 0 0 10px" }}>Instagram</Label>
              <TextField
                className={classesModal.textfield}
                placeholder="@YourInstagramUsername"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                defaultValue={user.instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
              />
              <Label style={{ margin: "10px 0 0 10px" }}>Youtube Channel</Label>
              <TextField
                className={classesModal.textfield}
                placeholder="https://www.youtube.com/c/channelid"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                defaultValue={user.youtube}
                onChange={(e) => {
                  setYoutube(e.target.value);
                }}
              />
              <Label style={{ margin: "10px 0 0 10px" }}>Website</Label>
              <TextField
                className={classesModal.textfield}
                placeholder="https://www.mywebsite.com/"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                inputProps={{ style: { color: "white" } }}
                defaultValue={user.youtube}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "100px",
              }}
            >
              <div
                className="creatorImageDiv"
                style={{ justifyContent: "center", width: "100%" }}
              >
                {user.displaypicture != "" ? (
                  <Image
                    src={user.displaypicture}
                    alt=""
                    width={250}
                    height={250}
                    className="creatorDP"
                  />
                ) : (
                  <Jdenticon size={100} value={username} />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  <Label style={{ margin: "10px" }}>First Name</Label>
                  <TextField
                    className={classesModal.textfield}
                    placeholder="First Name Here ..."
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    defaultValue={user.fname}
                    inputProps={{
                      style: { color: "white" },
                    }}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    marginLeft: "10px",
                  }}
                >
                  <Label style={{ margin: "10px" }}>Last Name</Label>
                  <TextField
                    className={classesModal.textfield}
                    placeholder="Last Name Here ..."
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    defaultValue={user.lname}
                    inputProps={{
                      style: { color: "white" },
                    }}
                    // value={addUpdateCPW}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "50px",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    background: "#3B82F6",
                    color: "white",
                    marginBottom: "2px",
                    width: "30%",
                    justifyContent: "center",
                  }}
                  className={classesModal.button}
                  variant="contained"
                  onClick={() => {
                    UpdateUserData();
                  }}
                >
                  SAVE
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
