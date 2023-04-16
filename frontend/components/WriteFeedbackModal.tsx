import axios from "axios";
import { useEffect, useState } from "react";
import { VIDEO_API_URL } from "../services/api-services/creator/video_api";
import { authHeader } from "../services/auth-header";
import Image from "next/image";
import uploadingGif from "../public/uploading.gif";
import greenTick from "../public/green-tick.gif";
import { makeStyles, Typography } from "@material-ui/core";
import { Box, Button, InputLabel, Rating, TextField } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import {
  addUserMerchReviewData,
  updateMerchReviewData,
} from "../services/api-services/user/merch_api";
import {
  addFeedback,
  getAllFeedbacks,
} from "../services/api-services/user/feedback_api";

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
    // margin: "0 20px 20px 20px",
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
    width: "100%",
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

interface WriteFeedbackModalProp {}
const WriteFeedbackModal = ({}: WriteFeedbackModalProp) => {
  const classesModal = useStylesModal();
  // rattings value: 1,2,3,4,5
  const [feedback, setFeedback] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState(false);

  const AddFeedback = async () => {
    let result;
    result = await addFeedback(feedback);
    if (typeof result === "string") setErrorMsg(result);
    else setStatus(true);
  };

  return (
    <div className={classesModal.paper}>
      {!status ? (
        <div style={{ width: "60vw" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                paddingTop: "10px",
                color: "black",
              }}
            >
              Add Feedback
            </Typography>
            <Box sx={{ padding: "5px 0px 15px 0px", width: "100%" }}>
              <TextField
                className={classesModal.textfield}
                type="string"
                label="Feedback"
                placeholder="We believe in correcting and improving our user experience. Please Enter Your Feedback Here ..."
                InputLabelProps={{
                  shrink: true,
                }}
                multiline
                rows={5}
                variant="outlined"
                onChange={(e) => {
                  {
                    setFeedback(e.target.value);
                  }
                }}
              />
            </Box>
          </Box>
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={AddFeedback}
          >
            Submit
          </Button>
        </div>
      ) : (
        <div>
          <Image src={greenTick} alt="" width={200} height={200} />
        </div>
      )}
      <p className={classesModal.error}>{errorMsg}</p>
    </div>
  );
};
export default WriteFeedbackModal;
