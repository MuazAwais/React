import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Testimonials() {
  return (
    <div className="max-w-[1280px] mx-auto my-10 py-10 bg-[#232536] font-poppins flex ">
      <div className="flex mx-[150px] flex-wrap lg:flex-nowrap items-center justify-between gap-4">
        <div className="max-w-[321px] flex flex-col justify-center py-16 mr-16 gap-y-4">
          <h3 className=" text-white uppercase text-[16px] tracking-[0.2em]">
            Testimonials
          </h3>
          <h4 className="text-white font-bold text-2xl">
            What people say about our blog
          </h4>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="border-b-2 md:border-l-2 border-gray-300 my-auto h-64"></div>
        <div className="max-w-[600px] flex flex-col justify-center px-16 py-8 text-white gap-8">
          <p className="text-white font-bold text-[24px] leading-[32px] max-w-[432px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center  mt-auto  ">
            <div className="w-[60px] rounded-full">
              <img
                src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1752951749/Ellipse_81_cprmwb.svg"
                alt="Jonathan Vallem"
              />
            </div>
            <div className="flex flex-col text-white gap-2">
              <h4 className="text-xl font-bold">Jonathan Vallem</h4>
              <p>New York,</p>
              <p>USA</p>
            </div>
            <div className="flex ml-auto gap-x-2">
              <button className="p-2 rounded-full bg-gray-300 active:bg-[#FF5959] active:p-7 active:text-black font-[36px]">
                <FaArrowLeft />
              </button>
              <button className="p-2 rounded-full bg-gray-300 active:bg-[#FF5959] active:p-7 active:text-black font-[36px]">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
