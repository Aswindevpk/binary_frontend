import React, { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import {
  CommentBox,
  Avatar,
  ActionDropDown,
  Bookmark,
  Clap,
  Comment,
  Mute,
} from "components";
import { api } from "services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { calculateReadingTime } from "utils/common";

const BlogDetails = () => {
  let { authTokens } = useContext(AuthContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [readTime, setreadTime] = useState(0);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

  const toggleCommentBoxVisibility = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };


  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await api.get(`/home/article/${id}/`);
        const fetchedBlog = response.data;
        setreadTime(calculateReadingTime(fetchedBlog.content))
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    getBlog();
  }, [id, authTokens]);

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className="blog">
      {blog.is_premium && (
        <div className="blog-members-only">
          <FontAwesomeIcon icon={faStar} color="rgb(255, 192, 23)" size="xs" />
          <span>Member-only story</span>
        </div>
      )}
      <h1 className="blog-header header1">
        <strong>{blog.title}</strong>
      </h1>
      <p className="blog-tagline">{blog.subtitle}</p>
      <div className="blog__author">
        <Avatar
          username={blog.author.username}
          image_url={blog.author.img}
          size={"medium-large"}
        />
        <div className="blog__author-details">
          <div className="blog__author-details__top">
            <span className="blog__author-details__top-user">
              {blog.author.username}
            </span>
            <a className="blog__author-details__top-cta">Follow</a>
          </div>
          <div className="blog__author-details__bottom">
            {/* <span className='blog__author-details__bottom'>Published inPractice in Public</span> */}
            <span className="blog__author-details__bottom-date">
              {`${readTime} min read . Oct 16, 2024`}
            </span>
          </div>
        </div>
      </div>
      <div className="blog__actions">
        <div className="blog__actions-left">
          <Clap claps={blog.clap_count} />
          <a onClick={toggleCommentBoxVisibility} className="commentIcon">
            <Comment comments={blog.comment_count} />
          </a>
        </div>
        <div className="blog__actions-right">
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
      <div>
        <div className="blog__image">
          <img src={blog.image} alt="" />
        </div>
        <div
          className="blog__content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
      <CommentBox
        toggleVisibility={toggleCommentBoxVisibility}
        isCommentBoxVisible={isCommentBoxVisible}
        article_id={blog.uid}
      />
    </div>
  );
};

export default BlogDetails;
