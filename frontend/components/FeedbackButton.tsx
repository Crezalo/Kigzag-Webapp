import Link from "next/link";
import Image from "next/image";
import kigzaglogo from "../public/crezalo-logo-box-full.png";
import React from "react";
import BasicModal from "./BasicModal";
import WriteFeedbackModal from "./WriteFeedbackModal";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

const FeedbackButton = () => {
  return (
    <div className="feedbackButton">
      <BasicModal
        modalBody={<WriteFeedbackModal />}
        modalButtonText={
          <div style={{ marginTop: "5px" }}>
            <RateReviewOutlinedIcon
              fontSize="large"
              color="primary"
              className="pointer"
            />
          </div>
        }
        formatting={true}
      />
    </div>
  );
};
export default FeedbackButton;
