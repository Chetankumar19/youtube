import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import youtubeLogo from "./assets/youtubeLogo.jpg";
import { FaCircleUser } from "react-icons/fa6";
import { FiSearch, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { XMLParser } from "fast-xml-parser";
import { toggleMenu } from "./utils/appSlice";
import { GOOGLE_API_KEY } from "./utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const [searchQuery, SetSearchQuery] = useState("");
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    //make api call after every key press
    //but if difference betwn the key press is 200ms
    // then => decline the api call
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);
    return () =>{
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery)
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    const results = data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
    }));
    console(results);
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

      <div className="hidden md:flex flex-1 max-w-2xl items-center mx-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-l-full px-4 py-2 text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => SetSearchQuery(e.target.value)}
        />
        <button className="px-6 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200 cursor-pointer">
          <FiSearch size={22} />
        </button>
      </div>

      {mobileSearchActive && (
        <div className="flex flex-1 items-center mx-2 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-l-full px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
          />
          <button className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200">
            <FiSearch size={18} />
          </button>
          <button
            className="ml-2 p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileSearchActive(false)}
          >
            <FiX size={22} />
          </button>
        </div>
      )}

      {!mobileSearchActive && (
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full hover:bg-gray-100 flex items-center md:hidden"
            onClick={() => setMobileSearchActive(true)}
          >
            <FiSearch size={22} />
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 flex items-center">
            <FaCircleUser size={28} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
