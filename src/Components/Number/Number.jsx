import React from 'react';

const Number = ({handleNext,setNumber,number}) => {
    return (
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter phone number"
        />
        <button
          className="w-full mt-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    );
};

export default Number;