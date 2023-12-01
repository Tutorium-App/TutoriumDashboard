import React from 'react'
import Home from './Home/Home'
import ManageTutors from './ManageTutors/ManageTutors'
import { useState } from 'react'



const Dashboard = () => {
  const [currentView, setCurrentView] = useState('home'); 
  const handleSidebarItemClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
 
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-blue-600 dark:bg-gray-800">
      <a href="#" className="flex items-center ps-2.5 mb-5 no-underline">
         <img src="" alt="Logo" />
         <span className="self-center text-xl font-semibold whitespace-nowrap text-white ">Tutorium</span>
      </a>
      <ul className="space-y-7 pl-0 font-medium">
      <li>
    <a
      href="#"
      className={`flex items-center justify-center  p-2 border no-underline rounded-lg dark:text-white ${
        currentView === 'home' ? 'text-blue-700 border bg-white' : 'text-white hover:bg-blue-700 dark:hover:bg-gray-700 group'
      }`}
      onClick={() => handleSidebarItemClick('home')}
    >
      <span className="text-center">HOME</span>
    </a>
  </li>
  <li>
    <a
      href="#"
      className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
        currentView === 'manageTutors' ? 'text-blue-700 border bg-white' : 'text-white hover:bg-blue-700 dark:hover:bg-gray-700 group'
      }`}
      onClick={() => handleSidebarItemClick('manageTutors')}
    >
      <span className="flex ms-3 whitespace-nowrap">MANAGE TUTORS</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center justify-center p-2 text-white border no-underline rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group">
      <span className="flex ms-3 whitespace-nowrap">MANAGE STUDENTS</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center justify-center p-2 text-white border no-underline rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group">
      <span className="flex ms-3 whitespace-nowrap">MANAGE SERVICES</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center justify-center p-2 text-white border no-underline rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group">
      <span className="flex ms-3 whitespace-nowrap">MANAGE VIDEOS</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center justify-center p-2 text-white border no-underline rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group">
      <span className="flex ms-3 whitespace-nowrap">NOTIFICATIONS</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center justify-center p-2 text-white border no-underline rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group">
      <span className="flex ms-3 whitespace-nowrap">MANAGE POSTS</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center justify-center p-2 text-white border  no-underline rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group">
      <span className="flex ms-3 whitespace-nowrap">ADMIN SETTINGS</span>
    </a>
  </li>
  <li>
    <a href="#" className="flex items-center justify-center p-2 text-white border no-underline rounded-lg dark:text-white hover:bg-blue-700 dark:hover:bg-gray-700 group">
      <span className="flex ms-3 whitespace-nowrap">LOGOUT</span>
    </a>
  </li>
</ul>

   </div>
</aside>
<div>
   {/* Content based on current view */}
   {currentView === 'home' && <Home />}
          {currentView === 'manageTutors' && <ManageTutors />}
{/* <Home/>
<ManageTutors/> */}
</div>

    </div>
  )
}

export default Dashboard