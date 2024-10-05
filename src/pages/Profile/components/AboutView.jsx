import React from "react";
import './AboutView.css';


const AboutView = ({ about, setEdit }) => {
  return (
    <div className="profile_about_view">
      <p>{about}</p>
      <div className="profile_about_view-cta">
        <button className="outline_button" onClick={() => setEdit(true)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default AboutView;
