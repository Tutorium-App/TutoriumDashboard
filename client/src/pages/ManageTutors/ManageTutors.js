import React, { useEffect } from "react";
// import TutorsData from "./TutorsDB";
import {ManageTutorTemplate} from "../../components"
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTutorsContext } from "../../hooks/useTutorContext";
import { useLogout } from "../../hooks/useLogout";

const ManageTutors = () => {
  const { tutors, dispatch } = useTutorsContext();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  useEffect(() => {
    const fetchTutors = async () => {
      const response = await fetch("/api/tutors", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      
      if (json["error"] === "Request is not authorized") {
        logout();
      }
      if (response.ok) {
        dispatch({ type: "SET_TUTORS", payload: json });
      }
    };

    if (user) {
      fetchTutors();
    }
  }, [dispatch, user, logout]);

  return (
    <>
      <ManageTutorTemplate data={tutors} title="TUTORS" />
    </>
  );
};

export default ManageTutors;
