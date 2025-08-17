import { FiSend } from 'react-icons/fi'

const Mokeup = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat'style={{ backgroundImage: `url(https://res.cloudinary.com/dv8dtipj1/image/upload/v1752998482/Group_9107_1_c3l1ty.svg)` }}>
    <div className=" max-w-[1280px] pt-[77px] pb-[36px] flex mx-auto text-white font-poppins bg-no-repeat" >
      <div className="flex flex-col  bg-cover bg-center pl-3 md:pl-11">
        <h2 className='font-bold text-[50px] leading-[1.2]  sm:text-[70px]'>Your Journey <br />Your Car <br />Your Way</h2>
        <p className='py-5 px-2 text-[14px] sm:text-[16px] leading-snug max-w-[400px]  sm:max-w-[650px]  text-justify'>Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam. Amet ultrices neque augue consectetur purus phasellus. Ullamcorper lorem montes varius amet vestibulum tellus facilisis consequat pretium. Et faucibus laoreet molestie diam semper fames diam eget.
        </p>
        <button className="bg-[#ff5959] w-max  text-[#f0f0f0] py-[18px] flex px-8 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0] hover:text-black">
            Subscribe <FiSend />
         </button>
      </div>
    </div>
    </div>
  )
}

export default Mokeup