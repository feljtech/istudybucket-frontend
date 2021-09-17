import React from 'react';
import { LockClosedIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/solid'


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
     <h2 className="mt-6 text-center text-2xl font-bold text-blue-500">iStudyBucket.Go through the readme.md.</h2>
=======
    <div className="border p-5 max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-2xl font-bold text-blue-500">Sign in to your account</h2>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="mb-6">
            <label htmlFor="email-address" className="block mb-1">
              Email address
            </label>
            
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <div className="mt-6">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
           <div className="group relative w-full border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
           <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
              <span className="absolute z-10 right-1 inset-y-0 flex items-center pl-3">
              <EyeIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
              {/* <EyeOffIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" /> */}
            </span>
           </div>
            </div>
            
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
          <hr className="border"/>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Create your free account
            </a>
          </p>
        </div>
      </form>
    </div>
>>>>>>> c782fb1
  </div>
  );
}

export default App;
