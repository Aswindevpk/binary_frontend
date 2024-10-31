import React, { useState, useEffect } from "react";
import { api } from "@services/api";
import RecentBlog from "./RecentBlog";
import { SideSkeleton } from "@components/layouts";
import { Link } from "react-router-dom";


const SideStaffPicks = () => {
  const [recentblog, setRecentBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recentBlogs = async () => {
      try {
        const response = await api.get("/home/articles/?limit=3");
        const fetchedBlogs = response.data;
        setRecentBlog(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the recentblogs!", error);
      } finally {
        setLoading(false);
      }
    };
    recentBlogs();
  }, []);

  if (loading) {
    return (
      <>
        <SideSkeleton />
      </>
    );
  }

  return (
    <div className="home__recent">
      <h2 className="home__side-section-header header3">Staff picks</h2>
      <div className="home__recent-list">
        {recentblog.map((blog) => (
          <RecentBlog key={blog.uid} blog={blog} />
        ))}
      </div>
      <Link to="/author" className="home__side-section-cta para-cta para1">
        See the full list
      </Link>
    </div>
  );
};

export default SideStaffPicks;
