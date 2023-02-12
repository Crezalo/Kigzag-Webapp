import { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  createTheme,
  FormControl,
  InputLabel,
  makeStyles,
  TextField,
  Tooltip,
} from "@material-ui/core";
import Image from "next/image";
import greenTick from "../public/green-tick.gif";
import { Modal, Box, Fade, NativeSelect } from "@mui/material";
import AuthService from "../services/auth-services";
import { addUserAddressData } from "../services/api-services/user/merch_api";

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
    margin: "0 20px 20px 20px",
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(0, 4, 3),
    // "&:hover": {
    //   boxShadow: "0 10px 18px 8px #173464",
    //   borderRadius: "2%",
    // },
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    margin: "20px 20px 10px 0px",
  },
  title: {
    fontWeight: "bold",
    margin: "10px 0 20px 0",
    color: "#3B82F6",
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    margin: "5px 0 5px 0",
    color: "#3B82F6",
  },
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
  textfield: {
    // width: "80%",
    margin: "5px 0 5px 0",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
    // "& label.Mui-focused": {
    //   color: "white",
    // },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3b82f6",
    },
  },
}));

const toolTipTheme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "15px",
      },
    },
  },
});

interface AddUpdateAddressProps {
  addressid: string;
  type: string;
  addressline1: string;
  addressline2: string;
  city: string;
  postalcode: number;
  country: string;
  mobileno: number;
}

const AddUpdateAddress = () => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState(false);

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const updateUsername = () => {
    useEffect(() => {
      setUsername(AuthService.getUsername());
    }, [isConnected]);
  };

  updateUsername();

  const [type, setType] = useState("Home");
  const [addressline1, setAddressline1] = useState("");
  const [addressline2, setAddressline2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState(0);
  const [country, setCountry] = useState("India");
  const [mobileno, setMobileno] = useState(0);

  const addAddress = async () => {
    let result;
    result = await addUserAddressData(
      type,
      addressline1,
      addressline2,
      city,
      postcode,
      country,
      mobileno
    );
    if (!result[0]) setErrorMsg(result);
    else setStatus(true);
  };

  return (
    <div className={classesModal.paper}>
      {!status ? (
        <div>
          <Box
            component="form"
            sx={{
              minWidth: 150,
              margin: "20px 5px 15px 5px",
            }}
          >
            <InputLabel className={classesModal.title}>
              ADD NEW ADDRESSLINE
            </InputLabel>
            <InputLabel className={classesModal.label}>Type</InputLabel>
            <NativeSelect
              id="type"
              name="type"
              className="mb-4 border-b-2 form inputSingleLineText"
              style={{
                color: "black",
                resize: "both",
                width: "20vw",
                overflow: "none",
              }}
              onChange={(e) => {
                setType(e.target.value);
              }}
              required
            >
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Home2">Home2</option>
              <option value="Work2">Work2</option>
              <option value="Home3">Home3</option>
              <option value="Work3">Work3</option>
              <option value="Home4">Home4</option>
              <option value="Work4">Work4</option>
            </NativeSelect>
            <InputLabel className={classesModal.label}>
              Address Line 1
            </InputLabel>
            <TextField
              className={classesModal.textfield}
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={""}
              onChange={(e) => {
                {
                  setAddressline1(e.target.value);
                }
              }}
            />
            <InputLabel className={classesModal.label}>
              Address Line 2
            </InputLabel>
            <TextField
              className={classesModal.textfield}
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={""}
              onChange={(e) => {
                {
                  setAddressline2(e.target.value);
                }
              }}
            />
            <InputLabel className={classesModal.label}>City</InputLabel>
            <TextField
              className={classesModal.textfield}
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={""}
              onChange={(e) => {
                {
                  setCity(e.target.value);
                }
              }}
            />
            <InputLabel className={classesModal.label}>Postal Code</InputLabel>
            <TextField
              className={classesModal.textfield}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={0}
              onChange={(e) => {
                {
                  setPostcode(parseInt(e.target.value));
                }
              }}
            />
            <InputLabel className={classesModal.label}>Country</InputLabel>
            <TextField
              className={classesModal.textfield}
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={"India"}
              onChange={(e) => {
                {
                  setCountry(e.target.value);
                }
              }}
            />
            <InputLabel className={classesModal.label}>
              Contact Number
            </InputLabel>
            <TextField
              className={classesModal.textfield}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              defaultValue={0}
              onChange={(e) => {
                {
                  setMobileno(parseInt(e.target.value));
                }
              }}
            />
          </Box>
          <Button
            style={{
              background: "#3B82F6",
              color: "white",
              marginBottom: "2px",
            }}
            variant="contained"
            onClick={addAddress}
          >
            Add
          </Button>
        </div>
      ) : (
        <div>
          <Image src={greenTick} alt="" width={200} height={200} />
        </div>
      )}
      <p className={classesModal.error}>{errorMsg}</p>
    </div>
  );
};
export default AddUpdateAddress;
