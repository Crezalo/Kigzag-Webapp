import { Paper } from "@material-ui/core";
import React from "react";
import CreatorCardGrid from "../components/CreatorsGrid";

export default function Creators() {
  const notes = [
    "500",
    "50",
    "5000",
    "500",
    "50",
    "5000",
    "500",
    "50",
    "5000",
    "15",
  ];
  return (
    // <Paper className="paperContainer">
    <div
      className="text-green-500 font-bold py-2 px-2"
      style={{
        backgroundColor: "black",
        backgroundImage: require("../assets/background.png"),
        justifyContent: "center",
        width: "100%",
        fontSize: 25,
      }}
    >
      <div style={{ marginTop: 25, marginLeft: 0 }}>
        <CreatorCardGrid notes={notes} />
        {/* <TokenBalance
            tokenAddress={"0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF"}
            symbol={"X"}
          /> */}
      </div>
    </div>
    // </Paper>
  );
}
