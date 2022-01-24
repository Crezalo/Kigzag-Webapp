import Image from "next/image";
import React from "react";
import HomePageTabs from "../components/HomePageTabs";

export default function Home() {
  return (
    <div
      className="greenTextBlackBackground"
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        width: "100%",
        fontSize: 25,
      }}
    >
      <div style={{ display: "flex" }}>
        <div className="creatorImage">
          <Image
            src="/../public/xeldorado.png"
            alt="Picture of the author"
            width={180}
            height={180}
          />
        </div>

        <div className="description">
          <div>Name: Token Name</div>
          <div>Symbol: Sym</div>
          <div>Sym: 5USDC</div>
          <div>Social Handles</div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}></div>
      <HomePageTabs />
    </div>
  );
}
