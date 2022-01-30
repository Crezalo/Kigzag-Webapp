import { useWeb3React } from '@web3-react/core';
import Jazzicon from 'react-jazzicon';
import { useTokenName, useTokenSymbol, useTokenBalance } from '../hooks/ERC20/useTokenContract';
import { formatBlockExplorerLink, parseBalance } from '../util';

interface TokenCardProp {
  tokenAddress: string;
}
const TokenCard = ({ tokenAddress }: TokenCardProp) => {
  const { chainId, account, library } = useWeb3React();
  const tokenName = useTokenName(tokenAddress).data??"";
  const tokenSymbol = useTokenSymbol(tokenAddress).data??"";
  const tokenBalance = parseBalance(useTokenBalance(account, tokenAddress).data??0);

  return (
    <section className="tokenCard">
      <a
          {...{
            href: formatBlockExplorerLink("Owner", [chainId, tokenAddress, account]),
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        >
        <div className="tokenImage">
        <Jazzicon diameter={60} seed={Math.round(Math.random() * 10000000)} />
        </div>
        <div style={{ width: "70%", float: "left", paddingLeft:"20px", fontSize: 16  }}>
          {tokenName.length<=10 ? (
            <h2>{tokenName} ({tokenSymbol})</h2>
          ):(
            <h2>{tokenName.substring(0,8)+".."} ({tokenSymbol})</h2>
          )}
          <p style={{ fontSize: 16, marginTop:"15px" }}>{tokenBalance}</p>
        </div>
      </a>
    </section>
  );
};
export default TokenCard;
