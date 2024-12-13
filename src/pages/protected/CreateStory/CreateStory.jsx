import AuthContext from "@context/AuthContext";
import React, { useContext, useState } from "react";
import { BlogEditor } from "@components";
import useCreateStory from "./useCreateStory";
import { Button } from "@components/ui";


function CreateStory() {
  let { user } = useContext(AuthContext);
  const [status, setStatus] = useState("empty");
  const { formData, setFormData } = useCreateStory(setStatus);

  return (
    <div className="w-full mx-auto p-5 sm:w-10/12">
      <div className="flex justify-between items-center mb-5">
        <p className="text-secondary text-base">
          {status === "submitting" ? "Saving..." : `Draft in ${user.username}`}
        </p>
        <Button
          size="sm"
          color="green"
          variant="filled"
          disabled={status === "empty"}
          className="text-white bg-green-600 hover:bg-green-400"
        >
          Publish
        </Button>
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

export default CreateStory;