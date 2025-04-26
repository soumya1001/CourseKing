import { apiConnector } from "../apiConnector";
import {toast} from "react-hot-toast";
import {setToken,setLoading, setSignupData} from "../../slice/authSlice"
import {  authEndpoints} from "../apis";
const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  // RESETPASSTOKEN_API,
  // RESETPASSWORD_API
} = authEndpoints;
//redux thunk
export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    // dispatch(setLoading(true));
    try {
      const res = await apiConnector("POST", SENDOTP_API, {
        email: email,
      });
      if (!res.data.success) {
        toast.error(res.data.message || "Could not send OTP!");
        throw new Error(res.data.message || "Could not send OTP!")
      }
      toast.success("OTP Sent Successfully", { id: toastId });
      navigate("/verify-email")
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Could not send OTP!";
      toast.error(errorMessage, { id: toastId });
    }
  };
}
export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
){
  return async(dispatch)=>{
    const toastId = toast.loading("Loading...");
    try {
      const res = await apiConnector("POST",SIGNUP_API,{
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      })
      if(!res.data.success){
        toast.error(res.data.message || "Could not send OTP!", { id: toastId })
        throw new Error(res.data.message || "Could not send OTP!")
      }
      toast.success("Signup Successful", { id: toastId })
      dispatch(setSignupData({}));
      navigate("/login")
    } catch (error) {
      const errorMessage =
      error.response?.data?.message || "Could not send OTP!";
      toast.error(errorMessage, { id: toastId }); 
    }
  }
}
export function login(email,password,navigate){
  return async(dispatch)=>{
    const toastId = toast.loading("Loading...")
    try {
      const res = await apiConnector("POST",LOGIN_API,{
        email,
        password
      })
      // console.log("res",res);
      
      if(!res.data.success){
        toast.error(res?.message || "Login Failed",{id:toastId})
        throw new Error( res?.message || "Login Failed")
      }
      toast.success("Login Successful",{id:toastId})
      dispatch(setToken(res.data.token))
      localStorage.setItem("user", JSON.stringify(res.data.user))
      navigate("/dashboard/my-profile")
    } catch (error) {
      console.log("res",error.response.data.message);
      const errorMessage =
      error.response?.data?.message || "Login Failed";
      console.log(errorMessage);
      
      toast.error(errorMessage, { id: toastId }); 
    }
  }
}