import React, { useState } from 'react';

const ProductForm = ({
  formData,
  handleChange,
  handleColorChange,
  handleAttributeChange,
  addAttribute,
  categories,
  subCategories,
  subSubCategories,
  brands,
  colors,
  attributes,
  selectedColors,
  productAttributes,
  errorMessage
}) => {
  const [selectedAttribute, setSelectedAttribute] = useState('');

  return (
    <div>
      <div className="col-12 lightshadow p-5 shadow-md rounded-md">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Product </label>
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
        <div className="flex flex-col gap-4 m-4">
          <label className="font-semibold">Product Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="p-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="col-12 p-5 flex flex-wrap shadow-md rounded-md">
        <div className="flex flex-col w-full lg:w-1/3 gap-1">
          <label className="font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
            required
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category._id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-4 lg:mt-0">
          <label className="font-semibold">Sub-Category</label>
          <select
            name="subCategorySlug"
            value={formData.subCategorySlug}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select Sub-Category</option>
            {subCategories.map(subCategory => (
              <option key={subCategory._id} value={subCategory.slug}>
                {subCategory.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full lg:w-1/3 gap-1 mt-4 lg:mt-0">
          <label className="font-semibold">Sub-Sub-Category</label>
          <select
            name="subSubCategorySlug"
            value={formData.subSubCategorySlug}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select Sub-Sub-Category</option>
            {subSubCategories.map(subSubCategory => (
              <option key={subSubCategory._id} value={subSubCategory.slug}>
                {subSubCategory.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-12 p-5 shadow-md rounded-md">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Brand</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select Brand</option>
            {brands.map(brand => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Product Type</label>
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select Product Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>
        </div>

        {formData.productType === 'digital' && (
          <div className="flex flex-col gap-2 mt-4">
            <label className="font-semibold">Digital Product Type</label>
            <select
              name="digitalProductType"
              value={formData.digitalProductType}
              onChange={handleChange}
              className="p-2 border rounded bg-white"
            >
              <option value="">Select Digital Product Type</option>
              <option value="file">File</option>
              <option value="link">Link</option>
            </select>
          </div>
        )}

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            placeholder="SKU"
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Unit</label>
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            placeholder="Unit"
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Comma separated tags"
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
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

        <div className="flex flex-col gap-2 mt-4">
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

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Discount Type</label>
          <select
            name="discountType"
            value={formData.discountType}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select Discount Type</option>
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Discount Amount</label>
          <input
            type="number"
            name="discountAmount"
            value={formData.discountAmount}
            onChange={handleChange}
            placeholder="Discount Amount"
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
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

        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            name="taxIncluded"
            checked={formData.taxIncluded}
            onChange={handleChange}
          />
          <label className="font-semibold">Tax Included</label>
        </div>

        <div className="flex flex-col gap-2 mt-4">
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

        <div className="flex flex-col gap-2 mt-4">
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

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="col-12 p-5 shadow-md rounded-md">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Colors</label>
          {colors.map(color => (
            <label key={color._id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedColors.includes(color._id)}
                onChange={() => handleColorChange(color._id)}
              />
              <span>{color.name}</span>
            </label>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Attributes</label>
          <select
            value={selectedAttribute}
            onChange={(e) => setSelectedAttribute(e.target.value)}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select Attribute</option>
            {attributes.map(attribute => (
              <option key={attribute._id} value={attribute._id}>
                {attribute.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={addAttribute}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Add Attribute
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <label className="font-semibold">Product Attributes</label>
          {productAttributes.map(attr => (
            <div key={attr._id} className="flex items-center gap-2">
              <span>{attr.name}</span>
            </div>
          ))}
        </div>
      </div>

      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default ProductForm;
