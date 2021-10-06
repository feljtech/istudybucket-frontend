import React from "react";
import {
  ChatIcon,  UserCircleIcon,
} from "@heroicons/react/outline";
import {
  ArrowDownIcon,
  ArrowUpIcon
} from "@heroicons/react/solid";
import me from "../../assets/img/me.jpeg";
import TextArea from "../../__sub__/TextArea";
import Button from "../../__sub__/Button";
// import { PostContext, PostContextProvider } from '../api/context/PostContext'

const PostBase = ({ children, ...props }) => {
  // const {post , setPost} = React.useContext(PostContext);

  return (
    <div className="rounded border px-5 py-2 mt-5" {...props}>
      <div className="flex justify-between mb-4">
        <div className="flex ">
        <UserCircleIcon className="text-green-400 w-8" />
          <div className="block mx-2 self-center">
            <p className="hidden mr-3 font-bold">Spyke Lionel</p>
            <p className="mr-3 text-gray-500 self-center">@lionel</p>
          </div>
        </div>
        <p className="text-gray-400 ">September 2, 2021</p>
        <p className="hidden text-gray-400 align-left italic self-center">lecturer</p>
      </div>
      <div className="">{children}</div>

      <div className="flex justify-between border-t pt-2">
        <div className="flex justify-between">
          <div className="flex border border-green-300 rounded-full mr-2 p-1 cursor-pointer hover:bg-green-500 ">
            <span className="text-green-600 hover:text-white text-sm self-center">24</span>
            <ArrowUpIcon className="text-green-600 hover:text-white w-6 " />
            <span className="sr-only">upvotes</span>
          </div>
          <div className="flex border border-green-300 rounded-full mr-2 p-1 cursor-pointer hover:bg-green-500 ">
            <span className="text-green-600 hover:text-white text-sm self-center">24</span>
            <ArrowDownIcon className="text-green-600 hover:text-white w-6 " />
            <span className="sr-only">downvotes</span>
          </div>
        </div>
        <div className="flex">
          <ChatIcon className="w-8 text-green-600" aria-hidden="true" />
          <span className="text-green-500 self-center">6</span>
          <span className="sr-only">comments</span>
        </div>
      </div>

      <form className="">
        {/* <input type="text" className="w-full outline-none" /> */}
        {/* <textarea placeholder="add comment" className="rounded outline-none border-green-400 focus:border-green-500 w-full" name="" id="" cols="50" rows="3"></textarea> */}
       <TextArea className="w-full"/>
       
        <Button name="comment" type="button"/>
      </form>
    </div>
  );
};

export default PostBase;
