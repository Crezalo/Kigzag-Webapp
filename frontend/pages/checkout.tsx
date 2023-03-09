import React, { useEffect, useState } from "react";
import AddToCart from "../components/AddToCart";
import TotalPriceCheckout from "../components/TotalPriceCheckout";
import queryString from "query-string";
import AuthService from "../services/auth-services";
import { useRouter } from "next/router";
import AddressAddSelect from "../components/AddressAddSelect";
import Head from "next/head";

export default function Checkout() {
  const router = useRouter();
  let { stage } = router.query;

  if (!stage) {
    const url = router.asPath;
    stage = queryString.parseUrl(url)?.query?.stage;
  }
  const [address, setAddress] = useState({
    addressid: "",
    username: "",
    type: "",
    addressline1: "",
    addressline2: "",
    city: "",
    postalcode: 0,
    country: "",
    mobileno: 0,
  });
  const [cartItems, setCartItems] = useState([]);
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [refresh, setRefresh] = useState(Math.random().toString(36).slice(2));
  // checkoutStage : 0 => Verify cart Items
  //                 1 => Add/Select User Address
  //                 2 => Payment Processing
  //                 3 => Success/Failure

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const updateUsername = () => {
    useEffect(() => {
      setUsername(AuthService.getUsername());
    }, [isConnected]);
  };

  updateUsername();

  // console.log(cartItems);

  return (
    <div>
      <Head>
        <title>Crezalo: Checkout</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {stage === "0" ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "70vw", margin: "5%" }}>
            <AddToCart
              showContinueToCheckoutButton={false}
              setCartItemsUp={setCartItems}
              setRefresh={setRefresh}
            />
          </div>
          <div style={{ width: "30vw", margin: "5%" }}>
            {cartItems.length > 0 ? (
              <TotalPriceCheckout stage="0" refresh={refresh} />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      {stage === "1" ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "60vw", margin: "5%" }}>
            <AddressAddSelect setAddress={setAddress} />
          </div>
          <div style={{ width: "30vw", margin: "5%" }}>
            {cartItems?.length > 0 ? (
              <TotalPriceCheckout stage="1" refresh={refresh} />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      {stage === "2" ? <div>{/* Paytm Js Checkout */}</div> : <></>}
    </div>
  );
}
