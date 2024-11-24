import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlanceCheck from "../BlanceCheck/BlanceCheck";
import toast from "react-hot-toast";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useUser()
  console.log(user)
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#sidebar") && !event.target.closest("#logo")) {
        closeSidebar();
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handelLogOutBtn = () => {
    localStorage.removeItem("token");
    navigate("/login")
    toast.success("Logout Successful");
  };
  return (
    <div className="flex justify-between items-center max-w-md mx-auto bg-green-300">
      <div className="flex items-center">
        <figure>
          <img className="w-24" src="./logo.png" alt="" />
        </figure>
        <div className="-ml-4">
          <h5>User Name</h5>
          <BlanceCheck />
        </div>
      </div>

      <div>
        <figure>
          <img
            src="./logo.png"
            alt="Logo"
            onClick={toggleSidebar}
            className="w-24 cursor-pointer"
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
              <li className="p-4 hover:bg-gray-100">
                <button onClick={handelLogOutBtn}>Logout</button>
              </li>
            </ul>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Navbar;
