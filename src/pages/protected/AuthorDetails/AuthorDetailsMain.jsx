import React, { useState, useEffect } from "react";
import { FilterMenu, FeaturedArticle } from "components";
import "./AuthorDetails.css";
import { Cover } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { api } from "services/api";
import Lists from "./Lists";
import About from "./About";

const filters = [
  { name: "Home", uid: "1" },
  { name: "Lists", uid: "2" },
  { name: "About", uid: "3" },
];

const AuthorDetailsMain = ({author,id}) => {
  const [activeFilter, setActiveFilter] = useState({
    name: "Home",
    uid: "1",
  });
  let [blogs, setBlogs] = useState([]);

  // Fetch blogs for the active category whenever activeFilter changes
  useEffect(() => {
    const fetchBlogs = async (Topic) => {
      try {
        const response = await api.get(`/home/authors/${id}/articles/`);
        const fetchedBlogs = response.data;
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <img className="AuthorDetails__main-cover" src={Cover} alt="" />
      <div className="AuthorDetails__main-header">
        <h2 className="main__header">{author.username}</h2>
        <FontAwesomeIcon icon={faEllipsis} color="gray" className="icons" />
      </div>
      <FilterMenu
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className="AuthorDetails__main-content">
        {activeFilter && activeFilter.uid === "1" && (
          <div>
            {blogs.map((blog) => (
              <FeaturedArticle key={blog.uid} blog={blog} />
            ))}
          </div>
        )}
        {activeFilter && activeFilter.uid === "2" && (
          <div>
            <Lists author={author}/>
          </div>
        )}
        {activeFilter && activeFilter.uid === "3" && <About about={author.about} />}
      </div>
    </>
  );
};

export default AuthorDetailsMain;
