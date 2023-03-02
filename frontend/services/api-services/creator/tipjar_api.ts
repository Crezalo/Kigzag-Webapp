import axios from "axios";
import { authHeader } from "../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////         Creator TipJar Msg Table            /////////////////
////////////////////////////////////////////////////////////////////////////////////

export async function addCreatorTipJarMsgData(message: string) {
  try {
    if (authHeader().Authorization) {
      const data = { message: message };
      const response = await axios.post(MAIN_API_URL + "tipjar", data, {
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

export async function getCreatorTipJarMsgData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "tipjar/" + creator, {
        headers: authHeader(),
      });
      console.log(MAIN_API_URL + "fininfo");
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

export async function updateTipJarMsgData(message: string) {
  try {
    if (authHeader().Authorization) {
      const data = {
        message: message,
      };

      const response = await axios.put(MAIN_API_URL + "tipjar", data, {
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
