
import { useRouter } from "next/router";
import { CircularProgress} from "@material-ui/core";
import Settings from '@mui/icons-material/Settings';
import { useWeb3React } from "@web3-react/core";
import Jdenticon from "react-jdenticon";
import BasicModal from "../components/BasicModal";
import ConnectToWallet from "../components/ConnectToWallet";
import CreateProposalModal from "../components/CreateProposalModal";
import ProfileTabs from "../components/ProfileTabs";
import { DAI_SUPPORTED_ADDRESS, LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST, NATIVE_TOKEN_SUPPORTED_ADDRESS, USDC_SUPPORTED_ADDRESS } from "../constants/chains";
import { ZERO_ADDRESS } from "../constants/misc";
import {
  useTokenName,
  useTokenSymbol,
  useTokenTotalSupply,
} from "../hooks/ERC20/useTokenContract";
import { useCreatorFactoryCreatorDAO, useCreatorFactoryCreatorSaleFee, useCreatorFactoryCreatorToken } from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { creatorFactoryLT, currencyName, parseBalance } from "../util";
import { fontWeight, textAlign, width } from "@mui/system";
import Image from "next/image";
import { getUserData } from "../services/api-service";
import { useEffect, useState } from "react";

export default function CreatorProfile() {
  const { chainId, account, library } = useWeb3React();
  const router = useRouter();

  let { address } = router.query;

  if(address){
    console.log(address)
  }
  else{
    console.log(router.pathname);
    console.log(router.pathname);
    const url = router.pathname;
    address = url.split("=")[1]
    console.log(address)
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

  const getUser = () => {
    useEffect(() => {
      async function getData() {
        const res = await getUserData(account, library, address.toString());
        setUser(res);
      }
      getData();
    }, [account, chainId]);
  };

  getUser();

  const creatorToken = useCreatorFactoryCreatorToken(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    address.toString()
  ).data??"";
  
  const nativeToken = NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId] ?? "";
  const usdc = USDC_SUPPORTED_ADDRESS[chainId];
  const dai = DAI_SUPPORTED_ADDRESS[chainId];

  const creatorTokenName = useTokenName(creatorToken).data;
  const creatorTokenSymbol = useTokenSymbol(creatorToken).data;
  const creatorTokenTotalSupply = parseBalance(useTokenTotalSupply(creatorToken).data ?? 0);
  
  // const nativeTokenSymbol = useTokenSymbol(nativeToken.toString()).data;

  const {nativefee, usdfee} = useCreatorFactoryCreatorSaleFee(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    address.toString()
  ).data?? {nativefee: 0, usdfee: 0};

  const nativeCreatorPrice = parseBalance(nativefee ?? 0);
  const usdCreatorPrice = parseBalance(usdfee ?? 0);

  return (
    <div>
      {creatorToken ? (
        <div className="blueTextBlackBackground" style={{ fontSize: 25 }}>
          <div style={{ display: "flex" }}>
            <div className="creatorImageDiv">
              <Jdenticon size={250} value={address.toString().toLocaleLowerCase()} />
            </div>
            {creatorToken === ZERO_ADDRESS ? (
              <div className="becomeCreatorButton">
                <BasicModal
                  modalButtonText="Become a Creator"
                  modalBody={<CreateProposalModal />}
                />
              </div>
            ) : (
              <div className="creatorProfileDescription">
                <div style={{minWidth:"25vw", width: "30vw", justifyContent: "center"}}>
                  <div style={{fontSize:"25px", fontWeight:"bold"}}>{creatorTokenName} ({creatorTokenSymbol})</div>
                  <div style={{color: "grey", fontWeight:"bold", fontSize: "18px", marginTop: "20px", marginBottom: "12px"}}>Price</div>
                  <div style={{display: "flex", flexDirection: "row", marginLeft:"20px", marginBottom:"10px"}}>
                    <div style={{color: "grey", fontSize: "18px",paddingTop: "2px", marginRight: "2px"}}>Native:</div>
                    <div style={{color: "white"}}>{nativeCreatorPrice} {currencyName(chainId)}</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", marginLeft:"20px", marginBottom:"10px"}}>
                    <div style={{color: "grey", fontSize: "18px",paddingTop: "2px", marginRight: "2px"}}>USD:</div>
                    <div style={{color: "white"}}>{usdCreatorPrice} USD</div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", width:"150px", height:"45px", marginTop: "25px", marginBottom: "35px", textAlign: "center"}}>
                    <BasicModal
                      modalButtonText="Join My Fam"
                      modalBody={<CreateProposalModal />}
                    />
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
              </div>
            )}
          </div>
          <ProfileTabs onCreatorProfile={true} creator={address.toString()}/>
        </div>
      ) : (
        <>
          {(typeof address.toString() !== "string")? (
            <ConnectToWallet/>
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
