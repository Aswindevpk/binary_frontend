import React, {useState,useEffect} from "react";
import { api } from "../../services/api";
import FollowUser from "../followUser/followUser";

const SideFollow = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
      const fetchAuthors = async () => {
        try {
          const response = await api.get("/home/authors/");
          const fetchedUsers = response.data;
          setAuthors(fetchedUsers);
        } catch (error) {
          console.error("There was an error fetching the users!", error);
        }
      };
  
      fetchAuthors();
    }, []);
    
  return (
    <div className="home__followList">
      <h3 className="home__side-section-header">Who to Follow</h3>
      <div className="home__followList-list">
        {authors.map((author) => (
          <FollowUser key={author.id} author={author} />
        ))}
      </div>
      <a className="home__side-section-cta" href="">
        See more suggestions
      </a>
    </div>
  );
};

export default SideFollow;
