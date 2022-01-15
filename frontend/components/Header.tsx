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
    <Web3ReactProvider getLibrary={getLibrary}>
      <nav
        className="p-1"
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <a>
            &nbsp;&nbsp;
            <Image
              src="/../public/favicon.ico"
              alt="Picture of the author"
              width={35}
              height={35}
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
    </Web3ReactProvider>
  );
};
export default Header;
