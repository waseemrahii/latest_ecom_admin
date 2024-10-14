import React, { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaPen, FaTrash } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteVendor,
  fetchVendors,
  updateVendorStatus,
} from "../../../components/redux/vendorSlice";
import ConfirmationModal from "../../../components/FormInput/ConfirmationModal";
import Switcher from "../../../components/FormInput/Switcher";
import ActionButton from "../../../components/ActionButton/Action";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

const LazyTableList = lazy(() =>
  import("../../../components/FormInput/TableList")
);

const VenderListDetail = () => {
  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(fetchVendors()); // Fetch vendors on load
  }, [dispatch]);

  const handleUpdateStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    ConfirmationModal({
      title: "Are you sure?",
      text: `Do you want to change the status to ${newStatus}?`,
    }).then((willUpdate) => {
      if (willUpdate) {
        dispatch(updateVendorStatus({ vendorId: id, status: newStatus }))
          .then(() => toast.success(`Vendor status updated to ${newStatus}!`))
          .catch(() => toast.error("Failed to update vendor status."));
      } else {
        toast.info("Status update canceled.");
      }
    });
  };

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

  const columns = [
    { key: "name", label: "Vendor Name" },
    {
      key: "logo",
      label: "Vendor Logo",
      render: (vendor) => (
        <img src={vendor.logo} alt={vendor.name} className="h-16 w-16" />
      ),
    },
    { key: "totalProducts", label: "Total Products" },
    { key: "totalOrders", label: "Total Orders" },
    {
      key: "status",
      label: "Status",
      render: (vendor) => (
        <Switcher
          checked={vendor?.status === "active"}
          onChange={() => handleUpdateStatus(vendor._id, vendor.status)}
        />
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (vendor) => (
        <div className="flex justify-center gap-2">
          <ActionButton
            to={`/update/${vendor._id}`}
            icon={FaPen}
            label="Edit"
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
      <React.Suspense fallback={<LoadingSpinner />}>
        <LazyTableList
          title="Vendor List"
          tableTitle="Vendor List"
          listData={vendors}
          imageSrc="/top-selling-product-icon.png"
          fetchListData={() => dispatch(fetchVendors())}
          columns={columns}
          exportFileName="vendorList"
          searchPlaceholder="Search by Vendor Name"
        />
      </React.Suspense>
      <ToastContainer />
    </div>
  );
};

export default React.memo(VenderListDetail);
