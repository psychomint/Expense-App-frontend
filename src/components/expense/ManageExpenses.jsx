import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserExpensesTable from "../premium/UserExpensesTable";

const ManageExpenses = () => {
    const[data, setData] = useState([]);
    const [dataLead,setDataLead] = useState([]);
    const [showLeaderboard, setShowLeaderboard] = useState(false)
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const expenseList = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/expense/ManageExpenses/${userId}`);
            console.log("Expenses:", response.data);
            setData(response?.data);
        }
        catch(err){
            console.log("Error fetching expenses:", err);
        }
    }
    useEffect(()=>{
        if (!userId) {
            navigate('/user/login');
            return;
        }
        expenseList();
    },[localStorage.getItem("userId"), navigate]);
    
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

    const getLeaderboardData = async() => {
        const response = await axios.get(`http://localhost:3000/premium/showLeaderboard`);
        setDataLead(response?.data);
    }
    useEffect(() => {
            if (showLeaderboard) {
                getLeaderboardData(); 
            }
        }, [showLeaderboard]);

    const handleClickBtn = () => {
        setShowLeaderboard((prev) => !prev); 
    };
    
    const handleLogout = () => {
        localStorage.removeItem("userId");
        alert('You logged out!');
        navigate("/user/login");
    }

  return (
    
    <div className="p-8 max-w-5xl mx-auto relative">
    {/* Header */}
    <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
        💸 All Expenses
        </h2>

        {/* Logout Button */}
        <button
        className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold 
                    py-2.5 px-5 rounded-lg shadow-md hover:shadow-xl hover:from-red-600 hover:to-pink-700 
                    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                    cursor-pointer"
        onClick={handleLogout}
        >
        Log Out
        </button>
    </div>

    {/* Expenses Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((exp) => (
        <div
            key={exp.id}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 
                    flex flex-col justify-between hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
        >
            {/* Amount */}
            <div className="text-2xl font-bold text-green-600 mb-3">
            ₹{exp.expenseAmount}
            </div>

            {/* Description & Category */}
            <div className="mb-4 space-y-2">
            <p className="text-gray-800 font-medium">{exp.expenseDescription}</p>
            <span className="inline-block text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                {exp.expenseCategory}
            </span>
            </div>

            {/* Delete Button */}
            <button
            type="button"
            className="w-full py-2.5 bg-red-500 text-white rounded-lg font-semibold 
                        shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300
                        cursor-pointer"
            onClick={() => deleteExpense(exp.id)}
            >
            Delete
            </button>
        </div>
        ))}
    </div>

    {/* Leaderboard Button */}
    <div className="flex justify-center mt-10">
        <button
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold 
                    py-3 px-8 rounded-xl shadow-md hover:shadow-xl hover:from-blue-600 hover:to-indigo-700
                    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    cursor-pointer"
        onClick={handleClickBtn}
        >
        {showLeaderboard ? "Hide Leaderboard" : "Show Leaderboard"}
        </button>
    </div>

    {/* Leaderboard Table */}
    <div className="mt-8">
        {showLeaderboard && <UserExpensesTable data={dataLead} />}
    </div>
    </div>


  )
}

export default ManageExpenses