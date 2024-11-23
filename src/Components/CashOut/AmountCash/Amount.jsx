import React, { useState } from "react";
import { FaArrowRight, FaStar, FaStore } from "react-icons/fa6";

const AmountStep = ({ handleNext ,amount,number,setAmount}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Main Container */}
      <div className="w-full p-6">
        {/* Agent Section */}
        <p className="text-gray-500 text-sm font-semibold">Agent</p>
        <div className="flex items-center justify-between mb-6 mt-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              {/* Agent Icon */}
              <FaStore className="text-xl" />
            </div>
            <div>
              <p className="text-gray-700 font-bold">{number}</p>
              <p className="text-gray-500 text-sm">{number}</p>
            </div>
          </div>
        </div>
        {/* Amount Section */}
        <div className="flex flex-col  mb-6">
          <p className="text-gray-500 text-sm font-semibold">Amount</p>
          <input
            type="number"
            placeholder="৳ 0"
            className=" text-center text-gray-700 text-2xl font-semibold border-none my-5 border-gray-300 focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <p className="text-gray-500 text-center mt-2">
            Available Balance:
            <span className="font-bold text-gray-700">৳97.00</span>
          </p>
        </div>

        {/* Charge Section */}
        <div className="flex items-center gap-2 mt-4">
          <div className="text-pink-500">
            <i className="fas fa-fire text-xl"></i>
          </div>
          <p className="text-gray-500">
            Charge will be <span className="line-through">৳18.50</span>{" "}
            <span className="font-bold text-gray-700">৳14.90/thousand</span>
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-6 w-full max-w-lg">
        <button
          onClick={handleNext}
          className={`w-full py-3 rounded-full text-center font-bold flex items-center justify-center gap-2 ${
            amount > 0 ? "bg-green-500 text-white" : "bg-gray-400 text-gray-300"
          }`}
          disabled={amount <= 0}
        >
          Continue <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AmountStep;
