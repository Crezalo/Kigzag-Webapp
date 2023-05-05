import { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  createTheme,
  FormControl,
  InputLabel,
  makeStyles,
  NativeSelect,
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
  updateCartItemsData,
} from "../services/api-services/user/cart_api";
import CartItemCard from "./CartItemCard";
import Router, { useRouter } from "next/router";
import { StringDecoder } from "string_decoder";
import { reloadWithQueryParams, useScreenSize } from "../services/utility";
import guestCred from "../consts/guestcred";
import Image from "next/image";
import loading from "../public/loadingCrezalo.gif";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    // display: "flex",
    flexDirection: "column",
    // width: "50%",
    justifyContent: "center",
    margin: "0 20px 20px 0px",
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(3, 4, 3),
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "80vh",
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
  label: {
    fontWeight: "bold",
    margin: "5px 0 5px 0",
    color: "#3B82F6",
  },
  edit: {
    margin: "10px",
    "&:hover": {
      color: "rgb(76, 175, 80)",
    },
  },
  error: {
    color: "red",
    fontSize: "16px",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  textfield: {
    // width: "80%",
    margin: "5px 0 5px 0",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
    // "& label.Mui-focused": {
    //   color: "white",
    // },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3b82f6",
    },
  },
}));

const toolTipTheme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "15px",
      },
    },
  },
});

interface AddToCartProp {
  creator?: string;
  feature?: number;
  productid?: string;
  seriesid?: string;
  qty?: number;
  setCartItemsUp?: any;
  setRefresh?: any;
  showContinueToCheckoutButton: boolean;
}

interface cartItem {
  cartid: string;
  user: string;
  creator: string;
  feature: number;
  productid: string;
  seriesid: string;
  quantity: number;
}

const AddToCart = ({
  creator,
  feature,
  productid,
  seriesid,
  qty,
  setCartItemsUp,
  setRefresh,
  showContinueToCheckoutButton,
}: AddToCartProp) => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const minQty = 1;
  const maxQty = 9;
  const [cartItems, setCartItems] = useState<cartItem[]>([
    {
      cartid: "",
      user: "",
      creator: "",
      feature: -1,
      productid: "",
      seriesid: "",
      quantity: 0,
    },
  ]);
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;
  const router = useRouter();

  function compare(a: any, b: any) {
    if (a.feature < b.feature) {
      return -1;
    }
    if (a.feature > b.feature) {
      return 1;
    }
    return 0;
  }

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

  const CheckGuestUser = () => {
    useEffect(() => {
      async function checkGuestUser() {
        if (username == guestCred[0]) {
          AuthService.logout();
          reloadWithQueryParams(router);
        }
      }
      checkGuestUser();
    }, [username]);
  };

  CheckGuestUser();

  const PushRecentItem = () => {
    useEffect(() => {
      async function pushData() {
        if (creator) {
          const result = await addCartItemData(
            creator,
            feature,
            seriesid,
            productid,
            qty
          );
          console.log(result);
          if (result[0] && typeof result !== "string") {
            setCartItems(result.sort(compare));
          }
        }
      }
      pushData();
    }, [username]);
  };

  const GetAllItems = () => {
    useEffect(() => {
      async function getData() {
        const result = await getCartItems();
        if (result[0] && typeof result !== "string") {
          setCartItems(result.sort(compare));
          if (setCartItemsUp) setCartItemsUp(result.sort(compare));
        } else {
          setCartItems([]);
          if (setCartItemsUp) setCartItemsUp([]);
        }
      }
      getData();
    }, [username]);
    return true;
  };

  function updateQuantityInCart(cartItem: cartItem, qy: number) {
    cartItem.quantity = qy;
    return cartItem;
  }

  const updateQty = async (cartid: string, qy: number) => {
    let result = await updateCartItemsData(cartid, qy);
    var temp = cartItems?.map((i) =>
      i.cartid === cartid ? updateQuantityInCart(i, qy) : i
    );
    if (result[0] && typeof result !== "string") {
      setCartItems(temp.sort(compare));
      if (setCartItemsUp) setCartItemsUp(temp.sort(compare));
      if (setRefresh) setRefresh(Math.random().toString(36).slice(2));
    }
  };

  GetAllItems();
  PushRecentItem();
  GetAllItems();

  const deleteItem = async (cartid) => {
    let result = await deleteCartItemData(cartid);
  };

  const removeItem = (index) => {
    setCartItems(cartItems?.filter((o, i) => index !== i));
    if (setCartItemsUp)
      setCartItemsUp(cartItems?.filter((o, i) => index !== i));
    if (setRefresh) setRefresh(Math.random().toString(36).slice(2));
  };

  console.log(cartItems);

  return (
    <div
      className={classesModal.paper}
      style={{ width: ismobile ? "90vw" : "50vw" }}
    >
      {username !== guestCred[0] ? (
        <>
          {(cartItems[0]?.feature != -1 && cartItems[0]?.cartid != "") ||
          cartItems?.length == 0 ? (
            <>
              {cartItems?.length > 0 ? (
                <div>
                  <Typography
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Cart
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      minWidth: 150,
                      margin: "20px 5px 15px 5px",
                    }}
                  >
                    <>
                      {Array.from(cartItems).map((item, index) => {
                        return (
                          <>
                            {item?.cartid ? (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: ismobile ? "70vw" : "40vw",
                                  }}
                                >
                                  <CartItemCard cartItem={item} />
                                  {item.feature == 2 ? (
                                    <div
                                      style={{
                                        width: ismobile ? "20vw" : "20%",
                                        padding: ismobile ? "0%" : "2px",
                                        marginRight: ismobile ? "0%" : "5%",
                                      }}
                                    >
                                      <TextField
                                        type="number"
                                        size="small"
                                        InputLabelProps={{
                                          shrink: true,
                                        }}
                                        variant="outlined"
                                        inputProps={{
                                          min: minQty,
                                          max: maxQty,
                                        }}
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
                                          width: ismobile ? "20vw" : "5vw",
                                          padding: "5px",
                                          marginRight: "10px",
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                  <ClearIcon
                                    sx={{
                                      color: "grey",
                                      height: "30px",
                                      margin: "5px",
                                    }}
                                    className="pointer"
                                    onClick={() => {
                                      deleteItem(item.cartid);
                                      removeItem(index);
                                    }}
                                  />
                                </div>
                                <hr />
                                <hr />
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        );
                      })}
                    </>
                  </Box>
                  {/* <div style={{ textAlign: "right" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
              ₹ {price} Total
            </h1>
          </div> */}
                  {showContinueToCheckoutButton ? (
                    <Button
                      style={{
                        background: "#3B82F6",
                        color: "white",
                        marginBottom: "2px",
                      }}
                      variant="contained"
                      onClick={() => {
                        Router.push({
                          pathname: "/checkout",
                          query: { stage: 0 },
                        });
                      }}
                    >
                      Continue to Checkout
                    </Button>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <h1
                  style={{
                    fontSize: "25px",
                    color: "grey",
                    margin: "5px",
                    textAlign: "center",
                  }}
                >
                  Cart is empty
                </h1>
              )}{" "}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                borderRadius: "5px",
              }}
            >
              <Image
                src={loading}
                height="150"
                width="150"
                alt={""}
                style={{ width: "150px", height: "150px" }}
              />
            </div>
          )}
        </>
      ) : (
        <h1
          style={{
            fontSize: "25px",
            color: "grey",
            margin: "5px",
            textAlign: "center",
          }}
        >
          Please login with User Account!!!
        </h1>
      )}
    </div>
  );
};
export default AddToCart;
