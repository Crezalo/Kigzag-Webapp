import { CircularProgress } from "@material-ui/core";
import { Menu, Transition } from "@headlessui/react";
import Settings from "@mui/icons-material/Settings";
import { CSSProperties } from "react";
import { useWeb3React } from "@web3-react/core";
import Jdenticon from "react-jdenticon";
import ConnectToWallet from "../components/ConnectToWallet";
import ProfileTabs from "../components/ProfileTabs";
import {
  DAI_SUPPORTED_ADDRESS,
  LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST,
  NATIVE_TOKEN_SUPPORTED_ADDRESS,
  USDC_SUPPORTED_ADDRESS,
} from "../constants/chains";
import { ZERO_ADDRESS } from "../constants/misc";
import {
  useTokenName,
  useTokenSymbol,
  useTokenTotalSupply,
} from "../hooks/ERC20/useTokenContract";
import {
  useCreatorFactoryCreatorDAO,
  useCreatorFactoryCreatorSaleFee,
  useCreatorFactoryCreatorToken,
} from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { creatorFactoryLT, currencyName, parseBalance } from "../util";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getNFTsOfCreator, getUserData } from "../services/api-service";
import Router, { useRouter } from "next/router";
import twitter from "../public/twitter.png";
import discord from "../public/discord.png";
import tiktok from "../public/tiktok.png";
import instagram from "../public/instagram.png";
import youtube from "../public/youtube.png";
import website from "../public/website.png";
import Head from "next/head";
import * as React from "react";
import Link from "@mui/material/Link";
import { useCreatorFactoryContract } from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import kigzagDeployer from "../contracts/KigzagDeployer_LT.json";
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
import { BigNumber } from "@ethersproject/bignumber";
const buttonStyle: CSSProperties = {
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  width: "auto",
  marginTop: "20px",
};

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    color: "black",
    backgroundColor: "blue",
    padding: theme.spacing(2, 4, 3),
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "80vh",
    margin: "20px",
  },
}));

export default function Home() {
  const { chainId, account, library } = useWeb3React();

  /////////////////////// getting user data
  const [user, setUser] = useState({
    useraddress: "",
    username: "",
    iscreator: false,
    twitterhandle: "",
    discord: "",
    tiktok: "",
    instagram: "",
    youtube: "",
    website: "",
  });

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        const res = await getUserData(account, library, account);
        setUser(res);
      }
      getData();
    }, [account, chainId]);
  };

  GetUser();

  const waitedTxStatusUpdate = () => {
    useEffect(() => {
      if (transactionStatus == "TRANSACTION ON") {
        setTimeout(() => {
          setTransactionStatus("NOT STARTED");
          handleClose_becomeCreator();
        }, 3000);
      }
    }, []);
  };

  const creatorToken =
    useCreatorFactoryCreatorToken(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      account
    ).data ?? "";

  const nativeToken = NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId] ?? "";
  const usdc = USDC_SUPPORTED_ADDRESS[chainId];
  const dai = DAI_SUPPORTED_ADDRESS[chainId];

  const creatorTokenName = useTokenName(creatorToken).data;
  const creatorTokenSymbol = useTokenSymbol(creatorToken).data;
  const creatorTokenTotalSupply = parseBalance(
    useTokenTotalSupply(creatorToken).data ?? 0
  );

  // const nativeTokenSymbol = useTokenSymbol(nativeToken.toString()).data;

  const { nativefee, usdfee } = useCreatorFactoryCreatorSaleFee(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    account
  ).data ?? { nativefee: 0, usdfee: 0 };

  const nativeCreatorPrice = parseBalance(nativefee ?? 0);
  const usdCreatorPrice = parseBalance(usdfee ?? 0);

  const creatorFactoryContract = useCreatorFactoryContract(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId]
  );

  const BecomeACreator = async (event: any) => {
    event.preventDefault();
    var deployerContract = new library.provider.contract(kigzagDeployer);
    var contractInstance = deployerContract.new(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      event.target.name.value,
      event.target.symbol.value,
      event.target.nativePrice.value * 10 ** 18,
      event.target.usdPrice.value * 10 ** 18
    );
    contractInstance.methods
      .f()
      .send({
        from: account,
      })
      .on("receipt", (receipt) => {
        setTransactionStatus("TRANSACTION ON");
        console.log(receipt);
        if (receipt === null) {
          console.debug(`Retrying tranasaction receipt for ${txhash}`);
          throw new RetryableError();
        }
        setTimeout(() => {
          setTransactionStatus("NOT STARTED");
          handleClose_becomeCreator();
          console.log("receipt");
          console.log(receipt);
          return receipt;
        }, 3000);
      })
      .on("error", function (err, receipt) {
        console.log(err, receipt);
        handleOpen_error();
        if (
          err["data"]["message"] ==
          "execution reverted: ERC20: burn amount exceeds balance"
        ) {
          setError_msg(`Insufficient ${creatorTokenSymbol} tokens`);
        } else {
          setError_msg(err["data"]["message"]);
        }
      });
  };

  const UpdateCTPrice = async (event: any) => {
    event.preventDefault();
    if (USDPriceShow === "none") {
    } else if (USDPriceShow === "no") {
      creatorFactoryContract
        .updateCreatorSaleFeeNative(
          account,
          BigNumber.from((event.target.nativePrice.value * 10 ** 18).toString())
        )
        .then((res) => {
          setTransactionStatus("TRANSACTION ON");
          setTxhash(res.hash);
          handleOpen_updatePrice();
          library.getTransactionReceipt(txhash).then((receipt) => {
            if (receipt === null) {
              console.debug(`Retrying tranasaction receipt for ${txhash}`);
              throw new RetryableError();
            }
            waitedTxStatusUpdate();
            console.log("receipt");
            console.log(receipt);
            return receipt;
          });
        })
        .catch((err) => {
          console.log(err);
          handleOpen_error();
          setError_msg(err["data"]["message"]);
        });
    } else if (USDPriceShow === "yes") {
      creatorFactoryContract
        .updateCreatorSaleFeeUSD(
          account,
          (event.target.usdPrice.value * 10 ** 18).toString()
        )
        .then((res) => {
          setTransactionStatus("TRANSACTION ON");
          setTxhash(res.hash);
          handleOpen_updatePrice();
          library.getTransactionReceipt(txhash).then((receipt) => {
            if (receipt === null) {
              console.debug(`Retrying tranasaction receipt for ${txhash}`);
              throw new RetryableError();
            }
            waitedTxStatusUpdate();
            console.log("receipt");
            console.log(receipt);
            return receipt;
          });
        })
        .catch((err) => {
          console.log(err);
          handleOpen_error();
          setError_msg(err);
        });
    }
  };

  const [transactionStatus, setTransactionStatus] = useState("NOT_STARTED");
  const [txhash, setTxhash] = useState("");
  const classesModal = useStylesModal();
  const [open_becomeCreator, setOpen_becomeCreator] = useState(false);
  const handleOpen_becomeCreator = () => setOpen_becomeCreator(true);
  const handleClose_becomeCreator = () => setOpen_becomeCreator(false);
  const [open_updatePrice, setOpen_updatePrice] = useState(false);
  const handleOpen_updatePrice = () => setOpen_updatePrice(true);
  const handleClose_updatePrice = () => {
    setOpen_updatePrice(false);
    setUSDPriceShow("none");
  };
  const [open_error, setOpen_error] = useState(false);
  const handleOpen_error = () => setOpen_error(true);
  const handleClose_error = () => setOpen_error(false);
  const [error_msg, setError_msg] = useState("");
  const [USDPriceShow, setUSDPriceShow] = useState("none");

  return (
    <div>
      <Head>
        <title>Kigzag: Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {creatorToken ? (
          <div className="blueTextBlackBackground" style={{ fontSize: 25 }}>
            <div style={{ display: "flex" }}>
              <div className="creatorImageDiv">
                <Jdenticon size={150} value={account.toLowerCase()} />
              </div>
              {creatorToken === ZERO_ADDRESS ? (
                <div className="becomeCreatorButton">
                  <button
                    className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
                    style={buttonStyle}
                    onClick={async () => {
                      handleOpen_becomeCreator();
                    }}
                  >
                    Become a Creator
                  </button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classesModal.modal}
                    open={open_becomeCreator}
                    onClose={handleClose_becomeCreator}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open_becomeCreator}>
                      <div
                        className={classesModal.paper}
                        style={{ color: "white" }}
                      >
                        {transactionStatus === "NOT_STARTED" ? (
                          <div>
                            <form onSubmit={BecomeACreator} className="form">
                              <label className="form inputTitle">
                                Creator/Token Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name Here ..."
                                maxLength={25}
                                style={{ borderRadius: "5px" }}
                                required
                              />
                              <label className="form inputTitle">
                                Creator/Token Symbol
                              </label>
                              <input
                                type="text"
                                id="symbol"
                                name="symbol"
                                placeholder="Symbol Here ..."
                                maxLength={5}
                                style={{ borderRadius: "5px" }}
                                required
                              />
                              <label className="form inputTitle">
                                Price of Creator Token in{" "}
                                {currencyName(chainId)}
                                <label className="form inputSubtext">
                                  (Native Token Payments)
                                </label>
                              </label>
                              <input
                                type="number"
                                id="nativePrice"
                                name="nativePrice"
                                placeholder={`Price in ${currencyName(
                                  chainId
                                )} Here ...`}
                                style={{ borderRadius: "5px" }}
                                required
                              />
                              <label className="form inputTitle">
                                Price of Creator Token in USD
                                <label className="form inputSubtext">
                                  (USDC and DAI Payments)
                                </label>
                              </label>
                              <input
                                type="number"
                                id="usdPrice"
                                name="usdPrice"
                                placeholder="Price in USD Here ..."
                                style={{ borderRadius: "5px" }}
                                required
                              />
                              <button
                                type="submit"
                                className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
                                style={buttonStyle}
                              >
                                Become a Creator
                              </button>
                            </form>
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Image
                              src={waitingGif}
                              alt=""
                              width={200}
                              height={200}
                            />
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
                </div>
              ) : (
                <div className="description">
                  <div
                    style={{
                      minWidth: "25vw",
                      width: "30vw",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {creatorTokenName} ({creatorTokenSymbol})
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            color: "grey",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "20px",
                            marginBottom: "5px",
                          }}
                        >
                          Native
                        </div>
                        <div style={{ color: "white" }}>
                          {nativeCreatorPrice} {currencyName(chainId)}
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "20px",
                          marginBottom: "5px",
                        }}
                      >
                        <div
                          style={{
                            color: "grey",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "20px",
                            marginBottom: "5px",
                          }}
                        >
                          US Dollar
                        </div>
                        <div style={{ color: "white" }}>
                          {usdCreatorPrice} USD
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "20px",
                          marginBottom: "5px",
                        }}
                      >
                        <div
                          style={{
                            color: "grey",
                            fontWeight: "bold",
                            fontSize: "18px",
                            marginTop: "20px",
                            marginBottom: "5px",
                          }}
                        >
                          Total Supply
                        </div>
                        <div style={{ color: "white" }}>
                          {creatorTokenTotalSupply}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ marginRight: "10px" }}>
                        {user[0] && user[0].twitterhandle ? (
                          <a
                            href={
                              "https://twitter.com/" + user[0].twitterhandle
                            }
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={twitter}
                              alt=""
                              width={25}
                              height={20}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        {user[0] && user[0].discord ? (
                          <a
                            href={
                              "https://discord.com/invite/" + user[0].discord
                            }
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={discord}
                              alt=""
                              width={25}
                              height={25}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        {user[0] && user[0].tiktok ? (
                          <a
                            href={"https://www.tiktok.com/@" + user[0].tiktok}
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image src={tiktok} alt="" width={25} height={25} />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        {user[0] && user[0].instagram ? (
                          <a
                            href={"https://instagram.com/" + user[0].instagram}
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={instagram}
                              alt=""
                              width={25}
                              height={25}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        {user[0] && user[0].youtube ? (
                          <a
                            href={
                              "https://www.youtube.com/c/" +
                              user[0].youtube
                                .toString()
                                .toLowerCase()
                                .replace(" ", "")
                            }
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={youtube}
                              alt=""
                              width={25}
                              height={20}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div style={{ marginRight: "10px" }}>
                        {user[0] && user[0].website ? (
                          <a
                            href={user[0].website}
                            style={{ marginTop: "5px", marginLeft: "5px" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Image
                              src={website}
                              alt=""
                              width={25}
                              height={20}
                            />
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full px-4 py-1 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <button>
                          <Settings
                            style={{
                              color: "#3b82f6",
                              height: "40px",
                              width: "40px",
                            }}
                          />
                        </button>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-blue-500 text-white"
                                  : "text-blue-500"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              style={{ fontSize: 18, justifyContent: "center" }}
                              onClick={() => {
                                handleOpen_updatePrice();
                              }}
                            >
                              Update Price
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-blue-500 text-white"
                                  : "text-blue-500"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              style={{ fontSize: 18, justifyContent: "center" }}
                              onClick={() => {
                                handleOpen_updatePrice();
                              }}
                            >
                              Airdrop
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classesModal.modal}
                    open={open_updatePrice}
                    onClose={handleClose_updatePrice}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open_updatePrice}>
                      <div className={classesModal.paper}>
                        {transactionStatus === "NOT_STARTED" ? (
                          <div>
                            <form onSubmit={UpdateCTPrice} className="form">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                                onClick={() => {
                                  setUSDPriceShow("no");
                                }}
                              >
                                <input
                                  type="radio"
                                  id="nativer"
                                  name="fav_language"
                                  value="nativer"
                                  style={{ margin: "10px" }}
                                />
                                <label
                                  htmlFor="nativer"
                                  style={{
                                    padding: "5px",
                                    color: "white",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {currencyName(chainId)} Price
                                </label>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                                onClick={() => {
                                  setUSDPriceShow("yes");
                                }}
                              >
                                <input
                                  type="radio"
                                  id="usdr"
                                  name="fav_language"
                                  value="usdr"
                                  style={{ margin: "10px" }}
                                />
                                <label
                                  htmlFor="usdr"
                                  style={{
                                    padding: "5px",
                                    color: "white",
                                    fontWeight: "bold",
                                  }}
                                >
                                  USD Price
                                </label>
                              </div>
                              {USDPriceShow === "none" ? (
                                <></>
                              ) : (
                                <>
                                  {USDPriceShow === "yes" ? (
                                    <>
                                      <label className="form inputTitle">
                                        Price of {creatorTokenSymbol} in USD
                                        <label className="form inputSubtext">
                                          (USDC and DAI Payments)
                                        </label>
                                      </label>
                                      <input
                                        type="number"
                                        id="usdPrice"
                                        name="usdPrice"
                                        placeholder="Price in USD Here ..."
                                        style={{ borderRadius: "5px" }}
                                        required
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <label className="form inputTitle">
                                        Price of {creatorTokenSymbol} in{" "}
                                        {currencyName(chainId)}
                                        <label className="form inputSubtext">
                                          (Native Token Payments)
                                        </label>
                                      </label>
                                      <input
                                        type="number"
                                        id="nativePrice"
                                        name="nativePrice"
                                        placeholder={`Price in ${currencyName(
                                          chainId
                                        )} Here ...`}
                                        style={{ borderRadius: "5px" }}
                                        required
                                      />
                                    </>
                                  )}
                                  <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
                                    style={buttonStyle}
                                  >
                                    Update
                                  </button>
                                </>
                              )}
                            </form>
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Image
                              src={waitingGif}
                              alt=""
                              width={200}
                              height={200}
                            />
                            <Link style={{ marginTop: "10px" }}>
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
                                style={{
                                  fontSize: 20,
                                  fontWeight: "bold",
                                  color: "white",
                                }}
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
                </div>
              )}
            </div>
            <ProfileTabs onCreatorProfile={false} creator="" />
          </div>
        ) : (
          <>
            {typeof account !== "string" ? (
              <ConnectToWallet />
            ) : (
              <>
                <CircularProgress
                  style={{ display: "flex", margin: "auto", height: "80vh" }}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
