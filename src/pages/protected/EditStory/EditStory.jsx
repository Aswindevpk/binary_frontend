import AuthContext from "@context/AuthContext";
import React, { useContext, useState } from "react";
import "../CreateStory/CreateStory.css";
import { BlogEditor, BlogPreview } from "@components";
import useEditStory from "./useEditStory";
import { useParams } from "react-router-dom";


function EditStory() {
  let { user } = useContext(AuthContext);
  const { id } = useParams();

  //status "empty","typing","submitting"
  const [status, setStatus] = useState("loading");

  const { formData, setFormData,showPopup,setShowPopup } = useEditStory(setStatus, id); // Destructure the hook's return values

  if (status === "loading") {
    return <div>loading..</div>;
  }


  return (
    <div className="Editor">
      <div className="Editor_header">
        <p className="Editor_header-save">
          {status === "submitting" ? "Saving..." : `Draft in ${user.username}`}
        </p>
        <button
          className="green_button"
          disabled={status !== "typing"}
          onClick={() => {
            setShowPopup(true);
          }}
        >
          Publish
        </button>
        {showPopup && (
          <BlogPreview
            onClose={() => {
              setShowPopup(false);
            }}
            formData={formData}
            setFormData={setFormData}
            id={id}
          />
        )}
      </div>
      <div className="Editor_content">
        <input
          className="Editor_content-title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
            setStatus("typing");
          }}
        ></input>
        <BlogEditor setFormData={setFormData} formData={formData} />
      </div>
    </div>
  );
}

export default EditStory;
