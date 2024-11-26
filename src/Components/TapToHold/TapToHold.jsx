import React from "react";
import { ImSpinner2 } from "react-icons/im";


const TapToHold = ({
  handelPrevBtn,
  note,
  isSending,
  user,
  blance,
  amount,
  handleNext,
  count,
}) => {
  let charge = parseFloat(5);
  let noCharge = parseFloat(0);
  let bl = parseFloat(amount);
  let av = parseFloat(blance - bl);
  let totalAmountWithCharge = parseFloat(bl + charge);
  let totalAmountWithNoCharge = parseFloat(bl + noCharge);
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-green-400 text-xl">
          Confirm to{" "}
          <span className="text-green-500 font-semibold">Send Money</span>
        </p>
        <button
          onClick={handelPrevBtn}
          className="text-rose-500 text-4xl font-bold"
        >
          &times;
        </button>
      </div>
      {/* <header className="w-full max-w-lg bg-white p-4 rounded-t-md flex justify-between items-center">
              <h2 className="text-xl font-bold text-pink-500">
                Confirm to <span className="text-gray-700">Send Money</span>
              </h2>
            </header> */}
      <div className="w-full max-w-lg bg-white rounded-b-md shadow-md p-6">
        {/* Recipient Details */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
            {user?.name.slice(0, 1)}
          </div>
          <div>
            <p className="text-gray-700 font-bold">{user?.name}</p>
            <p className="text-gray-500 text-sm">{user?.phone}</p>
          </div>
        </div>

        {/* Amount and Balance Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-gray-700 font-bold text-lg">
              ৳{" "}
              {amount >= 100
                ? totalAmountWithCharge.toFixed(2)
                : totalAmountWithNoCharge.toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm">
              + {amount >= 100 ? ` ৳ ${charge.toFixed(2)}` : "No charge"}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Balance</p>
            <p className="text-gray-700 font-bold text-lg">
              ৳ {amount >= 100 ? (av - charge).toFixed(2) : av.toFixed(0)}
            </p>
          </div>
        </div>

        {/* Reference */}
        <div>
          <p className="text-gray-500 text-sm">Reference</p>
          <p className="text-gray-700 font-bold">{note}</p>
        </div>
      </div>

      {/* Tap and Hold Button */}
      <button
        onClick={handleNext}
        className={`mt-10 w-full max-w-lg bg-green-500 rounded-full py-3 flex items-center justify-center cursor-pointer transition-transform ${
          isSending ? "scale-95" : ""
        }`}
      >
        <span className="text-white font-bold">
          {isSending ? (
            <p className="flex items-center gap-3">
              Sending
              <p className="relative">
                <ImSpinner2 className="text-3xl animate-spin" />
                <span className="text-sm absolute top-1 left-0 right-0">
                  {count}
                </span>
              </p>
              {/* {" "} */}
              {/* ({count}) */}
            </p>
          ) : (
            "Tap and hold for Send Money"
          )}
        </span>
      </button>
    </div>
  );
};

export default TapToHold;
