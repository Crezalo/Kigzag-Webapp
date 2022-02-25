import { CircularProgress, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { useState, useEffect } from "react";
import DAOTabs from "./DAOTabs";
import NFTTabs from "./NFTTabs";
import CollectedTabs from "./CollectedTabs";
import { useWeb3React } from "@web3-react/core";
import {
  useCreatorFactoryCreatorDAO,
  useCreatorFactoryCreatorToken,
  useCreatorFactoryCreatorVault,
} from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import { ZERO_ADDRESS } from "../constants/misc";
import {
  useCreatorVaultIdTonftContract,
  useCreatorVaultNftContract,
} from "../hooks/LoyaltyTokenContract/useCreatorVaultContract";
import {
  getNFTsOfCreator,
  getAllNFTs,
  getTokens,
} from "../services/api-service";
import ContentCardGrid from "./ContentCardGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "18px",
    fontWeight: 600,
  },
});

interface ProfileTabsProps {
  onCreatorProfile: boolean;
  creator: string;
}

const ProfileTabs = ({ onCreatorProfile, creator }: ProfileTabsProps) => {
  const classes = useStyles();
  const { chainId, account, library } = useWeb3React();

  const creatorToken =
    useCreatorFactoryCreatorToken(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      onCreatorProfile ? creator : account
    ).data ?? "";

  const creatorVault =
    useCreatorFactoryCreatorVault(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      onCreatorProfile ? creator : account
    ).data ?? "";

  const creatorDAO =
    useCreatorFactoryCreatorDAO(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      onCreatorProfile ? creator : account
    ).data ?? "";

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let tabs_array;

  if (onCreatorProfile) {
    // on creator profile
    tabs_array = [
      <ContentCardGrid creator={creator} onCreatorProfile={onCreatorProfile} />,
      <ContentCardGrid creator={creator} onCreatorProfile={onCreatorProfile} />,
      <ContentCardGrid creator={creator} onCreatorProfile={onCreatorProfile} />,
      <ContentCardGrid creator={creator} onCreatorProfile={onCreatorProfile} />,
      <NFTTabs
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        creatorVault={creatorVault}
      />,
      <DAOTabs dao={creatorDAO} />,
    ];
  } else {
    // on dashboard
    if (creatorToken !== ZERO_ADDRESS) {
      tabs_array = [
        <ContentCardGrid creator={account} onCreatorProfile={false} />,
        <ContentCardGrid creator={account} onCreatorProfile={false} />,
        <ContentCardGrid creator={account} onCreatorProfile={false} />,
        <ContentCardGrid creator={account} onCreatorProfile={false} />,
        <NFTTabs
          creator={account}
          onCreatorProfile={false}
          creatorVault={creatorVault}
        />,
        <DAOTabs dao={creatorDAO} />,
        <CollectedTabs creatorVault={creatorVault} />,
      ];
    } else {
      tabs_array = [<CollectedTabs creatorVault={creatorVault} />];
    }
  }

  return (
    <>
      {creatorToken ? (
        <>
          {onCreatorProfile ? ( // on creator profile
            <>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                  style: { backgroundColor: "#3B82F6" },
                }}
              >
                <Tab label="Content" className={classes.tab} />
                <Tab label="Streams" className={classes.tab} />
                <Tab label="Meets" className={classes.tab} />
                <Tab label="CHAT" className={classes.tab} />
                <Tab label="NFT" className={classes.tab} />
                <Tab label="DAO" className={classes.tab} />
              </Tabs>
              <Paper>{tabs_array[value]}</Paper>
            </>
          ) : (
            // on dashboard
            <>
              {creatorToken !== ZERO_ADDRESS ? (
                <>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{
                      style: { backgroundColor: "#3B82F6" },
                    }}
                  >
                    <Tab label="Content" className={classes.tab} />
                    <Tab label="Streams" className={classes.tab} />
                    <Tab label="Meets" className={classes.tab} />
                    <Tab label="CHAT" className={classes.tab} />
                    <Tab label="NFT" className={classes.tab} />
                    <Tab label="DAO" className={classes.tab} />
                    <Tab label="Collected" className={classes.tab} />
                  </Tabs>
                  <Paper>{tabs_array[value]}</Paper>
                </>
              ) : (
                <>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{
                      style: { backgroundColor: "#3B82F6" },
                    }}
                  >
                    <Tab label="Collected" className={classes.tab} />
                  </Tabs>
                  <Paper>{tabs_array[value]}</Paper>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <CircularProgress
          style={{ display: "flex", margin: "auto", height: "80vh" }}
        />
      )}
    </>
  );
};

export default ProfileTabs;
