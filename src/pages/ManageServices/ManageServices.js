import React from "react";
import { ServicesVideos } from "../../components";
import ServicesData from "./ServicesDB";

const ManageServices = () => {
  return (
    <>
      <ServicesVideos title="SERVICES" data={ServicesData} />
    </>
  );
};

export default ManageServices;
