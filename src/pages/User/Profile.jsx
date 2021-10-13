import React from "react";
import { Tab } from '@headlessui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";
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
  const location = useLocation();
  const { path, url } = useRouteMatch();
const {param} = useParams()
  return (
    <div>
      <div className="w-full relative">
        <div className="w-full h-56 bg-green-100" />
        <div className="absolute bg-opacity-10 top-5">
          <div className="sticky top-10 border-3 border-gray-800 z-20">
            <div className="flex relative mx-16 ">
              <img
                src={image}
                alt=""
                className="w-40 h-40 rounded-full border border-green-600"
              />
              <div className="self-center mx-3">
                <p className="block font-bold">The Light bulb for {param}</p>
                <p>
                  Purpose for the formation and lorem ipsum dorime catum ilusem
                  deli arder
                </p>
                <div className="py-2">
                  <Button name="Request to join" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Example />
        <div className="mx-10 py-5">
          <div className="my-1">
            <div className="bg-blue-50 flex">
              <Link
                to={`${url}/posts`}
                className="text-gray-700 font-medium mx-2 border-b-2 border-green-600"
              >
                Posts <span className="text-gray-500 text-xs px-2">24</span>
              </Link>
              <Link
                to={`${url}/followers`}
                className="text-gray-700 font-bold mx-2"
              >
                Followers
                <span className="text-gray-500 text-xs px-2">24</span>
              </Link>
              <Link
                to={`${url}/following`}
                className="text-gray-700 font-bold mx-2"
              >
                Following
                <span className="text-gray-500 text-xs px-2">24</span>
              </Link>
              <Link
                to={`${path}/post/e23`}
                className="text-gray-700 font-bold mx-2"
              >
                postid
                <span className="text-gray-500 text-xs px-2">24</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={`${path}/posts`}>
          <div className="m-5 flex">
           <div className="p-2">
           <Post posts={posts} />
           </div>
           <div className="hidden green-handle h-screen overflow-y-auto w-1/2 md:block p-2 border border-gray-300">Some side nav</div>
          </div>
        </Route>
        <Route exact path={`${path}/followers`}>
          <h3>All users followers.</h3>
        </Route>
        <Route exact path={`${path}/following`}>
          <h3>All user followings.</h3>
        </Route>
        <Route path={`${path}/post/:postId`}>
          <PostID />
        </Route>
      </Switch>
    </div>
  );
};

const PostID = () =>{
  let { postId } = useParams();
  return (
    <p>Some post {postId}</p>
  )
}


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
    setAt(Object.keys(categories).at(index))
  }
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
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
