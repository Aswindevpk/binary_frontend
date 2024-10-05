import React, { useState } from "react";
import { api } from "../../../services/api";
import './AboutEdit.css';




const AboutEdit = ({ setEdit, setUser, user }) => {
  let [value, setValue] = useState({about:user.about});

  const updateAbout = async () => {
    try {
      const response = await api.patch("/home/profile/", value);
      const updatedUser = response.data;
      console.log(response.data)
      setUser(updatedUser);
      setEdit(false);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  if (!value) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile_about_edit">
      <textarea
        className="profile_about_edit-textarea"
        value={value.about}
        onChange={handleChange}
        name="about"
        id="profile_about"
        cols="2"
      ></textarea>
      <div className="profile_about_edit-cta">
        <button className="outline_button" onClick={() => setEdit(false)}>
          Cancel
        </button>
        <button className="black_button" onClick={updateAbout}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AboutEdit;
