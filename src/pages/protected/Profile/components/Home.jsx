import React, { useContext, useEffect, useState } from "react";
import HomeBlog from "./HomeBlog";
import { api } from "services/api";
import AuthContext from "context/AuthContext";
import "./Home.css";
import CircleLoader from "components/layouts/Skeleton/CircleLoader";


function Home() {
  let { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer
    const fetchBlogs = async () => {
      try {
        const response = await api.get(
          `/home/authors/${user.user_id}/articles/`
        );
        const fetchedBlogs = response.data;
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      } finally{
        timer = setTimeout(() => {
          setLoading(false);
        }, 1000); // 1000ms = 1 second
      }
      return ()=> clearTimeout(timer)
    };
    fetchBlogs();
  }, [user]);

  if (loading) {
    return <div>
      <CircleLoader/>
    </div>;
  }

  return (
    <div>
      {blogs.map((blog) => (
        <HomeBlog key={blog.uid} blog={blog} />
      ))}
    </div>
  );
}

export default Home;
