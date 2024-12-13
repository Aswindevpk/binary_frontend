import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ show, onClose, children }){
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center z-50 overflow-auto pt-8 sm:items-center" onClick={onClose}>
      <div className="flex flex-col rounded-md bg-white relative px-5 my-auto py-5 w-full sm:w-fit m-3 h-fit" onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          className="absolute top-5 text-secondary right-5 cursor-pointer icons"
          onClick={onClose}
          icon={faX}
        />
        {/* Pass modal attributes to children */}
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { onClose });
        })}
      </div>
    </div>
  );
};

