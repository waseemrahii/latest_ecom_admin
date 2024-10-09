// import React from 'react';
// import { AiOutlineDelete, AiOutlineSearch } from 'react-icons/ai';
// import { useState } from 'react';

// const AddNewProductComponent = () => {
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     // Function to handle product selection
//     const handleSelectProduct = (productId) => {
//         setSelectedProduct(productId);
//     };

//     // Dummy product data (simulating fetched data or props)
//     const products = [
//         {
//             id: 1,
//             name: "Women's long-sleeve lightweight french terry fleece quarter-zip top",
//             category: "Women's fashion",
//             brand: "i Bird",
//             shop: "6valley CMS",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-20-625fe69f72cce.png"
//         },
//         {
//             id: 3,
//             name: "Ladies Winter Long Sleeve Sweater",
//             category: "Women's fashion",
//             brand: "i Bird",
//             shop: "Deluxe Online",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-62636369a0855.png"
//         },
//         {
//             id: 4,
//             name: "Crossbody Shoulder Bag Soft Leather Bag Female Fashion",
//             category: "Women's fashion",
//             brand: "i Bird",
//             shop: "6valley CMS",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64882d3231ad8.png"
//         },
//         {
//             id: 5,
//             name: "Exclusive & Fashionable Suit For Men",
//             category: "Men's fashion",
//             brand: "JK",
//             shop: "Deluxe Online",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-23-6263633d3b0a6.png"
//         },
//         {
//             id: 6,
//             name: "Real Diamond Ring Multi Stone Solid 18K Gold Certified WR2133",
//             category: "Jewelry & Watches",
//             brand: "Fashion",
//             shop: "Deluxe Online",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648853f76043c.png"
//         },
//         {
//             id: 7,
//             name: "Progress lighting P4009-10 5-light chandelier, polished brass",
//             category: "Computer, Office & Security",
//             brand: "JK",
//             shop: "6valley CMS",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2022-04-13-62566e1a35a9c.png"
//         },
//         {
//             id: 8,
//             name: "Girls Beautiful White & Purple Sneakers",
//             category: "Computer, Office & Security",
//             brand: "i Bird",
//             shop: "Wellness Fair",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648830d2af5b5.png"
//         },
//         {
//             id: 9,
//             name: "LM Washable and Light-Weight Men's Shoe",
//             category: "Phones & Telecom",
//             brand: "i Bird",
//             shop: "Mart Morning",
//             image: "https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64882fd48c1c9.png"
//         }
//     ];

//     // Function to handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Simulated form submission logic
//         if (selectedProduct) {
//             // Here you would typically submit the form data
//             console.log(`Product with ID ${selectedProduct} selected`);
//             // Add logic to update product table or perform necessary actions
//         } else {
//             console.log('Please select a product');
//         }
//     };

//     return (
//         <div className="content container-fluid snipcss-GGjKD">
//             <div className="mb-3">
//                 <h2 className="h1 mb-0 text-capitalize">
//                     <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" className="mb-1 mr-1" alt="" /> Add new product
//                 </h2>
//             </div>
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="card-header">
//                             <h3 className="mb-0 text-capitalize">Featured deal</h3>
//                         </div>
//                         <div className="card-body">
//                             <form onSubmit={handleSubmit}>
//                                 <input type="hidden" name="_token" value="TUklnbbAElLTM1jngpkiLNvSXF1NzXeMgvvCAT5G" autoComplete="off" />
//                                 <div className="form-group">
//                                     <div className="row">
//                                         <div className="col-md-12 mt-3">
//                                             <label htmlFor="name" className="title-color">Products</label>
//                                             <div className="dropdown select-product-search w-100">
//                                                 <input type="text" className="product_id" name="product_id" hidden />
//                                                 <button className="form-control text-start dropdown-toggle text-capitalize select-product-button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Select product </button>
//                                                 <div className="dropdown-menu w-100 px-2">
//                                                     <div className="search-form mb-3">
//                                                         <button type="button" className="btn"><AiOutlineSearch /></button>
//                                                         <input type="text" className="js-form-search form-control search-bar-input search-product" placeholder="Search menu..." />
//                                                     </div>
//                                                     <div className="d-flex flex-column gap-3 max-h-200 overflow-y-auto overflow-x-hidden search-result-box">
//                                                         {products.map(product => (
//                                                             <div key={product.id} className="select-product-item media gap-3 border-bottom py-2 cursor-pointer action-select-product" data-id={product.id} onClick={() => handleSelectProduct(product.id)}>
//                                                                 <img className="avatar avatar-xl border" width="75" src={product.image} alt="" />
//                                                                 <div className="media-body d-flex flex-column gap-1">
//                                                                     <h6 className="product-id" hidden>{product.id}</h6>
//                                                                     <h6 className="fz-13 mb-1 text-truncate custom-width product-name">{product.name}</h6>
//                                                                     <div className="fz-10">Category : {product.category}</div>
//                                                                     <div className="fz-10">Brand : {product.brand}</div>
//                                                                     <div className="fz-10">Shop : {product.shop}</div>
//                                                                 </div>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="d-flex justify-content-end">
//                                     <button type="submit" className="btn btn--primary px-4">Add</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row mt-3">
//                 <div className="col-md-12">
//                     <div className="card">
//                         <div className="px-3 py-4">
//                             <h5 className="mb-0 text-capitalize"> Product table <span className="badge badge-soft-dark radius-50 fz-12 ml-1">3</span>
//                             </h5>
//                         </div>
//                         <div className="table-responsive">
//                             <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
//                                 <thead className="thead-light thead-50 text-capitalize">
//                                     <tr>
//                                         <th>SL</th>
//                                         <th>Name</th>
//                                         <th>Price</th>
//                                         <th className="text-center">Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>1</td>
//                                         <td><a href="javascript:" target="_blank" className="font-weight-semibold title-color hover-c1">Family Size Trolley Case Long Lasting and 8 Wheel Waterproof bag</a>
//                                         </td>
//                                         <td>500</td>
//                                         <td>
//                                             <div className="d-flex justify-content-center">
//                                                 <a title="Delete" className="btn btn-outline-danger btn-sm delete-data-without-form" data-action="https://6valley.6amtech.com/admin/deal/delete-product" data-id="13">
//                                                     <AiOutlineDelete />
//                                                 </a>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>2</td>
//                                         <td><a href="javascript:" target="_blank" className="font-weight-semibold title-color hover-c1">Crossbody Shoulder Bag Soft Leather Bag Female Fashion</a>
//                                         </td>
//                                         <td>500</td>
//                                         <td>
//                                             <div className="d-flex justify-content-center">
//                                                 <a title="Delete" className="btn btn-outline-danger btn-sm delete-data-without-form" data-action="https://6valley.6amtech.com/admin/deal/delete-product" data-id="15">
// <AiOutlineDelete />
// </a>
// </div>
// </td>
// </tr>
// <tr>
// <td>3</td>
// <td><a href="javascript:" target="_blank" className="font-weight-semibold title-color hover-c1">Girls Beautiful White & Purple Sneakers</a>
// </td>
// <td>100</td>
// <td>
// <div className="d-flex justify-content-center">
// <a title="Delete" className="btn btn-outline-danger btn-sm delete-data-without-form" data-action="https://6valley.6amtech.com/admin/deal/delete-product" data-id="14">
// <AiOutlineDelete />
// </a>
// </div>
// </td>
// </tr>
// </tbody>
// </table>
// </div>
// </div>
// </div>
// </div>
// </div>
// );
// };

// export default AddNewProductComponent;