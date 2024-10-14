// import React, { memo } from "react";
// import { FaEye, FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ActionButton from "../../../../components/ActionButton/Action";

// const VendorTable = memo(
//   ({
//     onDeleteVendor,
//     vendors,
    
//     onUpdateStatus,
//     setImageLoading,
//     imageLoading,
//   }) => {
//     const getStatusBadge = (status) => {
//       switch (status) {
//         case "approved":
//         case "active":
//           return "green";
//         case "pending":
//           return "";
//         case "inactive":
//         case "rejected":
//           return "danger";
//         default:
//           return "secondary";
//       }
//     };

//     const handleImageLoad = (vendorId) => {
//       setImageLoading((prevState) => ({
//         ...prevState,
//         [vendorId]: false,
//       }));
//     };

//     return (
//       <div className="overflow-x-auto">
//         <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-full">
//           <thead className="thead-light thead-50 text-capitalize">
//             <tr>
//               <th>SL</th>
//               <th>Vendor Image</th>
//               <th>Shop Name</th>
//               <th>Vendor Name</th>
//               <th>Contact Info</th>
//               <th>Status</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {vendors.map((vendor, index) => (
//               <tr key={vendor._id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <div className="d-flex align-items-center gap-10 w-max-content">
//                     {/* {!imageLoading[vendor._id] && ( */}
//                     <img
//                       width="50"
//                       className="avatar rounded-circle"
//                       src={vendor?.vendorImage}
//                       alt={vendor?.firstName}
//                     />
//                   </div>
//                 </td>
//                 <td>
//                   <a className="title-color">{vendor?.shopName}</a>
//                 </td>
//                 <td>
//                   <label
//                     className={`badge badge-${getStatusBadge(vendor?.status)}`}
//                   >
//                     {vendor?.firstName}
//                   </label>
//                 </td>
//                 <td>
//                   <div className="mb-1">
//                     <strong>
//                       <a
//                         className="title-color hover-c1"
//                         href={`mailto:${vendor?.email}`}
//                       >
//                         {vendor?.email}
//                       </a>
//                     </strong>
//                   </div>
//                   <a
//                     className="title-color hover-c1"
//                     href={`tel:${vendor?.phoneNumber}`}
//                   >
//                     {vendor?.phoneNumber}
//                   </a>
//                 </td>
//                 <td>
//                   <label
//                     className={`badge bg-${getStatusBadge(vendor?.status)}`}
//                   >
//                     {vendor?.status}
//                   </label>
//                 </td>
//                 <td className="text-center">
//                   <div className="btn--group flex gap-2">
//                     <ActionButton
//                       to={`/vendordetail/${vendor._id}`} // Dynamic link
//                       icon={FaEye} // Pass dynamic icon
//                       className="ml-4"
//                       label="View"
//                     />
//                     <ActionButton
//                       onClick={() => onDeleteVendor(vendor._id)} // Handle the delete action
//                       icon={FaTrash} // Pass dynamic icon
//                       className="ml-4"
//                       label="Delete"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// );

// export default VendorTable;



// import React, { memo } from "react";
// import { FaEye, FaTrash } from "react-icons/fa";
// import TableList from "../../../../components/FormInput/TableList";
// import { ToastContainer } from "react-toastify"; 
// import ActionButton from "../../../../components/ActionButton/Action";
// import LoadingSpinner from "../../../../components/LoodingSpinner/LoadingSpinner";

// const VendorTable = memo(({ onDeleteVendor, vendors }) => {
//   const columns = [
//     { key: "index", label: "SL", render: (_, index) => index + 1 },
//     {
//       key: "vendorImage",
//       label: "Vendor Image",
//       render: (vendor) => (
//         <img
//           width="50"
//           className="avatar rounded-circle"
//           src={vendor?.vendorImage}
//           alt={vendor?.firstName}
//         />
//       ),
//     },
//     { key: "shopName", label: "Shop Name" },
//     {
//       key: "firstName",
//       label: "Vendor Name",
//       render: (vendor) => (
//         <label className={`badge badge-${getStatusBadge(vendor?.status)}`}>
//           {vendor?.firstName}
//         </label>
//       ),
//     },
//     {
//       key: "contactInfo",
//       label: "Contact Info",
//       render: (vendor) => (
//         <>
//           <strong>
//             <a className="title-color hover-c1" href={`mailto:${vendor?.email}`}>
//               {vendor?.email}
//             </a>
//           </strong>
//           <br />
//           <a className="title-color hover-c1" href={`tel:${vendor?.phoneNumber}`}>
//             {vendor?.phoneNumber}
//           </a>
//         </>
//       ),
//     },
//     {
//       key: "status",
//       label: "Status",
//       render: (vendor) => (
//         <label className={`badge bg-${getStatusBadge(vendor?.status)}`}>
//           {vendor?.status}
//         </label>
//       ),
//     },
//     {
//       key: "actions",
//       label: "Action",
//       render: (vendor) => (
//         <div className="btn--group flex gap-2">
//           <ActionButton
//             to={`/vendordetail/${vendor._id}`} // Dynamic link
//             icon={FaEye} // Pass dynamic icon
//           />
//           <ActionButton
//             onClick={() => onDeleteVendor(vendor._id)} // Handle the delete action
//             icon={FaTrash} // Pass dynamic icon
//           />
//         </div>
//       ),
//     },
//   ];

//   // Function to get the badge color based on status
//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "approved":
//       case "active":
//         return "green";
//       case "pending":
//         return "";
//       case "inactive":
//       case "rejected":
//         return "danger";
//       default:
//         return "secondary";
//     }
//   };

//   return (
//     <div className="bg-[#F9F9FB] px-0 sm:px-6 md:px-8 lg:px-10 py-0 w-full">
//       <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
//         <React.Suspense
//           fallback={
//             <div>
//               <LoadingSpinner />
//             </div>
//           }
//         >
//           <TableList
//             title="Vendor Management"
//             imageSrc="/add-new-seller.png"
//             tableTitle="List of Vendors"
//             listData={vendors}
//             columns={columns}
//             exportFileName="vendors"
//             headerActions={
//               <>
//                 <ActionButton
//                   to="/addvenderform"
//                   className="px-4 py-2 rounded-md"
//                   label="Add Vendor"
//                 />
//               </>
//             }
//           />
//         </React.Suspense>
//       </div>
//       <ToastContainer /> {/* Toast notifications will be shown here */}
//     </div>
//   );
// });

// export default VendorTable;



import React, { memo } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import TableList from "../../../../components/FormInput/TableList";
import { ToastContainer } from "react-toastify"; // Import ToastContainer for notifications
import ActionButton from "../../../../components/ActionButton/Action";
import LoadingSpinner from "../../../../components/LoodingSpinner/LoadingSpinner";

const VendorTable = memo(({ onDeleteVendor, vendors }) => {
  // Define columns for the TableList
  const columns = [
    { key: "index", label: "SL", render: (_, index) => index + 1 },
    {
      key: "vendorImage",
      label: "Vendor Image",
      render: (vendor) => (
        <img
          width="50"
          className="avatar rounded-circle"
          src={vendor?.vendorImage}
          alt={vendor?.firstName}
        />
      ),
    },
    { key: "shopName", label: "Shop Name" },
    {
      key: "firstName",
      label: "Vendor Name",
      render: (vendor) => (
        <label className={`badge badge-${getStatusBadge(vendor?.status).text}`}>
          {vendor?.firstName}
        </label>
      ),
    },
    {
      key: "contactInfo",
      label: "Contact Info",
      render: (vendor) => (
        <>
          <strong>
            <a className="title-color hover-c1" href={`mailto:${vendor?.email}`}>
              {vendor?.email}
            </a>
          </strong>
          <br />
          <a className="title-color hover-c1" href={`tel:${vendor?.phoneNumber}`}>
            {vendor?.phoneNumber}
          </a>
        </>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (vendor) => {
        const statusClasses = getStatusBadge(vendor?.status);
        return (
          <label className={`badge bg-${statusClasses.bg} text-${statusClasses.text}`}>
            {vendor?.status}
          </label>
        );
      },
    },
    {
      key: "actions",
      label: "Action",
      render: (vendor) => (
        <div className="btn--group flex gap-2">
          <ActionButton
            to={`/vendordetail/${vendor._id}`} // Dynamic link
            icon={FaEye} // Pass dynamic icon
          />
          <ActionButton
            onClick={() => onDeleteVendor(vendor._id)} // Handle the delete action
            icon={FaTrash} // Pass dynamic icon
          />
        </div>
      ),
    },
  ];

  // Function to get the badge color based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return { bg: "green-400", text: "black" }; // green background with white text
      case "active":
        return { bg: "green-400", text: "white" }; // green background with white text
      case "pending":
        return { bg: "yellow-600", text: "black" }; // yellow background with black text
      case "inactive":
      case "rejected":
        return { bg: "red-400", text: "white" }; // danger background with white text
      default:
        return { bg: "", text: "black" }; // secondary background with white text
    }
  };

  return (
    <div className="bg-[#F9F9FB] px-0 sm:px-6 md:px-8 lg:px-10 py-0 w-full">
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <React.Suspense
          fallback={
            <div>
              <LoadingSpinner />
            </div>
          }
        >
          <TableList
            title="Vendor Management"
            imageSrc="/add-new-seller.png"
            tableTitle="List of Vendors"
            listData={vendors}
            columns={columns}
            exportFileName="vendors"
            headerActions={
              <>
                <ActionButton
                  to="/addvenderform"
                  className="px-4 py-2 rounded-md"
                  label="Add Vendor"
                />
              </>
            }
          />
        </React.Suspense>
      </div>
      <ToastContainer /> {/* Toast notifications will be shown here */}
    </div>
  );
});

export default VendorTable;
