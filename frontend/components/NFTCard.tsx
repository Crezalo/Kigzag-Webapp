import Router, { useRouter } from "next/router";
import Image from "next/image";
import { useTokenSymbol } from "../hooks/ERC20/useTokenContract";
import {
  useCreatorNFTName,
  useCreatorNFTSymbol,
  useCreatorNFTTokenURI,
} from "../hooks/ERC721/useCreatorNFTContract";
import { useCreatorVaultIdTonftPrice } from "../hooks/LoyaltyTokenContract/useCreatorVaultContract";
import { parseBalance } from "../util";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

const fontStyle = {
  fontSize: 18,
};

interface NFTCardProp {
  nft: any;
}

const NFTCard = ({ nft }: NFTCardProp) => {
  const tokenURI = useCreatorNFTTokenURI(
    nft.nftaddress,
    parseInt(nft.tokenid)
  ).data;
  
  const [metadata, setmetadata] = useState({
    metadata: [],
  });

  const getMetadata = (metadataUrl: string) => {
    useEffect(() => {
      async function fetchData() {
        if(metadataUrl!="https://ipfs.io/ipfs/"){
          const response = await fetch(metadataUrl);
          const jsonData = await response.json();
          setmetadata(jsonData);
        }
      }
      fetchData();
    },[nft.nftaddress,nft.tokenid]);
  };

  let metadataUrl = "https://ipfs.io/ipfs/";
  if (tokenURI) {
    metadataUrl = metadataUrl + tokenURI.substring(7);
  }
  getMetadata(metadataUrl);

  const image =
    "https://ipfs.io/ipfs/" + (metadata["image"] ?? "").substring(7);
  const external_url = nft.tokenuri ?? "";

  const router = useRouter();
  
  return (
    <div>
    {image || external_url ? (
      <section
        className="nftCard"
        onClick={() =>
          Router.push({
            pathname: "/nft",
            query: { contract: nft.nftaddress, tokenId: nft.tokenid },
          })
        }
      >
        <div className="nftCardImage">
          {external_url != "" ? (
            <Image
              src={external_url}
              alt="Loading ..."
              width={170}
              height={170}
            />
          ) : (
            <Image
              src={image}
              alt="Loading ..."
              width={170}
              height={170}
            />
          )}
        </div>
        <div className="nftCardDetails">
          <p style={fontStyle}>
            {useCreatorNFTName(nft.nftaddress).data ?? ""} (
            {useCreatorNFTSymbol(nft.nftaddress).data ?? ""})
          </p>
          <p style={fontStyle}>#{nft.tokenid}</p>
          <p style={fontStyle}>
            Price: {parseBalance(useCreatorVaultIdTonftPrice(nft.vault, Number(nft.tokenid)-1).data??0)} {useTokenSymbol(nft.nftaddress).data ?? ""}
          </p>
        </div>
      </section>
    ) : (
      <CircularProgress
        style={{ display: "flex", margin: "auto", height: "80vh" }}
      />
    )}
    </div>
  );
};
export default NFTCard;
