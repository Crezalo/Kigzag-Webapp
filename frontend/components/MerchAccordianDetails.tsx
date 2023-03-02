import Router from "next/router";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CSSProperties, useEffect, useState } from "react";
import { getUserData } from "../services/api-services/user_api";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RestoreIcon from "@mui/icons-material/Restore";
import LanguageIcon from "@mui/icons-material/Language";
import StarIcon from "@mui/icons-material/Star";
import twitter from "../public/twitter.png";
import instagram from "../public/instagram.png";
import youtube from "../public/youtube.png";
import website from "../public/website.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Jdenticon from "react-jdenticon";
import Image from "next/image";
import Link from "next/link";
import BasicModal from "./BasicModal";
import Select from "@mui/material/Select";
import {
  Backdrop,
  Button,
  createTheme,
  Fade,
  IconButton,
  InputAdornment,
  Rating,
  TextField,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { borderRadius } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import AddToCart from "./AddToCart";
import CreatorDP from "./CreatorDP";
import {
  getProductAllReviewsData,
  getProductRatingsData,
} from "../services/api-services/user/merch_api";

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
    // backgroundColor: "#3b82f6",
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
    margin: "70px 20px 10px 0px",
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
    minWidth: "50vw",
    "& .MuiFormLabel-root": {
      fontSize: "18px",
    },
  },
}));

interface MerchAccordianDetailsProp {
  merchDetails: {
    title: string;
    description: string;
    creator: string;
    productid: string;
    inventory: number;
    return_refund_policy: string;
    country_of_origin: string;
    price: number;
    variants: number;
    variantname: string;
    discountpercentage: number;
    warrantyperiod: number;
    shippingcharges: number;
    freeshippingabove: number;
  };
  rating: number;
}

const MerchAccordianDetails = ({
  merchDetails,
  rating,
}: MerchAccordianDetailsProp) => {
  const classesModal = useStylesModal();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    bio: "",
    displaypicture: "",
    twitterhandle: "",
    instagram: "",
    youtube: "",
    website: "",
  });
  var [qty, setQty] = useState(1);

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (merchDetails.creator != "") {
          const result = await getUserData(merchDetails.creator);
          setUser(result[0]);
        }
      }
      getData();
    }, [merchDetails.creator]);
  };

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  GetUser();

  const minQty = 1;
  const maxQty = 9;

  return (
    <>
      <div className="merchAccordianDetails text-white">
        <div style={{ textAlign: "center" }}>
          <Accordion expanded={true}>
            <AccordionDetails>
              <Typography style={{ fontSize: "24px", fontWeight: "bold" }}>
                {merchDetails.title}
              </Typography>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <section
                  onClick={() => {
                    Router.push({
                      pathname: "/creatorprofile",
                      query: {
                        address: merchDetails.creator,
                      },
                    });
                  }}
                  className="creatorIdent pointer"
                >
                  <div className="creatorCardImage">
                    <CreatorDP
                      creator={merchDetails.creator}
                      height={50}
                      width={50}
                    />
                  </div>
                  <Typography
                    className="usernameLink"
                    style={{
                      fontSize: "15px",
                      color: "#3B82F6",
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px 0 0 10px",
                    }}
                  >
                    {merchDetails.creator}
                  </Typography>
                </section>
                <section onClick={() => {}} className="creatorIdent pointer">
                  <Typography
                    className="usernameLink"
                    style={{
                      fontSize: "15px",
                      color: "#3B82F6",
                      paddingTop: "10%",
                    }}
                  >
                    {
                      <Link href="#review-section">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "2%",
                          }}
                        >
                          <Rating
                            name="hover-feedback"
                            value={rating}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                      </Link>
                    }
                  </Typography>
                </section>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  ₹{merchDetails.price}
                </Typography>
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "grey",
                    marginLeft: "10px",
                    marginTop: "5px",
                    textDecoration: "line-through",
                  }}
                >
                  ₹
                  {Math.round(
                    merchDetails.price /
                      (1 - merchDetails.discountpercentage / 100)
                  )}
                </Typography>
                <Typography
                  style={{
                    fontSize: "17px",
                    color: "green",
                    marginLeft: "10px",
                    marginTop: "3px",
                  }}
                >
                  {merchDetails.discountpercentage}% off
                </Typography>
              </div>
              <br />
              <Typography>{merchDetails.description}</Typography>
              <div
                style={{
                  color: "grey",
                  fontSize: "15px",
                  margin: "10px 0px 10px 0px",
                  fontWeight: "bold",
                }}
              >
                {merchDetails.inventory > 5
                  ? "In Stock | Ready To Ship"
                  : "Only " + merchDetails.inventory + " left | Hurry !!!"}
                .
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  height: "10%",
                }}
              >
                <TextField
                  type="number"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  inputProps={{ min: minQty, max: maxQty }}
                  value={qty}
                  onChange={(e) => {
                    if (e.target.value === "") {
                      setQty(1);
                      return;
                    }
                    const value = +e.target.value;
                    if (value < minQty) {
                      setQty(minQty);
                    } else {
                      setQty(value);
                    }
                  }}
                  style={{
                    width: "5vw",
                    padding: "5px",
                    marginRight: "10px",
                  }}
                />
                <BasicModal
                  modalButtonText={"Add to Cart"}
                  modalBody={
                    <AddToCart
                      creator={merchDetails.creator}
                      feature={2}
                      productid={merchDetails.productid}
                      seriesid={""}
                      qty={qty}
                      showContinueToCheckoutButton={true}
                    />
                  }
                />
              </div>
              <div
                style={{ color: "green", fontSize: "15px", marginTop: "10px" }}
              >
                Free shipping charges on orders above ₹{" "}
                {merchDetails.freeshippingabove}.
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div style={{ fontWeight: "bold" }}>Other Details</div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography>
                  <VerifiedUserIcon />
                  <div>
                    {merchDetails.warrantyperiod}{" "}
                    {merchDetails.warrantyperiod == 1 ? "month" : "months"}{" "}
                    Warranty
                  </div>
                </Typography>
                <Typography>
                  <LocalShippingIcon />
                  <div>₹ {merchDetails.shippingcharges} shipping charge.</div>
                </Typography>
                <Typography>
                  <RestoreIcon />
                  <div>
                    {merchDetails.return_refund_policy == "7dayReturn"
                      ? "7 Days Return"
                      : "7 Days Replacement"}{" "}
                  </div>
                </Typography>
                <Typography>
                  <LanguageIcon />{" "}
                  <div>
                    Made in {merchDetails.country_of_origin.split("|")[1]}
                  </div>
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <div style={{ fontWeight: "bold" }}>
                  About {user.fname + " " + user.lname}
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {user.bio != "" ? <div>{user.bio}</div> : <></>}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default MerchAccordianDetails;
