import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React, { useEffect, useState } from "react";
import MerchandiseTab from "./MerchandiseTab";
import ShoutoutTab from "./ShoutoutTab";
import ColabTab from "./ColabTab";
import TipsTab from "./TipsTab";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

interface StoreTabProps {
  creator: string;
  onCreatorProfile: boolean;
}

const StoreTab = ({ creator, onCreatorProfile }: StoreTabProps) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array = [
    <ShoutoutTab
      creator={creator}
      onCreatorProfile={onCreatorProfile}
      key={2}
    />,
    <ColabTab creator={creator} onCreatorProfile={onCreatorProfile} key={3} />,
    <MerchandiseTab
      creator={creator}
      onCreatorProfile={onCreatorProfile}
      key={1}
    />,
    <TipsTab creator={creator} onCreatorProfile={onCreatorProfile} key={4} />,
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
          <Tab label="Shoutout" className={classes.tab} />
          <Tab label="Collab" className={classes.tab} />
          <Tab label="Merch" className={classes.tab} />
          <Tab label="Perq" className={classes.tab} />
        </Tabs>
      </div>
      <div style={{ width: "90vw" }}>
        <Paper>{tabs_array[value]}</Paper>
      </div>
    </div>
  );
};

export default StoreTab;
