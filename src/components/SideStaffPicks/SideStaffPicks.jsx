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
    <div className="mb-6">
      <h2 className="mb-4 font-extrabold">Recent picks</h2>
      <div className="flex flex-col gap-2">
        {recentblog.map((blog) => (
          <RecentBlog key={blog.uid} blog={blog} />
        ))}
      </div>
      <Link to="/author" className="text-sm text-success">
        See the full list
      </Link>
    </div>
  );
};

export default SideStaffPicks;
