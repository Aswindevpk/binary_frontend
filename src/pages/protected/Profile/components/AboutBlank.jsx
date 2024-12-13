import React from "react";
import { Button } from "@components/ui";

const AboutBlank = ({ setEdit }) => {
  return (
    <div className="border-b mb-10 border-neutral">
      <div className="flex flex-col items-center p-10 my-10 bg-gray-100 text-center">
        <h5 className="text-md font-bold pb-4">
          Tell the world about yourself
        </h5>
        <span className="text-xs leading-normal text-secondary max-w-sm pb-5">
          Here’s where you can share more about yourself: your history, work
          experience, accomplishments, interests, dreams, and more. You can even
          add images and use rich text to personalize your bio.
        </span>
        <Button color="black" variant="outlined" onClick={() => setEdit(true)}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default AboutBlank;
