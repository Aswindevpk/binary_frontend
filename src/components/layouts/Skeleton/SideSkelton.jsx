import React from "react";

function SideSkeleton() {
  return (
    <div className="mb-10 flex flex-col gap-6 flex-1 animate-pulse">
      <div className="w-20 h-2.5 bg-gray-200 rounded"></div>
      <div className="flex flex-col gap-3">
        <div className="h-4 w-7/12 bg-gray-200 rounded"></div>
        <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default SideSkeleton;