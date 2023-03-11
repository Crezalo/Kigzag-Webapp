import AuthService from "../services/auth-services";
import Router from "next/router";
import { useEffect, useState } from "react";
import { getMerchThumbnail } from "../services/api-services/creator/merch_api";
import { isMobile } from "react-device-detect";
import { useScreenSize } from "../services/utility";

interface MerchCardProp {
  merchDetails: {
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
}
const MerchCard = ({ merchDetails }: MerchCardProp) => {
  const username = AuthService.getUsername();

  const [merchThumb, setMerchThumb] = useState("");
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;

  const GetMerchThumbnail = () => {
    useEffect(() => {
      async function getData() {
        const result = await getMerchThumbnail(merchDetails.productid);
        setMerchThumb(result[0]["signedurl"]);
        console.log(merchThumb);
      }
      getData();
    }, [username]);
  };

  GetMerchThumbnail();

  return (
    <div
      className="videoCardTitle pointer"
      onClick={() => {
        Router.push({
          pathname: "/merch",
          query: { productid: merchDetails.productid },
        });
      }}
    >
      <section
        className={
          !ismobile
            ? "videoCard merchCardImageElement pointer"
            : "videoCard merchCardImageElementMobile pointer"
        }
      >
        {merchDetails.productid != "" && merchDetails.productid ? (
          <>
            <div className="videoCardImage">
              {merchThumb?.includes("https://") ? (
                <img
                  src={merchThumb}
                  alt="Loading ..."
                  className={
                    !ismobile
                      ? "merchCardImageElement"
                      : "merchCardImageElementMobile"
                  }
                />
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </section>
      <div style={{ padding: "0px 5px 8px 0px", textAlign: "center" }}>
        <div>
          <h1 style={{ fontSize: "16px" }}>{merchDetails.title}</h1>
        </div>
        <div>
          <h1
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3b82f6" }}
          >
            ₹ {merchDetails.price} only
          </h1>
        </div>
      </div>
    </div>
  );
};
export default MerchCard;
