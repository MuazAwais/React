import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#232536] text-white font-poppins">
      <div className="max-w-[1280px] mx-auto py-[15px] lg:px-[50px] justify-between items-center px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-x-4 items-center">
            <div className="bg-pink-300 flex px-[6px] py-[13px] rounded-full items-center justify-center">
              <p className="flex">Cars</p>
            </div>
            <h1 className="uppercase">logo</h1>
          </div>
          <div className="hidden md:flex gap-10 items-center ">
            <ul className="flex gap-10 items-center text-[16px] font-semibold ">
              <li className="hover:font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:font-bold">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="hover:font-bold">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:font-bold">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="hover:font-bold">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-wrap  md:flex lg:flex-nowrap gap-4 items-center justify-between mx-3 sm:mx-12 px-10 py-20 bg-[#ffffff1e] rounded ">
          <p className="text-[18px] font-bold leading-5  md:leading-8 my-2 sm:text-[23px]  md:text-[24px] lg:text-[27px]">
            Subscribe to our news letter to get latest updates and news
          </p>
          <input
            type="email"
            placeholder="example@email.com"
            className="bg-white text-[#232536] py-[17.5px] px-10 rounded max-w-[255px] md:max-w-96 my-2"
          />
          <button className="bg-[#ff5959] text-[#f0f0f0] my-2 py-[18px] mx-auto flex px-8 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0] hover:text-black">
            Subscribe <FiSend />
          </button>
        </div>
        <div className="flex flex-col justify-between items-center gap-4 my-5 mx-12 sm:flex-row ">
            <div className="text-[16px] font-semibold">
                <p>Finstreet 118 2561 abctown</p>
                <p>example@femail.com  001 21345 442</p>
            </div>
            <div className="flex gap-6 text-[20px] mt-auto">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
