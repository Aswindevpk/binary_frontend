import AuthContext from "@context/AuthContext";
import React, { useContext, useState } from "react";
import { BlogEditor, BlogPreview } from "@components";
import useEditStory from "./useEditStory";
import { useParams } from "react-router-dom";
import { Button } from "@components/ui";

function EditStory() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const { formData, setFormData, showPopup, setShowPopup } = useEditStory(
    setStatus,
    id
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto p-5 sm:w-10/12">
      <div className="flex justify-between items-center mb-5">
        <p className="text-gray-500 text-base">
          {status === "submitting" ? "Saving..." : `Draft in ${user.username}`}
        </p>
        <Button
          size="sm"
          variant="filled"
          color="green"
          disabled={status !== "typing"}
          onClick={() => setShowPopup(true)}
          className="text-white bg-green-600 hover:bg-green-400"
        >
          Publish
        </Button>
        {showPopup && (
          <BlogPreview
            onClose={() => setShowPopup(false)}
            formData={formData}
            setFormData={setFormData}
            id={id}
          />
        )}
      </div>
      <div className="flex flex-col">
        <input
          className="text-2xl p-2 mb-5 border-none w-full focus:outline-none"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
            setStatus("typing");
          }}
        />
        <BlogEditor setFormData={setFormData} formData={formData} />
      </div>
    </div>
  );
}

export default EditStory;
