import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";
import {
  Card,
  Label,
  TextInput,
  Button,
  Dropdown,
  DropdownItem,
} from "flowbite-react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import postImg from "../../assets/images/green_skills.jpeg";

const ManagePosts = () => {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const { user } = useAuthContext();
  const { logout } = useLogout();                   // Logout hook
  const [postData, setPostData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/managePost/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ postText, imageUrl, postUrl }),
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("Error occured while fetching!!!!");
      console.log(json);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/managePost/", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (!response.ok) {
        console.log("Error occured while fetching!!!!");
        console.log(json);
      }
      if (response.ok) {
        setPostData([postData, ...json]);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user, postData]);

  const handleDelete = async (userID) => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/managePost/" + userID, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      if (json === "Request is not authorized") {
        logout();
        return;
      }
      console.error("Error deleting post:", response);
    }
    if (response.ok) {
      // dispatch({ type: "ADD_POST", payload: json });
      console.log(json);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-4 ml-2 text-2xl font-bold text-red-600 fg:ml-56">
        Make post
      </div>
      <div className="flex-1 max-w-full p-4 mt-4 ml-2 mr-2 shadow-lg fg:ml-56 rounded-xl">
        <div className="flex justify-end mt-2 mb-2 mr-0 fg:ml-56">
          <Dropdown label="General" dismissOnClick={false}>
            <DropdownItem>General</DropdownItem>
            <DropdownItem>UMaT,SRID</DropdownItem>
            <DropdownItem>UG, Legon</DropdownItem>
            <DropdownItem>UCC</DropdownItem>
            <DropdownItem>KNUST</DropdownItem>
          </Dropdown>
        </div>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="block mb-2">
            <Label htmlFor="text" value="Text" className="mb-2" />
            <TextInput
              id="text"
              type="text"
              sizing="md"
              name="postText"
              onChange={(e) => {
                setPostText(e.target.value);
              }}
              required
            />
          </div>
          <div className="block mb-2">
            <Label htmlFor="imageUrl" value="Image Url" className="mb-2" />
            <TextInput
              id="imageUrl"
              type="text"
              sizing="md"
              name="imageUrl"
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
              required
            />
          </div>
          <div className="block mb-2">
            <Label htmlFor="postUrl" value="Post Url" className="mb-2" />
            <TextInput
              id="postUrl"
              type="text"
              sizing="md"
              name="postUrl"
              onChange={(e) => {
                setPostUrl(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex justify-end mt-2 mr-0">
            <Button
              className="bg-green-600 fg:ml-60"
              color="success"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
      {/* <div className="mt-8 ml-2 text-2xl font-bold text-red-600 fg:ml-56">
        Existing post
      </div> */}
      <div className="flex flex-wrap justify-center md:p-8 lg:justify-between fg:ml-52">
        {postData.map((item) => (
          <div key={item._id}>
            <div className="flex ">
              <Card className="max-w-xs m-3" imgAlt={item.postText} imgSrc={postImg}>
                <Link
                  to={item.postUrl}
                  className="text-2xl font-bold tracking-tight text-gray-900 no-underline transition-all duration-200 ease-in dark:text-white hover:text-blue-600"
                >
                  {item.postText}
                </Link>
                <Button color="failure" onClick={() => handleDelete(item._id)}>
                  Delete
                </Button>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManagePosts;
