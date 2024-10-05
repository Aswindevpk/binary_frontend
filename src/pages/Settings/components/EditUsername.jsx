import React, { useState } from "react";
import { api } from "../../../services/api";
import "./EditUsername.css";

function EditUsername({ user, setUser, onClose }) {
  let [value, setValue] = useState(user);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox status
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const updateUsername = async () => {
    try {
      const response = await api.patch("/home/profile/", value);
      const updatedUser = response.data;
      console.log(updatedUser)
      setUser(updatedUser);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };
  return (
    <div className="modal-main__container">
      <div className="modal-section">
        <h2 className="modal-main__header">Username and subdomain</h2>
        <label htmlFor="username" className="modal-label">
          Username
        </label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              position: "absolute",
              marginLeft: "6px",
              fontSize: "12px",
              color: "gray",
            }}
          >
            @
          </span>
          <input
            style={{ paddingLeft: "17px" }}
            className="modal-input"
            type="username"
            name="username"
            id="username"
            onChange={handleChange}
            value={value.username}
          />
        </div>
        <div className="modal-input__desc">
          <span className="modal-main__para">
            medium.com/{`@${value.username}`}
          </span>
          <span>
            <span className="modal-input__current-count">
              {value.username.length}
            </span>
            <span className="modal-input__count-limit">/30</span>
          </span>
        </div>
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
          <input checked={isChecked} onChange={handleCheckboxChange} type="checkbox" />
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
            value={`@${value.username}.medium.com`}
            disabled
          />
        </div>
      )}

      <div className="modal-cta">
        <button className="outline_green_button" onClick={onClose}>
          Cancel
        </button>
        <button className="green_button" onClick={updateUsername}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditUsername;
