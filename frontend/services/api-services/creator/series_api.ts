import axios from "axios";
import { authHeader } from "./../../auth-header";

// Video Streaming Server Url
export const VIDEO_API_URL = process.env.NEXT_STATIC_VIDEO_API_URL;

////////////////////////////////////////////////////////////////////////////
/////////////////////          Creator Series Table            //////////////
////////////////////////////////////////////////////////////////////////////

export async function updateSeriedVideoDetail(
  seriesid: string,
  title: string,
  description: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        title: title,
        description: description,
      };

      const response = await axios.put(
        VIDEO_API_URL + "series/" + seriesid,
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

export async function getSeriesVideoSignedUrl(seriesid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "series/video/" + seriesid,
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

export async function getSeriesVideoDetails(seriesid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "series/details/" + seriesid,
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

export async function getCreatorAllSeriesVideoDetails(creator: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "series/details/creator/" + creator,
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

export async function getVideoThumbnail(seriesid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "series/thumbnail/" + seriesid,
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

export async function getVideoCaptions(seriesid: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        VIDEO_API_URL + "series/captions/" + seriesid,
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
