import React from "react";
import { Tab } from '@headlessui/react'
import {Link} from "react-router-dom";
import { PhoneIcon, PencilIcon } from "@heroicons/react/outline";
import image from "../../assets/img/bulb.jpg";
import Post from "../../components/Post/Post";
import Button from "../../__sub__/Button";

const Profile = () => {
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
    <div>
      <div className="w-full relative">
        <div className="mb-2" >
           <p className="font-bold text-lg p-4">User Profile</p>
        </div>
          <div className="border-3 mx-10 border-gray-800 block sm:flex justify-evenly">
            <div className="flex relative ">
              <img
                src={image}
                alt=""
                className="w-40 h-40 rounded-full border border-green-600"
              />
              <div className="">
              <div className="self-center mx-3">
                <p className="block font-bold">NDI LIONEL</p>

                <div className="my-2">
                  <p className="text-sm text-gray-800 ">Bio</p>
                <p className="text-sm text-gray-500">
                  Purpose for the formation and lorem ipsum dorime catum ilusem
                  deli arder
                </p>
                </div>
                <div className="border border-gray-400 rounded-md bg-gray-100 hover:bg-gray-300 flex py-3 w-max cursor-pointer">
                  <PencilIcon className="w-5 text-gray-800 hover:text-gray-900"/>
                  <p className="self-center text-gray-700 hover:text-gray-800 px-2">Edit Profile</p>
                </div>
              </div>
            
              </div>
           
            </div>
            <div className="border green-handle overflow-auto h-40 w-max mt-5 sm:mt-0 p-3 pt-0 rounded-lg sm:self-center shadow-md">
                <p className="font-bold text-md text-center">Student Info</p>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">Username: </p>
                  <p className="text-gray-700 self-center">@lionel </p>
                </div>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">School: </p>
                  <p className="text-gray-700 self-center">Uniba </p>
                </div>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">Location: </p>
                  <p className="text-gray-700 self-center">Space </p>
                </div>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">Contact: </p>
                  <div className="flex">
                  <p className="text-gray-700 self-center">+237679561046 </p>
                  <PhoneIcon className="w-5 cursor-pointer text-gray-800 hover:text-gray-900"/>
                  </div>
                </div>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">Field of study: </p>
                  <p className="text-gray-700 self-center">CSE </p>
                </div>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">Facebook: </p>
                  <Link className="text-gray-700 self-center">null </Link>
                </div>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">Twitter: </p>
                  <Link className="text-gray-700 self-center italic">spyke_lionel </Link>
                </div>
                <div className="flex justify-between mr-3">
                  <p className="py-2 pr-4">Github: </p>
                  <Link className="text-gray-700 self-center italic">spykelion </Link>
                </div>
              </div>
          </div>
<div className="bg-gray-100 w-full h-1 my-2"/>
        <p className="text-center text-xl text-green-500">Edit profile</p>
      </div>
    </div>
  );
};


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Example() {
  let [categories] = React.useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      // run a callback that searches for recent items in a store
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })
  const [at, setAt] = React.useState('')
  const handleTabChange= (index) => {
    console.log('Changed selected tab to:', index)
    setAt(Object.keys(categories)?.at(index))
  }
  return (
    <div className="w-full max-w-md px-2 py-5 sm:px-0">
      <Tab.Group
       onChange={handleTabChange}
      >
        <div className="text-red-400 p-4">{at}</div>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-green-400'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


export default Profile;
