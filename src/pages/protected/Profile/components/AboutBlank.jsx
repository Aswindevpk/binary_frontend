import React from "react";
import './AboutBlank.css';


const AboutBlank = ({ setEdit }) => {
    return (
      <div className="profile_about_blank">
        <h5 className="profile_about_blank-header">
          Tell the world about yourself
        </h5>
        <span className="profile_about_blank-para">
          Here’s where you can share more about yourself: your history, work
          experience, accomplishments, interests, dreams, and more. You can even
          add images and use rich text to personalize your bio.
        </span>
        <button className="outline_button" onClick={() => setEdit(true)}>Get Started</button>
      </div>
    );
};

export default AboutBlank;