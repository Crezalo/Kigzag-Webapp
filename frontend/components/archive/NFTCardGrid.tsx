import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import NFTCard from "../NFTCard";
import { useWeb3React } from "@web3-react/core";
import { useCreatorNFTOwnerOf } from "../../hooks/ERC721/useCreatorNFTContract";
import { getNFTsOfCreator } from "../../services/archive/api-service";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
  nft: any;
  classes: any;
}
const GridItem = ({ nft, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={3}>
      <NFTCard nft={nft} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface NFTCardGridProp {
  nfts: any[];
  status: string;
}
const NFTCardGrid = ({ nfts, status }: NFTCardGridProp) => {
  const classes = useStyles();
  const { account } = useWeb3React();

  return (
    <div className="blueTextBlackBackground">
      <Grid container spacing={1}>
        {nfts.map((nft) => (
          <>
            {nft.status == status || status == "ALL" ? (
              <GridItem nft={nft} classes={classes} />
            ) : (
              <>
                {status == "OWNED" ? (
                  <>
                    {useCreatorNFTOwnerOf(nft.nftaddress, nft.tokenid).data==account ? (
                      <GridItem nft={nft} classes={classes} />
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        ))}
      </Grid>
    </div>
  );
};
export default NFTCardGrid;

