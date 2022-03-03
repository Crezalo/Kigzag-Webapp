import { useRouter } from "next/router";
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
import { creatorFactoryLT, currencyName, parseBalance } from "../util";
import { fontWeight, textAlign, width } from "@mui/system";
import Image from "next/image";
import { getUserData } from "../services/api-service";
import { useEffect, useState } from "react";
import queryString from "query-string";

export default function CreatorProfile() {
  const { chainId, account, library } = useWeb3React();
  const router = useRouter();

  let { address } = router.query;

  if (!address) {
    const url = router.asPath;
    address = queryString.parseUrl(url).query.address;
  }

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
        const res = await getUserData(
          account,
          library,
          (address ?? "").toString()
        );
        setUser(res);
      }
      getData();
    }, [account, chainId]);
  };

  GetUser();

  const creatorToken =
    useCreatorFactoryCreatorToken(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      (address ?? "").toString()
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
    (address ?? "").toString()
  ).data ?? { nativefee: 0, usdfee: 0 };

  const nativeCreatorPrice = parseBalance(nativefee ?? 0);
  const usdCreatorPrice = parseBalance(usdfee ?? 0);

  return (
    <div>
      {creatorToken ? (
        <div className="blueTextBlackBackground" style={{ fontSize: 25 }}>
          <div style={{ display: "flex" }}>
            <div className="creatorImageDiv">
              <Jdenticon size={150} value={address.toString().toLowerCase()} />
            </div>
            <div className="creatorProfileDescription">
              <div
                style={{
                  minWidth: "60vw",
                  // width: "30vw",
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
                    <div style={{ color: "white" }}>{usdCreatorPrice} USD</div>
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
                        display: "flex",
                        flexDirection: "row",
                        width: "150px",
                        height: "45px",
                        margin: "20px",
                        textAlign: "center",
                      }}
                    >
                      <BasicModal
                        modalButtonText={"Get " + creatorTokenSymbol}
                        modalBody={<CreateProposalModal />}
                      />
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
                        href={"https://twitter.com/" + user[0].twitterhandle}
                        style={{ marginTop: "5px", marginLeft: "5px" }}
                        target="_blank"
                        rel="noreferrer"
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
                        href={"https://discord.com/invite/" + user[0].discord}
                        style={{ marginTop: "5px", marginLeft: "5px" }}
                        target="_blank"
                        rel="noreferrer"
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
                        href={"https://www.tiktok.com/@" + user[0].tiktok}
                        style={{ marginTop: "5px", marginLeft: "5px" }}
                        target="_blank"
                        rel="noreferrer"
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
                        href={"https://instagram.com/" + user[0].instagram}
                        style={{ marginTop: "5px", marginLeft: "5px" }}
                        target="_blank"
                        rel="noreferrer"
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
                        rel="noreferrer"
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
            </div>
          </div>
          <ProfileTabs onCreatorProfile={true} creator={address.toString()} />
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
