import React, { useState } from "react";
import "./followUser.css";
import { Avatar } from "../../assets";
import { api } from "../../services/api";

const FollowUser = ({ author }) => {
  const [isFollowing, setIsFollowing] = useState(author.is_following);

  const handleFollow = async () => {
    try {
      const response = await api.post(`/home/follow/${author.id}/`);
      if (response.status == 201) {
        setIsFollowing(true);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
      }
      console.error("error while following!", error);
    }
  };

  const handleUnFollow = async () => {
    try {
      const response = await api.post(`/home/unfollow/${author.id}/`);
      if (response.status == 202) {
        setIsFollowing(false);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
      }
      console.error("error while following!", error.response.data.error);
    }
  };

  return (
    <div className="followUser">
      <a href="/author">
        <img className="followUser__img" src={Avatar} alt="img"></img>
      </a>
      <a className="followUser__main" href="/author">
        <h6 className="followUser__main-name">{author.username}</h6>
        {/* <p className="followUser__main-about">{author.about}</p> */}
        <p className="followUser__main-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          aliquam magnam incidunt recusandae blanditiis qui ipsum nobis quas.
          Labore adipisci architecto facilis, laborum cumque iusto non
          laboriosam illo atque nisi.
        </p>
      </a>
      <button
        onClick={isFollowing ? handleUnFollow : handleFollow}
        className={`followUser__main-btn ${
          isFollowing ? "following" : "not-following"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default FollowUser;
