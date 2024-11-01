import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  // Destructuring props
  const { label, errorMessage, id, value, error_message, status, ...inputProps } = props;

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="font-family mb-1 text-[0.8rem] text-primary font-semibold">
        {label}
      </label>
      <input
        className={`peer ${focused ? 'invalid:border-red-500': ""} focus:border-primary outline-none py-3 px-4 text-[14px] rounded-[6px] border transition-all duration-300 ease-in-out`}
        {...inputProps}
        onBlur={handleBlur}
        focused={focused}
        disabled={status === 'submitting'}
      />
      <span className={`hidden ${focused ? 'peer-invalid:block':''} mt-2 text-[12px] text-red-500`}>
        {errorMessage}
      </span>
      {error_message && error_message.map((error, index) => (
        <span key={index} className="mt-1 text-[12px] text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
};

export default FormInput;
