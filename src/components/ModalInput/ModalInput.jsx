import React from "react";
import "./ModalInput.css";

function ModalInput(props) {
  let { label, desc, id, value, status, max_len, ...inputProps } = props;
  return (
    <div className="modal-section">
      <label className="modal-label">
        {label}
      </label>
      <input className="modal-input" {...inputProps} disabled={status === "submitting"} value={value} />
      <div className="modal-input__desc">
        <span className="modal-main__para">{desc}</span>
        <span>
          <span className="modal-input__current-count">
            {value.length}
          </span>
          <span className="modal-input__count-limit">/{max_len}</span>
        </span>
      </div>
    </div>
  );
}

export default ModalInput;
