import React, { useEffect } from "react";
import { ManageStudentTemplate } from "../../components";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useStudentContext } from "../../hooks/useStudentContext";
import { useLogout } from "../../hooks/useLogout";

const ManageStudents = () => {
  const { students, dispatch } = useStudentContext();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("/api/students", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (json["error"] === "Request is not authorized") {
        logout();
      }
      if (response.ok) {
        dispatch({ type: "SET_STUDENTS", payload: json });
      }
    };

    if (user) {
      fetchStudents();
    }
  }, [dispatch, user, logout]);

  // console.log(students["students"]);

  return (
    <>
      <ManageStudentTemplate data={students} title="STUDENTS" />
    </>
  );
};

export default ManageStudents;
