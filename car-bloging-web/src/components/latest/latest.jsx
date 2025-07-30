import blogs from '../../assets/data/blogs.js';
import Writers from '../../assets/data/writer/writer.js';

function Latest() {
    const blog = blogs[0];
    const writer = Writers[0];
  return (
    <div className="max-w-[682px] pt-[77px] pb-[36px] px-4 md:px-11 font-poppins">
        <h3 className="text-[36px] font-bold font-poppins ">Latest</h3>

        <div key={blog} className="flex flex-col gap-4 my-6 px-7">
            <div>
                <img src={blog.img} alt={blog.title} />
            </div>
            <div className="flex gap-2 my-4">
                <p>By</p>
                <p className=' text-[#FF6666]'>{writer.name}</p> 
                <div className='border-l-2 border-black h-5'></div>
                <p className="text-[14px]">{blog.date}</p>
            </div>
            <h4 className="text-[24px] font-semibold">{blog.title}</h4>
            <p className="text-[16px]">{blog.content}</p>
        </div>
        <div className="flex gap-4 items-center ml-6 mt-8">
            <button className="bg-[#FF6666] text-white py-3 px-14 rounded hover:bg-[#FF4C4C]">Read More</button>
            </div>
    </div>
  )
}

export default Latest