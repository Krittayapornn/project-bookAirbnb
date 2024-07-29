import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar () {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="z-10">
      <div className="bg-gray-300 drop-shadow-lg ">
        <div className="w-3/4 h-[70px] m-auto text-black flex items-center justify-between">
          <div className="flex gap-3">
            <h1 className="text-3xl text-gray-700">FlowerShop </h1>
            <div className="text-3xl text-pink-600 font-light">o</div>
          </div>
          <menu className={`list-none text-xl ${isMenuVisible ? 'block' : 'hidden'} bg-menubar rounded-lg text-[15px] sm:text-[20px] lg:bg-gray-300  
          lg:block flex flex-col m-auto mr-[3px] mt-11 lg:mr-0 lg:mt-0 lg:h-[70px] lg:pt-5 `}>
            <Link
              to="/register"
              className="lg:hover:bg-pink-200 rounded-sm p-1 sm:p-4 hover:text-pink-500 cursor-pointer text-gray-700"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="lg:hover:bg-pink-200 rounded-sm p-1 sm:p-4 hover:text-pink-500 cursor-pointer text-gray-700"
            >
              Login
            </Link>
            <Link
              to="/"
              className="lg:hover:bg-pink-200 rounded-sm p-1 sm:p-4 hover:text-pink-500 cursor-pointer text-gray-700"
            >
              Home
            </Link>
          </menu>
          <button onClick={toggleMenu} className="lg:hidden">
            <svg
              className="flex cursor-pointer ml-[0px]"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="gray" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
