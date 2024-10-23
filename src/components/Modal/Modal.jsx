import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX } from "@fortawesome/free-solid-svg-icons";
import './Modal.css';

export default function Modal({ show, onClose, children }){
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          className="modal-content__close icons"
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

