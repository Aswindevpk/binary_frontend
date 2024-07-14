import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import avatar from '../components/assets/profile_pic.png'
import blog_pic from '../components/assets/post.jpg'
import comment from '../components/assets/chat.png'
import clap from '../components/assets/clap.png'
import bookmark from '../components/assets/bookmark-plus.svg'
import './BlogDetails.css'
import CommentBox from '../components/CommentBox/CommentBox';
import api from '../services/api';

const BlogDetails = () => {
  let { user, authTokens } = useContext(AuthContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

  const toggleCommentBoxVisibility = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };

  useEffect(() => {
    const getBlog = async () => {
        try {
          const response = await api.get(`/home/blog/${id}/`);
          const fetchedBlogs = response.data.data.blog;
          setBlog(fetchedBlogs);
      } catch (error) {
          console.error('There was an error fetching the blogs!', error);
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
      <h1 className='blog-header'>{blog.title}</h1>
      <p className='blog-tagline'></p>
      <div className='blog__author'>
        <img className='blog__author-img' src={avatar}></img>
        <div className='blog__author-details'>
          <div className='blog__author-details__top'>
            <span className='blog__author-details__top-user'>{blog.author_id}</span>
            <a className='blog__author-details__top-cta'>Follow</a>
          </div>
          <div className='blog__author-details__bottom'>
            {/* <span className='blog__author-details__bottom'>Published inPractice in Public</span> */}
            <span className='blog__author-details__bottom-date'>Feb 10, 2024</span>
          </div>
        </div>
      </div>
      <div className='blog__actions'>
        <div className='blog__actions-left'>
          <div className='blog__actions-clap'>
            <img src={clap} alt='clap'></img>
            <span></span>
          </div>
          <div className='blog__actions-comment'>
            <a onClick={toggleCommentBoxVisibility} className="commentIcon">
              <img src={comment}></img>
            </a>
            <span>107</span>
          </div>
        </div>
        <div className='blog__actions-right'>
          <img src={bookmark} alt='comment'></img>
        </div>
      </div>
      <div className='blog__content'>
        <img src={blog_pic}></img>
        <p className='blog__content-para'>{blog.content}</p>
      </div>
      <CommentBox toggleVisibility={toggleCommentBoxVisibility} isCommentBoxVisible={isCommentBoxVisible}/>

      {error && <p className="home-error">{error}</p>}
    </div>
  );
};

export default BlogDetails;
