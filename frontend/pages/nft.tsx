import { useRouter } from "next/router";
import Image from "next/image";
import NFTDetails from "../components/NFTDetails";
import NFTProperties from "../components/NFTProperties";
import { useCreatorNFTTokenURI } from "../hooks/ERC721/useCreatorNFTContract";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useWeb3React } from "@web3-react/core";
import { getNFTForGivenTokenId } from "../services/api-service";

export default function NFT() {
  const router = useRouter();
  const { contract, tokenId, creator, status, vault } = router.query;

  const { chainId, account, library } = useWeb3React();

  const [nft, setNft] = useState({
    tokenuri: "",
  });

  const getNFT = () => {
    useEffect(() => {
      async function getData() {
        const res = await getNFTForGivenTokenId(
          account,
          library,
          contract.toString(),
          chainId,
          tokenId.toString()
        );
        setNft(res);
      }
      getData();
    }, [contract, tokenId, chainId]);
  };

  getNFT();

  const tokenURI = useCreatorNFTTokenURI(
    contract.toString(),
    parseInt(tokenId.toString())
  ).data;

  const [metadata, setmetadata] = useState({
    metadata: [],
  });

  const getMetadata = (metadataUrl: string) => {
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(metadataUrl);
        const jsonData = await response.json();
        setmetadata(jsonData);
      }
      fetchData();
    }, [chainId, contract, tokenId]);
  };

  let metadataUrl = "https://ipfs.io/ipfs/";
  if (tokenURI) {
    metadataUrl = metadataUrl + tokenURI.substring(7);
  }
  getMetadata(metadataUrl);

  const image =
    "https://ipfs.io/ipfs/" + (metadata["image"] ?? "").substring(7);

  let external_url;

  if (nft[0]) {
    external_url = nft[0].tokenuri ?? "";
  } else {
    external_url = "";
  }
  const name = metadata["name"] ?? "";
  const attributes = metadata["attributes"] ?? "";
  const description = metadata["description"] ?? "";

  return (
    <div>
      {attributes ? (
        <div className="nftPage">
          <div>
            <div className="nftPageImage">
              {external_url ? (
                <Image
                  src={external_url}
                  alt="Loading ..."
                  width={550}
                  height={550}
                />
              ) : (
                <Image src={image} alt="Loading ..." width={550} height={550} />
              )}
            </div>
            <NFTDetails
              contract={contract.toString()}
              tokenid={tokenId.toString()}
              creator={creator.toString()}
              status={status.toString()}
              vault={vault.toString()}
              name={name}
            />
          </div>
          <NFTProperties properties={attributes} description={description} />
        </div>
      ) : (
        <CircularProgress
          style={{ display: "flex", margin: "auto", height: "80vh" }}
        />
      )}
    </div>
  );
}
