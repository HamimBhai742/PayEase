import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash, FaStore } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CashOutSuccess = ({ number }) => {
  const [hide, setHide] = useState(false);
  return (
    <div>
      {" "}
      {/* Header */}
      <header className="w-full max-w-lg bg-white p-4 rounded-t-md flex justify-between items-center">
        <h2 className="text-xl font-bold text-pink-500">
          Your <span className="text-gray-700">Cash Out</span> is{" "}
          <span className="text-green-500">successful</span>
        </h2>
        <div className="text-green-500 text-2xl font-bold">&#10003;</div>
      </header>
      {/* Main Card */}
      <div className="w-ful p-6">
        {/* Recipient Details */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
              <FaStore />
            </div>
            <div>
              <p className="text-gray-700 font-bold">{number}</p>
              <p className="text-gray-500 text-sm">{number}</p>
            </div>
          </div>
          <button className="flex items-center gap-1 border border-green-500 text-green-500 rounded-md px-3 py-2">
            <IoCallOutline className="text-xl" />
            <span className="text-base font-semibold">Call</span>
          </button>
        </div>

        {/* Transaction Details */}
        <div className="grid grid-cols-2 gap-6 my-16">
          <div>
            <p className="text-gray-500 text-sm">Time</p>
            <p className="text-gray-700 font-bold text-lg">10:24am 23/11/24</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Transaction ID</p>
            <p className="text-gray-700 font-semibold text-lg flex items-center gap-2">
              BKN2H7PIZA
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-gray-700 font-semibold text-lg">৳1.00</p>
            <p className="text-gray-500 text-sm">+ No charge</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Balance</p>
            <p className="text-gray-700 font-semibold text-lg flex items-center gap-2  justify-between">
              {hide?"****":"৳97.00"}{" "}
              <button onClick={() => setHide(!hide)} className="text-gray-500">
                {hide ?<FaEye />: <FaEyeSlash />}
              </button>
            </p>
          </div>
        </div>

        {/* Reference */}
        {/* <div>
          <p className="text-gray-500 text-sm">Reference</p>
          <p className="text-gray-700 font-bold">{note}</p>
        </div> */}
      </div>
      {/* Enable Auto Pay Button */}
      {/* <div className="mt-6 w-full max-w-lg">
              <button className="w-full bg-white text-pink-500 border border-pink-500 py-3 rounded-full text-center font-bold flex items-center justify-center gap-2">
                <i className="fas fa-sync-alt"></i> Enable Auto Pay
              </button>
            </div> */}
      {/* Reward Section */}
      {/* <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-gray-700 font-bold">You have earned</p>
              </div>
              <p className="text-pink-500 font-bold text-lg">
                bKash Reward Points
              </p>
              <p className="text-gray-500">
                To use your points, check your{" "}
                <span className="text-pink-500 font-bold underline">
                  bKash Rewards
                </span>
              </p>
            </div> */}
      {/* Back to Home Button */}
      <div className="mt-6 w-full max-w-lg">
        <Link
          to="/"
          className="w-full bg-green-500 text-white py-3 rounded-full text-center font-bold flex items-center justify-center gap-2"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CashOutSuccess;
