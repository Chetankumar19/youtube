import React from "react";

const VideoCard = ({ videoInfo, isSuggest }) => {
  if (!videoInfo) return null;
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return !isSuggest ? (
    <div className="flex flex-col w-full sm:w-64 md:w-72 lg:w-80 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden bg-white ">
      <img
        src={thumbnails?.medium?.url || thumbnails?.high?.url}
        alt={title}
        className="w-full aspect-video object-cover"
      />
      <div className="flex flex-col p-3">
        <h2 className="text-sm sm:text-base font-semiboldline-clamp-2">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600   mt-1 truncate">
          {channelTitle}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          {Number(statistics?.viewCount || 0).toLocaleString()} views
        </p>
      </div>
    </div>
  ) : (
    <div className="flex w-full max-w-xl bg-transparent cursor-pointer">
      <div className="relative flex-shrink-0 rounded-lg overflow-hidden p-2">
        <img
          src={thumbnails?.medium?.url || thumbnails?.high?.url}
          alt={title}
          className="w-40 h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-start p-2">
        <p className="truncate font-semibold overflow-hidden">
          {title?.split(" ").slice(0, 5).join(" ")}
          {title?.split(" ").length > 4}
        </p>
        <p className="text-xs text-gray-500">
          {Number(statistics?.viewCount || 0).toLocaleString()} views • 3 years
          ago
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
