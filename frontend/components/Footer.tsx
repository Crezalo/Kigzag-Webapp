import React from "react";

const Footer = () => {
  return (
    <footer
      className="blueTextBlackBackground"
      style={{
        display: "flex",
        justifyContent: "left",
        paddingLeft: "50px",
        paddingBottom: 13,
        fontSize: "12px",
      }}
    >
      <h1>
        © 2022{" "}
        <a href="https://kigzag.com" target="_blank" rel="noreferrer">
          kigzag.com
        </a>
      </h1>
    </footer>
  );
};
export default Footer;
