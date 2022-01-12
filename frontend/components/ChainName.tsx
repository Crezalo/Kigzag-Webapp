import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { networkName } from "../util";


type AccountProps = {
    triedToEagerConnect: boolean;
};

const ChainName = ({ triedToEagerConnect }: AccountProps) => {
    const { active, error, chainId, account, library } =
      useWeb3React();
  
    const {
      stopOnboarding,
    } = useMetaMaskOnboarding();
  
    // manage connecting state for injected connector
    const [connecting, setConnecting] = useState(false);
    useEffect(() => {
      if (active || error) {
        setConnecting(false);
        stopOnboarding();
      }
    }, [active, error, stopOnboarding]);
  
    const ENSName = useENSName(account);
  
    const isConnected = typeof account === "string" && !!library;
  
    if (error) {
      if(error.name=="UnsupportedChainIdError"){
        return null;
      }
      console.log(error.name)
      return null;
    }
    
    if (!triedToEagerConnect) {
        return null;
    }
    
    if (typeof account !== "string") {
    return null;
    }

    return (
        <div 
            className="outline text-green-500 outline-offset-2 font-bold py-2 px-2 rounded"
            style={{ fontSize: 18, textAlign: "center" }}
        >
            {networkName(chainId)}
        </div>
    );
}

export default ChainName;