import React from "react";
// import Signup from "./components/signup/Signup";
import "./App.css";
import LSideBar from "./components/lsidebar";
import Nav from "./components/navbar/Navi";
import PostBase from "./components/Post/PostBase";
import RSideBar from "./components/rsidebar";

import image from './assets/img/img1.jpg'
import Profile from "./pages/bucket/Profile";
import img from './assets/img/img1.jpg'

function App() {
  return (
    <div className="bg-white">
    <Nav className="sticky z-50 top-0 bg-white"/>
    <div className="md:grid lg:grid grid-cols-12 static top-20 bg-white ">
      <LSideBar className="hidden px-2 bg-gray-200 col-span-1 border-r-2 sticky left-0 top-0 text-center lg:flex flex-col h-screen" />
      <main className="col-span-6 md:col-span-8 m-4 bg-white">
        <PostBase>
          <h1 className="font-semibold font-sans py-4 text-xl">Amazing Design</h1>
        <img src={image} className=""/>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure et voluptas officia distinctio consectetur assumenda neque unde esse sequi. Ut accusamus praesentium eveniet vel odio numquam voluptates, vero animi.</p>
        </PostBase>
        <Profile name="Senrt Opti" img={img} description="A useful bucket"/>
        <PostBase>
          <p className="font-semibold font-sans py-4">Amazing Design</p>
        <img src={image}/>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure et voluptas officia distinctio consectetur assumenda neque unde esse sequi. Ut accusamus praesentium eveniet vel odio numquam voluptates, vero animi.</p>
        </PostBase>
        <PostBase>
          <p className="font-semibold font-sans py-4">Amazing Design</p>
        <img src={image}/>
        <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure et voluptas officia distinctio consectetur assumenda neque unde esse sequi. Ut accusamus praesentium eveniet vel odio numquam voluptates, vero animi.</p>
        </PostBase>
      </main>
      {/* <LSideBar className="hidden col-span-3 border-r-2 sticky left-0 top-0 text-center lg:flex flex-col h-screen" /> */}
      <RSideBar className="hidden bg-gray-200 p-0 m-0 col-span-3 border border-3 sticky right-0 top-0 text-center lg:flex md:flex flex-col h-screen" />
    </div>
    </div>
  );
}

export default App;
