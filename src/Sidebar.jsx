import React from "react";
import { AiFillHome, AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { MdOutlineArticle } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen)
    return (
      <aside className="w-20 h-screen bg-white shadow-md p-4 flex flex-col gap-6">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <AiFillHome size={24} />
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <AiOutlineYoutube size={24} />
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <MdOutlineSubscriptions size={24} />
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaMusic size={20} className="text-red-500" />
            
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <GiGamepad size={20} className="text-green-500" />
           
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <MdOutlineArticle size={20} className="text-blue-500" />
            
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <IoMdFootball size={20} className="text-yellow-500" />
           
          </li>
        </ul>

      </aside>
    );
  return (
    <aside className="w-60 h-screen bg-white shadow-md p-4 flex flex-col gap-6">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <AiFillHome size={24} />
          <span>Home</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <AiOutlineYoutube size={24} />
          <span>Shorts</span>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <MdOutlineSubscriptions size={24} />
          <span>Subscriptions</span>
        </li>
        
      </ul>

      <div className="flex flex-col gap-2 mt-6">
        <h2 className="uppercase text-sm font-bold">Explore</h2>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaMusic size={20} className="text-red-500" />
            <span>Music</span>
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <GiGamepad size={20} className="text-green-500" />
            <span>Gaming</span>
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <MdOutlineArticle size={20} className="text-blue-500" />
            <span>News</span>
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <IoMdFootball size={20} className="text-yellow-500" />
            <span>Sports</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
