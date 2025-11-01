import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    const signupDetails = {
      name: e.target.userName.value.trim(),
      email: e.target.userEmail.value.trim(),
      password: e.target.userPassword.value,
    };

    // Basic client-side validation
    if (!signupDetails.name || !signupDetails.email || !signupDetails.password) {
      alert("Please fill out all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        signupDetails
      );
      console.log(response?.data);
      alert("🎉 User registered successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Error:", err);
      alert("Signup failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (

      <form
        onSubmit={handleSubmitBtn}
        className="w-[90%] max-w-md bg-gradient-to-br from-green-300 via-green-200 to-green-300 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700 transition-all duration-500"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100 tracking-wide">
          Create Your Account ✨
        </h2>

        <div className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="userName"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              required
              placeholder="John Doe"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="userEmail"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              required
              placeholder="you@example.com"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="userPassword"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="userPassword"
              name="userPassword"
              required
              placeholder="••••••••"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 dark:text-gray-300 hover:text-cyan-500 transition"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-3 w-full py-3 font-semibold rounded-full text-white bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/40 flex justify-center items-center ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        {/* Optional Link */}
        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/user/login"
            className="text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            Log in
          </a>
        </p>
      </form>
  );
};

export default Signup;
