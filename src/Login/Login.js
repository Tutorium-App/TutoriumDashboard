import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    
    <div className=" ">
  <div className="text-center text-blue-600 mt-37 text-5xl font-semibold">Tutorium</div>
  <div className="flex items-center justify-center h-full m-2">
    <form className="max-w-sm mx-auto border p-4 rounded-xl w-100 bg-blue-600">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-4 text- font-medium text-white dark:text-white">Admin Dashboard</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
      </div>
      <div className="mb-4">
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
      </div>
  <Link to="/dashboard">
      <button
        type="Login"
        className="text-blue-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-100"
      >
        Login
      </button>
      </Link>
    </form>
  </div>
</div>

  
  );
}

export default Login;
