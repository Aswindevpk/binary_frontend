import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";


function EditEmail({ user,setUser, onClose }) {
  let [value, setValue] = useState(user.email);

  const handleChange = (e) =>{
    setValue(e.target.value);
  }

  const updateEmail = async () => {
    try {
      const response = await api.patch("/home/profile/" ,{
        email:value,
      });
      const updatedEmail = response.data.email;
      setUser({ ...user, email:updatedEmail})

    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  return (
    <div className="modal-main__container">
      <h2 className="modal-main__header">Email address</h2>
      <input className="modal-input" type="email" value={value} onChange={handleChange}/>
      <span className="modal-main__para">
        You can sign into Medium with this email address.
      </span>
      <div className="modal-cta">
        <button className="outline_green_button" onClick={onClose} >Cancel</button>
        <button className="green_button" onClick={updateEmail}>Save</button>
      </div>
    </div>
  );
}

export default EditEmail;
