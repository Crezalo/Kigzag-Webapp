import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";
import DAOTab from "./DAOTab";
import CreatorCardGrid from "./CreatorsGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 600,
  },
});

const notes = [
  "500",
  "50",
  "5000",
  "500",
  "50",
  "5000",
  "500",
  "50",
  "5000",
  "15",
];

const proposals = [
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
  "http://main.xeldorado.live/",
];

const HomePageTabs = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let tabs_array = [
    <CreatorCardGrid notes={notes} />,
    <CreatorCardGrid notes={notes} />,
    <DAOTab proposals={proposals} />,
  ];

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          style: { backgroundColor: "green" },
        }}
      >
        <Tab label="All NFTs" className={classes.tab} />
        <Tab label="NFTs For Sale" className={classes.tab} />
        <Tab label="DAO" className={classes.tab} />
        <Tab label="Owned Tokens" className={classes.tab} />
        <Tab label="Owned NFTs" className={classes.tab} />
      </Tabs>
      <br />
      <Paper>{tabs_array[value]}</Paper>
    </>
  );
};

export default HomePageTabs;
