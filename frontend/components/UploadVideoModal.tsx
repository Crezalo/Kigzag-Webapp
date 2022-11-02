import axios from "axios";
import { useEffect, useState } from "react";
import { VIDEO_API_URL } from "../services/api-services/creator/video_api";
import { authHeader } from "../services/auth-header";
import Image from "next/image";
import { ThemeProvider } from "@material-ui/core";
import { maxHeight } from "@mui/system";
import uploadingGif from "../public/uploading.gif";
import greenTick from "../public/green-tick.gif";

const UploadVideoModal = () => {
  const [videofile, setVideofile] = useState(null);
  const [thumbfile, setThumbfile] = useState(null);
  const [fileUploadStatus, setFileUploadStatus] = useState("NO FILE ADDED");

  const vidplay = document.getElementById("video_player") as HTMLVideoElement;
  const vidsrc = document.getElementById("video_source") as HTMLSourceElement;
  const thumbImage = document.getElementById("thumb_image") as HTMLImageElement;

  const submitFile = async (event: any) => {
    event.preventDefault();
    try {
      if (authHeader().Authorization) {
        if (!videofile) {
          throw new Error("Select a file first!");
        }
        const formData = new FormData();
        formData.append("video", videofile[0]);
        formData.append("thumbnail", thumbfile[0]);
        formData.append("title", event.target.title.value);
        formData.append("description", event.target.description.value);
        setFileUploadStatus("UPLOADING");
        const response = await axios.post(VIDEO_API_URL + "upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: authHeader().Authorization,
          },
        });
        if (response.data.isSuccessful) {
          // handle success
          setFileUploadStatus("COMPLETE");
          console.log(response.data.result[0]);
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

  function reloadVideo() {
    if (vidsrc && vidsrc.src != window.URL.createObjectURL(videofile[0])) {
      vidsrc.src = window.URL.createObjectURL(videofile[0]);
    }
    if (vidplay) {
      vidplay.load();
    }
  }

  function reloadThumb() {
    if (
      thumbImage &&
      thumbImage.src != window.URL.createObjectURL(thumbfile[0])
    ) {
      thumbImage.src = window.URL.createObjectURL(thumbfile[0]);
    }
  }

  return (
    <div style={{ overflowY: "auto", overflowX: "hidden", maxHeight: "80vh" }}>
      {fileUploadStatus === "Failed To Upload Retry!" ? (
        <p style={{ color: "red" }}>{fileUploadStatus}</p>
      ) : (
        <></>
      )}
      {fileUploadStatus !== "COMPLETE" && fileUploadStatus !== "UPLOADING" ? (
        <form onSubmit={submitFile} className="form">
          <label className="form label">Upload Video</label>
          <input
            type="file"
            onChange={(event) => {
              setVideofile(event.target.files);
              reloadVideo();
            }}
            required
            className="form inputFile"
          />
          {videofile ? (
            <video
              id="video_player"
              controls
              autoPlay
              crossOrigin="anonymous"
              controlsList="nodownload"
              style={{ width: "28vw", height: "30vh", margin: "10px" }}
            >
              <source
                id="video_source"
                src={window.URL.createObjectURL(videofile[0])}
                type="video/mp4"
              />
              {/* <track
              label="English"
              kind="captions"
              srcLang="en"
              src={VIDEO_API_URL + "captions/" + videoid}
              default
            /> */}
            </video>
          ) : (
            <></>
          )}
          <label className="form label" style={{ fontWeight: "100" }}>
            Upload Thumbnail
          </label>
          <input
            type="file"
            onChange={(event) => {
              setThumbfile(event.target.files);
              // reloadThumb(); // not needed
            }}
            required
            className="form inputFile"
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
                src={window.URL.createObjectURL(thumbfile[0])}
                width="350"
                height="220"
                alt=""
              />
            </div>
          ) : (
            <></>
          )}
          <textarea
            className="mb-4 border-b-2 form inputSingleLineText"
            id="title"
            name="title"
            maxLength={100}
            autoComplete="title"
            style={{
              color: "black",
              overflow: "auto",
              resize: "both",
              width: "30vw",
              height: "8vh",
            }}
            required
            placeholder="Title Here ..."
          />
          <textarea
            className="mb-4 border-b-2 form inputSingleLineText"
            id="description"
            name="description"
            maxLength={5000}
            autoComplete="description"
            style={{
              color: "black",
              resize: "both",
              width: "30vw",
              height: "25vh",
              overflow: "none",
            }}
            required
            placeholder="Description Here ..."
          />
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
export default UploadVideoModal;
