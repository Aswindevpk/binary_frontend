import React, { useState, useEffect } from "react";
import { FilterMenu, FeaturedArticle, Footer } from "../../components";
import "./AuthorDetails.css";
import "./ListItem.css";
import "./Lists.css";
import { Cover } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../services/api";
import { Avatar, Post } from "../../assets";

const filters = [
  { name: "Home", uid: "1" },
  { name: "Lists", uid: "2" },
  { name: "About", uid: "3" },
];

function AuthorDetails() {
  const [activeFilter, setActiveFilter] = useState({
    name: "Home",
    uid: "1",
  });
  let [blogs, setBlogs] = useState([]);

  // Fetch blogs for the active category whenever activeFilter changes
  useEffect(() => {
    const fetchBlogs = async (Topic) => {
      try {
        const response = await api.get(`/home/articles/?topic=${Topic}`);
        const fetchedBlogs = response.data.data;
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    fetchBlogs("Coding");
  }, []);

  return (
    <div className="AuthorDetails">
      <div className="AuthorDetails__main">
        <img className="AuthorDetails__main-cover" src={Cover} alt="" />
        <div className="AuthorDetails__main-header">
          <h2 className="AuthorDetails__main-header__h1">Aswin Dev P k</h2>
          <FontAwesomeIcon icon={faEllipsis} color="gray" className="icons" />
        </div>
        <div className="AuthorDetails__main-filterMenu">
          <FilterMenu
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <div className="AuthorDetails__main-content">
          {activeFilter && activeFilter.uid == "1" && (
            <div>
              {blogs.map((blog) => (
                <FeaturedArticle key={blog.uid} blog={blog} />
              ))}
            </div>
          )}
          {activeFilter && activeFilter.uid == "2" && (
            <div>
                <Lists />
                <Lists />
                <Lists />
                <Lists />
                <Lists />
                <Lists />
                <Lists />
                </div>
            )}
          {activeFilter && activeFilter.uid == "3" && <About />}
        </div>
      </div>
      <div className="AuthorDetails__side-section">
        <div className="AuthorDetails__side-section__profile">
          <img
            className="AuthorDetails__side-section__profile-pic"
            src={Avatar}
            alt=""
          />
          <h1 className="AuthorDetails__side-section__profile-h1">
            Bridget Webber
          </h1>
          <p className="AuthorDetails__side-section__profile-sub">
            12.9K Followers
          </p>
          <span className="AuthorDetails__side-section__profile-para">
            Former counselor. Spiritual growth, compassion, mindfulness,
            creativity, and psychology. Support me at
            https://ko-fi.com/bridgetwebber
          </span>
          <div className="AuthorDetails__side-section__profile-cta">
            <a className="" href="">
              Follow
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                className="icons"
              />
            </a>
          </div>
        </div>
        <div className="AuthorDetails__side-section__lists">
          <ListItem />
          <ListItem />
          <ListItem />
          <span>View All</span>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function Lists() {
  return (
    <div className="AuthorDetails__list">
      <div className="AuthorDetails__list-main">
        <div className="AuthorDetails__list-main__author">
          <img src={Avatar} alt="" />
          <span>Appuspk</span>
        </div>
        <h1>Reading List</h1>
        <div className="AuthorDetails__list-main__sub">
          <span>31 stories</span>
          <div className="AuthorDetails__list-main__sub-cta">
            <FontAwesomeIcon
              icon={faBookmark}
              className="icons"
              color="gray"
              style={{ fontSize: "16px" }}
            />
            <FontAwesomeIcon
              icon={faEllipsis}
              className="icons"
              color="gray"
              style={{ fontSize: "16px" }}
            />
          </div>
        </div>
      </div>
      <div className="AuthorDetails__list-sub">
        <img src={Post} alt="" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="AuthorDetails__about">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, doloribus
      laborum quis dolorem cum reprehenderit consequuntur quaerat pariatur
      libero illum repellendus consectetur voluptate molestias facilis
      repudiandae quos? Repellat, ratione ducimus?
    </div>
  );
}

function ListItem() {
  return (
    <div className="listItem">
      <img className="listItem-img" src={Cover} alt="" />
      <div className="listItem__sub">
        <h1 className="listItem__sub-h1">Writing</h1>
        <div className="listItem__sub-sub">
          <span>31 stories</span>
          <span>.</span>
          <span>1 save</span>
        </div>
      </div>
    </div>
  );
}

export default AuthorDetails;
