import React from "react";
import CardFirst from "./CardFirst";
import busnnises from "./BussniesWallet/2.png";
import total_stores from "./BussniesWallet/total-stores.png";
import total_product from "./BussniesWallet/total-product.png";
import total_customer from "./BussniesWallet/total-customer.png";
import all_orders from "./BussniesWallet/all-orders.png";
import Failed_to_delivery from "./BussniesWallet/failed-to-deliver.png";
import Returned from "./BussniesWallet/returned.png";
import Cancenled from "./BussniesWallet/canceled.png";
import Deliverd from "./BussniesWallet/delivered.png";
import out_of_delivery from "./BussniesWallet/out-of-delivery.png";
import Packaging from "./BussniesWallet/packaging.png";
import Confirmed from "./BussniesWallet/confirmed.png";
import pending from "./BussniesWallet/pending.png";
import Card2 from "./Card2";

const BussniesWallet = () => {
  const cardsData = [
    {
      title: "Total order",
      value: 193,
      icon: all_orders,
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Stores",
      value: 10,
      icon: total_stores,
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Products",
      value: 66,
      icon: total_product,
      bgColor: "bg-blue-100",
    },
    {
      title: "Total Customers",
      value: 10,
      icon: total_customer,
      bgColor: "bg-blue-100",
    },
  ];
  const card2 = [
    {
      Title: "Pending order",
      Count: "58",
      icons: pending,
    },
    {
      Title: "Confirmed",
      Count: "21",
      icons: Confirmed,
    },
    {
      Title: "Packaging",
      Count: "9",
      icons: Packaging,
    },
    {
      Title: "Out for delivery",
      Count: "8",
      icons: out_of_delivery,
    },
    {
      Title: "Deliverd",
      Count: "76",
      icons: Deliverd,
    },
    {
      Title: "Cancenled",
      Count: "9",
      icons: Cancenled,
    },
    {
      Title: "Returned",
      Count: "4",
      icons: Returned,
    },
    {
      Title: "Failed to delivery",
      Count: "5",
      icons: Failed_to_delivery,
    },
  ];
  return (
    <div className="bg-white border rounded-lg border-gray-200  mx-5 ">
      <div className=" flex justify-between items-center p-5">
        <div className="font-bold text-xs flex gap-2 items-center ">
          <img src={busnnises} alt="" className="" />
          <h1>Business Analytics</h1>
        </div>
        <div>
          <select
            name="overall"
            id=""
            className="border border-gray-200 text-xs rounded-md px-1 py-1"
          >
            <option value="#" className="text-xs">
              Over All statistic
            </option>
            <option value="#">Today statistic</option>
            <option value="#">This Month statistic</option>
          </select>
        </div>
      </div>
      <div>
        <div className="container p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 ">
            {cardsData.map((card, index) => (
              <CardFirst
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mx-5 gap-2  ">
        {card2.map((card2, index) => (
          <Card2
            key={index}
            Title={card2.Title}
            icons={card2.icons}
            bgColor={card2.bgColor}
            Count={card2.Count}
          />
        ))}
      </div>
    </div>
  );
};

export default BussniesWallet;
