// import React, { useEffect, useState, Suspense, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchVendors,
//   deleteVendor,
//   updateVendorStatus,
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

//   useEffect(() => {
//     dispatch(fetchVendors());
//   }, [dispatch]);

//   const handleDeleteVendor = async (vendorId) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to recover this vendor!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });
    
//     if (result.isConfirmed) {
//       console.log("vendor id to be deleted", vendorId)
//       dispatch(deleteVendor({vendorId}));
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

//   if (loading)
//     return (
//       <div>
//         <LoadingSpinner />
//       </div>
//     );
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="content container-fluid">
//       <div className="mb-4 p-4">
//         <h2 className="h1 mb-2 text-capitalize d-flex align-items-center gap-2">
//           <img src="/add-new-seller.png" alt="" />
//           Vendor List{" "}
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




import React, { useEffect, useState, Suspense, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVendors,
  deleteVendor,
  updateVendorStatus,
  resetError,
} from "../../../components/redux/vendorSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlinePlus } from "react-icons/ai";

// Lazy load VendorSearch and VendorTable components
import VendorSearch from "./VendorList/VendorSearch";
import VendorTable from "./VendorList/VendorTable";
import ExportButton from "../../../components/ActionButton/Export";
import { FaDownload } from "react-icons/fa";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

const VendorList = () => {
  const dispatch = useDispatch();
  const [imageLoading, setImageLoading] = useState({});
  const vendors = useSelector((state) => state.vendor?.vendors || []);
  const loading = useSelector((state) => state.vendor?.loading || false);
  const error = useSelector((state) => state.vendor?.error || null);
  const [deleting, setDeleting] = useState(false); // State to manage deletion loading

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error",
        text: error,
        icon: "error",
        confirmButtonText: "OK",
      });
      dispatch(resetError()); // Reset error after showing
    }
  }, [error, dispatch]);

  const handleDeleteVendor = async (vendorId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this vendor!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true, // Show SweetAlert loader
      allowOutsideClick: () => !Swal.isLoading(), // Prevent closing while loading
      preConfirm: async () => {
        try {
          setDeleting(true); // Show the loading spinner
          await dispatch(deleteVendor({ vendorId }));
          await dispatch(fetchVendors()); // Fetch updated vendors after deletion
          return true;
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        } finally {
          setDeleting(false); // Hide the loading spinner
        }
      },
    });

    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Vendor has been deleted.", "success");
    }
  };

  const handleUpdateStatus = async (vendorId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to update the status to ${newStatus}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    });

    if (result.isConfirmed) {
      dispatch(updateVendorStatus({ vendorId, status: newStatus }));
      Swal.fire(
        "Updated!",
        `Vendor status has been updated to ${newStatus}.`,
        "success"
      );
    }
  };

  const memoizedVendors = useMemo(() => vendors, [vendors]);

  // if (loading)
  //   return (
  //     <div>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // else if (error)
  //   return (
  //     <div>
  //       <h2>Error: {error}</h2>
  //     </div>
  //   );
  
  return (

              <VendorTable
                vendors={memoizedVendors}
                onDeleteVendor={handleDeleteVendor}
                onUpdateStatus={handleUpdateStatus}
                setImageLoading={setImageLoading}
                imageLoading={imageLoading}
              />

  );
};

export default VendorList;
