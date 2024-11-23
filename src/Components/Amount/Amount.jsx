import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Amount = ({number,amount,setAmount,handleNext}) => {
  return (
    <div>
      <label className="block text-gray-500 font-bold mb-2">Recipient</label>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
          {number.slice(0, 1)}
        </div>
        <div>
          <p className="text-gray-700 font-bold">{number}</p>
          <p className="text-gray-500 text-sm">{number}</p>
        </div>
      </div>
      {/* Amount Section */}
      <div className="mb-6">
        <label className="block text-gray-500 font-bold mb-2">Amount</label>
        <div className="flex items-center border-b border-gray-300 pb-2">
          <span className="text-2xl font-bold text-gray-400">৳</span>
          <input
            type="number"
            className="w-full ml-2 text-2xl font-bold text-gray-700 placeholder-gray-400 focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
          />
        </div>
        <p className="text-gray-500 text-sm mt-2">Available Balance: ৳97.00</p>
      </div>
      {/* Purpose Section */}
      <div className="mb-6">
        <p className="text-gray-500 font-bold mb-3">Select your purpose</p>
        <div className="flex gap-4 overflow-x-auto">
          {[
            { label: "Send Money", icon: "💸" },
            // { label: "Gift", icon: "🎁" },
            // { label: "Birthday", icon: "🎂" },
            // { label: "Wedding", icon: "💒" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 text-pink-500 rounded-full text-lg">
                {item.icon}
              </div>
              <p className="text-gray-700 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Proceed Button */}
      <button
        onClick={handleNext}
        className="w-full p-3 bg-green-500 text-white font-bold rounded shadow-md items-center hover:bg-green-600 flex justify-between"
      >
        Proceed <FaArrowRight />
      </button>
    </div>
  );
};

export default Amount;
