import { useRouter } from "next/router";
import Image from "next/image";
import NFTDetails from "../components/NFTDetails";
import NFTProperties from "../components/NFTProperties";
import { useCreatorNFTTokenURI } from "../hooks/ERC721/useCreatorNFTContract";
import { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useWeb3React } from "@web3-react/core";
import { getNFTForGivenTokenId } from "../services/archive/api-service";
import ConnectToWallet from "../components/ConnectToWallet";
import queryString from "query-string";
import Head from "next/head";

export default function NFT() {
  const router = useRouter();
  var { contract, tokenId, creator, status, vault } = router.query;

  if (!contract) {
    const url = router.asPath;
    contract = queryString.parseUrl(url).query.contract;
    tokenId = queryString.parseUrl(url).query.tokenId;
    creator = queryString.parseUrl(url).query.creator;
    status = queryString.parseUrl(url).query.status;
    vault = queryString.parseUrl(url).query.vault;
  }

  const { chainId, account, library } = useWeb3React();

  const [nft, setNft] = useState({
    tokenuri: "",
  });

  const GetNFT = () => {
    useEffect(() => {
      async function getData() {
        if (contract && chainId && tokenId) {
          const res = await getNFTForGivenTokenId(
            account,
            library,
            contract.toString(),
            chainId,
            tokenId.toString()
          );
          setNft(res);
        }
      }
      getData();
    }, [contract, tokenId, chainId]);
  };

  GetNFT();

  const tokenURI = useCreatorNFTTokenURI(
    (contract ?? "").toString(),
    parseInt((tokenId ?? "0").toString())
  ).data;

  const [metadata, setmetadata] = useState({
    metadata: [],
  });

  const GetMetadata = (metadataUrl: string) => {
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
  GetMetadata(metadataUrl);

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
      <Head>
        <title>NFT Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                  <Image
                    src={image}
                    alt="Loading ..."
                    width={550}
                    height={550}
                  />
                )}
              </div>
              <NFTDetails
                contract={(contract ?? "").toString()}
                tokenid={(tokenId ?? "").toString()}
                creator={(creator ?? "").toString()}
                status={(status ?? "").toString()}
                vault={(vault ?? "").toString()}
                name={name}
              />
            </div>
            <NFTProperties properties={attributes} description={description} />
          </div>
        ) : (
          <>
            {typeof account !== "string" ? (
              <ConnectToWallet />
            ) : (
              <>
                <CircularProgress
                  style={{ display: "flex", margin: "auto", height: "80vh" }}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
