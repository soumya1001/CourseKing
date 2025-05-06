import React from 'react'

function HighlightedText({text}) {
  return (
    <span className='bg-gradient-to-r from-caribbeangreen-50 to-blue-100 font-bold text-transparent bg-clip-text'> {text}</span>
  )
}

export default HighlightedText