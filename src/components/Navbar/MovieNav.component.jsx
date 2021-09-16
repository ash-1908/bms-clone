import React from "react";
import { BiSearchAlt, BiChevronDown } from "react-icons/bi";
import {AiOutlineShareAlt} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";

const NavSm = () => {
  return (
    <>
      <div className="w-full p-3">
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-semibold text-white">Movie Title</h1>

          <div className="text-2xl text-white">
            <AiOutlineShareAlt />
          </div>
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <div className="flex justify-between text-white w-10/12 mx-auto p-2">
      <div className="flex justify-between items-center w-7/12 gap-5">
        <div className="w-30 h-8">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="BookMyShow logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex bg-white w-full p-1 items-center rounded-md">
          <BiSearchAlt className="text-black text-lg mx-2" />
          <input
            type="search"
            placeholder="Search for Movies, TV Shows and People"
            className="w-full focus:outline-none p-1 text-black"
          />
        </div>
      </div>

      <div className="flex gap-6 items-center text-sm">
        <span className="flex items-center">
          Varanasi <BiChevronDown />
        </span>
        <button className="px-3 py-1 bg-red-600 rounded">Sign in</button>
        <GiHamburgerMenu className="text-lg" />
      </div>
    </div>
  );
};

const MovieNav = (props) => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 lg:relative w-full lg:bg-bms-700 bg-transparent bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="md:flex lg:hidden">
          <NavSm />
        </div>
        <div className="hidden lg:flex ">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNav;
