import React from "react";
import { BiChevronRight, BiSearchAlt, BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavSm = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold text-white">It All Starts Here!</h1>
          <span className="flex items-center text-xs text-gray-300 pl-0.5">
            Varanasi <BiChevronRight className="" />
          </span>
        </div>
        <div className="text-3xl text-white">
          <BiSearchAlt />
        </div>
      </div>
    </>
  );
};

const NavMd = () => {
  return (
    <div className="flex items-center gap-2 w-full bg-white p-2 text-gray-400">
      <BiSearchAlt className="text-2xl" />
      <input
        type="search"
        placeholder="Search for Movies, TV Shows and People"
        className="w-full focus:outline-none"
      />
    </div>
  );
};

const NavLg = () => {
  return (
    <div className="flex justify-between text-white w-10/12 mx-auto p-2">
      <div className="flex justify-between items-center w-7/12 gap-5">
        <div className="w-30 h-8">
            <Link to={`/`}>
          
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="BookMyShow logo"
            className="w-full h-full"
            
          />
          </Link>
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

const Navbar = () => {
  return (
    <>
      <nav className="bg-bms-700 px-3 py-2">
        <div className="md:hidden">
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden pt-3 px-2">
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
