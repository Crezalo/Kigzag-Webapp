import React, { useEffect, useState } from "react";
import CreatorCardGrid from "../components/CreatorCardGrid";
import AuthService from "../services/auth-services";
import Head from "next/head";
import {
  getSearchResultForCreators,
  getTopCreators,
} from "../services/api-services/user_api";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function Creators() {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState("");
  const [offset, setOffset] = useState(0);

  const checkConnected = () => {
    useEffect(() => {
      async function getData() {
        if (typeof window !== "undefined") {
          console.log("AuthService.refresh()");
          console.log(await AuthService.refresh());
          setIsConnected(
            AuthService.validateCurrentUserRefreshToken() &&
              AuthService.validateCurrentUserAccessToken()
          );
        }
      }
      getData();
    }, []);
  };

  checkConnected();

  const updateUsername = () => {
    useEffect(() => {
      setUsername(AuthService.getUsername());
    }, [isConnected]);
  };

  updateUsername();

  const [creatorsList, setCreatorsList] = useState([
    {
      username: "",
      fname: "",
      lname: "",
      displaypicture: "",
      bio: "",
    },
  ]);

  const GetCreatorList = () => {
    useEffect(() => {
      async function getData() {
        const result = await getTopCreators(offset);
        console.log(result);
        setCreatorsList(result);
      }
      getData();
    }, [username]);
  };

  GetCreatorList();

  const GetSearchResultCreatorList = (query: string) => {
    async function getData() {
      let result;
      if (query != "") result = await getSearchResultForCreators(query);
      else result = await getTopCreators(offset);
      console.log(result);
      setCreatorsList(result);
    }
    getData();
  };

  const [items, setItems] = useState([
    {
      username: "",
      fname: "",
      lname: "",
      displaypicture: "",
      bio: "",
    },
  ]);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.

    GetSearchResultCreatorList(string);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span> */}
      </>
    );
  };

  return (
    <div>
      <Head>
        <title>Kigzag: Creators</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {username != "" && isConnected ? (
          <div
            className="blueTextBlackBackground"
            style={{
              justifyContent: "center",
              fontSize: 25,
            }}
          >
            <div style={{ width: 400, zIndex: -1 }}>
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
              />
            </div>
            <div style={{ marginTop: 25, marginLeft: 0 }}>
              <CreatorCardGrid creatorsList={creatorsList} />
            </div>
          </div>
        ) : (
          <>{/* <ConnectToAccount /> */}</>
        )}
      </div>
    </div>
  );
}
