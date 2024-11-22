import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          !event.target.closest("#sidebar") &&
          !event.target.closest("#logo")
        ) {
          closeSidebar();
        }
      };
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
  return (
    <div className="flex justify-between items-center max-w-sm mx-auto">
      <div className="flex gap-1 items-center">
        <figure>
          <img
            className="w-24"
            src="../../../Image/Abstract Colorful Technology Solutions Professional Logo (3).png"
            alt=""
          />
        </figure>
        <div>
          <h5>User Name</h5>
          <h4>User Blance</h4>
        </div>
      </div>

      <div>
        <figure >
          <img
            src="../../../Image/Abstract Colorful Technology Solutions Professional Logo (3).png"
            alt="Logo"
            onClick={toggleSidebar}
            className="h-10 w-10 cursor-pointer"
            id="logo"
          />

          {/* Sidebar */}
          <div
            id="sidebar"
            className={`fixed top-0 right-0 h-full w-24 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold">Menu</h2>
            </div>
            <ul className="flex flex-col">
              <li className="p-4 hover:bg-gray-100">
                <Link to="/" onClick={closeSidebar}>
                  Home
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100">
                <Link to="/about" onClick={closeSidebar}>
                  About
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100">
                <Link to="/contact" onClick={closeSidebar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Navbar;
