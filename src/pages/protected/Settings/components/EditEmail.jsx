import { ModalInput } from "@components";
import useProfileUpdate from "./useProfileUpdate";
import React, { useState } from "react";
import {Button} from "@components/ui";

function EditEmail({ user, setUser, onClose }) {
  let [status, setStatus] = useState("typing");

  const { formData, setFormData, handleSubmit } = useProfileUpdate(
    setStatus,
    setUser,
    user
  ); // Destructure the hook's return values

  return (
    <div className="sm:w-[540px]">
      <h2 className="text-center mb-3 font-bold text-lg">Email address</h2>

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

      <div className="flex justify-end gap-2">
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
}

const inputs = {
  id: 1,
  name: "email",
  type:"email",
  placeholder: "",
  // errorMessage: "Enter a valid email address.",
  label: "",
  desc:"You can sign into Medium with this email address.",
  required: true,
};

export default EditEmail;
