import axios from "axios";
import { authHeader } from "../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Shoutout Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function addUserShoutoutData(
  creator: string,
  platform: number,
  usermessage: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        creator: creator,
        platform: platform,
        usermessage: usermessage,
      };
      const response = await axios.post(MAIN_API_URL + "user_shoutout", data, {
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

export async function getUserShoutoutData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_shoutout/allcreators", {
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

export async function getSpecificCreatorUserShoutoutData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_shoutout/" + creator, {
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

export async function getUserShoutoutAllCreatorData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_shoutout/creator", {
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
export async function updateUserShoutoutData(
  platform: number,
  creator: string,
  usermessage: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        usermessage: usermessage,
      };

      const response = await axios.put(
        MAIN_API_URL + "user_shoutout/" + creator + "/" + platform.toString(),
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

export async function updateUserShoutoutCreatorData(
  platform: number,
  username: string,
  status: number,
  creatorresponse: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        status: status,
        creatorresponse: creatorresponse,
      };

      const response = await axios.put(
        MAIN_API_URL + "user_shoutout/" + username + "/" + platform.toString(),
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
