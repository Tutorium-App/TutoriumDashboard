import React from "react";
import { Navbar } from "../../components";
import { Label, TextInput , Button, Dropdown, DropdownItem} from 'flowbite-react';
const Notifications = () => {
  return (
    <>
      <Navbar />
      <div className="  text-red-600 fg:ml-56 mt-4  text-2xl  font-bold ml-2">
        Newsletter
      </div>
      <div className="flex-1 max-w-full p-4 fg:ml-56 shadow-lg rounded-xl mt-4 mr-2 ml-2"> 
      <div className="flex justify-end mr-0 fg:ml-56 mt-2">
    <Dropdown label="General" dismissOnClick={false} >
    <DropdownItem>General</DropdownItem>
      <DropdownItem>UMaT,SRID</DropdownItem>
      <DropdownItem>UG, Legon</DropdownItem>
      <DropdownItem>UCC</DropdownItem>
      <DropdownItem>KNUST</DropdownItem>
    </Dropdown>
  </div>
        <div className="mb-2 block">
          <Label htmlFor="base1" value="Subject" />
        </div>
        <TextInput id="base1" type="text" sizing="md" />
        <div className="mb-2 block">
          <Label htmlFor="base" value="Content" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
        <div className="flex justify-end mr-0 mt-2"> 
      <Button className="fg:ml-60 bg-green-600" color="success">Send</Button>
    </div>
      </div>
      <div className="  text-red-600 fg:ml-56 mt-4  text-2xl  font-bold  ml-2">
        Notifications
      </div>
      <div className="flex-1 max-w-full p-4 fg:ml-56 shadow-lg rounded-xl mt-4 mr-2 mb-4 ml-2"> 
      <div className="flex justify-end mr-0 fg:ml-56 mt-2 ">
    <Dropdown label="General" dismissOnClick={false}>
      <DropdownItem>General</DropdownItem>
      <DropdownItem>UMaT,SRID</DropdownItem>
      <DropdownItem>UG, Legon</DropdownItem>
      <DropdownItem>UCC</DropdownItem>
      <DropdownItem>KNUST</DropdownItem>
    </Dropdown>
  </div>
        <div className="mb-2 block">
          <Label htmlFor="base1" value="Title" />
        </div>
        <TextInput id="base1" type="text" sizing="md" />
        <div className="mb-2 block">
          <Label htmlFor="base" value="Description" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
        <div className="flex justify-end mr-0 mt-2"> {/* Add ml-auto to shift the Button container to the right */}
      <Button className="fg:ml-60 bg-green-600" color="success">Send</Button>
    </div>
      </div>
      </>
  );
}

export default Notifications;
