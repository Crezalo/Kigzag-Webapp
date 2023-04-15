import axios from "axios";
import { authHeader } from "../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////         Creator Features Table            /////////////////
////////////////////////////////////////////////////////////////////////////////////

export async function addCreatorFeatureStatusData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const data = { creator: creator };
      const response = await axios.post(MAIN_API_URL + "features", data, {
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

export async function getCreatorFeatureStatusData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "features/" + creator, {
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

export async function updateFeatureStatusData(
  video_on_demand: boolean,
  courses: boolean,
  merchandise: boolean,
  tipjar: boolean
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        video_on_demand: video_on_demand,
        courses: courses,
        merchandise: merchandise,
        tipjar: tipjar,
      };

      const response = await axios.put(MAIN_API_URL + "features", data, {
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
