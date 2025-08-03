import React from 'react'
import Mokeup from '../components/mokup/mokup.jsx'
import Latest from '../components/latest/latest.jsx'
import TrendingBlogs from '../components/trendingblogs/trendingBlogs.jsx' 
import NewTechnology from '../components/newTechnology/index.jsx'
import AllCategory from '../components/allCategory/index.jsx'
import Testimonials from '../components/testimonials/index.jsx'


function Home() {
  return (
    <div>
      <Mokeup/>
      <div className='max-w-[1280px] flex flex-wrap lg:flex-nowrap mx-auto '>
      <Latest/>
      <TrendingBlogs/>
      </div>
      <NewTechnology/>
      <hr className='max-w-[1180px] mx-auto border-t-2 border-gray-300' />
      <AllCategory/>
      <Testimonials/>
      <NewTechnology/>
    </div>
  )
}

export default Home