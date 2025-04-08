import React from 'react'
import frameImg from "../../../assets/Images/frame.png"
import SignupForm from '../auth/SignupForm'
import LoginForm from '../auth/LoginForm'
function Template({title,description1,description2,image,formType}) {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-10 py-8 sm:px-[13%] text-white'>
      <div className='sm:w-[40%] p-2 px-4'>
          <h1 className='font-semibold text-3xl'>{title}</h1>
          <h2 className='py-2 text-sm text-richblack-200'>{description1} {description2}</h2>
          {formType === "signup" ? <SignupForm/> : <LoginForm/>}
      </div>
      <div className='relative sm:w-[50%]'>
        <img 
          src={frameImg}
          alt="Frame"
          loading="lazy"
          className="w-[90%] h-auto object-contain"
        />
        <img 
          src={image}
          alt="Frame"
          loading="lazy"
          className='absolute top-[-10px] left-[-10px] w-[90%] h-auto object-contain'
        />
      </div>
    </div>
  )
}

export default Template