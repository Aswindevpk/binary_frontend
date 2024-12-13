import React from "react";
import { Avatar } from "@components/index";
import { Link } from "react-router-dom";

function FollowersDetail({ username, user_id, img, about }) {

  return (
    <Link to={`/author/${user_id}`} className="flex items-center justify-between mb-4 ">
      <div className="flex gap-2">
        <Avatar username="aswin" image_url={img}  size="medium-large" />
        <div className="flex flex-col">
          <span className="text-md font-bold text-primary">{username}</span>
          <span
            className="text-sm text-secondary overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1, // Adjust the number of lines to clamp
              WebkitBoxOrient: "vertical",
            }}
          >
            {about}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FollowersDetail;
