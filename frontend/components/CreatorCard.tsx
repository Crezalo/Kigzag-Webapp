import { useWeb3React } from "@web3-react/core";
import Jdenticon from "react-jdenticon";
import Router from "next/router";
import { useCreatorFactoryCreatorToken } from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { useTokenName, useTokenSymbol } from "../hooks/ERC20/useTokenContract";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";

interface CreatorCardProp {
  creator: string;
}
const CreatorCard = ({ creator }: CreatorCardProp) => {
  const { chainId} = useWeb3React();

  const creatorToken = useCreatorFactoryCreatorToken(LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId], creator).data??"";

  const name = useTokenName(creatorToken).data??"";
  const symbol = useTokenSymbol(creatorToken).data??"";

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
        <Jdenticon size={180} value={creator} />
      </div>
      <div style={{padding:"0px 5px 8px 15px"}}>
        <h2>{name.substring(0,12)+".."}</h2>
        <h3>({symbol})</h3>
        {/* <div className="rightAlignCard">
          <p>{note}</p>
          <p style={{ fontSize: "smaller" }}>Holders</p>
        </div> */}
      </div>
    </section>
  );
};
export default CreatorCard;
