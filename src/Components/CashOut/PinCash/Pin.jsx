import React from "react";
import { FaLock, FaStore } from "react-icons/fa6";

const Pin = ({ number, amount, pin, setPin, handleNext }) => {
  return (
    <div>
      {/* Recipient Details */}
      <label className="block text-gray-500 font-bold mb-2">Agent</label>
      <div className="flex items-center gap-4 my-6">
        <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
         <FaStore/>
        </div>
        <div>
          <p className="text-gray-700 font-bold">{number}</p>
          <p className="text-gray-500 text-sm">{number}</p>
        </div>
      </div>

      {/* Amount Details */}
      <div className="flex justify-between my-16 ">
        <div>
          <p className="text-gray-500 text-sm">Amount</p>
          <p className="text-gray-700 font-bold text-lg">৳{amount}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Charge</p>
          <p className="text-gray-700 font-bold text-lg">+৳0.00</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total</p>
          <p className="text-gray-700 font-bold text-lg">৳3.00</p>
        </div>
      </div>

      {/* Reference Input */}
      {/* <div className="mb-6">
        <label className="block text-gray-500  font-bold mb-2">Reference</label>
        <input
          type="text"
          maxLength={50}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none border-none"
          placeholder="Add a note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <p className="text-gray-500 text-sm mt-1">{note?.length}/50</p>
      </div> */}

      {/* PIN Input */}
      <div className="mb-6">
        <label className="block text-gray-500  font-bold mb-2">Enter PIN</label>
        <div className="flex items-center mt-3">
          <span className="text-green-500 text-xl">
            <FaLock />
          </span>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength={4}
            className="w-full p-2 border border-none text-center text-xl focus:outline-none"
            placeholder="••••"
          />
        </div>
      </div>

      {/* Confirm PIN Button */}
      <button
        // className="w-full py-3 bg-green-500 text-white font-bold rounded shadow-md hover:bg-green-600"
        className={`w-full py-3 bg-green-500 text-white font-bold rounded shadow-md ${
          pin.length > 0
            ? "bg-green-500 text-white"
            : "bg-gray-400 text-gray-300"
        }`}
        disabled={!pin.length > 0}
        onClick={handleNext}
      >
        Confirm PIN
      </button>
    </div>
  );
};

export default Pin;
