import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import youtubeLogo from "./assets/youtubeLogo.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { GOOGLE_API_KEY } from "./utils/constant";
import { cacheResults } from "./utils/searchSlice";
import Profile from "./Profile";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => dispatch(toggleMenu());

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else getSearchSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      const results = data.items.map((item) => ({
        videoId: item.id.videoId,
        title: item.snippet.title,
      }));
      setSuggestions(results);
      dispatch(cacheResults({ [searchQuery]: results }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <header className="flex items-center justify-between px-3 sm:px-5 lg:px-8 sticky top-0 bg-white h-14 md:h-16 shadow-sm z-50">
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          onClick={toggleMenuHandler}
        >
          <RxHamburgerMenu size={22} />
        </button>
        <img
          src={youtubeLogo}
          alt="YouTube Logo"
          className="h-7 sm:h-9 lg:h-11 object-contain cursor-pointer"
        />
      </div>

      <div className="relative flex-1 max-w-xs sm:max-w-md lg:max-w-2xl mx-2 sm:mx-4">
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-l-full px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          />
          <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200">
            <FiSearch size={18} />
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-xl mt-1 shadow-lg z-50 max-h-72 sm:max-h-80 overflow-y-auto">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <FiSearch size={14} className="text-gray-500" />
                  <span className="text-xs sm:text-sm text-gray-800 truncate">
                    {s.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative flex items-center">
        <button
          className="bg-blue-200 rounded-full flex items-center cursor-pointer p-1"
          onClick={() => setIsProfileVisible(!isProfileVisible)}
        >
          <FaCircleUser size={26} className="text-blue-900" />
          <span className="hidden sm:inline-block px-2 font-medium text-blue-900">
            Guest
          </span>
        </button>
        {isProfileVisible && (
          <div className="w-40 sm:w-48 absolute top-full right-0 mt-2 z-50 bg-white shadow-lg rounded-lg overflow-hidden">
            <Profile />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
