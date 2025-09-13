import axios from "axios";

const ForgetPassword = () => {

    const handleSubmitBtn = async (e) => {
        e.preventDefault();
        const email = e.target.userMail.value;
        try{
            console.log(email);
            const response = await axios.get('http://localhost:3000/password/forgot-password',{
                headers:{
                  email:email
                }
            });
            console.log(response?.data);
            alert('verfication mail sent');
            return;
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
      onSubmit={handleSubmitBtn}
      className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your registered email address and we’ll send you a reset link.
        </p>

        <div className="mb-4">
          <label
            htmlFor="mail"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="mail"
            name="userMail"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            We’ll send a reset link to your email.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
