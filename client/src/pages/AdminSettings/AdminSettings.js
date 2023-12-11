import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import AdminData from "./AdminData";
import FlashMessage from "react-flash-message";

const AdminSettings = () => {
  const [flash, setFlash] = useState(false);
  const registrationLink = "https://www.dfe/admins/link/reg.com";

  const handleClick = () => {
    setFlash(true);
    navigator.clipboard.writeText(registrationLink);
  };

  useEffect(() => {
    if (flash) {
      setTimeout(() => {
        setFlash(false);
      }, 5000);
    }
  });

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
                https://www.dfe/admins/link/reg.com
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

        {/* Admins Section */}
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
                {AdminData.map((adminDB, key) => (
                  <>
                    {adminDB.id === 0 ? (
                      <tr className="font-bold md:text-xl">
                        <td className="py-3 md:pl-2">{adminDB.name}</td>
                        <td className="py-3 md:pl-2">{adminDB.role}</td>
                        <td className="py-3 md:pl-2">{adminDB.date}</td>
                        <td className="py-3 md:pl-2">
                          {/* <button className="bg-[#f55252] my-1 rounded py-1 px-2 text-center inline text-white">Delete</button> */}
                        </td>
                      </tr>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
                {AdminData.map((data, key) => (
                  <>
                    {data.id !== 0 ? (
                      <tr
                        className="font-bold text-gray-500 md:text-xl"
                        key={key}
                      >
                        <td className="py-3 md:pl-2">{data.name}</td>
                        <td className="py-3 md:pl-2">{data.role}</td>
                        <td className="py-3 md:pl-2">{data.date}</td>
                        <td className="py-3 md:pl-2">
                          <button className="bg-[#f55252] my-1 rounded py-1 px-2 text-center inline text-white">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
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
