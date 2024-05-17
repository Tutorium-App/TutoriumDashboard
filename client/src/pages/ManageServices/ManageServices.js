import React from "react";
import { ManageServicesTemplate } from "../../components";
import ServicesData from "./ServicesDB";

const ManageServices = () => {
  return (
    <>
      <ManageServicesTemplate title="SERVICES" data={ServicesData} />
    </>
  );
};

export default ManageServices;
