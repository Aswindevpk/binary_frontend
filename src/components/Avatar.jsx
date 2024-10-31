import React from "react";

function Avatar({ username, image_url = null, size }) {
  // First letter of the username
  const firstLetter = username ? username[0].toUpperCase() : "";

  // Determine size classes based on the size prop
  const sizeClasses = {
    small: "w-5 h-5 text-[14px]",
    medium: "w-8 h-8 text-[14px]",
    "medium-large": "w-12 h-12 text-[14px]",
    large: "w-16 h-16 text-[26px]",
    xlarge: "w-20 h-20 text-[34px]",
  };

  return (
    <div>
      {image_url ? (
        <img
          src={image_url}
          alt="Profile pic"
          className={`rounded-full cursor-pointer ${sizeClasses[size]}`}
        />
      ) : (
        <div
          className={`flex items-center justify-center bg-green-700 text-white font-bold rounded-full cursor-pointer ${sizeClasses[size]}`}
        >
          {firstLetter}
        </div>
      )}
    </div>
  );
}

export default Avatar;
