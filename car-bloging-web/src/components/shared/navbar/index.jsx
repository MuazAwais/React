import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [open, setOpen] = React.useState(false);
  const [isSecrolled, setIsScrolled] = React.useState(false);

  const toggelNavbar = () => {
    setOpen(!open);
  }
  
  const closeNavbar = () => {
    setOpen(false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className='flex bg-[#232536] text-white font-poppins  '>
      <div className='container flex py-[15px] px-[50px] justify-between items-center'>
        <div className='flex gap-x-4 items-center'>
            <div className='bg-pink-300 flex px-[6px] py-[13px] rounded-full items-center justify-center'>
            <p className='flex'>Cars</p>
            </div>
            <h1 className='uppercase'>logo</h1>
        </div>
        <div className='flex gap-10 items-center'>
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
        </div>
    </nav>
    </>
  )
}

export default Navbar