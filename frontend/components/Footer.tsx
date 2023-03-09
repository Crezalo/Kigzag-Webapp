import Link from "next/link";
import Image from "next/image";
import kigzaglogo from "../public/crezalo-logo-box-full.png";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="blueTextBlackBackground"
      style={{
        display: "flex",
        justifyContent: "center",
        // paddingLeft: "20vw",
        // paddingBottom: 13,
        fontSize: "12px",
      }}
    >
      <Link legacyBehavior href="/about">
        <a style={{ marginTop: "2px" }}>
          <div>
            <span style={{ color: "white", paddingLeft: "10px" }}>
              Powered By
            </span>
            <Image src={kigzaglogo} alt="Crezalo Logo" width={90} height={35} />
          </div>
        </a>
      </Link>
    </footer>
  );
};
export default Footer;
