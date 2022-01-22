import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";
import DAOTab from "./DAOTab";
import CreatorCardGrid from "./CreatorCardGrid";
import TokenCardGrid from "./TokenCardGrid";
import NFTCardGrid from "./NFTCardGrid";

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

// [nftContractAddress, tokenId, price, creatorToken address]
const nfts = [
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","1","50","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","2","500","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","3","5000","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","4","50","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","1","50","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","2","5000","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","3","50","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","4","500","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","1","50","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","2","500","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","3","50","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","4","5000","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","1","500000","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","2","50","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","3","500","0x7a396865c17E92a196825017E47fA4f4F39f035a"],
  ["0x432C00b769C43C46eb7f052CD1845084f052faEe","4","500","0x7a396865c17E92a196825017E47fA4f4F39f035a"]
];

const HomePageTabs = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let tabs_array = [
    <NFTCardGrid nfts={nfts} />, // All
    <NFTCardGrid nfts={nfts} />, //Listed for Sale
    <DAOTab proposals={proposals} />,
    <TokenCardGrid notes={notes} />,
    <NFTCardGrid nfts={nfts} />,
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
      <Paper className="gridMinHeight">{tabs_array[value]}</Paper>
    </>
  );
};

export default HomePageTabs;
