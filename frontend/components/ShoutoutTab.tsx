import React, { useEffect, useState } from "react";
import AuthService from "../services/auth-services";
import Image from "next/image";
import twitter from "../public/twitter.png";
import instagram from "../public/instagram.png";
import linkedin from "../public/linkedin.png";
import facebook from "../public/facebook.png";
import youtube from "../public/youtube.png";
import { getUserData } from "../services/api-services/user_api";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Backdrop,
  Button,
  createTheme,
  Fade,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  ThemeProvider,
  Tooltip,
} from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Router from "next/router";
import {
  getUserShoutoutAllCreatorData,
  getUserShoutoutData,
} from "../services/api-services/user/shoutout_api";
import {
  addCreatorShoutoutData,
  getCreatorShoutoutData,
  updateCreatorShoutoutData,
} from "../services/api-services/creator/shoutout_api";

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
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    margin: "70px 20px 10px 0px",
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
    minWidth: "50vw",
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

interface ShoutoutTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const ShoutoutTab = ({ creator, onCreatorProfile }: ShoutoutTabProp) => {
  const username = AuthService.getUsername();
  const [count, setCount] = useState(1111);
  const [shoutoutData, setShoutoutData] = useState([
    {
      platform: 0,
      count_per_week: 0,
      week_till_date_exhausted: 0,
      price: 0,
    },
  ]);

  // const [userShoutoutData, setUserShoutoutData] = useState([
  //   {
  //     platform: 0,
  //     id: 0,
  //   },
  // ]);
  const [reqCountInsta, setReqCountInsta] = useState(0);
  const [reqCountTwitter, setReqCountTwitter] = useState(0);
  const [reqCountYoutube, setReqCountYoutube] = useState(0);

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        const result = await getCreatorShoutoutData(creator);
        setShoutoutData(result);
        setCount(result.length);
      }
      getData();
    }, [username, creator]);
  };

  GetDetails();

  const [user, setUser] = useState({
    emailaddress: "",
    signuptype: 1,
    username: "",
    fname: "",
    lname: "",
    bio: "",
    iscreator: false,
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
          const result = await getUserData(creator);
          setUser(result[0]);
        }
      }
      getData();
    }, [username]);
  };

  GetUser();

  const GetRequests = () => {
    useEffect(() => {
      async function getData() {
        if (onCreatorProfile) {
          const result = await getUserShoutoutData();
          // setUserShoutoutData(result);
          for (var i = 0; i < result.length; i++) {
            if (result[i].platform == 0) setReqCountInsta(reqCountInsta + 1);
            else if (result[i].platform == 1)
              setReqCountTwitter(reqCountTwitter + 1);
            else if (result[i].platform == 2)
              setReqCountYoutube(reqCountYoutube + 1);
          }
        } else {
          const result = await getUserShoutoutAllCreatorData();
          // setUserShoutoutData(result);
          console.log(result);
          for (var i = 0; i < result.length; i++) {
            if (result[i].platform == 0) setReqCountInsta(reqCountInsta + 1);
            else if (result[i].platform == 1)
              setReqCountTwitter(reqCountTwitter + 1);
            else if (result[i].platform == 2)
              setReqCountYoutube(reqCountYoutube + 1);
          }
        }
      }
      getData();
    }, [onCreatorProfile ? creator : username]);
  };

  GetRequests();

  const addNewPlatform = async () => {
    const result = await addCreatorShoutoutData(
      addUpdatePlatform,
      addUpdateCPW,
      addUpdatePrice
    );
    if (typeof result !== "string") handleClose();
    else setErrorMsg(result);
  };

  const updatePlatform = async () => {
    const result = await updateCreatorShoutoutData(
      scenario,
      addUpdateCPW,
      addUpdatePrice
    );
    if (typeof result !== "string") handleClose();
    else setErrorMsg(result);
  };

  const platform = ["Instagram", "Youtube", "Twitter"];
  const platformLogo = [instagram, youtube, twitter];
  const platformLink = [user.instagram, user.youtube, user.twitterhandle];
  const platformUrlPrefix = [
    "https://instagram.com/",
    "",
    "https://twitter.com/",
  ];

  const classesModal = useStylesModal();
  const [scenario, setScenario] = useState(11); // 11: Add 0: Instagram 1: Youtube 2: Twitter
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMsg("");
  };

  const [shoutoutMsg, setShoutoutMsg] = useState("");
  const [linkDisplay, setLinkDisplay] = useState(0);
  const [shoutoutLink1, setShoutoutLink1] = useState("");
  const [shoutoutLink2, setShoutoutLink2] = useState("");
  const [shoutoutLink3, setShoutoutLink3] = useState("");
  const [shoutoutLink4, setShoutoutLink4] = useState("");
  const [open_req, setOpen_req] = useState(false);
  const [errorMsg_req, setErrorMsg_req] = useState("");
  const handleOpen_req = () => setOpen_req(true);
  const handleClose_req = () => {
    setOpen_req(false);
    setErrorMsg_req("");
    setLinkDisplay(0);
  };
  const min = 0;
  const [addUpdatePlatform, setAddUpdatePlatform] = useState(-1);
  const [addUpdateCPW, setAddUpdateCPW] = useState(0);
  const [addUpdatePrice, setAddUpdatePrice] = useState(0);

  const handleChange = (event) => {
    setAddUpdatePlatform(event.target.value);
  };

  const instagramIndex =
    shoutoutData[0]?.platform == 0
      ? 0
      : shoutoutData[1]?.platform == 0
      ? 1
      : shoutoutData[2]?.platform == 0
      ? 2
      : null;

  const youtubeIndex =
    shoutoutData[0]?.platform == 1
      ? 0
      : shoutoutData[1]?.platform == 1
      ? 1
      : shoutoutData[2]?.platform == 1
      ? 2
      : null;

  const twitterIndex =
    shoutoutData[0]?.platform == 2
      ? 0
      : shoutoutData[1]?.platform == 2
      ? 1
      : shoutoutData[2]?.platform == 2
      ? 2
      : null;

  useEffect(() => {
    scenario == 0
      ? setAddUpdatePrice(shoutoutData[instagramIndex]?.price)
      : scenario == 1
      ? setAddUpdatePrice(shoutoutData[youtubeIndex]?.price)
      : scenario == 2
      ? setAddUpdatePrice(shoutoutData[twitterIndex]?.price)
      : setAddUpdatePrice(addUpdatePrice);
  }, [scenario]);

  useEffect(() => {
    scenario == 0
      ? setAddUpdateCPW(shoutoutData[instagramIndex]?.count_per_week)
      : scenario == 1
      ? setAddUpdateCPW(shoutoutData[youtubeIndex]?.count_per_week)
      : scenario == 2
      ? setAddUpdateCPW(shoutoutData[twitterIndex]?.count_per_week)
      : setAddUpdateCPW(addUpdateCPW);
  }, [scenario]);

  // console.log("reqCountInsta");
  // console.log(reqCountInsta);
  // console.log("reqCountTwitter");
  // console.log(reqCountTwitter);
  // console.log("reqCountYoutube");
  // console.log(reqCountYoutube);

  return (
    <div
      className="blueTextBlackBackground"
      style={{ justifyContent: "center", textAlign: "center" }}
    >
      <ThemeProvider theme={toolTipTheme}>
        {count < 3 && !onCreatorProfile ? (
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={() => {
              setScenario(11);
              handleOpen();
            }}
          >
            Add New Platform
          </Button>
        ) : (
          <></>
        )}

        {/* ////////////////////////////// Creator Modal //////////////////////////// */}
        {/* ////////////////////////////// Creator Modal //////////////////////////// */}
        {/* ////////////////////////////// Creator Modal //////////////////////////// */}

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
                {scenario == 11 ? (
                  <Box sx={{ minWidth: 150, margin: "10px 5px 20px 5px" }}>
                    <FormControl fullWidth>
                      <InputLabel>Platform</InputLabel>
                      <Select
                        value={addUpdatePlatform}
                        label="platform"
                        onChange={handleChange}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: "18px",
                        }}
                      >
                        {shoutoutData[0]?.platform != 0 &&
                        shoutoutData[1]?.platform != 0 &&
                        shoutoutData[2]?.platform != 0 ? (
                          <MenuItem value={0}>Instagram</MenuItem>
                        ) : (
                          <></>
                        )}
                        {shoutoutData[0]?.platform != 1 &&
                        shoutoutData[1]?.platform != 1 &&
                        shoutoutData[2]?.platform != 1 ? (
                          <MenuItem value={1}>Youtube</MenuItem>
                        ) : (
                          <></>
                        )}
                        {shoutoutData[0]?.platform != 2 &&
                        shoutoutData[1]?.platform != 2 &&
                        shoutoutData[2]?.platform != 2 ? (
                          <MenuItem value={2}>Twitter</MenuItem>
                        ) : (
                          <></>
                        )}
                      </Select>
                    </FormControl>
                  </Box>
                ) : (
                  <></>
                )}

                <Box
                  component="form"
                  sx={{
                    minWidth: 150,
                    margin: "20px 5px 15px 5px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    className={classesModal.textfield}
                    label="Number of shoutouts per week"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    inputProps={{ min }}
                    value={addUpdateCPW}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setAddUpdateCPW(0);
                        return;
                      }
                      const value = +e.target.value;
                      if (value < min) {
                        setAddUpdateCPW(min);
                      } else {
                        setAddUpdateCPW(value);
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
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    className={classesModal.textfield}
                    label="Price (in ₹)"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    value={addUpdatePrice}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setAddUpdatePrice(0);
                        return;
                      }
                      const value = +e.target.value;
                      if (value < min) {
                        setAddUpdatePrice(min);
                      } else {
                        setAddUpdatePrice(value);
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
                  onClick={() => {
                    scenario == 11
                      ? addUpdateCPW > 0 &&
                        addUpdatePrice > 0 &&
                        addUpdatePlatform > -1
                        ? addNewPlatform()
                        : setErrorMsg("Please select fill all above details")
                      : updatePlatform();
                  }}
                >
                  {scenario == 11 ? "Add New Platform" : "Update"}
                </Button>
              </div>
              <p className={classesModal.error}>{errorMsg}</p>
            </div>
          </Fade>
        </Modal>

        {/* ////////////////////////////// User Modal //////////////////////////// */}
        {/* ////////////////////////////// User Modal //////////////////////////// */}
        {/* ////////////////////////////// User Modal //////////////////////////// */}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classesModal.modal}
          open={open_req}
          onClose={handleClose_req}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open_req}>
            <div className={classesModal.paper}>
              <Box
                component="form"
                sx={{
                  // minWidth: 150,
                  margin: "10px 5px 20px 5px",
                }}
                noValidate
                autoComplete="off"
              >
                <InputLabel sx={{ color: "#3B82F6" }}>
                  Describe Your Shoutout Request
                </InputLabel>
                <TextField
                  className={classesModal.textfield}
                  placeholder="Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ..."
                  type="text"
                  multiline
                  rows={5}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={(e) => {
                    setShoutoutMsg(e.target.value);
                  }}
                />
              </Box>
              {linkDisplay >= 1 ? (
                <Box
                  component="form"
                  sx={{
                    // minWidth: 150,
                    margin: "20px 5px 15px 5px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel sx={{ color: "#3B82F6" }}>Link 1</InputLabel>
                  <TextField
                    className={classesModal.textfield}
                    placeholder="Enter related link (if any) ..."
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => {
                      setShoutoutLink1(e.target.value);
                    }}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {}}
                            style={{ color: "#3B82F6" }}
                          >
                            {linkDisplay == 1 ? (
                              <div
                                onClick={() => {
                                  setLinkDisplay(0);
                                }}
                              >
                                <Tooltip
                                  title="Delete"
                                  placement="bottom-start"
                                >
                                  <Delete />
                                </Tooltip>
                              </div>
                            ) : (
                              <></>
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              ) : (
                <></>
              )}
              {linkDisplay >= 2 ? (
                <Box
                  component="form"
                  sx={{
                    // minWidth: 150,
                    margin: "20px 5px 15px 5px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel sx={{ color: "#3B82F6" }}>Link 2</InputLabel>
                  <TextField
                    className={classesModal.textfield}
                    placeholder="Enter related link (if any) ..."
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => {
                      setShoutoutLink2(e.target.value);
                    }}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {}}
                            style={{ color: "#3B82F6" }}
                          >
                            {linkDisplay == 2 ? (
                              <div
                                onClick={() => {
                                  setLinkDisplay(1);
                                }}
                              >
                                <Tooltip
                                  title="Delete"
                                  placement="bottom-start"
                                >
                                  <Delete />
                                </Tooltip>
                              </div>
                            ) : (
                              <></>
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              ) : (
                <></>
              )}
              {linkDisplay >= 3 ? (
                <Box
                  component="form"
                  sx={{
                    // minWidth: 150,
                    margin: "20px 5px 15px 5px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel sx={{ color: "#3B82F6" }}>Link 3</InputLabel>
                  <TextField
                    className={classesModal.textfield}
                    placeholder="Enter related link (if any) ..."
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => {
                      setShoutoutLink3(e.target.value);
                    }}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {}}
                            style={{ color: "#3B82F6" }}
                          >
                            {linkDisplay == 3 ? (
                              <div
                                onClick={() => {
                                  setLinkDisplay(2);
                                }}
                              >
                                <Tooltip
                                  title="Delete"
                                  placement="bottom-start"
                                >
                                  <Delete />
                                </Tooltip>
                              </div>
                            ) : (
                              <></>
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              ) : (
                <></>
              )}
              {linkDisplay >= 4 ? (
                <Box
                  component="form"
                  sx={{
                    // minWidth: 150,
                    margin: "20px 5px 15px 5px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel sx={{ color: "#3B82F6" }}>Link 4</InputLabel>
                  <TextField
                    className={classesModal.textfield}
                    placeholder="Enter related link (if any) ..."
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => {
                      setShoutoutLink4(e.target.value);
                    }}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => {}}
                            style={{ color: "#3B82F6" }}
                          >
                            {linkDisplay == 4 ? (
                              <div
                                onClick={() => {
                                  setLinkDisplay(3);
                                }}
                              >
                                <Tooltip
                                  title="Delete"
                                  placement="bottom-start"
                                >
                                  <Delete />
                                </Tooltip>
                              </div>
                            ) : (
                              <></>
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              ) : (
                <></>
              )}

              {linkDisplay <= 3 ? (
                <Box
                  component="form"
                  sx={{
                    // minWidth: 150,
                    margin: "20px 5px 15px 5px",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Button
                    style={{
                      color: "#3B82F6",
                      backgroundColor: "white",
                      marginBottom: "2px",
                    }}
                    variant="contained"
                    onClick={() => {
                      setLinkDisplay(linkDisplay + 1);
                    }}
                  >
                    Add Link
                  </Button>
                </Box>
              ) : (
                <></>
              )}
              <Button
                style={{
                  background: "#3B82F6",
                  color: "white",
                  marginBottom: "2px",
                }}
                variant="contained"
                onClick={() => {}}
              >
                Request {platform[scenario]} Shoutout
              </Button>
            </div>
          </Fade>
        </Modal>

        {count == 0 && onCreatorProfile ? (
          <div style={{ marginTop: "15vh" }}>
            {creator} doesn't support shoutouts.
          </div>
        ) : (
          <>
            {shoutoutData?.map((shoutout) => {
              return (
                <div className="shoutout_colab_info">
                  {platform[shoutout.platform]}{" "}
                  <a
                    href={
                      platformUrlPrefix[shoutout.platform] +
                      platformLink[shoutout.platform]
                    }
                    style={{ marginTop: "5px", marginLeft: "5px" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={platformLogo[shoutout.platform]}
                      alt=""
                      width={30}
                      height={25}
                    />
                  </a>
                  <div className="shoutout_colab_info_per_platform">
                    <div className="shoutout_colab_info_per_platform_per_field">
                      {onCreatorProfile ? (
                        <>
                          <p>Remaining This Week</p>
                          <p
                            style={{ color: "white" }}
                            className="shoutout_colab_info_per_platform"
                          >
                            {shoutout.count_per_week -
                              shoutout.week_till_date_exhausted}
                          </p>
                        </>
                      ) : (
                        <>
                          <p>Total Per Week</p>
                          <p
                            style={{ color: "white" }}
                            className="shoutout_colab_info_per_platform"
                          >
                            {shoutout.count_per_week}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      {onCreatorProfile ? (
                        <>
                          <Tooltip
                            title={`View My ${
                              platform[shoutout.platform]
                            } Shoutout Requests`}
                            placement="top"
                            className={classesModal.edit}
                          >
                            <section
                              className="pointer"
                              onClick={() =>
                                Router.push({
                                  pathname: "/shoutout",
                                  query: {
                                    type: "user",
                                    platform: shoutout.platform,
                                  },
                                })
                              }
                            >
                              <p>My Requests</p>
                              <p
                                style={{ color: "white" }}
                                className="shoutout_colab_info_per_platform"
                              >
                                {shoutout.platform == 0
                                  ? reqCountInsta
                                  : shoutout.platform == 1
                                  ? reqCountTwitter
                                  : shoutout.platform == 2
                                  ? reqCountYoutube
                                  : 0}
                              </p>
                            </section>
                          </Tooltip>
                        </>
                      ) : (
                        <Tooltip
                          title={`View Requested ${
                            platform[shoutout.platform]
                          } Shoutout`}
                          placement="top"
                          className={classesModal.edit}
                        >
                          <section
                            className="pointer"
                            onClick={() =>
                              Router.push({
                                pathname: "/shoutout",
                                query: {
                                  type: "creator",
                                  platform: shoutout.platform,
                                  creator: username,
                                },
                              })
                            }
                          >
                            <p>Requested</p>
                            <p
                              style={{ color: "white" }}
                              className="shoutout_colab_info_per_platform"
                            >
                              {shoutout.platform == 0
                                ? reqCountInsta
                                : shoutout.platform == 1
                                ? reqCountTwitter
                                : reqCountYoutube}
                            </p>
                          </section>
                        </Tooltip>
                      )}
                    </div>
                    <div className="shoutout_colab_info_per_platform_per_field">
                      <p>Price</p>
                      <p
                        style={{ color: "white" }}
                        className="shoutout_colab_info_per_platform"
                      >
                        {"₹ " + shoutout.price}
                      </p>
                    </div>
                    {}
                    <Tooltip
                      title={
                        onCreatorProfile
                          ? `Request ${platform[shoutout.platform]} Shoutout`
                          : "Edit"
                      }
                      placement="top"
                      className={classesModal.edit}
                    >
                      {onCreatorProfile ? (
                        <Button
                          style={{
                            background: "#3B82F6",
                            color: "white",
                            width: "20%",
                          }}
                          variant="contained"
                          onClick={() => {
                            setScenario(shoutout.platform);
                            handleOpen_req();
                          }}
                        >
                          Request
                        </Button>
                      ) : (
                        <div
                          className="pointer"
                          style={{ width: "auto", height: "auto" }}
                          onClick={() => {
                            setScenario(shoutout.platform);
                            handleOpen();
                          }}
                        >
                          <Edit />
                        </div>
                      )}
                    </Tooltip>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </ThemeProvider>
    </div>
  );
};

export default ShoutoutTab;
