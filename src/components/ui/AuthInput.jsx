import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  // Destructuring props
  const { label, errorMessage, id, value, error_message, status, ...inputProps } = props;

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col mb-6">
      <label className="font-[var(--font-family)] mb-1 text-[0.8rem] text-[var(--color-primary)] font-semibold">
        {label}
      </label>
      <input
        className={`py-3 px-4 text-[14px] rounded-[6px] border transition-all duration-300 ease-in-out
          ${errorMessage ? 'border-red-500' : 'border-gray-300'}
          ${focused ? 'border-blue-500 shadow-[0_0_5px_rgba(52,152,219,0.3)]' : ''}`}
        {...inputProps}
        onBlur={handleBlur}
        focused={focused.toString()}
        disabled={status === 'submitting'}
      />
      <span className={`mt-2 text-[12px] text-red-500 ${errorMessage ? 'block' : 'hidden'}`}>
        {errorMessage}
      </span>
      {error_message && error_message.map((error, index) => (
        <span key={index} className="mt-2 text-[12px] text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
};

export default FormInput;
