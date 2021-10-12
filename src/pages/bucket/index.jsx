import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import image from "../../assets/img/bulb.jpg";
import Post from "../../components/Post/Post";
import Button from "../../__sub__/Button";


const BroadView = () => {
    const posts = [
        {
          title: "Generous Knowlegde",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            " Omnis iure et voluptas officia distinctio consectetur assumenda neque unde esse sequi." +
            " Ut accusamus praesentium eveniet vel odio numquam voluptates, vero animi.",
        },
        {
          title: "Generous Knowlegde",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            " Omnis iure et voluptas officia distinctio consectetur assumenda neque unde esse sequi." +
            " Ut accusamus praesentium eveniet vel odio numquam voluptates, vero animi.",
        },
        {
          title: "Generous Knowlegde",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
            " Omnis iure et voluptas officia distinctio consectetur assumenda neque unde esse sequi." +
            " Ut accusamus praesentium eveniet vel odio numquam voluptates, vero animi.",
        },
      ];
  return (
    <Router>
        <div className="w-full relative">
      <div className="w-full h-56 bg-green-200" />
      <div className="absolute bg-opacity-10 top-5">
        <div className="flex relative mx-16">
          <img
            src={image}
            alt=""
            className="w-40 h-40 rounded-xl border border-green-600"
          />
          <div className=" mx-3">
            <p className="block font-bold">The Light bulb</p>
            <p>
              Purpose for the formation and lorem ipsum dorime catum ilusem deli
              arder
            </p>
            <div className="py-2">
              <Button name="Request to join" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-10 py-5">
        <div className="my-1">
          <div className="bg-blue-50 flex">
            <p className="text-gray-700 font-bold mx-2 border-b-2 border-green-600">
            Posts
            </p>
            <p className="text-gray-700 font-bold mx-2">Members</p>
          </div>
          <div className="container">
             <Post posts={posts}/>
          </div>
          </div>
      </div>
    </div>
    <Switch>
        <Route path="/members">
          {/* check for user and login */}
          members
        </Route>
        <Route path="/">
          instead put post here post.
        </Route>        
      </Switch>
   
    </Router>);
};

export default BroadView;
