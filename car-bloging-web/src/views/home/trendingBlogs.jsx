import { Link } from 'react-router-dom'

const TrendingBlogs = ({data}) => {
  return (
    <div className=' max-w-[483px] w-full pt-[77px] pb-[36px] mx-auto lg:mx-0 font-poppins'>
        <div className='flex justify-between items-center'>
            <h3 className='text-[36px] font-bold'>Trending Blogs</h3>
            <Link to="/blogs" className='text-[16px] font-semibold'>See all</Link>
        </div>
        <div className='flex flex-col gap-4 my-6'>
           {data?.slice(0,4).map((blog) => (
            <div key={blog.id} className='flex flex-col gap-2 odd:bg-[#FF6666] odd:text-white  p-4 rounded'>
                    <div className='flex gap-2 my-4'>
                    <p>By</p>
                    <p className='font-bold '>{blog.writer}</p> 
                    <div className='border-l-2 border-black h-5'></div>
                    <p className="text-[14px]">{blog.date}</p>
                </div>
                <h4 className="text-[24px] font-semibold">{blog.title}</h4>
            </div>
           ))}
        </div>
    </div>
  )
}

export default TrendingBlogs