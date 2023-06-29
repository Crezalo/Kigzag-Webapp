import { useEffect, useState } from "react";
import AuthService from "../services/auth-services";
import DummyProfile from "../public/DummyProfile.jpg";
import Image from "next/image";
import { getCreatorInfoImages } from "../services/api-services/content_api";
import guestCred from "../consts/guestcred";

interface CreatorDPProp {
  creator: string;
  height: number;
  width: number;
}

const CreatorDP = ({ creator, height, width }: CreatorDPProp) => {
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [profilePic, setProfilePic] = useState("");

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

  const GetUser = () => {
    useEffect(() => {
      async function getData() {
        if (username != "") {
          const res = await getCreatorInfoImages("profilepic", creator);
          if (res[0]) setProfilePic(res[0]["signedurl"]);
        }
      }
      getData();
    }, [username]);
  };

  GetUser();

  return (
    <>
      {profilePic ? (
        <Image
          src={profilePic}
          alt=""
          width={width}
          height={height}
          className="creatorDP"
          style={{
            marginTop: username == guestCred[0] ? "20px" : 0,
          }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = DummyProfile.src;
          }}
        />
      ) : (
        <div
          className="creatorDP shimmer"
          style={{
            maxHeight: height,
            maxWidth: width,
          }}
        ></div>
      )}
    </>
  );
};
export default CreatorDP;
