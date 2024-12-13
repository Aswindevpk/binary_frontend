import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import useEditProfile from "./useEditProfile";
import { ModalInput } from "@components";
import { Button } from "@components/ui";
import { Link } from "react-router-dom";

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
    <div className="sm:w-[540px]">
      <h2 className="text-center mb-3 font-bold text-lg">
        Profile information
      </h2>
      <div>
        <section className="mb-4">
          <p className="text-sm mb-3 font-medium text-secondary">Photo</p>
          <div className="flex gap-6 justify-between">
            <img
              src={imageSrc}
              alt=""
              width="80px"
              height="80px"
              id="profile_img"
            />
            <div className="flex flex-col justify-between">
              <div className="flex gap-8">
                <a
                  className="text-sm text-success"
                  onClick={() => {
                    fileInputRef.current.click();
                  }}
                >
                  Update
                </a>
                <a
                  className="text-red-700 text-sm"
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
              <p className="text-sm  text-secondary">
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </p>
            </div>
          </div>
        </section>

        <section>
          {inputs.map((input) => (
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
        </section>

        <section className="mb-3">
          <label className="text-sm mb-3" htmlFor="short_bio">
            Short bio
          </label>
          <textarea
            maxLength={160}
            rows={4}
            className="resize-none bg-neutral w-full p-2"
            type="text"
            id="short_bio"
            name="about"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.about}
          />
          <p className="text-right text-xs mt-1">
            {formData.about.length}
            <span className="text-secondary">/160</span>
          </p>
        </section>

        <section className="mb-6">
          <Link className="flex justify-between" to="/profile">
            <div className="w-[80%]">
              <span className="text-sm">About Page</span>
              <p className="text-xs text-secondary">
                Personalize with images and more to paint more of a vivid
                portrait of yourself than your ‘Short bio.’
              </p>
            </div>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="icons"
              color="gray"
            />
          </Link>
        </section>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </div>
    </div>
  );
}

export default EditProfile;
