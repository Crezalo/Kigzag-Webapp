import React, { useEffect, useState } from "react";
import CreatorCardGrid from "../components/CreatorCardGrid";
import { getCreators } from "../services/archive/api-service";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import ConnectToWallet from "../components/ConnectToWallet";
import Head from "next/head";

export default function Revenue() {
  const { account, chainId, library } = useWeb3React();

  const [creatorsList, setCreatorsList] = useState([
    {
      user: "",
    },
  ]);

  const GetCreatorList = () => {
    useEffect(() => {
      async function getData() {
        const res = await getCreators(account, chainId, library);
        setCreatorsList(res);
      }
      getData();
    }, [account, chainId]);
  };

  GetCreatorList();

  const creators = [];
  console.log(creatorsList);
  console.log(creatorsList.length);
  if (creatorsList) {
    for (var i = 0; i < creatorsList.length; i++) {
      if (creatorsList[i] && creatorsList[i].user != "") {
        creators.push(creatorsList[i].user);
      }
    }
  }

  console.log(account);

  return (
    <div>
      <Head>
        <title>Kigzag: Creators</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {creatorsList != [] && account ? (
          <div
            className="blueTextBlackBackground"
            style={{
              justifyContent: "center",
              fontSize: 25,
            }}
          >
            <div style={{ marginTop: 25, marginLeft: 0 }}>
              <CreatorCardGrid creators={creators} />
            </div>
          </div>
        ) : (
          <>
            {typeof account !== "string" ? (
              <ConnectToWallet />
            ) : (
              <>
                <CircularProgress
                  style={{ display: "flex", margin: "auto", height: "80vh" }}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
