import React from "react";
import { Link } from "react-router-dom";

const ActionButton = ({ to, onClick, icon: Icon, className, label }) => {
  return to ? (
    <Link
      to={to}
      className={`p-2 rounded-md border-[#009444] border  flex items-center gap-2 text-[#009444] hover:bg-[#009444] hover:text-white ${className}`}
    >
      {Icon && <Icon className="font-semibold text-[1rem]" />}{" "}
      {/* If an icon is passed, render it */}
      {/* {label} */}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`p-2 border rounded-md border-red-500 text-red-500  hover:bg-red-500 hover:text-white ${className}`}
    >
      {Icon && <Icon className="" />}
      {/* If an icon is passed, render it */}
      {/* {label} */}
    </button>
  );
};

export default ActionButton;
