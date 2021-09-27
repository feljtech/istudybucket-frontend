import React from 'react'
import {
    ChatIcon,
    HeartIcon,
    ShareIcon,
    ClockIcon,DocumentIcon, BanIcon
  } from "@heroicons/react/outline";

const LSideBar = ({...props}) => {
    return (
        <div className="border fixed left-0 flex flex-col px-5 h-full w-1/4" {...props}>
        <div className="flex justify-center">
            <DocumentIcon className="text-green-400 w-12" /> 
                <p className="self-center">Pate</p>
            </div>
            <div className="flex justify-center">
            <DocumentIcon className="text-green-400 w-12" /> 
                <p className="self-center">Pate</p>
            </div>
            <div className="flex justify-center">
            <BanIcon className="text-green-400 w-12" /> 
                <p className="self-center">Pate</p>
            </div>
        </div>
    )
}

export default LSideBar;
