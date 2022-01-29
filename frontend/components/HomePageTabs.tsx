import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import React from "react";
import DAOTab from "./DAOTab";
import CreatorCardGrid from "./CreatorCardGrid";
import TokenCardGrid from "./TokenCardGrid";
import NFTCardGrid from "./NFTCardGrid";
import NFTTabs from "./NFTTabs";
import CollectedTabs from "./CollectedTabs";

const useStyles = makeStyles({
  tab: {
    fontSize: "18px",
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
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "1",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "2",
    "500",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "3",
    "5000",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "4",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "5",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "1",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "2",
    "5000",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "3",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "4",
    "500",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "5",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "1",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "2",
    "500",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "3",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "4",
    "5000",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "5",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "1",
    "500000",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "2",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "3",
    "500",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "4",
    "500",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
  [
    "0x5ca1e39155837dce8edb1989f3ae27dd52864d58",
    "5",
    "50",
    "0x7a396865c17E92a196825017E47fA4f4F39f035a",
  ],
];

const HomePageTabs = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let tabs_array = [
    <NFTTabs nfts={nfts} />, 
    <DAOTab proposals={proposals} />,
    <CollectedTabs notes={notes} nfts={nfts} />
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
        <Tab label="NFTs" className={classes.tab} />
        <Tab label="DAO" className={classes.tab} />
        <Tab label="Collected" className={classes.tab} />
      </Tabs>
      <br />
      <Paper>{tabs_array[value]}</Paper>
    </>
  );
};

export default HomePageTabs;
