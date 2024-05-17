import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Tutorium-Logo.jpeg";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const [currentView, setCurrentView] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (window.location.pathname === "/home") {
      setCurrentView("home");
    } else if (window.location.pathname === "/manageTutors") {
      setCurrentView("manageTutors");
    } else if (window.location.pathname === "/manageStudents") {
      setCurrentView("manageStudents");
    } else if (window.location.pathname === "/managePosts") {
      setCurrentView("managePosts");
    } else if (window.location.pathname === "/manageServices") {
      setCurrentView("manageServices");
    } else if (window.location.pathname === "/manageVideos") {
      setCurrentView("manageVideos");
    } else if (window.location.pathname === "/notifications") {
      setCurrentView("notifications");
    } else if (window.location.pathname === "/adminSettings") {
      setCurrentView("adminSettings");
    }
  }, []);

  return (
    <div>
      <div className="flex justify-end">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex p-2 mt-2 mr-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-54 h-screen transition-transform ${
          isSidebarOpen
            ? "-translate-x-full   sm:translate-x-0"
            : "translate-x-0"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-blue-600 dark:bg-gray-800">
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center ps-2.5 mb-4">
              <img src={logo} alt="Logo" className="rounded h-14 w-14" />
            </Link>
          </div>
          <ul className="pl-0 font-medium space-y-7">
            <li>
              <Link
                to="/home"
                className={`flex items-center justify-center  p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "home"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="text-center">HOME</span>
              </Link>
            </li>
            <li>
              <Link
                to="/manageTutors"
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "manageTutors"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="flex ms-3 whitespace-nowrap">
                  MANAGE TUTORS
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/manageStudents"
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "manageStudents"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="flex ms-3 whitespace-nowrap">
                  MANAGE STUDENTS
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/manageServices"
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "manageServices"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="flex ms-3 whitespace-nowrap">
                  MANAGE SERVICES
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/manageVideos"
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "manageVideos"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="flex ms-3 whitespace-nowrap">
                  MANAGE VIDEOS
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "notifications"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="flex ms-3 whitespace-nowrap">
                  NOTIFICATIONS
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/managePosts"
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "managePosts"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="flex ms-3 whitespace-nowrap">
                  MANAGE POSTS
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/adminSettings"
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white ${
                  currentView === "adminSettings"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
              >
                <span className="flex ms-3 whitespace-nowrap">
                  ADMIN SETTINGS
                </span>
              </Link>
            </li>
            <li>
              <button
                className={`flex items-center justify-center p-2 border no-underline rounded-lg dark:text-white w-full ${
                  currentView === "logout"
                    ? "text-blue-700 border bg-white"
                    : "text-white hover:bg-blue-700 dark:hover:bg-gray-700 group"
                }`}
                onClick={handleClick}
              >
                <span className="flex ms-3 whitespace-nowrap">LOGOUT</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
