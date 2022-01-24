import React from "react";
import CreatorCardGrid from "../components/CreatorCardGrid";

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
    <div
      className="greenTextBlackBackground"
      style={{
        backgroundImage: require("../assets/background.png"),
        justifyContent: "center",
        width: "100%",
        fontSize: 25,
      }}
    >
      <div style={{ marginTop: 25, marginLeft: 0 }}>
        <CreatorCardGrid notes={notes} />
      </div>
    </div>
  );
}
