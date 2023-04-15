import axios from "axios";
import { useEffect, useState } from "react";
import { authHeader } from "../services/auth-header";
import Image from "next/image";
import uploadingGif from "../public/uploading.gif";
import celebration from "../public/celebrations.gif";
import {
  addCreatorMerchData,
  MAIN_API_URL,
} from "../services/api-services/creator/merch_api";
import Carousel from "react-material-ui-carousel";
import banks from "../consts/banks";
import {
  addCreatorKycApprovalData,
  approveCreatorKYCData,
} from "../services/api-services/creator/fininfo_api";
import { updateUserData } from "../services/api-services/user_api";
import { addCreatorFeatureStatusData } from "../services/api-services/creator/features_api";
import { useScreenSize } from "../services/utility";
import { getCreatorInfoImages } from "../services/api-services/content_api";
import { Button } from "@mui/material";

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

interface KYCDetailsViewModalProp {
  kycDataP: any;
}

const KYCDetailsViewModal = ({ kycDataP }: KYCDetailsViewModalProp) => {
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;
  const [signedUrl, setSignedURl] = useState();
  const [message, setMessage] = useState("");

  const GetImages = () => {
    useEffect(() => {
      async function getData() {
        const res = await getCreatorInfoImages("pancard", kycDataP?.creator);
        if (res[0]) {
          setSignedURl(res[0]["signedurl"]);
        }
      }
      getData();
    }, [kycDataP?.creator]);
  };

  GetImages();

  const ApproveKYC = async () => {
    let result = await approveCreatorKYCData(kycDataP?.creator);
    if (typeof result !== "string") {
      let result1 = await addCreatorFeatureStatusData(kycDataP?.creator);
      if (typeof result1 !== "string") {
        setMessage("Success");
      } else setMessage(message + " 2." + result1);
    } else setMessage(message + " 1." + result);
  };

  console.log(message);

  return (
    <div
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        maxHeight: "80vh",
        backgroundColor: "#3b82f6",
        padding: "5px",
        borderRadius: "1%",
      }}
    >
      <label className="form label">KYC Verification</label>
      <label style={{ color: "grey" }}>{message}</label>
      <label className="form label" style={{ fontSize: "medium" }}>
        Pan Card Image
      </label>

      <div
        style={{
          margin: "10px",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          id="thumb_image"
          src={signedUrl}
          width="350"
          height="220"
          alt=""
        />
      </div>
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <label>Pan Number</label>
        <input
          className="mb-4 border-b-2 form inputSingleLineText"
          type="text"
          id="pannumber"
          name="pannumber"
          minLength={10}
          maxLength={10}
          defaultValue={kycDataP?.pannumber}
          style={{
            color: "black",
            resize: "both",
            width: ismobile ? "80vw" : "30vw",
            overflow: "none",
          }}
          required
        />
        <label>Aadhar Number</label>
        <input
          className="mb-4 border-b-2 form inputSingleLineText"
          type="text"
          id="aadharnumber"
          name="aadharnumber"
          minLength={12}
          maxLength={12}
          defaultValue={kycDataP?.aadharnumber}
          onChange={(e) => {
            {
              e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }
          }}
          style={{
            color: "black",
            resize: "both",
            width: ismobile ? "80vw" : "30vw",
            overflow: "none",
          }}
          required
        />
        <label className="form label">Bank Details</label>
        <label>Bank Name</label>
        <input
          className="mb-4 border-b-2 form inputSingleLineText"
          type="text"
          id="aadharnumber"
          name="aadharnumber"
          minLength={12}
          maxLength={12}
          defaultValue={kycDataP?.bank_name}
          onChange={(e) => {
            {
              e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }
          }}
          style={{
            color: "black",
            resize: "both",
            width: ismobile ? "80vw" : "30vw",
            overflow: "none",
          }}
          required
        />
        <label>IFSC Code</label>
        <input
          className="mb-4 border-b-2 form inputSingleLineText"
          type="text"
          id="ifsccode"
          name="ifsccode"
          minLength={11}
          maxLength={11}
          defaultValue={kycDataP?.ifsc_code}
          style={{
            color: "black",
            resize: "both",
            width: ismobile ? "80vw" : "30vw",
            overflow: "none",
          }}
          required
        />
        <label>Account Number</label>
        <input
          className="mb-4 border-b-2 form inputSingleLineText"
          type="text"
          id="aacnumber"
          name="aacnumber"
          minLength={18}
          maxLength={18}
          defaultValue={kycDataP?.acc_number}
          onChange={(e) => {
            {
              e.target.value = e.target.value
                .replace(/[^0-9.]/g, "")
                .replace(/(\..*?)\..*/g, "$1");
            }
          }}
          style={{
            color: "black",
            resize: "both",
            width: ismobile ? "80vw" : "30vw",
            overflow: "none",
          }}
          required
        />
        <Button
          style={{
            background: "green",
            color: "white",
            marginBottom: "2px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "20px",
          }}
          variant="contained"
          onClick={ApproveKYC}
        >
          Approve
        </Button>
      </div>
    </div>
  );
};
export default KYCDetailsViewModal;
