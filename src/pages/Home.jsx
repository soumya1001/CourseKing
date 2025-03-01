import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import CummonButton from '../components/core/homepage/CummonButton';
import vBanner from '../assets/Images/banner.mp4'
import HighlightedText from '../components/core/homepage/HighlightedText';
import CodeBlock from '../components/core/homepage/CodeBlock';
import TimelineSection from '../components/core/homepage/TimelineSection';
import instractorImage from "../assets/Images/Instructor.png"
import UnlockThePowerOfCode from '../components/core/homepage/UnlockThePowerOfCode';
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
                <div className='pt-4 flex flex-row gap-4 justify-center sm:justify-start'>
                    <CummonButton button_text={"Try it Yourself"} active={true} linked_to={"/"} />
                    <CummonButton button_text={"Learn More"} active={false} linked_to={"/"} />
                </div>
            </div>
            {/* coding animation  start*/}
            <div className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] sm:w-[50%] w-[95%]'>
                <CodeBlock  line_no={9} code={`<!DOCTYPE html> \n<head>\n<title>Example</title>\n<link rel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1>Welcome to CourseKing !</h1>\n</body>\n</html>`} />
            </div>
              {/* end */}
        </div>
        {/* section 3 */}
        <div className='py-8 p-2 sm:px-[13%] flex-col-reverse flex sm:flex-row mx-auto items-center text-white justify-start gap-14'>
            {/* coding animation start */}
            <div className='shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] sm:w-[50%] w-[95%]'>
                <CodeBlock  line_no={9} code={`<!DOCTYPE html> \n<head>\n<title>Example</title>\n<link rel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1>Happy Coding!</h1>\n</body>\n</html>`} />
            </div>
            {/* end */}
            <div className='sm:w-[50%] flex flex-col gap-4'>
                <div className='text-3xl font-semibold'>
                    Start <HighlightedText text={"coding in seconds."} />
                </div>
                <p className='text-richblack-200'>
                Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
                </p>
                <div className='pt-4 flex flex-row gap-4 justify-center sm:justify-start'>
                    <CummonButton button_text={"Continue Lession"} active={true} linked_to={"/"} />
                    <CummonButton button_text={"Learn More"} active={false} linked_to={"/"} />
                </div>
            </div>
        </div>
        <UnlockThePowerOfCode/>

        {/*  section 4*/}
          <div className='bg-pure-greys-5 text-richblack-700'>
              <div className='homepage_bg h-[300px]'>
                  <div className='h-[300px] text-richblack-700 relative pt-4 flex flex-row gap-4 items-center justify-center'>
                      <CummonButton button_text={"Explore Full Catalog"} icon={<FaArrowRight />} active={true} linked_to={"/"} />
                      <CummonButton button_text={"Learn More"} active={false} linked_to={"/"} />
                  </div>
              </div>
          </div>

        {/*  section job that is in demand */}
        <div className='py-8 p-2 sm:px-[13%] bg-pure-greys-5 text-richblack-700'>
          <div className='flex sm:flex-row flex-col justify-center sm:gap-14'>
              <div className='pb-4 sm:w-[50%] text-3xl font-semibold'>Get the skills you need for a <HighlightedText text={"job that is in demand."} /></div>
              <div className='sm:w-[50%] flex flex-col'>
                  <div className='pb-4'>
                      The modern CourseKing is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                  </div>
                  <CummonButton button_text={"Learn More"} active={true} linked_to={"/"} />
              </div>
          </div>
          <div>
                <TimelineSection/>
          </div>
        </div>
        {/* section learning any language */}
        <div className='py-8 p-2 sm:px-[13%] bg-pure-greys-5 text-richblack-700 flex flex-col items-center content-center gap-14'>
            <div className='flex flex-col pt-10 items-center content-center gap-5'>
                <div className='text-3xl font-semibold'>
                    Your swiss knife for <HighlightedText text={"learning any language"} />
                </div>
                <p className='w-[70%] text-center'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </p>
            </div>
            {/* <div>

            </div> */}
            <div>
                <CummonButton button_text={"Learn More"} active={true} linked_to={"/"}/>
            </div>

        </div>
        {/* Section Become an Instractor */}
        <div className='py-8 p-2 sm:px-[13%] text-white flex sm:flex-row flex-col items-center content-center gap-14'>
            <div className='sm:w-[50%]'>
                <img className='shadow-[-10px_-10px_0px_0px_rgba(255,255,255)]' src={instractorImage} alt="" />
            </div>
            <div className='sm:w-[50%] flex flex-col gap-8'>
                <div>
                    <div className='text-3xl font-semibold'>
                        Become an <HighlightedText text={"instractor"} />
                    </div>
                    <p className='text-richblack-200 pt-1'>Instructors from around the world teach millions of students on CourseKing. We provide the tools and skills to teach what you love.</p>
                </div>
                <div>
                    <CummonButton button_text={"Start Teaching Today"} active={true} linked_to={"/"} icon={<FaArrowRight />}/>
                </div>
            </div>
        </div>
        {/* sections testimonials */}
        <div className='py-8 p-2 sm:px-[13%] text-white'>
            <h2 className='text-3xl font-semibold text-center'>Reviews from other learners</h2>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Home