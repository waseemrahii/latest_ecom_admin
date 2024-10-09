import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchBrands,
  fetchColors,
  fetchAttributes,
  fetchSubCategories,
  fetchSubSubCategories,
} from "../../../components/redux/categorybrandSlice";

import "react-quill/dist/quill.snow.css";
import { createProduct } from "../../../components/redux/product/productSlice";
import ReactQuill from "react-quill";
import "./form.css";
const AddNewProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const [secondImagePreview, setSecondImagePreview] = useState(null);
  const [showSecondUpload, setShowSecondUpload] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userId = user._id;
  const {
    categories,
    subCategories,
    subSubCategories,
    brands,
    colors,
    attributes,
  } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    subCategorySlug: "",
    subSubCategorySlug: "",
    brand: "",
    productType: "",
    digitalProductType: "physical",
    sku: "",
    unit: "",
    tags: "",
    price: "",
    discount: "",
    discountType: "percent",
    discountAmount: "",
    taxAmount: "",
    taxIncluded: false,
    minimumOrderQty: "",
    shippingCost: "",
    stock: "",
    isFeatured: false,
    videoLink: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [productAttributes, setProductAttributes] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);

  useEffect(() => {
    if (formData.category) {
      dispatch(fetchSubCategories(formData.category));
    }
  }, [dispatch, formData.category]);

  useEffect(() => {
    if (formData.subCategorySlug) {
      dispatch(fetchSubSubCategories(formData.subCategorySlug));
    }
  }, [dispatch, formData.subCategorySlug]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDescriptionChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setShowSecondUpload(true); // Show the second upload box
    }
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
    
  };
  const handleSecondImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSecondImagePreview(URL.createObjectURL(file));
    }
  };

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setImages(files);
  // };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    const files = Array.from(e.target.files);

    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...files]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleAttributeChange = (e) => {
    setSelectedAttribute(e.target.value);
  };

  const addAttribute = () => {
    if (selectedAttribute) {
      const selectedAttr = attributes.find(
        (attr) => attr._id === selectedAttribute
      );
      if (selectedAttr) {
        setProductAttributes((prevAttrs) => [
          ...prevAttrs,
          { _id: selectedAttr._id, name: selectedAttr.name },
        ]);
        setSelectedAttribute("");
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();

    for (const key in formData) {
      let value = formData[key];

      if (key === "tags") {
        const tagsArray = value
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag);
        tagsArray.forEach((tag) => productFormData.append("tags[]", tag));
      } else {
        switch (key) {
          case "price":
          case "discount":
          case "discountAmount":
          case "taxAmount":
          case "shippingCost":
          case "minimumOrderQty":

          case "stock":
            value = parseFloat(value) || 0;
            break;
          case "taxIncluded":
          case "isFeatured":
            value = value === "true";
            break;
          default:
            value = String(value);
            break;
        }
        // Conditionally append digitalProductType
        if (
          key === "digitalProductType" &&
          formData.productType !== "digital"
        ) {
          continue; // Skip adding this field if productType is not 'digital'
        }
        productFormData.append(key, value);
      }
    }

    if (thumbnail) {
      productFormData.append("thumbnail", thumbnail);
    }

    images.forEach((image) => {
      productFormData.append("images", image);
    });

    selectedColors.forEach((color) => {
      productFormData.append("colors[]", color);
    });

    productAttributes.forEach((attribute) => {
      productFormData.append("attributes[]", attribute._id);
    });
    productFormData.append("userId", userId);
    productFormData.append("userType", "admin");

    // Log form data to console
    for (let [key, value] of productFormData.entries()) {
      console.log("key and it value ", key, value);
    }

    try {
      await dispatch(createProduct(productFormData));
      alert("Product added successfully!");
    } catch (error) {
      setErrorMessage(`Error adding product: ${error.message}`);
      console.log(error);
    }
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setSelectedImage(null);
  };

  const removeThumbnail = () => {
    setThumbnail(null);
    setImagePreview("");
    setImagePreview(null);
    setShowSecondUpload(false);
  };
  const removeSecondImage = () => {
    setSecondImagePreview(null);
  };
  return (
    <div>
      <main id="content" role="main" className="main pointer-event">
        <div className="content container-fluid">
          <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
            <h2 className="h1 mb-0 d-flex gap-2">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
                alt=""
              />
              Add New Product
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg space-y-4 p-10"
          >
            {/* Form inputs for each field */}
            <div className="col-12 lightshadow p-4  shadow-md  rounded-md">
              <div className="flex flex-col ">
                <label className="font-semibold">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="p-2 border rounded"
                  required
                />
              </div>
              {/* <div className="flex flex-col gap-2">
        <label className="font-semibold">Product Description</label>
        <textarea name="description" value={formData.description} 
        onChange={handleChange} placeholder="Product Description" 
        className="p-2 border rounded" required />
   
      </div> */}

              <div className="flex flex-col mt-4 ">
                <label className="font-semibold">Product Description</label>
                <ReactQuill
                  name="description"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  className="quill-editor "
                  theme="snow"
                  placeholder="Write the product description here..."
                />
              </div>
            </div>

            <div className="col-12  p-5 flex flex-wrap  shadow-md rounded-md">
              <div className="flex flex-col w-full lg:w-1/3 gap-1 px-2">
                <label className="font-semibold">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="p-2 border rounded bg-white"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No categories available
                    </option>
                  )}
                </select>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 gap-1 px-2">
                <label className="font-semibold">Sub-Category</label>
                <select
                  name="subCategorySlug"
                  value={formData.subCategorySlug}
                  onChange={handleChange}
                  className="p-2 border rounded bg-white"
                >
                  <option value="">Select Sub-Category</option>
                  {subCategories.length > 0 ? (
                    subCategories.map((subCategory) => (
                      <option key={subCategory._id} value={subCategory._id}>
                        {subCategory.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No sub-categories available
                    </option>
                  )}
                </select>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 gap-1 px-2">
                <label className="font-semibold">Sub-Sub-Category</label>
                <select
                  name="subSubCategorySlug"
                  value={formData.subSubCategorySlug}
                  onChange={handleChange}
                  className="p-2 border rounded bg-white"
                >
                  <option value="">Select Sub-Sub-Category</option>
                  {subSubCategories.length > 0 ? (
                    subSubCategories.map((subSubCategory) => (
                      <option
                        key={subSubCategory._id}
                        value={subSubCategory.slug}
                      >
                        {subSubCategory.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No sub-sub-categories available
                    </option>
                  )}
                </select>
              </div>

              <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3 px-2">
                <label className="font-semibold">Brand</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="p-2 bg-white border rounded"
                  required
                >
                  <option value="">Select Brand</option>
                  {brands.map((brand) => (
                    <option key={brand._id} value={brand._id}>
                      {brand.name}
                    </option>
                    // <option key={brand._id} value="">{brand.name}</option>
                  ))}
                </select>
              </div>

              {/* Product Type */}
              <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3 px-2">
                <label className="font-semibold">Product Type</label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="p-2 border rounded bg-white"
                  required
                >
                  <option value="" disabled>
                    Select Product Type
                  </option>
                  <option value="physical">Physical</option>
                  <option value="digital">Digital</option>
                </select>
              </div>

              {/* Conditionally Render Digital Product Type */}
              {formData.productType === "digital" && (
                <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3">
                  <label className="font-semibold">Digital Product Type</label>
                  <select
                    name="digitalProductType"
                    value={formData.digitalProductType}
                    onChange={handleChange}
                    className="p-2 border rounded bg-white"
                  >
                    <option value="" disabled>
                      Select Digital Product Type
                    </option>
                    <option value="readyAfterSell">Ready After Sell</option>
                    <option value="readyProduct">Ready Product</option>
                  </select>
                </div>
              )}

              <div className="flex flex-col w-full lg:w-1/3 gap-1 px-2 mt-3">
                <label className="font-semibold">SKU</label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="SKU"
                  className="p-2 border rounded"
                  required
                />
              </div>

              <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-3 px-2">
                <label className="font-semibold">Unit</label>
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  placeholder="Unit"
                  className="p-2 border rounded"
                  required
                />
              </div>

              <div className="flex flex-col w-full lg:w-1/3 gap-1  mt-3 px-2">
                <label className="font-semibold">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Tags (comma-separated)"
                  className="p-2 border rounded"
                />
              </div>
            </div>

            <div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">
              <div className="flex flex-col w-full lg:w-1/4 gap-1 px-2 mb-4">
                <label className="font-semibold">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="p-2 border rounded"
                  required
                />
              </div>

              <div className="flex flex-col w-full lg:w-1/4 gap-1 px-2 mb-4">
                <label className="font-semibold">Discount</label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  placeholder="Discount"
                  className="p-2 border rounded"
                />
              </div>

              {/* <div className="flex flex-col w-full lg:w-1/4 gap-1 px-2 mb-4">
                <label className="font-semibold">Discount Type</label>
                <select
                  name="discountType"
                  value={formData.discountType}
                  onChange={handleChange}
                  className="p-2 border rounded bg-white"
                >
                  <option value="">Select Discount Type</option>
                  <option value="percent">Percentage</option>
                  <option value="flat">Flat Amount</option>
                </select>
              </div>

              <div className="flex flex-col w-full lg:w-1/4 px-2 gap-1 mb-4">
                <label className="font-semibold">Discount Amount</label>
                <input
                  type="number"
                  name="discountAmount"
                  value={formData.discountAmount}
                  onChange={handleChange}
                  placeholder="Discount Amount"
                  className="p-2 border rounded"
                />
              </div> */}
              <div className="flex flex-col w-full lg:w-1/4 gap-1 px-2 mb-4">
                <label className="font-semibold">Discount Type</label>
                <select
                  name="discountType"
                  value={formData.discountType}
                  onChange={handleChange}
                  className="p-2 border rounded bg-white"
                >
                  <option value="">Select Discount Type</option>
                  <option value="percent">Percentage</option>
                  <option value="flat">Flat Amount</option>
                </select>
              </div>

              <div className="flex flex-col w-full lg:w-1/4 px-2 gap-1 mb-4">
                <label className="font-semibold">Discount Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    name="discountAmount"
                    value={formData.discountAmount}
                    onChange={handleChange}
                    placeholder={`Discount Amount (${
                      formData.discountType === "percent"
                        ? "%"
                        : formData.discountType === "flat"
                        ? "$"
                        : ""
                    })`}
                    className="p-2 border rounded w-full pl-8"
                  />
                  <span className="absolute left-2 top-2.5 text-gray-500">
                    {formData.discountType === "percent"
                      ? "%"
                      : formData.discountType === "flat"
                      ? "$"
                      : ""}
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-full lg:w-1/4 px-2 gap-1 mb-4">
                <label className="font-semibold">Tax Amount</label>
                <input
                  type="number"
                  name="taxAmount"
                  value={formData.taxAmount}
                  onChange={handleChange}
                  placeholder="Tax Amount"
                  className="p-2 border rounded"
                />
              </div>

              <div className="flex flex-col w-full px-2 lg:w-1/4 gap-1 mb-4 ">
                <label className="font-semibold">Tax Included</label>
                <div className="row flex gap-3 justify-center items-center">
                  <input
                    type="checkbox"
                    name="taxIncluded"
                    checked={formData.taxIncluded}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-600">
                    Include tax in price
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12  p-8 flex flex-wrap  shadow-md  rounded-md ">
              <div className="flex flex-col w-full lg:w-1/3 px-2 gap-2">
                <label className="font-semibold">Minimum Order Quantity</label>
                <input
                  type="number"
                  name="minimumOrderQty"
                  value={formData.minimumOrderQty}
                  onChange={handleChange}
                  placeholder="Minimum Order Quantity"
                  className="p-2 border rounded"
                />
              </div>

              <div className="flex flex-col w-full lg:w-1/3 px-2 gap-2">
                <label className="font-semibold">Shipping Cost</label>
                <input
                  type="number"
                  name="shippingCost"
                  value={formData.shippingCost}
                  onChange={handleChange}
                  placeholder="Shipping Cost"
                  className="p-2 border rounded"
                />
              </div>

              <div className="flex flex-col w-full lg:w-1/3 px-2 gap-2">
                <label className="font-semibold">Stock</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="Stock"
                  className="p-2 border rounded"
                />
              </div>
            </div>

            <div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">
              <div className="flex flex-col gap-2 px-2">
                <label className="font-semibold">Video Link</label>
                <input
                  type="text"
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleChange}
                  placeholder="Video Link"
                  className="p-2 border rounded"
                />
              </div>
            </div>

            <div className="col-12  p-5 flex flex-wrap  shadow-md  rounded-md">
              <div className="flex flex-col w-full lg:w-1/2 px-2 gap-2">
                <label className="font-semibold">Colors</label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <label key={color._id} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color._id)}
                        onChange={() => handleColorChange(color._id)}
                        className="form-checkbox"
                      />
                      <span className="ml-2">{color.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full lg:w-1/2 gap-2">
                <label className="font-semibold">Attributes</label>
                <div className="flex w-full gap-2">
                  <select
                    name="attributes"
                    value={selectedAttribute}
                    onChange={handleAttributeChange}
                    className="px-2 border rounded  w-full bg-white"
                  >
                    <option value="">Select Attribute</option>
                    {attributes.map((attr) => (
                      <option key={attr._id} value={attr._id}>
                        {attr.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={addAttribute}
                    className="mt-2 px-4 py-2 bg-primary text-white rounded"
                    style={{ color: "white" }}
                  >
                    Add
                  </button>
                </div>
                <ul className="mt-2">
                  {productAttributes.map((attr) => (
                    <li
                      key={attr._id}
                      className="flex justify-between items-center p-2 border-b"
                    >
                      <span>{attr.name}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setProductAttributes((prevAttrs) =>
                            prevAttrs.filter((a) => a._id !== attr._id)
                          )
                        }
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5">
              {/* <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Product Images</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="p-2 border rounded"
                  />
                </div>
                {images.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Preview"
                          className="w-20 h-20 object-cover border rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}
              <div className="col-12 p-5 flex flex-col gap-3 shadow-md rounded-md">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Product Images</label>

                  <div className="relative flex flex-col items-center justify-center border-dashed border-2 w-36 h-36 border-gray-300 p-6 rounded-md cursor-pointer text-center hover:border-gray-400">
                    {/* Upload Input */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="imageUpload"
                    />

                    <label
                      htmlFor="imageUpload"
                      className="cursor-pointer w-full h-full flex items-center justify-center"
                    >
                      {selectedImage ? (
                        <div className="relative w-full h-full">
                          {/* Image Preview */}
                          <img
                            src={URL.createObjectURL(selectedImage)} // Display the selected image
                            alt="Preview"
                            className="w-full h-full object-cover rounded-md" // Make image fit the box
                          />
                          {/* Cancel Button */}
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.707 4.293a1 1 0 00-1.414 1.414L8.586 9l-3.293 3.293a1 1 0 101.414 1.414L10 10.414l3.293 3.293a1 1 0 001.414-1.414L11.414 9l3.293-3.293a1 1 0 10-1.414-1.414L10 7.586 6.707 4.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          {/* Upload Icon and Text */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 15a4 4 0 010-8 5.978 5.978 0 013.25.96M21 13a4 4 0 00-3.25-3.96A5.978 5.978 0 0015 5a6 6 0 00-5.996 5.797M8 15v-2a2 2 0 012-2h4a2 2 0 012 2v2m-6-4l-2 2m8-2l2 2"
                            />
                          </svg>
                          <p className="text-gray-500 mt-2">Upload Image</p>
                        </div>
                      )}
                    </label>
                  </div>

                  {/* Image Format Info */}
                  <div className="text-sm text-gray-500 mt-2">
                    <p>Image format : Jpg, png, jpeg, webp</p>
                    <p>Image size : Max 2 MB</p>
                  </div>
                </div>
              </div>

              {/* <div className="col-12 p-5 flex flex-col gap-3 mt-4 shadow-md rounded-md">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Product Thumbnail</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="p-2 border rounded"
                  />
                  {imagePreview && (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Thumbnail Preview"
                        className="w-20 h-20 object-cover border rounded mt-2"
                      />
                      <button
                        type="button"
                        onClick={removeThumbnail}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>
              </div> */}
              <div className="col-12 p-5 flex flex-col gap-3 mt-4 shadow-md rounded-md">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Product Thumbnail</label>
        <div className="relative flex flex-col items-center justify-center border-dashed border-2 w-36 h-36 border-gray-300 p-6 rounded-md cursor-pointer text-center hover:border-gray-400">
          {/* File Input for Thumbnail */}
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="hidden"
            id="thumbnailUpload"
          />

          <label htmlFor="thumbnailUpload" className="cursor-pointer w-full h-full flex items-center justify-center">
            {imagePreview ? (
              <div className="relative w-full h-full">
                {/* Thumbnail Image Preview */}
                <img
                  src={imagePreview}
                  alt="Thumbnail Preview"
                  className="w-full h-full object-cover rounded-md" // Make image fit the box
                />
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={removeThumbnail}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.707 4.293a1 1 0 00-1.414 1.414L8.586 9l-3.293 3.293a1 1 0 101.414 1.414L10 10.414l3.293 3.293a1 1 0 001.414-1.414L11.414 9l3.293-3.293a1 1 0 10-1.414-1.414L10 7.586 6.707 4.293z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {/* Upload Icon and Text */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 010-8 5.978 5.978 0 013.25.96M21 13a4 4 0 00-3.25-3.96A5.978 5.978 0 0015 5a6 6 0 00-5.996 5.797M8 15v-2a2 2 0 012-2h4a2 2 0 012 2v2m-6-4l-2 2m8-2l2 2" />
                </svg>
                <p className="text-gray-500 mt-2">Upload Image</p>
              </div>
            )}
          </label>
        </div>

        {/* Conditionally render second upload box */}
        {showSecondUpload && (
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Add Another Image</label>
            <div className="relative flex flex-col items-center justify-center border-dashed border-2 w-36 h-36 border-gray-300 p-6 rounded-md cursor-pointer text-center hover:border-gray-400">
              {/* File Input for Second Image */}
              <input
                type="file"
                accept="image/*"
                onChange={handleSecondImageChange}
                className="hidden"
                id="secondImageUpload"
              />

              <label htmlFor="secondImageUpload" className="cursor-pointer w-full h-full flex items-center justify-center">
                {secondImagePreview ? (
                  <div className="relative w-full h-full">
                    {/* Second Image Preview */}
                    <img
                      src={secondImagePreview}
                      alt="Second Image Preview"
                      className="w-full h-full object-cover rounded-md" // Make image fit the box
                    />
                    {/* Cancel Button for Second Image */}
                    <button
                      type="button"
                      onClick={removeSecondImage}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.707 4.293a1 1 0 00-1.414 1.414L8.586 9l-3.293 3.293a1 1 0 101.414 1.414L10 10.414l3.293 3.293a1 1 0 001.414-1.414L11.414 9l3.293-3.293a1 1 0 10-1.414-1.414L10 7.586 6.707 4.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    {/* Upload Icon and Text */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 010-8 5.978 5.978 0 013.25.96M21 13a4 4 0 00-3.25-3.96A5.978 5.978 0 0015 5a6 6 0 00-5.996 5.797M8 15v-2a2 2 0 012-2h4a2 2 0 012 2v2m-6-4l-2 2m8-2l2 2" />
                    </svg>
                    <p className="text-gray-500 mt-2">Upload Another Image</p>
                  </div>
                )}
              </label>
            </div>
          </div>
        )}

        {/* Image Format Info */}
        <div className="text-sm text-gray-500 mt-2">
          <p>Image format: jpg, png, jpeg, webp</p>
          <p>Image size: Max 2 MB</p>
        </div>
      </div>
    </div>

            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded"
                style={{ color: "white" }}
              >
                Add Product
              </button>
            </div>
            {console.log("error msge==============", errorMessage)}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button> */}
          </form>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
};

export default AddNewProduct;
