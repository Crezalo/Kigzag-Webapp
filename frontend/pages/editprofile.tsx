import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  createTheme,
  makeStyles,
  TextField,
} from "@material-ui/core";
import ConnectToAccount from "../components/ConnectToAccount";
import DummyProfile from "../public/DummyProfile.jpg";
import DummyBanner from "../public/DummyBanner.jpg";
import Head from "next/head";
import AuthService from "../services/auth-services";
import { getUserData, updateUserData } from "../services/api-services/user_api";
import { Label } from "reactstrap";
import Jdenticon from "react-jdenticon";
import Image from "next/image";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BasicModal from "../components/BasicModal";
import { getCreatorInfoImages } from "../services/api-services/content_api";
import Carousel from "react-material-ui-carousel";
import UploadProfilePicsLogoModal from "../components/UploadProfilePicsModal";
import CreatorDP from "../components/CreatorDP";
import { useScreenSize } from "../services/utility";
import loading from "../public/loadingCrezalo.gif";
import { clickEvent } from "../services/analytics";

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
  paperMobile: {
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    margin: "0",
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
    marginTop: "5px",
  },
  successful: {
    color: "green",
    fontSize: "16px",
    marginTop: "5px",
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
  textfieldMobile: {
    width: "100%",
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

export default function EditProfile() {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [logo, setLogo] = useState("");
  var [signedURls, setSignedURls] = useState([]);
  var [imageLen, setImageLen] = useState(-1);
  const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);

  const [emailaddress, setEmailaddress] = useState("");
  const [fname, setFname] = useState("0");
  const [lname, setLname] = useState("0");
  const [bio, setBio] = useState("0");
  const [displaypicture, setDisplaypicture] = useState("");
  const [twitterhandle, setTwitterhandle] = useState("0");
  const [instagram, setInstagram] = useState("0");
  const [youtube, setYoutube] = useState("0");
  const [website, setWebsite] = useState("0");
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
          const res = await getCreatorInfoImages("profilepic", username);
          if (res[0]) setProfilePic(res[0]["signedurl"]);

          const res1 = await getCreatorInfoImages("oimages", username);
          if (res1[0] && typeof res1 !== "string") {
            setSignedURls(res1[0]["signedurls"]);
            setImageLen(res1[0]["signedurls"].length);
          }
          // const res2 = await getCreatorInfoImages("logo", username);
          // if (res2[0]) setLogo(res2[0]["signedurl"]);
        }
      }
      getData();
    }, [username]);
  };

  GetUser();

  function updateSignedUrl() {
    if (signedURls?.length > 0) {
      for (let i = 0; i < signedURls.length; i++) {
        var http = new XMLHttpRequest();
        http.open("HEAD", signedURls[i]);
        http.onreadystatechange = function () {
          if (this.readyState == this.DONE) {
            if (this.status == 403) if (imageLen == -1) setImageLen(i);
          }
        };
        http.send();
      }
      if (imageLen != -1) signedURls.length = imageLen;
      return true;
    }
    return false;
  }

  updateSignedUrl();

  const creatObjectUrl = (file) => {
    return window.URL.createObjectURL(file);
  };

  const UpdateUserData = async () => {
    setSuccessMsg("");
    setErrorMsg("");
    const result = await updateUserData(
      emailaddress,
      fname,
      lname,
      bio,
      displaypicture,
      twitterhandle,
      instagram,
      youtube,
      website
    );
    if (typeof result !== "string") setSuccessMsg("Successful");
    else setErrorMsg(result);
    clickEvent("UpdateUserInfo");
  };

  return (
    <div>
      <Head>
        <title>Crezalo: Edit Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{ backgroundColor: "black" }}>
        {isConnected && username && user?.username != "" ? (
          <>
            <div
              className={
                ismobile
                  ? "blueTextBlackBackgroundMobile"
                  : "blueTextBlackBackground"
              }
              style={{
                fontSize: "18px",
                display: "flex",
                flexDirection: ismobile ? "column" : "row",
              }}
            >
              <div
                style={{
                  width: ismobile ? "100%" : "50%",
                  display: "flex",
                  flexDirection: "column",
                  padding: ismobile ? "0" : "50px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* {user.iscreator ? ( */}
                  <div style={{}}>
                    {signedURls?.length > 0 ? (
                      <Carousel
                        className="editPageCarousel"
                        {...settings}
                        navButtonsProps={{
                          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                          style: {
                            backgroundColor: "cornflowerblue",
                            borderRadius: 5,
                          },
                        }}
                      >
                        {Array.from(signedURls).map((item, i) => (
                          <img
                            src={item}
                            alt="Loading ..."
                            width="100%"
                            height="100%"
                            onError={({ currentTarget }) => {
                              setImageLen(i);
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src = DummyBanner.src;
                            }}
                          />
                        ))}
                      </Carousel>
                    ) : (
                      <div className="editPageCarousel shimmer"></div>
                    )}
                  </div>
                  {/* ) : (
                  <></>
                )} */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="creatorImageDiv"
                      style={{
                        justifyContent: "center",
                        width: "30%",
                        display: "table",
                        position: "relative",
                      }}
                    >
                      <CreatorDP
                        creator={user?.username}
                        height={250}
                        width={250}
                      />
                      <div className="bottom-right">
                        <BasicModal
                          modalButtonText={<CameraAltIcon />}
                          modalBody={<UploadProfilePicsLogoModal />}
                        />
                      </div>
                    </div>
                    {/* <div
                    className="creatorImageDiv"
                    style={{
                      justifyContent: "center",
                      width: "30%",
                      display: "table",
                      position: "relative",
                    }}
                  >
                    {logo != "" ? (
                      <Image src={logo} alt="" width={250} height={250} />
                    ) : (
                      <></>
                    )}
                  </div> */}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: ismobile ? "column" : "row",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      marginRight: ismobile ? "0" : "10px",
                    }}
                  >
                    <Label style={{ margin: "10px" }}>First Name</Label>
                    <TextField
                      className={
                        ismobile
                          ? classesModal.textfieldMobile
                          : classesModal.textfield
                      }
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
                      marginLeft: ismobile ? "0" : "10px",
                    }}
                  >
                    <Label style={{ margin: "10px" }}>Last Name</Label>
                    <TextField
                      className={
                        ismobile
                          ? classesModal.textfieldMobile
                          : classesModal.textfield
                      }
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
                {ismobile ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Label style={{ margin: "10px 0 0 10px" }}>Bio</Label>
                    <TextField
                      className={classesModal.textfieldMobile}
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
                      className={classesModal.textfieldMobile}
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
                      className={classesModal.textfieldMobile}
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
                    <Label style={{ margin: "10px 0 0 10px" }}>
                      Youtube Channel
                    </Label>
                    <TextField
                      className={classesModal.textfieldMobile}
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
                      className={classesModal.textfieldMobile}
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
                ) : (
                  <></>
                )}
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
                  <p className={classesModal.error}>{errorMsg}</p>
                  <p className={classesModal.successful}>{successMsg}</p>
                </div>
              </div>
              {ismobile ? (
                <></>
              ) : (
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
                  <Label style={{ margin: "10px 0 0 10px" }}>
                    Youtube Channel
                  </Label>
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
              )}
            </div>
            <br />
          </>
        ) : (
          // <CircularProgress
          //   style={{
          //     display: "flex",
          //     margin: "auto",
          //     height: "80vh",
          //   }}
          // />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "30vh",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Image
              src={loading}
              height="150"
              width="150"
              alt={""}
              style={{ width: "150px", height: "150px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
