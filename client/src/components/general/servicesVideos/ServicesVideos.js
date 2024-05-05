import { Button } from "@material-tailwind/react";
import { useState } from "react";
import React from "react";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Navbar } from "../../../components";
import { Link } from "react-router-dom";
import { Gallary } from "../../../assets/Gallary";

const ServicesVideos = ({ title, data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1); // Change from currentPage to activePage
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Filter cards based on the search query
  const filteredCards = data.filter((card) =>
    card.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // PAGINATION
  const numCardsPerPage = 6;
  const indexOfLastCard = activePage * numCardsPerPage;
  const indexOfFirstCard = indexOfLastCard - numCardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / numCardsPerPage);

  const prevPage = () => {
    if (activePage > 1) {
      setActivePage((prevPage) => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (activePage < totalPages) {
      setActivePage((prevPage) => prevPage + 1);
    }
  };

  return (
    <section className="px-4">
      <Navbar />
      <section className="flex items-center justify-between mb-4 lg:ml-80 lg:mt-8">
        <div className="lg:w-[40em] mr-4">
          <div className="relative w-full min-w-[200px] h-14">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              SEARCH FOR {title}
            </label>
          </div>
        </div>

        <div className="relative">
          <button
            id="dropdownNavbarLink"
            className={`flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-black md:hover:bg-blue-800 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent border bg-blue-600`}
            onClick={toggleDropdown}
          >
            General{" "}
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
        </div>
      </section>

      {/* CARDS */}
      <div className="grid items-center grid-cols-1 gap-4 lg:ml-80 lg:mt-8 sm:mx-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentCards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            {/* ... (card JSX structure) */}
            <div>
              <Link
                to={`/manage${title}/${card.id}`}
                className="flex flex-col pb-3 font-semibold no-underline"
              >
                {Gallary.map((image, index) =>
                  image.name === card.imageUrl ? (
                    <img
                      className="w-full mb-3 h-60"
                      src={card.imageUrl === image.name ? image.link : null}
                      alt={image.name}
                      key={index}
                    />
                  ) : null
                )}
                <div className="flex flex-col px-4 space-y-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Title - {card.title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Category - {card.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Author - {card.author}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Rating - {card.rating}{" "}
                    <span className="ml-3"> ⭐⭐⭐⭐⭐</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="lg:ml-[40em] lg:mt-8 my-8 flex flex-col sm:flex-row items-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2 mb-2 rounded-full sm:mb-0"
          onClick={prevPage}
          disabled={activePage === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="w-4 h-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <IconButton
              key={index + 1}
              color={activePage === index + 1 ? "blue" : "white"}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={nextPage}
          disabled={activePage === totalPages}
        >
          Next <ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default ServicesVideos;
