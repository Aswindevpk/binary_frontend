import React, { useState, useRef } from "react";
import { formApi } from "services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function EditProfile({ user, setUser, onClose }) {
  let [value, setValue] = useState(user);
  const fileInputRef = useRef(null); // Create a ref for the file input
  const [imageSrc, setImageSrc] = useState(user.img); // State to hold the image source

  const handleSelectImg = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImg = () => {
    setImageSrc(null); // Clear the image source
    fileInputRef.current.value = null; // Reset the file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
    setValue({ ...value, img: event.target.files[0] });
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    try {
      const formData = new FormData();

      for (const key in value) {
        if (key === "img") {
          formData.append(key, value.img);
        } else {
          formData.append(key, value[key]);
        }
      }

      const response = await formApi.patch("/home/profile/", formData);
      const updatedUser = response.data;
      setUser(updatedUser);
    } catch (error) {
      console.error("There was an error fetching the tags!", error);
    }
  };

  return (
    <div className="modal-main__container">
      <h2 className="modal-main__header">Profile information</h2>
      <div>
        <div className="modal-section">
          <span className="modal-label">Photo</span>
          <div className="modal-input__desc">
            <img
              src={imageSrc }
              alt=""
              width="80px"
              height="80px"
              id="profile_img"
            />
            <div>
              <div>
                <a
                  style={{
                    color: "green",
                    fontSize: "13px",
                    paddingRight: "5%",
                    cursor: "pointer",
                  }}
                  onClick={handleSelectImg}
                >
                  Update
                </a>
                <a
                  style={{ color: "red", fontSize: "13px", cursor: "pointer" }}
                  onClick={handleRemoveImg}
                >
                  Remove
                </a>
              </div>

              <input
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
                type="file"
              />
              <span className="modal-main__para" style={{ width: "70%" }}>
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </span>
            </div>
          </div>
        </div>

        <div className="modal-section">
          <label className="modal-label" htmlFor="name">
            Name*
          </label>
          <input
            className="modal-input"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={value.name}
          />
          <div className="modal-input__desc">
            <span className="modal-main__para"></span>
            <span>
              <span className="modal-input__current-count">
                {value.name.length}
              </span>
              <span className="modal-input__count-limit">/50</span>
            </span>
          </div>
        </div>

        <div className="modal-section">
          <label className="modal-label" htmlFor="pronouns">
            Pronouns
          </label>
          <input
            className="modal-input"
            type="text"
            name="pronouns"
            id="pronouns"
            onChange={handleChange}
            placeholder="Add..."
            value={value.pronouns}
          />
          <div className="modal-input__desc">
            <span className="modal-main__para"></span>
            <span>
              <span className="modal-input__current-count">
                {value.pronouns.length}
              </span>
              <span className="modal-input__count-limit">/4</span>
            </span>
          </div>
        </div>

        <div className="modal-section">
          <label className="modal-label" htmlFor="short_bio">
            Short bio
          </label>
          <textarea
            maxLength={160}
            rows={4}
            className="modal-input"
            type="text"
            id="short_bio"
            name="about"
            onChange={handleChange}
            value={value.about}
            style={{ resize: "none" }}
          />
          <div className="modal-input__desc">
            <span className="modal-main__para"></span>
            <span>
              <span className="modal-input__current-count">
                {value.about.length}
              </span>
              <span className="modal-input__count-limit">/160</span>
            </span>
          </div>
        </div>

        <a className="modal-section modal-input__desc" href="/profile">
          <div style={{ width: "80%" }}>
            <span className="modal-label">About Page</span>
            <p className="modal-main__para">
              Personalize with images and more to paint more of a vivid portrait
              of yourself than your ‘Short bio.’
            </p>
          </div>
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className="icons"
            color="gray"
          />
        </a>
      </div>
      <div className="modal-cta">
        <button className="outline_green_button" onClick={onClose}>
          Cancel
        </button>
        <button className="green_button" onClick={updateProfile}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
