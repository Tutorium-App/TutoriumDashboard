import React from "react";
// import TutorsData from "./TutorsDB";
import { ManageTutorTemplateDetail } from "../../components";
import { useTutorsContext } from "../../hooks/useTutorContext";

const MTDetail = () => {
  const { tutors } = useTutorsContext();
  return (
    <>
      <ManageTutorTemplateDetail Data={tutors} title="TUTORS"  />
    </>
  );
};

export default MTDetail;
