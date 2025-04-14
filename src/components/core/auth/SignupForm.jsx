import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Tab from '../../common/Tab'
import {ACCOUNT_TYPE} from '../../../utils/constants'
import { toast } from "react-hot-toast"
import { sendOtp } from '../../../services/operations/authAPI'
import { useNavigate } from 'react-router-dom'

function SignupForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  const {firstName,
    lastName,
    email,
    countryCode,
    phoneNumber,
    password,
    confirmPassword} = formData
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)  //default set to student
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleOnChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name] : e.target.value
    }))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType
    }
    console.log(signupData);
    sendOtp(email,navigate)
  }
  return (
    <div className='text-white text-[15px]'>
      <Tab value={accountType} setValue={setAccountType}/>
      <form onSubmit={handleOnSubmit}>
        <div className='flex flex-row gap-4'>
          <div>
            <label>First Name<span className="text-pink-400">*</span></label>
            <input type="text" name="firstName" id="firstName" placeholder='Enter first name' required value={formData.firstName} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
          </div>
          <div>
            <label>Last Name<span className="text-pink-400">*</span></label>
            <input type="text" name="lastName" id="lastName" placeholder='Enter last name' required value={formData.lastName} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
          </div>
        </div>
        <div >
            <label>Email<span className="text-pink-400">*</span></label>
            <input type="email" name="email" id="email" placeholder='Enter email address' required value={formData.email} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
        </div>
        <div></div>
        <div className='flex flex-row gap-4'>
          <div className='relative'>
            <label>Create Password<span className="text-pink-400">*</span></label>
            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter password' required value={formData.password} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute transform -translate-x-7 translate-y-[10px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={22} fill="#AFB2BF" />
              )}
            </span>
          </div>
          <div className='relative'>
            <label>Confirm Password<span className="text-pink-400">*</span></label>
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder='Enter password' required value={formData.confirmPassword} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute transform -translate-x-7 translate-y-[10px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={22} fill="#AFB2BF" />
              )}
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="mt-3 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 w-full"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm