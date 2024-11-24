import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useSecureAxios";
import useUser from "../../hooks/useUser";
import { FaSpinner } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

const Home = () => {
  const [user, loadingUser] = useUser();
  console.log(user);
  // if (loadingUser) return <FaSpinner className="animate-spin text-3xl" />;
  return (
    <div className="max-w-md mx-auto mt-3">
      {loadingUser ? (
        <FaSpinner className="animate-spin text-3xl m-auto text-green-500" />
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {user?.role === "user" && (
            <Link to="/send-money" className="flex flex-col items-center">
              <span className="material-symbols-outlined text-3xl text-green-500">
                send_money
              </span>
              <p>Send Money</p>
            </Link>
          )}
          {/* <div>
          <p>Mobile Recharge</p>
        </div> */}
          {user?.role === "user" && (
            <Link to="/cash-out" className="flex flex-col items-center">
              <span class="material-symbols-outlined text-3xl text-green-500">
                currency_exchange
              </span>
              <p>Cash Out</p>
            </Link>
          )}
          {user?.role === "user" && (
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-3xl text-green-500">
                payments
              </span>
              <p>Make Payment</p>
            </div>
          )}
          {user?.role === "admin" && (
            <Link to="/user-management" className="flex flex-col items-center">
              <span class="material-symbols-outlined text-3xl text-green-500">
                <FaUsers />
              </span>
              <p>User Management</p>
            </Link>
          )}
          {user?.role === "admin" && (
            <Link to="/all-transaction" className="flex flex-col items-center">
              <span class="material-symbols-outlined text-3xl text-green-500">
                <GrTransaction />
              </span>
              <p>Transaction</p>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
