import React from 'react'

const VideoCard = ({ videoInfo }) => {
  if (!videoInfo) return null;

  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-60 h-100 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden m-4 py-5">
      <img
        src={thumbnails.high.url}
        alt={title}
        className="w-60 h-40 object-fill rounded-t-lg "
      />
      <div className="p-4">
        <h2 className="font-semibold  mb-2 " title={title}>
          {title}
        </h2>
        <p className="text-gray-700 text-sm mb-1 " title={channelTitle}>
          {channelTitle}
        </p>
        <p className="text-gray-700 text-xs">
          {Number(statistics.viewCount).toLocaleString()} Views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

