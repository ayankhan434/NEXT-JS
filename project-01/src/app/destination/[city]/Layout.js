import React from 'react'

function citylayout({children},{info}) {
  return (
    <div className='flex'>
      {children}
      {info}
    </div>
  )
}

export default citylayout