import Jazzicon from "react-jazzicon";
import Jdenticon from "react-jdenticon";
import Router from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSpecificUserData } from "../services/api-services/user_api";
import CreatorDP from "./CreatorDP";

interface SubCardProp {
  subscription: {
    creator: string;
    expiry_date: string;
    type: number;
  };
}
const SubCard = ({ subscription }: SubCardProp) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [displayPicture, setDisplayPicture] = useState("");

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (subscription.creator != "") {
          const result = await getSpecificUserData(
            subscription.creator,
            "displaypicture"
          );
          setDisplayPicture(result[0]?.displaypicture);
        }
      }
      getData();
    }, [subscription.creator]);
  };

  GetUser();

  return (
    <>
      {subscription.creator ? (
        <>
          <section className="purchaseCard">
            <div className="reqImage">
              <CreatorDP creator={subscription.creator} height={50} width={50} />
              <h2
                className="hovergreen viewMore pointer"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "5px 0 0 15px",
                }}
                onClick={() =>
                  Router.push({
                    pathname: "/creatorprofile",
                    query: { address: subscription.creator },
                  })
                }
              >
                {subscription.creator}
              </h2>
            </div>
            <div
              style={{
                width: "100%",
                float: "left",
                paddingLeft: "20px",
                fontSize: 16,
                justifyContent: "space-evenly",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "15px", margin: "15px 0px 15px 0px" }}>
                Expires on{" "}
                {new Date(Date.parse(subscription.expiry_date)).getDate() +
                  " " +
                  month[
                    new Date(Date.parse(subscription.expiry_date)).getMonth()
                  ] +
                  " " +
                  new Date(Date.parse(subscription.expiry_date)).getFullYear()}
              </p>
              <p
                className={
                  subscription.type == 0
                    ? "Pending"
                    : subscription.type == 1
                    ? "AcceptedAndWaiting"
                    : "Completed"
                }
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  borderRadius: "35%",
                  margin: "15px 60px 25px 60px",
                  justifyContent: "center",
                  padding: "1px",
                }}
              >
                {subscription.type == 0
                  ? "1 month"
                  : subscription.type == 1
                  ? "3 month"
                  : "1 year"}
              </p>
            </div>
            <div style={{ margin: "140px" }}></div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default SubCard;
