import AuthService from "../services/auth-services";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Box, Paper } from "@material-ui/core";
import OrderCard from "./OrderCard";
import { getUserVODData } from "../services/api-services/user/vod_api";
import { getUserVideoSeriesData } from "../services/api-services/user/video_series_api";
import { getUserLivestreamData } from "../services/api-services/user/livestream_api";
import { getUserVideoCallData } from "../services/api-services/user/video_call_api";
import { getUserDiscordData } from "../services/api-services/user/discord_api";
import { getUserCommunityComboData } from "../services/api-services/user/community_combo_api";
import { getUserAllOrdersData } from "../services/api-services/user/merch_api";
import { getUserAllTipData } from "../services/api-services/user/tipjar_api";
import { useScreenSize } from "../services/utility";

const useStylesModal = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    // display: "flex",
    // flexDirection: "column",
    // width: "50%",
    justifyContent: "center",
    margin: "10px 5px 20px 5px",
    // backgroundColor: "#3b82f6",
    // padding: theme.spacing(3, 4, 3),
    // overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "80vh",
    "&:hover": {
      boxShadow: "0 10px 18px 8px #173464",
      borderRadius: "2%",
    },
  },
}));

interface OrderCardGridProp {
  category: "Videos" | "Courses" | "Merch" | "Perq";
  refresh?: string;
}

const OrderCardGrid = ({ category }: OrderCardGridProp) => {
  const username = AuthService.getUsername();
  const classesModal = useStylesModal();
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const [orderData, setOrderData] = useState([
    {
      username: "",
      ordertype: -1,
      creator: "",
      seriesid: "",
      productid: "",
      expiry_date: "",
      type: 0,
      quantity: "0",
      buyingprice: 0,
      deliverystatus: "",
      deliverystatuslink: "",
      returnstatus: "",
      amount: 0,
      message: "",
      boughtat: "",
      tippedat: "",
    },
  ]);

  const UpdateOrderType = () => {
    useEffect(() => {
      var temp = orderData;
      var ordertype =
        category === "Videos"
          ? 0
          : category === "Courses"
          ? 1
          : category === "Merch"
          ? 2
          : category === "Perq"
          ? 3
          : -1;
      for (let i = 0; i < orderData.length; i++) {
        temp[i].ordertype = ordertype;
      }
      setOrderData(temp);
    }, [orderData]);
  };

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        let result = [];
        if (category == "Videos") {
          result = await getUserVODData();
        } else if (category == "Courses") {
          result = await getUserVideoSeriesData();
        } else if (category == "Merch") {
          result = await getUserAllOrdersData();
        } else if (category == "Perq") {
          result = await getUserAllTipData();
        }
        console.log(result);
        if (typeof result !== "string" && result[0]) {
          setOrderData(result);
        }
      }
      getData();
    }, [username]);
  };

  GetDetails();
  UpdateOrderType();

  return (
    <div
      className={
        ismobile ? "blueTextBlackBackgroundMobile" : "blueTextBlackBackground"
      }
    >
      <Box
        component="form"
        sx={{
          minWidth: 150,
          margin: "20px 5px 15px 5px",
        }}
      >
        <Grid container direction="row" spacing={1}>
          {orderData?.map((order, index) => (
            <>
              {(order?.creator != "" || order?.productid) &&
              order?.ordertype != -1 ? (
                <div className={classesModal.paper}>
                  <Grid item xs={4}>
                    <OrderCard order={order} key={index} />
                  </Grid>
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default OrderCardGrid;
