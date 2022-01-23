import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import {
  chainIdSupported,
  formatBlockExplorerLink,
  networkName,
  shortenHex,
} from "../util";
import ETHBalance from "./ETHBalance";
import TokenBalance from "./TokenBalance";
import Router from "next/router";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    library,
    setError,
    deactivate,
  } = useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account);

  const isConnected = typeof account === "string" && !!library;

  if (error) {
    if (error.name == "UnsupportedChainIdError") {
      Router.reload();
      return (
        <div>
          <button
            className="w-full bg-red-500 text-white px-2 py-2 rounded"
            style={{ fontSize: 18, textAlign: "center" }}
            onClick={() => {
              Router.reload();
            }}
          >
            Wrong Network
          </button>
        </div>
      );
    }
    console.log(error.name);
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <button
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? (
              <button
                className="w-full bg-green-500 text-white px-2 py-2 rounded"
                style={{ fontSize: 18, textAlign: "center" }}
              >
                Connect to MetaMask
              </button>
            ) : (
              <button
                className="w-full bg-green-500 text-white px-2 py-2 rounded"
                style={{ fontSize: 18, textAlign: "center" }}
              >
                Connect to Wallet
              </button>
            )}
          </button>
        ) : (
          <button
            className="w-full bg-green-500 text-white px-2 py-2 rounded"
            style={{ fontSize: 18, textAlign: "center" }}
            onClick={startOnboarding}
          >
            Install Metamask
          </button>
        )}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <a
        {...{
          href: formatBlockExplorerLink("Account", [chainId, account, ""]),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
      >
        <button
          className="outline text-green-500 outline-offset-0 px-2 py-2 rounded"
          style={{ fontSize: 18, textAlign: "center", outlineWidth: "thin" }}
        >
          {isConnected && <ETHBalance />}
        </button>
      </a>
      <button
        className="w-full bg-green-500 text-white px-2 py-2 rounded"
        style={{ fontSize: 18, textAlign: "center" }}
        onClick={() => {
          deactivate();
        }}
      >
        {ENSName || `${shortenHex(account, 4)}`}
      </button>
    </div>
  );
};

{
  /* <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" /> */
}

export default Account;
