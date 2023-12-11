import React from "react";
import TutorsData from "./TutorsDB";
import {TutorStudents} from "../../components"

const ManageTutors = () => {
  return (
    <>
      <TutorStudents data={TutorsData} title="TUTORS" />
    </>
  );
};

export default ManageTutors;
