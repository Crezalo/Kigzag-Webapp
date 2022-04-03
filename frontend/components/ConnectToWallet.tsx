import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useWeb3React } from "@web3-react/core";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { injected } from "../connectors";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import ReactGoogleLogin from "react-google-login";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "#3B82F6",
    boxShadow: "0 1px 1px 3px #3B82F6",
    padding: theme.spacing(4, 4, 4, 4),
    transition: "0.3s",
    width: "300px",
    backgroundColor: "black",
    borderRadius: "5%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      boxShadow: "0 10px 18px 8px #3B82F6",
    },
  },
}));

const ConnectToWallet = () => {
  const classesModal = useStylesModal();

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

  const isConnected = typeof account === "string" && !!library;

  const onResponse = (resp) => {
    console.log("resp");
    console.log(resp);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classesModal.modal}
      open={true}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <div className={classesModal.paper}>
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
                  className="w-full bg-blue-500 text-white px-2 py-2 rounded"
                  style={{ fontSize: 18, textAlign: "center" }}
                >
                  Connect to MetaMask
                </button>
              ) : (
                <button
                  className="w-full bg-blue-500 text-white px-2 py-2 rounded"
                  style={{ fontSize: 18, textAlign: "center" }}
                >
                  Connect to Wallet
                </button>
              )}
            </button>
          ) : (
            <button
              className="w-full bg-blue-500 text-white px-2 py-2 rounded"
              style={{ fontSize: 18, textAlign: "center" }}
              onClick={startOnboarding}
            >
              Install Metamask
            </button>
          )}
          {/* <ReactGoogleLogin
            clientId="713302413250-algumu64p8er3g2in55i40ghq4mj6n2h.apps.googleusercontent.com" // We created this earlier, remember?
            buttonText="Login with Google"
            onSuccess={onResponse}
            onFailure={onResponse}
          /> */}
        </div>
      </Fade>
    </Modal>
  );
};
export default ConnectToWallet;
