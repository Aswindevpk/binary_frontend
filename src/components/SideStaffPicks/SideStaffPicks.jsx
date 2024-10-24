import React, { useState, useEffect } from "react";
import { api } from "services/api";
import RecentBlog from "./RecentBlog";


const SideStaffPicks = () => {
  let [recentblog, setRecentBlog] = useState([]);
  useEffect(() => {
    const recentBlogs = async () => {
      try {
        const response = await api.get("/home/articles/?limit=3");
        const fetchedBlogs = response.data;
        setRecentBlog(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the recentblogs!", error);
      }
    };
    recentBlogs();
  }, []);

  return (
    <div className="home__recent">
      <h2 className="home__side-section-header header3">Staff picks</h2>
      <div className="home__recent-list">
        {recentblog.map((blog) => (
          <RecentBlog key={blog.uid} blog={blog} />
        ))}
      </div>
      <a className="home__side-section-cta para-cta para1" href="/author">
        See the full list
      </a>
    </div>
  );
};

export default SideStaffPicks;
