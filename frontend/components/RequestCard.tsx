import Jazzicon from "react-jazzicon";
import Jdenticon from "react-jdenticon";
import Router from "next/router";
import twitter from "../public/twitter.png";
import instagram from "../public/instagram.png";
import linkedin from "../public/linkedin.png";
import facebook from "../public/facebook.png";
import youtube from "../public/youtube.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Backdrop,
  createTheme,
  Fade,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import { getSpecificUserData } from "../services/api-services/user_api";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    // width: "50%",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5%",
    boxShadow: theme.shadows[5],
    color: "black",
    // backgroundColor: "#3b82f6",
    margin: "5px",
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
    minWidth: "100%",
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

interface RequestCardProp {
  request: {
    creator: string;
    platform: number;
    usermessage: string;
    creatorresponse: string;
    status: number;
    lastupdatedat: string;
  };
}
const RequestCard = ({ request }: RequestCardProp) => {
  const classesModal = useStylesModal();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const usermessage = request.usermessage.split("###--###");
  const creatorresponse = request.creatorresponse.split("###--###");

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const timeDiff = Date.now() - Date.parse(request.lastupdatedat);
  const platformLogo = [instagram, youtube, twitter];
  const [displayPicture, setDisplayPicture] = useState("");

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (request.creator != "") {
          const result = await getSpecificUserData(
            request.creator,
            "displaypicture"
          );
          setDisplayPicture(result[0]?.displaypicture);
        }
      }
      getData();
    }, [request.creator]);
  };

  GetUser();

  return (
    <>
      {request.creator ? (
        <>
          <section className="purchaseCard" style={{ width: "100%" }}>
            <div className="reqImage">
              {displayPicture != "" ? (
                <Image
                  src={displayPicture}
                  alt=""
                  width={50}
                  height={50}
                  className="creatorDP"
                />
              ) : (
                <Jdenticon size={50} value={request.creator} />
              )}
              {/* <Jazzicon diameter={60} seed={Math.round(Math.random() * 10000000)} /> */}
              <h2
                className="hovergreen viewMore pointer"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "5px 0 0 15px",
                  margin: "5px 40px 5px 20px",
                }}
                onClick={() =>
                  Router.push({
                    pathname: "/creatorprofile",
                    query: { address: request.creator },
                  })
                }
              >
                {request.creator}
              </h2>
              <div style={{ margin: "5px 0 5px 40px" }}>
                <p
                  className={
                    request.status == 0
                      ? "Pending"
                      : request.status == 1
                      ? "AcceptedAndWaiting"
                      : request.status == 2
                      ? "Completed"
                      : "Rejected"
                  }
                  style={{
                    fontSize: "15px",
                    marginRight: "15px",
                    textAlign: "center",
                    borderRadius: "35%",
                    padding: "5px",
                  }}
                >
                  {request.status == 0
                    ? "Pending"
                    : request.status == 1
                    ? "Approved"
                    : request.status == 2
                    ? "Completed"
                    : "Rejected"}{" "}
                </p>{" "}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                float: "left",
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: 16,
                justifyContent: "center",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "white",
                  margin: "10px 0 15px 0",
                }}
              >
                Updated{" "}
                {timeDiff > 86400000
                  ? new Date(Date.parse(request.lastupdatedat)).getDate() +
                    " " +
                    month[
                      new Date(Date.parse(request.lastupdatedat)).getMonth()
                    ] +
                    " " +
                    new Date(Date.parse(request.lastupdatedat)).getFullYear()
                  : timeDiff > 3600000
                  ? Math.round(timeDiff / 3600000) + "h ago"
                  : timeDiff > 60000
                  ? Math.round(timeDiff / 60000) + "m ago"
                  : timeDiff > 1000
                  ? Math.round(timeDiff / 1000) + "s ago"
                  : ""}
              </p>
              <div className={classesModal.paper}>
                <div style={{ margin: "10px" }}>
                  <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                    Message To Creator
                  </p>
                  <TextField
                    value={usermessage[0]}
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
                      // setShoutoutMsg(e.target.value);
                    }}
                  />
                  {}
                </div>
                {usermessage.map((mes, index) => {
                  return index != 0 ? (
                    <div style={{ margin: "10px" }}>
                      <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                        Link {index}
                      </p>
                      <TextField
                        value={mes}
                        className={classesModal.textfield}
                        placeholder="Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ..."
                        type="url"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        onChange={(e) => {
                          // setShoutoutMsg(e.target.value);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  );
                })}
                <div style={{ margin: "10px" }}>
                  <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                    Creator Response
                  </p>
                  <TextField
                    value={creatorresponse[0]}
                    className={classesModal.textfield}
                    placeholder="No Response From Creator Yet.."
                    type="text"
                    multiline
                    rows={5}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => {
                      // setShoutoutMsg(e.target.value);
                    }}
                  />
                  {}
                </div>
                {creatorresponse.map((mes, index) => {
                  return index != 0 ? (
                    <div style={{ margin: "10px" }}>
                      <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                        Link {index}
                      </p>
                      <TextField
                        value={mes}
                        className={classesModal.textfield}
                        placeholder="Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ..."
                        type="url"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        onChange={(e) => {
                          // setShoutoutMsg(e.target.value);
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  );
                })}
              </div>
            </div>
            <div style={{ fontSize: "15px", width: "100%", color: "black" }}>
              Nothing To See Here
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default RequestCard;
