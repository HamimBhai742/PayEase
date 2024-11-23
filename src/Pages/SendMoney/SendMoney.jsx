import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft, FaCopy } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Number from "../../Components/Number/Number";
import Amount from "../../Components/Amount/Amount";
import Pin from "../../Components/Pin/Pin";
import TapToHold from "../../Components/TapToHold/TapToHold";
import SendMoneySuccess from "../../Components/SenMoneySuccess/SendMoneySuccess";

const SendMoney = () => {
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
  // console.log(amount);
  // const handleTapAndHold = () => {
  //   setLoading(true);
  //   setStatus("");

  //   setTimeout(() => {
  //     const isSuccess = Math.random() > 0.2; // 80% success rate
  //     setLoading(false);
  //     setStatus(
  //       isSuccess ? "Money Sent Successfully!" : "Failed to Send Money."
  //     );
  //     if (isSuccess) {
  //       setStep(1); // Reset form after success
  //       setNumber("");
  //       setAmount("");
  //       setPin("");
  //     }
  //   }, 5000); // Hold for 5 seconds
  // };
  return (
    <div className="flex flex-col items-center justify-start gap-44 h-screen bg-gray-100 ">
      <div className="flex w-full justify-between items-center bg-green-500 text-white px-3">
        <button onClick={handelPrevBtn}>
          <FaArrowLeft className="text-2xl" />
        </button>
        <h2 className="text-lg font-semibold ">Send Money</h2>
        <figure>
          <img
            className="w-16"
            src="../../../Image/Abstract_Colorful_Technology_Solutions_Professional_Logo__3_-removebg-preview.png"
            alt=""
          />
        </figure>
      </div>
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
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
          <Amount
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
            note={note}
            setNote={setNote}
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
        {step === 5 && (
       <SendMoneySuccess note={note} number={number}/>
        )}

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

export default SendMoney;