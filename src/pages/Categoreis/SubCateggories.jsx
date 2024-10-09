import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaDownload,
  FaChevronDown,
  FaEye,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import ApiUrl from "../../ApiUrl";
import ActionButton from "../../components/ActionButton/Action";
const SubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    mainCategory: "",
    priority: "",
  });

  const [activeTab, setActiveTab] = useState("en");

  useEffect(() => {
    axios
      .get(`${ApiUrl}categories/`)
      .then((response) => {
        setCategories(response.data.doc);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch subcategories from backend
    axios
      .get(`${ApiUrl}sub-categories/`)
      .then((response) => {
        setSubCategories(response.data.doc);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  }, [subCategories]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sub cateogry form data--------------", formData);
    // POST request to create subcategory
    axios
      .post(`${ApiUrl}sub-categories`, formData)
      .then((response) => {
        console.log("Subcategory created successfully:", response.data.doc);
        // Update subCategories state to include the new subcategory
        setSubCategories([...subCategories, response.data.doc]);
        Swal.fire("Added!", "The subcategory has been added.", "success");
        setFormData({
          name: "",
          mainCategory: "",
          priority: "",
        });
      })
      .catch((error) => {
        console.error("Error creating subcategory:", error);
        // alert("errorrrrrrrrrrrrrrrrr", error)
      });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle language tab clicks
  const handleTabClick = (lang) => {
    setActiveTab(lang);
  };

  // Function to handle subcategory deletion
  const handleDelete = (subCategoryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this subcategory!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // DELETE request to delete subcategory
        console.log("delate item id ---------", subCategoryId);
        axios
          .delete(`${ApiUrl}sub-categories/${subCategoryId}`)
          .then(() => {
            // Filter out the deleted subcategory from subCategories state
            const updatedSubCategories = subCategories.filter(
              (subCategory) => subCategory._id !== subCategoryId
            );
            setSubCategories(updatedSubCategories);
            Swal.fire(
              "Deleted!",
              "Your subcategory has been deleted.",
              "success"
            );
          })
          .catch((error) => {
            console.error("Error deleting subcategory:", error);
            Swal.fire("Error!", "Failed to delete subcategory.", "error");
          });
      }
    });
  };

  return (
    <div className="content container-fluid snipcss-TxIci">
      <div className="mb-3">
        <h2 className="h1 mb-0 d-flex gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
            alt="Sub Category Setup"
          />
          Sub Category Setup
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-start">
              <form onSubmit={handleSubmit}>
                <ul className="nav nav-tabs w-fit-content mb-4">
                  {["en", "sa", "bd", "in"].map((lang) => (
                    <li className="nav-item" key={lang}>
                      <span
                        className={`nav-link form-system-language-tab cursor-pointer ${
                          activeTab === lang ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(lang)}
                      >
                        {lang === "en"
                          ? "English"
                          : lang === "sa"
                          ? "Arabic"
                          : lang === "bd"
                          ? "Bangla"
                          : "Hindi"}
                        ({lang.toUpperCase()})
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-6 col-lg-4">
                        {["en", "sa", "bd", "in"].map((lang) => (
                          <div
                            key={lang}
                            className={`form-group form-system-language-form ${
                              activeTab === lang ? "" : "d-none"
                            }`}
                          >
                            <label
                              className="title-color"
                              htmlFor={`subCategoryName-${lang}`}
                            >
                              Sub category name{" "}
                              <span className="text-danger">*</span> (
                              {lang.toUpperCase()})
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="form-control"
                              id={`subCategoryName-${lang}`}
                              placeholder="New Sub Category"
                            />
                            <input type="hidden" name="lang[]" value={lang} />
                          </div>
                        ))}
                        <input name="position" value="1" className="d-none" />
                      </div>
                      <div className="form-group col-md-6 col-lg-4">
                        <label className="title-color" htmlFor="mainCategory">
                          Main Category <span className="text-danger">*</span>
                        </label>
                        <select
                          id="mainCategory"
                          name="mainCategory"
                          value={formData.mainCategory}
                          onChange={handleChange}
                          className="form-control"
                          required
                        >
                          <option value="" disabled>
                            Select main category
                          </option>
                          {categories.map((category, index) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-lg-4">
                        <label className="title-color flex" htmlFor="priority">
                          Priority
                        </label>
                        <select
                          className="form-control"
                          name="priority"
                          value={formData.priority}
                          onChange={handleChange}
                          id="priority"
                          required
                        >
                          <option disabled selected>
                            Set Priority
                          </option>
                          {Array.from({ length: 11 }, (_, i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-end">
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn bg-green-400 text-white hover:bg-green-300 hover:text-black"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-20" id="cate-table">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="d-flex flex-wrap justify-content-between gap-3 align-items-center">
                <div>
                  <h5 className="text-capitalize d-flex gap-1">
                    Sub category list
                    <span className="badge badge-soft-dark radius-50 fz-12">
                      {subCategories.length}
                    </span>
                  </h5>
                </div>
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <form>
                    <div
                      className="input-group input-group-custom text-white input-group-merge"
                      style={{ border: "1px solid lightgreen" }}
                    >
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FaSearch />
                        </div>
                      </div>
                      <input
                        type="search"
                        name="searchValue"
                        className="form-control"
                        placeholder="Search by sub category name"
                      />
                      <button
                        type="submit"
                        className="btn "
                        style={{ background: "lightgreen" }}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline--success text-white flex text-nowrap btn-block"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "lightgreen",
                        gap: "4px",
                      }}
                    >
                      <FaDownload /> Export <FaChevronDown />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            width="14"
                            src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
                            alt="Excel"
                          />{" "}
                          Excel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
                <thead className="thead-light thead-50 text-capitalize">
                  <tr>
                    <th>ID</th>
                    <th>Sub category name</th>
                    <th>Category name</th>
                    <th className="text-center">Priority</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log('subcategor-----------',subCategories)} */}
                  {subCategories.filter(Boolean).map((subCategory, index) => (
                    <tr key={subCategory._id}>
                      <td>{index + 1}</td>
                      <td>
                        <span className="d-block font-size-sm text-body">
                          {subCategory.name || "N/A"}
                        </span>
                      </td>
                      <td>
                        <span className="d-block font-size-sm text-body">
                          {subCategory?.mainCategory?.name || "N/A"}
                        </span>
                      </td>
                      <td className="text-center">{subCategory.priority}</td>
                      <td>
                        <div className="d-flex gap-2 justify-content-center">
                          {/* <Link to={`/admin/sub-category/${subCategory._id}/edit`}>
                            <button type="button" className="btn btn-sm bg-green-400 text-white hover:bg-green-600"><FaEye /></button>
                          </Link> */}
                          {/* <ActionButton
                            onClick={() => handleEdit(attribute)}
                            icon={FaEye} // Pass dynamic icon
                            className="ml-4"
                            label="View"
                          /> */}

                          {/* <button type="button" className="btn btn-sm btn-soft-danger"><FaTrash /></button> */}
                          <button
                            type="button"
                            className="btn btn-sm border-red-400
                           text-red-400 hover:bg-red-400
                            hover:text-white "
                            onClick={() => handleDelete(subCategory._id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {subCategories.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No subcategories found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
