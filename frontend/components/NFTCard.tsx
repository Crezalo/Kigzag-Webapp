import Image from "next/image";

interface NFTCardProp {
  note: string;
}
const NFTCard = ({ note }: NFTCardProp) => {
  return (
    <section className="nftCard">
      <div className="nftCardImage">
        <Image
          src="/../public/favicon.png"
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
