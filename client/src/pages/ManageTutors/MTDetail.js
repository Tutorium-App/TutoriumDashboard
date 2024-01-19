import React from "react";
// import TutorsData from "./TutorsDB";
import { TSDetail } from "../../components";
import { useTutorsContext } from "../../hooks/useTutorContext";

const MTDetail = () => {
  const { tutors } = useTutorsContext();
  return (
    <>
      <TSDetail Data={tutors}  />
    </>
  );
};

export default MTDetail;
