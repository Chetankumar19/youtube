import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import VideoSuggest from "../VideoSuggest";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [searchParam]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 py-6">
      <div className="lg:col-span-2 w-full aspect-video rounded-xl shadow-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
          title="YouTube video player"
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="lg:col-span-1 h-[70vh] rounded-xl shadow-lg overflow-hidden">
        <LiveChat />
      </div>

      <div className="lg:col-span-2 rounded-xl p-4 bg-white">
        <CommentContainer />
      </div>
      <div>
        <VideoSuggest/>
      </div>
    </div>
  );
};

export default WatchPage;
