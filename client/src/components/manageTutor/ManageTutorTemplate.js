import { Button } from "@material-tailwind/react";
import { useState } from "react";
import React from "react";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Navbar } from "..";
import { Link } from "react-router-dom";
import { Gallary } from "../../assets/Gallary";

const ManageTutorTemplate = ({ title, data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropDownItem, setDropDownItem] = useState("");       // state for the values of list items
  const [toggleCategory, setToggleCategory] = useState(false); // state for managing fullName and school
  const [activePage, setActivePage] = useState(1); // Change from currentPage to activePage
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setToggleCategory(!toggleCategory);
    setDropDownItem("");
  };

  // Filter cards based on the search query using fullName
  const filteredCards = data.filter((card) =>
    card.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter cards based on the search query using school
  const filteredCardsSch = data.filter((card) =>
    card.school.toLowerCase().includes(dropDownItem.toLowerCase())
  );

  // for various schools
  const handleSch1 = () => {
    setDropDownItem("UMaT");
  };
  const handleSch2 = () => {
    setDropDownItem("UMaT, SRID");
  };
  const handleSch3 = () => {
    setDropDownItem("UG, Legon");
  };
  const handleSch4 = () => {
    setDropDownItem("UCC");
  };
  const handleSch5 = () => {
    setDropDownItem("KNUST");
  };

  // when the search input field is clicked
  const handleSearchClick = () => {
    setToggleCategory(false);
  };

  // PAGINATION
  const numCardsPerPage = 6;
  const indexOfLastCard = activePage * numCardsPerPage;
  const indexOfFirstCard = indexOfLastCard - numCardsPerPage;
  let currentCards;

  // Switching display base on name or school
  if (toggleCategory) {
    currentCards = filteredCardsSch.slice(indexOfFirstCard, indexOfLastCard);
  } else {
    currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  }

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
              onClick={handleSearchClick}
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              SEARCH {title}
            </label>
          </div>
        </div>

        {title === "STUDENTS" ? (
          <>
            <div className="relative">
              <button
                id="dropdownNavbarLink"
                className={`flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-black md:hover:bg-blue-800 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent border bg-blue-600`}
                onClick={toggleDropdown}
              >
                Schools{" "}
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
                    <li onClick={handleSch1}>
                      <span className="block px-4 py-2 no-underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        UMaT
                      </span>
                    </li>
                    <li onClick={handleSch2}>
                      <span className="block px-4 py-2 no-underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        UMaT, SRID
                      </span>
                    </li>
                    <li onClick={handleSch3}>
                      <span className="block px-4 py-2 no-underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        UG, Legon
                      </span>
                    </li>
                    <li onClick={handleSch4}>
                      <span className="block px-4 py-2 no-underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        UCC
                      </span>
                    </li>
                    <li onClick={handleSch5}>
                      <span className="block px-4 py-2 no-underline cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        KNUST
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Button
              variant="text"
              className="bg-blue-500 lg:sm-8 p-3 w-[18em] text-white border flex items-center gap-2"
            >
              Verify New {title}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </>
        )}
      </section>

      {/* CARDS */}
      <div className="grid items-center grid-cols-1 gap-2 lg:ml-80 lg:mt-8 sm:mx-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentCards.map((card) => (
          <div
            key={card._id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            {/* ... (card JSX structure) */}
            <div className="flex flex-col items-center pt-4 pb-10">
              {Gallary.map((image) =>
                image.name === card.profilePhotoLink ? (
                  <img
                    className="w-20 h-20 mb-3 rounded-full shadow-lg"
                    src={
                      card.profilePhotoLink === image.name ? image.link : null
                    }
                    alt={image.name}
                    key={card._id}
                  />
                ) : null
              )}
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                <Link
                  to={`/manage${title.toLowerCase()}/${card._id}`}
                  className="text-black no-underline"
                >
                  {card.fullName}
                </Link>
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {card.role}
              </span>
              <span className="text-sm text-gray-800 dark:text-gray-400">
                {card.school} - {card.tag}
              </span>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="#mt"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 no-underline bg-white border rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Suspend
                </a>
                <Link
                  to={`/manage${title.toLowerCase()}/${card._id}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white no-underline bg-red-700 border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                >
                  Detail
                </Link>
              </div>
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

export default ManageTutorTemplate;
