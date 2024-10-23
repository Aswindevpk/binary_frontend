import AuthContext from "context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import "./About.css";
import { api } from "services/api";

function FollowStat() {
  const { user } = useContext(AuthContext);
  const [follow, setFollow] = useState(null);

  const fetchfollow = async () => {
    try {
      const response = await api.get(
        `accounts/${user.user_id}/follow-stats/`
      );
      setFollow(response.data);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  useEffect(() => {
    fetchfollow();
  }, []);

  return (
    follow && (
      <div className="profile_about-bottom">
        <a href="#">{follow.followers_count} Follower</a>
        <span>.</span>
        <a href="#">{follow.following_count} Following</a>
      </div>
    )
  );
}

export default FollowStat;
