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
    <div className="outline-none focus:outline-none">
      <FontAwesomeIcon
        icon={isComment ? solidComment : solidComment}
        className="icons outline-none focus:outline-none text-secondary"
        id="tooltip-comment"
      />
      {/* <Tooltip
        anchorSelect="#tooltip-comment"
        content={`${comments} comments`}
      /> */}
      <span className="text-xs ml-1">{comments}</span>
    </div>
  );
}

export default Comment;
