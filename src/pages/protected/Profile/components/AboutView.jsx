import React from "react";
import './AboutView.css';
import {Button} from "@components/ui";


const AboutView = ({ about, setEdit }) => {
  return (
    <div className="profile_about_view">
      <p className="profile_about_view__about">{about}</p>
      <div className="profile_about_view-cta">
        <Button color="black" variant="outlined" className="outline_button" onClick={() => setEdit(true)}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default AboutView;
