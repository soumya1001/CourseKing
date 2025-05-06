import React from 'react'
const stats= [
    { count: "5K", label: "Active Students" },
    { count: "10+", label: "Mentors" },
    { count: "200+", label: "Courses" },
    { count: "50+", label: "Awards" },
];
function Stats() {
  return (
    <div className=' grid grid-flow-col justify-evenly items-center py-6'>
        {
            stats.map((stat,i)=>{
                return (
                    <div key={i} className='flex flex-col items-center'>
                        <p className='text-white text-3xl font-bold'>{stat.count}</p>
                        <p className='text-richblack-500 font-semibold text-lg'>{stat.label}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Stats