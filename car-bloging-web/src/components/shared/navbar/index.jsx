import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className='flex bg-[#232536] text-white font-poppins'>
      <div className='max-w-[1280px] mx-auto flex py-[15px] px-4 lg:px-[50px] justify-between items-center w-full'>
        {/*logo*/}
        <div className='flex gap-x-4 items-center'>
            <div className='bg-pink-300 flex px-[6px] py-[13px] rounded-full items-center justify-center'>
            <p className='flex'>Cars</p>
            </div>
            <h1 className='uppercase'>logo</h1>
        </div>
        {/*desktop menu*/}
        <div className='hidden md:flex gap-10 items-center '>
          <ul className='flex gap-10 items-center text-[16px] font-semibold  '>
            <li className='hover:font-bold'>
              <Link to='/'>Home</Link>
            </li>
            <li className='hover:font-bold'>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className='hover:font-bold'>
              <Link to='/about'>About</Link>
            </li>
            <li className='hover:font-bold'>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          <div>
            <button className='bg-white text-[#232536] py-3 px-10 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0]'>Subscribe</button>
          </div>
        </div>
        {/* mobile menu */}
        <div className='block md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <FiAlignJustify className='text-4xl' />
          </button>
        </div>
        {/* mobile menu dropdown */}
        {isOpen && (
          <div className='absolute flex flex-col py-3 top-24 right-1 transition w-full max-w-[190px] ml-auto rounded-2xl justify-center items-center bg-[#080d31] md:hidden'>
            <ul className='flex flex-col items-center text-[16px] font-semibold py-4 gap-2'>
              <li className='hover:font-bold mb-2'>
                <Link to='/'>Home</Link>
              </li>
              <li className='hover:font-bold mb-2'>
                <Link to='/blogs'>Blogs</Link>
              </li>
              <li className='hover:font-bold mb-2'>
                <Link to='/about'>About</Link>
              </li>
              <li className='hover:font-bold mb-2'>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
            <div>
              <button className='bg-white text-[#232536] py-3 px-10 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0]'>Subscribe</button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}

export default Navbar