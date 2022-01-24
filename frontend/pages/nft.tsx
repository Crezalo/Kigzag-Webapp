import { useRouter } from "next/router";
import Image from "next/image";
import NFTDetails from "../components/NFTDetails";
import NFTProperties from "../components/NFTProperties";
import { useCreatorNFTTokenURI } from "../hooks/ERC721/useCreatorNFTContract";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function NFT() {
  const router = useRouter();
  const { contract, tokenId } = router.query;

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
    });
  };

  let metadataUrl = "https://ipfs.io/ipfs/";
  if (tokenURI) {
    metadataUrl = metadataUrl + tokenURI.substring(7);
  }
  getMetadata(metadataUrl);

  const image =
    "https://ipfs.io/ipfs/" + (metadata["image"] ?? "").substring(7);
  const external_url = metadata["external_url"] ?? "";
  const name = metadata["name"] ?? "";
  const attributes = metadata["attributes"] ?? "";
  const description = metadata["description"] ?? "";

  return (
    <div>
      {attributes ? (
        <div className="nftPage">
          <div>
            <div className="nftPageImage">
              {external_url != "" ? (
                <Image
                  src={external_url}
                  alt="Image Not Working"
                  width={550}
                  height={550}
                />
              ) : (
                <Image
                  src={image}
                  alt="Image Not Working"
                  width={550}
                  height={550}
                />
              )}
            </div>
            <NFTDetails notes={router.query} name={name} />
          </div>
          <NFTProperties properties={attributes} description={description} />
        </div>
      ) : (
        <CircularProgress
          style={{ display: "flex", margin: "auto", height: "80vh" }}
        />
        // <Spinner />
        // <p>Loading</p>
      )}
    </div>
  );
}
