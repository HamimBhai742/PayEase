import React from 'react';

const Pin = ({number,amount,note,pin,setNote,setPin,handleNext}) => {
    return (
      <div>
        {/* Recipient Details */}
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

        {/* Amount Details */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
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
        <div className="mb-6">
          <label className="block text-gray-500  font-bold mb-2">
            Reference
          </label>
          <input
            type="text"
            maxLength={50}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-200"
            placeholder="Add a note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <p className="text-gray-500 text-sm mt-1">{note?.length}/50</p>
        </div>

        {/* PIN Input */}
        <div className="mb-6">
          <label className="block text-gray-500  font-bold mb-2">
            Enter PIN
          </label>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength={4}
            className="w-full p-2 border border-none text-center text-xl focus:border-none"
            placeholder="••••"
          />
        </div>

        {/* Confirm PIN Button */}
        <button
          className="w-full py-3 bg-green-500 text-white font-bold rounded shadow-md hover:bg-green-600"
          onClick={handleNext}
        >
          Confirm PIN
        </button>
      </div>
    );
};

export default Pin;