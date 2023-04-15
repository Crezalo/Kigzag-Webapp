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
import { getAllCreatorKycApprovalRequestsData } from "../services/api-services/creator/fininfo_api";
import BasicModal from "./BasicModal";
import KYCDetailsViewModal from "./KYCDetailsViewModal";

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

const KycApproval = () => {
  const classesModal = useStylesModal();
  // rattings value: 1,2,3,4,5
  const [kycData, setKycData] = useState([]);

  const GetFeedback = () => {
    useEffect(() => {
      async function getData() {
        const result = await getAllCreatorKycApprovalRequestsData();
        if (typeof result !== "string") setKycData(result);
      }
      getData();
    }, []);
  };

  GetFeedback();

  return (
    <div style={{ color: "white" }}>
      <>
        {kycData[0] ? (
          <>
            {kycData?.map((k) => {
              return (
                <>
                  <br />
                  <hr />
                  <div
                    style={{
                      justifyContent: "center",
                      flexDirection: "row",
                      display: "flex",
                    }}
                  >
                    <BasicModal
                      modalButtonText={
                        <Button
                          style={{
                            background: "#3B82F6",
                            color: "white",
                            marginBottom: "2px",
                            fontWeight: "bold",
                            textAlign: "center",
                            margin: "20px",
                          }}
                          variant="contained"
                        >
                          {k?.creator}
                        </Button>
                      }
                      modalBody={<KYCDetailsViewModal kycDataP={k} />}
                      formatting={true}
                    />
                  </div>
                  <hr />
                </>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </>
    </div>
  );
};
export default KycApproval;
