import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const commentsData = [
  {
    name: "Chetan",
    text: "Badiya h badiya h",
    replies: [
      {
        name: "Suraj",
        text: "Badiya h badiya h",
        replies: [
          {
            name: "Ankit",
            text: "Badiya h badiya h",
            replies: [
              {
                name: "Abhishek",
                text: "Badiya h badiya h",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Chetan",
    text: "Badiya h badiya h",
    replies: [
      {
        name: "Ankit",
        text: "Badiya h badiya h",
        replies: [],
      },
    ],
  },
  {
    name: "Chetan",
    text: "Badiya h badiya h",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex p-3 bg-gray-50 rounded-lg transition-all duration-200 w-96 break-words">
      <FaCircleUser size={40} className="mt-1 mr-3" />
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="leading-snug">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="my-3 space-y-3">
      {comments.map((comment, idx) => (
        <div key={idx}>
          <Comment data={comment} />
          {comment.replies.length > 0 && (
            <div className="pl-10 border-l border-l-black ml-5">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
