import React, { useEffect, useState } from 'react'
import { api } from "services/api";
import { MainLayout } from "components/layouts";
import ProfileSide from '../Profile/ProfileSide';
import ReadingListMain from './ReadingListMain';



function ReadingList() {
    let [user, setUser] = useState(null);

    const fetchArticles = async () => {
      try {
        const response = await api.get("/home/profile/");
        const fetchedData = response.data;
        setUser(fetchedData);
      } catch (error) {
        console.error("There was an error fetching the tags!", error);
      }
    };
  
    useEffect(() => {
      fetchArticles();
    }, []);
  
    if (!user) {
      return <p>Loading...</p>;
    }
    return  <MainLayout Main={(props)=><ReadingListMain {...props} user={user}/>} Side={(props)=><ProfileSide {...props} user={user}/>}/>;
}

export default ReadingList
