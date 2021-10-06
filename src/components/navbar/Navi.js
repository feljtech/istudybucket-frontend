/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  BookOpenIcon,
  InboxIcon,
  HomeIcon,
  BellIcon,
  UserCircleIcon,
  ChatIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import Searchbar from "./components/searchbar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({...props}) {
  return (
    <Popover className="relative bg-white w-full" {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-2">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">istudybucket</span>
              <BookOpenIcon className="text-green-400 w-12" />
            </a>
            <p className="text-gray-700 font-bold px-2 text-2xl cursor-pointer">
              istudybucket
            </p>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden md:flex lg:space-x-8 md:space-x-4"
          >
            <Popover className="relative">
              <Searchbar />
            </Popover>
            <HomeIcon className="text-green-400 w-8 cursor-pointer" />

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                    )}
                  >
                    <div className="relative m-0 top-3.5">
                      <BellIcon className="text-green-400 w-8" />
                      <p className="absolute top-1 right-2 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></p>
                    </div>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 md:w-80 lg:w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 md:-left-40 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-blue-50">
                        <div className="title text-gray-700 font-semibold px-4 py-2">
                          Notifications
                        </div>
                        <div className="relative grid gap-6 bg-white px-5 py-3 sm:gap-8 sm:p-4">
                          <a
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <ChatIcon
                              className="flex-shrink-0 h-6 w-6 text-blue-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4 relative bottom-2">
                              <p className="text-base font-medium text-yellow-400">
                                event
                              </p>
                              <p className="mt-1 text-sm text-gray-400">
                                description
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="relative grid gap-6 bg-white px-5 py-3 sm:gap-8 sm:p-4">
                          <a
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <ChatIcon
                              className="flex-shrink-0 h-6 w-6 text-blue-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4 relative bottom-2">
                              <p className="text-base font-medium text-yellow-400">
                                event
                              </p>
                              <p className="mt-1 text-sm text-gray-400">
                                description
                              </p>
                            </div>
                          </a>
                        </div>

                        <div className="px-5 py-5 bg-gray-200 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          <div className="flex space-x-3">
                            <a
                              href="#"
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <CheckIcon
                                className="flex-shrink-0 h-6 lg:w-6 md:w-4 text-blue-600"
                                aria-hidden="true"
                              />
                              <span className="ml-3">Mark all as read</span>
                            </a>
                            <a
                              href="#"
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <XIcon
                                className="flex-shrink-0 h-6 lg:w-6 md:w-4 text-red-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3 font-semibold">
                                Clear all
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                    )}
                  >
                    <div className="relative m-0 top-3.5">
                      <InboxIcon className="text-green-400 w-8" />
                      <p className="absolute top-1 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></p>
                    </div>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <BellIcon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                username
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                description
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="px-5 py-5 bg-green-200 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          <div className="flex space-x-3">
                            <a
                              href="#"
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <BellIcon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3">clear all</span>
                            </a>
                            <a
                              href="#"
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <BellIcon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3 font-semibold">
                                mark all as read
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          {/* user-section */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <UserCircleIcon className="text-green-400 w-8" />
            <a
              href="#"
              className="hidden ml-2 whitespace-nowrap px-4 py-2 border border-transparent rounded-md text-base font-medium text-green-300 hover:text-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </a>
          
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex justify-start items-center lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">istudybucket</span>
                    <BookOpenIcon className="text-green-400 w-12" />
                  </a>
                  <p className="text-gray-700 font-bold px-2 text-2xl md:block cursor-pointer">
                    istudybucket
                  </p>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Popover className="relative ">
                    <Searchbar />
                  </Popover>

                  <div className="flex flex-col gap-1 ">
                    <HomeIcon className="text-green-400 w-8 cursor-pointer" />
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-gray-900" : "text-gray-500",
                              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                            )}
                          >
                            <div className="relative m-0 top-3.5">
                              <BellIcon className="text-green-400 w-8" />
                              <p className="absolute top-1 right-2 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></p>
                            </div>
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 md:w-80 lg:w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 md:-left-40 lg:-translate-x-1/2">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-blue-50">
                                <div className="title text-gray-700 font-semibold px-4 py-2">
                                  Notifications
                                </div>
                                <div className="relative grid gap-6 bg-white px-5 py-3 sm:gap-8 sm:p-4">
                                  <a
                                    href="#"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <ChatIcon
                                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4 relative bottom-2">
                                      <p className="text-base font-medium text-yellow-400">
                                        event
                                      </p>
                                      <p className="mt-1 text-sm text-gray-400">
                                        description
                                      </p>
                                    </div>
                                  </a>
                                </div>
                                <div className="relative grid gap-6 bg-white px-5 py-3 sm:gap-8 sm:p-4">
                                  <a
                                    href="#"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <ChatIcon
                                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4 relative bottom-2">
                                      <p className="text-base font-medium text-yellow-400">
                                        event
                                      </p>
                                      <p className="mt-1 text-sm text-gray-400">
                                        description
                                      </p>
                                    </div>
                                  </a>
                                </div>

                                <div className="px-5 py-5 bg-gray-200 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                  <div className="flex space-x-3">
                                    <a
                                      href="#"
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <CheckIcon
                                        className="flex-shrink-0 h-6 lg:w-6 md:w-4 text-blue-600"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">
                                        Mark all as read
                                      </span>
                                    </a>
                                    <a
                                      href="#"
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <XIcon
                                        className="flex-shrink-0 h-6 lg:w-6 md:w-4 text-red-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3 font-semibold">
                                        Clear all
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-gray-900" : "text-gray-500",
                              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                            )}
                          >
                            <div className="relative m-0 top-3.5">
                              <InboxIcon className="text-green-400 w-8" />
                              <p className="absolute top-1 right-2 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></p>
                            </div>
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 md:w-80 lg:w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 md:-left-40 lg:-translate-x-1/2">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-blue-50">
                                <div className="title text-gray-700 font-semibold px-4 py-2">
                                  Notifications
                                </div>
                                <div className="relative grid gap-6 bg-white px-5 py-3 sm:gap-8 sm:p-4">
                                  <a
                                    href="#"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <ChatIcon
                                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4 relative bottom-2">
                                      <p className="text-base font-medium text-yellow-400">
                                        event
                                      </p>
                                      <p className="mt-1 text-sm text-gray-400">
                                        description
                                      </p>
                                    </div>
                                  </a>
                                </div>
                                <div className="relative grid gap-6 bg-white px-5 py-3 sm:gap-8 sm:p-4">
                                  <a
                                    href="#"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <ChatIcon
                                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4 relative bottom-2">
                                      <p className="text-base font-medium text-yellow-400">
                                        event
                                      </p>
                                      <p className="mt-1 text-sm text-gray-400">
                                        description
                                      </p>
                                    </div>
                                  </a>
                                </div>

                                <div className="px-5 py-5 bg-gray-200 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                  <div className="flex space-x-3">
                                    <a
                                      href="#"
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <CheckIcon
                                        className="flex-shrink-0 h-6 lg:w-6 md:w-4 text-blue-600"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">
                                        Mark all as read
                                      </span>
                                    </a>
                                    <a
                                      href="#"
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <XIcon
                                        className="flex-shrink-0 h-6 lg:w-6 md:w-4 text-red-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3 font-semibold">
                                        Clear all
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {/* user-section */}
                <div className="grid grid-cols-12  items-center justify-center">
                  <UserCircleIcon className="text-green-400 w-8 col-span-2 col-start-4" />
                  <a
                    href="#"
                    className="ml-2 col-span-6 col-start-auto flex whitespace-nowrap px-4 py-2 border border-transparent rounded-md text-base font-medium text-green-300 hover:text-green-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <p>Signout</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
