import { CircularProgress } from "@material-ui/core";
import Settings from "@mui/icons-material/Settings";
import { useWeb3React } from "@web3-react/core";
import Jdenticon from "react-jdenticon";
import BasicModal from "../components/BasicModal";
import ConnectToWallet from "../components/ConnectToWallet";
import CreateProposalModal from "../components/CreateProposalModal";
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
import { creatorFactoryLT, parseBalance } from "../util";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getNFTsOfCreator, getUserData } from "../services/api-service";

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

  const getUser = () => {
    useEffect(() => {
      async function getData() {
        const res = await getUserData(account, library, account);
        setUser(res);
      }
      getData();
    }, [account, chainId]);
  };

  getUser();

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

  const nativeTokenSymbol = useTokenSymbol(nativeToken.toString()).data;

  const { nativefee, usdfee } = useCreatorFactoryCreatorSaleFee(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    account
  ).data ?? { nativefee: 0, usdfee: 0 };

  const nativeCreatorPrice = parseBalance(nativefee ?? 0);
  const usdCreatorPrice = parseBalance(usdfee ?? 0);

  return (
    <div>
      {creatorToken ? (
        <div className="greenTextBlackBackground" style={{ fontSize: 25 }}>
          <div style={{ display: "flex" }}>
            <div className="creatorImageDiv">
              <Jdenticon size={250} value={account.toLocaleLowerCase()} />
            </div>
            {creatorToken === ZERO_ADDRESS ? (
              <div className="becomeCreatorButton">
                <BasicModal
                  modalButtonText="Become a Creator"
                  modalBody={<CreateProposalModal />}
                />
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
                  <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                    {creatorTokenName} ({creatorTokenSymbol})
                  </div>
                  <div
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "20px",
                      marginBottom: "12px",
                    }}
                  >
                    Price
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        color: "grey",
                        fontSize: "18px",
                        paddingTop: "2px",
                        marginRight: "2px",
                      }}
                    >
                      Native:
                    </div>
                    <div style={{ color: "white" }}>
                      {nativeCreatorPrice} {nativeTokenSymbol}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "20px",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        color: "grey",
                        fontSize: "18px",
                        paddingTop: "2px",
                        marginRight: "2px",
                      }}
                    >
                      USD:
                    </div>
                    <div style={{ color: "white" }}>{usdCreatorPrice} USD</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div
                      className="w-full bg-grey text-white px-2 py-2 rounded"
                      style={{ width: "150px" }}
                    >
                      <div
                        style={{
                          color: "grey",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        Total Supply
                      </div>
                      <h2
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "18px",
                          marginLeft: "10px",
                        }}
                      >
                        {creatorTokenTotalSupply}
                      </h2>
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
                          href={"https://twitter.com/" + user[0].twitterhandle}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                        >
                          <Image
                            src="/../public/twitter.png"
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
                          href={"https://discord.com/invite/"+user[0].discord}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                        >
                          <Image
                            src="/../public/discord.png"
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
                          href={"https://www.tiktok.com/@"+user[0].tiktok}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                        >
                          <Image
                            src="/../public/tiktok.png"
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
                      {user[0] && user[0].instagram ? (
                        <a
                          href={"https://instagram.com/"+user[0].instagram}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                        >
                          <Image
                            src="/../public/instagram.png"
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
                          href={"https://www.youtube.com/c/"+user[0].youtube.toString().toLocaleLowerCase().replace(" ","")}
                          style={{ marginTop: "5px", marginLeft: "5px" }}
                          target="_blank"
                        >
                          <Image
                            src="/../public/youtube.png"
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
                        >
                          <Image
                            src="/../public/website.png"
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
                {/* <div>
                  <Settings style={{color:"green",height:"40px", width:"40px"}}/>
                </div> */}
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
  );
}
