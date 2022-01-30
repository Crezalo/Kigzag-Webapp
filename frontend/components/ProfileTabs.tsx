import { CircularProgress, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import {useState , useEffect} from "react";
import DAOTabs from "./DAOTabs";
import NFTTabs from "./NFTTabs";
import CollectedTabs from "./CollectedTabs";
import { useWeb3React } from "@web3-react/core";
import { useCreatorFactoryCreatorDAO, useCreatorFactoryCreatorToken, useCreatorFactoryCreatorVault } from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import { ZERO_ADDRESS } from "../constants/misc";

const useStyles = makeStyles({
  tab: {
    fontSize: "18px",
    fontWeight: 600,
  },
});

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

const tokenAddresses = [
  "0x90be3f113e2a8ea8f84e3f5268a20778d91cf816",
  "0xe8b3ea81ad82a5b0fcfc186a0aa346c8b8a0f7f5",
  "0x7c369c0934adcbc3f0cf86289dbd283ffad43343",
  "0x9dbc52d10d5859fcf97949204d284f7c073b3d22",
  "0xef69c329feaca9e262c8d1a99c11a64cfb725fbb",
  "0x0ace5d75952054b2d92b77124f03d1b3d7245370",
  "0x7c369c0934adcbc3f0cf86289dbd283ffad43343",
  "0x9dbc52d10d5859fcf97949204d284f7c073b3d22",
  "0xef69c329feaca9e262c8d1a99c11a64cfb725fbb",
  "0x0ace5d75952054b2d92b77124f03d1b3d7245370"
];

interface ProfileTabsProps {
  onCreatorProfile: boolean;
  creator: string;
}

const ProfileTabs = ({onCreatorProfile, creator}: ProfileTabsProps) => {
  const classes = useStyles();
  const { chainId, account, library } = useWeb3React();
  
  const creatorToken = useCreatorFactoryCreatorToken(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    onCreatorProfile ? creator : account
  ).data??"";

  const creatorVault = useCreatorFactoryCreatorVault(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    onCreatorProfile ? creator : account
  ).data??"";

  const creatorDAO = useCreatorFactoryCreatorDAO(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    onCreatorProfile ? creator : account
  ).data??"";

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array;

  if(onCreatorProfile){ // on creator profile
    tabs_array = [
      <NFTTabs nfts={nfts} />, 
      <DAOTabs dao={creatorDAO} />
    ];
  }
  else{// on dashboard
    if(creatorToken !== ZERO_ADDRESS){
      tabs_array = [
        <NFTTabs nfts={nfts} />, 
        <DAOTabs dao={creatorDAO} />,
        <CollectedTabs tokenAddresses={tokenAddresses} nfts={nfts} />
      ];
    }
    else{
      tabs_array = [
        <CollectedTabs tokenAddresses={tokenAddresses} nfts={nfts} />
      ];
    }

  }

  return (
    <>
      {creatorToken ? ( 
        <>
        {onCreatorProfile ? ( // on creator profile
          <><Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{
              style: { backgroundColor: "green" },
            }}
          >
            <Tab label="NFTs" className={classes.tab} />
            <Tab label="DAO" className={classes.tab} />
          </Tabs><br /><Paper>{tabs_array[value]}</Paper></>
        ) : ( // on dashboard
          <>
          {creatorToken !== ZERO_ADDRESS ? (
            <><Tabs
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
            </Tabs><br /><Paper>{tabs_array[value]}</Paper></>
          ) : ( 
            <><Tabs
              value={value}
              onChange={handleChange}
              centered
              TabIndicatorProps={{
                style: { backgroundColor: "green" },
              }}
            >
              <Tab label="Collected" className={classes.tab} />
            </Tabs><br /><Paper>{tabs_array[value]}</Paper></>
          )}
          </>
        )}
        </>
      ):(
        <CircularProgress
          style={{ display: "flex", margin: "auto", height: "80vh" }}
        />
      )}
    </>
  );
};

export default ProfileTabs;
