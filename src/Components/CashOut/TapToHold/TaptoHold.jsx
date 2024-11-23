import React from "react";
import { FaStore } from "react-icons/fa6";

const TapToHold = ({
  handelPrevBtn,
  handleHoldEnd,
  handleHoldStart,
  number,
  note,
  isSending,
}) => {
  return (
    <div>
      {/* <div className="flex justify-between">
        <p className="text-green-400 text-xl">
          Confirm to{" "}
          <span className="text-green-500 font-semibold">Cash Out</span>
        </p>
        <button
          onClick={handelPrevBtn}
          className="text-rose-500 text-4xl font-bold"
        >
          &times;
        </button>
      </div> */}
      <header className="w-full flex justify-between items-center px-6 mt-6">
        <p className="text-green-400 text-xl">
          Confirm to{" "}
          <span className="text-green-500 font-semibold">Cash Out</span>
        </p>
        <button
          onClick={handelPrevBtn}
          className="text-rose-500 text-4xl"
        >
          &times;
        </button>
      </header>
      <div className="w-full px-6 py-3">
        {/* Recipient Details */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
          <FaStore/>
          </div>
          <div>
            <p className="text-gray-700 font-bold">{number}</p>
            <p className="text-gray-500 text-sm">{number}</p>
          </div>
        </div>

        {/* Amount and Balance Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-gray-700 font-bold text-lg">৳1.00</p>
            <p className="text-gray-500 text-sm">+ No charge</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Balance</p>
            <p className="text-gray-700 font-bold text-lg">৳97.00</p>
          </div>
        </div>

        {/* Reference */}
        {/* <div>
          <p className="text-gray-500 text-sm">Reference</p>
          <p className="text-gray-700 font-bold">{note}</p>
        </div> */}
      </div>

      {/* Tap and Hold Button */}
      <div
        className={`mt-16 w-full max-w-lg bg-green-500 rounded-full py-3 flex items-center justify-center cursor-pointer transition-transform ${
          isSending ? "scale-95" : ""
        }`}
        onMouseDown={handleHoldStart}
        onMouseUp={handleHoldEnd}
        onTouchStart={handleHoldStart}
        onTouchEnd={handleHoldEnd}
      >
        <span className="text-white font-bold">
          {isSending ? "Processing..." : "Tap and hold for Cash Out"}
        </span>
      </div>
    </div>
  );
};

export default TapToHold;
