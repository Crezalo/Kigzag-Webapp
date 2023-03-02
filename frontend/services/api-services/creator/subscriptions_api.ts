import axios from "axios";
import { authHeader } from "./../../auth-header";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Sub 1M Table            /////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorSubscriptionData_1m(
  discord: number,
  video_on_demand: number,
  live_streaming: number,
  video_call: number,
  community_combo: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        discord: discord,
        video_on_demand: video_on_demand,
        live_streaming: live_streaming,
        video_call: video_call,
        community_combo: community_combo,
      };
      const response = await axios.post(
        MAIN_API_URL + "subscription/1m",
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

export async function getCreatorSubscriptionData_1m(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "subscription/1m/" + creator,
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

export async function getCreatorSpecificPlanSubscriptionData_1m(
  creator: string,
  planName: string
) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "subscription/1m/" + creator + "/" + planName,
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

export async function updateCreatorSubscriptionData_1m(
  discord: number,
  video_on_demand: number,
  live_streaming: number,
  video_call: number,
  community_combo: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        discord: discord,
        video_on_demand: video_on_demand,
        live_streaming: live_streaming,
        video_call: video_call,
        community_combo: community_combo,
      };

      const response = await axios.put(MAIN_API_URL + "subscription/1m", data, {
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

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Sub 3m Table            /////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorSubscriptionData_3m(
  discord: number,
  video_on_demand: number,
  live_streaming: number,
  video_call: number,
  community_combo: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        discord: discord,
        video_on_demand: video_on_demand,
        live_streaming: live_streaming,
        video_call: video_call,
        community_combo: community_combo,
      };
      const response = await axios.post(
        MAIN_API_URL + "subscription/3m",
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

export async function getCreatorSubscriptionData_3m(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "subscription/3m/" + creator,
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

export async function getCreatorSpecificPlanSubscriptionData_3m(
  creator: string,
  planName: string
) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "subscription/3m/" + creator + "/" + planName,
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

export async function updateCreatorSubscriptionData_3m(
  discord: number,
  video_on_demand: number,
  live_streaming: number,
  video_call: number,
  community_combo: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        discord: discord,
        video_on_demand: video_on_demand,
        live_streaming: live_streaming,
        video_call: video_call,
        community_combo: community_combo,
      };

      const response = await axios.put(MAIN_API_URL + "subscription/3m", data, {
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

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Sub 1y Table            /////////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorSubscriptionData_1y(
  discord: number,
  video_on_demand: number,
  live_streaming: number,
  video_call: number,
  community_combo: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        discord: discord,
        video_on_demand: video_on_demand,
        live_streaming: live_streaming,
        video_call: video_call,
        community_combo: community_combo,
      };
      const response = await axios.post(
        MAIN_API_URL + "subscription/1y",
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

export async function getCreatorSubscriptionData_1y(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "subscription/1y/" + creator,
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

export async function getCreatorSpecificPlanSubscriptionData_1y(
  creator: string,
  planName: string
) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "subscription/1y/" + creator + "/" + planName,
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

export async function updateCreatorSubscriptionData_1y(
  discord: number,
  video_on_demand: number,
  live_streaming: number,
  video_call: number,
  community_combo: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        discord: discord,
        video_on_demand: video_on_demand,
        live_streaming: live_streaming,
        video_call: video_call,
        community_combo: community_combo,
      };

      const response = await axios.put(MAIN_API_URL + "subscription/1y", data, {
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

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Series Sub Table            /////////
////////////////////////////////////////////////////////////////////////////

export async function addCreatorSubscriptionData_Series(
  seriesid: string,
  onemonth: number,
  threemonths: number,
  oneyear: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        seriesid: seriesid,
        onemonth: onemonth,
        threemonths: threemonths,
        oneyear: oneyear,
      };
      const response = await axios.post(
        MAIN_API_URL + "subscription/series",
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

export async function getCreatorSubscriptionData_Series(seriesid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "subscription/series/" + seriesid,
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

export async function updateCreatorSubscriptionData_Series(
  seriesid: string,
  onemonth: number,
  threemonths: number,
  oneyear: number
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        seriesid: seriesid,
        onemonth: onemonth,
        threemonths: threemonths,
        oneyear: oneyear,
      };
      const response = await axios.put(
        MAIN_API_URL + "subscription/series",
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