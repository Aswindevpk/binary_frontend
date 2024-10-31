// import { faComment as regularComment } from "@fortawesome/react-fontawesome";
import { faComment as solidComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import React, { useState } from "react";

function Comment({ comments }) {
  const [isComment, setIsComment] = useState(false);

  const handleBookmarkToggle = () => {
    setIsComment(!isComment); // Toggle bookmark state
  };
  return (
    <div className="blog__actions-comment">
      <FontAwesomeIcon
        icon={isComment ? solidComment : solidComment}
        className="icons"
        id="tooltip-comment"
        style={{ fontSize: "14px" }}
        color="gray"
      />
      <Tooltip
        anchorSelect="#tooltip-comment"
        content={`${comments} comments`}
      />
      <span>{comments}</span>
    </div>
  );
}

export default Comment;
