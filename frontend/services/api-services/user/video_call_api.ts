import axios from "axios";
import { authHeader } from "../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////
/////////////////////          Video Call Table             ////////////
////////////////////////////////////////////////////////////////////////

export async function addUserVideoCallData(creator: string, type: number) {
  try {
    if (authHeader().Authorization) {
      const data = {
        creator: creator,
        type: type,
      };
      const response = await axios.post(
        MAIN_API_URL + "user_video_call",
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

export async function getUserVideoCallData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_video_call/allcreators", {
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

export async function getSpecificCreatorUserVideoCallData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_video_call/" + creator,
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

export async function updateUserVideoCallData(creator: string, type: number) {
  try {
    if (authHeader().Authorization) {
      const data = {
        type: type,
      };

      const response = await axios.put(
        MAIN_API_URL + "user_video_call/" + creator,
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
