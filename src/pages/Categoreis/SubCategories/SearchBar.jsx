// SearchBar.js
import React from "react";
import { FaSearch, FaDownload, FaChevronDown } from "react-icons/fa";
import ExportButton from "../../../components/ActionButton/Export";

const SearchBar = () => {
  return (
    <div className="w-full gap-4 flex flex-col md:flex-row justify-between items-end ">
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
          className="form-control outline-none"
          placeholder="Search by sub category name"
        />
        <button
          type="submit"
          className="btn rounded-r-md bg-primary"
          style={{ color: "white" }}
        >
          Search
        </button>
      </div>

      <div>
        <ExportButton
          // data={subCategories} // Pass the data to export
          filename="refundList" // Optional filename for the exported file
          icon={FaDownload} // Icon for the button
          label="Export " // Button label
          className="bg-primary text-white hover:bg-primary-dark" // Tailwind classes for styling
          style={{ color: "white" }} // Optional inline styles
        />
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
  );
};

export default SearchBar;
