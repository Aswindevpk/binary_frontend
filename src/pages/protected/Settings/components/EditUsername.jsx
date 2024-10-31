import React, { useState } from "react";
import ModalInput from "@components/ModalInput/ModalInput";
import useProfileUpdate from "./useProfileUpdate";

function EditUsername({ user, setUser, onClose }) {
  const [isChecked, setIsChecked] = useState(false);

  let [status, setStatus] = useState("typing");
  const { formData, setFormData, handleSubmit } = useProfileUpdate(
    setStatus,
    setUser,
    user
  ); 

  const inputs = {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "@",
    // errorMessage: "Enter a valid username.",
    label: "Username",
    desc: "medium.com/" + `@${formData.username}`,
    required: true,
  };

  return (
    <div className="modal-main__container">
      <div className="modal-section">
        <h2 className="modal-main__header">Username and subdomain</h2>
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
      </div>
      <div className="modal-section">
        <div className="modal-input__desc">
          <div className="test" style={{ width: "80%" }}>
            <span className="modal-label">Enable Medium subdomain URL</span>
            <span className="modal-main__para">
              Redirect medium.com/@username to username.medium.com. Note: a new
              profile page on a subdomain may take longer to rank in Google
              search.
            </span>
          </div>
          <input
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked); // Toggle checkbox status
            }}
            type="checkbox"
          />
        </div>
      </div>
      <div className="modal-section">
        <p className="modal-main__para2">
          <a href="">Learn more</a>
          about subdomain URLs.
        </p>
      </div>
      {isChecked && (
        <div className="modal-section" id="subdomain-input">
          <label className="modal-label">Subdomain</label>
          <input
            style={{ color: "var(--color-secondary)" }}
            className="modal-input"
            type="text"
            value={`@${formData.username}.medium.com`}
            disabled
          />
        </div>
      )}
      <div className="modal-cta">
        <button className="outline_green_button" onClick={onClose}>
          Cancel
        </button>
        <button
          className="green_button"
          disabled={status === "submitting"}
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditUsername;
