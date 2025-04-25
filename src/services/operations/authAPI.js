import { apiConnector } from "../apiConnector";
import {toast} from "react-hot-toast";
import {setLoading, setSignupData} from "../../slice/authSlice"
import {  authEndpoints} from "../apis";
const {
  SENDOTP_API,
  SIGNUP_API,
  // LOGIN_API,
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