import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
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
import PasswordStrengthBar from "react-password-strength-bar";

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
  const [showPassword, setShowPassword] = useState(false);
  const [haveAccount, setHaveAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const login = async (resp: any) => {
    const result = await AuthService.login(username, password, "", 0);
    console.log(result);
    if (typeof result !== "string") {
      setIsConnected(result);
      window.location.reload();
    } else {
      setErrorMsg(result);
    }
  };

  function validateRegisterInput() {
    if (username === "") {
      setErrorMsg("Please enter username");
      return false;
    }
    if (email === "") {
      setErrorMsg("Please enter email");
      return false;
    }
    if (password === "") {
      setErrorMsg("Please enter password");
      return false;
    }
    if (confirmPassword === "") {
      setErrorMsg("Please confirm password");
      return false;
    }
    if (password != confirmPassword) {
      setErrorMsg("Password doesn't match");
      return false;
    }
    return true;
  }

  const register = async (resp: any) => {
    if (validateRegisterInput()) {
      const result = await AuthService.register(
        email,
        0,
        "",
        password,
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
                <input
                  className={classesModal.input}
                  type="text"
                  placeholder={"Username"}
                  onChange={(e) => {
                    if (e.target.value != "") setUsername(e.target.value);
                  }}
                />
                <input
                  className={classesModal.input}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Password"}
                  onChange={(e) => {
                    if (e.target.value != "") setPassword(e.target.value);
                  }}
                />
                <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={handleClickShowPassword}
                  />
                  <label
                    className={classesModal.text + " pointer"}
                    style={{ paddingLeft: "5px" }}
                    onClick={handleClickShowPassword}
                  >
                    Show Password
                  </label>
                </div>
                <button className={classesModal.button} onClick={login}>
                  Login
                </button>
              </div>
              <div className={classesModal.textCont}>
                <p className={classesModal.text}>Create a new accountt?</p>
                <p
                  className={classesModal.link}
                  onClick={() => {
                    setHaveAccount(false);
                  }}
                >
                  Register
                </p>
              </div>
            </>
          ) : (
            <>
              <input
                className={classesModal.input}
                type="text"
                placeholder={"Username"}
                onChange={(e) => {
                  if (e.target.value != "") setUsername(e.target.value);
                }}
              />
              <input
                className={classesModal.input}
                type="email"
                placeholder={"Email"}
                onChange={(e) => {
                  if (e.target.value != "") setEmail(e.target.value);
                }}
              />
              <input
                className={classesModal.input}
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
                onChange={(e) => {
                  if (e.target.value != "") setPassword(e.target.value);
                }}
              />
              <input
                className={classesModal.input}
                type={showPassword ? "text" : "password"}
                placeholder={"Confirm Password"}
                onChange={(e) => {
                  if (e.target.value != "") setConfirmPassword(e.target.value);
                }}
              />
              <PasswordStrengthBar password={password} />
              <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={handleClickShowPassword}
                />
                <label
                  className={classesModal.text + " pointer"}
                  style={{ paddingLeft: "5px" }}
                  onClick={handleClickShowPassword}
                >
                  Show Password
                </label>
              </div>
              <button className={classesModal.button} onClick={register}>
                Register
              </button>
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
