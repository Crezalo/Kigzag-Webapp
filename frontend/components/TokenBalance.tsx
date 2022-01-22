import { BigNumber } from "@ethersproject/bignumber";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import {
  useTokenAllowance,
  useTokenBalance,
  useTokenName,
  useTokenSymbol,
  useTokenTotalSupply,
  useTokenContract,
} from "../hooks/ERC20/useTokenContract";
import {
  useCreatorNFTName,
  useCreatorNFTTokenURI,
} from "../hooks/ERC721/useCreatorNFTContract";
import {
  useCreatorFactoryContract,
  useCreatorFactorFee,
  useCreatorFactorFeeTo,
  useCreatorFactorDiscount,
} from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { parseBalance, parsePercent } from "../util";

type TokenBalanceProps = {
  tokenAddress: string;
  symbol: string;
};

const TokenBalance = ({ tokenAddress, symbol }: TokenBalanceProps) => {
  const { account } = useWeb3React<Web3Provider>();
  const tokenContract = useTokenContract(tokenAddress);
  const amount = BigNumber.from("10000000000000000000");
  const creatorfactory = useCreatorFactoryContract(
    "0x00eb20674CD2039B524CC74ed7F23A355D9B3861"
  );
  console.log(creatorfactory);
  return (
    <>
      <p>
        {`${symbol} Balance`}:{" "}
        {parseBalance(useTokenBalance(account, tokenAddress).data ?? "")}
      </p>
      <p>Name: {useTokenName(tokenAddress).data ?? ""}</p>
      <p>Symbol: {useTokenSymbol(tokenAddress).data ?? ""}</p>
      <p>
        TotalSupply: {parseBalance(useTokenTotalSupply(tokenAddress).data ?? 0)}
      </p>
      {/* <p>
        Address: {account}, Spener: 0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF,
        Allowance:{" "}
        {parseBalance(
          useTokenAllowance(
            account,
            "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF",
            tokenAddress
          ).data ?? ""
        )}
      </p> */}
      <p>
        Creator Factory Fee:{" "}
        {parsePercent(
          useCreatorFactorFee("0x00eb20674CD2039B524CC74ed7F23A355D9B3861")
            .data ?? 0
        )}
        %
      </p>
      <p>
        Creator Factory Discount:{" "}
        {parsePercent(
          useCreatorFactorDiscount("0x00eb20674CD2039B524CC74ed7F23A355D9B3861")
            .data ?? 0
        )}
        %
      </p>
      <p>
        Creator Factory Fee To:{" "}
        {useCreatorFactorFeeTo("0x00eb20674CD2039B524CC74ed7F23A355D9B3861")
          .data ?? ""}
      </p>
      <p>
        Creator NFT Name:{" "}
        {useCreatorNFTName("0x4a1254f48fed3fdc21697aef85e5f347f652cbf9").data ??
          ""}
      </p>
      <p>
        Creator NFT TokenURI 4:{" "}
        {useCreatorNFTTokenURI("0x4a1254f48fed3fdc21697aef85e5f347f652cbf9", 4)
          .data ?? ""}
      </p>
      <button
        onClick={async () => {
          await tokenContract.transfer(
            "0x4fCd14A5855D381460D15770fA235187D93c2B48",
            amount
          );
        }}
      >
        Transfer
      </button>
    </>
  );
};

export default TokenBalance;
