import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 600,
  },
});

const HomePageTabs = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      centered
      TabIndicatorProps={{
        style: { backgroundColor: "green" },
      }}
    >
      <Tab label="All NFTs" className={classes.tab} />
      <Tab label="Sold NFTs" className={classes.tab} />
      <Tab label="DAO" className={classes.tab} />
      <Tab label="Owned Tokens" className={classes.tab} />
      <Tab label="Owned NFTs" className={classes.tab} />
    </Tabs>
  );
};

export default HomePageTabs;
