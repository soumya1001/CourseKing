import React from 'react'

function InfoCard({title,desc,desc2,fromColor,toColor,via}) {
  return (
    <div>
        <h2 className={`text-3xl bg-gradient-to-b ${fromColor} ${via ? via :""} ${toColor} text-transparent bg-clip-text font-bold pb-6`}>{title}</h2>
        <p className='text-richblack-300 font-semibold'>{desc}</p>
        {
            desc2?
            <p className='text-richblack-300 font-semibold'>{desc2}</p>
            :""
        }
    </div>
  )
}

export default InfoCard