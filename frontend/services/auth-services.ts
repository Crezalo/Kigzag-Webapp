import jwt_decode from "jwt-decode";
import guestCred from "../consts/guestcred";
import {
  addNewUser,
  userLogin,
  refreshAccessToken,
} from "./api-services/user_api";

class AuthService {
  async register(
    emailaddress: string,
    mobileno: string,
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
    const response = await addNewUser(
      emailaddress,
      mobileno,
      signuptype,
      provideridtoken,
      password,
      username,
      fname,
      lname,
      bio,
      iscreator,
      displaypicture,
      twitterhandle,
      instagram,
      youtube,
      website
    );
    if (
      response == true &&
      this.validateCurrentUserRefreshToken() &&
      this.validateCurrentUserAccessToken()
    ) {
      return true;
    }
    return response;
  }

  async login(
    username: string,
    password: string,
    provideridtoken: string,
    signintype: number,
    otp: string,
    idtoken: string,
    phonenumber: string
  ) {
    if (
      this.validateCurrentUserRefreshToken() &&
      this.validateCurrentUserAccessToken()
    ) {
      localStorage.removeItem("trigger_login_modal");
      return true;
    } else {
      const response = await userLogin(
        provideridtoken,
        username,
        password,
        signintype,
        otp,
        idtoken,
        phonenumber
      );
      if (
        response == true &&
        this.validateCurrentUserRefreshToken() &&
        this.validateCurrentUserAccessToken()
      ) {
        localStorage.removeItem("trigger_login_modal");
        return true;
      }
      return response;
    }
  }

  async autoGuestLogin() {
    if (this.getCurrentUserAccessToken() && this.getCurrentUserRefreshToken()) {
      return false;
    }
    if (this.checkTriggerLoginModal()) {
      return false;
    }
    const result = await this.login(
      guestCred[0],
      guestCred[1],
      "",
      0,
      "",
      "",
      ""
    );
    if (result === true) window.location.reload();
    return result;
  }

  async refresh() {
    if (
      this.validateCurrentUserRefreshToken() &&
      this.validateCurrentUserAccessToken()
    ) {
      return true;
    } else {
      const response = await refreshAccessToken();
      if (
        response == true &&
        this.validateCurrentUserRefreshToken() &&
        this.validateCurrentUserAccessToken()
      ) {
        return true;
      }
      return response;
    }
  }

  logout() {
    localStorage.removeItem("user_access_token");
    localStorage.removeItem("user_refresh_token");
    this.setTriggerLoginModal(true);
  }

  setCurrentUserAccessToken(token: string) {
    localStorage.setItem("user_access_token", JSON.stringify(token));
  }

  setCurrentUserRefreshToken(token: string) {
    localStorage.setItem("user_refresh_token", JSON.stringify(token));
  }

  setTriggerLoginModal(flag: boolean) {
    localStorage.setItem("trigger_login_modal", JSON.stringify(flag));
  }

  getCurrentUserAccessToken() {
    return JSON.parse(localStorage.getItem("user_access_token"));
  }

  getCurrentUserRefreshToken() {
    return JSON.parse(localStorage.getItem("user_refresh_token"));
  }

  checkTriggerLoginModal() {
    return localStorage.getItem("trigger_login_modal");
  }

  validateCurrentUserAccessToken() {
    const jwtToken = this.getCurrentUserAccessToken();

    if (jwtToken) {
      const { user, exp } = jwt_decode<{ user: string; exp: number }>(jwtToken);

      if (exp <= Date.now() / 1000) {
        console.log("Access Token expired");
        // If Access Token Expired then call AuthService.refresh() to refresh access token
        // return (await this.refresh()) == true ? true : false;
        // hitting call stack max size
        return false;
      }

      if (user) {
        return true;
      }

      console.log("User not available");
      return false;
    }

    console.log("Access Token not available");
    return false;
  }

  validateCurrentUserRefreshToken() {
    const jwtToken = this.getCurrentUserRefreshToken();

    if (jwtToken) {
      const { user, exp } = jwt_decode<{ user: string; exp: number }>(jwtToken);

      if (exp <= Date.now() / 1000) {
        console.log("Refresh Token expired");
        return false;
      }

      if (user) {
        return true;
      }

      console.log("User not available");
      return false;
    }

    console.log("Refresh Token not available");
    return false;
  }

  getUsername() {
    const jwtToken = this.getCurrentUserAccessToken();

    if (jwtToken) {
      const { user } = jwt_decode<{ user: string; exp: number }>(jwtToken);
      if (user) {
        return user;
      }
    }
  }
}

export default new AuthService();
