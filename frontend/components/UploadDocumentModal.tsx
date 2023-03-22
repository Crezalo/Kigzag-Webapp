import axios from "axios";
import { useState } from "react";
import { VIDEO_API_URL } from "../services/api-services/creator/video_api";
import { authHeader } from "../services/auth-header";
import Image from "next/image";
import uploadingGif from "../public/uploading.gif";
import greenTick from "../public/green-tick.gif";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useScreenSize } from "../services/utility";

interface UploadDocumentModalProp {
  seriesid: string;
}
const UploadDocumentModal = ({ seriesid }: UploadDocumentModalProp) => {
  const [docfile, setDocfile] = useState(null);
  const [thumbfile, setThumbfile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [fileUploadStatus, setFileUploadStatus] = useState("NO FILE ADDED");

  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const filetypeList = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/applicatiapplication/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
  ];

  console.log(fileType);
  console.log(filetypeList[fileType - 1]);

  ////////////////////////////////////////////////////////////////////////////////
  /////////// Goes Via Content Routes instead of Video Routes ////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  const submitFile = async (event: any) => {
    event.preventDefault();
    try {
      if (authHeader().Authorization) {
        if (!docfile) {
          throw new Error("Select a file first!");
        }
        const formData = new FormData();
        formData.append("filetype", fileType);
        formData.append("docfile", docfile[0]);
        formData.append("thumbnail", thumbfile[0]);
        formData.append("title", event.target.title.value);
        formData.append("description", event.target.description.value);
        formData.append("seriesid", seriesid);
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

  if (docfile) console.log(window.URL.createObjectURL(docfile[0]));
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
            defaultValue={0}
            onChange={(e) => setFileType(e.target.value)}
          >
            <option value={0}>Select Doc Type</option>
            {/* <option value={1}>pdf</option> */}
            <option value={2}>doc</option>
            <option value={3}>docx</option>
            <option value={4}>ppt</option>
            <option value={5}>pptx</option>
            <option value={6}>xls</option>
            <option value={7}>xlsx</option>
            {/* <option value={8}>csv</option> */}
          </select>
          {fileType ? (
            <>
              <label className="form label">Upload Document</label>
              <input
                type="file"
                onChange={(event) =>
                  event.target.files?.length && setDocfile(event.target.files)
                }
                required
                className="form inputFile"
                accept={filetypeList[fileType - 1]}
              />
              {/* {docfile ? (
                <DocViewer
                  documents={[
                    {
                      uri: window.URL.createObjectURL(docfile[0]),
                      fileName: docfile[0].name,
                    },
                  ]}
                  theme={{
                    primary: "#5296d8",
                    secondary: "#ffffff",
                    tertiary: "#5296d899",
                    textPrimary: "#ffffff",
                    textSecondary: "#5296d8",
                    textTertiary: "#00000099",
                    disableThemeScrollbar: false,
                  }}
                  pluginRenderers={DocViewerRenderers}
                />
              ) : (
                <></>
              )} */}
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
                accept="image/*"
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
            </>
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
              width: ismobile ? "80vw" : "30vw",
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
              width: ismobile ? "80vw" : "30vw",
              height: "25vh",
              overflow: "none",
            }}
            required
            placeholder="Description Here ..."
          />
          <button
            type="submit"
            className="outline outline-offset-0 px-2 py-2 rounded buyButton"
            style={{
              width: ismobile ? "50vw" : "10vw",
            }}
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
export default UploadDocumentModal;
