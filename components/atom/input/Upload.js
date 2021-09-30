import React from 'react'
import { Gap } from '..'

const Upload = ({img, ...rest}) => {
  return (
    <>
     <input {...rest} type="file" />
     <Gap height="1rem"/> 
     {img && <img src={img} alt="preview" className="w-[200px] block h-[200px] object-cover" />}
     
    </>
  )
}

export default Upload
