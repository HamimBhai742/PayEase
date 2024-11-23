import React, { useState } from "react";
import { motion } from "framer-motion"; // Install with `npm install framer-motion`
import { TbCoinTakaFilled } from "react-icons/tb";

const BlanceCheck = () => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = 1250;
  const handelBlBtn = () => {
    setShowBalance(!showBalance);
    setTimeout(() => {
      setShowBalance(false);
    }, 2000);
  };
  return (
    <div>
      <div
        className="flex justify-center items-centerp-3 bg-gray-200 rounded-full cursor-pointer text-sm"
        onClick={handelBlBtn}
      >
        {showBalance ? (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-green-600 py-1 px-3"
          >
            ৳ {balance}
          </motion.div>
        ) : (
          <span className="text-gray-500 px-3 py-1 flex items-center gap-1">
            <span className="text-green-500 text-xl ">
              <TbCoinTakaFilled />
            </span>
            Tap to show balance
          </span>
        )}
      </div>
    </div>
  );
};

export default BlanceCheck;
