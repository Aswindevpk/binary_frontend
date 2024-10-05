import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FeaturedArticle, ArticleFilterMenu } from "../../components";

const HomeMain = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  let [topics, setTopics] = useState([]);
  let [blogs, setBlogs] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await api.get("/home/topics/");
        const fetchedTags = response.data;
        setTopics(fetchedTags);
        setActiveFilter(fetchedTags[0]);
      } catch (error) {
        console.error("There was an error fetching the tags!", error);
      }
    };
    fetchTopics();
    setLoading(false);
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

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <>
      <ArticleFilterMenu
        filters={topics}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className="home__main-blogs">
        {blogs.map((blog) => (
          <FeaturedArticle key={blog.uid} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default HomeMain;
