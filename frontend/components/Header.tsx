import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import kigzaglogo from "../public/kigzaglogo.png";
import AuthService from "../services/auth-services";
import ConnectToAccount from "./ConnectToAccount";
import SettingMenu from "./SettingMenu";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
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
          <Link href="/">
            <a style={{ marginTop: "2px" }}>
              <Image
                src={kigzaglogo}
                alt="Kigzag Logo"
                width={90}
                height={35}
              />
            </a>
          </Link>
          <Link href="/creators">
            <a
              className="mr-6 py-1"
              style={{ fontSize: 18, color: "#3b82f6", marginTop: "5px" }}
            >
              Creators
            </a>
          </Link>
          <SettingMenu />
        </nav>
      ) : (
        <ConnectToAccount />
      )}
    </>
  );
};
export default Header;
