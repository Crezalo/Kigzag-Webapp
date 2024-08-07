import AuthService from "../services/auth-services";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
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
import { truncateString, useScreenSize } from "../services/utility";
import { getUserData } from "../services/api-services/user_api";
import {
  getMerchThumbnail,
  getProductIdMerchData,
} from "../services/api-services/creator/merch_api";
import CreatorDP from "./CreatorDP";
import { clickEvent } from "../services/analytics";

interface cartItem {
  cartid: string;
  user: string;
  creator: string;
  feature: number;
  productid: string;
  seriesid: string;
  quantity: number;
}

interface CartItemCardProps {
  cartItem: cartItem;
}

const CartItemCard = ({ cartItem }: CartItemCardProps) => {
  const username = AuthService.getUsername();
  const [title, setTitle] = useState("");
  const [displayPic, setDisplayPic] = useState("");
  const [price, setPrice] = useState(0);
  const [variantName, setVariantName] = useState("");
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const getItemData = () => {
    useEffect(() => {
      async function getData() {
        if (cartItem.feature == 0) {
          setTitle("Premium Videos from " + cartItem.creator);
          if (cartItem.quantity == 1) {
            const result = await getCreatorSubscriptionData_1m(
              cartItem.creator
            );
            console.log(result[0]);
            if (result[0]) setPrice(result[0].video_on_demand);
          } else if (cartItem.quantity == 3) {
            const result = await getCreatorSubscriptionData_3m(
              cartItem.creator
            );
            if (result[0]) setPrice(result[0].video_on_demand);
          } else {
            const result = await getCreatorSubscriptionData_1y(
              cartItem.creator
            );
            if (result[0]) setPrice(result[0].video_on_demand);
          }
          setVariantName(
            cartItem.quantity == 1
              ? "1 month"
              : cartItem.quantity == 3
              ? "3 month"
              : "1 year"
          );
          // const result = await getUserData(cartItem.creator);
          // if (result[0]) setDisplayPic(result[0].displaypicture);
        } else if (cartItem.feature == 1) {
          let result = await getCreatorSubscriptionData_Series(
            cartItem.seriesid
          );
          if (cartItem.quantity == 1) {
            if (result[0]) setPrice(result[0].onemonth);
          } else if (cartItem.quantity == 3) {
            if (result[0]) setPrice(result[0].threemonths);
          } else {
            if (result[0]) setPrice(result[0].oneyear);
          }
          setVariantName(
            cartItem.quantity == 1
              ? "1 month"
              : cartItem.quantity == 3
              ? "3 months"
              : "1 year"
          );
          let res = await getVideoDetails(cartItem.seriesid);
          if (res[0]) setTitle(res[0].title);

          let res1 = await getVideoThumbnail(cartItem.seriesid);
          if (res1[0]) setDisplayPic(res1[0]["signedurl"]);
        } else {
          let res = await getProductIdMerchData(cartItem.productid);
          if (res[0]) {
            setTitle(res[0].title);
            setVariantName(res[0].variantname);
            setPrice(res[0].price);
          }
          let res1 = await getMerchThumbnail(
            cartItem.productid.split("_")[2] == "1"
              ? cartItem.productid
              : cartItem.productid.split("_")[0]
          );
          if (res1[0]) setDisplayPic(res1[0]["signedurl"]);
        }
      }
      getData();
    }, [username, cartItem]);
  };

  getItemData();

  return (
    <div className={ismobile ? "cartItemCardMobile" : "cartItemCard pointer"}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          float: "left",
          width: "65%",
          marginBottom: "10px",
        }}
        onClick={() => {
          Router.push({
            pathname:
              cartItem.feature == 2
                ? "/merch"
                : cartItem.feature == 1
                ? "/course"
                : "/creatorprofile",
            query:
              cartItem.feature == 2
                ? { productid: cartItem.productid }
                : cartItem.feature == 1
                ? { courseid: cartItem.seriesid }
                : { address: cartItem.creator },
          });
          clickEvent(cartItem.feature == 2
            ? "RedirectFromCartToMerchPage"
            : cartItem.feature == 1
            ? "RedirectFromCartToCoursePage"
            : "RedirectFromCartToCreatorProfilePage");
        }}
      >
        {ismobile ? (
          <></>
        ) : (
          <div className="cartItemCardImageElement">
            {cartItem.feature == 0 ? (
              <CreatorDP creator={cartItem.creator} height={125} width={125} />
            ) : (
              <>
                {displayPic?.includes("https://") ? (
                  <img
                    src={displayPic}
                    alt="Loading ..."
                    className="cartItemCardImageElement"
                  />
                ) : (
                  <div className="cartItemCardImageElement shimmer"></div>
                )}
              </>
            )}
          </div>
        )}
        <div
          style={{
            padding: "0px 5px 8px 15px",
            height: "70px",
            width: ismobile ? "100%" : "90%",
          }}
        >
          <h1 style={{ fontSize: "14px" }}>{truncateString(title, 40)}</h1>
          <h1 style={{ fontSize: "13px", color: "grey", fontWeight: "bold" }}>
            {truncateString(variantName, 100)}
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          float: "right",
        }}
      >
        <h1 style={{ fontWeight: "bold", marginTop: "5px" }}>₹{price}</h1>
      </div>
    </div>
  );
};
export default CartItemCard;
