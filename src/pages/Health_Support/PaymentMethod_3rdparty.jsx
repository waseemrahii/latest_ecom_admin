
////************************ final code of 3rd party code */

// import React, { useState } from "react";

// const ToggleButton = () => {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => {
//     setIsOn(!isOn);
//   };

//   return (
//     <div className="flex rounded items-center">
//       <span className="mr-2">{isOn ? "On" : "Off"}</span>
//       <div
//         className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ${
//           isOn ? "bg-green-400" : "bg-gray-300"
//         }`}
//         onClick={toggleSwitch}
//       >
//         <span
//           className={`absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${
//             isOn ? "right-0 border-green-400" : "left-0 border-gray-300"
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// const Index = () => {
//   const [selectedMethod, setSelectedMethod] = useState("digital");

//   return (
//     <>
//       <div className="bg-[#F9F9FB] h-full w-full">
//         <div className="flex pt-8 pl-10">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/3rd-party.png"
//             alt="3rd Party"
//           />
//           <p className="text-[#334257] pl-3 font-bold text-lg">3rd Party</p>
//         </div>
//         <div className="flex flex-col pl-10 pt-5 relative">
//           <div className="flex">
//             <p
//               className={`text-[#334257] text-sm font-semibold cursor-pointer ${
//                 selectedMethod === "digital" ? "text-blue-600" : ""
//               }`}
//               onClick={() => setSelectedMethod("digital")}
//             >
//               Digital Payment Method
//             </p>
//             <p
//               className={`text-[#334257] pl-8 text-sm font-semibold cursor-pointer ${
//                 selectedMethod === "offline" ? "text-blue-600" : ""
//               }`}
//               onClick={() => setSelectedMethod("offline")}
//             >
//               Offline Payment Method
//             </p>
//           </div>
//           <div
//             className={`absolute border-b-2 border-blue-600 transition-all duration-300 ease-in-out ${
//               selectedMethod === "digital" ? "left-0 w-1/4" : "left-40 w-1/4"
//             }`}
//             style={{ bottom: "-25px" }} // Adjusted bottom property to add space
//           ></div>
//         </div>
//         <div className="mt-12 gap-3 flex h-full bg-[#F9F9FB]">
//           <div className="bg-[#FFFFFF] mr-3 ml-8 rounded w-[35vw] h-[89vh] border shadow-lg">
//             <div className="flex bg-white w-full h-[8vh] items-center justify-between px-3">
//               <p className="pt-4">MERCADOPAGO</p>
//               <ToggleButton />
//             </div>

//             <div className="mt-3 h-full bg-white p-4">
//               <img
//                 src="https://6valley.6amtech.com/storage/app/public/payment_modules/gateway_image/2024-01-28-65b6439e44330.png"
//                 className="mx-auto pt-10 h-24"
//               />

//               <select
//                 name="All categories"
//                 className="border text-slate-600 border-gray-300 rounded px-3 py-2 w-full mt-6 focus:outline-none focus:border-blue-500"
//               >
//                 <option value="1">ALL Categories</option>
//                 <option value="2">Bags & Shoes</option>
//                 <option value="3">Computer Offices</option>
//               </select>
//               <p className="text-sm mt-2 text-slate-600">Access Token *</p>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Access Token"
//                 className="border border-gray-300 rounded px-3 py-2 w-full mt-3 focus:outline-none focus:border-blue-500"
//               />

//               <p className="text-sm mt-2 text-slate-600">Public Key *</p>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Public Key"
//                 className="border border-gray-300 rounded px-3 py-2 w-full mt-3 focus:outline-none focus:border-blue-500"
//               />

//               <p className="text-sm mt-2 text-slate-600">
//                 Payment Gateway Title *
//               </p>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Mercadopago"
//                 className="border border-gray-300 rounded px-3 py-2 w-full mt-3 focus:outline-none focus:border-blue-500"
//               />

//               <p className="text-sm mt-2 text-slate-600">Choose Logo *</p>
//               <div className="flex border border-gray-300 rounded px-3 py-2 w-full h-[8vh] mt-3 focus:outline-none focus:border-blue-500">
//                 <button
//                   type="button"
//                   className="hover:bg-slate-600 bg-slate-400 text-white py-2 px-2 rounded h-9 focus:outline-none"
//                 >
//                   File Upload
//                 </button>
//                 <p className="text-slate-600 text-center mx-3 my-1">
//                   no file chosen
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 className="ml-auto mt-3 bg-blue-500 text-white py-2 px-5 hover:bg-blue-800 rounded focus:outline-none"
//               >
//                 Save
//               </button>
//             </div>
//           </div>

//           <div className="bg-[#FFFFFF] mr-3 ml-8 rounded w-[35vw] h-[89vh] border shadow-lg">
//             <div className="flex bg-white w-full h-[8vh] items-center justify-between px-3">
//               <p className="pt-4">MERCADOPAGO</p>
//               <ToggleButton />
//             </div>

//             <div className="mt-3 h-full bg-white p-4">
//               <img
//                 src="https://6valley.6amtech.com/storage/app/public/payment_modules/gateway_image/2024-01-28-65b6439e44330.png"
//                 className="mx-auto pt-10 h-24"
//               />

//               <select
//                 name="All categories"
//                 className="border text-slate-600 border-gray-300 rounded px-3 py-2 w-full mt-6 focus:outline-none focus:border-blue-500"
//               >
//                 <option value="1">ALL Categories</option>
//                 <option value="2">Bags & Shoes</option>
//                 <option value="3">Computer Offices</option>
//               </select>
//               <p className="text-sm mt-2 text-slate-600">Access Token *</p>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Access Token"
//                 className="border border-gray-300 rounded px-3 py-2 w-full mt-3 focus:outline-none focus:border-blue-500"
//               />

//               <p className="text-sm mt-2 text-slate-600">Public Key *</p>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Public Key"
//                 className="border border-gray-300 rounded px-3 py-2 w-full mt-3 focus:outline-none focus:border-blue-500"
//               />

//               <p className="text-sm mt-2 text-slate-600">
//                 Payment Gateway Title *
//               </p>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Mercadopago"
//                 className="border border-gray-300 rounded px-3 py-2 w-full mt-3 focus:outline-none focus:border-blue-500"
//               />

//               <p className="text-sm mt-2 text-slate-600">Choose Logo *</p>
//               <div className="flex border border-gray-300 rounded px-3 py-2 w-full h-[8vh] mt-3 focus:outline-none focus:border-blue-500">
//                 <button
//                   type="button"
//                   className="hover:bg-slate-600 bg-slate-400 text-white py-2 px-2 rounded h-9 focus:outline-none"
//                 >
//                   File Upload
//                 </button>
//                 <p className="text-slate-600 text-center mx-3 my-1">
//                   no file chosen
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 className="ml-auto mt-3 bg-blue-500 text-white py-2 px-5 hover:bg-blue-800 rounded focus:outline-none"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;
