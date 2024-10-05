import React from "react";
import { Avatar } from "../../assets";

const RecentBlog = ({blog}) => {
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
};

export default RecentBlog;
