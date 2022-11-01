import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  createTheme,
  Fade,
  makeStyles,
  Modal,
  Paper,
  TextField,
  Tooltip,
} from "@material-ui/core";
import {
  addCreatorDiscordData,
  getCreatorDiscordData,
  updateCreatorDiscordData,
} from "../services/api-services/creator/discord_api";
import DiscordServerId from "../public/DiscordServerId.png";
import DiscordInviteLink1 from "../public/DiscordInviteLink1.png";
import DiscordInviteLink2 from "../public/DiscordInviteLink.webp";
import DiscordInviteLink3 from "../public/DiscordInviteLink3.png";
import DiscordInviteLink4 from "../public/DiscordInviteLink4.png";
import Edit from "@mui/icons-material/Edit";
import Image from "next/image";
import Router from "next/router";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    width: "30%",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "black",
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

interface DiscordTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const DiscordTab = ({ creator, onCreatorProfile }: DiscordTabProp) => {
  const classesModal = useStylesModal();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMsg("");
  };

  const [open_upd, setOpen_upd] = useState(false);
  const handleOpen_upd = () => setOpen_upd(true);
  const handleClose_upd = () => {
    setOpen_upd(false);
    setErrorMsg_upd("");
  };
  const [serverid, setServerId] = useState("");
  const [invitelink, setInvitelink] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsg_upd, setErrorMsg_upd] = useState("");
  const [discordInfo, setDiscordInfo] = useState({
    serverid: "",
    invitelink: "",
  });

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        const result = await getCreatorDiscordData(creator);
        setDiscordInfo(result[0]);
        setServerId(discordInfo.serverid);
        setInvitelink(discordInfo.invitelink);
      }
      getData();
    }, [creator]);
  };

  GetUser();

  const AddDiscord = async () => {
    if (serverid != "" && invitelink != "") {
      const result = await addCreatorDiscordData(serverid, invitelink);
      setDiscordInfo(result[0]);
      handleClose();
    } else {
      setErrorMsg("Server Id and Invite Link cannot be empty");
    }
  };

  const UpdateDiscord = async () => {
    if (serverid != "" && invitelink != "") {
      const result = await updateCreatorDiscordData(serverid, invitelink);
      setDiscordInfo(result[0]);
      handleClose_upd();
    } else {
      console.log(serverid);
      console.log(invitelink);
      setErrorMsg_upd("Server Id and Invite Link cannot be empty");
    }
  };

  console.log(discordInfo);

  return (
    <div className="blueTextBlackBackground">
      {discordInfo?.serverid && discordInfo?.invitelink ? (
        <div
          className="modelButton"
          style={{
            marginTop: "20vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {onCreatorProfile ? (
            <></>
          ) : (
            <Button
              style={{
                background: "#3B82F6",
                color: "white",
                marginBottom: "2px",
                height: "80%",
              }}
              variant="contained"
              onClick={() =>
                Router.push({
                  pathname: "/updateprices",
                })
              }
            >
              Update Prices
            </Button>
          )}

          <a
            href={discordInfo.invitelink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              style={{
                background: "#3B82F6",
                color: "white",
                marginBottom: "2px",
              }}
              variant="contained"
            >
              Discord Server
            </Button>
          </a>
          {!onCreatorProfile ? (
            <section
              style={{ marginLeft: "20px" }}
              className="pointer"
              onClick={handleOpen_upd}
            >
              <Button
                style={{
                  background: "#3B82F6",
                  color: "white",
                }}
                variant="contained"
              >
                Edit Discord Info
              </Button>
            </section>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          {onCreatorProfile ? (
            <div className="modelButton" style={{ marginTop: "20vh" }}>
              <p>{creator} doesn't support Discord</p>
            </div>
          ) : (
            <div className="modelButton" style={{ marginTop: "20px" }}>
              <Button
                style={{
                  background: "#3B82F6",
                  color: "white",
                  marginBottom: "2px",
                }}
                variant="contained"
                onClick={handleOpen}
              >
                Add New Discord Server
              </Button>
            </div>
          )}
        </>
      )}
      {!onCreatorProfile &&
      !discordInfo?.serverid &&
      !discordInfo?.invitelink ? (
        <div
          style={{
            color: "white",
            fontSize: "18px",
            textAlign: "center",
            justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: "50%",
                color: "white",
                fontSize: "18px",
                textAlign: "center",
                justifyContent: "left",
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <p
                style={{
                  color: "#3B82F6",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                GET SERVER ID
              </p>
              <p style={{ marginTop: "10px" }}>
                1. Open your Discord server,{" "}
                <span style={{ color: "#3B82F6" }}> RIGHT-CLICK </span>on the
                server name, then select{" "}
                <span style={{ color: "#3B82F6" }}> Copy ID </span>
              </p>
              <p
                style={{
                  color: "#3B82F6",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                GET INVITE LINK
              </p>
              <p style={{ marginTop: "20px" }}>
                1. On the same pop-up menu, select{" "}
                <span style={{ color: "#3B82F6" }}> Invite People </span>.
              </p>
              <div style={{ marginTop: "40px" }}>
                <Image
                  src={DiscordInviteLink1}
                  alt=""
                  width={200}
                  height={400}
                />
              </div>
              <p style={{ marginTop: "40px", marginBottom: "20px" }}>
                3. Select <span style={{ color: "#3B82F6" }}>Never</span> from
                the dropdown menu as shown below.
              </p>
              <div style={{ marginTop: "20px" }}>
                <Image
                  src={DiscordInviteLink3}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div style={{ width: "50%", marginTop: "30px" }}>
              <Image src={DiscordServerId} alt="" width={300} height={500} />
              <p style={{ marginTop: "40px", marginBottom: "20px" }}>
                2. On the pop-up menu as shown below, select{" "}
                <span style={{ color: "#3B82F6" }}>Edit Invite Link</span>. This
                is necessary because current link has an expiry.
              </p>
              <Image src={DiscordInviteLink2} alt="" width={650} height={450} />
            </div>
          </div>
          <div>
            <p style={{ marginTop: "40px", marginBottom: "20px" }}>
              4. Select{" "}
              <span style={{ color: "#3B82F6" }}>Generate a New Link</span> and
              Copy the link. Link looks something like this:{" "}
              <span style={{ color: "#3B82F6" }}>
                https://discord.gg/[linkid]
              </span>
            </p>
            <div style={{ marginTop: "20px" }}>
              <Image src={DiscordInviteLink4} alt="" width={400} height={400} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
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
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className={classesModal.paper}
          >
            <p style={{ color: "red", fontSize: "15px" }}>{errorMsg}</p>
            <div style={{ margin: "10px" }}>
              <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                Discord Server Id
              </p>
              <TextField
                className={classesModal.textfield}
                placeholder="Discord Server Id here ..."
                type="url"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setServerId(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                Discord Server Invite Link
              </p>
              <TextField
                className={classesModal.textfield}
                placeholder="Discord Server Invite Link here ..."
                type="url"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setInvitelink(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <Button
                style={{
                  background: "#3B82F6",
                  color: "white",
                  marginBottom: "2px",
                }}
                variant="contained"
                onClick={() => {
                  AddDiscord();
                }}
              >
                Add New Discord Server
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classesModal.modal}
        open={open_upd}
        onClose={handleClose_upd}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open_upd}>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className={classesModal.paper}
          >
            <p style={{ color: "red", fontSize: "15px" }}>{errorMsg_upd}</p>
            <div style={{ margin: "10px" }}>
              <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                Discord Server Id
              </p>
              <TextField
                className={classesModal.textfield}
                placeholder="Discord Server Id here ..."
                type="url"
                defaultValue={discordInfo?.serverid}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setServerId(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <p style={{ color: "#3B82F6", fontWeight: "bold" }}>
                Discord Server Invite Link
              </p>
              <TextField
                className={classesModal.textfield}
                placeholder="Discord Server Invite Link here ..."
                type="url"
                defaultValue={discordInfo?.invitelink}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setInvitelink(e.target.value);
                }}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <Button
                style={{
                  background: "#3B82F6",
                  color: "white",
                  marginBottom: "2px",
                }}
                variant="contained"
                onClick={() => {
                  UpdateDiscord();
                }}
              >
                Update Discord Server Details
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default DiscordTab;
