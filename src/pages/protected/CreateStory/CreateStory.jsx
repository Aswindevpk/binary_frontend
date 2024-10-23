import AuthContext from "context/AuthContext";
import React, { useContext,useState } from "react";
import "./CreateStory.css";
import { BlogEditor } from "components";
import useCreateStory from "./useCreateStory";

function CreateStory() {
  let { user } = useContext(AuthContext);
  //status "empty","typing","submitting"
  const [status, setStatus] = useState("empty");

  const { formData, setFormData } = useCreateStory(setStatus); // Destructure the hook's return values

  return (
    <div className="Editor">
      <div className="Editor_header">
        <p className="Editor_header-save">
          {status === "submitting" ? "Saving..." : `Draft in ${user.username}`}
        </p>
        <button className="green_button" disabled={status === "empty"}>
          Publish
        </button>
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

export default CreateStory;
