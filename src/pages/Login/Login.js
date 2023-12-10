import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Tutorium-Logo.jpeg'

function Login() {
  return (
    <div className="">
      <div className="flex items-center justify-center text-5xl font-semibold text-center text-blue-600 mt-37">
        {/* Tutorium */}
        <img src={logo} alt="logo" className="w-20 h-20" />
      </div>
      <div className="flex items-center justify-center h-full m-2">
        <form className="max-w-sm p-4 mx-auto bg-blue-600 border rounded-xl w-100">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-4 font-medium text-white text- dark:text-white"
            >
              Admin Dashboard
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <Link to="/home">
              <button
                type="Login"
                className="text-blue-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-100"
              >
                Login
              </button>
            </Link>
            <Link to="/home" className="text-white no-underline">forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
