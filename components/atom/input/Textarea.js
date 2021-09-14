import React from 'react'

const Textarea = ({label, ...rest}) => {
  return (
    <div className="border">
      <textarea  className="w-full border-purple-400 border rounded-md h-[20rem] focus:outline-none px-3 py-4 font-light" {...rest}></textarea>
    </div>
  )
}

export default Textarea
