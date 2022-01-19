import { Paper } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import HomePageTabs from "../components/HomePageTabs";

export default function Home() {
  return (
    // <Paper className="paperContainer">
    <div
      className="text-green-500 font-bold py-2 px-2"
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
            src="/../public/favicon.png"
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
    // </Paper>
  );
}
