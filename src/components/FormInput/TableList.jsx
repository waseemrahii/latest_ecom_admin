

// import React, { useEffect, useState, lazy, memo } from "react";
// import { FiSearch } from "react-icons/fi";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import TableHeader from "./TableHeader";
// import LoadingSpinner from "../LoodingSpinner/LoadingSpinner";

// const ExportButton = lazy(() => import("../ActionButton/Export"));

// const TableList = memo(
//   ({
//     title,
//     tableTitle,
//     listData = [],

//     columns = [],
//     exportFileName = "listData",
//     searchPlaceholder = "Search...",
//     itemKey = "_id", // default key for mapping
//     itemsPerPage = 4, // default items per page
//     imageSrc = "",
//     headerActions,
//   }) => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [filteredData, setFilteredData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1); // State for current page
//     const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage); // State for items per page

//     useEffect(() => {
//       const filtered = searchQuery
//         ? listData.filter((item) =>
//             item.name?.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//         : listData;
//       setFilteredData(filtered);
//     }, [listData, searchQuery]);


//     const handleSearchChange = (e) => {
//       setSearchQuery(e.target.value);
//       setCurrentPage(1); // Reset to the first page when searching
//     };

//     const indexOfLastItem = currentPage * itemsPerPageState;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPageState;
//     const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const totalPages = Math.ceil(filteredData.length / itemsPerPageState);

  
//     return (
//       <div className="mt-3 bg-[#F9F9FB] pr-2 md:p-5 w-full">
//         <ToastContainer />
//         <TableHeader imageSrc={imageSrc} title={title} />
//         <div className="card bg-white shadow-lg rounded-lg">
//           <div className="flex items-start justify-between flex-col md:flex-row gap-4 px-5 py-4">
//             <div className="flex gap-3 justify-center items-center">
//               <h4 className="font-semibold text-lg">{tableTitle}</h4>
//               <span className="badge badge-soft-dark ml-2 flex justify-center items-center">
//                 {filteredData.length}
//               </span>
//             </div>
//             <div className="flex flex-col md:flex-row items-end gap-4">
//               <form onSubmit={(e) => e.preventDefault()} className="flex-grow">
//                 <div className="flex border rounded-lg overflow-hidden">
//                   <div className="flex items-center justify-center px-3 ">
//                     <FiSearch />
//                   </div>
//                   <input
//                     type="search"
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="form-control border-none outline-none px-4 py-2 w-full md:w-48"
//                     placeholder={searchPlaceholder}
//                   />
//                   <button
//                     type="submit"
//                     className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md"
//                     style={{ color: "white" }}
//                   >
//                     Search
//                   </button>
//                 </div>
//               </form>

//               {/* Custom header actions on the right side */}
//               {headerActions}

//               <ExportButton
//                 data={filteredData}
//                 filename={exportFileName}
//                 className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-md"
//                 label="Export"
//               />
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white shadow-md rounded-lg">
//               <thead className="bg-[#F7FAFF] text-white">
//                 <tr>
//                   {columns.map((col) => (
//                     <th
//                       key={col.key}
//                       className="px-4 py-3 text-center text-[#57596C] cursor-pointer"
//                       onClick={() => requestSort(col.key)}
//                     >
//                       <div className="flex justify-between">
//                         <span>{col.label}</span>
                      
//                       </div>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item, index) => (
//                   <tr key={item[itemKey]} className="hover:bg-gray-50">
//                     {columns.map((col) => (
//                       // <td key={col.key} className="px-4 py-2 text-center">
//                       //   {col.render ? col.render(item) : item[col.key]}
                        
//                       // </td>
//                       <td key={col.key} className="px-4 py-3 text-center">
//                       {col.render ? col.render(item, index) : item[col.key]}
//                     </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex justify-between md:flex-row flex-col gap-2 mt-4 items-center px-6 py-3">
//             <div className="text-gray-500">
//               Showing {indexOfFirstItem + 1} to{" "}
//               {Math.min(indexOfLastItem, filteredData.length)} of{" "}
//               {filteredData.length} entries
//             </div>
//             <div className="flex items-center space-x-2">
//               {currentPage > 1 && (
//                 <button
//                   onClick={() => paginate(currentPage - 1)}
//                   className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-primary-dark transition duration-150"
//                 >
//                   &lt;
//                 </button>
//               )}
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (number) => (
//                   <button
//                     key={number}
//                     onClick={() => paginate(number)}
//                     className={`${
//                       currentPage === number
//                         ? "bg-primary text-white"
//                         : "bg-white text-gray-500 border border-gray-300"
//                     } px-3 py-1 rounded-full hover:bg-primary-dark hover:text-white transition duration-150`}
//                   >
//                     {number}
//                   </button>
//                 )
//               )}
//               {currentPage < totalPages && (
//                 <button
//                   onClick={() => paginate(currentPage + 1)}
//                   className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-primary-dark transition duration-150"
//                 >
//                   &gt;
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// );

// export default TableList;



import React, { useEffect, useState, lazy, memo } from "react";
import { FiSearch } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableHeader from "./TableHeader";
import LoadingSpinner from "../LoodingSpinner/LoadingSpinner";

const ExportButton = lazy(() => import("../ActionButton/Export"));

const TableList = memo(
  ({
    title,
    tableTitle,
    listData = [],
    columns = [],
    exportFileName = "listData",
    searchPlaceholder = "Search...",
    itemKey = "_id", // default key for mapping
    itemsPerPage = 4, // default items per page
    imageSrc = "",
    headerActions,
  }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage); // State for items per page

    useEffect(() => {
      const filtered = searchQuery
        ? listData.filter((item) =>
            item.name?.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : listData;
      setFilteredData(filtered);
    }, [listData, searchQuery]);

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); // Reset to the first page when searching
    };

    const indexOfLastItem = currentPage * itemsPerPageState;
    const indexOfFirstItem = indexOfLastItem - itemsPerPageState;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredData.length / itemsPerPageState);

    return (
      <div className="mt-3 bg-[#F9F9FB] pr-2 md:p-5 w-full">
        <ToastContainer />
        <TableHeader imageSrc={imageSrc} title={title} />
        <div className="card bg-white shadow-lg rounded-lg">
          <div className="flex items-start justify-between flex-col md:flex-row gap-4 px-5 py-4">
            <div className="flex gap-3 justify-center items-center">
              <h4 className="font-semibold text-lg">{tableTitle}</h4>
              <span className="badge badge-soft-dark ml-2 flex justify-center items-center">
                {filteredData.length}
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-end gap-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex-grow">
                <div className="flex border rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center px-3 ">
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
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md"
                    style={{ color: "white" }}
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Custom header actions on the right side */}
              {headerActions}

              <ExportButton
                data={filteredData}
                filename={exportFileName}
                className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-md"
                label="Export"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-[#F7FAFF] text-white">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className="px-4 py-3 text-center text-[#57596C] cursor-pointer"
                    >
                      <div className="flex justify-center">
                        <span>{col.label}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={item[itemKey]} className="hover:bg-gray-50">
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className="px-4 py-3 text-center text-[#57596C]"
                      >
                        {col.render
                          ? col.render(item, index, currentPage, itemsPerPageState)
                          : item[col.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-4 mx-6">
            <nav>
              <ul className="flex list-none">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index + 1} className="mx-1">
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === index + 1
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
);

export default TableList;
