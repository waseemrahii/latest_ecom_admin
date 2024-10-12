// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBanners, updateBannerStatus, deleteBanner } from '../../../components/redux/bannerSlice';
// import Swal from 'sweetalert2';
// import { FaPen } from 'react-icons/fa';
// import { FiTrash } from 'react-icons/fi';
// import { IoMdAdd } from 'react-icons/io';
// import { Link } from 'react-router-dom';

// const BannerSetup = () => {
//   const dispatch = useDispatch();
//   const { banners, loading } = useSelector((state) => state.banner);
//   const [filters, setFilters] = useState({ searchValue: '' });

//   useEffect(() => {
//     dispatch(fetchBanners());
//   }, [dispatch]);

//   const handleInputChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Filter logic should be placed here or you can set it to state if necessary
//     // For now, I’ll just log the filtered results
//     const filteredBanners = banners.filter((banner) =>
//       banner.name.toLowerCase().includes(filters.searchValue.toLowerCase())
//     );
//     console.log(filteredBanners);
//   };

//   const handleTogglePublish = (id, currentStatus) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${currentStatus ? 'unpublish' : 'publish'} this banner?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(updateBannerStatus({ bannerId: id, status: !currentStatus }));
//         Swal.fire('Updated!', 'Banner status has been updated.', 'success');
//       }
//     });
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this banner?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteBanner(id));
//         Swal.fire('Deleted!', 'Banner has been deleted.', 'success');
//       }
//     });
//   };

//   if (loading) {
//     return <p>Loading banners...</p>;
//   }

//   return (
//     <div className="bg-[#F9F9FB] px-5 py-5 w-full">
//       <div className="font-bold text-[1.3rem] flex gap-2 items-center">
//         <img
//           src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
//           alt=""
//           className="w-8 h-8"
//         />
//         <h1>
//           Banner Setup{" "}
//           <span className="text-xl font-weight-bold text-blue-500">(Default)</span>
//         </h1>
//       </div>
//       <div className="row mt-8">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="d-flex justify-content-between align-items-center px-5">
//               <div className="flex gap-3">
//                 <h1 className="text-[1rem] font-bold">Banner Table</h1>
//                 <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
//                   {banners.length}
//                 </span>
//               </div>
//               <div className="px-3 py-4">
//                 <div className="row align-items-center">
//                   <div className="col-lg-12 d-flex justify-content-end gap-3 align-items-center">
//                     <form onSubmit={handleSearchSubmit}>
//                       <div className="flex justify-center gap-2">
//                         <input
//                           type="search"
//                           name="searchValue"
//                           className="form-control"
//                           placeholder="Search by Banner Name"
//                           value={filters.searchValue}
//                           onChange={handleInputChange}
//                         />
                      
//                       </div>
//                     </form>
//                     <Link 
//                       to='/addbannerform'
//                       className="flex gap-2 items-center bg-green-500 justify-center border-green-500 border text-white rounded px-3 py-2"
//                     >
//                       <IoMdAdd />
//                       Add banner
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="table-responsive">
//               <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                 <thead className="bg-blue-50 text-blue-900">
//                   <tr>
//                     <th className="px-4 py-2">ID</th>
//                     <th className="px-4 py-2">Image</th>
//                     <th className="px-4 py-2 text-center">Banner Type</th>
//                     <th className="px-4 py-2 text-center">Published</th>
//                     <th className="px-4 py-2 text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {banners.map((banner) => (
//                     <tr key={banner._id} className="hover:bg-gray-100">
// <td className="p-10">{banner._id}</td>
//      {console.log("Banner image URL:", banner.bannerImage)}
//                       <td className="px-4 py-4">
//                         <a href="#" className="flex items-center gap-2">
//                         <img
//   src={banner.bannerImage}
//   alt=""
//   className="h-20 w-24 object-cover" // Adjusted for a height and width of 100px
// />

//                         </a>
//                       </td>
//                       <td className="px-4 py-2 text-center text-[.9rem]">
//                         {banner.bannerType}
//                       </td>
//                       <td className="px-4 py-2 text-center">
//                         <label className="switcher snipcss-qKxnT">
//                           <input
//                             type="checkbox"
//                             className="switcher_input toggle-switch-message"
//                             checked={banner.published}
//                             readOnly
//                             onClick={() => handleTogglePublish(banner._id, banner.published)}
//                           />
//                           <span className="switcher_control"></span>
//                         </label>
//                       </td>
//                       <td className="px-4 py-2 text-center">
//                         <div className="flex justify-center gap-2">
//                           <Link 
//                             to={`/editbannerform/${banner._id}`}
//                             className="btn bg-green-400 p-2 btn-sm text-white border-green-500"
//                           >
//                             <FaPen />
//                           </Link>
//                           <button
//                             type="button"
//                             className="btn btn-outline-danger p-2 btn-sm text-pink-500 border-pink-500"
//                             onClick={() => handleDelete(banner.id)}
//                           >
//                             <FiTrash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerSetup;



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
      key: "_id",
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
            // label="Edit"
          />
          <ActionButton
            onClick={() => handleDeleteBanner(banner._id)}
            icon={FaTrash}
            // label="Delete"
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
            title="Banner"
            tableTitle="Banner List"
            imageSrc="/banner.png"
            listData={banners}
            fetchListData={() => dispatch(fetchBanners())}
            columns={columns}
            exportFileName="bannerList"
            searchPlaceholder="Search by Banner ID"
            headerActions={
              <>
                <ActionButton
                  to="/addnewbrand"
                  className="px-4 py-2 rounded-md"
                  label="Add Brand"
                />
                {/* if their is multiple button  */}
                {/* <ActionButton
                  to="/addnewbrand"
                  className="px-4 py-2 rounded-md"
                  label="Limited"
                /> */}
              </>
            }
          />
        </React.Suspense>

        <ToastContainer />
      </div>
    </div>
  );
};

export default React.memo(BannerSetup);
