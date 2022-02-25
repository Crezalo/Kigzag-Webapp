import { Grid } from "@material-ui/core";

interface GridItemProps {
  trait_type: string;
  value: string;
}
const GridItem = ({ trait_type, value }: GridItemProps) => {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid
      className="outline outline-offset-0 px-2 py-2 rounded bidButton"
      style={{ outlineWidth: "thin", margin: 5 }}
      item
      xs={12}
      sm={6}
      md={3}
    >
      <p className="blueTextBlackBackground" style={{ fontSize: 12 }}>
        {trait_type}
      </p>
      <p className="text-white font-bold py-2 px-2" style={{ fontSize: 15 }}>
        {value}
      </p>
      {/* <Paper className={classes.paper}>item</Paper> */}
    </Grid>
  );
};

interface NFTPropertiesProp {
  properties: any;
  description: string;
}

const NFTProperties = ({ properties, description }: NFTPropertiesProp) => {
  const dummy =
    "Drop 2 of Semiosis is 10 animated pieces, created to reflect the movement all around us. Signs, symbols and signals are everywhere around us in the built environment. They show us the way, warn us, excite us. But on their own they have no meaning. We all learn a shared visual language, devoid of words, to help us navigate the world. Semiosis is my first generative collection, featuring 25 unique symbols and 8 different colours.";
  return (
    <div className="nftPageProperties text-white">
      <div className="nftPageProp">
        <p className="text-white font-bold py-2 px-2">Properties</p>
        <Grid className="nftPagePropGrid" container spacing={1}>
          {properties.map((prop, index) => (
            <GridItem
              trait_type={prop["trait_type"]}
              value={prop["value"]}
              key={index}
            />
          ))}
        </Grid>
      </div>
      <div className="nftPageDescription" style={{ textAlign: "center" }}>
        <p className="text-white font-bold py-2 px-2" style={{ fontSize: 18 }}>
          Description
        </p>
        <br />
        <p style={{ fontSize: 15 }}>{description ? description : dummy}</p>
      </div>
    </div>
  );
};

export default NFTProperties;
