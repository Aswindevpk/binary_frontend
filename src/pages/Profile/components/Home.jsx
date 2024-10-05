import React, { useContext, useEffect, useState } from "react";
import HomeBlog from "./HomeBlog";
import { api } from "../../../services/api";
import AuthContext from "../../../context/AuthContext";
import "./Home.css";

function Home() {
  let { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get(`/home/authors/${user.user_id}/articles/`);
        const fetchedBlogs = response.data;
        setBlogs(fetchedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };
    fetchBlogs();
  },[user]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      {blogs.map((blog) => (
        <HomeBlog key={blog.id} blog={blog} />
      ))}
    </>
  );
}

export default Home;
