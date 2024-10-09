import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai";
import { FaDownload, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import ImageApiUrl from "../../ImageApiUrl";
import ActionButton from "../../components/ActionButton/Action";
import ExportButton from "../../components/ActionButton/Export";

const CategoryList = React.memo(
  ({ categories, handleDelete, handleSearch, searchQuery }) => {
    const renderedCategories = useMemo(() => {
      return categories.map((category) => (
        <tr key={category._id}>
          <td>{`C${category._id.substring(0, 6)}`}</td>
          <td>
            <img
              src={category.logo}
              className="avatar"
              alt={category.name}
              aria-label="Category Logo"
            />
          </td>
          <td>{category.name}</td>
          <td className="">{category.priority || "0"}</td>

          <td>
            <div className="d-flex gap-2 justify-content-center">
              <ActionButton
                to={`/categoryedit/${category._id}`}
                icon={FaEye} // Pass dynamic icon
                className="ml-4"
                label="View"
              />

              <ActionButton
                onClick={() => handleDelete(category._id)}
                icon={FaTrash} // Pass dynamic icon
                className="ml-4"
                label="Delete"
              />
            </div>
          </td>
        </tr>
      ));
    }, [categories, handleDelete]);

    return (
      <div className="card mt-4 ">
        <div className="px-3 py-4">
          <div className="flex justify-between items-start gap-2 flex-col md:flex-row">
            <div className=" mb-3 mb-lg-0">
              <h5 className="form-label text-[1rem] font-semibold">
                Category Table{" "}
                <span className="badge badge-soft-dark ml-2">
                  {categories.length}
                </span>
              </h5>
            </div>
            <div className="">
              <form className="flex flex-col md:flex-row gap-2 items-end">
                <div className="input-group input-group-custom input-group-merge">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FaSearch />
                    </div>
                  </div>
                  <input
                    type="search"
                    className="form-control outline-none"
                    placeholder="Search "
                    value={searchQuery}
                    onChange={handleSearch}
                    aria-label="Search Categories"
                  />
                  <button
                    className="btn bg-primary text-white border-primary-dark"
                    style={{ color: "white" }}
                  >
                    Search
                  </button>
                </div>
                <div className="d-flex justify-content-lg-end">
                  <ExportButton
                    data={categories} // Pass the data to export
                    filename="refundList" // Optional filename for the exported file
                    icon={FaDownload} // Icon for the button
                    label="Export " // Button label
                    className="bg-primary text-white hover:bg-primary-dark" // Tailwind classes for styling
                    style={{ color: "white" }} // Optional inline styles
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table
            id="datatable"
            className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
            style={{ width: "100%" }}
          >
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Priority</th>
                {/* <th>Status</th> */}
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>{renderedCategories}</tbody>
          </table>
        </div>
      </div>
    );
  }
);

export default CategoryList;



// src/components/CategoryList.jsx

// import React, { useMemo } from "react";
// import { FaEye, FaTrash, FaDownload, FaSearch } from "react-icons/fa";
// import ImageApiUrl from "../../ImageApiUrl";
// import ExportButton from "../../components/ActionButton/Export";
// import ReusableTable from "../../components/table/ReUsableTable"; // Import the new component

// const CategoryList = React.memo(
//   ({ categories, handleDelete, handleSearch, searchQuery }) => {
//     const columns = [
//       { label: "ID", accessor: "_id", render: (item) => `C${item._id.substring(0, 6)}` },
//       {
//         label: "Category Image",
//         render: (item) => (
//           <img
//             src={item.logo}
//             className="avatar"
//             alt={item.name}
//             aria-label="Category Logo"
//           />
//         ),
//       },
//       { label: "Category Name", accessor: "name" },
//       { label: "Priority", accessor: "priority", render: (item) => item.priority || "0" },
//     ];

//     const actions = [
//       {
//         label: "View",
//         icon: FaEye,
//         className: "btn btn-primary",
//         onClick: (item) => {
//           window.location.href = `/categoryedit/${item._id}`;
//         },
//       },
//       {
//         label: "Delete",
//         icon: FaTrash,
//         className: "btn btn-danger",
//         onClick: (item) => handleDelete(item._id),
//       },
//     ];

//     const searchComponent = (
//       <form className="flex gap-2 items-end">
//         <div className="input-group input-group-custom input-group-merge">
//           <div className="input-group-prepend">
//             <div className="input-group-text">
//               <FaSearch />
//             </div>
//           </div>
//           <input
//             type="search"
//             className="form-control outline-none"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={handleSearch}
//             aria-label="Search Categories"
//           />
//           <button className="btn bg-primary text-white border-primary-dark" style={{ color: "white" }}>
//             Search
//           </button>
//         </div>
//       </form>
//     );

//     const exportComponent = (
//       <ExportButton
//         data={categories}
//         filename="categoryList"
//         icon={FaDownload}
//         label="Export"
//         className="bg-primary text-white hover:bg-primary-dark"
//         style={{ color: "white" }}
//       />
//     );

//     return (
//       <ReusableTable
//         title="Category Table"
//         columns={columns}
//         data={categories}
//         actions={actions}
//         searchComponent={searchComponent}
//         exportComponent={exportComponent}
//       />
//     );
//   }
// );

// export default CategoryList;


