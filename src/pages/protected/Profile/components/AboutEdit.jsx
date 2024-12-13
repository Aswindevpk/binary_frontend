import React, { useState } from "react";
import { api } from "@services/api";
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
    <div className="flex flex-col pb-10 my-10 border-b border-neutral">
      <textarea
        className="w-full h-24 text-xl font-serif border-none resize-none overflow-auto focus:outline-none"
        value={value.about}
        onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}
        name="about"
        id="profile_about"
        cols="2"
      ></textarea>
      <div className="flex justify-end gap-2 mt-4">
        <Button color="black" variant="outlined" onClick={() => setEdit(false)}>
          Cancel
        </Button>
        <Button color="black" variant="filled" onClick={updateAbout}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AboutEdit;
