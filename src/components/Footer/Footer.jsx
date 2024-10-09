import React from "react";
import { IoMdPerson } from "react-icons/io";
import { IoHomeSharp, IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" flex justify-center flex-wrap absolute bottom-0  lg:flex-row lg:justify-between items-center mx-0 md:mx-16 my-6">
        <div>Bazzar CMS. Copyright LHD@2024</div>
        <div className="flex justify-center gap-6">
          <div>
            <Link to={"/businesssetup"} className="flex items-center gap-4">
              <IoSettings />
              <h1>Bussniess Setup</h1>
            </Link>
          </div>
          <div>
            <Link
              to={"/profileinformation"}
              className="flex items-center gap-4"
            >
              <IoMdPerson />
              <h1> Profile</h1>
            </Link>
          </div>
          <div>
            <Link to={"/"} className="flex items-center gap-4">
              <IoHomeSharp />
              <h1>Home</h1>
            </Link>
          </div>
          <h1
            className="bg-[#2ce7f5]  border rounded  text-[#3ac7ce]"
            style={{ color: "#" }}
          >
            Software version:14:7
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
