import Mokeup from './mokeup'
import { Blogs } from '../../lib/data'
import ContactForm from './contectForm'



function Contact() {
  return (
    <div className='max-w-[1280px] mx-auto mb-[100px]'>
      <Mokeup data={Blogs}/>
      <ContactForm />
    </div>
  )
}

export default Contact