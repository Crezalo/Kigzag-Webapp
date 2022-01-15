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
import { parseBalance } from "../util";

type TokenBalanceProps = {
  tokenAddress: string;
  symbol: string;
};

const TokenBalance = ({ tokenAddress, symbol }: TokenBalanceProps) => {
  const { account } = useWeb3React<Web3Provider>();
  const tokenContract = useTokenContract(tokenAddress);
  const amount = BigNumber.from("10000000000000000000");
  console.log(useTokenName(tokenAddress).data);
  return (
    <>
      <p>
        {`${symbol} Balance`}:{" "}
        {parseBalance(useTokenBalance(account, tokenAddress).data ?? 0)}
      </p>
      <p>Name: {useTokenName(tokenAddress).data ?? 0}</p>
      <p>Symbol: {useTokenSymbol(tokenAddress).data ?? 0}</p>
      <p>
        TotalSupply: {parseBalance(useTokenTotalSupply(tokenAddress).data ?? 0)}
      </p>
      <p>
        Address: {account}, Spener: 0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF,
        Allowance:{" "}
        {parseBalance(
          useTokenAllowance(
            account,
            "0xBD5a0e448Efb029688b7752d327d873Dc79A1bfF",
            tokenAddress
          ).data ?? 0
        )}
      </p>
      <button onClick={async ()=>{await tokenContract.transfer("0x4fCd14A5855D381460D15770fA235187D93c2B48", amount )}}>
        Transfer
      </button>
    </>
  );
};

export default TokenBalance;
