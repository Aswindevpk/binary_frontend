import React from "react";
import {Button} from "@components/ui";


const AboutView = ({ about, setEdit }) => {
  return (
    <div className="flex flex-col pb-10 my-10 border-b border-neutral">
      <p className="text-xl font-serif">{about}</p>
      <div className="flex justify-end gap-2 mt-4">
        <Button color="black" variant="outlined" onClick={() => setEdit(true)}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default AboutView;
