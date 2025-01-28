import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
function Home() {
  return (
    <div>
        <div className='relative flex flex-col mx-auto items-center text-white justify-between gap-[5px]'>
            <Link to={"/signup"}>
            <div className='group mt-16 p-1 mx-auto rounded-full font-bold bg-richblack-800 text-richblack-200 transition-all duration-200 w-fit hover:scale-95'>
                <div className='group-hover:bg-richblack-900 flex flex-row items-center gap-2 rounded-full px-3 py-1'>
                    <p className=''>Become an Instractor</p>
                    <FaArrowRight />
                </div>
            </div>
            </Link>
            <div className='font-semibold text-3xl text-center'>
                Empower Your Future with <span className='text-richblue-200 font-bold'>Coding Skills</span>
            </div>
            <div className='sm:w-[80%] text-sx text-center'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>
        </div>
    </div>
  )
}

export default Home