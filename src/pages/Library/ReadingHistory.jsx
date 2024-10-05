import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { FeaturedArticle } from "../../components";


const ReadingHistory = () => {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const recentBlogs = async () => {
      try {
        const response = await api.get("/home/articles/");
        const fetchedBlogs = response.data.data;
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the recentblogs!", error);
      }
    };

    recentBlogs();
  }, []);
  return (
    <div className="library_history">
      <div className="library_history_top">
        <span>You can clear your reading history for a fresh start.</span>
        <button>Clear History</button>
      </div>
      {blogs.map((blog) => (
        <FeaturedArticle key={blog.uid} blog={blog} />
      ))}
    </div>
  );
};

export default ReadingHistory;
