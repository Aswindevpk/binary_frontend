import React from "react";

function HomeSkeleton() {
  return (
    <div className="flex flex-row justify-between gap-8 my-8 rounded-lg w-full">
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-20 h-2 bg-gray-200 animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-4 w-7/12 bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-9/12 bg-gray-200 animate-pulse"></div>
        </div>
      </div>
      <div className="w-44 h-32 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
}

export default HomeSkeleton;