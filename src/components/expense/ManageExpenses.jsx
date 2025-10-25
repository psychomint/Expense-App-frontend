import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserExpensesTable from "../premium/UserExpensesTable";
import ExpensesPagination from "../Pagination";

const ManageExpenses = () => {
    const[data, setData] = useState([]);
    const [dataLead,setDataLead] = useState([]);
    const [showLeaderboard, setShowLeaderboard] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(localStorage.getItem("rowsPage") || 5);
    const [totalPages,setTotalPages] = useState(5);
    const [deleteItem, setDeleteItem] = useState(true);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    
    const expenseList = async () => {
        try{
            const response = await axios.get(`http://localhost:3000/expense/ManageExpenses/${userId}`,{
                params: {
                    pageNumber: currentPage,     
                    rowsPerPage: rowsPerPage
                },
                headers:{
                    Authorization: `Bearer ${userId}`
                }
            });
            //console.log("Expenses:", response.data);
            setData(response?.data);
            setTotalPages(response?.data[0]?.totalPages);
        }
        catch(err){
            console.log("Error fetching expenses:", err);
        }
    }
    useEffect(()=>{
        expenseList();
    },[deleteItem , currentPage,rowsPerPage]);
    
    const deleteExpense = async(id) => {
        try{
            await axios.delete(`http://localhost:3000/expense/deleteExpenses/${id}`,
                {
                    headers:{
                        Authorization: `Bearer ${userId}`
                    }
                }
            );
            setData((prev)=> prev.filter((exp) => exp.id != id));
            const a = deleteItem;
            setDeleteItem(!a);
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
        }, [showLeaderboard,dataLead]);

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

    {/* Expenses Table */}
    <div className="p-6 md:p-10 overflow-x-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl">
    <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 uppercase text-sm font-semibold tracking-wide">
        <tr>
            <th className="px-6 py-3 border-b">Amount</th>
            <th className="px-6 py-3 border-b">Description</th>
            <th className="px-6 py-3 border-b">Category</th>
            <th className="px-6 py-3 border-b">Action</th>
        </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {data.map((exp) => (
            <tr
            key={exp.id}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
            >
            {/* Amount */}
            <td className="px-6 py-4 font-bold text-green-600 dark:text-green-400">
                ₹{exp.expenseAmount}
            </td>

            {/* Description */}
            <td className="px-6 py-4 text-gray-800 dark:text-gray-300">
                {exp.expenseDescription}
            </td>

            {/* Category */}
            <td className="px-6 py-4">
                <span className="inline-block text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                {exp.expenseCategory}
                </span>
            </td>

            {/* Delete Button */}
            <td className="px-6 py-4">
                <button
                type="button"
                onClick={() => deleteExpense(exp.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold shadow-md hover:bg-red-600 hover:scale-105 hover:shadow-lg transition transform duration-300"
                >
                Delete
                </button>
            </td>
            </tr>
        ))}
        </tbody>
    </table>

    {/* Pagination Controls */}
    <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
        <span>Rows per page:</span>
        <select
            value={rowsPerPage}
            onChange={(e) => {
            localStorage.setItem("rowsPage",Number(e.target.value));
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1); // reset to first page
            }}
            className="border rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
        >
            {[5, 10, 20, 50, 100].map((num) => (
            <option key={num} value={num}>
                {num}
            </option>
            ))}
        </select>
        </div>

        <ExpensesPagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        />
    </div>
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