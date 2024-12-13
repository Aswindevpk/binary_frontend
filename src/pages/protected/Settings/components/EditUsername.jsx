import React, { useState } from "react";
import { ModalInput } from "@components";
import useProfileUpdate from "./useProfileUpdate";
import {Button} from "@components/ui";

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
    <div className="sm:w-[540px]">
      <div className="">
        <h2 className="text-center mb-3 font-bold text-lg">
          Username and subdomain
        </h2>
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
      <div className="">
        <div className="flex justify-between items-start">
          <div className="w-[80%]">
            <p className="font-semibold text-sm">Enable Medium subdomain URL</p>
            <p className="text-xs my-2 text-secondary">
              Redirect medium.com/@username to username.medium.com. Note: a new
              profile page on a subdomain may take longer to rank in Google
              search.
            </p>
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
      <div className="flex gap-1 text-sm font-medium text-secondary mb-6">
        <a href="" className=" underline">
          Learn more
        </a>
        <span className="text-sm">about subdomain URLs.</span>
      </div>
      {isChecked && (
        <div className="flex flex-col mb-6" id="subdomain-input">
          <label className="text-sm mb-2">Subdomain</label>
          <input
            className="text-secondary text-sm bg-neutral p-2 rounded-md"
            type="text"
            value={`@${formData.username}.medium.com`}
            disabled
          />
        </div>
      )}
      <div className="flex justify-end gap-2">
        <Button variant="outlined"  onClick={onClose}>
          Cancel
        </Button>
        <Button
          disabled={status === "submitting"}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default EditUsername;
