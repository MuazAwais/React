import React from 'react'
import Mokeup from '../components/mokup/mokup.jsx'
import Latest from '../components/latest/latest.jsx'
import TrendingBlogs from '../components/trendingblogs/trendingBlogs.jsx'


function Home() {
  return (
    <div>
      <Mokeup/>
      <div className='max-w-[1280px] flex flex-wrap lg:flex-nowrap mx-auto '>
      <Latest/>
      <TrendingBlogs/>
      </div>
    </div>
  )
}

export default Home