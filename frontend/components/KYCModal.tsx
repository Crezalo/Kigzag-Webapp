import axios from "axios";
import { useState } from "react";
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
import { addCreatorFinInfoData } from "../services/api-services/creator/fininfo_api";
import { updateUserData } from "../services/api-services/user_api";
import { addCreatorFeatureStatusData } from "../services/api-services/creator/features_api";

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

interface KYCModalProp {}

const KYCModal = () => {
  // const [videofile, setVideofile] = useState(null);
  const [panfile, setPanFile] = useState(null);
  const [fileUploadStatus, setFileUploadStatus] = useState("NO FILE ADDED");

  const creatObjectUrl = (file) => {
    return window.URL.createObjectURL(file);
  };

  const submitFile = async (event: any) => {
    event.preventDefault();
    try {
      if (authHeader().Authorization) {
        const formData = new FormData();
        formData.append("pancard", panfile[0]);

        setFileUploadStatus("UPLOADING");
        const response = await axios.post(
          MAIN_API_URL + "content/creator_info/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: authHeader().Authorization,
            },
          }
        );
        let result = await addCreatorFinInfoData(
          event.target.aadharnumber.value,
          event.target.pannumber.value,
          event.target.bank_name.value,
          event.target.ifsccode.value,
          event.target.aacnumber.value
        );
        console.log(result);
        let result1 = await updateUserData(
          "",
          "",
          "",
          "",
          "",
          true,
          "",
          "",
          "",
          "",
          ""
        );
        console.log(result1);
        let result2 = await addCreatorFeatureStatusData();
        console.log(result2);
        if (
          response.data.isSuccessful &&
          typeof result[0] !== "string" &&
          typeof result1 !== "string" &&
          typeof result2 !== "string"
        ) {
          // handle success
          setFileUploadStatus("COMPLETE");
          console.log(response.data.result);
        } else {
          setFileUploadStatus(
            "Failed To Upload Retry! " + response.data.errorMsg
          );
          console.log(response.data.errorMsg);
        }
      } else {
        setFileUploadStatus("Failed To Upload Retry! User Not Logged In");
        console.log("User Not Logged In");
      }
    } catch (err) {
      // handle error
      setFileUploadStatus("Failed To Upload Retry!");
      console.log(err);
    }
  };

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
      {fileUploadStatus === "Failed To Upload Retry!" ? (
        <p style={{ color: "red" }}>{fileUploadStatus}</p>
      ) : (
        <></>
      )}
      {fileUploadStatus !== "COMPLETE" && fileUploadStatus !== "UPLOADING" ? (
        <form onSubmit={submitFile} className="form">
          <label className="form label">KYC Verification</label>
          <label className="form label" style={{ fontSize: "medium" }}>
            Upload Pan Card Image
          </label>
          <input
            type="file"
            onChange={(event) => {
              setPanFile(event.target.files);
            }}
            accept="image/*"
            required
            className="form inputFile"
          />
          {panfile ? (
            <div
              style={{
                margin: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                id="thumb_image"
                src={creatObjectUrl(panfile[0])}
                width="350"
                height="220"
                alt=""
              />
            </div>
          ) : (
            <></>
          )}
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
              placeholder="ABCTY1234D"
              style={{
                color: "black",
                resize: "both",
                width: "10vw",
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
              placeholder="000000000000"
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
                width: "10vw",
                overflow: "none",
              }}
              required
            />
            <label className="form label">Bank Details</label>
            <label>
              *You can change banking details in future.
              <br />
              <br />
            </label>
            <label>Bank Name</label>
            <select
              id="bank_name"
              name="bank_name"
              className="mb-4 border-b-2 form inputSingleLineText"
              style={{
                color: "black",
                resize: "both",
                width: "20vw",
                overflow: "none",
              }}
              required
            >
              {banks.map((bank) => (
                <option value={bank}>{bank}</option>
              ))}
            </select>
            <label>IFSC Code</label>
            <input
              className="mb-4 border-b-2 form inputSingleLineText"
              type="text"
              id="ifsccode"
              name="ifsccode"
              minLength={11}
              maxLength={11}
              placeholder="ABCD0000000"
              style={{
                color: "black",
                resize: "both",
                width: "10vw",
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
              placeholder="000000000000000000"
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
                width: "15vw",
                overflow: "none",
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="outline outline-offset-0 px-2 py-2 rounded buyButton"
            // style={{ width: "10vw" }}
          >
            Become A Creator
          </button>
        </form>
      ) : (
        <>
          {fileUploadStatus === "UPLOADING" ? (
            <div>
              <Image src={uploadingGif} alt="" width={200} height={200} />
            </div>
          ) : (
            <div>
              <Image src={celebration} alt="" width={200} height={200} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default KYCModal;
