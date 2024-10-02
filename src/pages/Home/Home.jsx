import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import { api } from "../../services/api";
import {
  FeaturedArticle,
  ArticleFilterMenu,
  SideSection
} from "../../components";
import AuthContext from "../../context/AuthContext";

const Home = () => {
  let { user, authTokens } = useContext(AuthContext);
  const [activeFilter, setActiveFilter] = useState(null);
  let [topics, setTopics] = useState([]);
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await api.get("/home/topics/");
        const fetchedTags = response.data.data;
        setTopics(fetchedTags);
        setActiveFilter(fetchedTags[0]);
      } catch (error) {
        console.error("There was an error fetching the tags!", error);
      }
    };
    fetchTopics();
  }, []);

  // Fetch blogs for the active category whenever activeFilter changes
  useEffect(() => {
    const fetchBlogs = async (Topic) => {
      try {
        const response = await api.get(`/home/articles/?topic=${Topic}`);
        const fetchedBlogs = response.data.data;
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    if (activeFilter) {
      fetchBlogs(activeFilter.name);
    }
  }, [activeFilter]);

  return (
    <div className="home">
      <div className="home__main">
        <div className="home__main-filterMenu">
          <ArticleFilterMenu
            filters={topics}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <div className="home__main-blogs">
          {blogs.map((blog) => (
            <FeaturedArticle key={blog.uid} blog={blog} />
          ))}
        </div>
      </div>
      <SideSection/>                                                                                                                                    
    </div>
  );
};



export default Home;
