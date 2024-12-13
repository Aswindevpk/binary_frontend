import AuthContext from "@context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { api } from "@services/api";
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
      <div className="text-sm flex gap-2">
        <Link className="text-success font-semibold" to="/followers/">{follow.followers_count} Followers</Link>
        <div className="flex items-center">•</div>
        <Link className="text-success font-semibold" to="/following/">{follow.following_count} Following</Link>
      </div>
    )
  );
}

export default FollowStat;
