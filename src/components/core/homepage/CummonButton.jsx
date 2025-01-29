import React from 'react'
import { Link } from 'react-router-dom'

function CummonButton({button_text,active,linked_to}) {
  return (
    <Link to={linked_to}>
      <div className={`text-center text-[13px] px-6 py-3 rounded-md font-medium ${active ? `bg-yellow-50 text-richblack-800 border-r-2 border-b-2 border-yellow-5`:`bg-richblack-800 text-white border-r-2 border-b-2 border-richblue-200`} hover:scale-95 transition-all duration-200 `}>
        {button_text}
      </div>
    </Link>
  )
}

export default CummonButton