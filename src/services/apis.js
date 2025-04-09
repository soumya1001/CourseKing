// const BASE_URL = process.env.REACT_APP_BASE_URL
const SERVER_URL = process.env.REACT_APP_SERVER_URL
export const categories = {
    CATEGORIES_API : SERVER_URL+"/api/v1/course/showAllCategories"
}
// AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: SERVER_URL + "/api/v1/auth/sendotp",
    SIGNUP_API: SERVER_URL + "/api/v1/auth/signup",
    LOGIN_API: SERVER_URL + "/api/v1/auth/login",
    RESETPASSTOKEN_API: SERVER_URL + "/api/v1/auth/reset-password-token",
    RESETPASSWORD_API: SERVER_URL + "/api/v1/auth/reset-password",
  }