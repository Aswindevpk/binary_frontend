import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Story = ({ article }) => {
  return (
    <div className="Story">
      <Link to={`/edit-story/${article.uid}`}>
        <h2 className="Story-heading">{article.title}</h2>
        <p className="Story-para">{article.subtitle}</p>
      </Link>
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
