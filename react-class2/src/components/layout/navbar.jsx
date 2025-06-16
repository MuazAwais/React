import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='links'>
            <ul className='links-list'>
              <li className='link-item'><Link to="/">Home</Link></li>
              <li className='link-item'><Link to="/services">Services</Link></li>
              <li className='link-item'><Link to="/testimonials">Testimonials</Link></li>
              <li className='link-item'><Link to="/about">About Us</Link></li>
              <li className='link-item'><Link to="/faqs">FAQs</Link></li>
            </ul>
        </div>
        <div className='contact-btn'>
            <button className='contact-btn-item'>Contact Us</button>
        </div>
    </nav>
  )
}

export default Navbar