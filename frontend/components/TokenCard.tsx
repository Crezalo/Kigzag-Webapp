import Image from "next/image";

interface TokenCardProp {
  note: string;
}
const TokenCard = ({ note }: TokenCardProp) => {
  return (
    <section className="tokenCard">
      <div className="tokenImage">
        <Image
          src="/../public/favicon.png"
          alt="Picture of the author"
          width={60}
          height={60}
        />
      </div>
      <div style={{ width: "70%", float: "left" }}>
        <h2>Token 1(T1) </h2>
        <p style={{ fontSize: "smaller" }}>Qty: {note}</p>
      </div>
    </section>
  );
};
export default TokenCard;
