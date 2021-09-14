import React from 'react'
import { Gap } from '..'

const Upload = () => {
  return (
    <>
     <input type="file" />
     <Gap height="1rem"/> 
     <img src="/image/thumbnail-2.jpg" alt="preview" className="w-[200px] block" />
    </>
  )
}

export default Upload
