import React from "react";
import { Avatar } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components";
import ListItem from "./ListItem";

const AuthorDetailsSide = () => {
  return (
    <>
      <div className="AuthorDetails__side-section__profile">
        <img
          className="AuthorDetails__side-section__profile-pic"
          src={Avatar}
          alt=""
        />
        <h1 className="AuthorDetails__side-section__profile-h1">
          Bridget Webber
        </h1>
        <p className="AuthorDetails__side-section__profile-sub">
          12.9K Followers
        </p>
        <span className="AuthorDetails__side-section__profile-para">
          Former counselor. Spiritual growth, compassion, mindfulness,
          creativity, and psychology. Support me at
          https://ko-fi.com/bridgetwebber
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
