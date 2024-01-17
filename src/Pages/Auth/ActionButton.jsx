import React from "react";

const ActionButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="w-4/5 hover:w-full font-[Fahkwang] rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:drop-shadow-lg transform-transition duration-1000"
  >
    {label}
  </button>
);

export default ActionButton;
