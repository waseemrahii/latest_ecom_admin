import React from "react";
import { FaStore } from "react-icons/fa";

const Adminwallet = () => {
  return (
    <div className="bg-white border rounded-lg border-gray-200 mt-2 mx-5  grid grid-cols-3 px-5 py-10 gap-5">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md   row-span-2">
        <FaStore />
        <h1 className="text-xl text-gray-400">$2,755.02</h1>
        <p className="text-sm">In-House Earning</p>
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div className="">
          <h1>$12,755.02</h1>
          <p>Commission Earned</p>
        </div>
        <FaStore />
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div className="">
          <h1>$12,755.02</h1>
          <p>Commission Earned</p>
        </div>
        <FaStore />
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div className="">
          <h1>$12,755.02</h1>
          <p>Commission Earned</p>
        </div>
        <FaStore />
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md p-2">
        <div className="">
          <h1>$12,755.02</h1>
          <p>Commission Earned</p>
        </div>
        <FaStore />
      </div>
    </div>
  );
};

export default Adminwallet;
