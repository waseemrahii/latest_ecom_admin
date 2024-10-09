// SubCategories.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ApiUrl from "../../../ApiUrl";
import SubCategoryForm from "./SubCategoryForm";
import SubCategoryList from "./SubCategoryList";
import SearchBar from "./SearchBar";
import LoadingSpinner from "../../../components/LoodingSpinner/LoadingSpinner";

const SubCategoriess = () => {
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

    axios
      .get(`${ApiUrl}sub-categories/`)
      .then((response) => {
        setSubCategories(response.data.doc);
      })
      .catch((error) => {
        console.error("Error fetching sub-categories:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${ApiUrl}sub-categories/`, formData)
      .then((response) => {
        setSubCategories([...subCategories, response.data.doc]);
        setFormData({
          name: "",
          mainCategory: "",
          priority: "",
        });
      })
      .catch((error) => {
        console.error("Error adding subcategory:", error);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${ApiUrl}sub-categories/${id}`)
          .then(() => {
            setSubCategories(
              subCategories.filter((subCategory) => subCategory._id !== id)
            );
            Swal.fire("Deleted!", "Sub-category has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting subcategory:", error);
          });
      }
    });
  };

  const handleTabClick = (lang) => {
    setActiveTab(lang);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // if (loading)
  //   return (
  //     <div>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="content container-fluid">
      <div className="card">
        <div className="card-body">
          <h2 className="font-semibold text-[1rem]">Sub Categories</h2>
          <SubCategoryForm
            formData={formData}
            categories={categories}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
          />
        </div>
      </div>
      <div className="card mt-4 p-4">
        <div className="flex flex-col md:flex-row items-start gap-4 justify-between">
          <h2 className="font-semibold text-[1rem]">Sub Categories</h2>
          <div className="card-header">
            <SearchBar />
          </div>
        </div>

        <div className="card-body">
          <SubCategoryList
            subCategories={subCategories}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default SubCategoriess;
