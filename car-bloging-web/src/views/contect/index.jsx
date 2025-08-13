import Mokeup from './mokeup'
import { Blogs } from '../../lib/data'



function Contact() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Mokeup data={Blogs}/>
    </div>
  )
}

export default Contact