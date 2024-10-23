import React, { useState } from "react";
import "./followUser.css";
import { api } from "services/api";
import { Link } from "react-router-dom";
import { Avatar } from "components";


function FollowUser({ author }){
  const [isFollowing, setIsFollowing] = useState(author.is_following);

  const handleFollow = async () => {
    try {
      const response = await api.post(`/home/users/${author.id}/follow/`);
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
      const response = await api.post(`/home/users/${author.id}/unfollow/`);
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
      <Link className="followUser-user" to={`author/${author.id}`}>
        <Avatar username={author.username} image_url={author.img} size={'medium'}/>
        <div className="followUser__main" href="/author">
          <h6 className="followUser__main-name">{author.username}</h6>
          {/* <p className="followUser__main-about">{author.about}</p> */}
          <p className="followUser__main-about">
            {author.about}
          </p>
        </div>
      </Link>
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
