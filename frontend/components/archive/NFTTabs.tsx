import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { getNFTsOfCreator } from "../../services/archive/api-service";
import NFTCardGrid from "./NFTCardGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

interface NFTTabsProp {
  creator: string;
  onCreatorProfile: boolean;
  creatorVault:string;
}

const NFTTabs = ({ creator, onCreatorProfile, creatorVault }: NFTTabsProp) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { chainId, account, library } = useWeb3React();

  /////////////////////// getting creator NFTs
  const [nftsList, setNftsList] = useState([]);

  const GetNftOfCreatorList = () => {
    useEffect(() => {
      async function getData() {
        const res = await getNFTsOfCreator(
          account,
          library,
          onCreatorProfile
            ? creator.toLowerCase()
            : account.toLowerCase(),
          chainId
        );
        setNftsList(res);
      }
      getData();
    }, [account, chainId]);
  };

  GetNftOfCreatorList();

  const nfts = [];

  if (nftsList) {
    for (var i = 0; i < nftsList.length; i++) {
      nftsList[i]["vault"] = creatorVault;
      nfts.push(nftsList[i]);
    }
  }

  let tabs_array = [
    <NFTCardGrid nfts={nfts} status="ALL" key={1}/>, // All
    <NFTCardGrid nfts={nfts} status="LISTED" key={2}/>, // Listed for Sale
    <NFTCardGrid nfts={nfts} status="UNLISTED" key={3}/>, // Unlisted
    <NFTCardGrid nfts={nfts} status="SOLD" key={4}/>  // Sold
  ];

  return (
    <div style={{backgroundColor:"black", display: "flex", flexDirection: "row"}}>
        <div style={{width: "10vw"}}>
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
              <Tab label="All" className={classes.tab} />
              <Tab label="Listed" className={classes.tab} />
              <Tab label="Unlisted" className={classes.tab} />
              <Tab label="Sold" className={classes.tab} />
          </Tabs>
        </div>
        <div style={{width: "90vw"}}>
            <Paper>{tabs_array[value]}</Paper>
        </div>
    </div>
  );
};

export default NFTTabs;
