import axios from "axios";
import { useState } from "react";
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
import { useScreenSize } from "../services/utility";

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

interface WriteReviewModalProp {
  productid: string;
  addorupdate: number; //1: Add 2: Update
  review: {
    reviewid: string;
    productid: string;
    username: string;
    ratings: number;
    commenttitle: string;
    commentdescription: string;
    createdat: string;
    updatedat: string;
  };
  orderid: string;
}
const WriteReviewModal = ({
  productid,
  addorupdate,
  review,
  orderid,
}: WriteReviewModalProp) => {
  const classesModal = useStylesModal();
  // rattings value: 1,2,3,4,5
  const [value, setValue] = useState<number | null>(
    addorupdate == 2 ? parseInt(review.ratings.toString()) : 0
  );
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;
  const [hover, setHover] = useState(-1);
  const [title, setTitle] = useState(
    addorupdate == 2 ? review.commenttitle : ""
  );
  const [description, setDescription] = useState(
    addorupdate == 2 ? review.commentdescription : ""
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState(false);

  const labels: { [index: string]: string } = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const AddReview = async () => {
    let result;
    result = await addUserMerchReviewData(
      productid,
      orderid,
      value,
      title,
      description
    );
    if (typeof result === "string") setErrorMsg(result);
    else setStatus(true);
  };

  const UpdateReview = async () => {
    let result;
    result = await updateMerchReviewData(
      review.reviewid,
      title,
      description,
      value
    );
    if (typeof result === "string") setErrorMsg(result);
    else setStatus(true);
  };

  return (
    <div className={classesModal.paper}>
      {!status ? (
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
              {addorupdate == 1 ? "Add" : "Update"} Review
            </Typography>
            <Rating
              name="hover-feedback"
              value={value}
              defaultValue={
                addorupdate == 2 ? parseInt(review.ratings.toString()) : value
              }
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              size="large"
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ color: "grey", padding: "5px 0px 5px 0px" }}>
                {labels[hover !== -1 ? hover : value]}
              </Box>
            )}
            <Box sx={{ padding: "5px 0px 15px 0px" }}>
              <TextField
                className={classesModal.textfield}
                type="string"
                label="Title"
                placeholder="Enter Review Title Here ..."
                InputLabelProps={{
                  shrink: true,
                }}
                multiline
                rows={2}
                variant="outlined"
                defaultValue={addorupdate == 2 ? review.commenttitle : ""}
                onChange={(e) => {
                  {
                    setTitle(e.target.value);
                  }
                }}
              />
            </Box>
            <Box sx={{ padding: "15px 0px 5px 0px" }}>
              <TextField
                className={classesModal.textfield}
                type="string"
                label="Description"
                placeholder="Enter Review Description Here ..."
                InputLabelProps={{
                  shrink: true,
                }}
                multiline
                rows={5}
                variant="outlined"
                defaultValue={addorupdate == 2 ? review.commentdescription : ""}
                onChange={(e) => {
                  {
                    setDescription(e.target.value);
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
            onClick={() => (addorupdate == 1 ? AddReview() : UpdateReview())}
          >
            {addorupdate == 1 ? "Add" : "Update"}
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
export default WriteReviewModal;
