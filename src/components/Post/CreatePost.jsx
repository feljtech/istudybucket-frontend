import React from "react";
import Button from "../../__sub__/Button";
import TextArea from "../../__sub__/TextArea";
import { CameraIcon, XIcon } from "@heroicons/react/outline";

const PostForm = ({ ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="border-2 bg-gray-100 flex justify-center">
      <div className="hidden w-40 h-60 bg-green-300 rounded-l-lg" />
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="flex">
          {/* <input type="text" placeholder="Title" /> */}
        </div>
        <div className="relative">
          <TextArea placeholder="create a post" />
          <label htmlFor="image" className="flex border self-center w-max">
            <div className="flex rounded bg-green-700 hover:bg-green-800 text-white">
              <CameraIcon className="w-8" />
              <p className="cursor-pointer self-center p-2 ">
                Add file
              </p>
            </div>

            <div className="flex mx-2">
              <Button name="Create" type="submit" />
            </div>
            <div className="flex mx-2">
              <XIcon onClick={props.hideForm} className="cursor-pointer w-5 text-red-500 hover:text-red-600" />
            </div>
          </label>
          
        </div>
        <div className="flex">
          <input
            className="hidden"
            id="image"
            accept=".png,.jpg,.jpeg"
            name="image"
            type="file"
            src=""
            alt=""
          />
        </div>
      </form>
      <div className="hidden w-40 h-60 bg-green-300 rounded-r-lg" />
    </div>
  );
};

export default PostForm;
