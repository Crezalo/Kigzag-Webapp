import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { clickEvent } from "../services/analytics";

const useStylesModal = makeStyles((theme) => ({
  link: {
    color: "#3B82F6",
    fontSize: "18px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "underline",
  },
}));

interface TimerProps {
  resendOTP: any;
  timerDuration: number;
}
const Timer = ({ resendOTP, timerDuration }: TimerProps) => {
  const classesModal = useStylesModal();
  const [timer, setTimer] = useState(timerDuration);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleResendOTP = () => {
    resendOTP();
    setTimer(timerDuration);
    clickEvent("ResendOTP");
  };

  return (
    <div>
      {timer > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "white" }}>Resend OTP in&nbsp;&nbsp;</p>
          <p style={{ color: "blue", fontWeight: "bold" }}>
            {parseInt((timer / 60).toString())} :{" "}
            {timer % 60 < 10 ? "0" + (timer % 60) : timer % 60}
          </p>
        </div>
      ) : (
        <p className={classesModal.link} onClick={handleResendOTP}>
          Resend OTP
        </p>
      )}
    </div>
  );
};

export default Timer;
