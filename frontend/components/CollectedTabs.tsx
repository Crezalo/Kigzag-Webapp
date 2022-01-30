import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";
import NFTCardGrid from "./NFTCardGrid";
import TokenCardGrid from "./TokenCardGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

interface CollectedTabsProp {
    nfts: string[][];
    tokenAddresses: string[];
}

const CollectedTabs = ({ nfts, tokenAddresses }: CollectedTabsProp) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let tabs_array = [
    <TokenCardGrid tokenAddresses={tokenAddresses} />,
    <NFTCardGrid nfts={nfts} />,
  ];

  return (
    <div style={{backgroundColor:"black", display: "flex", flexDirection: "row"}}>
        <div style={{width: "10vw"}}>
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
                <Tab label="Tokens" className={classes.tab} />
                <Tab label="NFTs" className={classes.tab} />
            </Tabs>
        </div>
        <div style={{width: "90vw"}}>
            <Paper>{tabs_array[value]}</Paper>
        </div>
    </div>
  );
};

export default CollectedTabs;
