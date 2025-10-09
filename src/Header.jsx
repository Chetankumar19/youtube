import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import youtubeLogo from "./assets/youtubeLogo.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { GOOGLE_API_KEY } from "./utils/constant";
import { cacheResults } from "./utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
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
      console.log("suggestion");
      setSuggestions(results);
      dispatch(
        cacheResults({
          [searchQuery]: results?.title,
        })
      );
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-6 sticky top-0 bg-white h-14 md:h-16 shadow-sm z-50">
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-full hover:bg-gray-100 flex items-center cursor-pointer"
          onClick={toggleMenuHandler}
        >
          <RxHamburgerMenu size={24} />
        </button>

        <img
          src={youtubeLogo}
          alt="YouTube Logo"
          className="h-8 md:h-12 object-contain cursor-pointer"
        />
      </div>

      <div className="relative flex-1 max-w-2xl mx-4">
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-l-full px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          />
          <button className="px-6 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200 cursor-pointer">
            <FiSearch size={22} />
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-xl mt-1 shadow-lg z-50">
            <ul className="max-h-80 overflow-y-auto">
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <FiSearch size={16} className="text-gray-500" />
                  <span className="text-sm">{s.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-gray-100 flex items-center">
          <FaCircleUser size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
