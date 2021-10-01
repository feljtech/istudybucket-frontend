import React from "react";
import {
  ChatIcon,
  HeartIcon,
  ShareIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import me from "../../assets/img/me.jpeg";
import TextArea from "../../__sub__/TextArea";
import Button from "../../__sub__/Button";
// import { PostContext, PostContextProvider } from '../api/context/PostContext'

const PostBase = ({ children, ...props }) => {
  // const {post , setPost} = React.useContext(PostContext);

  return (
    <div className="rounded border px-5 py-2 mt-5" {...props}>
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img src={me} alt="me" className="rounded-full w-12 h-12" />
          <div className="block mx-2">
            <p className="mr-3 font-bold">Spyke Lionel</p>
            <p className="mr-3 text-gray-400 italic">@lionel</p>
          </div>
        </div>
        <p className="text-gray-400 align-left italic self-center">lecturer</p>
      </div>
      <div className="">{children}</div>

      <div className="flex justify-between border-t">
        <div className="flex">
          <HeartIcon className="text-green-600 w-8 fill-current" />
          <span className="text-green-600 self-center">24</span>
          <span className="sr-only">likes</span>
        </div>
        <div className="flex">
          <ChatIcon className="w-8 text-green-600" aria-hidden="true" />
          <span className="text-green-500 self-center">24</span>
          <span className="sr-only">comments</span>
        </div>
        <div className="flex">
          <ShareIcon className="w-8 text-green-600" />
          <span className="sr-only">share</span>
        </div>

        {/* <ClockIcon className="text-green-400 w-8" /> */}
        <p className="text-gray-400 ">September 2, 2021</p>
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
