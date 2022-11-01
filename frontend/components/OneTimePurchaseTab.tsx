import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import PurchaseCard from "./PurchaseCard";
import { getUserShoutoutData } from "../services/api-services/user/shoutout_api";
import { getUserColabData } from "../services/api-services/user/colab_api";
import coming_soon from "../public/coming_soon.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

interface GridItemProps {
    request: {
    creator: string;
    platform: number;
    usermessage: string;
    creatorresponse: string;
    status: number;
    lastupdatedat: string;
  };
  classes: any;
}
const GridItem = ({ request, classes }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6} md={4}>
      <PurchaseCard request={request} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface OneTimePurchaseTabProp {
  category: "Shoutout" | "Collab" | "Merch" | "PERQ";
}

const OneTimePurchaseTab = ({ category }: OneTimePurchaseTabProp) => {
  const classes = useStyles();

  const [reqData, setReqData] = useState([
    {
      creator: "",
      platform: 0,
      usermessage: "",
      creatorresponse: "",
      status: 0,
      lastupdatedat: "",
    },
  ]);

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        let result = [];
        if (category == "Shoutout") result = await getUserShoutoutData();
        else if (category == "Collab") result = await getUserColabData();
        // else if (category == "Merch") result = await getUserVideoCallData();
        // else if (category == "PERQ") result = await getUserDiscordData();
        setReqData(result);
      }
      getData();
    }, []);
  };

  GetDetails();

  return (
    <div className="blueTextBlackBackground">
      {category == "PERQ" || category == "Merch" ? (
        <div
        className="blueTextBlackBackground"
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <Image src={coming_soon} alt="" width={500} height={500} />
      </div>
      ) : (
        <Grid container spacing={1}>
          {reqData.map((sub, index) => (
            <GridItem request={sub} classes={classes} key={index} />
          ))}
        </Grid>
      )}
    </div>
  );
};
export default OneTimePurchaseTab;
