import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";
const { endpoints } = require("../apis");

const {
  SENDOTP_API,
  // SIGNUP_API,
  // LOGIN_API,
  // RESETPASSTOKEN_API,
  // RESETPASSWORD_API
} = endpoints;
export async function sendOtp(email, navigate) {
  try {
    const res = await apiConnector("POST", SENDOTP_API, {
      email: email,
    });
    if (!res.data.success) {
        toast.error(res.data.message || "Could not send OTP!");
        return;
    }
    toast.success("OTP Sent Successfully");
    navigate("/verify-email");
    //   navigate(navigate)
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Could not send OT P!";
    toast.error(errorMessage);
  }
}
