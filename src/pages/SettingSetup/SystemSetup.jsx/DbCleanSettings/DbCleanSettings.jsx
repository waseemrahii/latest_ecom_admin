// import React, { useState } from 'react';
// // import './DbCleanSettings.css'; // Ensure to have appropriate styles

// const DbCleanSettings = () => {
//   const [selectedTables, setSelectedTables] = useState([]);

//   const tablesData = [
//     { value: 'add_fund_bonus_categories', label: 'Add fund bonus categ...', count: 2 },
//     { value: 'admin_wallet_histories', label: 'Admin wallet histori...', count: 0 },
//     { value: 'admin_wallets', label: 'Admin wallets', count: 2 },
//     { value: 'attributes', label: 'Attributes', count: 2 },
//     { value: 'carts', label: 'Carts', count: 6 },
//     { value: 'categories', label: 'Categories', count: 34 },
//     { value: 'category_shipping_costs', label: 'Category shipping co...', count: 64 },
//     { value: 'chattings', label: 'Chattings', count: 26 },
//     { value: 'contacts', label: 'Contacts', count: 3 },
//     { value: 'coupons', label: 'Coupons', count: 8 },
//     { value: 'customer_wallet_histories', label: 'Customer wallet hist...', count: 0 },
//     { value: 'customer_wallets', label: 'Customer wallets', count: 0 },
//     { value: 'deal_of_the_days', label: 'Deal of the days', count: 1 },
//     { value: 'delivery_country_codes', label: 'Delivery country cod...', count: 2 },
//     { value: 'order_expected_delivery_histories', label: 'Order expected deliv...', count: 4 },
//     { value: 'order_status_histories', label: 'Order status histori...', count: 71 },
//   ];

//   const handleCheckboxChange = (value) => {
//     setSelectedTables((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Selected tables:', selectedTables);
//   };

//   return (
//     <div className="row snipcss-8Hkff">
//       <div className="col-12 mb-3">
//         <div className="alert badge-soft-danger mb-0 mx-sm-2 text-left" role="alert">
//           This page contains sensitive information. Make sure before changing.
//         </div>
//       </div>
//       <div className="col-12">
//         <div className="card">
//           <div className="card-body">
//             <form
//               action=""
//               method="post"
//               className="form-submit"
//               onSubmit={handleFormSubmit}
//             >
//               <input
//                 type="hidden"
//                 name="_token"
//                 value="SXCvNFDWFKXZV15a7JHIE5kfiR2iPzrxGf9Jdemb"
//                 autoComplete="off"
//               />
//               <div className="row">
//                 {tablesData.map((table, index) => (
//                   <div key={index} className="col-sm-6 col-xl-3">
//                     <div className="form-group form-check text-left">
//                       <input
//                         type="checkbox"
//                         name="tables[]"
//                         value={table.value}
//                         className="form-check-input"
//                         id={`business_section_${index}`}
//                         checked={selectedTables.includes(table.value)}
//                         onChange={() => handleCheckboxChange(table.value)}
//                       />
//                       <label
//                         className="form-check-label text-dark cursor-pointer user-select-none"
//                         htmlFor={`business_section_${index}`}
//                       >
//                         {table.label}
//                       </label>
//                       <span className="badge-pill badge-secondary mx-2">{table.count}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="d-flex justify-content-end gap-10 flex-wrap mt-3">
//                 <button type="button" className="btn btn--primary call-demo">
//                   Clear
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DbCleanSettings;

import React, { useState } from "react";
import { FaCookieBite } from "react-icons/fa";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
// import './CookieSettings.css'; // Assuming you have some CSS

const DbCleanSettings = () => {
  const [isCookieEnabled, setIsCookieEnabled] = useState(true);
  const [cookieText, setCookieText] = useState(
    "By clicking “Yes, I agree”, you agree to store cookies on your device and disclose information in accordance with our Cookie Policy."
  );

  const toggleCookieSetting = () => {
    setIsCookieEnabled(!isCookieEnabled);
  };

  const handleTextChange = (e) => {
    setCookieText(e.target.value);
  };

  const handleSave = () => {
    // Logic to save the settings
    console.log("Cookie Settings Saved", { isCookieEnabled, cookieText });
  };

  return (
    <div className="card">
      <div className="border-bottom py-3 px-4">
        <div className="d-flex justify-content-between align-items-center gap-10">
          <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2">
            <FaCookieBite size={20} /> Cookie settings:
          </h5>
          <div className="switcher" onClick={toggleCookieSetting}>
            {isCookieEnabled ? (
              <MdToggleOn size={30} color="green" />
            ) : (
              <MdToggleOff size={30} color="red" />
            )}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div
          className="loyalty-point-section"
          id="cookie_setting_status_section"
        >
          <div className="form-group">
            <label className="title-color d-flex" htmlFor="cookie_text">
              Cookie text
            </label>
            <textarea
              name="cookie_text"
              id="cookie_text"
              cols="30"
              rows="6"
              className="form-control"
              value={cookieText}
              onChange={handleTextChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              id="submit"
              className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbCleanSettings;
