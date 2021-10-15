import React from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Comment = ({ comment, ...props }) => {
  return (
    <div {...props}>
      {comment.map((comment, index) => {
        return <CommentBox user={comment.user} comment={comment.body} key={index} />;
      })}
    </div>
  );
};

export const CommentBox = ({ user, comment, ...props }) => {
  return (
    <div className="border m-1 bg-white hover:bg-gray-100 p-2 pb-1 rounded" {...props}>
      <div className="flex ">
        <div className="block mx-2 self-center">
          <p className="mr-3 text-green-500 self-center cursor-pointer">
            @{user}
          </p>
        </div>
      </div>
      <p className="text-gray-700 my-0 p-2 text-sm">{comment}</p>
      <div className="flex justify-between border-t pt-2">
        <div className="flex">
        <div className="flex justify-between">
          <div className="flex border border-gray-300 rounded-full mr-2 p-1 cursor-pointer hover:bg-green-500 ">
            <span className="text-gray-600 hover:text-white text-xs self-center">
              24
            </span>
            <ArrowUpIcon className="text-gray-600 hover:text-white w-3 " />
            <span className="sr-only">upvotes</span>
          </div>
          <div className="flex border border-green-300 rounded-full mr-2 p-1 cursor-pointer hover:bg-green-500 ">
            <span className="text-green-600 hover:text-white text-xs self-center">
              24
            </span>
            <ArrowDownIcon className="text-green-600 hover:text-white w-3 " />
            <span className="sr-only">downvotes</span>
          </div>
        </div>
        <div className="flex self-center cursor-pointer">
          {/* <ChatIcon className="w-5 text-green-600" aria-hidden="true" />
          <span className="text-green-500 self-center">0</span> */}
          <span className="text-gray-500 text-xs">{31} replies</span>
        </div>
        </div>

      <p className="text-gray-500 text-xs self-center">2d ago</p>
      </div>
    </div>
  );
};


export default Comment;
