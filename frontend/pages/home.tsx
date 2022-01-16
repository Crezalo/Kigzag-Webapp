import Image from "next/image";
import React from "react";
import TokenBalance from "../components/TokenBalance";
import NFTCardGrid from "../components/NFTCardGrid";

export default function Home() {
  const notes = ["500", "50", "5000"];
  return (
    <>
      <div
        className="text-green-500 font-bold py-2 px-2"
        style={{
          backgroundColor: "black",
          justifyContent: "center",
          width: "100%",
          fontSize: 25,
        }}
      >
        <div style={{ marginTop: 25, marginLeft: 50 }}>
          <NFTCardGrid notes={notes} />
          {/* <Image
            src="/../public/profilepic.png"
            alt="Picture of the author"
            width={180}
            height={180}
          />
          <TokenBalance
            tokenAddress={"0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF"}
            symbol={"X"}
          /> */}
        </div>
      </div>
    </>
  );
}
