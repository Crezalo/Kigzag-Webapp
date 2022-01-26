import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";
import NFTCardGrid from "./NFTCardGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

interface NFTTabsProp {
    nfts: string[][];
}

const NFTTabs = ({ nfts }: NFTTabsProp) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let tabs_array = [
    <NFTCardGrid nfts={nfts} />, // All
    <NFTCardGrid nfts={nfts} />, // Listed for Sale
    <NFTCardGrid nfts={nfts} />, // Unlisted
    <NFTCardGrid nfts={nfts} />  // Sold
  ];

  return (
    <div style={{backgroundColor:"black", display: "flex", flexDirection: "row"}}>
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                style: { backgroundColor: "green" },
                }}
                className="nftTabs"
                orientation="vertical"
            >
                <Tab label="All" className={classes.tab} />
                <Tab label="Listed" className={classes.tab} />
                <Tab label="Unlisted" className={classes.tab} />
                <Tab label="Sold" className={classes.tab} />
            </Tabs>
        </div>
        <div>
            <Paper>{tabs_array[value]}</Paper>
        </div>
    </div>
  );
};

export default NFTTabs;
