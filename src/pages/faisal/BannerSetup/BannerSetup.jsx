import React, { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBanners,
  updateBannerStatus,
  deleteBanner,
} from "../../../components/redux/bannerSlice";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../../../components/FormInput/ConfirmationModal";
import ActionButton from "../../../components/ActionButton/Action";
import Switcher from "../../../components/FormInput/Switcher";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

// Lazy load TableList for performance
const LazyTableList = lazy(() =>
  import("../../../components/FormInput/TableList")
);

const BannerSetup = () => {
  const dispatch = useDispatch();
  const { banners, loading } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  const handleUpdateStatus = (id, currentStatus) => {
    const newStatus = currentStatus ? "unpublish" : "publish";
    ConfirmationModal({
      title: "Are you sure?",
      text: `Do you want to ${newStatus} this banner?`,
    }).then((willUpdate) => {
      if (willUpdate) {
        dispatch(updateBannerStatus({ bannerId: id, status: !currentStatus }))
          .then(() => toast.success(`Banner status updated to ${newStatus}!`))
          .catch(() => toast.error("Failed to update banner status."));
      } else {
        toast.info("Status update canceled.");
      }
    });
  };

  const handleDeleteBanner = (id) => {
    ConfirmationModal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this banner!",
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBanner(id))
          .then(() => toast.success("Banner deleted successfully!"))
          .catch(() => toast.error("Failed to delete the banner."));
      } else {
        toast.info("Banner deletion canceled.");
      }
    });
  };

  const columns = [
    {
      key: "banner._id",
      label: "SL",
      render: (banner, index) => index + 1, // Display index + 1 for sequential numbering
    },
    {
      key: "bannerImage",
      label: "Image",
      render: (banner) => (
        <img
          src={banner.bannerImage}
          alt={banner.name}
          className="h-16 w-24 object-cover"
        />
      ),
    },
    { key: "bannerType", label: "Banner Type" },
    {
      key: "published",
      label: "Published",
      render: (banner) => (
        <Switcher
          checked={banner.published}
          onChange={() => handleUpdateStatus(banner._id, banner.published)}
        />
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (banner) => (
        <div className="flex justify-center gap-2">
          <ActionButton
            to={`/editbannerform/${banner._id}`}
            icon={FaEdit}
            label="Edit"
          />
          <ActionButton
            onClick={() => handleDeleteBanner(banner._id)}
            icon={FaTrash}
            label="Delete"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#F9F9FB] px-5 py-5 w-full">
      <div className="mt-8">
        <React.Suspense
          fallback={
            <div>
              <LoadingSpinner />
            </div>
          }
        >
          <LazyTableList
            title="Banner List"
            listData={banners}
            fetchListData={() => dispatch(fetchBanners())}
            columns={columns}
            exportFileName="bannerList"
            searchPlaceholder="Search by Banner ID"
          />
        </React.Suspense>

        <ToastContainer />
      </div>
    </div>
  );
};

export default React.memo(BannerSetup);
