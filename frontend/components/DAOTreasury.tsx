import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Jazzicon from 'react-jazzicon';
import { NATIVE_TOKEN_SUPPORTED_ADDRESS, USDC_SUPPORTED_ADDRESS, DAI_SUPPORTED_ADDRESS } from "../constants/chains";
import { useTokenName, useTokenSymbol, useTokenBalance } from "../hooks/ERC20/useTokenContract";
import { useWeb3React } from "@web3-react/core";
import { parseBalance } from "../util";

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
  tokenBalance: string;
  classes: any;
}

const GridItem = ({ tokenName, tokenSymbol, tokenBalance, classes }: GridItemProps) => {
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
          <p style={{ fontSize: 16, marginTop:"15px" }}>{tokenBalance}</p>
        </div>
      </section>
    </Grid>
  );
};

interface DAOTreasuryProp {
  dao: string;
}
const DAOTreasury = ({ dao }: DAOTreasuryProp) => {
  const classes = useStyles();
  const { chainId, account, library } = useWeb3React();

  const nativeTokenName = useTokenName(NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId].toString()).data??"";
  const nativeTokenSymbol = useTokenSymbol(NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId].toString()).data??"";
  const nativeTokenBalance = parseBalance(useTokenBalance(dao, NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId].toString()).data??0);
  const USDCBalance = parseBalance(useTokenBalance(dao, USDC_SUPPORTED_ADDRESS[chainId].toString()).data??0);
  const DAIBalance = parseBalance(useTokenBalance(dao, DAI_SUPPORTED_ADDRESS[chainId].toString()).data??0);

  return (
    <div className="blueTextBlackBackground">
      <Grid container spacing={1}>
        <Grid container spacing={1}>
          <GridItem tokenName={nativeTokenName} tokenSymbol={nativeTokenSymbol} tokenBalance={nativeTokenBalance} classes={classes}/>
          <GridItem tokenName="USD Coin" tokenSymbol="USDC" tokenBalance={USDCBalance} classes={classes}/>
          <GridItem tokenName="Dai" tokenSymbol="DAI" tokenBalance={DAIBalance} classes={classes}/>
        </Grid>
      </Grid>
    </div>
  );
};
export default DAOTreasury;
