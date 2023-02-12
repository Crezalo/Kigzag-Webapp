import axios from "axios";
import { authHeader } from "./../../auth-header";

// Video Streaming Server Url
export const VIDEO_API_URL = process.env.NEXT_STATIC_VIDEO_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Video Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function updateVideoDetail(
  videoid: string,
  title: string,
  description: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        title: title,
        description: description,
      };

      const response = await axios.put(VIDEO_API_URL + videoid, data, {
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

export async function getVideoSignedUrl(videoid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(VIDEO_API_URL + "video/" + videoid, {
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

export async function getVideoDetails(videoid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(VIDEO_API_URL + "details/" + videoid, {
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

export async function getCreatorAllVideoDetails(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "details/creator/" + creator,
        {
          headers: authHeader(),
        }
      );
      console.log(VIDEO_API_URL + "details/creator/" + creator);

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

export async function getSeriesAllVideoDetails(series: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "details/series/" + series,
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

export async function getCreatorAllSeriesDemoVideoDetails(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "details/seriesdemovid/" + creator,
        {
          headers: authHeader(),
        }
      );

      if (response.data.isSuccessful) {
        console.log(response.data.result)
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

export async function getVideoThumbnail(videoid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(VIDEO_API_URL + "thumbnail/" + videoid, {
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

export async function getVideoCaptions(videoid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(VIDEO_API_URL + "captions/" + videoid, {
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
