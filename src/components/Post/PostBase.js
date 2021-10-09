import React from "react";
import { ChatIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import me from "../../assets/img/me.jpeg";
import TextArea from "../../__sub__/TextArea";
import Button from "../../__sub__/Button";
import Comment from "../comment/Comment";
// import { PostContext, PostContextProvider } from '../api/context/PostContext'

const PostBase = ({ children, ...props }) => {
  // const {post , setPost} = React.useContext(PostContext);
  const [showSubscribe, setShowSubscribe] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);

  // get comment context from api CommentContext
  const comment = [
    {
      body: "You ghosted me with this.",
      user: "lionel",
    },
    {
      body: "For real it works?",
      user: "spyke",
    },
  ];

  return (
    <div className="rounded border px-5 py-2 mt-5" {...props}>
      <div className="flex justify-between mb-4">
        <div className="flex ">
          <UserCircleIcon className="text-gray-400 w-12" />
          <div className="block mx-2 self-center">
            <p className="mr-3 font-bold">NDI Lionel</p>
            <p className="mr-3 text-green-500 hover:text-green-600 self-center cursor-pointer">
              @lionel
            </p>
          </div>
        </div>
        <p className="text-gray-400 self-center">September 2, 2021</p>
        <p className="hidden text-gray-400 align-left italic self-center">
          lecturer
        </p>
      </div>
      <div className="">{children}</div>

      <div className="flex justify-between">
        <div className="flex border-t pt-2">
          <div className="flex justify-between mx-2">
            <div className="flex border border-gray-300 hover:bg-gray-400  rounded-full mr-2 p-1 cursor-pointer  ">
              <span className="text-gray-600 text-sm self-center">24</span>
              <ArrowUpIcon className="text-gray-900 hover:text-white w-6 " />
              <span className="sr-only">upvotes</span>
            </div>
            <div className="mx-2 flex border border-gray-300 rounded-full mr-2 p-1 cursor-pointer ">
              <span className="text-gray-600  text-sm self-center">24</span>
              <ArrowDownIcon className="text-gray-900 w-6 " />
              <span className="sr-only">downvotes</span>
            </div>
          </div>
          <div className="flex mx-2 cursor-pointer">
            <ChatIcon
              className="w-8 text-gray-900"
              aria-hidden="true"
              onClick={() => setShowComments(!showComments)}
            />
            <span className="text-gray-500 self-center">2</span>
            <span className="sr-only">comments</span>
          </div>
        </div>
        <div className="relative">
          <DotsVerticalIcon
            className="w-6 text-gray-600 cursor-pointer"
            onClick={() => setShowSubscribe(!showSubscribe)}
          />
          {showSubscribe && (
            <div className="relative bottom-7">
              <p className="cursor-pointer text-white bg-green-500 hover:bg-green-700 p-1 absolute -top-6 right-0 text-xs ">
                Subscribe
              </p>
              <p className="absolute pointer-events-none -top-5 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></p>
            </div>
          )}
        </div>
      </div>

      {showComments && (
        <form className="">
          <CommentForm />
          <div className="mt-3">
            <Comment comment={comment} />
          </div>
        </form>
      )}
    </div>
  );
};

export const CommentForm = ({ ...props }) => {
  return (
    <div className="border-b mb-2" {...props}>
      <TextArea className="w-full" />
      <Button name="comment" type="button" />
    </div>
  );
};

export default PostBase;
