import { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import {
  Box,
  Button,
  InputLabel,
  NativeSelect,
  Rating,
  Select,
  TextField,
} from "@mui/material";
import {
  getMarketingData,
  sendMarketingEmail,
} from "../services/api-services/marketing_api";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    display: "flex",
    flexDirection: "column",
    // width: "50%",
    justifyContent: "center",
    // margin: "0 20px 20px 20px",
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(0, 4, 3),
    // "&:hover": {
    //   boxShadow: "0 10px 18px 8px #173464",
    //   borderRadius: "2%",
    // },
  },
  button: {},
  title: {
    fontWeight: "bold",
    margin: "10px 0 20px 0",
    color: "#3B82F6",
    textAlign: "center",
  },
  label: {},
  edit: {
    margin: "10px",
    "&:hover": {
      color: "rgb(76, 175, 80)",
    },
  },
  error: {
    color: "red",
    fontSize: "16px",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  textfield: {},
}));

const Marketing = () => {
  const classesModal = useStylesModal();
  const [sqlQuery, setSqlQuery] = useState("");
  const [template, setTemplate] = useState("generic");
  const [marketingData, setMarketingData] = useState([
    {
      name: "",
      link: "",
      category: "",
      description: "",
      subcount: "",
      totalvideos: "",
      totalviews: "",
      emails: "",
      numbers: "",
    },
  ]);
  const [err, setErr] = useState("");

  const SendSqlQuery = async () => {
    const result = await getMarketingData(sqlQuery);
    if (typeof result !== "string") {
      setMarketingData(result);
      setErr("");
    } else setErr(result);
  };

  const sendEmailForSqlQuery = async () => {
    const result = await sendMarketingEmail(sqlQuery, template);
    if (result === "success") {
      setErr("");
    } else setErr(result);
  };

  return (
    <div style={{ color: "white" }}>
      <InputLabel
        style={{
          fontWeight: "bold",
          margin: "20px",
          color: "white",
          width: "90vw",
        }}
      >
        SQL Query For Marketing Data
      </InputLabel>
      <TextField
        style={{
          width: "90vw",
          backgroundColor: "white",
          margin: "20px",
          borderRadius: "5px",
        }}
        type="string"
        placeholder="SQL Query Here ..."
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        defaultValue={""}
        onChange={(e) => {
          {
            setSqlQuery(e.target.value);
          }
        }}
      />
      <br />
      <NativeSelect
        id="type"
        name="type"
        style={{
          width: "90vw",
          backgroundColor: "white",
          margin: "20px",
          borderRadius: "5px",
        }}
        onChange={(e) => {
          setTemplate(e.target.value);
        }}
        required
      >
        <option value="generic">Generic</option>
      </NativeSelect>
      <br />
      <Button
        style={{
          background: "#3B82F6",
          color: "white",
          marginBottom: "2px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px",
        }}
        variant="contained"
        onClick={SendSqlQuery}
      >
        Get Data
      </Button>
      <Button
        style={{
          background: "#3B82F6",
          color: "white",
          marginBottom: "2px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px",
        }}
        variant="contained"
        onClick={sendEmailForSqlQuery}
      >
        Send Email
      </Button>
      <div
        style={{
          width: "90vw",
          margin: "20px",
          height: "40vh",
          overflow: "scroll",
        }}
      >
        {marketingData?.map((mkd, index) => (
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              margin: "5px",
              padding: "1px",
              borderRadius: "5px",
              overflow: "scroll",
            }}
          >
            <p>
              <b>index:</b> {index}
            </p>
            <p>
              <b>name:</b> {mkd.name}
            </p>
            <p>
              <b>category:</b> {mkd.category}
            </p>
            <a
              href={mkd.link}
              target="_blank"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {mkd.link}
            </a>
            <p>
              <b>Description:</b> {mkd.description}
            </p>
            <p>
              <b>Emails:</b> {mkd.emails}
            </p>
            <p>
              <b>Numbers:</b> {mkd.numbers}
            </p>
            <p>
              <b>Subscribers:</b> {mkd.subcount}
            </p>
            <p>
              <b>TotalVideos:</b> {mkd.totalvideos}
            </p>
            <p>
              <b>TotalViews:</b> {mkd.totalviews}
            </p>
          </div>
        ))}
      </div>
      <p style={{ color: "red" }}>{err}</p>
    </div>
  );
};
export default Marketing;
