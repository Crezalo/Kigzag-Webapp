import { useRouter } from "next/router";
import Router from "next/router";
import Image from "next/image";
import NFTDetails from "../components/NFTDetails";
import NFTProperties from "../components/NFTProperties";
import { useCreatorNFTTokenURI } from "../hooks/ERC721/useCreatorNFTContract";
import { useEffect, useState } from "react";
import Jdenticon from "react-jdenticon";
import { Spinner } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useWeb3React } from "@web3-react/core";
import {
  getDiscordPlanDetails,
  getNFTForGivenTokenId,
} from "../services/api-service";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ConnectToWallet from "../components/ConnectToWallet";
import queryString from "query-string";
import { useCreatorTokenContract } from "../hooks/LoyaltyTokenContract/useCreatorTokenContract";
import { useCreatorFactoryCreatorToken } from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import { BigNumberish } from "@ethersproject/bignumber";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import waitingGif from "../public/waiting.gif";
import greenTick from "../public/green-tick.gif";
import {
  formatBlockExplorerLink,
  retry,
  RetryableError,
  shortenHex,
  RetryOptions,
} from "../util";
import Head from "next/head";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "white",
    backgroundColor: "#ffff",
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function DiscordPlans() {
  const router = useRouter();

  const { chainId, account, library } = useWeb3React();

  let { linkid } = router.query;

  if (!linkid) {
    const url = router.asPath;
    linkid = queryString.parseUrl(url).query.linkid;
  }

  const [planDetails, setPlanDetails] = useState({
    linkid: "",
    user_discord_id: "",
    serverid: "",
    starttime: "",
    creator: "",
    symbol: "",
    name: "",
    "1month": 0,
    "3months": 0,
    "1year": 0,
  });
  const [linkExpired, setLinkExpired] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState("NOT_STARTED");
  const [txhash, setTxhash] = useState("");

  const GetDetails = () => {
    useEffect(() => {
      async function getData() {
        const res = await getDiscordPlanDetails(
          account,
          library,
          (linkid ?? "").toString()
        );
        if (res == "Link Not Available") {
          setLinkExpired(true);
        } else {
          setLinkExpired(false);
          setPlanDetails(res);
        }
      }
      getData();
    }, [account, chainId]);
  };

  GetDetails();

  const creatorToken =
    useCreatorFactoryCreatorToken(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      planDetails.creator ?? ""
    ).data ?? "";

  const creatorTokenContract = useCreatorTokenContract(creatorToken);

  async function BurnMyTokens(amount: number) {
    const res = await creatorTokenContract
      .burnMyTokens(amount.toString())
      .then((res) => {
        setTransactionStatus("WAITING");
        setTxhash(res.hash);
        handleOpen();
        const receipt = library
          .getTransactionReceipt(txhash)
          .then((receipt) => {
            if (receipt === null) {
              console.debug(`Retrying tranasaction receipt for ${txhash}`);
              throw new RetryableError();
            }
            setTimeout(() => {
              setTransactionStatus("COMPLETED");
              setTimeout(() => {
                handleClose();
                console.log("receipt");
                console.log(receipt);
                return receipt;
              }, 1000);
            }, 3000);
          });
      })
      .catch((err) => {
        handleOpen_error();
        if (
          err["data"]["message"] ==
          "execution reverted: ERC20: burn amount exceeds balance"
        ) {
          setError_msg(`Insufficient ${planDetails.symbol} tokens`);
        } else {
          setError_msg(err["data"]["message"]);
        }
      });
  }

  const classesModal = useStylesModal();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open_error, setOpen_error] = useState(false);
  const handleOpen_error = () => setOpen_error(true);
  const handleClose_error = () => setOpen_error(false);
  const [error_msg, setError_msg] = useState("");

  const tiers = [
    {
      title: "1 Month",
      price: planDetails["1month"],
      description: [
        // "1 month access to premium discord server",
      ],
      buttonText: "Buy Now",
      buttonVariant: "outlined",
    },
    {
      title: "3 Months",
      subheader: "Most popular",
      price: planDetails["3months"],
      description: [
        // "3 months access to premium discord server",
      ],
      buttonText: "Buy Now",
      buttonVariant: "outlined",
    },
    {
      title: "1 Year",
      price: planDetails["1year"],
      description: [
        // "1 year access to premium discord server",
      ],
      buttonText: "Buy Now",
      buttonVariant: "outlined",
    },
  ];
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

  return (
    <div>
      <Head>
        <title>Discord Plans</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {linkid && !linkExpired ? (
          <>
            {account ? (
              <React.Fragment>
                <GlobalStyles
                  styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
                />
                <CssBaseline />
                <Container className="blueTextBlackBackground">
                  <Container
                    disableGutters
                    maxWidth="sm"
                    component="main"
                    sx={{ pt: 8, pb: 6 }}
                  >
                    <Typography
                      component="h6"
                      variant="h5"
                      align="center"
                      color="#3b82f6"
                      gutterBottom
                    >
                      {planDetails.name} Discord Plans
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      color="white"
                      component="p"
                    >
                      Exclusive interaction directly with me and my top fans.
                    </Typography>
                  </Container>
                </Container>
                <Container maxWidth="md" component="main">
                  <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                      // Enterprise card is full width at sm breakpoint
                      <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === "1 Year" ? 12 : 6}
                        md={4}
                      >
                        <Card>
                          <CardHeader
                            title={tier.title}
                            subheader={tier.subheader}
                            titleTypographyProps={{ align: "center" }}
                            action={
                              tier.title === "3 Months" ? <StarIcon /> : null
                            }
                            subheaderTypographyProps={{
                              align: "center",
                            }}
                            sx={{
                              backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                  ? theme.palette.grey[200]
                                  : theme.palette.grey[700],
                            }}
                          />
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "baseline",
                                mb: 2,
                              }}
                            >
                              <Typography
                                component="h2"
                                variant="h3"
                                color="#3b82f6"
                              >
                                {tier.price} {planDetails.symbol}
                              </Typography>
                            </Box>
                            <ul>
                              {tier.description.map((line) => (
                                <Typography
                                  component="li"
                                  variant="subtitle1"
                                  align="center"
                                  key={line}
                                >
                                  {line}
                                </Typography>
                              ))}
                            </ul>
                          </CardContent>
                          <CardActions>
                            <Button
                              fullWidth
                              variant={
                                tier.buttonVariant as "outlined" | "contained"
                              }
                              onClick={async () => {
                                await BurnMyTokens(tier.price * 10 ** 18);
                              }}
                            >
                              {tier.buttonText}
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classesModal.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classesModal.paper}>
                        {transactionStatus === "NOT_STARTED" ? (
                          <></>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <p
                              style={{
                                color: "#3b82f6",
                                fontWeight: "bold",
                                fontSize: 20,
                                textAlign: "center",
                              }}
                            >
                              {transactionStatus === "WAITING"
                                ? "Processing, Please Wait!"
                                : "Succesful !!!"}
                            </p>
                            {transactionStatus === "WAITING" ? (
                              <Image
                                src={waitingGif}
                                alt=""
                                width={200}
                                height={200}
                              />
                            ) : (
                              <Image
                                src={greenTick}
                                alt=""
                                width={200}
                                height={200}
                              />
                            )}
                            <Link>
                              <a
                                {...{
                                  href: formatBlockExplorerLink("Transaction", [
                                    chainId,
                                    txhash,
                                    "",
                                  ]),
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }}
                                style={{ fontSize: 20, fontWeight: "bold" }}
                              >
                                {shortenHex(txhash, 10)}
                              </a>
                            </Link>
                          </div>
                        )}
                      </div>
                    </Fade>
                  </Modal>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classesModal.modal}
                    open={open_error}
                    onClose={handleClose_error}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open_error}>
                      <div className={classesModal.paper}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <p
                            style={{
                              color: "red",
                              fontWeight: "bold",
                              fontSize: 20,
                              textAlign: "center",
                            }}
                          >
                            {error_msg}
                          </p>
                        </div>
                      </div>
                    </Fade>
                  </Modal>
                  <Container
                    disableGutters
                    maxWidth="sm"
                    component="main"
                    sx={{ pt: 4, pb: 2 }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      color="white"
                      component="p"
                    >
                      <Button
                        fullWidth
                        variant={"contained"}
                        style={{ width: "40%", backgroundColor: "#3b82f6" }}
                        onClick={() => {
                          Router.push({
                            pathname: "/creatorprofile",
                            query: { address: planDetails.creator },
                          });
                        }}
                      >
                        Get {planDetails.symbol} here
                      </Button>
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="white"
                      component="p"
                      style={{ marginTop: "10px" }}
                    >
                      For Accepted Payments refer{" "}
                      <Link>
                        <a
                          href="https://kigzag.com/#payments"
                          target="_blank"
                          rel="noreferrer"
                        >
                          here
                        </a>
                      </Link>
                    </Typography>
                  </Container>
                </Container>
              </React.Fragment>
            ) : (
              <>
                {typeof account !== "string" ? (
                  <ConnectToWallet />
                ) : (
                  <>
                    <CircularProgress
                      style={{
                        display: "flex",
                        margin: "auto",
                        height: "80vh",
                      }}
                    />
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <Container
            disableGutters
            maxWidth="lg"
            component="main"
            sx={{ pt: 8, pb: 6 }}
          >
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="#3b82f6"
              gutterBottom
              style={{ marginBottom: "40px", marginTop: "40px" }}
            >
              Invalid or Expired Link!!!
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="white"
              component="p"
              style={{ marginBottom: "20px" }}
            >
              &#8688; Check if the link is same as shared by Kigzag Bot.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="white"
              component="p"
              style={{ marginBottom: "20px" }}
            >
              &#8688; Generated links are valid only for 30 mins.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="white"
              component="p"
              style={{ marginBottom: "20px" }}
            >
              &#8688; If it's beyond 30 mins please rejoin the Discord server,
              Kigzag Bot will generate new link for you.
            </Typography>
          </Container>
        )}
      </div>
    </div>
  );
}
