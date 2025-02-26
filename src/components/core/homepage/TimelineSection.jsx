import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
const timeline = [
    {
        logo:logo1,
        heading:"Leadership",
        description:"test"
    },
    {
        logo:logo2,
        heading:"Responsibility",
        description:"Students will always be our top priority"
    },
    {
        logo:logo3,
        heading:"Flexibility",
        description:"The ability to switch is an important skills"
    },{
        logo:logo4,
        heading:"Solve the problem",
        description:"Code your way to a solution"
    },

]
function TimelineSection() {
  return (
    <div className='flex flex-col sm:flex-row md:flex-row pt-8 gap-10'>
        <div className='sm:w-[50%] flex flex-col gap-6 justify-center'>
            {
                timeline.map((e,i)=>{
                    return (
                        <div className='flex flex-row gap-6' key={i}>
                            <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
                                <img src={e.logo} alt={`${e.heading}_logo`} />
                            </div>
                            <div>
                                <h2 >{e.heading}</h2>
                                <p>{e.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='relative shadow-blue-200 sm:w-[50%]'>
            <img className='h-fit' src={timelineImage} alt="a girl who is learning coding from courseking" />
            <div className='absolute w-fit bg-caribbeangreen-700 flex sm:flex-row flex-col gap-5 uppercase p-7 text-white sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] right-[0] translate-y-[-100%]'>
                <div className='flex flex-row gap-5 justify-center items-center sm:border-r sm:border-caribbeangreen-300 sm:pr-7'>
                    <h1 className='font-bold sm:text-3xl text-xl'>10</h1>
                    <div className='flex flex-col'>
                        <h2 className='text-caribbeangreen-300 sm:text-lg text-xs'>years</h2>
                        <h2 className='text-caribbeangreen-300 sm:text-lg text-xs'>experience</h2>
                    </div>
                </div>
                <div className='flex flex-row gap-5 justify-center items-center'>
                    <h1 className='font-bold sm:text-3xl text-xl'>250</h1>
                    <div className='flex flex-col'>
                        <h2 className='text-caribbeangreen-300 sm:text-lg text-xs'>types of</h2>
                        <h2 className='text-caribbeangreen-300 sm:text-lg text-xs'>course</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimelineSection