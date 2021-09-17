import React from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { IconContext } from "react-icons/lib";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import styles from "./style.module.css";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="border shadow rounded p-5 max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-bold text-blue-500">
              Sign in to your account
            </h2>
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
                  className={styles.input}
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
                      type={!showPassword && "password"}
                      autoComplete="current-password"
                      required
                      className={styles.input}
                      placeholder="Password"
                    />
                    <span className="absolute z-10 right-1 inset-y-0 flex items-center pl-3">
                      {showPassword && (
                        <EyeIcon
                          onClick={(e) => setShowPassword(!showPassword)}
                          className={styles.eyeIcon}
                          aria-hidden="true"
                        />
                      )}
                      {!showPassword && (
                        <EyeOffIcon
                          onClick={(e) => setShowPassword(!showPassword)}
                          className={styles.eyeIcon}
                          aria-hidden="true"
                        />
                      )}
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
                  className="h-4 w-4 text-blue-500 focus:ring-blue-50 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group uppercase font-semibold relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
              <hr className="border" />
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Create your free account
                </a>
              </p>
            </div>
            <div className="">
              <p className={" text-center mb-2"}>OR continue with</p>
              <div className="flex justify-center mt-2">
                <div className="border py-2 px-6 mx-3 cursor-pointer hover:bg-gray-300 rounded-2xl">
                  <FaFacebook />
                </div>
                <div className="border py-2 px-6 mx-3 cursor-pointer hover:bg-gray-300 rounded-2xl">
                <FaGithub />
                </div>
                <div className="border py-2 px-6 mx-3 cursor-pointer hover:bg-gray-300 rounded-2xl">
                <FaGoogle />
                </div>
  
              </div>
            </div>
          </form>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Login;
