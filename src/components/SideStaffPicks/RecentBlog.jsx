import React from "react";
import ProfileOverlay from "../FeaturedArticle/ProfileOverlay";
import { Link } from "react-router-dom";

const RecentBlog = ({blog}) => {
  return (
    <Link to={`/blog/${blog.uid}/`} className="home__recent-content">
      <div className="home__recent-content__author">
        <ProfileOverlay author={blog.author}/>
      </div>
      <h3 className="home__recent-content__header">{blog.title}</h3>
    </Link>
  );
};

export default RecentBlog;
