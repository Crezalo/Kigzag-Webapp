import { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  createTheme,
  InputLabel,
  makeStyles,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AuthService from "../services/auth-services";
import { getUserAllAddressData } from "../services/api-services/user/merch_api";
import AddUpdateAddress from "./AddUpdateAddress";
import BasicModal from "./BasicModal";

const useStylesModal = makeStyles((theme) => ({
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
    padding: theme.spacing(3, 4, 3),
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
}));

const AddressAddSelect = ({ setAddress }) => {
  const classesModal = useStylesModal();
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      addressid: "",
      username: "",
      type: "",
      addressline1: "",
      addressline2: "",
      city: "",
      postalcode: 0,
      country: "",
      mobileno: 0,
    },
  ]);

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

  const GetAddressAvailable = () => {
    useEffect(() => {
      async function getData() {
        const result = await getUserAllAddressData();
        if (result[0]) {
          setAddresses(result);
          setAddress(result[0]);
        }
      }
      getData();
    }, [username]);
    return true;
  };
  GetAddressAvailable();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(addresses[parseInt((event.target as HTMLInputElement).value)]);
  };

  return (
    <div className={classesModal.paper}>
      {addresses[0].addressid != "" ? (
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={0}
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {addresses.map((item, i) => {
              return (
                <div style={{ paddingBottom: "20px" }}>
                  <FormControlLabel
                    value={i}
                    control={<Radio />}
                    label={
                      <>
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {item.type}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "black",
                            padding: "5px 0 5px 0",
                          }}
                        >
                          {item.addressline1}, {item.addressline2}, {item.city},{" "}
                          {item.country} - {item.postalcode}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "black",
                            padding: "5px 0 5px 0",
                          }}
                        >
                          {item.mobileno}
                        </Typography>
                      </>
                    }
                  />
                  <hr />
                  <hr />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      ) : (
        <></>
      )}
      <BasicModal
        modalButtonText={"Add New Address"}
        modalBody={<AddUpdateAddress />}
      />
    </div>
  );
};
export default AddressAddSelect;
