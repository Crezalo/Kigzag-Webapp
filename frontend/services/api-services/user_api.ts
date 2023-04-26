import axios from "axios";
import { authHeader, authRefreshHeader } from "./../auth-header";
import AuthService from "./../auth-services";

// Backend Url
export const MAIN_API_URL = process.env.NEXT_STATIC_MAIN_API_URL;

/////////////////////////////////////////////////////////////////////////
/////////////////////          User Table            ////////////////////
/////////////////////////////////////////////////////////////////////////

export async function addNewUser(
  emailaddress: string,
  signuptype: number,
  provideridtoken: string,
  password: string,
  username: string,
  fname: string,
  lname: string,
  bio: string,
  iscreator: boolean,
  displaypicture: string,
  twitterhandle: string,
  instagram: string,
  youtube: string,
  website: string
) {
  try {
    const data = {
      emailaddress: emailaddress,
      signuptype: signuptype,
      provideridtoken: provideridtoken,
      password: password,
      username: username,
      fname: fname,
      lname: lname,
      bio: bio,
      iscreator: iscreator,
      displaypicture: displaypicture,
      twitterhandle: twitterhandle,
      instagram: instagram,
      youtube: youtube,
      website: website,
    };
    const response = await axios.post(MAIN_API_URL + "register", data);
    console.log("register");
    console.log(response);
    if (response.data.isSuccessful) {
      // Only Login with OTP route to get access and refresh tokens
      // AuthService.setCurrentUserAccessToken(
      //   response.data.result[0]["x-access-token"]
      // );
      // AuthService.setCurrentUserRefreshToken(
      //   response.data.result[0]["x-refresh-token"]
      // );
      return true;
    } else {
      return response.data.errorMsg;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function sendUserOTP(username: string) {
  try {
    const response = await axios.post(MAIN_API_URL + "otp/" + username);
    if (response.data.isSuccessful) {
      return response.data.result;
    } else {
      return response.data.errorMsg;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function verifyUserOTP(otp: string, username: string) {
  try {
    const response = await axios.get(
      MAIN_API_URL + "otp/verify/" + otp + "/" + username
    );
    if (response.data.isSuccessful) {
      return response.data.result;
    } else {
      return response.data.errorMsg;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function userLogin(
  provideridtoken: string,
  username: string,
  password: string,
  signintype: number
) {
  try {
    var data;
    if (signintype == 0) {
      data = {
        username: username,
        password: password,
      };
    } else if (signintype == 1) {
      data = {
        provideridtoken: provideridtoken,
      };
    }

    const response = await axios.post(
      MAIN_API_URL + "login/" + signintype.toString(),
      data
    );

    if (response.data.isSuccessful) {
      AuthService.setCurrentUserAccessToken(
        response.data.result[0]["x-access-token"]
      );
      AuthService.setCurrentUserRefreshToken(
        response.data.result[0]["x-refresh-token"]
      );
      return true;
    } else {
      return response.data.errorMsg;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function refreshAccessToken() {
  try {
    if (authRefreshHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + "refresh", {
        headers: authRefreshHeader(),
      });

      if (response.data.isSuccessful) {
        console.log(response.data);
        AuthService.setCurrentUserAccessToken(
          response.data.result[0]["x-access-token"]
        );
        return true;
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

export async function getUserData(username: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(MAIN_API_URL + username, {
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

export async function getSpecificUserData(username: string, column: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "cn/" + column + "/" + username,
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

export async function getTopCreators(offset: number) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "creators/" + offset.toString(),
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

export async function getSearchResultForCreators(query: string) {
  try {
    if (authHeader().Authorization) {
      const response = await axios.get(
        MAIN_API_URL + "creators_search/" + query,
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

export async function updateUserData(
  emailaddress: string,
  fname: string,
  lname: string,
  bio: string,
  displaypicture: string,
  twitterhandle: string,
  instagram: string,
  youtube: string,
  website: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        emailaddress: emailaddress,
        fname: fname,
        lname: lname,
        bio: bio,
        displaypicture: displaypicture,
        twitterhandle: twitterhandle,
        instagram: instagram,
        youtube: youtube,
        website: website,
      };

      const response = await axios.put(MAIN_API_URL, data, {
        headers: authHeader(),
      });

      if (response.data.isSuccessful) {
        // username cannot be updated because of foreign key constraint
        // if (username_up != "") {
        //   AuthService.setCurrentUserAccessToken(
        //     response.data.result[0]["x-access-token"]
        //   );
        //   AuthService.setCurrentUserRefreshToken(
        //     response.data.result[0]["x-refresh-token"]
        //   );
        // }
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

export async function updateUserPassword(
  currentpassword: string,
  newpassword: string
) {
  try {
    if (authHeader().Authorization) {
      const data = {
        currentpassword: currentpassword,
        newpassword: newpassword,
      };

      const response = await axios.put(MAIN_API_URL + "password", data, {
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
