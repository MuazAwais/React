import React, { useState } from 'react'

function About() {
const [input, setInput] = useState("")

  return (
    <div>
      <div className='flex flex-col m-12 gap-4'>
      <label htmlFor='input' className='text-2xl font-bold'>Enter your name</label>
      <input type='text' placeholder='Text' className=' p-2 border-solid border-2 border-black-500 rounded-md shadow-md ' />
      <button className='bg-blue-500 text-white p-2 rounded-md shadow-md w-24 mt-4'>Submit</button>
      </div>
    </div>
  )
}

export default About