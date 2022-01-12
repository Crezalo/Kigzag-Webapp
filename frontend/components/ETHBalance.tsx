import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useETHBalance from "../hooks/useETHBalance";
import { currencyName, parseBalance } from "../util";

const ETHBalance = () => {
  const { account, chainId } = useWeb3React<Web3Provider>();
  const { data } = useETHBalance(account);

  return <p>{parseBalance(data ?? 0)} {currencyName(chainId)}</p>;
};

export default ETHBalance;
