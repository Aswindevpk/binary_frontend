import React from "react";

function ModalInput(props) {
  let { label, desc, id, value, status, max_len, ...inputProps } = props;
  return (
    <div className="mb-5">
      <label className="text-gray-900 text-sm leading-4 font-normal pb-2 block">
        {label}
      </label>
      <input
        className="bg-neutral border border-transparent rounded-md w-full text-primary font-semibold text-sm p-2 outline-black"
        {...inputProps}
        disabled={status === "submitting"}
        value={value}
      />
      <div className="flex  justify-between mt-1 ">
        <span className="text-secondary text-xs leading-4 font-normal">{desc}</span>
        <span className="flex items-center">
          <span className="text-xs text-gray-900 leading-4 font-normal">{value.length}</span>
          <span className="text-xs text-gray-500 leading-4 font-normal">/{max_len}</span>
        </span>
      </div>
    </div>
  );
}

export default ModalInput;