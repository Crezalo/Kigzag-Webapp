import { useEffect, useState } from "react";
import Jdenticon from "react-jdenticon";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useWeb3React } from "@web3-react/core";
import {
  getVideoDetails,
  getVideoSignedUrl,
  VIDEO_API_URL,
} from "../services/api-service";
import { shortenHex } from "../util";
import { ZERO_ADDRESS } from "../constants/misc";
import useENSName from "../hooks/useENSName";
import Router, { useRouter } from "next/router";

export default function NFT() {
  const router = useRouter();
  const { videoid } = router.query;

  const { chainId, account, library } = useWeb3React();

  var [signedURl, setSignedURl] = useState("");

  const getVideoUrl = () => {
    useEffect(() => {
      async function getData() {
        const res = await getVideoSignedUrl(
          account,
          library,
          videoid.toString()
        );
        setSignedURl(res["signedurl"]);
      }
      getData();
    }, [account, chainId]);
  };

  getVideoUrl();

  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    creator: "",
  });

  const getDetails = () => {
    useEffect(() => {
      async function getData() {
        const res = await getVideoDetails(account, library, videoid.toString());
        setVideoDetails(res);
      }
      getData();
    }, [account, chainId]);
  };

  getDetails();

  const title = videoDetails[0]?.title;
  const description = videoDetails[0]?.description;
  const creator = videoDetails[0]?.creator;

  console.log("signedURl");
  console.log(signedURl);

  return (
    <div className="videoDiv">
      {signedURl != "" && signedURl && title && description && creator ? (
        <>
          <video
            controls
            autoPlay
            crossOrigin="anonymous"
            controlsList="nodownload"
          >
            <source src={signedURl} type="video/mp4" />
            {/* <track
              label="English"
              kind="captions"
              srcLang="en"
              src={VIDEO_API_URL + "captions/" + videoid}
              default
            /> */}
          </video>
          <h1 className="videoDiv h1">{title}</h1>
          <section
            onClick={() => {
              Router.push({
                pathname: "/creatorprofile",
                query: {
                  address: creator,
                },
              });
            }}
            className="creatorIdent pointer"
          >
            <Jdenticon size={50} value={account.toLowerCase()} />
            <h2 className="VideoDiv h2">
              {/* {useENSName(creator ? creator : ZERO_ADDRESS) || */}
              {shortenHex(creator ? creator : "Loading...", 4)}
            </h2>
          </section>
          <h1 className="VideoDiv p">{description}</h1>
        </>
      ) : (
        <CircularProgress
          style={{ display: "flex", margin: "auto", height: "80vh" }}
        />
      )}
    </div>
  );
}
