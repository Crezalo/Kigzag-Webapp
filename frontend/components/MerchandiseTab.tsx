import React, { useEffect, useState } from "react";
import coming_soon from "../public/coming_soon.png";
import Image from "next/image";

interface MerchandiseTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const MerchandiseTab = ({ creator, onCreatorProfile }: MerchandiseTabProp) => {
  return (
    <div
      className="blueTextBlackBackground"
      style={{ justifyContent: "center", textAlign: "center" }}
    >
      <Image src={coming_soon} alt="" width={500} height={500} />
    </div>
  );
};

export default MerchandiseTab;
