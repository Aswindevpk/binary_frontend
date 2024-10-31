import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { MainLayout } from "@components/layouts";
import ProfileMain from "./ProfileMain";
import ProfileSide from "./ProfileSide";

const Profile = () => {
  let [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await api.get("/accounts/profile/");
      const fetchedUser = response.data;
      setUser(fetchedUser);
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
  return  <MainLayout Main={(props)=><ProfileMain {...props} user={user}/>} Side={(props)=><ProfileSide {...props} user={user}/>}/>;
};

export default Profile;
