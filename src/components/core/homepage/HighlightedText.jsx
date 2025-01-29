import React from 'react'

function HighlightedText({text}) {
  return (
    <span className='bg-gradient-to-r from-blue-200 to-blue-50 font-bold text-transparent bg-clip-text'>{text}</span>
  )
}

export default HighlightedText