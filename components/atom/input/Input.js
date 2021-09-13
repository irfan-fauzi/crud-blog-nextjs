import React from 'react'

const Input = ({ label, ...rest }) => {
  return (
    <>
     <label className="block font-raleway font-thin mb-1">{label}</label>
     <input className="font-raleway w-full border px-3 py-1 rounded-md" {...rest}/> 
    </>
  )
}

export default Input
