import React from "react";
import { Avatar } from "@components/index";
import { Button } from "@components/ui";

function UserDetail() {
  return (
    <div className="user-detail">
      <Avatar username="aswin" size="medium-large" />
      <div className="flex flex-col">
        <span className="text-md font-bold text-primary">Aswin</span>
        <span
          className="text-sm text-secondary overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // Adjust the number of lines to clamp
            WebkitBoxOrient: "vertical",
          }}
        >
          full-stackish developer, late bloomer coder and power google user and
          owner of Parsity.io
        </span>
      </div>
      <Button color="black">Following</Button>
    </div>
  );
}

export default UserDetail;
