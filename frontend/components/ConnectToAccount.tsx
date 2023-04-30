import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { phone } from "phone";
import firebase from "./firebase";
import {
  GoogleLogin,
  GoogleLogout,
  useGoogleLogin,
  useGoogleLogout,
} from "react-google-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import AuthService from "../services/auth-services";
import PasswordStrengthBar from "react-password-strength-bar";
import Router, { useRouter } from "next/router";
import guestCred from "../consts/guestcred";
import { MuiOtpInput } from "mui-one-time-password-input";
import { sendUserOTP } from "../services/api-services/user_api";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Timer from "./Timer";
import { reloadWithQueryParams_message } from "../services/utility";
import { setEngine } from "crypto";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "#3B82F6",
    boxShadow: "0 1px 1px 3px #3B82F6",
    padding: theme.spacing(1, 2, 1, 2),
    transition: "0.3s",
    width: "300px",
    backgroundColor: "black",
    borderRadius: "5%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      boxShadow: "0 10px 16px 8px #3B82F6",
    },
  },
  back: {
    color: "white",
    fontSize: "25px",
    "&:hover": {
      color: "#3B82F6",
    },
  },
  text: {
    color: "white",
    fontSize: "16px",
    textAlign: "center",
  },
  textTOS: {
    color: "lightgrey",
    fontSize: "14px",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: "15px",
    textAlign: "center",
    marginBottom: "5px",
  },
  message: {
    color: "lightgreen",
    fontSize: "15px",
    textAlign: "center",
    marginBottom: "5px",
  },
  link: {
    color: "#3B82F6",
    fontSize: "16px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "underline",
  },
  linkTOS: {
    color: "#3B82F6",
    fontSize: "14px",
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
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#3B82F6",
      color: "white",
    },
  },
  guestbutton: {
    width: "100%",
    height: "35px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#4CBB17",
    color: "white",
    "&:hover": {
      backgroundColor: "#C1E1C1",
      color: "#008080",
    },
  },
}));

interface ConnectToAccountProps {
  haveAccountBool?: boolean;
  uname?: string;
  message?: string;
  noguestlogin?: boolean;
}

const ConnectToAccount = ({
  haveAccountBool,
  uname,
  message,
  noguestlogin,
}: ConnectToAccountProps) => {
  const classesModal = useStylesModal();
  const [showPassword, setShowPassword] = useState(false);
  const [haveAccount, setHaveAccount] = useState(haveAccountBool);
  const [otpStage, setOtpStage] = useState(false);
  const [mobileOtp, setMobileOtp] = useState(false);
  const [username, setUsername] = useState(uname);
  const [confirmationResultFB, setConfirmationResultFB] = useState(null);
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isConnected, setIsConnected] = useState(true);
  const router = useRouter();

  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          var agt = await AuthService.autoGuestLogin();
          if (agt === true) {
            setIsConnected(true);
          } else {
            console.log(await AuthService.refresh());
            setIsConnected(
              AuthService.validateCurrentUserRefreshToken() &&
                AuthService.validateCurrentUserAccessToken()
            );
          }
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const sendOTP = async (resp: any) => {
    setOtp("");
    setErrorMsg("");
    // Email based OTP verification
    if (username != "") {
      const result = await sendUserOTP(username);
      if (result[0] === "Success") {
        setEmail(result[1]);
        setOtpStage(true);
      } else {
        if (result.includes("fk_otp_user")) {
          setErrorMsg("Username Incorrect");
        } else {
          setErrorMsg(result);
        }
      }
      // Mobile Number based OTP verification
    } else if (mobileno != "") {
      const { isValid, phoneNumber, countryIso2, countryIso3, countryCode } =
        phone(mobileno, {
          country: "IND",
        });
      if (isValid) {
        setMobileno(phoneNumber);
        // invisible recaptcha
        const appVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              console.log(response);
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            "expired-callback": () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            },
          }
        );

        // Send the verification code to the user's phone
        firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            console.log(confirmationResult);
            // Save the confirmation result for later use
            console.log("heredfdfgdf");
            setConfirmationResultFB(confirmationResult);
            setOtpStage(true);
            setMobileOtp(true);
          })
          .catch((error) => {
            console.log("Err Message " + error);
            setErrorMsg(error);
          });
      } else {
        setErrorMsg("Invalid Phone Number");
      }
    } else {
      setErrorMsg("Please Insert Username & Password OR Mobile Number");
    }
  };

  const login = async (resp: any) => {
    if (parseInt(otp)) {
      setErrorMsg("");
      if (username != "") {
        const result = await AuthService.login(
          username,
          password,
          "",
          0,
          otp,
          "",
          ""
        );
        console.log(result);
        if (typeof result !== "string") {
          setIsConnected(result);
          window.location.reload();
        } else {
          setErrorMsg(result);
        }
      } else {
        if (otp.length == 6)
          confirmationResultFB
            .confirm(otp)
            .then(async (userCredential) => {
              // User signed in successfully
              const user = userCredential.user;
              firebase
                .auth()
                .currentUser.getIdToken(/* forceRefresh */ true)
                .then(async (idToken) => {
                  // Save the ID token to the user object in the database.
                  const result = await AuthService.login(
                    username,
                    password,
                    "",
                    1,
                    "",
                    idToken,
                    user.phoneNumber
                  );
                  console.log(result);
                  if (typeof result !== "string") {
                    setIsConnected(result);
                    window.location.reload();
                  } else {
                    setErrorMsg(result);
                  }
                })
                .catch((error) => {
                  setErrorMsg("Server Error, Unable to Validate OTP");
                  console.error("Error getting ID token:", error);
                });
            })
            .catch((error) => {
              // Handle any errors from the signInWithPhoneNumber method.
              if (error.code === "auth/invalid-verification-code") {
                // The SMS verification code entered by the user is invalid.
                // Handle the error accordingly.
                setErrorMsg("OTP Invalid");
                // ...
              } else {
                // Handle other errors from the signInWithPhoneNumber method.
                setErrorMsg("OTP Expired");
                // ...
              }
            });
      }
    } else {
      setErrorMsg("OTP must be a 6 digit number");
    }
  };

  const guestlogin = async (resp: any) => {
    const result = await AuthService.login(
      guestCred[0],
      guestCred[1],
      "",
      0,
      "",
      "",
      ""
    );
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
        mobileno,
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
      console.log(result);
      if (typeof result === "string") {
        if (result.includes("users_emailaddress_key")) {
          setErrorMsg("Email Already Exists");
        } else if (result.includes("users_username_key")) {
          setErrorMsg("Username Already Exists");
        } else if (result.includes("users_mobileno_key")) {
          setErrorMsg("Mobile No Already Exists");
        } else {
          setErrorMsg(result);
        }
      } else if (result) {
        setErrorMsg("");
        reloadWithQueryParams_message(
          router,
          "Account Registered Successfully, Please Login!"
        );
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
          <p className={classesModal.message}>{message}</p>
          <p className={classesModal.text}>For Details</p>
          <a
            href={process.env.NEXT_STATIC_LANDING_WEBSITE_URL}
            className={classesModal.link + " pointer"}
            style={{ marginBottom: "10px" }}
            target="_blank"
          >
            Visit Crezalo
          </a>
          {haveAccount ? (
            <>
              {!otpStage ? (
                <>
                  <div style={{ textAlign: "center" }}>
                    <input
                      className={classesModal.input}
                      type="text"
                      defaultValue={username}
                      placeholder={"Username or Email"}
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
                    <div style={{ textAlign: "center" }}>
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
                    <div style={{ marginBottom: "5px" }}>
                      <label className={classesModal.linkTOS}>OR</label>
                    </div>
                    <input
                      className={classesModal.input}
                      type="text"
                      defaultValue={mobileno}
                      placeholder={"Mobile (+91 8888 888888)"}
                      onChange={(e) => {
                        if (e.target.value != "") setMobileno(e.target.value);
                      }}
                    />
                    <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                      <input type="checkbox" checked={true} />
                      <label
                        className={classesModal.textTOS}
                        style={{ paddingLeft: "5px" }}
                      >
                        I agree to{" "}
                        <a
                          href={process.env.NEXT_STATIC_TOS_WEBSITE_URL}
                          target="_blank"
                          className={classesModal.linkTOS}
                        >
                          terms of service
                        </a>{" "}
                        and{" "}
                        <a
                          href={process.env.NEXT_STATIC_PP_WEBSITE_URL}
                          target="_blank"
                          className={classesModal.linkTOS}
                        >
                          privacy policy
                        </a>{" "}
                        of Crezalo
                      </label>
                    </div>
                    <button
                      className={classesModal.button}
                      onClick={sendOTP}
                      id="recaptcha-container"
                    >
                      Login
                    </button>
                    {!noguestlogin ? (
                      <button
                        className={classesModal.guestbutton}
                        onClick={guestlogin}
                      >
                        Login As Guest
                      </button>
                    ) : (
                      <></>
                    )}
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
                  <ArrowBackOutlinedIcon
                    className={classesModal.back + " pointer"}
                    onClick={() => {
                      setOtpStage(false);
                      setMobileOtp(false);
                      setErrorMsg("");
                    }}
                  />
                  <br />
                  {!mobileOtp ? (
                    <label
                      className={classesModal.textTOS}
                      style={{ paddingLeft: "5px" }}
                    >
                      We sent a verification code to your email address
                      <a
                        href={"mailto:" + email}
                        target="_blank"
                        className={classesModal.linkTOS}
                      >
                        {" " + email}
                      </a>
                    </label>
                  ) : (
                    <label
                      className={classesModal.textTOS}
                      style={{ paddingLeft: "5px" }}
                    >
                      We sent a verification code to your phone number
                      <a
                        href={"mailto:" + email}
                        target="_blank"
                        className={classesModal.linkTOS}
                      >
                        {" " + mobileno}
                      </a>
                    </label>
                  )}
                  <br />
                  <MuiOtpInput
                    value={otp}
                    onChange={handleChange}
                    onComplete={login}
                    length={6}
                    display="flex"
                    gap={0.5}
                    sx={{
                      ".MuiOtpInput-TextField": {
                        color: "#3b82f6",
                        backgroundColor: "white",
                        borderRadius: "5px",
                      },
                    }}
                  />
                  <br />
                  <button className={classesModal.button} onClick={login}>
                    Continue
                  </button>
                  {/* Render the OTP verification form */}
                  {/* Render the Timer component with the resendOTP function and timerDuration */}
                  <div id="recaptcha-container">
                    <Timer
                      resendOTP={sendOTP}
                      timerDuration={mobileOtp ? 30 : 300}
                    />
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <input
                className={classesModal.input}
                type="text"
                defaultValue={username}
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
                type="tel"
                placeholder={"Mobile (+91 8888 888888)"}
                onChange={(e) => {
                  if (e.target.value != "") setMobileno(e.target.value);
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
              <div style={{ textAlign: "center" }}>
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
              <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                <input type="checkbox" checked={true} />
                <label
                  className={classesModal.textTOS}
                  style={{ paddingLeft: "5px" }}
                >
                  I agree to{" "}
                  <a
                    href={process.env.NEXT_STATIC_TOS_WEBSITE_URL}
                    target="_blank"
                    className={classesModal.linkTOS}
                  >
                    terms of service
                  </a>{" "}
                  and{" "}
                  <a
                    href={process.env.NEXT_STATIC_PP_WEBSITE_URL}
                    target="_blank"
                    className={classesModal.linkTOS}
                  >
                    privacy policy
                  </a>{" "}
                  of Crezalo
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
