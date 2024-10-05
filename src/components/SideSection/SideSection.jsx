import React, { useEffect, useState } from "react";
import { FollowUser, Footer } from "../../components";
import { Avatar } from "../../assets";
import { api } from "../../services/api";
import "./RecentBlog.css";
import "./SideSection.css";

function SideSection() {
  let [recentblog, setRecentBlog] = useState([]);
  const [authors, setAuthors] = useState([]);
  let [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await api.get("/home/topics/");
        const fetchedTags = response.data;
        setTopics(fetchedTags);
      } catch (error) {
        console.error("There was an error fetching the tags!", error);
      }
    };
    const fetchAuthors = async () => {
      try {
        const response = await api.get("/home/authors/?limit=5");
        const fetchedUsers = response.data.data;
        setAuthors(fetchedUsers);
      } catch (error) {
        console.error("There was an error fetching the users!", error);
      }
    };
    const recentBlogs = async () => {
      try {
        const response = await api.get("/home/articles/?limit=3");
        const fetchedBlogs = response.data.data;
        setRecentBlog(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the recentblogs!", error);
      }
    };

    recentBlogs();
    fetchTopics();
    fetchAuthors();
  }, []);

  return (
    <div className="home__side-section">
      <div className="home__recent">
        <h2 className="home__side-section-header">Staff picks</h2>
        <div className="home__recent-list">
          {recentblog.map((blog) => (
            <RecentBlog blog={blog} />
          ))}
        </div>
        <a className="home__side-section-cta" href="/author">
          See the full list
        </a>
      </div>
      <div className="home__topics">
        <h3 className="home__side-section-header">Recommended Topics</h3>
        <div className="home__topics-list">
          {topics.map((topic) => (
            <a className="home__topics-topic" href="/tag">
              <span key={topic.uid}>{topic.name}</span>
            </a>
          ))}
        </div>
        <a className="home__side-section-cta" href="/explore-topics">
          See more topics
        </a>
      </div>
      <div className="home__followList">
        <h3 className="home__side-section-header">Who to Follow</h3>
        <div className="home__followList-list">
          {authors.map((author) => (
            <FollowUser key={author.id} author={author} />
          ))}
        </div>
        <a className="home__side-section-cta" href="">
          See more suggestions
        </a>
      </div>
      <Footer />
    </div>
  );
}

function RecentBlog({ blog }) {
  return (
    <div key={blog.uid} className="home__recent-content">
      <div className="home__recent-content__author">
        <div className="home__recent-content__author-dropdown">
          <img
            className="home__recent-content__author-img"
            alt="src"
            src={Avatar}
          ></img>
          <span className="home__recent-content__author-name">
            {blog.author.username}
          </span>
          <div className="profile_overlay">
            <div className="profile_overlay-main">
              <img src={Avatar} alt="" />
              <a href="">Follow</a>
            </div>
            <div className="profile_overlay-sub">
              <h2>{blog.author.username}</h2>
              <span>161K Followers</span>
            </div>
            <span className="profile_overlay-summery">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
              laboriosam voluptatum. Eos reiciendis deleniti sed exercitationem?
              Sunt deserunt, est magni, impedit voluptate officia totam porro
              accusantium, ipsum laudantium repellat consectetur.
            </span>
          </div>
        </div>
      </div>
      <h3 className="home__recent-content__header">{blog.title}</h3>
    </div>
  );
}

export default SideSection;
