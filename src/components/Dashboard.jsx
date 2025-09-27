import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [filter, setFilter] = useState("Daily");
  const [isPremium, setIsPremium] = useState(false);
  const [transactions,setTransactions] = useState([]);

  const userId = localStorage.getItem("userId");
  console.log("Dashboard",userId);
  
  const verifyPremium = async () => {
    const response = await axios.get(`http://localhost:3000/payment/verify-premium/${userId}`);
    if(response?.data?.isPremium === true){
            setIsPremium(true);
            return;
        }
    return;
  }
  const getInformation = async () => {
    const response = await axios.get(`http://localhost:3000/expense/ManageExpenses/${userId}`);
    //console.log(response?.data.length);
    const data = response?.data || [];
    //console.log(data)
    setTransactions(data);
    // if(data.length > 0){
        
    //     //console.log(response?.data[0]);
    //     // const obj = {
    //     // };
    //     setTransactions(data);
    //     //console.log('\n',response);
    // }
    // else{
    //     console.log("else");
    //     setTransactions([]);
    // }
    //console.log(transactions);
    return;
  }
  useEffect(() => {
          verifyPremium();
          getInformation();
    },[userId]);

//   const transactions = [
//     { date: "12 Sep 25", type: "Income", category: "Salary", amount: 2000, notes: "Sep Salary" },
//     { date: "13 Sep 25", type: "Expense", category: "Food", amount: -45, notes: "Lunch" },
//     { date: "13 Sep 25", type: "Expense", category: "Transport", amount: -10, notes: "Metro" },
//   ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Expense & Income Dashboard</h2>
        <span className={`px-3 py-1 rounded-full text-sm ${isPremium ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}>
          {isPremium ? "Premium" : "Free"}
        </span>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        {["Daily", "Weekly", "Monthly"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-md ${
              filter === f ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-md text-center">Income: ${transactions[transactions.length-1]?.income || 0}</div>
        <div className="bg-red-500 text-white p-4 rounded-md text-center">Expense: ${transactions[transactions.length-1]?.expense || 0}</div>
        <div className="bg-gray-500 text-white p-4 rounded-md text-center">Balance: ${transactions[transactions.length-1]?.income - transactions[transactions.length-1]?.expense || 0}</div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">Date</th>
            <th className="border border-gray-200 p-2">Type</th>
            <th className="border border-gray-200 p-2">Category</th>
            <th className="border border-gray-200 p-2">Amount</th>
            <th className="border border-gray-200 p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, idx) => (
            <tr key={idx} className="text-center">
              <td className="border border-gray-200 p-2">{new Date(t.created_at).toLocaleDateString("en-GB").replace(/\//g, "-") + " " + new Date(t.created_at).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</td>
              <td className="border border-gray-200 p-2">{t.expenseAmount < 0 ? "Expense" : "Income"}</td>
              <td className="border border-gray-200 p-2">{t.expenseCategory}</td>
              <td className={`border border-gray-200 p-2 ${t.expenseAmount < 0 ? "text-red-500" : "text-green-600"}`}>
                {t.expenseAmount < 0 ? `-$${Math.abs(t.expenseAmount)}` : `$${t.expenseAmount}`}
              </td>
              <td className="border border-gray-200 p-2">{t.expenseDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download Button */}
      <div className="flex justify-end mt-4">
        <button
          disabled={!isPremium}
          className={`px-4 py-2 rounded-md ${
            isPremium ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
