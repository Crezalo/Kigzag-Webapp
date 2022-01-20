import Router, { useRouter } from "next/router";
import Image from "next/image";

interface NFTCardProp {
  note: string;
}
const NFTCard = ({ note }: NFTCardProp) => {
  const router = useRouter();
  return (
    <section
      className="nftCard"
      onClick={() =>
        Router.push({
          pathname: "/nft",
          query: { data: note },
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
        <h2>Name - IPDP</h2>
        <p>TokenId</p>
        <p style={{ fontSize: "smaller" }}>Price - {note}</p>
      </div>
    </section>
  );
};
export default NFTCard;
