import React from "react";
import { CiImport, CiLocationOff, CiSearch } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const List = () => {
  const list = [
    {
      id: 27,
      name: "Computer, Office & Security",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881969b0222.png",
      priority: 3,
    },
    {
      id: 26,
      name: "Mobile Accessories",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881b1462dd9.png",
      priority: 4,
    },
    {
      id: 25,
      name: "Beauty, Health & Hair",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881a1265b65.png",
      priority: 5,
    },
    {
      id: 24,
      name: "Jewelry & Watches",
      img: "https://6valley.6amtech.com/storage/app/public/category/2023-06-13-6488655ea7f52.png",
      priority: 6,
    },
    // { id: 16, name: "ebook", priority: 7 },
    // { id: 15, name: "Women's fashion", priority: 8 },
    // { id: 14, name: "Outdoor Fun & Sports", priority: 9 },
    // { id: 13, name: "Men's fashion", priority: 10 },
    // { id: 12, name: "Toys, Kids & Babies", priority: 5 },
    // { id: 11, name: "Home Improvement & Tools", priority: 5 },
  ];
  return (
    <div className="bg-[#F9F9FB] w-[100%]">
      <div className="flex items-center gap-2 ms-10">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
          alt=""
          className="w-7 h-7"
        />
        <h1 className="text-[1rem] font-bold">
          Product <span className="bg-gray-300 rounded-lg px-1 ">13</span>
        </h1>
      </div>
      <div className="h-[80vh] w-full bg-white  rounded-lg mt-3 px-10 py-8">
        <div className=" ">
          <div className=" ">
            <div className="flex items-center justify-between  gap-4">
              <div className="flex  items-center rounded-lg px-4 py-2 border border-blue-300">
                <CiSearch />
                <input
                  type="search"
                  placeholder="Search by Categoreies Name "
                />{" "}
                <span className="bg-[#A1CB46] text-white hover:bg-[#7e9f37] btn px-2 py-1 cursor-pointer">
                  Search
                </span>
              </div>

              <button className="flex gap-2  items-center rounded-md bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-4 py-2 text-sm  border-blue-400">
                {" "}
                <CiImport className="text-sm" /> Export
              </button>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full bg-[#F7FAFF] grid grid-cols-2  px-3 py-2 mt-5">
              <div className="flex gap-10 items-center">
                <h1 className="text-[1rem] font-semibold">ID</h1>
                <h1 className="text-[1rem] font-semibold">Product</h1>
                <h1 className="text-[1rem] font-semibold">Name</h1>
              </div>
              <div className="flex justify-between items-center pe-5">
                <h1 className="text-[1rem] font-semibold">Total Product</h1>
                <h1 className="text-[1rem] font-semibold">Total Order</h1>
                <h1 className="text-[1rem] font-semibold">Status</h1>
                <h1 className="text-[1rem] font-semibold">Action</h1>
              </div>
            </div>
            <div className="pt-10">
              {list.map((item, index) => (
                <div className="grid  grid-cols-2">
                  <div className="flex items-center gap-10 " key={index}>
                    <h1>{item.id}</h1>
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 items-center "
                    />
                    <h1 className="text-[.9rem] font-semibold ">{item.name}</h1>
                  </div>
                  <div className="flex justify-between items-center ">
                    <h1>{item.priority}</h1>
                    <h1>5</h1>
                    <CiLocationOff className="text-[2.5rem] border px-3 py-1 text-cyan-400 rounded-lg border-cyan-400" />
                    <div className="flex items-center gap-2 ">
                      <FaPen className="text-[2rem] border p-2 text-cyan-400 rounded-lg border-cyan-400" />
                      <MdDelete className="text-[2rem] border p-2 rounded-lg border-red-500 text-red-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
