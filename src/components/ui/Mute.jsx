import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

function Mute() {

  return (
    <div>
      <FontAwesomeIcon
        icon={faCircleMinus}
        className="icons"
        id="tooltip-showless"
        style={{ fontSize: "16px" }}
        color="gray"
      />
      <Tooltip anchorSelect="#tooltip-showless" content="Show less like this" />
    </div>
  );
}

export default Mute;
