import axios from "axios";
import { authHeader, authRefreshHeader } from "../auth-header";
import AuthService from "../auth-services";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

/////////////////////////////////////////////////////////////////////////
/////////////////////          S3 Content            ////////////////////
/////////////////////////////////////////////////////////////////////////

// type =>  "pancard", "profilepic", "oimages"
export async function getCreatorInfoImages(type: string, creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "content/creator_info/" + type + "/" + creator,
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
