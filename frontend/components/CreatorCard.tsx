import Jdenticon from "react-jdenticon";
import Router from "next/router";
import Image from "next/image";
import CreatorDP from "./CreatorDP";

interface CreatorCardProp {
  creator: {
    username: string;
    fname: string;
    lname: string;
    displaypicture: string;
    bio: string;
  };
}
const CreatorCard = ({ creator }: CreatorCardProp) => {
  return (
    <>
      {creator.username ? (
        <>
          <section
            className="creatorCard pointer"
            onClick={() =>
              Router.push({
                pathname: "/creatorprofile",
                query: { address: creator.username },
              })
            }
          >
            <div className="creatorCardImage">
              <CreatorDP creator={creator.username} height={125} width={125} />
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ marginBottom: "5px", fontWeight: "bold" }}>
                {creator.username}
              </h2>
              <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>
                {creator.fname + " " + creator.lname}
              </h2>
              {/* <p
          style={{
            fontSize: "16px",
            height: "7vh",
            overflowX: "hidden",
            overflowY: "hidden",
            padding: "0 5px 0 5px",
            overflowWrap: "break-word",
          }}
        >
          {creator.bio}
        </p> */}
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default CreatorCard;
