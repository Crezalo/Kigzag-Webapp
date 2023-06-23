import axios from "axios";
import { useState } from "react";
import { authHeader } from "../services/auth-header";
import Image from "next/image";
import uploadingGif from "../public/uploading.gif";
import greenTick from "../public/green-tick.gif";
import countries from "../consts/countries";
import {
  addCreatorMerchData,
  addCreatorMerchVariantData,
  MAIN_API_URL,
} from "../services/api-services/creator/merch_api";
import Carousel from "react-material-ui-carousel";
import { delay, useScreenSize } from "../services/utility";
import { clickEvent } from "../services/analytics";

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

interface UploadMerchModalProp {
  // used for uploading variants to existing products
  variantUpload?: boolean;
  merchDetails?: {
    title: string;
    description: string;
    creator: string;
    productid: string;
    inventory: number;
    return_refund_policy: string;
    country_of_origin: string;
    price: number;
    variants: number;
    variantname: string;
    discountpercentage: number;
    warrantyperiod: number;
    shippingcharges: number;
    freeshippingabove: number;
  };
}

const UploadMerchModal = ({
  variantUpload,
  merchDetails,
}: UploadMerchModalProp) => {
  // const [videofile, setVideofile] = useState(null);
  const [thumbfile, setThumbfile] = useState(null);
  const [images, setImages] = useState<FileList>(null);
  const [imagesLen, setImagesLen] = useState(0);
  const [fileUploadStatus, setFileUploadStatus] = useState("NO FILE ADDED");
  const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);
  const [uploadImages, setUploadImages] = useState(!variantUpload);
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const creatObjectUrl = (file) => {
    return window.URL.createObjectURL(file);
  };

  const submitFile = async (event: any) => {
    event.preventDefault();
    try {
      if (authHeader().Authorization) {
        let productid = Math.random().toString(36).slice(2);
        if (variantUpload) {
          productid =
            merchDetails?.productid.split("_")[0] +
            "_" +
            (parseInt(merchDetails?.variants.toString()) + 1) +
            "_" +
            (uploadImages ? "1" : "0");
        }
        setFileUploadStatus("UPLOADING");
        var response;
        if (uploadImages) {
          const formData = new FormData();
          formData.append("productid", productid);
          formData.append("thumbnail", thumbfile[0]);
          for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
          }
          response = await axios.post(
            MAIN_API_URL + "content/merch_images/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: authHeader().Authorization,
              },
            }
          );
        }
        let result;
        if (variantUpload) {
          result = await addCreatorMerchVariantData(
            productid,
            event.target.title.value,
            event.target.description.value,
            event.target.inventory.value,
            event.target.return_refund_policy.value,
            event.target.country_of_origin.value,
            event.target.price.value,
            event.target.discount.value,
            event.target.warrantyperiod.value,
            event.target.shippingcharges.value,
            event.target.variantname.value,
            event.target.freeshippingabove.value
          );
        } else {
          result = await addCreatorMerchData(
            productid,
            event.target.title.value,
            event.target.description.value,
            event.target.inventory.value,
            event.target.return_refund_policy.value,
            event.target.country_of_origin.value,
            event.target.price.value,
            event.target.discount.value,
            event.target.warrantyperiod.value,
            event.target.shippingcharges.value,
            event.target.freeshippingabove.value
          );
        }
        console.log(result);
        if (
          (response?.data?.isSuccessful || !uploadImages) &&
          typeof result !== "string"
        ) {
          // handle success
          setFileUploadStatus("COMPLETE");

          // wait for 2 seconds to show experience
          await delay(2000);

          // reload to fetch updated details
          window.location.reload();
          console.log(response?.data?.result);
          console.log(result);
        } else {
          setFileUploadStatus("Failed To Upload Retry!");
          console.log(response?.data?.errorMsg);
          console.log(result);
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
          {variantUpload ? (
            <>
              <label className="form label" style={{ fontWeight: "100" }}>
                Add New Variant
              </label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "10px",
                }}
              >
                <input
                  type="checkbox"
                  checked={uploadImages}
                  style={{ marginBottom: "10px" }}
                  onChange={(e) => setUploadImages((show) => !show)}
                />
                <label
                  className="form label pointer"
                  style={{ fontWeight: "100" }}
                  onClick={(e) => {
                    setUploadImages((show) => !show);
                    clickEvent("MerchUploadWantDifferentImages");
                  }}
                >
                  Want different images?
                </label>
              </div>
            </>
          ) : (
            <></>
          )}
          {uploadImages ? (
            <>
              <label className="form label" style={{ fontWeight: "100" }}>
                Upload Product Image
              </label>
              <input
                type="file"
                onChange={(event) => {
                  setThumbfile(event.target.files);
                }}
                accept="image/*"
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
                Upload Supporting Images
              </label>
              <input
                type="file"
                onChange={(event) => {
                  setImages(event.target.files);
                  setImagesLen(event.target.files.length);
                  // showSlides(slideIndex);
                }}
                accept="image/*"
                required
                className="form inputFile"
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
            </>
          ) : (
            <></>
          )}
          <br />
          {variantUpload ? (
            <textarea
              className="mb-4 border-b-2 form inputSingleLineText"
              id="variantname"
              name="variantname"
              maxLength={50}
              autoComplete="variantname"
              style={{
                color: "black",
                overflow: "auto",
                resize: "both",
                width: ismobile ? "80vw" : "30vw",
                height: "8vh",
              }}
              required
              placeholder="Variant Name Here ..."
            />
          ) : (
            <></>
          )}
          <textarea
            className="mb-4 border-b-2 form inputSingleLineText"
            id="title"
            name="title"
            defaultValue={merchDetails?.title ? merchDetails?.title : ""}
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
            defaultValue={
              merchDetails?.description ? merchDetails?.description : ""
            }
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
          <div
            style={{
              justifyContent: "center",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <label>
              *You can change these values in future.
              <br />
              <br />
            </label>
            <label>Price (in ₹)</label>
            <input
              className="mb-4 border-b-2 form inputSingleLineText"
              type="number"
              id="price"
              name="price"
              min="0"
              defaultValue={merchDetails?.price ? merchDetails?.price : 100}
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "10vw",
                overflow: "none",
              }}
              required
            />
            <label>Shipping Charges (in ₹)</label>
            <input
              className="mb-4 border-b-2 form inputSingleLineText"
              type="number"
              id="shippingcharges"
              name="shippingcharges"
              min="0"
              defaultValue={
                merchDetails?.shippingcharges
                  ? merchDetails?.shippingcharges
                  : "0"
              }
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "10vw",
                overflow: "none",
              }}
              required
            />
            <label>Free Shipping Above (in ₹)</label>
            <input
              className="mb-4 border-b-2 form inputSingleLineText"
              type="number"
              id="freeshippingabove"
              name="freeshippingabove"
              min="0"
              defaultValue={
                merchDetails?.freeshippingabove
                  ? merchDetails?.freeshippingabove
                  : "399"
              }
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "10vw",
                overflow: "none",
              }}
              required
            />
            <label>Inventory (number of items in stock)</label>
            <input
              className="mb-4 border-b-2 form inputSingleLineText"
              type="number"
              id="inventory"
              name="inventory"
              min="0"
              defaultValue={
                merchDetails?.inventory ? merchDetails?.inventory : "100"
              }
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "10vw",
                overflow: "none",
              }}
              required
            />
            <label>Discount (in %)</label>
            <input
              className="mb-4 border-b-2 form inputSingleLineText"
              type="number"
              id="discount"
              name="discount"
              min="0"
              max="100"
              defaultValue={
                merchDetails?.discountpercentage
                  ? merchDetails?.discountpercentage
                  : "10"
              }
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "10vw",
                overflow: "none",
              }}
              required
            />
            <label>Country of Origin</label>
            <select
              id="country_of_origin"
              name="country_of_origin"
              className="mb-4 border-b-2 form inputSingleLineText"
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "12vw",
                overflow: "none",
              }}
              defaultValue={
                merchDetails?.country_of_origin
                  ? merchDetails?.country_of_origin
                  : countries[0]
              }
              required
            >
              {countries.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </select>
            <label>Return/Replace Policy</label>
            <select
              id="return_refund_policy"
              name="return_refund_policy"
              className="mb-4 border-b-2 form inputSingleLineText"
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "12vw",
                overflow: "none",
              }}
              defaultValue={
                merchDetails?.return_refund_policy
                  ? merchDetails?.return_refund_policy
                  : "7dayReturn"
              }
              required
            >
              <option value="7dayReturn">7 day Return</option>
              <option value="7dayReplace">7 day Replace</option>
            </select>
            <label>Warranty Period (in Months)</label>
            <input
              className="mb-4 border-b-2 form inputSingleLineText"
              type="number"
              id="warrantyperiod"
              name="warrantyperiod"
              min="0"
              max="24"
              defaultValue={
                merchDetails?.warrantyperiod
                  ? merchDetails?.warrantyperiod
                  : "6"
              }
              style={{
                color: "black",
                resize: "both",
                width: ismobile ? "50vw" : "10vw",
                overflow: "none",
              }}
              required
            />
          </div>
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
export default UploadMerchModal;
