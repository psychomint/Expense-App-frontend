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
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add Transaction
        </h2>

        {/* Toggle Expense / Income */}
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`px-4 py-2 rounded-full font-medium ${
              type === "expense"
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Expense
          </button>
          <button
            type="button"
            onClick={() => setType("income")}
            className={`px-4 py-2 rounded-full font-medium ${
              type === "income"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Income
          </button>
        </div>

        {/* Amount */}
        <div>
          <label
            htmlFor="amnt"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amnt"
            name="expAmnt"
            placeholder="Enter amount"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="desc"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="desc"
            name="expDesc"
            placeholder="e.g. Lunch at cafe"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="cate"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            name="expCate"
            id="cate"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
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
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Add {type === "expense" ? "Expense" : "Income"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
