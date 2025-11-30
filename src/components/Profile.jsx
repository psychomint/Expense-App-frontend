import React from "react";
    const user = {
        name: "John Doe",
        email: "john@example.com",
        totalExpense: 2499.75,
        isPremium: true,
        created_at: "2024-10-12T14:48:00.000Z",
    };
const Profile = ({ user }) => {
  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-lg">Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 border border-gray-200">
      <div className="bg-indigo-600 text-white py-5 px-6">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <p className="text-sm text-indigo-200">{user.email}</p>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-gray-700 font-medium text-lg">Name</h3>
          <p className="text-gray-900">{user.name}</p>
        </div>

        <div>
          <h3 className="text-gray-700 font-medium text-lg">Total Expense</h3>
          <p className="text-gray-900">
            ₹ {parseFloat(user.totalExpense).toFixed(2)}
          </p>
        </div>

        <div>
          <h3 className="text-gray-700 font-medium text-lg">Account Type</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              user.isPremium
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {user.isPremium ? "Premium User" : "Free User"}
          </span>
        </div>

        <div>
          <h3 className="text-gray-700 font-medium text-lg">Member Since</h3>
          <p className="text-gray-900">
            {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
