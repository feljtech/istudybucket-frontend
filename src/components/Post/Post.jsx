import React from "react";
import PostBase from "./PostBase";

const Post = ({ posts, ...props }) => {
  return posts.map((post, index) => {
  return  (<PostBase {...props} key={index}>
      <PostBox title={post.title} body={post.body} image={post.imgUrl}/>
    </PostBase>);
  });
};

export const PostBox = ({ title, body, image, ...props }) => {
  return (
    <div className="my-2" {...props}>
      <h1 className="font-semibold text-gray-700 font-sans py-4 text-xl">
        {title}
      </h1>
      <img src={image} className="hidden" />
      <p className="py-4 text-gray-600">{body}</p>
    </div>
  );
};

export default Post;
