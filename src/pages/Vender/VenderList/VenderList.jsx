
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

export default React.memo(VendorList);
