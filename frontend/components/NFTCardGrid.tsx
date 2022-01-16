import Image from "next/image";

interface NFTCardProp {
  note: string;
}
export const NFTCard = ({ note }: NFTCardProp) => {
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
      <div className="container">
        <h2>IPDP $5 </h2>
        <div className="rightAlignCard">
          <p>{note}</p>
          <p style={{ fontSize: "smaller" }}>Holders</p>
        </div>
      </div>
    </section>
  );
};

interface NFTCardGridProp {
  notes: string[];
}
const NFTCardGrid = ({ notes }: NFTCardGridProp) => {
  return (
    <div className="jobs">
      {notes.map((note) => (
        <NFTCard note={note} />
      ))}
    </div>
  );
};
export default NFTCardGrid;
