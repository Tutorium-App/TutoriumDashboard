import React, { useEffect } from "react";
// import TutorsData from "./TutorsDB";
import {TutorStudents} from "../../components"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTutorsContext } from "../../hooks/useTutorContext";

const ManageTutors = () => {
  const { tutors, dispatch } = useTutorsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTutors = async () => {
      const response = await fetch("/api/tutors", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      
      if (response.ok) {
        dispatch({ type: "SET_TUTORS", payload: json });
      }
    };

    if (user) {
      fetchTutors();
    }
  }, [dispatch, user]);

  return (
    <>
      <TutorStudents data={tutors} title="TUTORS" />
    </>
  );
};

export default ManageTutors;
