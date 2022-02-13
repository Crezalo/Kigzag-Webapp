import React from "react";

const Footer = () => {
  return (
    <footer
      className="blueTextBlackBackground"
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingBottom: 13,
      }}
    >
      <h1>© 2022 Xeldorado</h1> |<h1>All Rights Reserved</h1> |
      <h1>Made with ❤️</h1>
    </footer>
  );
};
export default Footer;
