import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useSecureAxios";
import toast from "react-hot-toast";

const ProtectRoute = ({ children }) => {
  const [err, setErr] = useState("");
  const token = localStorage.getItem("token");
  const axiosSucre = useAxiosSecure();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace axiosSucre with your axios instance if applicable
        const response = await axiosSucre.get("/protected-route");
        console.log(response.data);
        // localStorage.setItem("email", response?.data.user.email); // Set response data to state
      } catch (err) {
          setErr(err.response?.data.message);
          console.log(err.response?.data.message)
        toast.error(err.response?.data.message || "An error occurred");
        localStorage.removeItem("token");
      }
    };
    fetchData();
  }, []);

  if (token) {
    return children;
  }
  if (err === "Access Denied.") {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/login" />;
};

export default ProtectRoute;
