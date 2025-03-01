import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightedText from './HighlightedText'
import CourseCard from "./CourseCard"
function UnlockThePowerOfCode() {
    const [currentTab,setCurrentTab] = useState(HomePageExplore[0].tag)
    const [courses,setCourses] = useState(HomePageExplore[0].courses)
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)
    const changeTab =(tag)=>{
        setCurrentTab(tag)
        const newTabObj = HomePageExplore.filter((e)=> e.tag === tag)
        setCourses(newTabObj[0].courses)
        setCurrentCard(newTabObj[0].courses[0].heading)
    }
  return (
    <div className='py-8 p-2 sm:px-[13%] flex flex-col mx-auto items-center text-white justify-start gap-14'>
        <div>
            <h1 className='font-semibold text-3xl text-center'>
                Unlock the <HighlightedText  text={"Power of Code"}/>
            </h1>
            <p className='text-sx text-center text-richblack-200'>
            Learn to Build Anything You Can Imagine
            </p>
        </div>
        <div className='bg-richblack-700  flex flex-row gap-2 p-1 rounded-full'>
            {
                HomePageExplore.map((e)=> e.tag).map((tag,i)=>{
                    return(
                        <div key={i} className={`text-[16px] rounded-full px-3 py-1 font-normal cursor-pointer ${currentTab === tag ? "bg-richblack-900 text-richblack-5" : ""} hover:bg-richblack-900 hover:text-richblack-5  transition duration-150`} onClick={()=>{changeTab(tag)}}>
                            {tag}
                        </div>
                    )
                })
            }
        </div>
        <div className='flex lg:flex-row sm:flex-row flex-col gap-10'>
            {
                courses.map((course,i)=>{
                    return(
                        <CourseCard course={course} key={i} currentCard={currentCard} setCurrentCard={setCurrentCard}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UnlockThePowerOfCode