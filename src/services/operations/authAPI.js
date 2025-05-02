import { apiConnector } from "../apiConnector";
import {toast} from "react-hot-toast";
import {setToken,setLoading, setSignupData} from "../../slice/authSlice"
import { setUser } from "../../slice/profileSlice";
import {  authEndpoints} from "../apis";
const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API
} = authEndpoints;
//redux thunk
export function sendOtp(email, navigate,redirectPath = "/verify-email") {
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
      navigate(redirectPath)
      return true
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Could not send OTP!";
      toast.error(errorMessage, { id: toastId });
      return false
    } finally {
      toast.dismiss(toastId);
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
  navigate,
  redirectPath = "/login"
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
      navigate(redirectPath)
    } catch (error) {
      const errorMessage =
      error.response?.data?.message || "Could not send OTP!";
      toast.error(errorMessage, { id: toastId }); 
    } finally {
      toast.dismiss(toastId);
    }
  }
}
export function login(email,password,navigate,redirectPath = "/dashboard/my-profile"){
  return async(dispatch)=>{
    const toastId = toast.loading("Loading...")
    try {
      const res = await apiConnector("POST",LOGIN_API,{
        email,
        password
      })
      if(!res.data.success){
        toast.error(res?.message || "Login Failed",{id:toastId})
        throw new Error( res?.message || "Login Failed")
      }
      toast.success("Login Successful",{id:toastId})
      dispatch(setToken(res.data.token))
      dispatch(setUser(res.data.user))
      localStorage.setItem("token", JSON.stringify(res.data.token))
      localStorage.setItem("user", JSON.stringify(res.data.user))
      navigate(redirectPath)
    } catch (error) {
      const errorMessage =
      error.response?.data?.message || "Login Failed";
      toast.error(errorMessage, { id: toastId }); 
    }
  }
}
export function sendPasswordResetMail(email,setEmailSent){
  return async(dispatch)=>{
    const toastId = toast.loading("Loading...")
    try {
      const res = await apiConnector("POST",RESETPASSTOKEN_API,{
        email
      })
      if(!res?.data?.success){
        throw new Error( res?.data?.message || "Something Went Wrong" )
      }
      toast.success(res?.data?.message || "Reset Email Sent",{id:toastId})
      setEmailSent(true)
    } catch (error) {
      const errorMessage =
      error.response?.data?.message || error.message || "Failed to send email for resetting password";
      toast.error(errorMessage, { id: toastId }); 
    }
  }
}
export function resetPassword(password,confirmPassword,token,setResetStatus){
  return async(dispatch)=>{ //use or not we have to pass the dispatch to 
    const toastId = toast.loading("Loading...")
    
    try {
      const res = await apiConnector("POST",RESETPASSWORD_API,{
        password,
        confirmPassword,
        token
      })
      if(!res.data.success){
        toast.error(res?.data?.message || "Password reset failed",{id:toastId})
        return false
      }
      setResetStatus(true)
      toast.success("Password reset successfull",{id:toastId})
      return true
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message || "Unable to reset password";
      toast.error(errorMessage,{id:toastId});
      return false
    }
  }
}
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    // dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}