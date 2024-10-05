import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function HomeBlog({ blog }) {
  return (
    <div className="profile_homeBlog-content">
      <div className="profile_homeBlog-content__left">
        <div className="profile_homeBlog-author">
          <img
            className="profile_homeBlog-author__pic"
            src={blog.author.img}
            alt=""
          />
          <p className="profile_homeBlog-author__name">
            {blog.author.username}
          </p>
        </div>
        <div className="profile_homeBlog-body">
          <h4 className="profile_homeBlog-body__title">{blog.title}</h4>
          <p className="profile_homeBlog-body__para">{blog.subtitle}</p>
        </div>
        <div className="profile_homeBlog-footer">
          <div className="profile_homeBlog-footer__date">22h ago</div>
          <div className="profile_homeBlog-footer__icon">
            <FontAwesomeIcon icon={faBookmark} className="icons" color="gray" />
            <FontAwesomeIcon icon={faEllipsis} className="icons" color="gray" />
          </div>
        </div>
      </div>
      <div className="profile_homeBlog-content__pic">
        <img src={blog.image} alt="" />
      </div>
    </div>
  );
}

export default HomeBlog;
