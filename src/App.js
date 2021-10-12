import React from "react";
// import Signup from "./components/signup/Signup";
import "./App.css";
import LSideBar from "./components/lsidebar/index";
import Nav from "./components/navbar/Navi";
import PostBase from "./components/Post/PostBase";
import RSideBar from "./components/rsidebar";

import image from "./assets/img/img1.jpg";
import Profile from "./pages/bucket/Profile";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Post from "./components/Post/Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BroadView from "./pages/bucket";

function App() {
  return (
    <Router>
      <Nav className="sticky z-50 top-0 bg-white shadow-sm" />
      <Switch>
        <Route exact path="/">
          <Page>
            
            <Main>
              <LSideBar className="hidden px-2 bg-white col-span-1 border-r-2 sticky left-0 top-0 text-center lg:flex flex-col h-screen" />
              <Feed />
              <RSideBar className="hidden green-handle overflow-y-auto m-3 p-3 rounded-md bg-white col-span-4 lg:col-span-3 border border-3 sticky right-0 top-0 text-center md:flex flex-col h-screen" />
            </Main>
          </Page>
        </Route>
        <Route path="/login">
          {/* check for user and login */}
          <Login />
        </Route>
        <Route path="/register">
          <Signup />
        </Route>
        <Route exact path="/profile/user/:username">
          <div>user Profile</div>
        </Route>
        <Route exact path="/timeline/user/:username">
          <div>all current user post. will be deprecated in v1.1 . will be moved to /profile/user/:username to get all user posts</div>
          Same for /timeline/bucket/:bucketname
        </Route>
         <Route exact path="/post/create">
          <div>create a post</div>
        </Route>
        <Route exact path="/post/:postId">
          <div>view a post by id</div>
        </Route>
        <Route exact path="/bucket">
          <div>your Buckets</div>
        </Route>
        <Route exact path="/bucket/create">
          <div>create a bucket</div>
        </Route>
        <Route exact path="/profile/bucket/:bucketname">
          <BroadView />
        </Route>
        <Route path="">
          <div>404. Page not found. return <Link to="/" className="text-green-400">Home</Link></div>
        </Route>
      </Switch>
    </Router>
  );
}

export const Feed = ({ ...props }) => {
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
    <div className="bg-white col-span-6 md:col-span-8 m-4" {...props}>
      <Post posts={posts} />
    </div>
  );
};

export const Main = ({ children, ...props }) => {
  return (
    <div
      className="md:grid lg:grid grid-cols-12 static top-20 bg-white "
      {...props}
    >
      {children}
    </div>
  );
};
export const Page = ({ children, ...props }) => {
  return (
    <div className="bg-white relative" {...props}>
      {children}
    </div>
  );
};

export default App;
