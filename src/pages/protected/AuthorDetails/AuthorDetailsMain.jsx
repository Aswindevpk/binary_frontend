import React, { useState, useEffect } from "react";
import {
  FilterMenu,
  FeaturedArticle,
  ActionDropDown,
  ProfileList,
} from "@components";
import { Cover } from "@assets";
import { api } from "@services/api";
import List from "./List";
import About from "./About";
import { Header1 ,Share} from "@components/ui";


const filters = [
  { name: "Home", uid: "1" },
  { name: "About", uid: "3" },
];

const AuthorDetailsMain = ({ author, id }) => {
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
      <img className="hidden" src={Cover} alt="" />
      <div className="flex justify-between items-center mt-10">
        <Header1>{author.username}</Header1>
        <div className="flex gap-8 items-center">
          <Share/>
          <ActionDropDown>
            <>
              <li>Mute author</li>
              <li>Block this author</li>
              <li>Report this author</li>
            </>
          </ActionDropDown>
        </div>
      </div>
      <FilterMenu
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div>
        {activeFilter && activeFilter.uid === "1" && (
          <div>
            {blogs.map((blog) => (
              <FeaturedArticle key={blog.uid} blog={blog} />
            ))}
          </div>
        )}
        {activeFilter && activeFilter.uid === "2" && (
          <div>
            <List user={author} />
          </div>
        )}
        {activeFilter && activeFilter.uid === "3" && (
          <About about={author.about} />
        )}
      </div>
    </>
  );
};

export default AuthorDetailsMain;
