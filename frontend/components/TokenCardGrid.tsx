import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import TokenCard from "./TokenCard";
import { useWeb3React } from "@web3-react/core";
import { useTokenBalance } from "../hooks/ERC20/useTokenContract";
import { parseBalance } from "../util";
import { getTokens } from "../services/api-service";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  tokenAddress: string;
  classes: any;
}
const GridItem = ({ tokenAddress, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <TokenCard tokenAddress={tokenAddress} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

const TokenCardGrid = () => {
  const classes = useStyles();
  const { chainId, account, library } = useWeb3React();

  ////////////////////// getting all tokens
  const [alltokensList, setAlltokensList] = useState([]);

  const getAllTokenList = () => {
    useEffect(() => {
      async function getData() {
        const res = await getTokens(account, library, chainId);
        setAlltokensList(res);
      }
      getData();
    }, [account, chainId]);
  };

  getAllTokenList();

  const alltokens = [];

  if (alltokensList) {
    for (var i = 0; i < alltokensList.length; i++) {
      alltokens.push(alltokensList[i].tokenaddress);
    }
  }

  return (
    <div className="blueTextBlackBackground">
      <Grid container spacing={1}>
        {alltokens.map((tokenAddress) => (
          // Resolve Render more hooks issue over here to only show those tokens that have non zero balance
          // <>
          //   {parseBalance(useTokenBalance(account, tokenAddress).data??0) !=  '0.000' ? (
          //     <GridItem tokenAddress={tokenAddress} classes={classes} />
          //   ) : (
          //     <></>
          //   )}
          // </>
          <GridItem tokenAddress={tokenAddress} classes={classes} />
        ))}
      </Grid>
    </div>
  );
};
export default TokenCardGrid;
