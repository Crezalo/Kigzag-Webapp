import React, { useEffect, useState } from "react";
import coming_soon from "../public/coming_soon.png";
import Image from "next/image";
import { Grid, makeStyles } from "@material-ui/core";
import SubCard from "./OrderCard";
import OneTimePurchaseTab from "./OneTimePurchaseTab";
import {
  getSpecificCreatorUserColabData,
  getUserColabData,
} from "../services/api-services/user/colab_api";
import {
  getSpecificCreatorUserShoutoutData,
  getUserShoutoutData,
} from "../services/api-services/user/shoutout_api";
import RequestCard from "./RequestCard";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    justifyContent: "center",
    borderRadius: "5px",
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
}
const GridItem = ({ request }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={12} md={12}>
      <RequestCard request={request} />
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface ShoutoutColabPageTabsProp {
  category: "shoutout" | "collab" | "merch" | "perq";
  type: "creator" | "user";
  platform: "0" | "1" | "2";
  creator: string;
}
const ShoutoutColabPageTabs = ({
  category,
  type,
  platform,
  creator,
}: ShoutoutColabPageTabsProp) => {
  const classes = useStyles();
  const [status, setStatus] = React.useState(0);

  var pendingCount = 0;
  var approvedCount = 0;
  var completedCount = 0;
  var rejectedCount = 0;

  const handleStatus = (event, newAlignment) => {
    setStatus(newAlignment);
  };

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
        if (type == "user") {
          if (category == "shoutout") result = await getUserShoutoutData();
          else if (category == "collab") result = await getUserColabData();
          // else if (category == "Merch") result = await getUserVideoCallData();
          // else if (category == "PERQ") result = await getUserDiscordData();
          setReqData(result);
        } else if (type == "creator") {
          if (category == "shoutout")
            result = await getSpecificCreatorUserShoutoutData(creator);
          else if (category == "collab")
            result = await getSpecificCreatorUserColabData(creator);
          setReqData(result);
        }
        console.log("result");
        console.log(result);
      }
      getData();
    }, []);
  };

  GetDetails();

  for (var i = 0; i < reqData.length; i++) {
    if (reqData[i].status == 0 && reqData[i].platform.toString() == platform)
      pendingCount = pendingCount + 1;
    else if (
      reqData[i].status == 1 &&
      reqData[i].platform.toString() == platform
    )
      approvedCount = approvedCount + 1;
    else if (
      reqData[i].status == 2 &&
      reqData[i].platform.toString() == platform
    )
      completedCount = completedCount + 1;
    else if (
      reqData[i].status == 3 &&
      reqData[i].platform.toString() == platform
    )
      rejectedCount = rejectedCount + 1;
  }

  return (
    <div
      className="blueTextBlackBackground"
      style={{ justifyContent: "center" }}
    >
      {category == "perq" || category == "merch" ? (
        <div
          className="blueTextBlackBackground"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <Image src={coming_soon} alt="" width={500} height={500} />
        </div>
      ) : (
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <div style={{ textAlign: "center" }}>
            <ToggleButtonGroup
              value={status}
              exclusive
              onChange={handleStatus}
              className={classes.paper}
            >
              <ToggleButton value={0}>Pending ({pendingCount})</ToggleButton>
              <ToggleButton value={1}>Approved ({approvedCount})</ToggleButton>
              <ToggleButton value={2}>
                Completed ({completedCount})
              </ToggleButton>
              <ToggleButton value={3}>Rejected ({rejectedCount})</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <Grid container spacing={2}>
            {reqData.map((sub, index) => (
              <>
                {sub.platform == parseInt(platform) && sub.status == status ? (
                  <>
                    <GridItem request={sub} key={index} />
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ShoutoutColabPageTabs;
