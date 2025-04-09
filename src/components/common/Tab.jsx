import React from 'react'
import {ACCOUNT_TYPE } from '../../utils/constants'
function Tab({value,setValue}) {
const valuesList = Object.values(ACCOUNT_TYPE);
  return (
    <div className='bg-richblack-700  flex flex-row gap-2 my-1 p-[2.5px] rounded-full max-w-min'>
        {
              valuesList.map((tag,i) => {
                  return (
                    tag !== "Admin" ? 
                      <div key={i} className={`text-[14px] rounded-full px-3 py-1 font-normal cursor-pointer ${value === tag ? "bg-richblack-900 text-richblack-5" : "text-richblack-200"} hover:bg-richblack-900 hover:text-richblack-5  transition duration-150`} onClick={() => { setValue(tag) }}>
                          {tag}
                      </div> : ""
                    
                  )
              })
        }
        
    </div>
  )
}

export default Tab