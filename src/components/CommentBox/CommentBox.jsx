import React, { useContext, useEffect, useState } from "react";
import "./CommentBox.css";
import { Close, Avatar } from "../../assets";
import { api } from "../../services/api";
import AuthContext from "../../context/AuthContext";

const CommentBox = ({ toggleVisibility, isCommentBoxVisible, article_id }) => {
  let { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);

  const handleResponse = (event) => {
    setComment(event.target.value);
  };

  const onSubmit = async () => {
    try {
      let response = await api.post(`/home/article/${article_id}/comments/`, {
        content: comment,
      });
      if (response.status == 201) {
        setSubmitCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await api.get(`/home/article/${article_id}/comments/`);
        if (response.status == 200) {
          setComments(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [submitCount]);

  function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return interval === 1 ? "1 year ago" : `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval === 1 ? "1 month ago" : `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval === 1 ? "1 day ago" : `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
    }
    return seconds < 10 ? "Just now" : `${Math.floor(seconds)} seconds ago`;
  }

  return (
    <div
      className={`${
        isCommentBoxVisible ? "commentBox--visible" : "commentBox"
      }`}
    >
      <div className="commentBox_header">
        <h2 className="commentBox_header-head">Responses</h2>
        <img
          className="commentBox_header-closeButton"
          onClick={toggleVisibility}
          src={Close}
          alt=""
        />
      </div>
      <div className="commentBox__form">
        <div className="commentBox__form-user">
          <img className="commentBox__form-user__avatar" src={Avatar} alt="" />
          <p className="commentBox__form-user__name">{user.username}</p>
        </div>
        <div className="commentBox__input">
          <input
            onChange={handleResponse}
            type="text"
            placeholder="What are your thoughts?"
          />
        </div>
        <div className="commentBox__cta">
          <a className="commentBox__cta-cancel">Cancel</a>
          <a onClick={onSubmit} className="commentBox__cta-submit">
            Respond
          </a>
        </div>
      </div>
      <div className="commentBox__comments">
        {comments.map((comment) => (
          <div key={comment.uid} className="commentBox__comment">
            <div className="commentBox__comment-header">
              <img
                className="commentBox__comment-header__avatar"
                src={Avatar}
              />
              <div className="commentBox__comment-header__details">
                <p className="commentBox__comment-header__details-name">
                  {comment.author.username}
                </p>
                <p className="commentBox__comment-header__details-time">
                <small>{timeAgo(comment.created_at)}</small>
                </p>
              </div>
            </div>
            <div className="commentBox__comment-content">
              <p className="commentBox__comment-content__p">
                {comment.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
