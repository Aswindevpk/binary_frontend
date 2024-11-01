import React, { useState } from "react";
import { Link} from "react-router-dom";
import { api } from "@services/api";
import { Avatar } from "..";

function ProfileOverlay({ author }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({ about: null });
  const [loading, setLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(null);

  //fetch data whent he dropdown is hovered over
  const fetchData = async () => {
    setLoading(true);
    try {
      // fetch from multiple endpoints
      const [
        authorAboutResponse,
        authorFollowersResponse,
        isFollowingResponse,
      ] = await Promise.all([
        api.get(`/home/author/${author.id}`),
        api.get(`/home/users/${author.id}/follow-stats/`),
        api.get(`/home/authors/${author.id}/is_following/`),
      ]);
      //Extract data
      const aboutAuthor = authorAboutResponse.data.about;
      const authorFollowersCount = authorFollowersResponse.data.followers_count;
      const isFollowing = isFollowingResponse.data.is_following;

      setData({
        ...data,
        about: aboutAuthor,
        follow_count: authorFollowersCount,
      });
      setIsFollowing(isFollowing)

      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the blogs!", error);
    }
  };

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

  //Handle mouser enter and leave to show/hide the dropdown and fetch data
  const handleMouseEnter = () => {
    setIsOpen(true);
    if(data.about===null){
        fetchData();
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div
      className="dropdown"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Link className="dropdown__author" to={`/author/${author.id}`}>
        <Avatar username={author.username} image_url={author.img} size={'small'}/>
        <span className="para1">
          {author.username}
        </span>
      </Link>
      {isOpen && (
        <div className="profile_overlay">
          <div className="profile_overlay-main">
            <img src={author.img} alt="user" />
            <button
              onClick={data.is_following ? handleUnFollow : handleFollow}
              className={`followUser__main-btn ${
                data.is_following ? "following" : "not-following"
              }`}
            >
              {data.is_following ? "Following" : "Follow"}
            </button>
          </div>
          <div className="profile_overlay-sub">
            <h2>{author.username}</h2>
            <span>{data.follow_count} Followers</span>
          </div>
          <span className="profile_overlay-summery">{data.about}</span>
        </div>
      )}
    </div>
  );
}

export default ProfileOverlay;
