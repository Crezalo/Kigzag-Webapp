import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import MerchReviewCard from "./MerchReviewCard";
import BasicModal from "./BasicModal";
import { Typography } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";
import WriteReviewModal from "./WriteReviewModal";
import { checkProductValidReviewerData } from "../services/api-services/user/merch_api";

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
    reviewid: string;
    productid: string;
    username: string;
    ratings: number;
    commenttitle: string;
    commentdescription: string;
    createdat: string;
    updatedat: string;
  };
  classes: any;
}
const GridItem = ({ mid, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={11}>
      <MerchReviewCard merchReview={mid} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface MerchReviewGridProp {
  merchReviews: {
    reviewid: string;
    productid: string;
    username: string;
    ratings: number;
    commenttitle: string;
    commentdescription: string;
    createdat: string;
    updatedat: string;
  }[];
}

const MerchReviewGrid = ({ merchReviews }: MerchReviewGridProp) => {
  const classes = useStyles();
  const [checkUserStatus, setCheckUserStatus] = useState(0);
  const [reviewid, setReviewid] = useState("");
  const [orderid, setOrderid] = useState("");

  const CheckUserValid = () => {
    useEffect(() => {
      async function getData() {
        if (merchReviews[0]?.productid != "") {
          const result = await checkProductValidReviewerData(
            merchReviews[0]?.productid
          );
          if (typeof result !== "string") {
            setCheckUserStatus(result[0]);
            if (result[1] != "") {
              setReviewid(result[1]);
            }
            if (result[2] != "") {
              setOrderid(result[2]);
            }
          }
        }
      }
      getData();
    }, [merchReviews]);
  };

  CheckUserValid();

  return (
    <div className="blueTextBlackBackground">
      {checkUserStatus != 0 ? (
        <BasicModal
          modalButtonText={
            <Typography>
              <RateReviewIcon /> {checkUserStatus == 1 ? "Add" : "Update"}{" "}
              Review
            </Typography>
          }
          modalBody={
            <WriteReviewModal
              productid={merchReviews[0]?.productid}
              addorupdate={checkUserStatus}
              review={merchReviews.filter((x) => x.reviewid == reviewid)[0]}
              orderid={orderid}
            />
          }
        />
      ) : (
        <></>
      )}
      <Grid container spacing={1}>
        {merchReviews?.map((mid) => (
          <>
            {mid?.productid ? (
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
export default MerchReviewGrid;
