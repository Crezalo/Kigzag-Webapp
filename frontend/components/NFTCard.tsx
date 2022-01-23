import Router, { useRouter } from "next/router";
import Image from "next/image";
import { useTokenSymbol } from "../hooks/ERC20/useTokenContract";
import {
  useCreatorNFTName,
  useCreatorNFTSymbol,
} from "../hooks/ERC721/useCreatorNFTContract";
import nft from "../pages/nft";

interface NFTCardProp {
  nft: string[];
}
const NFTCard = ({ nft }: NFTCardProp) => {
  const router = useRouter();
  return (
    <section
      className="nftCard"
      onClick={() =>
        Router.push({
          pathname: "/nft",
          query: { contract: nft[0], tokenId: nft[1] },
        })
      }
    >
      <div className="nftCardImage">
        <Image
          src="/../public/xeldorado.png"
          alt="Picture of the author"
          width={180}
          height={180}
        />
      </div>
      <div className="nftCardDetails">
        <p style={{ fontSize: 18 }}>
          {useCreatorNFTName(nft[0]).data ?? ""} (
          {useCreatorNFTSymbol(nft[0]).data ?? ""})
        </p>
        <p style={{ fontSize: 18 }}>#{nft[1]}</p>
        <p style={{ fontSize: 18 }}>
          Price: {nft[2]} {useTokenSymbol(nft[3]).data ?? ""}
        </p>
      </div>
    </section>
  );
};
export default NFTCard;
