import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import CummonButton from '../components/core/homepage/CummonButton';
import vBanner from '../assets/Images/banner.mp4'
import HighlightedText from '../components/core/homepage/HighlightedText';
import CodeBlock from '../components/core/homepage/CodeBlock';
function Home() {
  return (
    <div>
        {/* section 1 */}
        <div className='relative flex flex-col mx-auto items-center text-white justify-between gap-4'>
            <Link to={"/signup"}>
            <div className='group mt-16 p-1 mx-auto rounded-full font-bold bg-richblack-800 text-richblack-200 transition-all duration-200 w-fit hover:scale-95'>
                <div className='group-hover:bg-richblack-900 flex flex-row items-center gap-2 rounded-full px-3 py-1'>
                    <p className=''>Become an Instractor</p>
                    <FaArrowRight />
                </div>
            </div>
            </Link>
            <div className='font-semibold text-3xl text-center'>
                Empower Your Future with <HighlightedText text={"Coding Skill"}/> 
            </div>
            <div className='sm:w-[80%] text-sx text-center'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>
            <div className='flex sm:flex-row flex-col gap-4'>
                <CummonButton button_text={"Learn More"} active={true} linked_to={"/"}/>
                <CummonButton button_text={"Book a Demo"} active={false} linked_to={"/"}/>
            </div>
            <div className='mx-3 shadow-blue-200 sm:w-[70%]'>
                <video muted loop autoPlay>
                    <source src={vBanner} type="video/mp4"/>
                </video>
            </div>
        </div>
        {/* section 2 */}
        <div className='py-8 p-2 sm:px-[13%] flex sm:flex-row flex-col mx-auto items-center text-white justify-start gap-14'>
            <div className='sm:w-[50%] flex flex-col gap-4'>
                <div className='text-3xl font-semibold'>
                    Unlock your <HighlightedText text={"coding potential"} /> with our online courses.
                </div>
                <p className='text-richblack-200'>
                    Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
                </p>
                <div className='pt-4 flex sm:flex-row flex-col gap-4'>
                    <CummonButton button_text={"Try it Yourself"} active={true} linked_to={"/"} />
                    <CummonButton button_text={"Learn More"} active={false} linked_to={"/"} />
                </div>
            </div>
            {/* coding animation  start*/}
            <div className='sm:w-[50%] w-[95%]'>
                <CodeBlock line_no={9} code={`<!DOCTYPE html> \n<head>\n<title>Example</title>\n<link rel="stylesheet"href="styles.css">\n</head>\n<h1>Happy Coding!</h1>\n<body>\n</body>\n<html>`} />
            </div>
              {/* coding animation start */}
        </div>
        {/* section 3 */}
          <div className='py-8 p-2 sm:px-[13%] flex-col-reverse flex sm:flex-row mx-auto items-center text-white justify-start gap-14'>
              {/* coding animation start */}
              <div className='sm:w-[50%] w-[95%]'>
                  <CodeBlock line_no={9} code={`<!DOCTYPE html> \n<head>\n<title>Example</title>\n<link rel="stylesheet"href="styles.css">\n</head>\n<h1>Happy Coding!</h1>\n<body>\n</body>\n<html>`} />
              </div>
              {/* coding animation end */}
              <div className='sm:w-[50%] flex flex-col gap-4'>
                  <div className='text-3xl font-semibold'>
                      Start <HighlightedText text={"coding in seconds."} />
                  </div>
                  <p className='text-richblack-200'>
                  Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                  </p>
                  <div className='pt-4 flex sm:flex-row flex-col gap-4'>
                      <CummonButton button_text={"Continue Lession"} active={true} linked_to={"/"} />
                      <CummonButton button_text={"Learn More"} active={false} linked_to={"/"} />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Home