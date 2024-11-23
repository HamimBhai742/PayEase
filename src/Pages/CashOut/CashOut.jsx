import React, { useState } from "react";
import Number from "../../Components/Number/Number";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AmountStep from "../../Components/CashOut/AmountCash/Amount";
import Pin from "../../Components/CashOut/PinCash/Pin";
import TapToHold from "../../Components/CashOut/TapToHold/TaptoHold";
import CashOutSuccess from "../../Components/CashOut/CashOutSuccess/CashOutSuccess";

const CashOut = () => {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const handleHoldStart = () => {
    setIsSending(true);
  };

  const handleHoldEnd = () => {
    setIsSending(false);
    setStep(step + 1);
    alert("Money Sent Successfully!");
  };

  const handleNext = () => {
    if (step === 1 && !number) {
      toast.error("Please select a number!");
    } else if (step === 2 && !amount) {
      toast.error("Please enter the amount!");
    } else if (step === 3 && !pin) {
      toast.error("Please enter your PIN!");
    } else {
      setStep(step + 1);
    }
  };

  const handelPrevBtn = () => {
    if (1 < step) {
      setStep(step - 1);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col items-center justify-start max-w-md mx-auto">
      <div className="flex w-full justify-between items-center bg-green-500 text-white px-3">
        <button onClick={handelPrevBtn}>
          <FaArrowLeft className="text-2xl" />
        </button>
        <h2 className="text-lg font-semibold ">Cash Out</h2>
        <figure>
          <img className="w-16" src="./logo.png" alt="" />
        </figure>
      </div>
      <div className="w-full p-6">
        {/* Step 1: Choose Number */}
        {step === 1 && (
          <Number
            setNumber={setNumber}
            number={number}
            handleNext={handleNext}
          />
        )}

        {/* Step 2: Enter Amount */}
        {step === 2 && (
          <AmountStep
            number={number}
            amount={amount}
            setAmount={setAmount}
            handleNext={handleNext}
          />
        )}

        {/* Step 3: Enter PIN */}
        {step === 3 && (
          <Pin
            number={number}
            amount={amount}
            pin={pin}
            setPin={setPin}
            handleNext={handleNext}
          />
        )}

        {/* Step 4: Tap and Hold */}
        {step === 4 && (
            <TapToHold
              handelPrevBtn={handelPrevBtn}
              handleHoldEnd={handleHoldEnd}
              handleHoldStart={handleHoldStart}
              note={note}
              number={number}
              isSending={isSending}
            />
          )}
        {/* Sen money successful */}
        {step === 5 && <CashOutSuccess number={number} />}

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 text-center font-bold ${
              status.includes("Successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default CashOut;
