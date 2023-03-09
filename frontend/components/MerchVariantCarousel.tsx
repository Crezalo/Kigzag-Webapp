import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import MerchReviewCard from "./MerchReviewCard";
import BasicModal from "./BasicModal";
import { Button, Typography } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";
import WriteReviewModal from "./WriteReviewModal";
import CarouselSlider from "react-carousel-slider";
import { getProductIdVariantsData } from "../services/api-services/creator/merch_api";
import UploadMerchModal from "./UploadMerchModal";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Router from "next/router";
import { NativeSelect } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    margin: "20px 20px 10px 0px",
  },
}));

interface MerchVariantCarouselProp {
  iscreator: boolean;
  merchDetails: {
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
  mainMerchDetails: {
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

const MerchVariantCarousel = ({
  iscreator,
  merchDetails,
  mainMerchDetails,
}: MerchVariantCarouselProp) => {
  const classes = useStyles();
  const [variantDetails, setVariantDetails] = useState([
    {
      title: "",
      description: "",
      creator: "",
      productid: "",
      inventory: 0,
      return_refund_policy: "",
      country_of_origin: "",
      price: 0,
      variants: 0,
      variantname: "",
      discountpercentage: 0,
      warrantyperiod: 0,
      shippingcharges: 0,
      freeshippingabove: 0,
    },
  ]);

  const GetVariants = () => {
    useEffect(() => {
      async function getData() {
        if (merchDetails?.productid != "") {
          const result = await getProductIdVariantsData(
            merchDetails?.productid.split("_")[0]
          );
          if (typeof result !== "string") {
            setVariantDetails(result);
          }
        }
      }
      getData();
    }, [merchDetails?.productid]);
  };

  GetVariants();

  return (
    <div style={{ marginTop: "10px", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {iscreator ? (
          <>
            <BasicModal
              modalButtonText={
                <Tooltip
                  title="Add variant for this product like colors, sizes, types etc. You can ignore this if not needed."
                  className="pointer"
                >
                  <AddBoxOutlinedIcon fontSize="large" color="primary" />
                </Tooltip>
              }
              modalBody={
                <UploadMerchModal
                  variantUpload={true}
                  merchDetails={mainMerchDetails}
                />
              }
              formatting={true}
            />
            <Tooltip
              title="Add variant for this product like colors, sizes, types etc. You can ignore this if not needed."
              style={{ marginTop: "5px", marginLeft: "5px" }}
            >
              <InfoIcon />
            </Tooltip>
          </>
        ) : (
          <></>
        )}
        <select
          id="bank_name"
          name="bank_name"
          className="mb-4 border-b-2 form inputSingleLineText"
          style={{
            color: "black",
            resize: "both",
            overflow: "none",
            justifyContent: "center",
            padding: "3px",
            borderRadius: "5px",
          }}
          required
          defaultValue={
            merchDetails?.productid.split("_")[1]
              ? merchDetails?.productid
              : "0"
          }
          onChange={(e) => {
            if (e.target.value == "0") {
              Router.push({
                pathname: "/merch",
                query: { productid: merchDetails?.productid.split("_")[0] },
              });
            } else {
              Router.push({
                pathname: "/merch",
                query: { productid: e.target.value },
              });
            }
          }}
        >
          <option value={"0"}>Select Variant</option>
          {variantDetails?.map((variantDetail) => (
            <option value={variantDetail.productid}>
              {variantDetail.variantname}
            </option>
          ))}
        </select>
      </div>
      {/* {variantDetails?.map((variantDetail) => (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant={
                variantDetail.productid == merchDetails.productid
                  ? "contained"
                  : "outlined"
              }
              onClick={() =>
                Router.push({
                  pathname: "/merch",
                  query: { productid: variantDetail.productid },
                })
              }
            >
              {variantDetail.variantname}
            </Button>
          </Grid>
        </Grid>
      ))} */}
    </div>
  );
};
export default MerchVariantCarousel;
