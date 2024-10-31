import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import React from "react";

function Clap({ claps }) {
  // const handleClap = async () => {
  //   try {
  //     const response = await api.post(`/home/article/${blog.uid}/clap/`);
  //     if (response.status === 201) {
  //       setBlog((prevBlog) => ({
  //         ...prevBlog,
  //         clap_count: prevBlog.clap_count + 1,
  //       }));
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data.message);
  //     }
  //   }
  // };

  return (
    <div className="blog__actions-clap">
      <FontAwesomeIcon
        icon={faHandsClapping}
        className="icons"
        id="tooltip-clap"
        style={{ fontSize: "14px" }}
        color="gray"
      />
      <Tooltip anchorSelect="#tooltip-clap" content={`${claps} claps`} />
      <span>{claps}</span>
    </div>
  );
}

export default Clap;
