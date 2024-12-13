import React, { useState,useEffect } from "react";
import UserDetail from "./UserDetail";
import { api } from "@services/api";


function People() {
  let [user, setUser] = useState(null);
  let [followingUsers ,setFollowingUsers] = useState(null)

  const fetchUser = async () => {
    try {
      const response = await api.get("/accounts/profile/");
      const fetchedUser = response.data;
      setUser(fetchedUser);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  const fetchfollowing = async () => {
    try {
      const response = await api.get(`accounts/${user.id}/followings/`);
      const fetchedList = response.data;
      console.log(fetchedList)
      setFollowingUsers(fetchedList);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(()=>{
    fetchfollowing();
  },[user])

  if(!user){
    return <p>loading...</p>
  }
  if(!followingUsers){
    return <p>loading...</p>
  }

  return (
    <div className="follow-people-list">
      {followingUsers.map((following)=>(
        <UserDetail username={following.username} user_id={following.id} img={following.img} about={following.about} />
      ))} 
    </div>
  );
}

export default People;
