import React from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import styles from "./style.module.css";

function Signup() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [isStudent, setIsStudent] = React.useState(true);
  return (
    (isStudent && (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        {/* <div className="user-type">
          <select
            name="usertype"
            id="usertype"
            onSelect={(e) => {
              setIsStudent(false);
            }}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div> */}
        <div className="border shadow rounded p-5 max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-bold text-blue-500">
              Create an account
            </h2>
            <p className="mt-2 text-center text-xl font-semibold text-yellow-500">
            Student
          </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-6">
                {/* Name */}
                <div className="mt-2">
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={styles.input}
                    placeholder="Enter full name"
                  />
                </div>
                {/* phone number */}
                <div className="mt-2">
                  <label htmlFor="phone-number" className="block mb-1">
                    Phone number
                  </label>

                  <input
                    id="phone-number"
                    name="phone"
                    type="text"
                    autoComplete="phone-number"
                    required
                    className={styles.input}
                    placeholder="Phone: without space"
                  />
                  <div className="flex items-center mb-2">
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="checkbox"
                      className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="whatsapp"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Got whatsapp?
                    </label>
                  </div>
                </div>
                {/* email */}
                <div className="mt-2">
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
                </div>
                {/* resident */}
                <div className="mt-2">
                  <label htmlFor="resident" className="block mb-1">
                    Resident
                  </label>

                  <input
                    id="resident"
                    name="resident"
                    type="text"
                    autoComplete="resident"
                    required
                    className={styles.input}
                    placeholder="Resident"
                  />
                </div>
                {/* school */}
                <div className="mt-2">
                  <label htmlFor="school" className="block mb-1">
                    School
                  </label>

                  <input
                    id="school"
                    name="school"
                    type="text"
                    autoComplete="school"
                    required
                    className={styles.input}
                    placeholder="Name of school"
                  />
                </div>
                {/* location of school */}
                <div className="mt-2">
                  <label htmlFor="location" className="block mb-1">
                    Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="location"
                    required
                    className={styles.input}
                    placeholder="Location of school"
                  />
                </div>
                {/* Date of birth */}
                <div className="mt-2">
                  <label htmlFor="dob" className="block mb-1">
                    Date of birth
                  </label>

                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="dob"
                    required
                    className={styles.input}
                    placeholder="date of birth"
                  />
                </div>
                {/* Field of study */}
                <div className="mt-2">
                  <label htmlFor="fos" className="block mb-1">
                    Field of study
                  </label>
                  <select name="fos" id="fos" className="rounded">
                    <option value="arto">Art: Ordinary Level</option>
                    <option value="arta">Art: Advanced Level</option>
                    <option value="scienceo">Science: Ordinary Level</option>
                    <option value="sciencea">Science: Advanced Level</option>
                    <option value="commercialo">
                      Commercial: Ordinary Level
                    </option>
                    <option value="commerciala">
                      Commercial: Advanced Level
                    </option>
                    <option value="technicalo">
                      Technical: Ordinary Level
                    </option>
                    <option value="technicala">
                      Technical: Advanced Level
                    </option>
                  </select>
                </div>
                {/* subject offering: depends on field of study above. hint: send get req */}
                <div className="mt-2">
                  <label htmlFor="fos" className="block mb-1">
                    Subjects offering
                  </label>
                  <select multiple name="fos" id="fos" className="rounded">
                    <option value="arto">Art: Ordinary Level</option>
                    <option value="arta">Art: Advanced Level</option>
                    <option value="scienceo">Science: Ordinary Level</option>
                    <option value="sciencea">Science: Advanced Level</option>
                    <option value="commercialo">
                      Commercial: Ordinary Level
                    </option>
                    <option value="commerciala">
                      Commercial: Advanced Level
                    </option>
                    <option value="technicalo">
                      Technical: Ordinary Level
                    </option>
                    <option value="technicala">
                      Technical: Advanced Level
                    </option>
                  </select>
                </div>
                <div className="mt-2">
                  {/* needs updates for drag and drop */}
                  <label htmlFor="profile-pic" className="block mt-1">
                    Profile picture
                  </label>
                  <input type="file" className="" placeholder="profile pic" />
                </div>

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
                {/* hobby */}
                <div className="flex items-center mt-3">
                  <label htmlFor="hobby" className="block mt-1 mr-2">
                    Hobby
                  </label>
                  <div className="flex items-center">
                    <div className="flex items-center self-center mr-2">
                      <input
                        id="football"
                        name="football"
                        type="checkbox"
                        className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="football"
                        className="ml-1 block text-sm text-gray-900"
                      >
                        Football
                      </label>
                    </div>
                    <div className="flex items-center self-center mr-2">
                      <input
                        id="handball"
                        name="handball"
                        type="checkbox"
                        className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="handball"
                        className="ml-1 block text-sm text-gray-900"
                      >
                        Handball
                      </label>
                    </div>
                    <div className="flex items-center self-center mr-2">
                      <input
                        id="singing"
                        name="singing"
                        type="checkbox"
                        className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="singing"
                        className="ml-1 block text-sm text-gray-900"
                      >
                        Singing
                      </label>
                    </div>
                    <div className="flex items-center self-center">
                      <input
                        id="dancing"
                        name="dancing"
                        type="checkbox"
                        className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="dancing"
                        className="ml-1 block text-sm text-gray-900"
                      >
                        Dancing
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" group font-semibold uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
              <hr className="border" />
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )) || (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="border shadow rounded p-5 max-w-md w-full space-y-8">
        <div className="">
          <h2 className="mt-6 text-center text-2xl font-bold text-blue-500">
            Create an account
          </h2>
          <p className="mt-2 text-center text-xl font-semibold text-yellow-500">
            Instructor
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-6">
              {/* Name */}
              <div className="mt-2">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={styles.input}
                  placeholder="Enter full name"
                />
              </div>
              {/* Matriculation number */}
              <div className="mt-2">
                <label htmlFor="name" className="block mb-1">
                Matriculation number
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={styles.input}
                  placeholder="matriculation number"
                />
              </div>
              {/* phone number */}
              <div className="mt-2">
                <label htmlFor="phone-number" className="block mb-1">
                  Phone number
                </label>

                <input
                  id="phone-number"
                  name="phone"
                  type="text"
                  autoComplete="phone-number"
                  required
                  className={styles.input}
                  placeholder="Phone: without space"
                />
                <div className="flex items-center mb-2">
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="whatsapp"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Got whatsapp?
                  </label>
                </div>
              </div>
              {/* email */}
              <div className="mt-2">
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
              </div>
              {/* resident */}
              <div className="mt-2">
                <label htmlFor="resident" className="block mb-1">
                  Resident
                </label>

                <input
                  id="resident"
                  name="resident"
                  type="text"
                  autoComplete="resident"
                  required
                  className={styles.input}
                  placeholder="Resident"
                />
              </div>
              {/* school */}
              <div className="mt-2">
                <label htmlFor="school" className="block mb-1">
                  School
                </label>

                <input
                  id="school"
                  name="school"
                  type="text"
                  autoComplete="school"
                  required
                  className={styles.input}
                  placeholder="School which the instructor teaches"
                />
              </div>
              {/* Date of birth. use datepicker component. here */}
              <div className="mt-2">
                <label htmlFor="dob" className="block mb-1">
                  Date of birth
                </label>

                <input
                  id="dob"
                  name="dob"
                  type="date"
                  autoComplete="dob"
                  required
                  className={styles.input}
                  placeholder="date of birth"
                />
              </div>
              {/* subject offering: a dropdown to all subjects found in db. hint: send get req */}
              <div className="mt-2">
                <label htmlFor="fos" className="block mb-1">
                  Subjects teaching
                </label>
                <select multiple name="fos" id="fos" className="rounded">
                  <option value="arto">subjec1</option>
                  <option value="arta">subjec2</option>
                  <option value="scienceo">subjec3</option>
                  <option value="sciencea">subjec4</option>
                  
                </select>
              </div>
              <div className="mt-2">
                {/* needs updates for drag and drop */}
                <label htmlFor="profile-pic" className="block mt-1">
                  Profile picture
                </label>
                <input type="file" className="" placeholder="profile pic" />
              </div>

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
              {/* hobby */}
              <div className="flex items-center mt-3">
                <label htmlFor="hobby" className="block mt-1 mr-2">
                  Hobby
                </label>
                <div className="flex items-center">
                  <div className="flex items-center self-center mr-2">
                    <input
                      id="football"
                      name="football"
                      type="checkbox"
                      className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="football"
                      className="ml-1 block text-sm text-gray-900"
                    >
                      Football
                    </label>
                  </div>
                  <div className="flex items-center self-center mr-2">
                    <input
                      id="handball"
                      name="handball"
                      type="checkbox"
                      className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="handball"
                      className="ml-1 block text-sm text-gray-900"
                    >
                      Handball
                    </label>
                  </div>
                  <div className="flex items-center self-center mr-2">
                    <input
                      id="singing"
                      name="singing"
                      type="checkbox"
                      className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="singing"
                      className="ml-1 block text-sm text-gray-900"
                    >
                      Singing
                    </label>
                  </div>
                  <div className="flex items-center self-center">
                    <input
                      id="dancing"
                      name="dancing"
                      type="checkbox"
                      className="h-4 w-4 text-yellow-500 focus:ring-blue-50 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="dancing"
                      className="ml-1 block text-sm text-gray-900"
                    >
                      Dancing
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" group font-semibold uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
            <hr className="border" />
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    )
  );
}

export default Signup;
