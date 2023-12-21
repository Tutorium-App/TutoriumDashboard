import React, { useEffect } from "react";
import { TutorStudents } from "../../components";
// import StudentsData from "./StudentsDB";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useStudentContext } from "../../hooks/useStudentContext";

const ManageStudents = () => {
  const { students, dispatch } = useStudentContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("/api/students", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      
      if (response.ok) {
        dispatch({ type: "SET_STUDENTS", payload: json });
      }
    };

    if (user) {
      fetchStudents();
    }
  }, [dispatch, user]);

  return (
    <>
      <TutorStudents data={students} title="STUDENTS" />
    </>
  );
};

export default ManageStudents;
