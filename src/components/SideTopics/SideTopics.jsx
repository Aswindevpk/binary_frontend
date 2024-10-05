import React, {useState,useEffect} from "react";
import { api } from "../../services/api";


const SideTopics = () => {
  let [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await api.get("/home/topics/");
        const fetchedTags = response.data;
        setTopics(fetchedTags);
      } catch (error) {
        console.error("There was an error fetching the tags!", error);
      }
    };
    fetchTopics();
  }, []);

  return (
    <div className="home__topics">
      <h3 className="home__side-section-header">Recommended Topics</h3>
      <div className="home__topics-list">
        {topics.map((topic) => (
          <a className="home__topics-topic" href="/tag">
            <span key={topic.uid}>{topic.name}</span>
          </a>
        ))}
      </div>
      <a className="home__side-section-cta" href="/explore-topics">
        See more topics
      </a>
    </div>
  );
};

export default SideTopics;
