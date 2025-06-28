import React, { Children } from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Layout(props) {
  return (
    <div>
        <Navbar/>
        <div>{props.children}</div>
        <Footer/>
    </div>
  )
}

export default Layout