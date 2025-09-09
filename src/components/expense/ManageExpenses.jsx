import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ManageExpenses = () => {
    const[data, setData] = useState([]);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const expenseList = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/expense/ManageExpenses/${userId}`);
            console.log("Expenses:", response.data);
            setData(response?.data);
        }
        catch(err){
            console.error("Error fetching expenses:", err);
        }
    }
    useEffect(()=>{
        if (!userId) {
            navigate('/user/login');
            return;
        }
        expenseList();
    },[userId, navigate]);
    
    const deleteExpense = async(id) => {
        try{
            await axios.delete(`http://localhost:3000/expense/deleteExpenses/${id}`);
            setData((prev)=> prev.filter((exp) => exp.id != id));
            alert("Expense deleted successfully ✅");
        }
        catch(err){
            console.error("Error deleting expense:", err);
        }
        
    }
    
  return (
    <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">💸 All Expenses</h2>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((exp) => (
        <div
            key={exp.id}
            className="bg-white shadow-lg rounded-2xl p-5 border border-gray-200 flex flex-col justify-between hover:shadow-xl transition duration-300"
        >
            {/* Amount */}
            <div className="text-2xl font-bold text-green-600 mb-2">
            ₹{exp.expenseAmount}
            </div>

            {/* Description & Category */}
            <div className="mb-4">
            <p className="text-gray-700 font-medium">{exp.expenseDescription}</p>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {exp.expenseCategory}
            </span>
            </div>

            {/* Delete Button */}
            <button
            type="button"
            className="w-full py-2.5 bg-red-500 text-white rounded-xl font-medium 
                        shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => (deleteExpense(exp.id))}
            >
            Delete
            </button>
        </div>
        ))}
    </div>
    </div>

  )
}

export default ManageExpenses