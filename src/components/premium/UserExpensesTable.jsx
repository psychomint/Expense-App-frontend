import axios from "axios";
import React, { useEffect, useState } from "react";

const UserExpensesTable = ({data}) => {

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">User Expenses</h2>
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3 text-right">Total Expenses</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4 text-right font-semibold text-blue-600">
                  ₹ {user.totalExpense ? user.totalExpense : 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default UserExpensesTable;