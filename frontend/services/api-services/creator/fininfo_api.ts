import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
////////////////////////         Fin Info Table            /////////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorKycApprovalData(
  aadharnumber: string,
  pannumber: string,
  bank_name: string,
  ifsc_code: string,
  acc_number: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        aadharnumber: aadharnumber,
        pannumber: pannumber,
        bank_name: bank_name,
        ifsc_code: ifsc_code,
        acc_number: acc_number,
      };
      const response = await axios.post(MAIN_API_URL + "fininfo/kyc", data, {
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

export async function getAllCreatorKycApprovalRequestsData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "fininfo/kyc/alldetailsforadmin",
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

export async function getMyKycApprovalRequestsData() {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "fininfo/kyc/applied", {
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

export async function approveCreatorKYCData(creator: string) {
  try {
    if (authHeader().Authorization) {
      const data = {
        creator: creator,
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
      const response = await axios.get(MAIN_API_URL + "fininfo/alldetails", {
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
  bank_name: string,
  ifsc_code: string,
  acc_number: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        bank_name: bank_name,
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
