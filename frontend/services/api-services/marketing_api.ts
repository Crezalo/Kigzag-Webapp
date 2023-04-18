import axios from "axios";
import { authHeader } from "../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;
// Marketing Url
export const MARKETING_API_URL = process.env.NEXT_STATIC_MARKETING_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Marketing Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function getMarketingData(sqlQuery: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "marketing/" + sqlQuery, {
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

export async function sendMarketingEmail(sqlquery: string, template: string) {
  try {
    if (authHeader().Authorization) {
      const data = {
        sqlquery: sqlquery,
        template: template,
      };
      console.log(MARKETING_API_URL);
      const response = await axios.post(MARKETING_API_URL, data, {
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
