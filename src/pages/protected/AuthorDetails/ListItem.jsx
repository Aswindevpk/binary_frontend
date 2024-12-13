import React from "react";
import { Cover } from "@assets";

const ListItem = () => {
  return (
    <div className="flex gap-3">
      <img className="w-[94px] h-[48px]" src={Cover} alt="" />
      <div className="flex flex-col gap-0">
        <h1 className="text-sm font-semibold">Writing</h1>
        <div className="flex items-center gap-1 text-secondary">
          <span className="text-xs">31 stories</span>
          <span className="text-xs">•</span>
          <span className="text-xs">1 save</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
