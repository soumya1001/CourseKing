import React from 'react'
import { TypeAnimation } from 'react-type-animation'
function CodeBlock({ code, line_no }) {
  return (
    <div className='flex flex-row border-solid border-transparent bg-richblack-200/10 backdrop-blur-lg p-4'>
      <div className='text-sm px-2 text-richblack-200'>
          {Array.from({ length: line_no }).map((_, index) => (
            <p key={index}>{index + 1}</p>
          ))}
      </div>
      <div className='text-sm'>
        <TypeAnimation
          sequence={[code, 10000, ""]}
          repeat={Infinity}
          cursor={true}
          style={{
            whiteSpace: "pre-line",
            display: "block",
          }}
          omitDeletionAnimation={true}
        />
      </div>
    </div>
  )
}

export default CodeBlock