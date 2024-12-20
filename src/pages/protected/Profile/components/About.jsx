import React, { useState,useEffect } from "react";
import { api } from "@services/api";
import AboutEdit from "./AboutEdit";
import AboutView from "./AboutView";
import AboutBlank from "./AboutBlank";
import { FollowStat } from '@components'

const About = () => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  let [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await api.get("/accounts/profile/");
      const fetchedUser = response.data;
      setUser(fetchedUser);
      setLoading(false)
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {user.about && edit === false && (
        <AboutView about={user.about} setEdit={setEdit} />
      )}
      {edit && <AboutEdit setEdit={setEdit} setUser={setUser} user={user} />}
      {user.about == null ||
        (user.about === "" && edit === false && (
          <AboutBlank setEdit={setEdit} />
        ))}
      <FollowStat/>
    </>
  );
};

export default About;
