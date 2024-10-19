import React from "react";
import "./Avatar.css";

function Avatar({ username, image_url=null , size }) {
  //first letter of the username
  const firstletter = username ? username[0].toUpperCase() : "";

  return (
    <>
      {image_url ? (
        <img src={image_url} alt="Profile_pic" className={`avatar avatar--${size}`} />
      ) : (
        <div className={`default__avatar avatar--${size}`} >{firstletter}</div>
      )}
    </>
  );
}

export default Avatar;
