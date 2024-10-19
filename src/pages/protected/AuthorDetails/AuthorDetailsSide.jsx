import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "components/layouts";
import ListItem from "./ListItem";
import { Avatar } from "components";



const AuthorDetailsSide = ({author}) => {

  return (
    <>
      <div className="AuthorDetails__side-section__profile">
        <Avatar username={author.username} image_url={author.img} size={'xlarge'}/>
        <h1 className="AuthorDetails__side-section__profile-h1">
          {author.username}
        </h1>
        <p className="AuthorDetails__side-section__profile-sub">
          12.9K Followers
        </p>
        <span className="AuthorDetails__side-section__profile-para">
          {author.about}
        </span>
        <div className="AuthorDetails__side-section__profile-cta">
          <a className="" href="">
            Follow
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="white"
              className="icons"
            />
          </a>
        </div>
      </div>
      <div className="AuthorDetails__side-section__lists">
        <ListItem />
        <ListItem />
        <ListItem />
        <span>View All</span>
      </div>
      <Footer />
    </>
  );
};

export default AuthorDetailsSide;
