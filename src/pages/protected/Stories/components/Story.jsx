import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Story = () => {
  return (
    <div className="Story">
      <h2 className="Story-heading">heading</h2>
      <p className="Story-para">paragraph</p>
      <div className="Story-footer">
        <span>Last edited 5 days ago</span>
        <span>.</span>
        <span>1 min read (2 words) so far</span>
        <FontAwesomeIcon icon={faChevronDown} className="icons" color="gray" />
      </div>
    </div>
  );
};

export default Story;
