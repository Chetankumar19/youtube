import React from "react";
import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY } from "./utils/constant";
import { addVideo } from "./utils/videoSlice";

const Button = ({ name }) => {
  const dispatch = useDispatch();

  const getVideos = async (query) => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${GOOGLE_API_KEY}`
      );
      const json = await res.json();
      console.log(json.items);
      if (json?.items) dispatch(addVideo(json.items));
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  return (
    <button
      className="px-3 py-1 m-2 bg-gray-200 rounded-lg font-semibold shadow-sm hover:bg-gray-300 active:scale-95 transition-transform cursor-pointer"
      onClick={() => getVideos(name)}
    >
      {name}
    </button>
  );
};

export default Button;
