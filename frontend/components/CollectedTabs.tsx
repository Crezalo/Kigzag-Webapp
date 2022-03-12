import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { getAllNFTs } from "../services/api-service";
import NFTCardGrid from "./NFTCardGrid";
import TokenCardGrid from "./TokenCardGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

interface CollectedTabsProp {
  creatorVault: string;
}

const CollectedTabs = ({ creatorVault }: CollectedTabsProp) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { chainId, account, library } = useWeb3React();

  //////////////////////// getting all NFTs
  const [allnftsList, setAllnftsList] = useState([]);

  const GetAllNftList = () => {
    useEffect(() => {
      async function getData() {
        const res = await getAllNFTs(account, library, chainId);
        setAllnftsList(res);
      }
      getData();
    }, [account, chainId]);
  };

  GetAllNftList();

  const allnfts = [];

  if (allnftsList) {
    for (var i = 0; i < allnftsList.length; i++) {
      allnftsList[i]["vault"] = creatorVault;
      allnfts.push(allnftsList[i]);
    }
  }

  let tabs_array = [
    // <TokenCardGrid key={1}/>,
    <TokenCardGrid key={2}/>,
    <NFTCardGrid nfts={allnfts} status="OWNED" key={3}/>,
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "10vw" }}>
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
          {/* <Tab label="Plans" className={classes.tab} /> */}
          <Tab label="Tokens" className={classes.tab} />
          <Tab label="NFT" className={classes.tab} />
        </Tabs>
      </div>
      <div style={{ width: "90vw" }}>
        <Paper>{tabs_array[value]}</Paper>
      </div>
    </div>
  );
};

export default CollectedTabs;
