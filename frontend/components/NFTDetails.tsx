import { useWeb3React } from "@web3-react/core";
import { formatBlockExplorerLink, parseBalance, shortenHex } from "../util";
import useENSName from "../hooks/useENSName";
import Router from "next/router";
import { useTokenName, useTokenSymbol } from "../hooks/ERC20/useTokenContract";
import {
  useCreatorNFTName,
  useCreatorNFTOwnerOf,
  useCreatorNFTSymbol,
  useCreatorNFTTokenURI,
} from "../hooks/ERC721/useCreatorNFTContract";
import { CSSProperties } from "react";
import { LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST } from "../constants/chains";
import {
  useCreatorFactoryCreatorToken,
  useCreatorFactoryCreatorVault,
} from "../hooks/LoyaltyTokenContract/useCreatorFactoryContract";
import { ZERO_ADDRESS } from "../constants/misc";
import { useCreatorVaultIdTonftPrice } from "../hooks/LoyaltyTokenContract/useCreatorVaultContract";

const leftStyle: CSSProperties = { width: "30%", float: "left", fontSize: 20 };
const rightStyle: CSSProperties = { width: "70%", float: "left", fontSize: 20 };
const buttonStyle: CSSProperties = {
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
  width: "40%",
  margin: "70px 20px 10px 0px",
};

interface NFTDetailsProp {
  contract: string;
  tokenid: string;
  vault: string;
  creator: string;
  status: string;
  name: string;
}

const NFTDetails = ({
  contract,
  tokenid,
  vault,
  creator,
  status,
  name,
}: NFTDetailsProp) => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    library,
    setError,
    deactivate,
  } = useWeb3React();

  const nftContractName = useCreatorNFTName(contract).data ?? "";
  const nftName = name;
  const nftSymbol = useCreatorNFTSymbol(contract).data ?? "";

  if (vault == ZERO_ADDRESS && vault) {
    vault =
      useCreatorFactoryCreatorVault(
        LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
        creator
      ).data ?? "";
  }

  const price =
    parseBalance(
      useCreatorVaultIdTonftPrice(vault, Number(tokenid) - 1).data ?? 0
    ) +
    " " +
    nftSymbol;

  const nullPrice = "0.000 " + (useTokenSymbol(contract).data ?? "");

  const creatorToken =
    useCreatorFactoryCreatorToken(
      LOYALTY_TOKEN_CREATOR_FACTORY_ADDRESS_LIST[chainId],
      creator
    ).data ?? "";

  const creatorTokenSymbol = useTokenSymbol(creatorToken).data ?? "";
  const creatorTokenName = useTokenName(creatorToken).data ?? "";

  const ownedBy = useCreatorNFTOwnerOf(contract, Number(tokenid)).data ?? "";
  return (
    <div className="nftPageDetails text-white">
      <p className="text-blue-500" style={leftStyle}>
        Creator:
      </p>
      <p
        style={{
          ...rightStyle,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p>{creatorTokenName}&nbsp;</p>
        <button
          onClick={() => {
            Router.push({
              pathname: "/creatorprofile",
              query: { address: creator },
            });
          }}
          className="text-blue-500"
        >
          ({useENSName(creator) || shortenHex(creator, 2)})
        </button>
      </p>
      <br />
      <br />
      <p className="text-blue-500" style={leftStyle}>
        Collection:
      </p>
      <p style={rightStyle}>
        {nftContractName} ({nftSymbol})
      </p>
      <br />
      <br />
      <p className="text-blue-500" style={leftStyle}>
        Name:
      </p>
      <p style={rightStyle}>{nftName ? nftName : "Bored Ape"}</p>
      <br />
      <br />
      <p className="text-blue-500" style={leftStyle}>
        Token Id:
      </p>
      <p style={rightStyle}>#{tokenid}</p>
      <br />
      <br />
      <p className="text-blue-500" style={leftStyle}>
        Contract:
      </p>
      <p className="text-blue-500" style={rightStyle}>
        <a
          {...{
            href: formatBlockExplorerLink("Account", [chainId, contract, ""]),
            target: "_blank",
            rel: "noopener noreferrer",
          }}
          style={{ display: "flex", flexDirection: "row", width: "50%" }}
        >
          ({useENSName(contract) || shortenHex(contract, 2)})
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17px"
            height="17px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C3C5CB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ marginLeft: "12px" }}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </p>
      <br />
      <br />
      <p className="text-blue-500" style={leftStyle}>
        Owner:
      </p>
      <p
        style={{
          ...rightStyle,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <a
          {...{
            href: formatBlockExplorerLink("Owner", [
              chainId,
              contract,
              ownedBy,
            ]),
            target: "_blank",
            rel: "noopener noreferrer",
          }}
          style={{ display: "flex", flexDirection: "row", width: "50%" }}
          className="text-blue-500"
        >
          {status === "UNLISTED" || status === "LISTED"
            ? "Vault"
            : useENSName(ownedBy) || shortenHex(ownedBy, 2)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17px"
            height="17px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C3C5CB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ marginLeft: "12px" }}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </p>
      <br />
      <br />
      <p className="text-blue-500" style={leftStyle}>
        Price:{" "}
      </p>
      <p className="text-white" style={rightStyle}>
        {price}
      </p>
      <br />
      <br />
      {status === "LISTED" ? (
        <button
          className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
          style={buttonStyle}
          onClick={() => {}}
        >
          Buy
        </button>
      ) : (
        <></>
      )}
      {status === "UNLISTED" ? (
        <div
          className="w-full bg-yellow-500 text-white px-2 py-2 rounded"
          style={{
            ...buttonStyle,
            marginLeft: "40px",
          }}
        >
          Not For Sale
        </div>
      ) : (
        <></>
      )}
      {status === "SOLD" ? (
        <button
          className="w-full bg-blue-500 text-white px-2 py-2 rounded buyButton"
          style={buttonStyle}
          onClick={() => {}}
        >
          Place a bid
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NFTDetails;
