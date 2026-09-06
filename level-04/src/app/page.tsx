'use client'
import Button from '@/Button'
import React,{useState} from 'react'


function page() {

  const [num, setnum] = useState<number>(0)
  return (
    <div>
      <Button/>
    </div>
  )
}

export default page
