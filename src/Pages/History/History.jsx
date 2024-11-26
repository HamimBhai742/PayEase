import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { FaSpider, FaSpinner } from "react-icons/fa6";
import toast from "react-hot-toast";
import { ImSpinner11 } from "react-icons/im";
import { FaShare } from "react-icons/fa";

// const transactions = [
//   {
//     type: "Cash Out",
//     account: "01323585201",
//     trxId: "BKO8IHW600",
//     amount: "-৳1,150.00",
//     time: "06:18pm 24/11/24",
//     charge: "৳21.28",
//   },
//   {
//     type: "Received Money",
//     account: "01743405604",
//     trxId: "BKO5IHMFL7",
//     amount: "+৳1,020.00",
//     time: "06:13pm 24/11/24",
//   },
//   {
//     type: "Received Money",
//     account: "Nabil... (2nd CR)",
//     trxId: "BKO7IHL7VX",
//     amount: "+৳100.00",
//     time: "06:13pm 24/11/24",
//   },
//   {
//     type: "Send Money",
//     account: "01318398640",
//     trxId: "BKN2H7PIZA",
//     amount: "-৳1.00",
//     time: "10:24am 23/11/24",
//   },
// ];

const History = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const email = localStorage.getItem("email");
  const axiosSecure = useAxiosSecure();
  const {
    data: transactions = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["transaction", email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/transaction/${email}`);
      return data;
    },
  });

  useEffect(() => {
    if (transactions.message === "Success") {
      toast.success("Success");
    }
    if (isError) {
      toast.error("Failed");
    }
  }, [transactions.message, isError]);

  if (isLoading) return <FaSpinner className="text-3xl m-auto animate-spin" />;
  console.log(transactions);
  const openModal = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by TrxID or number"
        className="w-full border p-2 rounded mb-4"
      />
      <div className="bg-gray-100 p-2 rounded">
        {transactions?.result.map((transaction, index) => (
          <div
            key={index}
            className="p-2 border-b flex justify-between items-center cursor-pointer"
            onClick={() => openModal(transaction)}
          >
            <div className="flex gap-2 items-center">
              <figure className="w-16 h-16 rounded-full">
                <img src="./logo.png" alt="" />
              </figure>
              <div>
                <div className="font-bold">{transaction?.type}</div>
                <div className="text-sm">{transaction?.phone}</div>
                <div className="text-sm text-gray-500">
                  TrxID: {transaction?.trxID}
                </div>
              </div>
            </div>
            <div
              className={`font-semibold ${
                transaction.type === "Send Money"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {transaction.type === "Send Money" ? " - " : " + "} ৳{""}
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>

      {selectedTransaction && (
        <div
          className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-t-lg"
          style={{ zIndex: 1000 }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{selectedTransaction?.type}</h3>
            <button onClick={closeModal} className="text-red-500 font-bold">
              Close
            </button>
          </div>
          <div className="mt-4">
            <p>Account: {selectedTransaction?.name}</p>
            <p>Time: {selectedTransaction.date}</p>
            <p>Amount: {selectedTransaction.amount}</p>
            <p>Transaction ID: {selectedTransaction.trxID}</p>
            {selectedTransaction?.charge && (
              <p>Charge: {selectedTransaction.charge}</p>
            )}
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-green-500 font-semibold text-white flex gap-3 items-center py-2 px-4 rounded">
              <ImSpinner11 className="" />
              {selectedTransaction?.type}
            </button>
            <button className="bg-gray-200 py-2 px-4 rounded flex gap-2 items-center">
              <FaShare /> Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default History;
