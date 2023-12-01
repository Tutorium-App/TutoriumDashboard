import React from 'react';
import ChartComponent from '../ChartComponent'
import { useState } from 'react';
const Home = ()=>{
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
    return(
        <div className="p-2 sm:ml-64">
    


   <div className="p-2">
   <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-100 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto">
        <div className=" w-full md:block md:w-100" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 shadow-md rounded-tl-2xl rounded-tr-2xl bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-between">
            <li>
              <a
                href="#"
                className="block items-center justify-between w-full py-2 px-2 text-2xl text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent no-underline"
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
                Dropdown{' '}
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
                  className="absolute top-full right-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
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
  <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md mb-4 p-4">
    <span className="text-lg font-medium text-blue-700 dark:text-gray-200 pb-3">
      No. of Students
    </span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white">
      2500
    </span>
  </div>
  <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md mb-4 p-4 ">
    <span className="text-lg font-medium text-blue-700 dark:text-gray-200 pb-3">
      No. of Tutors
    </span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white">
      500
    </span>
  </div>
  <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md mb-4 p-4  ">
    <span className="text-lg font-medium text-blue-700 dark:text-gray-200 pb-3">
      No. of Services
    </span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white">
      3500
    </span>
  </div>
</div>

<div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mb-4 ">
  <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md mb-4 p-4 ">
    <span className="text-lg font-medium text-blue-700 dark:text-gray-200 pb-3">
      No. of Videos
    </span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white">
      500
    </span>
  </div>
  <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md mb-4  p-4 ">
    <span className="text-lg font-medium text-blue-700 dark:text-gray-200 pb-3">
      Amount Deposited
    </span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white">
      GHc2,550.00
    </span>
  </div>
  <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md mb-4 p-4  ">
    <span className="text-lg font-medium text-blue-700 pb-3">
      Amount Paid
    </span>
    <span className="text-3xl font-bold text-gray-900 dark:text-white">
      GHc3,000.00
    </span>
  </div>
</div>
<div className="lg:flex lg:items-center lg:justify-center mb-4">
  <ChartComponent/>
  </div>
  <div className="lg:flex lg:items-center lg:justify-end mb-4">
  <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md p-2 lg:ml-auto">
    <span className="text-lg font-medium text-blue-600 dark:text-gray-200">
      Profit Generated:{" "}
      <span className="text-gray-400">GHc250,000.00</span>{" "}
    </span>
  </div>
</div>


      

   </div> 
      
   </div>


    )

}

export default Home;