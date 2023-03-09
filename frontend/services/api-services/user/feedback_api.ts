import axios from "axios";
import { authHeader } from "../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Cart Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function addFeedback(feedback: string) {
  try {
    if (authHeader().Authorization) {
      const data = {
        feedback: feedback,
      };
      const response = await axios.post(MAIN_API_URL + "user_feedback", data, {
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

export async function getAllFeedbacks() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "user_feedback/allfeedbacks",
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
