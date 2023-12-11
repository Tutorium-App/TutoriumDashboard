import React from "react";
import { TutorStudents } from "../../components";
import StudentsData from "./StudentsDB";

const ManageStudents = () => {
  return (
    <>
      <TutorStudents data={StudentsData} title="STUDENTS" />
    </>
  );
};

export default ManageStudents;
