import React from "react";

function ProductFormInput({ name, label, placeholder, value, onChange }) {
  return (
    <div className="relative mt-6">
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
        autoComplete="off"
      />
      <label
        htmlFor={name}
        className="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
      >
        {label}
      </label>
    </div>
  );
}

export default ProductFormInput;
