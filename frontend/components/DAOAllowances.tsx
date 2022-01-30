import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Jazzicon from 'react-jazzicon';
import { useTokenName, useTokenSymbol } from '../hooks/ERC20/useTokenContract';
import { parseBalance } from '../util';
import { useWeb3React } from "@web3-react/core";
import { useDAOCreator, useDAONativeTokenAllowances, useDAONativeTotalAllowances, useDAOUSDAllowances, useDAOUSDTotalAllowances } from "../hooks/LoyaltyTokenContract/useCreatorDAOContract";
import { NATIVE_TOKEN_SUPPORTED_ADDRESS } from "../constants/chains";
import BasicModal from "./BasicModal";
import CreateProposalModal from "./CreateProposalModal";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  tokenName: string;
  tokenSymbol: string;
  tokenAllowance: string;
  classes: any;
}

const GridItem = ({ tokenName, tokenSymbol, tokenAllowance, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <section className="tokenCard">
        <div className="tokenImage">
        <Jazzicon diameter={60} seed={Math.round(Math.random() * 10000000)} />
        </div>
        <div style={{ width: "70%", float: "left", paddingLeft:"20px", fontSize: 16  }}>
          {tokenName.length<=10 ? (
            <h2>{tokenName} ({tokenSymbol})</h2>
          ):(
            <h2>{tokenName.substring(0,8)+".."} ({tokenSymbol})</h2>
          )}
          <p style={{ fontSize: 16, marginTop:"15px" }}>{tokenAllowance}</p>
        </div>
      </section>
    </Grid>
  );
};

interface DAOAllowancesProp {
  dao: string;
}
const DAOAllowances = ({ dao }: DAOAllowancesProp) => {
  const classes = useStyles();
  const { chainId, account, library } = useWeb3React();
  const nativeTokenName = useTokenName(NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId].toString()).data??"";
  const nativeTokenSymbol = useTokenSymbol(NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId].toString()).data??"";
  const nativeTotalAllowances = parseBalance(useDAONativeTotalAllowances(dao).data??0);
  const usdTotalAllowances = parseBalance(useDAOUSDTotalAllowances(dao).data??0);
  const nativeAllowances = parseBalance(useDAONativeTokenAllowances(dao,account).data??0);
  const usdAllowances = parseBalance(useDAOUSDAllowances(dao,account).data??0);
  const creator = useDAOCreator(dao).data??"";

  return (
    <div className="greenTextBlackBackground" style={{textAlign: 'center'}}>
      <>
        {creator===account ? (
          <div className="RedeemTreasuryButton">
            <BasicModal modalButtonText="Redeem From Treasury" modalBody={<CreateProposalModal />} />
          </div>
        ) : (
          <div>
            <h2>My Allowances</h2>
            <Grid container spacing={1}>
              <GridItem tokenName={nativeTokenName} tokenSymbol={nativeTokenSymbol} tokenAllowance={nativeAllowances} classes={classes}/>
              <GridItem tokenName="USDC + DAI" tokenSymbol="USD" tokenAllowance={usdAllowances} classes={classes}/>
            </Grid>
          </div>
        )}
      </>
      <h2>Total Allowances</h2>
      <Grid container spacing={1}>
        <GridItem tokenName={nativeTokenName} tokenSymbol={nativeTokenSymbol} tokenAllowance={nativeTotalAllowances} classes={classes}/>
        <GridItem tokenName="USDC + DAI" tokenSymbol="USD" tokenAllowance={usdTotalAllowances} classes={classes}/>
      </Grid>
    </div>
  );
};

export default DAOAllowances;

