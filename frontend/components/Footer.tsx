import React from "react";

const Footer = () => {
  return (
    <footer
    className="p-1 text-green-500 font-bold py-2 px-2"
    style={{
      backgroundColor: "black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      position: "relative",
      height: "50px",
      bottom: "0px",
      left: "0px",
      right: "0px",
      marginBottom: "0px",
    }}>
      <div 
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <h1>© 2022 Xeldorado</h1> | 
        <h1>All Rights Reserved</h1> | 
        <h1>Made with ❤️</h1>
      </div>
    </footer>
  );
};
export default Footer;
