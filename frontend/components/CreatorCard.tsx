import Image from "next/image";

interface CreatorCardProp {
  note: string;
}
const CreatorCard = ({ note }: CreatorCardProp) => {
  return (
    <section className="card">
      <div className="nftImage">
        <Image
          src="/../public/xeldorado.png"
          alt="Picture of the author"
          width={180}
          height={180}
        />
      </div>
      <div className="nftDetails">
        <h2>IPDP $5 </h2>
        <div className="rightAlignCard">
          <p>{note}</p>
          <p style={{ fontSize: "smaller" }}>Holders</p>
        </div>
      </div>
    </section>
  );
};
export default CreatorCard;
