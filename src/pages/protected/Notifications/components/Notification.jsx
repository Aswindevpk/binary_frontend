import { Avatar } from "@components/index";
import React from "react";

function Notification() {
  return (
    <div className="flex gap-2 items-center">
      <Avatar username="aswin" size="medium" />
      <div className="flex flex-col gap-0">
        <p className="text-sm text-primary font-semibold">
          Aswin <span>started following you</span>
        </p>
        <span className="text-xs text-secondary">Jul 24, 2024</span>
      </div>
    </div>
  );
}

export default Notification;
