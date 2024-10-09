import React from "react";

const Card2 = ({ icons, Title, Count }) => {
  return (
    <div className="flex justify-between items-center bg-[#F8F9FB] gap-4 px-3 py-3 rounded-lg shadow-md">
      <div className="flex justify-start items-center gap-2 ">
        <img src={icons} alt="" className="h-5 w-5" />
        <h1 className="text-[.5rem] font-semibold">{Title}</h1>
      </div>

      <h1>{Count}</h1>
    </div>
  );
};

export default Card2;
