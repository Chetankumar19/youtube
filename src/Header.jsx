import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import youtubeLogo from "./assets/youtubeLogo.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FiSearch, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 shadow-md sticky top-0 bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100 flex items-center cursor-pointer"
          onClick={() => toggleMenuHandler()}
        >
          <RxHamburgerMenu size={28} />
        </button>

        <img
          src={youtubeLogo}
          alt="YouTube Logo"
          className="h-12 md:h-16 object-contain cursor-pointer"
        />
      </div>

      <div className="hidden md:flex flex-1 max-w-2xl items-center mx-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-l-full px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="px-6 py-2  bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200 cursor-pointer">
          <FiSearch size={24} />
        </button>
      </div>

      {mobileSearchActive && (
        <div className="flex flex-1 items-center mx-2 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-l-full px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200">
            <FiSearch size={20} />
          </button>
          <button
            className="ml-2 p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileSearchActive(false)}
          >
            <FiX size={24} />
          </button>
        </div>
      )}

      {!mobileSearchActive && (
        <div className="flex items-center gap-3 md:gap-5">
          {/* Mobile Search Button */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 flex items-center md:hidden"
            onClick={() => setMobileSearchActive(true)}
          >
            <FiSearch size={24} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 flex items-center">
            <FaCircleUser size={32} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
