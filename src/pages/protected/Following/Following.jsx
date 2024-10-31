import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { MainLayout } from "@components/layouts";
import HomeSide from "../Home/HomeSide";
import FollowingMain from "./FollowingMain";



function Following() {
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
    return <MainLayout Main={FollowingMain} Side={HomeSide}></MainLayout>;
}

export default Following
