

import React, { useState } from "react";
import { FaCog, FaDatabase, FaGlobe, FaLock, FaServer } from "react-icons/fa";
import TheemSetups from "./TheemSetUp/TheemSetup";
import AddonUpload from "./SystemAddon/AddonUpload";




// Sample component imports (replace with actual components)


const TheemSetUp = () => {
  const [activeSection, setActiveSection] = useState("theemSetting"); // State to track active section

  // Function to handle section button click
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="content container-fluid snipcss-KUtWb">
      <div className="mb-4 pb-2">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <FaCog /> System Setup
        </h2>
      </div>
      {/* Top Navbar for sections */}
      <div className="inline-page-menu my-4">
        <ul className="list-unstyled flex gap-3">
          <li className={activeSection === "otpSetting" ? "active" : ""}>
            <button onClick={() => handleSectionClick("theemSetting")}>
            Theme Setup
            </button>
          </li>
          <li className={activeSection === "loginUrl" ? "active" : ""}>
            <button onClick={() => handleSectionClick("systemaddon")}>
            System Addons
            </button>
          </li>
    
          {/* Add more buttons for additional sections as needed */}
        </ul>
      </div>

      {/* Conditional rendering of section content */}
      <div className="card">
        {activeSection === "theemSetting" && <TheemSetups />}
        {activeSection === "systemaddon" && <AddonUpload />}
      
       
        {/* Add more conditional rendering for additional sections */}

      </div>
    </div>
  );
};

export default TheemSetUp;
