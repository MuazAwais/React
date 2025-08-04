import NewTechnology from "../../components/shared/newTechnology"
import Mokeup from "./mokeup"
import Latest from "./latest"
import TrendingBlogs from "./trendingBlogs"
import AllCategory from "./allCategory"
import Testimonials from "./testimonials"
import { Blogs, BlogsV2 } from "../../lib/data"


const Home = () => {
  return (
    <div>
      <Mokeup/>
      <div className='max-w-[1280px] flex flex-wrap lg:flex-nowrap mx-auto '>
      <Latest data={Blogs}/>
      <TrendingBlogs data={Blogs}/>
      </div>
      <NewTechnology data={Blogs}/>
      <hr className='max-w-[1180px] mx-auto border-t-2 border-gray-300' />
      <AllCategory/>
      <Testimonials />
      <NewTechnology data={BlogsV2}/>
    </div>
  )
}

export default Home