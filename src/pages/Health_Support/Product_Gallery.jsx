import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// ProductCard Component
const ProductCard = ({ product }) => {
  const [showMore, setShowMore] = useState(false);

  // Toggle the show more/less state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-full md:mx-10 p-4 bg-white shadow-md rounded-md mb-6">
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-cover"
          />
        </div>

        {/* Product Information Section */}
        <div className="lg:w-3/4 lg:pl-6">
          <div className="flex justify-between items-center flex-wrap">
            <h1 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-0">
              {product.name}
            </h1>
            <button
              className="bg-primary hover:bg-primary-dark text-white text-sm sm:text-base px-4 py-2 rounded-md mb-4 lg:mb-0 lg:ml-auto"
              style={{ color: "white" }}
            >
              Use this product info
            </button>
          </div>

          {/* General Information */}
          <div className="mt-4">
            <h2 className="text-lg font-bold">General Information</h2>
            <div className="grid grid-cols-1 mt-2">
              <p>
                <strong>Brand</strong>: {product.brand}
              </p>
              <p>
                <strong>Category</strong>: {product.category}
              </p>
              <p>
                <strong>Product Type</strong>: {product.type}
              </p>
              <p>
                <strong>Product Unit</strong>: {product.unit}
              </p>
              <p>
                <strong>Current Stock</strong>: {product.stock}
              </p>
              <p>
                <strong>Product SKU</strong>: {product.sku}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="font-bold">Description:</h2>
        <p>{product.description}</p>

        {/* View More/Less Toggle */}
        {showMore && <p className="mt-2">{product.moreDescription}</p>}

        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleShowMore}
        >
          <a className=" text-primary hover:text-primary-dark font-semibold">
            {showMore ? "View Less" : "View More"}
          </a>
        </div>
      </div>
    </div>
  );
};

// ProductGallery Component
const ProductGallery = () => {
  const products = [
    {
      image:
        "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648862d93c9d7.png",
      name: "Silicone Strap Analogue Sports Watch Rectangular Dial New Model 2023 Men Watches",
      brand: "Triangle",
      category: "Jewelry & Watches",
      type: "Physical",
      unit: "pc",
      stock: "1000",
      sku: "134244",
      description:
        "Specifications of OLEVS 5563 Quartz wrist watch waterproof watch for Men and Women",
      moreDescription:
        "This is a high-quality wristwatch suitable for both men and women. It is waterproof and has a sleek design.",
    },
    {
      image:
        "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648862d93c9d7.png",
      name: "Digital Sports Watch with LED Display This is a high-quality wristwatch suitable for both men and women. It is waterproof and has a sleek design.",
      brand: "TechTime",
      category: "Electronics",
      type: "Digital",
      unit: "pc",
      stock: "500",
      sku: "987654",
      description:
        "High-quality digital sports watch with multiple functions and LED display",
      moreDescription:
        "This digital sports watch is great for everyday wear and offers multiple functionalities.",
    },
  ];

  return (
    <div className="w-full">
      {/* Gallery Header */}
      <div className="flex items-center py-5 md:mt-5 md:px-8">
        <img
          src="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
          alt="All Orders"
          className="mr-2"
        />
        <p className="text-lg text-[#334257] font-bold">Product Gallery</p>
        <p className="text-xs font-semibold text-[#334257] ml-4 bg-slate-200 rounded-full px-2 py-1">
          {products.length}
        </p>
      </div>

      {/* Filters Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-2 md:mx-20 md:ml-10 my-3">
        <div className="flex flex-col">
          <label htmlFor="">Store</label>
          <select className="border border-gray-300 bg-white rounded-lg text-base px-4 py-2 text-gray-700 outline-none focus:border-blue-500">
            <option value="ALL">ALL Shop</option>
            <option value="In HOUSE Order">In HOUSE Order</option>
            <option value="Vendor Order">Vendor Order</option>
            <option value="POS Order">POS Order</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Brand</label>
          <select className="border border-gray-300 bg-white rounded-lg text-base px-4 py-2 text-gray-700 outline-none focus:border-blue-500">
            <option value="ALL">ALL Brand</option>
            <option value="Saya">Saya</option>
            <option value="Borjan">Borjan</option>
            <option value="Nike">Nike</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <select className="border border-gray-300 bg-white rounded-lg text-base px-4 py-2 text-gray-700 outline-none focus:border-blue-500">
            <option value="ALL">ALL Category</option>
            <option value="Home">Home</option>
            <option value="Cricket">Cricket</option>
            <option value="Games">Games</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="">
          <form className="mr-2 rounded-md border-gray-200 gap-2 md:mt-7">
            <div className="flex items-center">
              {/* Search Icon inside Input */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  name="searchValue"
                  className="pl-8 py-2  border border-primary rounded-l-md   outline-none focus:border-primary-dark transition-all duration-300"
                  placeholder="Search"
                />
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="px-2 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark transition-all duration-300"
                style={{ color: "white" }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1  gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
