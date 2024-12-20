import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";

const Pin = ({
  number,
  amount,
  note,
  pin,
  setNote,
  setPin,
  handleNext,
  user,
  handlePinChange,
  error,
}) => {
  let bl = parseFloat(amount);
  console.log(typeof bl);
  let charge = parseFloat(5);
  let noCharge = parseFloat(0);
  let totalAmountWithCharge = parseFloat(bl + charge);
  let totalAmountWithNoCharge = parseFloat(bl + noCharge);
  return (
    <div>
      {/* Recipient Details */}
      <label className="block text-gray-500 font-bold mb-2">Recipient</label>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
          {user?.name.slice(0, 1)}
        </div>
        <div>
          <p className="text-gray-700 font-bold">{user?.name}</p>
          <p className="text-gray-500 text-sm">{user?.phone}</p>
        </div>
      </div>

      {/* Amount Details */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
        <div>
          <p className="text-gray-500 text-sm">Amount</p>
          <p className="text-gray-700 font-bold text-lg">৳ {bl?.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Charge</p>
          <p className="text-gray-700 font-bold text-lg">
            +৳ {bl >= 100 ? charge.toFixed(2) : noCharge.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total</p>
          <p className="text-gray-700 font-bold text-lg">
            ৳{" "}
            {bl >= 100
              ? totalAmountWithCharge.toFixed(2)
              : totalAmountWithNoCharge.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Reference Input */}
      <div className="mb-6">
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
      </div>

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
            onChange={handlePinChange}
            maxLength={4}
            className="w-full p-2 border border-none text-center text-xl focus:outline-none"
            placeholder="••••"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>

      {/* Confirm PIN Button */}
      <button
        // className="w-full py-3 bg-green-500 text-white font-bold rounded shadow-md hover:bg-green-600"
        className={`w-full py-3 text-white font-bold rounded shadow-md ${
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
