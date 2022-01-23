import { useWeb3React } from "@web3-react/core";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { networkName, switchToNetwork } from "../util";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SupportedChainId } from "../constants/chains";
import { CHAIN_INFO } from "../constants/chaininfo";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const ChainName = ({ triedToEagerConnect }: AccountProps) => {
  const { active, error, chainId, account, library } = useWeb3React();

  const { stopOnboarding } = useMetaMaskOnboarding();

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
    if (error.name == "UnsupportedChainIdError") {
      return null;
    }
    console.log(error.name);
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
      className="outline text-green-500 outline-offset-0 py-1 font-bold rounded"
      style={{ fontSize: 18, textAlign: "center", zIndex:1, outlineWidth: "thin" }}
    >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {networkName(chainId)}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.AVALANCE_MAINNET,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.AVALANCE_MAINNET].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.AVALANCHE_FUJI,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.AVALANCHE_FUJI].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.BSC,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.BSC].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.BSC_TESTNET,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.BSC_TESTNET].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.FANTOM_OPERA,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.FANTOM_OPERA].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.FANTOM_TESTNET,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.FANTOM_TESTNET].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.MOONRIVER,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.MOONRIVER].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.MOONBASE_ALPHA,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.MOONBASE_ALPHA].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.POLYGON_MAINNET,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.POLYGON_MAINNET].label}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-500 text-white" : "text-green-500"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    switchToNetwork({
                      library: library,
                      chainId: SupportedChainId.POLYGON_MUMBAI,
                    });
                  }}
                >
                  {CHAIN_INFO[SupportedChainId.POLYGON_MUMBAI].label}
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ChainName;
