import React from 'react'

const VideoCard = ({ videoInfo }) => {
  if (!videoInfo) return null;
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col w-full sm:w-64 md:w-72 lg:w-80 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden bg-white dark:bg-neutral-900">
      <img
        src={thumbnails?.medium?.url || thumbnails?.high?.url}
        alt={title}
        className="w-full aspect-video object-cover"
      />
      <div className="flex flex-col p-3">
        <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 truncate">
          {channelTitle}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          {Number(statistics?.viewCount || 0).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
