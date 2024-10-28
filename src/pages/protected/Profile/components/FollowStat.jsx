import AuthContext from "context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import "./About.css";
import { api } from "services/api";
import { Link } from "react-router-dom";

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
        <Link to="/followers/">{follow.followers_count} Followers</Link>
        <span>.</span>
        <Link to="/following/">{follow.following_count} Following</Link>
      </div>
    )
  );
}

export default FollowStat;
