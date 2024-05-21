import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Gallary } from "../../assets/Gallary";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Navbar } from "..";

const ManageTutorTemplateDetail = ({ Data, title }) => {
  var { id } = useParams();
  const DB = Data.find((TDB) => TDB._id === id);
  const { user } = useAuthContext();
  const [modal, setModal] = useState(false);

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
  };

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`/api/${title.toLowerCase()}/` + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      handleBackBtn();
      setModal(false);
    }
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handleModalOpen = () => {
    setModal(true);
  };

  return (
    <>
      <Navbar />
      {modal ? (
        <div className="absolute z-50 grid w-full h-full place-content-center bg-[rgba(0,0,0,0.9)]">
          <div className="p-10 text-white bg-[rgba(0,0,0,0.9)] rounded-lg">
            <h2 className="text-center underline">Confirm Option</h2>
            <p className="text-center">
              Do you want to Delete "{DB.fullName}" ?
            </p>
            <div className="flex justify-between">
              <button
                className="flex items-center justify-center w-20 h-10 p-1 m-2 font-semibold text-white bg-red-500 rounded"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="flex items-center justify-center w-20 h-10 p-1 m-2 font-semibold text-black bg-white rounded"
                onClick={handleModalClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex flex-col w-full h-full px-6 md:pl-[300px] md:pt-10 space-y-12 relative">
        <div className="flex justify-between">
          <button
            className="grid h-10 p-1 text-xl m-2 text-white font-bold border-2 border-blue-500 rounded w-28 place-content-center bg-[#1c64f2]"
            onClick={handleBackBtn}
          >
            &lt; BACK
          </button>
          <div className="flex justify-end">
            <button
              className="flex items-center justify-center h-10 p-1 m-2 font-semibold text-white bg-red-500 rounded w-36"
              onClick={handleModalOpen}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          {Gallary.map((image) =>
            image.name === DB.profilePhotoLink ? (
              <img
                className="w-32 h-32 p-1 border-gray-500 bg-gray-100 rounded-full border-[1px]"
                src={DB.profilePhotoLink === image.name ? image.link : null}
                alt={image.name}
                key={DB._id}
              />
            ) : null
          )}
          <div className="flex flex-col -space-y-1">
            <h1 className="text-xl">{DB.fullName}</h1>
            <p className="">{DB.role}</p>
            <p className="">{DB.school}</p>
          </div>
        </div>
        <div className="w-full h-full p-2 pb-20 mb-20 rounded shadow-2xl">
          <div className="flex justify-center w-full">
            <div className="grid h-10 p-1 text-xl m-2 text-white font-bold border-2 border-blue-500 rounded w-full place-content-center bg-[#1a56db]">
              Details
            </div>
          </div>
          <div className="grid items-center grid-cols-1 gap-2 pt-10 pb-5 md:pb-20 lg:mt-8 sm:mx-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-row justify-around w-full mb-10 md:flex-col">
              <div>
                <h3>Name</h3>
                <p>{DB.fullName}</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>{DB.email}</p>
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
};

export default ManageTutorTemplateDetail;
