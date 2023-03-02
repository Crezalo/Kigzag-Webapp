import { Rating } from "@mui/material";
import month from "../consts/months";
import AuthService from "../services/auth-services";
import VerifiedIcon from "@mui/icons-material/Verified";
import CreatorDP from "./CreatorDP";

interface MerchReviewCardProp {
  merchReview: {
    reviewid: string;
    productid: string;
    username: string;
    ratings: number;
    commenttitle: string;
    commentdescription: string;
    createdat: string;
    updatedat: string;
  };
}
const MerchReviewCard = ({ merchReview }: MerchReviewCardProp) => {
  const username = AuthService.getUsername();

  return (
    <div
      className="reviewCard pointer"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      <section className="videoCard MerchReviewCardImageElement">
        <div className="videoCardImage"></div>
      </section>
      <div style={{ padding: "10px 5px 8px 0px" }}>
        <CreatorDP creator={merchReview.username} height={70} width={70} />
        <h1 style={{ fontSize: "14px", color: "grey" }}>
          <VerifiedIcon />
          Verified
        </h1>
        <h1 style={{ fontSize: "12px", fontWeight: "bold", color: "#3B82F6" }}>
          {merchReview.username}
        </h1>
      </div>
      <div>
        <div>
          <Rating
            name="hover-feedback"
            value={merchReview.ratings}
            precision={1}
            readOnly
          />
        </div>
        <div>
          <h1 style={{ fontSize: "16px", fontWeight: "bold" }}>
            {merchReview.commenttitle}
          </h1>
          <h1 style={{ fontSize: "14px", color: "grey" }}>
            Reviewed in India on{" "}
            {new Date(Date.parse(merchReview.updatedat)).getDate() +
              " " +
              month[new Date(Date.parse(merchReview.updatedat)).getMonth()] +
              " " +
              new Date(Date.parse(merchReview.updatedat)).getFullYear()}
          </h1>
          <h1 style={{ fontSize: "15px" }}>{merchReview.commentdescription}</h1>
        </div>
      </div>
    </div>
  );
};
export default MerchReviewCard;
