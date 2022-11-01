import axios from "axios";
import { authHeader } from "../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////
/////////////////////          VOD Table            ////////////
////////////////////////////////////////////////////////////////////////

export async function addUserVODData(creator: string, type: number) {
  try {
    if (authHeader().Authorization) {
      const data = {
        creator: creator,
        type: type,
      };
      const response = await axios.post(MAIN_API_URL + "user_vod", data, {
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

export async function getUserVODData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_vod/allcreators", {
        headers: authHeader(),
      });
      console.log(response);

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

export async function getSpecificCreatorUserVODData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_vod/" + creator, {
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

export async function updateUserVODData(creator: string, type: number) {
  try {
    if (authHeader().Authorization) {
      const data = {
        type: type,
      };

      const response = await axios.put(
        MAIN_API_URL + "user_vod/" + creator,
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
