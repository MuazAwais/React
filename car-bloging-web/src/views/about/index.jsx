import AboutDetail from "./aboutDetails"
import Mokeup from "./mockup"
import AllCategory from "../../components/shared/allCategory"
const About = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Mokeup/>
      <div className="">
        <AboutDetail />
      </div>
      <hr className="border-b-2"/>
      <AllCategory />
    </div>
  )
}

export default About