
interface NFTDetailsProp {
  notes: any;
}

const NFTDetails = ({ notes }: NFTDetailsProp) => {
  const { contract, tokenId } = notes;
  return (
    <div className="nftPageDetails">
      <p>Collection Name</p>
      <p className="triad" style={{ justifyContent: "left" }}>
        Flying Horse
      </p>
      <p className="triad">Token Id: {tokenId}</p>
      <p className="triad">200 CT1</p>
      <p style={{ paddingRight: "50px" }}>
        Drop 2 of Semiosis is 10 animated pieces, created to reflect the
        movement all around us. Signs, symbols and signals are everywhere around
        us in the built environment. They show us the way, warn us, excite us.
        But on their own they have no meaning. We all learn a shared visual
        language, devoid of words, to help us navigate the world. Semiosis is my
        first generative collection, featuring 25 unique symbols and 8 different
        colours.
      </p>
      <br />
      <p color="text3" style={{ width: "25%", float: "left" }}>
        Created By:
      </p>
      <p style={{ width: "75%", float: "left" }}>
        0x14dC79964da2C08b23698B3D3cc7Ca32193d9955
      </p>
      <p color="text3" style={{ width: "25%", float: "left" }}>
        Contract Address:
      </p>
      <p style={{ width: "75%", float: "left" }}>{contract}</p>
      <p color="text3" style={{ width: "25%", float: "left" }}>
        Owned By:
      </p>
      <p style={{ width: "75%", float: "left" }}>ownerAddress</p>
      <p color="text3" style={{ width: "25%", float: "left" }}>
        Blockchain:
      </p>
      <p style={{ width: "75%", float: "left" }}>Polygon</p>
      <p color="text3" style={{ width: "25%", float: "left" }}>
        Token Standard:
      </p>
      <p style={{ width: "75%", float: "left" }}>ERC-721</p>
    </div>
  );
};

export default NFTDetails;
