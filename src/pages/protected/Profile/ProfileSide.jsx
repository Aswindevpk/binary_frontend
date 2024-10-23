import React, { useEffect, useState } from "react";
import { Footer } from "components/layouts";
import "./Profile.css";
import { Link } from "react-router-dom";
import { Avatar } from "components";
import { api } from "services/api";
import { toast } from "sonner";


const ProfileSide = ({ user }) => {
  const [follow, setFollow] = useState(null);

  const fetchfollow = async () => {
    try {
      const response = await api.get(
        `accounts/${user.id}/follow-stats/`
      );
      setFollow(response.data);
    } catch (error) {
      toast.error('error')
    }
  };

  useEffect(() => {
    fetchfollow();
  }, []);

  return (
    <>
      <div className="profile-side">
        <Avatar username={user.username} image_url={user.img} size={"xlarge"} />
        <h3 className="header3 profile-side__username">{user.username}</h3>
        {follow && <p className="para1 profile-side__followers">{follow.followers_count} Follower</p>}
        <div className="profile-side__cta">
          <Link to="/settings" className="para2 para-cta ">
            Edit profile
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileSide;
