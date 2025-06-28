import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg' // Adjust the path as necessary

function Navbar() {
  return (
    <nav className="box-border w-full bg-white shadow-md">
        <div className="flex items-center px-8 py-2 gap-48">
            <div>
                <img className="w-14" src={logo} alt="logo" />
            </div>
            <div className="flex" id="">
                <ul className="flex gap-20 text-md font-semibold">
                    <li className="hover:text-indigo-100 ">
                        <Link className="" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link className="hover:text-indigo-100" to="/about">About Us</Link>
                    </li>
                    <li className="">
                        <Link className="hover:text-indigo-100" to="/testimonials">Testimonials</Link>
                    </li>
                    <li className="">
                        <Link className="hover:text-indigo-100" to="/services">Services</Link>
                    </li>
                    <li className="">
                        <Link className="hover:text-indigo-100" to="/faqs">FAQs</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar