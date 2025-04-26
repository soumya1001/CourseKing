import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Tab from '../../common/Tab'
import {ACCOUNT_TYPE} from '../../../utils/constants'
import { toast } from "react-hot-toast"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../../services/operations/authAPI'

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)  //default set to student
  const [showPassword, setShowPassword] = useState(false)
  const handleOnChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name] : e.target.value
    }))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const loginData = {
      ...formData,
      accountType
    }
    dispatch(login(loginData.email,loginData.password,navigate))
  }
  return (
    <div className='text-white text-[15px]'>
      <Tab value={accountType} setValue={setAccountType}/>
      <form onSubmit={handleOnSubmit}>
        <div >
            <label>Email<span className="text-pink-400">*</span></label>
            <input type="email" name="email" id="email" placeholder='Enter email address' required value={formData.email} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
        </div>
        <div>
          <label>Password<span className="text-pink-400">*</span></label>
          <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter password' required value={formData.password} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none' />
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
        <div className="flex justify-end mt-1">
          <Link to="/forgot-password">
            <p className="text-xs text-blue-100">Forgot Password</p>
          </Link>
        </div>
        <button
          type="submit"
          className="mt-3 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 w-full"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default LoginForm