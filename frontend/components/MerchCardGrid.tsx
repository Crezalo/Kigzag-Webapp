import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import merchCard from "./MerchCard";
import BasicModal from "./BasicModal";
import UploadMerchModal from "./UploadMerchModal";
import { getCreatorAllMerchData } from "../services/api-services/creator/merch_api";
import UpdateSeriesPrices from "./UpdateSeriesPrices";
import MerchCard from "./MerchCard";

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

interface GridItemProps {
  mid: {
    productid: string;
    creator: string;
    title: string;
    description: string;
    inventory: number;
    return_refund_policy: string;
    country_of_origin: string;
    price: number;
    discountpercentage: number;
    warrantyperiod: number;
    shippingcharges: number;
    createdat: string;
  };
  classes: any;
}
const GridItem = ({ mid, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <MerchCard merchDetails={mid} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface MerchCardGridProp {
  creator: string;
  onCreatorProfile: boolean;
  ignoreProductId?: string;
  onMerchPage?: boolean;
}
const MerchCardGrid = ({
  creator,
  onCreatorProfile,
  ignoreProductId,
  onMerchPage,
}: MerchCardGridProp) => {
  const classes = useStyles();

  const [merchDetails, setMerchDetails] = useState([
    {
      productid: "",
      creator: "",
      title: "",
      description: "",
      inventory: 0,
      return_refund_policy: "",
      country_of_origin: "",
      price: 0,
      discountpercentage: 0,
      warrantyperiod: 0,
      shippingcharges: 0,
      createdat: "",
    },
  ]);

  function compare(a: any, b: any) {
    if (a.createdat > b.createdat) {
      return -1;
    }
    if (a.createdat < b.createdat) {
      return 1;
    }
    return 0;
  }

  const GetVidDetails = () => {
    useEffect(() => {
      async function getData() {
        const res = await getCreatorAllMerchData(creator);
        if (res && typeof res !== "string") setMerchDetails(res.sort(compare));
      }
      getData();
    }, [creator]);
  };

  GetVidDetails();

  return (
    <div className="blueTextBlackBackground">
      {!(onCreatorProfile || onMerchPage) ? (
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <BasicModal
              modalButtonText={"New merch"}
              modalBody={<UploadMerchModal />}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* {onMerchPage ? (
        <h1 className="videoDiv h1" style={{ color: "#3B82F6" }}>
          Other Products
        </h1>
      ) : (
        <></>
      )} */}
      <Grid container spacing={1}>
        {merchDetails?.map((mid, index) => (
          <>
            {mid.productid && (!onMerchPage || index < 4) ? (
              <GridItem mid={mid} classes={classes} key={mid.productid} />
            ) : (
              <></>
            )}
          </>
        ))}
      </Grid>
    </div>
  );
};
export default MerchCardGrid;
