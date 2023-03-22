import AuthService from "../services/auth-services";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Box, NativeSelect, Paper, Typography } from "@material-ui/core";
import OrderCard from "./OrderCard";
import { getSpecificCreatorAllUserVODStatsData } from "../services/api-services/user/vod_api";
import { getSpecificCreatorAllUserVideoSeriesStatsData } from "../services/api-services/user/video_series_api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  getSpecificCreatorAllUserMerchStatsData,
  getUserAllOrdersData,
} from "../services/api-services/user/merch_api";
import {
  getCreatorAllTipData,
  getUserAllTipData,
} from "../services/api-services/user/tipjar_api";
import { getCreatorAllSeriesDemoVideoDetails } from "../services/api-services/creator/video_api";
import { getCreatorAllMerchData } from "../services/api-services/creator/merch_api";
import CreatorOrderCardGrid from "./CreatorOrderCardGrid";
import { useScreenSize } from "../services/utility";

interface RevenueChartsProp {
  category: "Videos" | "Courses" | "Merch" | "Perq";
}

const RevenueCharts = ({ category }: RevenueChartsProp) => {
  const username = AuthService.getUsername();
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(Math.random().toString(36).slice(2));
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;
  const [dropDownNames, setDropDownNames] = useState([
    { seriesid: "", title: "", productid: "", variantname: "" },
  ]);

  //for course and merch
  const [selectId, setSelectId] = useState("all");

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        let result = [];
        if (category == "Videos") {
          result = await getSpecificCreatorAllUserVODStatsData();
        } else if (category == "Courses") {
          result = await getSpecificCreatorAllUserVideoSeriesStatsData(
            selectId
          );
          const res = await getCreatorAllSeriesDemoVideoDetails(username);
          if (typeof res !== "string") setDropDownNames(res);
        } else if (category == "Merch") {
          result = await getSpecificCreatorAllUserMerchStatsData(selectId);
          const res = await getCreatorAllMerchData(username);
          if (typeof res !== "string") setDropDownNames(res);
        } else if (category == "Perq") {
          result = await getCreatorAllTipData();
        }
        console.log(result);
        if (typeof result !== "string") {
          setData(result);
        }
      }
      getData();
      setRefresh(Math.random().toString(36).slice(2));
    }, [username, selectId]);
  };

  GetDetails();

  console.log("data");
  console.log(data);
  console.log(dropDownNames);
  console.log(selectId);

  return (
    <>
      {data ? (
        <>
          <div
            className={
              ismobile
                ? "blueTextBlackBackgroundMobile"
                : "blueTextBlackBackground"
            }
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Typography
              style={{
                marginTop: "10px",
                writingMode: "vertical-lr",
                textOrientation: "mixed",
                fontSize: ismobile ? "15px" : "20px",
              }}
            >
              {category === "Videos"
                ? "Sales for Premium Video Memberships (in ₹)"
                : category === "Courses"
                ? "Sales for Course Memberships (in ₹)"
                : category === "Merch"
                ? "Sales for Merchandise (in ₹)"
                : "Tips Received (in ₹)"}
            </Typography>
            <LineChart
              width={ismobile ? 325 : 800}
              height={ismobile ? 300 : 500}
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </div>

          {category === "Courses" && dropDownNames[0]?.seriesid != "" ? (
            <div className="blueTextBlackBackground">
              <NativeSelect
                id="type"
                name="type"
                className="mb-4 border-b-2 form inputSingleLineText"
                style={{
                  backgroundColor: "white",
                  textAlign: "center",
                  color: "black",
                  resize: "both",
                  textAlignLast: "center",
                  overflow: "none",
                }}
                onChange={(e) => {
                  setSelectId(e.target.value);
                }}
              >
                <option value={"all"}>Aggregate</option>
                {dropDownNames.map((course) => (
                  <option value={course.seriesid}>{course.title}</option>
                ))}
              </NativeSelect>
            </div>
          ) : (
            <></>
          )}
          {category === "Merch" && dropDownNames[0]?.productid != "" ? (
            <div className="blueTextBlackBackground">
              <NativeSelect
                id="type"
                name="type"
                className="mb-4 border-b-2 form inputSingleLineText"
                style={{
                  backgroundColor: "white",
                  textAlign: "center",
                  color: "black",
                  resize: "both",
                  textAlignLast: "center",
                  overflow: "none",
                }}
                onChange={(e) => {
                  setSelectId(e.target.value);
                }}
              >
                <option value={"all"}>Aggregate</option>
                {dropDownNames.map((product) => (
                  <option value={product.productid}>{product.title}</option>
                ))}
              </NativeSelect>
            </div>
          ) : (
            <></>
          )}
          {data[0] ? (
            ""
          ) : (
            <div className="blueTextBlackBackground">
              <Typography style={{ fontSize: "20px", paddingLeft: "15vw" }}>
                😔 No Sales Yet
              </Typography>
            </div>
          )}
          {category === "Merch" || category === "Perq" ? (
            <CreatorOrderCardGrid
              category={category}
              productid={selectId}
              title={
                dropDownNames.filter((x) => x.productid == selectId)[0]?.title
              }
              variantname={
                dropDownNames.filter((x) => x.productid == selectId)[0]
                  ?.variantname
              }
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default RevenueCharts;
