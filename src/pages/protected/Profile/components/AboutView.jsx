import React from "react";
import './AboutView.css';


const AboutView = ({ about, setEdit }) => {
  return (
    <div className="profile_about_view">
      <p className="profile_about_view__about">{about}</p>
      <div className="profile_about_view-cta">
        <button className="outline_button" onClick={() => setEdit(true)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default AboutView;
