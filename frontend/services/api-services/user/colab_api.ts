import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Colab Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function addUserColabData(
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
      const response = await axios.post(MAIN_API_URL + "user_colab", data, {
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

export async function getUserColabData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_colab/allcreators",
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

export async function getSpecificCreatorUserColabData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_colab/" + creator, {
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

export async function getUserColabAllCreatorData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "user_colab/creator", {
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
export async function updateUserColabData(
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
        MAIN_API_URL + "user_colab/" + creator + "/" + platform.toString(),
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

export async function updateUserColabCreatorData(
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
        MAIN_API_URL + "user_colab/" + username + "/" + platform.toString(),
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
