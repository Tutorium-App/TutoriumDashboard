import React from "react";
import { useState } from "react";
import { ChartComponent, Navbar } from "../../components";
const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="p-2 sm:ml-64">
      <Navbar />
      <div className="p-2">
        <nav className="relative bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-100">
          <div className="flex flex-wrap items-center max-w-screen-xl mx-auto">
            <div className="w-full md:block md:w-100" id="navbar-dropdown">
              <ul className="flex flex-col justify-between p-4 mt-4 font-medium border border-gray-100 shadow-md md:p-0 rounded-tl-2xl rounded-tr-2xl bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#home"
                    className="items-center justify-between block w-full px-2 py-2 text-2xl text-blue-600 no-underline rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    General
                  </a>
                </li>
                <li className="relative">
                  <button
                    id="dropdownNavbarLink"
                    className={`flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-black md:hover:bg-blue-800 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent border bg-blue-600`}
                    onClick={toggleDropdown}
                  >
                    Dropdown{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div
                      id="dropdownNavbar"
                      className="absolute right-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow top-full w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                        <li>
                          <a
                            href="#home"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#home"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#home"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#home"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mb-4 ">
          <div className="flex flex-col items-center justify-center p-4 mb-4 shadow-md rounded-xl bg-gray-50 dark:bg-gray-800">
            <span className="pb-3 text-lg font-medium text-blue-700 dark:text-gray-200">
              No. of Students
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              2500
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 mb-4 shadow-md rounded-xl bg-gray-50 dark:bg-gray-800 ">
            <span className="pb-3 text-lg font-medium text-blue-700 dark:text-gray-200">
              No. of Tutors
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              500
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 mb-4 shadow-md rounded-xl bg-gray-50 dark:bg-gray-800 ">
            <span className="pb-3 text-lg font-medium text-blue-700 dark:text-gray-200">
              No. of Services
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              3500
            </span>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mb-4 ">
          <div className="flex flex-col items-center justify-center p-4 mb-4 shadow-md rounded-xl bg-gray-50 dark:bg-gray-800 ">
            <span className="pb-3 text-lg font-medium text-blue-700 dark:text-gray-200">
              No. of Videos
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              500
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 mb-4 shadow-md rounded-xl bg-gray-50 dark:bg-gray-800 ">
            <span className="pb-3 text-lg font-medium text-blue-700 dark:text-gray-200">
              Amount Deposited
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              GHc2,550.00
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 mb-4 shadow-md rounded-xl bg-gray-50 dark:bg-gray-800 ">
            <span className="pb-3 text-lg font-medium text-blue-700">
              Amount Paid
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              GHc3,000.00
            </span>
          </div>
        </div>
        <div className="mb-4 lg:flex lg:items-center lg:justify-center">
          <ChartComponent />
        </div>
        <div className="mb-4 lg:flex lg:items-center lg:justify-end">
          <div className="flex flex-col items-center justify-center p-2 shadow-md rounded-xl bg-gray-50 dark:bg-gray-800 lg:ml-auto">
            <span className="text-lg font-medium text-blue-600 dark:text-gray-200">
              Profit Generated:{" "}
              <span className="text-gray-400">GHc250,000.00</span>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
