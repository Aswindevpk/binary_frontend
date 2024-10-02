import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { Avatar, Chat, Clap, Bookmark } from "../../assets";
import "./BlogDetails.css";
import { CommentBox } from "../../components";
import { api } from "../../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping,faComment,faBookmark,faStar } from '@fortawesome/free-solid-svg-icons'; 



const BlogDetails = () => {
  let { user, authTokens } = useContext(AuthContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  let blog_img = blog ? `http://localhost:8000${blog.image}` : "";

  const toggleCommentBoxVisibility = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };

  const handleBookmark = async () => {
    try {
      const response = await api.post(`/home/article/${blog.uid}/bookmark/`);
      if (response.status === 201) {
        console.log('bookmarked successfully.')
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };

  const handleClap = async () => {
    try {
      const response = await api.post(`/home/article/${blog.uid}/clap/`);
      if (response.status === 201) {
        setBlog((prevBlog) => ({
          ...prevBlog,
          clap_count: prevBlog.clap_count + 1,
        }));
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await api.get(`/home/article/${id}/`);
        const fetchedBlog = response.data.data;
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    getBlog();
  }, [id, authTokens]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className="blog">
      {blog.is_premium && <div className="blog-members-only"><FontAwesomeIcon icon={faStar} color="rgb(255, 192, 23)" size="xs" /><span>Member-only story</span></div>}
      <h1 className="blog-header">{blog.title}</h1>
      <p className="blog-tagline">{blog.subtitle}</p>
      <div className="blog__author">
        <img className="blog__author-img" src={Avatar}></img>
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
              Feb 10, 2024
            </span>
          </div>
        </div>
      </div>
      <div className="blog__actions">
        <div className="blog__actions-left">
          <div className="blog__actions-clap">
            <a onClick={handleClap}>
              <FontAwesomeIcon icon={faHandsClapping} className="icons"/>
            </a>
            <span>{blog.clap_count}</span>
          </div>
          <div className="blog__actions-comment">
            <a onClick={toggleCommentBoxVisibility} className="commentIcon">
              <FontAwesomeIcon icon={faComment} className="icons"/>
            </a>
            <span>{blog.comment_count}</span>
          </div>
        </div>
        <div className="blog__actions-right">
          <a className="blog__actions-bookmark" onClick={handleBookmark}>
            <FontAwesomeIcon icon={faBookmark} className="icons"/>
          </a>
        </div>
      </div>
      <div>
        <div className="blog__image">
          <img src={blog_img} alt="" />
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

      {error && <p className="home-error">{error}</p>}
    </div>
  );
};

export default BlogDetails;
