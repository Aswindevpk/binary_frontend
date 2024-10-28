import React, { useState, useRef, useEffect } from "react";
import "./FeaturedArticle.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProfileOverlay from "./ProfileOverlay";
import { ActionDropDown, Bookmark, Clap, Comment, Mute } from "..";

const FeaturedArticle = ({ blog }) => {
  const formattedDate = format(new Date(blog.created_at), "MMM d"); // Format date as 'Feb 9'

  return (
    <div className="FeaturedArticle">
      <div className="FeaturedArticle__content">
        <div className="FeaturedArticle__content-author">
          <ProfileOverlay author={blog.author} />
        </div>
        <Link
          to={`/blog/${blog.uid}/`}
          className="FeaturedArticle_content-main"
        >
          <h2 className="FeaturedArticle__content-title">{blog.title}</h2>
          <p
            className="FeaturedArticle__content-short"
            dangerouslySetInnerHTML={{
              __html: blog.summary,
            }}
          ></p>
        </Link>
        <div className="FeaturedArticle__content-footer">
          <div className="FeaturedArticle__actions-left">
            {blog.is_premium && (
              <FontAwesomeIcon
                icon={faStar}
                size="xs"
                color="rgb(255, 192, 23)"
              />
            )}
            <span>{formattedDate}</span>
            <Clap claps={blog.clap_count} />
            <Comment comments={blog.comment_count} />
          </div>
          <div className="FeaturedArticle__actions-right">
            <Mute />
            <Bookmark is_bookmarked={blog.is_bookmarked} article_id={blog.uid} />
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
      <div className="FeaturedArticle__image">
        <img src={blog.image} alt="article" />
      </div>
    </div>
  );
};

export default FeaturedArticle;
