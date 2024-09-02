import React, { useState } from "react";
import "./FeaturedArticle.css";
import { useNavigate } from "react-router-dom";
import { Avatar,Bookmark,Chat,Clap,Post } from "../../assets";
import { format } from 'date-fns';


const FeaturedArticle = ({ blog }) => {
  const formattedDate = format(new Date(blog.created_at), 'MMM d'); // Format date as 'Feb 9'
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleBlogClick = (uid) => {
    navigate(`/blog/${uid}/`);
  };

  return (
    <div className="FeaturedArticle">
      <div className="FeaturedArticle__content">
        <div className="FeaturedArticle__content-author">
          <img
            className="FeaturedArticle__content-author__pic"
            src={Avatar}
            alt="alt"
          />
          <span className="FeaturedArticle__content-author__name" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {blog.author.username}
          </span>
          {isHovered && <div className="profile_overlay">Overlay content</div>}
        </div>
        <div
          onClick={() => {
            handleBlogClick(blog.uid);
          }}
        >
          <h2 className="FeaturedArticle__content-title">{blog.title}</h2>
          <p className="FeaturedArticle__content-short" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
        </div>

        <div className="FeaturedArticle__content-footer">
          <div className="blog__actions-left">
            <span>
              {formattedDate}
            </span>
            <div className="blog__actions-clap">
              <img src={Clap} alt="clap"></img>
              <span>{blog.clap_count}</span>
            </div>
            <div className="blog__actions-comment">
              <div  className="commentIcon">
                <img src={Chat}></img>
              </div>
              <span>{blog.comment_count}</span>
            </div>
          </div>
          <div className="blog__actions-right">
            <img src={Bookmark} alt="comment"></img>
          </div>
        </div>
      </div>
      <div className="FeaturedArticle__image">
        <img src={Post} alt="article image" />
      </div>
    </div>
  );
};

export default FeaturedArticle;
