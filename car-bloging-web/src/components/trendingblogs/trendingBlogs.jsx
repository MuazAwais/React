import React from 'react'
import { Link } from 'react-router-dom'

function TrendingBlogs() {

  return (
    <div className=' max-w-[483px] w-full pt-[77px] pb-[36px] px-4 md:px-0 font-poppins'>
        <div className='flex justify-between items-center'>
            <h3 className='text-[36px] font-bold'>Trending Blogs</h3>
            <Link to="/blogs" className='text-[16px] font-semibold'>See all</Link>
        </div>
        
    </div>
  )
}

export default TrendingBlogs