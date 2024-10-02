import React, { useState,useEffect } from "react";
import { FilterMenu, FeaturedArticle,SideSection } from "../../components";
import "./Library.css";
import { api } from "../../services/api";
import { Avatar,Post} from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const filters = [
  { name: "Your Lists", uid: "1" },
  { name: "Saved Lists", uid: "2" },
  { name: "Highlights", uid: "3" },
  { name: "Reading History", uid: "4" },
];

const Library = () => {
  const [activeFilter, setActiveFilter] = useState( { name: "Your Lists", uid: "1" });
  return (
    <div className="library">
      <div className="library__main">
        <h2 className="library__main-header">Library</h2>
        <FilterMenu
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {activeFilter && activeFilter.uid == "4" && <ReadingHistory />}
        {activeFilter && activeFilter.uid == "2" && <SaveLists />}
        {activeFilter && activeFilter.uid == "1" && <YourLists />}
      </div>
      <SideSection/>
    </div>
  );
};

function ReadingHistory() {
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
}

function SaveLists() {
  return (
    <div className="library_savelist">
      <h3>No lists from others</h3>
      <p>Save someone else's list and it will appear here.</p>
    </div>
  );
}


function YourLists() {
  return (
    <div className="library_yourlist">
      <div className="library_yourlist-main">
        <div className="library_yourlist-main__author">
          <img src={Avatar} alt="" />
          <span>Appuspk</span>
        </div>
        <h1>Reading List</h1>
        <div className="library_yourlist-main__sub">
          <span>4 stories</span>
          <FontAwesomeIcon icon={faLock} className="icons" color="gray" style={{ fontSize: '12px' }}/>
        </div>
      </div>
      <div className="library_yourlist-sub">
          <img src={Post} alt="" />
      </div>
    </div>
  );
}

export default Library;
