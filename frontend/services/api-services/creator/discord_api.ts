import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Discord Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorDiscordData(
  serverid: string,
  invitelink: string
) {
  try {
    if (authHeader().Authorization) {
      const data = { serverid: serverid, invitelink: invitelink };
      const response = await axios.post(MAIN_API_URL + "discord", data, {
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

export async function getCreatorDiscordData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "discord/" + creator, {
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

export async function updateCreatorDiscordData(
  serverid: string,
  invitelink: string
) {
  try {
    if (authHeader().Authorization) {
      const data = { serverid: serverid, invitelink: invitelink };
      const response = await axios.put(MAIN_API_URL + "discord", data, {
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
