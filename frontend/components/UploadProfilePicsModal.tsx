import axios from "axios";
import { useState } from "react";
import { authHeader } from "../services/auth-header";
import Image from "next/image";
import uploadingGif from "../public/uploading.gif";
import greenTick from "../public/green-tick.gif";
import {
  addCreatorMerchData,
  MAIN_API_URL,
} from "../services/api-services/creator/merch_api";
import Carousel from "react-material-ui-carousel";

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

interface UploadProfilePicsLogoModalProp {}

const UploadProfilePicsLogoModal = () => {
  // const [videofile, setVideofile] = useState(null);
  const [thumbfile, setThumbfile] = useState(null);
  const [images, setImages] = useState<FileList>(null);
  const [imagesLen, setImagesLen] = useState(0);
  const [fileUploadStatus, setFileUploadStatus] = useState("NO FILE ADDED");
  const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);

  const creatObjectUrl = (file) => {
    return window.URL.createObjectURL(file);
  };

  const submitFile = async (event: any) => {
    event.preventDefault();
    try {
      if (authHeader().Authorization) {
        const formData = new FormData();
        formData.append("profilepic", thumbfile[0]);
        for (let i = 0; i < images.length; i++) {
          formData.append("otherimages", images[i]);
        }
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
        if (response.data.isSuccessful) {
          // handle success
          setFileUploadStatus("COMPLETE");
          console.log(response.data.result);
        } else {
          setFileUploadStatus("Failed To Upload Retry!");
          console.log(response.data.errorMsg);
        }
      } else {
        setFileUploadStatus("Failed To Upload Retry!");
        console.log("User Not Logged In");
      }
    } catch (err) {
      // handle error
      setFileUploadStatus("Failed To Upload Retry!");
      console.log(err);
    }
  };
  let slideIndex = 1;

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
          <label className="form label" style={{ fontWeight: "100" }}>
            Upload Profile Picture
          </label>
          <input
            type="file"
            onChange={(event) => {
              setThumbfile(event.target.files);
            }}
            required
            className="form inputFile"
            accept="image/*"
          />
          {thumbfile ? (
            <div
              style={{
                margin: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                id="thumb_image"
                src={creatObjectUrl(thumbfile[0])}
                width="350"
                height="220"
                alt=""
              />
            </div>
          ) : (
            <></>
          )}
          <label className="form label" style={{ fontWeight: "100" }}>
            Upload Banner Images
          </label>
          <input
            type="file"
            onChange={(event) => {
              setImages(event.target.files);
              setImagesLen(event.target.files.length);
            }}
            required
            className="form inputFile"
            accept="image/*"
            multiple
          />
          {imagesLen > 0 ? (
            <Carousel
              {...settings}
              navButtonsProps={{
                // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                  backgroundColor: "cornflowerblue",
                  borderRadius: 5,
                },
              }}
            >
              {Array.from(images).map((item, i) => (
                <img
                  src={creatObjectUrl(item)}
                  alt="Loading ..."
                  width="100%"
                  height="100%"
                  onError={() => setImagesLen(i)}
                />
              ))}
            </Carousel>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="outline outline-offset-0 px-2 py-2 rounded buyButton"
            style={{ width: "10vw" }}
          >
            Upload
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
              <Image src={greenTick} alt="" width={200} height={200} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default UploadProfilePicsLogoModal;
