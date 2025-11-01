import React, { useState } from 'react'
import { Link } from 'react-router';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(0);
    // const router = useRoutes();
    //0 - no dropdown
    //1 - Products dropdown opens
    //2 - Sports and Users opens
    //3 - Explore opens
    //4 - Pricing opens
  return (
    <div className='bg-gradient-to-br from-[#12d24c] via-[#68de9d] to-[#12a425]'>
        <nav className='m-1 px-8 h-16 flex gap-x-4 items-center justify-between bg-gradient-to-r from-[#2E3A59]  to-[#2E3A59] rounded-2xl shadow-lg text-[#FAFAFA] font-semibold text-lg'>
            <div className=''>
                <Link to="/">Logo</Link>
            </div>
            
            <div className='flex '>

                <div className="flex gap-x-6">
                    <div className='relative'>
                        <button className='flex flex-col px-2 py-1' onClick={(e)=>{setDropdown((dropdown === 1 ? 0 : 1));}}> ↓ Dashboard </button>
                        {(dropdown === 1) && 
                        <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-lg border border-gray-200 z-[9999] min-w-[12rem] py-2 px-4">
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                <Link to="/expense"> Overview </Link>
                            </div>
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                Summary
                            </div>
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                Insights
                            </div>
                        </div>
                        }
                    </div>
                </div>

                <div className="flex gap-x-6">
                    <div className='relative'>
                        <button className='flex flex-col px-2 py-1' onClick={(e)=>{setDropdown((dropdown === 2 ? 0 : 2));}}> ↓ Transactions </button>
                        {(dropdown === 2) && 
                        <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-lg border border-gray-200 z-[9999] min-w-[12rem] py-2 px-4">
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                <Link to='/expense/ManageExpenses'> All Transactions </Link>
                            </div>
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                <Link to='/expense/addExpense'> Add Expense/Income </Link>
                            </div>
                        </div>
                        }
                    </div>
                </div>

                <div className="flex gap-x-6">
                    <div className='relative'>
                        <button className='flex flex-col px-2 py-1' onClick={(e)=>{setDropdown((dropdown === 3 ? 0 : 3));}}> ↓ Reports </button>
                        {(dropdown === 3) && 
                        <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-lg border border-gray-200 z-[9999] min-w-[12rem] py-2 px-4">
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                Monthly Report
                            </div>
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                By Category
                            </div>
                        </div>
                        }
                    </div>
                </div>
                
                <div className="flex gap-x-6">
                    <div className='relative'>
                        <button className='flex flex-col px-2 py-1' onClick={(e)=>{setDropdown((dropdown === 4 ? 0 : 4));}}> ↓ Settings </button>
                        {(dropdown === 4) && 
                        <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg rounded-lg border border-gray-200 z-[9999] min-w-[12rem] py-2 px-4">
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                Profile
                            </div>
                            <div className="hover:bg-gray-100 cursor-pointer py-1 rounded transition duration-200">
                                Preferences
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className='flex gap-1'>
                <div className='bg-white text-[#19202e] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer'>
                    <Link to="/user/login"> Login </Link>
                </div>
                <div className='bg-white text-[#19202e] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer'>
                    Help Center
                </div>
                <div className='bg-white text-[#19202e] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer'>
                    Book a call
                </div>
                <div className='bg-white text-[#19202e] font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer'>
                    CF
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar