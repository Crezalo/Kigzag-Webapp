import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x381F20437A607dbb9A7C7ecCa9D912F6d9b5A469";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div>
        <Head>
          <title>Eldorado</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      {/* <br/> */}
      <div style={{ justifyContent: "center", width: "100%" }}>
        <div
          className="text-green-500 font-bold py-2 px-2"
          style={{ width: "100%", fontSize: 25 }}
        >
          <div style={{ marginTop: 25, marginLeft: 50 }}>
            <Image
              src="/../public/profilepic.png"
              alt="Picture of the author"
              width={180}
              height={180}
            />
            <TokenBalance
              tokenAddress={"0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF"}
              symbol={"X"}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
