import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Colab Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorColabData(
  platform: number,
  count_per_week: number,
  price: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        platform: platform,
        count_per_week: count_per_week,
        price: price,
      };
      const response = await axios.post(MAIN_API_URL + "colab", data, {
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

export async function getCreatorColabData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "colab/" + creator, {
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

export async function updateCreatorColabData(
  platform: number,
  count_per_week: number,
  price: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        count_per_week: count_per_week,
        price: price,
      };

      const response = await axios.put(
        MAIN_API_URL + "colab/" + platform.toString(),
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
