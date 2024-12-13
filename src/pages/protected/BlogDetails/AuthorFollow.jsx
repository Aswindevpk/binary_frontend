import React, { useState, useEffect } from "react";
import { api } from "@services/api";

function AuthorFollow({ author_id }) {
  const [isFollowing, setIsFollowing] = useState(null);

  const followStatus = async () => {
    try {
      const response = await api.get(`/home/authors/${author_id}/is_following/`);
      setIsFollowing(response.data.is_following)
    } catch (error) {
      console.error("There was an error fetching the blogs!", error);
    }
  };

  useEffect(() => {
    followStatus();
  }, []);


  const handleFollow = async () => {
    try {
      const response = await api.post(`accounts/${author_id}/follow/`);
      if (response.status == 201) {
        setIsFollowing(true);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.error("error while following!", error);
    }
  };

  const handleUnFollow = async () => {
    try {
      const response = await api.delete(`accounts/${author_id}/unfollow/`);
      if (response.status == 204) {
        setIsFollowing(false);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
      console.error("error while following!", error.response.data.error);
    }
  };

  return (
    <div className="flex items-center">
      {isFollowing ? (
        <a
        className="text-sm text-primary font-semibold cursor-pointer no-underline"
        onClick={handleUnFollow}
      >
        Following
      </a>
      ) : (
        <a
          className="text-sm text-blue-600 font-semibold cursor-pointer no-underline"
          onClick={handleFollow}
        >
          Follow
        </a>
      )}
    </div>
  );
}

export default AuthorFollow;
