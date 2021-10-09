import React from "react";
import { ChatIcon } from "@heroicons/react/outline";
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
    <div className="border m-3 bg-blue-100 p-5 rounded" {...props}>
      <div className="flex ">
        <UserCircleIcon className="text-gray-400 w-12" />
        <div className="block mx-2 self-center">
          <p className="mr-3 font-bold">NDI Lionel</p>
          <p className="mr-3 text-green-500 self-center cursor-pointer">
            @{user}
          </p>
        </div>
      </div>
      <p className="text-gray-700 my-3 p-2">{comment}</p>
      <div className="flex border-t pt-2">
        <div className="flex justify-between">
          <div className="flex border border-gray-300 rounded-full mr-2 p-1 cursor-pointer hover:bg-green-500 ">
            <span className="text-gray-600 hover:text-white text-sm self-center">
              24
            </span>
            <ArrowUpIcon className="text-gray-600 hover:text-white w-3 " />
            <span className="sr-only">upvotes</span>
          </div>
          <div className="flex border border-green-300 rounded-full mr-2 p-1 cursor-pointer hover:bg-green-500 ">
            <span className="text-green-600 hover:text-white text-sm self-center">
              24
            </span>
            <ArrowDownIcon className="text-green-600 hover:text-white w-3 " />
            <span className="sr-only">downvotes</span>
          </div>
        </div>
        <div className="flex ">
          <ChatIcon className="w-5 text-green-600" aria-hidden="true" />
          <span className="text-green-500 self-center">0</span>
          <span className="sr-only">replies</span>
        </div>
      </div>
    </div>
  );
};


export default Comment;
