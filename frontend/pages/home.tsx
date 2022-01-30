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
import { creatorFactoryLT, parseBalance } from "../util";

export default function Home() {
  const { chainId, account, library } = useWeb3React();

  const creatorToken = useCreatorFactoryCreatorToken(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    account
  ).data??"";
  
  const nativeToken = NATIVE_TOKEN_SUPPORTED_ADDRESS[chainId] ?? "";
  const usdc = USDC_SUPPORTED_ADDRESS[chainId];
  const dai = DAI_SUPPORTED_ADDRESS[chainId];

  const creatorTokenName = useTokenName(creatorToken).data;
  const creatorTokenSymbol = useTokenSymbol(creatorToken).data;
  const creatorTokenTotalSupply = parseBalance(useTokenTotalSupply(creatorToken).data ?? 0);
  
  const nativeTokenSymbol = useTokenSymbol(nativeToken.toString()).data;

  const {nativefee, usdfee} = useCreatorFactoryCreatorSaleFee(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    account
  ).data?? {nativefee: 0, usdfee: 0};

  const nativeCreatorPrice = parseBalance(nativefee ?? 0);
  const usdCreatorPrice = parseBalance(usdfee ?? 0);

  return (
    <div>
      {creatorToken ? (
        <div className="greenTextBlackBackground" style={{ fontSize: 25 }}>
          <div style={{ display: "flex" }}>
            <div className="creatorImageDiv">
              <Jdenticon size={200} value={account} />
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
                <div style={{minWidth:"25%"}}>
                  <div>{creatorTokenName} ({creatorTokenSymbol})</div>
                  <div>Price:</div>
                  <div style={{fontSize: 20, marginLeft: "50px"}}>1 {creatorTokenSymbol} = {nativeCreatorPrice} {nativeTokenSymbol}</div>
                  <div style={{fontSize: 20, marginLeft: "50px"}}>1 {creatorTokenSymbol} = {usdCreatorPrice} USD</div>
                  <div>Total Supply: {creatorTokenTotalSupply}</div>
                  {/* <div>Social Handles</div> */}
                </div>
                <div>
                  <Settings style={{color:"#4EC660",height:"40px", width:"40px"}}/>
                </div>
              </div>
            )}
          </div>
          <div style={{ marginTop: "30px" }}></div>
          <ProfileTabs  onCreatorProfile={false} creator=""/>
        </div>
      ) : (
        <>
          {(typeof account !== "string")? (
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
