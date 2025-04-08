import React, { useState } from 'react'
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  })
  const handleOnChange = (e) => {
    console.log(formData);
    
    setFormData(prevData => ({
      ...prevData,
      [e.target.name] : e.target.value
    }))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }
  return (
    <div className='text-white'>
      <form onSubmit={handleOnSubmit}>
        <div className='flex flex-row gap-4'>
          <div>
            <label>First Name<span className="text-pink-400">*</span></label>
            <input type="text" name="firstName" id="firstName" placeholder='Enter first name' value={formData.firstName} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
          </div>
          <div>
            <label>Last Name<span className="text-pink-400">*</span></label>
            <input type="text" name="lastName" id="lastName" placeholder='Enter last name' value={formData.lastName} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
          </div>
        </div>
        <div >
            <label>Email<span className="text-pink-400">*</span></label>
            <input type="text" name="email" id="email" placeholder='Enter email address' value={formData.email} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
        </div>
        <div></div>
        <div className='flex flex-row gap-4'>
          <div>
            <label>Create Password<span className="text-pink-400">*</span></label>
            <input type="password" name="password" id="password" placeholder='Enter password' value={formData.password} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
          </div>
          <div>
            <label>Confirm Password<span className="text-pink-400">*</span></label>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter password' value={formData.confirmPassword} onChange={handleOnChange}
            className='mt-1 mb-1 w-full bg-richblack-800 py-[5px] px-[12px] border-b-[1px] border-b-richblack-200 rounded-md focus:outline-none'/>
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