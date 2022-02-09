import React, { useEffect, useState } from "react";
import CreatorCardGrid from "../components/CreatorCardGrid";
import authHeader from "../services/auth-header";
import { getCreators } from "../services/api-service";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

export default function Creators() {
  const { account, chainId, library } = useWeb3React();

  const [creatorsList, setCreatorsList] = useState([]);

  const getCreatorList = () => {
    useEffect(() => {
      async function getData() {
        const res = await getCreators(account, library);
        setCreatorsList(res);
      }
      getData();
    },[account, chainId]);
  };

  getCreatorList();

  const creators = [];

  if(creatorsList){
    for(const x of creatorsList){
      creators.push(x.useraddress);
    }
  }
  
  return (
    <div>
      {creatorsList != [] ? (
        <div
          className="greenTextBlackBackground"
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
        <CircularProgress
          style={{ display: "flex", margin: "auto", height: "80vh" }}
        />
      )}
    </div>
  );
}
