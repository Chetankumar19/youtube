import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addVideo } from './src/utils/videoSlice';
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from './src/utils/constant';
import { Link } from 'react-router-dom';
import VideoCard from './src/VideoCard';

const VideoSuggest = () => {
  const videos = useSelector(state => state.video.videos);
  const regionValue = useSelector(state => state.region);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await fetch(`${YOUTUBE_VIDEOS_API}${regionValue.region}&key=${GOOGLE_API_KEY}`);
      const json = await res.json();
      console.log(json.items)
      if (json?.items) dispatch(addVideo(json.items));
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-4">
      {videos.map((videoInfo, idx) => (
        <Link to={`/watch?v=${videoInfo.id?.videoId || videoInfo.id}`} key={videoInfo.id?.videoId || idx}>
          <VideoCard videoInfo={videoInfo} isSuggest={true} />
        </Link>
      ))}
    </div>
  );
}

export default VideoSuggest