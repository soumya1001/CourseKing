import React from 'react'
import userIcon from '../../../assets/CourseCardIcons/user.svg'
import chartTree from '../../../assets/CourseCardIcons/chart-tree.svg'
function CourseCard({course,currentCard,setCurrentCard}) {
  return (
    <div className={`bg-richblack-800 h-[260px] flex flex-col gap-5 justify-between transition duration-150 hover:backdrop-blur-md hover:bg-opacity-90 shadow-[-20px_20px_300px_-70px_rgba(255,214,10,1)] border-spacing-1 border-richblack-5`} onClick={()=>setCurrentCard(course.heading)}>
        <div className='p-5'>
            <h1 className='font-semibold pb-2'>{course.heading}</h1>
            <p className='text-sx text-richblack-200'>{course.description}</p>
        </div>
        <div className='px-5 py-3 flex flex-row justify-between border-t-2 border-dashed border-richblack-200'>
          <div className='flex flex-row gap-2'>
            <div className='w-[20px] flex items-center'>
              <img src={userIcon} alt="ChartTreeIcon" />
            </div>
            <p className='text-richblack-200'>{course.level}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <div className='w-[18px] flex items-center'>
              <img src={chartTree} alt="ChartTreeIcon" />
            </div>
            <p className='text-richblack-200'>{course.lessionNumber} Lessons</p>
          </div>
        </div>
    </div>
  )
}

export default CourseCard