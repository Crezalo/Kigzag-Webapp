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
import ChatTab from "./ChatTab";
import LiveStream from "./LiveStreamTab";
import VideoMeetTab from "./VideoMeetTab";

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
      <ContentCardGrid
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={1}
      />,
      <LiveStream
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        key={2}
      />,
      <VideoMeetTab creator={account} onCreatorProfile={onCreatorProfile} key={3} />,
      <ChatTab creator={creator} onCreatorProfile={onCreatorProfile} key={4} />,
      <NFTTabs
        creator={creator}
        onCreatorProfile={onCreatorProfile}
        creatorVault={creatorVault}
        key={5}
      />,
      <DAOTabs dao={creatorDAO} key={6} />,
    ];
  } else {
    // on dashboard
    if (creatorToken !== ZERO_ADDRESS) {
      tabs_array = [
        <ContentCardGrid creator={account} onCreatorProfile={false} key={1} />,
        <LiveStream creator={account} onCreatorProfile={false} key={2} />,
        <VideoMeetTab creator={account} onCreatorProfile={false} key={3} />,
        <ChatTab creator={account} onCreatorProfile={false} key={4} />,
        <NFTTabs
          creator={account}
          onCreatorProfile={false}
          creatorVault={creatorVault}
          key={5}
        />,
        <DAOTabs dao={creatorDAO} key={6} />,
        <CollectedTabs creatorVault={creatorVault} key={7} />,
      ];
    } else {
      tabs_array = [<CollectedTabs creatorVault={creatorVault} key={1} />];
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
                <Tab label="Video" className={classes.tab} />
                <Tab label="Live Stream" className={classes.tab} />
                <Tab label="Video Meet" className={classes.tab} />
                <Tab label="Community" className={classes.tab} />
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
                    <Tab label="Video" className={classes.tab} />
                    <Tab label="Live Stream" className={classes.tab} />
                    <Tab label="Video Meet" className={classes.tab} />
                    <Tab label="Community" className={classes.tab} />
                    <Tab label="NFT" className={classes.tab} />
                    <Tab label="DAO" className={classes.tab} />
                    <Tab label="Balance" className={classes.tab} />
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
                    <Tab label="Balance" className={classes.tab} />
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
