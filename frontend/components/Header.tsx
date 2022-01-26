import { Web3ReactProvider } from "@web3-react/core";
import Link from "next/link";
import React from "react";
import getLibrary from "../getLibrary";
import useEagerConnect from "../hooks/useEagerConnect";
import Account from "./Account";
import ChainName from "./ChainName";
import Image from "next/image";

const Header = () => {
  const triedToEagerConnect = useEagerConnect();
  return (
    <nav
      style={{
        padding: "4px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <a style={{marginTop:"5px",marginLeft:"5px"}}>
          <Image
            src="/../public/Kigzaglogo.png"
            alt="Picture of the author"
            width={100}
            height={30}
          />
        </a>
      </Link>
      <Link href="/creators">
        <a className="mr-6 text-green-500 py-2" style={{ fontSize: 18 }}>
          Creators
        </a>
      </Link>
      <ChainName triedToEagerConnect={triedToEagerConnect} />
      <Account triedToEagerConnect={triedToEagerConnect} />
    </nav>
  );
};
export default Header;
