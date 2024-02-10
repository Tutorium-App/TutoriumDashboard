import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import FlashMessage from "react-flash-message";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAdminContext } from "../../hooks/useAdminContext";
import { useLogout } from "../../hooks/useLogout";

const AdminSettings = () => {
  const [flash, setFlash] = useState(false);        // State for flash message of copied text
  const [mainAdmin, setMainAdmin] = useState(true); // State for Super Admin
  const { admins, dispatch } = useAdminContext();   // Context for admins
  const { user } = useAuthContext();                // Authorization Context for user
  const { logout } = useLogout();                   // Logout hook
  
  const registrationLink = "http://localhost:3000/register";   // Link for Admin registration

  // Handles click for copying text onto clipboard
  const handleClick = () => {
    setFlash(true);
    navigator.clipboard.writeText(registrationLink);
  };

  // Splitting the user item from the local storage to get the "username"
  let splitString = localStorage.getItem("user");
  let splitStringFirst = splitString.split(",")[0];
  let splitStringFirstNameQuote = splitStringFirst.split(":")[1];
  let splitedUsername = splitStringFirstNameQuote.split('"')[1];

  useEffect(() => {
    if (flash) {
      setTimeout(() => {
        setFlash(false);
      }, 5000);
    }

    if (splitedUsername === "Admin") {
      setMainAdmin(true);
    } else {
      setMainAdmin(false);
    }
  }, [flash, splitedUsername]);

  useEffect(() => {
    const fetchAdmins = async () => {
      const response = await fetch("/api/user/allUsers", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ADMINS", payload: json });
      }
    };

    if (user) {
      fetchAdmins();
    }
  }, [dispatch, user]);

  const handleDelete = async (userID, userName) => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/user/" + userID, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ADMIN", payload: json._id });
    } else {
      console.error("Error deleting user:", response);
      alert("Error deleting user. Please try again. " + userID);
    }

    if (userName === splitedUsername) {
      logout();
    }
  };

  return (
    <>
      <Navbar />
      <main className="px-6 md:ml-72 md:px-0 md:pr-10">
        <br />

        {/* Copy Flash */}
        {flash ? (
          <FlashMessage duration={5000}>
            <div className="absolute translate-x-48 md:taranslate-x-96">
              <strong className="p-2 font-bold text-white border-2 rounded border-lime-500 bg-lime-400">
                Copied
              </strong>
            </div>
          </FlashMessage>
        ) : (
          ""
        )}
        {/* End of Copy Flash */}

        {/* Copy Link Section */}
        <section>
          <h3 className="text-[#f55252] ml-4 mb-4">Add Admin</h3>
          <div className="p-2 pb-3 shadow-xl card">
            <h3 className="text-[#6cb5f0] mb-3">Registration page link</h3>
            <div className="flex items-center space-x-4">
              <div className="w-4/5 p-1 px-2 bg-[#ebebeb] rounded text-ellipsis overflow-clip">
                {registrationLink}
              </div>
              <div>
                <button
                  className="bg-[#6cb5f0] text-white px-2 py-1 rounded"
                  onClick={handleClick}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* End of Copy Link Section */}

        <br />
        <br />
        <br />

        <section>
          <h3 className="text-[#f55252] ml-4 mb-4">Admins</h3>
          <div className="p-2 shadow-xl card">
            <table>
              <thead className="bg-[#ebebeb] text-[#6cb5f0] md:text-xl">
                <th className="py-3 pl-2">Name</th>
                <th>Role</th>
                <th>Last Login</th>
                <th>Action</th>
              </thead>
              <div className="p-1"></div>
              <tbody className="bg-[#ebebeb]">
                {admins.map((data, key) => (
                  <>
                    {data.username === "Admin" ? (
                      <tr className="font-bold md:text-xl">
                        <td className="py-3 md:pl-2">{data.username}</td>
                        <td className="py-3 md:pl-2">{data.role}</td>
                        <td className="py-3 md:pl-2">{data.lastLogin}</td>
                        <td className="py-3 md:pl-2">
                          {/* <button className="bg-[#f55252] my-1 rounded py-1 px-2 text-center inline text-white">Delete</button> */}
                        </td>
                      </tr>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
                {admins.map((data, key) => {
                  if (mainAdmin) {
                    return (
                      <tr
                        key={key}
                        className="font-bold text-gray-500 md:text-xl"
                      >
                        {data.username === "Admin" ? (
                          <></>
                        ) : (
                          <>
                            <td className="py-3 md:pl-2">{data.username}</td>
                            <td className="py-3 md:pl-2">{data.role}</td>
                            <td className="py-3 md:pl-2">{data.lastLogin}</td>
                            <td className="py-3 md:pl-2">
                              <button
                                className="bg-[#f55252] my-1 rounded py-1 px-2 text-center inline text-white"
                                onClick={() => handleDelete(data._id, data.username)}
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  } else {
                    return (
                      <tr
                        key={key}
                        className="font-bold text-gray-500 md:text-xl"
                      >
                        {data.username === "Admin" ? (
                          <></>
                        ) : (
                          <>
                            <td className="py-3 md:pl-2">{data.username}</td>
                            <td className="py-3 md:pl-2">{data.role}</td>
                            <td className="py-3 md:pl-2">{data.lastLogin}</td>
                            <td className="py-3 md:pl-2">
                              <button
                                className="bg-[#f55252] my-1 rounded py-1 px-2 text-center inline text-white opacity-50 cursor-not-allowed"
                                disabled="true"
                                onClick={() => handleDelete(data._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </>
                        )}
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <br /> <br className="md:hidden" />
          <br className="md:hidden" />
        </section>
        {/* End of Admins Section */}
      </main>
    </>
  );
};

export default AdminSettings;
