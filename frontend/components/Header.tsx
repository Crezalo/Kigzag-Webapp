import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import kigzaglogo from "../public/kigzaglogo.png";
import AuthService from "../services/auth-services";
import ConnectToAccount from "./ConnectToAccount";
import SettingMenu from "./SettingMenu";
import BasicModal from "./BasicModal";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import AddToCart from "./AddToCart";
import { getCartItems } from "../services/api-services/user/cart_api";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

interface cartItem {
  cartid: string;
  user: string;
  creator: string;
  feature: number;
  productid: string;
  seriesid: string;
  quantity: number;
}

const Header = () => {
  const router = useRouter();
  const url = router.asPath;

  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
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

  const GetAllItems = () => {
    useEffect(() => {
      async function getData() {
        const result = await getCartItems();

        if (result[0]) setCartItems(result);
        else setCartItems([]);
      }
      getData();
    }, [username]);
    return true;
  };

  GetAllItems();

  const showCart = () => {
    return !url.includes("checkout");
  };
  const atHome = () => {
    return url === "/";
  };

  return (
    <>
      {isConnected ? (
        <nav
          style={{
            padding: "1px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {!atHome() ? (
            <Link legacyBehavior href="/">
              <a className="mr-6 py-1">
                <div className="modelButton">
                  <Button
                    style={{
                      background: "#3B82F6",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    <DashboardIcon />
                    {/*<span style={{ marginRight: "10px", marginLeft: "2px" }}>
                      Home
                    </span> */}
                  </Button>
                </div>
              </a>
            </Link>
          ) : (
            <></>
          )}
          {atHome() ? (
            <Link legacyBehavior href="/creators">
              <a className="mr-6 py-1">
                <div className="modelButton">
                  <Button
                    style={{
                      background: "#3B82F6",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    <SearchIcon />
                    {/* <span style={{ marginRight: "10px", marginLeft: "2px" }}>
                      Explore
                    </span> */}
                  </Button>
                </div>
              </a>
            </Link>
          ) : (
            <></>
          )}
          {showCart() ? (
            <div style={{ marginTop: "2px" }}>
              <BasicModal
                modalButtonText={
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      fontSize: "15px",
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                    {/* <span style={{ marginRight: "10px", marginLeft: "2px" }}>
                      Cart
                      ({cartItems?.length})
                    </span> */}
                  </span>
                }
                modalBody={<AddToCart showContinueToCheckoutButton={true} />}
              />
            </div>
          ) : (
            <></>
          )}
          <SettingMenu />
        </nav>
      ) : (
        <ConnectToAccount />
      )}
    </>
  );
};
export default Header;
