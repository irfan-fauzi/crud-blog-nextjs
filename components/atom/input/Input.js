import React from 'react'

const Input = ({ label, ...rest }) => {
  return (
    <>
     <label className="block font-raleway font-light text-gray-500 mb-1">{label}</label>
     <input className="border-purple-400 border font-raleway w-full px-4 py-2 rounded-md font-light" {...rest}/> 
    </>
  )
}

export default Input
