import React from "react";

const CardFirst = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={` bg-white rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105 p-2 ${bgColor}`}
    >
      <div className=" flex justify-end pb-2">
        <img src={icon} alt="" />
      </div>

      <div className="flex flex-col  justify-start pb-3">
        <div className="text-[.7rem] font-semibold text-gray-600">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
};

export default CardFirst;
