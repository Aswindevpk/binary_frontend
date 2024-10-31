import React, { useState, useEffect } from "react";
import { api } from "@services/api";
import { SideSkeleton } from "@components/layouts";

const SideTopics = () => {
  let [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await api.get("/home/topics/");
        const fetchedTags = response.data;
        setTopics(fetchedTags);
      } catch (error) {
        console.error("There was an error fetching the tags!", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, []);

  if (loading) {
    return (
      <>
        <SideSkeleton />
      </>
    );
  }

  return (
    <div className="home__topics">
      <h3 className="home__side-section-header header3">Recommended Topics</h3>
      <div className="home__topics-list">
        {topics.map((topic) => (
          <a key={topic.uid} className="home__topics-topic" href="/tag">
            <span>{topic.name}</span>
          </a>
        ))}
      </div>
      <a
        className="home__side-section-cta para-cta para1"
        href="/explore-topics"
      >
        See more topics
      </a>
    </div>
  );
};

export default SideTopics;
