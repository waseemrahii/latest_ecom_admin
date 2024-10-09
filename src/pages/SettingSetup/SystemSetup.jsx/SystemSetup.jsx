// import React, { useState } from "react";
// import { FaCog, FaDatabase, FaGlobe, FaLock, FaServer } from "react-icons/fa";

// const SystemSetup = () => {
//   const [activeMenu, setActiveMenu] = useState("environment"); // State to track active menu

//   // Sample data array for menu items and corresponding forms
//   const menuItems = [
//     {
//       id: "environment",
//       icon: <FaServer />,
//       title: "Environment Settings",
//       url: "https://6valley.6amtech.com/admin/business-settings/web-config/environment-setup",
//       formFields: [
//         { label: "App name", value: "6valley", disabled: true },
//         { label: "App debug", value: "False", options: ["True", "False"] },
//         { label: "App mode", value: "Live", options: ["Live", "Dev"] },
//         { label: "App URL", value: "http://6valley.6amtech.com", disabled: true },
//         { label: "DB connection", value: "---", disabled: true },
//         { label: "DB host", value: "---", disabled: true },
//         { label: "DB port", value: "---", disabled: true },
//         { label: "DB database", value: "---", disabled: true },
//         { label: "DB username", value: "---", disabled: true },
//         { label: "DB password", value: "---", disabled: true },
//         { label: "Buyer username", value: "6valley-admin-demo-jhisdfhisufjifjfijqw5467", disabled: true },
//         { label: "Purchase code", value: "", type: "password", disabled: true },
//       ],
//     },
//     {
//       id: "appSettings",
//       icon: <FaCog />,
//       title: "App Settings",
//       url: "https://6valley.6amtech.com/admin/business-settings/web-config/app-settings",
//       formFields: [
//         { label: "App name", value: "6valley", disabled: true },
//         { label: "App debug", value: "False", options: ["True", "False"] },
//         { label: "App mode", value: "Live", options: ["Live", "Dev"] },
//         { label: "App URL", value: "http://6valley.6amtech.com", disabled: true },
//         { label: "DB connection", value: "---", disabled: true },
//         { label: "DB host", value: "---", disabled: true },
//         { label: "DB port", value: "---", disabled: true },
//         { label: "DB database", value: "---", disabled: true },
//         { label: "DB username", value: "---", disabled: true },
//         { label: "DB password", value: "---", disabled: true },
//         { label: "Buyer username", value: "6valley-admin-demo-jhisdfhisufjifjfijqw5467", disabled: true },
//         { label: "Purchase code", value: "", type: "password", disabled: true },
//       ],
//     },
//     // Add more menu items as needed
//   ];

//   // Function to handle menu item click
//   const handleMenuItemClick = (menuId) => {
//     setActiveMenu(menuId);
//   };

//   return (
//     <div className="content container-fluid snipcss-KUtWb">
//       <div className="mb-4 pb-2">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <FaCog /> System Setup
//         </h2>
//       </div>
//       <div className="inline-page-menu my-4">
//         <ul className="list-unstyled flex gap-1">
//           {menuItems.map((item) => (
//             <li key={item.id} className={item.id === activeMenu ? "active" : ""}>
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="card">
//         {menuItems.map((item) => (
//           <div key={item.id} className={item.id === activeMenu ? "" : "d-none"}>
//             <div className="border-bottom px-4 py-3">
//               <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2">
//                 {item.icon} {item.title}
//               </h5>
//             </div>
//             <div className="card-body">
//               <form action={item.url} method="post" encType="multipart/form-data">
//                 <input type="hidden" name="_token" value="Twvhv0EJYa0GUycFmHJFzLVQRODPOpx9nQxb0DbE" autoComplete="off" />
//                 <div className="row">
//                   {item.formFields.map((field, index) => (
//                     <div key={index} className={`col-${index === 0 ? "12" : "4"} col-md-4`}>
//                       <div className="form-group">
//                         <label className="title-color d-flex">{field.label}</label>
//                         {field.type === "password" ? (
//                           <div className="input-icons">
//                             <input type="password" value={field.value} className="form-control" placeholder={field.placeholder} disabled={field.disabled} />
//                           </div>
//                         ) : (
//                           <React.Fragment>
//                             {field.options ? (
//                               <select name={field.name} className="form-control" disabled={field.disabled}>
//                                 {field.options.map((option, optIndex) => (
//                                   <option key={optIndex} value={option}>{option}</option>
//                                 ))}
//                               </select>
//                             ) : (
//                               <input type="text" value={field.value} name={field.name} className="form-control" placeholder={field.placeholder} disabled={field.disabled} />
//                             )}
//                           </React.Fragment>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//            
//                 <div className="d-flex justify-content-end flex-wrap gap-3">
//                   <button type="reset" className="btn btn-secondary px-5">Reset</button>
//                   <button type="button" className="btn btn--primary px-5 call-demo">Submit</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SystemSetup;




import React, { useState } from "react";
import { FaCog, FaServer } from "react-icons/fa";
import AppSettingsComponent from "./SystemSetups"; // Import AppSettingsComponent

const SystemSetup = () => {
  const [activeMenu, setActiveMenu] = useState("environment"); // State to track active menu

  // Sample data array for menu items and corresponding forms
  const menuItems = [
    {
      id: "environment",
      icon: <FaServer />,
      title: "Environment Settings",
      url: "https://6valley.6amtech.com/admin/business-settings/web-config/environment-setup",
      formFields: [
        { label: "App name", value: "6valley", disabled: true },
        { label: "App debug", value: "False", options: ["True", "False"] },
        { label: "App mode", value: "Live", options: ["Live", "Dev"] },
        { label: "App URL", value: "http://6valley.6amtech.com", disabled: true },
        { label: "DB connection", value: "---", disabled: true },
        { label: "DB host", value: "---", disabled: true },
        { label: "DB port", value: "---", disabled: true },
        { label: "DB database", value: "---", disabled: true },
        { label: "DB username", value: "---", disabled: true },
        { label: "DB password", value: "---", disabled: true },
        { label: "Buyer username", value: "6valley-admin-demo-jhisdfhisufjifjfijqw5467", disabled: true },
        { label: "Purchase code", value: "", type: "password", disabled: true },
      ],
    },
    {
      id: "appSettings",
      icon: <FaCog />,
      title: "App Settings",
      url: "https://6valley.6amtech.com/admin/business-settings/web-config/app-settings",
      component: <AppSettingsComponent />, // Include AppSettingsComponent here
    },
    // Add more menu items as needed
  ];

  // Function to handle menu item click
  const handleMenuItemClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="content container-fluid snipcss-KUtWb">
      <div className="mb-4 pb-2">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <FaCog /> System Setup
        </h2>
      </div>
      <div className="inline-page-menu my-4">
        <ul className="list-unstyled flex gap-1">
          {menuItems.map((item) => (
            <li key={item.id} className={item.id === activeMenu ? "active" : ""}>
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        {menuItems.map((item) => (
          <div key={item.id} className={item.id === activeMenu ? "" : "d-none"}>
            <div className="border-bottom px-4 py-3">
              <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2">
                {item.icon} {item.title}
              </h5>
            </div>
            <div className="card-body">
              {item.component && item.component} {/* Conditionally render the component */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemSetup;
