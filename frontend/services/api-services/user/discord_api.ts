import axios from "axios";
import { authHeader } from "../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

///////////////////////////////////////////////////////////////////////////
/////////////////////          Discord Table            ///////////////////
///////////////////////////////////////////////////////////////////////////

export async function addUserDiscordData(
  serverid: string,
  user_discord_id: string,
  type: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        serverid: serverid,
        user_discord_id: user_discord_id,
        type: type,
      };
      const response = await axios.post(MAIN_API_URL + "user_discord", data, {
        headers: authHeader(),
      });
      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getUserDiscordData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_discord/allcreators", {
        headers: authHeader(),
      });

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getSpecificServerUserDiscordData(serverid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_discord/" + serverid,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function updateUserDiscordData(serverid: string, type: number) {
  try {
    if (authHeader().Authorization) {
      const data = {
        type: type,
      };

      const response = await axios.put(
        MAIN_API_URL + "user_discord/" + serverid,
        data,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getUserDiscordLinkData(linkid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_discord/linkdata" + linkid,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        return response.data.result;
      } else {
        return response.data.errorMsg;
      }
    } else {
      return "Not Logged In";
    }
  } catch (err) {
    console.log(err);
  }
}
