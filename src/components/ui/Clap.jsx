import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { api } from "@services/api";
import React from "react";

function Clap({ claps, blog_id = null ,clapIncrement}) {

  const handleClap = async () => {
    try {
      const response = await api.post(`/home/article/${blog_id}/clap/`);
      if (response.status === 201) {
        clapIncrement()
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div className="outline-none">
      <FontAwesomeIcon
        onClick={handleClap}
        icon={faHandsClapping}
        className="icons text-secondary cursor-pointer"
        id="tooltip-clap"
      />
      {/* <Tooltip anchorSelect="#tooltip-clap" content={`${claps} claps`} /> */}
      <span className="text-xs ml-1">{claps}</span>
    </div>
  );
}

export default Clap;
