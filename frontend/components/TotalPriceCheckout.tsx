import { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  createTheme,
  FormControl,
  InputLabel,
  makeStyles,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Modal, Box, Fade, Grid } from "@mui/material";
import AuthService from "../services/auth-services";
import ClearIcon from "@mui/icons-material/Clear";
import {
  addCartItemData,
  deleteCartItemData,
  getCartItems,
  getOrderSummary,
  updateCartItemsData,
} from "../services/api-services/user/cart_api";
import CartItemCard from "./CartItemCard";
import Router from "next/router";
import {
  getCreatorSpecificPlanSubscriptionData_1m,
  getCreatorSpecificPlanSubscriptionData_1y,
  getCreatorSpecificPlanSubscriptionData_3m,
  getCreatorSubscriptionData_1m,
  getCreatorSubscriptionData_1y,
  getCreatorSubscriptionData_3m,
  getCreatorSubscriptionData_Series,
} from "../services/api-services/creator/subscriptions_api";
import { getUserData } from "../services/api-services/user_api";
import { getProductIdMerchData } from "../services/api-services/creator/merch_api";
import { getUserAllAddressData } from "../services/api-services/user/merch_api";

const useStylesModal = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    display: "flex",
    flexDirection: "column",
    // width: "50%",
    justifyContent: "center",
    margin: "0 20px 20px 20px",
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(3, 4, 3),
    // "&:hover": {
    //   boxShadow: "0 10px 18px 8px #173464",
    //   borderRadius: "2%",
    // },
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    margin: "20px 20px 10px 0px",
  },
  title: {
    fontWeight: "bold",
    margin: "10px 0 20px 0",
    color: "#3B82F6",
    textAlign: "center",
  },
}));

interface TotalPriceCheckoutProps {
  stage: string;
  refresh: any;
}

const TotalPriceCheckout = ({ stage, refresh }: TotalPriceCheckoutProps) => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalShippingCharges, setTotalShippingCharges] = useState(0);
  const [enableButton, setEnableButton] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [cartContainsMerch, setCartContainsMerch] = useState(false);

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

  const GetOrderSummary = () => {
    useEffect(() => {
      async function getData() {
        const result = await getOrderSummary();

        if (result[0]) setTotalPrice(result[0]);
        if (result[1]) setTotalShippingCharges(result[1]);
      }
      getData();
    }, [username, refresh]);
    return true;
  };

  GetOrderSummary();

  const CheckCartContainsMerch = () => {
    useEffect(() => {
      async function getData() {
        const result = await getCartItems();

        if (result[0]) {
          for (let i = 0; i < result.length; i++) {
            if (result[i].feature === 2) {
              setCartContainsMerch(true);
              break;
            }
          }
        }
      }
      getData();
    }, [username]);
    return true;
  };
  CheckCartContainsMerch();

  const CheckAddressAvailable = () => {
    useEffect(() => {
      async function getData() {
        const result = await getUserAllAddressData();

        if (result[0]) setEnableButton(true);
        else setEnableButton(false);
      }
      if (stage === "0") setEnableButton(true);
      else getData();
    }, [username]);
    return true;
  };
  CheckAddressAvailable();

  return (
    <div className={classesModal.paper}>
      <Typography
        style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}
      >
        Order Summary
      </Typography>
      <hr />
      <hr />
      <Typography
        style={{ fontSize: "18px", color: "black", padding: "5px 0 5px 0" }}
      >
        Items: ₹{totalPrice}
      </Typography>
      <hr />
      <Typography
        style={{ fontSize: "18px", color: "black", padding: "5px 0 5px 0" }}
      >
        Delivery: ₹{totalShippingCharges}
      </Typography>
      <hr />
      <Typography
        style={{ fontSize: "18px", color: "black", padding: "5px 0 5px 0" }}
      >
        Total: ₹{totalPrice + totalShippingCharges}
      </Typography>
      <hr />
      <Button
        style={{
          background: "#3B82F6",
          color: "white",
          marginBottom: "2px",
        }}
        variant="contained"
        onClick={() => {
          if (enableButton) {
            Router.push({
              pathname: "/checkout",
              query: { stage: stage === "0" && cartContainsMerch ? 1 : 2 },
            });
          } else {
            setErrorMsg("Please add address");
          }
        }}
      >
        {stage === "0" && cartContainsMerch ? "Proceed To Buy" : "Buy"}
      </Button>
      <Typography style={{ color: "red", textAlign: "center" }}>
        {errorMsg}
      </Typography>
    </div>
  );
};
export default TotalPriceCheckout;
