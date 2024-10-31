import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import useEditProfile from "./useEditProfile";
import { ModalInput } from "@components";


function EditProfile({ user, setUser, onClose }) {
  let [status, setStatus] = useState("typing");

  const { formData, setFormData, handleSubmit } = useEditProfile(
    setStatus,
    setUser,
    user
  ); // Destructure the hook's return values

  // State to hold the image source
  const [imageSrc, setImageSrc] = useState(user.img);

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
    setFormData({ ...formData, img: event.target.files[0] });
  };
  
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "",
      // errorMessage: "Enter a valid email address.",
      label: "Name*",
      desc: "",
      required: true,
    },
    {
      id: 2,
      name: "pronouns",
      type: "text",
      placeholder: "",
      // errorMessage: "Enter a valid email address.",
      label: "Pronouns",
      desc: "",
      required: true,
    },
  ];

  return (
    <div className="modal-main__container">
      <h2 className="modal-main__header">Profile information</h2>
      <div>
        <div className="modal-section">
          <span className="modal-label">Photo</span>
          <div className="modal-input__desc">
            <img
              src={imageSrc}
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
                  onClick={() => {
                    fileInputRef.current.click();
                  }}
                >
                  Update
                </a>
                <a
                  style={{ color: "red", fontSize: "13px", cursor: "pointer" }}
                  onClick={() => {
                    setImageSrc(null); // Clear the image source
                    fileInputRef.current.value = null; // Reset the file input
                  }}
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


        {inputs.map((input)=>(
          //render both name and pronouns field
          <ModalInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            status={status}
            max_len="10"
          />
        ))}

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
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.about}
            style={{ resize: "none" }}
          />
          <div className="modal-input__desc">
            <span className="modal-main__para"></span>
            <span>
              <span className="modal-input__current-count">
                {formData.about.length}
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
        <button className="green_button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
