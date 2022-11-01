import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@mui/material/Modal';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  GoogleLogin,
  GoogleLogout,
  useGoogleLogin,
  useGoogleLogout,
} from "react-google-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import AuthService from "../services/auth-services";

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
  text: {
    color: "white",
    fontSize: "18px",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: "18px",
    textAlign: "center",
    marginBottom: "10px",
  },
  link: {
    color: "#3B82F6",
    fontSize: "18px",
    textAlign: "center",
    cursor: "pointer",
  },
  textCont: {
    diplay: "flex",
    flexDirection: "row",
    marginTop: "10px",
  },
  input: {
    width: "100%",
    height: "35px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: "35px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    textAlign: "center",
    color: "#3B82F6",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#3B82F6",
      color: "white",
    },
  },
}));

const ConnectToAccount = () => {
  const classesModal = useStylesModal();

  const [haveAccount, setHaveAccount] = useState(false);
  const [username, setUsername] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showRegGoogle, setShowRegGoogle] = useState(false);
  const inputRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const login = async (resp: any) => {
    const result = await AuthService.login("", "", resp.tokenId, 1);
    setIsConnected(result);
    if (result) window.location.reload();
  };

  const register = async (resp: any) => {
    const result = await AuthService.register(
      "",
      1,
      resp.tokenId,
      "",
      username,
      "",
      "",
      "",
      false,
      "",
      "",
      "",
      "",
      ""
    );
    if (typeof result === "string") {
      if (result.includes("users_emailaddress_key")) {
        setErrorMsg("This google account is already a user");
      } else if (result.includes("users_username_key")) {
        setErrorMsg("This username is already a user");
      } else {
        setErrorMsg(result);
      }
    } else if (result) {
      setIsConnected(result);
      window.location.reload();
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classesModal.modal}
      open={!isConnected}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={!isConnected}>
        <div className={classesModal.paper}>
          <p className={classesModal.error}>{errorMsg}</p>
          {haveAccount ? (
            <>
              <div style={{ textAlign: "center" }}>
                <GoogleLogin
                  clientId={process.env.NEXT_STATIC_GOOGLE_LOGIN_CLIENT_ID}
                  buttonText="Login with Google"
                  onSuccess={login}
                  // onFailure={}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <div className={classesModal.textCont}>
                <p className={classesModal.text}>Create a new accountt?</p>
                <p
                  className={classesModal.link}
                  onClick={() => {
                    setHaveAccount(false);
                    setShowRegGoogle(false);
                  }}
                >
                  Register
                </p>
              </div>
            </>
          ) : (
            <>
              {showRegGoogle ? (
                <div style={{ textAlign: "center" }}>
                  <GoogleLogin
                    clientId={process.env.NEXT_STATIC_GOOGLE_LOGIN_CLIENT_ID}
                    buttonText="Signup with Google"
                    onSuccess={register}
                    // onFailure={}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              ) : (
                <>
                  <input
                    className={classesModal.input}
                    type="text"
                    ref={inputRef}
                    placeholder={"Enter Username"}
                  />
                  <button
                    className={classesModal.button}
                    onClick={() => {
                      if (inputRef.current.value != "") {
                        console.log(inputRef.current.value);
                        setUsername(inputRef.current.value);
                        setShowRegGoogle(true);
                        setErrorMsg("");
                      } else {
                        setErrorMsg("Please enter username");
                      }
                    }}
                  >
                    Register
                  </button>
                </>
              )}

              <div className={classesModal.textCont}>
                <p className={classesModal.text}>Already have an account?</p>
                <p
                  className={classesModal.link}
                  onClick={() => {
                    setHaveAccount(true);
                  }}
                >
                  Login
                </p>
              </div>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
};
export default ConnectToAccount;
