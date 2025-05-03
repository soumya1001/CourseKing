import React from 'react'
import frameImg from "../../../assets/Images/frame.png"
import SignupForm from '../auth/SignupForm'
import LoginForm from '../auth/LoginForm'
import { useSelector } from 'react-redux'
function Template({title,description1,description2,image,formType}) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-10 pt-8 sm:px-[40px] text-white'>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
      <div className='sm:w-[40%] p-2 px-4'>
          <h1 className='font-semibold text-3xl'>{title}</h1>
          <h2>
            <span className='py-2 mb-1 text-sx text-richblack-200'>{description1}</span>
            <span className="font-edu-sa text-sx italic text-blue-100"> {description2}</span>
          </h2>
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
        </>
      )}
    </div>
  )
}

export default Template