import { useRouter } from "next/router";
import Image from "next/image";
import NFTDetails from "../components/NFTDetails";
import NFTProperties from "../components/NFTProperties";
import { useCreatorNFTTokenURI } from "../hooks/ERC721/useCreatorNFTContract";
import { useEffect, useState } from "react";

export default function NFT() {
  const router = useRouter();
  const { contract, tokenId } = router.query;

  const tokenURI = useCreatorNFTTokenURI(
    contract.toString(),
    parseInt(tokenId.toString())
  ).data;

  let metadata: any;
  let metadataUrl = "";

  const getMetadata = () => {
    fetch(metadataUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        metadata = data;
      })
      .catch(function (err) {
        console.log(err, " error");
      });
  };

  console.log(tokenURI);

  if (tokenURI) metadataUrl = "https://ipfs.io/ipfs/" + tokenURI.substring(7);

  if (metadataUrl != "") getMetadata();

  useEffect(() => {
    if (tokenURI) metadataUrl = "https://ipfs.io/ipfs/" + tokenURI.substring(7);
  }, [contract, tokenId, tokenURI]);

  useEffect(() => {
    if (tokenURI != "") getMetadata();
  }, [contract, tokenId, tokenURI]);

  const image =
    "https://ipfs.io/ipfs/" + (metadata["image"] ?? "").substring(7);
  const external_url = metadata["external_url"] ?? "";
  const name = metadata["name"] ?? "";
  const attributes = metadata["attributes"] ?? "";
  console.log(attributes);
  const description = metadata["description"] ?? "";

  return (
    <>
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
        <div>
          <NFTProperties properties={attributes} description={description} />
        </div>
      </div>
    </>
  );
}
