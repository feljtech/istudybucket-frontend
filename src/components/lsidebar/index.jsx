import React from "react";
import { DocumentIcon, BanIcon } from "@heroicons/react/outline";
import Card from "../../__sub__/Card";

const LSideBar = ({ ...props }) => {
  return (
    <div
      className="border fixed left-0 flex flex-col px-5 h-full w-1/4 overflow-y-auto"
      {...props}
    >
      <div className="block">
        <p className="text-gray-700 font-bold py-2">Following</p>
        <div className="flex justify-between my-1 border-t cursor-pointer hover:bg-blue-100">
          <p className="text-gray-600 text-sm">Finstrwe r</p>
          <p className="inline-block w-2 h-2 self-center bg-red-600 rounded-full"></p>
        </div>
        <div className="flex justify-between my-1 border-t cursor-pointer hover:bg-blue-100">
          <p className="text-gray-600 text-sm">Finstrwe</p>
          <p className="inline-block w-2 h-2 self-center bg-red-600 rounded-full"></p>
        </div>
        <div className="flex justify-between my-1 border-t cursor-pointer hover:bg-blue-100">
          <p className="text-gray-600 text-sm">Finstrwe</p>
          <p className="inline-block w-2 h-2 self-center bg-red-600 rounded-full"></p>
        </div>
      </div>
      <div className="flex justify-center">
        <DocumentIcon className="text-green-400 w-8" />
        {/* <p className="self-center">Pate</p> */}
      </div>
      <div className="flex justify-center">
        <DocumentIcon className="text-green-400 w-8" />
        {/* <p className="self-center">Pate</p> */}
      </div>
      <div className="flex justify-center">
        <BanIcon className="text-green-400 w-8" />
        {/* <p className="self-center">Pate</p> */}
      </div>
    </div>
  );
};

export default LSideBar;
