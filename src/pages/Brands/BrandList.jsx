import React, { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrands,
  updateBrandStatus,
  deleteBrand,
} from "../../components/redux/brandSlice";
import { FaEdit, FaPen, FaTrash } from "react-icons/fa";
// import TableList from "../../components/FormInput/TableList";
import ActionButton from "../../components/ActionButton/Action";
import Switcher from "../../components/FormInput/Switcher";
import ConfirmationModal from "../../components/FormInput/ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/LoodingSpinner/LoadingSpinner";
import { IoPencilSharp } from "react-icons/io5";
import TableList from "../../components/FormInput/TableList";

// const LazyTableList = lazy(() =>
//   import("../../components/FormInput/TableList")
// );

const BrandList = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleUpdateStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    ConfirmationModal({
      title: "Are you sure?",
      text: `Do you want to change the status to ${newStatus}?`,
    }).then((willUpdate) => {
      if (willUpdate) {
        dispatch(updateBrandStatus({ brandId: id, status: newStatus }))
          .then(() => toast.success(`Brand status updated to ${newStatus}!`))
          .catch(() => toast.error("Failed to update brand status."));
      } else {
        toast.info("Status update canceled.");
      }
    });
  };

  const handleDeleteBrand = (id) => {
    ConfirmationModal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this brand!",
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id))
          .then(() => toast.success("Brand deleted successfully!"))
          .catch(() => toast.error("Failed to delete the brand."));
      } else {
        toast.info("Brand deletion canceled.");
      }
    });
  };

  const columns = [
    { key: "name", label: "Brand Name" },
    {
      key: "logo",
      label: "Brand Logo",
      render: (brand) => (
        <img src={brand.logo} alt={brand.name} className="h-16 w-16" />
      ),
    },
    { key: "totalProduct", label: "Total Product" },
    { key: "totalOrder", label: "Total Order" },
    {
      key: "status",
      label: "Status",
      render: (brand) => (
        <Switcher
          checked={brand?.status === "active"}
          onChange={() => handleUpdateStatus(brand._id, brand.status)}
        />
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (brand) => (
        <div className="flex justify-center gap-2">
          <ActionButton to={`/update/${brand._id}`} icon={FaPen} label="Edit" />
          <ActionButton
            onClick={() => handleDeleteBrand(brand._id)}
            icon={FaTrash}
            label="Delete"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="">
      {/* <React.Suspense */}
      fallback=
      {/* {
        <div>
          <LoadingSpinner />
        </div>
      } */}
      {/* > */}
      {/* <LazyTableList
          title="Brand List"
          tableTitle="Brand List"
          listData={brands}
          imageSrc="/top-selling-product-icon.png"
          fetchListData={() => dispatch(fetchBrands())}
          columns={columns}
          exportFileName="brandList"
          searchPlaceholder="Search by Brand Name"
        /> */}
      <div className="">
        <TableList
          title="Brand List"
          listData={brands}
          fetchListData={() => dispatch(fetchBrands())}
          columns={columns}
          exportFileName="brandList"
          searchPlaceholder="Search by Brand Name"
        />

        <ToastContainer />
      </div>
      {/* </React.Suspense> */}
      <ToastContainer />
    </div>
  );
};

// export default BrandList;

export default React.memo(BrandList);
