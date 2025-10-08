import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router";
import CommentContainer from "./commentContainer";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [searchParam, dispatch]);

  return (
      <div className="flex flex-col px-6 py-6">
        <div className="w-full aspect-video sm:w-[900px] sm:h-[500px]">
          <iframe
            src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
            title="YouTube video player"
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          < CommentContainer/>
        </div>
      </div>
    
  );
};

export default WatchPage;
