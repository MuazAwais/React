import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#232536] text-white font-poppins">
      <div className="container py-[15px] px-[50px] justify-between items-center">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-x-4 items-center">
            <div className="bg-pink-300 flex px-[6px] py-[13px] rounded-full items-center justify-center">
              <p className="flex">Cars</p>
            </div>
            <h1 className="uppercase">logo</h1>
          </div>
          <div className="flex gap-10 items-center">
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
        <div className="flex items-center justify-between mx-12 px-10 py-20 bg-[#ffffff1e] rounded">
          <p className="text-[27px] font-bold leading-8">
            Subscribe to our news letter to <br /> get latest updates and news
          </p>
          <input
            type="email"
            placeholder="example@email.com"
            className="bg-white text-[#232536] py-[17.5px] px-10  rounded w-full max-w-96"
          />
          <button className="bg-[#ff5959] text-[#f0f0f0] py-[18px] px-10 font-bold rounded hover:border-collapse hover:bg-[#f0f0f0]">
            Subscribe
          </button>
        </div>
        <div>
            <div>
                <p>Finstreet 118 2561 abctown</p>
                <p>example@femail.com  001 21345 442</p>
            </div>
            <div>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
