import React, { useEffect } from "react";
import { useTutorsContext } from "../hooks/useTutorContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Gallary } from "../assets/Gallary";

const Demo = () => {
  const { tutors, dispatch } = useTutorsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTutors = async () => {
      const response = await fetch("/api/tutors", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      console.log("Data below:");
      console.log("Data below:");
      console.log(json);

      if (response.ok) {
        dispatch({ type: "SET_TUTORS", payload: json });
      }
    };

    if (user) {
      fetchTutors();
    }
  }, [dispatch, user]);
  
  const data = tutors;

  if (Array.isArray(data)) {
    console.log('Data is an array');
    // Perform operations for an array
  } else {
    console.log('Data is not an array');
    // Check if it's an object or other data type
  }


  return (
    <div>
      <ul>
        <li>
          {
          tutors && tutors.map((tutor) => 
          <>
            <span>{tutor.fullName}</span><br />
            <span>{tutor.profilePhotoLink}</span>
            {Gallary.map((image) =>
                  image.name === tutor.profilePhotoLink ? (
                    <img
                      className="w-full mb-3 h-60"
                      src={tutor.profilePhotoLink  === image.name ? image.link : null}
                      alt={image.name}
                    />
                  ) : null
                )}
          </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Demo;
