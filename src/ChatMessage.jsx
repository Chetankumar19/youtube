import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start sm:items-center p-2 sm:p-3 m-1 sm:m-2 shadow-sm rounded-lg break-words">
      <FaCircleUser className="flex-shrink-0 text-blue-500" size={20} sm={25} />
      <div className="ml-2 flex-1">
        <span className="font-bold text-sm sm:text-base">{name}:</span>
        <span className="text-sm sm:text-base ml-1">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
