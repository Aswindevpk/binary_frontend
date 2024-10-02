import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { FilterMenu, Footer } from "../../components";
import "./Home.css";
import { Avatar, Post } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const filters = [
  { name: "home", uid: "1" },
  { name: "lists", uid: "2" },
  { name: "about", uid: "3" },
];

const Profile = () => {
  let navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState({ name: "home", uid: "1" });

  return (
    <div className="profile">
      <div className="profile__main">
        <h2 className="profile__main-header">Appuspk</h2>
        <div className="profile__main-filterMenu">
          <FilterMenu
            filters={filters}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        {activeFilter && activeFilter.name == "about" && <About />}
        {activeFilter && activeFilter.name == "home" && <Home />}
      </div>
      <div className="profile__sub">
        <div>
          <img className="profile__sub-avatar" src={Avatar}></img>
          <h5 className="profile__sub-username">Appuspk</h5>
          <a className="profile__sub-cta">Edit profile</a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const About = () => {
  const [about, setAbout] = useState("about profile");
  const [edit, setEdit] = useState(false);

  return (
    <div className="profile_about">
      {about && edit === false && <AboutView about={about} setEdit={setEdit} />}
      {edit && (
        <AboutEdit setEdit={setEdit} setAbout={setAbout} about={about} />
      )}
      {about == null ||
        (about === "" && edit === false && <AboutBlank setEdit={setEdit} />)}
      <div className="profile_about-bottom">
        <a href="">1 Follower</a>
        <span>.</span>
        <a href="">2 Following</a>
      </div>
    </div>
  );
};

const AboutEdit = ({ setEdit, setAbout, about }) => {
  return (
    <div className="profile_about_edit">
      <textarea
        className="profile_about_edit-textarea"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        name="profile_about"
        id="profile_about"
        cols="2"
      ></textarea>
      <div className="profile_about_edit-cta">
        <button
          className="profile_about_edit-cta__cancel"
          onClick={() => setEdit(false)}
        >
          Cancel
        </button>
        <button
          className="profile_about_edit-cta__save"
          onClick={() => setEdit(false)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const AboutView = ({ about, setEdit }) => {
  return (
    <div className="profile_about_view">
      <p>{about}</p>
      <div className="profile_about_view-cta">
        <button onClick={() => setEdit(true)}>Edit</button>
      </div>
    </div>
  );
};

const AboutBlank = ({ setEdit }) => {
  return (
    <div className="profile_about_blank">
      <h5 className="profile_about_blank-header">
        Tell the world about yourself
      </h5>
      <p>
        Here’s where you can share more about yourself: your history, work
        experience, accomplishments, interests, dreams, and more. You can even
        add images and use rich text to personalize your bio.
      </p>
      <button onClick={() => setEdit(true)}>Get Started</button>
    </div>
  );
};

function Home() {
  return (
    <div className="profile_home">
      <HomeBlog />
      <HomeBlog />
    </div>
  );
}

function HomeBlog() {
  return (
      <div className="profile_homeBlog-content">
        <div className="profile_homeBlog-content__left">
        <div className="profile_homeBlog-author">
          <img className="profile_homeBlog-author__pic" src={Avatar} alt="" />
          <p className="profile_homeBlog-author__name">Appuspk</p>
        </div>
          <div className="profile_homeBlog-body">
            <h4 className="profile_homeBlog-body__title">new titile</h4>
            <p className="profile_homeBlog-body__para">adsfdsf</p>
          </div>
          <div className="profile_homeBlog-footer">
            <div className="profile_homeBlog-footer__date">22h ago</div>
            <div className="profile_homeBlog-footer__icon">
              <FontAwesomeIcon icon={faBookmark} className="icons" color="gray"/>
              <FontAwesomeIcon icon={faEllipsis} className="icons" color="gray"/>
            </div>
          </div>
        </div>
        <div className="profile_homeBlog-content__pic">
          <img src={Post} alt="" />
        </div>
      </div>
  );
}

export default Profile;
