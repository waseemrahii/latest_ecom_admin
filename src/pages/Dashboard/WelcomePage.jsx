import React from "react";
import BussniesWallet from "./WelcomePage/BussniesWallet";
import Adminwallet from "./WelcomePage/AdminWallet/Adminwallet";
import TopCustomer from "./WelcomePage/TopCustomer/TopCustomer";

const WelcomePage = () => {
  return (
    <div className="grid grid-cols-12 bg-[#F9F9FB]">
    
      <div className="col-span-12">
        <div className="bg-[#F9F9FB]  px-4 py-2 w-[100%]">
          <h1 className=" font-bold">Welcome Admin</h1>
          <p className="text-xs text-gray-400">
            Monitor your business analytics and statistics.
          </p>
        </div>
        <BussniesWallet />
        <Adminwallet />
        <TopCustomer />
      </div>
    </div>
  );
};

export default WelcomePage;
