import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../components";
import { Gallary } from "../../../assets/Gallary";

const SVDetail = ({Data}) => {

    var { id } = useParams();
    const newId = parseInt(id);
    const DB = Data.find((TDB) => TDB.id === newId);
  
    if (!DB) {
      return (
        <>
          <Navbar />
          <div className="flex items-center justify-center w-full h-full">
            Loading...
          </div>
        </>
      );
    }
  
    const handleBackBtn = () => {
      window.history.back();
    }

    return (
        <>
          <Navbar />
          <div className="flex flex-col w-full h-full px-6 md:pl-[300px] md:pt-10 space-y-8 mb-4">
            <div className="flex md:justify-end">
              <button className="grid h-10 p-1 text-xl m-2 text-white font-bold border-2 border-blue-500 rounded w-28 place-content-center bg-[#1c64f2]" onClick={handleBackBtn}>
                &lt; BACK
              </button>
            </div>
            <div className="flex flex-row items-center space-x-4">
              {Gallary.map((image, index) => (
                image.name === DB.imageUrl ? (
                  <img
                    src={image.link}
                    alt={image.name}
                    className="md:h-64 md:w-64"
                  />
                ) : null
              ))}
            </div>
            <div className="w-full h-full p-2 pb-10 rounded shadow-2xl">
              <div className="flex justify-center w-full">
                <div className="grid h-10 p-1 text-xl m-2 text-white font-bold border-2 border-blue-500 rounded w-full place-content-center bg-[#1a56db]">
                  {DB.tag} Details
                </div>
              </div>
              <div className="grid items-center grid-cols-1 gap-2 pt-4 pb-4 font-semibold md:pb-20 lg:mt-8 sm:mx-4 sm:grid-cols-2">  
                <div className="flex flex-col px-4 space-y-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Title - <span className="text-blue-700">{DB.title}</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Category - <span className="text-blue-700">{DB.category}</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Author - <span className="text-blue-700">{DB.author}</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Rating - <span className="text-blue-700">{DB.rating} <span className="ml-3"> ⭐⭐⭐⭐⭐</span></span>
                  </span>
                </div> <br className="sm:hidden" />
                <div className="flex flex-col px-4 space-y-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Booking Rating - <span className="text-blue-700">{DB.title}</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    School - <span className="text-blue-700">{DB.category}</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Year - <span className="text-blue-700">{DB.rating}</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Date Created - <span className="text-blue-700">12/02/2023</span>
                  </span>
                </div>
              </div>
              <div className="px-4 pb-2 text-gray-500 dark:text-gray-400 sm:mx-4">
                <span>Description: </span> <br /> 
                <span className="text-blue-700">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center justify-center h-10 p-1 m-2 font-semibold text-white bg-red-500 rounded w-36" onClick={handleBackBtn}>
                Delete {DB.tag}
              </button>
            </div>
          </div>
        </>
      );
}

export default SVDetail