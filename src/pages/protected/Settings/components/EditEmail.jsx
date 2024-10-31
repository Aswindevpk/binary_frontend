import ModalInput from "@components/ModalInput/ModalInput";
import useProfileUpdate from "./useProfileUpdate";
import React, { useState } from "react";

function EditEmail({ user, setUser, onClose }) {
  let [status, setStatus] = useState("typing");

  const { formData, setFormData, handleSubmit } = useProfileUpdate(
    setStatus,
    setUser,
    user
  ); // Destructure the hook's return values

  return (
    <div className="modal-main__container">
      <h2 className="modal-main__header">Email address</h2>

      <ModalInput
        key={inputs.id}
        {...inputs}
        value={formData[inputs.name]}
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        status={status}
        max_len="30"
      />

      <div className="modal-cta">
        <button className="outline_green_button" onClick={onClose}>
          Cancel
        </button>
        <button className="green_button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

const inputs = {
  id: 1,
  name: "email",
  type:"email",
  placeholder: "",
  // errorMessage: "Enter a valid email address.",
  label: "",
  desc:"You can sign into Medium with this email address.",
  required: true,
};

export default EditEmail;
