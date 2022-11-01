import React, { useEffect, useState } from "react";
import coming_soon from "../public/coming_soon.png";
import Image from "next/image";

interface TipsTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const TipsTab = ({ creator, onCreatorProfile }: TipsTabProp) => {
  return (
    <div
      className="blueTextBlackBackground"
      style={{ justifyContent: "center", textAlign: "center" }}
    >
      <Image src={coming_soon} alt="" width={500} height={500} />
    </div>
  );
};

export default TipsTab;
