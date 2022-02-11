import { useWeb3React } from "@web3-react/core";
import Jdenticon from "react-jdenticon";
import Router from "next/router";
import { useCreatorFactoryCreatorSaleFee, useCreatorFactoryCreatorToken } from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { useTokenName, useTokenSymbol } from "../hooks/ERC20/useTokenContract";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import { parseBalance } from "../util";

interface CreatorCardProp {
  creator: string;
}
const CreatorCard = ({ creator }: CreatorCardProp) => {
  const { account, chainId} = useWeb3React();

  const creatorToken = useCreatorFactoryCreatorToken(LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId], creator).data??"";

  const name = useTokenName(creatorToken).data??"";
  const symbol = useTokenSymbol(creatorToken).data??"";
  
  const {nativefee, usdfee} = useCreatorFactoryCreatorSaleFee(
    LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
    creator
  ).data?? {nativefee: 0, usdfee: 0};

  const nativeCreatorPrice = parseBalance(nativefee ?? 0);
  const usdCreatorPrice = parseBalance(usdfee ?? 0);

  return (
    <section
      className="creatorCard"
      onClick={() =>
        Router.push({
          pathname: "/creatorprofile",
          query: { address: creator },
        })
      }
    >
      <div className="creatorCardImage">
        <Jdenticon size={180} value={creator.toLocaleLowerCase()} />
      </div>
      <div style={{padding:"0px 5px 8px 15px"}}>
        <h2>{name.length>25?name.substring(0,25)+"..": name} ({symbol})</h2>
        <h3>{nativeCreatorPrice} ({symbol})</h3>
        {/* <div className="rightAlignCard">
          <p>{note}</p>
          <p style={{ fontSize: "smaller" }}>Holders</p>
        </div> */}
      </div>
    </section>
  );
};
export default CreatorCard;
