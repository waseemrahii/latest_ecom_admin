// import React, { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ExportButton from "../ActionButton/Export";

// const TableList = ({
//   title,
//   listData = [],
//   fetchListData,
//   columns = [],
//   exportFileName = "listData",
//   searchPlaceholder = "Search...",
//   itemKey = "_id", // default key for mapping
//   itemsPerPage = 2, // default items per page
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // State for current page
//   const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage); // State for items per page

//   // Fetch data when component mounts
//   useEffect(() => {
//     fetchListData();
//   }, [fetchListData]);

//   // Filter data based on search query
//   useEffect(() => {
//     const filtered = searchQuery
//       ? listData.filter((item) =>
//           item.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       : listData;

//     setFilteredData(filtered);
//   }, [listData, searchQuery]);

//   // Handle search input changes
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   // Pagination Logic
//   const indexOfLastItem = currentPage * itemsPerPageState;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPageState;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPageState);

//   return (
//     <div className="mt-3 bg-[#F9F9FB] px-5 py-5 w-full">
//       <ToastContainer />
//       <div className="font-bold pb-4 text-xl flex gap-2 items-start">
//         <h1>{title}</h1>
//         <span className="badge bg-gray-200 text-gray-600 rounded-full px-2 py-1">
//           {filteredData.length}
//         </span>
//       </div>

//       <div className="card bg-white shadow-lg rounded-lg">
//         <div className="flex items-start justify-between flex-col md:flex-row gap-4 px-5 py-4">
//           <h2 className="font-semibold text-lg">{title}</h2>
//           <div className="flex flex-col md:flex-row items-end gap-4">
//             <form onSubmit={(e) => e.preventDefault()} className="flex-grow">
//               <div className="flex border rounded-lg overflow-hidden">
//                 <div className="flex items-center justify-center px-3 bg-gray-100">
//                   <FiSearch />
//                 </div>
//                 <input
//                   type="search"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   className="form-control border-none outline-none px-4 py-2 w-full md:w-48"
//                   placeholder={searchPlaceholder}
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>
//             <ExportButton
//               data={filteredData}
//               filename={exportFileName}
//               className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-lg"
//               label="Export"
//             />
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead className="bg-green-500 text-white">
//               <tr>
//                 {columns.map((col) => (
//                   <th key={col.key} className="px-4 py-3 text-center">
//                     {col.label}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentItems.map((item) => (
//                 <tr key={item[itemKey]} className="hover:bg-gray-50">
//                   {columns.map((col) => (
//                     <td key={col.key} className="px-4 py-2 text-center">
//                       {col.render ? col.render(item) : item[col.key]}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-between mt-4 items-center px-6 py-3">
//           <div className="text-gray-500">
//             {/* Remove showing page text */}
//             Showing {indexOfFirstItem + 1} to{" "}
//             {Math.min(indexOfLastItem, filteredData.length)} of{" "}
//             {filteredData.length} entries
//           </div>
//           <div className="flex items-center space-x-2">
//             {currentPage > 1 && (
//               <button
//                 onClick={() => paginate(currentPage - 1)}
//                 className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-150"
//               >
//                 &lt;
//               </button>
//             )}
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//               (number) => (
//                 <button
//                   key={number}
//                   onClick={() => paginate(number)}
//                   className={`${
//                     currentPage === number
//                       ? "bg-green-500 text-white"
//                       : "bg-white text-gray-500 border border-gray-300"
//                   } px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-150`}
//                 >
//                   {number}
//                 </button>
//               )
//             )}
//             {currentPage < totalPages && (
//               <button
//                 onClick={() => paginate(currentPage + 1)}
//                 className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-150"
//               >
//                 &gt;
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableList;

import React, { useEffect, useState, lazy, memo } from "react";
import { FiSearch } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExportButton = lazy(() => import("../ActionButton/Export"));

const TableList = memo(({
  title,
  listData = [],
  fetchListData,
  columns = [],
  exportFileName = "listData",
  searchPlaceholder = "Search...",
  itemKey = "_id", // default key for mapping
  itemsPerPage = 4, // default items per page
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage); // State for items per page

  // Fetch data when component mounts
  useEffect(() => {
    fetchListData();
  }, [fetchListData]);

  // Filter data based on search query
  useEffect(() => {
    const filtered = searchQuery
      ? listData.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : listData;

    setFilteredData(filtered);
  }, [listData, searchQuery]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPageState;
  const indexOfFirstItem = indexOfLastItem - itemsPerPageState;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredData.length / itemsPerPageState);

  return (
    <div className="mt-3 bg-[#F9F9FB] px-5 py-5 w-full">
      <ToastContainer />
      <div className="font-bold pb-4 text-xl flex gap-2 items-start">
      <h5 className="form-label text-[1rem] font-semibold">
      {title}
          </h5>
          <span className="badge badge-soft-dark ml-2">
          {filteredData.length}
        </span>

       
      </div>

      <div className="card bg-white shadow-lg rounded-lg">
        <div className="flex items-start justify-between flex-col md:flex-row gap-4 px-5 py-4">
          <h2 className="font-semibold text-lg">{title}</h2>
          <div className="flex flex-col md:flex-row items-end gap-4">
            <form onSubmit={(e) => e.preventDefault()} className="flex-grow">
              <div className="flex border rounded-lg overflow-hidden">
                <div className="flex items-center justify-center px-3 bg-gray-100">
                  <FiSearch />
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="form-control border-none outline-none px-4 py-2 w-full md:w-48"
                  placeholder={searchPlaceholder}
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-r-lg"
                >
                  Search
                </button>
              </div>
            </form>
            <React.Suspense fallback={<div>Loading...</div>}>
              <ExportButton
                data={filteredData}
                filename={exportFileName}
                className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-lg"
                label="Export"
              />
            </React.Suspense>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-[#F7FAFF] text-white ">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="px-4 py-3 text-center text-[#57596C]">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item[itemKey]} className="hover:bg-gray-50">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-2 text-center">
                      {col.render ? col.render(item) : item[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4 items-center px-6 py-3">
          <div className="text-gray-500">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, filteredData.length)} of{" "}
            {filteredData.length} entries
          </div>
          <div className="flex items-center space-x-2">
            {currentPage > 1 && (
              <button
                onClick={() => paginate(currentPage - 1)}
                className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-150"
              >
                &lt;
              </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-500 border border-gray-300"
                  } px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-150`}
                >
                  {number}
                </button>
              )
            )}
            {currentPage < totalPages && (
              <button
                onClick={() => paginate(currentPage + 1)}
                className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition duration-150"
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TableList;
