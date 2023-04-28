import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
const useStyles = makeStyles({
  container: {
    position: "relative",
    background: "white",
    color: "#000",
    /* width: 100%, */
    maxWidth: "568px",
    height: "auto",
    padding: "30px",
    outline: "none",
    minWidth: "250px",
  },
  title: {
    textAlign: "left",
    fontFamily: "Apple SD Gothic Neo",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "20px",
    lineHeight: "24px",
  },
  iconContainer: {
    /* width: 50%, */
    /* margin: auto, */
    /* margin-bottom: 1.5rem, */
    paddingTop: "20px",
    paddingBottom: "15px",
    textAlign: "left",
    "& button": {
      flex: "1 1 auto",
      border: "none",
      textAlign: "center",
      margin: "5px",
    },
  },
  pricingContainer: {
    position: "relative",
    padding: "14px",
    border: "1px solid grey",
    // color: "#263238",
    cursor: "text",
    display: "inline-flex",
    fontSize: "16px",
    boxSizing: "border-box",
    alignItems: "center",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: "-0.05px",
    width: "100%",
    fontStyle: "normal",
    fontWeight: "bold",
    background: "black",
    borderRadius: "4px",
    /* identical to box height, or 143% */
  },
});

interface PricingPlanModalProps {
  style: any;
}

const PricingPlanModal = ({ style }: PricingPlanModalProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container} style={style?.root} data-testid="root">
      <h1 className={classes.title} style={style?.title} data-testid="title">
        Pricing Plan
      </h1>
      <div className={classes.iconContainer}>
        <h1>
          We offer automatic pricing which selects the best plan for your needs.
        </h1>
      </div>
      <div className={classes.pricingContainer} data-testid="pricingplan">
        <p
          style={{
            textAlign: "center",
          }}
        >
          Free Plan
        </p>
      </div>
    </div>
  );
};
export default PricingPlanModal;
