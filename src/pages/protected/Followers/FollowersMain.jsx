import React ,{useState,useEffect} from "react";
import { Header1 } from "@components/ui";
import { api } from "@services/api";
import FollowersDetail from "./FollowersDetail";

function FollowersMain() {
  let [user, setUser] = useState(null);
  let [followers ,setFollowers] = useState(null)

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
      const response = await api.get(`accounts/${user.id}/followers/`);
      const fetchedList = response.data;
      console.log(fetchedList)
      setFollowers(fetchedList);
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
  if(!followers){
    return <p>loading...</p>
  }
  return (
    <>
      <div className="flex gap-1 pt-10 text-sm text-secondary">
        <span >Appuspk</span>
        <span >&gt;</span>
        <span >Followers</span>
      </div>
      <Header1 className="pt-1">Followers</Header1>
      <div className="flex flex-col gap-4 mt-6">
      {followers.map((follower)=>(
        <FollowersDetail username={follower.username} user_id={follower.id} img={follower.img} about={follower.about} />
      ))} 
      </div>
    </>
  );
}

export default FollowersMain;
