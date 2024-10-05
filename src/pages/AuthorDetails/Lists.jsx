import React from 'react'
import "./Lists.css";
import { Avatar ,Post} from '../../assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis,faBookmark } from "@fortawesome/free-solid-svg-icons";

const Lists = () => {
  return (
    <div className="AuthorDetails__list">
    <div className="AuthorDetails__list-main">
      <div className="AuthorDetails__list-main__author">
        <img src={Avatar} alt="" />
        <span>Appuspk</span>
      </div>
      <h1>Reading List</h1>
      <div className="AuthorDetails__list-main__sub">
        <span>31 stories</span>
        <div className="AuthorDetails__list-main__sub-cta">
          <FontAwesomeIcon
            icon={faBookmark}
            className="icons"
            color="gray"
            style={{ fontSize: "16px" }}
          />
          <FontAwesomeIcon
            icon={faEllipsis}
            className="icons"
            color="gray"
            style={{ fontSize: "16px" }}
          />
        </div>
      </div>
    </div>
    <div className="AuthorDetails__list-sub">
      <img src={Post} alt="" />
    </div>
  </div>
  )
}

export default Lists