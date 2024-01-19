import React from "react";
import { Navbar } from "../../components";
import { Card,  Label, TextInput , Button, Dropdown, DropdownItem} from 'flowbite-react';
const ManagePosts = () => {
  return (
    <>
      <Navbar />
      <div className="  text-red-600 fg:ml-56 mt-4  text-2xl  font-bold ml-2">
        Make post
      </div>
      <div className="flex-1 max-w-full p-4 fg:ml-56 shadow-lg rounded-xl mt-4 mr-2 ml-2"> 
      <div className="flex justify-end mr-0 fg:ml-56 mt-2"> 
      
    <Dropdown  label="General" dismissOnClick={false}>
    <DropdownItem>General</DropdownItem>
      <DropdownItem>UMaT,SRID</DropdownItem>
      <DropdownItem>UG, Legon</DropdownItem>
      <DropdownItem>UCC</DropdownItem>
      <DropdownItem>KNUST</DropdownItem>
    </Dropdown>
  </div>
        <div className="mb-2 block">
          <Label htmlFor="base1" value="Text" />
        </div>
        <TextInput id="base1" type="text" sizing="md" />
        <div className="mb-2 block">
          <Label htmlFor="base" value="Image Url" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
        <div className="flex justify-end mr-0 mt-2"> 
      <Button className="fg:ml-60 bg-green-600" color="success">Send</Button>
    </div>
      </div>
      <div className="  text-red-600 fg:ml-56 mt-4  text-2xl  font-bold ml-2">
        Existing post
      </div>
      <div className="flex flex-wrap lg:justify-between justify-center fg:ml-52 mt-4 ">
  <div className="flex">
    <Card
      className="max-w-xs m-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/book1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Text Goes here
      </h5>
      <Button color="failure">Delete</Button>
    </Card>
  </div>
  <div className="flex ">
    <Card
      className="max-w-xs m-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/book1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Text Goes here
      </h5>
      <Button color="failure">Delete</Button>
    </Card>
  </div>
  <div className="flex">
    <Card
      className="max-w-xs max-w m-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/book1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Text Goes here
      </h5>
      <Button color="failure">Delete</Button>
    </Card>
  </div>
</div>
<div className="flex flex-wrap lg:justify-between justify-center fg:ml-52 ">
  <div className="flex">
    <Card
      className="max-w-xs m-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/book1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Text Goes here
      </h5>
      <Button color="failure">Delete</Button>
    </Card>
  </div>
  <div className="flex ">
    <Card
      className="max-w-xs m-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/book1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Text Goes here
      </h5>
      <Button color="failure">Delete</Button>
    </Card>
  </div>
  <div className="flex">
    <Card
      className="max-w-xs max-w m-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/book1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Text Goes here
      </h5>
      <Button color="failure">Delete</Button>
    </Card>
  </div>
</div>

      
    </>
  );
};

export default ManagePosts;
