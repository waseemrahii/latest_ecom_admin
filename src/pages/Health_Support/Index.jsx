//***********************MESSAGE OR INBOX code************* */
import React from "react";

import { FaSearch } from "react-icons/fa"

const IndexMessage = () => {
  return (
    <>
      <div className="bg-[#F8F8FA] w-full h-full p-5">
        <div className="pt-6 pl-8 gap-3 flex">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/support-ticket.png"
            alt="Support Ticket Icon"
          />
          <p className="text-slate-900 text-lg font-semibold">Inbox</p>
        </div>

        <div className="flex pl-6 gap-6 pt-5">
          <div className="bg-white h-[80vh] w-60 rounded-lg">
            <form className="relative pt-5 pl-2 pr-2 justify-center">
              {/* <input
                type="text"
                name="search"
                placeholder="Search..."
                aria-label="Search"
                className="w-full px-3 py-2 font-semibold bg-[#EBEDF1] placeholder-gray-500 text-black rounded-lg border-none ring-2 ring-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              /> */}

<input
  type="text"
  name="username"
  placeholder="Search customers..."
  className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
/>

            </form>
           <div className="h-full"> {/* Ensure parent container has sufficient height */}
           <div>
  <p className="text-[#0177CD] pt-8 pl-6 font-semibold border-blue-500 mb-4">Customer</p>
  <p className="border-b-4 border-blue-500 mb-6 mr-24 ml-5"></p>
  <p className="text-gray-700 pl-5">Delivery Man</p>
</div>

</div>

          </div>

          <div className="bg-white h-[80vh] w-[50vw] rounded-lg">
          <div className="bg-white h-[80vh] w-[50vw] rounded-lg flex flex-col items-center justify-center">
  <img
    src="https://6valley.6amtech.com/public/assets/back-end/img/empty-message.png"
    alt="Empty Message"
    className="max-w-full max-h-full"
  />
  <p className="mt-4 text-gray-600 text-center">You haven't had any conversations yet.</p>
</div>

</div>

        </div>
      </div>

    </>
  );
};

export default IndexMessage;

/////*********************final code of Support Ticket************************************* */

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { MdOutlineStreetview } from "react-icons/md"

// const Index = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1); // Assuming currentPage state exists

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     // You can add further logic here if needed
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Perform search logic here, e.g., fetch data based on searchTerm
//     console.log("Searching for:", searchTerm);
//     // Reset page number to 1 after search
//     setCurrentPage(1);
//   };

//   return (
//     <div className="bg-[#F9F9FB] h-full w-full">
//       <div className="flex items-center">
//         <img
//           src="https://6valley.6amtech.com/public/assets/back-end/img/support_ticket.png"
//           alt="Support Ticket Icon"
//           className="w-auto h-auto max-w-16 max-h-20 pt-5 pl-8"
//         />

//         <p className="text-lg pt-4 pl-2 font-semibold text-[#334257]">
//           Support Ticket
//         </p>
//         <p className="text-xs font-semibold mt-4 text-[#334257] ml-4 bg-slate-400 rounded-full px-2 py-1">
//           4
//         </p>
//       </div>

//       <div className="flex pl-5 pt-7 mt-4">
//         <form onSubmit={handleSearchSubmit} className="flex items-center">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search by Store..."
//             className="border border-gray-300 rounded h-12  px-4 py-2 focus:outline-none focus:border-blue-500"
//             style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
//           />
//           <button
//             type="submit"
//             onClick={() => setCurrentPage(1)} // Reset page number on search
//             className="bg-blue-500 text-white px-4 py-2 w-16 h-12 rounded hover:bg-blue-600"
//             style={{
//               borderTopLeftRadius: 0,
//               borderBottomLeftRadius: 0,
//               marginLeft: "-1px",
//             }}
//           >
//             <FaSearch />
//           </button>

//           <select className="border border-blue-600 rounded h-12 w-48 text-base text-gray-700 py-3 px-4 ml-64 hover:border-blue-500 hover:bg-white hover:text-black">
//             <option value="1">ALL Priority</option>
//             <option value="2">Low</option>
//             <option value="3 ">Medium</option>
//             <option value="4">Urgent</option>
//           </select>

//           <select className="border border-blue-600 rounded text-base h-12 w-48 text-gray-700 py-3 px-4 ml-10 hover:border-blue-500 hover:bg-white hover:text-black">
//             <option value="ALL status">All status</option>
//             <option value="Open">Open</option>
//             <option value="Close ">Close</option>

//           </select>
//         </form>
//       </div>

//       <div>

//       </div>
//       <div className="border-t-2 mt-9"></div>
//       <div className="bg-white w-75vw] h-[30vh] pt-5 mt-5 mr-7 ml-7 rounded-lg">
//   <div className="flex items-center">
//     <img
//       src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
//       className="ml-2 h-14 w-14"
//       alt="Profile"
//     />
//     <div className="ml-5">
//       <p className="text-slate-700 text-xs">Devid Jack</p>
//       <div className="flex pt-2">
//       <p className="text-xs text-red-700 bg-red-400  rounded-full  px-3 py-1">Low</p>
//       <p className="text-xs text-blue-800 bg-indigo-400  rounded-full ml-2 px-3 py-1">Pending</p>
//       <p className="text-slate-700 text-sm ml-2"> Complaint</p>
//       </div>
//       <p className="pt-4 text-sm">10 Jan 2023 02:38:AM</p>

//     </div>
//   </div>
//   <div className="border-t-2 mt-6"></div>
//   <div className="flex justify-between items-end">
//   <p className="pt-2 text-sm pl-5">While adding product</p>
//   <button className="rounded-md bg-blue-800 h-10 w-20 mt-3 mr-8 text-white flex items-center justify-center">
//   <MdOutlineStreetview />view
//   </button>
// </div>
// </div>

// <div className="bg-white w-75vw] h-[30vh] pt-5 mt-5 mr-7 ml-7 rounded-lg">
//   <div className="flex items-center">
//     <img
//       src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
//       className="ml-2 h-14 w-14"
//       alt="Profile"
//     />
//     <div className="ml-5">
//       <p className="text-slate-700 text-xs">Devid Jack</p>
//       <div className="flex pt-2">
//       <p className="text-xs text-red-700 bg-red-400  rounded-full  px-3 py-1">Low</p>
//       <p className="text-xs text-blue-800 bg-indigo-400  rounded-full ml-2 px-3 py-1">Pending</p>
//       <p className="text-slate-700 text-sm ml-2"> Complaint</p>
//       </div>
//       <p className="pt-4 text-sm">10 Jan 2023 02:38:AM</p>

//     </div>
//   </div>
//   <div className="border-t-2 mt-6"></div>
//   <div className="flex justify-between items-end">
//   <p className="pt-2 text-sm pl-5">While adding product</p>
//   <button className="rounded-md bg-blue-800 h-10 w-20 mt-3 mr-8 text-white flex items-center justify-center">
//   <MdOutlineStreetview />view
//   </button>
// </div>
// </div>

// <div className="bg-white w-75vw] h-[30vh] pt-5 mt-5 mr-7 ml-7 rounded-lg">
//   <div className="flex items-center">
//     <img
//       src="https://6valley.6amtech.com/storage/app/public/profile/2022-10-12-63464cd299fc3.png"
//       className="ml-2 h-14 w-14"
//       alt="Profile"
//     />
//     <div className="ml-5">
//       <p className="text-slate-700 text-xs">Devid Jack</p>
//       <div className="flex pt-2">
//       <p className="text-xs text-red-700 bg-red-400  rounded-full  px-3 py-1">Low</p>
//       <p className="text-xs text-blue-800 bg-indigo-400  rounded-full ml-2 px-3 py-1">Pending</p>
//       <p className="text-slate-700 text-sm ml-2"> Complaint</p>
//       </div>
//       <p className="pt-4 text-sm">10 Jan 2023 02:38:AM</p>

//     </div>
//   </div>
//   <div className="border-t-2 mt-6"></div>
//   <div className="flex justify-between items-end">
//   <p className="pt-2 text-sm pl-5">While adding product</p>
//   <button className="rounded-md bg-blue-800 h-10 w-20 mt-3 mr-8 text-white flex items-center justify-center">
//   <MdOutlineStreetview />view
//   </button>
// </div>
// </div>

//     </div>
//   );
// };

// export default Index;

// ************final Pos code************************

// Index.js
// import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import Card from './Card';

// const SearchBar = ({ setSearchResults }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Example of search logic (replace with actual search functionality)
//     const filteredResults = mockData.filter(item =>
//       item.title.toLowerCase().includes(value.toLowerCase())
//     );

//     setSearchResults(filteredResults); // Update parent state with search results
//   };

//   return (
//     <div className="flex gap-2">
//       <select name="All categories" className="border border-gray-300 rounded px-3 py-2 w-[20vw] focus:outline-none focus:border-blue-500">
//         <option value="1">ALL Categories</option>
//         <option value="2">Bags & Shoes</option>
//         <option value="3">Computer Offices</option>
//       </select>

//       <div className="flex items-center border border-blue-800 rounded-lg px-3">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search..."
//           className="w-full py-2 px-2 outline-none text-gray-700"
//         />
//         <div className="p-2">
//           <FaSearch className="text-gray-600" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Index = () => {
//   const [searchResults, setSearchResults] = useState([]);

//   // Example data for demonstration
//   const mockData = [
//     { id: 1, title: 'Product 1', description: 'Description of Product 1...', price: '$99' },
//     { id: 2, title: 'Product 2', description: 'Description of Product 2...', price: '$149' },
//     { id: 3, title: 'Product 3', description: 'Description of Product 3...', price: '$199' },
//     { id: 4, title: 'Product 4', description: 'Description of Product 4...', price: '$249' },
//     // Add more mock data as needed
//   ];

//   return (
//     <>
//       <div className='flex bg-white w-full h-full'>
//         {/* Product Section */}
//         <div className='bg-white w-[45vw] h-[100vh] pt-3 mt-6 mr-6 ml-5 mb-6 rounded-lg border-gray-200 border-2 px-6 py-5 overflow-y-auto'>
//           <p className='bg-[#F9FAFC] px-11 py-3 mt-0 rounded-lg'>Product Section</p>
//           <div className='flex gap-2 mt-3 ml-3'>
//             <SearchBar setSearchResults={setSearchResults} />
//           </div>

//           <div className="grid grid-cols-3 gap-4 p-4">
//             {searchResults.length > 0 ? (
//               searchResults.map((product) => (
//                 <Card
//                   key={product.id}
//                   title={product.title}
//                   description={product.description}
//                   price={product.price}
//                 />
//               ))
//             ) : (
//               // Render default cards if no search results
//               mockData.map((product) => (
//                 <Card
//                   key={product.id}
//                   title={product.title}
//                   description={product.description}
//                   price={product.price}
//                 />
//               ))
//             )}
//           </div>
//         </div>

//         {/* Billing Section */}
//         <div className='bg-white h-[80vh] w-[30vw] mt-8 mr-3 rounded-lg border-2 border-gray-200 overflow-y-auto'>
//           <p className='bg-[#F9FAFC] px-11 py-3 mt-0 rounded-lg'>Billing Section</p>

//           <button className='border-indigo-800 border mt-3 ml-48 mr-4 w-48 h-12 rounded bg-white text-indigo-800 hover:bg-indigo-800 hover:text-white transition-colors duration-300 ease-in-out'>View All Hold Orders</button>

//           <div className='flex mt-1'>
//             <select className="border border-[#afacac] mt-2 w-44 h-11 rounded ml-3">
//               <option value="1">Walking Customer</option>
//               <option value="2">Ali</option>
//               <option value="3">Asad</option>
//             </select>
//             <button className='border-0 bg-[#00A387] w-44 h-11 ml-3 rounded text-white hover:bg-green-900 hover:white transition-colors duration-300 ease-in-out'>Add New Customer</button>
//           </div>

//           <div className='flex mt-1'>
//             <select className="border border-[#afacac] mt-2 w-80 h-10 rounded ml-3">
//               <option value="1">Walking Customer 378</option>
//               <option value="2">Ali</option>
//               <option value="3">Asad</option>
//             </select>
//             <button className='border-0 bg-[#EDEDED] w-36 h-10 ml-3 mt-2 mr-3 rounded text-black hover:bg-slate-600 hover:white transition-colors duration-300 ease-in-out'>Clear Cart</button>
//           </div>

//           <div className=''>
//             <button className='border-0 bg-indigo-800 w-28 h-10 ml-3 mt-2 mr-3 rounded text-white hover:bg-indigo-500 hover:white transition-colors duration-300 ease-in-out'>New Order</button>
//           </div>

//           <ul className='p-4' style={{ maxHeight: 'calc(80vh - 250px)' }}>
//             <li className='flex justify-between items-center bg-[#F9FAFC] px-6 py-4 mb-2'>
//               <span>Item</span>
//               <span>Qty</span>
//               <span>Price</span>
//               <span>Delete</span>
//             </li>
//             <li className='flex justify-between items-center mb-2'>
//               <span>Sub Total:</span>
//               <span>$0.00</span>
//             </li>
//             <li className='flex justify-between items-center mb-2'>
//               <span>Product Discount:</span>
//               <span>$0.00</span>
//             </li>
//             <li className='flex justify-between items-center mb-2'>
//               <span>Extra Discount:</span>
//               <span>$0.00</span>
//             </li>
//             <li className='flex justify-between items-center mb-2'>
//               <span>Coupon Discount:</span>
//               <span>$0.00</span>
//             </li>
//             <li className='flex justify-between items-center mb-2'>
//               <span>Tax:</span>
//               <span>$0.00</span>
//             </li>
//           </ul>
//           <div className='border-t-2 border-gray-500 flex'>
//             <p className='text-lg ml-4'>Total</p>
//             <p className='text-lg ml-[69%]'>$0.00</p>
//           </div>
//           <div className='mt-12 ml-4'>
//             <p>Paid by</p>
//           </div>
//           <div className='flex mt-2 ml-4'>
//             <button className='border-0 bg-[#334257] w-24 h-10 ml-3 mr-3 rounded text-white duration-300 ease-in-out'>Cash</button>
//             <button className='border-2 bg-white w-20 h-10 rounded text-black hover:bg-indigo-500 hover:white transition-colors duration-300 ease-in-out'>Card</button>
//           </div>
//           <div className='flex items-center mt-4'>
//             <button className='border-0 bg-[#EA295E] w-32 h-10 ml-5 rounded text-white hover:bg-rose-800 hover:white transition-colors duration-300 ease-in-out'>Cancel Order</button>
//             <button className='border-0 bg-blue-900 w-40 h-10 ml-5 rounded text-white hover:bg-[#04A3E7] hover:white transition-colors duration-300 ease-in-out'>Place Order</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;

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

/////************product gallery code************************ */

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const ProductCard = ({ product }) => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="rounded border border-gray-200 bg-white ml-8 mt-24 w-[65vw]">
//       <div className="flex">
//         <div className="w-[15vw] h-[40vh]">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="w-full">
//           <button className="bg-blue-600 px-5 py-2 rounded-r ml-[84%] text-white w-28 mr-12 hover:bg-[#268ebb] hover:text-white">
//             product info
//           </button>
//           <p className="pt-3 text-sm font-bold">
//             {product.name} <br />
//             {product.category}
//           </p>

//           <p className="pt-14 font-semibold">General Information</p>
//           <div className="flex pt-5">
//             <div>
//               <p>Brand</p>
//               <p>Category</p>
//               <p>Product Type</p>
//               <p>Product Unit</p>
//               <p>Current Stock</p>
//               <p>Product SKU</p>
//             </div>
//             <div className="ml-3">
//               <p>:</p>
//               <p>:</p>
//               <p>:</p>
//               <p>:</p>
//               <p>:</p>
//               <p>:</p>
//             </div>

//             <div className="ml-10">
//               <p>{product.brand}</p>
//               <p>{product.category}</p>
//               <p>{product.type}</p>
//               <p>{product.unit}</p>
//               <p>{product.stock}</p>
//               <p>{product.sku}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <p className="ml-3">Description :</p>
//         <p className="text-sm text-zinc-600 ml-3">
//           {product.description}
//         </p>
//       </div>
//       {showMore && (
//         <div className="ml-3 mt-2 text-sm text-zinc-600">
//           {product.moreInfo.map((info, index) => (
//             <p key={index}>{info}</p>
//           ))}
//         </div>
//       )}
//       <button
//         onClick={toggleShowMore}
//         className="text-blue-500 ml-80 mt-3 focus:outline-none"
//       >
//         {showMore ? "View Less" : "View More"}
//       </button>
//     </div>
//   );
// };

// const Index = () => {
//   const products = [
//     {
//       image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648862d93c9d7.png",
//       name: "Silicone Strap Analogue Sports Watch Rectangular Dial New Model 2023 Men Watches",
//       brand: "Triangle",
//       category: "Jewelry & Watches",
//       type: "Physical",
//       unit: "pc",
//       stock: "1000",
//       sku: "134244",
//       description: "Specifications of OLEVS 5563 Quartz wrist watch waterproof watch for Men and Women",
//       moreInfo: [
//         "Brand: OLEVS",
//         "SKU: 183922704_BD-1*********",
//         "Strap Material: Alloy",
//         "Model: 5563",
//         "Dial Size: 40mm",
//         "Watch Type: Analogue",
//         "Movement: Japanese Quartz",
//         "Watch Movement Country: China",
//         "Watch's Water Resistance: 300m",
//         "85% Polyester and 15% Spandex Fabric",
//         "Size: our sofa slipcovers have 3 sizes. Chair slipcover measures up to 32in-47in wide (80-120cm), Loveseat slipcover measures up to 57in-70in wide (145-180cm), Sofa slipcover measures up to 72in-92in (185-235cm). PLEASE measure your sofa before choosing our sofa slipcovers.",
//         "Fabric: Our Stretchable Sofa Slipcovers Which Are Made of 85% Polyester and 15% Spandex Fabric, Are Suitable for 90% Sofas. The Great Elasticity Could Fit Your Sofa More Perfect and Cover Sofa in Ever Edge. And Unique Dyeing Technology Keeps Your Sofa Slipcovers Not Fade. Please Note: Our Sofa Slipcovers Are Not Water-proof.",
//         "Protection: Our sofa slipcovers could help protect your furniture from daily tear, spills, stains, and so on. It is a great choice for families with children and pets. It's easy to install and take off, machine washable, and the best partner for household life.",
//         "Lifetime: We are confident in our products’ quality. If you are unsatisfied with our products whichever aspects, please connect with us firstly, and we will give you a satisfying result, no matter refund or sending new slipcovers for replacement. We will do our best.",
//         "Attention: Due to the different light and computer screen resolution, The color displayed on the screen may be different from the actual product. If you are not sure about the color or anything else, PLEASE contact US and we will assist you."
//       ]
//     },
//     {
//       image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648862d93c9d7.png",
//       name: "Digital Sports Watch with LED Display",
//       brand: "TechTime",
//       category: "Electronics",
//       type: "Digital",
//       unit: "pc",
//       stock: "500",
//       sku: "987654",
//       description: "High-quality digital sports watch with multiple functions and LED display",
//       moreInfo: [
//         "Brand: TechTime",
//         "SKU: 9876543210",
//         "Strap Material: Silicone",
//         "Model: DT2023",
//         "Dial Size: 45mm",
//         "Watch Type: Digital",
//         "Movement: Quartz",
//         "Watch Movement Country: Japan",
//         "Watch's Water Resistance: 200m",
//         "Battery Life: 2 years",
//         "Additional Features: Stopwatch, Alarm, Backlight",
//         "Color: Black",
//         "Weight: 80g",
//         "Warranty: 1 year",
//         "Suitable for: Outdoor activities, sports, daily use",
//         "Attention: Avoid exposing to extreme temperatures."
//       ]
//     }
//   ];

//   return (
//     <div className="bg-[#F7F7FA] h-full w-full">
//       <div className="flex pt-5 pl-8 items-center">
//         <img
//           src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
//           alt="All Orders"
//           className="mr-2"
//         />
//         <p className="text-lg text-[#334257] font-bold">Product gallery</p>
//         <p className="text-xs font-semibold text-[#334257] ml-4 bg-slate-400 rounded-full px-2 py-1">
//           50
//         </p>
//       </div>

//       <div className="bg-white rounded-lg w-[70vw] mt-5 ml-8 h-full hover:bg-zinc-100 shadow-lg border border-zinc-200">
//         <div className="flex flex-cols-3 pl-4 pr-3 pt-6">
//           <p className="text-gray-500">Store</p>
//           <p className="text-gray-500 pl-[21%]">Brand</p>
//           <p className="text-gray-500 pl-[21%]">Category</p>
//         </div>
//         <div className="grid grid-cols-5 gap-2 pl-4 pt-3 pr-4 justify-between">
//           <select className="border border-gray-300 rounded text-base w-48 h-10 text-gray-700 hover:border-blue-500 hover:bg-white hover:text-black">
//             <option value="ALL">ALL Shop</option>
//             <option value="In HOUSE Order">In HOUSE Order</option>
//             <option value="Vendor Order">Vendor Order</option>
//             <option value="POS Order">POS Order</option>
//           </select>

//           <select className="border border-gray-300 rounded text-base ml-8 w-48 h-10 text-gray-700 hover:border-blue-500 hover:bg-white hover:text-black">
//             <option value="ALL">ALL Shop</option>
//             <option value="In HOUSE Order">In HOUSE Order</option>
//             <option value="Vendor Order">Vendor Order</option>
//             <option value="POS Order">POS Order</option>
//           </select>

//           <select className="border border-gray-300 rounded ml-16 text-base w-48 h-10 text-gray-700 hover:border-blue-500 hover:bg-white hover:text-black">
//             <option value="ALL">ALL Shop</option>
//             <option value="In HOUSE Order">In HOUSE Order</option>
//             <option value="Vendor Order">Vendor Order</option>
//             <option value="POS Order">POS Order</option>
//           </select>
//           <input
//             type="text"
//             name="username"
//             placeholder="search by product"
//             className="border border-gray-300 rounded ml-24 text-base w-56 h-10 text-gray-700 hover:border-blue-500 hover:bg-white hover:text-black"
//           ></input>
//           <button className="bg-blue-600 px-5 py-2 rounded-r ml-11 text-white w-24 mr-12 hover:bg-[#268ebb] hover:text-white">
//             Search
//           </button>
//         </div>

//         {products.map((product, index) => (
//           <ProductCard key={index} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Index;

//  import React from 'react'

//  const Index = () => {
//    return (
//     <>
//      <div className="bg-[#F9F9FB] h-full w-full">
//      <div className="flex pt-8 pl-10">
//           <img
//              src="https://6valley.6amtech.com/public/assets/back-end/img/3rd-party.png"
//              alt="3rd Party"
//            />
//            <p className="text-[#334257] pl-3 font-bold text-lg">3rd Party</p>
//          </div>
//           <div className='bg-white h-[45vh] w-[71vw] ml-9 mt-40 rounded-lg'>
//             <div className='flex pt-3 pl-3'>
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/whatsapp.png "className='my-2 mx-3 w-5'/>
//               <p className='text-[#33427D] font-semibold pt-1'>WhatsUp</p>
//               <label for="check" className='bg-gray-100 relative cursor-pointer w-20 h-10 rounded-full'>
//                 <input type="checkbox" id="check" className='sr-only peer'>
//                 <span className='w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500'></span>
//                 </input>

//               </label>

//             </div>

//           </div>

//      </div>
//      </>
//    )
//  }

//  export default Index

// /**************other_configartion code of 3rd party************** */

// import React from 'react';

// const Index = () => {
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
//         <div className='bg-white h-[40vh]  shadow w-[71vw] ml-9 mt-40 rounded-lg'>
//           <div className='flex pt-3 pl-3 items-center'>
//             <img src="https://6valley.6amtech.com/public/assets/back-end/img/whatsapp.png" className='my-2 mx-3 w-5' alt="WhatsApp" />
//             <p className='text-[#33427D] font-semibold pt-1'>WhatsApp</p>
//             <label htmlFor="check" className='bg-gray-100 relative cursor-pointer w-16 h-8 rounded-full ml-[78%]'>
//               <input type="checkbox" id="check" className='sr-only peer' />
//               <span className='w-2/5 h-4/5 bg-blue-700 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500'></span>
//             </label>
//           </div>
//           <p className='border-2 border-[#F9F9FB] mt-3'></p>
//           <div className='flex'>
//           <div className='mt-10 text-[#334257] font-semibold text-sm ml-5'>WhatsUp Number</div>
//           <img src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg" className='pt-10 pl-3'/>

//           </div>
//           <input type="text" name="username" placeholder="00000000" className='w-[68vw] h-[5vh] border border-gray-500 rounded ml-4 mt-4'></input>
//           <div className='flex'>

//           <button className="bg-[#EDEDED] px-5 py-2 rounded mt-5 ml-[77%] text-black w-28 mr-12 hover:bg-[#758890] hover:text-white">
//             Reset
//           </button>
//           <button className="bg-[#4c31e4] px-5 py-2 rounded mt-5 ml-[%] text-black w-28 mr-12 hover:bg-[#04A3E7] hover:text-white">
//             Save
//           </button>

//           </div>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Index;

// ////////////////************************social media links**********************************************/////////////////////
// import React from 'react'

// const Index = () => {
//   return (
//    <>
//       <div className="bg-[#F9F9FB] h-full w-full">
//         <div className="flex pt-8 pl-10">
//            <img
//              src="https://6valley.6amtech.com/public/assets/back-end/img/social%20media.png"
//              alt="social media" className='w-[2vw] h-[4vh] '
//            />
//            <p className="text-[#334257] pl-3 font-bold text-lg">Social Media</p>
//          </div>
//          <div className='bg-white h-[45vh] shadow-xl w-[71vw] ml-9 mt-5 rounded-lg  hover:shadow-2xl'>
//           <div className='flex pt-3 pl-3 items-center'>

//              <p className='text-[#334257] font-semibold text-sm pt-1'>Social Media form</p>

//            </div>
//            <p className='border-2 border-[#F9F9FB] mt-3'></p>
//            <div className='pl-5 pt-2'>
//           <p className='text-[#334257]'>Name</p>
//            </div>

//            <select name="---select-----" className='w-[68vw] h-[6vh] border border-gray-300 rounded hover:border-sky-700 ml-4 mt-4'>
//       <option value="---select---">---Select---</option>
//       <option value="Instagram">Instagram</option>
//       <option value="Facebook">Facebook</option>
// </select>
// <p className='text-[#334257] text-sm  pt-3 pl-4'>Social Media Link</p>

//            <input type="text" name="username" placeholder="Enter Social Media Link" className='w-[68vw] h-[6vh] border  hover:border-sky-700 border-gray-300 rounded ml-4 pl-2 mt-4'></input>
//            <div className='flex'>

//            <button className="bg-[#328eeb] px-5 py-2 rounded mt-5 ml-[90%] text-white w-28 mr-12 hover:bg-[#04A3E7] hover:text-white">
//              Save
//            </button>

//            </div>
//          </div>

//     </div>
//     </>
//   )
// }

// export default Index

///////////////////////////************gallery**********************////////////////////////////////////////////

// import React from "react";

// const Index = () => {
//   return (
//     <>
//       <div className="bg-[#F9F9FB] h-full w-full">
//         <div className="flex pt-6 pl-8">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/file-manager.png"
//             alt="Gallery"
//             className="w-[2vw] h-[4vh] "
//           />
//           <p className="text-[#334257] pl-3 font-bold text-lg">File Manager</p>
//         </div>
//         <div className="flex pl-10 pt-5">
//           <p className="text-sm font-semibold text-[#334257]">File Manager</p>
//           <button className="bg-[#328eeb]  rounded text-sm  ml-[80%] text-white w-36 h-9 mr-12 hover:bg-[#04A3E7] hover:text-white">
//             + Add New
//           </button>
//         </div>
//         <div>

//         </div>
//         <div className="bg-white h-[90vh] shadow-xl w-[71vw] ml-9 mt-5 rounded-lg  hover:shadow-2xl">
//           <div className="flex pt-5 pl-5">
//             <p className="text-lg text-[#334257]  font-semibold">Public</p>
//             <p className="text-xs font-semibold text-[#334257] ml-2 bg-[#E0E7D8] text-center rounded-full px-2 py-1">15</p>

//           </div>
//           <p className='border-2 border-[#F9F9FB] mt-3'></p>
//           <div className=" flex">
//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">review</p>

//             </div>
            

//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">seller</p>

//             </div>


//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">notific</p>

//             </div>
//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">Brand</p>

//             </div>

//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">admin</p>

//             </div>
           

//           </div>
//           <div className="flex">

//           <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">company</p>

//             </div>

//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">deal</p>

//             </div>

//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">profile</p>

//             </div>
//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14">product</p>

//             </div>
//             <div className=" border border-gray-300 w-40 h-40 rounded-lg  ml-6 mt-8">
//               <img src="https://6valley.6amtech.com/public/assets/back-end/img/folder.png" className="w-32 h-32 ml-3 mt-4"/>
//               <p className="text-sm text-[#334257] mt-5 ml-14"> banner</p>

//             </div>





//           </div>






//         </div>


        
      
//       </div>
//     </>
//   );
// };

// export default Index;




///////////////////*************navbar******************///////////////

// import React, { useState } from 'react';
// import { FaGlobe, FaCommentDots, FaShoppingCart } from 'react-icons/fa';

// const Index = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMessageTooltipVisible, setIsMessageTooltipVisible] = useState(false);
//   const [isGlobeTooltipVisible, setIsGlobeTooltipVisible] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState('English');

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const showMessageTooltip = () => {
//     setIsMessageTooltipVisible(true);
//   };

//   const hideMessageTooltip = () => {
//     setIsMessageTooltipVisible(false);
//   };

//   const showGlobeTooltip = () => {
//     setIsGlobeTooltipVisible(true);
//   };

//   const hideGlobeTooltip = () => {
//     setIsGlobeTooltipVisible(false);
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-end bg-white py-2 px-4 w-[77vw] shadow">
//         {/* Language Selection */}
//         <div className="relative flex items-center mr-6">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//             alt="US Flag"
//             className="w-5 h-3 mr-1"
//           />
//           <span className="text-sm cursor-pointer" onClick={toggleDropdown}>
//             {selectedCountry}
//           </span>
//           <svg
//             className="w-4 h-4 ml-1 cursor-pointer"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             onClick={toggleDropdown}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             ></path>
//           </svg>
//           {isDropdownOpen && (
//             <div className="absolute top-8 left-0 w-40 bg-white border rounded-lg shadow-lg">
//               <div
//                 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleCountrySelect('Arabic')}
//               >
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_Saudi_Arabia.svg/32px-Flag_of_Saudi_Arabia.svg.png"
//                   alt="Arabic"
//                   className="w-5 h-3 mr-2"
//                 />
//                 <span>Arabic</span>
//               </div>
//               <div
//                 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleCountrySelect('Bangla')}
//               >
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
//                   alt="Bangla"
//                   className="w-5 h-3 mr-2"
//                 />
//                 <span>Bangla</span>
//               </div>
//               <div
//                 className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleCountrySelect('Hindi')}
//               >
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/32px-Flag_of_India.svg.png"
//                   alt="Hindi"
//                   className="w-5 h-3 mr-2"
//                 />
//                 <span>Hindi</span>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Icons */}
//         <div className="flex items-center mr-6">
//           <div
//             className="relative"
//             onMouseEnter={showGlobeTooltip}
//             onMouseLeave={hideGlobeTooltip}
//           >
//             <FaGlobe className="text-xl text-gray-600 mx-3" />
//             {isGlobeTooltipVisible && (
//               <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded-md">
//                 Globe
//               </div>
//             )}
//           </div>
//           <div
//             className="relative"
//             onMouseEnter={showMessageTooltip}
//             onMouseLeave={hideMessageTooltip}
//           >
//             <FaCommentDots className="text-xl text-gray-600 mx-3" />
//             {isMessageTooltipVisible && (
//               <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded-md">
//                 Message
//               </div>
//             )}
//           </div>
//           <div className="relative">
//             <FaShoppingCart className="text-xl text-blue-700 mx-3" />
//             <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
//               58
//             </span>
//           </div>
//         </div>

//         {/* User Profile */}
//         <div className="flex items-center  rounded-full px-3 py-2 hover:bg-slate-200">
//           <p className="text-sm mr-2">Admin<br/> Master admin</p>
//           {/* <span className="text-xs text-gray-500">Master Admin</span> */}
      


//           <img
//             src="data:image/png;base64,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"
//             alt="User Profile"
//             className="w-8 h-8 rounded-full ml-2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;


