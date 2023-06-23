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
import { truncateString, useScreenSize } from "../services/utility";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import month from "../consts/months";
import { clickEvent } from "../services/analytics";

const useStylesModal = makeStyles((theme) => ({
  textfieldMsg: {
    width: "65vw",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
  },
}));

interface OrderCardProp {
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
}
const OrderCard = ({ order }: OrderCardProp) => {
  const username = AuthService.getUsername();
  const [title, setTitle] = useState("");
  const [displayPic, setDisplayPic] = useState("");
  const [variantName, setVariantName] = useState("");
  const classesModal = useStylesModal();
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const getItemData = () => {
    useEffect(() => {
      async function getData() {
        if (order.ordertype == 0) {
          setTitle("Premium Videos from " + order.creator);
          setVariantName(
            order.type == 0 ? "1 month" : order.type == 1 ? "3 month" : "1 year"
          );
        } else if (order.ordertype == 1) {
          setVariantName(
            order.type == 0 ? "1 month" : order.type == 1 ? "3 month" : "1 year"
          );
          let res = await getVideoDetails(order.seriesid);
          if (res[0]) setTitle(res[0].title);

          let res1 = await getVideoThumbnail(order.seriesid);
          if (res1[0]) setDisplayPic(res1[0]["signedurl"]);
        } else if (order.ordertype == 2) {
          let res = await getProductIdMerchData(order.productid);
          if (res[0]) {
            setTitle(res[0].title);
            setVariantName(res[0].variantname);
          }
          let res1 = await getMerchThumbnail(order.productid);
          if (res1[0]) setDisplayPic(res1[0]["signedurl"]);
        } else if (order.ordertype == 3) {
          let res1 = await getMerchThumbnail(order.productid);
          if (res1[0]) setDisplayPic(res1[0]["signedurl"]);
        }
      }
      getData();
    }, [username, order]);
  };

  getItemData();

  return (
    <>
      {order.ordertype !== -1 && order?.creator != "" ? (
        <div
          className={ismobile ? "cartItemCardMobile" : "cartItemCard pointer"}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: ismobile
              ? "100vw"
              : order?.ordertype == 2
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
            clickEvent(
              order?.ordertype == 2
                ? "RedirectFromCartToMerchPage"
                : order?.ordertype == 1
                ? "RedirectFromCartToCoursePage"
                : "RedirectFromCartToCreatorProfilePage"
            );
          }}
        >
          <div
            className={
              ismobile
                ? "cartItemCardImageElementMobile"
                : "cartItemCardImageElement"
            }
          >
            {order.ordertype == 0 || order.ordertype == 3 ? (
              <CreatorDP creator={order.creator} height={90} width={90} />
            ) : (
              <>
                {displayPic?.includes("https://") ? (
                  <img
                    src={displayPic}
                    alt="Loading ..."
                    className={
                      ismobile
                        ? "cartItemCardImageElementMobile"
                        : "cartItemCardImageElement"
                    }
                  />
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
          {order.ordertype !== 3 ? (
            <div
              style={{
                padding: "0px 5px 8px 15px",
                width: ismobile && order.ordertype === 2 ? "40%" : "55%",
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
                {truncateString(variantName, 100)}
              </h1>
              {order.ordertype === 0 || order.ordertype === 1 ? (
                <h1
                  style={{
                    fontSize: "13px",
                    color:
                      Date.parse(order.expiry_date) > Date.now()
                        ? "blue"
                        : "red",
                    fontWeight: "bold",
                  }}
                >
                  {Date.parse(order.expiry_date) > Date.now()
                    ? "Expires"
                    : "Expired"}{" "}
                  on{" "}
                  {new Date(Date.parse(order.expiry_date)).getDate() +
                    " " +
                    month[new Date(Date.parse(order.expiry_date)).getMonth()] +
                    " " +
                    new Date(Date.parse(order.expiry_date)).getFullYear()}
                </h1>
              ) : (
                <h1
                  style={{
                    fontSize: "13px",
                    color: "blue",
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
              )}
            </div>
          ) : (
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
                  width: ismobile ? "15vw" : "5vw",
                  padding: "5px",
                  marginRight: "10px",
                }}
              />
              {/* <TextField
                  type="number"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  inputProps={{ min: minQty, max: maxQty }}
                  value={item.quantity}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      var temp = cartItems?.map((i) =>
                        i.cartid === item.cartid
                          ? updateQuantityInCart(i, 1)
                          : i
                      );
                      setCartItems(temp.sort(compare));
                      return;
                    }
                    const value = +e.target.value;
                    if (value < minQty) {
                      updateQty(item.cartid, minQty);
                    } else {
                      updateQty(item.cartid, value);
                    }
                  }}
                  style={{
                    width: "5vw",
                    padding: "5px",
                    marginRight: "10px",
                  }}
                /> */}
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
export default OrderCard;
