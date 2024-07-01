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

const BlogDetails = () => {
  let { user, authTokens } = useContext(AuthContext);
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

  const toggleCommentBoxVisibility = () => {
    setIsCommentBoxVisible(!isCommentBoxVisible);
  };

  //useEffect(() => {
  //   const getBlog = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8000/api/home/blog/${slug}/`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': 'Bearer ' + String(authTokens.access)
  //         }
  //       });

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();

  //       if (data.status) {
  //         setBlog(data.data);
  //       } else {
  //         setError('Failed to fetch blog data');
  //       }
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getBlog();
  // }, [slug, authTokens]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!blog) {
  //   return <div>No blog found</div>;
  // }

  return (
    <div className="blog">
      <h1 className='blog-header'>The 5 paid subscriptions I actually use in 2024 as a software engineer</h1>
      <p className='blog-tagline'>Tools I use that are cheaper than Netflix</p>
      <div className='blog__author'>
        <img className='blog__author-img' src={avatar}></img>
        <div className='blog__author-details'>
          <div className='blog__author-details__top'>
            <span className='blog__author-details__top-user'>Hallel K.</span>
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
            <span>25</span>
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
        <p className='blog__content-para'>I fell for it too.

          I used to feel that my life was just too busy and chaotic; there was too much going on and not enough time for learning or mastering the topics I was interested in.

          To become a true expert, I would need hours and hours of focused study…maybe even 10,000 hours.

          You know what happened when I was confronted with such insane requirements for mastery?

          I was crushed by a gnawing feeling of helplessness.

          All my efforts felt like only tiny drops in a bucket.

          I couldn’t imagine them taking me anywhere.

          Giving up and doing nothing actually felt like a better use of my time.

          And then I came across a quote by Earl Nightingale:

          “One hour per day of study in your chosen field is all it takes. One hour per day of study will put you at the top of your field within three years. Within five years you’ll be a national authority. In seven years, you can be one of the best people in the world at what you do — Earl Nightingale”

          I was skeptical.

          Maybe this was true in Nightingale’s days — back in the 20th century.

          But how about today, when everyone and their mother has access to e-books, audiobooks, podcasts, and expert lectures in their back pocket?

          Is it really true that all that I needed to climb to the top of my field was an hour a day of reading?</p>

      </div>
      <CommentBox toggleVisibility={toggleCommentBoxVisibility} isCommentBoxVisible={isCommentBoxVisible}/>

      {error && <p className="home-error">{error}</p>}
    </div>
  );
};

export default BlogDetails;
