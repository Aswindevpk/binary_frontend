import React from "react";

function CircleLoader() {
  return (
    <div className="h-[50vh] flex justify-center items-center bg-white">
      <div className="w-10 h-10 border-3 border-gray-600 border-t-transparent rounded-full animate-spin-slow"></div>
    </div>
  );
}

export default CircleLoader;