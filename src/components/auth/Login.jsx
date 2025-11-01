import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            setLoading(true);
            const loginDeatails = {
                email:e.target.email.value,
                password:e.target.password.value
            }
            const response = await axios.post("http://localhost:3000/user/login",
                loginDeatails
            )
            localStorage.setItem("userId",response?.data);
            console.log(response?.data);
            setLoading(false);
            alert('Login Sucessfully');
            navigate('/expense');

        }
        catch(err){
            console.log("Error :", err);
        }
    }
  return (
      <form
        onSubmit={handleSubmit}
        className="relative w-[90%] max-w-md p-8 rounded-2xl bg-gradient-to-br from-green-300 via-green-200 to-green-300 backdrop-blur-xl shadow-2xl border border-white/30 dark:bg-gray-800/50 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100 tracking-wide">
          Welcome Back 👋
        </h2>

        <div className="flex flex-col gap-5">
          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="userEmail"
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all duration-200"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="password"
              className="text-gray-700 dark:text-gray-300 font-medium"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="userPassword"
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none dark:bg-gray-700 dark:text-white transition-all duration-200"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 dark:text-gray-300 hover:text-cyan-500 transition-colors"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-3 w-full py-3 font-semibold rounded-full text-white bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/40 flex justify-center items-center ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Login'
            )}
          </button>
        </div>

        {/* Optional links */}
        <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
          Don’t have an account?{' '}
          <a href="/user/signup" className="text-cyan-600 dark:text-cyan-400 hover:underline">
            Sign up
          </a>
        </p>
      </form>
  )
}

export default Login