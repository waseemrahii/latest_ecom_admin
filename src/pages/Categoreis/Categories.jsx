
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
// import { fetchCategories, createCategory, deleteCategory } from "../../components/redux/categorySlice";
// import CategoryForm from "./CategoryForm";
// import CategoryList from "./CategoryList";

// const Categories = () => {
//   const dispatch = useDispatch();
//   const { categories, loading, error } = useSelector((state) => state.productCategory);

//   const [newCategory, setNewCategory] = useState({
//     name: "",
//     priority: "",
//     logo: "",
//   });
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedLang, setSelectedLang] = useState("en");

//   useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         await dispatch(fetchCategories({}));
//       } catch (error) {
//         toast.error("Failed to load categories");
//         console.error(error.message);
//       }
//     };

//     loadCategories(); // Load categories on component mount
//   }, [dispatch]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error); // Display Redux error message
//     }
//   }, [error]);

//   const handleInputChange = (e) => {
//     setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (logoString) => {
//     setNewCategory({ ...newCategory, logo: logoString });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {name : newCategory.name ,priority : newCategory.priority ,logo : newCategory.logo}

//   // Log the keys and values of formData
//       // for (let [key, value] of formData.entries()) {
//       //   console.log(${key}:, value);
//       // }
//     try {
//       console.log(formData)
//       const action = await dispatch(createCategory(formData));
//       console.log(action);
//       if (createCategory.fulfilled.match(action)) {
//         setNewCategory({ name: "", priority: "", logo: "" });
//         toast.success("Category added successfully");
//         await dispatch(fetchCategories({})); // Refresh categories
//       } else {
//         toast.error(action.payload || "Failed to add category");
//       }
//     } catch (error) {
//       toast.error(error.message || "Failed to add category");
//       console.error(error.message);
//     }
//   };

//   const handleDeleteCategory = async (categoryId) => {
//     try {
//       const action = await dispatch(deleteCategory(categoryId));
//       if (deleteCategory.fulfilled.match(action)) {
//         toast.success("Category deleted successfully");
//         await dispatch(fetchCategories({})); // Refresh categories
//       } else {
//         toast.error(action.payload || "Failed to delete category");
//       }
//     } catch (error) {
//       toast.error(error.message || "Failed to delete category");
//       console.error(error.message);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredCategories = categories.filter(
//     (category) =>
//       category.name && category.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="px-3 md:px-5 md:mx-5 md:py-8 ">
//       <ToastContainer />
//       <h2 className="h1 mb-4 d-flex gap-3">
//         <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="" />
//         Category Setup
//       </h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <CategoryForm
//         selectedLang={selectedLang}
//         newCategory={newCategory}
//         onInputChange={handleInputChange}
//         onFileChange={handleFileChange}
//         onSubmit={handleFormSubmit}
//       />
//       <CategoryList
//         categories={filteredCategories}
//         handleDelete={handleDeleteCategory}
//         handleSearch={handleSearch}
//         searchQuery={searchQuery}
//       />
//     </div>
//   );
// };

// export default Categories;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { fetchCategories, createCategory, deleteCategory } from "../../components/redux/categorySlice";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import ConfirmationModal from "../../components/FormInput/ConfirmationModal";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.productCategory);

  const [newCategory, setNewCategory] = useState({
    name: "",
    priority: "",
    logo: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    const loadCategories = async () => {
      try {
        await dispatch(fetchCategories({}));
      } catch (error) {
        toast.error("Failed to load categories");
        console.error(error.message);
      }
    };

    loadCategories(); // Load categories on component mount
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error); // Display Redux error message
    }
  }, [error]);

  const handleInputChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleFileChange = (logoString) => {
    setNewCategory({ ...newCategory, logo: logoString });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = { name: newCategory.name, priority: newCategory.priority, logo: newCategory.logo };

    try {
      const action = await dispatch(createCategory(formData));
      if (createCategory.fulfilled.match(action)) {
        setNewCategory({ name: "", priority: "", logo: "" });
        toast.success("Category added successfully");
        await dispatch(fetchCategories({})); // Refresh categories
      } else {
        toast.error(action.payload || "Failed to add category");
      }
    } catch (error) {
      toast.error(error.message || "Failed to add category");
      console.error(error.message);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    const confirmed = await ConfirmationModal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      dangerMode: true,
    });

    if (confirmed) {
      try {
        const action = await dispatch(deleteCategory(categoryId));
        if (deleteCategory.fulfilled.match(action)) {
          toast.success("Category deleted successfully");
          await dispatch(fetchCategories({})); // Refresh categories
        } else {
          toast.error(action.payload || "Failed to delete category");
        }
      } catch (error) {
        toast.error(error.message || "Failed to delete category");
        console.error(error.message);
      }
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name && category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-3 md:px-5 md:mx-5 md:py-8 ">
      <ToastContainer />
      <h2 className="h1 mb-4 d-flex gap-3">
        <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="" />
        Category Setup
      </h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <CategoryForm
        selectedLang={selectedLang}
        newCategory={newCategory}
        onInputChange={handleInputChange}
        onFileChange={handleFileChange}
        onSubmit={handleFormSubmit}
      />
      <CategoryList
        categories={filteredCategories}
        handleDelete={handleDeleteCategory}
        handleSearch={handleSearch}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Categories;
