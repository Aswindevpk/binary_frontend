import React from 'react'
import "./Lists.css";
import { Post} from '@assets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis,faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from '@components';

const Lists = ({author}) => {
  return (
    <div className="AuthorDetails__list">
    <div className="AuthorDetails__list-main">
      <div className="AuthorDetails__list-main__author">
        <Avatar username={author.username} image_url={author.img} size={'small'}/>
        <span>{author.username}</span>
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