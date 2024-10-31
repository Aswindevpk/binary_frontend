import React, { useState } from "react";
import { api } from "@services/api";
import './AboutEdit.css';
import {Button} from "@components/ui";


const AboutEdit = ({ setEdit, setUser, user }) => {
  let [value, setValue] = useState({about:user.about});

  const updateAbout = async () => {
    try {
      const response = await api.patch("/accounts/profile/", value);
      const updatedUser = response.data;
      setUser(updatedUser);
      setEdit(false);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  if (!value) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile_about_edit">
      <textarea
        className="profile_about_edit-textarea"
        value={value.about}
        onChange={(e)=>{
          setValue({ ...value, [e.target.name]: e.target.value });
        }}
        name="about"
        id="profile_about"
        cols="2"
      ></textarea>
      <div className="profile_about_edit-cta">
        <Button color="black" variant="outlined" className="outline_button" onClick={() => setEdit(false)}>
          Cancel
        </Button>
        <Button color="black" variant="filled" className="black_button" onClick={updateAbout}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AboutEdit;
