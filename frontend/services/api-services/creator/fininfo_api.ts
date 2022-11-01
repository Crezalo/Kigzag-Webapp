import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
////////////////////////         Fin Info Table            /////////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorFinInfoData(
  aadharcard: string,
  aadharcardlink: string,
  pancard: string,
  pancardlink: string,
  upi_id: string,
  ifsc_code: string,
  acc_number: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        aadharcard: aadharcard,
        aadharcardlink: aadharcardlink,
        pancard: pancard,
        pancardlink: pancardlink,
        upi_id: upi_id,
        ifsc_code: ifsc_code,
        acc_number: acc_number,
      };
      const response = await axios.post(MAIN_API_URL + "fininfo", data, {
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

export async function getCreatorFinInfoData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "fininfo", {
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

export async function getCreatorSpecificFinInfoData(column: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "fininfo/" + column, {
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

export async function updateCreatorFinInfoData(
  aadharcard: string,
  aadharcardlink: string,
  pancard: string,
  pancardlink: string,
  upi_id: string,
  ifsc_code: string,
  acc_number: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        aadharcard: aadharcard,
        aadharcardlink: aadharcardlink,
        pancard: pancard,
        pancardlink: pancardlink,
        upi_id: upi_id,
        ifsc_code: ifsc_code,
        acc_number: acc_number,
      };

      const response = await axios.put(MAIN_API_URL + "FinInfo", data, {
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
