import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiSearch, FiEdit, FiTrash } from "react-icons/fi";
import { CiImport } from "react-icons/ci";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchBrands,
  updateBrandStatus,
  deleteBrand,
} from "../../components/redux/brandSlice"; // Adjust the import path as necessary
import LoadingSpinner from "../../components/LoodingSpinner/LoadingSpinner";
import ExportButton from "../../components/ActionButton/Export";
import { FaDownload, FaEdit, FaTrash } from "react-icons/fa";
import ActionButton from "../../components/ActionButton/Action";

const BrandList = () => {
  const dispatch = useDispatch();
  const { brands, loading, error } = useSelector((state) => state.brand);
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const filteredBrands = searchQuery
    ? brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : brands;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteBrand = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this brand!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id)).then(() => {
          toast.success("Brand deleted successfully!");
        });
      }
    });
  };

  // Log in handleUpdateStatus
  const handleUpdateStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    console.log(`Dispatching status update for ${id} to ${newStatus}`);
    dispatch(updateBrandStatus({ brandId: id, status: newStatus }))
      .then(() => {
        console.log(`Status update succeeded for ${id}`);
        toast.success(`Brand status updated to ${newStatus}!`);
      })
      .catch(() => {
        toast.error("Failed to update brand status.");
      });
  };

  if (loading) {
    return (
      <p>
        <LoadingSpinner />
      </p>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className=" mt-3 bg-[#F9F9FB] px-5 py-5 w-[100%]">
      <div className="">
        <ToastContainer />
        <div className="font-bold pb-4 text-[1.3rem] flex gap-2 items-start">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
            alt=""
            className="w-7 h-7"
          />
          <h1>BrandList</h1>
          <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
            {filteredBrands.length}
          </span>
        </div>
        <div className="card">
          <div className="flex items-start justify-between flex-col md:flex-row gap-4 px-5 py-4">
            <h2 className="font-semibold text-[1rem]">Brand List</h2>
            <div className="flex flex-col md:flex-row  items-end gap-4">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-group input-group-custom input-group-merge border-prim">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FiSearch />
                    </div>
                  </div>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="form-control"
                    placeholder="Search by Product Name"
                  />
                  <button
                    type="submit"
                    className="btn btn--success bg-primary text-white border-primary"
                    style={{ color: "white" }}
                  >
                    Search
                  </button>
                </div>
              </form>
              <ExportButton
                data={filteredBrands} // Pass the data to export
                filename="brandList" // Optional filename for the exported file
                icon={FaDownload} // Icon for the button
                label="Export " // Button label
                className="bg-primary text-white hover:bg-primary-dark" // Tailwind classes for styling
                style={{ color: "white" }} // Optional inline styles
              />
            </div>
          </div>
          <div className="table-responsive">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-prim text-white">
                  <tr>
                    <th className="px-4 py-2">SL</th>
                    <th className="px-4 py-2">Brand Logo</th>
                    <th className="px-4 py-2 text-center">Name</th>
                    <th className="px-4 py-2 text-center">Total Product</th>
                    <th className="px-4 py-2 text-center">Total Order</th>
                    <th className="px-4 py-2 text-center">Status</th>
                    <th className="px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBrands.map((brand, index) => (
                    <tr key={brand._id} className="hover:bg-gray-100">
                      <td className="p-10">{index + 1}</td>
                      <td className="px-4 py-2">
                        <a
                          href="#"
                          className="flex items-center gap-2"
                          onClick={(e) => e.preventDefault()}
                        >
                          {/* {console.log("image :", `https://lionfish-app-tdhk5.ondigitalocean.app/uploads/${brand.logo}` )} */}
                          <img
                            src={brand.logo}
                            // src={`https://lionfish-app-tdhk5.ondigitalocean.app/uploads/${brand.logo}`} // Assuming the images are in this path
                            alt={brand.name}
                            className="h-16 w-16 rounded-lg border"
                          />
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center text-[.9rem]">
                        {brand.name}
                      </td>
                      <td className="px-4 py-2 text-center">0</td>
                      <td className="px-4 py-2 text-center">0</td>
                      <td className="text-center">
                        <label className="switcher mx-auto">
                          <input
                            type="checkbox"
                            className="switcher_input"
                            checked={brand.status === "active"}
                            onChange={() =>
                              handleUpdateStatus(brand._id, brand.status)
                            }
                          />
                          <span className="switcher_control" />
                        </label>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex justify-center gap-2">
                          <ActionButton
                            to={`/brandupdate/${brand._id}`}
                            icon={FaEdit} // Pass dynamic icon
                            className="ml-4"
                            label="View"
                          />
                          <ActionButton
                            onClick={() => handleDeleteBrand(brand._id)}
                            icon={FaTrash} // Pass dynamic icon
                            className="ml-4"
                            label="Delete"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="page-area">
            <nav aria-label="Page navigation">
              <ul className="pagination flex gap-2">
                <li className="page-item">
                  <button className="page-link">Prev</button>
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">Next</button>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BrandList;
