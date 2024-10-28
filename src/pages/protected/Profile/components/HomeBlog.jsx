import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { ActionDropDown, ProfileOverlay } from "components";
import { Link } from "react-router-dom";



function HomeBlog({ blog }) {
  return (
    <div className="profile_homeBlog-content">
      <div className="profile_homeBlog-content__left">
        <ProfileOverlay author={blog.author}/>
        <Link to={`/blog/${blog.uid}/`} className="profile_homeBlog-body">
          <h4 className="header2">{blog.title}</h4>
          <p className="para2">{blog.subtitle}</p>
        </Link>
        <div className="profile_homeBlog-footer">
          <div className="para2">22h ago</div>
          <div className="profile_homeBlog-footer__icon">
            <FontAwesomeIcon icon={faBookmark} className="icons" color="gray" />
            <ActionDropDown>
                <>
                  <li>Follow author</li>
                  <li>Follow publication</li>
                  <li>Mute author</li>
                  <li>Mute publication</li>
                  <li style={{ color: "#c94a4a" }}>Report story..</li>
                </>
              </ActionDropDown>
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
