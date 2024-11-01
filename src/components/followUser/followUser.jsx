import React, { useState } from "react";
import { api } from "@services/api";
import { Link } from "react-router-dom";
import { Avatar } from "@components";
import { Button } from "@components/ui";

function FollowUser({ author }) {
  const [isFollowing, setIsFollowing] = useState(author.is_following);

  const handleFollow = async () => {
    try {
      const response = await api.post(`accounts/${author.id}/follow/`);
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
      const response = await api.delete(`accounts/${author.id}/unfollow/`);
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
    <div className="flex justify-between mb-2">
      <Link className="flex gap-2" to={`author/${author.id}`}>
        <Avatar
          username={author.username}
          image_url={author.img}
          size={"medium"}
        />
        <div>
          <p className="text-md font-extrabold">{author.username}</p>
          <span className="text-sm">{author.about ? author.about : " "}</span>
        </div>
      </Link>
      {isFollowing ? (
        <Button
          size="sm"
          color="black"
          variant="outlined"
          onClick={handleUnFollow}
        >
          Following
        </Button>
      ) : (
        <Button
          size="sm"
          color="black"
          variant="filled"
          onClick={handleFollow}
        >
          Follow
        </Button>
      )}
    </div>
  );
}

export default FollowUser;
