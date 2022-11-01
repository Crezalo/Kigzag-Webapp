import AuthService from "./auth-services";

export function authHeader() {
  if (
    AuthService.validateCurrentUserRefreshToken() &&
    AuthService.validateCurrentUserAccessToken()
  ) {
    const jwtToken = AuthService.getCurrentUserAccessToken();
    return {
      Authorization: jwtToken,
      "Content-Type": "application/json",
    };
  } else {
    return {
      Authorization: false,
    };
  }
}

export function authRefreshHeader() {
  if (AuthService.validateCurrentUserRefreshToken()) {
    const jwtToken = AuthService.getCurrentUserRefreshToken();
    return {
      Authorization: jwtToken,
      "Content-Type": "application/json",
    };
  } else {
    return {
      Authorization: false,
    };
  }
}
