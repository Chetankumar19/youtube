import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomMessage, generateRandomName } from "./utils/helper";
import { addMessage } from "./utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [cnt, setCount] = useState(0);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
      setCount((prev) => prev + 1);
    }, 800);

    return () => clearInterval(interval);
  }, [dispatch, cnt]);

  return (
    <div className="flex flex-col h-[70vh] bg-white shadow-lg border border-gray-300 rounded-xl">
      <div className="p-3 text-lg font-bold text-center bg-gray-500 text-white rounded-t-xl">
        Live Chat
      </div>

      <div className="flex-1 flex flex-col-reverse overflow-y-auto p-3 space-y-2">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>

      <form
        className="p-3 border-t border-gray-300 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"chetan",
            message:liveMessage
          }))
          setLiveMessage("")
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button 
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
