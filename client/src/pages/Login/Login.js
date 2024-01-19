import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Tutorium-Logo.jpeg";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="">
      <div className="flex items-center justify-center text-5xl font-semibold text-center text-blue-600 mt-37">
        {/* Tutorium */}
        <img src={logo} alt="logo" className="w-20 h-20" />
      </div>
      <div className="flex items-center justify-center h-full m-2">
        <form
          className="max-w-sm p-4 mx-auto bg-blue-600 border rounded-xl w-100"
          onSubmit={handleSubmitLogin}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-4 font-medium text-white text- dark:text-white"
            >
              {error ? (
                <div className="inline p-2 text-white bg-red-500 rounded">
                  {error}
                </div>
              ) : (
                <>Admin Dashboard</>
              )}
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <button
              type="submit"
              disabled={isLoading}
              className="text-blue-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <Link
              to="/register"
              className="text-blue-600 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline"
            >
              Add New Admin
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
