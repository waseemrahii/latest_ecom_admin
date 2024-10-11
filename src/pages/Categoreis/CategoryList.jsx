// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai";
// import { FaDownload, FaEye, FaSearch, FaTrash } from "react-icons/fa";
// import ImageApiUrl from "../../ImageApiUrl";
// import ActionButton from "../../components/ActionButton/Action";
// import ExportButton from "../../components/ActionButton/Export";

// const CategoryList = React.memo(
//   ({ categories, handleDelete, handleSearch, searchQuery }) => {
//     const renderedCategories = useMemo(() => {
//       return categories.map((category) => (
//         <tr key={category._id}>
//           <td>{`C${category._id.substring(0, 6)}`}</td>
//           <td>
//             <img
//               src={category.logo}
//               className="avatar"
//               alt={category.name}
//               aria-label="Category Logo"
//             />
//           </td>
//           <td>{category.name}</td>
//           <td className="">{category.priority || "0"}</td>

//           <td>
//             <div className="d-flex gap-2 justify-content-center">
//               <ActionButton
//                 to={`/categoryedit/${category._id}`}
//                 icon={FaEye} // Pass dynamic icon
//                 className="ml-4"
//                 label="View"
//               />

//               <ActionButton
//                 onClick={() => handleDelete(category._id)}
//                 icon={FaTrash} // Pass dynamic icon
//                 className="ml-4"
//                 label="Delete"
//               />
//             </div>
//           </td>
//         </tr>
//       ));
//     }, [categories, handleDelete]);

//     return (
//       <div className="card mt-4 ">
//         <div className="px-3 py-4">
//           <div className="flex justify-between items-start gap-2 flex-col md:flex-row">
//             <div className=" mb-3 mb-lg-0">
//               <h5 className="form-label text-[1rem] font-semibold">
//                 Category Table{" "}
//                 <span className="badge badge-soft-dark ml-2">
//                   {categories.length}
//                 </span>
//               </h5>
//             </div>
//             <div className="">
//               <form className="flex flex-col md:flex-row gap-2 items-end">
//                 <div className="input-group input-group-custom input-group-merge">
//                   <div className="input-group-prepend">
//                     <div className="input-group-text">
//                       <FaSearch />
//                     </div>
//                   </div>
//                   <input
//                     type="search"
//                     className="form-control outline-none"
//                     placeholder="Search "
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     aria-label="Search Categories"
//                   />
//                   <button
//                     className="btn bg-primary text-white border-primary-dark"
//                     style={{ color: "white" }}
//                   >
//                     Search
//                   </button>
//                 </div>
//                 <div className="d-flex justify-content-lg-end">
//                   <ExportButton
//                     data={categories} // Pass the data to export
//                     filename="refundList" // Optional filename for the exported file
//                     icon={FaDownload} // Icon for the button
//                     label="Export " // Button label
//                     className="bg-primary text-white hover:bg-primary-dark" // Tailwind classes for styling
//                     style={{ color: "white" }} // Optional inline styles
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="table-responsive">
//           <table
//             id="datatable"
//             className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
//             style={{ width: "100%" }}
//           >
//             <thead className="thead-light">
//               <tr>
//                 <th>ID</th>
//                 <th>Category Image</th>
//                 <th>Category Name</th>
//                 <th>Priority</th>
//                 {/* <th>Status</th> */}
//                 <th className="text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>{renderedCategories}</tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// );

// export default CategoryList;





import React, { useMemo } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import TableList from "../../components/FormInput/TableList";
import ActionButton from "../../components/ActionButton/Action";

const CategoryList = React.memo(
  ({ categories, handleDelete, handleSearch, searchQuery }) => {
    // Define the columns for the table
    const columns = useMemo(() => [
      { key: "_id", label: "ID", render: (item) => `C${item._id.substring(0, 6)}` },
      {
        key: "logo",
        label: "Logo",
        render: (item) => (
          <img
            src={item.logo}
            className="avatar"
            alt={item.name}
            aria-label="Category Logo"
          />
        ),
      },
      { key: "name", label: "Category Name" },
      { key: "priority", label: "Priority", render: (item) => item.priority || "0" },
      {
        key: "actions",
        label: "Actions",
        render: (item) => (
          <div className="d-flex gap-2 justify-content-center">
            <ActionButton
              to={`/categoryedit/${item._id}`}
              icon={FaEye} // View icon
              className="ml-4"
              label="View"
            />
            <ActionButton
              onClick={() => handleDelete(item._id)}
              icon={FaTrash} // Delete icon
              className="ml-4"
              label="Delete"
            />
          </div>
        ),
      },
    ], [handleDelete]);

    return (
        
          <TableList
            title="Categories"
            listData={categories}
            columns={columns}
            fetchListData={() => {}} // Provide your fetch function if needed
            searchPlaceholder="Search categories..."
            itemKey="_id"
            itemsPerPage={10} // You can change the number of items per page as needed
          />
    );
  }
);

export default CategoryList;
