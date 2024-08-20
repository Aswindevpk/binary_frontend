import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import { Avatar, Chat, Clap, Bookmark } from '../../assets';
import './BlogDetails.css'
import { CommentBox } from '../../components';
import api from '../../services/api';

const BlogDetails = () => {
  let { user, authTokens } = useContext(AuthContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

  const toggleCommentBoxVisibility = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };

  const handleClap = async () => {
    try {
      const response = await api.post(`/home/article/${blog.uid}/clap/`)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
      }
      console.error('error while clapping!', error);
    }
  }

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await api.get(`/home/article/${id}/`);
        const fetchedBlog = response.data.data;
        setBlog(fetchedBlog);
      } catch (error) {
        console.error('There was an error fetching the blogs!', error);
      }
    };

    getBlog();
  }, [id, authTokens,]);

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
        <img className='blog__author-img' src={Avatar}></img>
        <div className='blog__author-details'>
          <div className='blog__author-details__top'>
            <span className='blog__author-details__top-user'>{blog.author.username}</span>
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
            <a onClick={handleClap}>
              <img src={Clap} alt='clap'></img>
            </a>
            <span>{blog.clap_count}</span>
          </div>
          <div className='blog__actions-comment'>
            <a onClick={toggleCommentBoxVisibility} className="commentIcon">
              <img src={Chat}></img>
            </a>
            <span>{blog.comment_count}</span>
          </div>
        </div>
        <div className='blog__actions-right'>
          <img src={Bookmark} alt='comment'></img>
        </div>
      </div>
      <div className='blog__content'
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      <CommentBox toggleVisibility={toggleCommentBoxVisibility} isCommentBoxVisible={isCommentBoxVisible} article_id={blog.uid} />

      {error && <p className="home-error">{error}</p>}
    </div>
  );
};

export default BlogDetails;
