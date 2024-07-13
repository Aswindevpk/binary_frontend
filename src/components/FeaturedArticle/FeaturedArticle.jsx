import React from "react";
import "./FeaturedArticle.css";
import { useNavigate } from "react-router-dom";
import profile_pic from "../assets/profile_pic.png";
import article_img from "../assets/post.jpg";
import bookmark from "../assets/bookmark-plus.svg";
import comment from '../assets/chat.png';
import clap from '../assets/clap.png';
import { format } from 'date-fns';

const FeaturedArticle = ({ blog }) => {
  const formattedDate = format(new Date(blog.created_at), 'MMM d'); // Format date as 'Feb 9'
  const navigate = useNavigate();

  const handleBlogClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="FeaturedArticle">
      <div className="FeaturedArticle__content">
        <div className="FeaturedArticle__content-author">
          <img
            className="FeaturedArticle__content-author__pic"
            src={profile_pic}
            alt="alt"
          />
          <span className="FeaturedArticle__content-author__name">
            {blog.author}
          </span>
        </div>
        <div
          onClick={() => {
            handleBlogClick(blog.slug);
          }}
        >
          <h2 className="FeaturedArticle__content-title">{blog.title}</h2>
          <p className="FeaturedArticle__content-short">{blog.content}</p>
        </div>

        <div className="FeaturedArticle__content-footer">
          <div className="blog__actions-left">
            <span>
              {formattedDate}
            </span>
            <div className="blog__actions-clap">
              <img src={clap} alt="clap"></img>
              <span>{blog.clap_count}</span>
            </div>
            <div className="blog__actions-comment">
              <div  className="commentIcon">
                <img src={comment}></img>
              </div>
              <span>{blog.comment_count}</span>
            </div>
          </div>
          <div className="blog__actions-right">
            <img src={bookmark} alt="comment"></img>
          </div>
        </div>
      </div>
      <div className="FeaturedArticle__image">
        <img src={article_img} alt="article image" />
      </div>
    </div>
  );
};

export default FeaturedArticle;
