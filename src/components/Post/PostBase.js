import React, { useContext } from 'react'
// import {} from '@heroicons/react'
// import { PostContext, PostContextProvider } from '../api/context/PostContext'

const PostBase = ({children, ...props}) => {
// const {post , setPost} = useContext(PostContext);

    return (
        <div className="rounded w-11/12 border-gray-400 border-2 border-t-0 border-r-0 px-5 py-2" {...props}>
            <div className="flex justify-between">
               <div className="block">
               <p className="mr-2 rounded-full border">Avatar + {"post"}</p>
                <p className="mr-3 font-bold">iUser.name</p>
               </div>
                <p className="text-gray-400 align-left italic self-center">lecturer</p>
            </div>
            <div className="border shadow-sm">
                 {children}
            </div>
           
            <div className="flex">
                <p className="mr-2">likes</p>
                <p className="mr-3 font-bold">comment</p>
                <p className="text-gray-400 ">timestamp</p>
            </div>
        </div>            

    )
}

export default PostBase;