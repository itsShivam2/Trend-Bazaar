import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = ({ onClick, label }) => (
  <div className="flex items-center justify-center hover:drop-shadow-lg transform-transition duration-500">
    <div className="flex items-center justify-center gap-2 my-2 px-3 py-4 text-white bg-black rounded-md w-4/5 hover:w-full transform-transition duration-1000 hover:cursor-pointer">
      <span className="font-[Fahkwang]">{label}</span>
      <i>
        <FcGoogle />
      </i>
    </div>
  </div>
);

export default GoogleLoginButton;
