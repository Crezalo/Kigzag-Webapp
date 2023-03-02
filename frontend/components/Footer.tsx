import Link from "next/link";
import Image from "next/image";
import kigzaglogo from "../public/kigzaglogo.png";
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
      {/* <h1>
        © 2022{" "}
        <a href="https://kigzag.com" target="_blank" rel="noreferrer">
          kigzag.com
        </a>
      </h1> */}
      <Link legacyBehavior href="/">
        <a style={{ marginTop: "2px" }}>
          <div>
            <span>Powered By</span>
            <Image src={kigzaglogo} alt="Kigzag Logo" width={90} height={35} />
          </div>
        </a>
      </Link>
    </footer>
  );
};
export default Footer;
