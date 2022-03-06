import { Web3ReactProvider } from "@web3-react/core";
import Link from "next/link";
import React from "react";
import getLibrary from "../getLibrary";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import ChainName from "./ChainName";
import Image from "next/image";
import kigzaglogo from "../public/kigzaglogo.png";

const Header = () => {
  const triedToEagerConnect = useEagerConnect();
  return (
    <nav
      style={{
        padding: "1px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <a style={{ marginTop: "2px", marginLeft: "5px" }}>
          <Image
            src={kigzaglogo}
            alt="Picture of the author"
            width={90}
            height={30}
          />
        </a>
      </Link>
      <Link href="/creators">
        <a className="mr-6 py-1" style={{ fontSize: 18, color: "#3B82F6" }}>
          Creators
        </a>
      </Link>
      <ChainName triedToEagerConnect={triedToEagerConnect} />
      <Account triedToEagerConnect={triedToEagerConnect} />
    </nav>
  );
};
export default Header;
