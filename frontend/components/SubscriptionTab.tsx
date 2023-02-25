import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import SubsCardGrid from "./OrderCardGrid";
import OneTimePurchaseTab from "./OneTimePurchaseTab";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

const SubscriptionTab = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array = [
    <SubsCardGrid category="Videos" key={1} />,
    <SubsCardGrid category="Courses" key={2} />,
    // <SubsCardGrid category="Stream" key={3} />,
    // <SubsCardGrid category="Meet" key={4} />,
    // <SubsCardGrid category="Discord" key={5} />,
    // <SubsCardGrid category="Community Combo" key={6} />,
    <OneTimePurchaseTab category="Shoutout" key={8} />,
    <OneTimePurchaseTab category="Collab" key={9} />,
    <OneTimePurchaseTab category="Merch" key={7} />,
    <OneTimePurchaseTab category="PERQ" key={10} />,
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: { backgroundColor: "#3B82F6" },
          }}
          className="nftTabs"
          orientation="vertical"
        >
          <Tab label="Videos" className={classes.tab} />
          <Tab label="Series" className={classes.tab} />
          <Tab label="Stream" className={classes.tab} />
          <Tab label="Meet" className={classes.tab} />
          <Tab label="Discord" className={classes.tab} />
          <Tab label="Community Combo" className={classes.tab} />
          <Tab label="Shoutout" className={classes.tab} />
          <Tab label="Collab" className={classes.tab} />
          <Tab label="Merch" className={classes.tab} />
          <Tab label="PERQ" className={classes.tab} />
        </Tabs>
      </div>
      <div style={{ width: "90vw" }}>
        <Paper>{tabs_array[value]}</Paper>
      </div>
    </div>
  );
};

export default SubscriptionTab;
