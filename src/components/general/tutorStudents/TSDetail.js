import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../../components";

const TSDetail = ({Data}) => {

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
          <div className="flex flex-col w-full h-full px-6 md:pl-[300px] md:pt-10 space-y-12">
            <button className="grid h-10 p-1 text-xl m-2 text-white font-bold border-2 border-blue-500 rounded w-28 place-content-center bg-[#1c64f2]" onClick={handleBackBtn}>
              &lt; BACK
            </button>
            <div className="flex flex-row items-center space-x-4">
              <img
                src={DB.imageUrl}
                alt={DB.name}
                className="w-32 h-32 p-1 border-gray-500 bg-gray-100 rounded-full border-[1px]"
              />
              <div className="flex flex-col -space-y-1">
                <h1 className="text-xl">{DB.name}</h1>
                <p className="">{DB.role}</p>
                <p className="">{DB.school}</p>
              </div>
            </div>
            <div className="w-full h-full p-2 pb-20 mb-20 rounded shadow-2xl">
              <div className="flex justify-center w-full">
                <div className="grid h-10 p-1 text-xl m-2 text-white font-bold border-2 border-blue-500 rounded w-full place-content-center bg-[#1a56db]">
                  {DB.tag}'s Details
                </div>
              </div>
              <div className="grid items-center grid-cols-1 gap-2 pt-10 pb-5 md:pb-20 lg:mt-8 sm:mx-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-row justify-around w-full mb-10 md:flex-col">
                  <div>
                    <h3>Name</h3>
                    <p>{DB.name}</p>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>Tutor@mail.com</p>
                  </div>
                </div>
                <div className="flex flex-row justify-around w-full mb-10 md:flex-col">
                  <div>
                    <h3>Gender</h3>
                    <p>S/he</p>
                  </div>
                  <div>
                    <h3>Experience</h3>
                    <p>5 years</p>
                  </div>
                </div>
                <div className="flex flex-row justify-around w-full mb-10 md:flex-col">
                  <div>
                    <h3>Country</h3>
                    <p>Ghana</p>
                  </div>
                  <div>
                    <h3>Language</h3>
                    <p>English</p>
                  </div>
                </div>
                <div className="flex flex-row justify-around w-full mb-10 md:flex-col">
                  <div>
                    <h3>Gender</h3>
                    <p>S/he</p>
                  </div>
                  <div>
                    <h3>Experience</h3>
                    <p>5 years</p>
                  </div>
                </div>
                <div className="flex flex-row justify-around w-full mb-10 md:flex-col">
                  <div>
                    <h3>Country</h3>
                    <p>Ghana</p>
                  </div>
                  <div>
                    <h3>Language</h3>
                    <p>English</p>
                  </div>
                </div>
                <div className="flex flex-row justify-around w-full mb-10 md:flex-col">
                  <div>
                    <h3>School</h3>
                    <p>{DB.school}</p>
                  </div>
                  <div>
                    <h3>City</h3>
                    <p>Takoradi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default TSDetail