import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AddExpense = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [type, setType] = useState("expense"); // "income" or "expense"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //if (userId === null) return;
      const rawAmount = Number(e.target.expAmnt.value);
      const expenseInfo = {
        expenseAmount: type === "expense" ? -Math.abs(rawAmount) : Math.abs(rawAmount), // - for expense, + for income
        expenseDescription: e.target.expDesc.value,
        expenseCategory: e.target.expCate.value,
        type,
      };

      const response = await axios.post(
        "http://localhost:3000/expense/addExpense",
        //body
          expenseInfo,
        //headers
        {
          headers:{
            Authorization: `Bearer ${userId}`
          }
        }
      );
      console.log(response?.data);
      alert(`${type === "expense" ? "Expense" : "Income"} added successfully ✅`);
      e.target.reset();
    } catch (err) {
      console.log("Error :", err);
    }
  };

  // useEffect(() => {
  //   if (userId === null) {
  //     navigate("/user/login");
  //     return;
  //   }
  // }, [userId, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-300 via-green-200 to-green-300 dark:bg-gray-900 transition-all duration-500">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-md bg-green-100/70 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30 dark:border-gray-700 space-y-6 transition-all duration-500"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 tracking-wide">
          Add Transaction 💸
        </h2>

        {/* Toggle Expense / Income */}
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
              type === "expense"
                ? "bg-red-500 text-white shadow-lg shadow-red-300/40 dark:shadow-red-600/40"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Expense
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
              type === "income"
                ? "bg-green-500 text-white shadow-lg shadow-green-300/40 dark:shadow-green-600/40"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            Income
          </button>
        </div>

        {/* Amount */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="amnt"
            className="text-gray-700 dark:text-gray-300 font-medium"
          >
            Amount
          </label>
          <input
            type="number"
            id="amnt"
            name="expAmnt"
            placeholder="Enter amount"
            required
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="desc"
            className="text-gray-700 dark:text-gray-300 font-medium"
          >
            Description
          </label>
          <input
            type="text"
            id="desc"
            name="expDesc"
            placeholder="e.g. Lunch at cafe"
            required
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="cate"
            className="text-gray-700 dark:text-gray-300 font-medium"
          >
            Category
          </label>
          <select
            id="cate"
            name="expCate"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all"
          >
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
            <option value="rent">Rent</option>
            <option value="entertainment">Entertainment</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
        >
          Add {type === "expense" ? "Expense" : "Income"}
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
