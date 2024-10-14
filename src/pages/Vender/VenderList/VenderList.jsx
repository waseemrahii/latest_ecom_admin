// import React, { useEffect, useState, Suspense, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchVendors,
//   deleteVendor,
//   updateVendorStatus,
//   resetError,
// } from "../../../components/redux/vendorSlice";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AiOutlinePlus } from "react-icons/ai";

// // Lazy load VendorSearch and VendorTable components
// import VendorSearch from "./VendorList/VendorSearch";
// import VendorTable from "./VendorList/VendorTable";
// import ExportButton from "../../../components/ActionButton/Export";
// import { FaDownload } from "react-icons/fa";
// import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

// const VendorList = () => {
//   const dispatch = useDispatch();
//   const [imageLoading, setImageLoading] = useState({});
//   const vendors = useSelector((state) => state.vendor?.vendors || []);
//   const loading = useSelector((state) => state.vendor?.loading || false);
//   const error = useSelector((state) => state.vendor?.error || null);
//   const [deleting, setDeleting] = useState(false); // State to manage deletion loading

//   useEffect(() => {
//     dispatch(fetchVendors());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error) {
//       Swal.fire({
//         title: "Error",
//         text: error,
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//       dispatch(resetError()); // Reset error after showing
//     }
//   }, [error, dispatch]);

//   const handleDeleteVendor = async (vendorId) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to recover this vendor!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//       showLoaderOnConfirm: true, // Show SweetAlert loader
//       allowOutsideClick: () => !Swal.isLoading(), // Prevent closing while loading
//       preConfirm: async () => {
//         try {
//           setDeleting(true); // Show the loading spinner
//           await dispatch(deleteVendor({ vendorId }));
//           await dispatch(fetchVendors()); // Fetch updated vendors after deletion
//           return true;
//         } catch (error) {
//           Swal.showValidationMessage(`Request failed: ${error}`);
//         } finally {
//           setDeleting(false); // Hide the loading spinner
//         }
//       },
//     });

//     if (result.isConfirmed) {
//       Swal.fire("Deleted!", "Vendor has been deleted.", "success");
//     }
//   };

//   const handleUpdateStatus = async (vendorId, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "inactive" : "active";
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: `Are you sure you want to update the status to ${newStatus}?`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, update it!",
//     });

//     if (result.isConfirmed) {
//       dispatch(updateVendorStatus({ vendorId, status: newStatus }));
//       Swal.fire(
//         "Updated!",
//         `Vendor status has been updated to ${newStatus}.`,
//         "success"
//       );
//     }
//   };

//   const memoizedVendors = useMemo(() => vendors, [vendors]);

//   // if (loading)
//   //   return (
//   //     <div>
//   //       <LoadingSpinner />
//   //     </div>
//   //   );
//   // else if (error)
//   //   return (
//   //     <div>
//   //       <h2>Error: {error}</h2>
//   //     </div>
//   //   );

//   return (
//     <div className="content container-fluid">
//       <div className="mb-4 p-4">
//         <h2 className="h1 mb-2 text-capitalize d-flex align-items-center gap-2">
//           <img src="/add-new-seller.png" alt="" />
//           Vendor List
//           <span className="badge badge-soft-dark radius-50 fz-16 text-capitalize">
//             {vendors.length}
//           </span>
//         </h2>
//         <div className="card">
//           <div className="card-body">
//             <div className="d-flex flex-col sm:flex-row justify-between mb-3">
//               <Suspense fallback={<div>Loading Search...</div>}>
//                 <VendorSearch />
//               </Suspense>
//               <div className="flex mt-2 items-center gap-4">
//                 <Link
//                   to="/addvenderform"
//                   className="px-4 py-2 rounded-md bg-primary text-white hover:text-white hover:bg-primary-dark flex items-center gap-2 justify-center  sm:mt-0"
//                 >
//                   <AiOutlinePlus className="text-[1rem]" />{" "}
//                   <span className="text-sm">Add New Vendor</span>
//                 </Link>
//                 <ExportButton
//                   data={vendors} // Pass the data to export
//                   filename="VendorList" // Optional filename for the exported file
//                   icon={FaDownload} // Icon for the button
//                   label="Export " // Button label
//                   className="bg-primary text-white hover:bg-primary-dark" // Tailwind classes for styling
//                   style={{ color: "white" }} // Optional inline styles
//                 />
//               </div>
//             </div>
//             <Suspense fallback={<div>Loading Table...</div>}>
//               <VendorTable
//                 vendors={memoizedVendors}
//                 onDeleteVendor={handleDeleteVendor}
//                 onUpdateStatus={handleUpdateStatus}
//                 setImageLoading={setImageLoading}
//                 imageLoading={imageLoading}
//               />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorList;

import React, { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAd, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../../../components/FormInput/ConfirmationModal";
import {
  deleteVendor,
  fetchVendors,
  updateVendorStatus,
} from "../../../components/redux/vendorSlice";
import ActionButton from "../../../components/ActionButton/Action";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

// Lazy load the TableList component
const LazyTableList = lazy(() =>
  import("../../../components/FormInput/TableList")
);

const VendorList = () => {
  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.vendor);

  // Fetch vendors on component mount
  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  // Handle vendor status update with confirmation
  // const handleUpdateStatus = (id, currentStatus) => {
  //   const newStatus = currentStatus === "active" ? "inactive" : "active";
  //   ConfirmationModal({
  //     title: "Are you sure?",
  //     text: `Do you want to change the status to ${newStatus}?`,
  //   }).then((willUpdate) => {
  //     if (willUpdate) {
  //       dispatch(updateVendorStatus({ vendorId: id, status: newStatus }))
  //         .then(() => toast.success(`Vendor status updated to ${newStatus}!`))
  //         .catch(() => toast.error("Failed to update vendor status."));
  //     } else {
  //       toast.info("Status update canceled.");
  //     }
  //   });
  // };

  // Handle vendor deletion with confirmation
  const handleDeleteVendor = (id) => {
    ConfirmationModal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this vendor!",
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteVendor(id))
          .then(() => toast.success("Vendor deleted successfully!"))
          .catch(() => toast.error("Failed to delete the vendor."));
      } else {
        toast.info("Vendor deletion canceled.");
      }
    });
  };

  // Define the table columns
  const columns = [
    {
      key: "_id",
      label: "SL",
      render: (_, __, index) => index + 1, // SL (Serial Number)
    },
    {
      key: "shopName",
      label: "Shop Name",
      render: (vendor) => (
        <div className="flex items-center whitespace-nowrap">
          <img
            src={vendor.vendorImage} // Shop Image
            alt={vendor.shopName}
            className="h-10 w-10 rounded-full mr-2"
          />
          <span>{vendor.shopName}</span>
        </div>
      ),
    },
    {
      key: "firstName",
      label: "Seller Name",
      render: (vendor) => (
        <span className="whitespace-nowrap">{vendor.firstName}</span>
      ),
    },
    {
      key: "phoneNumber",
      label: "Contact Info",
      render: (vendor) => (
        <span className="whitespace-nowrap">{vendor.phoneNumber}</span>
      ),
    },
    {
      key: "email",
      label: "Email",
      render: (vendor) => (
        <span className="whitespace-nowrap">{vendor.email}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (vendor) => (
        <span
          className={`px-2 py-1 rounded-md text-white ${
            vendor.status === "active" ? "bg-lightgreen" : "bg-lightred"
          }`}
        >
          {vendor.status === "active" ? "Active" : "Inactive"}
        </span>
      ),
    },
    { key: "totalProducts", label: "Total Products" },
    { key: "totalOrders", label: "Total Orders" },
    {
      key: "action",
      label: "Action",
      render: (vendor) => (
        <div className="flex justify-center gap-2">
          <ActionButton
            to={`/vendordetail/${vendor._id}`}
            icon={FaEye}
            label="View"
          />
          <ActionButton
            onClick={() => handleDeleteVendor(vendor._id)}
            icon={FaTrash}
            label="Delete"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Table List */}
      <React.Suspense fallback={<LoadingSpinner />}>
        <LazyTableList
          title="Vendor List"
          tableTitle="Vendor List"
          listData={vendors}
          imageSrc="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
          fetchListData={() => dispatch(fetchVendors())}
          columns={columns} // Table columns
          exportFileName="vendorList"
          searchPlaceholder="Search Vendor"
          headerActions={
            <>
              <Link
                to={"/addvenderform"}
                className="flex items-center gap-2 btn px-4 py-2 text-white rounded-md text-nowrap bg-primary hover:bg-primary-dark"
                style={{ color: "white" }}
              >
                <FaPlus /> Add Vendor
              </Link>
              {/* <ActionButton
                to={`/vendordetail`}
                // to="/addvendor"
                className="px-4 py-2 rounded-md"
                label="Add Vendor"
                icon={FaAd}
              /> */}
            </>
          }
        />
      </React.Suspense>

      <ToastContainer />
    </div>
  );
};

export default React.memo(VendorList);
