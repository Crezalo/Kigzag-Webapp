import AuthService from "../services/auth-services";
import Router from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSpecificUserData } from "../services/api-services/user_api";
import CreatorDP from "./CreatorDP";
import { getSpecificCreatorSeriesIdUserVideoSeriesData } from "../services/api-services/user/video_series_api";
import {
  getVideoDetails,
  getVideoThumbnail,
} from "../services/api-services/creator/video_api";
import {
  getCreatorSubscriptionData_1m,
  getCreatorSubscriptionData_1y,
  getCreatorSubscriptionData_3m,
  getCreatorSubscriptionData_Series,
} from "../services/api-services/creator/subscriptions_api";
import {
  getMerchThumbnail,
  getProductIdMerchData,
} from "../services/api-services/creator/merch_api";
import { truncateString } from "../services/utility";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import month from "../consts/months";

const useStylesModal = makeStyles((theme) => ({
  textfieldMsg: {
    width: "65vw",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
  },
}));

interface CreatorOrderCardProp {
  order: {
    username: string;
    ordertype: number;
    creator: string;
    seriesid: string;
    productid: string;
    expiry_date: string;
    type: number;
    quantity: string;
    buyingprice: number;
    deliverystatus: string;
    deliverystatuslink: string;
    returnstatus: string;
    amount: number;
    message: string;
    boughtat: string;
    tippedat: string;
  };
  title?: string;
  variantname?: string;
}
const CreatorOrderCard = ({
  order,
  title,
  variantname,
}: CreatorOrderCardProp) => {
  const username = AuthService.getUsername();
  const [displayPic, setDisplayPic] = useState("");
  const classesModal = useStylesModal();
  const deliveryStatus = ["Packing", "Shipped", "Delivered"];

  const getItemData = () => {
    useEffect(() => {
      async function getData() {
        if (order.ordertype == 3) {
          let res1 = await getMerchThumbnail(order.productid);
          if (res1[0]) setDisplayPic(res1[0]["signedurl"]);
        }
      }
      getData();
    }, [username]);
  };

  getItemData();

  return (
    <>
      {order.ordertype !== -1 && order?.creator != "" ? (
        <div
          className="cartItemCard pointer"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width:
              order?.ordertype == 2
                ? "35vw"
                : order?.ordertype == 3
                ? "100vw"
                : "25vw",
          }}
          onClick={() => {
            Router.push({
              pathname:
                order?.ordertype == 2
                  ? "/merch"
                  : order?.ordertype == 1
                  ? "/course"
                  : "/creatorprofile",
              query:
                order?.ordertype == 2
                  ? { productid: order.productid }
                  : order?.ordertype == 1
                  ? { courseid: order.seriesid }
                  : { address: order.creator },
            });
          }}
        >
          {order.ordertype !== 3 ? (
            <div
              style={{
                padding: "0px 5px 8px 15px",
                width: "55%",
              }}
            >
              <h1 style={{ fontSize: "14px" }}>{truncateString(title, 40)}</h1>
              <h1
                style={{
                  fontSize: "13px",
                  color: "grey",
                  fontWeight: "bold",
                }}
              >
                {truncateString(variantname, 100)}
              </h1>
              <h1
                style={{
                  fontSize: "13px",
                  color: "purple",
                  fontWeight: "bold",
                }}
              >
                Ordered on{" "}
                {new Date(Date.parse(order.boughtat)).getDate() +
                  " " +
                  month[new Date(Date.parse(order.boughtat)).getMonth()] +
                  " " +
                  new Date(Date.parse(order.boughtat)).getFullYear()}
              </h1>
              <h1
                style={{
                  fontSize: "13px",
                  color: "blue",
                  fontWeight: "bold",
                }}
              >
                {deliveryStatus[order.deliverystatus]}
              </h1>
            </div>
          ) : (
            <>
              <div className="cartItemCardImageElement">
                <CreatorDP creator={order.creator} height={90} width={90} />
              </div>
              <div
                style={{
                  padding: "0px 5px 8px 15px",
                }}
              >
                <h1
                  style={{
                    fontWeight: "bold",
                    marginTop: "5px",
                    color: "#3B82F6",
                  }}
                >
                  {order.creator}
                </h1>
                <h1 style={{ fontWeight: "bold", marginTop: "5px" }}>
                  ₹ {order.amount}
                </h1>
                <TextField
                  className={classesModal.textfieldMsg}
                  label="Message"
                  type="text"
                  multiline
                  variant="filled"
                  value={order.message}
                />
                <h1
                  style={{
                    fontSize: "13px",
                    color: "blue",
                    fontWeight: "bold",
                    marginTop: "5px",
                  }}
                >
                  Tipped on{" "}
                  {new Date(Date.parse(order.tippedat)).getDate() +
                    " " +
                    month[new Date(Date.parse(order.tippedat)).getMonth()] +
                    " " +
                    new Date(Date.parse(order.tippedat)).getFullYear()}
                </h1>
              </div>
            </>
          )}
          {order.ordertype == 2 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                float: "right",
              }}
            >
              <TextField
                label="Qty"
                type="number"
                size="small"
                variant="filled"
                value={order.quantity}
                style={{
                  width: "5vw",
                  padding: "5px",
                  marginRight: "10px",
                }}
              />
              <h1 style={{ fontWeight: "bold", marginTop: "5px" }}>
                ₹{order.buyingprice}
              </h1>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default CreatorOrderCard;
