import React from "react";

const AuthInputField = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  icon,
}) => (
  <div className="relative mt-6">
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
      autoComplete="on"
    />
    <label
      htmlFor={id}
      className="font-[Montserrat] flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
    >
      {icon}
      {placeholder}
    </label>
  </div>
);

export default AuthInputField;
