import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { DAI_SUPPORTED_ADDRESS, NATIVE_TOKEN_SUPPORTED_ADDRESS, USDC_SUPPORTED_ADDRESS } from "../constants/chains";
import DAOAllowances from "./DAOAllowances";
import ProposalGridCard from "./ProposalGridCard";
import TokenCardGrid from "./TokenCardGrid";

const useStyles = makeStyles({
  tab: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

interface DAOTabsProp {
  dao: string;
}

const DAOTabs = ({ dao }: DAOTabsProp) => {
  const { chainId, account, library } = useWeb3React();
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TreasuryTokens = [
    NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId].toString(),
    USDC_SUPPORTED_ADDRESS[chainId].toString(),
    DAI_SUPPORTED_ADDRESS[chainId].toString(),
  ];

  let tabs_array = [
    <TokenCardGrid tokenAddresses={TreasuryTokens} />, // Listed for Sale
    <ProposalGridCard dao={dao} />, // Listed for Sale
    <DAOAllowances dao={dao} />, // Listed for Sale
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
      }}
    >
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
          <Tab label="Treasury" className={classes.tab} />
          <Tab label="Proposals" className={classes.tab} />
          <Tab label="Allowance" className={classes.tab} />
        </Tabs>
      </div>
      <div style={{width: "90vw"}}>
        <Paper>{tabs_array[value]}</Paper>
      </div>
    </div>
  );
};

export default DAOTabs;
