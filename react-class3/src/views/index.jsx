import React from 'react';
import { studentsData } from '../components/data/student-data';


function Home() { 

  return (
    console.log( studentsData),
    <div className='w-4/5 h-full rounded-md'>
    <table className='m-28 py-3 border-2 border-gray-300 shadow-md w-full text-center text-lg h-full'>
      <thead className='bg-gray-200 uppercase text-lg '>
        <tr className='border-b border-gray-300 text-lg font-bold text-gray-700'>
        <td className='py-3'> rollNo</td>
        <td className='py-3'>studentName</td>
        <td className='py-3'>class</td>
        <td className='py-3'>address</td>
        <td>subject</td>
        </tr>
      </thead>
      <tbody className='text-center '>
        {studentsData.map((student, index) => (
          <tr key={index} className='border-b border-gray-300 text-lg text-gray-700 font-semibold'>
            <td className='py-3 px-4 border-r border-gray-300' >{student.rollNo}</td>
            <td className='py-3 px-4 border-r border-gray-300' >{student.studentName}</td>
            <td className='py-3 px-4 border-r border-gray-300' >{student.class}</td>
            <td className='py-3 px-4 border-r border-gray-300' >{student.address}</td>
            <td className='py-3 px-4 border-r border-gray-300' >{student.subject}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Home