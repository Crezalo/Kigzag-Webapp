import React, { useEffect, useState } from "react";
import coming_soon from "../public/coming_soon.png";
import Image from "next/image";
import MerchCardGrid from "./MerchCardGrid";

interface MerchandiseTabProp {
  creator: string;
  onCreatorProfile: boolean;
}
const MerchandiseTab = ({ creator, onCreatorProfile }: MerchandiseTabProp) => {
  return (
    <div
      style={{ justifyContent: "center", textAlign: "center" }}
    >
      <MerchCardGrid creator={creator} onCreatorProfile={onCreatorProfile} />
    </div>
  );
};

export default MerchandiseTab;
