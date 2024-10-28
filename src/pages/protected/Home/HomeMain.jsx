import React, { useEffect, useState } from "react";
import { api } from "services/api";
import { FeaturedArticle, ArticleFilterMenu } from "components";
import "./Home.css";
import { ArticleSkeleton } from "components/layouts";

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
  }, []);

  // Fetch blogs for the active category whenever activeFilter changes
  useEffect(() => {
    const fetchBlogs = async (Topic) => {
      try {
        const response = await api.get(`/home/articles/?topic=${Topic}`);
        const fetchedBlogs = response.data;
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs(activeFilter?.name);
  }, [activeFilter]);

  if (loading) {
    return (
      <>
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
        <ArticleSkeleton />
      </>
    );
  }

  return (
    <>
      <div className="home__article">
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
    </>
  );
};

export default HomeMain;
