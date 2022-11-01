import { useEffect, useState } from "react";
import Router from "next/router";
import AuthService from "../../services/auth-services";

const Account = () => {
  // manage connecting state for injected connector

  const isConnected =
    AuthService.validateCurrentUserRefreshToken() &&
    AuthService.validateCurrentUserRefreshToken();
  return (
    <>
      {isConnected ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className="w-full bg-blue-500 text-white px-2 py-1 rounded"
            style={{ fontSize: 18, textAlign: "center" }}
            onClick={() => {
              AuthService.logout();
            }}
          >
            {AuthService.getUsername()}
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className="w-full bg-blue-500 text-white px-2 py-1 rounded"
            style={{ fontSize: 18, textAlign: "center" }}
            onClick={() => {
              AuthService.logout();
            }}
          >
            {AuthService.getUsername()}
          </button>
        </div>
      )}
    </>
  );
};

{
  /* <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" /> */
}

export default Account;
