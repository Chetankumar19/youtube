import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from './utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const regionValue = useSelector(state => state.region)
  console.log(regionValue.region)
  useEffect(() => {
    console.log("page render")
    getVideos();
  }, [regionValue]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API+regionValue.region+"&key="+GOOGLE_API_KEY);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-4">
      {videos.map((videoInfo, idx) => (
        <Link to={`/watch?v=${videoInfo.id?.videoId || videoInfo.id}`} key={videoInfo.id?.videoId || idx}>
          <VideoCard videoInfo={videoInfo} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
