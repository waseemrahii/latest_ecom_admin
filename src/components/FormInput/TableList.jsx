// import React, { useEffect, useState, lazy, memo } from "react";
// import { FiSearch } from "react-icons/fi";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import LoadingSpinner from "../LoodingSpinner/LoadingSpinner";

// const ExportButton = lazy(() => import("../ActionButton/Export"));

// const TableList = memo(
//   ({
//     title,
//     listData = [],
//     fetchListData,
//     columns = [],
//     exportFileName = "listData",
//     searchPlaceholder = "Search...",
//     itemKey = "_id", // default key for mapping
//     itemsPerPage = 4, // default items per page
//   }) => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [filteredData, setFilteredData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1); // State for current page
//     const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage); // State for items per page

//     // Fetch data when component mounts
//     useEffect(() => {
//       fetchListData();
//     }, [fetchListData]);

//     // Filter data based on search query
//     useEffect(() => {
//       const filtered = searchQuery
//         ? listData.filter((item) =>
//             item.name.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//         : listData;

//       setFilteredData(filtered);
//     }, [listData, searchQuery]);

//     // Handle search input changes
//     const handleSearchChange = (e) => {
//       setSearchQuery(e.target.value);
//       setCurrentPage(1); // Reset to the first page when searching
//     };

//     // Pagination Logic
//     const indexOfLastItem = currentPage * itemsPerPageState;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPageState;
//     const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const totalPages = Math.ceil(filteredData.length / itemsPerPageState);

//     return (
//       <div className="mt-3 bg-[#F9F9FB]  px-5 py-5 w-full">
//         <ToastContainer />
//         <div className="font-bold pb-4 text-xl flex gap-2 items-start">
//           <h5 className="form-label text-[1rem] font-semibold">{title}</h5>
//           <span className="badge badge-soft-dark ml-2">
//             {filteredData.length}
//           </span>
//         </div>

//         <div className="card bg-white shadow-lg rounded-lg ">
//           <div className="flex items-start justify-between flex-col md:flex-row gap-4 px-5 py-4">
//             <h2 className="font-semibold text-lg">{title}</h2>
//             <div className="flex flex-col md:flex-row items-end gap-4">
//               <form onSubmit={(e) => e.preventDefault()} className="flex-grow">
//                 <div className="flex border rounded-lg overflow-hidden">
//                   <div className="flex items-center justify-center px-3 bg-gray-100">
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
//                     className="bg-primary text-white px-4 py-2 rounded-r-lg"
//                     style={{ color: "white" }}
//                   >
//                     Search
//                   </button>
//                 </div>
//               </form>
//               <React.Suspense
//                 fallback={
//                   <div>
//                     <LoadingSpinner />
//                   </div>
//                 }
//               >
//                 <ExportButton
//                   data={filteredData}
//                   filename={exportFileName}
//                   className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg"
//                   label="Export"
//                   style={{ color: "white" }}
//                 />
//               </React.Suspense>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white shadow-md rounded-lg">
//               <thead className="bg-[#F7FAFF] text-white ">
//                 <tr>
//                   {columns.map((col) => (
//                     <th
//                       key={col.key}
//                       className="px-4 py-3 text-center text-[#57596C]"
//                     >
//                       {col.label}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item) => (
//                   <tr key={item[itemKey]} className="hover:bg-gray-50">
//                     {columns.map((col) => (
//                       <td key={col.key} className="px-4 py-2 text-center">
//                         {col.render ? col.render(item) : item[col.key]}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Controls */}
//           <div className="flex justify-between md:flex-row flex-col mt-4 items-center px-6 py-3">
//             <div className="text-gray-500">
//               Showing {indexOfFirstItem + 1} to{" "}
//               {Math.min(indexOfLastItem, filteredData.length)} of{" "}
//               {filteredData.length} entries
//             </div>
//             <div className="flex   items-center space-x-2">
//               {currentPage > 1 && (
//                 <button
//                   onClick={() => paginate(currentPage - 1)}
//                   className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-primary-dark hover:text-white transition duration-150"
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
//                         : "bg-gray-500 text-gray-500 border border-gray-300"
//                     } px-3 py-1 rounded-full hover:bg-primary-dark hover:text-white transition duration-150`}
//                     style={{ color: "white" }}
//                   >
//                     {number}
//                   </button>
//                 )
//               )}
//               {currentPage < totalPages && (
//                 <button
//                   onClick={() => paginate(currentPage + 1)}
//                   className="bg-primary text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-primary-dark hover:text-white transition duration-150"
//                   style={{ color: "white" }}
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
    fetchListData,
    columns = [],
    exportFileName = "listData",
    searchPlaceholder = "Search...",
    itemKey = "_id", // default key for mapping
    itemsPerPage = 4, // default items per page
    imageSrc = "", // Add imageSrc prop for dynamic image
  }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [itemsPerPageState, setItemsPerPageState] = useState(itemsPerPage); // State for items per page
    const [sortConfig, setSortConfig] = useState({
      key: "",
      direction: "ascending",
    }); // State for sorting

    useEffect(() => {
      fetchListData();
    }, [fetchListData]);

    useEffect(() => {
      const filtered = searchQuery
        ? listData.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : listData;
      setFilteredData(filtered);
    }, [listData, searchQuery]);

    useEffect(() => {
      let sortedData = [...filteredData];
      if (sortConfig.key) {
        sortedData.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      setFilteredData(sortedData);
    }, [sortConfig, filteredData]);

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); // Reset to the first page when searching
    };

    const indexOfLastItem = currentPage * itemsPerPageState;
    const indexOfFirstItem = indexOfLastItem - itemsPerPageState;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredData.length / itemsPerPageState);

    const requestSort = (key) => {
      let direction = "ascending";
      if (sortConfig.key === key && sortConfig.direction === "ascending") {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };

    const SortIndicator = ({ direction }) =>
      direction === "ascending" ? <span>▲</span> : <span>▼</span>;

    return (
      <div className="mt-3 bg-[#F9F9FB] pr-2 md:p-5 w-full">
        <ToastContainer />
        <TableHeader imageSrc={imageSrc} title={title} />{" "}
        {/* Use TableHeader here */}
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
              <React.Suspense
                fallback={
                  <div>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ExportButton
                  data={filteredData}
                  filename={exportFileName}
                  className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-md"
                  label="Export"
                />
              </React.Suspense>
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
                      onClick={() => requestSort(col.key)}
                    >
                      <div className="flex justify-between">
                        <span>{col.label}</span>
                        {sortConfig.key === col.key && (
                          <SortIndicator direction={sortConfig.direction} />
                        )}
                      </div>
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

          <div className="flex justify-between md:flex-row flex-col gap-2 mt-4 items-center px-6 py-3">
            <div className="text-gray-500">
              Showing {indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfLastItem, filteredData.length)} of{" "}
              {filteredData.length} entries
            </div>
            <div className="flex items-center space-x-2">
              {currentPage > 1 && (
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-primary-dark  transition duration-150"
                  style={{ color: "white" }}
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
                        ? "bg-primary text-white"
                        : "bg-white text-gray-500 border border-gray-300"
                    } px-3 py-1 rounded-full hover:bg-primary-dark hover:text-white transition duration-150`}
                    style={{ color: "white" }}
                  >
                    {number}
                  </button>
                )
              )}
              {currentPage < totalPages && (
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="bg-white text-gray-500 border border-gray-300 px-3 py-1 rounded-full hover:bg-primary-dark  transition duration-150"
                  style={{ color: "white" }}
                >
                  &gt;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default TableList;
