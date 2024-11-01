import React, { useState, useEffect } from "react";
import { api } from "@services/api";
import { SideSkeleton } from "@components/layouts";
import { Link } from "react-router-dom";

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
    <div className="mb-6">
      <h3 className="mb-4 font-extrabold">Recommended Topics</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {topics.map((topic) => (
          <a key={topic.uid} className="home__topics-topic" href="/tag">
            <span>{topic.name}</span>
          </a>
        ))}
      </div>
      <Link className="text-sm text-success hover:text-primary" to="/explore-topics">
        See more topics
      </Link>
    </div>
  );
};

export default SideTopics;
